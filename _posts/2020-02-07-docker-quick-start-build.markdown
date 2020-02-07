---
layout: post
title: Docker Quick Start Step3 Build on Windows
tags: docker cmd powerShell
comments: true
---

관리자 권한 CMD에서 cd doodle\cheers2019 ; docker build -t get6/cheers2019 . 해당 명령어를 쳐보려 해도 ```지정된 경로를 찾을 수 없습니다.```라는 메세지가 떴다.  

뭐가 문제일까 구글링해봐도 맞는 문법이라 난감했었다.  

결과는 cmd에서 안되고 powerShell을 통해서는 되었다.

권한 문제가 될까봐 둘 다 관리자권한으로 실행하였다.