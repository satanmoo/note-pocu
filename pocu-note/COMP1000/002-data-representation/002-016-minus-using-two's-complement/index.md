---
title: 2의 보수를 이용한 뺄셈
aliases:
  - 2의 보수를 이용한 뺄셈
tags:
  - week2
  - COMP1000
---
# 2의 보수를 이용한 뺄셈

![img_74.png](pocu-note/COMP1000/002-data-representation/002-016-minus-using-two's-complement/images/minus-using-two's-complement-1.png)

왼쪽은 부호 없는 정수로 **해석**
오른쪽은 부호 있는 정수로 **해석**

![img_75.png](pocu-note/COMP1000/002-data-representation/002-016-minus-using-two's-complement/images/minus-using-two's-complement-2.png)

내용은 비트 패턴이지만 해석에 따라 표현할 수 있는 값의 범위가 달라짐

왼쪽 케이스, 오른쪽 케이스 모두 표현할 수 있는 범위의 최솟값보다 작은 값이 결과로 나옴

![img_76.png](pocu-note/COMP1000/002-data-representation/002-016-minus-using-two's-complement/images/minus-using-two's-complement-3.png)

언더플로
- [[pocu-note/COMP1000/002-data-representation/002-014-plus-of-signed-int/index|부호있는 정수의 덧셈]]에서 봤듯이 해석을 위해서 비트 패턴을 10진수로 바꾸는 과정은 필요함
