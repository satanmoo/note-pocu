---
tags:
  - COMP2500
  - week1
aliases:
  - final 키워드
---
# final 키워드

## Java의 상수형 변수: final 키워드

![img_73.png](pocu-note/COMP2500/001-java-syntax/001-012-final/images/img_73.png)
![img_74.png](pocu-note/COMP2500/001-java-syntax/001-012-final/images/img_74.png)
## final 멤버 변수

![img_75.png](pocu-note/COMP2500/001-java-syntax/001-012-final/images/img_75.png)
![img_76.png](pocu-note/COMP2500/001-java-syntax/001-012-final/images/img_76.png)

## final 메소드 매개변수

![img_77.png](pocu-note/COMP2500/001-java-syntax/001-012-final/images/img_77.png)
![img_78.png](pocu-note/COMP2500/001-java-syntax/001-012-final/images/img_78.png)

## final 변수의 초기화

![img_79.png](pocu-note/COMP2500/001-java-syntax/001-012-final/images/img_79.png)

기본적으로 선언과 동시에 초기화

![img_80.png](pocu-note/COMP2500/001-java-syntax/001-012-final/images/img_80.png)

final 지역 변수의 경우 사용하기 전에만 초기화 하면 됨
- 초기화 하지 않고 final 지역 변수를 사용하면 컴파일 에러

```java
public int fun() {
    final int MAX_CLASS;
    System.out.println(MAX_CLASS);  // COMPILE ERROR

    return 0;
}
```

![img_81.png](pocu-note/COMP2500/001-java-syntax/001-012-final/images/img_81.png)

final 클래스 멤버 변수의 경우 **생성자에서** 초기화 가능

![img_82.png](pocu-note/COMP2500/001-java-syntax/001-012-final/images/img_82.png)

```java
public class StudentManager {
    final int MAX_STUDENT;  // OK

    public void printScores() {
        final int MAX_CLASS;  // OK
        MAX_CLASS = 5;  // OK
        System.out.printf("%d", MAX_CLASS);  // OK
    }

    public StudentManager() {
        MAX_STUDENT = 10;  // OK
    }
}
```

```java

public class StudentManager {
    final int MAX_STUDENT = 10;  // OK

    public void printScores() {
        final int MAX_CLASS;  // OK
        MAX_CLASS = 5;  // OK
        System.out.printf("%d", MAX_CLASS);  // OK
    }
}
```

위 두 코드의 런타임 동작은 동일함
