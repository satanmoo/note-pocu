# Week6

## 상속을 이용한 개체 모델링: 일반론

### 주제 정하기

![img.png](pocu-note/COMP2500/week6/image/img.png)

주제를 정하기 어려운게, 상속의 문제다. 특히 실생활에서 상상하기 어려움

![img_1.png](pocu-note/COMP2500/week6/image/img_1.png)

컴포지션은 상대적으로 쉬움

### 인간에게 상속이 어려운 이유

![img_2.png](pocu-note/COMP2500/week6/image/img_2.png)

인간이 실생활에서 경험하기 어려운 것이 상속임

### 상속을 이해할 때 접근 방법

![img_3.png](pocu-note/COMP2500/week6/image/img_3.png)

#### 1) 일빈화/특정화 관점에서 이해하기

![img_4.png](pocu-note/COMP2500/week6/image/img_4.png)
![img_5.png](pocu-note/COMP2500/week6/image/img_5.png)

부모일수록 일반적, 자식일수록 특정적

#### 2) 기능의 관점에서 이해하기

![img_6.png](pocu-note/COMP2500/week6/image/img_6.png)

공통 클래스를 만들고 상태와 기능을 재활용해 재활용성을 높임

### 일반화 능력

![img_7.png](pocu-note/COMP2500/week6/image/img_7.png)

- 공통된 부분을 찾는 능력
- 실존하지 않는 새로운 개념일 수 있음
    - 그래서 사람마다 같은 다양한 개체 풀에서 일반화하더라도 다를 수 있음

![img_8.png](pocu-note/COMP2500/week6/image/img_8.png)

- 수학자의 사례

![img_9.png](pocu-note/COMP2500/week6/image/img_9.png)

그래서 OOP 초창기에 수학자 출신 프로그래머가 많아서 상속이 유행했다고 추측

![img_10.png](pocu-note/COMP2500/week6/image/img_10.png)

OOP의 꽃인 **다형성**을 배우려면 상속이 반드시 필요함

![img_11.png](pocu-note/COMP2500/week6/image/img_11.png)

결론: 많이 경험해보자

## 상속을 이용한 개체 모델링: 벽시계 사례

### 관찰 및 분석: 개체의 상태와 동작을 찾기

![img_12.png](pocu-note/COMP2500/week6/image/img_12.png)

### 아날로그 벽시계의 상태와 동작

![img_13.png](pocu-note/COMP2500/week6/image/img_13.png)

우선 상태부터

![img_14.png](pocu-note/COMP2500/week6/image/img_14.png)

중복된 상태가 보임

![img_15.png](pocu-note/COMP2500/week6/image/img_15.png)

중복되는 상태는 지우는게 당연히(?) 좋음

![img_16.png](pocu-note/COMP2500/week6/image/img_16.png)
![img_17.png](pocu-note/COMP2500/week6/image/img_17.png)

중복되는 값이 많으면 유지보수에 불편함

![img_18.png](pocu-note/COMP2500/week6/image/img_18.png)

시, 분, 초만 남기고 지움

![img_19.png](pocu-note/COMP2500/week6/image/img_19.png)

- getter/setter 추가
- 편의를 위해 한번에 시간 set 메서드 추가

```java
public class Clock {
    private byte hours = 12;
    private byte minutes;
    private byte seconds;

    public byte getHours() {
        return this.hours;
    }

    public void setHours(byte hours) {
        this.hours = hours;
    }

    public byte getMinutes() {
        return this.minutes;
    }

    public void setMinutes(byte minutes) {
        this.minutes = minutes;
    }

    public byte getSeconds() {
        return this.seconds;
    }

    public void setSeconds(byte seconds) {
        this.seconds = seconds;
    }

    public void setTime(byte hours, byte minutes, byte seconds) {
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }
}
```

### setter에서 예외던지기

![img_20.png](pocu-note/COMP2500/week6/image/img_20.png)

- 유효하지 않은 값에 대한 검사가 필요함
    - setter에서 개체의 상태가 유효하도록 하는 것이 OOP 캡슐화

![img_21.png](pocu-note/COMP2500/week6/image/img_21.png)

자료형을 `byte`로 변경해도 여전히 문제 발생

![img_22.png](pocu-note/COMP2500/week6/image/img_22.png)

- 예외를 던지고 메서드 실행을 중지하는 것은 무책임한 해결방법
    - 코드 사용자와 직접 소통하는 경계에서는 예외를 던져도 괜찮음

### setter에서 예외를 던지지 않고 유효성 검사하기

![img_23.png](pocu-note/COMP2500/week6/image/img_23.png)
![img_24.png](pocu-note/COMP2500/week6/image/img_24.png)

실제로 태엽시계의 시간을 설정할 때 시간 값이 잘못될 수 없음  
아무리 돌려도 정상적인 시간값

![img_25.png](pocu-note/COMP2500/week6/image/img_25.png)

- 구현방법
    - clamp
    - wrap

#### Clamp

![img_26.png](pocu-note/COMP2500/week6/image/img_26.png)
![img_27.png](pocu-note/COMP2500/week6/image/img_27.png)

```java
// 범위를 제한하는 clamp 함수
private byte clamp(byte value, byte min, byte max) {
    return (byte) Math.min(Math.max(value, min), max);
}
```

max, min에서 실수하기 쉬워서, 함수로 빼는게 좋음 (유지보수에 실수할 정도도 포함)

![img_28.png](pocu-note/COMP2500/week6/image/img_28.png)
![img_29.png](pocu-note/COMP2500/week6/image/img_29.png)

일단 예외를 막을 수 있는 방법으로 **CLAMP**를 사용했지만 실제로 아날로그 시계는 계속 돌기 때문에 다름

#### Wrap

![img_31.png](pocu-note/COMP2500/week6/image/img_31.png)

- 최소값과 최대값이 연결됨
    - 오버플로우와 유사

```java
public void setHours(byte hours) {
    int value = hours - 1;

    while (value < 0) {
        value += 12;
    }

    this.hours = (byte) (value % 12 + 1);
}

public void setMinutes(byte minutes) {
    while (minutes < 0) {
        minutes += 60;
    }

    this.minutes = (byte) (minutes % 60);
}

public void setSeconds(byte seconds) {
    while (seconds < 0) {
        seconds += 60;
    }

    this.seconds = (byte) (seconds % 60);
}
```

![img_32.png](pocu-note/COMP2500/week6/image/img_32.png)

### 받아올림도 하는 시간 바꾸기

![img_30.png](pocu-note/COMP2500/week6/image/img_30.png)

- 아날로그 시계를 좀 더 비슷게 흉내내려면 받아올림도 구현되어야함
    - Ex) 123분 == 2시간 3분

```java
public void setHours(byte hours) {
    int value = hours - 1;

    while (value < 0) {
        value += 12;
    }

    this.hours = (byte) (value % 12 + 1);
}

public void setMinutes(byte minutes) {
    int wrapCount = 0;

    while (minutes < 0) {
        minutes += 60;
        --wrapCount;
    }

    wrapCount += minutes / 60;

    this.minutes = (byte) (minutes % 60);

    if (wrapCount != 0) {
        setHours(this.hours + wrapCount);
    }
}

public void setSeconds(byte seconds) {
    int wrapCount = 0;

    while (seconds < 0) {
        seconds += 60;
        --wrapCount;
    }

    wrapCount += seconds / 60;

    this.seconds = (byte) (seconds % 60);

    if (wrapCount != 0) {
        setMinutes(this.minutes + wrapCount);
    }
}
```

![img_33.png](pocu-note/COMP2500/week6/image/img_33.png)

#### 기존 setter와 차이점: 시간적 결합(temporal coupling)

![img_34.png](pocu-note/COMP2500/week6/image/img_34.png)
![img_35.png](pocu-note/COMP2500/week6/image/img_35.png)

- 기존에는 각 setter가 다른 멤버 변수에 의존하지 않음
    - 따라서 setter 호출 순서는 중요하지 않음

![img_36.png](pocu-note/COMP2500/week6/image/img_36.png)

- 수정된 setter은 다른 멤버 변수에 의존함
    - setter 호출 순서를 보장해야함

![img_37.png](pocu-note/COMP2500/week6/image/img_37.png)

- setTime()에서 시, 분, 초를 한번에 설정할 때 `setHours()`, `setMinutes`(), `setSeconds()` 순서대로 호출해야함

![img_38.png](pocu-note/COMP2500/week6/image/img_38.png)

### 시간적 결합의 해결방법

시간적 결합 관계는 한눈에 보이지 않아서 실수하기 쉬움  
실제 시계에 그 해결책이 있음

![img_39.png](pocu-note/COMP2500/week6/image/img_39.png)

시계 태엽(분침)을 돌리면 분침도 이동하고 시침도 동시에 이동함  
통합해서 가장 작은 단위인 초단위로 적용하면 됨

![img_40.png](pocu-note/COMP2500/week6/image/img_40.png)

setter을 모두 제거하고 `addSeconds()`를 추가

```java
public void addSeconds(short seconds) {
    final int HALF_DAY_IN_SECONDS = 60 * 60 * 12;

    int value = this.seconds + seconds;
    while (value < 0) {
        value += HALF_DAY_IN_SECONDS;
    }

    this.seconds = (byte) (value % 60);

    value = value / 60;
    value += this.minutes;

    this.minutes = (byte) (value % 60);

    value = value / 60;
    value += this.hours - 1;
    this.hours = (byte) (value % 12 + 1);
}
```

- this.seconds의 자료형 byte, 매개변수 seconds의 자료형 short
- `this.seconds + seconds`의 결과는 암묵적으로 short형
- `this.secounds`에 short 최대값, `seconds`에 byte 최대값이 들어오는 상황 등 오버플로우가 발생하는 순간을 막기 위해서 좌변의 value는 int로 선언

- `value += this.minutes`는 반드시 양수임. 따라서 while문 코드(음수 처리)는 필요없음

![img_41.png](pocu-note/COMP2500/week6/image/img_41.png)
![img_42.png](pocu-note/COMP2500/week6/image/img_42.png)

- addSeconds() 함수는 복잡함
- setter의 매개변수는 한 개인데 실제로 3개의 멤버 변수를 변경
    - 상태를 저장하는 멤버 변수가 너무 많음

![img_43.png](pocu-note/COMP2500/week6/image/img_43.png)
![img_44.png](pocu-note/COMP2500/week6/image/img_44.png)

이럴 때 상태를 저장하는 변수를 하나로 관리  
시/분/초를 알고 싶을 때마다 계산해 보여주기

![img_45.png](pocu-note/COMP2500/week6/image/img_45.png)

- 넉넉하게 byte에서 int로 확장
- 초기화할 때 0시, 0분, 0초로 초기화
    - 이전에는 데이터를 보여줄 때와 저장할 때가 일치하는 부분이 있어서, 시간을 12로 초기화함
    - 시계에서 보여줄 때 12,1,2 ... 11까지 있으니까
    - 이제는 보여주는 데이터와 저장하는 데이터를 분리해 의존성을 줄임, 따라서 저장하는 데이터는 내부적인 기준으로 0시, 0분, 0초로 초기화 하는 것

```java
public class Clock {
    private int seconds;

    public byte getHours() {
        int hours = this.seconds / 60 / 60;

        return hours == 0 ? 12 : (byte) hours;
    }

    public byte getMinutes() {
        return (byte) (this.seconds / 60 % 60);
    }

    public byte getSeconds() {
        return (byte) (this.seconds % 60);
    }

    public void addSeconds(short seconds) {
        final int HALF_DAY_IN_SECONDS = 60 * 60 * 12;

        int value = this.seconds + seconds;
        while (value < 0) {
            value += HALF_DAY_IN_SECONDS;
        }

        this.seconds = value % HALF_DAY_IN_SECONDS;
    }
}
```

- `getter`에서 음수 확인을 할 필요가 없음
- 멤버 변수 `seconds`에 저장할 때 애초에 양수로 저장
    - 내부의 데이터를 유효하게 유지하는 캡슐화 개념
- 초 값: [0, 60]
- 분 값: [0, 60]
- 시 값: [1, 12]
- `this.seconds` 값: [0, 60 * 60 * 12]

### 아날로그 시계 시침/분침/초침의 각도 추가

![img_46.png](pocu-note/COMP2500/week6/image/img_46.png)

각도는 short로 충분함 값의 범위가 [0, 360]

```java
public class Clock {
    private int seconds;

    // 초 단위에서 시각으로 변환하는 메서드들
    public byte getHours() {
        int hours = this.seconds / 60 / 60;
        return hours == 0 ? 12 : (byte) hours;  // 12시간제로 표현
    }

    public byte getMinutes() {
        return (byte) (this.seconds / 60 % 60);
    }

    public byte getSeconds() {
        return (byte) (this.seconds % 60);
    }

    // 초 추가하는 메서드
    public void addSeconds(short seconds) {
        final int HALF_DAY_IN_SECONDS = 60 * 60 * 12;
        int value = this.seconds + seconds;
        while (value < 0) {
            value += HALF_DAY_IN_SECONDS;
        }
        this.seconds = value % HALF_DAY_IN_SECONDS;
    }

    // 초침 각도 계산
    public short getSecondHandAngle() {
        return (short) (getSeconds() * 6);  // 360도 / 60초 = 6도
    }

    // 분침 각도 계산
    public short getMinuteHandAngle() {
        return (short) (getMinutes() * 6);  // 360도 / 60분 = 6도
    }

    // 시침 각도 계산 (제안한 수정 사항 반영)
    public short getHourHandAngle() {
        final int ANGLE_PER_HOUR = 360 / 12;
        int hours = getHours();  // 이미 1~12 범위 내에 있음
        return (short) (hours * ANGLE_PER_HOUR + getMinutes() * ANGLE_PER_HOUR / 60);
    }
}
```

![img_47.png](pocu-note/COMP2500/week6/image/img_47.png)

이 코드들은 생략

1초 움직이는 동작, 벽에 시계를 거는 동작

### 디지털 벽시계 모델링: 공통점 분리해 부모 클래스 만들기

아날로그 시계와 공통점과 차이점을 찾아보기

![img_48.png](pocu-note/COMP2500/week6/image/img_48.png)
![img_49.png](pocu-note/COMP2500/week6/image/img_49.png)
![img_50.png](pocu-note/COMP2500/week6/image/img_50.png)

부모 클래스의 이름은 일단 미정

![img_51.png](pocu-note/COMP2500/week6/image/img_51.png)

공통으로 재활용이 가능한 멤버는 부모 클래스로 옮김

![img_52.png](pocu-note/COMP2500/week6/image/img_52.png)

`addSeconds()`는 디지털 벽시계에는 없는 기능

![img_53.png](pocu-note/COMP2500/week6/image/img_53.png)

아날로그 시계와 부모 클래스(시계)분리 완료

```java
public class Clock {
    private int seconds;

    public byte getHours() {
        int hours = this.seconds / 60 / 60;
        return hours == 0 ? 12 : (byte) hours;
    }

    public byte getMinutes() {
        return (byte) (this.seconds / 60 % 60);
    }

    public byte getSeconds() {
        return (byte) (this.seconds % 60);
    }

    public void tick() {
        addSeconds((short) 1);  // 컴파일 오류
    }

    public void mount() {
        // 벽에 시계를 검
    }
}
```

```java
public class AnalogClock extends Clock {
    public short getSecondHandAngle() {
        return (short) (getSeconds() * 6);
    }

    public short getMinuteHandAngle() {
        return (short) (getMinutes() * 6);
    }

    public short getHourHandAngle() {
        final int ANGLE_PER_HOUR = 360 / 12;

        int hours = getHours() % 12;
        return (short) (hours * ANGLE_PER_HOUR + getMinutes() * ANGLE_PER_HOUR / 60);
    }

    public void addSeconds(short seconds) {
        final int HALF_DAY_IN_SECONDS = 60 * 60 * 12;

        int value = this.seconds + seconds; // 컴파일 오류 발생
        while (value < 0) {
            value += HALF_DAY_IN_SECONDS;
        }

        this.seconds = value % HALF_DAY_IN_SECONDS; // 컴파일 오류 발생
    }
}
```

분리하고 코드 실행하면 컴파일 오류 발생

![img_54.png](pocu-note/COMP2500/week6/image/img_54.png)

`Clock.tick()` 내부에서 `addSeconds()`를 호출하지만, Clock 클래스에는 `addSeconds()`가 존재하지 않음

![img_55.png](pocu-note/COMP2500/week6/image/img_55.png)

```java
public class Clock {
    private int seconds;

    public byte getHours() {
        int hours = this.seconds / 60 / 60;
        return hours == 0 ? 12 : (byte) hours;
    }

    public byte getMinutes() {
        return (byte) (this.seconds / 60 % 60);
    }

    public byte getSeconds() {
        return (byte) (this.seconds % 60);
    }

    public void tick() {
        final int HALF_DAY_IN_SECONDS = 60 * 60 * 12;
        this.seconds = (this.seconds + 1) % HALF_DAY_IN_SECONDS;
    }

    public void mount() {
        // 벽에 시계를 검
    }
}
```

Clock 클래스 수정

![img_56.png](pocu-note/COMP2500/week6/image/img_56.png)

실행하면 다른 오류 발생, AnalogClock 클래스에서 멤버변수에 접근할 때 문제가 발생  
`this.seconds`는 AnalogClock 클래스의 멤버변수가 아님

![img_57.png](pocu-note/COMP2500/week6/image/img_57.png)

부모 클래스 Clock 멤버변수 `seconds`의 접근제어자를 `protected`로 수정  
this 키워드도 super로 변경(this해도 괜찮긴 한데 가독성 때문에)

```java
public class Clock {
    protected int seconds;

    public byte getHours() {
        int hours = this.seconds / 60 / 60;
        return hours == 0 ? 12 : (byte) hours;
    }

    public byte getMinutes() {
        return (byte) (this.seconds / 60 % 60);
    }

    public byte getSeconds() {
        return (byte) (this.seconds % 60);
    }

    public void tick() {
        final int HALF_DAY_IN_SECONDS = 60 * 60 * 12;
        this.seconds = (this.seconds + 1) % HALF_DAY_IN_SECONDS;
    }

    public void mount() {
        // 벽에 시계를 검
    }
}
```

```java
public class AnalogClock extends Clock {
    public short getSecondHandAngle() {
        return (short) (getSeconds() * 6);
    }

    public short getMinuteHandAngle() {
        return (short) (getMinutes() * 6);
    }

    public short getHourHandAngle() {
        final int ANGLE_PER_HOUR = 360 / 12;

        int hours = getHours() % 12;
        return (short) (hours * ANGLE_PER_HOUR + getMinutes() * ANGLE_PER_HOUR / 60);
    }

    public void addSeconds(short seconds) {
        final int HALF_DAY_IN_SECONDS = 60 * 60 * 12;

        int value = super.seconds + seconds;
        while (value < 0) {
            value += HALF_DAY_IN_SECONDS;
        }

        super.seconds = value % HALF_DAY_IN_SECONDS;
    }
}
```

![img_58.png](pocu-note/COMP2500/week6/image/img_58.png)

이제 코드 실행하면 정상 결과

![img_59.png](pocu-note/COMP2500/week6/image/img_59.png)

추가적으로 코드 중복 제거하자

![img_60.png](pocu-note/COMP2500/week6/image/img_60.png)

메서드 밖에 정의, 즉 클래스에 선언

![img_61.png](pocu-note/COMP2500/week6/image/img_61.png)

이 때 부모 클래스에 선언하고, `protected` 접근제어자를 붙여서 자식 클래스에서도 사용할 수 있게  
`static`으로 개체에 종속되지 않게 상수화

![img_62.png](pocu-note/COMP2500/week6/image/img_62.png)

- 최종 결과
    - 상수는 클래스 다이어그램에 표시 X
    - `tick()`의 구현도 클래스 다이어그램에 표시 X

![img_63.png](pocu-note/COMP2500/week6/image/img_63.png)

### 디지털 벽시계 전용 기능 구현하기: 오전/오후 구분 및 출력

이제 디지털 벽시계 클래스를 만들고 전용 기능을 추가해야함

![img_64.png](pocu-note/COMP2500/week6/image/img_64.png)

- AM/PM을 기억하는 별도의 불리언 변수를 추가하는 1번의 방법은 DigitalClock 클래스에 새 멤버변수를 추가해야함
- 2번의 방법은 새로운 멤버 변수를 추가하지 않고 부모 클래스 Clock `seconds`를 사용하기 때문에 관리하기 더 쉬움
    - 일반화 개념
    - 12시간 체제는 24시간 체제의 특별한 경우

![img_65.png](pocu-note/COMP2500/week6/image/img_65.png)

- 클래스 다이어그램에서는 별 다른 변화가 없음
- 대신 클래스 다이어그램에서 볼 수 없는 구현을 변화해야함
    - Clock 클래스의 시간 체제를 24시간 체제로 변경
    - 자식 클래스를 추가하면서 부모 클래스가 변할 수 있음을 보여주는 좋은 예

![img_66.png](pocu-note/COMP2500/week6/image/img_66.png)

![img_67.png](pocu-note/COMP2500/week6/image/img_67.png)

부모 클래스인 Clock이 변경되어 AnalogueClock도 변경됨

```java
public class Clock {
    protected static final int DAY_IN_SECONDS = 60 * 60 * 24;
    protected int seconds;

    public byte getHours() {
        int hours = this.seconds / 60 / 60;
        return hours == 0 ? 12 : (byte) hours;
    }

    public byte getMinutes() {
        return (byte) (this.seconds / 60 % 60);
    }

    public byte getSeconds() {
        return (byte) (this.seconds % 60);
    }

    public void tick() {
        this.seconds = (this.seconds + 1) % DAY_IN_SECONDS;
    }

    public void mount() {
        // 벽에 시계를 검
    }
}
```

```java
public class AnalogClock extends Clock {
    public short getSecondHandAngle() {
        return (short) (getSeconds() * 6);
    }

    public short getMinuteHandAngle() {
        return (short) (getMinutes() * 6);
    }

    public short getHourHandAngle() {
        final int ANGLE_PER_HOUR = 360 / 12;

        int hours = getHours() % 12;
        return (short) (hours * ANGLE_PER_HOUR + getMinutes() * ANGLE_PER_HOUR / 60);
    }

    public void addSeconds(short seconds) {
        int value = super.seconds + seconds;
        while (value < 0) {
            value += HALF_DAY_IN_SECONDS;
        }

        super.seconds = value % DAY_IN_SECONDS;
    }
}
```

```java
public class DigitalClock extends Clock {
    public boolean isBeforeMidday() {
        return super.seconds / (DAY_IN_SECONDS / 2) == 0;   // super.seconds < DAY_IN_SECONDS / 2
    }
}
```

#### 디지털 시계에서 24시간 단위로 보여주려면?

![img_68.png](pocu-note/COMP2500/week6/image/img_68.png)

![img_69.png](pocu-note/COMP2500/week6/image/img_69.png)

- 시/분/초를 반환하는 함수들을 각각 자식 클래스에 맞게 커스터마이징 하기?

![img_70.png](pocu-note/COMP2500/week6/image/img_70.png)

- 문제점:
    - Clock 형 변수를 통해 `getHours`같은 메서드를 호출할 수 없음
    - 부모 클래스에서 일반적인 메서드가 사라짐

![img_71.png](pocu-note/COMP2500/week6/image/img_71.png)

- `getHours`같은 메서드는 Clock 클래스에 그대로 둠
    - 어차피 아날로그 시계나 디지털 시계나 분/초 표현은 동일하기 때문에 시간 표현(getter)만 보면 됨
- 필요에 따라 자식클래스에서 전용 메서드를 추가
    - 별로 좋지 못한 방법
    - 다형성을 이용하면 더 좋은 해결법!

### 디지털 벽시계 전용 기능 구현하기: 시간 맞추는 방식

#### 방법1: 시간을 더하고, set버튼을 누르는 방식

![img_72.png](pocu-note/COMP2500/week6/image/img_72.png)
![img_73.png](pocu-note/COMP2500/week6/image/img_73.png)

#### 방법2: 숫자를 직접 입력

![img_74.png](pocu-note/COMP2500/week6/image/img_74.png)

![img_75.png](pocu-note/COMP2500/week6/image/img_75.png)

- 결론적으로 방법2 선택
    - `setTime` 도우미 함수도 부활

![img_76.png](pocu-note/COMP2500/week6/image/img_76.png)

- 구현 방법은 자유
    - Wrap
    - Clamp
        - `setIsBeforeMidday` 호출 순서를 주의해야함

```java
public class DigitalClock extends Clock {
    public boolean isBeforeMidday() {
        return super.seconds / (DAY_IN_SECONDS / 2) == 0;   // super.seconds < DAY_IN_SECONDS / 2
    }

    public void setIsBeforeMidday(boolean isAm) {
        if (isAm) {
            super.seconds += (DAY_IN_SECONDS / 2);
            return;
        }
        super.seconds -= (DAY_IN_SECONDS / 2);
    }

    public void setHours(byte hours) {
        // super.seconds에서 시에 해당하는 부분을 hours로 변경
        int currentSecondsAndMinutesWithoutHours = super.seconds % (60 * 60);
        super.seconds = hours * 60 * 60 + currentSecondsAndMinutesWithoutHours;
    }

    public void setMinutes(byte minutes) {
        // super.minutes에서 분에 해당하는 부분을 minutes로 변경
        int currentHours = super.seconds / (60 * 60);   // [0,11]
        int currentSeconds = super.getSeconds();
        assert (minutes >= 0 && minutes <= 59);
        super.seconds = currentHours * 60 * 60 + minutes * 60 + currentSeconds;
    }

    public void setSeconds(byte seconds) {
        // super.seconds에서 초에 해당하는 부분을 seconds로 변경
        int currentHours = super.seconds / (60 * 60);
        int currentMinutes = super.getMinutes();
        assert (seconds >= 0 && seconds <= 59);
        super.seconds = currentHours * 60 * 60 + currentMinutes * 60 + seconds;
    }

    public void setTime(byte hours, byte minutes, byte seconds, boolean isAm) {
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        setIsBeforeMidday(isAm);    // 반드시 마지막에 호출해야함
    }
}
```

assert 로 제한된 범위의 입력을 가정

### 디지털 벽시계 전용 기능 구현하기: 7 세그먼트 디스플레이 추가하기

![img_77.png](pocu-note/COMP2500/week6/image/img_77.png)

![img_78.png](pocu-note/COMP2500/week6/image/img_78.png)

![img_79.png](pocu-note/COMP2500/week6/image/img_79.png)

- 7 세그먼트 구현방법 3가지

![img_80.png](pocu-note/COMP2500/week6/image/img_80.png)

- DigitalClock 클래스에서 SevenSegmentDisplay 클래스를 사용하기 때문에 의존관계(점선 화살표)

```java
public class DigitalClock extends Clock {
    public boolean isBeforeMidday() {
        return super.seconds / (DAY_IN_SECONDS / 2) == 0;   // super.seconds < DAY_IN_SECONDS / 2
    }

    public void setIsBeforeMidday(boolean isAm) {
        boolean currentlyAm = super.seconds < (DAY_IN_SECONDS / 2);
        if (isAm != currentlyAm) {
            // 오전/오후 상태가 다를 때만 값을 변경
            if (isAm) {
                super.seconds -= (DAY_IN_SECONDS / 2);  // 오후 -> 오전
            } else {
                super.seconds += (DAY_IN_SECONDS / 2);  // 오전 -> 오후
            }
        }
    }

    public void setHours(byte hours) {
        // super.seconds에서 시에 해당하는 부분을 hours로 변경
        int currentSecondsAndMinutesWithoutHours = super.seconds % (60 * 60);
        super.seconds = hours * 60 * 60 + currentSecondsAndMinutesWithoutHours;
    }

    public void setMinutes(byte minutes) {
        // super.minutes에서 분에 해당하는 부분을 minutes로 변경
        int currentHours = super.seconds / (60 * 60);   // [0,11]
        int currentSeconds = super.getSeconds();
        assert (minutes >= 0 && minutes <= 59);
        super.seconds = currentHours * 60 * 60 + minutes * 60 + currentSeconds;
    }

    public void setSeconds(byte seconds) {
        // super.seconds에서 초에 해당하는 부분을 seconds로 변경
        int currentHours = super.seconds / (60 * 60);
        int currentMinutes = super.getMinutes();
        assert (seconds >= 0 && seconds <= 59);
        super.seconds = currentHours * 60 * 60 + currentMinutes * 60 + seconds;
    }

    public void setTime(byte hours, byte minutes, byte seconds, boolean isAm) {
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        setIsBeforeMidday(isAm);    // 반드시 마지막에 호출해야함
    }

    public SevenSegmentDisplay[] getHoursDisplay() {
        return convertToDisplay(super.getHours());
    }

    public SevenSegmentDisplay[] getMinutesDisplay() {
        return convertToDisplay(super.getMinutes());
    }

    public SevenSegmentDisplay[] getSecondsDisplay() {
        return convertToDisplay(super.getSeconds());
    }

    private SevenSegmentDisplay[] convertToDisplay(byte value) {
        SevenSegmentDisplay[] result = new SevenSegmentDisplay[2];
        for (int i = 1; i >= 0; --i) {
            byte digit = (byte) (value % 10);
            result[i] = new SevenSegmentDisplay(digit);
            value /= 10;
        }

        return result;
    }
}
```

```java
public class SevenSegmentDisplay {
    enum Segment {
        A, B, C, D, E, F, G
    }

    private EnumSet<Segment> data;

    public SevenSegmentDisplay(byte digit) {
        switch (digit) {
            case 0:
                data = EnumSet.allOf(Segment.class);
                data.remove(Segment.G);
                break;
            case 1:
                data = EnumSet.of(Segment.B, Segment.C);
                break;
            case 2:
                data = EnumSet.of(Segment.A, Segment.B, Segment.G, Segment.E, Segment.D);
                break;
            case 3:
                data = EnumSet.of(Segment.A, Segment.B, Segment.G, Segment.C, Segment.D);
                break;
            case 4:
                data = EnumSet.of(Segment.F, Segment.G, Segment.B, Segment.C);
                break;
            case 5:
                data = EnumSet.of(Segment.A, Segment.F, Segment.G, Segment.C, Segment.D);
                break;
            case 6:
                data = EnumSet.of(Segment.A, Segment.F, Segment.G, Segment.C, Segment.D, Segment.E);
                break;
            case 7:
                data = EnumSet.of(Segment.A, Segment.B, Segment.C);
                break;
            case 8:
                data = EnumSet.allOf(Segment.class);
                break;
            case 9:
                data = EnumSet.of(Segment.A, Segment.B, Segment.G, Segment.F, Segment.C, Segment.D);
                break;
            default:
                assert false;
        }
    }

    public EnumSet<Segment> getSegments() {
        return data;
    }
}
```

### 상속을 하는 프로그래머의 흔한 사고방식

![img_81.png](pocu-note/COMP2500/week6/image/img_81.png)

개별 여러 개체에서 공통 부분을 찾아 일반화함

![img_82.png](pocu-note/COMP2500/week6/image/img_82.png)

사람은 구체적인 사례를 더 잘 이해하기 때문  
예외로 일반적(부모)에서 구체적(자식)으로 상속 설계를 할 때가 있는데, 이미 기존에 분류 체계가 있는 개념을 사용할 때 그렇게 할 수 있음

### 손목시계 추가하기

![img_83.png](pocu-note/COMP2500/week6/image/img_83.png)

- 손목시계의 특성은 wear, 기존의 상속관계에서 어디에 들어가는지 애매하다
    - `Clock` 클래스는 mount 때문에 바로 넣을 수 없음

![img_84.png](pocu-note/COMP2500/week6/image/img_84.png)
![img_85.png](pocu-note/COMP2500/week6/image/img_85.png)

그래서 벽시계 끼리 묶어서 `WallClock` 클래스 추가

![img_86.png](pocu-note/COMP2500/week6/image/img_86.png)

이제 `WristWatch` 손목시계 클래스 추가 가능

![img_87.png](pocu-note/COMP2500/week6/image/img_87.png)

손목 시계 클래스 하위에도 아날로그, 디지털을 추가하면 코드 중복이 발생

![img_88.png](pocu-note/COMP2500/week6/image/img_88.png)

상속 관계를 뒤집어서 아날로그, 디지털을 부모로 옮겼음  
여전히 코드 중복

### 다중 상속

![img_89.png](pocu-note/COMP2500/week6/image/img_89.png)

자바에는 없는 개념

![img_90.png](pocu-note/COMP2500/week6/image/img_90.png)

- 문제점은 Clock 클래스를 2번 상속받는 클래스들이 생김
    - 가장 하위 클래스

![img_91.png](pocu-note/COMP2500/week6/image/img_91.png)

- 일반적으로 다중 상속은 사용하지 말기

### 손목시계를 추가하면서 발견한 문제점: 양상이 달라지는 경우 상속으로 깔끔하게 해결할 수 없음

![img_92.png](pocu-note/COMP2500/week6/image/img_92.png)

포프쌤은 Aspect 라고 표현함

![img_93.png](pocu-note/COMP2500/week6/image/img_93.png)

- 현재 모델링에서 양상은 2가지
    - 시간을 어떻게 표현하는가
    - 시계를 어디에 장착하는가

#### 깔끔하지 않은 해결방법: 추상화

![img_94.png](pocu-note/COMP2500/week6/image/img_94.png)
![img_95.png](pocu-note/COMP2500/week6/image/img_95.png)

- wear, mount 동작을 추상화해서 attach
    - 아직은 괜찮은데 너무 추상화가 심해지면 의미를 해칠 수 있음
    - 시계를 속목에 붙이다?
    - 시계를 벽에 붙이다?

#### 깔끔한 해결방법: interface

![img_96.png](pocu-note/COMP2500/week6/image/img_96.png)

다형성

### 깊은 상속의 어려움

![img_97.png](pocu-note/COMP2500/week6/image/img_97.png)
![img_98.png](pocu-note/COMP2500/week6/image/img_98.png)

- 보통 1 ~ 2단계만 상속함
- 깊어질수록 이해하기 어려움
- 옳바른 의미를 잃어버릴 수 있음

### 미리 분류가 잘 되어있는 분야는 상속이 쉬움

![img_99.png](pocu-note/COMP2500/week6/image/img_99.png)

- 생물학은 잘 되어있어서 쉬움
- 하지만 실제로 코딩할 때 이런 상속이 잘 나올리가?
    - 도메인 지식에 따라 설계가 달라짐






