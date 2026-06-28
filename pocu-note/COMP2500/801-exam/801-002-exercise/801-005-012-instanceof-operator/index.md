# instanceof 연산자

전제 클래스 (아래 문제 공통)

```java
public class A {}
public class AA extends A {}     // A의 자식
public class AB extends A {}     // A의 자식 (AA의 형제)
public class AAA extends AA {}   // AA의 자식
```

```text
        A
       / \
     AA   AB
     /
   AAA
```

## 다음 코드의 출력은? (자신·부모에 대해 instanceof)

```java
AAA obj = new AAA();
System.out.println(obj instanceof AAA);
System.out.println(obj instanceof AA);
System.out.println(obj instanceof A);
```

```text
true
true
true
```

- `instanceof`는 실제 타입이 **그 클래스이거나 자식**이면 true
- `AAA`는 `AA`, `A`와 is-a 관계 → 부모 클래스에 대해서도 true (묵시적 업캐스팅이 되는 관계면 true)

## 다음 코드의 출력은? (부모 개체를 자식으로 검사)

```java
A a = new A();
System.out.println(a instanceof A);
System.out.println(a instanceof AA);
```

```text
true
false
```

- 실제 개체가 `A`이므로 자식 `AA`에 대해서는 false (부모는 자식이 아님)

## 다음 코드의 출력은? (형제 검사)

```java
A ab = new AB();
System.out.println(ab instanceof AB);
System.out.println(ab instanceof AA);
System.out.println(ab instanceof A);
```

```text
true
false
true
```

- `AB`와 `AA`는 형제(is-a 아님) → false
- 자신(`AB`)·부모(`A`)에 대해서는 true

## 다음 코드의 출력은? (정적 타입은 부모, 실제 타입은 자식)

```java
A x = new AAA();
System.out.println(x instanceof AAA);
```

```text
true
```

- 변수 `x`의 정적 타입은 `A`지만, `instanceof`는 **실행 중 타입**(`AAA`)으로 판단 (RTTI)

## 다음 코드의 출력은? (instanceof로 ClassCastException 방지)

```java
A obj = new AB();
if (obj instanceof AA) {
    AA aa = (AA) obj;
    System.out.println("AA");
} else {
    System.out.println("not AA");
}
```

```text
not AA
```

- 실제 개체가 `AB`라 `obj instanceof AA`는 false → 캐스팅하지 않음
- 캐스팅 전에 `instanceof`로 확인하면 `ClassCastException`을 방지할 수 있음
