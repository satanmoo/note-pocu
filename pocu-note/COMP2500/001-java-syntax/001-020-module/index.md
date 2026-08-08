---
title: 모듈
tags:
  - COMP2500
  - week1
aliases:
  - 모듈
---
# 모듈

## 기존 방식: 패키지

![img_147.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-1.png)

`academy` 폴더 상위에 `src` 폴더가 있다고 가정
	
## 기존 패키지 시스템의 한계 1

![img_148.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-2.png)

Java 에서는 애플리케이션 실행 중에 사용하는 클래스를 찾는 방법이 없음
- 언어의 한계
- 패키지 시스템이라면 컴파일 타임에도 알 수 없음
- 라이브러리를 추가했다고 착각해서 실행 중 오류가 발생해 크래시 날 수 있음

내 프로그램이 자바 built-in 패키지 중에서 뭘 사용하는지 알 방법이 없기 때문에 built-in 패키지를 모두 포함해 같이 배포함
- built-in 패키지의 용량이 Java 버전이 증가하면서 점점 커져서 배포 용량이 커지는 문제 발생

![img_149.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-3.png)

패키지의 일부 클래스만 노출하면서 배포하는 방법이 없음

## 모듈

![[pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-4.png]]

모듈
- 패키지를 묶는 개념을 만든 것
- `module-info.java`로 모듈에 대한 정보를 파일에 기록

초록색이 모듈 폴더
- 모듈 폴더 상위에 `src` 폴더가 있다고 가정


![[pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-5.png]]

`module-info.java` 파일 덕분에 위 장점 생김

## 모듈의 이름

![[pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-6.png]]

모듈의 이름은 `academy.pocu.core`처럼 최상위 패키지명과 동일하게 짓는게 베스트 프랙티스
- 패키지처럼 `.`으로 구분된 단어 별로 폴더가 생기는 것은 아님

## `module-info.java`

![[pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-7.png]]

모듈을 정의하기 위해서 필요한 파일
- 컴파일 후 `.class` 파일로 변환됨

![img_154.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-8.png)
![[pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-9.png]]
![img_156.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-10.png)
![img_157.png](pocu-note/COMP2500/001-java-syntax/001-020-module/images/module-11.png)
