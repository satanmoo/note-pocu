---
aliases:
  - 다형성의 장점
tags:
  - COMP2500
  - week9
---
# 다형성의 장점

![](pocu-note/COMP2500/008-polymorphism/008-007-advantages-of-polymorphism/images/advantages-of-polymorphism-1.png)

다형성이 없다면 코드에서 중재자가 개체의 타입을 판단해 각각에 맞는 메서드를 호출
- 이 방식은 개체가 스스로 자신의 상태를 책임진다는 OO의 원칙과 거리가 멂

다형성을 적용하면 개체가 자신의 타입을 스스로 알고 구현된 동작을 수행
- 오버라이딩 구현

![](pocu-note/COMP2500/008-polymorphism/008-007-advantages-of-polymorphism/images/advantages-of-polymorphism-2.png)

각 자료형에 맞는 코드가 하나의 클래스(한 파일)에 모두 들어감
- "각 자료형에 맞는 코드"는 오버라이딩 한 함수의 구현을 말함
- 캡슐화

새로운 클래스를 추가할 때도 클래스 코드만 추가하면 됨
- 상속 받은 클래스 파일 하나만 추가하고, 파일에 관련 코드를 모두 작성하면 됨
- 유지 보수성에 유리함

외부에 패키지를 제공하는 경우 
- 다형성을 사용하는 경우 
	- 패키지로 제공된 기존의 코드를 바꾸지 않아도 됨
	- 클라이언트가 상속받아 재량에 따라 구현하면 됨
- 다형성을 안 사용하는 경우 
	- 다른 어딘가에 if 문을 추가해야 함
		- 클라이언트는 외부 패키지를 수정할 수 없음
		- 따라서 제공하는 쪽에서 코드 수정이 필요하고 번거로움

## 극단적인 주장

![](pocu-note/COMP2500/008-polymorphism/008-007-advantages-of-polymorphism/images/advantages-of-polymorphism-3.png)
![](pocu-note/COMP2500/008-polymorphism/008-007-advantages-of-polymorphism/images/advantages-of-polymorphism-4.png)
