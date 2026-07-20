---
aliases:
  - 의존성 주입(DI)
tags:
  - COMP2500
  - week11
---
# 의존성 주입(DI)

[[pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/index|이전 레슨]]에서 사용한 방법을 의존성 주입이라고 부름

![](pocu-note/COMP2500/011-interface-vs-implementation/011-004-dependency-injection/images/dependency-injection-1.png)

의존하고 있는 클래스의 개체를 외부에서 생성해서 넣어주는 기법(?)을 의존성 주입이라고 부름
- `Robot` 클래스 예시에서 사용한 방법은 생성자의 매개변수로 개체를 전달했음
	- 생성자 주입
- setter 함수로 넣어주면
	- setter 주입

![](pocu-note/COMP2500/011-interface-vs-implementation/011-004-dependency-injection/images/dependency-injection-2.png)

아래 용어들을 헷갈리지 말 것
- DI Container 줄여서 DI라고 부르기도 함
- dependency inversion도 DI라고 부르기도 함

## setter 주입

![](pocu-note/COMP2500/011-interface-vs-implementation/011-004-dependency-injection/images/dependency-injection-3.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-004-dependency-injection/images/dependency-injection-4.png)

setter 주입은 생성 시 개체의 상태를 유효하게 하는 캡슐화 원칙에 위배됨

## 의존성 주입을 통해 얻은 것과 잃은 것

![](pocu-note/COMP2500/011-interface-vs-implementation/011-004-dependency-injection/images/dependency-injection-5.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-004-dependency-injection/images/dependency-injection-6.png)

참고로 `Head` 클래스를 컴파일해서 따로 배포하는 일은 예전에 사용한 방법
- 요즘은 보통 통째로 전체를 다시 컴파일함

편의성
- 프로그래머 입장
- 변경 전 코드는 `new Robot()` 한 번이면 끝
- 변경 후 코드는 `new Head()` + `new Robot()` 번거로워짐

코드 자체가 문서
- 의미에 맞게
- 만약 프로그래머의 원래 의도가 분리/합체 로봇이 아니라면 결합도를 낮추기 위해 의존성 주입을 사용하는 것은 좋지 않음
	- `Robot` 클래스 개체 생성 시 내부에서 `Head` 개체 생성하는 로직이 포함되어 있으면 의미에 더 맞음

![](pocu-note/COMP2500/011-interface-vs-implementation/011-004-dependency-injection/images/dependency-injection-7.png)
