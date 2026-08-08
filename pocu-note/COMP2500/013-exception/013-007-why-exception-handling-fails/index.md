---
title: 예외 처리를 제대로 하지 못하는 이유
aliases:
  - 예외 처리를 제대로 하지 못하는 이유
tags:
  - COMP2500
  - week12
---
# 예외 처리를 제대로 하지 못하는 이유

![](pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/images/why-exception-handling-fails-1.png)

요즘은 예외를 덜 사용하면 프로그램의 품질이 더 좋아짐

![](pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/images/why-exception-handling-fails-2.png)
![](pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/images/why-exception-handling-fails-3.png)

오류 상황을 반환하는걸 포프샘은 권함

![](pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/images/why-exception-handling-fails-4.png)

예외를 던지는 방식은 사람이 사용하기 쉽지 않음
- 왜?

![](pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/images/why-exception-handling-fails-5.png)

예외를 던지면 함수의 블랙박스 개념을 훼손함

함수의 블랙박스 개념에서는 함수 시그니처가 함수 호출자와 함수 제작자의 규약
- 이 규약을 가지고 통신할 수 있게 만드는게 좋음
- 함수는 올바르게 동작한다는 가정에 규약이 유효함

하지만 예외를 사용하면 함수를 작성할 때 함수가 올바르게 동작하지 않는다는 것을 가정하고 작성해야 함

예외는 콜스택 위로 타고 올라감
- 함수 호출 깊이가 깊어지면 어떤 함수에서 예외가 발생했는지 추적하기 힘듦

![](pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/images/why-exception-handling-fails-6.png)

예외 때문에 모든 함수를 다 까보는 것은 캡슐화에 위배됨
- 앞에서 봤듯이 다시 예외는 OOP와 무관하다는 주장을 보충
	- [[pocu-note/COMP2500/013-exception/013-001-try-catch-finally/index|try/catch/finally]] 참고 — 예외는 개체지향과 비슷한 시점에 나왔을 뿐 독립적임

함수를 믿고 블랙박스처럼 사용하는 게 올바른 추상화

![](pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/images/why-exception-handling-fails-7.png)

함수 위에 어떤 예외를 던지는지 주석으로 표기
- 하지만 일반적인 사람들은 주석을 잘 읽지 않음 ^people-dont-read-comments

![](pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/images/why-exception-handling-fails-8.png)
