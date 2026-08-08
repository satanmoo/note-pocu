---
title: 멤버 변수의 초깃값, . 연산자
---
# 멤버 변수의 초깃값, . 연산자

## 다음 코드의 출력은? (멤버 변수 기본값)

```java
public class Foo {
    int a;
    double b;
    boolean c;
    String d;
}

// main
Foo f = new Foo();
System.out.println(f.a);
System.out.println(f.b);
System.out.println(f.c);
System.out.println(f.d);
```

```text
0
0.0
false
null
```

- 명시적으로 초기화하지 않아도 0에 준하는 값으로 자동 초기화됨
- 참조형(`String`)은 `null`
- Java의 실수 방지 철학 (대신 초기화에 미미한 비용 발생)

## 다음 코드의 출력은? (선언문에서 대입)

```java
public class Foo {
    int a = 5;
    String d = "hi";
}

// main
Foo f = new Foo();
System.out.println(f.a);
System.out.println(f.d);
```

```text
5
hi
```

- 멤버 변수는 선언과 동시에 초기값을 지정할 수 있음
- 개체 생성 시 그 값으로 초기화됨

## 다음 코드의 결과는? (지역 변수는 다름)

```java
public void foo() {
    int x;
    System.out.println(x);
}
```

컴파일 오류

- 멤버 변수와 달리 **지역 변수는 자동 초기화되지 않음**
- 초기화하지 않고 사용하면 컴파일 오류 → 사용 전 반드시 초기화 필요
