---
title: 예외적인 상황에만 예외를 사용해야 하는 경우
aliases:
  - 예외적인 상황에만 예외를 사용해야 하는 경우
tags:
  - COMP2500
  - week12
---
# 예외적인 상황에만 예외를 사용해야 하는 경우

![](pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/images/use-exception-only-for-exceptional-cases-1.png)
![](pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/images/use-exception-only-for-exceptional-cases-2.png)

제어의 흐름으로 쓸 수 있다고, 해야 하는건 아님

![](pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/images/use-exception-only-for-exceptional-cases-3.png)
![](pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/images/use-exception-only-for-exceptional-cases-4.png)
![](pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/images/use-exception-only-for-exceptional-cases-5.png)

예외 중단점 기능
- 예외가 발생하면 프로그램 실행을 중단하고 보여줌
- 이 기능 잘 써라

![](pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/images/use-exception-only-for-exceptional-cases-6.png)
![](pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/images/use-exception-only-for-exceptional-cases-7.png)
![](pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/images/use-exception-only-for-exceptional-cases-8.png)
![](pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/images/use-exception-only-for-exceptional-cases-9.png)

개념적으로 예외답게 사용하자

![](pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/images/use-exception-only-for-exceptional-cases-10.png)

예외가 오류 상황이라는 전제하에 모든 툴이 개발됨
- 즉 모두가 동의하는 개념대로 해야 함

![](pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/images/use-exception-only-for-exceptional-cases-11.png)

남하고 일할 때 이런 점이 중요함
- 경고를 고치지 않아도 괜찮다고 안 고치면 남에게 민폐
- 협업할 때 예외를 제어 흐름으로 사용하면 남이 디버깅할 때 민폐
