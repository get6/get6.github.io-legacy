---
title: MyBatis parameter 조심해야할 점
date: "2020-02-13"
description: MyBatis를 할 때 변수와 getter를 잘 파악하자.
tags: ["backend", "MyBatis", "java", "sql"]
---

페이징 처리를 하다가 조회조건이 적용이 안되고 전체 조회가 된다고 그러셔서 확인을 해봤더니 MyBatis XML 파일에 아래처럼 방어코드 처리가 되어있었다.

```xml
<if test='startIndex != null and startIndex != "" and rowsPerPage != null and rowsPerPage != ""'>
    limit #{startIndex}, #{rowsPerPage}
</if>
```

관련 모델 객체는 이러했다.

```java
private Integer pageNo;
private Integer rowsPerPage;
```

Lombok을 이용하여 조회 모델을 만들었기 때문에 startIndex가 if 조건에 어긋나나? 싶어서 확인해봤다.

getStartIndex() getter로만 작성되어 있고 변수가 없었기 때문에 if조건에 true가 되지 않았다.

아래처럼 변경해서 문제를 해결했다.

```xml
<if test='pageNo != null and pageNo != "" and rowsPerPage != null and rowsPerPage != ""'>
    limit #{startIndex}, #{rowsPerPage}
</if>
```

\#{startIndex}는 사용이 가능하고 if안에서 `startIndex`는 null인게 신기했다.
