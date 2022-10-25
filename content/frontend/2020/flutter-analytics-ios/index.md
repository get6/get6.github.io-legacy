---
title: Flutter Run할 때 Firebase analytics 에러가 나는 경우
date: "2020-10-30"
tags: ["frontend", "flutter", "firebase", "ios"]
---

아이폰 12 미니로 플러터 코드를 실행하는데 아래와 같은 에러가 발생했다.

```bash
CocoaPods' output:
↳
      Preparing
    Analyzing dependencies
    Inspecting targets to integrate
      Using `ARCHS` setting to build architectures of target `Pods-Runner`: (``)
    Finding Podfile changes
      - Flutter
      - firebase_analytics
      - firebase_auth
      - firebase_core
      - flutter_facebook_auth
      - google_sign_in
      - sign_in_with_apple
    Fetching external sources
    -> Fetching podspec for `Flutter` from `Flutter`
    -> Fetching podspec for `firebase_analytics` from `.symlinks/plugins/firebase_analytics/ios`
    firebase_analytics: Using Firebase SDK version '6.33.0' defined in 'firebase_core'
    -> Fetching podspec for `firebase_auth` from `.symlinks/plugins/firebase_auth/ios`
    firebase_auth: Using Firebase SDK version '6.33.0' defined in 'firebase_core'
    -> Fetching podspec for `firebase_core` from `.symlinks/plugins/firebase_core/ios`
    firebase_core: Using Firebase SDK version '6.33.0' defined in 'firebase_core'
    -> Fetching podspec for `flutter_facebook_auth` from `.symlinks/plugins/flutter_facebook_auth/ios`
    -> Fetching podspec for `google_sign_in` from `.symlinks/plugins/google_sign_in/ios`
    -> Fetching podspec for `sign_in_with_apple` from `.symlinks/plugins/sign_in_with_apple/ios`
    Resolving dependencies of `Podfile`
      CDN: trunk Relative path: CocoaPods-version.yml exists! Returning local because checking is only perfomed in repo update
      CDN: trunk Relative path: all_pods_versions_0_3_5.txt exists! Returning local because checking is only perfomed in repo update
      CDN: trunk Relative path: Specs/0/3/5/Firebase/6.31.1/Firebase.podspec.json exists! Returning local because checking is only perfomed in repo update
      CDN: trunk Relative path: all_pods_versions_9_b_5.txt exists! Returning local because checking is only perfomed in repo update
      CDN: trunk Relative path: Specs/9/b/5/FBSDKCoreKit/7.1.1/FBSDKCoreKit.podspec.json exists! Returning local because checking is only perfomed in repo update
      CDN: trunk Relative path: all_pods_versions_b_3_c.txt exists! Returning local because checking is only perfomed in repo update
      CDN: trunk Relative path: Specs/b/3/c/FBSDKLoginKit/7.1.1/FBSDKLoginKit.podspec.json exists! Returning local because checking is only perfomed in repo update
      CDN: trunk Relative path: all_pods_versions_d_4_0.txt exists! Returning local because checking is only perfomed in repo update
      CDN: trunk Relative path: Specs/d/4/0/GoogleSignIn/5.0.2/GoogleSignIn.podspec.json exists! Returning local because checking is only perfomed in repo update
      CDN: trunk Relative path: Specs/0/3/5/Firebase/6.26.0/Firebase.podspec.json exists! Returning local because checking is only perfomed in repo update
    [!] CocoaPods could not find compatible versions for pod "Firebase/Analytics":
      In snapshot (Podfile.lock):
        Firebase/Analytics (= 6.26.0, ~> 6.26.0)
      In Podfile:
        firebase_analytics (from `.symlinks/plugins/firebase_analytics/ios`) was resolved to 6.1.0, which depends on
          Firebase/Analytics (~> 6.33.0)
    Specs satisfying the `Firebase/Analytics (= 6.26.0, ~> 6.26.0), Firebase/Analytics (~> 6.33.0)` dependency were found, but they required a higher minimum deployment target.
    /Library/Ruby/Gems/2.6.0/gems/molinillo-0.6.6/lib/molinillo/resolution.rb:328:in `raise_error_unless_state'
    /Library/Ruby/Gems/2.6.0/gems/molinillo-0.6.6/lib/molinillo/resolution.rb:310:in `block in unwind_for_conflict'
    /Library/Ruby/Gems/2.6.0/gems/molinillo-0.6.6/lib/molinillo/resolution.rb:308:in `tap'
    /Library/Ruby/Gems/2.6.0/gems/molinillo-0.6.6/lib/molinillo/resolution.rb:308:in `unwind_for_conflict'
    /Library/Ruby/Gems/2.6.0/gems/molinillo-0.6.6/lib/molinillo/resolution.rb:257:in `process_topmost_state'
    /Library/Ruby/Gems/2.6.0/gems/molinillo-0.6.6/lib/molinillo/resolution.rb:182:in `resolve'
    /Library/Ruby/Gems/2.6.0/gems/molinillo-0.6.6/lib/molinillo/resolver.rb:43:in `resolve'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/resolver.rb:94:in `resolve'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/installer/analyzer.rb:1065:in `block in resolve_dependencies'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/user_interface.rb:64:in `section'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/installer/analyzer.rb:1063:in `resolve_dependencies'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/installer/analyzer.rb:124:in `analyze'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/installer.rb:410:in `analyze'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/installer.rb:235:in `block in resolve_dependencies'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/user_interface.rb:64:in `section'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/installer.rb:234:in `resolve_dependencies'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/installer.rb:156:in `install!'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/command/install.rb:52:in `run'
    /Library/Ruby/Gems/2.6.0/gems/claide-1.0.3/lib/claide/command.rb:334:in `run'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/lib/cocoapods/command.rb:52:in `run'
    /Library/Ruby/Gems/2.6.0/gems/cocoapods-1.9.1/bin/pod:55:in `<top (required)>'
    /usr/local/bin/pod:23:in `load'
    /usr/local/bin/pod:23:in `<main>'
Error output from CocoaPods:
↳
    [!] Automatically assigning platform `iOS` with version `14.1` on target `Runner` because no platform was specified. Please specify a platform for this target in your Podfile. See `https://guides.cocoapods.org/syntax/podfile.html#platform`.
```

### 해결하기 위해 플러터 프로젝트 기준으로 아래 코드를 입력했다

```bash
cd ./ios && pod update
```

아래와 같은 결과가 나온 후 실행 시키면 잘 동작한다.

```bash
Update all pods
Updating local specs repositories

CocoaPods 1.10.0.beta.2 is available.
To update use: `sudo gem install cocoapods --pre`
[!] This is a test version we'd love you to try.

For more information, see https://blog.cocoapods.org and the CHANGELOG for this version at https://github.com/CocoaPods/CocoaPods/releases/tag/1.10.0.beta.2

Analyzing dependencies
firebase_analytics: Using Firebase SDK version '6.33.0' defined in 'firebase_core'
firebase_auth: Using Firebase SDK version '6.33.0' defined in 'firebase_core'
firebase_core: Using Firebase SDK version '6.33.0' defined in 'firebase_core'
Downloading dependencies
Installing AppAuth (1.4.0)
Installing FBSDKCoreKit (7.1.1)
Installing FBSDKLoginKit (7.1.1)
Installing Firebase (6.33.0)
Installing FirebaseAnalytics (6.8.3)
Installing FirebaseAuth (6.9.2)
Installing FirebaseCore (6.10.3)
Installing FirebaseCoreDiagnostics (1.7.0)
Installing FirebaseInstallations (1.7.0)
Installing Flutter (1.0.0)
Installing GTMAppAuth (1.1.0)
Installing GTMSessionFetcher (1.5.0)
Installing GoogleAppMeasurement (6.8.3)
Installing GoogleDataTransport (7.5.1)
Installing GoogleSignIn (5.0.2)
Installing GoogleUtilities (6.7.2)
Installing PromisesObjC (1.2.11)
Installing firebase_analytics (6.1.0)
Installing firebase_auth (0.18.2)
Installing firebase_core (0.5.1)
Installing flutter_facebook_auth (0.3.1)
Installing google_sign_in (0.0.1)
Installing nanopb (1.30906.0)
Installing sign_in_with_apple (0.0.1)
Generating Pods project
Integrating client project
Pod installation complete! There are 7 dependencies from the Podfile and 24 total pods installed.

[!] Automatically assigning platform `iOS` with version `14.1` on target `Runner` because no platform was specified. Please specify a platform for this target in your Podfile. See `https://guides.cocoapods.org/syntax/podfile.html#platform`.

[!] CocoaPods did not set the base configuration of your project because your project already has a custom config set. In order for CocoaPods integration to work at all, please either set the base configurations of the target `Runner` to `Target Support Files/Pods-Runner/Pods-Runner.profile.xcconfig` or include the `Target Support Files/Pods-Runner/Pods-Runner.profile.xcconfig` in your build configuration (`Flutter/Release.xcconfig`).
```
