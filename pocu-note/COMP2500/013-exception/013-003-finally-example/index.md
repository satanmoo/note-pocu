---
aliases:
  - finally 사용 예
tags:
  - COMP2500
  - week12
---
# finally 사용 예

![](pocu-note/COMP2500/013-exception/013-003-finally-example/images/finally-example-1.png)

파일에 `Byte` 타입으로 쓰는 함수 2번 호출

![](pocu-note/COMP2500/013-exception/013-003-finally-example/images/finally-example-2.png)

`WriteByte()` 함수 안에서 파일을 여는 동작이 있음

첫번째 `WriteByte()` 함수 호출 뒤 파일을 닫지 않고, 두번째 `WriteByte()` 함수를 호출했기에 예외 발생

![](pocu-note/COMP2500/013-exception/013-003-finally-example/images/finally-example-3.png)

파일을 닫는 코드를 추가해도 여전히 문제가 있음

`fs.WriteByte()`에서 문제가 생기면, 즉 파일을 작성하는 동안 문제가 생겨서 예외가 생기면
- `fs.Close()` 구문이 실행되지 않음

슬라이드처럼 예외를 잡기 위해 `IOException` `catch` 블록을 추가해서 `fs.Close()`를 넣을 수 있음
- 근데 또 다른 예외가 발생하면, 또 `catch` 블록 추가해야 함
	- 이게 귀찮음

모든 예외가 발생하는 케이스 + 예외가 발생하지 않는 케이스 모두 `fs.Close()`를 호출하게 하고 싶음

![](pocu-note/COMP2500/013-exception/013-003-finally-example/images/finally-example-4.png)

`finally` 블록에서 `if (fs != null)` 조건으로 파일 열렸는지 확인
- `catch` 블록에서 `return` 문으로 함수를 리턴할 때 `finally` 블록은 실행하고 리턴함

컴파일러 과정에서 반드시 `finally` 블록을 실행하도록 블록 실행 루틴을 삽입한다고 생각하면 됨

![](pocu-note/COMP2500/013-exception/013-003-finally-example/images/finally-example-5.png)

정상적으로 도는 것처럼 보이는 코드

![](pocu-note/COMP2500/013-exception/013-003-finally-example/images/finally-example-6.png)

`FileOutputStream` 클래스 개체를 GC가 닫아줌
- 내부적으로 `finalize()`, `close()` 메서드 호출

일반적으로 운영체제가 한 프로그램이 열 수 있는 파일의 수를 제한함
- 이 기능 때문에 파일을 제대로 안 닫은 경우 다른 파일을 열 때 실패할 수 있음
- GC 되기 전 OS 리소스의 한계에 도달하는 문제

![](pocu-note/COMP2500/013-exception/013-003-finally-example/images/finally-example-7.png)

GC의 `finalize()` 메서드에 의존하는 것을 피하자!

![](pocu-note/COMP2500/013-exception/013-003-finally-example/images/finally-example-8.png)

직접 호출하는 방법은 `finally` 문에 직접 작성하는 개념

![](pocu-note/COMP2500/013-exception/013-003-finally-example/images/finally-example-9.png)

- `out != null` 조건
	- `out = new FileOutputStream(...)` 생성자를 호출할 때 정상적으로 파일 스트림을 열었으면, `null`이 아니게 됨

`finally` 블록 안에서 `out.close()`를 호출할 때 `try`, `catch` 문으로 넣어야 함
- 안 그러면 컴파일 오류
- 자바에서 checked exception에 강제하는 규칙
	- https://docs.oracle.com/javase/8/docs/api/?java/io/FileOutputStream.html
