---
tags:
  - COMP2500
  - week1
aliases:
  - 모듈
---
# 모듈

## 기존 방식: 패키지

![img_147.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-1.png)

패키지 하위에 패키지가 들어가는 구조
- 폴더 하위에 폴더

## 기존 패키지 시스템의 한계 1

![img_148.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-2.png)

Java 에서는 실행 중에 사용하는 클래스를 찾는 방법이 없음
- 언어의 한계
- 애플리케이션이 어떤 라이브러리를 사용하는지 실행 시작할 때 알 수 없음
- 컴파일 타임에도 알 수 없음
- 실행 도중에 라이브러리를 추가 안 해서 실행 중 오류가 발생해서 크래시 남

이 때문에 패키지 배포할 때 모든 클래스를 같이 배포함
- 필요한 클래스만 골라서 사용할 수 없었음

![img_149.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-3.png)

일부 클래스만 노출하면서 배포하는 방법이 없음

## 모듈

![[pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-4.png]]

초록색이 모듈
- 패키지를 묶는 개념을 만든 것
- `module-info.java`로 모듈에 대한 정보를 파일에 기록

![[pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-5.png]]

module-info 파일 덕분에 장점 생김

## 모듈의 이름

![[pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-6.png]]

모듈에 따라 별도로 폴더가 생기는 것은 아님

## `module-info.java`

![[pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-7.png]]

![img_154.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-8.png)
![[pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-9.png]]
![img_156.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-10.png)
![img_157.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-11.png)
