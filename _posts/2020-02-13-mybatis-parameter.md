---
layout: post
title: Mybatis parameter 조심해야할 점
tags: mybatis java sql
comments: true
---

페이징 처리를 하다가 조회조건이 적용이 안되고 전체 조회가 된다그래서 확인을 해봤더니 Mybatis xml에 
```
<if test='startIndex != null and startIndex != "" and rowsPerPage != null and rowsPerPage != ""'>
    limit #{startIndex}, #{rowsPerPage}
</if>
```
위처럼 방어코드 처리가 되어있었다.
```
private Integer pageNo;
private Integer rowsPerPage;
```
lombok을 이용하여 조회 모델을 만들었기 때문에 startIndex가 if 조건에 어긋나나싶어서 확인해봤더니 getStartIndex()로 모델에서 getter로만 작성되어 있었기 때문에 if조건에 true가 되지 않았다.


아래처럼 바뀌는 조회조건이 적용되었다.
```
<if test='pageNo != null and pageNo != "" and rowsPerPage != null and rowsPerPage != ""'>
    limit #{startIndex}, #{rowsPerPage}
</if>
```

#{startIndex}로는 값이 있는채로 사용이 가능하고 if안에서 'startIndex'는 null인게 신기했다.
자세히 아시는 분은 알려주시면 넘 감사하겠습니다!