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

![](pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/images/handling-predictable-situations-3.png)

예측한 상황이고 고치기 쉬우면 고쳐야 함
- 안전하게 고칠 수 있어야 한다는 조건

[[pocu-note/COMP2500/013-exception/013-019-fix-and-exception/index#방법 4: 예외|예외]]도 던지고 경계에서 처리하고 계속 진행하도록
- 크게 보면 던지고 직접 처리하니 [[pocu-note/COMP2500/013-exception/013-019-fix-and-exception/index#방법 3: 수정|수정]]이라고 볼 수 있음

수정과 차이점
- 수정은 미리 오류 상황을 검사해서 바꾸는 것
- 예외는 오류 상황이 발생하고 사후적으로 대응하는 것
	- 던진 후 경계에서 처리하면 이것도 광의의 "수정"이라고 볼 수 있음

결론적으로 포프샘은 "수정"을 제안함
- 내 코드 안인지 다른 시스템에서 발생한지에 따라 다름

![](pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/images/handling-predictable-situations-4.png)

고치기 어려우니 못 고침

최종 사용자에게 오류를 보여주는 것은 선택
- 만약 최종 사용자에게 보여주고 싶으면 슬라이드처럼

예외를 던지던, 안 던지던 결국 [[pocu-note/COMP2500/013-exception/013-018-ignore-and-terminate/index#방법 2: 종료|종료]]

![](pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/images/handling-predictable-situations-5.png)

이미 예측한 상황에서 예외를 던지는 경우 위 슬라이드와 같은 문제가 발생할 수 있음

1번 방법은 [[pocu-note/COMP2500/013-exception/013-022-terminating-program-is-also-valid/index#^no-guarantee-of-propagation|JVM까지 예외가 전파된다는 보장이 없음]] 참고

2번 방법은 [[pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/index#^memory-dump-richer|메모리 덤프는 예외보다 정보가 많음]] 참고

3번 방법은 [[pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/index#^people-dont-read-comments|사람들은 주석을 잘 읽지 않음]] 참고 (프로그래머는 문서화도 잘 하지 않으며 문서도 잘 읽지 않음, 게으르다)
