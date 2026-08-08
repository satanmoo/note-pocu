---
title: '코드보기: 위젯(Widget)'
aliases:
  - "코드보기: 위젯(Widget)"
tags:
  - COMP2500
  - week10
---
# 코드보기: 위젯(Widget)

![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-1.png)
![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-2.png)
![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-3.png)

반응하는 방법이 다른 점이 자식 클래스 상속에서 드러남

![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-4.png)
![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-5.png)

`numWidgets`라는 정적 변수 선언
- 위젯의 수를 기억하기 위함
- 위젯의 수를 기억해 기본 라벨을 만들 때 사용
	- 라벨은 멤버 변수로 선언 (`protected String label`)

![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-6.png)
![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-7.png)

`onClick()` 메서드는 `IClickable` 인터페이스를 구현하는 클래스의 개체가 클릭을 받았을 때 어떤 동작을 해야 하는지 정의

![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-8.png)
![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-9.png)
![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-10.png)

모든 구체 클래스들은 추상 클래스 `Widget`을 상속하기 때문에 `ArrayList<Widget>`으로 관리할 수 있음

![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-11.png)

`Widget` 클래스에 선언한 메서드들만 dynamic dispatch로 호출 가능
- [[pocu-note/COMP2500/008-polymorphism/008-005-polymorphism-in-code/index|코드로 본 다형성의 의미]] 참고

![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-12.png)

불편하지만 `IClickable` 인터페이스로 형변환해서 호출

![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-13.png)

올바른 방법은 `IClickable` 인터페이스의 리스트를 따로 관리하는 것

![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-14.png)

`IClickable` 인터페이스를 구현하지 않은 클래스의 개체는 당연히 추가할 수 없음

![](pocu-note/COMP2500/010-interface/010-011-code-example/images/code-example-15.png)

전혀 상속관계가 없을 때 명시적 형변환을 시도하면 컴파일러가 막아줌
- [[pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/index|상속과 명시적 캐스팅]] 참고
