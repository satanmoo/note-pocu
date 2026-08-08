---
title: 클래스 정보와 Object 클래스
---
# 클래스 정보와 Object 클래스

## 다음 코드의 출력은? (getClass().getName())

```java
// package academy.pocu.comp2500
public class Dog {}

// main
Dog dog = new Dog();
System.out.println(dog.getClass().getName());
```

```text
academy.pocu.comp2500.Dog
```

- `getClass().getName()`은 **패키지를 포함한 정규화된 클래스 이름**을 반환
- 보통 로그에 활용

## 다음 코드의 출력은? (부모형 변수에서 getClass)

```java
// package academy.pocu.comp2500
Object obj = new Dog();
System.out.println(obj.getClass().getName());
```

```text
academy.pocu.comp2500.Dog
```

- 변수의 정적 타입은 `Object`지만 `getClass()`는 **실행 중 실제 타입**(`Dog`)을 반환 (RTTI)
- `getClass()`는 변수 타입에 관계없이 호출 가능 → `Object` 클래스에 구현되어 있기 때문

## RTTI(instanceof, getClass 등)의 단점은?

성능에 좋지 않음

- 실행 중 타입을 확인하는 비용이 듦
- C++에서는 컴파일 시 이 기능을 꺼버릴 수도 있음

## Object 클래스에 대한 설명은?

- 모든 클래스의 최상위 부모 (컴파일러가 `extends Object`를 암시적으로 붙임)
- 그래서 모든 개체가 `getClass()`, `equals()`, `toString()` 등을 사용할 수 있음
