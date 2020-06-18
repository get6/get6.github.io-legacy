---
layout: post
title: 윈도우 Chocolatey 설치
tags: windows chocolatey
comments: true
---

맥북을 쓰다보니 brew를 이용하면 여러 언어나 개발 프로그램을 명령어 한 줄로 설치가 가능했다.  
brew search {찾고자 하는 단어}로 있는지 확인한 후에,  
있으면 brew install {찾고자 하는 단어}  
없으면 brew cask install {찾고자 하는 단어}  
그래도 없으면 그 홈페이지 들어가서 다운로드를 해야했다.  

이런 식으로 사용하다 보니 집에 있는 윈도우즈도 포맷하고 저런 식으로 프로그램을 설치해 깔끔하게 깔고 싶어졌다. 

1. PowerShell을 꼭 관리자 모드로 연다.  
2. [chocolatey install](https://chocolatey.org/install) 링크로 넘어가 복사하라는 명령어를 실행한다.
3. 설치 완료.

개인적으로 설치한 목록들이다.  
choco install googlechrome  
choco install wordweb-free  
choco install 7zip.install  
choco install git.install  
choco install nodejs.install  
choco install vscode  
choco install androidstudio  
choco install intellijidea-ultimate  
choco install github-desktop  
choco install openjdk  
choco install flutter  
refreshenv  
choco install jekyll  

.install이 붙은게 있고 아닌게 있다.  
7zip.install과 7zip 패키지가 존재하는데 일반적으로 .install이 붙은 곳이 다운로드 수가 높았다.  
chocolatey는 가상패키지와 메타패키지 개념을 가지고 있다.  
.install이 붙는 패키지는 웹사이트에서 다운로드 받은 것처럼 설치가 되는거 같다.  
프로그램 자체가 아닌 경우에 구분하는 거 같음(git을 다른 프로그램에서 사용할 수도 있고 git을 cmd에서 실행할 수 있어서?)

마지막에 설치한 jekyll은 에러가 난다.. 해결책을 찾아봐야겠다.