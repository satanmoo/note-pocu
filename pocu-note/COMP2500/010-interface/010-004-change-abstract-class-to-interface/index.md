---
aliases:
  - 추상 클래스를 인터페이스로 바꾸기
tags:
  - COMP2500
  - week10
---
# 추상 클래스를 인터페이스로 바꾸기

[[pocu-note/COMP2500/010-interface/010-003-interface-is-pure-abstract-class/index|이전 레슨]]에서 구현한 `LoggerBase` 클래스를 인터페이스로 바꿔보자

![](pocu-note/COMP2500/010-interface/010-004-change-abstract-class-to-interface/images/change-abstract-class-to-interface-1.png)

인터페이스 안의 메서드는 언제나 `public` 접근 제어자

![](pocu-note/COMP2500/010-interface/010-004-change-abstract-class-to-interface/images/change-abstract-class-to-interface-2.png)

`LoggerBase` 클래스를 상속한 자식 클래스에 키워드가 바뀜
- `implements` 키워드

Java 말고 다른 언어에서는 `extends`와 구분하지 않는 경우도 있음

![](pocu-note/COMP2500/010-interface/010-004-change-abstract-class-to-interface/images/change-abstract-class-to-interface-3.png)

클래스 다이어그램에서 상속 선에서 점선으로 수정

![](pocu-note/COMP2500/010-interface/010-004-change-abstract-class-to-interface/images/change-abstract-class-to-interface-4.png)
