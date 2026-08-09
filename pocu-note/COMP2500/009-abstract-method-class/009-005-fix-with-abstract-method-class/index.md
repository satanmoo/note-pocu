---
title: 추상 메서드/클래스로 문제 고치기
aliases:
  - 추상 메서드/클래스로 문제 고치기
tags:
  - COMP2500
  - week10
---
# 추상 메서드/클래스로 문제 고치기

![](pocu-note/COMP2500/009-abstract-method-class/009-005-fix-with-abstract-method-class/images/fix-with-abstract-method-class-1.png)

C 언어의 함수 선언과 유사하게
- 선언과 구현을 분리

![](pocu-note/COMP2500/009-abstract-method-class/009-005-fix-with-abstract-method-class/images/fix-with-abstract-method-class-2.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-005-fix-with-abstract-method-class/images/fix-with-abstract-method-class-3.png)

`abstract` 키워드가 필요함

![](pocu-note/COMP2500/009-abstract-method-class/009-005-fix-with-abstract-method-class/images/fix-with-abstract-method-class-4.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-005-fix-with-abstract-method-class/images/fix-with-abstract-method-class-5.png)

클래스도 `abstract` 키워드를 붙여야 함 또는 `Monster` 클래스에서 추상 메서드를 오버라이딩하라는 말인데?
- 결론은 구체 클래스에는 추상 메서드가 존재하면 안 됨
- 추상 메서드를 가지는 클래스는 반드시 추상 클래스임

![](pocu-note/COMP2500/009-abstract-method-class/009-005-fix-with-abstract-method-class/images/fix-with-abstract-method-class-6.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-005-fix-with-abstract-method-class/images/fix-with-abstract-method-class-7.png)

추상 클래스는 개체를 만들 수 없어야 함

만약 추상 클래스가 개체를 만들 수 있다고 가정하면?
- 위 슬라이드처럼 `Monster` 개체를 만들고 `attack()` 메서드를 호출했을 때 구현이 없음
- 모순 발생
- 따라서 추상 클래스는 개체를 만들 수 없어야 함

## 왜 "개체를 만들 수 있으면 구체 클래스"인가 (대우 증명)

**전제**
- Java에서 모든 클래스는 추상 클래스 아니면 구체 클래스, 둘 중 하나
	- 그래서 "추상 클래스가 아니다"는 "구체 클래스다"로 바꿔 말할 수 있음

**명제 쌍 1**
- 원명제: 추상 메서드를 가지는 클래스는 반드시 추상 클래스임
- 대우: 구체 클래스는 추상 메서드를 가지지 않음

**명제 쌍 2**
- 원명제: 추상 클래스이면 개체를 만들 수 없음
- 대우: 개체를 만들 수 있으면 구체 클래스임

![](pocu-note/COMP2500/009-abstract-method-class/009-005-fix-with-abstract-method-class/images/fix-with-abstract-method-class-8.png)

이번에는 `Monster` 클래스가 아닌 `Troll` 클래스에 문제가 발생

![](pocu-note/COMP2500/009-abstract-method-class/009-005-fix-with-abstract-method-class/images/fix-with-abstract-method-class-9.png)

`Troll` 클래스가 구체 클래스이면서 추상 클래스를 상속받았다. 이때 추상 메서드를 오버라이딩하지 않으면 컴파일 오류 발생

`Troll` 클래스를 추상 클래스로 바꾸면 컴파일 오류 사라짐

하지만 `Troll` 클래스에 `abstract` 키워드 붙이면 개체로 만들 수 없음
- `Troll` 클래스도 `abstract`로 만들면 깊은 상속관계로 또 다른 구체 클래스로 상속받아 사용할 수 있긴 함

컴파일하려면 `Troll` 클래스에서 추상 메서드를 오버라이딩 구현해야 함

![](pocu-note/COMP2500/009-abstract-method-class/009-005-fix-with-abstract-method-class/images/fix-with-abstract-method-class-10.png)

`Monster` 클래스는 이제 개체 생성 불가
