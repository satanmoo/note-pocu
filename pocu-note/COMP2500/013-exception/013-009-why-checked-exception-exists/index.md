---
aliases:
  - checked 예외의 존재의의
tags:
  - COMP2500
  - week12
---
# checked 예외의 존재의의

![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-1.png)
![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-2.png)

checked exception 이 녀석은 왜 필요할까?

![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-3.png)

API 제작자 입장에서 생각
- 메서드 시그니처에 처리하라고 명시할 수 있음

![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-4.png)

메서드 시그니처에는 예외를 던진다고만 표기함

근데 클라이언트 입장에서 처리는 뭘까?

## checked exception 존재의의 추측 1

![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-5.png)

처리 안 하고 위로(호출자 방향) 계속 던지는 상황을 생각해보자

![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-6.png)

모든 호출자 (D, B, A)의 시그니처에 `throws` 절을 추가해야 함

![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-7.png)

각 호출자에서도 발생할 수 있는 checked exception이 있으니 자신이 호출하는 메서드에서 발생하는 모든 checked exception + 자신이 발생시키는 checked exception을 포함해서 `throws` 절에 적으면 너무 길어짐

![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-8.png)
![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-9.png)
![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-10.png)

## checked exception 존재의의 추측 2

![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-11.png)

`catch` 블록에서 위 슬라이드처럼 간단하게 처리(출력)
- 이렇게 간단하게 처리하는 것을 영어로 swallow라고 표현함
	- 꿀꺽 삼킴

![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-12.png)

이럴 바에는 예외를 왜 던짐? 그냥 출력하고 리턴하는 것과 다름이 없음

## checked exception 존재의의 추측 3

![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-13.png)

checked exception을 처리 안 하면 컴파일 오류까지 내는 이유는 예외 상황이 발생하면 프로그램을 정상적으로 회복하라는 의도

![](pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/images/why-checked-exception-exists-14.png)

포프샘은 기본 동작이 unchecked, 프로그래머가 원할 때 checked로 하는게 좋다고 봄

언어의 동작을 잘 모르는 사람들은 기본 동작이 `Exception` 기반의 checked exception인 것을 모르고 무조건 `throws` 절을 넣어야 한다고 착각할 수 있음
