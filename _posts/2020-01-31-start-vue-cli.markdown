---
layout: post
title: Vue CLI + Router + Vuex + Vuetify + Apollo grapql 설정
tags: vue vue-cli vue-router vuex vuetify
comments: true
---
회사에서 Vue 프로젝트를 진행하고있다. 메뉴마다 퍼블이 만들어준 메뉴를 복사해서 같은 폴더 경로로 개발 프로젝트에 App.vue라는 이름으로 생성한다.  
App.vue를 열면 퍼블리셔가 만들어준 파일은 import 목록과 그걸 template안에다 적용한 노고가 들어있다.  
규모가 큰 프로젝트인만큼 메뉴가 늘어감에 따라 기존 component에 새로운 component를 다시 만들고 그걸 import하는 과정이 serve 와 build 시간이 너무나 길어져서 답답했다.
그럴수 밖에 없는 이유가 있나싶어 프로젝트를 생성해봤다. [해당 링크](https://github.com/get6/daisy-fo)가 vue-cli 저장소이다.  
nodejs가 깔려있다면 쉽게 만들 수 있다.
[Vue CLI 설치](https://cli.vuejs.org/guide/)는 이 링크를 통해 설치했다.  
Windows10에서 vscode터미널로 vue 명령어를 입력하면 권한 문제 때문에 자꾸 에러가 났다.  
관리자권한 터미널로 ```vue add apollo``` 를 추가했는데 id와 url을 요구해서 당황했다. [Apollo 링크](https://engine.apollographql.com/login)로 가서 가입 후 graph를 새로 만들었다.

[router](https://router.vuejs.org/kr/installation.html)는 ``` npm install vue-router ```   
[vuex](https://vuex.vuejs.org/kr/installation.html)는 ```npm install vuex --save ```로 설치를 하면 된다.

vue add를 하는 애들은(framework라고해야할까) 몇개의 파일을 강제로 바꿔버려 날아갈수도 있으니 커밋을 미리 해놓는 걸 추천한다.

[Vuetify](https://vuetifyjs.com/ko/getting-started/quick-start)도 ```vue add vuetify```를 통해 설치하면 된다.

Vue-cli는 spring과는 다르게 설치 후 서버실행이나 html보기가 참 편했던거 같다.  
이제 얘네들로 멋진 웹앱을 만들어보자