# 출력문과 가변 인자

## System.out.println(); 이 문자열 말고 숫자 등 여러 자료형을 출력할 수 있는 이유?

오버로딩 (overloading)

- `println(int)`, `println(String)`, `println(double)` 처럼 같은 이름에 매개변수만 다른 메서드가 여러 개 정의됨
- (오버라이딩은 자식이 부모 메서드를 재정의하는 것 → 혼동 주의)

## System은 클래스인가?

YES

대문자로 시작함

## System.out에서 out의 정체는?

System 클래스의 out 멤버 변수

- static이라서 개체를 생성하지 않고 접근 가능

## 동일한 출력의 코드를 format()을 이용해 작성하라

```java
String name = "Mumu";
int score = 80;
System.out.printf("%s's score: %d" + System.lineSeparator(), name, score);
```

```java
String name = "Mumu";
int score = 80;
String output = String.format("%s's score: %d", name, score);
System.out.println(output);
```

## 올바른 개행문자 추가법

```java
System.lineSeparator()
```

## System.out.printf 가 매번 인자의 개수가 달라지는 이유?

가변 인자

varargs

## 가변 인자 문법

<자료형> …

<자료형> 의 배열로 치환

## out의 자료형과 println의 소속은?

- `out`은 `PrintStream`형 멤버 변수
- `println`은 `PrintStream`의 메서드
- 즉 `클래스.멤버변수.멤버변수의메서드` (`System.out.println`) 구조로 호출

## Java의 가변 인자와 C의 가변 인자 차이는?

- C: 서로 다른 자료형을 섞을 수 있음 (컴파일 타임 매크로로 타입 명시)
- Java: 단일 자료형의 배열로 치환되어 같은 자료형만 받음