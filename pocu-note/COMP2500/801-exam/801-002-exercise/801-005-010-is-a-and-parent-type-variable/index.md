# is-a 관계와 부모형 변수

전제 클래스 (아래 문제 공통)

```java
public class Person {
    public void sayHello() {
        System.out.println("hello");
    }
}

public class Student extends Person {
    public void study() {
        System.out.println("study");
    }
}
```

## 다음 코드의 결과는? (자식 → 부모 대입)

```java
Student s = new Student();
Person p = s;
```

컴파일·실행 잘 됨

- 자식 개체를 부모 변수에 대입하는 것은 OK (암시적 업캐스팅)
- 자식은 부모의 일종이므로(is-a) 컴파일러가 암시적으로 캐스팅해 줌
- 부모 타입 배열에 자식 개체를 넣는 것도 같은 이유로 OK

## 다음 코드의 결과는? (부모 → 자식 대입)

```java
Person p = new Person();
Student s = p;
```

컴파일 오류

- 부모는 자식이 아님 → is-a 위배
- 부모를 자식 변수에 대입하면 실행 중 무슨 일이 생길지 몰라 컴파일러가 막음 (명시적 캐스팅이 필요)

## 다음 코드의 결과는? (부모 변수에서 자식 메서드 호출)

```java
Person p = new Student();
p.study();
```

컴파일 오류

- 컴파일러는 변수의 **정적 타입**(`Person`)을 기준으로 판단
- `Person` 타입에는 `study()`가 없어서 오류 (실제 개체가 `Student`여도 마찬가지)
- 부모 입장에서 자신을 상속한 자식을 특정할 수 없기 때문

## 다음 코드의 결과는? (부모 변수에 담았다가 다시 자식 변수로)

```java
Student s = new Student();
Person p = s;
Student s2 = p;
```

컴파일 오류 (마지막 줄)

- `p`의 정적 타입이 `Person`이라 자식 변수 `s2`에 그냥 대입 불가
- 실제 개체가 `Student`여도 컴파일러는 변수 타입만 보고 판단 → 명시적 캐스팅이 필요
