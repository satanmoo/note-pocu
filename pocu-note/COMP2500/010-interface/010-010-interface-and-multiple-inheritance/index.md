---
title: 인터페이스와 다중 상속
aliases:
  - 인터페이스와 다중 상속
tags:
  - COMP2500
  - week10
---
# 인터페이스와 다중 상속

## 인터페이스의 다중 상속이 안전한가?

정말로 문제가 없나?

![](pocu-note/COMP2500/010-interface/010-010-interface-and-multiple-inheritance/images/interface-and-multiple-inheritance-1.png)

결론은 문제가 없음
- 오직 구현(실체)는 하나이기 때문

상속받은 메서드가 인터페이스하고 같은 케이스는 아래에서 다룸

![](pocu-note/COMP2500/010-interface/010-010-interface-and-multiple-inheritance/images/interface-and-multiple-inheritance-2.png)

`ILoggable` 인터페이스를 `ConsoleLogger` 클래스에서 구현

`ConsoleLogger` 클래스에 속한 `log()` 메서드는 `ILoggable` 인터페이스의 추상 메서드 `log()`를 구현함

`ExtendedConsoleLogger` 클래스는 `ConsoleLogger` 클래스를 상속받고, `IReportable` 인터페이스도 구현

`ExtendedConsoleLogger` 클래스의 `log()` 메서드는 `ConsoleLogger` 클래스의 `log()` 메서드를 오버라이딩 함과 동시에 `IReportable` 인터페이스의 `log()` 추상 메서드를 구현

최종적으로 `ExtendedConsoleLogger` 클래스에서 `log()` 메서드를 오버라이딩 한다고 했을 때 실체는 오직 하나
- 구현할 추상 메서드는 `ILoggable`의 `log()`, `IReportable`의 `log()`로 2개

![](pocu-note/COMP2500/010-interface/010-010-interface-and-multiple-inheritance/images/interface-and-multiple-inheritance-3.png)
![](pocu-note/COMP2500/010-interface/010-010-interface-and-multiple-inheritance/images/interface-and-multiple-inheritance-4.png)
![](pocu-note/COMP2500/010-interface/010-010-interface-and-multiple-inheritance/images/interface-and-multiple-inheritance-5.png)
![](pocu-note/COMP2500/010-interface/010-010-interface-and-multiple-inheritance/images/interface-and-multiple-inheritance-6.png)

인터페이스를 이용하면 `IWearable`, `IMountable` 인터페이스 타입으로 배열에 저장하고 다형적 호출 가능
- dynamic dispatch

![](pocu-note/COMP2500/010-interface/010-010-interface-and-multiple-inheritance/images/interface-and-multiple-inheritance-7.png)

다중 상속이 지원된다면 부모 클래스에만 `mount()` 같은 메서드를 구현하고 상속 받아서 사용하면 됨

지금은 인터페이스의 추상 메서드를 사용했기에 반드시 구현하는 클래스에서 따로 구현을 해줘야 함
- 구현을 여러 번 해야 하는 불편함은 존재
- 하지만 dynamic dispatch는 가능하죠?

## 실무에서 인터페이스 용도 정리

![](pocu-note/COMP2500/010-interface/010-010-interface-and-multiple-inheritance/images/interface-and-multiple-inheritance-8.png)

- 함수 포인터
- 다중 상속 흉내

결국 핵심은 다형성!

## 복습 퀴즈

![](pocu-note/COMP2500/010-interface/010-010-interface-and-multiple-inheritance/images/interface-and-multiple-inheritance-9.png)

인터페이스 자체는 패키지 접근 제어자로 선언할 수 있다.
- [[pocu-note/COMP2500/010-interface/010-007-interface-access-modifier/index|인터페이스의 접근 제어자]] 참고

인터페이스 안에 선언된 추상 메서드는 자동으로 `public` 접근 제어자다.
- [[pocu-note/COMP2500/010-interface/010-007-interface-access-modifier/index|인터페이스의 접근 제어자]] 참고

인터페이스는 추상 클래스와 다르게 상태가 존재하지 않는다.
- 접근 제어자도 `public`으로 강제
