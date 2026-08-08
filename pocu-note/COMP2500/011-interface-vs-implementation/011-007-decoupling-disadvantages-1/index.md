---
title: 디커플링의 단점 1
aliases:
  - 디커플링의 단점 1
tags:
  - COMP2500
  - week11
---
# 디커플링의 단점 1

![](pocu-note/COMP2500/011-interface-vs-implementation/011-007-decoupling-disadvantages-1/images/decoupling-disadvantages-1-1.png)

추상화로 유연성, 재사용성을 얻음

디커플링의 단점도 있음

## 단점 1: 직관적이지 못함

![](pocu-note/COMP2500/011-interface-vs-implementation/011-007-decoupling-disadvantages-1/images/decoupling-disadvantages-1-2.png)

직관적이지 못함 ^not-intuitive
- 구체적이지 않기 때문
- 추상화의 단점

### 직관적이지 못한 것을 해결해보자

![](pocu-note/COMP2500/011-interface-vs-implementation/011-007-decoupling-disadvantages-1/images/decoupling-disadvantages-1-3.png)

`new Robot()` 생성자를 호출하는 코드에서 `Head head` 매개변수로 뭐가 넘어가는지 직접 확인하기

![](pocu-note/COMP2500/011-interface-vs-implementation/011-007-decoupling-disadvantages-1/images/decoupling-disadvantages-1-4.png)

`Head` 클래스가 일반화된 클래스기 때문에 어떤 구체적인 개체가 사용됐는지 일일이 모두 확인해야 함
- `SimpleHead`, `SmartHead` 클래스 소스 코드 모두 확인

![](pocu-note/COMP2500/011-interface-vs-implementation/011-007-decoupling-disadvantages-1/images/decoupling-disadvantages-1-5.png)

물론 위의 예처럼 프로그램 A, 프로그램 B 각각 다른 구체적인 클래스 개체를 사용하는 경우는 다형성을 잘못 사용하고 있는 예시
- 다형성은 "하나의 프로그램"에서 여러 구체적인 개체를 사용하고 싶을 때
- 지금은 하나의 프로그램에 하나의 개체만 필요함

올바른 방식은 컴파일러 플래그(스위치) 같은 거로 구현체 바꾸도록 컴파일하게 하는 것
- C#, C++에서 잘 지원하는 방식

![](pocu-note/COMP2500/011-interface-vs-implementation/011-007-decoupling-disadvantages-1/images/decoupling-disadvantages-1-6.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-007-decoupling-disadvantages-1/images/decoupling-disadvantages-1-7.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-007-decoupling-disadvantages-1/images/decoupling-disadvantages-1-8.png)

DI 컨테이너 이용해서 `new SimpleHead()`, `new SmartHead()` 같이 직접 개체를 생성하는 코드가 없는 경우도 있음
- 텍스트 파일을 읽어서 어떤 개체를 생성할지 결정

![](pocu-note/COMP2500/011-interface-vs-implementation/011-007-decoupling-disadvantages-1/images/decoupling-disadvantages-1-9.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-007-decoupling-disadvantages-1/images/decoupling-disadvantages-1-10.png)

컴파일할 때 시간이 오래 걸리거나, 저 조건을 실행하려면 너무 오래 걸리거나?
- 게임을 몇 단계 깨야지 확인할 수 있는 경우
