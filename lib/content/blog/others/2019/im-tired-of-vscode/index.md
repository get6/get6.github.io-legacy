---
title: vscode preview를 피하는 법
date: "2019-12-27"
description: "vscode preview 모드가 날 괴롭힐 때, 답을 찾고 해방되어 보자"
tags: ["others", "vscode", "tool"]
---

현재 페이지에서 다른 페이지 코드를 참고하려할 때 파일을 열어두고 작업하는 편이다.

다른 분들은 어떻게 하시는지 모르겠지만 탭으로 이리저리 이동하면서 참고하는데 vscode로 개발중인데 preview모드가 여간 불편하다.

꺼두면 맘은 편할테지만 불편함을 통해 단축키나 새로운 방법을 찾는게 좋아 다른 방법을 찾아봤다.

```bash
ctrl + p and ctrl or alt + enter 를 누르면 측면으로 열림
```

```bash
ctrl + p and ctrl + k Enter 를 누르면 새 탭으로 생성
```

> 2020-01-18

좀 전부터 visual studio를 업데이트하고 나서 다시 안되기 시작했다. 결국엔 preview모드를 껐다.  
아래 설정은 ctrp + p와 같은 단축키로 열때는 preview모드로 실행되진 않지만 project explorer에서 클릭했을 때는 preview 모드로 보인다.

```bash
"workbench.editor.enablePreviewFromQuickOpen": false
```

다 끄고 싶을 때는 아래와 같이하면 된다.

```bash
"workbench.editor.enablePreview": false
```

전체저장도 ctrl + k + ㄴ 안되구 영어가 아닌 경우에 키값이 달라 적용이 안되는거 같다. 가볍게 쓰기 참 좋지만 주력으로 쓰기에는 아직 알아야 할게 많은거 같다~
