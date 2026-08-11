---
title: 인터페이스와 다중 상속 (010-009~011, 010-014)
---
# 인터페이스와 다중 상속 (010-009~011, 010-014)

> 서술 개념(다이아몬드 문제·실무 용도)은 ANKI 참고: [20-클래스 다중 상속의 문제](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/20-multiple-inheritance-problem/), [21-실무에서 인터페이스의 용도](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/21-interface-practical-uses/)

## 다음 코드의 출력은? (여러 인터페이스 구현)

```java
public interface ILoggable {
	void log(String message);
}

public interface ISavable {
	void save(String filename);
}

public class ConsoleLogger implements ILoggable, ISavable {
	@Override
	public void log(String message) {
		System.out.println("log: " + message);
	}

	@Override
	public void save(String filename) {
		System.out.println("save: " + filename);
	}
}

// main
static void processData(ILoggable logger) {
	logger.log("data");
}

ConsoleLogger logger = new ConsoleLogger();
processData(logger);
logger.save("a.txt");
```

```
log: data
save: a.txt
```

- 인터페이스는 ==다중 상속(여러 개 구현) 가능== — 함수 시그니처 묶음을 여러 개 전달받는 것과 동일한 개념
- `ILoggable` 타입 매개변수에 `ILoggable`·`ISavable`을 모두 구현한 클래스의 개체를 전달해도 문제 없음
	- 단, `processData()` 메서드 안에서 그 개체는 `ILoggable` 무늬로만 보임 — `logger.save("a.txt")`를 호출하면 컴파일 오류 (`ILoggable`에 `save()` 시그니처가 없음)
	- 개체가 능력을 잃는 게 아니라 무늬가 호출 가능한 메서드 집합을 좁히는 것 — 실체는 여전히 `ConsoleLogger`
- 클래스 다중 상속은 금지인데 인터페이스는 허용되는 이유 → ANKI 20 (실체 중복·다이아몬드 문제)

## 다음 코드의 출력은? (시그니처가 겹치는 두 인터페이스)

```java
public interface ILoggable {
	void log(String message);
}

public interface IReportable {
	void log(String message);
}

public class ConsoleLogger implements ILoggable, IReportable {
	@Override
	public void log(String message) {
		System.out.println("log: " + message);
	}
}

// main
ILoggable a = new ConsoleLogger();
IReportable b = new ConsoleLogger();
a.log("x");
b.log("y");
```

```
log: x
log: y
```

- 두 인터페이스의 추상 메서드 시그니처(==이름·매개변수 목록==)가 겹쳐도 구현 클래스에서 ==하나만 구현하면 됨== — 그 하나가 두 추상 메서드의 구현을 겸함
- 어차피 실행 중 실체(구현)는 하나로 결정되므로 문제가 없음

## 다음 코드의 결과는? (반환형만 다른 두 인터페이스)

```java
public interface ISavable {
	void save(String filename);
}

public interface IArchivable {
	boolean save(String filename);
}

public class Document implements ISavable, IArchivable {
	@Override
	public void save(String filename) {
	}

	@Override
	public boolean save(String filename) {
		return true;
	}
}
```

컴파일 오류

- 컴파일러 입장에서 시그니처(이름·매개변수 목록)가 동일 → `save(String)` 중복 정의 ("already defined in class ..." 오류)
- 하나만 구현해도 해결 불가 — 남은 쪽 인터페이스와 반환형이 안 맞아 구현으로 인정 안 됨 → 이 두 인터페이스는 ==한 클래스에서 함께 구현할 방법이 없음==
- 매개변수 목록이 달랐다면? 애초에 시그니처가 다르니 각각 구현하면 문제 없음

## 다음 코드의 결과는? (상속받은 메서드가 인터페이스 구현을 겸함)

```java
public interface ILoggable {
	void log(String message);
}

public interface IReportable {
	void log(String message);
}

public class ConsoleLogger implements ILoggable {
	@Override
	public void log(String message) {
		System.out.println("Console: " + message);
	}
}

public class ExtendedConsoleLogger extends ConsoleLogger implements IReportable {
	// log()를 오버라이딩하지 않음
}

// main
IReportable reporter = new ExtendedConsoleLogger();
reporter.log("hi");
```

```
Console: hi
```

- `ExtendedConsoleLogger` 클래스가 `log()` 메서드를 직접 구현하지 않아도 컴파일 정상 — ==부모에게 상속받은 `public` `log()` 메서드가 `IReportable` 인터페이스의 추상 메서드 구현을 겸함==
- 만약 `ExtendedConsoleLogger` 클래스가 `log()` 메서드를 오버라이딩하면, 그 하나가 `ConsoleLogger` 클래스의 `log()` 오버라이딩 + `IReportable`의 추상 메서드 구현을 동시에 수행
- 어느 쪽이든 최종 실체는 오직 하나 — 인터페이스 다중 상속이 안전한 이유

## 다음 코드의 결과는? (선언 타입에 없는 메서드 호출)

```java
public interface IClickable {
	void onClick();
}

public abstract class Widget {
	public abstract void draw();
}

public class Button extends Widget implements IClickable {
	@Override
	public void draw() {
	}

	@Override
	public void onClick() {
		System.out.println("버튼 클릭");
	}
}

// main
Widget widget = new Button();
widget.onClick();
```

컴파일 오류

- dynamic dispatch는 ==선언 타입(무늬)에 있는 메서드만== 호출 가능 — `Widget` 클래스에 `onClick()` 시그니처가 없음
- 호출하려면 `((IClickable) widget).onClick();`처럼 인터페이스로 형변환 — 되지만 불편
- 올바른 방법은 ==`IClickable` 타입의 리스트를 따로 관리==해서 형변환 없이 다형적 호출 (예: `ArrayList<IClickable>`)

## 다음 코드의 결과는? (미구현 클래스를 인터페이스로 형변환)

```java
// 위 문제의 IClickable, Widget, Button에 더해서
public class Label extends Widget {
	@Override
	public void draw() {
	}
	// IClickable을 구현하지 않음
}

// main
Widget widget = new Label();
IClickable clickable = (IClickable) widget;
clickable.onClick();
```

a) 컴파일 오류? **아니오**
b) 런타임 오류? **예** — `ClassCastException`
c) 출력: 없음

- `Widget` 타입 변수에는 `IClickable`을 구현한 자식(`Button`) 개체가 들어있을 수도 있으므로 명시적 형변환 자체는 컴파일 통과
- 실행 중 실제 개체(`Label`)가 `IClickable`을 구현하지 않았으므로 `ClassCastException`
- 비교: ==전혀 상속 관계가 없는 클래스끼리== 명시적 형변환하면 컴파일러가 막아줌 — [[pocu-note/COMP2500/005-inheritance/005-011-inheritance-and-explicit-casting/index|상속과 명시적 캐스팅]] 참고

## 다음 코드의 결과는? (인터페이스 리스트에 미구현 개체 추가)

```java
// 위 문제의 IClickable, Button, Label에 더해서

// main
ArrayList<IClickable> clickables = new ArrayList<>();
clickables.add(new Button());
clickables.add(new Label());
```

컴파일 오류

- `Button` 클래스는 `IClickable`을 구현하므로 추가 정상
- `Label` 클래스는 `IClickable`을 구현하지 않음 → `IClickable` 타입 리스트에 추가할 수 없음 (자식 → 부모 무늬 대입이 성립하지 않는 타입)
- 이 리스트 방식이 위의 형변환 방식보다 나은 이유: 잘못된 개체가 섞이는 것을 ==컴파일 타임에== 걸러줌

## 다음 각 명제의 O/X는?

1. 한 클래스는 인터페이스를 여러 개 구현할 수 있다
2. 두 인터페이스가 같은 시그니처의 추상 메서드를 가지면 한 클래스가 둘을 함께 구현할 수 없다
3. 인터페이스를 여러 개 구현하면 다이아몬드 문제가 발생할 수 있다
4. 다중 상속이 없어도 인터페이스로 dynamic dispatch가 가능하다

1. **O** — 인터페이스는 다중 상속(구현) 허용
2. **X** — 하나의 구현이 두 추상 메서드의 구현을 겸함 (단, ==반환형만 다른== 경우는 함께 구현 불가)
3. **X** — 다이아몬드 문제는 실체(상태·메서드 구현)의 중복 상속 문제인데, 인터페이스는 실체가 없음
4. **O** — 대신 부모 구현을 물려받지 못해 구현하는 클래스마다 따로 구현해야 하는 불편은 있음 (다중 상속 흉내의 비용)
