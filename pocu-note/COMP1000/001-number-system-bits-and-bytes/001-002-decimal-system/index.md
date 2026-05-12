---
tags:
  - COMP1000
  - week1
aliases:
  - 10진법
---
# 10진법

## 진법이란?

![img_34.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-002-decimal-system/images/decimal-system-1.png)

진법의 정의:
- 수를 표기하는 방법
- 추상적이라서 아래 방식으로 구체적으로 이해하는게 좋음

N진법에서 숫자 N의 의미:
- 한 자리에 쓸 수 있는 수의 개수
- 10진법은 `0 ~ 9`가 한 자리에 들어감

## 10진법의 정의

![img_35.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-002-decimal-system/images/decimal-system-2.png)

한 자리에 쓸 수 있는 수의 개수가 10
- "나아갈 진" 한자의 생각하면 10이되면 나아감 == 자리 수가 올라감

## 10진법의 자리값

![img_36.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-002-decimal-system/images/decimal-system-3.png)

가장 오른쪽은 10^0의 자리라고 표현하고 왼쪽으로 가면서 10^1의 자리 .. 10^n의 자리로 표현

![img_37.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-002-decimal-system/images/decimal-system-4.png)

10진법을 자릿값 표현으로 표현한 방식
- 10^4의 자리의 자리값은 8

## 10진법의 셈(counting)

![img_38.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-002-decimal-system/images/decimal-system-5.png)

자릿값은 0부터 9까지

### carry-over

![img_39.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-002-decimal-system/images/decimal-system-6.png)

자릿값이 최대 숫자인 9에 도달하면, 다음 자리로 넘어감
- 기존 자릿값은 0이 됨
	- 자릿값의 최소 숫자로 돌아오는 개념
- 다음 자릿값(왼쪽)은 1 증가
- carry-over


09 에서 하나 증가하면 10
- leading zero는 생략해서 10^1 자리 0이 안 보일 뿐임

## 10진법의 덧셈

![img_40.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-002-decimal-system/images/decimal-system-7.png)

덧셈은 셈(couting)의 확장

carry-over:
- 받아 올림
- 다음 자리의 자릿값을 1 증가

## 10진법의 뺄셈

![img_41.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-002-decimal-system/images/decimal-system-8.png)

덧셈의 반대
- 셈을 줄이는 개념

### borrowing

borrowing:
- 받아 내림
- 이전 자리의 자릿값을 최대 숫자로
