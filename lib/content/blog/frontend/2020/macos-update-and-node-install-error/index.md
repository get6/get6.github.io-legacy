---
title: mac OS Update와 Node Updagrade 후 발생한 에러
date: "2020-11-09"
description: "mac OS를 업데이트 하면 Xcode를 실행해서 install을 해야하는지 꼭 확인하자"
tags: ["frontend", "node"]
---

macOS Catalina 10.15.7로 업데이트 후에 오랜만에 brew upgrade를 실행 해 node가 15버전이 되었다.(아..안돼..!)

그리고 gatsby develop로 블로그 프로젝트를 실행시키는데 여러 에러가 나왔다.

그래서 node 버전을 올림겸 package.json파일에서 버전을 전부 최신으로 올렸다.

sharp 관련해서 에러가 났는데 .node_module과 .cache파일을 삭제 후에 npm i 명령어로 실행하면 아래와 관련한 에러가 나왔다.

```bash
@sjhwang-MacBookPro ➜ get6.github.io git:(source) ✗ npm i
npm ERR! code 1
npm ERR! path /Users/sjhwang/GitHub/get6.github.io/node_modules/sharp
npm ERR! command failed
npm ERR! command sh -c node-gyp rebuild
npm ERR! CC(target) Release/obj.target/nothing/../node-addon-api/nothing.o
npm ERR!   LIBTOOL-STATIC Release/nothing.a
npm ERR!   TOUCH Release/obj.target/libvips-cpp.stamp
npm ERR!   CXX(target) Release/obj.target/sharp/src/common.o
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp info using node-gyp@7.1.2
npm ERR! gyp info using node@15.1.0 | darwin | x64
npm ERR! gyp info find Python using Python version 3.9.0 found at "/usr/local/opt/python@3.9/bin/python3.9"
npm ERR! gyp info spawn /usr/local/opt/python@3.9/bin/python3.9
npm ERR! gyp info spawn args [
npm ERR! gyp info spawn args   '/usr/local/lib/node_modules/npm/node_modules/node-gyp/gyp/gyp_main.py',
npm ERR! gyp info spawn args   'binding.gyp',
npm ERR! gyp info spawn args   '-f',
npm ERR! gyp info spawn args   'make',
npm ERR! gyp info spawn args   '-I',
npm ERR! gyp info spawn args   '/Users/sjhwang/GitHub/get6.github.io/node_modules/sharp/build/config.gypi',
npm ERR! gyp info spawn args   '-I',
npm ERR! gyp info spawn args   '/usr/local/lib/node_modules/npm/node_modules/node-gyp/addon.gypi',
npm ERR! gyp info spawn args   '-I',
npm ERR! gyp info spawn args   '/Users/sjhwang/Library/Caches/node-gyp/15.1.0/include/node/common.gypi',
npm ERR! gyp info spawn args   '-Dlibrary=shared_library',
npm ERR! gyp info spawn args   '-Dvisibility=default',
npm ERR! gyp info spawn args   '-Dnode_root_dir=/Users/sjhwang/Library/Caches/node-gyp/15.1.0',
npm ERR! gyp info spawn args   '-Dnode_gyp_dir=/usr/local/lib/node_modules/npm/node_modules/node-gyp',
npm ERR! gyp info spawn args   '-Dnode_lib_file=/Users/sjhwang/Library/Caches/node-gyp/15.1.0/<(target_arch)/node.lib',
npm ERR! gyp info spawn args   '-Dmodule_root_dir=/Users/sjhwang/GitHub/get6.github.io/node_modules/sharp',
npm ERR! gyp info spawn args   '-Dnode_engine=v8',
npm ERR! gyp info spawn args   '--depth=.',
npm ERR! gyp info spawn args   '--no-parallel',
npm ERR! gyp info spawn args   '--generator-output',
npm ERR! gyp info spawn args   'build',
npm ERR! gyp info spawn args   '-Goutput_dir=.'
npm ERR! gyp info spawn args ]
npm ERR! gyp info spawn make
npm ERR! gyp info spawn args [ 'BUILDTYPE=Release', '-C', 'build' ]
npm ERR! warning: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/libtool: archive library: Release/nothing.a the table of contents is empty (no object file members in the library define global symbols)
npm ERR! ../src/common.cc:23:10: fatal error: 'vips/vips8' file not found
npm ERR! #include <vips/vips8>
npm ERR!          ^~~~~~~~~~~~
npm ERR! 1 error generated.
npm ERR! make: *** [Release/obj.target/sharp/src/common.o] Error 1
npm ERR! gyp ERR! build error
npm ERR! gyp ERR! stack Error: `make` failed with exit code: 2
npm ERR! gyp ERR! stack     at ChildProcess.onExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:194:23)
npm ERR! gyp ERR! stack     at ChildProcess.emit (node:events:327:20)
npm ERR! gyp ERR! stack     at Process.ChildProcess._handle.onexit (node:internal/child_process:277:12)
npm ERR! gyp ERR! System Darwin 19.6.0
npm ERR! gyp ERR! command "/usr/local/Cellar/node/15.1.0/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
npm ERR! gyp ERR! cwd /Users/sjhwang/GitHub/get6.github.io/node_modules/sharp
npm ERR! gyp ERR! node -v v15.1.0
npm ERR! gyp ERR! node-gyp -v v7.1.2
npm ERR! gyp ERR! not ok

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/sjhwang/.npm/_logs/2020-11-09T01_17_55_584Z-debug.log
```

구글링 하다보니 이렇게 하면 됬다.

기존에는 설치한 적 없던 vips를 설치해야 했다. 설치는 꽤 걸린다.

> **그러나 node 15버전인 경우에는 이럴 필요 없이 안정화 버전으로 내려야 한다. (아래 참조)**

```bash
rm -rf /Users/{username}/.npm/_libvips
brew install vips // If this command throws some error about could not download cfitsio, just ignore.
rm -rf node_modules
npm i
```

설치 후 실행하니 또 다른 에러가 나왔다.

```bash
ERROR

Processing /Users/sjhwang/GitHub/get6.github.io/content/blog/frontend/2020/blog-with-gatsbyjs/images/assets_folder.png failed

Original error:
Command failed with ENOENT: /Users/sjhwang/GitHub/get6.github.io/node_modules/pngquant-bin/vendor/pngquant - --strip --quality 50-75
spawn /Users/sjhwang/GitHub/get6.github.io/node_modules/pngquant-bin/vendor/pngquant ENOENT




  WorkerError: Processing /Users/sjhwang/GitHub/get6.github.io/content/blog/frontend/2020/blog-with-gatsbyjs/images/assets_folder.png failed
  Original error:
  Command failed with ENOENT: /Users/sjhwang/GitHub/get6.github.io/node_modules/pngquant-bin/vendor/pngquant - --strip --quality 50-75
  spawn /Users/sjhwang/GitHub/get6.github.io/node_modules/pngquant-bin/vendor/pngquant ENOENT
  
  - jobs-manager.ts:318 enqueueJob
    [get6.github.io]/[gatsby]/src/utils/jobs-manager.ts:318:21
  
  - task_queues:93 processTicksAndRejections
    node:internal/process/task_queues:93:ㅜ5
  

not finished Generating image thumbnails - 0.367s
not finished run page queries - 0.329s
```

node_modules/pngquant-bin/vendor/pngquant 파일이 없었고 결국 node 15 최신 버전에서 안정화 버전인 14.15.0으로 돌아가기로 했다.

자꾸 알 수 없는 에러가 났던 문제는 node version이었다.

그 다음부턴 문제 없이 동작한다~
