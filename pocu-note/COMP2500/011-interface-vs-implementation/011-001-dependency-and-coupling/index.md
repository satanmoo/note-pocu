---
aliases:
  - 의존성과 결합도
tags:
  - COMP2500
  - week11
---
# 의존성과 결합도

![](pocu-note/COMP2500/011-interface-vs-implementation/011-001-dependency-and-coupling/images/dependency-and-coupling-1.png)

이 논의는 매우 주관적이다.

## 의존성

![](pocu-note/COMP2500/011-interface-vs-implementation/011-001-dependency-and-coupling/images/dependency-and-coupling-2.png)

A 클래스가 B 클래스에 의존
- B 클래스가 필요조건

## 의존성이 나쁜 것일까?

![](pocu-note/COMP2500/011-interface-vs-implementation/011-001-dependency-and-coupling/images/dependency-and-coupling-3.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-001-dependency-and-coupling/images/dependency-and-coupling-4.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-001-dependency-and-coupling/images/dependency-and-coupling-5.png)

의존성이 있음
- 각 클래스의 기능이 잘 분리
	- 즉 각 클래스의 목적이 뚜렷함
	- 캡슐화
	- 재사용성이 높음
- 좋은 설계임

![](pocu-note/COMP2500/011-interface-vs-implementation/011-001-dependency-and-coupling/images/dependency-and-coupling-6.png)

의존성이 나쁘다는 것은 오해
- 결합도와 의존성을 같은 개념으로 착각함
- 실제 결합도와 의존성은 다른 개념

## 결합도

![](pocu-note/COMP2500/011-interface-vs-implementation/011-001-dependency-and-coupling/images/dependency-and-coupling-7.png)

결합도의 원론적 의미는 "상호 의존성"
- 앞에서 본 [[pocu-note/COMP2500/006-object-modeling-2/006-007-change-time-with-carry/index#시간적 결합(temporal coupling)|시간적 결합]] 참고
