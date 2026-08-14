---
title: 예외 문법 (013-001~005)
---
# 예외 문법 (013-001~005)

> 서술 개념(실행 규칙·rethrow·커스텀 예외)은 ANKI 참고: [43-try/catch/finally 실행 규칙](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/43-try-catch-finally-rules/) 이후 카드들

## 다음 코드의 출력은? (try/catch/finally 흐름)

```java
// Program.java
package academy.pocu.comp2500;

public class Program {
	public static int doWork(int x) {
		try {
			System.out.println("try");

			if (x == 0) {
				throw new IllegalArgumentException("x is zero");
			}

			System.out.println("no exception");
			return 1;
		} catch (IllegalArgumentException e) {
			System.out.println("catch: " + e.getMessage());
			return -1;
		} finally {
			System.out.println("finally");
		}
	}

	public static void main(String[] args) {
		System.out.println(doWork(0));
		System.out.println(doWork(7));
	}
}
```

```
try
catch: x is zero
finally
-1
try
no exception
finally
1
```

- `doWork(0)`: 예외 발생 지점(`throw`) ==이후의 `try` 코드는 실행되지 않음== → `no exception` 출력 안 됨
- `catch` 블록에 `return` 문이 있어도 ==`finally` 블록은 항상 실행==된 뒤에 리턴함
- `doWork(7)`: 예외가 없어도 `finally`는 실행 — 예외 발생 여부와 관계없이 항상 실행

## 다음 코드의 결과는? (catch 블록 순서)

```java
// Program.java (일부)
import java.io.FileNotFoundException;
import java.io.IOException;

// FileNotFoundException은 IOException의 자식 클래스
try {
	lines = Files.readAllLines(path);
} catch (IOException e) {
	System.out.println("IO error");
} catch (FileNotFoundException e) {
	System.out.println("file not found");
}
```

컴파일 오류

- `catch` 문에 부모 예외 클래스를 넣으면 ==자식 클래스 예외까지 잡음== → 부모(`IOException`) 블록이 위에 있으면 자식(`FileNotFoundException`) 블록은 절대 도달할 수 없어 컴파일 오류 (오류 메시지: "exception FileNotFoundException has already been caught")
- 강의 슬라이드는 "예외가 발생해도 첫 번째 `catch` 블록이 실행됨"이라는 개념으로 설명 — Java 컴파일러는 그 개념(자식 블록 도달 불가)을 아예 컴파일 오류로 강제함 (Java 11 javac로 검증, JLS의 도달 불가능 catch 규칙이라 버전 무관)
- 이 순서 규칙은 ==checked/unchecked와 무관== — `catch (RuntimeException e)` 뒤에 `catch (IllegalArgumentException e)`를 둬도 같은 오류 (catch 절 사이의 상속 관계만 보는 규칙)
- 고치는 법: 순서를 바꿔 자식을 위로 — ==specific to general==로 작성

## 서술형: 파일 닫기(`close()`)를 `finally` 블록에 넣는 이유를 다섯 문장 이내로 설명하세요

모범답안

`try` 블록 안에 `close()`를 두면 그 앞에서 예외가 발생했을 때 실행되지 않고 파일이 열린 채 남음. 예외를 잡아 닫으려고 `catch` 블록마다 `close()`를 넣으면 새로운 예외 종류가 생길 때마다 `catch` 블록을 추가해야 해서 번거로움. `finally` 블록은 예외 발생 여부와 관계없이, 심지어 `catch` 블록에서 `return`을 해도 항상 실행되므로 정리 코드를 한 곳에 쓸 수 있음. 단 파일 열기 자체가 실패했을 수 있으므로 `null` 확인 후 닫아야 함. 닫기를 GC의 `finalize()`에 맡기면 GC가 돌기 전에 OS의 파일 개수 제한에 도달해 다른 파일 열기가 실패할 수 있으므로 피해야 함.

## 다음 코드를 읽고 답하세요 (커스텀 예외 — `super(message)` 누락)

a) 이 코드에 컴파일 오류가 있나요?
b) 런타임 오류가 있나요?
c) 오류가 없다면 출력은 무엇인가요?

```java
// UserNotFoundException.java
package academy.pocu.comp2500;

public final class UserNotFoundException extends RuntimeException {
	public UserNotFoundException(String message) {
		// super(message) 호출을 깜빡함
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {
	public static void main(String[] args) {
		try {
			throw new UserNotFoundException("pope not found");
		} catch (UserNotFoundException e) {
			System.out.println(e.getMessage());
		}
	}
}
```

a) **아니오** — `RuntimeException` 클래스에 매개변수 없는 생성자가 있어서, 컴파일러가 암시적으로 `super()`를 삽입해줌
b) **아니오**
c) `null` — 메시지가 부모 클래스에 전달되지 않아 `getMessage()` 메서드가 `null`을 반환

- 커스텀 예외는 `RuntimeException`(또는 `Exception`) 클래스를 상속하고, 생성자에서 ==`super(message)`로 부모를 초기화==해야 메시지가 살아남음

## 다음 각 명제의 O/X는?

1. Java에서 `catch` 블록 안에서 `throw e;`로 예외를 다시 던지면 원래 호출 스택이 유지된다
2. `catch (Exception e)` 블록은 `Exception` 클래스의 자식 예외들도 잡는다
3. 파일 닫기를 GC의 `finalize()` 메서드에 맡겨도 안전하다

1. **O** — Java는 예외 변수를 그대로 던지면 호출 스택 유지. rethrow 한다면 ==반드시 호출 스택을 유지==하면서 던질 것 (위에서 로그만 남기거나 일부만 해결하고 다시 위로 올릴 때)
2. **O** — `Exception` 클래스는 최상위 예외 부모. 부모 클래스를 `catch` 문에 넣으면 자식 클래스 예외도 캐치함
3. **X** — GC가 언제 돌지 알 수 없어서, 그 전에 ==OS의 열 수 있는 파일 수 제한==에 도달해 다른 파일 열기가 실패할 수 있음. `finally` 블록에서 직접 닫을 것
