---
title: 여러 인터페이스 구현하기
aliases:
  - 여러 인터페이스 구현하기
tags:
  - COMP2500
  - week10
---
# 여러 인터페이스 구현하기

![](pocu-note/COMP2500/010-interface/010-009-implementing-multiple-interfaces/images/implementing-multiple-interfaces-1.png)

인터페이스는 다중 상속 가능
- 여러 개의 함수 시그니처 묶음을 전달을 받는 것과 동일한 개념

![](pocu-note/COMP2500/010-interface/010-009-implementing-multiple-interfaces/images/implementing-multiple-interfaces-2.png)

`processData()` 메서드의 매개변수로 전달할 때 `ILoggable` 타입 매개변수에 `ILoggable`, `ISavable` 인터페이스를 모두 구현한 `ConsoleLogger` 클래스의 개체를 전달해도 문제 없음

## 왜 인터페이스는 다중 상속을 허용하나?

![](pocu-note/COMP2500/010-interface/010-009-implementing-multiple-interfaces/images/implementing-multiple-interfaces-3.png)
![](pocu-note/COMP2500/010-interface/010-009-implementing-multiple-interfaces/images/implementing-multiple-interfaces-4.png)

다중 상속의 문제점은 "실체"를 중복해서 상속받는 것이 문제
- 상태 중복
- "메서드 구현"이 중복

다이아몬드 상속 문제
- C++에서 배움
- D는 B를 상속하면서, C를 상속
- B, C 모두 A를 상속
- D는 A를 중복해서 상속

![](pocu-note/COMP2500/010-interface/010-009-implementing-multiple-interfaces/images/implementing-multiple-interfaces-5.png)

인터페이스는 실체가 없어서 위 문제가 발생하지 않음
- 어차피 실행 중 실체는 하나로 결정되잖아?

![](pocu-note/COMP2500/010-interface/010-009-implementing-multiple-interfaces/images/implementing-multiple-interfaces-6.png)

함수 시그니처가 겹쳐도 자식 클래스(구현 클래스)에서 하나만 구현하면 문제 없음!!
- 여기서 시그니처는 메서드 이름, 매개변수 목록
- 문맥마다 "시그니처"의 구성이 다르니 구분할 것:
	- Java 컴파일러의 중복 정의·오버로딩 판정 기준: ==메서드 이름·매개변수 목록== (반환형 제외 — 그래서 아래처럼 반환형만 달라도 중복 정의 오류)
	- `@Override` 어노테이션의 판정 기준: 메서드 이름·매개변수 목록·==반환형== — [[pocu-note/COMP2500/010-interface/010-006-java-annotation/index|Java 어노테이션]] 참고
	- C 함수 포인터의 시그니처: ==반환형·매개변수 목록== (함수 이름 무관 — 모양만 맞으면 어떤 함수든 대입해서 전달 가능) — [[pocu-note/COMP2500/010-interface/010-002-interface-and-function-pointer/index|인터페이스와 함수 포인터]]의 "시그니처만 필요함"이 이 의미

![](pocu-note/COMP2500/010-interface/010-009-implementing-multiple-interfaces/images/implementing-multiple-interfaces-7.png)

`public boolean save(String filename)`으로 작성한 라인에서 컴파일 오류 발생
- 위에 `public void save(String filename)`이 이미 존재하니까

![](pocu-note/COMP2500/010-interface/010-009-implementing-multiple-interfaces/images/implementing-multiple-interfaces-8.png)

반환형만 다른 경우 컴파일 오류
- 컴파일러 입장에서 동일한 함수 시그니처
- 컴파일러 오류 메시지도 "already defined in class ..." 중복 정의라고 말하고 있음
- 컴파일러 입장에서 구현된 메서드가 어떤 추상 메서드를 구현하는지 알 수 없음

컴파일러 입장에서 하나의 구현 메서드로 추상 메서드를 모두 구현해야 하는데, 둘 다 구현할 방법이 없음

반환형 말고 매개변수 목록이 달라지면?
- 애초에 함수 시그니처가 다르니까 각기 다른 추상 메서드의 구현으로 문제 없음
