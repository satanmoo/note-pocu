---
aliases:
  - "'무시'와 '종료' 방법"
tags:
  - COMP2500
  - week12
---
# '무시'와 '종료' 방법

## 방법 1: 무시

![](pocu-note/COMP2500/013-exception/013-018-ignore-and-terminate/images/ignore-and-terminate-1.png)

오류 상황 발생 시 슬라이드에서 3가지 중에 하나 발생 ^ignore-outcomes
- 예를 들어 외부에서 들어오는 데이터를 검증하는 상황

![](pocu-note/COMP2500/013-exception/013-018-ignore-and-terminate/images/ignore-and-terminate-2.png)

보통은 1, 2번 발생
- 블루 스크린은 운영체제 크래시

![](pocu-note/COMP2500/013-exception/013-018-ignore-and-terminate/images/ignore-and-terminate-3.png)

데이터가 망가진 상태로, 연산을 하다가 심각한 상황을 초래할 수도 있음

![](pocu-note/COMP2500/013-exception/013-018-ignore-and-terminate/images/ignore-and-terminate-4.png)

1, 2번 크래시 나는 경우를 매우 안 좋게 보고 무시하는 방법을 저평가하는 사람도 있지만 실제로는 아님

## 방법 2: 종료

![](pocu-note/COMP2500/013-exception/013-018-ignore-and-terminate/images/ignore-and-terminate-5.png)

사용자에게 어떤 문제가 있었는지 보여주고 정상 종료

언어 별로 실행 중인 프로그램을 안전하게 종료하는 방법이 있음
- 반드시 `main()` 함수까지 예외를 올려서 종료할 필요 없음

![](pocu-note/COMP2500/013-exception/013-018-ignore-and-terminate/images/ignore-and-terminate-6.png)

크래시에 비해 장점이 있음
- 정리(graceful shut-down) ^graceful-shutdown
