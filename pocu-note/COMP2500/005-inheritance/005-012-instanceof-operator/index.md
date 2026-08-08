---
title: instanceof 연산자
aliases:
  - instanceof 연산자
tags:
  - COMP2500
  - week5
---
# instanceof 연산자

## ClassCastException 피하기

![](pocu-note/COMP2500/005-inheritance/005-012-instanceof-operator/images/instanceof-operator-1.png)

예외를 피할 수 있다면 피하는 것이 좋음

instanceof 연산자를 사용하면 ClassCastException 예외를 방지할 수 있음

## RTTI(run time type identification)

![](pocu-note/COMP2500/005-inheritance/005-012-instanceof-operator/images/instanceof-operator-2.png)
![](pocu-note/COMP2500/005-inheritance/005-012-instanceof-operator/images/instanceof-operator-3.png)

실행 중 어떤 변수(부모형 변수)에 저장된 개체가 어떤 자료형인이 알아내는 방법이 필요함
- **RTTI(run time type identification)** 라는 용어로 부름

## instanceof 연산자

![](pocu-note/COMP2500/005-inheritance/005-012-instanceof-operator/images/instanceof-operator-4.png)
![](pocu-note/COMP2500/005-inheritance/005-012-instanceof-operator/images/instanceof-operator-5.png)
![](pocu-note/COMP2500/005-inheritance/005-012-instanceof-operator/images/instanceof-operator-6.png)

## instanceof 와 상속

![](pocu-note/COMP2500/005-inheritance/005-012-instanceof-operator/images/instanceof-operator-7.png)
![](pocu-note/COMP2500/005-inheritance/005-012-instanceof-operator/images/instanceof-operator-8.png)

instanceof는 `<변수명>`의 실행 중 타입이 `<클래스명>`의 자식 클래스여도 true를 반환
- `<변수명>`의 실행 중 타입이 `<클래스명>`과 is-a 관계를 만족하면 됨

## 복습 퀴즈

```java
public class A {} 
public class AA extends A {} 
public class AB extends A {} 
public class AAA extends AA {}`
```

```java
A a = new A();
A aa = new AA();
A ab = new AB();
A aaa = new AAA();
```

### 1. 다음 중 평가 결과가 false인 것은?

![](pocu-note/COMP2500/005-inheritance/005-012-instanceof-operator/images/instanceof-operator-9.png)

`ab`의 실행 중 타입은 `AB`
- `AB`와 `AA`는 is-a 관계가 아님
- false 반환
