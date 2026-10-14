# AdsEye iOS SDK 1.4.23 SPM 接入清单

生成组合：`core`  
最低系统：iOS 13.0

## 接入规则

1. 在 Xcode 中选择 **File > Add Package Dependencies...**，逐项添加下表 URL 和精确版本。
2. 将表中的 Product **直接添加到 App target**，不要通过本地聚合 Package 间接链接。
3. App target 的 `Other Linker Flags` 保留 `$(inherited) -ObjC`。
4. 下方列出的资源 bundle 必须加入 App target 的 **Copy Bundle Resources**，并最终位于 App 根目录。

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

## App 根目录资源

处理步骤：

1. 下载对应 Package 的精确 tag 源码 ZIP。
2. 解压后从表中的 `RootResources/` 路径取出整个 `.bundle`，拖入 Xcode。
3. 勾选 **Copy items if needed** 和 App target。
4. 在 **Build Phases > Copy Bundle Resources** 中确认资源只出现一次。
5. 构建后确认最终路径为 `YourApp.app/<BundleName>.bundle`。

| Bundle | 来源 Package | 下载 | 解压路径 | 最终路径 |
| --- | --- | --- | --- | --- |
| `AdsEyeAdBundle.bundle` | `AdsEyeAdSDK` `1.4.23` | [源码 ZIP](https://github.com/AdsEye/AdsEyeSDK/archive/refs/tags/1.4.23.zip) | `RootResources/AdsEyeAdBundle.bundle` | `YourApp.app/AdsEyeAdBundle.bundle` |

## 已知事项

