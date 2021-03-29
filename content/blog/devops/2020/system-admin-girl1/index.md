---
title: 만화로 배우는 리눅스 시스템 관리 1권
date: "2021-03-14"
tags: ["devops", "linux"]
---

전에 읽었던 책이지만, 설명을 쉽게 풀어서 리눅스 입문하기 좋은 책이라고 생각되어 찾아봤습니다.  
서울전자도서관에선 계약 문제인지 검색이 더 이상 되지 않았습니다.  
다행히 경기도사이버도서관에서 1,2권이 있어 대출 후 책을 읽어가며 요약을 해보려고 합니다.

## 명령어 & 셸 스크립트 입문

### 1화 다른 컴퓨터를 리모트로 조작하고 싶어(SSH)

`ssh`(Secure SHell) - 다른 PC에서 동작하는 프로그램을 자기 PC 화면에 표시해서 조작할 수 있게 하는 명령어.

터미널을 실행해서 ssh 명령어 뒤에 로그인할 사용자명, @, 접속할 로그인 PC 주소를 입력합니다.

```bash
ssh {로그인할 사용자명}@{접속할 로그인 PC 주소}
```

X를 활용해 SSH 사용\
**ssh 옵션**(X를 사용할 때, X는 리눅스에서 화면 표시와 입력을 담당하는 구조)\
-Y : X 전송 지정\
-C : 통신 내용을 압축(응답 속도를 좋게함)

연결 후 nautilus 명령어 실행

exit - 로그아웃 명령어, SSH 접속을 끊음

rsh(Remote SHell)은 네트워크에 그대로 내보내기 때문에 네트워크 감시자가 모을 수 있습니다.  
rsh 보다 ssh 사용을 하면 암호화된 통신이 가능합니다.

---

### 2화 임시로 관리자 권한을 얻고 싶어(sudo)

접근 권한은 파일 소유자가 아니면 바꿀 수 없지만, 처리할 수 있는 사용자가 있습니다. -> root

`sudo` - 관리자 권한을 행사할 수 있음

```bash
sudo {실제 사용하고 싶은 명령어} {명령어 인자}
```

GUI이라면 gksudo -sync 명령어 사용

**우분투에서 root로 로그인하기**\
sudo -i 또는 sudo su로 가능 (명령어 입력 후 비밀번호를 입력해야 한다.)

---

### 3화 다양한 문자열을 한 번에 검색하고 싶어(grep)

`grep` - 파일 내용 중에 찾는 문자열이 포함되었는지를 조사해준다.(global regular expression print)

```bash
grep {옵션} "검색하고 싶은 문자열" {찾을 파일이 있는 폴더 경로(검색 시작점)}
```

**grep 옵션**\
-r : 서브 폴더까지 검색하도록 지정

정규 표현식(regular expression)  
| 값 | 의미 |
| --- | --- |
| () | 그룹화 |
| \| | 좌우 중 하나 |
| ? | 직전 표현이 0회 또는 1회 등장 |
| \* | 직전 표현이 0회 이상 연속해서 등장 |
| \+ | 직전 표현이 1회 이상 연속해서 등장 |
| . | 임의의 한 문자 |
| ^ | 줄 머리 |
| \$ | 줄 끝 |

> 파일 내용을 대문자 소문자 차이를 무시하고 검색

```bash
grep -r -i "sungjun hwang" 디렉토리 경로
```

> 파일 내용을 대문자 소문자 차이를 무시하고 정규 표현식으로 검색

```bash
grep -r -i -E "((성준) *(황)|sungjun +hwang)" 디렉토리 경로
```

---

### 4화 터미널에서도 대화형으로 파일을 편집하고 싶어(vim)

`vim` - 명령줄용 텍스트 에디터(vi의 강화판)

> vim 설치 명령어

```bash
sudo apt-get install vim
또는
yum install vim
```

```bash
sudo vim {편집하고 싶은 파일 경로}
```

i - 끼워넣기, INSERT\
끼워넣기 모드 조작 방법

- 화살표로 키로 커서를 움직이기
- 키 입력으로 문자를 입력하기
- 백스페이스키나 Del 키로 글자 지우기 등

ESC - 편집을 끝낸다.

**모드의 종류**\
노멀 모드 - ESC로 돌아온 경우\
끼워넣기 모드 - i, 일반 에디터와 같은 조작 방법\
치환 모드 - Shift + r, 치환 모드용 조작 방법\
선택 모드 - v, 선택 모드용 조작 방법\
검색 모드 - /, 검색 모드용 조작 방법\
등등...

:wq - 저장하고 종료(Write, Quit)

**검색 모드**\
/ 키를 눌러서 검색 모드로 들어가고 검색하고 싶은 문자열을 입력하고 Enter\
N - 다음으로 검색된 곳으로 이동\
Shift + N - 이전에 검색된 곳으로 이동\
정규 표현식도 사용 가능

> 더 자세한 명령어는 아래 사이트 참조

[Vim 치트 시트](https://vim.rtorr.com/lang/ko)

---

### 5화 vim에서도 복사 & 붙이기 & 되돌리기를 하고 싶어(yank)

`yank` - vim에 있는 클립보드 같은 것(vim 안에서만 사용)

> 사용방법

1. 노멀 모드에서 v 키 입력 -> 비주얼 모드로 전환
2. 범위를 정하고 y 키 입력
3. 붙이고 장소로 이동하고 Shift + p 입력
4. 여러번 반복하고 싶은 경우 -> 10번 반복하고 싶다면 10 입력 후 Shift + p

> 콘솔 일시정지

- Ctrl + z는 일시 정지 - 맥은 Control + z\
fg를 입력해서 돌아가기(ForeGround)

> vim에서 되돌리기(Undo)

- 노멀 모드에서 u 키 입력\
다른 모드에 있다면 esc 키로 노멀 모드로 돌아온 다음 u 키

> 되돌리기의 되살리기(Redo)

- Ctrl + r

> Undo, Redo 모두 횟수를 지정해 실행 가능

- 10u / 10 ctrl + r
- 9999u 는 첫 상태로 되돌아가는 것

---

### 6화 갑작스러운 네트워크 끊김에서 복귀하고 싶어(가상 터미널)

GNOME 단말은 데스크톱 환경에서 콘솔 환경을 들여다보는 창\
가상 단말은 콘솔 환경에서 GNOME 단말이 하는 것과 같은 걸 하는 애플리케이션

> tmux 설치

```bash
sudo apt-get install tmux <- ssh로 연결된 서버에 설치

tmux <- 입력해서 실행

tmux attach <- ssh로 다시 서버에 접속한 후 재연결
```

> 빠져나오기

- ctrl + b 입력 후 d(Detach) 키 입력

> ctrl + b 입력 후 동작 키

- d - Detach
- c - Create (새로운 탭 생성)
- p - Previous (이전 탭 이동)
- n - Next (다음 탭 이동)

ctrl 키와 영숫자 키 조합은 다른 애플리케이션에서도 다양하게 사용되기 때문에 충돌이 나지 않기 위해 이렇게 씁니다.

---

### 7화 다른 화면도 보면서 작업하고 싶어(화면 분할)

> tmux를 실행하고 화면 분할하는 방법

- ctrl + b 입력 후 " 키를 입력 -> 화면 중앙으로 나뉨

> 분할된 화면의 포커스 전환

- ctrl + b 다음 가고싶은 방향 화살표 키 입력

> 화살표나 마우스 휠로 스크롤 하는 법

1. ctrl + b 다음 [ 키 입력
2. 내용 확인 끝났으면 q 키 또는 esc로 원래 상태로 돌아올 수 있다.

> 세로 분할하는 방법

- ctrl + b 다음 % 키 입력

화면을 종료하고 싶은게 있다면 포커스를 옮기고 exit

> 분할된 화면의 크기 변경 방법

1. ctrl + b 키를 눌러 tmux 자체를 조작하는 상태로 둔다.
2. ctrl + 방향키로 분할 경계선을 움직인다.

---

### 8화 최근 실행한 명령어를 호출하고 싶어(명령어 이력)

셸에서 방향키를 위아래로 움직이면 이력을 확인할 수 있다.\
vim ~/.bash_history 에서 이력을 볼 수 있다.\
history 명령어 사용해도 볼 수 있다.

> 예전의 명령어를 찾고 싶을 때(후방 검색)

ctrl + r을 누른다. 맥은 control

> 역방향으로 검색하는 방법

zsh는 기본적으로 ctrl + s 입력하면 전방 검색이 가능

vim ~/.bashrc로 bash 설정 파일을 열고 shift + g로 파일 마지막으로 이동\
새로운 줄을 추가한 다음 stty stop undef 입력하고 저장\
적용을 위해 bash를 재시작

ctrl + s 키 입력 -> 검색 모드로 전환\
현재 위치 기준으로 앞의 이력을 검색

---

### 9화 오래전에 실행한 명령어를 호출하고 싶어(명령어 이력 검색)

오랫동안 쓰지 않은 명령어는 보통 남아 있지 않는다.

> 이력 개수를 늘리는 방법

```bash
# 설정 파일을 연다.
vim ~/.bashrc

# shift + g로 파일 끝으로 이동하고
# 삽입모드로 아래 코드 추가 후 :wq로 나오기 (로그아웃 로그인 필요)
export HISTSIZE 10000
export HISTFILESIZE=10000
```

> GNOME 단말에 이력을 동기화시키는 방법

```bash
# GNOME 단말로 여러 탭을 사용하면 각각 다른 이력을 가지게 된다.
# 다른 화면에서 bash 명령어 이력을 검색할 수 없게 된다. 아래 설정으로 해결

# 설정 파일을 연다.
vim ~/.bashrc

function share_history {
    history -a
    history -c
    history -r
}
PROMPT_COMMAND='share_history'
shopt -u histappend
```

> SSH 넘어서 명령어를 하나만 실행하기

```bash
# 명령어 끝에 접속한 곳에서 실행하고 싶은 명령어를 적는다.
ssh mint@server /scripts/do_backup.sh
```

---

### 10화 네트워크 건너서 파일을 복사하고 싶어(scp)

`scp` - Secure CoPy의 약어, 네트워크를 통해서 파일을 복사하는 명령어.

> 사용방법

사용할 곳과 보낼 곳에 scp가 설치되어 있어야 한다.

```bash
# scp 파일 로그인할 사용자@접속할 컴퓨터:복사할 위치
scp .file.ext mint@192.168.1.10:/tmp/
```

로그인에 사용한 사용자 홈 = mint@192.168.1.10:~/\
다른 사용자의 홈 = mint@192.168.1.10:~ohno/\
상대 경로는 로그인한 홈 디렉터리가 기점이 됨 = mint@192.168.1.10:../../tmp/

> 다른 PC에서 내 PC로 가져오기 (반대방향)

scp 복사 원본 복사(다른 컴퓨터에 있는 파일) 대상(자신의 PC 경로)

> 와이드카드나 디렉터리로 복사

```bash
# 파일명 끝이 .log인 파일을 모드 복사
scp mint@host:/tmp/*.log /tmp/

# -r(recursively) 옵션으로 디렉터리를 재귀적으로 복사.
# 복사 원본 경고로 디렉터리 지정 (/tmp/results 끝에 /)
scp -r mint@host:/tmp/results/ /tmp/
```

---

### 11화 시스템 과부하를 파악하고 싶어(top)

`top` - 시스템 부하 상태를 조사하는 명령어

```bash
Processes: 708 total, 2 running, 706 sleeping, 2998 threads
Load Avg: 1.29, 1.22, 1.33  CPU usage: 2.78% user, 2.90% sys, 94.30% idle
SharedLibs: 474M resident, 89M data, 30M linkedit.
MemRegions: 188421 total, 3982M resident, 290M private, 3083M shared.
PhysMem: 15G used (2020M wired), 671M unused.
VM: 263T vsize, 3210M framework vsize, 257988(0) swapins, 394738(0) swapouts.
Networks: packets: 11857651/13G in, 8349910/1555M out.
Disks: 7477011/195G read, 6148251/104G written.

PID    COMMAND      %CPU TIME     #TH   #WQ  #PORT MEM    PURG   CMPRS  PGRP
29678  iTerm2       9.0  00:15.52 7     4    265   135M   7072K  32M    29678
349    WindowServer 8.1  04:13:24 24    4    2190  1502M  11M    364M   349
63721  top          6.3  00:02.43 1/1   0    28    12M    0B     0B     63721
0      kernel_task  4.5  02:38:05 460/8 0    0     80M    0B     0B     0
340    bluetoothd   1.4  09:49.64 4     2    433   7298K  0B     1808K  340
63126  Google Chrom 1.3  00:17.31 21    1    173   74M+   0B     16M    21772
```

Load Avg

- load average, 부하 지표
- CPU가 처리하는 걸 기다리는 작업의 갯수.
- 1분당 평균으로 몇개의 일이 쌓이는지를 나타내는 값.

%CPU와 TIME

- %CPU는 어느 프로세스가 얼만큼 쓰고 있는지 알려준다.
- TIME은 실제로 CPU를 사용한 시간

top 명령어 실행 중

- c를 누르면 COMMAND 상세 표시 전환(나는 mode[n] 이런게 뜨면서 안된다..ㅜ)\
- q를 누르면 종료

> 프로세스 종료 방법

```bash
# 비밀번호 입력 후 성공하면 아무러 메시지가 표시되지 않는다.
sudo kill {종료하고 싶은 PID}

# 여러 프로세스를 한 번에 종료하기.
# 프로세스 ID들을 스페이스로 띄어서 나열
sudo kill {종료하고 싶은 PID} {종료하고 싶은 PID} {종료하고 싶은 PID}
```

> 민트의 정리

- load average >= CPU 코어수가 되면 과부하 상태
- CPU 사용률과 CPU 시간 양쪽이 큰 프로세스는 과부하 원인의 가능성이 높음
- 과부하 원인인 프로세스는 kill 명령어로 종료함

---

### 12화 시스템 메모리 부족을 파악하고 싶어(top 표시 전환)

Load Avg가 높은 이유는 CPU 사용률 또는 메모리 부족이 원인

프로그램은 필요할 때만 프로세스를 실행해서 처리가 끝나면 종료하는 것과\
컴퓨터를 사용하는 동안 계속 프로세스를 실행시켜야 하는 것이 있다.\
이런 상주형 프로세스를 서비스라고 부른다.

> 기동 스크립트 사용법

```bash
# service 명령어 (Ubuntu, CentOS, RedHat 등)
sudo service apache2 restart

# init.d 명령어 (Debian 등)
sudo /etc/init.d/apache2 restart
```

스왑 영역도 전부 사용하게 되면 SSH 접속도 불가능할 때도 있다. (OOM Killer가 동작)

메모리 사용량 순서 - shift + m\
CPU 시간 순서로 나열 - shift + t\
CPU 사용량 순서로 돌아가려면 - shift + p

---

### 13화 로그 파일에서 필요한 줄만 뽑고 싶어(파이프라인)

`grep` - 파일에서 내용을 찾는 명령어

> 사용방법

```bash
# 재귀적으로 /var/log/apache2/ 안에서 orange를 포함하는 파일을 찾는다.
grep -r "orange" /var/log/apache2/

# 대상파일에서 orange를 찾는다.
grep "orange" /var/log/apache2/access.log
```

`less` - 텍스트 파일을 한 번에 한 화면씩 보여주는 터미널 페이저

```bash
# grep과 파이프라인을 이용해 함께 사용된다.
grep "orange" /var/log/apache2/access.log | less
```

`cat` - 지정한 파일 내용을 읽어서 그대로 출력하는 명령어

`zcat` - 압축 파일을 읽어서 내용을 풀어서 출력하는 명령어(gzip 형식 전용 .gz, .tgz)

`xzcat` - xz 형식용 (.xz 파일)

`unzip` - zip 형식용

`tail` - 파일 내용 끝부분만 출력하는 명령어(-f 옵션을 통해 실시간으로 출력)

```bash
# 이런식으로 조합해 사용 가능
tail -F access.log | grep "/retro" | grep -v "/live" | less
```

> 파일 내용을 다음 명령어에 출력하는 시작 그룹

파일 내용을 읽어서 출력

- cat
- zcat
- xzcat

파일에 추가된 부분을 출력

- tail

> 중간에서 이전 명령어 출력을 가공하는 중간 그룹

- grep - 해당하는 줄만 출력
- sort - 재정렬
- cut - 내용을 잘라냄
- uniq - 중복된 걸 제거
- sed - 내용을 변경
- awk - 내용을 변경

> 이전 명령어 출력을 가공하는 최종 그룹

- less - 스크롤할 수 있게 출력
- tee - 파일을 저장
- wc - 줄 수나 문자 수를 카운트
- head - 첫 부분만 추출

> 오코의 정리

- 파이프라인을 사용하면 명령어끼리 조합해서 사용 가능
- grep은 다른 명령어 출력을 가공하는 데도 사용 가능
- zcat을 사용하면 압축된 로그 파일에서 바로 파이프라인으로 연결 가능

---

### 14화 작업 절차를 자동화하고 싶어(셸 스크립트)

cd 명령어를 인수 없이 실행하면 홈 디렉터리로 이동함.

```bash
  Documents cd
  ~
```

> 스크립트 작성방법

setup.sh 같은 sh 확장자 파일을 생성한다.\
vim setup.sh을 실행해 편집한다.\
첫번째 줄에 아래와 같이 입력한다.

```bash
#!/bin/bash
```

셔뱅(shebang)으로 스크립트를 실행하는 프로그램(인터프리터)을 지정, Hash-Bang이라고도 한다.\
프로그램 전체 경로를 적으면 스크립트를 실행하는 프로그램을 셸이 자동으로 전환해준다.\
bash 이외에도 /usr/bin/perl /usr/bin/ruby1.9.1 등이 있다.

> 스크립트를 실행 권한

스크립트가 만들어졌다면 실행 권한을 주어야 한다.\
`chmod` - 권한을 설정하는 명령어

```bash
chmod +x setup.sh
```

> 스크립트 실행

파일명을 쳐서 명령어 실행이 가능한 건 파일이 /bin/이나 /usr/bin/ 같은 특별한 장소에 있을 때 가능하다.

- O - /home/mint/setup.sh
- O - ./setup.sh
- O - ~mint/setup.sh
- X - setup.sh

> 에러가 발생한 곳에서 처리를 끝내도록 하는 법

```bash
# 이전 명령어가 정상 종료했는지 확인하기
# 이상 종료했으면 스크립트 실행을 중단하기
if [ $? != 0 ]; then exit; fi
```

> 민트의 정리

- bash용 셸 스크립트를 작성하려면 텍스트 파일 첫 줄에 #!bin/bash라고 적고 두 번째 줄 이후는 자동 실행하고 싶은 셸 명령어를 작성한다.
- 셸 스크립트는 chmod +x 파일명으로 실행 권한을 설정한다.
- 명령어가 이상이 생겨서 그 시점에서 스크립트 실행을 중단하고 싶을 땐 if [ $? != 0 ]; then exit; fi 라고 적는다.

---

### 15화 같은 문자열을 스크립트에서 재사용하고 싶어(셸 변수)

> 스크립트 일괄 치환

vim에서 일괄 치환을 쓰려면 esc키로 노멀 모드로 돌아간 후 아래 명령어 입력 후 enter

```bash
# %s 전체 치환 명령어
# 명령어 각 부분을 구분하는 문자 / 이외에도 임의의 문자를 사용 가능
%s/원문/수정문/
```

> 변수 지정

```bash
# 변수명 = 변수값, x를 ~이라고 함이라는 표현에 가깝다.
log=/var/log/apache2/access.log

# 사용은 $log, ${log}
less $log
```

> 명령어를 변수 지정

```bash
# tar xfv 파일 경로 -> 파일 압축 풀기
# tar cfv 파일 경로 -> 파일 압축
tar_extract="tar xfv"
tar_compress="tar cfv"

# 문자열을 eval 명령어에 넘기면 명령어열로 실행 가능
eval "$tar_extract file.tar.gz"
eval "$tar_compress directory"
```

> 공통 부분을 변수로 지정하는 방법

```bash
base=/var/log/apache2
latest=${base}/access.log
prev=${base}/acesss.log.7.gz
```

> 오코의 정리

- 터미널이나 셸 스크립트에서 변수명=문자열이라고 작성하면 오른쪽 문자열이 값이고 왼쪽에 있는 게 이름인 변수가 정의됨
- 그 이후는 $변수명 또는 ${변수명}으로 그 값과 동일하게 사용 가능
- 유지 보수하기 쉽도록 변수명은 변수에 저장될 내용을 잘 설명하는 이름을 사용하기

---

### 16화 작업 환경과 상태를 정해서 스크립트를 실행하고 싶어(환경 변수)

`환경 변수` - 자기가 정의하지 않아도 $변수명으로 값을 참조할 수 있는 특수한 변수.

${HOME} or $HOME - 홈 디렉토리 경로(/home/user, /home/admin, /home/mint)

```bash
# 지금 환경에서 어떤 환경 변수를 쓸 수 있는지 볼 수 있다.
env
```

> 사용하기 편한 환경 변수

- HOME - 현재 사용자의 홈 디렉터리 경로
- PWD - 현재 디렉터리(작업 디렉터리) 경로
- EDITOR - 정해진 텍스트 에디터(vim, Emacs, nano 등) 경로
- PAGER - 정해진 페이저(less, lv 등) 경로
- USER - 현재 사용자의 사용자명
- GROUP - 현재 사용자의 그룹명
- HOSTNAME - 머신의 호스트명

> 명령어 치환

명령어열 실행 결과의 문자열로 치환된다.

```bash
# 2021년 3월 29일 월요일 22시 50분 43초 KST
date

# 210329
date +%y%m%d

# 2021-03-29
date +%Y-%m-%d

# 2021y03m29d22h
date +%Yy%mm%dd%Hh
```

> 오코의 정리

- 환경 변수를 사용하면 셸 스크립트 실행 시 값이 변하므로 환경에 맞는 처리가 가능해짐
- $(명령어열) 또는 \`명령어열\`이라고 적으면 명령어열 실행 결과를 문자열로 적은 것과 같아짐(명령어 치환)
- 명령어 치환에서 파이프라인이나 변수 등도 사용 가능

---

### 17화 로그 파일에서 필요한 줄만 뽑고 싶어(cut)

파이프라인을 써서 명령어끼리 조합하기

STEP 1

```bash
# calculator 파일 내용 보기
cat calculator.py

# 기본 계산기
def add(a, b):
	return a+b

def subtract(a, b):
	return a-b

def multifply(a, b):
	return a*b
```

STEP 2

```bash
# return을 포함하지 않은 줄만 출력
cat calculator.py | grep -v "return"

# 기본 계산기
def add(a, b):

def subtract(a, b):

def multifply(a, b):
```

STEP 3

```bash
# 원하는 부분만 잘라내기, less를 연결해 결과를 눈으로 확인할 수 있음
cat calculator.py | grep -v "return" | cut -d " " -f 1 | less
#
def

def

def
```

---
