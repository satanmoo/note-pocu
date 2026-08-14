---
title: checked 예외와 unchecked 예외 (013-006~011)
---
# checked 예외와 unchecked 예외 (013-006~011)

> 서술 개념(구분·존재의의·트렌드·블랙박스 훼손)은 ANKI 참고: [45-checked/unchecked의 구분과 규칙](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/45-checked-unchecked-rules/) 이후 카드들

## 다음 코드를 읽고 답하세요 (checked 예외 미처리)

a) 이 코드에 오류가 있나요? (컴파일 오류 / 런타임 오류 / 문제없음)
b) 오류가 있다면 고치는 방법을 설명하세요.
c) `UserNotFoundException` 클래스가 `Exception` 대신 `RuntimeException`을 상속하면 결과가 어떻게 달라지나요?

```java
// UserNotFoundException.java
package academy.pocu.comp2500;

public final class UserNotFoundException extends Exception {
	public UserNotFoundException(String message) {
		super(message);
	}
}

// UserDb.java
package academy.pocu.comp2500;

public final class UserDb {
	// ... 코드 생략

	public User findUser(String name) {
		// 이름으로 유저를 찾는 코드 생략. 못 찾으면:
		throw new UserNotFoundException(name + " not found");
	}
}
```

a) **컴파일 오류** — `UserNotFoundException`은 ==checked 예외==(`Exception` 상속 + `RuntimeException` 미상속)인데, 던지는 `findUser()` 메서드가 내부에서 처리(catch)하지도 않고 시그니처에 명시하지도 않음 (오류 메시지: "unreported exception UserNotFoundException; must be caught or declared to be thrown")
b) 고치는 두 방향:
- 시그니처에 `throws` 절 명시: `public User findUser(String name) throws UserNotFoundException` — 이러면 ==호출자에게 같은 규칙이 전파==됨 (호출자도 catch하거나 throws 명시)
- 아니면 메서드 안에서 `try`/`catch`로 처리
c) **컴파일 정상** — `RuntimeException`을 상속하면 ==unchecked 예외==가 되어 컴파일러가 처리 여부를 확인하지 않음

## 다음 코드의 결과는? (catch에서 다시 던지기)

```java
// Program.java — UserDb.findUser()는 throws UserNotFoundException으로 선언되어 있음
package academy.pocu.comp2500;

public class Program {
	public static void main(String[] args) {
		UserDb db = new UserDb();
		User user = null;

		try {
			user = db.findUser("pope");
		} catch (UserNotFoundException e) {
			e.printStackTrace();
			throw e;
		}
	}
}
```

컴파일 오류

- `catch` 블록에서 로그만 남기고 ==다시 던지면(`throw e`) 그건 처리한 게 아님== → `main()` 함수 시그니처에 `throws UserNotFoundException` 절이 필요
- 고치는 두 방향:
	- 다시 던지려면: `public static void main(String[] args) throws UserNotFoundException`
	- 아니면 `catch` 블록에서 다시 던지지 않고 완전히 처리 (로그 출력 등으로 끝냄)
- 이미 본 실례: `Object.clone()`의 `CloneNotSupportedException`도 checked라 같은 구조 — ==처리(catch) 또는 선언(`throws`) 의무가 호출 단계마다 걸리고, `throws`를 선택하면 다음 호출자에게 전파, catch로 처리하면 거기서 끊김== ([[pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-010-clone-copy-constructor/index|Object.clone()과 복사 생성자]] 2번 문제 참고)

## 서술형 (공식 연습 11번 그대로): checked 예외와 unchecked 예외의 차이점을 다섯 문장 이내로 설명하세요

모범답안

checked 예외는 컴파일러가 처리 여부를 확인(check)하는 예외로, 던지는 메서드가 내부에서 catch하거나 `throws` 절로 시그니처에 명시해야 하며 둘 다 안 하면 컴파일 오류임. `throws`로 명시하면 호출자에게 같은 의무가 전파되고, 메서드 시그니처만 봐도 어떤 예외가 발생할 수 있는지 드러남. unchecked 예외는 `RuntimeException`을 상속하는 예외로, 컴파일러가 확인하지 않아 처리나 명시 없이 던질 수 있는 대신 어디서 어떤 예외가 발생하는지 콜스택을 조사해야 알 수 있음. 구분 기준은 상속 관계로, `Exception`을 상속하되 `RuntimeException`을 상속하지 않으면 checked임. checked의 의도는 예외 상황이 발생하면 프로그램을 정상적으로 회복하라는 것임.

## 다음 각 명제의 O/X는?

1. unchecked 예외는 모두 `RuntimeException` 클래스를 상속한다
2. `RuntimeException` 클래스는 `Exception` 클래스를 상속하지 않는다
3. 예외를 아무도 catch하지 않으면 요즘 컴퓨터에서는 하드웨어가 멈춘다
4. checked 예외를 `catch` 블록에서 unchecked 예외로 바꿔 던지면 `throws` 절이 필요 없다

1. **O** — unchecked 예외는 모두 빠짐없이 `RuntimeException`을 상속
2. **X** — `Exception`을 상속받으면서 ==컴파일러가 확인하는 기능을 무시==하는 특수한 존재. 그래서 `RuntimeException`의 자식들은 unchecked
3. **X** — `main()` 위로 올라간 예외는 ==JVM이 처리==(오류 메시지 출력 후 프로그램 종료). 크래시가 나도 요즘은 가상 메모리 덕에 OS가 해당 프로그램만 종료함 (하드웨어가 멈추던 건 가상머신·가상 메모리가 없던 옛날 이야기)
4. **O** — `try`/`catch`로 checked를 받았으니 시그니처의 `throws` 절이 사라짐 — 근래 트렌드 중 하나. 대신 어디서 예외가 발생하는지 알기 어려워지는 문제가 다시 드러남
