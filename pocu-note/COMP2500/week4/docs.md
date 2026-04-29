# Week4

## Java and global variable

![img.png](pocu-note/COMP2500/week4/image/img.png)
![img_1.png](pocu-note/COMP2500/week4/image/img_1.png)
![img_2.png](pocu-note/COMP2500/week4/image/img_2.png)

## The inconvenience of everything being an object

![img_3.png](pocu-note/COMP2500/week4/image/img_3.png)

전역적이라는 것은 프로그램이 실행 중 globally 하나만 존재함을 의미  
모든 것이 개체일 때는 전역적이라는 개념이 없고 2가지 불편함이 존재

1. 개체를 만들 필요가 없을 때
2. 클래스 단위에서 행동

## 첫번째 불편함 해결: Static member function

![img_4.png](pocu-note/COMP2500/week4/image/img_4.png)
![img_5.png](pocu-note/COMP2500/week4/image/img_5.png)
![img_6.png](pocu-note/COMP2500/week4/image/img_6.png)

정적 멤버 변수는 개체가 아니라 클래스 소속  
new로 개체를 만들지 않고 호출할 수 있음  
개체를 만들고 정적 멤버 변수를 호출할 수 있으나 권장하지는 않음

```java
public class Pig {
    static public int boom() {
        return 0;
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        Pig pig = new Pig();
        Pig.boom(); // 개체를 생성하지 않고 정적 멤버 함수 호출
        pig.boom(); // 권장 X
    }
}
```

![img_7.png](pocu-note/COMP2500/week4/image/img_7.png)

클래스 다이어그램에서 멤버 함수에 밑줄이 있으면 정적

### private 생성자로 개체 생성 금지하기

![img_8.png](pocu-note/COMP2500/week4/image/img_8.png)
![img_9.png](pocu-note/COMP2500/week4/image/img_9.png)
![img_10.png](pocu-note/COMP2500/week4/image/img_10.png)

기본 생성자를 클래스 다이어그램에 포함하기  
기본 생성자가 public이라서 외부에서 생성자를 호출해 개체를 생성할 수 있음

![img_11.png](pocu-note/COMP2500/week4/image/img_11.png)
![img_12.png](pocu-note/COMP2500/week4/image/img_12.png)
![img_13.png](pocu-note/COMP2500/week4/image/img_13.png)

정적 멤버 변수를 개체에서 호출할 수 있는 이유는 클래스는 **단 하나만** 존재하기 때문

![img_14.png](pocu-note/COMP2500/week4/image/img_14.png)
![img_15.png](pocu-note/COMP2500/week4/image/img_15.png)
![img_16.png](pocu-note/COMP2500/week4/image/img_16.png)
![img_17.png](pocu-note/COMP2500/week4/image/img_17.png)
![img_18.png](pocu-note/COMP2500/week4/image/img_18.png)
![img_19.png](pocu-note/COMP2500/week4/image/img_19.png)

private 생성자를 사용하는 방법은 hack  
static class를 지원하는 언어는 hack을 사용하지 않아도 됨

![img_20.png](pocu-note/COMP2500/week4/image/img_20.png)

## 두번째 불편함 해결: static member variable

![img_21.png](pocu-note/COMP2500/week4/image/img_21.png)
![img_22.png](pocu-note/COMP2500/week4/image/img_22.png)

개체의 개수를 알고 싶을 때 개체보다 상위 개념인 클래스 단위의 작업이 필요함

![img_23.png](pocu-note/COMP2500/week4/image/img_23.png)
![img_24.png](pocu-note/COMP2500/week4/image/img_24.png)
![img_25.png](pocu-note/COMP2500/week4/image/img_25.png)

개체의 멤버 변수는 다른 개체의 정보를 반영할 수 없음

![img_26.png](pocu-note/COMP2500/week4/image/img_26.png)
![img_27.png](pocu-note/COMP2500/week4/image/img_27.png)
![img_28.png](pocu-note/COMP2500/week4/image/img_28.png)
![img_29.png](pocu-note/COMP2500/week4/image/img_29.png)
![img_30.png](pocu-note/COMP2500/week4/image/img_30.png)

개체를 생성할 때 호출되는 함수는 생성자  
생성자를 호출할 때 정적 변수에 값을 더하면 개체의 개수를 셀 수 있음

- 참고로 생성자 블록에서 numCreated 지역 변수가 없기 때문에 상위 블록으로 올라감
- 상위 블록에서 numCreated 변수를 찾고 값을 증가
- this, 클래스 명으로 모두 접근할 수 있는 이유는 개체는 클래스를 알 수 있기 때문, 즉 개체 입장에서 클래스는 하나임
- 변수 선언은 클래스 레벨에서 하기 때문에 static 멤버 변수와 그냥 멤버 변수의 이름이 같으면 **컴파일 에러**

```java
public class Pig {

    private int x;
    static private int x;   // COMPILE ERROR

    static public int boom() {
        return 0;
    }
}
```

### 정적 멤버 변수에 접근하는 정적 멤버 함수

![img_31.png](pocu-note/COMP2500/week4/image/img_31.png)
![img_32.png](pocu-note/COMP2500/week4/image/img_32.png)
![img_33.png](pocu-note/COMP2500/week4/image/img_33.png)

정적 멤버 함수에서 정적이 아닌 그냥 멤버 변수에 접근할 수 없음

![img_34.png](pocu-note/COMP2500/week4/image/img_34.png)
![img_35.png](pocu-note/COMP2500/week4/image/img_35.png)
![img_36.png](pocu-note/COMP2500/week4/image/img_36.png)
![img_37.png](pocu-note/COMP2500/week4/image/img_37.png)

클래스 레벨에서 개체를 특정할 수 없음

## static 요약 정리

![img_38.png](pocu-note/COMP2500/week4/image/img_38.png)
![img_39.png](pocu-note/COMP2500/week4/image/img_39.png)
![img_40.png](pocu-note/COMP2500/week4/image/img_40.png)

static은 global에 비해서 장점이 존재함

1. 접근 제어자를 추가할 수 있음
2. 네임 스페이스처럼 활용할 수 있음

## 코드보기: 정적 Logger

- 다른 사람에게 프로그램을 배포하는 상황을 가정
- 로그를 화면에 출력할 경우 다른 사람 컴퓨터를 직접 볼 수 없기 때문에 파일에 로그를 씀.
    - 로그가 필요하면 사용자에게 로그 파일을 요청
- 참고로 최근에는 클라우드 저장소에 로그를 바로 남겨서 사용자에게 로그 파일을 보내달라고 부탁하지 않아도 됨
    - 그래서 웹 사이트 돌아다니다보면 사용자의 정보를 수집하는 동의하는지 물어보기도 함

```java
package academy.pocu.comp2500samples.w04.staticlogger;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.List;

public class Logger {
    private static final String CONFIG_FILENAME = "logger-config.txt";

    private static LogLevel logLevel = LogLevel.WARNING;
    private static boolean isConfigLoaded = false;
    private static BufferedWriter bufferOut;

    private Logger() {
    }

    public static void loadConfig() {
        try {
            String classPath = getClassPath();
            Path loggerConfigPath = Paths.get(classPath, CONFIG_FILENAME);

            File configFile = new File(loggerConfigPath.toString());
            String outputFilename = "log.txt";

            if (configFile.isFile()) {
                List<String> lines = Files.readAllLines(loggerConfigPath, StandardCharsets.UTF_8);

                for (String line : lines) {
                    String[] splits = line.split("=");

                    switch (splits[0]) {
                        case "loglevel":
                            logLevel = LogLevel.valueOf(splits[1]);
                            break;

                        case "output":
                            outputFilename = splits[1];
                            break;

                        default:
                            throw new IllegalArgumentException("Unknown configuration setting: " + splits[0]);
                    }
                }
            }

            Path path = Paths.get(classPath, outputFilename);
            String outputPath = path.toString();

            bufferOut = new BufferedWriter(new FileWriter(outputPath));

            isConfigLoaded = true;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static void close() {
        if (bufferOut != null) {
            try {
                bufferOut.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }

    public static void logDebug(String message, Object... args) {
        assert (isConfigLoaded) : "Configuration not loaded";
        writeToFile(LogLevel.DEBUG, message, args);
    }

    public static void logInformation(String message, Object... args) {
        assert (isConfigLoaded) : "Configuration not loaded";
        writeToFile(LogLevel.INFORMATION, message, args);
    }

    public static void logWarning(String message, Object... args) {
        assert (isConfigLoaded) : "Configuration not loaded";
        writeToFile(LogLevel.WARNING, message, args);
    }

    public static void logError(String message, Object... args) {
        assert (isConfigLoaded) : "Configuration not loaded";
        writeToFile(LogLevel.ERROR, message, args);
    }

    public static void logCritical(String message, Object... args) {
        assert (isConfigLoaded) : "Configuration not loaded";
        writeToFile(LogLevel.CRITICAL, message, args);
    }

    private static void writeToFile(LogLevel logLevel, String message, Object... args) {

        if (!isConfigLoaded || Logger.logLevel.getLogLevel() > logLevel.getLogLevel()) {
            return;
        }

        try {
            String log = String.format("[%s] %s: %s",
                    Instant.now().toString(),
                    logLevel.toString(),
                    String.format(message, args));
            bufferOut.write(log);
            bufferOut.newLine();
            bufferOut.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String getClassPath() {
        File f = new File(Logger.class.getProtectionDomain().getCodeSource().getLocation().getPath());
        String packageName = Logger.class.getPackageName();
        packageName = packageName.replace('.', '/');

        Path p = Paths.get(f.getPath(), packageName);

        return p.toAbsolutePath().normalize().toString();
    }
}
```

- 정적 멤버 변수만 사용한다고 가정
    - final 정적 멤버 변수는 상수
- 정적 멤버 변수 logLevel 값보다 높은 레벨의 로그만 파일에 기록함
- 생성자에 private을 붙여서 외부에서 개체 생성할 수 없음

```java
package academy.pocu.comp2500samples.w04.staticlogger;

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
```

- 열거형에서 주의할 점
    1. 멤버 변수와 메서드를 가질 경우 마지막 상수 끝에 `;`를 붙여야함
    2. 생성자는 암묵적으로 private
        - public, protected 불가능
    3. 생성자에서 멤버 변수를 초기화할 수 있고 상수에 함수 호출처럼 ()로 값을 넣으면 됨

## QUIZ

```
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

(1): 비 정적 메서드에서 비 정적 멤버 변수 접근 OK  
(2): 비 정적 메서드에서 정적 멤버 변수 접근 OK. this로 정적 멤버 변수에 접근할 수 있음  
(3): 비 정적 메서드에서 비 정적 멤버 변수 접근 OK.  
(4): 정적 메서드에서 정적 멤버 변수 접근 OK  
(5): 정적 메서드에서 정적 멤버 변수 접근 OK  
(6): 정적 메서드에서 비 정적 멤버 변수 접근 X. **COMPILE ERROR**

## 정적 메서드로 만들기 적합한 메서드

- `MyString combine(MyString myString)`
- `boolean isNullOrWhiteSpace(MyString myString)` ✅
    - 적합함 개체에서 호출할 필요가 없음. 매개변수로 넘어온 MyString 개체에 대해서 연산만 수행
- `boolean equals(MyString myString)`
- `boolean contains(MyString myString)`

나머지 함수는 개체에서 호출해서 this(개체)와 매개변수로 넘어온 myString 모두 함수에서 사용하기 때문에 `myString.fun(otherString)` 으로 호출하는 것이 옳음

## static에 대한 비판

![img_41.png](pocu-note/COMP2500/week4/image/img_41.png)
![img_42.png](pocu-note/COMP2500/week4/image/img_42.png)
![img_43.png](pocu-note/COMP2500/week4/image/img_43.png)
![img_44.png](pocu-note/COMP2500/week4/image/img_44.png)

## 디자인 패턴

![img_45.png](pocu-note/COMP2500/week4/image/img_45.png)
![img_46.png](pocu-note/COMP2500/week4/image/img_46.png)
![img_47.png](pocu-note/COMP2500/week4/image/img_47.png)
![img_48.png](pocu-note/COMP2500/week4/image/img_48.png)
![img_49.png](pocu-note/COMP2500/week4/image/img_49.png)

반복되는 패턴을 정형화하고 추상화한 것이 디자인 패턴

![img_50.png](pocu-note/COMP2500/week4/image/img_50.png)

### 디자인 패턴의 장점

![img_51.png](pocu-note/COMP2500/week4/image/img_51.png)
![img_52.png](pocu-note/COMP2500/week4/image/img_52.png)

### 디자인 패턴의 단점

![img_53.png](pocu-note/COMP2500/week4/image/img_53.png)
![img_54.png](pocu-note/COMP2500/week4/image/img_54.png)

추상적, 범용적 코드는 중복될 수 있고, 성능에 문제가 생길 수 있음

### 디자인 패턴의 목적

![img_55.png](pocu-note/COMP2500/week4/image/img_55.png)
![img_56.png](pocu-note/COMP2500/week4/image/img_56.png)
![img_57.png](pocu-note/COMP2500/week4/image/img_57.png)

재활용성과 유연성이 높은 설계 방법이 품질과 직결되지 않음

### 디자인 패턴이 비판받는 이유

![img_58.png](pocu-note/COMP2500/week4/image/img_58.png)
![img_59.png](pocu-note/COMP2500/week4/image/img_59.png)
![img_60.png](pocu-note/COMP2500/week4/image/img_60.png)

### 디자인 패턴 공부법

직접 여러 문제를 해결하고 패턴을 인식했을 때 정리하는 용도로 공부

## 싱글턴 패턴

![img_61.png](pocu-note/COMP2500/week4/image/img_61.png)

static, global과 유사한 개념

![img_62.png](pocu-note/COMP2500/week4/image/img_62.png)
![img_63.png](pocu-note/COMP2500/week4/image/img_63.png)
![img_64.png](pocu-note/COMP2500/week4/image/img_64.png)

- 정적 멤버 변수 `instance`는 클래스 로딩될 때 null로 초기화
    - 정적 멤버 변수라서 비정적 멤버 변수와 다르게 클래스 로딩 시 초기화됨
    - 비정적 멤버 변수는 개체 생성 시 초기화

### 싱글턴 패턴의 예

![img_65.png](pocu-note/COMP2500/week4/image/img_65.png)
![img_66.png](pocu-note/COMP2500/week4/image/img_66.png)
![img_67.png](pocu-note/COMP2500/week4/image/img_67.png)

싱글턴을 만드는데 필요한 것(멤버 변수, 메서드)만 static으로 선언  
나머지 메서드는 비정적으로 선언  
사실 이 예는 정적 클래스로 선언하는게 더 좋음, 메서드만 있기 때문

![img_68.png](pocu-note/COMP2500/week4/image/img_68.png)
![img_69.png](pocu-note/COMP2500/week4/image/img_69.png)
![img_70.png](pocu-note/COMP2500/week4/image/img_70.png)
![img_71.png](pocu-note/COMP2500/week4/image/img_71.png)
![img_72.png](pocu-note/COMP2500/week4/image/img_72.png)

### static vs 싱글턴

![img_73.png](pocu-note/COMP2500/week4/image/img_73.png)

멀티턴 패턴도 싱글턴 패턴처럼 최대 개체 개수가 고정

![img_74.png](pocu-note/COMP2500/week4/image/img_74.png)
![img_75.png](pocu-note/COMP2500/week4/image/img_75.png)

싱글턴 개체는 처음으로 getInstance() 매서드가 호출될 때 생성됨
getInstance() 매서드를 다양한 개체에서 호출하면 개체의 생성 시점을 제어하기 어려움

#### 싱글턴 개체 초기화 순서를 보장하는 방법

![img_76.png](pocu-note/COMP2500/week4/image/img_76.png)

개체 초기화 순서를 보장하기 위해 프로그램 시작 시 정해진 순서대로 getInstance()를 호출하는 방법이 있음

### 싱글턴 패턴의 응용

![img_77.png](pocu-note/COMP2500/week4/image/img_77.png)

싱글턴 개체 생성 시 인자가 필요한 경우가 있음  
처음 getInstance()를 호출할 때는 초기화 때문에 인자가 필요함  
그 이후 호출할 때는 이미 개체를 초기화했기 때문에 필요 없음  
여기서 문제는 getInstance() 함수 하나에서 초기화와 개체 반환을 모두 수행하는 것

![img_78.png](pocu-note/COMP2500/week4/image/img_78.png)
![img_79.png](pocu-note/COMP2500/week4/image/img_79.png)
![img_80.png](pocu-note/COMP2500/week4/image/img_80.png)
![img_81.png](pocu-note/COMP2500/week4/image/img_81.png)
문제를 해결하기 위해 개체 생성, 개체 삭제, 개체 얻기 동작을 따로 매서드로 구현

![img_82.png](pocu-note/COMP2500/week4/image/img_82.png)
getInstance()를 호출하기 전 createInstance()를 호출하지 않았다면, 개체가 유효한 상태가 아님(초기화 되지 않음) 따라서 OOP 정신에 어긋남

![img_83.png](pocu-note/COMP2500/week4/image/img_83.png)
클래스 자체만 보면 OOP 정신에 어긋나지만 사용만 잘 하면 괜찮음  
즉 안전수칙을 잘 지키면 됨  
OOP 정신은 안전수칙도 필요없는 완벽한 도구를 만들어주자

## 안티패턴

![img_84.png](pocu-note/COMP2500/week4/image/img_84.png)
![img_85.png](pocu-note/COMP2500/week4/image/img_85.png)

## 코드보기: 싱글턴 Logger

```java
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.List;

public class Logger {
    private static final String CONFIG_FILENAME = "logger-config.txt";

    private static Logger instance;

    private LogLevel logLevel;
    private BufferedWriter outBuffer;

    private Logger(LogLevel logLevel, String outputPath) {
        this.logLevel = logLevel;

        try {
            this.outBuffer = new BufferedWriter(new FileWriter(outputPath));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static Logger getInstance() {
        if (instance != null) {
            return instance;
        }

        try {
            String classPath = getClassPath();
            Path loggerConfigPath = Paths.get(classPath, CONFIG_FILENAME);

            File configFile = new File(loggerConfigPath.toString());

            LogLevel logLevel = LogLevel.WARNING;
            String outputFilename = "log.txt";

            if (configFile.isFile()) {
                List<String> lines = Files.readAllLines(loggerConfigPath, StandardCharsets.UTF_8);

                for (String line : lines) {
                    String[] splits = line.split("=");

                    switch (splits[0]) {
                        case "loglevel":
                            logLevel = LogLevel.valueOf(splits[1]);
                            break;

                        case "output":
                            outputFilename = splits[1];
                            break;

                        default:
                            throw new IllegalArgumentException("Unknown configuration setting: " + splits[0]);
                    }
                }
            }

            Path path = Paths.get(classPath, outputFilename);
            String pathString = path.toString();

            instance = new Logger(logLevel, pathString);
            return instance;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public void deleteInstance() {
        if (this.outBuffer != null) {
            try {
                this.outBuffer.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

        if (instance != null) {
            instance = null;
        }
    }

    public void logDebug(String message, Object... args) {
        writeToFile(LogLevel.DEBUG, message, args);
    }

    public void logInformation(String message, Object... args) {
        writeToFile(LogLevel.INFORMATION, message, args);
    }

    public void logWarning(String message, Object... args) {
        writeToFile(LogLevel.WARNING, message, args);
    }

    public void logError(String message, Object... args) {
        writeToFile(LogLevel.ERROR, message, args);
    }

    public void logCritical(String message, Object... args) {
        writeToFile(LogLevel.CRITICAL, message, args);
    }

    private void writeToFile(LogLevel logLevel, String message, Object... args) {
        if (this.logLevel.getLogLevel() > logLevel.getLogLevel()) {
            return;
        }

        try {
            String log = String.format("[%s] %s: %s",
                    Instant.now().toString(),
                    logLevel.toString(),
                    String.format(message, args));
            this.outBuffer.write(log);
            this.outBuffer.newLine();
            this.outBuffer.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String getClassPath() {
        File f = new File(Logger.class.getProtectionDomain().getCodeSource().getLocation().getPath());
        String packageName = Logger.class.getPackageName();
        packageName = packageName.replace('.', '/');

        Path p = Paths.get(f.getPath(), packageName);

        return p.toAbsolutePath().normalize().toString();
    }
}
```

- `CONFIG_FILENAME` 은 상수값
- `instance` 는 정적 메서드에서 반환해야하기 때문에 static으로 선언
    - 나머지 멤버 변수는 static일 필요없음
    - 싱글턴 개체의 비정적 매서드에서 사용해야하기 때문
- 정적 클래스 예시는 개체를 생성하지 않기 위해서 아무런 매개변수를 받지 않는 생성자를 선언해서 개체 생성을 막음
    - 싱글턴 클래스 예시는 생성자에서 매개변수를 받아 개체를 단 하나 생성함
- `deleteInstance` 매서드에서 시스템 리소스인 `outBuffer` 파일 스트림을 닫고, 생성된 싱글턴 개체의 참조도 제거해서 가비지 컬렉터가 수집하도록 함
- 정적 클래스 예시는 `logXXX` 매서드에서 assert로 configuration 여부를 확인함
    - 싱글턴 클래스 예시는 개체 생성시 configuration을 적용하기 때문에 assert가 필요없음
    - 개체는 생성부터 유효한 상태

## 내포 클래스

![img_86.png](pocu-note/COMP2500/week4/image/img_86.png)
![img_87.png](pocu-note/COMP2500/week4/image/img_87.png)

- 보통 다른 언어는 정적 내포 클래스만 존재함

### 내포 클래스의 용도

![img_88.png](pocu-note/COMP2500/week4/image/img_88.png)

1. 그룹화

- 패키지보다 긴밀함

2. outer class의 private 멤버에 접근 가능

- 반대로 outer class에서 inner class의 private 멤버에 접근 가능

### 내포 클래스를 사용하지 않고 Record, RecordReader 구현

![img_89.png](pocu-note/COMP2500/week4/image/img_89.png)
![img_90.png](pocu-note/COMP2500/week4/image/img_90.png)

- Record는 데이터, Reader로 읽기만 할 예정

![img_91.png](pocu-note/COMP2500/week4/image/img_91.png)
![img_92.png](pocu-note/COMP2500/week4/image/img_92.png)
![img_93.png](pocu-note/COMP2500/week4/image/img_93.png)

- Record는 immutable
    - rawData는 초기화할 때 읽을 뒤 변하지 않음
- readByte(), readSignature()과 같은 매서드를 Record 내부에 만들면 다음에 읽을 위치를 다양하게 구현할 수 없음
    - 따라서 RecordReader 클래스를 따로 만들어서 다음에 읽을 위치를 관리

![img_94.png](pocu-note/COMP2500/week4/image/img_94.png)
![img_95.png](pocu-note/COMP2500/week4/image/img_95.png)
![img_96.png](pocu-note/COMP2500/week4/image/img_96.png)
![img_97.png](pocu-note/COMP2500/week4/image/img_97.png)

has-a 관계는 집합을 말함

![img_98.png](pocu-note/COMP2500/week4/image/img_98.png)

- `canRead()` 매서드에서 `this.record.rawData.length` 로 접근할 수 있는 이유는 `Record` 클래스의 멤버 `rawData`의 접근제어자가 패키지 접근제어자이기 때문
- `readByte()` 매서드에서 `this.record.rawData[thid.position++]`로 접근할 수 있는 이유도 마찬가지
    - 이 매서드의 기능은 한 바이트 읽고 위치 다음에 읽을 위치를 수정

![img_99.png](pocu-note/COMP2500/week4/image/img_99.png)

- `reader0`, `reader1` 모두 fileData의 처음부터 읽음
    - `reader0`은 `readByte()` 매서드를 호출해 한 바이트 읽음
        - 이 때 P는 아스키코드 80
    - `reader1`은 `readSignature()` 매서드를 호출해 4 바이트 읽고, String format으로 반환
        - String "POCU"를 반환

### [질문] Record 클래스를 변경

```java
public class Record {
    private final byte[] rawData;

    public Record(byte[] rawData) {
        this.rawData = rawData;
    }

    public int getDataLength() {
        return rawData.length;
    }

    public byte readByte(int position) {
        return rawData[position];
    }
}
```

```java
public class RecordReader {
    private final Record record;
    private int position;

    public RecordReader(Record record) {
        this.record = record;
    }

    public boolean canRead() {
        return this.position < this.record.getDataLength();
    }

    public byte readByte() {
        return this.record.readByte(this.position++);
    }

    public String readSignature() {
        byte ch0 = readByte();
        byte ch1 = readByte();
        byte ch2 = readByte();
        byte ch3 = readByte();

        return String.format("%c%c%c%c", ch0, ch1, ch2, ch3);
    }
}
```

- 장점
  - 캡슐화 강화
- 단점
  - 함수 호출이 늘어남
    - 자주 호출되는 함수의 경우 함수 호출에 따른 오버헤드로 성능 저하
- 고민할 점
  - 데이터만 있는 개체(Record 개체)를 캡슐화할 필요가 있는가?
  - 패키지 구조를 고려하기
    - 같은 패키지안의 클래스는 읽고/쓰기가 가능하게 만드려면 원래의 방식을 사용해야함
    - 지금 방식을 사용하면 외부 클래스에서 읽기는 가능하고 쓰기는 불가능함

> 그렇게 설계하셔도 괜찮으며 이로 인해 캡슐화가 강화되는 건 맞습니다. 하지만 이런 단점 및 고민도 있습니다.
> 함수 호출이 늘어난다. (자주 호출되는 함수일 경우 당연히 성능 저하)
> 과연 데이터만 있는 개체를 캡슐화할 필요가 있는지에 대한 고민
> 참고로 강의 중에 보여드린 코드는 package default로 멤버 변수를 선언했기에 같은 패키지 안에 있는 클래스들만 읽기/쓰기가 가능합니다. 보여주신 코드는 어느 클래스라도 읽기는 가능하고 쓰기는 불가능하게
> 만들었습니다. 이런 차이점이 있습니다. 따라서 이건 패키지 구조가 어떻게 되는지에 따라서도 달라지는 부분입니다.

### 내포 클래스를 사용해 Record, RecordReader 구현

![img_100.png](pocu-note/COMP2500/week4/image/img_100.png)
![img_101.png](pocu-note/COMP2500/week4/image/img_101.png)

- inner class(non-static nested class)에서 outer class의 멤버에 접근할 수 있음
    - 접근 제어자가 private여도 접근할 수 있음
    - 이전 구현은 패키지 접근 제어자를 사용했지만, 이번에는 private를 사용해 더 강한 캡슐화
- 이전 구현에서 `RecordReader`은 생성자로 `Record` 개체를 입력 받았으나, 이제는 그럴 필요가 없음
    - `Record` 내부에 `RecordReader`을 구현함으로써 더 긴밀한 연관관계 형성

![img_102.png](pocu-note/COMP2500/week4/image/img_102.png)

- `<외부 클래스 개체명>.new` 로 생성자 호출
    - 외부 클래스를 개체로 만들지 않으면 비정적 내포 클래스의 개체를 생성할 수 없음
        - 내포 클래스의 개체는 외부 클래스 개체의 참조를 저장
        - `reader0`, `reader1` 모두 record의 참조를 저장
    - 비정적 내포 클래스의 접근제어자에 따라 외부에서 생성 할 수 없는 경우가 있음
        - 비정적 내포 클래스 `Reader`의 접근제어자가 private면 외부에서 생성자를 호출할 수 없음
- 타입은 `<외부 클래스명>.<비정적 내포 클래스명>`

![img_104.png](pocu-note/COMP2500/week4/image/img_104.png)
![img_103.png](pocu-note/COMP2500/week4/image/img_103.png)

### 정적 내포 클래스를 사용해 Record, RecordReader 구현

![img_105.png](pocu-note/COMP2500/week4/image/img_105.png)

- 내포 클래스에 static 키워드 추가
- 생성자로 `Record` 개체를 받아야함
    - 그렇지 않으면 외부 클래스의 멤버에 바로 접근할 수 없음
    - 외부 클래스의 멤버가 static이면 바로 접근할 수 있음
- 외부 클래스의 private 멤버에 접근 가능

![img_106.png](pocu-note/COMP2500/week4/image/img_106.png)
![img_107.png](pocu-note/COMP2500/week4/image/img_107.png)

- static을 붙이는 것은 outer class의 레퍼런스가 없다는 의미
    - 반대로 non-static nested class는 이를 자동으로 해줌
- 외부에서 입력받은 outer class의 개체를 통해서만 outer class의 non-static 멤버에 접근할 수 있음

![img_108.png](pocu-note/COMP2500/week4/image/img_108.png)

- PPT 이미지에서 "rawData가 다시 private", "내포 클래스 안 쓸 때와 똑같아 짐"
  - 비정적 내포 클래스를 사용할 때 멤버변수 rawData의 접근제어자를 private로 설정했다는 것과 동일해짐

![img_109.png](pocu-note/COMP2500/week4/image/img_109.png)

- outer class의 static 멤버는 outer class의 개체를 통하지 않고 바로 멤버에 접근할 수 있음

![img_110.png](pocu-note/COMP2500/week4/image/img_110.png)
