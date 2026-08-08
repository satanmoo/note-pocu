---
title: 접근 제어자
tags:
  - COMP2500
  - week3
aliases:
  - 접근 제어자
---
# 접근 제어자

## 생성자의 한계

![img.png](pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-1.png)
![img_1.png](pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-2.png)

생성 후 개체의 멤버 변수를 유효하지 않은 값으로 바꿀 수 있음
- 분탕질

![img_2.png](pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-3.png)
![img_3.png](pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-4.png)
![img_4.png](pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-5.png)

> [!NOTE] 개체는 자신의 상태를 스스로 책임진다!
> 
> OOP의 철학

## 접근 제어자

![img_5.png](pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-6.png)
![[pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-7.png]]

## 접근 제어자: public

![img_7.png](pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-8.png)

[[pocu-note/COMP2500/002-necessity-of-oop/002-010-simple-class-code/index#접근 제어자|간단한 클래스 코드 접근 제어자]] 에서 봤음
- 패키지에 관계 없이 접근할 수 있으

접근 제어자 생략 시 같은 패키지에 속한 클래스들만 접근 가능
- default 접근 제어자

## 접근 제어자: private

![img_8.png](pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-9.png)

class에 private 접근 제어자 붙일 수 없음
- top-level class 불가
- 내포 클래스(nested)의 경우 가능

![img_9.png](pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-10.png)
![img_10.png](pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-11.png)
![img_11.png](pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/images/access-modifier-12.png)
