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

`equals` 만 오버라이딩 했기 때문에 `HashSet`에 넣을 때는 다른 개체로 취급됨
- `Object`의 기본 `hashCode` 동작
- 주소값이 다름
