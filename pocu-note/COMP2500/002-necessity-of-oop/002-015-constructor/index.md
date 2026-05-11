---
tags:
  - COMP2500
  - week2
aliases:
  - 생성자
---
# 생성자

## 생성된 개체와 유효한 값

![img_95.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_95.png)
![img_96.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_96.png)

## 개체 생성 시 초기화

![img_97.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_97.png)

생성자를 이용하면 개체 생성 시 유효한 값으로 초기화하여 생성할 수 있음

![img_98.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_98.png)

개체 생성 시에 자동으로 호출

반환형이 없음

## 생성자 오버로딩

![img_99.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_99.png)
![img_100.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_100.png)
![img_101.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_101.png)

`this()`로 다른 생성자를 호출할 수 있음
- 생성자 오버로딩으로 여러 생성자를 선언했을 경우

## 기본 생성자

![img_102.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_102.png)
![img_103.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_103.png)
![img_104.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_104.png)
![img_105.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_105.png)

기본 생성자는 매개변수로 아무 것도 받지 않고 body도 비었음

기본 생성자는 컴파일러가 만들어 줌

기본 생성자에서 각 멤버 변수를 0에 준하는 값으로 초기화하는 것이 아님
- 기본 생성자 호출 전에 이미 컴파일러가 초기화 해줌
- 기본 생성자의 body는 비어있음 기억하자

![img_106.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_106.png)
![img_107.png](pocu-note/COMP2500/002-necessity-of-oop/002-015-constructor/images/img_107.png)

기본 생성자의 문법 확인
- 매개변수 없음
- body 비었음
