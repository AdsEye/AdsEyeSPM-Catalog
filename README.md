# AdsEye SPM Catalog

AdsEye iOS SDK 的版本化 Swift Package 接入目录。这个仓库只保存 **Package URL、精确版本、Product、组合关系和根目录资源规则**，不保存 SDK 二进制，也不作为聚合 Package 被媒体工程依赖。

## 为什么存在

- 每个 AdsEye SDK 版本对应一份不可变的 SPM 依赖快照，包括媒体直接 Product 和最终解析出的传递仓库。
- 从同一份结构化数据生成媒体接入清单，避免手工复制遗漏 Adapter。
- 区分 AdsEye 自有 Package、供应商官方 Package 和 AdsEye GitHub 镜像。
- 明确必须手工加入 App 根目录的资源 bundle。
- 保证 Xcode App target 直接添加实际 Product，不再使用隐藏 Objective-C 模块的聚合壳。

## 目录

```text
versions/<sdk-version>/catalog.yaml   # 每个 SDK 版本的唯一事实源
generated/<sdk-version>/              # 由脚本生成的媒体接入文档
templates/                            # 媒体文档模板
schema/                               # 清单结构定义
scripts/                              # 校验和生成脚本
docs/UPDATE_RULES.md                  # 新版本更新规则
latest.yaml                           # 当前推荐 SDK 版本指针
```

## 生成媒体清单

```bash
ruby scripts/generate_media_guide.rb --version 1.4.21 --profile full
ruby scripts/generate_media_guide.rb --version 1.4.21 --groups core,network,topon
```

可用 profile 由对应版本的 `catalog.yaml` 定义。生成结果默认写入 `generated/<version>/<profile>.md`。

## 校验

```bash
ruby scripts/validate_catalog.rb
ruby scripts/validate_catalog.rb --remote
```

`--remote` 会额外检查每个 GitHub 仓库是否存在清单声明的精确 tag。

## 核心规则

1. 只允许精确版本，不允许 branch、revision range 或 `from:`。
2. 媒体 App target 必须直接添加清单列出的 Product。
3. 官方 SPM 存在且版本可用时优先使用官方仓库。
4. AdsEye 镜像必须保持“一项可选能力一个仓库、一个主要 Product”。
5. `RootResources/` 中标记的 bundle 必须复制到 `YourApp.app/` 根目录。
6. 已发布版本默认不可修改；需要修正时发布补丁版本。仅在明确无人使用时才允许覆盖旧 tag，并记录原因。

完整规则见 [更新规则](docs/UPDATE_RULES.md)。
