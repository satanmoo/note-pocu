---
title: 패키지 사용하기
tags:
  - COMP2500
  - week1
aliases:
  - 패키지 사용하기
---
# 패키지 사용하기
## 외부 패키지 안에 속한 클래스 사용하기

![img_39.png](pocu-note/COMP2500/001-java-syntax/001-005-using-package/images/using-package-1.png)

`import java.util.Random`
- `java/util/` 에 속한 `Random`이라는 클래스를 사용하는 문법
- 클래스 이름은 대문자로 시작하는 것 확인

## import

![img_40.png](pocu-note/COMP2500/001-java-syntax/001-005-using-package/images/using-package-2.png)

## java.lang

![img_41.png](pocu-note/COMP2500/001-java-syntax/001-005-using-package/images/using-package-3.png)

컴파일러가 `import java.lang.*`을 자동으로 포함

## 복습 퀴즈

```java
// Vector.java 
package academy.pocu; 
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
```

```java
// Main.java 
package academy.pocu; 
public class Main { 
	public static void main(String args[]) { 
		Vector v = new Vector(1, 1, 1); 
		System.out.println(v.x); 
	} 
}
```

(Q1) 위 .java 파일들을 커맨드 라인에서 컴파일하는 옳은 방법은 무엇인가요?
- 컴파일 명령어니까 `javac`
- `-d`로 바이트 코드(.class 파일)을 저장할 경로 지정
- 두 파일 모두 컴파일 해야해서 `*.java`
	- 와일드 카드
	- shell globbing
	- 셸이 하는 일임

(Q2) 앞에서 컴파일 한 .class 파일들을 커맨드 라인에서 실행하는 옳은 방법은 무엇인가요?
- 실행 명령이니까 `java`
- `-classpath`로 클래스 파일 위치를 명시
- 실행하고자 하는 클래스에 pacakge 이름 빼먹는 실수 조심

(Q3) 앞에서 컴파일 한 .class 파일들을 .jar 파일로 만든 뒤 실행하려 하면 오류가 납니다. 그 이유는 무엇인가요?
- Manifest 파일
- `jar`파일 관련해서 배운건 사실 Manifest 파일 뿐
