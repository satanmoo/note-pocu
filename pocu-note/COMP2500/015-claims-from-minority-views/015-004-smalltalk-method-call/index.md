---
title: 스몰토크의 메서드 호출
aliases:
  - 스몰토크의 메서드 호출
tags:
  - COMP2500
  - week14
---
# 스몰토크의 메서드 호출

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-1.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-2.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-3.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-4.png)

- 스몰토크에서는 이미 존재하는 메서드를 호출하는게 아님
- 개념상 컴파일 중에 메서드 검사 불가능
- 내가 다른 사람에게 시간을 알려달라고 할 수 있다(메시지 보내기)
- 상대방은 시계가 없을 수도 있다(메시지 처리할 수 없을 수도 있음)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-5.png)

- 참고로 mad
    - multiply + add

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-6.png)

- args에 인자 수가 모자라다면?

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-7.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-8.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-9.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-10.png)

- methodName에서 뭐라도 받을 수 있고, 내부적으로 처리할 수 있으면 다형성
- String 기반 message broadcast system 과 유사함
    - 개체의 배열을 매개변수로 넣어주고
    - 어떤 메시지
    - 처리할 수 있는 개체는 처리하고, 못하면 말고

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-11.png)

- 스몰토크는 예외를 많이 사용할 수 밖에 없음
    - 컴파일 중에 검사가 불가능 ㅋㅋ

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-12.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-004-smalltalk-method-call/images/smalltalk-method-call-13.png)

- 동적 타입을 선호할 수록 예외 처리가 중요하다는 것을 알 수 있음
