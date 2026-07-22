---
aliases:
  - 래퍼 패턴
tags:
  - COMP2500
  - week12
---
# 래퍼 패턴

GoF 책에서 다른 말로 어댑터 패턴
- 업계에서는 래퍼 패턴이라고 많이 사용함

![](pocu-note/COMP2500/012-design-patterns/012-011-wrapper-pattern/images/wrapper-pattern-1.png)

클래스로 감싸는 식으로 구현
- 클래스 코드 자체를 수정하지 못하지만, 래퍼 클래스로 감싸서 커스터마이징 할 수 있음
- 보통 남의 라이브러리 사용할 때

![](pocu-note/COMP2500/012-design-patterns/012-011-wrapper-pattern/images/wrapper-pattern-2.png)
![](pocu-note/COMP2500/012-design-patterns/012-011-wrapper-pattern/images/wrapper-pattern-3.png)

어댑터를 씌운다고 생각해도 됨

![](pocu-note/COMP2500/012-design-patterns/012-011-wrapper-pattern/images/wrapper-pattern-4.png)

기능 추가
- 클래스 내부에 추가하는게 아님
- 래퍼 클래스를 만들고 기존 클래스 + 새로운 기능
- 즉 기존 클래스를 컴포지션으로 확장한다고 생각하면 됨 (OO 7대 개념에서 컴포지션)

내부 개체를 클라이언트에게 노출하지 않기
- DTO
- 내부 개체 중 일부 또는 변형해서 공개하고 싶을 때
