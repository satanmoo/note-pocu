# unsigned가 없어서 생기는 문제

## unsigned 가 없어서 생기는 문제?

배열의 색인 값에 음수가 들어올 수 있어서, 방어 코드를 작성하는 수고가 생김

RGB 같은 색상값을 읽을 때 1바이트 자료형인 byte를 사용할 수 없음. 따라서 short를 사용해서 낭비. 다른 언어와 호환도 불편함

- byte는 signed라 -128~127만 표현 → 0~255 색상값을 못 담음
- C/C++는 4바이트(RGB+alpha)를 한 번에 읽지만, Java는 각 값을 short로 변환하는 과정 필요

## int 범위를 초과하지만 32비트로 표현할 수 있는 값을 String으로 표현했다. 이를 int 변수에 저장하는 방법은?

```java
int error = 4294967295;  // 컴파일 오류
String num = "...";
int value = Integer.parseUnsignedInt(num);
```

- `4294967295`를 리터럴로 쓰면 int 범위 초과로 컴파일 오류
	- int 범위 초과 값은 String으로 받아 파싱
	- 32비트로 표현할 수 있어야함

## 32비트 패턴을 String 타입의 unsigned int 표현으로 변경하는 방법은?

```java
int num = ...
String uint = Integer.toUnsignedString(num);
```

- int에 담긴 비트 패턴을 unsigned로 해석해 문자열로 변환
