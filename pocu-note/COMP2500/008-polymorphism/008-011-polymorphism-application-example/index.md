---
title: 다형성 적용 예
aliases:
  - 다형성 적용 예
tags:
  - COMP2500
  - week9
---
# 다형성 적용 예

![](pocu-note/COMP2500/008-polymorphism/008-011-polymorphism-application-example/images/polymorphism-application-example-1.png)
![](pocu-note/COMP2500/008-polymorphism/008-011-polymorphism-application-example/images/polymorphism-application-example-2.png)

`Basenji` Class 에 `final` 키워드를 붙여 더 이상 상속할 수 없게 만듦

참고로 이 예시에서 `bark` 라는 함수 이름 자체는 별로 좋은 이름이 아님
- Basenji는 짖지 않아
- [[pocu-note/COMP2500/006-object-modeling-2/006-020-dog-and-bird/index|개, 새]] 참고

![](pocu-note/COMP2500/008-polymorphism/008-011-polymorphism-application-example/images/polymorphism-application-example-3.png)

시계를 "어딘가"에 붙임
- 붙일 대상을 매개변수로
    - 일반화의 끝판왕 Object 타입

![](pocu-note/COMP2500/008-polymorphism/008-011-polymorphism-application-example/images/polymorphism-application-example-4.png)

클래스 다이어그램에서 오버로딩으로 구현이 어떻게 바뀌었는지 확인 불가
- [[pocu-note/COMP2500/003-object-modeling-1/003-003-class-diagram/index#^uml-omits-impl|클래스 다이어그램]]
- Object 타입을 받아 벽인지, 손목인지에 따라 구현이 다름

인터페이스를 사용하는 것이 더 좋은 구현
- [[pocu-note/COMP2500/006-object-modeling-2/006-017-multiple-inheritance-causes-and-solutions/index#깔끔한 해결방법 interface|다중 상속이 생기는 이유와 해결법]] 참고

![](pocu-note/COMP2500/008-polymorphism/008-011-polymorphism-application-example/images/polymorphism-application-example-5.png)

이전에 함수 이름 자체를 바꿔서 12시간 기반 / 24시간 기반을 구분했음
- [[pocu-note/COMP2500/006-object-modeling-2/006-012-how-to-use-24-hour-system/index|24시간 체제를 사용하려면?]] 참고
