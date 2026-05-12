---
aliases:
  - 2의 보수의 장점
tags:
  - COMP1000
  - week2
---
# 2의 보수의 장점

![img_61.png](pocu-note/COMP1000/002-data-representation/002-013-two's-complement-pros/images/two's-complement-pros-1.png)

표현 가능한 숫자의 범위에서 음수가 하나 더 늘어남
- $1000\ 0000_2$
- $-128_{10}$

![img_62.png](pocu-note/COMP1000/002-data-representation/002-013-two's-complement-pros/images/two's-complement-pros-2.png)

2의 보수를 사용하는 시스템의 장점
- 0이 하나
	- 1의 보수보다 나아짐
- 더하기로 뺄셈 구현
	- 음수 처리시 +1 을 할 필요 없음
		- [[pocu-note/COMP1000/002-data-representation/002-007-problem-of-smr/index#부호 절대값 표기법의 한계|부호있는 정수 표현의 문제]] 참고
	- 이 장점은 1의 보수도 가짐
		- [[pocu-note/COMP1000/002-data-representation/002-009-representing-negative-number-using-complement/index|보수를 이용한 음수 표현]] 참고

![img_63.png](pocu-note/COMP1000/002-data-representation/002-013-two's-complement-pros/images/two's-complement-pros-3.png)

![img_64.png](pocu-note/COMP1000/002-data-representation/002-013-two's-complement-pros/images/two's-complement-pros-4.png)

CSharp int 
- 32비트에서 2의 보수 시스템 사용한 예

