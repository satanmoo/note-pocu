---
title: 시간적 결합을 해결한 시간 바꾸기
aliases:
  - 시간적 결합을 해결한 시간 바꾸기
tags:
  - COMP2500
  - week6
---
# 시간적 결합을 해결한 시간 바꾸기

[[pocu-note/COMP2500/006-object-modeling-2/006-007-change-time-with-carry/index|받아올림도 하는 시간 바꾸기]]의 *시간적 결합 관계* 는 한눈에 보이지 않아서 실수하기 쉬움  
- 실제 시계에 그 해결책이 있음

![](pocu-note/COMP2500/006-object-modeling-2/006-008-change-time-without-temporal-coupling/images/change-time-without-temporal-coupling-1.png)

시계 태엽(분침)을 돌리면 분침도 이동하고 시침도 동시에 이동함  
통합해서 가장 작은 단위인 초 단위로 적용하면 됨

![](pocu-note/COMP2500/006-object-modeling-2/006-008-change-time-without-temporal-coupling/images/change-time-without-temporal-coupling-2.png)

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

아날로그 시계라서 12시까지 고려
- 음수일 때 `60 * 60 * 12`를 더함

시, 분, 초는 모두 `byte` 자료형으로 충분함
- 시의 범위 `[0, 11]`
- 분, 초의 범위 `[0, 59]`

매개변수 `seconds` 자료형은 `short`
- 넉넉하게 크게 설정

`this.seconds + seconds` 에서 매개변수 `seconds`가 short의 최대값이 들어오는 오버플로우 발생을 막기 위해 좌변의 `value`의 자료형은 `int`

음수에 대한 처리는 처음에 1번하면 이후 초, 분, 시를 구하는 나머지 연산에서 `value`값은 양수일 수 밖에 없음
- `-1`시간을 더하는 개념이나 `11`시간을 더하는 개념이나 동일하

### `addSeconds()` 메소드의 복잡함

![](pocu-note/COMP2500/006-object-modeling-2/006-008-change-time-without-temporal-coupling/images/change-time-without-temporal-coupling-3.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-008-change-time-without-temporal-coupling/images/change-time-without-temporal-coupling-4.png)

setter의 매개변수는 한 개인데 실제로 3개의 멤버 변수를 변경
- 상태를 저장하는 멤버 변수가 너무 많음

![](pocu-note/COMP2500/006-object-modeling-2/006-008-change-time-without-temporal-coupling/images/change-time-without-temporal-coupling-5.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-008-change-time-without-temporal-coupling/images/change-time-without-temporal-coupling-6.png)

이럴 때 상태를 저장하는 변수를 하나로 관리  
- 시/분/초를 알고 싶을 때마다 계산해 보여주기

![](pocu-note/COMP2500/006-object-modeling-2/006-008-change-time-without-temporal-coupling/images/change-time-without-temporal-coupling-7.png)

넉넉하게 byte에서 int로 확장

초기화할 때 0시, 0분, 0초로 초기화
- before 구현에는 시간을 12로 초기화
    - 시계는 12부터 시작해서 1,2 ... 11까지 표현하니까

after 구현은 보여주기용 데이터와 저장하는 데이터를 분리함
- 저장할 때 초로 통합해서 저장함
	- 초로 통합했기에 0시, 0분, 0초로 시작
		- 시계를 구매하고 미개봉 상태 
	- **데이터 추상화** 개념
		- 클래스 외부에서는 어떻게 저장하는 지 모름
		- 클래스 외부에서는 오직 시, 분 , 초로 표현하는 것에 관심

before 구현은 보여주기 용도의 데이터와 상태 저장용 데이터를 구분하지 않았음

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

`getter`에서 `this.seconds`가 음수인지 확인할 필요 없음
- 외부에서 호출하는 `addSeconds` 함수에 매개변수 `seconds`는 음수가 들어올 수 있음
	- 하지만 `this.seconds`값을 설정할 때 처리해서 반드시 양수가 되도록 설정함
		- 내부의 데이터(`this.seconds`)는 양수로 유지
			- 내부의 상태를 유효하게 유지하는 캡슐화 개념
