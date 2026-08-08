---
title: 예외는 OO의 일부가 아니다
aliases:
  - 예외는 OO의 일부가 아니다
tags:
  - COMP2500
  - week12
---
# 예외는 OO의 일부가 아니다

![](pocu-note/COMP2500/013-exception/013-020-exception-is-not-part-of-oo/images/exception-is-not-part-of-oo-1.png)

OO에서는 무조건 예외만 사용해야 한다는 주장은 왜 나왔을까?

![](pocu-note/COMP2500/013-exception/013-020-exception-is-not-part-of-oo/images/exception-is-not-part-of-oo-2.png)

예외만 잘하면 소프트웨어 품질이 좋아진다는 주장은 잘못된 주장

![](pocu-note/COMP2500/013-exception/013-020-exception-is-not-part-of-oo/images/exception-is-not-part-of-oo-3.png)

안드로이드 앱의 품질은 좋지 않음

![](pocu-note/COMP2500/013-exception/013-020-exception-is-not-part-of-oo/images/exception-is-not-part-of-oo-4.png)

예외가 소프트웨어 품질을 좋아지게 한다는 잘못된 주장이 나온 이유는 다음과 같이 추측함
- 크래시에 대한 공포 때문에 예외를 `catch` 하고 어떻게든 진행해서 프로그램 크래시를 막음

![](pocu-note/COMP2500/013-exception/013-020-exception-is-not-part-of-oo/images/exception-is-not-part-of-oo-5.png)

생성자에서 오류가 발생하면 예외를 던질 수 밖에 없음
- 앞에서 본 [[pocu-note/COMP2500/012-design-patterns/012-002-factory-method-pattern/index|팩토리 메서드 패턴]] 참고

![](pocu-note/COMP2500/013-exception/013-020-exception-is-not-part-of-oo/images/exception-is-not-part-of-oo-6.png)
![](pocu-note/COMP2500/013-exception/013-020-exception-is-not-part-of-oo/images/exception-is-not-part-of-oo-7.png)
![](pocu-note/COMP2500/013-exception/013-020-exception-is-not-part-of-oo/images/exception-is-not-part-of-oo-8.png)

언어의 제약

결론적으로 생성자 오류 상황에 유일한 해결책이 예외라는 점이 예외가 OO의 일부라는 주장의 정당한 근거는 아님
