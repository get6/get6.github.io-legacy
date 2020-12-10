---
title: TDD(TEST DRIVEN DEVELOPMENT)를 SPRING BOOT에 사용하기
date: "2020-12-01"
tags: ["backend", "spring"]
---

TDD를 스프링 부트에 적용해보자.

테스트 주도 개발인 TDD는 다음과 같은 단계를 가진다.

1. 하나의 요구 사항을 지닌 실패 테스트를 작성한다.
2. 테스트를 통과하기 위한 충분한 코드를 구현한다.
3. 자신감을 갖고 수정을 계속합니다. (필요한 경우)

TDD는 성공할 테스트를 만드는 것인 목적이 아닌 살패할 수 있는 테스트를 만들어 보완해 나가는 것이 목적으로 보입니다.
실패할 조건을 찾아 실패한 이유를 보강하는 것이 TDD 테스트의 순수한 이윱니다.

스프링에는 JUnit을 보편적으로 많이들 사용합니다. 저도 JUnit밖에 사용하려고해서 나머지는 잘 모릅니다.
JUnit4는 2004년도에 [JUnit4 첫 태그](https://github.com/junit-team/junit4/releases/tag/r3.8.2)가 나왔고,  
JUnit5는 20015년도에 [JUnit5 첫 태그](https://github.com/junit-team/junit5/releases/tag/prototype-0)가 나왔고,
JUnit5 2017년도에 첫 [JUnit5 출시버전](https://github.com/junit-team/junit5/releases/tag/r5.0.0)이 나옵니다.

그래서 저는 JUnit5을 배워보고 싶어 프로젝트에 도입하려고 생각했습니다.

스프링에는 Controller, Service, Repository 부분을 테스트 할 수 있습니다.

통합 테스트 같은 경우는 전체적인 흐름을 한번 돌리는 느낌으로 생각하시면 될 것 같습니다.

유닛 테스트 같은 경우는 각 기능이 정상적으로 동작을 하는지 보는겁니다.

유닛 테스트를 해가며 기능을 만들수 있다면 빠른 개발을 할 수 있어 TDD를 사용하는게 이유입니다.

통합 테스트는 gradle build 과정에서 전체적인 흐름을 보기 위해 만든 것으로 실패하게 되면 원인을 찾고 다시 build하는 과정을 반복합니다.

저 역시 처음에 통합테스트와 유닛테스트를 src/main/java 이후인 부분과 똑같은 domain별로 test cases를 만들어야 하는지 싶었습니다.

TDD를 배우려고 시작한 일이 class 파일을 엄청 만들게 하는 노가다가 되는게 아닌가 생각이 들어 주저했습니다.

IntelliJ IDEA에선 테스트하고 싶은 클래스명 앞에 control + return(Mac OS)을 입력하시면 Test...를 선택하시면 src/test/같은 경로로 만들어 줍니다.

> 참고자료

1. [JUnit 5 tutorial, part 1: Unit testing with JUnit 5, Mockito, and Hamcrest](https://www.infoworld.com/article/3537563/junit-5-tutorial-part-1-unit-testing-with-junit-5-mockito-and-hamcrest.html) <- 친절히 알려줘서 따라하다 보면 감이 옵니다.
2. [Using TDD to code a small API with Spring Boot 2](https://gregodadone.com/2020/06/08/using-tdd-to-code-a-small-api-with-spring-boot-2/)
3. [Testing Software: What is TDD?](https://medium.com/javascript-scene/testing-software-what-is-tdd-459b2145405c)
