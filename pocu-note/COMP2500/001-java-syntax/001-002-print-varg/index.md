---
title: 출력문과 가변 인자
tags:
  - COMP2500
  - week1
aliases:
  - 출력문과 가변 인자
---
# 출력문과 가변 인자
## `System.out.println()`

![img_5.png](pocu-note/COMP2500/001-java-syntax/001-002-print-varg/images/print-varg-1.png)

### `System` 클래스

![img_6.png](pocu-note/COMP2500/001-java-syntax/001-002-print-varg/images/print-varg-2.png)

Java pre-defined class

### `System`의 static 멤버 변수 `out` 

![img_7.png](pocu-note/COMP2500/001-java-syntax/001-002-print-varg/images/print-varg-3.png)

### `println()`

![img_8.png](pocu-note/COMP2500/001-java-syntax/001-002-print-varg/images/print-varg-4.png)

정적 멤버 변수`out`의 자료형은 `PrintStream`
- `PrintStream`에 메서드(함수) `println`이 정의되어 있음

`클래스.멤버 변수.멤버 변수의 메서드` 형식으로 호출

## Java의 `printf()`

![img_9.png](pocu-note/COMP2500/001-java-syntax/001-002-print-varg/images/print-varg-5.png)

## New Line Character를 추가하는 올바른 방법

![img_10.png](pocu-note/COMP2500/001-java-syntax/001-002-print-varg/images/print-varg-6.png)

Java의 플랫폼 독자적인 성격을 반영

## varargs

![img_11.png](pocu-note/COMP2500/001-java-syntax/001-002-print-varg/images/print-varg-7.png)

C의 가변 인자는 서로 다른 자료형을 섞을 수 있음
- 컴파일 타임에 매크로로 타입을 명시하는 개념


![img_12.png](pocu-note/COMP2500/001-java-syntax/001-002-print-varg/images/print-varg-8.png)
