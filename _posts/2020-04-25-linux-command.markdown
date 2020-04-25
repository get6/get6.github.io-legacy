---
layout: post
title: 만화로 배우는 리눅스 시스템 관리 1권 정리 첫번째
tags: linux command
comments: true
---
### 만화로 배우는 리눅스 시스템 관리라는 책을 서울전자도서관에서 읽었습니다. (e-book 짱)

출근길에 가볍게 읽을 생각으로 보고있었는데 내용이 알차 명령어를 정리할겸 작성해봅니다.

### ssh
> 네트워크 상의 다른 컴퓨터에 접속할 수 있게 도와주는 프로그램  
>
> **ssh 사용법**  
> 
> ssh user@192.168.11.5  
> 1. ssh 명령어
> 2. ssh 명령어 뒤에 로그인할 사용자명(user)
> 3. @
> 4. 접속할 로그인 PC 주소(192.168.11.5)
>  
> **ssh 옵션**  
>
>-Y: X 전송지정  
>-C: 통신 내용 압축

ssh - Secure Shell (안전한 셸)  
rsh - Remote Shell (네트워크로 그대로 보내서 안쓰게 됨)

### sudo
>superuser do, substitue user do  
>슈퍼유저로 프로그램을 구동할 수 있도록 하는 프로그램
>
>**sudo 옵션**  
>
>-i 와 su: root로 로그인

### grep
> 찾는 문자열이 포함되었는지 조사 global regular expression print
>
> **grep 사용법**  
>
> grep -r "검색하고 싶은 문자열" /home/docs/ <- 검색 시작점
>
>**grep 옵션**  
>
>-r: 서브 폴더까지 검색하도록 지정