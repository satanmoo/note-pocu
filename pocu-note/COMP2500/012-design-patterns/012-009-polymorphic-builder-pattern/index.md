---
aliases:
  - 다형적인 빌더 패턴
tags:
  - COMP2500
  - week12
---
# 다형적인 빌더 패턴

![](pocu-note/COMP2500/012-design-patterns/012-009-polymorphic-builder-pattern/images/polymorphic-builder-pattern-1.png)
![](pocu-note/COMP2500/012-design-patterns/012-009-polymorphic-builder-pattern/images/polymorphic-builder-pattern-2.png)

다형적으로 HTML, markdown 포맷을 사용할 예정

![](pocu-note/COMP2500/012-design-patterns/012-009-polymorphic-builder-pattern/images/polymorphic-builder-pattern-3.png)
![](pocu-note/COMP2500/012-design-patterns/012-009-polymorphic-builder-pattern/images/polymorphic-builder-pattern-4.png)
![](pocu-note/COMP2500/012-design-patterns/012-009-polymorphic-builder-pattern/images/polymorphic-builder-pattern-5.png)

`TableBuilder` 추상 클래스
- 말 그대로 테이블을 만드는 추상 메서드를 가지고 있음

![](pocu-note/COMP2500/012-design-patterns/012-009-polymorphic-builder-pattern/images/polymorphic-builder-pattern-6.png)

`builder`를 다형적으로 `writeTo()` 메서드에 인자로 넘김

![](pocu-note/COMP2500/012-design-patterns/012-009-polymorphic-builder-pattern/images/polymorphic-builder-pattern-7.png)
![](pocu-note/COMP2500/012-design-patterns/012-009-polymorphic-builder-pattern/images/polymorphic-builder-pattern-8.png)
![](pocu-note/COMP2500/012-design-patterns/012-009-polymorphic-builder-pattern/images/polymorphic-builder-pattern-9.png)

"4. 토큰 배열을..." 로직에서 `addColumn()` 메서드가 `String`을 인자로 받는 이유가 나옴
- 열을 추가할 때 내용도 채움

![](pocu-note/COMP2500/012-design-patterns/012-009-polymorphic-builder-pattern/images/polymorphic-builder-pattern-10.png)
![](pocu-note/COMP2500/012-design-patterns/012-009-polymorphic-builder-pattern/images/polymorphic-builder-pattern-11.png)

각각 `builder` 변수의 타입이 구체적인 클래스
- 실제 빌더 개체의 레퍼런스를 들고 있음

`writeTo()` 메서드에서 다형적으로 인자를 받기에 다형적 빌더
