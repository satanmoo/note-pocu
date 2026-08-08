---
title: 인터페이스와 함수 포인터
aliases:
  - 인터페이스와 함수 포인터
tags:
  - COMP2500
  - week10
---
# 인터페이스와 함수 포인터

![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-1.png)
![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-2.png)

인터페이스는 소통 경로
- 사용자는 구체적인 세계의 일 "how"를 모름

![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-3.png)
![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-4.png)

함수 내부 공간이 구현자의 공간이라고 생각하자.

함수 블랙박스도 인터페이스와 개념이 유사
- 여기서 함수 시그니처가 인터페이스

![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-5.png)
![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-6.png)
![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-7.png)
![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-8.png)
![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-9.png)
![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-10.png)

C 언어의 함수 포인터는 함수 시그니처만 필요함

예를 보여주기 위해 `Monster` 클래스에 새로운 메서드를 추가해보자.

![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-11.png)

외부(attacker)의 공격을 받았을 때 개체 자신이 살아남을 수 있는지 확인하는 메서드

![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-12.png)
![](pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/images/interface-and-function-pointer-13.png)

`canSurviveAttack()` 메서드에 개체를 전달한 이유는, 이 개체에서 `calculateDamage()` 메서드를 호출하기 위함

실행 중 어떤 개체가 매개변수로 들어오는지에 따라 어떤 함수를 호출하는지 결정이 됨
- 다형성
- 개체가 `Monster` 클래스를 상속받은 무슨 자식 클래스냐에 따라 `calculateDamage()` 메서드의 구현이 달라짐
- 함수 포인터와 유사한 개념
	- 실행 중 실제 함수의 구현이 결정
	- `Monster` 개체를 전달하는 대신 `calculateDamage()` 함수 포인터를 전달하면?
