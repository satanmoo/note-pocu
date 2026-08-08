---
title: 정적 메서드에서 멤버 변수 접근하기
tags:
  - COMP2500
  - week4
aliases:
  - 정적 메서드에서 멤버 변수 접근하기
---
# 정적 메서드에서 멤버 변수 접근하기

## 정적 메서드와 개체에 속한 멤버

![img_31.png](pocu-note/COMP2500/004-static/004-004-access-to-static-variable/images/access-to-static-variable-1.png)

정적 메서드에서 정적 멤버 변수에 접근하는 것은 아무 문제 없음

![img_32.png](pocu-note/COMP2500/004-static/004-004-access-to-static-variable/images/access-to-static-variable-2.png)
![img_33.png](pocu-note/COMP2500/004-static/004-004-access-to-static-variable/images/access-to-static-variable-3.png)

정적 멤버 함수에서 정적이 아닌 그냥 멤버 변수에 접근할 수 없음

![img_34.png](pocu-note/COMP2500/004-static/004-004-access-to-static-variable/images/access-to-static-variable-4.png)
![img_35.png](pocu-note/COMP2500/004-static/004-004-access-to-static-variable/images/access-to-static-variable-5.png)

클래스에 속한 메서드(정적 메서드)에서 개체에 속한 멤버에 전근 불가

![img_36.png](pocu-note/COMP2500/004-static/004-004-access-to-static-variable/images/access-to-static-variable-6.png)
![img_37.png](pocu-note/COMP2500/004-static/004-004-access-to-static-variable/images/access-to-static-variable-7.png)

클래스 레벨에서 개체를 특정할 수 없음

## static 정리

![img_38.png](pocu-note/COMP2500/004-static/004-004-access-to-static-variable/images/access-to-static-variable-8.png)

## global과 비교한 static의 장점

![img_39.png](pocu-note/COMP2500/004-static/004-004-access-to-static-variable/images/access-to-static-variable-9.png)

접근 제어자는 클래스 레벨
- [[pocu-note/COMP2500/002-necessity-of-oop/002-019-private-method/index#접근 제어자의 내부는 클래스 내부|접근 제어자의 내부는 클래스 내부]] 참고

![img_40.png](pocu-note/COMP2500/004-static/004-004-access-to-static-variable/images/access-to-static-variable-10.png)

클래스를 네임 스페이스처럼 활용할 수 있음
