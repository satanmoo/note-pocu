---
title: 인터페이스 분리, 의존 역전
aliases:
  - 인터페이스 분리, 의존 역전
tags:
  - COMP2500
  - week13
---
# 인터페이스 분리, 의존 역전

## 인터페이스 분리

![](pocu-note/COMP2500/014-solid-design-principles/014-008-interface-segregation-dependency-inversion/images/interface-segregation-dependency-inversion-1.png)
![](pocu-note/COMP2500/014-solid-design-principles/014-008-interface-segregation-dependency-inversion/images/interface-segregation-dependency-inversion-2.png)

단일 책임 원칙처럼 사람이 동시에 이해할 수 있는 정보의 크기의 문제
- [[pocu-note/COMP2500/014-solid-design-principles/014-004-significance-of-single-responsibility/index#^understandable-size|단일 책임 — 이해할 수 있는 크기]] 참고

![](pocu-note/COMP2500/014-solid-design-principles/014-008-interface-segregation-dependency-inversion/images/interface-segregation-dependency-inversion-3.png)
![](pocu-note/COMP2500/014-solid-design-principles/014-008-interface-segregation-dependency-inversion/images/interface-segregation-dependency-inversion-4.png)

교훈은 밸런스 맞추기
- [[pocu-note/COMP2500/014-solid-design-principles/014-004-significance-of-single-responsibility/index#^simple-as-needed|필요한 만큼 간단하게 만들자]] 참고

## 의존 역전

![](pocu-note/COMP2500/014-solid-design-principles/014-008-interface-segregation-dependency-inversion/images/interface-segregation-dependency-inversion-5.png)

추상적인 것일수록 결합도가 줄어듬
- [[pocu-note/COMP2500/011-interface-vs-implementation/011-011-program-to-an-interface/index|인터페이스에 대해 프로그래밍하라는 의미]] 참고

커플링을 줄이기 위해서 인터페이스를 사용하라
- [[pocu-note/COMP2500/011-interface-vs-implementation/011-015-should-we-prepare-for-change/index|변화에 대비해야 하는가? (인터페이스를 어디에 사용해야 하는가)]] 참고

[[pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/index|상속 관계에서의 결합도 (인터페이스와 디커플링)]] 참고

## 소프트웨어 품질 보장에 대한 고찰

![](pocu-note/COMP2500/014-solid-design-principles/014-008-interface-segregation-dependency-inversion/images/interface-segregation-dependency-inversion-6.png)
![](pocu-note/COMP2500/014-solid-design-principles/014-008-interface-segregation-dependency-inversion/images/interface-segregation-dependency-inversion-7.png)

SOLID 마케팅에 현혹되지 말자

![](pocu-note/COMP2500/014-solid-design-principles/014-008-interface-segregation-dependency-inversion/images/interface-segregation-dependency-inversion-8.png)
