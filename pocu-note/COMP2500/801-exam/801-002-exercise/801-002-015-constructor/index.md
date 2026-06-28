# 생성자

## 다음 코드의 결과는? (this()로 생성자 호출 - 실수)

```java
public class User {
    private String name;
    private int age;

    public User(String name) {
        this.name = name;
        this(name, 0);
    }

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

컴파일 오류

- `this(...)` (다른 생성자 호출)는 생성자의 **첫 번째 문장**이어야 함
- 앞에 `this.name = name;`이 있어서 오류
- 고치려면 `this(name, 0);`을 맨 위로 옮김

## 다음 코드의 출력은? (생성자 체이닝)

```java
public class User {
    private String name;
    private int age;

    public User(String name) {
        this(name, 0);
    }

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return this.name; }
    public int getAge() { return this.age; }
}

// main
User u = new User("Kim");
System.out.println(u.getName() + " " + u.getAge());
```

```text
Kim 0
```

- `this(name, 0)`이 첫 문장이라 OK → 2-인자 생성자로 위임됨

## 다음 코드의 결과는? (생성자를 정의하면 기본 생성자가 사라짐 - 실수)

```java
public class Foo {
    private int x;

    public Foo(int x) {
        this.x = x;
    }
}

// main
Foo f = new Foo();
```

컴파일 오류

- 생성자를 **하나라도 직접 정의하면** 컴파일러가 기본 생성자를 만들어주지 않음
- 인자 없는 `new Foo()`에 맞는 생성자가 없어 오류
- 고치려면 기본 생성자를 명시적으로 추가하거나 `new Foo(0)` 호출

## 다음 코드의 결과는? (생성자를 안 만들면 기본 생성자 자동 생성)

```java
public class Foo {
    private int x;
}

// main
Foo f = new Foo();
```

컴파일·실행 잘 됨

- 생성자를 하나도 정의하지 않으면 컴파일러가 **기본 생성자**(매개변수 없음, body 빈)를 자동 생성
- 멤버 변수 `x`는 기본 생성자가 아니라 컴파일러가 미리 0으로 초기화 (기본 생성자 body는 비어 있음)
