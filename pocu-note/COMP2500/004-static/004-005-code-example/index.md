---
tags:
  - COMP2500
  - week4
aliases:
  - "코드보기: 정적 Logger 클래스"
---
# 코드보기: 정적 Logger 클래스

다른 사람에게 프로그램을 배포하는 상황을 가정
- 로그를 화면에 출력할 경우 다른 사람 컴퓨터를 직접 볼 수 없기 때문에 파일에 로그를 씀
    - 로그가 필요하면 사용자에게 로그 파일을 요청
		- 참고로 최근에는 클라우드 저장소에 로그를 바로 남겨서 사용자에게 로그 파일을 보내달라고 부탁하지 않아도 됨
		- 그래서 웹 사이트 돌아다니다보면 사용자의 정보를 수집하는 동의하는지 물어보기도 함

```java
public enum LogLevel {
    DEBUG(0),
    INFORMATION(1),
    WARNING(2),
    ERROR(3),
    CRITICAL(4);

    private int level;

    public int getLogLevel() {
        return this.level;
    }

    private LogLevel(int level) {
        this.level = level;
    }
}

public class Main {  
    public static void main(String[] args) {  
        LogLevel level = LogLevel.DEBUG;  
        System.out.println(level);  
		LogLevel level2 = new LogLevel(0); // 컴파일 에러
    }  
}
```

로그 레벨을 n으로 설정하면 n이상 레벨만 출력

열거형에서 주의할 점
1. 멤버 변수와 메서드를 가질 경우 마지막 상수 끝에 `;`를 붙여야함
2. 생성자는 암묵적으로 private
	- public, protected 불가능
	- `new` 로 enum 생성할 수 없음


## 복습 퀴즈 1

```java
package academy.pocu;  
  
// Student.java  
public class Student {  
    // 코드 생략  
}  
  
// StudentManager.java  
package academy.pocu;  
import java.util.ArrayList;  
  
public class StudentManager {  
    private static int numTotalEnrolled;  
    private ArrayList<Student> students = new ArrayList<>();  
  
    public void enroll(Student student) {  
        this.students.add(student);             // (1)  
        ++this.numTotalEnrolled;                // (2)  
    }  
  
    public int getStudentCount() {  
        return this.students.size();            // (3)  
    }  
  
    public static int getTotalEnrolled() {  
        return StudentManager.numTotalEnrolled; // (4)  
    }  
  
    public static void reset() {  
        StudentManager.numTotalEnrolled = 0;    // (5)  
        this.students.clear();                  // (6)  
    }  
}
```

### 1. 위 코드에서 오류가 나는 곳은?

(2) 정적 멤버 변수는 `this`로 접근할 수 있음
- [[pocu-note/COMP2500/004-static/004-003-static-variable/index#정적 멤버 변수|정적 멤버 변수]] 참고
(6) 정적 멤버 함수에서 `this`가 붙은 개체 멤버 변수에 접근할 수 없음
- [[pocu-note/COMP2500/004-static/004-004-access-to-static-variable/index|정적 메서드에서 멤버 변수 접근하기]] 참고

### 2. 위 코드에서 난 오류는 무슨 오류인가요?

컴파일 오류

## 복습 퀴즈 2

### 1. 여러분은 문자열을 표현하기 위해 MyString이란 클래스를 만들었습니다. 이 중에서 정적 메서드로 만들기 적합한 메서드는 무엇인가요?

![Pasted image 20260520030126.png](pocu-note/COMP2500/004-static/004-005-code-example/images/code-example-1.png)

나머지는 자기 자신의 값이 필요함
- 개체가 필요

반면 정답의 경우 매개변수로 들어오는 문자열에 연산을 수행