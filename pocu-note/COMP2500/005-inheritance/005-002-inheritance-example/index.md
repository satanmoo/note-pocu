---
aliases:
  - 상속의 예
tags:
  - COMP2500
  - week5
---
# 상속의 예

## 클래스 다이어그램: Student & Teacher

![](pocu-note/COMP2500/005-inheritance/005-002-inheritance-example/images/inheritance-example-1.png)

`changeName()`은 개념적으로 setter와 다름
- full name을 바꿈
	- first + last

Student는 department 없을 수 있음

Teacher은 반드시 department 필요

![](pocu-note/COMP2500/005-inheritance/005-002-inheritance-example/images/inheritance-example-2.png)
![](pocu-note/COMP2500/005-inheritance/005-002-inheritance-example/images/inheritance-example-3.png)

멤버 변수 `Major major`의 초기값은 null
- Java의 enum은 참조형이라 enum 타입 변수에 null을 대입할 수 있음
- 학생의 전공이 처음부터 정해지지 않는 상황을 반영

![](pocu-note/COMP2500/005-inheritance/005-002-inheritance-example/images/inheritance-example-4.png)

## 클래스 다이어그램에서 중복 코드 찾기

![](pocu-note/COMP2500/005-inheritance/005-002-inheritance-example/images/inheritance-example-5.png)

선생과 학생의 공통분모는 사람
- 이를 공통 부모 클래스 이름으로?!
