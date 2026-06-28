# 조건문

## switch/case 문에 String과 enum을 사용할 수 있는가?

YES

## Java는 switch의 fall-through를 컴파일 타임에 막아주는가?

NO

- C#은 막아줌
- Java는 막아주지 않으므로 `break`를 넣는 것이 좋은 습관

## 다음 switch 문에 대해 답하라

```java
public static void printMood(String season) {
    switch (season) {
        case "spring":
            System.out.println("happy");
        case "fall":
            System.out.println("sad");
        case "summer":
            System.out.println("hot");
        case "winter":
            System.out.println("cold");
        default:
            System.out.println("huh?");
    }
}
```

### printMood("Winter") 의 출력은?

```text
huh?
```

- switch의 case 매칭은 대소문자를 구분함 → "Winter"는 어떤 case와도 일치하지 않음
- 일치하는 case가 없어 default 실행

### printMood("winter") 의 출력은?

```text
cold
huh?
```

- "winter" case가 일치
- `break`가 없어 fall-through 발생 → default까지 이어서 실행
