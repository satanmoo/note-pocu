---
title: 말 안 듣는 자식 클래스
aliases:
  - 말 안 듣는 자식 클래스
tags:
  - COMP2500
  - week10
---
# 말 안 듣는 자식 클래스

![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-1.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-2.png)

왜 이런 문제가 발생했을까?
![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-3.png)

다형성이 필요한 부분을 너무 넓게 봄
- 3,4번 동작에 모두 다형성을 적용하려고 했던 것이 문제

![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-4.png)

적절한 다형성 범위는 3번만

![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-5.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-6.png)

`attack()` 메서드는 그대로, `takeDamage()` 메서드만 교체

![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-7.png)

`attack()` 메서드는 클래스 다이어그램에서 변화를 확인할 수 없음
- `final` 키워드가 붙어서 상속 오버라이딩 할 수 없게 만듬

함수 내부에서 `calculateDamage()` 메서드를 호출해버림
- `calculateDamage()` 메서드 호출을 강제했음

피해량을 적용하는 로직은 부모 클래스인 `Monster` 클래스로 올라옴

데미지를 계산하는 로직은 다형적으로

![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-8.png)

데미지를 계산하는 로직(`calculateDamage()`)은 `public` 해도 상관없음
- 값을 계산해 반환할 뿐 개체의 상태를 바꾸지 않기 때문
	- 상태를 바꾸는 `takeDamage()`가 `protected`인 것과 대비됨

![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-9.png)

- 부모 클래스에 `calculateDamage()` 메서드를 사용하지는 않지만 자식에서 공통적으로 오버라이딩 할 의도로 구현
    - 함수 시그니처를 공통으로 묶는 의도
    - 자식이 오버라이딩 하지 않으면 [[#^damage-zero-without-override|피해량이 항상 0으로 계산되는 문제]] 발생

![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-10.png)

`calculateDamage()` 메서드를 자식에서 오버라이딩
- 로직은 자식마다 달라지는게 스펙이니까

![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-11.png)

클래스 다이어그램에 오버라이딩한 메서드는 표시 안 해도 됨!

![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-12.png)

- 여전히 문제 발생
- 오버라이딩을 강제하지 않아서 `Monster` 클래스의 `calculateDamage()` 메서드의 기본 동작이 호출되어 데미지가 0으로 나옴

![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-13.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-14.png)
![](pocu-note/COMP2500/009-abstract-method-class/009-003-disobedient-child-class/images/disobedient-child-class-15.png)

`Troll` 클래스 구현자가 `calculateDamage()` 메서드를 오버라이딩 하지 않으면, `Monster` 클래스에 정의한 `calculateDamage()` 메서드가 실행 중 호출되니 항상 피해량을 0으로 계산함 ^damage-zero-without-override
