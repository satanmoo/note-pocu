# Week6




### 아날로그 시계 시침/분침/초침의 각도 추가

![img_46.png](pocu-note/COMP2500/006-object-modeling-2/image/img_46.png)

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

![img_47.png](pocu-note/COMP2500/006-object-modeling-2/image/img_47.png)

이 코드들은 생략

1초 움직이는 동작, 벽에 시계를 거는 동작

### 디지털 벽시계 모델링: 공통점 분리해 부모 클래스 만들기

아날로그 시계와 공통점과 차이점을 찾아보기

![img_48.png](pocu-note/COMP2500/006-object-modeling-2/image/img_48.png)
![img_49.png](pocu-note/COMP2500/006-object-modeling-2/image/img_49.png)
![img_50.png](pocu-note/COMP2500/006-object-modeling-2/image/img_50.png)

부모 클래스의 이름은 일단 미정

![img_51.png](pocu-note/COMP2500/006-object-modeling-2/image/img_51.png)

공통으로 재활용이 가능한 멤버는 부모 클래스로 옮김

![img_52.png](pocu-note/COMP2500/006-object-modeling-2/image/img_52.png)

`addSeconds()`는 디지털 벽시계에는 없는 기능

![img_53.png](pocu-note/COMP2500/006-object-modeling-2/image/img_53.png)

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

![img_54.png](pocu-note/COMP2500/006-object-modeling-2/image/img_54.png)

`Clock.tick()` 내부에서 `addSeconds()`를 호출하지만, Clock 클래스에는 `addSeconds()`가 존재하지 않음

![img_55.png](pocu-note/COMP2500/006-object-modeling-2/image/img_55.png)

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

![img_56.png](pocu-note/COMP2500/006-object-modeling-2/image/img_56.png)

실행하면 다른 오류 발생, AnalogClock 클래스에서 멤버변수에 접근할 때 문제가 발생  
`this.seconds`는 AnalogClock 클래스의 멤버변수가 아님

![img_57.png](pocu-note/COMP2500/006-object-modeling-2/image/img_57.png)

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

![img_58.png](pocu-note/COMP2500/006-object-modeling-2/image/img_58.png)

이제 코드 실행하면 정상 결과

![img_59.png](pocu-note/COMP2500/006-object-modeling-2/image/img_59.png)

추가적으로 코드 중복 제거하자

![img_60.png](pocu-note/COMP2500/006-object-modeling-2/image/img_60.png)

메서드 밖에 정의, 즉 클래스에 선언

![img_61.png](pocu-note/COMP2500/006-object-modeling-2/image/img_61.png)

이 때 부모 클래스에 선언하고, `protected` 접근제어자를 붙여서 자식 클래스에서도 사용할 수 있게  
`static`으로 개체에 종속되지 않게 상수화

![img_62.png](pocu-note/COMP2500/006-object-modeling-2/image/img_62.png)

- 최종 결과
    - 상수는 클래스 다이어그램에 표시 X
    - `tick()`의 구현도 클래스 다이어그램에 표시 X

![img_63.png](pocu-note/COMP2500/006-object-modeling-2/image/img_63.png)

### 디지털 벽시계 전용 기능 구현하기: 오전/오후 구분 및 출력

이제 디지털 벽시계 클래스를 만들고 전용 기능을 추가해야함

![img_64.png](pocu-note/COMP2500/006-object-modeling-2/image/img_64.png)

- AM/PM을 기억하는 별도의 불리언 변수를 추가하는 1번의 방법은 DigitalClock 클래스에 새 멤버변수를 추가해야함
- 2번의 방법은 새로운 멤버 변수를 추가하지 않고 부모 클래스 Clock `seconds`를 사용하기 때문에 관리하기 더 쉬움
    - 일반화 개념
    - 12시간 체제는 24시간 체제의 특별한 경우

![img_65.png](pocu-note/COMP2500/006-object-modeling-2/image/img_65.png)

- 클래스 다이어그램에서는 별 다른 변화가 없음
- 대신 클래스 다이어그램에서 볼 수 없는 구현을 변화해야함
    - Clock 클래스의 시간 체제를 24시간 체제로 변경
    - 자식 클래스를 추가하면서 부모 클래스가 변할 수 있음을 보여주는 좋은 예

![img_66.png](pocu-note/COMP2500/006-object-modeling-2/image/img_66.png)

![img_67.png](pocu-note/COMP2500/006-object-modeling-2/image/img_67.png)

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

![img_68.png](pocu-note/COMP2500/006-object-modeling-2/image/img_68.png)

![img_69.png](pocu-note/COMP2500/006-object-modeling-2/image/img_69.png)

- 시/분/초를 반환하는 함수들을 각각 자식 클래스에 맞게 커스터마이징 하기?

![img_70.png](pocu-note/COMP2500/006-object-modeling-2/image/img_70.png)

- 문제점:
    - Clock 형 변수를 통해 `getHours`같은 메서드를 호출할 수 없음
    - 부모 클래스에서 일반적인 메서드가 사라짐

![img_71.png](pocu-note/COMP2500/006-object-modeling-2/image/img_71.png)

- `getHours`같은 메서드는 Clock 클래스에 그대로 둠
    - 어차피 아날로그 시계나 디지털 시계나 분/초 표현은 동일하기 때문에 시간 표현(getter)만 보면 됨
- 필요에 따라 자식클래스에서 전용 메서드를 추가
    - 별로 좋지 못한 방법
    - 다형성을 이용하면 더 좋은 해결법!

### 디지털 벽시계 전용 기능 구현하기: 시간 맞추는 방식

#### 방법1: 시간을 더하고, set버튼을 누르는 방식

![img_72.png](pocu-note/COMP2500/006-object-modeling-2/image/img_72.png)
![img_73.png](pocu-note/COMP2500/006-object-modeling-2/image/img_73.png)

#### 방법2: 숫자를 직접 입력

![img_74.png](pocu-note/COMP2500/006-object-modeling-2/image/img_74.png)

![img_75.png](pocu-note/COMP2500/006-object-modeling-2/image/img_75.png)

- 결론적으로 방법2 선택
    - `setTime` 도우미 함수도 부활

![img_76.png](pocu-note/COMP2500/006-object-modeling-2/image/img_76.png)

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

![img_77.png](pocu-note/COMP2500/006-object-modeling-2/image/img_77.png)

![img_78.png](pocu-note/COMP2500/006-object-modeling-2/image/img_78.png)

![img_79.png](pocu-note/COMP2500/006-object-modeling-2/image/img_79.png)

- 7 세그먼트 구현방법 3가지

![img_80.png](pocu-note/COMP2500/006-object-modeling-2/image/img_80.png)

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

![img_81.png](pocu-note/COMP2500/006-object-modeling-2/image/img_81.png)

개별 여러 개체에서 공통 부분을 찾아 일반화함

![img_82.png](pocu-note/COMP2500/006-object-modeling-2/image/img_82.png)

사람은 구체적인 사례를 더 잘 이해하기 때문  
예외로 일반적(부모)에서 구체적(자식)으로 상속 설계를 할 때가 있는데, 이미 기존에 분류 체계가 있는 개념을 사용할 때 그렇게 할 수 있음

### 손목시계 추가하기

![img_83.png](pocu-note/COMP2500/006-object-modeling-2/image/img_83.png)

- 손목시계의 특성은 wear, 기존의 상속관계에서 어디에 들어가는지 애매하다
    - `Clock` 클래스는 mount 때문에 바로 넣을 수 없음

![img_84.png](pocu-note/COMP2500/006-object-modeling-2/image/img_84.png)
![img_85.png](pocu-note/COMP2500/006-object-modeling-2/image/img_85.png)

그래서 벽시계 끼리 묶어서 `WallClock` 클래스 추가

![img_86.png](pocu-note/COMP2500/006-object-modeling-2/image/img_86.png)

이제 `WristWatch` 손목시계 클래스 추가 가능

![img_87.png](pocu-note/COMP2500/006-object-modeling-2/image/img_87.png)

손목 시계 클래스 하위에도 아날로그, 디지털을 추가하면 코드 중복이 발생

![img_88.png](pocu-note/COMP2500/006-object-modeling-2/image/img_88.png)

상속 관계를 뒤집어서 아날로그, 디지털을 부모로 옮겼음  
여전히 코드 중복

### 다중 상속

![img_89.png](pocu-note/COMP2500/006-object-modeling-2/image/img_89.png)

자바에는 없는 개념

![img_90.png](pocu-note/COMP2500/006-object-modeling-2/image/img_90.png)

- 문제점은 Clock 클래스를 2번 상속받는 클래스들이 생김
    - 가장 하위 클래스

![img_91.png](pocu-note/COMP2500/006-object-modeling-2/image/img_91.png)

- 일반적으로 다중 상속은 사용하지 말기

### 손목시계를 추가하면서 발견한 문제점: 양상이 달라지는 경우 상속으로 깔끔하게 해결할 수 없음

![img_92.png](pocu-note/COMP2500/006-object-modeling-2/image/img_92.png)

포프쌤은 Aspect 라고 표현함

![img_93.png](pocu-note/COMP2500/006-object-modeling-2/image/img_93.png)

- 현재 모델링에서 양상은 2가지
    - 시간을 어떻게 표현하는가
    - 시계를 어디에 장착하는가

#### 깔끔하지 않은 해결방법: 추상화

![img_94.png](pocu-note/COMP2500/006-object-modeling-2/image/img_94.png)
![img_95.png](pocu-note/COMP2500/006-object-modeling-2/image/img_95.png)

- wear, mount 동작을 추상화해서 attach
    - 아직은 괜찮은데 너무 추상화가 심해지면 의미를 해칠 수 있음
    - 시계를 속목에 붙이다?
    - 시계를 벽에 붙이다?

#### 깔끔한 해결방법: interface

![img_96.png](pocu-note/COMP2500/006-object-modeling-2/image/img_96.png)

다형성

### 깊은 상속의 어려움

![img_97.png](pocu-note/COMP2500/006-object-modeling-2/image/img_97.png)
![img_98.png](pocu-note/COMP2500/006-object-modeling-2/image/img_98.png)

- 보통 1 ~ 2단계만 상속함
- 깊어질수록 이해하기 어려움
- 옳바른 의미를 잃어버릴 수 있음

### 미리 분류가 잘 되어있는 분야는 상속이 쉬움

![img_99.png](pocu-note/COMP2500/006-object-modeling-2/image/img_99.png)

- 생물학은 잘 되어있어서 쉬움
- 하지만 실제로 코딩할 때 이런 상속이 잘 나올리가?
    - 도메인 지식에 따라 설계가 달라짐






