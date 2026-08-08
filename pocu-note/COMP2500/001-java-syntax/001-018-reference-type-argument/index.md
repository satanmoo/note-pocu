---
title: 참조형 인자, 열거형
tags:
  - COMP2500
  - week1
aliases:
  - 참조형 인자, 열거형
---
# 참조형 인자, 열거형

## 함수 호출과 참조형 인자

![img_131.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-1.png)
## 참조형 인자에 final 키워드 붙이기

![img_132.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-2.png)
![img_133.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-3.png)

`v1`, `v2`의 값의 수정을 금지하는 개념
- 참조형이라 이 값이 주소

C 에서 `int *const ptr` 개념

```c
int x = 10;
int y = 20;
int *const ptr = &x;  // ptr은 x를 가리킴

*ptr = 30;   // 가능: x의 값을 30으로 변경
ptr = &y;    // 오류: ptr이 다른 주소를 가리킬 수 없음
```

## 1차원 배열

![img_134.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-4.png)

## 다차원 배열

![img_135.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-5.png)
![img_136.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-6.png)

자바의 다차원 배열은 **jagged array** 개념
- 안쪽 배열의 길이가 다 다를 수 있음
- 포인터의 배열

## enum

![img_137.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-7.png)

## Java의 열거형에서 못 하는 것

![img_138.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-8.png)

열거형의 원소에 임의의 값을 대입하는 것 불가능

## Java의 열거형은 클래스형

![img_140.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-9.png)
![img_139.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-10.png)

## 열거형과 생성자

![img_141.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-11.png)

열거형이 클래스기 때문에 생성자 추가 가능
- 생성자는 암시적으로 `private`

![img_142.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-12.png)

열거형 개체를 생성할 때 `new` 사용 불가능
- 컴파일 에러
- 개발자가 직접 생성자를 호출하는 것을 방지하는 개념
	- 그래서 생성자가 암시적으로 `private`

## var

![img_143.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-13.png)

컴파일러가 추론할 수 있게 선언과 대입을 동시에
- 대입이 없으면 추론할 수 없어서 컴파일 에러

![img_144.png](pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/images/reference-type-argument-14.png)

`var[]` 같은 문법은 없음
- 컴파일 에러

```java
var n = {1, 2, 3};    // 컴파일 오류: Array initializer is not allowed here
var names = {"aa", "bb"};   // 컴파일 오류: Array initializer is not allowed here
```

위와 같이 `var` 과 **array initializer**을 동시에 사용할 수 없음
- array initializer 은 좌변의 배열 타입을 보고 자기 타입을 결정하는 개념이기 때문
- `int[] n = { 1, 2, 3};` 과 같이 좌변에 배열 타입이 있으면 잘 컴파일 됨
- https://docs.oracle.com/javase/specs/jls/se10/html/jls-14.html#jls-14.4 참고

## 복습 퀴즈

```java
// Vector.java  
public class Vector {  
    public int x;  
    public int y;  
    public int z;  
  
    public Vector(int x, int y, int z) {  
        this.x = x;  
        this.y = y;  
        this.z = z;  
    }  
}  
  
// Main.java  
public class Main  
{  
    public static void main(String args[]) {  
        Vector v = new Vector(1, 1, 1);  
  
        int x = 0;  
        foo(x, v);  
    }  
  
    public static void foo(int x, final Vector v) {  
        x = 4;  
  
        v.x = 5;  
        v.y = 7;  
        v.z = 6;  
    }  
}
```

### 1. 위 main() 함수에서 foo() 함수를 호출 후, x, v.x, v.y, v.z의 값은 무엇인가요?

`x`는 값형 `foo` 의 지역 변수 값의 변화는 바깥에 선언한 `x`에 영향주지 않음
- 매개변수 복사

참조형 `v`는 주소에 저장된 데이터가 바뀜

답: 0,5,7,6
