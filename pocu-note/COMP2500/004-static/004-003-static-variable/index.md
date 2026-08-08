---
title: 정적 멤버 변수
tags:
  - COMP2500
  - week4
aliases:
  - 정적 멤버 변수
---
# 정적 멤버 변수

## 클래스는 개체의 상위 개념

![img_21.png](pocu-note/COMP2500/004-static/004-003-static-variable/images/static-variable-1.png)
![img_22.png](pocu-note/COMP2500/004-static/004-003-static-variable/images/static-variable-2.png)

개체의 개수를 알고 싶을 때 개체보다 상위 개념인 클래스 단위의 작업이 필요함

![img_23.png](pocu-note/COMP2500/004-static/004-003-static-variable/images/static-variable-3.png)
![img_24.png](pocu-note/COMP2500/004-static/004-003-static-variable/images/static-variable-4.png)
![img_25.png](pocu-note/COMP2500/004-static/004-003-static-variable/images/static-variable-5.png)

개체의 멤버 변수는 다른 개체의 정보를 반영할 수 없음

![img_26.png](pocu-note/COMP2500/004-static/004-003-static-variable/images/static-variable-6.png)

## 정적 멤버 변수

![img_27.png](pocu-note/COMP2500/004-static/004-003-static-variable/images/static-variable-7.png)

UML에서 정적 메서드와 마찬가지로 밑줄
- [[pocu-note/COMP2500/004-static/004-001-static-method/index#클래스 다이어그램과 정적 멤버 함수|정적 메서드와 클래스 다이어그램]] 참고

![img_28.png](pocu-note/COMP2500/004-static/004-003-static-variable/images/static-variable-8.png)
![img_29.png](pocu-note/COMP2500/004-static/004-003-static-variable/images/static-variable-9.png)
![img_30.png](pocu-note/COMP2500/004-static/004-003-static-variable/images/static-variable-10.png)

개체를 생성할 때 호출되는 함수는 생성자
생성자를 호출할 때 정적 변수에 값을 더하면 개체의 개수를 셀 수 있음

`this` 붙여도, 클래스 이름을 붙여도 상관 없음
- 내부적으로 범위로 탐색
	- 생성자 블록에서 `numCreated` 지역 변수가 없기 때문에 상위 블록으로 올라감
		- 상위 블록은 클래스 범위
	- 클래스 범위에서 `numCreated` 정적 변수를 찾고 값을 증가

아래와 같이 클래스 레벨에서 멤버 변수 선언을 할 때 static 멤버 변수와 그냥 멤버 변수의 이름이 같으면 **컴파일 에러**

> [!quote] [JLS(Java Language Specification) §8.3 Field Declarations](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.3)
> 
> It is a compile-time error for the body of a class to declare two fields with the same name.

modifier(static/final/접근 제어자 등)에 상관 없이, 클래스 본문 안의 모든 필드는 같은 namespace

```java
public class Pig {

    private int x;
    static private int x;   // COMPILE ERROR

    static public int boom() {
        return 0;
    }
}
```
