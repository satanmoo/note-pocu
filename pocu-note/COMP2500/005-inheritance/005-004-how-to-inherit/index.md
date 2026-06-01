---
aliases:
  - 상속하기
tags:
  - COMP2500
  - week5
---
# 상속하기

![](pocu-note/COMP2500/005-inheritance/005-004-how-to-inherit/images/how-to-inherit-1.png)

Student 클래스에서 Person 클래스의 함수를 호출했는데, 컴파일 에러 발생

## `extends`

![](pocu-note/COMP2500/005-inheritance/005-004-how-to-inherit/images/how-to-inherit-2.png)
![](pocu-note/COMP2500/005-inheritance/005-004-how-to-inherit/images/how-to-inherit-3.png)

컴파일 오류
- 자동 삽입 규칙
	- Java 컴파일러는 자식 생성자의 첫줄이 `super(...)` 나 `this(...)`가 아니면 컴파일러가 암시적으로 `super()` (인자 없는 호출)을 첫 줄에 넣음
- 기본 생성자 규칙
	- 클래스에 생성자를 하나라도 직접 선언하면, 컴파일러는 기본 생성자를 자동으로 생성하지 않음

위의 규칙 2개가 맞물려 컴파일 오류
- [[pocu-note/COMP2500/005-inheritance/005-003-extract-common-class/index|중복 코드를 클래스로 분리하기]] 에서 `Person`클래스를 보면 생성자를 하나 선언함
- 따라서 기본 생성자를 자동으로 생성하지 않음
- `Student` 클래스의 생성자의 첫줄에 `super(...)` 또는 `this(...)`가 없기에 컴파일러가 `super()`을 첫 줄에 넣음
- `Person` 클래스는 기본 생성자가 없어서 컴파일 오류

![](pocu-note/COMP2500/005-inheritance/005-004-how-to-inherit/images/how-to-inherit-4.png)
![](pocu-note/COMP2500/005-inheritance/005-004-how-to-inherit/images/how-to-inherit-5.png)
![](pocu-note/COMP2500/005-inheritance/005-004-how-to-inherit/images/how-to-inherit-6.png)

부모, 자식을 각각 생성자를 호출해서 초기화

## 영상 퀴즈

### 1. 부모 클래스와 자식 클래스가 있을 때 누구부터 초기화할까요?

A: 부모 클래스
