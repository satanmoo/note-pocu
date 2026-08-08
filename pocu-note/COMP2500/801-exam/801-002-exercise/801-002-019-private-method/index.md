---
title: 일반적인 접근 제어자, private 메서드의 용도
---
# 일반적인 접근 제어자, private 메서드의 용도

## private 멤버 함수(메서드)를 사용하는 목적은?

- 클래스 내부에서만 쓰는 보조(헬퍼) 로직을 분리하고 재사용
- 외부에 노출할 필요 없는 구현 세부사항을 숨김 (캡슐화)
- 외부에서 호출하지 못하게 막아 잘못된 사용을 방지

## 다음 코드의 결과는? (private 생성자)

```java
public class Singleton {
    private Singleton() {
    }
}

// main
Singleton s = new Singleton();
```

컴파일 오류

- 생성자가 `private`이라 클래스 외부에서 `new`로 생성할 수 없음
- 용도: 외부에서 무분별하게 개체를 생성하지 못하게 막음 (싱글턴, 정적 팩토리 메서드, 유틸리티 클래스 등)

## 다음 코드의 결과는? (private 생성자 + 정적 팩토리)

```java
public class Singleton {
    private Singleton() {
    }

    public static Singleton create() {
        return new Singleton();
    }
}

// main
Singleton s = Singleton.create();
```

컴파일·실행 잘 됨

- `private` 생성자라도 **같은 클래스 내부**(static 메서드)에서는 호출 가능
- 외부는 `create()`를 통해서만 개체를 얻음

## private에서 말하는 "내부"는 클래스 내부인가, 개체 내부인가?

클래스 내부

- 접근 제어자는 **클래스 레벨** (개체 단위가 아님)
- 따라서 같은 클래스의 다른 개체가 가진 private 멤버에도 접근 가능

## 다음 코드의 출력은? (같은 클래스를 매개변수로 받아 private 접근)

```java
public class Vector {
    private int x;
    private int y;

    public Vector(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public Vector add(Vector other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    public int getX() { return this.x; }
    public int getY() { return this.y; }
}

// main
Vector a = new Vector(1, 2);
Vector b = new Vector(3, 4);
Vector c = a.add(b);
System.out.println(c.getX() + " " + c.getY());
```

```text
4 6
```

- `other.x`, `other.y`는 private이지만 **같은 클래스**라 접근 가능 (접근 제어자는 클래스 레벨)
