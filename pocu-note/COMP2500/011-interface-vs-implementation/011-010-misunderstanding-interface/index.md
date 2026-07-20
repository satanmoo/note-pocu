---
aliases:
  - 인터페이스에 대한 잘못된 이해
tags:
  - COMP2500
  - week11
---
# 인터페이스에 대한 잘못된 이해

![](pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/images/misunderstanding-interface-1.png)

이 책의 내용이 곡해됨

![](pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/images/misunderstanding-interface-2.png)

특히 이 문구 ㅋㅋ

![](pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/images/misunderstanding-interface-3.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/images/misunderstanding-interface-4.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/images/misunderstanding-interface-5.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/images/misunderstanding-interface-6.png)

이 문장에서 interface는 자바의 `interface`가 아님

![](pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/images/misunderstanding-interface-7.png)

결국 다형성이 포함되어야 함

![](pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/images/misunderstanding-interface-8.png)

제대로 된 상속에 대한 설명
- 추상 클래스의 연산을 오버라이딩
	- 추상 메서드 오버라이딩
	- 이것도 다형성
- 추상 클래스에 없는 새로운 연산 추가

SOLID 배울 때 다시 배우는 내용

![](pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/images/misunderstanding-interface-9.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/images/misunderstanding-interface-10.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/images/misunderstanding-interface-11.png)

이 책에서 말하는 interface는
- 부모 클래스의 다형적 메서드
- Java의 `interface`가 아님
