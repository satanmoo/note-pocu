---
title: 빌더 패턴과 플루언트 인터페이스 (012-005~010)
---
# 빌더 패턴과 플루언트 인터페이스 (012-005~010)

> 서술 개념(오용 판정 기준·인자 실수 해법)은 ANKI 참고: [34-빌더 패턴의 오용](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/34-builder-pattern-misuse/), [35-생성자 인자 실수를 줄이는 해법](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/35-constructor-argument-mistakes/)

## 다음 코드의 출력은? (플루언트 인터페이스)

```java
// TextBuilder.java
package academy.pocu.comp2500;

public final class TextBuilder {
	private String buffer = "";

	public TextBuilder append(String str) {
		this.buffer += str;
		return this;
	}

	public String getResult() {
		return this.buffer;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {
	public static void main(String[] args) {
		TextBuilder builder = new TextBuilder();

		String result = builder.append("Hello")
				.append(", ")
				.append("POCU")
				.getResult();

		System.out.println(result);
	}
}
```

```
Hello, POCU
```

- `append()` 메서드가 ==`return this`==로 자기 자신을 반환하기 때문에 `.`으로 계속 호출하는 메서드 체이닝(플루언트 인터페이스)이 가능
- 만약 `append()` 메서드의 반환형이 `void`였다면 두 번째 `.append(", ")`에서 컴파일 오류
- 강의 코멘트: 자기 자신을 반환하는 건 OOP·함수 블랙박스 측면에서는 말이 안 되는 개념이지만, 이제 널리 알려져 많이 사용함

## 다음 코드를 읽고 답하세요 (빌더 오용 — 강의 복습 퀴즈 유형)

a) 이 코드에 컴파일 오류나 런타임 오류가 있나요?
b) 오류가 없다면, 생성된 `robert` 개체의 상태에는 어떤 문제가 있나요?

```java
// Employee.java
package academy.pocu.comp2500;

public final class Employee {
	private String firstName;
	private String lastName;
	private int id;
	private int yearStarted;
	private int age;

	Employee(String firstName, String lastName, int id, int yearStarted, int age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.id = id;
		this.yearStarted = yearStarted;
		this.age = age;
	}
}

// EmployeeBuilder.java
package academy.pocu.comp2500;

public final class EmployeeBuilder {
	private String firstName;
	private String lastName;
	private int id;
	private int yearStarted;
	private int age;

	public EmployeeBuilder(int id) {
		this.id = id;
	}

	public EmployeeBuilder withName(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		return this;
	}

	public EmployeeBuilder withAge(int age) {
		this.age = age;
		return this;
	}

	public EmployeeBuilder withStartingYear(int yearStarted) {
		this.yearStarted = yearStarted;
		return this;
	}

	public Employee build() {
		return new Employee(this.firstName, this.lastName, this.id, this.yearStarted, this.age);
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {
	public static void main(String[] args) {
		Employee robert = new EmployeeBuilder(1)
				.withAge(31)
				.withName("Robert", "Lee")
				.build();
	}
}
```

a) 문제없음 — 잘 컴파일되고 실행됨
b) `withStartingYear()` 메서드를 호출하지 않아 `yearStarted` 변수가 `int` 초기값 ==0인 채로== `Employee` 개체가 생성됨 (로버트가 서기 0000년에 입사한 걸로 나옴)

- `withXxx()`처럼 메서드 이름이 인자의 의미를 드러내 순서·의미 실수는 줄었지만, ==메서드를 호출 안 하는 실수는 막을 수 없음== — 컴파일러가 못 잡는 조용한 버그
- 개체 생성 시 상태가 유효해야 한다는 캡슐화에 위배 (원래 이 보장 때문에 생성자를 사용하는 것)

## 서술형: `StringBuilder`는 올바른 빌더 패턴이고 위 `EmployeeBuilder`는 오용인 이유를 다섯 문장 이내로 설명하세요

모범답안

빌더 패턴은 여러 단계에 걸쳐 점진적으로 조립하는 대상에 적합함. `StringBuilder`는 `append()`를 어떤 순서로 몇 번을 호출해도 중간 상태가 항상 유효한 문자열이고, `toString()` 메서드가 완성품인 `String` 개체를 반환하므로 올바른 빌더임. 반면 `Employee`는 이름·나이·입사연도 같은 필수값이 정해진 개체인데, 빌더로 만들면 필수값 설정 메서드의 호출 누락을 컴파일 타임에 잡을 수 없음. 누락된 필드는 기본값(0)으로 생성되어 "생성 시 개체의 상태가 유효해야 한다"는 캡슐화 보장이 깨짐. 필수값은 빌더가 아니라 생성자로 강제하는 것이 올바름.

## 다음 각 명제의 O/X는?

1. `StringBuilder`의 `toString()` 메서드는 빌더 자기 자신을 반환한다
2. 필수값이 있는 개체를 빌더 패턴으로 만들면 설정 메서드 호출 누락을 컴파일 오류로 잡을 수 있다
3. `StringBuilder` 개체 생성 시 초기 용량을 매개변수로 전달할 수 있다는 것은 "내부를 알아야 좋은 경우"의 예다
4. 다형적 빌더 패턴은 빌더를 부모(일반화된) 타입 매개변수로 받아, 전달된 실체에 따라 다른 형식의 결과물을 만든다

1. **X** — `toString()` 메서드는 ==완성품인 `String` 개체==를 반환 (이것이 올바른 빌더의 조건). 자기 자신을 반환하는 건 조립 단계의 `append()` 메서드
2. **X** — 못 잡음. 컴파일·실행 다 되고 기본값으로 생성되는 조용한 버그 — 빌더 오용인 이유
3. **O** — 내부적으로 미리 용량을 잡아 성능에 유리. [[pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/index|디커플링의 단점 2]](내부를 알아야 좋은 경우)의 예
4. **O** — 강의 예: `writeTo(TableBuilder builder)` 메서드가 `TableBuilder` 추상 클래스 타입으로 받고, `HtmlTableBuilder`·`MarkdownTableBuilder` 실체에 따라 HTML/마크다운 표가 만들어짐 (dynamic dispatch)
