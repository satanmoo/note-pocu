---
title: final 키워드
---
# final 키워드

## final 메소드 매개변수에 값을 재할당하면?

컴파일 오류

- 매개변수도 final이면 메소드 안에서 다시 대입할 수 없음

## final 지역 변수는 반드시 선언과 동시에 초기화해야 하는가?

NO

- 사용하기 전에만 초기화하면 됨
- 단, 초기화하지 않고 사용하면 컴파일 오류

## 다음 코드의 결과는?

```java
public int fun() {
    final int MAX_CLASS;
    System.out.println(MAX_CLASS);

    return 0;
}
```

컴파일 오류

- final 지역 변수 `MAX_CLASS`를 초기화하지 않고 사용함

## final 클래스 멤버 변수는 어디에서 초기화할 수 있는가?

- 선언과 동시에
- 생성자에서

```java
public class StudentManager {
    final int MAX_STUDENT;  // 선언만

    public StudentManager() {
        MAX_STUDENT = 10;   // 생성자에서 초기화 OK
    }
}
```

- 선언 시 초기화(`final int MAX_STUDENT = 10;`)와 런타임 동작은 동일
