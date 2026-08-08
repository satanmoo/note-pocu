---
title: 조건문
tags:
  - COMP2500
  - week1
aliases:
  - 조건문
---
# 조건문
## if 문

![img_118.png](pocu-note/COMP2500/001-java-syntax/001-016-conditional-statement/images/conditional-statement-1.png)

## switch/case 문

![img_119.png](pocu-note/COMP2500/001-java-syntax/001-016-conditional-statement/images/conditional-statement-2.png)
![img_120.png](pocu-note/COMP2500/001-java-syntax/001-016-conditional-statement/images/conditional-statement-3.png)

> [!NOTE] `String` 그리고 `enum`이 case에 사용될 수 있음

![img_121.png](pocu-note/COMP2500/001-java-syntax/001-016-conditional-statement/images/conditional-statement-4.png)
![img_122.png](pocu-note/COMP2500/001-java-syntax/001-016-conditional-statement/images/conditional-statement-5.png)

fall-through를 컴파일 타임에 막아주진 않음
- C# 은 막아줌

좋은 습관은 `break` 넣기

## 복습 퀴즈

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

### 1. printMood("Winter")를 실행하면 출력되는 결과는 무엇인가요?

default 케이스 실행

답:

```text
huh?

```

### 2. printMood("winter")를 실행하면 출력되는 결과는 무엇인가요?

"winter" 케이스 실행

break 문이 없기 때문에 fall-through 발생

답:

```text
cold
huh?

```
