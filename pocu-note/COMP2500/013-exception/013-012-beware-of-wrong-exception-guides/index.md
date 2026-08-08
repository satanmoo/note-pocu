---
title: 잘못된 예외 처리 가이드를 조심하자
aliases:
  - 잘못된 예외 처리 가이드를 조심하자
tags:
  - COMP2500
  - week12
---
# 잘못된 예외 처리 가이드를 조심하자

![](pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/images/beware-of-wrong-exception-guides-1.png)

예외를 회복해서 프로그램 계속 돌도록 만들라는 주장
- checked exception 유행할 때 주장

![](pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/images/beware-of-wrong-exception-guides-2.png)

이런 주장이 나온 배경을 생각해보자

![](pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/images/beware-of-wrong-exception-guides-3.png)

과거의 공포
- [[pocu-note/COMP2500/013-exception/013-006-neglecting-errors/index#옛날 이야기|오류를 방치하면 일어나는 일 - 옛날 이야기]] 참고
- 프로그램이 크래시나면 누군가 켜줘야 하는

![](pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/images/beware-of-wrong-exception-guides-4.png)
![](pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/images/beware-of-wrong-exception-guides-5.png)

이 과거의 공포 때문이라고 추론할 수 있는 이유는 이 문장에서 힌트를 얻을 수 있음

![](pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/images/beware-of-wrong-exception-guides-6.png)

프로그램을 시작할 때는 프로그램을 켰던 사람이 컴퓨터 앞에 있을거니

![](pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/images/beware-of-wrong-exception-guides-7.png)

예외가 JVM까지 올라오고 프로그램 종료되거나, 예외 처리 안 해서 크래시가 난다면 웹서버 다시 켜줘야 함
- 이걸 두려워한거죠
- 즉 예전에 웹서버 누군가 재부팅해야되는 상황에 대한 두려움이 남아있음

![](pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/images/beware-of-wrong-exception-guides-8.png)

기본적으로 예외 처리 안 하면 다시 키면 됨

![](pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/images/beware-of-wrong-exception-guides-9.png)

지켜보는 사람 없이 오래 작동하는 프로그램의 경우
- 다른 프로그램을 이용해 프로그램을 재시작하게 하면 됨
	- OS에서 해주기도 함
		- OS에서 특정 프로그램이 실행되는지 계속 관찰하는 개념 (실행 중인 프로세스 목록을 알 수 있음)
	- 도커같은 컨테이너에서 해주기도 함
- 요즘은 기계가 크래시나는 경우는 OS가 일단 막아주니

![](pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/images/beware-of-wrong-exception-guides-10.png)

오히려 모든 예외를 `catch` 하고 고치려는 시도, 즉 예외로부터 안전한 프로그래밍(exception safe programming)을 시도하다가 '실패'하면 더 문제가 많음
- [[pocu-note/COMP2500/013-exception/013-010-exception-safe-programming/index|예외로부터 안전한 프로그래밍]] 참고

예외를 회복하려다 오히려 프로그램을 이상한 상태에 빠지게 할 수 있음
- 이상한 상태로 계속 동작하는 프로그램을 '좀비 프로그램'이라고 부름 ^zombie-program
	- 이러면 어디서 문제가 발생했는지 알기가 어려움

예외 발생 시 프로그램을 종료한다면, 그 문제는 바로 알 수 있죠? 그 이후 문제는 없으니

![](pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/images/beware-of-wrong-exception-guides-11.png)

결론은 상황에 맞게 예외 처리 방법을 고르자
- 무조건 회복은 잘못됨
