---
aliases:
  - "코드보기: 스택"
tags:
  - COMP2500
  - week13
---
# 코드보기: 스택

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-1.png)

`Stack` 클래스는 `ArrayList` 클래스를 상속받고 있음

`ArrayList`를 확장해서 `Stack` 구현

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-2.png)

`Stack`의 `push()` 메서드를 구현하기 위해 오버라이딩으로 중간에 요소를 더하지 못하게 만듬
- 오직 끝에만 더함

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-3.png)

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-4.png)

`Stack`의 `pop()`을 구현하기 위해 `remove()` 메서드 오버라이딩

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-5.png)

`ArrayList`에 정의된 `remove()`가 오버로딩으로 여러 개

위의 메서드도 오버라이딩

위에서 이미 오버라이딩한 `remove()` 메서드 활용
- 인덱스 값은 아무 값이나 상관없지만 0으로 넣음

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-6.png)

`remove()` 메서드를 사용할 때도 인자에 아무 값이나 넣으면 됨

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-7.png)

리스코프 치환 원칙이 깨지는 것을 확인해보자.

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-8.png)

리스트에 오름차순으로 정수를 추가하는 메서드

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-9.png)

구현을 보면 `add()` 메서드를 호출해서 특정 위치(인덱스 기반)에 값을 넣어서 리스트를 오름차순으로 유지함

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-10.png)

10, 2, 5 순서대로 넣었으면

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-11.png)

2, 5, 10 순서로 출력됨

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-12.png)

자식 클래스인 `Stack` 개체의 참조를 대입

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-13.png)

`addInOrder()` 메서드 내부에서 호출하는 `add()` 메서드가 다형적으로 오버라이딩 되어 있기 때문에 제대로 동작하지 않음
- dynamic dispatch

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-14.png)

10, 2, 5 순서로 리스트에 들어감

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-15.png)

결론은 `Stack`을 `ArrayList`의 자식으로 구현하면 안 된다는 것

상속의 부작용
- [[pocu-note/COMP2500/007-inheritance-vs-composition/007-008-inheritance-vs-composition-general-case/index|상속 vs 컴포지션: 일반적인 경우]] 참고
- `Stack`은 `ArrayList`와 is-a 관계가 아님

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-16.png)
![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-17.png)

스택의 데이터를 순회하는 것도 스택의 개념에 어긋남

![](pocu-note/COMP2500/014-solid-design-principles/014-007-code-example/images/code-example-18.png)

[[pocu-note/COMP2500/007-inheritance-vs-composition/007-004-four-criteria-for-inheritance-vs-composition/index|상속 vs 컴포지션 선택 시 4가지 기준]] 참고

상속의 부작용으로 리스코프 치환 위배
