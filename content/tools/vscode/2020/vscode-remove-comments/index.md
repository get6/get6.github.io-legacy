---
title: vscode에서 모든 주석 제거
date: "2020-11-03"
tags: ["tools", "vscode",]
---

Flutter 프로젝트 생성하고 모든 주석 제거하는 방법을 본 뒤로,

사용할 때는 외웠다고 생각했는데 막상 다시 쓰려고 생각나서 찾는 시간이 아까워 정리해둔다.

command + f 을 누르면 찾기가 뜨고

command + option + f 을 누르면 바꾸기가 뜬다.

둘 중 하나를 입력하고 바꿔버리면 된다.

```bash
\w//.*

or

//.*
```

command + return 을 누르면 끝!
