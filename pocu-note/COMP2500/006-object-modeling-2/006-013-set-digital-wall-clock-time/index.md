---
title: 디지털 벽시계 시간 맞추기
aliases:
  - 디지털 벽시계 시간 맞추기
tags:
  - COMP2500
  - week6
---
# 디지털 벽시계 시간 맞추기

## 디지털 벽시계 전용 기능 구현하기: 시/분/초를 따로 설정하기

![](pocu-note/COMP2500/006-object-modeling-2/006-013-set-digital-wall-clock-time/images/set-digital-wall-clock-time-1.png)

디지털시계는 크게 두 가지 방법이 있음
- 현실에 존재하는 동작 참고하기

## 디지털 벽시계 시간 맞추는 방법1: 시간을 더하고, set버튼을 누르는 방식

![](pocu-note/COMP2500/006-object-modeling-2/006-013-set-digital-wall-clock-time/images/set-digital-wall-clock-time-2.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-013-set-digital-wall-clock-time/images/set-digital-wall-clock-time-3.png)

"SET" 버튼으로 시/분/초 중에 선택

"up" 버튼으로 값 증가

추가가 예상되는 메서드는 슬라이드처럼 3개

## 디지털 벽시계 시간 맞추는 방법2: 숫자를 직접 입력

![](pocu-note/COMP2500/006-object-modeling-2/006-013-set-digital-wall-clock-time/images/set-digital-wall-clock-time-4.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-013-set-digital-wall-clock-time/images/set-digital-wall-clock-time-5.png)

결론적으로 방법2 선택

`setTime` 도우미 함수도 ==부활== 이라고 표현한 이유는 [[pocu-note/COMP2500/006-object-modeling-2/006-008-change-time-without-temporal-coupling/index|시간적 결합을 해결한 시간 바꾸기]]에서 모든 *setter* 을 제거했기 때문

![](pocu-note/COMP2500/006-object-modeling-2/006-013-set-digital-wall-clock-time/images/set-digital-wall-clock-time-6.png)

- 구현 방법은 자유
    - Wrap
	    - `setIsBeforeMidday` 호출 순서를 주의해야함 (받아올림)
		    - 시간적 결합에 따라 호출 순서가 생김
		    - 나머지 `setHours`, `setMinutes`, `setSeconds` 순서는 상관없음
    - Clamp

![](pocu-note/COMP2500/006-object-modeling-2/006-013-set-digital-wall-clock-time/images/set-digital-wall-clock-time-7.png)

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
}
```
