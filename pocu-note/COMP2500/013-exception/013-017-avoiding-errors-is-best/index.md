---
aliases:
  - 오류 상황을 피하는 게 최고
tags:
  - COMP2500
  - week12
---
# 오류 상황을 피하는 게 최고

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-1.png)

가장 중요한 것
- 예를 들어 파일을 읽는데, 파일이 있는지 확인하고 없으면 아예 여는 시도를 안 하는 거죠

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-2.png)

인터페이스 개념
- 내가 만드는 코드의 시스템(세계)를 완전히 통제하고, 밖은 통제 못하는 개념

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-3.png)

내 시스템 안에 들어온 데이터는 언제나 유효하다고 가정
- 예외 상황을 고려할 필요 없음
- 오류 상황이 발생하면 예상치 못한 버그
	- 시스템의 문제로 수정해야 함

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-4.png)

남으로부터 받아오는 데이터는 유효하지 않다고 의심
- 경계에서 잡자, 유효성 검증 후 거부

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-5.png)

경계에서 남에게 문제를 알려주는 방법
- `boolean`, `null` 반환
- 오류 코드 반환
	- `main()` 함수에서 보통 이렇게 하죠
- 예외를 던짐

![](pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/images/avoiding-errors-is-best-6.png)
