---
title: 2진법
tags:
  - COMP1000
  - week1
aliases:
  - 2진법
---
# 2진법

## 2진법의 정의

![img_42.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-003-binary-system/images/binary-system-1.png)

한 자리에 쓸 수 있는 수가 2개

binary의 'b'를 따와서 숫자 앞에 리터럴 `0b` 붙이기도 함

## 2진법의 자리값

![img_43.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-003-binary-system/images/binary-system-2.png)

가장 오른쪽은 2^0의 자리라고 표현 왼쪽으로 가면서 2^1의 자리 2^2의 자리 ... 표현

![img_44.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-003-binary-system/images/binary-system-3.png)

2^5의 자리의 자릿값은 1
## 2진법의 셈

![img_45.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-003-binary-system/images/binary-system-4.png)

자릿값은 0부터 1까지

![img_46.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-003-binary-system/images/binary-system-5.png)

[[pocu-note/COMP1000/001-number-system-bits-and-bytes/001-002-decimal-system/index#carry-over|carry-over]] 적용
- 2^0의 자리는 최소값 0으로 돌아감
- 2^1의 자리는 1 증가

![img_47.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-003-binary-system/images/binary-system-6.png)

carry-over 가 연쇄적으로 적용
- "기존 자릿수를 모두 0으로"라고 표현
	- 2^0의 자리 2^1의 자리 모두 0이 되는 현상

![img_48.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-003-binary-system/images/binary-system-7.png)

아래에서 부터 위로 읽을 때 패턴이 있음
    - 2^0의 자리의 경우:
        - 010101...
    - 2^1의 자리의 경우:
        - 00110011...
    - 2^2의 자리의 경우:
        - 0000111100001111

### 2진법의 덧셈

![img_49.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-003-binary-system/images/binary-system-8.png)

셈(counting)의 확장

carry-out 고려해서 계산하기

### 2진법의 뺄셈

![img_50.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-003-binary-system/images/binary-system-9.png)

borrowing 고려해서 계산하기
- 오른쪽 자리에 값 2를 빌려줌
