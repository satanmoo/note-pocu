---
title: '상속 vs 컴포지션: 일반적인 경우'
aliases:
  - "상속 vs 컴포지션: 일반적인 경우"
tags:
  - COMP2500
  - week7
---
# 상속 vs 컴포지션: 일반적인 경우

## has-a vs is-a

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-008-inheritance-vs-composition-general-case/images/inheritance-vs-composition-general-case-1.png)

실제 세계의 개념을 has-a, is-a 관계로 해석하고, 그에 맞게 모델링하기

개인의 지식에 따라 주관성이 생길 수 있는 부분을 최대한 조직의 상식에 맞게 합의하기

## 복습 퀴즈

### 다음 중 상속과 컴포지션에 대한 설명 중 틀린 것을 고르세요.

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-008-inheritance-vs-composition-general-case/images/inheritance-vs-composition-general-case-2.png)

A가 B중의 하나
- is-a 관계
- 상속

A와 B가 독립적으로 존재
- ==독립적== 키워드는 컴포지션
- [[pocu-note/COMP2500/007-inheritance-vs-composition/007-007-inheritance-vs-composition-maintenance/index#깊은 상속 관계|상속 vs 컴포지션: 유지보수]]

상속이 성능에 유리함
- [[pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/index|상속 vs 컴포지션: 메모리]]

다형성이 필요하면 상속
- [[pocu-note/COMP2500/007-inheritance-vs-composition/007-006-inheritance-vs-composition-polymorphism/index|상속 vs 컴포지션: 다형성]]
