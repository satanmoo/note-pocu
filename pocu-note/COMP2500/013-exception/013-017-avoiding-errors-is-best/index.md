---
title: 오류 상황을 피하는 게 최고
aliases:
  - 오류 상황을 피하는 게 최고
tags:
  - COMP2500
  - week12
---
# 오류 상황을 피하는 게 최고

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-1.png)

가장 중요한 것
- 예를 들어 파일을 읽는데, 파일이 있는지 확인하고 없으면 아예 여는 시도를 안 하는 거죠

오류 상황이 없고 일직선으로 진행되는 코드가 최고

하지만 어쩔 수 없이 오류 상황에 빠졌을 때 어떻게 고치는지 논의 해보자
- [[pocu-note/COMP2500/013-exception/013-015-error-vs-exceptional-situation/index|오류 상황, 예외 상황]] 참고 (오류 상황 = happy path를 벗어나는 상황)

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-2.png)

인터페이스 개념
- 내가 만드는 코드의 시스템(세계)를 완전히 통제하고, 밖은 통제 못하는 개념

내가 통제할 수 있냐 여부가 중요함

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-3.png)

내 시스템 안에 들어온 데이터는 언제나 유효하다고 가정
- 예외 상황을 고려할 필요 없음
- 오류 상황이 발생하면 예상치 못한 버그
	- 시스템의 문제로 수정해야 함
	- [[pocu-note/COMP2500/013-exception/013-015-error-vs-exceptional-situation/index#^unpredicted-error-is-bug|예측 못한 오류 상황은 버그]] 참고

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-4.png)

남으로부터 받아오는 데이터는 유효하지 않다고 의심
- 내가 통제할 수 없는 데이터
- 유효하지 않을 가능성
- 경계를 넘나들 때 발생함
	- 경계에서 유효성 검증
		- 잘못된 데이터는 거부
		- 내 시스템 밖(남)에게 문제가 있다고 알려줌

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-5.png)

경계에서 남에게 문제를 알려주는 방법
- `boolean`, `null` 반환
- 오류 코드 반환
	- `main()` 함수에서 보통 이렇게 하죠
- 예외를 던짐

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-6.png)
