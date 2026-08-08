---
title: 부모 멤버에 접근하기
aliases:
  - 부모 멤버에 접근하기
tags:
  - COMP2500
  - week5
---
# 부모 멤버에 접근하기

## 이메일 주소

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-1.png)

두 클래스에 공통의 멤버 변수(상태)가 추가됨

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-2.png)

선생은 이메일을 바꿀 수 있고, 학생은 이메일을 바꿀 수 없음
- 두 클래스에 같은 멤버 변수가 추가되어도 성질이 다름
	- 스펙에 이렇게 정해져있음

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-3.png)

이메일의 특성이 Student, Teacher 클래스에 다르게 적용되는데, 이메일은 어떤 클래스의 멤버 변수로 저장하지?

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-4.png)

 공통의 멤버 변수는 부모 클래스에 구현하자

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-5.png)

이메일 주소 초기화는 처음 개체를 생성할 때, 즉 생성자에서 처리하면 됨

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-6.png)

개체 생성할 때 이름값을 받고, 이를 이용해 이메일 초기화하기

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-7.png)
![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-8.png)
![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-9.png)

Person 생성자에서 이메일 멤버변수를 초기화
Person 클래스에 getEmail() 메서드를 구현
- Student, Teacher에서 공통으로 사용할 수 있게 함

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-10.png)

코드 재사용성이 높아졌음

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-11.png)

- Teacher 클래스에만 이름을 바꿀 수 있게 구현해야함

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-12.png)
![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-13.png)
![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-14.png)
![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-15.png)

접근 제어자 문제

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-16.png)
![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-17.png)
![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-18.png)

## protected 접근 제어자

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-19.png)

참고로 자식 클래스(Student, Teacher)에서 super로 Person 클래스의 생성자를 호출할 수 있었던 이유는, Person의 생성자가 public 접근제어자를 가졌기 때문

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-20.png)
![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-21.png)
![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-22.png)

this로 부모의 멤버를 호출할 수 있음
- 애매한 개념
- 명백하게 super 사용하는 것 추천

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-23.png)
![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-24.png)

클래스 다이어그램에서 protected는 `#`으로 표현

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-25.png)

## 복습 퀴즈

### 1. 부모 클래스 A와 A의 자식 클래스가 B가 있을 때 다음 중 틀린 설명은?

![](pocu-note/COMP2500/005-inheritance/005-007-accessing-parent-members/images/accessing-parent-members-26.png)

[[pocu-note/COMP2500/005-inheritance/005-001-inheritance-intro/index|상속, 부모/자식 클래스 소개]] 참고

자식 클래스의 개체 속에는(메모리 관점) 부모 클래스의 멤버 변수가 포함되어 있음
- 자식 클래스 자료형의 부모 클래스 멤버에 대한 접근은 **접근 제어자**에 따라 달라짐 (클래스 관점)
