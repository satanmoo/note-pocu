---
aliases:
  - 7 세그먼트 디스플레이 추가하기
tags:
  - COMP2500
  - week6
---
# 7 세그먼트 디스플레이 추가하기

## 디지털 벽시계 전용 기능 구현하기: 7 세그먼트 디스플레이 추가하기

![](pocu-note/COMP2500/006-object-modeling-2/006-014-add-7-segment-display/images/add-7-segment-display-1.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-014-add-7-segment-display/images/add-7-segment-display-2.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-014-add-7-segment-display/images/add-7-segment-display-3.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-014-add-7-segment-display/images/add-7-segment-display-4.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-014-add-7-segment-display/images/add-7-segment-display-5.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-014-add-7-segment-display/images/add-7-segment-display-6.png)

`DigitalClock` 클래스에서 `SevenSegmentDisplay` 클래스를 사용하기 때문에 의존관계(==점선 화살표==)

![](pocu-note/COMP2500/006-object-modeling-2/006-014-add-7-segment-display/images/add-7-segment-display-7.png)

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
        // super.seconds에서 시에 해당하는 부분만 매개변수로 받은 hours로 변경, 나머지 분, 초는 그대로 유지
        int currentSecondsAndMinutesWithoutHours = super.seconds % (60 * 60);
        super.seconds = hours * 60 * 60 + currentSecondsAndMinutesWithoutHours;
    }

    public void setMinutes(byte minutes) {
        // super.minutes에서 분에 해당하는 부분만 매개변수로 받은 minutes로 변경, 나머지 시, 초는 그대로 유지
        int currentHours = super.seconds / (60 * 60);   // [0,11]
        int currentSeconds = super.getSeconds();
        assert (minutes >= 0 && minutes <= 59);
        super.seconds = currentHours * 60 * 60 + minutes * 60 + currentSeconds;
    }

    public void setSeconds(byte seconds) {
        // super.seconds에서 초에 해당하는 부분만 매개변수로 받은 seconds로 변경, 나머지 시, 분은 그대로 유지
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

