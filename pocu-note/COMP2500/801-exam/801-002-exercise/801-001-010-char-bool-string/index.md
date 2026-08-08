---
title: char, bool, String
---
# char, bool, String

## Java에서 char 자료형의 크기는?

16비트 (2바이트)

- 과거 유니코드 코드 포인트 최대값이 U+FFFF일 때 1:1로 표현하려고 설계됨

## char로 모든 유니코드를 표현할 수 있는가?

NO

- 현재 유니코드 코드 포인트 최대값은 U+10FFFF → 최소 21비트 필요
- 16비트 char로는 부족
- Java는 코드 포인트를 그대로 쓰지 않고 UTF-16으로 인코딩한 결과를 String에 저장

## new로 만든 두 String을 == 와 equals로 비교하면?

```java
String a = new String("POCU");
String b = new String("POCU");
System.out.println(a == b);
System.out.println(a.equals(b));
```

```
false
true
```

- `==` 는 **참조(주소) 비교** → 서로 다른 개체라 false
- `equals` 는 **값(문자 내용) 비교** → 내용이 같아 true
- `new String(...)`은 항상 새 개체를 만들므로 `==`는 false

## 다음 코드의 실행 결과는?

```java
String name = "POCU";
name[1] = 'A';
System.out.println(name);
```

컴파일 오류

- String은 immutable → 한 번 할당한 문자 값을 바꿀 수 없음
- 인덱스 대입(`name[1] = ...`) 문법도 String에는 없음
- 컴파일 타임에 막힘 
	- 변경하려면 새 문자열을 만들어야 함
