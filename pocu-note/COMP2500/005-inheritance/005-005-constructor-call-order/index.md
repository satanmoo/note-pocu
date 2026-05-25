---
aliases:
  - 생성자 호출 순서
tags:
  - COMP2500
  - week5
---
# 생성자 호출 순서

![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-1.png)

기본적으로 컴파일러는 부모 생성자를 먼저 호출함

![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-2.png)
개체 생성 시 아래와 같은 작업이 연속적으로 실행됨
- 힙 메모리 할당
- 부모 생성자 호출
- 자식 생성자 호출

![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-3.png)
![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-4.png)
![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-5.png)

컴파일러는 부모 클래스의 기본 생성자를 넣어줌
- [[pocu-note/COMP2500/005-inheritance/005-004-how-to-inherit/index#`extends`|상속하기]] 참고

![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-6.png)

구현에서 Person 클래스는 매개변수가 없는 기본 생성자가 없음
- 매개변수를 가지는 생성자를 명시하면 컴파일러는 기본 생성자를 추가해주지 않기 때문

![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-7.png)
![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-8.png)
![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-9.png)

개체는 생성할 때 부터 유요한 상태를 가져야하기 때문에 Person 클래스에 매개변수를 받지 않는 기본 생성자를 추가하면 개념적으로 문제가 있음

![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-10.png)
![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-11.png)
![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-12.png)
![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-13.png)

명시적으로 자식 클래스의 생성자에서 `super(...)`을 적어주면 됨

## `super`

![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-14.png)

현 **개체**의 부모 클래스를 가리킴

![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-15.png)
![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-16.png)
![](pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/images/constructor-call-order-17.png)

자식 클래스에서 부모 클래스의 메서드를 호출 할 수 있는 이유
- `extends`로 명시해주기 때문에 특정할 수 있음

반대로 부모 클래스에서는 자식 클래스를 특정할 수 없음
- [[pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/index|is-a 관계와 부모형 변수]] 참고
