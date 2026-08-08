---
title: 래퍼 패턴과 그래픽 API
aliases:
  - 래퍼 패턴과 그래픽 API
tags:
  - COMP2500
  - week12
---
# 래퍼 패턴과 그래픽 API

![](pocu-note/COMP2500/012-design-patterns/012-012-wrapper-pattern-and-graphics-api/images/wrapper-pattern-and-graphics-api-1.png)
![](pocu-note/COMP2500/012-design-patterns/012-012-wrapper-pattern-and-graphics-api/images/wrapper-pattern-and-graphics-api-2.png)

메서드 시그니처가 각각 다름
- 함수 이름
- 매개변수 목록

![](pocu-note/COMP2500/012-design-patterns/012-012-wrapper-pattern-and-graphics-api/images/wrapper-pattern-and-graphics-api-3.png)

값의 유효한 범위도 자료형에 따라 다름

![](pocu-note/COMP2500/012-design-patterns/012-012-wrapper-pattern-and-graphics-api/images/wrapper-pattern-and-graphics-api-4.png)

일단 원래 코드에서 OpenGL을 사용했다고 가정해보자

![](pocu-note/COMP2500/012-design-patterns/012-012-wrapper-pattern-and-graphics-api/images/wrapper-pattern-and-graphics-api-5.png)

DirectX로 바꾸기로 결정하면 고칠게 많음

![](pocu-note/COMP2500/012-design-patterns/012-012-wrapper-pattern-and-graphics-api/images/wrapper-pattern-and-graphics-api-6.png)

래퍼 패턴을 사용해보자
- `clear()`라는 메서드를 만들고 이 메서드 시그니처만 사용하게

![](pocu-note/COMP2500/012-design-patterns/012-012-wrapper-pattern-and-graphics-api/images/wrapper-pattern-and-graphics-api-7.png)

래퍼 클래스인 `Graphics` 클래스의 내부에서 `OpenGL` 개체를 사용

![](pocu-note/COMP2500/012-design-patterns/012-012-wrapper-pattern-and-graphics-api/images/wrapper-pattern-and-graphics-api-8.png)
![](pocu-note/COMP2500/012-design-patterns/012-012-wrapper-pattern-and-graphics-api/images/wrapper-pattern-and-graphics-api-9.png)

딱 이 `Graphics` 클래스 내부 코드 구현만 바꾸면 됨
- 어댑터만 수정한다고 생각해도 됨
- 클라이언트 코드를 바꾸지 않아도 되는 것이 핵심!!!

![](pocu-note/COMP2500/012-design-patterns/012-012-wrapper-pattern-and-graphics-api/images/wrapper-pattern-and-graphics-api-10.png)
