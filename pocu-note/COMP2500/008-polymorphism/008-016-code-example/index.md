---
aliases:
  - "코드보기: 개체 비교"
tags:
  - COMP2500
  - week9
---
# 코드보기: 개체 비교

![](pocu-note/COMP2500/008-polymorphism/008-016-code-example/images/code-example-1.png)

이 예시에서는 방향이 있는 선분으로 동치 개념을 정의함

![](pocu-note/COMP2500/008-polymorphism/008-016-code-example/images/code-example-2.png)

`equals()` 메서드만 오버라이딩했기 때문에 `HashSet` 클래스에 넣을 때는 다른 개체로 취급됨
- `Object` 클래스의 기본 `hashCode()` 메서드 동작을 그대로 사용
	- 주소값 기반
- 해시값(주소값)이 다르기 때문에 `contains()` 메서드가 `false` 반환
	- 해시 충돌 상황이 아니라 `equals()` 메서드 호출까지 가지 않음