---
layout: post
title: Spring Initializr Gradle Type 비교
tags: spring initializr gradle 
comments: true
---
Spring Initializr로 프로젝트를 만들다 보면 IntelliJ에서 Type 선택하라고 나온다.

![그래들 타입]({{ site.baseurl }}/assets/images/spring_initializr_gradle.png){: width="100%"}

나는 Gradle을 이용하고 싶었고 3번과 4번이 뭐가 다른건가 싶었다...

3번을 선택해서 프로젝트를 생성하게 되면 setting.gradle과 src폴더, .gitignore, {프로젝트명}.iml이 없다.

3번의 .gradle폴더를 보면 5.2.1폴더가 있고  
4번의 .gradle폴더는 보면 6.2.2폴더가 있다. 두개는 버전의 차이인가싶다. 이건 왜지..?

쉬운 시작이라면 4번으로 가는게 좋다.