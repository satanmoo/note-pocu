---
title: 제어 흐름용으로 예외를 사용하지 말 것
aliases:
  - 제어 흐름용으로 예외를 사용하지 말 것
tags:
  - COMP2500
  - week12
---
# 제어 흐름용으로 예외를 사용하지 말 것

![](pocu-note/COMP2500/013-exception/013-013-no-exception-for-control-flow/images/no-exception-for-control-flow-1.png)

예외를 제어 흐름용으로 사용하면 `goto`와 개념이 같음
- 근데 `goto`보다 더 hack

## 나쁜 예: 재귀 탈출용 예외

![](pocu-note/COMP2500/013-exception/013-013-no-exception-for-control-flow/images/no-exception-for-control-flow-2.png)

재귀 콜스택에서 한 번에 빠져나오려고 예외를 사용하는 건 정말 나쁜 예

보통의 경우 반환 타입을 `void`로 하지 않고 `search()` 메서드의 반환값을 사용함

## 정수 파싱 예: `parseInt()`와 `TryParse()`

![](pocu-note/COMP2500/013-exception/013-013-no-exception-for-control-flow/images/no-exception-for-control-flow-3.png)

정수를 읽다 실패하면 "무조건" 예외 발생
- 예외가 필요한 경우가 있고 아닌 경우가 있음

예외가 필요 없는 경우
- `String`이 정수인지 아닌지 결과에 따라 분기할 때
	- 즉 흐름 제어가 필요할 때

Java의 `parseInt()` 메서드를 사용하면 예외를 통해 흐름 제어를 할 수밖에 없음
- `String`이 숫자 문자열인지 아닌지 판단하는 수단이 `parseInt()` 메서드의 예외밖에 없음
	- `parseInt()` 메서드를 안 사용하면 여기서 던지는 예외조차 피할 수 있겠지만...
- 위 슬라이드의 "예외를 받아서 판단"이라는 표현이 흐름 제어를 한다는 말
- 다음 슬라이드: C#은 예외 대신 `boolean` 값으로 분기할 수 있게 `TryParse()` 메서드를 지원함

![](pocu-note/COMP2500/013-exception/013-013-no-exception-for-control-flow/images/no-exception-for-control-flow-4.png)

C#의 `TryParse()` 메서드는 `boolean`을 반환해서 제어 흐름용으로 사용할 수 있게 언어에서 지원함

Java에서는 직접 만들어서 `TryParse()` 흉내낼 수 있음
- 내부적으로 `try`-`catch` 문을 이용하면 됨
- 이것도 캡슐화라고 볼 수 있음 — 호출자는 내부적으로 `try`-`catch` 문을 사용하는지 몰라도 됨
	- 호출자는 `boolean` 값에 따라 다음 로직을 진행하면 됨
