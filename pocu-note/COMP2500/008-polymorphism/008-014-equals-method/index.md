---
title: equals() 메서드
aliases:
  - equals() 메서드
tags:
  - COMP2500
  - week9
---
# equals() 메서드

![](pocu-note/COMP2500/008-polymorphism/008-014-equals-method/images/equals-method-1.png)

`Object` 클래스에 정의된 `equals`의 기본 동작은 참조 주소비교

`String` 클래스는 개체 속 문자(character)를 하나하나 비교하도록 오버라이딩 해서 구현

![](pocu-note/COMP2500/008-polymorphism/008-014-equals-method/images/equals-method-2.png)

오버라이딩 하지 않은 기본 구현으로 참조 비교

![](pocu-note/COMP2500/008-polymorphism/008-014-equals-method/images/equals-method-3.png)

 각 클래스에서 동치의 개념은 다를 수 있음
- `equals()` 를 오버라이딩 하는 순간 `hashCode()`도 오버라이딩 해야 함

![](pocu-note/COMP2500/008-polymorphism/008-014-equals-method/images/equals-method-4.png)

 IntelliJ 자동 구현도 위 템플릿
   - 참조 확인
   - null 확인
   - 클래스 정보 확인
       - RTTI
