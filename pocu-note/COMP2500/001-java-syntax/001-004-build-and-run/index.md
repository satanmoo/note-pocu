---
title: 빌드 및 실행
tags:
  - COMP2500
  - week1
aliases:
  - 빌드 및 실행
---
# 빌드 및 실행


## class 폴더

![img_21.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-1.png)

컴파일된 바이트 코드가 저장되는 폴더

## 커맨드 라인에서 컴파일 하기

![img_22.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-2.png)

![img_23.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-3.png)

## `javac` 명령어

![img_24.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-4.png)

![img_25.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-5.png)

컴파일된 결과는 소스코드(src 폴더)의 패키지 구조와 동일함

## 프로그램 실행

![img_26.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-6.png)

## `java` 명령어

![img_27.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-7.png)

main 함수를 찾지 못하는 경우
- [[pocu-note/COMP2500/001-java-syntax/001-001-main-function/index#main 함수|메인 함수 시그니처 오류]] 참고

## java 명령어의 `-classpath`옵션

![img_28.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-8.png)

여기서 패키지는 컴파일된 `.class` 파일을 포함하는 폴더
- [[#`javac` 명령어]]에서 봤듯이 소스 코드 패키지의 폴더 구조는 바이트 코드 패키지의 폴더 구조와 동일

## 클래스 이름에 패키지 붙이기

![img_29.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-9.png)

## 배포하기

![img_30.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-10.png)

## `lib` 폴더

![img_31.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-11.png)

.jar 파일이 위치하는 폴더 이름을 lib(short for library)로 짓는 것이 관행

## `jar` 명령어

![img_32.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-12.png)

바이트 코드를 모아 `jar`파일을 만드는 명령어

최상위 패키지 경로
- 지금 예시에서는 `academy`

![img_33.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-13.png)

## .jar 파일 실행하기

![img_34.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-14.png)

![img_35.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-15.png)

## Manifest 파일

![img_36.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-16.png)

자동으로 MANIFEST.MF 파일이 생성되기도 하고, 직접 넣어줄 수도 있다. 아래는 직접 main 함수가 위치한 클래스를 Manifest 파일에 명시하는 예
- `jar`파일에 포함해야함

![img_37.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-17.png)

![img_38.png](pocu-note/COMP2500/001-java-syntax/001-004-build-and-run/images/build-and-run-18.png)

`..\src\Manifest.txt` 가 Manifest 파일 경로
