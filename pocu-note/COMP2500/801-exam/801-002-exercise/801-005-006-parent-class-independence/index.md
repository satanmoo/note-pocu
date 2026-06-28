# 부모 클래스의 독립성

## 다음 코드의 결과는? (super() 전에 다른 코드 실행)

```java
public class Teacher extends Person {
    private Department department;

    public Teacher(String firstName, String lastName, Department department) {
        this.department = department;
        super(firstName, lastName);
    }
}
```

컴파일 오류

- `super(...)`는 자식 생성자의 **첫 줄**이어야 함
- 앞에 `this.department = department;`가 있어서 오류
- 부모 → 자식 초기화 순서를 강제하기 위함

## 위 코드를 고치는 방법은?

```java
public Teacher(String firstName, String lastName, Department department) {
    super(firstName, lastName);   // 첫 줄로
    this.department = department;
}
```

- 참고: `super("하드코딩값", "하드코딩값")`처럼 부모 생성자에 고정값을 넘겨도 문법 오류는 없음

## 다음 다이어그램은 무슨 관계인가?

```text
┌──────────┐
│ Person   │
└──────────┘
     △
     │     (속이 빈 세모 화살표)
┌──────────┐
│ Student  │
└──────────┘
```

상속 (is-a)

- 속이 빈 세모(△) 화살표로 표시
- 화살표는 자식(`Student`)에서 부모(`Person`)를 가리킴 (세모가 부모 쪽)
- `Student` is-a `Person`

## 상속(is-a)과 컴포지션(has-a)의 다이어그램 표기 차이는?

- 상속(is-a): 속이 빈 **세모(△)** 화살표 — 자식 → 부모
- 컴포지션/집합(has-a): 빈 **다이아몬드(◇)** — 가지고 있는 쪽에 붙음
