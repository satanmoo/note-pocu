---
title: 문자, 아스키(ASCII)
tags:
  - COMP1000
  - week2
aliases:
  - 문자, 아스키(ASCII)
---
# 문자, 아스키(ASCII)

## ASCII

문자도 컴퓨터 내부에서 정수로 저장되어 있음.

![img_93.png](pocu-note/COMP1000/002-data-representation/002-020-ascii/images/ascii-1.png)

문자를 숫자로 표현하기 위해 문자에 번호를 부여 
- 규약으로 정함
- 문자와 코드의 대응을 **아스키 테이블**이라고 부름

![img_94.png](pocu-note/COMP1000/002-data-representation/002-020-ascii/images/ascii-2.png)

최초의 아스키는 128개
- 128개를 표현하기 위해 최소 7비트가 필요함
- 컴퓨터의 저장 단위인 8비트에 따라 1바이트로 문자를 표현하게 됨

## 메모리에서 문자

![img_95.png](pocu-note/COMP1000/002-data-representation/002-020-ascii/images/ascii-3.png)

메모리와 마찬가지로 디스크에도 아스키 코드의 비트 패턴으로 저장

## 문자에 1을 더하면?

![img_96.png](pocu-note/COMP1000/002-data-representation/002-020-ascii/images/ascii-4.png)

문자도 내부적으로 정수라서 1을 더할 수 있음
- 2진수에서 1을 더하는 개념

![img_97.png](pocu-note/COMP1000/002-data-representation/002-020-ascii/images/ascii-5.png)

'A'은 내부적으로 아스키 코드 값으로 저장되고, 이 값에 1을 증가시키면 테이블에서 다음 수인 'B'

## 복습 퀴즈

(Q) ASCII에서 'a' - 'A'의 값은 32(10)이며, 'A'의 값은 65(10)입니다. 그렇다면 'f'의 값은 무엇일까요?
- 'a'의 아스키 코드가 32 + 65 = 97
- 아스키 테이블에 'a'부터 'b', 'c'... 순서대로 1씩 증가하도록 되어 있음
- 5증가한 아스키 코드는 102