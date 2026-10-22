# AdsEye iOS SDK 1.4.23 SPM 接入清单

生成组合：`core`  
最低系统：iOS 13.0

## 接入规则

1. 在 Xcode 中选择 **File > Add Package Dependencies...**，逐项添加下表 URL 和精确版本。
2. 将表中的 Product **直接添加到 App target**，不要通过本地聚合 Package 间接链接。
3. App target 的 `Other Linker Flags` 保留 `$(inherited) -ObjC`。
4. 仅下方“App 根目录资源”中列出的 bundle 需要加入 App target 的 **Copy Bundle Resources**。

## Package 列表

| Package | 来源 | 精确版本 | Product | URL |
| --- | --- | --- | --- | --- |
| `AdsEyeAdSDK` | `adseye` | `1.4.23` | `AdsEyeAdSDK` | https://github.com/AdsEye/AdsEyeSDK.git |

## Package.swift 片段

仅当宿主本身由 Swift Package 管理时使用。普通 `.xcodeproj` 项目仍应在 Xcode 中把 Product 直接添加到 App target。

```swift
dependencies: [
    .package(url: "https://github.com/AdsEye/AdsEyeSDK.git", exact: "1.4.23"),
]

// App target dependencies
[
    .product(name: "AdsEyeAdSDK", package: "adseyesdk"),
]
```

## 自动接入资源

以下资源已由 SwiftPM 自动复制，添加对应 Product 后无需手动拖入：

- `AdsEyeAdBundle.bundle`：由 `AdsEyeAdSDK` 自动交付。

从旧接入方式升级时，请移除 App target 中手工添加的同名 bundle 及其 Copy Bundle Resources 条目，避免旧资源优先命中。

## App 根目录资源

当前组合没有需要手工复制到 App 根目录的资源。

## 已知事项

