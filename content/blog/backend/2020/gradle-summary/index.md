---
title: Gradle 정리
date: "2020-03-16"
tags: ["backend", "gradle"]
---

### Java source set

Main – 실제 작동 소스코드. 컴파일해서 JAR파일로 들어감.  
Test – 단위 테스트 소스코드. 컴파일해서 Junit이나 TestNG로 실행

### 명령어

apply plugin: ‘java’ – Java 프로그램을 위한 기능을 제공하는 플러그인

```groovy
repositories – 저장소 {
    maveCentral() – Apache Maven 중앙 저장소를 이용하기 위함
    jcenter() – 각종 빌드 도구에서 사용할 수 있는 공개 저장소
}

dependencies - 의존 라이브러리 {
    compile – 컴파일 시 참조됨
    testCompile – 테스트 컴파일 시 참조됨
}
```

### 라이브러리 지정

1. compile:‘com.google.guava:guava:22.0’
2. compile group: ‘com.google.guava’, name:‘guava’, version:’22.0’

‘그룹 : 이름 : 버전’

- 그룹은 라이브러리가 속해있는 기업 및 단체
- 이름은 라이브러리명
- 버전은 사용하고자 하는 버전입력

mainClassName을 프로젝트명과 같게 지정해주어야 run으로 응용 프로그램을 실행 할 수 있다.

### 기본 프로젝트 레이아웃

- src/main/java – 자바 소스 코드를 관리하는 디렉토리
- src/main/resources – 리소스를 관리하는 디렉토리
- src/test/java – 테스트 자바 소스를 관리하기 위한 디렉토리
- src/test/resources – 테스트 리소스를 관리하기 위한 디렉토리
- src/sourceSet/java – 자바 소스를 위한 특정한 source set
- src/sourceSet/resources – 자바 리소스를 위한 특정한 source set
