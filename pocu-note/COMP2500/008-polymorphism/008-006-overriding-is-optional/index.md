---
aliases:
  - 오버라이딩은 선택사항
tags:
  - COMP2500
  - week9
---
# 오버라이딩은 선택사항

![](pocu-note/COMP2500/008-polymorphism/008-006-overriding-is-optional/images/overriding-is-optional-1.png)

Sloth 클래스는 부모 클래스(Animal)의 `shout()`를 오버라이딩 하지 않음
- 실행 중 호출 시 부모의 구현을 사용

![](pocu-note/COMP2500/008-polymorphism/008-006-overriding-is-optional/images/overriding-is-optional-2.png)

==부모 동작을 사용==하면서 오버라이딩 가능
- `super.x()` 호출하면 됨
- 생성자와 다르게 반드시 첫번째 줄 호출할 필요 없음
	- 생성자에서 부모를 먼저 초기화해야 해서 부모 생성자 호출이 강제
