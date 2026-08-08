---
title: 1의 보수
tags:
  - COMP1000
  - week2
aliases:
  - 1의 보수
---
# 1의 보수

## 1의 보수

![img_54.png](pocu-note/COMP1000/002-data-representation/002-010-one's-complement/images/one's-complement-1.png)

2진법에서 1의 보수는 모든 자리의 수가 1
- 1011(2)의 1의 보수 = 0100(2)

### 1의 보수를 구하는 방법

![img_55.png](pocu-note/COMP1000/002-data-representation/002-010-one's-complement/images/one's-complement-2.png)

각 자리의 비트를 뒤집기
- 왜 뒤집으면 될까?
	- 2진법의 특수한 성질
	- 가장 큰 값 1, 가장 작은 값 0 2개 밖에 없기 때문

## 부호있는 정수에서 1의 보수를 사용할 때 표현 범위

![img_56.png](pocu-note/COMP1000/002-data-representation/002-010-one's-complement/images/one's-complement-3.png)

가장 왼쪽 비트가 0이고 나머지 7개 비트로 어떤 수를 구하면 양수

이 양수의 비트패턴을 뒤집으면 그대로 절대값은 같지만 부호는 반대

## 복습 퀴즈

Q: -1(10)을 1의 보수를 이용해서 표현한 8비트 값을 고르세요.

절대값은 1

1을 8비트로 표현, 이 때 가장 왼쪽 비트는 0
- `0000_0001`

1의 보수를 구하면 `1111_1110`


