---
title: 결합도 판정
aliases:
  - 결합도 판정
tags:
  - COMP2500
  - week11
---
# 결합도 판정

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-1.png)

컴포지션에서 부품에 의존 중

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-2.png)

- 두 사이 결합도는 높냐 낮냐?
	- `Head` 클래스를 수정해보면 알 수 있음. 이때 `Robot` 클래스를 수정해야 한다면 tight coupling

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-3.png)

`fovAngle` 멤버 변수를 새로 추가

따라서 `Head` 클래스의 생성자도 변경됨

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-4.png)

`Robot` 클래스를 수정하지 않고 컴파일하면 오류 발생
- `this.head = new Head();`
- `Head` 클래스의 기본 생성자가 사라졌기에 컴파일 오류

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-5.png)

`Robot` 클래스의 코드가 변했음

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-6.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-7.png)

`new Robot()` 생성자를 호출하는 다른 곳은 고려하지 않기

지금은 `Robot` 클래스, `Head` 클래스 둘의 결합도에 집중

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-8.png)

위 원칙대로 판단하면
- tight coupling

## 결합도를 줄이자

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-9.png)

[[pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/index|화분의 물주기 예]] 참고

`WaterSpray` 클래스의 생성자를 주목
- `SprayHead`, `SprayBottle` 타입을 매개변수로 받음
- 외부에서 넣어주는거네?!

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-10.png)

미리 외부에서 `Head` 개체 생성해서 `Robot` 생성자의 인자로 전달

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-11.png)

`Head` 개체를 생성자의 매개변수로 받는 효과는 `Robot` 클래스가 `Head` 클래스 내부 구현을 몰라도 됨
- `Robot` 클래스 안에서 `Head` 개체 생성에 관여하지 않음
	- 몰라도 됨
- loose coupling

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-12.png)

`Robot` 클래스의 생성자를 호출하는 곳은 바꾸고 나서 `Head` 클래스에 `fovAngle` 멤버 변수와 생성자의 매개변수 목록을 수정한 뒤 `Robot` 클래스를 바꿔야 하는지 확인해보자.

![](pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/images/judging-coupling-13.png)

`Robot` 클래스의 코드를 바꾸지 않아도 되니 결합도는 낮음
- loose coupling
