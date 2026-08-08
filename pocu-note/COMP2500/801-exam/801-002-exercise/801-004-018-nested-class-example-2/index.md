---
title: 비정적 내포 클래스를 사용할 경우
---
# 비정적 내포 클래스를 사용할 경우

## 다음 코드의 출력은? (inner ↔ outer 서로 private 접근)

```java
public class Outer {
    private int outerVal = 10;

    public class Inner {
        private int innerVal = 20;

        public int sum() {
            return outerVal + innerVal;   // inner가 outer의 private 접근
        }
    }

    public int readInner(Inner inner) {
        return inner.innerVal;            // outer가 inner의 private 접근
    }
}

// main
Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
System.out.println(inner.sum());
System.out.println(outer.readInner(inner));
```

```text
30
20
```

- 비정적 inner 클래스는 outer의 멤버에 접근 가능 (`private`여도 OK)
- outer도 inner의 `private` 멤버에 접근 가능 → **서로** private 접근 가능
- inner 개체는 자신을 만든 outer 개체의 참조를 내부에 저장하고 있음

## 비정적 내포 클래스의 개체 생성 문법은? (괴랄한 개체 생성)

```java
Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
```

- `<외부 클래스 개체>.new Inner()` 형태로 생성
- 외부 클래스 개체가 먼저 있어야 inner 개체를 만들 수 있음

## 다음 코드의 결과는? (외부 개체 없이 inner 생성)

```java
Outer.Inner inner = new Outer.Inner();
```

컴파일 오류

- 비정적 inner 클래스는 외부 클래스 개체 없이 생성할 수 없음
- `outer.new Inner()` 형태로 생성해야 함

## 다음 코드의 결과는? (비정적 inner 클래스의 static 멤버)

```java
public class Outer {
    static int outerStatic = 1;

    public class Inner {
        static int innerStatic = 2;
    }
}
```

컴파일 오류 (Java 15 이하)

- 비정적 inner 클래스는 자신의 static 멤버 변수를 가질 수 없음 (단, `static final` 상수는 예외)
- 그래서 "서로서로 static 멤버"는 inner 쪽에서 불가능
- 단, inner는 outer의 static 멤버(`outerStatic`)에는 자유롭게 접근 가능
- (Java 16+부터는 inner 클래스도 static 멤버를 가질 수 있게 바뀜)

## 다음 코드의 출력은? (inner가 outer의 static 접근)

```java
public class Outer {
    private static int outerStatic = 100;

    public class Inner {
        public int read() {
            return outerStatic;
        }
    }
}

// main
Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
System.out.println(inner.read());
```

```text
100
```

- inner는 outer의 static 멤버에 접근 가능 (`private static`이어도 OK)
- `outerStatic`, `Outer.outerStatic` 둘 다 가능
