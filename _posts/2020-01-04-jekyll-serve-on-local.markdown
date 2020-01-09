---
layout: post
title: Github pages jekyll 생성 후 로컬에서 build하는 방법
tags: jekyll blog
---

회사 PC에서 생성한 지킬 프로젝트를 집에있는 노트북에다가 옮기는 작업을 이제야했다.  

그 과정에서 시행착오와 귀차니즘이 섞여 어제 밤에 슬쩍보다가 오늘에서야 끝냈다.

먼저 나는 [지킬사이트](https://jekyllrb-ko.github.io/docs/windows/)에서 하라는대로 rubyinstaller-devkit-2.6.5-1-x64설치만하면 됬었는데 Bash도 추가적으로 깔아버려서 진행이 좀 꼬였었다.  

윈도우 스토어에서 Ubuntu를 깔고 지킬을 실행하니 지킬은 ruby 2.4이상버전을 원하고 우분투 터미널은 ruby가 2.3에서 업데이트가 안되 진행이 안되었다.  

지킬사이트가 생성되길 원하는 위치로 이동 후 간단하게 jekyll new <원하는명칭>을 통해 서버가 올라간 걸 확인 후  
[기존 블로그](https://get6.github.io/) 위치에서 jekyll serve --livereload --trace를 실행하니 뭐가 잘 안됬다.  

기존 블로그는 외부 theme을 이용해서 gemfile과 .gemspec확장자 파일이 있어서 gemfile.lock이 없었다.  

이것저것 에러 로그 살펴보면서 안깔려있는건 설치 or 삭제 후 설치를 통해 실행하고 jekyll build를 하니 Gemfile.lock이 생성되고 또 다른 에러가 났다.  

_config.xml에 plugins에 쓰여있는 항목들은 gemspec파일에다 추가하고 build exec jekyll serve를 실행했다.  
아래는 나에게 빠졌던 plugin이었다.
````
spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
````