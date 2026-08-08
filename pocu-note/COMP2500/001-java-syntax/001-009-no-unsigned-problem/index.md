---
title: unsigned가 없어서 생기는 문제
tags:
  - COMP2500
  - week1
aliases:
  - unsigned가 없어서 생기는 문제
---
# unsigned가 없어서 생기는 문제

## 음수 배열 색인과 음수 나이

![img_57.png](pocu-note/COMP2500/001-java-syntax/001-009-no-unsigned-problem/images/no-unsigned-problem-1.png)

![img_58.png](pocu-note/COMP2500/001-java-syntax/001-009-no-unsigned-problem/images/no-unsigned-problem-2.png)

![img_59.png](pocu-note/COMP2500/001-java-syntax/001-009-no-unsigned-problem/images/no-unsigned-problem-3.png)

8비트인 unsigned byte로 컴퓨터에서 보통 색을 표현함
- Java는 불가능

다른 프로그램과 데이터를 공유할 때 문제가 발생할 수 있음
- 파일에 4바이트로 RGB + alpha 값이 저장되어 있는 상황
	- C/C++ 등 unsigned가 존재하는 언어에서는 4바이트를 한 번에 읽어 RGB + alpha 값으로 사용
	- Java는 파일에 저장된 4바이트를 읽어도 각 값을 short(2바이트)로 변환하는 과정 필요

## `Integer` 클래스

![img_60.png](pocu-note/COMP2500/001-java-syntax/001-009-no-unsigned-problem/images/no-unsigned-problem-4.png)

4294967295는 int 범위를 벗어나 컴파일 오류 발생
- 자료형 크기 정도는 잡아줌

`Integer.parseUnsignedInt("4294967295");` 4294967295의 unsigned int 비트 패턴으로 num 변수에 저장
- 바로 출력하면 signed로 해석해 -1이 출력됨
- 0xFFFFFFFF

`Inter.toUnsignedString(num)` 하면 num에 저장된 비트패턴을 unsigned int로 해석하고 이 숫자를 문자열로
