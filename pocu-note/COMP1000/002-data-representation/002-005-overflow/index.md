---
title: 부호없는 정수의 덧셈, 오버플로
tags:
  - COMP1000
  - week2
aliases:
  - 부호없는 정수의 덧셈, 오버플로
---
# 부호없는 정수의 덧셈, 오버플로

## 오버플로우

![img_21.png](pocu-note/COMP1000/002-data-representation/002-005-overflow/images/overflow-1.png)

자료형은 비트 수가 정해져있기 때문에 비트가 초과되어 잘리는 현상이 발생
- 비트 수가 넉넉하게 많다면 문제 없음
- 표현할 수 있는 수의 범위가 정해짐

![img_22.png](pocu-note/COMP1000/002-data-representation/002-005-overflow/images/overflow-2.png)

![img_23.png](pocu-note/COMP1000/002-data-representation/002-005-overflow/images/overflow-3.png)

연산 결과가 표현할 수 있는 최댓값보다 커질 때 오버플로 발생
- 표현할 수 있는 수의 범위가 정해져있음

![img_24.png](pocu-note/COMP1000/002-data-representation/002-005-overflow/images/overflow-4.png)

![img_25.png](pocu-note/COMP1000/002-data-representation/002-005-overflow/images/overflow-5.png)

![img_26.png](pocu-note/COMP1000/002-data-representation/002-005-overflow/images/overflow-6.png)

- 도돌이표

![img_27.png](pocu-note/COMP1000/002-data-representation/002-005-overflow/images/overflow-7.png)

1, 9를 따로 더하는게 아니라 10으로 한 번에 더하면?
- 교환법칙
- 결과 동일

![img_28.png](pocu-note/COMP1000/002-data-representation/002-005-overflow/images/overflow-8.png)

시계처럼 도는 이미지로 기억

## 복습퀴즈

Q: 8비트 짜리 부호 없는 정수로 아래와 같은 덧셈을 했을 때, 오버플로(overflow)가 발생하는 연산을 고르세요.

8비트 짜리 부호 없는 정수의 표현 범위:
- `[0,255]`

덧셈 결과값이 위 범위를 벗어나는 경우를 선택

답: `1110 1110(2) + 1111 1000(2)`


