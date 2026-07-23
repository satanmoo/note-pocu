---
aliases:
  - 잘못된 예외처리보다 크래시가 낫다
tags:
  - COMP2500
  - week12
---
# 잘못된 예외처리보다 크래시가 낫다

![](pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/images/crash-is-better-than-bad-exception-handling-1.png)

이전 강의에서 본 것처럼 예외를 처리하다 오히려 더 잘못될 수 있음
- [[pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/index|잘못된 예외 처리 가이드를 조심하자]] 참고 — 예외를 회복하려다 이상한 상태(좀비 프로그램)에 빠질 수 있음

![](pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/images/crash-is-better-than-bad-exception-handling-2.png)

과연 크래시를 최종 사용자가 극혐할까?

![](pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/images/crash-is-better-than-bad-exception-handling-3.png)
![](pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/images/crash-is-better-than-bad-exception-handling-4.png)

자동 세이브

![](pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/images/crash-is-better-than-bad-exception-handling-5.png)

구글 docs
- 히스토리 무한임

이메일 작성하다가 브라우저 꺼도 다시 켰을 때 브라우저에 내용 남아있음

결론적으로 요즘 사용자들은 크래시에 신경을 안 씀

![](pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/images/crash-is-better-than-bad-exception-handling-6.png)

JVM이 프로그램을 안전하게 종료해주듯 요즘 OS, 하드웨어는 안정성이 높음
- [[pocu-note/COMP2500/013-exception/013-006-neglecting-errors/index|오류를 방치하면 일어나는 일]] 참고 — JVM이 오류 메시지를 보여주고 프로그램을 종료시킴

디버깅에는 크래시가 더 유리함
- 메모리 덤프

![](pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/images/crash-is-better-than-bad-exception-handling-7.png)

메모리 상황을 파일에 다 적어주는 것
- 버그 해결하는데 유용함
- 사용자의 리포트에 의존하지 않고 기기 메모리의 스냅샷을 뜨기 때문에 정확함

![](pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/images/crash-is-better-than-bad-exception-handling-8.png)

메모리 덤프는 예외보다 정보가 많음
