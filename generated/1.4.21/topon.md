# AdsEye iOS SDK 1.4.21 SPM 接入清单

生成组合：`topon`  
最低系统：iOS 13.0

## 接入规则

1. 在 Xcode 中选择 **File > Add Package Dependencies...**，逐项添加下表 URL 和精确版本。
2. 将表中的 Product **直接添加到 App target**，不要通过本地聚合 Package 间接链接。
3. App target 的 `Other Linker Flags` 保留 `$(inherited) -ObjC`。
4. 下方列出的资源 bundle 必须加入 App target 的 **Copy Bundle Resources**，并最终位于 App 根目录。

## Package 列表

| Package | 来源 | 精确版本 | Product | URL |
| --- | --- | --- | --- | --- |
| `AdsEyeAdSDK` | `adseye` | `1.4.21` | `AdsEyeAdSDK` | https://github.com/AdsEye/AdsEyeSDK.git |
| `GoogleMobileAds` | `official` | `13.3.0` | `GoogleMobileAds` | https://github.com/googleads/swift-package-manager-google-mobile-ads.git |
| `FBAudienceNetwork` | `mirror` | `6.21.1` | `FBAudienceNetwork` | https://github.com/AdsEye/AdsEyeSPM-FBAudienceNetwork.git |
| `UnityAds` | `mirror` | `4.17.0` | `UnityAds` | https://github.com/AdsEye/AdsEyeSPM-UnityAds.git |
| `VungleAdsSDK` | `official` | `7.7.4` | `VungleAdsSDK` | https://github.com/Vungle/VungleAdsSDK-SwiftPackageManager.git |
| `InMobiSDK` | `mirror` | `11.1.1` | `InMobiSDK` | https://github.com/AdsEye/AdsEyeSPM-InMobiSDK.git |
| `MintegralAdSDK` | `official` | `8.0.8` | `MintegralAdSDK` | https://github.com/Mintegral-official/MintegralAdSDK-Swift-Package.git |
| `AdsGlobalPackage` | `mirror` | `8.1.0-pod.6` | `AdsGlobalPackage` | https://github.com/AdsEye/AdsEyeSPM-Ads-Global.git |
| `ChartboostSDK` | `mirror` | `9.11.0` | `ChartboostSDK` | https://github.com/AdsEye/AdsEyeSPM-ChartboostSDK.git |
| `YandexMobileAds` | `mirror` | `8.1.0` | `YandexMobileAds` | https://github.com/AdsEye/AdsEyeSPM-YandexMobileAds.git |
| `BigoADS` | `mirror` | `5.2.0` | `BigoADS` | https://github.com/AdsEye/AdsEyeSPM-BigoADS.git |
| `BidMachine` | `mirror` | `3.7.1` | `BidMachine` | https://github.com/AdsEye/AdsEyeSPM-BidMachine.git |
| `AppLovinSDK` | `official` | `13.6.0` | `AppLovinSDK` | https://github.com/AppLovin/AppLovin-MAX-Swift-Package.git |
| `AdsEyeTopOn` | `adseye` | `1.4.21` | `AdsEyeTopOn` | https://github.com/AdsEye/AdsEyeSDK-TopOn.git |
| `TPNiOS` | `mirror` | `6.5.74` | `TPNiOS` | https://github.com/AdsEye/AdsEyeSPM-TPNiOS.git |
| `TPNMediationAdmobAdapter` | `mirror` | `13.3.0-pod.2.0` | `TPNMediationAdmobAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationAdmobAdapter.git |
| `TPNMediationAdxSmartdigimktAdapter` | `mirror` | `6.5.65-pod.0` | `TPNMediationAdxSmartdigimktAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationAdxSmartdigimktAdapter.git |
| `TPNMediationVungleAdapter` | `mirror` | `7.7.4-pod.2.1` | `TPNMediationVungleAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationVungleAdapter.git |
| `TPNMediationUnityAdsAdapter` | `mirror` | `4.17.0-pod.0` | `TPNMediationUnityAdsAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationUnityAdsAdapter.git |
| `TPNMediationBigoAdapter` | `mirror` | `5.2.0-pod.2.0` | `TPNMediationBigoAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationBigoAdapter.git |
| `TPNMediationPangleAdapter` | `mirror` | `8.1.0-pod.6.2.0` | `TPNMediationPangleAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationPangleAdapter.git |
| `TPNMediationFacebookAdapter` | `mirror` | `6.21.1-pod.0` | `TPNMediationFacebookAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationFacebookAdapter.git |
| `TPNMediationChartboostAdapter` | `mirror` | `9.11.0-pod.2.0` | `TPNMediationChartboostAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationChartboostAdapter.git |
| `TPNMediationInmobiAdapter` | `mirror` | `11.1.1-pod.0` | `TPNMediationInmobiAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationInmobiAdapter.git |
| `TPNMediationApplovinAdapter` | `mirror` | `13.6.0-pod.2.1` | `TPNMediationApplovinAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationApplovinAdapter.git |
| `TPNMediationMintegralAdapter` | `mirror` | `8.0.8-pod.0` | `TPNMediationMintegralAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationMintegralAdapter.git |
| `TPNMediationBidMachineAdapter` | `mirror` | `3.7.1-pod.2.1` | `TPNMediationBidMachineAdapter` | https://github.com/AdsEye/AdsEyeSPM-TPNMediationBidMachineAdapter.git |
| `AdsEyeTPNMediationYandexAdapter` | `mirror` | `8.0.0-pod.2.0` | `AdsEyeTPNMediationYandexAdapter` | https://github.com/AdsEye/AdsEyeSPM-AdsEyeTPNMediationYandexAdapter.git |

## Package.swift 片段

仅当宿主本身由 Swift Package 管理时使用。普通 `.xcodeproj` 项目仍应在 Xcode 中把 Product 直接添加到 App target。

```swift
dependencies: [
    .package(url: "https://github.com/AdsEye/AdsEyeSDK.git", exact: "1.4.21"),
    .package(url: "https://github.com/googleads/swift-package-manager-google-mobile-ads.git", exact: "13.3.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-FBAudienceNetwork.git", exact: "6.21.1"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-UnityAds.git", exact: "4.17.0"),
    .package(url: "https://github.com/Vungle/VungleAdsSDK-SwiftPackageManager.git", exact: "7.7.4"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-InMobiSDK.git", exact: "11.1.1"),
    .package(url: "https://github.com/Mintegral-official/MintegralAdSDK-Swift-Package.git", exact: "8.0.8"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-Ads-Global.git", exact: "8.1.0-pod.6"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-ChartboostSDK.git", exact: "9.11.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-YandexMobileAds.git", exact: "8.1.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-BigoADS.git", exact: "5.2.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-BidMachine.git", exact: "3.7.1"),
    .package(url: "https://github.com/AppLovin/AppLovin-MAX-Swift-Package.git", exact: "13.6.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSDK-TopOn.git", exact: "1.4.21"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNiOS.git", exact: "6.5.74"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationAdmobAdapter.git", exact: "13.3.0-pod.2.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationAdxSmartdigimktAdapter.git", exact: "6.5.65-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationVungleAdapter.git", exact: "7.7.4-pod.2.1"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationUnityAdsAdapter.git", exact: "4.17.0-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationBigoAdapter.git", exact: "5.2.0-pod.2.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationPangleAdapter.git", exact: "8.1.0-pod.6.2.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationFacebookAdapter.git", exact: "6.21.1-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationChartboostAdapter.git", exact: "9.11.0-pod.2.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationInmobiAdapter.git", exact: "11.1.1-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationApplovinAdapter.git", exact: "13.6.0-pod.2.1"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationMintegralAdapter.git", exact: "8.0.8-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TPNMediationBidMachineAdapter.git", exact: "3.7.1-pod.2.1"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AdsEyeTPNMediationYandexAdapter.git", exact: "8.0.0-pod.2.0"),
]

// App target dependencies
[
    .product(name: "AdsEyeAdSDK", package: "adseyesdk"),
    .product(name: "GoogleMobileAds", package: "swift-package-manager-google-mobile-ads"),
    .product(name: "FBAudienceNetwork", package: "adseyespm-fbaudiencenetwork"),
    .product(name: "UnityAds", package: "adseyespm-unityads"),
    .product(name: "VungleAdsSDK", package: "vungleadssdk-swiftpackagemanager"),
    .product(name: "InMobiSDK", package: "adseyespm-inmobisdk"),
    .product(name: "MintegralAdSDK", package: "mintegraladsdk-swift-package"),
    .product(name: "AdsGlobalPackage", package: "adseyespm-ads-global"),
    .product(name: "ChartboostSDK", package: "adseyespm-chartboostsdk"),
    .product(name: "YandexMobileAds", package: "adseyespm-yandexmobileads"),
    .product(name: "BigoADS", package: "adseyespm-bigoads"),
    .product(name: "BidMachine", package: "adseyespm-bidmachine"),
    .product(name: "AppLovinSDK", package: "applovin-max-swift-package"),
    .product(name: "AdsEyeTopOn", package: "adseyesdk-topon"),
    .product(name: "TPNiOS", package: "adseyespm-tpnios"),
    .product(name: "TPNMediationAdmobAdapter", package: "adseyespm-tpnmediationadmobadapter"),
    .product(name: "TPNMediationAdxSmartdigimktAdapter", package: "adseyespm-tpnmediationadxsmartdigimktadapter"),
    .product(name: "TPNMediationVungleAdapter", package: "adseyespm-tpnmediationvungleadapter"),
    .product(name: "TPNMediationUnityAdsAdapter", package: "adseyespm-tpnmediationunityadsadapter"),
    .product(name: "TPNMediationBigoAdapter", package: "adseyespm-tpnmediationbigoadapter"),
    .product(name: "TPNMediationPangleAdapter", package: "adseyespm-tpnmediationpangleadapter"),
    .product(name: "TPNMediationFacebookAdapter", package: "adseyespm-tpnmediationfacebookadapter"),
    .product(name: "TPNMediationChartboostAdapter", package: "adseyespm-tpnmediationchartboostadapter"),
    .product(name: "TPNMediationInmobiAdapter", package: "adseyespm-tpnmediationinmobiadapter"),
    .product(name: "TPNMediationApplovinAdapter", package: "adseyespm-tpnmediationapplovinadapter"),
    .product(name: "TPNMediationMintegralAdapter", package: "adseyespm-tpnmediationmintegraladapter"),
    .product(name: "TPNMediationBidMachineAdapter", package: "adseyespm-tpnmediationbidmachineadapter"),
    .product(name: "AdsEyeTPNMediationYandexAdapter", package: "adseyespm-adseyetpnmediationyandexadapter"),
]
```

## App 根目录资源

| Bundle | 来源 Package | 仓库路径 | 最终路径 |
| --- | --- | --- | --- |
| `AdsEyeAdBundle.bundle` | `AdsEyeAdSDK` | `RootResources/AdsEyeAdBundle.bundle` | `YourApp.app/AdsEyeAdBundle.bundle` |
| `PAGAdSDK.bundle` | `AdsGlobalPackage` | `RootResources/PAGAdSDK.bundle` | `YourApp.app/PAGAdSDK.bundle` |
| `SmartdigimktSDK.bundle` | `SmartdigimktSDK` | `RootResources/SmartdigimktSDK.bundle` | `YourApp.app/SmartdigimktSDK.bundle` |

## 已知事项

- **GoogleMobileAds 13.3.0 Beta umbrella 警告**：Xcode 26 会对 Google 官方 XCFramework 中未加入稳定 umbrella/modulemap 的 9 个 _Beta.h 报 incomplete umbrella；构建可成功。优先等待供应商修复，必要时仅在宿主 target 使用 -Wno-incomplete-umbrella，不修改供应商二进制。
- **TikTokBusinessSDK 冲突边界**：AdsGlobalPackage 默认不引入 TikTokBusinessSDK。媒体已有 TikTokBusinessSDK 时不要选择 ads_global_tiktok group。
