---
layout: post
title: 플러터 ios 빌드 에러시 해결
tags: flutter
comments: true
---

플러터 프로젝트를 클론 받아오고 나서 아래 이미지와 같은 에러가 발생했다.  

![flutter-ios-build1]({{ site.baseurl }}/assets/images/flutter-ios-build1.png)

구글링하다보니 해결책을 찾았다.  

![flutter-ios-build2]({{ site.baseurl }}/assets/images/flutter-ios-build2.png)

아래명령어를 차례대로 실행하면 된다.
```
$ xattr -lr <path_to_app_bundle>
$ xattr -cr <path_to_app_bundle>
```