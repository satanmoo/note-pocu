---
title: 4가지 처리법의 순위
aliases:
  - 4가지 처리법의 순위
tags:
  - COMP2500
  - week12
---
# 4가지 처리법의 순위

![](pocu-note/COMP2500/013-exception/013-023-ranking-of-four-error-handling-methods/images/ranking-of-four-error-handling-methods-1.png)

[[pocu-note/COMP2500/013-exception/013-016-four-ways-to-handle-errors/index|4가지 오류 상황 처리법]]의 코드 제작자의 책임감 순위를 매겨보자

![](pocu-note/COMP2500/013-exception/013-023-ranking-of-four-error-handling-methods/images/ranking-of-four-error-handling-methods-2.png)

오지랖(클라이언트가 할 일을 대신 함)

![](pocu-note/COMP2500/013-exception/013-023-ranking-of-four-error-handling-methods/images/ranking-of-four-error-handling-methods-3.png)

클라이언트 입장에서 오류 상황에서 어떤 오류인지 정확하게(객관적으로) 알 수 있냐?

종료는 방향이 명확하기 때문에 객관적임

수정은 수정하고 클라이언트에게 뭐가 문제인지 알려주면 되니까 객관적임

![](pocu-note/COMP2500/013-exception/013-023-ranking-of-four-error-handling-methods/images/ranking-of-four-error-handling-methods-4.png)

무시는 클라이언트가 알아서 처리해야 하니 예외보다는 객관적

예외는 클라이언트가 어떻게 처리해야 할지 모름
- `catch` 블록으로 잡아서 처리하는 게 맞을지?
- rethrow 해서 전파하는 게 맞을지?
	- [[pocu-note/COMP2500/013-exception/013-022-terminating-program-is-also-valid/index#^no-guarantee-of-propagation|JVM까지 예외가 전파된다는 보장이 없음]] 참고

![](pocu-note/COMP2500/013-exception/013-023-ranking-of-four-error-handling-methods/images/ranking-of-four-error-handling-methods-5.png)

예외는 "폭탄 돌리기"

![](pocu-note/COMP2500/013-exception/013-023-ranking-of-four-error-handling-methods/images/ranking-of-four-error-handling-methods-6.png)

무시는 크래시나기 때문에 예외보다 명백함
- [[pocu-note/COMP2500/013-exception/013-018-ignore-and-terminate/index#^ignore-outcomes|무시 방법의 3가지 결과]] 참고

![](pocu-note/COMP2500/013-exception/013-023-ranking-of-four-error-handling-methods/images/ranking-of-four-error-handling-methods-7.png)

무시가 크래시가 내지 않아 좀비 프로그램을 만드는 경우 예외보다 객관성이 낮아짐
- [[pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/index#^zombie-program|좀비 프로그램]] 참고
