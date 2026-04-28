---
aliases:
  - 언더플로, 프로그래밍 언어의 정수형
tags:
  - COMP1000
  - week2
---
# 언더플로, 프로그래밍 언어의 정수형

## 언더플로

![img_77.png](pocu-note/COMP1000/002-data-representation/002-017-underflow/images/img_77.png)

정수가 표현할 수 있는 최솟값보다 더 작은 값이 나올 때
- 정수가 표현할 수 있는 범위를 구하려면?
	- 몇 비트인지
	- 2의 보수를 사용하는지, 1의 보수를 사용하는지?
- 검증 대상은 10진수로 변환이 필요

![img_78.png](pocu-note/COMP1000/002-data-representation/002-017-underflow/images/img_78.png)

표현 가능한 범위에서 최댓값보다 더 큰 값이 나오면 오버플로
표현 가능한 범위에서 최소값보다 더 작은 값이 나오면 언더플로

![img_79.png](pocu-note/COMP1000/002-data-representation/002-017-underflow/images/img_79.png)

> [!NOTE] 비트 연산과 해석의 분리
> 
> 비트는 비트대로 이진수 연산으로 계산
> 
> 해석은 자료형(몇 비트, 2의 보수 시스템을 사용하는지 여부)를 고려해 표현할 수 있는 수의 범위를 결정

## 프로그래밍 언어에서 일반적인 정수형

![img_80.png](pocu-note/COMP1000/002-data-representation/002-017-underflow/images/img_80.png)

![img_81.png](pocu-note/COMP1000/002-data-representation/002-017-underflow/images/img_81.png)

정수는 보통 32비트
- 그리고 2의 보수를 사용하는 시스템
