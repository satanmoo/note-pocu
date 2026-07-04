---
aliases:
  - 간단한 다형성 예 코드로 옮기기
tags:
  - COMP2500
  - week9
---
# 간단한 다형성 예 코드로 옮기기


![](pocu-note/COMP2500/008-polymorphism/008-002-simple-polymorphism-example/images/simple-polymorphism-example-1.png)

"다른 종류의 개체"
- 타입(클래스)가 다르다는 의미

![](pocu-note/COMP2500/008-polymorphism/008-002-simple-polymorphism-example/images/simple-polymorphism-example-2.png)

"같은 지시"
- 동일한 함수 시그니처 호출

![](pocu-note/COMP2500/008-polymorphism/008-002-simple-polymorphism-example/images/simple-polymorphism-example-3.png)

"동작을 달리"
- 개체의 종류에 따라 실제로 ==실행되는== 함수 구현 코드가 다름

![](pocu-note/COMP2500/008-polymorphism/008-002-simple-polymorphism-example/images/simple-polymorphism-example-4.png)

절차적 언어에서 if문을 사용해 불편함

![](pocu-note/COMP2500/008-polymorphism/008-002-simple-polymorphism-example/images/simple-polymorphism-example-5.png)

late binding:
- 실제로 어떤 함수가 실행되는지는 실행 중 결정
- 함수 시그니처는 컴파일 중 결정
	- 이와 반대로 컴파일 중에 어떤 함수를 호출할지 결정되면 **이른 바인딩**

다형성을 구현하려면 상속이 필요
- 컴파일을 할 때 함수 시그니처가 존재한다는 것은 컴파일러가 알아야 함
	- 그렇게 해야 함수를 호출하는 곳의 코드를 컴파일 할 수 있으니
- 상속관계를 이용해 부모 클래스의 시그니처의 존재를 컴파일러가 알 수 있음
- 시그니처는 유지하되 자식 클래스에서 함수의 바디 내용은 다르게 구현
	- **오버라이딩**

C 언어의 함수 포인터와 유사한 개념
- 함수의 시그니처를 변수의 자료형처럼 사용
- 즉 함수의 매개변수 목록과 반환형만 동일하면 구체적인 구현은 몰라도 함수 포인터에 대입, 전달할 수 있음

![](pocu-note/COMP2500/008-polymorphism/008-002-simple-polymorphism-example/images/simple-polymorphism-example-6.png)

실용적인 용도
- 다른 종류의 개체를 편하게 저장 및 처리 가능
- ==상속== 때문에 가능함

![](pocu-note/COMP2500/008-polymorphism/008-002-simple-polymorphism-example/images/simple-polymorphism-example-7.png)

서브 타입 다형성
- OOP에서는 서브타입 다형성

![](pocu-note/COMP2500/008-polymorphism/008-002-simple-polymorphism-example/images/simple-polymorphism-example-8.png)
![](pocu-note/COMP2500/008-polymorphism/008-002-simple-polymorphism-example/images/simple-polymorphism-example-9.png)
![](pocu-note/COMP2500/008-polymorphism/008-002-simple-polymorphism-example/images/simple-polymorphism-example-10.png)
![](pocu-note/COMP2500/008-polymorphism/008-002-simple-polymorphism-example/images/simple-polymorphism-example-11.png)
