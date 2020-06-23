---
layout: post
title: 지킬을 이용해 깃허브에 올릴 때 헷갈린 점
tags: jekyll blog github
comments: true
category: git
order: 1
---

> 처음 저장소에 등록을 하고 올렸을 때 메인화면을 바꾸고 싶었다. 그리고 문득 든 생각이 있었는데,

1. 내 컴퓨터 블로그폴더에서 \_site폴더는 .gitignore에 등록되어 있는데 어떻게 메인 사이트를 바꿀 수 있다는거지?
2. 나의 index.markdown은 layout: home 밖에 없는데 왜 내용이 메인에 보이지?
   <hr/>

정확한 이유는 현재 알 수 없지만, 적용된 테마마다 보여주는게 조금 다른거 같다. <br>
현재 minima-theme을 이용 중인데 메인화면을 간소화해주는 것 같다.<br>
다른 테마로 변경 후에 글을 다시 수정해야겠다.

> 2019-12-18 정리된 생각

1. ~~jekyll(지킬)에서 \_config.yml에 지정한 theme에 따라 메인 화면이 바뀌어진다.~~<br>github pages에 설정을 받는거 같음.. 소스가 반복문이라 그렇다.
2. \_posts 폴더에 들어있는 목록들이 돌면서 layout: home이라고 지정한 곳인 index.markdown에서 반복문으로 반복되어 뿌려진다.

> 2019-12-20 github에서 setting을 이용해 theme을 변경했다.

에러가 빡 낫다.. 뭐지

> 2019-12-21 내가 github에 push를 해도 바로 반영되는게 아니고 jekyll build를 해줘야 볼 수 있다.

에러가 났던건 \_config.yml에 깃에서 제공하는 theme 말고 다른걸 사용해보고 싶었는데 설정을 잘 못 잡아서 그랬다.  
더 세세한 설정은 외부 테마 config를 적용 후 내가 원하는 곳을 바꿔야 한다. 현재는 오류난게 보기 싫고 CSS적용이 되게 외부 theme 설정만 붙여놨다.  
근데 여기는 remote theme이랑 theme은 주석이네...
