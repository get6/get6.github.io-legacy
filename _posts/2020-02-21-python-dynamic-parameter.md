---
layout: post
title: Python binds dynamic parameters
tags: python zip
comments: true
---
파이썬 문제 예제를 보며 소스 리뷰를 하고 있는데

```argListTmp = list(zip(argList[0], argList[1], argList[2], argList[3], argList[4]))```

이런식으로 정적 코딩이 되어있었다.

무조건 5개 이상의 리스트를 받는걸로 가정되어있어서 바꿔보고 싶었다.

파이썬은 for loop를 한 줄로 처리해주는게 있었지만
```<generator object p114.<locals>.<genexpr> at 0x027A5610>```
 반환되어 원하는 역할을 하기가 힘들었다.

```argListTmp = list(zip(*argList))```

앞에 *를 붙여 주면 해당 리스트에 담긴 모든 항목이 , 처리가 된 파라미터로 바뀐다.

즉 정적 코딩된것처럼 zip(argList 길이만큼 , 로 구분된 인자로 처리된다.)

왜 사람들이 파이썬 파이썬 하는지 이해가 조금 가는 부분이다.

