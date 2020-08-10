---
layout: post
title: Flutter Firebase ios 연동
tags: flutter firebase ios
comments: true
---
Flutter Firebase IOS 연동 설명입니다.

#### 1. 앱 등록

IOS 번들 ID는 필수로 입력해야 합니다.

쉽게하기 위해선 Xcode로 flutter 루트 디렉토리/ios를 엽니다.

Runner 최상위 루트를 두번 클릭하면 Identity - Bundle Identifier에 지정되어 있는 이름을 넣습니다.

#### 2. 구성 파일 다운로드

GoogleService-Info.plist을 다운로드하고,

Runner/Runner안에 위치에 파일을 옮깁니다.

#### 3. Firebase SDK 추가

이 부분은 다 뛰어넘어가도 됩니다.

저는 여기에 있는 부분을 추가하니 자꾸 안되서 구글링을 했었습니다.