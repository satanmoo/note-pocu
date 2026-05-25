---
aliases:
  - 부모 클래스의 독립성
tags:
  - COMP2500
  - week5
---
# 부모 클래스의 독립성

## 여전히 Person(부모 클래스) 개체도 만들 수 있음

![](pocu-note/COMP2500/005-inheritance/005-006-parent-class-independence/images/parent-class-independence-1.png)

부모 클래스를 상속받아 자식 클래스를 만들고, 여전히 부모 클래스의 인스턴스를 생성할 수 있음

기본적으로 Person 개체는 Student 개체의 멤버 접근할 수 없음
- 부모 클래스도 외부 클래스임
- 접근 제어자로 이를 접근할 수 있게 만들 수 있음
	- `public`
	- `protected`
	- [[pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/index|접근 제어자]] 참고

## Teacher(자식 클래스) 

![](pocu-note/COMP2500/005-inheritance/005-006-parent-class-independence/images/parent-class-independence-2.png)
![](pocu-note/COMP2500/005-inheritance/005-006-parent-class-independence/images/parent-class-independence-3.png)

```java
public class Teacher extends Person {
    private Department department;

    public Teacher(String firstName, String lastName, Department department) {
        this.department = department;
        super(firstName, lastName);
    }

    public Department getDepartment() {
        return this.department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
```

이 코드처럼 부모 생성자를 먼저 호출하지 않고, 자식 생성자의 코드를 실행하면 **컴파일 오류** 발생
- 부모 -> 자식 초기화 순서 강제
- [[pocu-note/COMP2500/005-inheritance/005-005-constructor-call-order/index|생성자 호출 순서]] 참고

![](pocu-note/COMP2500/005-inheritance/005-006-parent-class-independence/images/parent-class-independence-4.png)

## 상속을 적용한 클래스 다이어그램

![](pocu-note/COMP2500/005-inheritance/005-006-parent-class-independence/images/parent-class-independence-5.png)
![](pocu-note/COMP2500/005-inheritance/005-006-parent-class-independence/images/parent-class-independence-6.png)

```java
public class Teacher extends Person {
    private Department department;

    public Teacher(Department department) {
        super("하드코딩값", "하드코딩값");
        this.department = department;
    }

    public Department getDepartment() {
        return this.department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
```

위와 같이 자식 클래스(여기선 Teacher 클래스만 예시로 듬)에서 매개변수로 String을 전달받지 않고, 단순히 하드코딩된 값을 부모 생성자에 넘겨도 문법적 오류는 없음
