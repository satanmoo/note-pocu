---
title: OO에서 논하는 결합도
aliases:
  - OO에서 논하는 결합도
tags:
  - COMP2500
  - week11
---
# OO에서 논하는 결합도

![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-1.png)

OO에서 Coupling은 이런 의미

- A가 B에 의존하는 상황에서 B를 변경할 때 프로그램이 잘 작동하는가?
	- A의 내부를 변경 안 해도 제대로 동작
		- A가 B에 의존함
			- B가 없으면 A가 동작하지 않음
		- B의 변경에 A가 영향을 적게 받음
		- loose coupling
	- A의 내부를 변경해야만 제대로 동작
		- A가 B에 의존함
		- B의 변경에 A가 영향 받음
		- tight coupling

애초에 의존은 할 수밖에 없음
- [[pocu-note/COMP2500/011-interface-vs-implementation/011-001-dependency-and-coupling/index|앞 레슨]]에서 봤듯이 의존성은 좋은 설계

![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-2.png)

## 표현 정리

### 높은 결합도를 의미하는 표현

![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-3.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-4.png)

위의 표현들은 높은 결합도를 의미하는 용어로 많이 쓰지만 엄밀하게 말하면 틀린 표현

![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-5.png)

수식어를 붙여서 의미가 위의 표현에 비해 상대적으로 명확해짐
- tightly
- heavily

![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-6.png)

결과적으로 높은 결합도는 나쁘다
- OK

의존성이 있어서 나쁘다
- NO
- 의존성은 있을 수밖에 없음

### 낮은 결합도를 의미하는 표현

![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-7.png)

낮은 결합도를 의미하지만 정확하지 못함
- 낮은 결합도는 의존성은 있지만 변경에 영향받지 않는 개념
	- loose coupling

decoupled는 애초에 결합되어 있지 않다는 의미

OO에서 Coupling 종류는 2개
- loose coupling
- tight coupling
- decoupling은 없는 개념이에요!

![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-8.png)

### 결합도를 줄이는 것을 의미하는 표현

![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-9.png)

결합관계를 제거하는 것과 줄이는 것은 다른데 잘못 사용하고 있음

![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-10.png)

의존성을 제거할 수는 없음

결합도를 줄인다가 정확함
- reduce

## 영상 퀴즈

![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-11.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-002-coupling-in-oo/images/coupling-in-oo-12.png)
