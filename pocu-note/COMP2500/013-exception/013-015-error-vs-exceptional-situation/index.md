---
aliases:
  - 오류 상황, 예외 상황
tags:
  - COMP2500
  - week12
---
# 오류 상황, 예외 상황

![](pocu-note/COMP2500/013-exception/013-015-error-vs-exceptional-situation/images/error-vs-exceptional-situation-1.png)

happy path를 벗어나는 상황을 이 강의에서는 "오류 상황"이라고 부르기로 함
- "예외 상황"이라고 부르는 사람들도 있음
	- 이 용어는 프로그래밍 언어의 `Exception`과 헷갈림

![](pocu-note/COMP2500/013-exception/013-015-error-vs-exceptional-situation/images/error-vs-exceptional-situation-2.png)

오류 상황에서 어떻게 처리해야 하는가?

![](pocu-note/COMP2500/013-exception/013-015-error-vs-exceptional-situation/images/error-vs-exceptional-situation-3.png)

오류 상황은 예측이 가능해야 함
- 예를 들어 파일을 열 때 파일이 사라지는 경우

오류 상황에 대한 처리는 기능의 일부다.

![](pocu-note/COMP2500/013-exception/013-015-error-vs-exceptional-situation/images/error-vs-exceptional-situation-4.png)

예측 못한 오류 상황은 버그 ^unpredicted-error-is-bug
- 예측을 못했기 때문에 미리 코드로 대응하지 못함
- 버그는 고치고 다시 빌드해야 함
