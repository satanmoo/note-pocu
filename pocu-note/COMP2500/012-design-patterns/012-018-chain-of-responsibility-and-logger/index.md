---
aliases:
  - 책임 연쇄 패턴과 로거
tags:
  - COMP2500
  - week12
---
# 책임 연쇄 패턴과 로거

많이 사용되지는 않음

잘못된 설명이 웹에 많이 돌아다닌다고 하심

![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-1.png)

위키피디아 예시

![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-2.png)
![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-3.png)

`Logger` 클래스는 추상 클래스로 일반화됨
- 멤버 변수로 `Logger` 타입의 `next` 변수

![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-4.png)

`severity` 매개변수로 출력할 로그 레벨을 확인함
- `Logger` 개체가 출력해야 될 `logLevels`는 로거 개체가 관리
- `severity` 매개변수로 자신이 출력할 로그 레벨이면 출력함

출력하고 멤버 변수로 가지고 있는 다음 `Logger` 개체의 `message()` 메서드 그대로 연쇄 호출
- `message()` 메서드 내부에서 호출되는 `log()` 메서드는 추상 메서드로 dynamic dispatch

![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-5.png)

콘솔 창에 출력하는 자식 클래스

![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-6.png)

이메일

![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-7.png)

파일

![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-8.png)

enum 코드에서 `values()`라는 메서드를 호출하면 enum의 멤버를 배열로 반환함
- `all`이라는 이름으로 래핑

![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-9.png)

`logger` 변수에 `ConsoleLogger` 개체의 참조를 저장
- 모든 로그 레벨을 처리할 수 있음

`setNext()` 메서드를 연쇄로 호출하고 있음
- `ConsoleLogger` 다음은 `EmailLogger`
	- `FUNCTIONAL_MESSAGE`, `FUNCTIONAL_ERROR` 두 로그 레벨만 출력
- `EmailLogger` 다음은 `FileLogger`
	- `WARNING`, `ERROR` 두 로그 레벨만 출력

`message()` 메서드에서 `logLevels.contains(severity)` 때문에 로그 레벨에 따라 어떤 로거가 출력할지 달라짐

`DEBUG`, `INFO` 레벨 로그는 `ConsoleLogger`만 처리

`FUNCTIONAL_ERROR`, `FUNCTIONAL_MESSAGE` 레벨 로그는 `ConsoleLogger`, `EmailLogger` 둘 다 처리

![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-10.png)

`WARNING`, `ERROR` 레벨 로그는 `ConsoleLogger`, `FileLogger` 둘 다 처리

![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-11.png)

내부적으로 책임 연쇄로 호출해주니까 `ConsoleLogger` 개체 참조를 대입한 `logger` 변수 하나만 사용하면 되는 것이 장점
- `setNext()` 메서드로 지정만 잘 해놓으면 문제 없음

![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-12.png)
![](pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/images/chain-of-responsibility-and-logger-13.png)
