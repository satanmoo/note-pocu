---
title: setter에서 예외 던지기
aliases:
  - setter에서 예외 던지기
tags:
  - COMP2500
  - week6
---
# setter에서 예외 던지기

## 유효하지 않은 입력

![](pocu-note/COMP2500/006-object-modeling-2/006-005-throw-exception-in-setter/images/throw-exception-in-setter-1.png)

유효하지 않은 값에 대한 검사가 필요함
- setter에서 개체의 상태가 유효하도록 하는 것이 OOP 캡슐화

## setter에 있는 문제

![](pocu-note/COMP2500/006-object-modeling-2/006-005-throw-exception-in-setter/images/throw-exception-in-setter-2.png)

자료형을 `byte`로 변경해도 여전히 문제 발생

![](pocu-note/COMP2500/006-object-modeling-2/006-005-throw-exception-in-setter/images/throw-exception-in-setter-3.png)

예외를 던지고 메서드 실행을 중지하는 것은 무책임한 해결방법
- 다만 코드 사용자와 직접 소통하는 경계에서는 예외를 던져도 괜찮음
