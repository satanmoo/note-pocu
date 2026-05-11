---
tags:
  - COMP2500
  - week2
aliases:
  - 생성자로 초기화를 해야 하는 이유
---
# 생성자로 초기화를 해야 하는 이유

## 개체 생성 후 값 대입

![img_108.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_108.png)
![img_109.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_109.png)

## 개념 상의 문제

![img_110.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_110.png)

## 후조건의 문제

![img_111.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_111.png)

## 사용자에 대한 고려

![img_112.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_112.png)

## 실수 시나리오: 어떤 멤버 변수를 초기화해야 하는가?

![img_113.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_113.png)
![img_121.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_121.png)
![img_114.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_114.png)
![img_115.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_115.png)

멤버 변수 추가에 따라 생성자도 올바르게 수정한다는 전제가 필요

## 실수 시나리오: 어떤 값으로 초기화해줘야 하는가?

![img_116.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_116.png)
![img_117.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_117.png)

## 외부 라이브러리 사용할 때 문제점

![img_118.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_118.png)

## 생성자는 계약

![img_119.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_119.png)
![img_120.png](pocu-note/COMP2500/002-necessity-of-oop/002-016-why-use-constructor/images/img_120.png)

함수는 ***BlackBox***
- 이 개념이 캡슐화, 데이터 추상화와 비슷함
