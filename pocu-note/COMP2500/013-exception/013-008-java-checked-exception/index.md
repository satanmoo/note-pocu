---
title: Java의 checked 예외
aliases:
  - Java의 checked 예외
tags:
  - COMP2500
  - week12
---
# Java의 checked 예외

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-1.png)

Java는 이전 강의에서 본 어디서 어떤 예외가 발생했는지 알기 어려운 상황을 막는 방법이 있음
- [[pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/index|예외 처리를 제대로 하지 못하는 이유]] 참고
- Java 예외는 2종류
- Java에 있는 checked 예외

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-2.png)

## unchecked exception

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-3.png)

unchecked 예외는 모두 빠짐없이 `RuntimeException`을 상속함
- 콜스택을 조사해서 어떤 예외가 어디에서 발생했는지 확인해야 함

## checked exception

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-4.png)

컴파일러가 check 하는 예외

오류를 방지하는 법
- 예외를 던지는 함수 안에서 `catch` 블록으로 예외를 처리하기
- 이 메서드가 예외를 던진다는 것을 메서드 시그니처에 표기
	- 대신 이 메서드의 호출자가 다시 위 2가지 방법 중 하나를 수행하기

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-5.png)

`Exception` 클래스는 checked exception
- `RuntimeException`을 상속하지 않음

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-6.png)

checked exception이 발생하는 메서드에서 예외를 처리하지 않으면 위 슬라이드처럼 메서드 시그니처에 표기해야 함

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-7.png)

`findUser()` 메서드가 checked exception을 던지기 때문에 호출자인 `main()` 함수에서 `try` 블록으로 예외 처리
- 또는 `main()` 함수에서도 이 예외를 던진다는 것을 표기하면 컴파일 오류 방지

```java
public static void main(String[] args) throws UserNotFoundException {
    User user = null;
    user = db.findUser("pope"); // 예외가 발생하면 JVM에 전달됨
}
```

### throws 절

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-8.png)

checked exception을 던지는 메서드는 내부에서 예외를 처리하지 않으려면 `throws` 절로 예외를 던짐을 메서드 시그니처에 명시해야 함

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-9.png)

checked exception인 `UserNotFoundException`을 던지는 `findUser()` 메서드

`findUser()` 메서드 내부에서 예외 처리를 하지 않고 시그니처에 `throws` 절을 표기하지 않아서 컴파일 오류가 발생

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-10.png)

컴파일 오류 메시지에 checked exception을 처리하거나 `throws` 절로 명시하라고 함

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-11.png)

만약 호출자인 `main()` 함수에서 처리하지 않고 싶다면?

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-12.png)

호출자에서 똑같이 checked exception에 대한 규칙이 적용됨

```java
public static void main(String[] args) {
    User user = null;
    try {
        user = db.findUser("pope"); // 예외 발생 가능
    } catch (UserNotFoundException e) {
        e.printStackTrace(); // 로그 남기기
        throw e; // 예외를 다시 던짐
    }
}
```

참고로 `catch`에서 처리하는데 또 다시 예외를 던지면?
- `throws` 절이 필요함
- 이건 처리한게 아니라 그냥 다시 던지는 개념이라 컴파일러에서 오류 냄

```java
public static void main(String[] args) {
    User user = null;
    try {
        user = db.findUser("pope");
    } catch (UserNotFoundException e) {
        e.printStackTrace(); // 로그 남기기
        System.out.println("User not found: " + e.getMessage());
    }
}
```

이렇게 완전히 처리하거나

```java
public static void main(String[] args) throws UserNotFoundException {
    User user = null;
    try {
        user = db.findUser("pope");
    } catch (UserNotFoundException e) {
        e.printStackTrace();
        throw e;
    }
}
```

다시 던지려면 메서드 시그니처에 `throws` 절 표기

## 실무적으로 checked, unchecked 구분하기

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-13.png)

`Exception` 상속하면서 `RuntimeException`을 상속하지 않으면?
- checked

`RuntimeException` 상속하면?
- unchecked

![](pocu-note/COMP2500/013-exception/013-008-java-checked-exception/images/java-checked-exception-14.png)

`RuntimeException` 클래스는 `Exception` 클래스를 상속받아 checked exception으로 컴파일러가 확인하는 기능을 무시함

## 이미 만난 checked exception 실례

- `Object` 클래스의 `clone()` 메서드가 던지는 `CloneNotSupportedException` — [[pocu-note/COMP2500/010-interface/010-012-object-clone/index|Object.clone()]] 참고
	- 예외 발생(`Cloneable` 미구현 검사)은 런타임이지만, 처리-또는-선언 의무는 컴파일 타임에 호출 사슬(`Object.clone()` → 오버라이딩한 `clone()` → main)을 따라 전파됨
