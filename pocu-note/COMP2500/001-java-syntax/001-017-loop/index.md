---
tags:
  - COMP2500
  - week1
aliases:
  - 반복문
---
# 반복문

## continue, break, goto

![img_123.png](pocu-note/COMP2500/001-java-syntax/001-017-loop/images/img_123.png)
## break 라벨 이름

![img_124.png](pocu-note/COMP2500/001-java-syntax/001-017-loop/images/img_124.png)
![img_125.png](pocu-note/COMP2500/001-java-syntax/001-017-loop/images/img_125.png)

라벨이 달린 코드 블록(반복문)을 탈출

![img_126.png](pocu-note/COMP2500/001-java-syntax/001-017-loop/images/img_126.png)

`break`를 감싸고 있는 블록을 탈출하는 개념
- 점프하는 개념이 아님

> [!WARNING] "break를 감싸고 있는 라벨로만 점프 가능"이라는 표현은 애매함
> 
> 라벨로 점프하기 보다는, 라벨 블록을 탈출하는 개념

## continue 라벨 이름

![img_127.png](pocu-note/COMP2500/001-java-syntax/001-017-loop/images/img_127.png)

라벨이 달린 코드 블록의 다음 iteration 진행

아래 두 코드는 동일하게 동작함

```java
public static void test() {
    outer1:
    for (int i = 0; i < 3; i++) {
        outer2:
        for (int j = i; j < 3; j++) {
            for (int k = j; k < 3; k++) {
                if (k == 1) {
                    continue;
                }
                System.out.println(i);
                System.out.println(j);
                System.out.println(k);
                System.out.println("--");
            }
        }
    }
}
```

```java
public static void test() {
    outer1:
    for (int i = 0; i < 3; i++) {
        outer2:
        for (int j = i; j < 3; j++) {
            inner:
            for (int k = j; k < 3; k++) {
                if (k == 1) {
                    continue inner;
                }
                System.out.println(i);
                System.out.println(j);
                System.out.println(k);
                System.out.println("--");
            }
        }
    }
}
```

## foreach 스타일

![img_128.png](pocu-note/COMP2500/001-java-syntax/001-017-loop/images/img_128.png)

`for` 키워드 그대로 활용
