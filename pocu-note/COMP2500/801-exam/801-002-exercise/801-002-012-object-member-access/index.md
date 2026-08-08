---
title: 개체 멤버에 접근하기, 참조형
---
# 개체 멤버에 접근하기, 참조형

## 다음 코드의 출력은? (기본형 swap)

```java
static void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}

// main
int x = 1;
int y = 2;
swap(x, y);
System.out.println(x + " " + y);
```

```text
1 2
```

- 기본형은 값(복사본)이 전달됨 → 함수 안에서 바꿔도 바깥 `x`, `y`에 영향 없음
- 그래서 Java에서는 메서드로 두 기본형을 swap할 수 없음

## 다음 코드의 출력은? (mutable holder로 swap)

```java
public class IntRef {
    int v;
}

static void swap(IntRef a, IntRef b) {
    int temp = a.v;
    a.v = b.v;
    b.v = temp;
}

// main
IntRef x = new IntRef();
x.v = 1;
IntRef y = new IntRef();
y.v = 2;
swap(x, y);
System.out.println(x.v + " " + y.v);
```

```text
2 1
```

- 참조형이라 주소가 복사됨 → `a`, `b`는 바깥 `x`, `y`와 같은 개체를 가리킴
- 개체 내부의 값(`.v`)을 바꾸므로 바깥에도 반영됨
- Java는 기본형 포인터가 없어 이렇게 **mutable holder(IntRef)** 를 만들어야 swap 가능

## 다음 코드의 출력은? (참조 자체를 swap)

```java
static void swap(IntRef a, IntRef b) {
    IntRef temp = a;
    a = b;
    b = temp;
}

// main
IntRef x = new IntRef();
x.v = 1;
IntRef y = new IntRef();
y.v = 2;
swap(x, y);
System.out.println(x.v + " " + y.v);
```

```text
1 2
```

- 함수 안에서 바꾸는 건 **복사된 참조(a, b)** 일 뿐 → 바깥 `x`, `y`는 그대로
- swap이 되려면 참조 자체가 아니라 개체 내부의 값(`.v`)을 바꿔야 함
