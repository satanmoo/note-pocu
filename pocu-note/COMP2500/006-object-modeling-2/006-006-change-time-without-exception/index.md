---
aliases:
  - 예외 없이 시간 바꾸기
tags:
  - COMP2500
  - week6
---
# 예외 없이 시간 바꾸기

## 실세계의 시계

![](pocu-note/COMP2500/006-object-modeling-2/006-006-change-time-without-exception/images/change-time-without-exception-1.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-006-change-time-without-exception/images/change-time-without-exception-2.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-006-change-time-without-exception/images/change-time-without-exception-3.png)

## Clamp

![](pocu-note/COMP2500/006-object-modeling-2/006-006-change-time-without-exception/images/change-time-without-exception-4.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-006-change-time-without-exception/images/change-time-without-exception-5.png)

```java
// 범위를 제한하는 clamp 함수
private byte clamp(byte value, byte min, byte max) {
    return (byte) Math.min(Math.max(value, min), max);
}
```

위와 같이 헬퍼 함수로 빼는게 좋음
- max, min에서 실수하기 쉬움
	- 실수할 가능성을 낮추 코드가 유지보수하기 좋은 코드

![](pocu-note/COMP2500/006-object-modeling-2/006-006-change-time-without-exception/images/change-time-without-exception-6.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-006-change-time-without-exception/images/change-time-without-exception-7.png)

아날로그 시계는 Clamp로 돌지 않음

## Wrap

![](pocu-note/COMP2500/006-object-modeling-2/006-006-change-time-without-exception/images/change-time-without-exception-8.png)

최소값과 최대값이 연결됨
- 오버플로우와 유사

![](pocu-note/COMP2500/006-object-modeling-2/006-006-change-time-without-exception/images/change-time-without-exception-9.png)

hours의 범위는 `[1, 23]`
- 1을 빼고 나머지 연산하고 나중에 1을 더하는 방식

![](pocu-note/COMP2500/006-object-modeling-2/006-006-change-time-without-exception/images/change-time-without-exception-10.png)
