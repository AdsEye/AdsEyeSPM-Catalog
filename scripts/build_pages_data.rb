#!/usr/bin/env ruby
# frozen_string_literal: true

require 'digest'
require 'fileutils'
require 'json'
require 'yaml'

ROOT = File.expand_path('..', __dir__)
OUTPUT_ROOT = File.join(ROOT, 'site', 'data')

catalog_paths = Dir.glob(File.join(ROOT, 'versions', '*', 'catalog.yaml')).sort
abort '没有可用于 Pages 的版本清单' if catalog_paths.empty?

FileUtils.mkdir_p(OUTPUT_ROOT)
versions = catalog_paths.map do |path|
  raw = File.read(path)
  catalog = YAML.safe_load(raw, permitted_classes: [], aliases: false)
  sdk = catalog.fetch('sdk')
  version = sdk.fetch('version').to_s
  catalog['catalog_digest'] = Digest::SHA256.hexdigest(raw)
  File.write(File.join(OUTPUT_ROOT, "#{version}.json"), JSON.pretty_generate(catalog) + "\n")

  {
    'version' => version,
    'released_on' => sdk.fetch('released_on').to_s,
    'minimum_ios' => sdk.fetch('minimum_ios').to_s,
    'catalog_tag' => sdk.fetch('catalog_tag').to_s,
    'path' => "data/#{version}.json"
  }
end

latest = YAML.safe_load(File.read(File.join(ROOT, 'latest.yaml')), permitted_classes: [], aliases: false)
index = {
  'schema_version' => 1,
  'latest' => latest.fetch('sdk_version').to_s,
  'versions' => versions.reverse
}
File.write(File.join(OUTPUT_ROOT, 'index.json'), JSON.pretty_generate(index) + "\n")
puts "完成：Pages 数据已生成，共 #{versions.length} 个版本"
