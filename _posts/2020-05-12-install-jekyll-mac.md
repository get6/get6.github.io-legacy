---
layout: post
title: 맥에서 Jekyll 설치하기
tags: ruby jekyll mac
comments: true
---

맥은 기본적으로 ruby가 설치되어 있지만, Homebrew를 이용해 진행하시기를 추천합니다.

저는 With rbenv 방식 보단 With Homebrew만으로 진행하겠습니다.

[Jekyll mac os](https://jekyllrb.com/docs/installation/macos/)에 접속해 가이드를 따라합니다.

zsh를 사용하시는 분은 
```
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
```
로 등록합니다. 터미널을 종료하시구 다시 터미널을 실행시켜야 $PATH 적용이 됩니다.

bundler: command not found: jekyll이 발생하는 경우 

ruvy -v로 버전을 확인 하면 저는 2.7.1이 나옵니다.

X.X.0 부분을 저는 2.7.0으로 변경히고 1번을 실행시킵니다.

1. echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.zshrc

2. bundle install을 실행합니다.

bundle exec jekyll serve을 실행하면 로컬에서 실행이 가능해집니다.