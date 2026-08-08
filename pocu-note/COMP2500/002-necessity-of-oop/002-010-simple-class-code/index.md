---
title: 간단한 클래스 코드
tags:
  - COMP2500
  - week2
aliases:
  - 간단한 클래스 코드
---
# 간단한 클래스 코드

## 클래스 선언 예

![img_62.png](pocu-note/COMP2500/002-necessity-of-oop/002-010-simple-class-code/images/simple-class-code-1.png)

`this` 키워드는 인스턴스를 지칭함
- 함수 매개변수와 인스턴스의 멤버 변수를 구분하게 도와줌

## 접근 제어자

![img_63.png](pocu-note/COMP2500/002-necessity-of-oop/002-010-simple-class-code/images/simple-class-code-2.png)
![img_64.png](pocu-note/COMP2500/002-necessity-of-oop/002-010-simple-class-code/images/simple-class-code-3.png)

`public` 접근 제어자를 붙이지 않으면 외부 패키지에서 접근할 수 없음
- 상태, 동작 모두에 붙일 수 있음
- 컴파일 타임에 막는 개념

## 상태를 칭하는 용어

![img_65.png](pocu-note/COMP2500/002-necessity-of-oop/002-010-simple-class-code/images/simple-class-code-4.png)

## 동작을 칭하는 용어

![img_66.png](pocu-note/COMP2500/002-necessity-of-oop/002-010-simple-class-code/images/simple-class-code-5.png)

## 복습 퀴즈

```java
// Person.java
public class Person {  
    public int age;  
    String name;  
  
    public void beAwesome() {  
        this.name = "Mr. Awesome";  
    }  
}

// Main.java
public class Main {  
    public static void main(String[] args) {  
        Person person = new Person();  
        person.beAwesome();  
    }  
}

```

### 1. 위 코드를 컴파일 및 실행하면 무슨 일이 생기나요?

둘이 같은 패키지인 경우 `private` 접근 제어자만 조심하면 됨

현재 `public` 접근 제어자를 `beAwesome` 함수에 사용하고 있어서 서로 다른 패키지라도 `Main` 클래스에서 호출하는데 문제가 없음

정답: 컴파일과 실행 다 잘 된다.
