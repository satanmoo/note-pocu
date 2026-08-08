---
title: 정적 메서드
tags:
  - COMP2500
  - week4
aliases:
  - 정적 메서드
---
# 정적 메서드

## Java의 전역 변수 & 전역 함수

![img.png](pocu-note/COMP2500/004-static/004-001-static-method/images/static-method-1.png)
![img_1.png](pocu-note/COMP2500/004-static/004-001-static-method/images/static-method-2.png)
![img_2.png](pocu-note/COMP2500/004-static/004-001-static-method/images/static-method-3.png)

## 모든 것이 개체 속에 있는 불편한

![img_3.png](pocu-note/COMP2500/004-static/004-001-static-method/images/static-method-4.png)

전역적
- 프로그램이 실행 중 globally 하나만 존재함을 의미  

모든 것이 개체일 때는 전역적이라는 개념이 없고 2가지 불편함이 존재
1. 개체를 만들 필요가 없을 때
2. 클래스 단위에서 행동
	- 같은 클래스의 모든 개체에 적용되는 개념

## 정적 멤버 함수

![img_4.png](pocu-note/COMP2500/004-static/004-001-static-method/images/static-method-5.png)
![img_5.png](pocu-note/COMP2500/004-static/004-001-static-method/images/static-method-6.png)
![img_6.png](pocu-note/COMP2500/004-static/004-001-static-method/images/static-method-7.png)

정적 멤버 변수는 개체가 아니라 클래스 소속  
new로 개체를 만들지 않고 호출할 수 있음  
개체를 만들고 정적 멤버 변수를 호출할 수 있으나 권장하지는 않음

```java
public class Pig {
    static public int boom() {
        return 0;
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        Pig pig = new Pig();
        Pig.boom(); // 개체를 생성하지 않고 정적 멤버 함수 호출
        pig.boom(); // 권장 X
    }
}
```

## 클래스 다이어그램과 정적 멤버 함수

![img_7.png](pocu-note/COMP2500/004-static/004-001-static-method/images/static-method-8.png)

클래스 다이어그램에서 멤버 함수에 밑줄이 있으면 정적
