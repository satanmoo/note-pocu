---
title: 예측 불가한 상황의 처리법
aliases:
  - 예측 불가한 상황의 처리법
tags:
  - COMP2500
  - week12
---
# 예측 불가한 상황의 처리법

![](pocu-note/COMP2500/013-exception/013-025-handling-unpredictable-situations/images/handling-unpredictable-situations-1.png)

예측 불가능하니 수정 불가능

앞에서 본 [[pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/index#고치기 어려운 경우 (예외 + 종료)|예측 + 고치기 어려운 경우]]에서 본 방법을 비슷하게 따라할 수 있음
- 예외 + 종료
- 원래 종료는 예측 후 종료지만 예외를 통해서 `main()` 함수에서 예외를 잡아 종료하는 방법으로 우회함

예측을 못했으니 로그를 남기는 2가지 방법 중 문제 발생 지점에서 로그를 남기는 것은 불가능

예외를 지원하는 언어는 예외를 `main()` 함수까지 올리고 로그를 남길 수 있음
- [[pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/index#고치기 어려운 경우 (예외 + 종료)|예측 가능한 상황의 처리법 - 고치기 어려운 경우]] 참고

예외를 지원하지 않는 언어는 보통(언어에 따라 다르지만 대부분) 크래시 후 메모리 덤프
- [[pocu-note/COMP2500/013-exception/013-021-crash-is-better-than-bad-exception-handling/index#^crash-better-for-debugging|디버깅에는 크래시(메모리 덤프)가 더 유리함]] 참고

![](pocu-note/COMP2500/013-exception/013-025-handling-unpredictable-situations/images/handling-unpredictable-situations-2.png)
![](pocu-note/COMP2500/013-exception/013-025-handling-unpredictable-situations/images/handling-unpredictable-situations-3.png)
