---
title: '코드보기: 마법사'
aliases:
  - "코드보기: 마법사"
tags:
  - COMP2500
  - week9
---
# 코드보기: 마법사

![](pocu-note/COMP2500/008-polymorphism/008-012-code-example/images/code-example-1.png)

`final` 클래스에서 알 수 있는 것
- 상속 X
- 다형적으로 사용하지 않음

![](pocu-note/COMP2500/008-polymorphism/008-012-code-example/images/code-example-2.png)

`OffsetDateTime` 타입의 `lastEliteAttackUsedDateTime`멤버 변수가 필요한 이유
- cool down 을 표현하기 위함

![](pocu-note/COMP2500/008-polymorphism/008-012-code-example/images/code-example-3.png)

동일한 클래스인 경우 조율을 바꿀 필요가 없으니 바꾸지 않음
- 동일한 클래스인지 확인하기 위해 `getClass()` 사용

![](pocu-note/COMP2500/008-polymorphism/008-012-code-example/images/code-example-4.png)

조율(attunement)을 바꾸는 경우 `onEntry()`를 호출함
- 이름 그대로 바꿨을 때(진입)시 하는 동작

![](pocu-note/COMP2500/008-polymorphism/008-012-code-example/images/code-example-5.png)

`EliteSkill`을 사용하면 cool-down 을 계산하기 위해 현재 시간을 저장

![](pocu-note/COMP2500/008-polymorphism/008-012-code-example/images/code-example-6.png)

죽으면 엘리트 공격의 쿨 다운 시간 초기화

![](pocu-note/COMP2500/008-polymorphism/008-012-code-example/images/code-example-7.png)

"기반 클래스"
- **base class** 라고 표현함
- 다음에 배울 **추상 클래스**를 통해 구현하는 것이 더 좋은 방식
	- 이 클래스의 인스턴스를 만들지 않을 것이기 때문

![](pocu-note/COMP2500/008-polymorphism/008-012-code-example/images/code-example-8.png)

메서드들의 속이 비어있음
- 구현이 없음
- **추상 메서드**로 만들면 좋겠지?

![](pocu-note/COMP2500/008-polymorphism/008-012-code-example/images/code-example-9.png)

cool-down 계산 로직
- 마지막으로 사용한 시간을 상태로 기억
- 현재 시간과 마지막으로 사용한 시간의 차이와 cool-down 비교
