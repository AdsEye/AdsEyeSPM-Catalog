#!/usr/bin/env ruby
# frozen_string_literal: true

require 'erb'
require 'fileutils'
require 'optparse'
require 'yaml'

ROOT = File.expand_path('..', __dir__)

def load_yaml(path)
  YAML.load_file(path)
end

def package_identity(url)
  File.basename(url.to_s.sub(%r{/+\z}, ''), '.git').downcase
end

def repository_base_url(url)
  url.to_s.sub(/\.git\z/, '').sub(%r{/+\z}, '')
end

def source_archive_url(package)
  "#{repository_base_url(package.fetch('url'))}/archive/refs/tags/#{package.fetch('version')}.zip"
end

options = {
  version: nil,
  profile: nil,
  groups: nil,
  output: nil
}

OptionParser.new do |parser|
  parser.banner = '用法：ruby scripts/generate_media_guide.rb [--version 1.4.21] [--profile full | --groups core,topon]'
  parser.on('--version VERSION', 'AdsEye SDK 版本，默认读取 latest.yaml') { |value| options[:version] = value }
  parser.on('--profile NAME', '使用 catalog 中定义的媒体组合') { |value| options[:profile] = value }
  parser.on('--groups LIST', '直接指定逗号分隔的 group') { |value| options[:groups] = value.split(',').map(&:strip).reject(&:empty?) }
  parser.on('--output PATH', '输出 Markdown 路径') { |value| options[:output] = value }
end.parse!

latest = load_yaml(File.join(ROOT, 'latest.yaml'))
version = options[:version] || latest.fetch('sdk_version').to_s
catalog_path = File.join(ROOT, 'versions', version, 'catalog.yaml')
abort "找不到版本清单：#{catalog_path}" unless File.file?(catalog_path)

catalog = load_yaml(catalog_path)
profiles = catalog.fetch('profiles')
groups = catalog.fetch('groups')

if options[:groups]
  selected_groups = options[:groups]
  selection_name = selected_groups.join('+')
else
  profile_name = options[:profile] || 'full'
  profile = profiles.fetch(profile_name) { abort "不存在 profile：#{profile_name}" }
  selected_groups = profile.fetch('groups')
  selection_name = profile_name
end

unknown_groups = selected_groups.reject { |group| groups.key?(group) }
abort "不存在 group：#{unknown_groups.join(', ')}" unless unknown_groups.empty?

selected_ids = selected_groups.flat_map { |group| groups.fetch(group) }.uniq
all_package_records = catalog.fetch('packages') + Array(catalog['transitive_packages'])
package_by_id = all_package_records.to_h { |package| [package.fetch('id'), package] }
missing_packages = selected_ids.reject { |id| package_by_id.key?(id) }
abort "group 引用了不存在的 Package：#{missing_packages.join(', ')}" unless missing_packages.empty?

packages = selected_ids.map { |id| package_by_id.fetch(id) }
resources = catalog.fetch('resources').select do |resource|
  !(Array(resource['groups']) & selected_groups).empty?
end.map do |resource|
  source = package_by_id.fetch(resource.fetch('source_package'))
  resource.merge(
    'source_version' => source.fetch('version').to_s,
    'source_url' => source.fetch('url'),
    'source_archive_url' => source_archive_url(source)
  )
end
known_issues = Array(catalog['known_issues']).select do |issue|
  issue_groups = Array(issue['groups'])
  issue_groups.empty? || !(issue_groups & selected_groups).empty?
end

sdk_version = catalog.fetch('sdk').fetch('version').to_s
minimum_ios = catalog.fetch('sdk').fetch('minimum_ios').to_s
template_path = File.join(ROOT, 'templates', 'media-integration.md.erb')
output_path = options[:output] || File.join(ROOT, 'generated', version, "#{selection_name}.md")
rendered = ERB.new(File.read(template_path), trim_mode: '-').result(binding)

FileUtils.mkdir_p(File.dirname(output_path))
File.write(output_path, rendered)
puts "完成：#{output_path}"
puts "Package：#{packages.length}，Product：#{packages.sum { |item| item.fetch('products').length }}，根资源：#{resources.length}"
