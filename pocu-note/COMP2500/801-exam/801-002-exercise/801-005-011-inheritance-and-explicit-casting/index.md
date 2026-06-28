# 상속과 명시적 캐스팅

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

## 다음 코드의 결과는? (부모 → 자식, 명시적 캐스팅 없이)

```java
A a = new AA();
AA aa = a;
```

컴파일 오류

- 부모 타입(`A`)을 자식 타입(`AA`) 변수에 그냥 대입 불가
- 부모 → 자식은 반드시 **명시적 캐스팅** 필요: `AA aa = (AA) a;`

## 다음 코드의 결과는? (자식 → 부모 → 자식 왕복)

```java
AA aa = new AA();
A a = aa;            // 자식 → 부모 (암시적 OK)
AA aa2 = (AA) a;     // 부모 → 자식 (명시적 캐스팅)
```

컴파일·실행 잘 됨

- 실제 개체가 `AA`이므로 `(AA)` 다운캐스팅이 성공
- 올라갈 때(업캐스팅)는 암시적, 내려올 때(다운캐스팅)는 명시적

## 다음 코드의 결과는? (형제 간 캐스팅)

```java
AA aa = new AA();
AB ab = (AB) aa;
```

컴파일 오류

- `AA`와 `AB`는 **형제**(직접 상속 관계가 아님) → 실행 중에도 호환 가능성 0%
- 가능성이 없으므로 명시적 캐스팅을 써도 컴파일러가 미리 막음

## 다음 코드의 결과는? (다운캐스팅 + 실제 타입 불일치)

```java
A a = new AB();
AA aa = (AA) a;
```

런타임 오류 (ClassCastException)

- `A` → `AA`는 상속 관계라 컴파일은 통과 (실행 중 `AA`일 가능성이 있으므로)
- 하지만 실제 개체는 `AB`라 `AA`로 캐스팅할 수 없음 → 실행 중 `ClassCastException`
- 컴파일러가 잡지 못하는 문제는 런타임 예외로 발생
