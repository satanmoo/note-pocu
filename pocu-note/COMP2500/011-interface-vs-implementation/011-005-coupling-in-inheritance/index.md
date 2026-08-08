---
title: 상속 관계에서의 결합도
aliases:
  - 상속 관계에서의 결합도
tags:
  - COMP2500
  - week11
---
# 상속 관계에서의 결합도

## 상속 관계에서 결합도

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-1.png)

`Head` 클래스는 추상 클래스
- 클래스 다이어그램에서 Italic
- `pickEnemy()` 메서드도 추상 메서드
	- Italic

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-2.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-3.png)

`Robot` 클래스는 의존성 주입으로 `SimpleHead` 클래스의 개체에 의존함
- loose coupling

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-4.png)

이제 모든 `Robot` 클래스에서 `SimpleHead` 클래스 대신 `SmartHead` 클래스에 의존하도록 하고 싶음

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-5.png)

가장 단순한 접근
- 그냥 생성자의 매개변수 수정, `Robot` 클래스 멤버 변수 수정

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-6.png)

결합도가 높은 상황
- `SimpleHead` 클래스를 수정하는 것은 `Robot` 클래스에 영향을 주지 않음
- `SimpleHead` 클래스 대신 `SmartHead` 클래스를 사용하기 때문에 수정이 필요함

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-7.png)

근데 이렇게 변경하면 바꿀 때마다 생성자를 바꿔야 함

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-8.png)

바꾸는 것보다 일반화된 타입으로 생성자의 매개변수, 멤버 변수로?!
- 부모의 자료형을 사용해보자!!!

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-9.png)

부모 클래스를 매개변수로 받아 다형성을 사용해 결합도를 줄였음

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-10.png)

의존성을 없앤 게 아님
- 줄인 것

`Head` 클래스에 의존성이 있음

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-11.png)

인터페이스를 사용해도 똑같음
- 자식 인터페이스에 의존하는 것이 아니라 부모 인터페이스에 의존
- 일반적인 타입을 사용하면 편리함
	- 추상화를 잘했다는 가정하에 부모는 바뀔 일이 적음

## 복습 퀴즈

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-12.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-13.png)

`A` 클래스 내부에서 `B` 개체의 생성자를 직접 호출하고 있어서 결합도가 높음
- `B` 클래스의 생성자가 바뀌면 `A` 클래스의 코드를 변경해야 함

![](pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/images/coupling-in-inheritance-14.png)

결합도를 낮추기 위해서는 DI
