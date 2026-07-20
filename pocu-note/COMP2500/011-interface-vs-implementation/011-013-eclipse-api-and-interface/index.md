---
aliases:
  - 이클립스 API와 인터페이스
tags:
  - COMP2500
  - week11
---
# 이클립스 API와 인터페이스

## 디커플링 모범 사례: 이클립스 API

![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-1.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-2.png)

API 버전이 변할 때 최대한 변화가 적어야 함
- 여기서 변화는 메서드 시그니처라든가 다시 컴파일해야 하는 상황을 만드는 경우

![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-3.png)

자체적으로 약속을 함
- 키워드에 의미를 부여함

![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-4.png)

하지만 결론적으로 인터페이스도 변경됨

![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-5.png)

인터페이스에 숫자 붙이기
- `IWorkbenchPart2` 인터페이스는 `IWorkbenchPart` 인터페이스의 모든 동작을 포함함
	- 확장하는 개념

`IWorkbenchPart` 인터페이스에 의존하도록 코드를 구현해서 컴파일 호환

![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-6.png)

나중에 클라이언트가 인터페이스를 교체하면
- 기존의 구현은 건드릴 필요 없고
	- `IWorkbenchPart2` 인터페이스가 `IWorkbenchPart` 인터페이스의 모든 추상 메서드를 포함하기 때문
- 새로 추가된 기능(추상 메서드)만 구현하면 됨

![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-7.png)

하지만 이런 방법도 문제가 있음
- 애초에 모든 비즈니스 상황을 예상하고 설계할 수 없음
	- 설계는 변함

![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-8.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-9.png)

특히 이런 방식은 오래전부터 인터페이스를 사용한 고객이 아니라 뉴비한테 어려움

![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-10.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-11.png)

이렇게 확실하게 구분해서 빡세게(?) 설계하는 프로젝트는 흔치 않음
- 하지만 비용의 문제

![](pocu-note/COMP2500/011-interface-vs-implementation/011-013-eclipse-api-and-interface/images/eclipse-api-and-interface-12.png)

- 이클립스 API의 시도는 의의는 있음
	- 내가 많은 사람이 사용하는 라이브러리 만든다면 생각해볼 만함
- 요즘 트렌드는 빨리 만들고 빨리 고치고 부수고 수정하고
	- 이클립스 API처럼 정말 안 바뀔 것을 예상한 설계는 잘 안 함
