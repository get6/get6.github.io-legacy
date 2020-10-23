---
title: Flutter 개념 잡기
date: "2020-06-08"
tags: ["frontend", "flutter"]
---

파닥파닥 Flutter (빠르고 가볍게 Flutter 흔들기) 책을 보며 정리한 글입니다.

### Widget

> 화면에 보이는 모든 것

- 하나의 기능을 담당 (ex 버튼, 리스트)
- 스타일적인 요소 설정 (ex. 폰트 및 컬러)
- 하위 Widget의 나열 방식을 설정 (ex. 수직 정렬, 수평 정렬)
- 여백 및 간격 설정 (ex. 패딩)

build 함수를 가지고 있고 기본적으로 변하지 않는 특성이 있어 가볍다.

---

State는 Widget의 현재 상태 변경을 도와주는 개념 Widget이 이 둘을 상속 받아 동적 또는 정적인 Widget이 됩니다.

### StatelessWidget

> 단 한번만 build() 함수를 실행하며 그려진 화면이 계속 유지됩니다.

### StatefulWidget

> state라는 상태 관리 값을 기본으로 갖고 있고, setState()를 실행할 때마다, 다시 build() 함수를 실행하여 해당 Widget을 갱신합니다.

### MaterialApp

> Material Design의 기본 골격을 갖춤, 앱의 테마 및 설명을 적을 수 있습니다.

[Material Design](https://material.io/design) 링크를 누르면 Google 디자인 가이드라인을 볼 수 있습니다.
