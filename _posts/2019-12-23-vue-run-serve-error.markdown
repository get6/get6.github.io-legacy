---
layout: post
title: Vue npm run serve Error 발생했던 이유
date:   2019-12-23 13:32:00 +0000
categories: jekyll update
---

> 프로젝트 진행하는 중에 새로운 메뉴를 만들면서 App.vue에 사용할 컴포넌트들도 붙이고 html, js도 만들고 테스트할겸 npm run serve를 실행했다.

근데 에러가 발생했다.  
98% after emitting   ERROR  Failed to compile with 2 errors  
serve 중에 에러가 나면 어디인지 알려주지 않을때도 있어서 어디서 실수를 했는지 감이 안잡혔다. vscode로 spring boot + vue.js를 돌리고있는데 해당 에러는 html에 Formatting적용이 되어 저장할 때 형식이 적용되어 
````
<%= '<input 
    type="hidden" 
    id="testNo" 
    name="testNo" 
    th:value="${testNo}"
 />' %>
````
이런 부분이 에러를 발생시켰다.

````
<body>
    <div id="app"></div>
    <%= '<input type="hidden" id="testNo" name="testNo" th:value="${testNo}" />' %>
</body>
````

Formatting을 끄고 저장 하면 해결됬다.