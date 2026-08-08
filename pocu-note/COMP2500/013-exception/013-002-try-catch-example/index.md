---
title: try/catch 사용 예
aliases:
  - try/catch 사용 예
tags:
  - COMP2500
  - week12
---
# try/catch 사용 예

![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-1.png)
![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-2.png)

정상 동작이면 `for` 문까지 내려가서 출력

예외가 발생하면 `return` 하기 때문에 출력하지 않음

![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-3.png)

최종 파일 경로를 구하는 코드

![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-4.png)

파일의 모든 줄을 읽는 코드

![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-5.png)

몇 줄 읽었다고 출력

![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-6.png)

예외 발생하지 않아서 `catch` 블록에 걸리지 않고 한 줄씩 출력

![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-7.png)

이제 `catch`에서 예외 잡는 사례

![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-8.png)

`path` 값에 해당하는 경로에 파일이 없기 때문에 예외 발생

![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-9.png)

예외가 발생하는 순간 다음은 실행 안 됨
- `Files.readAllLines(path)`에서 예외 발생하고, `System.out.format...`은 건너뜀

주의하자. `try` 블록에서 실행하지 않는 코드가 있음

![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-10.png)
![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-11.png)
![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-12.png)

stack trace 출력

![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-13.png)
![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-14.png)
![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-15.png)

`IOException` 예외의 `catch` 블록에서 `return` 문으로 함수 빠져나감
- 만약 `return` 문이 없다면?
- 아래 `for (String line : lines)`로 건너뛰어 실행함

## `Exception` 클래스가 가지고 있는 출력 메서드

![](pocu-note/COMP2500/013-exception/013-002-try-catch-example/images/try-catch-example-16.png)
