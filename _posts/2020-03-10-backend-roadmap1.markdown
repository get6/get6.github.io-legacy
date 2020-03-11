---
layout: post
title: Backend Developer - How does the internet work?
tags: internet packet routing tcp ip dhcp nat
comments: true
---

선임 연구원님이 [Backend Developer 로드맵](https://roadmap.sh/backend)을 보내주셔서 하나씩 하나씩 찾아가며 정리할 생각입니다.

인터넷을 어떠한 방식으로 동작하는가? 이에 따른 대답을 제 나름대로 자료를 찾아가며 해보려고합니다.

인터넷은 보통 TCP/IP라고 불리는 Packet Routing Network를 통해 동작합니다.

[Packet](https://ko.wikipedia.org/wiki/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%ED%8C%A8%ED%82%B7)은 데이터의 형식화된 블록입니다. 제어 정보와 사용자 데이터로 이루어져 있습니다.  
데이터를 인터넷에 전달하는 것을 메세지라고 합니다. 메세지가 전달되기 전, 처음으로 많은 파편으로 나뉘어 지는데 이것이 패킷입니다.

[Routing](https://ko.wikipedia.org/wiki/%EB%9D%BC%EC%9A%B0%ED%8C%85)은 어떤 네트워크안에서 통신 데이터를 보낼 최적의 경로를 선택하는 과정을 말합니다. 최단 거리 또는 가장 빠른 시간에 전달하는 방법을 찾는 것입니다.

[TCP](https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)는 Transport Control Protocol로써 한국어로는 전송 제어 프로토콜입니다. 통신망에 연결된 컴퓨터에서 실행되는 프로그램 간에 일련의 옥텟을 안정적으로, 순서대로, 에러없이 교환할 수 있게 합니다.

[IP](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)는 송신 호스트와 수신 호스트가 패킷 교환 네트워크에서 정보를 주고받는데 사용하는 정보 위주의 규약입니다. OSI 네트워크 계층에서 호스트의 주소지정과 패킷 분할 및 조립 기능을 담당합니다.


IP주소라는 얘기를 할 때 우리는 보통 IPv4(192.168.1.140)를 떠올립니다. IPv4는 총 갯수는 2<sup>32</sup>(약 40억)입니다.  
인류가 현재 77억쯤되는데 지구촌 사람들이 모두 핸드폰을 하게 되면 IPv4가 남아나지 않을겁니다.   
그러나 현재도 활발히 IPv4가 사용되고 있는 이유는 고정IP사용자가 아닌 대다수의 사용자들은 [DHCP](https://ko.wikipedia.org/wiki/%EB%8F%99%EC%A0%81_%ED%98%B8%EC%8A%A4%ED%8A%B8_%EA%B5%AC%EC%84%B1_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)(동적 호스트 구성 프로토콜)라는 IP할당 방법으로 설정이 되어있을 겁니다.  
![DHCP 설정]({{ site.baseurl }}/assets/images/dhcp_image.PNG) 
DHCP 서버를 통해 IP주소를 할당받기 때문에 매번 새로운 IP를 임대해 주기 때문에 같은 IP가 여기저기 사용할 수 있게됩니다.

[NAT](https://ko.wikipedia.org/wiki/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%EC%A3%BC%EC%86%8C_%EB%B3%80%ED%99%98)(네트워크 주소 변환)도 한정적인 IP주소를 기막힌 발상으로 유연하게 쓸 수 있게 해주는 기술입니다.  
실제로 할당 받은 IP와 Firewall에서 외부(인터넷)와 통신할 IP주소를 바꿔주어도 문제없게 도와줍니다.  
또한 인터넷의 공인 IP를 절약해 주는 역할을 합니다. 공유기나 보안이 필요한 곳에서 사용됩니다.  
1:1 NAT(Network Address Translation)는 인터넷 요청을 받으면 공인 IP를 찾아 들어 갈 수 있습니다.  
N:1 PAT(Port Address Translation)의 인터넷 요청이 와도 공인 IP를 찾아 들어 갈 수 없습니다.  
DAUM의 홈페이지 서버, Google의 DNS 서버, NAVER의 홈페이지 서버 등에 사용자가 먼저 접근을 하는 경우에는 NAT를 많이 사용합니다.

[인터넷 프로토콜 스택의 계층 구조](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C_%EC%8A%A4%EC%9C%84%ED%8A%B8)에선 TCP는 전송 계층에 IP는 인터넷 계층에 속합니다. 

[DNS](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C)(Domain Name System)은 주소창에 IP주소 대신 사람이 이해하기 쉬운 언어로 표시된 단어를 뜻합니다.  
LDH(Letter, Digit, Hyphen)규칙이 적용된 단어가 DNS 서버에 등록이 되어야지만 식별해서 알맞은 IP주소로 바뀌게 됩니다.

[TLD](https://ko.wikipedia.org/wiki/%EC%B5%9C%EC%83%81%EC%9C%84_%EB%8F%84%EB%A9%94%EC%9D%B8)(Top-Level Domain)은 최상위 도메인이라는 뜻입니다. 제일 끝에 위치한 .의 다음 부분을 뜻합니다.   
예를 들어 .com은 일반 최상위 도메인, .kr은 국가 코드 최상위 도메인입니다.

인터넷상을 통해 Client와 Server가 통신을 합니다. Client이란 사용자에 가까운 것을 뜻합니다. Server는 멀리 떨어진 컴퓨터에서 돌아가고 있는 응용프로그램을 말합니다.  
형식적인 정의론 신청을 시작하는 TCP 연결을 Cilent, 그동안 신청을 받는 TCP 연결을 서버라고 할 수 있습니다.

위에서 장황하게 써놓은 거에 마무리 겸 추가 설명을 드리자면, 송신(원천, 출발지) 컴퓨터와 수신(도착, 목적지) 컴퓨터가 통신을 쉽게 하기 위해선 약속된 규약을 가지고 정보를 주고 받아야합니다.  

원거리에 있는 만큼 서로가 접속하고 있는 인터넷이라는 환경에서 원하는 정보를 주고 받기 위한 필수적인 방법들이 정립된 환경에서 특정 영역마다 서로가 이해할 수 있는 동작들로 이루어진 규칙들이라고 할 수 있습니다.

[How does the internet work](https://medium.com/@User3141592/how-does-the-internet-work-edc2e22e7eb8)라는 사이트에 나온 요약을 달며 마무리 하겠습니다.  
* 인터넷은 1960년대 분산화된 컴퓨터 통신망을 목표로 하는 알파넷으로 시작되었습니다.
* 물리적으로, 인터넷이란 와이어, 케이블, 라디오 신호를 통해 서로 이동하는 비트들(데이터)의 모임입니다.
* 많고 복잡하며 공학적인 과제들처럼, 인터넷은 다양한 계층으로 나눠집니다, 각 계층은 작은 문제를 해결하며 관계합니다. 이 계층들은 잘 정의된 방식으로 서로 상호작용합니다.
* 다른 계층들에서(HTTP, IMAP, SSH, TCP, UDP, IP, etc) 어떻게 인터넷이 응용프로그램과 동작하는지 많은 규약들로 정의되어 있습니다. 이런 의미에서, 인터넷이 프로그램과 물리적 컴퓨터 통신망으로 동작하는 규칙들의 집합입니다.
* 인터넷의 성장과 함께, WIFI의 출현, E-커머스 수요, SSL/TLS는 주소 보안 우려에 의해 개발되었습니다.

감사합니다. 충분하지 않은 정의입니다. 지적해주시면 고쳐가면서 더 배우겠습니다.