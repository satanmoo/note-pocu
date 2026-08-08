---
title: 현재 구조의 문제점
aliases:
  - 현재 구조의 문제점
tags:
  - COMP2500
  - week10
---
# 현재 구조의 문제점

![](pocu-note/COMP2500/009-abstract-method-class/009-004-current-structure-problems/images/current-structure-problems-1.png)

`calculateDamage()` 메서드는 다형성을 위해서만 존재
- `Monster` 클래스의 `calculateDamage()` 메서드를 호출해서는 안 됨
- 아무 의미 없음

![](pocu-note/COMP2500/009-abstract-method-class/009-004-current-structure-problems/images/current-structure-problems-2.png)

부모 클래스의 구현을 없애면?

![](pocu-note/COMP2500/009-abstract-method-class/009-004-current-structure-problems/images/current-structure-problems-3.png)

추상 메서드:
- 메서드 시그니처만 있고 동작이 구현되지 않은 메서드

![](pocu-note/COMP2500/009-abstract-method-class/009-004-current-structure-problems/images/current-structure-problems-4.png)

`Monster` 클래스의 개체를 생성하지 않아도 되지 않나?
- `Monster` 클래스는 오직 추상화 용도
	- 부모 클래스를 정의하기 위한 용도

![](pocu-note/COMP2500/009-abstract-method-class/009-004-current-structure-problems/images/current-structure-problems-5.png)
