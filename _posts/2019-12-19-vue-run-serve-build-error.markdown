---
layout: post
title: vue run serve error 발생
tags: vue
---

아래와 같은 에러가 발생한다면  
configuration.entry[2] should be a string. -> a non-empty string

.env 파일에 가서 VUE_TARGET_PAGE가 잘못된 경로로 되어있는지 확인한다.

나 같은 경우는 main.js 상위 폴더에 s자가 하나 없어서 발생했다.