---
title: 빌더 패턴과 플루언트 인터페이스
aliases:
  - 빌더 패턴과 플루언트 인터페이스
tags:
  - COMP2500
  - week12
---
# 빌더 패턴과 플루언트 인터페이스

![](pocu-note/COMP2500/012-design-patterns/012-006-builder-pattern-and-fluent-interface/images/builder-pattern-and-fluent-interface-1.png)

`appendLine()` 메서드가 있으면 좋을 것 같은데..

![](pocu-note/COMP2500/012-design-patterns/012-006-builder-pattern-and-fluent-interface/images/builder-pattern-and-fluent-interface-2.png)

요즘 새로 생긴 패턴

![](pocu-note/COMP2500/012-design-patterns/012-006-builder-pattern-and-fluent-interface/images/builder-pattern-and-fluent-interface-3.png)

세미콜론 안 찍고 `.`으로 계속 호출
- 한 줄에 처리하는 것을 명확하게 보여줄 수 있음

![](pocu-note/COMP2500/012-design-patterns/012-006-builder-pattern-and-fluent-interface/images/builder-pattern-and-fluent-interface-4.png)
![](pocu-note/COMP2500/012-design-patterns/012-006-builder-pattern-and-fluent-interface/images/builder-pattern-and-fluent-interface-5.png)

자기 자신을 반환하기 때문에 플루언트 인터페이스 가능

![](pocu-note/COMP2500/012-design-patterns/012-006-builder-pattern-and-fluent-interface/images/builder-pattern-and-fluent-interface-6.png)

`return this`에 주목

![](pocu-note/COMP2500/012-design-patterns/012-006-builder-pattern-and-fluent-interface/images/builder-pattern-and-fluent-interface-7.png)

자기 자신을 반환하는 개념이 낯설 수도 있지만
- OOP, 함수 블랙박스 측면에서 말이 안 되는 개념

이제 플루언트 인터페이스, 메서드 체이닝이 굉장히 널리 알려져서 많이 사용함
