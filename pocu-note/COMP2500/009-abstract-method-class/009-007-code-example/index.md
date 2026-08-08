---
title: '코드보기: 추상 BaseEntity'
aliases:
  - "코드보기: 추상 BaseEntity"
tags:
  - COMP2500
  - week10
---
# 코드보기: 추상 BaseEntity

![](pocu-note/COMP2500/009-abstract-method-class/009-007-code-example/images/code-example-1.png)

이제 추상 클래스라서 개체를 생성할 수 없음

![](pocu-note/COMP2500/009-abstract-method-class/009-007-code-example/images/code-example-2.png)

개체를 직접 생성할 수 없을 뿐 자식 개체에서 생성자를 `super()` 문법으로 호출할 수 있음

![](pocu-note/COMP2500/009-abstract-method-class/009-007-code-example/images/code-example-3.png)

`BaseEntity` 클래스의 개체를 생성할 수 없음

추상 클래스를 인스턴스화 하면 컴파일 오류
