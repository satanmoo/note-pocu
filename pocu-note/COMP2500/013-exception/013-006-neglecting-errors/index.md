---
aliases:
  - 오류를 방치하면 일어나는 일
tags:
  - COMP2500
  - week12
---
# 오류를 방치하면 일어나는 일

![](pocu-note/COMP2500/013-exception/013-006-neglecting-errors/images/neglecting-errors-1.png)
![](pocu-note/COMP2500/013-exception/013-006-neglecting-errors/images/neglecting-errors-2.png)

예외 `catch`를 전혀 안 했다고 가정해보자

![](pocu-note/COMP2500/013-exception/013-006-neglecting-errors/images/neglecting-errors-3.png)

`main()` 함수에서도 `catch` 하지 않음

`main()` 함수에서 위로 던지면 JVM에서 처리
- JVM은 오류 메시지를 보여주고 프로그램을 종료시킴

![](pocu-note/COMP2500/013-exception/013-006-neglecting-errors/images/neglecting-errors-4.png)

JVM이 OS 대신 책임져줌

![](pocu-note/COMP2500/013-exception/013-006-neglecting-errors/images/neglecting-errors-5.png)

그러면 가상머신이 없는 예전은 어떨까?

## 옛날 이야기

![](pocu-note/COMP2500/013-exception/013-006-neglecting-errors/images/neglecting-errors-6.png)

프로그램 하나만 실행함

프로그램이 예외로 뻗으면 크래시(하드웨어가 뻗음)
- 그냥 멈춘 상태
- 해결법은 재부팅

![](pocu-note/COMP2500/013-exception/013-006-neglecting-errors/images/neglecting-errors-7.png)

누군가 재부팅할 사람이 없는 구조라면?
- 웹서버 켜놓고 자다가 재부팅해야 해?

## 요즘 이야기

![](pocu-note/COMP2500/013-exception/013-006-neglecting-errors/images/neglecting-errors-8.png)

- 가상 메모리
- 프로그램마다 독자적인 메모리 공간

![](pocu-note/COMP2500/013-exception/013-006-neglecting-errors/images/neglecting-errors-9.png)

크래시가 발생해도 OS가 프로그램 종료, 가상 메모리 해제
- 즉 프로그램을 껐다 키면 해결이 됨
	- 옛날에는 하드웨어 자체를 껐다 켰죠?

예외가 발생해서 프로그램이 꺼지더라도, OS에 5분 동안 프로그램이 돌지 않으면 실행하도록 설정할 수 있음

그래서 결론은 요즘은 예전보다 예외 처리의 실익이 줄어듬
- 컴퓨터 재부팅 vs 프로그램 재부팅
