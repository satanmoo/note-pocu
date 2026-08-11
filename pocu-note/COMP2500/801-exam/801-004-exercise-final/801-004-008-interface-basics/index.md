---
title: 인터페이스 개념과 문법 (010-001~008)
---
# 인터페이스 개념과 문법 (010-001~008)

> 서술 개념(순수 추상 클래스·함수 포인터 유사성·이름 규칙 등)은 ANKI 참고: [14-인터페이스는 순수 추상 클래스](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/14-interface-pure-abstract-class/) 이후 카드들

## 다음 코드의 결과는? (인터페이스 미구현)

```java
public interface ILoggable {
	void log(String message);
}

public class ConsoleLogger implements ILoggable {
	// log()를 오버라이딩하지 않음
}
```

컴파일 오류

- 인터페이스를 구현(`implements`)한 클래스가 추상 메서드를 오버라이딩하지 않으면 컴파일 오류 — 추상 클래스의 추상 메서드를 구현 안 했을 때와 동일한 개념
- 고치는 두 방향:
	- `ConsoleLogger` 클래스에서 `log()` 메서드를 `public`으로 구현
	- 아니면 `ConsoleLogger` 클래스를 `abstract`로 선언 (개체 생성 불가, 더 깊은 자식에서 구현)
- 이 컴파일 오류가 인터페이스/추상 클래스의 실익 — 오버라이딩을 깜빡하는 실수를 컴파일 타임에 방지

## 다음 코드의 결과는? (인터페이스 인스턴스화)

```java
public interface ILoggable {
	void log(String message);
}

// main
ILoggable logger = new ILoggable();
```

컴파일 오류

- 인터페이스는 순수 추상 클래스 → 개체를 만들 수 없음
- `ILoggable` 타입 변수 선언 자체는 정상 — 구현 클래스의 개체를 대입해서 씀 (`ILoggable logger = new ConsoleLogger();`)

## 다음 코드의 결과는? (인터페이스 메서드에 바디)

```java
public interface ILoggable {
	void log(String message) {
		System.out.println(message);
	}
}
```

컴파일 오류

- 인터페이스의 메서드는 추상 메서드 → 시그니처만 있고 ==바디를 가질 수 없음== (추상 클래스의 추상 메서드에 바디가 없는 것과 동일)
- 인터페이스에는 상태(멤버 변수)도 없음 — 동작의 시그니처만 있음

## 다음 코드의 결과는? (구현 메서드의 접근 제어자)

```java
public interface ILoggable {
	void log(String message);
}

public class ConsoleLogger implements ILoggable {
	@Override
	void log(String message) {
		System.out.println(message);
	}
}
```

컴파일 오류

- 인터페이스에 선언한 추상 메서드는 접근 제어자를 안 붙여도 ==항상 `public`으로 간주==
- 강의 근거(010-007): "여전히 ==구현 클래스에서== 인터페이스의 메서드는 모두 다 `public`" — 구현 클래스에서 접근 제어자를 생략하면 패키지 접근 수준이라 컴파일 오류, 반드시 `public` 명시
- 일반 규칙(Java, 강의 범위 밖 보충): 오버라이딩 시 접근 수준은 ==축소 불가, 확대는 가능==
	- 추상 메서드 구현뿐 아니라 구체 메서드(가상 메서드) 오버라이딩에도 동일하게 적용 (예: `public` → `protected` 축소는 컴파일 오류, `protected` → `public` 확대는 정상)
	- 이유: 부모 무늬로 호출 가능하다고 컴파일된 코드가, 실행 중 자식의 더 좁은 구현을 만나면 접근 불가가 되는 모순 → 다형성이 무너짐. 확대는 부모의 약속을 다 지키고 더 열어주는 것이라 모순 없음
	- 인터페이스 메서드는 이미 최대치(`public`)라 확대할 여지가 없음 → 구현은 반드시 `public`
- 비교: 추상 클래스의 추상 메서드는 `protected` 키워드 가능 (상속받는 클래스에서 구현·호출 가능)

## 다음 코드의 결과는? (패키지 접근 인터페이스를 다른 패키지에서 사용)

```java
// academy/pocu/ILoggable.java
package academy.pocu;

interface ILoggable {
	void log(String message);
}

// academy/pocu/server/Receiver.java
package academy.pocu.server;

import academy.pocu.ILoggable;

public class Receiver {
	public void processData(ILoggable logger) {
		logger.log("data");
	}
}
```

컴파일 오류

- ==인터페이스 자체==는 접근 제어자를 생략하면 패키지 접근 제한을 가짐 (추상 메서드가 항상 `public`인 것과 별개)
- `academy.pocu.server` 패키지는 `academy.pocu` 패키지와 다른 패키지 → `ILoggable` 인터페이스를 임포트·사용 불가 (임포트 줄과 매개변수 선언에서 컴파일 오류)
- 용도: 인터페이스를 내부 용도로만 쓰고 외부에 보여주고 싶지 않을 때
- 참고: 패키지 접근 인터페이스를 구현한 클래스의 접근 제어자는 ==별개== — `public` 클래스로 구현해도 됨. 외부 패키지는 그 클래스를 임포트해서 사용:

```java
// academy/pocu/ConsoleLogger.java
package academy.pocu;

public class ConsoleLogger implements ILoggable {	// 패키지 인터페이스를 public 클래스가 구현 — 정상
	@Override
	public void log(String message) {
		System.out.println(message);
	}
}

// academy/pocu/server/Receiver.java
package academy.pocu.server;

import academy.pocu.ConsoleLogger;	// 정상 — ConsoleLogger 클래스는 public
// import academy.pocu.ILoggable;	// 컴파일 오류 — 패키지 접근

public class Receiver {
	public void processData(ConsoleLogger logger) {	// 무늬도 ConsoleLogger 클래스 타입으로
		logger.log("data");	// public 메서드라 호출 가능
	}
}
```

- 외부 패키지에서는 `ILoggable` 인터페이스 무늬를 쓸 수 없으므로 매개변수·변수 타입도 구체 클래스(`ConsoleLogger`)로 받아야 함

## 다음 코드의 결과는? (`@Override`와 오타)

```java
public class Animal {
	public void shout() {
		System.out.println("...");
	}
}

public class Cat extends Animal {
	@Override
	public void shuot() {
		System.out.println("야옹");
	}
}
```

컴파일 오류

- `@Override` 어노테이션이 붙었는데 부모에 같은 시그니처의 메서드가 없음 → 컴파일 오류
	- 여기서 시그니처는 ==함수 이름·매개변수 목록·반환형==
- `@Override`가 없었다면? 컴파일·실행 다 되지만 `shuot()` 메서드는 오버라이딩이 아니라 ==새 메서드로 추가==됨 → 다형적 호출 시 부모의 `shout()` 메서드가 실행되는 조용한 버그
- 미구현·오타 실수를 막는 두 도구: 인터페이스/추상 클래스(구현을 컴파일 타임에 강제) 또는 `@Override` 어노테이션(오버라이딩 의도를 명시)

## 다음 각 명제의 O/X는?

1. 인터페이스는 상태(멤버 변수)를 가질 수 없다
2. 인터페이스의 추상 메서드는 `protected`로 선언할 수 있다
3. 인터페이스 자체는 패키지 접근 제어자로 선언할 수 있다
4. 인터페이스를 구현할 때는 `extends` 키워드를 쓴다

1. **O** — 인터페이스는 순수 추상 클래스, 동작의 시그니처만 있음
2. **X** — 주류 언어에서 인터페이스의 모든 메서드는 `public` (추상 클래스의 추상 메서드는 `protected` 가능)
3. **O** — 내부 용도로 숨기고 싶을 때 사용. 구현 클래스의 접근 제어자는 별개
4. **X** — Java에서는 `implements` 키워드 (다른 언어에서는 `extends`와 구분하지 않는 경우도 있음)
