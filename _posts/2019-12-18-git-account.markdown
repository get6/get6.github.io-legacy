---
layout: post
title: 저장소마다 user 설정
date:   2019-12-18 15:19:00 +0000
categories: jekyll update
---

회사 PC에 gitlab계정과 git을 설치하고 내 github 레포지토리도 한 pc에 가져왔다.

점심시간마다 vue, python 공부를 하는데 github에 올릴 때 마다 회사계정으로 올라가 내 개인계정 히스토리에는 커밋을 안했다는 표시 때문에

이리저리 알아봤다. https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/
이 URL을 따라하는 와중에 ssh-keygen을 통해 개인용, 회사용을 따로 세팅한다고 하는데 
나는 집에 ssh key가 있고 회사에는 없는데 4번째에서 따라갈 수가 없었다.

설정하는 와중에 git config user.name과 user.email이 git 서버에 등록된 내 계정들인가 생각이 들었고
전에 gitlab에는 회사 PC ssh key를 등록했고 github에도 내 ssh key를 등록한 기억이 있었다.

결국 포기해야하나 싶었는데 4번째에 막혀서 포기해야하나 싶었는데
https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
여기에서 글로벌 계정과 각 repository에 계정 설정을 할 수 있었다.

내가 한 방식은 repository로 들어가 .git 폴더에 config파일을 vscode로 열어
[user]
	name = get6
	email = charles9306@icloud.com
마지막에 추가했다.

그리고나서 github desktop 프로그램을 실행시키는 내 개인계정 이미지가 나오기 시작했다 야호!

설정 중에 알아낸건데
git config --global user.name = "get6"이렇게 하면 user.name에 = 이 등록된다
git config --global user.name "get6"을 하면 이미 설정된 이름이 있어 More than one value for the key user.name Git 이렇게 경고가 뜨고 실행이 안된다. 그럴땐 git config --global --replace-all user.name "get6" 를 하면된다.
