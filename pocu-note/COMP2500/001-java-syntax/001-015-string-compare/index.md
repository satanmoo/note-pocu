---
tags:
  - COMP2500
  - week1
aliases:
  - 문자열 비교
---
# 문자열 비교

## `==` 연산자와 문자열

![img_105.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-1.png)

![img_106.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-2.png)

`==` 비교 연산자는 참조형의 경우 주소를 비교
- 참조형 변수의 독립적인 저장 공간에 주소값이 저장되어 있기 때문

![img_107.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-3.png)

[[pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/index#영상 퀴즈|대입 연산자, 논리 연산자, 캐스팅]] 에서 다룬 **String literal pool** 매커니즘 참고

## `equals()` 메서드

![img_108.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-4.png)

문자열 내용을 비교함
- 주소값이 아니라 내용을 비교
## 연산자 오버로딩

![img_109.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-5.png)
![img_110.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-6.png)
![img_111.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-7.png)

```java
// Vector.java
public class Vector {
    public int x;
    public int y;

    public Vector(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

// Main.java
Vector v0 = new Vector(1, 1);
Vector v1 = new Vector(2, 2);

Vector v2 = v0 + v1;    // COMPILE ERROR!
```

## Java는 연산자 오버로딩 지원 X

![img_112.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-8.png)
![img_113.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-9.png)

문자열의 `+` 연산자는 성능에 좋지 않음
- 문자열이 새로 생성됨
- [[pocu-note/COMP2500/001-java-syntax/001-010-char-bool-string/index#`String` immutable|char, bool, String]] 에서 다룬 immutable 성질

![img_114.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-10.png)

## 비트 이동 연산자

![img_115.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-11.png)

## `>>>` 연산자

![img_116.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-12.png)

Java에서는 부호 없는 자료형이 없기 때문에 오른쪽으로 쉬프트 했을 때 최상위 비트를 무엇으로 채우는 기능을 제공함
- `>>` 을 사용하면 기존의 부호 비트와 동일한 값으로 부호 비트를 채움
- `>>>`을 사용하면 0으로 부호 비트를 채움

![img_117.png](pocu-note/COMP2500/001-java-syntax/001-015-string-compare/images/string-compare-13.png)

`<<<` 연산자는 필요 없음
- 맨 오른쪽 비트는 부호와 연관이 없음

## 복습 퀴즈

### 1. Java에서 == 연산자로 두 String 문자열을 비교하는 게 좋지 않은 이유는 무엇인가요?

참조형이라 `==` 비교 연산자는 기본적으로 주소 값을 비교함
- 의도가 내용을 비교하는 것이라면 잘못 됨

답: 문자열에 들어있는 실제 문자들을 비교하지 않는다.

### 2. 위 코드에서 Main.java 안의 코드를 실행한 후 v2의 값은 무엇인가요?

```java
// Vector.java 
public class Vector { 
	public int x; 
	public int y; 
	
	public Vector(int x, int y) { 
		this.x = x;
		this.y = y; 
	} 
} 
```

```java
// Main.java 
Vector v0 = new Vector(1, 1); 
Vector v1 = new Vector(2, 2); 

Vector v2 = v0 + v1;
```

Java에는 연산자 오버로딩을 지원하지 않음
- 예외적으로 String은 built-in 존재

답: 컴파일 오류 발생
