#!/usr/bin/env ruby
# frozen_string_literal: true

require 'open3'
require 'optparse'
require 'uri'
require 'yaml'

ROOT = File.expand_path('..', __dir__)
options = { remote: false }

OptionParser.new do |parser|
  parser.banner = '用法：ruby scripts/validate_catalog.rb [--remote]'
  parser.on('--remote', '额外检查 GitHub 精确 tag') { options[:remote] = true }
end.parse!

def fail_with(message)
  warn "校验失败：#{message}"
  exit 1
end

latest = YAML.load_file(File.join(ROOT, 'latest.yaml'))
latest_version = latest.fetch('sdk_version').to_s
catalog_files = Dir.glob(File.join(ROOT, 'versions', '*', 'catalog.yaml')).sort
fail_with('没有版本清单') if catalog_files.empty?

catalog_files.each do |path|
  catalog = YAML.load_file(path)
  sdk = catalog.fetch('sdk')
  version = sdk.fetch('version').to_s
  directory_version = File.basename(File.dirname(path))
  fail_with("目录版本与 sdk.version 不一致：#{path}") unless version == directory_version
  fail_with("平台必须是 ios：#{path}") unless sdk.fetch('platform') == 'ios'

  packages = catalog.fetch('packages')
  ids = packages.map { |package| package.fetch('id') }
  duplicates = ids.group_by(&:itself).select { |_id, values| values.length > 1 }.keys
  fail_with("Package id 重复：#{duplicates.join(', ')}") unless duplicates.empty?

  products = []
  packages.each do |package|
    id = package.fetch('id')
    url = package.fetch('url')
    package_version = package.fetch('version').to_s
    origin = package.fetch('origin')
    package_products = Array(package.fetch('products'))

    fail_with("#{id} URL 必须是 HTTPS GitHub .git：#{url}") unless url.match?(%r{\Ahttps://github\.com/.+\.git\z})
    fail_with("#{id} 缺少精确版本") if package_version.empty?
    fail_with("#{id} 缺少 Product") if package_products.empty?
    fail_with("#{id} origin 无效：#{origin}") unless %w[adseye official mirror].include?(origin)
    products.concat(package_products.map { |product| [product, id] })

    next unless options[:remote]

    stdout, stderr, status = Open3.capture3('git', 'ls-remote', '--exit-code', '--tags', url, "refs/tags/#{package_version}")
    fail_with("#{id} 缺少远端 tag #{package_version}：#{stderr.strip}") unless status.success? && !stdout.strip.empty?
  end

  transitive_packages = Array(catalog['transitive_packages'])
  transitive_ids = transitive_packages.map { |package| package.fetch('id') }
  duplicate_transitive_ids = transitive_ids.group_by(&:itself).select { |_id, values| values.length > 1 }.keys
  fail_with("传递 Package id 重复：#{duplicate_transitive_ids.join(', ')}") unless duplicate_transitive_ids.empty?
  fail_with("直接与传递 Package id 重复：#{(ids & transitive_ids).join(', ')}") unless (ids & transitive_ids).empty?

  transitive_packages.each do |package|
    id = package.fetch('id')
    url = package.fetch('url')
    package_version = package.fetch('version').to_s
    fail_with("#{id} URL 必须是 HTTPS GitHub .git：#{url}") unless url.match?(%r{\Ahttps://github\.com/.+\.git\z})
    fail_with("#{id} 缺少精确版本") if package_version.empty?
    missing_parents = Array(package['required_by']).reject { |parent_id| ids.include?(parent_id) }
    fail_with("#{id} required_by 引用了不存在的直接 Package：#{missing_parents.join(', ')}") unless missing_parents.empty?

    next unless options[:remote]

    stdout, stderr, status = Open3.capture3('git', 'ls-remote', '--exit-code', '--tags', url, "refs/tags/#{package_version}")
    fail_with("#{id} 缺少远端 tag #{package_version}：#{stderr.strip}") unless status.success? && !stdout.strip.empty?
  end

  duplicate_products = products.group_by(&:first).select { |_product, values| values.map(&:last).uniq.length > 1 }
  fail_with("Product 由多个 Package 提供：#{duplicate_products.keys.join(', ')}") unless duplicate_products.empty?

  groups = catalog.fetch('groups')
  groups.each do |name, package_ids|
    missing = Array(package_ids).reject { |id| ids.include?(id) }
    fail_with("group #{name} 引用了不存在的 Package：#{missing.join(', ')}") unless missing.empty?
  end

  catalog.fetch('profiles').each do |name, profile|
    missing = Array(profile.fetch('groups')).reject { |group| groups.key?(group) }
    fail_with("profile #{name} 引用了不存在的 group：#{missing.join(', ')}") unless missing.empty?
  end

  mediations = catalog.fetch('mediations')
  networks = catalog.fetch('networks')
  mediations.each do |name, mediation|
    missing = Array(mediation.fetch('packages')).reject { |id| ids.include?(id) }
    fail_with("mediation #{name} 引用了不存在的 Package：#{missing.join(', ')}") unless missing.empty?
    missing_networks = Array(mediation['required_networks']).reject { |id| networks.key?(id) }
    fail_with("mediation #{name} 引用了不存在的必选 network：#{missing_networks.join(', ')}") unless missing_networks.empty?
  end

  networks.each do |name, network|
    referenced = Array(network.fetch('sdk_packages'))
    network.fetch('adapters').each do |mediation, adapter_ids|
      fail_with("network #{name} 引用了不存在的 mediation：#{mediation}") unless mediations.key?(mediation)
      referenced.concat(Array(adapter_ids))
    end
    missing = referenced.reject { |id| ids.include?(id) }
    fail_with("network #{name} 引用了不存在的 Package：#{missing.join(', ')}") unless missing.empty?
  end

  catalog.fetch('resources').each do |resource|
    source_package = resource.fetch('source_package')
    all_ids = ids + transitive_ids
    fail_with("资源 #{resource.fetch('bundle')} 来源 Package 不存在：#{source_package}") unless all_ids.include?(source_package)
    missing_groups = Array(resource.fetch('groups')).reject { |group| groups.key?(group) }
    fail_with("资源 #{resource.fetch('bundle')} group 不存在：#{missing_groups.join(', ')}") unless missing_groups.empty?
    missing_triggers = Array(resource.fetch('trigger_packages')).reject { |id| all_ids.include?(id) }
    fail_with("资源 #{resource.fetch('bundle')} trigger Package 不存在：#{missing_triggers.join(', ')}") unless missing_triggers.empty?
  end

  puts "通过：#{version}，直接 Package #{packages.length}，传递 Package #{transitive_packages.length}，Product #{products.length}"
end

latest_catalog = File.join(ROOT, latest.fetch('catalog'))
fail_with("latest.yaml 指向的清单不存在：#{latest_catalog}") unless File.file?(latest_catalog)
fail_with('latest.yaml 的 sdk_version 与 catalog 路径不一致') unless latest_catalog.include?("/#{latest_version}/")
