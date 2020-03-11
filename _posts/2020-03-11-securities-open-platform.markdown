---
layout: post
title: 증권사 API 정리
tags: securities api
comments: true
---
다수의 증권사들이 오픈플랫폼이라는 명칭으로 open api를 제공하고 있습니다.

각 증권사들이 제공하는 API가 있으면서 한국예탁결제원(SEIBro), 한국거래소 지분을 76%가지고 있는 Koscom이라는 회사도 API를 제공합니다.

* [koscom 개발자 센터](https://developers.koscom.co.kr/documentation)에서API 이용신청을 하실 수 있습니다.
* [SEIBro 오픈플랫폼](http://openplatform.seibro.or.kr/websquare/startup_control.jsp?w2xPath=/startup/index.xml)에서 API 활용신청을 하실 수 있습니다.
* [키움증권 Open API+](https://www1.kiwoom.com/nkw.templateFrameSet.do?m=m1408000000)에서 사용 신청하러 가기를 선택합니다.
* [eBEST투자증권 xingAPI](http://www.ebestsec.co.kr/xingapi/xingMain.jsp?left_menu_no=360&front_menu_no=1293&parent_menu_no=603&left_menu_no=360&front_menu_no=603&parent_menu_no=360)을 최신버전 설치합니다. 설치 가이드를 알려주는 [사이트](https://wikidocs.net/2871)도 있습니다 - API가 파이썬으로 작성되었습니다.
* [NH투자증권](https://www.nhqv.com/)은 SPC로 되어있어 URL이 변경되지 않습니다. 트레이딩채널 / QV Open API로 들어갑니다. - C++를 지원합니다.

현재는 신청 서류를 제출해야 하기 때문에 아직 테스트 자료들을 받을 수 없었습니다.

API를 제공하는 증권사들이 많아 어떤 회사를 선택해야하는지에 대한 고민이 있습니다.     
오픈뱅킹과 같이 통합 API를 이용하고 싶었지만 증권사 특성사 보안과 관련되어 아직까지 통합 플랫폼이 없어 보입니다.  
더 찾아보고 수정하겠습니다.

