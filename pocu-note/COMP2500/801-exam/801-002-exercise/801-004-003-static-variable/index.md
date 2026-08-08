---
title: 정적 멤버 변수
---
# 정적 멤버 변수

## 다음 코드의 결과는? (필드 이름 충돌)

```java
public class Pig {
    private int x;
    private static int x;
}
```

컴파일 오류

- 클래스 본문에 같은 이름의 필드를 두 개 선언할 수 없음
- `static` 여부·접근 제어자에 상관없이 클래스 안의 모든 필드는 **같은 namespace** (JLS §8.3)

## 정적 멤버 변수는 UML 클래스 다이어그램에서 어떻게 표시하는가?

밑줄(underline)

- 정적 메서드와 동일하게, 정적 멤버 변수도 밑줄로 표시

## 다음 다이어그램에서 정적 멤버 변수는 무엇인가?

```text
┌──────────────────────────┐
│ Pig
├──────────────────────────┤
│ - numCreated : int = 0
│   ──────────────────────   (밑줄)
│ - name : String
└──────────────────────────┘
```

`numCreated : int`

- `numCreated`에는 밑줄이 있으므로 정적 멤버 변수
- `name`은 밑줄이 없으므로 일반(인스턴스) 멤버 변수

## 다음 코드의 출력은? (개체 개수 세기)

```java
public class Pig {
    private static int numCreated = 0;

    public Pig() {
        numCreated++;
    }

    public static int getNumCreated() {
        return numCreated;
    }
}

// main
Pig a = new Pig();
Pig b = new Pig();
Pig c = new Pig();
System.out.println(Pig.getNumCreated());
```

```text
3
```

- 생성자가 호출될 때마다 정적 변수 `numCreated`가 증가 → 생성된 개체 개수가 됨
- 정적 변수는 모든 개체가 공유함 (클래스 소속)
- 생성자 안에서 `numCreated`, `this.numCreated`, `Pig.numCreated` 모두 같은 정적 변수를 가리킴 (범위 탐색으로 클래스 범위에서 찾음)
