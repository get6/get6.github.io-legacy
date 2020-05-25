---
layout: post
title: 에디터로 저장된 문구 vue v-html 치환하기
tags: vue v-html
comments: true
---

만약 에디터에 ```&lt;```, ```&gt;``` 이런식으로 저장되어있을때는 replace를 이용해 바꿔어 주어야한다.  
따로 plugin을 설치하긴 싫고 vue에서 v-html을 쓸때는 한번 변환이 된채로 화면에 붙기때문에 한번 더 붙이면 될 것 같았다.

```
component1: {
      props: ["htmlTxt"],
      template: `<div>
                    <span v-html="convertedHtml"></span>
                    <span v-html="htmlTxt" id="htmlTxt" v-show="false"></span>
                </div>`,
      data: () => ({
        convertedHtml: ""
      }),
      mounted() {
        this.convertedHtml = document.querySelector("#htmlTxt").innerText;
      }
    },
```

결과는 성공적으로 작동했다. 이런걸 알아갈때마다 기분이 좋아진다.