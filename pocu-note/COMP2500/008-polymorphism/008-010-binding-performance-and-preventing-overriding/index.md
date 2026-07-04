---
aliases:
  - 바인딩과 성능, 오버라이딩 막기
tags:
  - COMP2500
  - week9
---
# 바인딩과 성능, 오버라이딩 막기

![](pocu-note/COMP2500/008-polymorphism/008-010-binding-performance-and-preventing-overriding/images/binding-performance-and-preventing-overriding-1.png)

이른 바인딩이 성능에 유리
- 컴파일 중에 충분한 시간을 통해 최적화 가능
	- 실행 중 최적화 하기에는 절대적으로 시간이 부족

## Java의 이른 바인딩

![](pocu-note/COMP2500/008-polymorphism/008-010-binding-performance-and-preventing-overriding/images/binding-performance-and-preventing-overriding-2.png)
![](pocu-note/COMP2500/008-polymorphism/008-010-binding-performance-and-preventing-overriding/images/binding-performance-and-preventing-overriding-3.png)
![](pocu-note/COMP2500/008-polymorphism/008-010-binding-performance-and-preventing-overriding/images/binding-performance-and-preventing-overriding-4.png)

`final` 키워드가 붙은 메서드를 자식 클래스에서 선언하면 컴파일 오류 발생

![](pocu-note/COMP2500/008-polymorphism/008-010-binding-performance-and-preventing-overriding/images/binding-performance-and-preventing-overriding-5.png)

`final` 키워드를 메서드에 붙이는 순간 컴파일러는 이 메서드가 오버라이딩 되지 않는다는 것을 알 수 있음
- 이른 바인딩 ==가능==
    - 컴파일러가 가상 메서드로 만들지 않도록 최적화 해줄 수도?
    - 정확한 구현은 알 수 없긴 함

## final 키워드 정리

![](pocu-note/COMP2500/008-polymorphism/008-010-binding-performance-and-preventing-overriding/images/binding-performance-and-preventing-overriding-6.png)
![](pocu-note/COMP2500/008-polymorphism/008-010-binding-performance-and-preventing-overriding/images/binding-performance-and-preventing-overriding-7.png)
![](pocu-note/COMP2500/008-polymorphism/008-010-binding-performance-and-preventing-overriding/images/binding-performance-and-preventing-overriding-8.png)

상속을 못하니까 오버라이딩 불가능
- 메서드에 `final` 달면 중복

![](pocu-note/COMP2500/008-polymorphism/008-010-binding-performance-and-preventing-overriding/images/binding-performance-and-preventing-overriding-9.png)

Java의 기본 동작
- 모든 클래스는 상속이 됨
	- 가상 메서드
- 마음대로 상속하는 것을 막기 위해서 `final` 사용

C++ 에서는 반대
- 모든 클래스는 상속 불가
- 상속하기 위해서 상속 지정자 사용

## 복습 퀴즈

![](pocu-note/COMP2500/008-polymorphism/008-010-binding-performance-and-preventing-overriding/images/binding-performance-and-preventing-overriding-10.png)
어떤 클래스 A의 모든 메서드가 `final`이라면 A를 상속받는 것은 가능하다. 하지만 A의 모든 메서드를 오버라이딩 할 수 없음

어떤 클래스 A에 `final` 키워드를 사용하면 애초에 상속을 불가능하게 만듦
