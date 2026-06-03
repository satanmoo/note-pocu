---
aliases:
  - 디지털 벽시계 분석 및 공통부분 찾기
tags:
  - COMP2500
  - week6
---
# 디지털 벽시계 분석 및 공통부분 찾기

## 디지털 벽시계 모델링

[[pocu-note/COMP2500/006-object-modeling-2/006-009-analog-wall-clock-other-methods/index|아날로그 벽시계의 기타 메서드들]] 에서 아날로그 시계 모델링은 끝났고, 상속을 이용해 디지털 벽시계를 모델링

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-1.png)

## 아날로그 벽시계와 디지털 벽시계의 비슷한 점

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-2.png)
시계의 본 목적
- 시/분/초 를 알려줌

벽시계와 비슷하게 벽에 걸 수 있음

## 아날로그 벽시계와 다른 점

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-3.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-4.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-5.png)

태엽(다이얼)을 돌리는 아날로그 시계와 다르게 시/분/초 각각 따로 설정
- 다이얼을 돌리면 초가 누적되어 분이되고, 분이 누적되어 시가 되고...

## 상속을 이용해 디지털 시계 모델링

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-6.png)

상속을 고려한 모델링
- 두 시계의 공통점은 부모 클래스로 만들기
- 차이점은 자식 클래스로 분리

### 부모 클래스 만들기

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-7.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-8.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-9.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-10.png)

`addSeconds()`는 디지털 시계에 없는 아날로그 시계 전용 기능
- 디지털 시계는 `add`보다는 `set`개념에 가까움

### 자식 클래스 만들기

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-11.png)
아직 부모 클래스 이름은 미정
### 부모 클래스 이름 짓기

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-12.png)

이제 기존의 아날로그 시계의 상태, 동작을 분리해 부모 클래스로 옮기기 완료

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

## 컴파일 에러

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-13.png)

분리하고 코드 실행하면 컴파일 오류 발생
- `Clock` 클래스는 자식 클래스의 메소드 `AnalogClock.addSeconds`를 알 수 없음

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-14.png) ^29f25f

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

`Clock.tick` 메서드 수정

동일한 코드가 `Clock` 그리고 `AnalogClock`에 모두 들어갔음
- 코드 중복 발생

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-15.png)

수정 후 다시 컴파일 에러 발생

`AnalogClock` 클래스에서 부모 클래스 `Clock`의멤버 `seconds`에 접근할 수 없음
- *private*

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-16.png)

부모 클래스 `Clock` 멤버변수 `seconds`의 접근제어자를 `protected`로 수정  
- `this` 키워드도 `super`로 변경
	- `this`해도 문법 상 오류는 없지만 가독성 때문에 명시적으로 `super`을 사용하는게 ==best practice==

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

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-17.png)

이제 코드 실행하면 정상 결과

## 코드 중복 제거

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-18.png)

위에서 `tick` 메소드를 수정할 때 코드 중복이 발생함
- [[#^29f25f]] 

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-19.png)

"메서드 밖"은 클래스를 말함

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-20.png)

자식 클래스에서 사용 가능한 상수
- 부모 클래스에 선언하고, `protected` 접근제어자
- `static`으로 개체에 종속되지 않게 

![](pocu-note/COMP2500/006-object-modeling-2/006-010-analyze-digital-wall-clock-and-find-commonality/images/analyze-digital-wall-clock-and-find-commonality-21.png)

변경 사항 3가지 중 클래스 다이어그램에 들어나는 것은 `seconds`의 접근 제어자 변화

나머지는 클래스 다이어그램 표기상 들어나지 않음
