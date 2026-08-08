---
title: 인터페이스 미구현과 컴파일 오류
aliases:
  - 인터페이스 미구현과 컴파일 오류
tags:
  - COMP2500
  - week10
---
# 인터페이스 미구현과 컴파일 오류

![](pocu-note/COMP2500/010-interface/010-005-unimplemented-interface-compile-error/images/unimplemented-interface-compile-error-1.png)

인터페이스를 구현한 클래스에서 추상 메서드를 오버라이딩(구현)하지 않으면 컴파일 오류 발생

![](pocu-note/COMP2500/010-interface/010-005-unimplemented-interface-compile-error/images/unimplemented-interface-compile-error-2.png)

추상 클래스를 상속할 때 추상 메서드를 구현 안 하면 컴파일 오류가 나는 것과 동일한 개념

![](pocu-note/COMP2500/010-interface/010-005-unimplemented-interface-compile-error/images/unimplemented-interface-compile-error-3.png)

인터페이스, 추상 클래스를 이용하면 컴파일 오류를 통해 실수 방지 가능

![](pocu-note/COMP2500/010-interface/010-005-unimplemented-interface-compile-error/images/unimplemented-interface-compile-error-4.png)

그냥 상속관계를 사용하면 위처럼 문제 발생
- `Cat` 클래스의 `shuot()` 메서드는 오타

## 영상 퀴즈

![](pocu-note/COMP2500/010-interface/010-005-unimplemented-interface-compile-error/images/unimplemented-interface-compile-error-5.png)
![](pocu-note/COMP2500/010-interface/010-005-unimplemented-interface-compile-error/images/unimplemented-interface-compile-error-6.png)
