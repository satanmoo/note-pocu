---
aliases:
  - 받아올림도 하는 시간 바꾸기
tags:
  - COMP2500
  - week6
---
# 받아올림도 하는 시간 바꾸기

## 받아올림

![](pocu-note/COMP2500/006-object-modeling-2/006-007-change-time-with-carry/images/change-time-with-carry-1.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-007-change-time-with-carry/images/change-time-with-carry-2.png)
full 코드는 아래에서 확인

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

![](pocu-note/COMP2500/006-object-modeling-2/006-007-change-time-with-carry/images/change-time-with-carry-3.png)

## 시간적 결합(temporal coupling)

![](pocu-note/COMP2500/006-object-modeling-2/006-007-change-time-with-carry/images/change-time-with-carry-4.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-007-change-time-with-carry/images/change-time-with-carry-5.png)

기존에는 각 setter가 다른 멤버 변수에 의존하지 않음
- 따라서 setter 호출 순서는 중요하지 않음

![](pocu-note/COMP2500/006-object-modeling-2/006-007-change-time-with-carry/images/change-time-with-carry-6.png)

수정된 setter은 호출 순서를 지켜야함

![](pocu-note/COMP2500/006-object-modeling-2/006-007-change-time-with-carry/images/change-time-with-carry-7.png)

setTime()에서 시, 분, 초를 한번에 설정할 때 `setHours()`, `setMinutes`(), `setSeconds()` 순서대로 호출해야함

![](pocu-note/COMP2500/006-object-modeling-2/006-007-change-time-with-carry/images/change-time-with-carry-8.png)
