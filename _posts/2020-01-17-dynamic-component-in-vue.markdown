---
layout: post
title: VueJS에서 Dynamic component 사용방법
tags: vue spc javascript component render
comments: true
---
Vue를 이용해 프로젝트를 진행 중이다.  
내가 맡은 부분은 21가지 유형이 조회한 목록 중에서 코드와 일치한 한건만 렌더링이되야한다.  
PM님은 나에게 if else 하라고 했지만 나는 더 나은걸 하고싶었다.

```
Single page component에서는 <template> 태그가 있으면 render함수가 무시되므로 template는 지워주자.

<script>
import ~ 필요한 component
export default {
    reder(h) {
        return h('div와 같은 태그 or import한 component명',  
         { 속성이나 component 필요값(주로 props) },  
         [현재 노드 자식들 아래와 동일하다])
    }
    or
    render: function(createElement) {
        return createElement(위와 동일)
    }
    props: {
        ...
    },
    ...

}
</script>
```