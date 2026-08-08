---
title: 디커플링이 적합한 곳들
aliases:
  - 디커플링이 적합한 곳들
tags:
  - COMP2500
  - week11
---
# 디커플링이 적합한 곳들

![](pocu-note/COMP2500/011-interface-vs-implementation/011-006-where-decoupling-fits/images/where-decoupling-fits-1.png)

단순 구조에서 디커플링의 실효성은 낮음
- 여기서 말하는 변경이 불가능한 상황은 다음과 같음
	- 남의 라이브러리 사용
	- 내 소스코드가 아닌 경우

단순 구조에서 고치다 보면 컴파일 에러 덕분에 구조 변경도 어렵지 않음

## 복잡한 시스템에서 커플링은 문제가 됨

![](pocu-note/COMP2500/011-interface-vs-implementation/011-006-where-decoupling-fits/images/where-decoupling-fits-2.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-006-where-decoupling-fits/images/where-decoupling-fits-3.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-006-where-decoupling-fits/images/where-decoupling-fits-4.png)

## 함수 포인터도 디커플링의 좋은 예

![](pocu-note/COMP2500/011-interface-vs-implementation/011-006-where-decoupling-fits/images/where-decoupling-fits-5.png)

인터페이스의 규약 즉 함수 시그니처에 맞는 어떤 함수 구현이 허용
- 매개변수로 이 규약만 맞춘다면 받아줌

함수 매개변수가 인터페이스에 의존하면 결합도 줄이기에 좋은 예
