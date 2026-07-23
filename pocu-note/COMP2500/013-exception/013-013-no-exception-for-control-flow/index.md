---
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

![](pocu-note/COMP2500/013-exception/013-013-no-exception-for-control-flow/images/no-exception-for-control-flow-2.png)

재귀 콜스택에서 한 번에 빠져나오려고 예외를 사용하는 건 정말 나쁜 예

보통의 경우 반환 타입을 `void`로 하지 않고 `search()` 반환값을 사용함

![](pocu-note/COMP2500/013-exception/013-013-no-exception-for-control-flow/images/no-exception-for-control-flow-3.png)

정수를 읽다 실패하면 예외가 발생

정수를 읽다 실패한 경우 로직을 처리하려면 예외를 제어 흐름 용도로 사용할 수 밖에 없음

![](pocu-note/COMP2500/013-exception/013-013-no-exception-for-control-flow/images/no-exception-for-control-flow-4.png)

C#의 `TryParse()` 메서드의 경우 예외를 던지지 않고, `boolean`을 반환해서 제어 흐름용으로 사용할 수 있게 언어에서 지원

Java에서는 직접 만들어서 `TryParse()` 흉내낼 수 있음
- 내부적으로 `try`-`catch` 문 이용하면 됨
- 이것도 캡슐화라고 볼 수 있죠, 호출자는 내부적으로 `try`-`catch` 사용하는지 몰라도 됨
	- 호출자는 `boolean` 값에 따라 다음 로직을 진행하면 됨
