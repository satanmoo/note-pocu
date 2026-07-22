---
aliases:
  - 옵저버 패턴과 메모리 누수 문제
tags:
  - COMP2500
  - week12
---
# 옵저버 패턴과 메모리 누수 문제

![](pocu-note/COMP2500/012-design-patterns/012-022-observer-pattern-and-memory-leak/images/observer-pattern-and-memory-leak-1.png)

매니지드 언어에서 메모리 누수를 만드는 주범임
- `BookkeepingApp` 개체는 가비지 컬렉터에서 지우지 않음
	- 왜?
	- `null` 대입하면 사용 안 하도록 명시해준거 아닌가?

![](pocu-note/COMP2500/012-design-patterns/012-022-observer-pattern-and-memory-leak/images/observer-pattern-and-memory-leak-2.png)

JVM에서 여전히 사용 중으로 인식함
- `CrowdFundingAccount` 개체에서 여전히 참조를 가지고 있기 때문

![](pocu-note/COMP2500/012-design-patterns/012-022-observer-pattern-and-memory-leak/images/observer-pattern-and-memory-leak-3.png)

해결법은 `unsubscribe()` 메서드 만들어서 직접 `subscribers`에서 제거

![](pocu-note/COMP2500/012-design-patterns/012-022-observer-pattern-and-memory-leak/images/observer-pattern-and-memory-leak-4.png)

이거 안 까먹고 할 자신있냐?
- 이벤트 핸들러로 등록한 것들 다 찾아서 제거해줘야 하는데..?

![](pocu-note/COMP2500/012-design-patterns/012-022-observer-pattern-and-memory-leak/images/observer-pattern-and-memory-leak-5.png)

참고로 C++에서는 자동으로 지워지게 할 수 있음
- 개체가 지워질 때 반드시 호출되는 함수 destructor(소멸자)
	- 소멸자는 개체가 지워지는 시점에 결정적(deterministic)으로 호출됨 — 힙 개체는 `delete` 시, 스택 개체는 스코프를 벗어날 때
	- 그래서 소멸자 안에 `unsubscribe()` 호출을 넣어두면 구독 해제를 까먹을 수 없음
	- 반면 Java의 가비지 컬렉터는 개체를 언제 지울지 알 수 없고(비결정적), 소멸자에 해당하는 기능도 없어서 이 방법을 쓸 수 없음

C++에서 개체를 힙에 만들지 않고 스택에 만들어서 함수 스코프 벗어나서 할당 해제되게 할 수도 있음
- 스택 개체는 스코프가 끝나는 순간 자동으로 소멸자가 호출되면서 해제됨
	- 개체의 수명이 스코프에 묶이기 때문에 구독 해제 같은 정리 작업이 빠짐없이 보장됨
	- 이렇게 자원의 획득/해제를 개체의 수명에 묶는 기법을 RAII(Resource Acquisition Is Initialization)라고 부름

## 복습 퀴즈

![](pocu-note/COMP2500/012-design-patterns/012-022-observer-pattern-and-memory-leak/images/observer-pattern-and-memory-leak-6.png)

어떤 개체를 다른 개체==들==이 관찰하는 패턴
- 옵저버 패턴

![](pocu-note/COMP2500/012-design-patterns/012-022-observer-pattern-and-memory-leak/images/observer-pattern-and-memory-leak-7.png)

지연 로딩

![](pocu-note/COMP2500/012-design-patterns/012-022-observer-pattern-and-memory-leak/images/observer-pattern-and-memory-leak-8.png)

우선순위에 따라 처리할 기회를 줌
- 그냥 기회를 주는 것이 아님
- 책임(우선순위)에 따라 수행
