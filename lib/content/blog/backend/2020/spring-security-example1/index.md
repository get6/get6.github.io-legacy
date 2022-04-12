---
title: 스프링 시큐리티 구축 1
date: "2020-06-17"
tags: ["backend", "java", "spring", "spring-security"]
---

2020년 기준으로 스프링은 모놀리식 방식의 서버 구성보다는 MSA를 활용하여 RESTful API Server를 만드려고 할 것입니다.

스프링 시큐리티를 RESTful하게 구축해 다른 웹 서버와 통신하며 로그인 절차를 진행하도록 하겠습니다.

Postman을 설치하는게 REST API를 테스트하는데 좋습니다. [Postman 링크](https://www.postman.com/)

적당한 위치에 @EnableWebSecurity 선언한 클래스 파일을 만들어 줍니다.

```java
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
```

이 annotation을 스프링에서 읽어 환경 설정을 참조합니다.

```java
@Override
protected void configure(HttpSecurity http) throws Exception {
    http
        .rememberMe().disable()
        .formLogin().disable()
        .httpBasic().disable()
        .logout().disable()
        .csrf().disable();
}
```
