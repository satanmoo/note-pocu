---
aliases:
  - try/catch/finally
tags:
  - COMP2500
  - week12
---
# try/catch/finally

예외는 개체지향과 비슷한 시점에 나왔을 뿐 독립적임

![](pocu-note/COMP2500/013-exception/013-001-try-catch-finally/images/try-catch-finally-1.png)

`try` 블록 위에서부터 순서대로 실행
- 예외 발생하면 예외 종류에 따라 분기해서 `catch`
	- 언어 자체에서 제공하는 예외
	- 사용하는 함수에서 자체적으로 제공하는 예외
- 예외 발생 여부와 관계없이 항상 `finally` 블록 실행
	- `catch` 블록에서 `return` 문이 있더라도 `finally` 블록은 항상 실행

![](pocu-note/COMP2500/013-exception/013-001-try-catch-finally/images/try-catch-finally-2.png)

`Exception` 클래스는 최상위 예외 부모
- `catch` 문에 부모 클래스 예외를 넣으면 이 예외의 자식 클래스 예외가 발생하면 캐치함

![](pocu-note/COMP2500/013-exception/013-001-try-catch-finally/images/try-catch-finally-3.png)

부모 예외 클래스 `catch` 블록이 자식 예외 클래스 `catch` 블록보다 위에 나오면 안 됨
- `catch` 문에 부모 클래스 넣으면 자식 클래스 예외가 발생하면 캐치하기 때문
- 왼쪽의 예에서는 `FileNotFoundException` 예외가 발생할 수 없음

specific to general 로 작성하자!
