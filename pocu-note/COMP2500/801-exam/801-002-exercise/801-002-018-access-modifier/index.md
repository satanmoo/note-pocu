---
title: 접근 제어자
---
# 접근 제어자

## 다음 코드의 결과는? (private 멤버 외부 접근)

```java
public class Account {
    private int balance;

    public Account(int balance) {
        this.balance = balance;
    }
}

// main
Account a = new Account(100);
a.balance = -50;
```

컴파일 오류

- `private` 멤버는 클래스 외부에서 접근 불가 (같은 패키지여도 불가)
- 생성 후 멤버를 유효하지 않은 값으로 바꾸는 "분탕질"을 막음 → 개체는 자신의 상태를 스스로 책임짐

## 다음 코드의 출력은? (private 멤버를 메서드로 접근)

```java
public class Account {
    private int balance;

    public Account(int balance) {
        this.balance = balance;
    }

    public int getBalance() {
        return this.balance;
    }
}

// main
Account a = new Account(100);
System.out.println(a.getBalance());
```

```text
100
```

- `private` 멤버라도 **같은 클래스 안의 메서드**(getter)로는 접근 가능

## 다음 코드는 컴파일되는가? (top-level 클래스에 private)

```java
private class Foo {
}
```

컴파일 오류

- top-level 클래스에는 `private`(또는 `protected`)를 붙일 수 없음 → `public` 또는 생략(default)만 가능
- 단, 내포(nested) 클래스에는 `private`를 붙일 수 있음

## 다음 코드의 결과는? (다른 패키지에서 세 접근 제어자)

```java
// package academy.pocu.a
public class Box {
    public int pub;
    int pkg;          // 생략 = package-private
    private int priv;
}

// package academy.pocu.b
public class Main {
    public static void main(String[] args) {
        Box b = new Box();
        b.pub = 1;     // (1)
        b.pkg = 2;     // (2)
        b.priv = 3;    // (3)
    }
}
```

컴파일 오류 ((2), (3)에서)

- (1) `pub`는 `public` → 다른 패키지에서 접근 OK
- (2) `pkg`는 package-private → 다른 패키지(`b`)에서 접근 불가
- (3) `priv`는 `private` → 클래스 외부에서 접근 불가

## 위 Box를 같은 패키지(academy.pocu.a)에서 접근하면?

```java
// package academy.pocu.a
Box b = new Box();
b.pub = 1;     // OK
b.pkg = 2;     // OK (같은 패키지)
b.priv = 3;    // 컴파일 오류
```

- `public`, package-private 멤버는 같은 패키지에서 접근 가능
- `private`만은 같은 패키지여도 클래스 외부에서 접근 불가
