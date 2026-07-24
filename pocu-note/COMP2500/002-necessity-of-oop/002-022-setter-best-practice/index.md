---
aliases:
  - setter 베스트 프랙티스
tags:
  - COMP2500
  - week3
---
# setter 베스트 프랙티스

![img_40.png](pocu-note/COMP2500/002-necessity-of-oop/002-022-setter-best-practice/images/setter-best-practice-1.png)
![img_41.png](pocu-note/COMP2500/002-necessity-of-oop/002-022-setter-best-practice/images/setter-best-practice-2.png)

## setter 베스트 프렉티스 1: 멤버 변수는 private

![img_42.png](pocu-note/COMP2500/002-necessity-of-oop/002-022-setter-best-practice/images/setter-best-practice-3.png)

강력한 캡슐화
- 정보 숨기기

## setter 베스트 프렉티스 2: 새 개체는 유효하도록

![img_43.png](pocu-note/COMP2500/002-necessity-of-oop/002-022-setter-best-practice/images/setter-best-practice-4.png)
![[pocu-note/COMP2500/002-necessity-of-oop/002-022-setter-best-practice/images/setter-best-practice-5.png]]

개체 생성 시 유효하게 하기 위해 생성자로 강제

## setter 베스트 프렉티스 3: getter는 자유롭게 추가

![img_45.png](pocu-note/COMP2500/002-necessity-of-oop/002-022-setter-best-practice/images/setter-best-practice-6.png)

참조형을 getter로 반환하면 문제가 생길 수 있음
- 참조 노출 문제
- aliasing 문제

## setter 베스트 프렉티스 4: setter는 고민 후 추가

![img_46.png](pocu-note/COMP2500/002-necessity-of-oop/002-022-setter-best-practice/images/setter-best-practice-7.png)

개체 상태 수정은 개체 스스로 수행하는 것이 이상적임 ^avoid-setters

![img_47.png](pocu-note/COMP2500/002-necessity-of-oop/002-022-setter-best-practice/images/setter-best-practice-8.png)

`mean` 멤버 변수는 `setScore`가 호출될 때 갱신
- 개체 스스로 상태를 책임짐

![img_48.png](pocu-note/COMP2500/002-necessity-of-oop/002-022-setter-best-practice/images/setter-best-practice-9.png)
