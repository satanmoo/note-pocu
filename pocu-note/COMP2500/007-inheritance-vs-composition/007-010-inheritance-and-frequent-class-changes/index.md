---
title: 상속과 잦은 클래스 변경
aliases:
  - 상속과 잦은 클래스 변경
tags:
  - COMP2500
  - week7
---
# 상속과 잦은 클래스 변경

## 엔티티 컴포넌트 시스템

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-010-inheritance-and-frequent-class-changes/images/inheritance-and-frequent-class-changes-1.png)

**아키텍쳐 패턴**
- *디자인 패턴* 과 구분
- *디자인 패턴* 보다 큰 단위 (시스템 전체)에 대한 정형화된 기법

프로그래머 말고 기획자라던지 협업하는 환경 때문에 컴포지션을 선호하게 된 사례
- 변경이 잦을 때 상속이 불편하기 때문에

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-010-inheritance-and-frequent-class-changes/images/inheritance-and-frequent-class-changes-2.png)
![](pocu-note/COMP2500/007-inheritance-vs-composition/007-010-inheritance-and-frequent-class-changes/images/inheritance-and-frequent-class-changes-3.png)
![](pocu-note/COMP2500/007-inheritance-vs-composition/007-010-inheritance-and-frequent-class-changes/images/inheritance-and-frequent-class-changes-4.png)
![](pocu-note/COMP2500/007-inheritance-vs-composition/007-010-inheritance-and-frequent-class-changes/images/inheritance-and-frequent-class-changes-5.png)
![](pocu-note/COMP2500/007-inheritance-vs-composition/007-010-inheritance-and-frequent-class-changes/images/inheritance-and-frequent-class-changes-6.png)
![](pocu-note/COMP2500/007-inheritance-vs-composition/007-010-inheritance-and-frequent-class-changes/images/inheritance-and-frequent-class-changes-7.png)

변경이 잦으면 프로그래머와 기획자의 다툼이 생길 수도
- 업무 효율성이 떨어짐
- 변경이 잦을 수 밖에 없는 환경이라면?

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-010-inheritance-and-frequent-class-changes/images/inheritance-and-frequent-class-changes-8.png)

==재컴파일 없이== 개체 조립 및 생성하는 것이 목적

## 복습 퀴즈

### 마을 내를 자유롭게 돌아다니는 개선된 NPC를 만들려면 NPC 클래스를 어디로 옮겨야 할까?

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-010-inheritance-and-frequent-class-changes/images/inheritance-and-frequent-class-changes-9.png)
