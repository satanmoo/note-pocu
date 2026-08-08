---
title: 상속하기
---
# 상속하기

## 다음 코드의 결과는? (super() 자동 삽입 + 기본 생성자 없음)

```java
public class Person {
    private String name;

    public Person(String name) {
        this.name = name;
    }
}

public class Student extends Person {
    private int grade;

    public Student(int grade) {
        this.grade = grade;
    }
}
```

컴파일 오류

두 규칙이 맞물려 발생:
- 자동 삽입 규칙: 자식 생성자 첫 줄이 `super(...)`나 `this(...)`가 아니면, 컴파일러가 암시적으로 `super()`(인자 없는 호출)를 첫 줄에 넣음
- 기본 생성자 규칙: 클래스에 생성자를 하나라도 선언하면 컴파일러가 기본 생성자를 자동 생성하지 않음

→ `Person`은 생성자를 선언했으므로 기본 생성자(`Person()`)가 없음. `Student` 생성자에 `super(...)`가 없어 컴파일러가 `super()`를 넣지만, `Person()`이 없어서 오류.

## 위 코드를 고치는 방법은?

`Student` 생성자에서 부모 생성자를 명시적으로 호출

```java
public Student(String name, int grade) {
    super(name);          // 부모 생성자 명시 호출 (첫 줄)
    this.grade = grade;
}
```

- 또는 `Person`에 기본 생성자 `public Person() {}`를 추가해도 됨

## 다음 코드의 출력은? (this()로 위임 후 super()로 부모 초기화)

```java
public class Person {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}

public class Student extends Person {
    private int grade;

    public Student(String name) {
        this(name, 1);        // 다른 생성자로 위임
    }

    public Student(String name, int grade) {
        super(name);          // 부모 생성자 호출
        this.grade = grade;
    }

    public int getGrade() {
        return this.grade;
    }
}

// main
Student s = new Student("Kim");
System.out.println(s.getName() + " " + s.getGrade());
```

```text
Kim 1
```

- `Student("Kim")` → `this(name, 1)`로 위임 → 위임받은 생성자의 `super(name)`이 부모(Person) 초기화 → grade=1
- 부모를 초기화하는 `super(...)`는 위임받는 생성자에 있으면 됨
- 주의: `this(...)`와 `super(...)`는 둘 다 생성자의 **첫 줄**이어야 하므로 한 생성자에서 동시에 쓸 수 없음
