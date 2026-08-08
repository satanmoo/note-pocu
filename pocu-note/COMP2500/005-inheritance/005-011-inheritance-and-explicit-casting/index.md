---
title: 상속과 명시적 캐스팅
aliases:
  - 상속과 명시적 캐스팅
tags:
  - COMP2500
  - week5
---
# 상속과 명시적 캐스팅

## 부모에서 자식으로 캐스팅은 반드시 명시적 캐스팅

![](pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/images/inheritance-and-explicit-casting-1.png)
![](pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/images/inheritance-and-explicit-casting-2.png)
![](pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/images/inheritance-and-explicit-casting-3.png)

실행 중 호환될 가능성이 전혀 없는 경우 컴파일러가 에러를 발생
- 직접 상속 관계가 아닌 경우

![](pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/images/inheritance-and-explicit-casting-4.png)

부모 클래스 변수가 실제로 실행 중 자식 클래스 개체일 수는 있음
- 가능성 0%는 아님

![](pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/images/inheritance-and-explicit-casting-5.png)

이건 실행 중 가능성 0%라 컴파일러가 미리 막아줌

![](pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/images/inheritance-and-explicit-casting-6.png)

## ClassCastException

![](pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/images/inheritance-and-explicit-casting-7.png)
![](pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/images/inheritance-and-explicit-casting-8.png)

컴파일러가 잡을 수 없는 실행 중 문제는 예외로 발생 

## 복습 퀴즈

```java
public class A {} 
public class AA extends A {} 
public class AB extends A {} 
public class AAA extends AA {}
```

### 1. 다음 중 명시적 캐스팅이 필요 없는 경우는?

![](pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/images/inheritance-and-explicit-casting-9.png)

자식을 부모에 대입할 때는 암시적 캐스팅으로 충분함

### 2. 다음 중 컴파일 오류가 나는 경우는?

![](pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/images/inheritance-and-explicit-casting-10.png)

직접 상속 관계가 아님
