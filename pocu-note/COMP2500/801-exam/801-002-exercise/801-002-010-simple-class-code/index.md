---
title: 간단한 클래스 코드
---
# 간단한 클래스 코드

## 다음 코드는 컴파일·실행되는가?

```java
// package academy.pocu.a
public class Person {
    public int age;
    String name;   // 접근 제어자 없음 (package-private)

    public void beAwesome() {
        this.name = "Mr. Awesome";
    }
}

// package academy.pocu.b
public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        person.beAwesome();
    }
}
```

컴파일·실행 잘 됨

- `beAwesome`이 `public`이라 다른 패키지(`b`)에서도 호출 가능
- `Person` 클래스도 `public`이라 다른 패키지에서 사용 가능

## 다음 코드의 결과는?

```java
// package academy.pocu.a
public class Person {
    public int age;
    String name;   // package-private
}

// package academy.pocu.b
public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        person.age = 10;        // (1)
        person.name = "Kim";    // (2)
    }
}
```

컴파일 오류 ((2)에서)

- (1) `age`는 `public` → 다른 패키지에서 접근 OK
- (2) `name`은 접근 제어자가 없어 package-private → 다른 패키지(`b`)에서 접근 불가
- `public`을 안 붙이면 외부 패키지에서 접근할 수 없음 (컴파일 타임에 막음)

## 같은 패키지라면 접근 제어자가 없는(package-private) 멤버에 접근할 수 있는가?

YES

- 같은 패키지 안에서는 package-private 멤버에 접근 가능
- 같은 패키지일 때는 `private`만 조심하면 됨
