---
aliases:
  - 아날로그 벽시계의 기타 메서드들
tags:
  - COMP2500
  - week6
---
# 아날로그 벽시계의 기타 메서드들

## 아날로그 시계 시침/분침/초침의 각도와 관련된 기능 추가

![](pocu-note/COMP2500/006-object-modeling-2/006-009-analog-wall-clock-other-methods/images/analog-wall-clock-other-methods-1.png)

추가되는 기능은 다음과 같음
- 시/분/초 각도 *getter*
- tick
- mount

아래는 [[pocu-note/COMP2500/006-object-modeling-2/006-008-change-time-without-temporal-coupling/index|시간적 결합을 해결한 시간 바꾸기]] 에서 시/분/초 각도 계산이 추가된 코드

> [!NOTE] 시침의 각도는 분에 영향을 받는다.

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

![](pocu-note/COMP2500/006-object-modeling-2/006-009-analog-wall-clock-other-methods/images/analog-wall-clock-other-methods-2.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-009-analog-wall-clock-other-methods/images/analog-wall-clock-other-methods-3.png)

코드 실행 결과는 다음과 같음
