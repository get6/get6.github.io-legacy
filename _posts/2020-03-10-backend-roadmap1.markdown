---
layout: post
title: Backend Developer - How does the internet work?
comments: true
---

선임 연구원님이 [Backend Developer 로드맵](https://roadmap.sh/backend)을 보내주셔서 하나씩 하나씩 찾아가며 정리할 생각입니다.

인터넷을 어떠한 방식으로 동작하는가? 이에 따른 대답을 제 나름대로 자료를 찾아가며 해보려고합니다.

인터넷은 보통 TCP/IP라고 불리는 Packet Routing Network를 통해 동작합니다.

[Packet](https://ko.wikipedia.org/wiki/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%ED%8C%A8%ED%82%B7)은 데이터의 형식화된 블록입니다. 제어 정보와 사용자 데이터로 이루어져 있습니다.  
데이터를 인터넷에 전달하는 것을 메세지라고 합니다. 메세지가 전달되기 전, 처음으로 많은 파편으로 나뉘어 지는데 이것이 패킷입니다.

[Routing](https://ko.wikipedia.org/wiki/%EB%9D%BC%EC%9A%B0%ED%8C%85)은 어떤 네트워크안에서 통신 데이터를 보낼 최적의 경로를 선택하는 과정을 말합니다. 최단 거리 또는 가장 빠른 시간에 전달하는 방법을 찾는 것입니다.

[TCP](https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)는 Transport Control Protocol로써 한국어론 전송 제어 프로토콜입니다. 통신망에 연결된 컴퓨터에서 실행되는 프로그램 간에 일련의 옥텟을 안정적으로, 순서대로, 에러없이 교환할 수 있게 합니다.

[IP](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)는 송신 호스트와 수신 호스트가 패킷 교환 네트워크에서 정보를 주고받는데 사용하는 정보 위주의 규약입니다. OSI 네트워크 계층에서 호스트의 주소지정과 패킷 분할 및 조립 기능을 담당합니다.

[인터넷 프로토콜 스택의 계층 구조](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C_%EC%8A%A4%EC%9C%84%ED%8A%B8)에선 TCP는 전송 계층에 IP는 인터넷 계층에 속합니다.

위에서 써놓은 거에 조금 더 설명을 드리자면, 송신(원천, 출발지) 컴퓨터와 수신(도착, 목적지) 컴퓨터가 통신을 쉽게 하기 위해선 약속된 규약을 가지고 정보를 주고 받아야합니다.  
원거리에 있는 만큼 서로가 접속하고 있는 인터넷이라는 환경에서 원하는 정보를 주고 받기 위한 방법들이 정립된 환경에서 동작하는 규칙들이라고 할 수 있습니다.

