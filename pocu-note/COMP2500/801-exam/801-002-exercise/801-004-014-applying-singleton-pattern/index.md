---
title: 싱글턴 패턴의 응용
---
# 싱글턴 패턴의 응용

## 다음 싱글턴 코드의 문제점은? 어떻게 고치면 좋은가?

```java
public class GameManager {
    private static GameManager instance;
    private int level;

    private GameManager(int level) {
        this.level = level;
    }

    public static GameManager getInstance(int level) {
        if (instance == null) {
            instance = new GameManager(level);
        }
        return instance;
    }
}
```

문제점

- `getInstance(level)`의 `level` 인자는 **처음 호출(초기화) 때만** 쓰이고, 이후 호출에선 무시됨 → 혼란
- 하나의 함수가 초기화 + 개체 반환 **두 역할**을 모두 함 (역할 과다)

고치는 방법: 초기화와 반환을 분리

```java
public class GameManager {
    private static GameManager instance;
    private int level;

    private GameManager(int level) {
        this.level = level;
    }

    public static void createInstance(int level) {
        if (instance == null) {
            instance = new GameManager(level);
        }
    }

    public static GameManager getInstance() {
        return instance;
    }
}
```

- `createInstance(level)`: 초기화 전용 (인자 받음)
- `getInstance()`: 반환 전용 (인자 없음)

## 위 변형(createInstance / getInstance 분리)의 단점은?

`getInstance()`를 `createInstance()`보다 먼저 호출하면 개체가 초기화되지 않은(유효하지 않은) 상태

- OOP에서는 개체가 생성되면 항상 유효한 상태여야 하는데, 이를 어김 → OOP 정신에 어긋남
- 그래도 `createInstance()` / `deleteInstance()`가 명시적이라 까먹기 어려워 활용 가치는 있음
