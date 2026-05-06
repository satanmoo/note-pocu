---
tags:
  - COMP2500
  - week1
aliases:
  - 주석, 연산자 우선순위, 산술 연산자
---
# 주석, 연산자 우선순위, 산술 연산자
## 주석

![img_83.png](pocu-note/COMP2500/001-java-syntax/001-013-comment/images/img_83.png)

## Javadoc 주석

![img_84.png](pocu-note/COMP2500/001-java-syntax/001-013-comment/images/img_84.png)
![img_85.png](pocu-note/COMP2500/001-java-syntax/001-013-comment/images/img_85.png)
![img_86.png](pocu-note/COMP2500/001-java-syntax/001-013-comment/images/img_86.png)
![img_87.png](pocu-note/COMP2500/001-java-syntax/001-013-comment/images/img_87.png)
![img_88.png](pocu-note/COMP2500/001-java-syntax/001-013-comment/images/img_88.png)
## 연산자

![img_89.png](pocu-note/COMP2500/001-java-syntax/001-013-comment/images/img_89.png)
![img_90.png](pocu-note/COMP2500/001-java-syntax/001-013-comment/images/img_90.png)

## 산술 연산자

![[pocu-note/COMP2500/001-java-syntax/001-013-comment/images/img_91.png]]

C와 다르게 boolean 타입이 정수가 아님
- 산술 연산자 사용 불가능
- char은 정수라서 산술 연산자 사용 가능

```java
public int fun() {
    long l = 123 + 4L;
    char ch = 'a' + 1;
    char uc = '\u1622' + 2;
    String s = "a" + "b" + "c" + "d" + "e" + "f" + "g" + "h";

    return 0;
}
```
