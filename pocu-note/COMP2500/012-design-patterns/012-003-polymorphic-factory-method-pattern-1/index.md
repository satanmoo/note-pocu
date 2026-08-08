---
title: 다형적인 팩토리 메서드 패턴 1
aliases:
  - 다형적인 팩토리 메서드 패턴 1
tags:
  - COMP2500
  - week12
---
# 다형적인 팩토리 메서드 패턴 1

![](pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/images/polymorphic-factory-method-pattern-1-1.png)
![](pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/images/polymorphic-factory-method-pattern-1-2.png)
![](pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/images/polymorphic-factory-method-pattern-1-3.png)

이전에 분무기 만들 때에도 매개변수로 enum 여러 개를 받았었음
- [[pocu-note/COMP2500/003-object-modeling-1/003-014-modeling-8/index|모델링 8: 다시 사용성 높이기]] 참고
- 나쁜 방식은 아니지만 아쉬움

![](pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/images/polymorphic-factory-method-pattern-1-4.png)

매개변수로 처리하기보다 다형성을 이용하는게 OO적인 사고방식

![](pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/images/polymorphic-factory-method-pattern-1-5.png)

`createOrNull()` 정적 메서드는 다형적으로 구현할 수 없음
- 사실 전역함수를 클래스 내부에 감싸놓은게 전부니까

![](pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/images/polymorphic-factory-method-pattern-1-6.png)

`createOrNull()` 정적 메서드가 `Cup` 클래스에서 빠짐

`Menu` 추상 클래스를 새로 만듦
- 이를 상속해서 `createCupOrNull()` 추상 메서드를 각 나라 클래스에 맞게 오버라이딩
- `Cup` 클래스의 생성자는 패키지 접근 제어자라서 같은 패키지에 있는 `Menu` 추상 클래스에서만 호출 가능하도록 구현

![](pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/images/polymorphic-factory-method-pattern-1-7.png)
![](pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/images/polymorphic-factory-method-pattern-1-8.png)

- 참고로 `Menu` 클래스를 인터페이스가 아닌 추상 클래스로 만든 이유는, 나중에 상태를 나타내는 멤버 변수가 추가될 가능성이 높기 때문
- 가상 생성자:
	- 추상(가상)인데 각 자식 클래스에서 이를 오버라이딩해서 각 자식 클래스를 생성하는 생성자를 구현

![](pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/images/polymorphic-factory-method-pattern-1-9.png)
![](pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/images/polymorphic-factory-method-pattern-1-10.png)
![](pocu-note/COMP2500/012-design-patterns/012-003-polymorphic-factory-method-pattern-1/images/polymorphic-factory-method-pattern-1-11.png)
