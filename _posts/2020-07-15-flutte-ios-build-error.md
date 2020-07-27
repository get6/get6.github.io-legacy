---
layout: post
title: 플러터 ios 빌드 에러시 해결
tags: flutter
comments: true
---

플러터 프로젝트를 클론 받아오고 나서 시뮬레이터로 앱 실행을 하면  
아래 이미지와 같은 에러가 발생했다.  

![flutter-ios-build1]({{ site.baseurl }}/assets/images/flutter-ios-build-error1.png)

구글링하다보니 해결책을 찾았다.  

Flutter의 경우에는 {root directory}/build/ios/Debug-iphonesimulator/Runner.app 까지가 path_to_app_bundle이다.

IDE를 이용해 copy path로 쉽게 경로를 얻은 후 터미널에 붙여넣는다.

![flutter-ios-build2]({{ site.baseurl }}/assets/images/flutter-ios-build-error2.png)

아래명령어를 차례대로 실행하면 된다.
```
$ xattr -lr <path_to_app_bundle>
$ xattr -cr <path_to_app_bundle>
```