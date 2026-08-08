---
title: 옵저버 패턴과 pub-sub 패턴
aliases:
  - 옵저버 패턴과 pub-sub 패턴
tags:
  - COMP2500
  - week12
---
# 옵저버 패턴과 pub-sub 패턴

![](pocu-note/COMP2500/012-design-patterns/012-020-observer-pattern-and-pub-sub-pattern/images/observer-pattern-and-pub-sub-pattern-1.png)

B 개체는 A를 감시함

![](pocu-note/COMP2500/012-design-patterns/012-020-observer-pattern-and-pub-sub-pattern/images/observer-pattern-and-pub-sub-pattern-2.png)

감시해서 개체의 변화를 감지

![](pocu-note/COMP2500/012-design-patterns/012-020-observer-pattern-and-pub-sub-pattern/images/observer-pattern-and-pub-sub-pattern-3.png)

감시자는 여러 개일 수 있음

감시 대상은 한 개

![](pocu-note/COMP2500/012-design-patterns/012-020-observer-pattern-and-pub-sub-pattern/images/observer-pattern-and-pub-sub-pattern-4.png)

감시 대상이 변하면 감시자들은 뭔가 행동을 함

![](pocu-note/COMP2500/012-design-patterns/012-020-observer-pattern-and-pub-sub-pattern/images/observer-pattern-and-pub-sub-pattern-5.png)

요즘은 사실상 pub-sub 패턴으로 부름
- pub-sub 패턴이 사실 옵저버 패턴을 포함하는 더 넓은 개념임

![](pocu-note/COMP2500/012-design-patterns/012-020-observer-pattern-and-pub-sub-pattern/images/observer-pattern-and-pub-sub-pattern-6.png)

이전 노트에서 본 `LogManager` 클래스가 사실 옵저버 패턴
- [[pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/index|바른 책임 연쇄 패턴 예]] 참고
- `message()` 메서드를 호출해 로그 메시지를 보내는 주체인 `LogManager`가 pub
- 로그 메시지를 처리하는 `Logger` 클래스의 자식 클래스 개체들이 sub

![](pocu-note/COMP2500/012-design-patterns/012-020-observer-pattern-and-pub-sub-pattern/images/observer-pattern-and-pub-sub-pattern-7.png)

`LogManager`를 제거하면 옵저버 패턴
- 감시 대상은 로그 메시지
- 감시자는 `Logger`
