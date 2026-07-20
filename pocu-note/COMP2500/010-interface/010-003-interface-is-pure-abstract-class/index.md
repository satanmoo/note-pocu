---
aliases:
  - 인터페이스는 순수 추상 클래스
tags:
  - COMP2500
  - week10
---
# 인터페이스는 순수 추상 클래스

![](pocu-note/COMP2500/010-interface/010-003-interface-is-pure-abstract-class/images/interface-is-pure-abstract-class-1.png)

실제적으로 자식 클래스의 함수 호출이 필요한데, 매개변수로 자식 클래스 개체를 넘겨야 하는 문제
- 자식 클래스의 개체에 속한 상태, 다른 메서드는 불필요함

![](pocu-note/COMP2500/010-interface/010-003-interface-is-pure-abstract-class/images/interface-is-pure-abstract-class-2.png)

다음처럼 수정하면 개체를 매개변수로 넘기는 것을 함수 포인터를 매개변수로 넘기는 것처럼 흉내낼 수 있음
- 상태를 모두 제거하고 추상 클래스로 만듬
- 메서드 하나만 선언하고 `abstract` 키워드를 붙임

![](pocu-note/COMP2500/010-interface/010-003-interface-is-pure-abstract-class/images/interface-is-pure-abstract-class-3.png)

매개변수로 `LoggerBase` 클래스를 선언하고 `LoggerBase` 클래스의 자식 클래스 개체를 넘기면 함수 포인터 매개변수처럼 불필요한 상태가 없고, 필요한 메서드 하나만 전달할 수 있음

![](pocu-note/COMP2500/010-interface/010-003-interface-is-pure-abstract-class/images/interface-is-pure-abstract-class-4.png)

`LoggerBase` 클래스에 추상 메서드를 더 추가하면, 함수 포인터 여러 개를 매개변수로 전달하는 것과 동일한 개념

![](pocu-note/COMP2500/010-interface/010-003-interface-is-pure-abstract-class/images/interface-is-pure-abstract-class-5.png)

OO에서 인터페이스는 "순수 추상 클래스"

![](pocu-note/COMP2500/010-interface/010-003-interface-is-pure-abstract-class/images/interface-is-pure-abstract-class-6.png)
![](pocu-note/COMP2500/010-interface/010-003-interface-is-pure-abstract-class/images/interface-is-pure-abstract-class-7.png)

동작의 시그니처만 있기 때문에 클래스와 다른 규칙을 적용
