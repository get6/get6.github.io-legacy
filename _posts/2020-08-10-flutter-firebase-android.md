---
layout: post
title: Flutter Firebase android 연동
tags: flutter firebase android
comments: true
---
Flutter Firebase Andoird 연동 설명입니다.

ios 연동은 [Flutter Firebase IOS](https://get6.github.io/2020/08/10/flutter-firebase-ios.html)를 참고해주세요.

ios가 Android 보다 설정이 쉽습니다.

#### 1. 앱 등록

Android 패키지 이름을 필수로 입력해야 합니다.

flutter 루트 디렉토리 구조에서 anroid/app/build.gradle 파일 안에 applicationId에 지정되어 있는 이름을 넣습니다.

minSdkVersion 21로 올려두시는게 좋습니다.  

Firebase function 갯수가 많아 제한을 풀어줘야 합니다.

#### 2. 구성 파일 다운로드

google-services.json을 다운로드하고,

1번에 build.gradle과 같은 위치에 파일을 옮깁니다.

#### 3. Firebase SDK 추가

android/build.gradle 아래를 추가합니다.
```
classpath 'com.google.gms:google-services:4.3.3'
```

anroid/app/build.gradle 아래를 추가합니다.
```
apply plugin: 'com.google.gms.google-services'  // Google Play services Gradle plugin
```

전 pubspec.yaml에 아래를 추가했습니다.

firebase_core: ^0.4.5  
firebase_auth: ^0.16.1  
firebase_analytics: ^5.0.16  
google_sign_in: ^4.5.1  