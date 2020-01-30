---
layout: post
title: 파이썬 exec 함수 사용방법
tags: python exec
comments: true
---
회사 점심시간마다 점심을 생략하구 파이썬 코딩도장 책을 보면서 공부중이다.  
파이썬이 가진 장점과 요즘은 자바보다 서버사이드쪽에서 수요를 원하는지 싶어 배우고있다.  
코딩도장 책에선
```
num=2
exec('num=num+5')
print('2+5의 결과값 =', num) # 2+5의 결과값 = 7
```
이라는 예제가 있었는데 정상적으로 작동하지 않았다. 책 출판시기와 현재와 파이썬 버전이 달라서 그런가하구 구글링을 통해 해결하였다.

![python error]({{ site.baseurl }}/assets/images/python_exec_example.PNG)

찾다보니 f-string이란게 있었다. 이미지를 보시면 이해가 쉬우실거다.