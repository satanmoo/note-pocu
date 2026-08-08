---
title: 오전/오후 구분하기
aliases:
  - 오전/오후 구분하기
tags:
  - COMP2500
  - week6
---
# 오전/오후 구분하기

## 디지털 벽시계 추가

![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-1.png)

`Clock` 을 상속받는 건 명확함

![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-2.png)

위 3개 기능은 디지털 벽시계 전용 기능

"시간 맞추는 방식"
- 다이얼 돌리는게 아니라, 세팅 버튼으로 설정

## 디지털 벽시계 전용 기능 구현하기: 오전/오후 구분 및 출력

![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-3.png)

아날로그 벽시계는 12시간 체제

![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-4.png)

"AM/PM을 기억하는 별도의 불리언 변수를 추가하는" 1번의 방법
- `DigitalClock` 클래스에 새 멤버변수를 추가해야함

2번의 방법은 새로운 멤버 변수를 추가하지 않고 부모 클래스 `Clock`의 `seconds`를 사용하기 때문에 1번 방법보다 관리하기 유리함
- 일반화 개념
- 24시간 체제가 더 일반적인 개념
- 12시간 체제는 24시간 체제의 특별한 경우

![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-5.png)

2번 방법 채택

![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-6.png)

"더 큰 변화"는 다음과 같음
- `Clock` 클래스의 시간 체제를 24시간 체제로 변경

참고로 이 예시가 자식 클래스를 추가하면서 부모 클래스가 변할 수 있음을 보여주는 예
- 부모 클래스 `Clock`의 시간 체제가 변했음

> [!NOTE] 인간의 추상화 능력
> 
> 자식 클래스를 추가하다 보면 패턴에 따라 공통 분모를 뽑아내는 추상화를 수행하고, 부모 클래스가 변할 수 있음
> 
> 처음에 몰랐던 공통의 개념이 자식을 추가하다 보면 보임

![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-7.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-8.png)

부모 클래스인 `Clock`이 변경되어 `AnalogClock`도 변경됨

> [!WARNING] 주의 사항
> 
> 부모 클래스 변경에 조심해야 함
> 
> 이번 예시처럼 부모 클래스가 바뀌어 자식 클래스를 모조리 변경하는 상황이 생기면 협업하는 입장에서 곤란하겠지? 특히 외부에 제공하는 제품일 때

![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-9.png)

부모 클래스 `Clock`에서 시를 보여줄 때는 여전히 12시간 체제로 반환
- ==시간을 저장할 때 만 ==24시간 체제로 저장하도록 변햠

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

## `DigitalClock` 클래스

![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-10.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-11.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-011-distinguish-am-and-pm/images/distinguish-am-and-pm-12.png)
