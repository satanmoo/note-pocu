---
aliases:
  - 프로그램 종료도 올바른 방법이다
tags:
  - COMP2500
  - week12
---
# 프로그램 종료도 올바른 방법이다

![](pocu-note/COMP2500/013-exception/013-022-terminating-program-is-also-valid/images/terminating-program-is-also-valid-1.png)

좀비 프로그램이 더 심각한 상황
- [[pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/index#^zombie-program|좀비 프로그램]] 참고 — 이상한 상태로 계속 동작하는 프로그램

크래시보다 프로그램 종료가 좋은 이유는 저장
- [[pocu-note/COMP2500/013-exception/013-018-ignore-and-terminate/index#^graceful-shutdown|graceful shut-down]] 참고 — 정리(저장) 장점

![](pocu-note/COMP2500/013-exception/013-022-terminating-program-is-also-valid/images/terminating-program-is-also-valid-2.png)

예외도 똑같이 "프로그램 종료"할 수 있다는 주장

![](pocu-note/COMP2500/013-exception/013-022-terminating-program-is-also-valid/images/terminating-program-is-also-valid-3.png)

예외도 위로 던지면 JVM이 종료해줌

![](pocu-note/COMP2500/013-exception/013-022-terminating-program-is-also-valid/images/terminating-program-is-also-valid-4.png)

H 작성자 입장에서 호출자가 예외가 JVM까지 전파된다는 보장이 없음 ^no-guarantee-of-propagation
- 호출자가 중간에 `catch` 해서 처리하면?
	- [[pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/index#^bad-handling-makes-it-worse|예외를 처리하다 오히려 더 잘못될 수 있음]] 참고
	- [[pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/index#^swallow|swallow(꿀꺽 삼킴)]] 참고
