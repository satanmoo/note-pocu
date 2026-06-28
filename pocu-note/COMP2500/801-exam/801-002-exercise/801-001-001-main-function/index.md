# 메인 함수

## 클래스 문법

- <접근 제어자> class <클래스 명(대문자 시작)> { ... }

## Java에서 클래스 없이 함수만 작성할 수 있는가?

NO
- 모든 함수는 `class` 내부에 작성해야 함

## 최고 레벨의 클래스는 무엇인가?

스코프에서 가장 바깥쪽 클래스

## 한 파일에 public 접근 제어자를 가진 최고 레벨의 클래스가 여러 개 존재할 수 있는가?

NO

## 내포 클래스에는 public 접근 제어자를 달아도 되는가?

YES

## main 함수 예시

```java
package academy.pocu.comp2500;

public class Program {

public static void main(String[] args) {

	…

	}

}
```

## main 함수의 시그니처가 틀리면 무슨 오류가 발생하는가?

런타임 오류
- 컴파일 시점에는 못 잡음

## 커맨드 라인 인자는 어떻게 받는가?

`main` 함수의 `String[] args` 매개변수로 받음
