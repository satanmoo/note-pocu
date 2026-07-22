---
aliases:
  - 빌더 패턴 없는 올바른 문제 해결법
tags:
  - COMP2500
  - week12
---
# 빌더 패턴 없는 올바른 문제 해결법

![](pocu-note/COMP2500/012-design-patterns/012-008-correct-solution-without-builder-pattern/images/correct-solution-without-builder-pattern-1.png)
![](pocu-note/COMP2500/012-design-patterns/012-008-correct-solution-without-builder-pattern/images/correct-solution-without-builder-pattern-2.png)

`StringBuilder`의 경우 `toString()` 메서드는 `String` 개체를 반환하기 때문에 올바른 빌더 패턴

![](pocu-note/COMP2500/012-design-patterns/012-008-correct-solution-without-builder-pattern/images/correct-solution-without-builder-pattern-3.png)

메서드를 호출 안 하는 실수를 막으려면?

![](pocu-note/COMP2500/012-design-patterns/012-008-correct-solution-without-builder-pattern/images/correct-solution-without-builder-pattern-4.png)
![](pocu-note/COMP2500/012-design-patterns/012-008-correct-solution-without-builder-pattern/images/correct-solution-without-builder-pattern-5.png)

매개변수를 구조체처럼 받기
- 빼먹거나 순서 바뀌는 실수를 그나마 줄일 수 있음
- DTO 개념
- `CreateEmployeeParams` 클래스의 멤버 변수를 모두 `final` 키워드로 선언하면 반드시 초기화하도록 컴파일 시점에 강제할 수 있음
	- 엥, `Employee` 클래스 멤버 변수에 `final`을 붙이면 안 되나요? → 이건 멤버 변수의 성격에 따라 결정해야 함. 멤버 변수가 변할 수 있으면?
		- `CreateEmployeeParams` 클래스의 경우 멤버 변수 값을 전달하는 용도이기 때문에 모두 `final`로 해도 `Employee` 클래스의 성격에 영향을 주지 않죠

![](pocu-note/COMP2500/012-design-patterns/012-008-correct-solution-without-builder-pattern/images/correct-solution-without-builder-pattern-6.png)

- 완벽한 방법은 아님

![](pocu-note/COMP2500/012-design-patterns/012-008-correct-solution-without-builder-pattern/images/correct-solution-without-builder-pattern-7.png)

named parameter

![](pocu-note/COMP2500/012-design-patterns/012-008-correct-solution-without-builder-pattern/images/correct-solution-without-builder-pattern-8.png)
![](pocu-note/COMP2500/012-design-patterns/012-008-correct-solution-without-builder-pattern/images/correct-solution-without-builder-pattern-9.png)

코틀린에서도 이거 활용하면 좋죠
- 최근 언어는 거의 있음

![](pocu-note/COMP2500/012-design-patterns/012-008-correct-solution-without-builder-pattern/images/correct-solution-without-builder-pattern-10.png)

디자인 패턴의 많은 것은 언어에서 자체 지원이 있다면 사용할 필요 없다는 명제를 보충하는 사례
