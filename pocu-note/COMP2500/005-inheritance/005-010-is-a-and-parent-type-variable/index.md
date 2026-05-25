---
aliases:
  - is-a 관계와 부모형 변수
tags:
  - COMP2500
  - week5
---
# is-a 관계와 부모형 변수

## 상속과 자료형

![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-1.png)
![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-2.png)

자식 클래스 개체를 부모 클래스 변수에 대입해도 컴파일 오류는 발생하지 않음

![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-3.png)

부모 클래스 배열에 넣어도 괜찮죠

![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-4.png)

이것이 is-a 관계

![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-5.png)
![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-6.png)

반대로 부모 클래스 개체를 자식 클래스 변수에 대입하면 컴파일 안 됨
- is-a 개념에 위배
	- [[pocu-note/COMP2500/005-inheritance/005-009-is-a-has-a-relationship/index|is-a, has-a 관계]]에서 본 부분집합

실제로 개체가 Student 개체라도, Person 자료형 변수에 대입한 뒤, 다시 Student 자료형 변수에 대입할 수 없음
- 실제로 개체가 Student 자료형임은 실행 중 확인할 수 있음

![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-7.png)
![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-8.png)
![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-9.png)

부모 클래스 변수를 자식 클래스 변수에 대입하는 것을 허용하면 실행 중 어떤 일이 발생할지 모르기 때문에 컴파일러가 대입을 막음

![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-10.png)
![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-11.png)
![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-12.png)

컴파일러는 현재 변수의 자료형을 바탕으로 판단하기 때문에, 부모 자료형 변수에서 자식 매서드를 호출할 수 없음
- 부모 입장에서 자신을 상속받는 자식을 특정할 수 없음
	- [[pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/index#`super`|생성자 호출 순서 - super]] 참고

## 상속과 암시적 캐스팅

![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-13.png)
![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-14.png)
![](pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/images/is-a-and-parent-type-variable-15.png)

자식을 부모에 대입하는 것은 컴파일러가 암시적으로 캐스팅 해줌
- is-a 관계
