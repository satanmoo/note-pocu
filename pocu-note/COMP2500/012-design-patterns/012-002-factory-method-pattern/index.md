---
aliases:
  - 팩토리 메서드 패턴
tags:
  - COMP2500
  - week12
---
# 팩토리 메서드 패턴

![](pocu-note/COMP2500/012-design-patterns/012-002-factory-method-pattern/images/factory-method-pattern-1.png)

고객이 "250ml 주세요!"라고 하지 않는 것이 중요함. 대신 "스몰 주세요!"
- 고객은 내부를 정확히 몰라도 됨

![](pocu-note/COMP2500/012-design-patterns/012-002-factory-method-pattern/images/factory-method-pattern-2.png)

`createOrNull()` 정적 메서드를 통해서만 개체 생성 가능
- 생성자는 `private` 접근 제어자

![](pocu-note/COMP2500/012-design-patterns/012-002-factory-method-pattern/images/factory-method-pattern-3.png)

예전에 봤던 분무기 코드랑 비슷
- [[pocu-note/COMP2500/003-object-modeling-1/003-014-modeling-8/index|모델링 8: 다시 사용성 높이기]] 참고
- `WaterSpray` 개체를 생성할 때 `BottleSize` 같은 enum 규격만 고르면 되고, 물통의 실제 용량은 정확히 몰라도 됐음
- 다만 이때는 팩토리 메서드가 아니라 생성자를 이용

![](pocu-note/COMP2500/012-design-patterns/012-002-factory-method-pattern/images/factory-method-pattern-4.png)

생성자는 생성이 불가능한 경우 예외를 던질 수 밖에 없음
- 생성자의 시그니처 상 반환형이 없으니까!

생성자 대신 정적 팩토리 메서드를 사용하면 생성이 불가능한 경우 `null` 반환 가능
- 예외를 던지는 것 보다 `null`을 반환하는게 개념상 맞음

![](pocu-note/COMP2500/012-design-patterns/012-002-factory-method-pattern/images/factory-method-pattern-5.png)
