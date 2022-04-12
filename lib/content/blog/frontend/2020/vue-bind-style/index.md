---
title: vue style bind 적용이 안될 때
date: "2020-02-19"
tags: ["frontend", "javascrtip", "vue"]
---

Vue에서 object 스타일 바인딩을 하는데 잘 안됬던 부분을 정리했다.

```javascript
// 적용됨
let obj = {
  backgroundImage: `${"url"}`,
}

// 적용안됨
let obj = {
  "background-image": `${"url"}`,
}
```

```javascript
// 적용됨
obj.height = "628px"

// 적용안됨
obj.height = "628px;"
```

단순한 차이지만 이미지가 붙고 높이가 적용되야 표출되어야하는데 두가지 원인때문에 안나왔었다.
