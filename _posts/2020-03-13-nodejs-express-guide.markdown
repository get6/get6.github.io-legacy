---
layout: post
title: Express 가이드
tags: nodejs express webserver
comments: true
---
[Express Framework](https://expressjs.com/ko/starter/generator.html)로 들어가 express 생성기로 빠르게 웹서버를 만듭니다.

터미널에서 세네번의 입력을 통해 빠르고 쉽게 만들 수 있습니다. 생성된 구조를 보는 것도 많은 공부가 될 겁니다.

기본 포트는 3000입니다.

설치와 실행은 쉬웠지만 수정 후 저장하면 reload가 되지 않아 [nodemon](https://nodemon.io/)을 설치했습니다.

가이드에서 추천하는 방식인 npm install -g nodemon을 실행시킵니다.  
프로젝트별로 설치할 수 있지만, nodemon이 Syste path에 접근할 수 없기때문에 nodemon 커맨드를 쓰며 실행할 수 없습니다.

nodemon 사용이 무척 간단합니다.
```
"scripts": {
    "start": "node ./bin/www"
},
```
에서
```
"scripts": {
    "start": "nodemon ./bin/www"
},
```
으로 바꿔주기만 하면 됩니다.