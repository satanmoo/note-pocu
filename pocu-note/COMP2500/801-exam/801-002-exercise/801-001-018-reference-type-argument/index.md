# 참조형 인자, 열거형

## 참조형 인자에 final을 붙이면 무엇이 금지되는가?

매개변수가 가리키는 **주소(참조)** 를 다른 객체로 바꾸는 것

- 가리키는 객체의 내부 데이터(필드)는 변경 가능
- C의 `int *const ptr` 개념과 동일

## 다음 코드 실행 후 x, v.x, v.y, v.z의 값은?

```java
// Main.java
public static void main(String args[]) {
    Vector v = new Vector(1, 1, 1);

    int x = 0;
    foo(x, v);
}

public static void foo(int x, final Vector v) {
    x = 4;

    v.x = 5;
    v.y = 7;
    v.z = 6;
}
```

```text
x = 0, v.x = 5, v.y = 7, v.z = 6
```

- `x`는 값형 → 복사본이라 바깥 `x`에 영향 없음 → 0
- `v`는 참조형 → 주소에 있는 객체의 필드가 바뀜 → 5, 7, 6
- `final`은 참조 재할당만 막을 뿐, 필드 변경은 허용

## 배열을 선언·초기화하는 올바른 방법은?

```java
int[] a = new int[3];          // 크기만 지정 (0으로 초기화)
int[] b = {1, 2, 3};           // array initializer (선언과 동시에)
int[] c = new int[]{1, 2, 3};  // new + initializer
int d[] = {1, 2, 3};           // C 스타일 (가능하나 권장 X)
```

## 다음 코드의 결과는? (크기 + initializer 동시)

```java
int[] a = new int[3]{1, 2, 3};
```

컴파일 오류

- 배열 크기(`[3]`)와 array initializer(`{...}`)를 동시에 지정할 수 없음
- 크기를 쓰려면 `new int[3]`, 값을 쓰려면 `new int[]{1, 2, 3}`

## 다음 코드의 결과는? (선언 후 initializer 대입)

```java
int[] a;
a = {1, 2, 3};
```

컴파일 오류

- array initializer(`{...}`)는 **선언과 동시에만** 사용 가능
- 나중에 대입하려면 `a = new int[]{1, 2, 3};`

## 다음 코드의 결과는? (타입에 크기)

```java
int[3] a;
```

컴파일 오류

- 배열 타입 선언에 크기를 넣을 수 없음

## Java의 다차원 배열은 어떤 개념인가?

jagged array (포인터의 배열)

- 안쪽 배열의 길이가 각각 다를 수 있음

## 다음 코드의 출력은? (jagged 배열 길이)

```java
int[][] a = new int[3][];
a[0] = new int[]{1, 2};
a[1] = new int[]{1, 2, 3};
a[2] = new int[]{1};

System.out.println(a.length);
System.out.println(a[1].length);
```

```text
3
3
```

- `a.length`는 바깥 배열의 길이 → 3
- 안쪽 배열은 길이가 제각각 (2, 3, 1)

## 다음 코드의 결과는? (안쪽 배열 미할당)

```java
int[][] a = new int[3][];
System.out.println(a[0][0]);
```

런타임 오류 (NullPointerException)

- `new int[3][]`은 바깥 배열만 만들고 안쪽 배열은 `null`
- `a[0]`이 null이라 `a[0][0]` 접근 시 예외

## 다음 코드의 출력은? (직사각형 배열)

```java
int[][] a = new int[2][3];
System.out.println(a.length);
System.out.println(a[0].length);
```

```text
2
3
```

- 안쪽까지 한 번에 할당 → 바깥 2, 안쪽 3
 
## 다음 코드의 출력은? (enum 생성자 활용)

```java
public enum Coin {
    PENNY(1),
    NICKEL(5),
    DIME(10);

    private final int value;

    Coin(int value) {
        this.value = value;
    }

    public int getValue() {
        return this.value;
    }
}

// usage
System.out.println(Coin.DIME.getValue());
```

```text
10
```

- 각 원소(`PENNY`, `NICKEL`, `DIME`)가 생성자 인자로 값을 가짐
- 원소는 곧 클래스의 인스턴스 → 멤버 변수·메서드를 가질 수 있음

## 다음 enum은 컴파일되는가? (생성자 접근 제어자)

```java
public enum Coin {
    PENNY(1);

    private final int value;

    public Coin(int value) {   // public
        this.value = value;
    }
}
```

컴파일 오류

- enum 생성자는 `private`(또는 생략 = package-private)만 가능
- `public` / `protected`로 선언하면 컴파일 오류

## 다음 코드는 컴파일되는가? (enum을 new로 생성)

```java
Coin c = new Coin(1);
```

컴파일 오류

- 열거형 개체는 `new`로 생성할 수 없음
- 생성자가 암시적 `private`이라 외부에서 직접 호출 불가 → 개발자가 임의로 인스턴스를 만드는 것을 방지
- 사용은 정의된 원소(`Coin.PENNY` 등)로만 함

## 다음 enum은 컴파일되는가? (원소에 정수 대입, C 스타일)

```java
public enum Color {
    RED = 1,
    GREEN = 2
}
```

컴파일 오류

- C/C++처럼 원소에 임의의 정수 값을 직접 대입하는 문법은 없음
- 값을 부여하려면 생성자를 사용해야 함 (위 `Coin` 예시처럼)

## 다음 코드의 결과는?

```java
var n = {1, 2, 3};
```

컴파일 오류

- `var`와 array initializer(`{...}`)는 함께 쓸 수 없음
- array initializer는 좌변의 배열 타입을 보고 자기 타입을 정하는데, `var`는 타입이 없음
- `int[] n = {1, 2, 3};` 처럼 좌변에 배열 타입이 있으면 OK

## var를 대입 없이 선언하면?

컴파일 오류

- `var`는 대입값으로 타입을 추론하므로, 선언과 대입을 동시에 해야 함
