---
tags:
  - COMP1000
  - week2
aliases:
  - 부호있는 정수의 덧셈
---
# 부호있는 정수의 덧셈

![img_65.png](pocu-note/COMP1000/002-data-representation/002-014-plus-of-signed-int/images/img_65.png)

표현할 수 있는 수가 8비트일 때 이 범위를 벗어나는  오버플로 성질 때문에 $양수 + 음수$ 과정이 가능함
- [[pocu-note/COMP1000/002-data-representation/002-009-representing-negative-number-using-complement/index|보수를 이용한 음수 표현]] 참고

![img_66.png](pocu-note/COMP1000/002-data-representation/002-014-plus-of-signed-int/images/img_66.png)

$1001\ 0010_2$ 라는 비트 패턴에 $0000\ 0011_2$을 더하면 됨
- 그냥 이진수 더하기

![img_67.png](pocu-note/COMP1000/002-data-representation/002-014-plus-of-signed-int/images/img_67.png)

오버플로 발생
- [[pocu-note/COMP1000/002-data-representation/002-005-overflow/index#오버플로우|부호없는 정수의 덧셈, 오버플로]] 의 시계 이미지 연상

![img_68.png](pocu-note/COMP1000/002-data-representation/002-014-plus-of-signed-int/images/img_68.png)

오버플로 발생

![img_69.png](pocu-note/COMP1000/002-data-representation/002-014-plus-of-signed-int/images/img_69.png)

부호가 있는 정수형 8비트는 $[-128, 127]$ 범위를 표현
- 이 표현 범위를 벗어나 오버플로라고 해석할 수 있음

만약 부호가 없는 정수형 8비트로 자료형을 사용한다면?
- 표현 가능한 범위는 $[0, 255]$
- 이 표현 범위에 속하기 때문에 오버플로가 아님

> [!NOTE] 데이터 타입에 따라서 표현 범위가 달라지고 오버플로 여부도 달라짐

![img_70.png](pocu-note/COMP1000/002-data-representation/002-014-plus-of-signed-int/images/img_70.png)

최대값(127)을 넘어버리면 최소값(-128)부터 다시 시작하게 됨
- 도돌이표 개념
- 시계 이미지

![img_92.png](pocu-note/COMP1000/002-data-representation/002-020-ascii/images/img_92.png)

10진수 값으로 변환해 자료형이 표현하는 범위인지 확인해야함

![img_71.png](pocu-note/COMP1000/002-data-representation/002-014-plus-of-signed-int/images/img_71.png)

![img_72.png](pocu-note/COMP1000/002-data-representation/002-014-plus-of-signed-int/images/img_72.png)

다시 자료형에 따라 표현 범위가 달라지는 것 확인
- 표현 범위를 확인하려면 사람 입장에서 10진수로 변환할 수 밖에 없음
