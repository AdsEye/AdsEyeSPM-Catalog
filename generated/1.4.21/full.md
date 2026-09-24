# AdsEye iOS SDK 1.4.21 SPM 接入清单

生成组合：`full`  
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
| `AdsEyeADXSDK` | `adseye` | `1.4.21` | `AdsEyeADXSDK` | https://github.com/AdsEye/AdsEyeSDK-ADX.git |
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
| `GoogleUserMessagingPlatform` | `official` | `3.1.0` | `GoogleUserMessagingPlatform` | https://github.com/googleads/swift-package-manager-google-user-messaging-platform.git |
| `AdsEyeAppLovin` | `adseye` | `1.4.21` | `AdsEyeAppLovin` | https://github.com/AdsEye/AdsEyeSDK-AppLovin.git |
| `AppLovinMediationGoogleAdapter` | `mirror` | `13.3.0-pod.0` | `AppLovinMediationGoogleAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationGoogleAdapter.git |
| `AppLovinMediationFacebookAdapter` | `mirror` | `6.21.1-pod.0` | `AppLovinMediationFacebookAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationFacebookAdapter.git |
| `AppLovinMediationBigoAdsAdapter` | `mirror` | `5.2.0-pod.0` | `AppLovinMediationBigoAdsAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationBigoAdsAdapter.git |
| `AppLovinMediationByteDanceAdapter` | `mirror` | `8.1.0-pod.6.0` | `AppLovinMediationByteDanceAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationByteDanceAdapter.git |
| `AppLovinMediationChartboostAdapter` | `mirror` | `9.11.0-pod.0` | `AppLovinMediationChartboostAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationChartboostAdapter.git |
| `AppLovinMediationInMobiAdapter` | `mirror` | `11.1.1-pod.0` | `AppLovinMediationInMobiAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationInMobiAdapter.git |
| `AppLovinMediationMintegralAdapter` | `mirror` | `8.0.8-pod.0.0` | `AppLovinMediationMintegralAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationMintegralAdapter.git |
| `AppLovinMediationUnityAdsAdapter` | `mirror` | `4.17.0-pod.0` | `AppLovinMediationUnityAdsAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationUnityAdsAdapter.git |
| `AppLovinMediationYandexAdapter` | `mirror` | `8.1.0-pod.1` | `AppLovinMediationYandexAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationYandexAdapter.git |
| `AppLovinMediationVungleAdapter` | `mirror` | `7.7.4-pod.0` | `AppLovinMediationVungleAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationVungleAdapter.git |
| `AppLovinMediationBidMachineAdapter` | `mirror` | `3.7.1-pod.0.0` | `AppLovinMediationBidMachineAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationBidMachineAdapter.git |
| `AppLovinMediationGoogleAdManagerAdapter` | `mirror` | `13.3.0-pod.0` | `AppLovinMediationGoogleAdManagerAdapter` | https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationGoogleAdManagerAdapter.git |
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
| `AdsEyeTradPlus` | `adseye` | `1.4.21` | `AdsEyeTradPlus` | https://github.com/AdsEye/AdsEyeSDK-TradPlus.git |
| `TradPlusAdSDK` | `mirror` | `15.10.0` | `TradPlusAdSDK` | https://github.com/AdsEye/AdsEyeSPM-TradPlusAdSDK.git |
| `TradPlusAdMobAdapter` | `mirror` | `15.10.0` | `TradPlusAdMobAdapter` | https://github.com/AdsEye/AdsEyeSPM-TradPlusAdMobAdapter.git |
| `TradPlusFacebookAdapter` | `mirror` | `15.10.0` | `TradPlusFacebookAdapter` | https://github.com/AdsEye/AdsEyeSPM-TradPlusFacebookAdapter.git |
| `TradPlusUnityAdapter` | `mirror` | `15.10.0` | `TradPlusUnityAdapter` | https://github.com/AdsEye/AdsEyeSPM-TradPlusUnityAdapter.git |
| `TradPlusAppLovinAdapter` | `mirror` | `15.10.0` | `TradPlusAppLovinAdapter` | https://github.com/AdsEye/AdsEyeSPM-TradPlusAppLovinAdapter.git |
| `TradPlusVungleAdapter` | `mirror` | `15.10.0` | `TradPlusVungleAdapter` | https://github.com/AdsEye/AdsEyeSPM-TradPlusVungleAdapter.git |
| `TradPlusInMobiAdapter` | `mirror` | `15.10.0` | `TradPlusInMobiAdapter` | https://github.com/AdsEye/AdsEyeSPM-TradPlusInMobiAdapter.git |
| `TradPlusMintegralAdapter` | `mirror` | `15.10.0` | `TradPlusMintegralAdapter` | https://github.com/AdsEye/AdsEyeSPM-TradPlusMintegralAdapter.git |
| `TradPlusPangleAdapter` | `mirror` | `15.10.0` | `TradPlusPangleAdapter` | https://github.com/AdsEye/AdsEyeSPM-TradPlusPangleAdapter.git |
| `TradPlusTPCrossAdapter` | `mirror` | `15.10.0` | `TradPlusTPCrossAdapter` | https://github.com/AdsEye/AdsEyeSPM-TradPlusTPCrossAdapter.git |
| `TradPlusYandexAdapter` | `mirror` | `15.10.0` | `TradPlusYandexAdapter` | https://github.com/AdsEye/AdsEyeSPM-TradPlusYandexAdapter.git |
| `TradPlusBigoAdapter` | `mirror` | `15.10.0` | `TradPlusBigoAdapter` | https://github.com/AdsEye/AdsEyeSPM-TradPlusBigoAdapter.git |
| `AdsEyeAdMob` | `adseye` | `1.4.21` | `AdsEyeAdMob` | https://github.com/AdsEye/AdsEyeSDK-AdMob.git |
| `GoogleMobileAdsMediationAppLovin` | `mirror` | `13.6.0-pod.0` | `GoogleMobileAdsMediationAppLovin` | https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationAppLovin.git |
| `GoogleMobileAdsMediationMintegral` | `mirror` | `8.0.8-pod.0` | `GoogleMobileAdsMediationMintegral` | https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationMintegral.git |
| `GoogleMobileAdsMediationUnity` | `mirror` | `4.17.0-pod.0` | `GoogleMobileAdsMediationUnity` | https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationUnity.git |
| `GoogleMobileAdsMediationVungle` | `mirror` | `7.7.4-pod.0` | `GoogleMobileAdsMediationVungle` | https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationVungle.git |
| `GoogleMobileAdsMediationInMobi` | `mirror` | `11.1.1-pod.1` | `GoogleMobileAdsMediationInMobi` | https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationInMobi.git |
| `GoogleMobileAdsMediationBidMachine` | `mirror` | `3.7.1-pod.0.1` | `GoogleMobileAdsMediationBidMachine` | https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationBidMachine.git |
| `GoogleMobileAdsMediationFacebook` | `mirror` | `6.21.1-pod.0` | `GoogleMobileAdsMediationFacebook` | https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationFacebook.git |
| `GoogleMobileAdsMediationPangle` | `mirror` | `8.1.0-pod.6.0` | `GoogleMobileAdsMediationPangle` | https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationPangle.git |
| `GoogleMobileAdsMediationBigo` | `mirror` | `5.2.0-pod.0` | `GoogleMobileAdsMediationBigo` | https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationBigo.git |

## Package.swift 片段

仅当宿主本身由 Swift Package 管理时使用。普通 `.xcodeproj` 项目仍应在 Xcode 中把 Product 直接添加到 App target。

```swift
dependencies: [
    .package(url: "https://github.com/AdsEye/AdsEyeSDK.git", exact: "1.4.21"),
    .package(url: "https://github.com/AdsEye/AdsEyeSDK-ADX.git", exact: "1.4.21"),
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
    .package(url: "https://github.com/googleads/swift-package-manager-google-user-messaging-platform.git", exact: "3.1.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSDK-AppLovin.git", exact: "1.4.21"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationGoogleAdapter.git", exact: "13.3.0-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationFacebookAdapter.git", exact: "6.21.1-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationBigoAdsAdapter.git", exact: "5.2.0-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationByteDanceAdapter.git", exact: "8.1.0-pod.6.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationChartboostAdapter.git", exact: "9.11.0-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationInMobiAdapter.git", exact: "11.1.1-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationMintegralAdapter.git", exact: "8.0.8-pod.0.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationUnityAdsAdapter.git", exact: "4.17.0-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationYandexAdapter.git", exact: "8.1.0-pod.1"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationVungleAdapter.git", exact: "7.7.4-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationBidMachineAdapter.git", exact: "3.7.1-pod.0.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-AppLovinMediationGoogleAdManagerAdapter.git", exact: "13.3.0-pod.0"),
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
    .package(url: "https://github.com/AdsEye/AdsEyeSDK-TradPlus.git", exact: "1.4.21"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusAdSDK.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusAdMobAdapter.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusFacebookAdapter.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusUnityAdapter.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusAppLovinAdapter.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusVungleAdapter.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusInMobiAdapter.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusMintegralAdapter.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusPangleAdapter.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusTPCrossAdapter.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusYandexAdapter.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-TradPlusBigoAdapter.git", exact: "15.10.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSDK-AdMob.git", exact: "1.4.21"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationAppLovin.git", exact: "13.6.0-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationMintegral.git", exact: "8.0.8-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationUnity.git", exact: "4.17.0-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationVungle.git", exact: "7.7.4-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationInMobi.git", exact: "11.1.1-pod.1"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationBidMachine.git", exact: "3.7.1-pod.0.1"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationFacebook.git", exact: "6.21.1-pod.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationPangle.git", exact: "8.1.0-pod.6.0"),
    .package(url: "https://github.com/AdsEye/AdsEyeSPM-GoogleMobileAdsMediationBigo.git", exact: "5.2.0-pod.0"),
]

// App target dependencies
[
    .product(name: "AdsEyeAdSDK", package: "adseyesdk"),
    .product(name: "AdsEyeADXSDK", package: "adseyesdk-adx"),
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
    .product(name: "GoogleUserMessagingPlatform", package: "swift-package-manager-google-user-messaging-platform"),
    .product(name: "AdsEyeAppLovin", package: "adseyesdk-applovin"),
    .product(name: "AppLovinMediationGoogleAdapter", package: "adseyespm-applovinmediationgoogleadapter"),
    .product(name: "AppLovinMediationFacebookAdapter", package: "adseyespm-applovinmediationfacebookadapter"),
    .product(name: "AppLovinMediationBigoAdsAdapter", package: "adseyespm-applovinmediationbigoadsadapter"),
    .product(name: "AppLovinMediationByteDanceAdapter", package: "adseyespm-applovinmediationbytedanceadapter"),
    .product(name: "AppLovinMediationChartboostAdapter", package: "adseyespm-applovinmediationchartboostadapter"),
    .product(name: "AppLovinMediationInMobiAdapter", package: "adseyespm-applovinmediationinmobiadapter"),
    .product(name: "AppLovinMediationMintegralAdapter", package: "adseyespm-applovinmediationmintegraladapter"),
    .product(name: "AppLovinMediationUnityAdsAdapter", package: "adseyespm-applovinmediationunityadsadapter"),
    .product(name: "AppLovinMediationYandexAdapter", package: "adseyespm-applovinmediationyandexadapter"),
    .product(name: "AppLovinMediationVungleAdapter", package: "adseyespm-applovinmediationvungleadapter"),
    .product(name: "AppLovinMediationBidMachineAdapter", package: "adseyespm-applovinmediationbidmachineadapter"),
    .product(name: "AppLovinMediationGoogleAdManagerAdapter", package: "adseyespm-applovinmediationgoogleadmanageradapter"),
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
    .product(name: "AdsEyeTradPlus", package: "adseyesdk-tradplus"),
    .product(name: "TradPlusAdSDK", package: "adseyespm-tradplusadsdk"),
    .product(name: "TradPlusAdMobAdapter", package: "adseyespm-tradplusadmobadapter"),
    .product(name: "TradPlusFacebookAdapter", package: "adseyespm-tradplusfacebookadapter"),
    .product(name: "TradPlusUnityAdapter", package: "adseyespm-tradplusunityadapter"),
    .product(name: "TradPlusAppLovinAdapter", package: "adseyespm-tradplusapplovinadapter"),
    .product(name: "TradPlusVungleAdapter", package: "adseyespm-tradplusvungleadapter"),
    .product(name: "TradPlusInMobiAdapter", package: "adseyespm-tradplusinmobiadapter"),
    .product(name: "TradPlusMintegralAdapter", package: "adseyespm-tradplusmintegraladapter"),
    .product(name: "TradPlusPangleAdapter", package: "adseyespm-tradpluspangleadapter"),
    .product(name: "TradPlusTPCrossAdapter", package: "adseyespm-tradplustpcrossadapter"),
    .product(name: "TradPlusYandexAdapter", package: "adseyespm-tradplusyandexadapter"),
    .product(name: "TradPlusBigoAdapter", package: "adseyespm-tradplusbigoadapter"),
    .product(name: "AdsEyeAdMob", package: "adseyesdk-admob"),
    .product(name: "GoogleMobileAdsMediationAppLovin", package: "adseyespm-googlemobileadsmediationapplovin"),
    .product(name: "GoogleMobileAdsMediationMintegral", package: "adseyespm-googlemobileadsmediationmintegral"),
    .product(name: "GoogleMobileAdsMediationUnity", package: "adseyespm-googlemobileadsmediationunity"),
    .product(name: "GoogleMobileAdsMediationVungle", package: "adseyespm-googlemobileadsmediationvungle"),
    .product(name: "GoogleMobileAdsMediationInMobi", package: "adseyespm-googlemobileadsmediationinmobi"),
    .product(name: "GoogleMobileAdsMediationBidMachine", package: "adseyespm-googlemobileadsmediationbidmachine"),
    .product(name: "GoogleMobileAdsMediationFacebook", package: "adseyespm-googlemobileadsmediationfacebook"),
    .product(name: "GoogleMobileAdsMediationPangle", package: "adseyespm-googlemobileadsmediationpangle"),
    .product(name: "GoogleMobileAdsMediationBigo", package: "adseyespm-googlemobileadsmediationbigo"),
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
| `AdsEyeAdBundle.bundle` | `AdsEyeAdSDK` `1.4.21` | [源码 ZIP](https://github.com/AdsEye/AdsEyeSDK/archive/refs/tags/1.4.21.zip) | `RootResources/AdsEyeAdBundle.bundle` | `YourApp.app/AdsEyeAdBundle.bundle` |
| `AdsEyeADXAdBundle.bundle` | `AdsEyeADXSDK` `1.4.21` | [源码 ZIP](https://github.com/AdsEye/AdsEyeSDK-ADX/archive/refs/tags/1.4.21.zip) | `RootResources/AdsEyeADXAdBundle.bundle` | `YourApp.app/AdsEyeADXAdBundle.bundle` |
| `PAGAdSDK.bundle` | `AdsGlobalPackage` `8.1.0-pod.6` | [源码 ZIP](https://github.com/AdsEye/AdsEyeSPM-Ads-Global/archive/refs/tags/8.1.0-pod.6.zip) | `RootResources/PAGAdSDK.bundle` | `YourApp.app/PAGAdSDK.bundle` |
| `SmartdigimktSDK.bundle` | `SmartdigimktSDK` `6.5.65` | [源码 ZIP](https://github.com/AdsEye/AdsEyeSPM-SmartdigimktSDK/archive/refs/tags/6.5.65.zip) | `RootResources/SmartdigimktSDK.bundle` | `YourApp.app/SmartdigimktSDK.bundle` |
| `TradPlusAds.bundle` | `TradPlusAdSDK` `15.10.0` | [源码 ZIP](https://github.com/AdsEye/AdsEyeSPM-TradPlusAdSDK/archive/refs/tags/15.10.0.zip) | `RootResources/TradPlusAds.bundle` | `YourApp.app/TradPlusAds.bundle` |
| `TradPlusADX.bundle` | `TPExchange` `13.8.60` | [源码 ZIP](https://github.com/AdsEye/AdsEyeSPM-TPExchange/archive/refs/tags/13.8.60.zip) | `RootResources/TradPlusADX.bundle` | `YourApp.app/TradPlusADX.bundle` |

## 已知事项

- **GoogleMobileAds 13.3.0 Beta umbrella 警告**：Xcode 26 会对 Google 官方 XCFramework 中未加入稳定 umbrella/modulemap 的 9 个 _Beta.h 报 incomplete umbrella；构建可成功。优先等待供应商修复，必要时仅在宿主 target 使用 -Wno-incomplete-umbrella，不修改供应商二进制。
- **TikTokBusinessSDK 冲突边界**：AdsGlobalPackage 默认不引入 TikTokBusinessSDK。媒体已有 TikTokBusinessSDK 时不要选择 ads_global_tiktok group。
