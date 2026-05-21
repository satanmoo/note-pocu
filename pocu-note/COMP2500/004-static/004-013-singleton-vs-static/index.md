---
tags:
  - COMP2500
  - week4
aliases:
  - 싱글턴 패턴 vs static
---
# 싱글턴 패턴 vs static
## static으로는 못 하는 일

![singleton-vs-static-1.png](pocu-note/COMP2500/004-static/004-013-singleton-vs-static/images/singleton-vs-static-1.png)

멀티턴 패턴도 싱글턴 패턴처럼 최대 개체 개수가 고정

static은 개체 생성 개념 자체가 없음
- 클래스 로딩 시 초기화

## 싱글턴 개체의 생성 시기

![singleton-vs-static-2.png](pocu-note/COMP2500/004-static/004-013-singleton-vs-static/images/singleton-vs-static-2.png)
![singleton-vs-static-3.png](pocu-note/COMP2500/004-static/004-013-singleton-vs-static/images/singleton-vs-static-3.png)

싱글턴 개체는 처음으로 `getInstance()` 매서드가 호출될 때 생성됨
`getInstance()` 매서드를 다양한 개체에서 호출하면 개체의 생성 시점을 제어하기 어려움

## 싱글턴 개체 초기화 순서를 보장하는 방법

![singleton-vs-static-4.png](pocu-note/COMP2500/004-static/004-013-singleton-vs-static/images/singleton-vs-static-4.png)

개체 초기화 순서를 보장하기 위해 프로그램 시작 시 정해진 순서대로 getInstance()를 호출하는 방법이 있음
- 보통 외부 API를 사용할 때 이런 일을 하기도 함
