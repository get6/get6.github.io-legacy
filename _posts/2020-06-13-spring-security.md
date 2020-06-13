---
layout: post
title: 스프링 시큐리티 구축
tags: spring-boot spring-security
comments: true
---
회사에서 혼자서 spring-security를 이용해 jwt를 발급하는 구조를 만들었다.  
물론 고쳐야 할 부분들은 남아있지만 대략적인 개념을 설명하고자 한다.

스크링 시큐리티를 RESTful API로 사용할 계획이라면 jsp같은 페이지가 필요 없을 것이다.

기본 세팅에선 다른 URL을 요청하면 시큐리티가 권한이 없다고 요청을 거부할 것이다.  
그러면 로그인을 먼저해서 인증을 받아야한다.  
postman을 이용하여 form방식을 이용해 테스트를 했다. email과 password를 post로 날려 요청을 보낼 것이다.  
스프링 시큐리티는 기본적으로 /login 요청을 로그인으로 보기 때문에 Controller에 적지 않아도 요청을 알고있다.

```
 @Override
  protected void configure(HttpSecurity http) throws Exception {
      http
          .authorizeRequests()
            .antMatchers("/admin/**").hasRole("ADMIN") // 관리자용
            .antMatchers("/user/**").hasRole("USER") // 사용자용
            .antMatchers("/guest/**").permitAll() // 회원가입 이메일 인증 전 임시계정?
          // .antMatchers(HttpMethod.GET,"/", "/home", "/about").permitAll()
            .antMatchers(HttpMethod.POST, "/registry").permitAll()
            .anyRequest().authenticated() // 위를 제외하곤 권한이 있는 사용자는 어디든 접근가능
          .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // no session
          .and()
            .exceptionHandling()
              .authenticationEntryPoint(unauthorizedHandler)
              .accessDeniedHandler(jwtAccessDeniedHandler)
          .and()
            // add jwt filters (1. authentication, 2. authorization)
            .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
            .addFilter(new JwtAuthorizationFilter(authenticationManager(), jwtUtils))
          .rememberMe().disable()
          .formLogin().disable()
          .httpBasic().disable()
          .logout().disable()
          .csrf().disable();
  }
```

이런식으로 되어있고 로그인 전 /login 요청은 UsernamePasswordAuthenticationFilter.class를 상속 받아 구현한 filter에 걸리게 된다.

여기서 email과 password로 AbstractAuthenticationToken를 구현한 Custom token을 생성해 provider로 보낸다.

```
return this.getAuthenticationManager().authenticate(authRequest);
```

만약 jwt로 만들때 email과 별 정보를 넣지 않는다면 provider와 Custom token을 만들지 않아도 괜찮다.

그러나 나는 email과 id 그리고 혹시 몰라 다른 항목이 추가될 수 있을거 같아 Custom token을 만들었었다.  
사실 UsernamePasswordAuthenticationToken애 principal에다가 map이나 다른 자료구조를 이용해 넣어도 돌아가겠지만 정확히 스프링 시큐리티를 이해하지 못했기 때문에 필드를 생성해 명확히 하는게 낫겠다 싶었다.(책을 정독하자..)  

AbstractAuthenticationToken를 상속받은 Custom token에 DB에서 조회한 데이터를 넣어준다.

스프링 시큐리티는 기본적으로 DaoAuthenticationProvider를 사용해 여기서 비밀번호 검증까지 해주는데 나는 Controller쪽에서 내가 만든 JwtAuthenticationToken객체를 @AuthenticationPrincipal를 사용해 가져와야 했기때문에 provider를 구현했다.

로그인에 성공하면 jwt로 만든 토큰을 response.header에 실어 돌려주는데

그 뒤로 오는 요청은 BasicAuthenticationFilter을 상속받은 filter에 걸려 jwt를 decode해 사용자를 확인한다.

처음에는 filter 두개 UsernamePasswordAuthenticationFilter, BasicAuthenticationFilter만 있어도 로그인이 되길래 이렇게하면 되나 싶었지만,  
비즈니스 로직을 위한 상황이 필요할거 같아 UsernamePasswordAuthenticationToken 말고 원하는 Custom token을 사용하기 위해선 AuthenticationProvider 구현한 provider도 필요했다.

나중에 블로그 좀 더 바꾸고 스프링 시큐리티 모두가 이해할 수 있게 쉽게 시리즈로 작성해 보겠습니다...

이 정도까지 이해할 수 있게 해준 블로거분들과 인터넷 글들께 감사를 드립니다아아
