---
tags:
  - COMP1000
  - week1
aliases:
  - 보수
---
# 보수

## 부호있는 정수의 표현: 보수

![img_40.png](pocu-note/COMP1000/002-data-representation/002-008-complement/images/complement-1.png)

## 보수의 종류

![img_41.png](pocu-note/COMP1000/002-data-representation/002-008-complement/images/complement-2.png)

 N진법에 2가지 종류의 보수가 있음
- radix complement
- diminished radix complement

## 10의 보수(radix complement)

![img_42.png](pocu-note/COMP1000/002-data-representation/002-008-complement/images/complement-3.png)

10^n을 만들기 위해 필요한 수
- n은 보수를 구하려는 수의 자릿수에 따라 달라짐
- 몇 자리 숫자인가?

십진법에서 **radix complement**

![img_43.png](pocu-note/COMP1000/002-data-representation/002-008-complement/images/complement-4.png)

8이 10이되기 위한 수가 2
- 2 + 4 => 6
- 보수를 활용했음

## 9의 보수(diminished radix complement)

![img_44.png](pocu-note/COMP1000/002-data-representation/002-008-complement/images/complement-5.png)

9^n을 만들기 위해 필요한 수

십진법에서 **diminished radix complement**

## 10의 보수와 9의 보수의 관계

![img_45.png](pocu-note/COMP1000/002-data-representation/002-008-complement/images/complement-6.png)

9의 보수 + 1 == 10의 보수

> [!TIP] **방식2**를 잘 활용하자
## 보수와 뺄셈

![img_46.png](pocu-note/COMP1000/002-data-representation/002-008-complement/images/complement-7.png)

왜 보수를 이용한 뺄셈이 고안되었나?
- 표현할 수 있는 자리에 한계가 있는 경우
    - 파스칼 계산기
