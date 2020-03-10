---
layout: post
title: OpenBanking test 적용
comments: true
---
오픈뱅킹 API를 테스트 서버 구동 시 발생하는 상황에 대한 설명이 잘 이루어지지 않아 사용해가며 정리해보려 합니다.

[개발가이드](https://developers.openbanking.or.kr/guide/start)에 접속하셔서 시작해주시기 바랍니다.

내 앱 관리 - 추가정보 - Callback URL은 http://localhost:8880/html/callback.html 으로 지정해놔야 로컬 서버 구동 후 접속시 default값이라 수정할 필요가 없습니다.

[자료실](https://developers.openbanking.or.kr/guide/sdkdownload)로 들어가 로컬테스트페이지 최신버전 업로드를 다운 받습니다.

로컬테스트 구동용으로 jar파일로 압축되어있기 때문에 Java가 설치되어 있지 않은 경우 JAVA환경설정.pdf 참조하여 진행하시면 됩니다.

터미널을 키신 후 이제 압축을 해제하신 곳으로 경로를 이동 후 로컬에서 java -jar local-test-boot-1.0.jar로 실행하면 기본포트 8880인 http://localhost:8880/html/index.html 으로 접속하면 

![오픈뱅킹 첫 페이지]({{ site.baseurl }}/assets/images/openbanking_main.png){: width="100%" height="100%"}을 볼 수 있다.

처음으로 실행 할 경우에는 input 태그에 빈 값으로 되어있다.

Client ID 내 앱 관리 API Key & Secret에 API Key를 입력  
Client Secret은 내 앱 관리 API Key & Secret에 API Secret를 입력

사용자 인증 메뉴에서 상세한 설명이 없는 경우가 있는데 Scope, State에 대한게 없었다.

Scope는 기본적으로 login inquiry transfer로 되어있으나 내 생각은 account, bank, inquiry, transfer, user, return이 다 들어가야 하지 않나싶다.  
State는 사용자인증 버튼을 누를 때 입력하라고 하는데 딱히 제안하고 있는 테스트 값이 없다.   
콘솔에 나와있는 Model Schema에 12345678901234567890123456789012이라고 넣어놨던 state값이 있어서 그걸 넣으니 인증이 되었다.
