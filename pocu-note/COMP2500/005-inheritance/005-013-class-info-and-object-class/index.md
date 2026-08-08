---
title: 클래스 정보와 Object 클래스
aliases:
  - 클래스 정보와 Object 클래스
tags:
  - COMP2500
  - week5
---
# 클래스 정보와 Object 클래스

## getClass()

![](pocu-note/COMP2500/005-inheritance/005-013-class-info-and-object-class/images/class-info-and-object-class-1.png)

Class 클래스에는 클래스 정보를 제공

![](pocu-note/COMP2500/005-inheritance/005-013-class-info-and-object-class/images/class-info-and-object-class-2.png)
![](pocu-note/COMP2500/005-inheritance/005-013-class-info-and-object-class/images/class-info-and-object-class-3.png)
![](pocu-note/COMP2500/005-inheritance/005-013-class-info-and-object-class/images/class-info-and-object-class-4.png)

로그에 보통 활용

![](pocu-note/COMP2500/005-inheritance/005-013-class-info-and-object-class/images/class-info-and-object-class-5.png)

RTTI는 성능에 별로 좋지 않아유
- C++에서는 컴파일할 때 이 기능을 꺼버릴 수 있음

![](pocu-note/COMP2500/005-inheritance/005-013-class-info-and-object-class/images/class-info-and-object-class-6.png)

 `<변수명>`의 타입에 관계 없이 getClass() 매서드 호출 가능
 - 이미 어떤 부모 클래스에 구현되어 있나?
 
## Object

![](pocu-note/COMP2500/005-inheritance/005-013-class-info-and-object-class/images/class-info-and-object-class-7.png)
![](pocu-note/COMP2500/005-inheritance/005-013-class-info-and-object-class/images/class-info-and-object-class-8.png)

컴파일러는 `extends Object`를 암시적으로 붙임

equals(), toString()도 Object 클래스에서 제공함
