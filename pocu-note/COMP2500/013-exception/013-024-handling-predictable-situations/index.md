---
aliases:
  - 예측 가능한 상황의 처리법
tags:
  - COMP2500
  - week12
---
# 예측 가능한 상황의 처리법

![](pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/images/handling-predictable-situations-1.png)
![](pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/images/handling-predictable-situations-2.png)

예측을 했으면 기능

예측 못했으면 버그

## 고치기 쉬운 경우 (수정 또는 예외 + 수정)

![](pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/images/handling-predictable-situations-3.png)

예측한 상황이고 고치기 쉬우면 고쳐야 함
- 안전하게 고칠 수 있어야 한다는 조건

[[pocu-note/COMP2500/013-exception/013-019-fix-and-exception/index#방법 4: 예외|예외]]는 던지고 잡아서 처리하는 개념
- 예외 후 수정
- 던지고 직접 처리하기 때문에 광의의 [[pocu-note/COMP2500/013-exception/013-019-fix-and-exception/index#방법 3: 수정|수정]]이라고 볼 수 있음
- 경계에서 던지되 처리는 내 시스템 안에서 수행함
	- 앞에서 본 내가 아는 공간에서는 오류를 최대한 없애는 개념 ([[pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/index|오류 상황을 피하는 게 최고]] 참고)
	- 예외를 외부에 던지면 어떻게 될지 모르기 때문에 내 시스템에서 처리(수정)함
		- 예외를 잡아서 오류 코드를 반환하는 것도 하나의 방법
- 경계에서는 예외를 던질 수 밖에 없음
	- [[pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/index|오류 상황을 피하는 게 최고]] 참고

예외 후 수정과 수정의 차이점
- 수정은 미리 오류 상황을 검사해서 바꾸는 것
- 예외는 오류 상황이 발생하고 사후적으로 대응하는 것

예외 + 수정 or 수정

## 고치기 어려운 경우 (예외 + 종료)

![](pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/images/handling-predictable-situations-4.png)

고치기 어려우니 못 고침

로그는 반드시 남기는 것이 좋음

로그를 남기는 방법에 2가지 있음
- 문제 지점에서 로그 남기고 바로 종료
	- 예외를 던지지 않음
- `main()` 함수까지 예외를 던지고 올라온 경로(콜스택)에 따라 로그 남기고 종료

최종 사용자에게 오류를 보여주는 것은 상황에 따라 선택
- 만약 최종 사용자에게 보여주고 싶으면 슬라이드처럼
	- GUI가 존재하면 GUI로 보여주기
		- 예외를 `main()` 함수까지 중간에 잡지 않고 던지고 로그 남기고 GUI로 팝업 보여주고 종료
- GUI가 없으면 예외를 `main()` 함수까지 던지고 파일로 로그 남기고 종료

예외 + [[pocu-note/COMP2500/013-exception/013-018-ignore-and-terminate/index#방법 2: 종료|종료]]

![](pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/images/handling-predictable-situations-5.png)

예외를 `main()` 함수까지 던지는 경우 아래 슬라이드와 같은 문제가 발생할 수 있음

![](pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/images/handling-predictable-situations-6.png)

1번 방법은 [[pocu-note/COMP2500/013-exception/013-022-terminating-program-is-also-valid/index#^no-guarantee-of-propagation|JVM까지 예외가 전파된다는 보장이 없음]] 참고

2번 방법은 [[pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/index#^memory-dump-richer|메모리 덤프는 예외보다 정보가 많음]] 참고

3번 방법은 [[pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/index#^people-dont-read-comments|사람들은 주석을 잘 읽지 않음]] 참고 (프로그래머는 문서화도 잘 하지 않으며 문서도 잘 읽지 않음, 게으르다)
