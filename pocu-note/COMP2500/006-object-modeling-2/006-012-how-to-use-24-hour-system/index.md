---
title: 24시간 체제를 사용하려면?
aliases:
  - 24시간 체제를 사용하려면?
tags:
  - COMP2500
  - week6
---
# 24시간 체제를 사용하려면?

## 디지털에서는 24시간 체제로 보여주기

![](pocu-note/COMP2500/006-object-modeling-2/006-012-how-to-use-24-hour-system/images/how-to-use-24-hour-system-1.png)

[[pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/index|오전/오후 구분하기]] 에서 다룬 구현 방법은 ==저장할 때== 24시간 체제 보여줄 때는 12시간 체제
- 다만 디지털 시계에서는 오전/오후를 구분하는 기능이 추가 되었음
	- 보여주는 형식은 여전히 12시간 체제

### 발상 1: 각 자식 클래스가 시/분/초 반환하는 함수를 구현

![](pocu-note/COMP2500/006-object-modeling-2/006-012-how-to-use-24-hour-system/images/how-to-use-24-hour-system-2.png)

시/분/초를 반환하는 함수들을 각각 자식 클래스에 맞게 커스터마이징
- `DigitalClock`에서 24시간 체제로 보여줌

![](pocu-note/COMP2500/006-object-modeling-2/006-012-how-to-use-24-hour-system/images/how-to-use-24-hour-system-3.png)

*발상 1* 의 문제점은 다음과 같음
- `Clock` 클래스에서 시/분/초 반환하는 함수가 빠지기 때문에 `Clock`형 변수를 통해 시/분/초 반환할 수 없음
	- 다형성과 관련이 있군

![](pocu-note/COMP2500/006-object-modeling-2/006-012-how-to-use-24-hour-system/images/how-to-use-24-hour-system-4.png)

다형성을 배우기 전 까지 올바른 방법은 `Clock`에 공통 메서드를 그대로 두는 방식
- 필요에 따라 자식클래스에서 전용 메서드를 추가
- 다형성의 오버라이드로 이를 해결할 수 있음
