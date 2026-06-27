# 정적 내포 클래스를 사용할 경우

## 다음 코드의 결과는? (참조 없이 outer 인스턴스 멤버 접근)

```java
public class Outer {
    private int value = 10;

    public static class Nested {
        public void print() {
            System.out.println(value);
        }
    }
}
```

컴파일 오류

- static 내포 클래스는 outer 개체에 대한 참조가 **없음** (비정적 inner와의 차이)
- 그래서 outer의 인스턴스 멤버 `value`에 바로 접근할 수 없음
- 접근하려면 outer 개체의 참조를 따로 받아야 함

## 다음 코드의 출력은? (outer 참조가 있으면 private도 접근 OK)

```java
public class Outer {
    private int value;

    public Outer(int value) {
        this.value = value;
    }

    public static class Nested {
        private Outer outer;

        public Nested(Outer outer) {
            this.outer = outer;
        }

        public int read() {
            return this.outer.value;
        }
    }
}

// main
Outer outer = new Outer(42);
Outer.Nested nested = new Outer.Nested(outer);
System.out.println(nested.read());
```

```text
42
```

- outer 개체의 참조만 있으면 outer의 `private` 인스턴스 멤버도 접근 가능
- 접근 제어자는 **클래스 레벨** 개념이라 내포 클래스에서는 문제가 안 됨

## static 내포 클래스의 개체 생성 방법은?

```java
Outer.Nested nested = new Outer.Nested();
```

- 비정적 inner와 달리 **outer 개체 없이** 생성 가능
- 반대로 `outer.new Nested()` 문법은 컴파일 오류 (그건 비정적 inner용)

## 다음 코드의 출력은? (static 멤버는 바로, 인스턴스 멤버는 참조로)

```java
public class Outer {
    static int SOME_HACK = 1;       // 정적 멤버
    int ANOTHER_HACK = 2;           // 인스턴스 멤버

    public static class Nested {
        public void read(Outer outer) {
            System.out.println(SOME_HACK);
            System.out.println(outer.ANOTHER_HACK);
        }
    }
}
```

```text
1
2
```

- `SOME_HACK`(정적)은 outer 참조 없이 바로 접근 (`SOME_HACK` 또는 `Outer.SOME_HACK` 둘 다 OK)
- `ANOTHER_HACK`(인스턴스)은 outer 개체 참조를 통해서만 접근 (`outer.ANOTHER_HACK`)

## 다음 코드의 결과는? (outer 참조 없이 ANOTHER_HACK 접근)

```java
public class Outer {
    static int SOME_HACK = 1;       // 정적 멤버
    int ANOTHER_HACK = 2;           // 인스턴스 멤버

    public static class Nested {
        public void read() {
            System.out.println(SOME_HACK);       // (1)
            System.out.println(ANOTHER_HACK);    // (2)
        }
    }
}
```

컴파일 오류 ((2)에서)

- (1) `SOME_HACK`(정적)은 클래스 레벨이라 참조 없이 바로 접근 OK
- (2) `ANOTHER_HACK`(인스턴스)은 outer 개체가 있어야 접근 가능한데, static 내포 클래스는 **outer 개체 참조가 없음** → 컴파일 오류
- 이것이 static 내포 클래스가 외부 개체 참조를 (암시적으로) 갖지 않는다는 증거

## 다음 코드의 결과는? (최상위 클래스 접근 제어자)

```java
private class Foo {
}
```

컴파일 오류

- 최상위(top-level) 클래스에는 `public` 또는 생략(package-private)만 가능
- `private` / `protected`는 붙일 수 없음

## 다음 코드는 컴파일되는가? (내포 클래스 접근 제어자)

```java
public class Outer {
    private static class A {}
    protected static class B {}
    public static class C {}
    static class D {}            // package-private
}
```

컴파일·실행 잘 됨

- 내포 클래스에는 4종 접근 제어자(`private`/`protected`/`public`/생략)를 모두 붙일 수 있음
- 최상위 클래스와 다른 점
