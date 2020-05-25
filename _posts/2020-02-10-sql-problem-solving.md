---
layout: post
title: SQL 가상으로 목록 만들기
tags: SQL Oracle MySQL query
comments: true
---
프로그래머스에서 SQL 코딩테스트 문제를 풀고있었는데 입양 시각 구하기에서 고민했던걸 공유해보고자 올린다.

0시부터 23시까지 시간별로 갯수를 구해야하는 문제다.   
조회 목록에 없는 시간은 갯수가 0이지만 목록에 표출되어야하는게 문제였다.

>오라클

```
select A.hour, sum(A.count) from 
(
    select 0 as hour, 0 as count from dual
    union
    select level * 1 as hour, 0  from dual
    connect by level < 24
    union
    select TO_NUMBER(TO_CHAR(DATETIME, 'HH24')), count(*) from ANIMAL_OUTS
    group by TO_NUMBER(TO_CHAR(DATETIME, 'HH24'))
    order by hour
) A
group by a.hour
order by a.hour
```

>MySQL

```
select hour, sum(count) from (
    select 0 as hour, 0 as count
    union 
    select A.* from (
        select @hour := @hour + 1 as hour, A.* 
            from (select 0 as count from animal_outs) A, ( select @hour := 0) b
        limit 23
    ) A
    union
     SELECT HOUR(DATETIME) AS HOUR, COUNT(*) AS COUNT FROM ANIMAL_OUTS
     GROUP BY HOUR HAVING HOUR BETWEEN 0 AND 23
     order by hour
) A
group by hour
order by 1
```

이걸 활용하면 더 나은 쿼리도 구현할 수 있을거같다.