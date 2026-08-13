---
title: 책임 연쇄 패턴과 옵저버 패턴 (012-018~022)
---
# 책임 연쇄 패턴과 옵저버 패턴 (012-018~022)

> 서술 개념(책임의 정의·pub-sub·메모리 누수)은 ANKI 참고: [40-책임 연쇄 패턴의 책임](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/40-chain-of-responsibility/) 이후 카드들

## 다음 코드의 출력은? (로거 체인)

```java
// LogLevel.java
package academy.pocu.comp2500;

public enum LogLevel {
	DEBUG,
	ERROR
}

// Logger.java
package academy.pocu.comp2500;

import java.util.HashSet;

public abstract class Logger {
	private HashSet<LogLevel> logLevels = new HashSet<>();
	private Logger next;

	protected Logger(LogLevel... levels) {
		for (LogLevel level : levels) {
			this.logLevels.add(level);
		}
	}

	public Logger setNext(Logger next) {
		this.next = next;
		return next;
	}

	public final void message(String msg, LogLevel severity) {
		if (this.logLevels.contains(severity)) {
			log(msg);
		}

		if (this.next != null) {
			this.next.message(msg, severity);
		}
	}

	protected abstract void log(String msg);
}

// ConsoleLogger.java
package academy.pocu.comp2500;

public final class ConsoleLogger extends Logger {
	public ConsoleLogger(LogLevel... levels) {
		super(levels);
	}

	@Override
	protected void log(String msg) {
		System.out.println("Console: " + msg);
	}
}

// FileLogger.java
package academy.pocu.comp2500;

public final class FileLogger extends Logger {
	public FileLogger(LogLevel... levels) {
		super(levels);
	}

	@Override
	protected void log(String msg) {
		System.out.println("File: " + msg);
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {
	public static void main(String[] args) {
		Logger logger = new ConsoleLogger(LogLevel.DEBUG, LogLevel.ERROR);
		logger.setNext(new FileLogger(LogLevel.ERROR));

		logger.message("booting", LogLevel.DEBUG);
		logger.message("disk failure", LogLevel.ERROR);
	}
}
```

```
Console: booting
Console: disk failure
File: disk failure
```

- `message()` 메서드의 흐름: 자기 담당 레벨이면 `log()` 호출 → `next`가 있으면 ==무조건 연쇄 호출==
	- `booting`(DEBUG): `ConsoleLogger`만 담당 → Console만 출력, `FileLogger`는 기회는 받았지만 담당 레벨이 아니라 조용히 통과
	- `disk failure`(ERROR): 둘 다 담당 → 둘 다 출력
- `message()` 메서드는 `final`(공통 흐름 고정), 내부의 `log()` 메서드는 추상 → ==dynamic dispatch==로 실체의 구현 실행 — 다형성 범위를 변하는 부분만으로 좁힌 설계 (009의 `attack()`/`calculateDamage()` 구조와 동일)
- 장점: `setNext()`로 연결만 해두면 클라이언트는 ==체인의 첫 개체 참조(`logger` 변수) 하나만== 사용하면 됨

## 위 `message()` 메서드는 엄밀히 말해 "책임" 연쇄가 아니다. 이유를 설명하고 진짜 책임 연쇄로 수정하라. 수정 후 위 `Program`의 출력은?

이유: 위 구현은 자기가 처리했든 안 했든 다음 개체에게 ==무조건== 기회를 줌. 책임 연쇄에서 책임이란 ==한 개체가 처리하면 책임을 지고, 그 뒤의 개체들은 처리할 기회를 받지 못하는 것== — 우선순위에 따라 기회를 주는 것이지 그냥 기회를 주는 것이 아님

수정 (전/후):

```java
// 전)
if (this.logLevels.contains(severity)) {
	log(msg);
}

if (this.next != null) {
	this.next.message(msg, severity);
}

// 후)
if (this.logLevels.contains(severity)) {
	log(msg);
} else if (this.next != null) {
	this.next.message(msg, severity);
}
```

수정 후 출력:

```
Console: booting
Console: disk failure
```

- `else if` — 내가 처리하면 거기서 연쇄 중단 ("내가 책임지면 끝, 내 뒤는 출력할 필요 없어")
- `disk failure`(ERROR)도 `ConsoleLogger`가 담당 레벨이라 처리하고 책임짐 → `FileLogger`는 기회를 받지 못함

## 다음 코드에서 `book = null;` 이후에도 `BookkeepingApp` 개체가 가비지 컬렉터에 수거되지 않는 이유는? 해결법은? (옵저버 패턴과 메모리 누수)

```java
// IFundingCallback.java
package academy.pocu.comp2500;

public interface IFundingCallback {
	void onMoneyRaised(int amount);
}

// CrowdFundingAccount.java
package academy.pocu.comp2500;

import java.util.ArrayList;

public final class CrowdFundingAccount {
	private ArrayList<IFundingCallback> subscribers = new ArrayList<>();

	public void subscribe(IFundingCallback callback) {
		this.subscribers.add(callback);
	}

	public void support(int amount) {
		for (IFundingCallback subscriber : this.subscribers) {
			subscriber.onMoneyRaised(amount);
		}
	}
}

// BookkeepingApp.java
package academy.pocu.comp2500;

public final class BookkeepingApp implements IFundingCallback {
	@Override
	public void onMoneyRaised(int amount) {
		System.out.println("record: " + amount);
	}
}

// Program.java (일부)
CrowdFundingAccount funding = new CrowdFundingAccount();

BookkeepingApp book = new BookkeepingApp();
funding.subscribe(book);

// 장부 앱으로 뭔가를 함

// 할 일이 끝남. 이제 장부 앱을 지우고 싶음
book = null;

// 시간이 많이 지나도 BookkeepingApp 개체는 사라지지 않음
```

이유: `book = null`은 ==변수가 가진 참조만 끊을 뿐==, `funding` 개체의 `subscribers` 리스트가 여전히 `BookkeepingApp` 개체의 참조를 가지고 있음 → JVM은 아직 사용 중인 개체로 인식해 수거하지 않음

해결법: `unsubscribe()` 메서드를 만들어 `subscribers` 리스트에서 직접 제거한 뒤에 `null` 대입

- 옵저버 패턴은 결국 ==콜백 (메서드를 가진 개체의) 목록==이라, 등록해 둔 것을 잊으면 목록이 참조를 계속 쥠 — 매니지드 언어에서 메모리 누수를 만드는 주범
- 현실적 어려움: 이벤트 핸들러로 등록한 곳을 전부 찾아서 제거하는 걸 안 까먹을 자신이 있는가?

## 다음 각 명제의 O/X는?

1. 옵저버 패턴에서 감시자는 하나여야 하고 감시 대상은 여러 개일 수 있다
2. pub-sub 패턴은 옵저버 패턴을 포함하는 더 넓은 개념이다
3. 책임 연쇄 패턴은 체인에 속한 모든 개체에게 무조건 처리 기회를 준다

1. **X** — 반대. ==감시자는 여러 개==일 수 있고 ==감시 대상은 한 개== (어떤 개체를 다른 개체들이 관찰)
2. **O** — 요즘은 사실상 pub-sub 패턴으로 부름
3. **X** — 무조건 기회를 주면 책임 연쇄가 아님. ==우선순위(책임)에 따라== 기회를 주고, 한 개체가 처리하면 뒤는 기회를 받지 못함
