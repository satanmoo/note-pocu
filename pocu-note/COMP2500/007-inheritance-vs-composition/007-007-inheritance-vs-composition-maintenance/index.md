---
aliases:
  - "상속 vs 컴포지션: 유지보수"
tags:
  - COMP2500
  - week7
---
# 상속 vs 컴포지션: 유지보수

[[pocu-note/COMP2500/007-inheritance-vs-composition/007-004-four-criteria-for-inheritance-vs-composition/index|상속 vs 컴포지션 선택 시 4가지 기준]] 에서 **관리의 효율성**

## 관리의 효율성

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-007-inheritance-vs-composition-maintenance/images/inheritance-vs-composition-maintenance-1.png)

`Person` - `Teacher` 컴포지션 모델에서 ==주황색으로 강조한== 메서드를 호출하려면 `Teacher` 클래스에 메서드를 만들고 `Person` 개체의 메서드를 호출하는 식으로 구현
- 연쇄로 호출

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-007-inheritance-vs-composition-maintenance/images/inheritance-vs-composition-maintenance-2.png)

상속으로 모델링하면 코드가 줄어듬
- 공통 코드(위 슬라이드에서 ==주황색으로 강조==)는 `Person` 클래스에만 작성하면 됨
	- `getFullName`도 공통 코드에 속함
- 유지보수(관리)의 장점

## 깊은 상속 관계

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-007-inheritance-vs-composition-maintenance/images/inheritance-vs-composition-maintenance-3.png)

상속이 유지보수에 불편한 경우

깊은 상속 관계에서는 부모 클래스 변경이 깊게 자식 클래스를 변경
- 많은 자식 클래스에 영향을 줌

컴포지션이 독립적으로 조립되는 성질을 가지기 때문에 이런 깊은 상속 관계가 발생하는 상황은 컴포지션이 유지보수에 유리함
