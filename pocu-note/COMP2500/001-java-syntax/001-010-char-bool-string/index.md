---
title: char, bool, String
tags:
  - COMP2500
  - week1
aliases:
  - char, bool, String
---
# char, bool, String
## 유니코드지만 16비트인 char

![img_61.png](pocu-note/COMP2500/001-java-syntax/001-010-char-bool-string/images/char-bool-string-1.png)

char로 모든 유니코드를 표현할 수 없음
- 여기서 말하는 유니코드는 코드 포인트 값
	- U+10FFFF
	- 최소 21비트 필요

![img_62.png](pocu-note/COMP2500/001-java-syntax/001-010-char-bool-string/images/char-bool-string-2.png)

char이 유니코드의 코드 포인트를 그대로 표현하는지 여부가 왜 중요한가?
- 원래 Java 탄생 시점에 유니코드의 코드 포인트를 그대로 표현하려는 의도로 char을 설계함
	- 코드 포인트 값과 char의 비트 패턴이 1:1 대응

현재 Java는 유니코드를 표현하기 위해 유니코드의 코드 포인트를 그대로 사용하지 않음
- 대신 UTF-16 로 인코딩한 결과를 String에 저장
## boolean

![img_63.png](pocu-note/COMP2500/001-java-syntax/001-010-char-bool-string/images/char-bool-string-3.png)

## 기본 자료형은 모두 '값형'임을 잊지 말자

![img_64.png](pocu-note/COMP2500/001-java-syntax/001-010-char-bool-string/images/char-bool-string-4.png)

값형
- CPU에서 직접 연산이 가능함 
- 변수에 대입 시 값 복사

## String

![img_65.png](pocu-note/COMP2500/001-java-syntax/001-010-char-bool-string/images/char-bool-string-5.png)

![img_66.png](pocu-note/COMP2500/001-java-syntax/001-010-char-bool-string/images/char-bool-string-6.png)

### `String` immutable

![img_67.png](pocu-note/COMP2500/001-java-syntax/001-010-char-bool-string/images/char-bool-string-7.png)

String 한 번 할당하면 변경 불가
- immutable
- 바꾸려고 시도하면 컴파일 에러

문자열을 변경하려면 새로운 문자열을 만들어야 함

## 복습 퀴즈

(Q1) Java에서 byte 자료형은 signed 형인가요? unsigned 형인가요?
- Java에 unsigned 자료형은 없음
- 따라서 signed

(Q2) Java에서 char 자료형의 크기는 몇 바이트인가요?
- 과거에 유니코드 코드 포인트의 최대값이 U+FFFF일 때 1:1로 표현하기 위해 char 자료형을 설계
- 2바이트

```Java
String name = "POCU";
name[1] = 'A';
System.out.println(name);
```

(Q3) 위 코드를 실행하면 출력되는 결과는 무엇인가요?
- Java의 String은 한 번 할당 후 내부 문자의 값을 바꿀 수 없음
	- Immutable
- 컴파일 타임에 이를 방지함
- 따라서 컴파일 에러
