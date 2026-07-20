---
aliases:
  - 변화에 대비해야 하는가?
tags:
  - COMP2500
  - week11
---
# 변화에 대비해야 하는가?

![](pocu-note/COMP2500/011-interface-vs-implementation/011-015-should-we-prepare-for-change/images/should-we-prepare-for-change-1.png)

위에서부터 순서대로 원칙을 적용하자!!!

![](pocu-note/COMP2500/011-interface-vs-implementation/011-015-should-we-prepare-for-change/images/should-we-prepare-for-change-2.png)

변화에 대한 대비는 이렇게 판단하자
- 내가 쉽게 바꿀 수 없는 경우

위의 3가지 사례에서는 변화에 크게 대비할 필요 없음
- 시스템이 크지 않으면 내가 쉽게 바꿀 수 있음
- 내 라이브러리를 사용하는 외부 클라이언트가 적은 경우 바꿔도 문제를 겪는 클라이언트가 적음
- 여러 버전을 특정 기간 동안 지원하면 바꾸는 것이 아니라 새로 만들면 됨
	- [[pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/index|이전 레슨]] 참고

![](pocu-note/COMP2500/011-interface-vs-implementation/011-015-should-we-prepare-for-change/images/should-we-prepare-for-change-3.png)

쉽게 바꿀 수 없는 경우 변화에 대비하여 인터페이스

이런 상황 판단은 경험에서 나옴

## 복습 퀴즈

![](pocu-note/COMP2500/011-interface-vs-implementation/011-015-should-we-prepare-for-change/images/should-we-prepare-for-change-4.png)

함수 매개변수의 자료형으로 인터페이스를 사용하면 클래스를 사용하는 것보다 메서드를 좀 더 명확하게 특정할 수 있다.
- 클래스를 사용하면 상태도 포함되잖아?
- [[pocu-note/COMP2500/010-interface/010-003-interface-is-pure-abstract-class/index|인터페이스는 순수 추상 클래스]] 참고

인터페이스를 사용하면 가독성이 떨어진다.
- [[pocu-note/COMP2500/011-interface-vs-implementation/011-007-decoupling-disadvantages-1/index|디커플링의 단점 1]] 참고

Java에서 인터페이스를 사용해 구현한 여러 클래스들이 있을 때 이 여러 클래스를 부모로 상속할 수는 없다.
- 인터페이스인 상태로 다중 상속은 가능
- 구체 클래스는 다중 상속 불가능
- [[pocu-note/COMP2500/010-interface/010-009-implementing-multiple-interfaces/index|여러 인터페이스 구현하기]] 참고
