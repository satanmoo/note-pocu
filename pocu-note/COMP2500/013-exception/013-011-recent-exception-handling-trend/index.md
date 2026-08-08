---
title: 근래의 예외 처리 트렌드
aliases:
  - 근래의 예외 처리 트렌드
tags:
  - COMP2500
  - week12
---
# 근래의 예외 처리 트렌드

![](pocu-note/COMP2500/013-exception/013-011-recent-exception-handling-trend/images/recent-exception-handling-trend-1.png)
![](pocu-note/COMP2500/013-exception/013-011-recent-exception-handling-trend/images/recent-exception-handling-trend-2.png)

checked exception을 `catch` 블록으로 처리할 때 unchecked exception으로 바꿔서 던지기
- `try` 블록으로 예외 처리하기 때문에 함수 시그니처의 `throws` 절도 빠짐

![](pocu-note/COMP2500/013-exception/013-011-recent-exception-handling-trend/images/recent-exception-handling-trend-3.png)

unchecked exception으로 바꿔서 던지면 이전 강의에서 본 호출 트리에서 문제점이 다시 드러남
- [[pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/index#checked exception 존재의의 추측 1|checked 예외의 존재의의 - 추측 1]] 참고

![](pocu-note/COMP2500/013-exception/013-011-recent-exception-handling-trend/images/recent-exception-handling-trend-4.png)

예외로부터 회복하지 않는 방향

이전 강의에서 본 포인트로 결제하는 연산에서 생각해보기
- [[pocu-note/COMP2500/013-exception/013-010-exception-safe-programming/index|예외로부터 안전한 프로그래밍]] 참고
- 포인트 회복, 재고 복구
	- 이런 회복 작업에서도 오류가 발생할 수 있음
		- 예외를 처리하려다 오히려 고칠게 많아지죠?
		- 따라서 실패하면 바로 종료하고 고치고 재시작하는게 더 좋을 수도 있음

## 예외의 세분성에 대한 고민(exception granularity)

![](pocu-note/COMP2500/013-exception/013-011-recent-exception-handling-trend/images/recent-exception-handling-trend-5.png)
![](pocu-note/COMP2500/013-exception/013-011-recent-exception-handling-trend/images/recent-exception-handling-trend-6.png)

이전 강의에서 봤듯이 예전에는 checked exception 위주로 모든 예외를 회복시키는 것이 유행
- [[pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/index|checked 예외의 존재의의]] 참고

회복을 위해서는 문제를 특정하는 것이 유리함
- 발생할 수 있는 문제마다 예외 클래스를 만들고 처리
- 타입에 의존하면 명확하게 어떤 예외인지 알 수 있고 `catch` 문에서 처리하기도 편하고

![](pocu-note/COMP2500/013-exception/013-011-recent-exception-handling-trend/images/recent-exception-handling-trend-7.png)

구체적인 예외를 던지되 `main()` 함수의 `catch` 블록에서 `Exception`으로 잡아서 한 방에 처리
- 극단적인 주장으로 구체적인 예외 대신 `RuntimeException`으로 무조건 던지자는 의견도 있음
	- 대신 메시지를 구체적으로 잘 작성하자

"처리"라는 표현의 애매함
- 로그는 남기되 정상 회복 작업을 하는건 아님
- 그리고 `catch`에서 `Exception`으로 한 방에 잡으면 예외 타입을 알기 어렵기 때문에 정상 회복 작업 하기도 어려움
