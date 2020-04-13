---
layout: post
title: 인바운드 트래픽과 아웃바운드 트래픽 설명
tags: inbound outbount traffic
comments: true
---
네이버페이 API를 보는데 아웃바운드 포트를 443으로 설정하라는 글이 있었다.  

![네이버페이 방화벽]({{ site.baseurl }}/assets/images/naver_pay_firewall.png)

"내 서버에서 네이버페이 서버를 접근할때 네이버페이가 443포트로 받기때문에 허용해달라는 말인가..?"하는 궁금증이 생겼다.  
누구의 입장에서 아웃바운드인지 인바운드인지 헷갈려 정리해보려고 한다.

단어 뜻을 보자면  
Inbound(1.본국행의 2.귀항하는 3.시내로 가는)  
Outbound(1.외국행의 2.시외로 가는 3.떠나는)  
Traffic(1.교통 2.트래픽 3.차 4.통행 5.거래)  

다른 블로그들의 정리를 보자면  
Inbound Traffic은 (들어옴)
1. 외부에서 서버 내부로 데이터가 유입될때 발생하는 트래픽을 말합니다.
2. 외부로부터 시작된 트래픽을 의미합니다. (traffic initiate from external)

Outbound Traffic은 (나감)
1. 서버 내에서 외부로 데이터가 전송되었을때의 트래픽을 발합니다.
2. 내부에서 시작된 트래픽을 의미합니다. (traffic initiate from internal)

어느 분이 쓴 글에선 "데이터 전송방향의 중요하지 않고 어느 쪽에서 연결이 시작되었는지가 중요하다."고 얘기하며 아래와 같은 예를 보여줬습니다.  

SMTP: Outbound connection, primarily outbound data. (간이 우편 전송 프로토콜)  
POP3: Outbound connection, primarily inbound data. (포스트 오피스 프로토콜)  
IMAP: Outbound connection, bidirectional data. (인터넷 메시지 접속 프로토콜)  
HTTP: Outbound connection, primarily inbound data. (초본문 전송 규약)  
DNS : Outbound connection, inbound data. (도메인 네임 시스템)

그렇다면 네이버페이에서 얘기하는 우리 서버에서 외부로 나가야하니(아웃바운드 트래픽) 우리 서버(가맹점)의 방화벽을 443 포트로 나가게 해줘라  
결제 정보를 반환할 때는 네이버페이 서버에서 우리 서버로 들어와야하니(인바운드 트래픽) 들어오게 해줘라가 되겠습니다.

