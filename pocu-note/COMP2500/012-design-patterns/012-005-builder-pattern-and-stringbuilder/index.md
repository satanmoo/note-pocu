---
aliases:
  - 빌더 패턴과 StringBuilder
tags:
  - COMP2500
  - week12
---
# 빌더 패턴과 StringBuilder

![](pocu-note/COMP2500/012-design-patterns/012-005-builder-pattern-and-stringbuilder/images/builder-pattern-and-stringbuilder-1.png)

## 다형성 없는 빌더 패턴

![](pocu-note/COMP2500/012-design-patterns/012-005-builder-pattern-and-stringbuilder/images/builder-pattern-and-stringbuilder-2.png)
![](pocu-note/COMP2500/012-design-patterns/012-005-builder-pattern-and-stringbuilder/images/builder-pattern-and-stringbuilder-3.png)

문자열 더하기 성능 문제

![](pocu-note/COMP2500/012-design-patterns/012-005-builder-pattern-and-stringbuilder/images/builder-pattern-and-stringbuilder-4.png)

format 스트링도 복잡함

![](pocu-note/COMP2500/012-design-patterns/012-005-builder-pattern-and-stringbuilder/images/builder-pattern-and-stringbuilder-5.png)
![](pocu-note/COMP2500/012-design-patterns/012-005-builder-pattern-and-stringbuilder/images/builder-pattern-and-stringbuilder-6.png)

오버로딩 때문에 편함

![](pocu-note/COMP2500/012-design-patterns/012-005-builder-pattern-and-stringbuilder/images/builder-pattern-and-stringbuilder-7.png)

내부 동작을 알면 장점은 성능에 유리한 초기 용량을 `StringBuilder` 개체 생성 시 매개변수로 전달할 수 있다는 것
- [[pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/index|디커플링의 단점 2]] 참고 — 내부를 알아야 좋은 경우도 있다

내부적으로 빌더에서 충분히 미리 용량 잡아서 성능에 유리
- OO에서 이 내부 공개 안 하는게 추상화, 캡슐화
	- [[pocu-note/COMP2500/002-necessity-of-oop/002-023-encapsulation/index|캡슐화, 추상화]] 참고

![](pocu-note/COMP2500/012-design-patterns/012-005-builder-pattern-and-stringbuilder/images/builder-pattern-and-stringbuilder-8.png)
