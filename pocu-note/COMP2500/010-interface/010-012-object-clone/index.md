---
aliases:
  - Object.clone()
tags:
  - COMP2500
  - week10
---
# Object.clone()

## 얕은 복사 문제

![](pocu-note/COMP2500/010-interface/010-012-object-clone/images/object-clone-1.png)

`savePoint` 변수는 `robot` 변수와 동일한 참조를 가지기 때문에 의도한 바(각각 `hp` 변수를 깎음)와 다르게 결과가 나옴
- 얕은 복사 문제

## `Object.clone()` 메서드

![](pocu-note/COMP2500/010-interface/010-012-object-clone/images/object-clone-2.png)

기본적으로 Java에서 개체를 복사할 때는 `Object` 클래스의 `clone()` 메서드를 호출하라고 함

## `Cloneable` 인터페이스

![](pocu-note/COMP2500/010-interface/010-012-object-clone/images/object-clone-3.png)

그냥 바로 `Object` 클래스의 `clone()` 메서드를 오버라이딩 하면 예외가 발생
- `Cloneable` 인터페이스를 구현하고 오버라이딩 하면 `CloneNotSupportedException` 예외가 발생하지 않음

`Object` 클래스의 `clone()` 메서드를 오버라이딩할 때 `Cloneable` 인터페이스 구현을 강제함

![](pocu-note/COMP2500/010-interface/010-012-object-clone/images/object-clone-4.png)

`Cloneable` 인터페이스의 `clone()` 메서드 오버라이딩
- 메서드 내용은 `Object` 클래스의 `super.clone()` 메서드를 호출
- 이렇게 문법을 그대로 따라서 구현하면 새로운 주소를 가지는 개체를 복사해서 반환해줌
	- Java 내부적으로 그렇게 동작

## `super.clone()` 호출

![](pocu-note/COMP2500/010-interface/010-012-object-clone/images/object-clone-5.png)
![](pocu-note/COMP2500/010-interface/010-012-object-clone/images/object-clone-6.png)

반드시 `super.clone()` 메서드를 호출해야 됨
- `Object` 클래스의 `clone()` 메서드의 기본 동작은 새로운 메모리를 할당하고 모든 멤버 변수를 대입해서 반환
- 멤버 변수 중 참조형이 존재하면 참조형의 참조를 그대로 대입함
	- 얕은 복사

깊은 복사를 원한다면 알아서 작성해야 함

## `clone()` 메서드의 반환형

![](pocu-note/COMP2500/010-interface/010-012-object-clone/images/object-clone-7.png)

`Cloneable` 인터페이스의 `clone()` 메서드 반환형은 `Object`
`Object` 클래스의 `clone()` 메서드 반환형 또한 `Object`
- 따라서 캐스팅 필요

## 참조형 멤버 변수와 얕은 복사

![](pocu-note/COMP2500/010-interface/010-012-object-clone/images/object-clone-8.png)
![](pocu-note/COMP2500/010-interface/010-012-object-clone/images/object-clone-9.png)

멤버 변수가 참조형일 때 생기는 얕은 복사

## 깊은 복사

![](pocu-note/COMP2500/010-interface/010-012-object-clone/images/object-clone-10.png)

이를 해결하려면 깊은 복사로 구현
- 각 참조형 멤버 변수도 `Cloneable` 인터페이스의 `clone()` 메서드를 오버라이딩 해서 구현하고, 직접 `clone()` 메서드의 결과로 복사된 개체의 멤버 변수에 대입

![](pocu-note/COMP2500/010-interface/010-012-object-clone/images/object-clone-11.png)
