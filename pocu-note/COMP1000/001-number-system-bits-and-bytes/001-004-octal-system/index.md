---
tags:
  - COMP1000
  - week1
aliases:
  - 8진법
---
# 8진법

## 8진법의 정의

![img_51.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-004-octal-system/images/img_51.png)

한 자리에 쓸 수 있는 숫자가 8개
## 8진법의 자릿값

![img_52.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-004-octal-system/images/img_52.png)

8진수 보고 10진수로 변환할 줄 알면 이해 완료
## 8진법의 셈

![img_53.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-004-octal-system/images/img_53.png)

[[pocu-note/COMP1000/001-number-system-bits-and-bytes/001-002-decimal-system/index#carry-over|carry-over]] 적용
- 8^0의 자리는 최소값 0으로 돌아감
- 8^1의 자리는 1 증가
  
## 8진법의 덧셈

![img_54.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-004-octal-system/images/img_54.png)

carry-over 연쇄
- 8^0의 자리(기존 자리)는 다음과 같이 계산 3 + 7 - 8 == 2
- 8^1의 자리는 1 증가
- 8^1의 자리는 다음과 같이 계산 7 + 1 - 8 == 0
- 8^2의 자리는 1 증가

## 8진법의 뺄셈

![img_55.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-004-octal-system/images/img_55.png)

borrowing 연쇄
- 8^0의 자리는 다음과 같이 계산 8^1의 자리에서 8을 빌려와서 8 - 7 = 1
- 8^1의 자리는 다음과 같이 계산 8^2의 자리에서 8을 빌려오고, 8^0의 자리에 빌려준 값을 빼서 8 - 1 + 0  = 7
