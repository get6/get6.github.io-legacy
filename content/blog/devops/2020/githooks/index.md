---
title: Git pre-commit lint-staged 에러 날때
date: "2020-02-05"
tags: ["devops", "git", "gitHooks", "pre-commit", "lint-staged"]
---

Vue-cli 설치를 하면 eslint는 자동으로 깔린데 그때 package.json 제일 밑에

```json
"gitHooks": {
    "pre-commit": "lint-staged"
},
"lint-staged": {
    "*.{js,vue}": [
        "vue-cli-service lint",
        "git add"
    ]
}
```

이렇게 추가되어있다.  
근데 vscode에서 extension pack을 깔아서인지 npm install하면서 뭐가 바뀌었는지 어느날 git commit이 안되기 시작했다(오 하느님)  
git commit --no-verify를 하면 올라는 가지만 gitHooks가 적용이 안되서 찜찜하게 남아있었다.  
찾다 찾다보니 원인을 못찾고 해결방법만 찾았다.

```bash
npm install --save-dev lint-staged
```

실행하게되면 package.json, package-lock.json에 lint-staged가 추가된다.  
공유 프로젝트에서라면 뭔가 찝찝한 커밋이 되겠지만 결과적으로 커밋이 에러없이 올라간다.
