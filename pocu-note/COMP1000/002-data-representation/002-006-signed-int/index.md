---
title: 부호있는 정수
tags:
  - COMP1000
  - week2
aliases:
  - 부호있는 정수
---
# 부호있는 정수

## 부호 있는 정수

![img_29.png](pocu-note/COMP1000/002-data-representation/002-006-signed-int/images/signed-int-1.png)

> [!QUESTION] 부호를 어떻게 표현할 수 있을까?

## 부호 표현하기 시도1: 부호 비트를 추가

![img_30.png](pocu-note/COMP1000/002-data-representation/002-006-signed-int/images/signed-int-2.png)

부호를 표시하는 비트를 추가하기
- `+`는 10
- `-`는 11

![img_31.png](pocu-note/COMP1000/002-data-representation/002-006-signed-int/images/signed-int-3.png)

비트 수가 8비트 단위로 딱 안 떨어짐
- 기존 8비트에 부호비트 2비트 추가

## 부호 표현하기 시도2: 부호 비트 수를 늘려서 8의 배수 비트 사용하기

![img_32.png](pocu-note/COMP1000/002-data-representation/002-006-signed-int/images/signed-int-4.png)

부호 비트를 2비트에서 8비트로 늘려서 총 16비트 사용
- 이건 낭비가 너무 심해

## 부호 표현하기 해결법: 8비트 안에서 부호도 표현하기

![img_33.png](pocu-note/COMP1000/002-data-representation/002-006-signed-int/images/signed-int-5.png)

8비트 안에서 해결
- 대신 수의 범위가 반으로 줄어듬
- 256개를 양수/음수에서 나눠가짐

> [!QUESTION] 부호를 제외한 나머지 7비트를 어떻게 표현할까?

## 부호를 제외한 7비트 표현법1: 부호 절대값 표기법

![img_34.png](pocu-note/COMP1000/002-data-representation/002-006-signed-int/images/signed-int-6.png)

부호를 제외하고 나머지 7비트를 똑같이 표현함

**Signed Magnitude Representation**

![img_35.png](pocu-note/COMP1000/002-data-representation/002-006-signed-int/images/signed-int-7.png)
