---
title: 무늬 vs 실체
aliases:
  - 무늬 vs 실체
tags:
  - COMP2500
  - week9
---
# 무늬 vs 실체

![](pocu-note/COMP2500/008-polymorphism/008-003-appearance-vs-substance/images/appearance-vs-substance-1.png)

*오버라이딩* 동작에서 부모의 함수는 ==호출 X==

![](pocu-note/COMP2500/008-polymorphism/008-003-appearance-vs-substance/images/appearance-vs-substance-2.png)

부모의 원래 함수 구현을 호출할 수 있음
- 실행 중 부모형 타입인 개체에서 호출하면 됨

![](pocu-note/COMP2500/008-polymorphism/008-003-appearance-vs-substance/images/appearance-vs-substance-3.png)

다음 상황에서 어떤 함수 구현이 호출될까?
- 변수의 자료형은 부모형
- 실행 중 개체는 자식

![](pocu-note/COMP2500/008-polymorphism/008-003-appearance-vs-substance/images/appearance-vs-substance-4.png)

## 복습 퀴즈

```java
Animal animal = new Dog();
animal.shout();
```

### 위 코드에서 animal.shout()는 누구를 호출할까요?

실제 개체 자료형인 Dog 클래스에 있는 shout() 메서드
