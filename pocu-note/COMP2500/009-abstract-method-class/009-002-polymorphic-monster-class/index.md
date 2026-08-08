---
title: 다형적인 Monster 클래스 구현
aliases:
  - 다형적인 Monster 클래스 구현
tags:
  - COMP2500
  - week10
---
# 다형적인 Monster 클래스 구현

![](pocu-note/COMP2500/009-abstract-method-class/009-002-polymorphic-monster-class/images/polymorphic-monster-class-1.png)

몬스터 종류에 따른 피해량 계산을 다형적으로 구현

![](pocu-note/COMP2500/009-abstract-method-class/009-002-polymorphic-monster-class/images/polymorphic-monster-class-2.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-002-polymorphic-monster-class/images/polymorphic-monster-class-3.png)

함수를 통한 "데이터 추상화"
- [[pocu-note/COMP2500/002-necessity-of-oop/002-021-getter-setter/index|getter, setter]]

![](pocu-note/COMP2500/009-abstract-method-class/009-002-polymorphic-monster-class/images/polymorphic-monster-class-4.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-002-polymorphic-monster-class/images/polymorphic-monster-class-5.png)

왜 이런 와꾸(?)를 구성했는지 다음 장에서 설명
- 와꾸에는 다음이 포함
	- 매서드 시그니처
	- 접근 제어자

## `attack()` 메서드가 비어 있는 이유
![](pocu-note/COMP2500/009-abstract-method-class/009-002-polymorphic-monster-class/images/polymorphic-monster-class-6.png)

각 몬스터(`Monster` 클래스의 자식 클래스)에서 구체적인 공격 로직을 작성해야 함

## `inflictDamage()` 메서드가 `protected` 접근제어자인 이유
![](pocu-note/COMP2500/009-abstract-method-class/009-002-polymorphic-monster-class/images/polymorphic-monster-class-7.png)

 `attack()` 매서드 내부에서만 `inflictDamage()` 매서드를 호출하도록 구현하기 위함
 - 엄밀히 말하면 자식 클래스만 `attack()` 내부에서 `inflictDamage()` 메서드를 호출하게 하기 위함
	 - `attack()` 메서드 내부에서 `inflictDamage()` 메서드 호출을 강제할 수는 없음
	 - 자식이 아닌 다른 패키지의 클래스에서 `inflictDamage()`를 호출하는 것을 막을 수 있음
