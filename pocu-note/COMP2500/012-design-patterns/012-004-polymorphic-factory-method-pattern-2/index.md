---
title: 다형적인 팩토리 메서드 패턴 2
aliases:
  - 다형적인 팩토리 메서드 패턴 2
tags:
  - COMP2500
  - week12
---
# 다형적인 팩토리 메서드 패턴 2

![](pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/images/polymorphic-factory-method-pattern-2-1.png)

컵의 종류도 다형적으로 구현해보자
- 한국에서는 일회용 컵 쓰고, 미국은 종이컵 쓰고...

![](pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/images/polymorphic-factory-method-pattern-2-2.png)

`Cup` 클래스는 이제 추상 클래스로
- 생성자도 자식 클래스에서 호출하도록 `protected` 생성자
- 자식 클래스 `PaperCup`, `GlassCup`의 생성자는 같은 패키지의 `AmericanMenu`, `KoreanMenu` 클래스에서 사용하도록 패키지 접근 제어자(default) 생성자

`PaperCup` 클래스는 멤버 변수로 뚜껑(`Lid` 클래스)을 가짐

![](pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/images/polymorphic-factory-method-pattern-2-3.png)

이제 `Cup` 클래스는 직접 개체로 만들지 않을 예정
- 추상 클래스

![](pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/images/polymorphic-factory-method-pattern-2-4.png)
![](pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/images/polymorphic-factory-method-pattern-2-5.png)
![](pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/images/polymorphic-factory-method-pattern-2-6.png)

`AmericanMenu` 클래스는 `Lid` 클래스와 의존성이 생김
- 내부에서 `Lid` 개체 생성
- [[pocu-note/COMP2500/011-interface-vs-implementation/011-004-dependency-injection/index|의존성 주입(DI)]] 참고

![](pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/images/polymorphic-factory-method-pattern-2-7.png)
![](pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/images/polymorphic-factory-method-pattern-2-8.png)
![](pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/images/polymorphic-factory-method-pattern-2-9.png)
![](pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/images/polymorphic-factory-method-pattern-2-10.png)

장점 3가지
- 클라이언트는 생성할 개체를 몰라도 됨
- 생성 오류시 `null` 반환
- 가상 생성자 패턴
	- 다형성

## 가상 생성자(virtual constructor) 패턴

- 생성자는 오버라이딩이 불가능 → dynamic dispatch가 안 되므로 가상(virtual)이 될 수 없음
- 대신 부모 클래스에 개체 생성용 추상 메서드(`createCupOrNull()`)를 선언하고, 각 자식 클래스가 이를 오버라이딩해서 알맞은 구체 클래스(`PaperCup`, `GlassCup`)의 개체를 생성
- 호출하는 쪽은 부모 타입(`Menu` 추상 클래스)으로 호출 → 어떤 개체가 생성될지는 실행 중에 dynamic dispatch로 결정
	- 마치 생성자가 가상인 것처럼 동작
- 그래서 팩토리 메서드 패턴의 다른 이름이 가상 생성자 패턴
- [[pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/index|다형적인 팩토리 메서드 패턴 1]] 참고
