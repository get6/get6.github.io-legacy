---
title: vscode에서 java clean하는 법
date: "2020-01-20"
description: "vscode에서 java project 오류가 날 때 고려해야 할 방법으로 Clean하는 방법이 있다."
tags: ["backend", "vscode", "java"]
---

git pull을 받고나서 package나 변수를 알 수 없다는 빨간 에러가 1K개가 났었다.

이클립스가 아니라 프로젝트 클린과 메이븐 업데이트를 할 수 없어서 이리저리 찾아봤다.

```java
ctrl + shift + p를 누른 후
java update project configuration을 입력 후 Enter
```

저 명령어를 입력하기전에 update maven archetype catalog도 실행했었는데 뭔진 모르겠다.

이게 메이븐 업데이트일지도..?

아시는 분은 댓글 달아주시면 고맙겠습니다.
