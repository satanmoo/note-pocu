---
title: 부호있는 정수 표현의 문제
tags:
  - COMP1000
  - week2
aliases:
  - 부호있는 정수 표현의 문제
---
# 부호있는 정수 표현의 문제
## 부호 절대값 표기법의 한계

![img_36.png](pocu-note/COMP1000/002-data-representation/002-007-problem-of-smr/images/problem-of-smr-1.png)

1. 0이 2개임
	- `+0` 과 `-0`

2. 양수와 음수를 더할 때 비트패턴 둘을 더하는 것으로 옳바른 값을 구할 수 없음

![img_37.png](pocu-note/COMP1000/002-data-representation/002-007-problem-of-smr/images/problem-of-smr-2.png)

양수에서 양수를 빼면 해결 가능한가?

![img_38.png](pocu-note/COMP1000/002-data-representation/002-007-problem-of-smr/images/problem-of-smr-3.png)

근본적으로 컴퓨터는 **덧셈**만 할 수 있음
- 뺄셈도 덧셈을 통해 구현해야함

![img_39.png](pocu-note/COMP1000/002-data-representation/002-007-problem-of-smr/images/problem-of-smr-4.png)
