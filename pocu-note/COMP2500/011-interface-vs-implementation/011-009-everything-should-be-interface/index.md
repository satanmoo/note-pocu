---
aliases:
  - 모든 건 인터페이스여야 한다는 주장
tags:
  - COMP2500
  - week11
---
# 모든 건 인터페이스여야 한다는 주장

![](pocu-note/COMP2500/011-interface-vs-implementation/011-009-everything-should-be-interface/images/everything-should-be-interface-1.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-009-everything-should-be-interface/images/everything-should-be-interface-2.png)

언제나 디커플링이 중요한 것은 아님

![](pocu-note/COMP2500/011-interface-vs-implementation/011-009-everything-should-be-interface/images/everything-should-be-interface-3.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-009-everything-should-be-interface/images/everything-should-be-interface-4.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-009-everything-should-be-interface/images/everything-should-be-interface-5.png)

모두 인터페이스로 바뀜
- 다형적이지도 않음

![](pocu-note/COMP2500/011-interface-vs-implementation/011-009-everything-should-be-interface/images/everything-should-be-interface-6.png)

굳이 없는 걸 대비해서 만들어야 하냐?
- 미래에 모든 걸 대비해야 함?

![](pocu-note/COMP2500/011-interface-vs-implementation/011-009-everything-should-be-interface/images/everything-should-be-interface-7.png)

다형성이 필요하면 인터페이스 만드세용

![](pocu-note/COMP2500/011-interface-vs-implementation/011-009-everything-should-be-interface/images/everything-should-be-interface-8.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-009-everything-should-be-interface/images/everything-should-be-interface-9.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-009-everything-should-be-interface/images/everything-should-be-interface-10.png)

인터페이스라는 용어가 굉장히 다양한 의미로 사용됨
- 따라서 오해와 잘못 사용되는 경우가 많음
- 인터페이스의 개념적 정의
	- 개체가 이해하는 명령(메시지)를 나열한 것
- 이 개념적 정의는 `public` 추상 메서드의 집합과 일맥상통함
	- 하지만 다형성을 빼고 이 개념을 잘못 받아들이면 이상해짐

![](pocu-note/COMP2500/011-interface-vs-implementation/011-009-everything-should-be-interface/images/everything-should-be-interface-11.png)

명령의 나열에서 명령에 집중하는 사람들이 있음
- 명령에서 커플링을 줄이는 것이 개체지향의 본질이라는 잘못된 해석
