# 문자열 비교

## 문자열을 == 로 비교하면 안 되는 이유는?

`==`는 참조형의 경우 **주소(참조)**를 비교함

- 실제 문자 내용을 비교하지 않음
- 내용을 비교하려면 `equals()`를 써야 함

## equals() 메서드는 무엇을 비교하는가?

문자열의 내용(실제 문자들)을 비교

- 주소가 아니라 값을 비교

## 다음 코드의 결과는?

```java
// Vector.java
public class Vector {
    public int x;
    public int y;

    public Vector(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

// Main.java
Vector v0 = new Vector(1, 1);
Vector v1 = new Vector(2, 2);

Vector v2 = v0 + v1;
```

컴파일 오류

- Java는 연산자 오버로딩을 지원하지 않음
- 예외적으로 String의 `+` 연산만 built-in으로 제공

## String의 + 연산이 성능에 좋지 않은 이유는?

String은 immutable이라 `+` 할 때마다 새로운 문자열이 생성됨

## >> 와 >>> 의 차이는?

- `>>` : 오른쪽 시프트 시 최상위 비트를 **기존 부호 비트와 동일한 값**으로 채움
- `>>>` : 최상위 비트를 **0**으로 채움
- Java에는 unsigned 자료형이 없어서 `>>>`를 제공함
- `<<<`는 필요 없음 (맨 오른쪽 비트는 부호와 무관)
