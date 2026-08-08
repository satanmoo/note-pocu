---
title: 정적 메서드에서 멤버 변수 접근하기
---
# 정적 메서드에서 멤버 변수 접근하기

## 다음 코드의 결과는? (정적 메서드에서 멤버 변수 접근)

```java
public class Counter {
    private int count;           // 인스턴스 멤버 변수
    private static int total;    // 정적 멤버 변수

    public static void increase() {
        count++;     // (1)
        total++;     // (2)
    }
}
```

컴파일 오류 ((1)에서)

- (1) 정적 메서드에서 인스턴스 멤버 변수 `count`에 접근 불가
  - 정적 메서드는 클래스 레벨이라 **어떤 개체인지 특정할 수 없음** (`this`가 없음)
- (2) `total`은 정적 변수라 접근 OK
- 같은 이유로 정적 메서드에서 인스턴스 메서드 호출도 불가

## 다음 코드의 결과는? (정적 메서드에서 this로 정적 변수 접근)

```java
public class Counter {
    private static int total;

    public static void increase() {
        this.total++;
    }
}
```

컴파일 오류

- 원인은 정적 변수 접근이 아니라, **정적 메서드에서 `this` 키워드 사용 자체가 불가능**하기 때문
	- 정적 메서드는 특정 개체와 연결되지 않아 `this`가 없음
- 정적 변수는 `this` 없이 `total` 또는 `Counter.total`로 접근해야 함

## 전역 변수(global)와 비교한 static 멤버의 장점은?

- 접근 제어 가능: 전역 변수와 달리 `private` 등 접근 제어자를 붙일 수 있음 (캡슐화)
- 네임스페이스: 클래스를 네임스페이스처럼 활용 → 이름 충돌을 방지 (전역은 충돌 위험)
