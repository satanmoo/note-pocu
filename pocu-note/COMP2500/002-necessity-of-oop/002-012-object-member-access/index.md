---
tags:
  - COMP2500
  - week2
aliases:
  - 개체 멤버에 접근하기, 참조형
---
# 개체 멤버에 접근하기, 참조형

## 개체의 멤버 변수에 접근하기

![img_74.png](pocu-note/COMP2500/002-necessity-of-oop/002-012-object-member-access/images/object-member-access-1.png)

`.`으로 멤버 변수에 접근

Java 에서 멤버 변수의 초기값이 0임을 확인
- C 에서는 가비지 값

![img_75.png](pocu-note/COMP2500/002-necessity-of-oop/002-012-object-member-access/images/object-member-access-2.png)

## 포인터 vs 참조형

![img_76.png](pocu-note/COMP2500/002-necessity-of-oop/002-012-object-member-access/images/object-member-access-3.png)

![img_77.png](pocu-note/COMP2500/002-necessity-of-oop/002-012-object-member-access/images/object-member-access-4.png)

![img_78.png](pocu-note/COMP2500/002-necessity-of-oop/002-012-object-member-access/images/object-member-access-5.png)

![img_79.png](pocu-note/COMP2500/002-necessity-of-oop/002-012-object-member-access/images/object-member-access-6.png)

![img_80.png](pocu-note/COMP2500/002-necessity-of-oop/002-012-object-member-access/images/object-member-access-7.png)

Java 는 구조체(값형)이 없음

![img_81.png](pocu-note/COMP2500/002-necessity-of-oop/002-012-object-member-access/images/object-member-access-8.png)

Java 기본 자료형의 포인터가 없기 때문에 따로 Mutable holder 을 만들어야 함

```java
# IntRef.java
public class IntRef {  
    int v;  
}
```

```java
void swap(IntRef a, IntRef b) {  
    int temp = a.v;  
    a.v = b.v;  
    b.v = temp;  
}
```

## 복습 퀴즈

### 1. 다음 자료형 중 참조형인 것을 고르세요.

대문자로 시작하는 자료형을 구하면 됨

기본 자료형은 소문자로 시작함
- int
- char
- boolean
