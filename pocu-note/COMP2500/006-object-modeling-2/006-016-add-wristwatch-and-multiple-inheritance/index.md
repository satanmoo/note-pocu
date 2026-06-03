---
aliases:
  - 손목시계 추가하기와 다중 상속
tags:
  - COMP2500
  - week6
---
# 손목시계 추가하기와 다중 상속

## 손목시계

![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-1.png)

![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-2.png)

손목시계의 특성은 wear, 기존의 상속관계에서 어디에 들어가는지 애매하다
- `Clock` 클래스는 mount 때문에 바로 넣을 수 없음

![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-3.png)

## 벽시계, 손목시계 추가

![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-4.png)

그래서 벽시계 끼리 묶어서 `WallClock` 클래스 추가

![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-5.png)

이제 `WristWatch` 손목시계 클래스 추가 가능

![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-6.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-7.png)

손목 시계 클래스 하위에도 아날로그, 디지털을 추가하면 ==코드 중복==이 발생

## 상속관계 뒤집기

![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-8.png)


![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-9.png)

상속 관계를 뒤집어서 아날로그, 디지털을 부모로 옮겼음  

![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-10.png)

여전히 코드 중복

## 다중 상속

![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-11.png)

자바에는 없는 개념

한 자식 클래스가 부모를 2개 이상 동시에 상속받는 것
- `class C extends A, B`
- 위 예시에 적용하면 `class DigitalWallClock extends WallClock, DigitalClock`

![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-12.png)

문제점은 Clock 클래스를 2번 상속받는 클래스들이 생김
- 같은 부모를 2번 가지게 되는데..?

![](pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/images/add-wristwatch-and-multiple-inheritance-13.png)

가장 아랫줄이 최상위 부모를 ==여러 번== 상속

일반적으로 다중 상속은 사용하지 말기
