---
title: 보수를 이용한 음수 표현
tags:
  - COMP1000
  - week2
aliases:
  - 보수를 이용한 음수 표현
---
# 보수를 이용한 음수 표현
## 파스칼 계산기

![img_47.png](pocu-note/COMP1000/002-data-representation/002-009-representing-negative-number-using-complement/images/representing-negative-number-using-complement-1.png)

십진수 5자리
- radix complement 사용

`-00004 + 100000` 과정은 사람이 암산으로 수행해야 함
- 계산기가 6번째 자리수를 표현하지 못하기 때문
- 사실 이 과정이 10의 보수를 구하는 과정

![img_48.png](pocu-note/COMP1000/002-data-representation/002-009-representing-negative-number-using-complement/images/representing-negative-number-using-complement-2.png)

00320 + 99996 덧셈만으로 뺄셈가능
- 계산기가 오른쪽에서 6번째 자리를 표현할 수 없기에 자동으로 6번째 자리수 무시
	- 슬라이드에서 회색 표현
	- 오버플로
	- 표현하는 자릿수가 제한된 환경

## 존 폰 노이만

![img_49.png](pocu-note/COMP1000/002-data-representation/002-009-representing-negative-number-using-complement/images/representing-negative-number-using-complement-3.png)

## 보수와 오버플로를 이용한 뺄셈

아래 2단계를 수행
### 1. A + (B의 radix complement)

![img_50.png](pocu-note/COMP1000/002-data-representation/002-009-representing-negative-number-using-complement/images/representing-negative-number-using-complement-4.png)

10진법 사례에서 `-10000`, 2진법 사례에서 `-10000`은 4자리 계산이라 무시
### 2. A + (B의 radix complement)에서 추가된 자릿수 제거

![img_51.png](pocu-note/COMP1000/002-data-representation/002-009-representing-negative-number-using-complement/images/representing-negative-number-using-complement-5.png)

여기서 추가된 자릿수는 `10000` 
- 오른쪽에서 5번째 자리
- 오버플로우

![img_52.png](pocu-note/COMP1000/002-data-representation/002-009-representing-negative-number-using-complement/images/representing-negative-number-using-complement-6.png)

뺄셈과 **오버플로우 + 보수를 이용한 덧셈**의 결과가 동일

A - B = A + (B의 radix complement) 에서 추가된 자릿수 제거

### 음수를 보수로 표현

![img_53.png](pocu-note/COMP1000/002-data-representation/002-009-representing-negative-number-using-complement/images/representing-negative-number-using-complement-7.png)

A - B = A + (B의 radix complement) 에서 추가된 자릿수 제거
- 여기서 `-B`  =  `B의 radix complement`라는 결론을 도출 할 수 있음

음수를 보수로 표현가능

