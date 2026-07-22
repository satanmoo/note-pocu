---
aliases:
  - 옵저버 패턴 예
tags:
  - COMP2500
  - week12
---
# 옵저버 패턴 예

![](pocu-note/COMP2500/012-design-patterns/012-021-observer-pattern-example/images/observer-pattern-example-1.png)
![](pocu-note/COMP2500/012-design-patterns/012-021-observer-pattern-example/images/observer-pattern-example-2.png)

핸드폰의 푸시 알람이 pub-sub 패턴 기반

![](pocu-note/COMP2500/012-design-patterns/012-021-observer-pattern-example/images/observer-pattern-example-3.png)

event-driven architecture

![](pocu-note/COMP2500/012-design-patterns/012-021-observer-pattern-example/images/observer-pattern-example-4.png)
![](pocu-note/COMP2500/012-design-patterns/012-021-observer-pattern-example/images/observer-pattern-example-5.png)
![](pocu-note/COMP2500/012-design-patterns/012-021-observer-pattern-example/images/observer-pattern-example-6.png)

다형적으로 `IFundingCallback` 인터페이스를 구현하는 구체 클래스 구현

![](pocu-note/COMP2500/012-design-patterns/012-021-observer-pattern-example/images/observer-pattern-example-7.png)

- `subscribe()` 메서드는 `LogManager` 클래스의 `addHandler()` 메서드랑 역할이 똑같음
	- [[pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/index|바른 책임 연쇄 패턴 예]] 참고
	- 구독자 추가
- `support()` 메서드는 후원하는 메서드, 후원하면 이 메서드 내부에서 `onMoneyRaised()` 콜백을 호출해 각 구독자에게 동작을 하게 함
	- `onMoneyRaised()` 다형적으로 호출되죠?

![](pocu-note/COMP2500/012-design-patterns/012-021-observer-pattern-example/images/observer-pattern-example-8.png)

C 과목에서 로그 콜백 함수로 등록하는 예제랑 똑같음

아래는 함수 포인터로 콜백 함수 등록받는 예제

```c
#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <time.h>

#include "error_handler.h"

static void (*s_handler)(const char*) = NULL;

void register_error_handler(void (*handler)(const char* msg))
{
    s_handler = handler;
}

void log_error(const char* msg)
{
    if (s_handler != NULL) {
        s_handler(msg);
    }
}

void default_error_handler(const char* msg)
{
    time_t now;
    struct tm* local;

    now = time(NULL);

    local = localtime(&now);

    fprintf(stderr, "[%02d:%02d:%02d] %s\n", 
        local->tm_hour, local->tm_min, local->tm_sec,
        msg);
}
```
