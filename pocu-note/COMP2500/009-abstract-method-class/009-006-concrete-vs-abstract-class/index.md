---
title: 구체 클래스 vs 추상 클래스
aliases:
  - 구체 클래스 vs 추상 클래스
tags:
  - COMP2500
  - week10
---
# 구체 클래스 vs 추상 클래스

![](pocu-note/COMP2500/009-abstract-method-class/009-006-concrete-vs-abstract-class/images/concrete-vs-abstract-class-1.png)

추상 클래스는 클래스 다이어그램에서 *이탤릭*으로 표기
- 추상 메서드도 *이탤릭*으로 표기

![](pocu-note/COMP2500/009-abstract-method-class/009-006-concrete-vs-abstract-class/images/concrete-vs-abstract-class-2.png)

추상 메서드를 오버라이딩한 경우에는 클래스 다이어그램에 메서드 표시할 것

![](pocu-note/COMP2500/009-abstract-method-class/009-006-concrete-vs-abstract-class/images/concrete-vs-abstract-class-3.png)

추상 클래스를 결정하는 여부와 추상 메서드는 독자적 개념
- 추상 메서드가 없어도 추상 클래스로 지정할 수 있음
- `abstract` 키워드를 클래스 레벨에 붙이면 됨

추상 클래스는 개체를 만들 수 없는 클래스!
- 하지만 추상 메서드가 있다면 반드시 추상 클래스로 만들어야 함

![](pocu-note/COMP2500/009-abstract-method-class/009-006-concrete-vs-abstract-class/images/concrete-vs-abstract-class-4.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-006-concrete-vs-abstract-class/images/concrete-vs-abstract-class-5.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-006-concrete-vs-abstract-class/images/concrete-vs-abstract-class-6.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-006-concrete-vs-abstract-class/images/concrete-vs-abstract-class-7.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-006-concrete-vs-abstract-class/images/concrete-vs-abstract-class-8.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-006-concrete-vs-abstract-class/images/concrete-vs-abstract-class-9.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-006-concrete-vs-abstract-class/images/concrete-vs-abstract-class-10.png)

추상 메서드가 존재하면, 즉 구현이 없으면 그 클래스는 반드시 추상 클래스

## 복습 퀴즈

![](pocu-note/COMP2500/009-abstract-method-class/009-006-concrete-vs-abstract-class/images/concrete-vs-abstract-class-11.png)

추상 메서드가 들어있는 클래스는 반드시 추상 클래스여야 한다.
- 반드시 `abstract` 키워드를 붙여야 함

다형성이 없어도 추상 클래스로 만들면 개체를 생성하는 것을 막을 수 있다는 실익이 있다.
