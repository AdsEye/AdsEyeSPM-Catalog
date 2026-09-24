# 版本清单更新规则

## 数据边界

本仓库记录接入元数据，不托管二进制。二进制仍由各 Package 自己的 `Package.swift` 指向供应商 CDN、GitHub Release 或 AdsEye OSS。

`versions/<version>/catalog.yaml` 是唯一事实源，生成文档不得手工修改。

## 新版本流程

1. 冻结准备发布的 `Podfile` 和 `Podfile.lock`。
2. 为新 SDK 版本复制上一版目录，不直接修改上一版。
3. 对照 Podfile 的 mediation 区块逐项更新 Package URL、精确 tag 和 Product。
4. 官方 Package 必须确认仓库、tag、Product 三者同时存在。
5. 镜像 Package 必须先完成分发授权判断和 GitHub 发布。
6. 更新 `groups`、`profiles`、`resources` 和 `known_issues`。
7. 执行本地结构校验和远端 tag 校验。
8. 重新生成所有 profile 文档并提交。
9. 更新 `latest.yaml`。
10. 合并后创建 `ios-<SDK版本>` tag。

## 修改规则

- 未发布目录可以修改。
- 已发布目录不可修改已有 Package 版本，只能新增说明性字段或修复明显的数据错误。
- 已有媒体使用后，禁止覆盖 Package tag 和 Catalog tag。
- 紧急修复必须增加 AdsEye SDK 补丁版本，并新建版本目录。
- 在确认无人使用的预发布阶段覆盖 tag，PR 必须写明原因、旧 revision、新 revision 和缓存清理方式。

## Package 记录规则

- `origin: adseye`：AdsEye 自有 Core、ADX 或聚合 Adapter。
- `origin: official`：供应商官方 Swift Package。
- `origin: mirror`：AdsEye 维护的第三方 SPM 镜像。
- 每条记录必须有唯一 `id`、HTTPS GitHub URL、精确 `version` 和至少一个 `product`。
- `id` 默认使用 Product 名称；同一 Product 不得由两个仓库重复提供。
- `transitive_packages` 只锁定最终解析图中的传递仓库，不会进入媒体直接 Product 清单。
- `transitive_packages.required_by` 必须记录产生该传递依赖的直接 Package，禁止根据 SDK 名称猜测归属。
- 每次发布必须对照验证工程的 `Package.resolved`，确保传递仓库没有漏记。

## Profile 规则

- `core` 只包含 AdsEye Core。
- `network` 保存多个聚合共用的广告平台 SDK。
- `topon`、`applovin`、`tradplus`、`admob` 只包含该聚合 Core/Adapter。
- Profile 通过 group 组合生成，禁止在生成文档里手工增加依赖。
- 媒体只接入实际使用的聚合和 Adapter，不得把 `full` 作为默认生产配置。

## 资源规则

- `copy_to_app_root: true` 表示资源必须最终位于 `YourApp.app/<Bundle>.bundle`。
- 不允许把这类资源放进 SwiftPM 自动生成的 `<Package>_<Target>.bundle`。
- 新增或升级二进制时必须审计其 `NSBundle mainBundle`、`pathForResource:` 和资源 bundle 查找方式。

## 文档交付规则

- 媒体文档只展示选定 profile/group 的依赖。
- 同时列出 Package URL、精确版本和 Product。
- 明确提醒 Product 必须直接加入 App target。
- 明确列出需要加入 Copy Bundle Resources 的根目录资源。
- 已通过其他方式接入 TikTokBusinessSDK 时，不得再添加 AdsGlobalTikTokBusinessSDK。
