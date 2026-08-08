---
title: 다중 상속이 생기는 이유와 해결법
aliases:
  - 다중 상속이 생기는 이유와 해결법
tags:
  - COMP2500
  - week6
---
# 다중 상속이 생기는 이유와 해결법

## 현재 모델링의 문제점

![](pocu-note/COMP2500/006-object-modeling-2/006-017-multiple-inheritance-causes-and-solutions/images/multiple-inheritance-causes-and-solutions-1.png)

포프쌤은 Aspect 라고 표현함

![](pocu-note/COMP2500/006-object-modeling-2/006-017-multiple-inheritance-causes-and-solutions/images/multiple-inheritance-causes-and-solutions-2.png)

현재 모델링에서 양상은 2가지
- 시간을 어떻게 표현하는가
- 시계를 어디에 장착하는가

두 양상은 레이어가 다름

## 깔끔하지 않은 해결방법: 추상화

![](pocu-note/COMP2500/006-object-modeling-2/006-017-multiple-inheritance-causes-and-solutions/images/multiple-inheritance-causes-and-solutions-3.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-017-multiple-inheritance-causes-and-solutions/images/multiple-inheritance-causes-and-solutions-4.png)

wear, mount 동작을 추상화해서 attach
- 벽 시계, 손목 시계를 구분할 필요가 없어질 정도로 추상화
- 아직은 괜찮은데 너무 추상화가 심해지면 의미를 해칠 수 있음
- 시계를 속목에 붙이다?
- 시계를 벽에 붙이다?

## 깔끔한 해결방법: interface

![](pocu-note/COMP2500/006-object-modeling-2/006-017-multiple-inheritance-causes-and-solutions/images/multiple-inheritance-causes-and-solutions-5.png)

다형성

인터페이스는 다중 상속 가능 (클래스 다이어그램에서 점선 + 빈 화살표)
