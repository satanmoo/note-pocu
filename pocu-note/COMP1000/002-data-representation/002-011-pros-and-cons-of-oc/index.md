---
tags:
  - COMP1000
  - week2
aliases:
  - 1의 보수의 장점과 한계
---
# 1의 보수의 장점과 한계
## 1의 보수의 장점과 한계점

![img_57.png](pocu-note/COMP1000/002-data-representation/002-011-pros-and-cons-of-oc/images/img_57.png)

장점:
- 양수 + 음수를 계산할 때 둘의 비트 패턴을 더해서 계산할 수 있게 됨
	- [[pocu-note/COMP1000/002-data-representation/002-007-problem-of-smr/index#부호 절대값 표기법의 한계|부호있는 정수 표현의 문제]] 에서 본 **부호 절대값 표기법**에서 불가능했음

한계점:
- 0이 2개임
	- `0000 0001 + 1111 1110 = 1111 1111`
	- `1 - 1 = 0`
	- `1111 1111`도 0을 나타냄
- 최대 자리를 넘는 경우 +1을 해줘야 정상적인 값이 나옴
	- 캐리가 발생하면, 캐리를 다시 LSB에 더하
	- **end-around carry** 규칙

![img_58.png](pocu-note/COMP1000/002-data-representation/002-011-pros-and-cons-of-oc/images/img_58.png)

이런 한계를 **2의 보수**는 극복했음
