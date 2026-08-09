---
title: 추상 메서드/추상 클래스 (009-001~007)
---
# 추상 메서드/추상 클래스 (009-001~007)

> 서술 개념(추상화의 의미·관계)은 ANKI 참고: [11-다형성·상속·추상화의 관계](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/11-polymorphism-inheritance-abstraction/)

## 다음 코드의 출력은? (추상 메서드 도입 전 — "말 안 듣는 자식")

```java
public class Monster {
	protected int hp = 100;

	public final void attack(Monster target) {
		target.hp -= calculateDamage();
	}

	protected int calculateDamage() {
		return 0;
	}
}

public class Troll extends Monster {
	// calculateDamage()를 오버라이딩하지 않음 (깜빡)
}

// main
Monster attacker = new Troll();
Monster target = new Troll();
attacker.attack(target);
System.out.println(target.hp);
```

`100`

- `Troll`이 `calculateDamage()`를 오버라이딩하지 않아 `Monster`의 기본 구현(`return 0`)이 실행됨 → `target.hp -= 0` → 피해 없음
- 컴파일·실행 다 되지만 의도와 다른 ==조용한 버그== (hp가 안 줄어 원점에서 먼 곳에서 발견)
- 설계 원리: 다형성 범위를 동작 전체가 아니라 ==변하는 부분(`calculateDamage()`)만==으로 좁힘 — 공통 흐름 `attack()`은 `final`로 고정. 넓게 잡으면 자식이 흐름을 빠뜨리는 "말 안 듣는 자식"이 됨
- 이 문제가 `calculateDamage()`를 추상 메서드로 만들어 오버라이딩을 컴파일 타임에 강제하는 동기 — 아래 해법으로 이어짐

## 다음 코드의 결과는? (추상 클래스 인스턴스화 + super)

```java
public abstract class Monster {
	protected int hp = 100;

	public final void attack(Monster target) {
		target.hp -= calculateDamage();
	}

	protected abstract int calculateDamage();
}

public class Troll extends Monster {
	@Override
	protected int calculateDamage() {
		return 20;
	}
}

// main
Monster m = new Monster();
Monster t = new Troll();
```

컴파일 오류

- `new Monster()` — 추상 클래스는 개체를 만들 수 없음 (인스턴스화하면 컴파일 오류)
- `new Troll()`은 정상 — 구체 클래스이고 추상 메서드 `calculateDamage()`를 오버라이딩함
- 참고: 추상 클래스도 생성자를 가질 수 있고, 자식이 `super()`로 호출함 — "개체를 못 만든다"와 "생성자가 없다"는 다름

## 다음 코드의 결과는? (추상 메서드에 바디 — 공식 연습 7번 유형)

```java
public abstract class Pizza {
	public abstract int getPrice() {
		int sum = 10;
		return sum;
	}
}
```

컴파일 오류

- `abstract` 메서드는 시그니처만 있고 ==바디를 가질 수 없음== (`{ ... }` 금지)
- 고치는 두 방향:
	- 바디를 없애 진짜 추상 메서드로: `public abstract int getPrice();`
	- 아니면 `abstract` 키워드를 빼고 구현을 남김: `public int getPrice() { ... }`

## 다음 코드의 결과는? (구체 클래스가 추상 메서드 미구현)

```java
public abstract class Monster {
	protected abstract int calculateDamage();
}

public class Slime extends Monster {
	// calculateDamage()를 오버라이딩하지 않음
}
```

컴파일 오류

- `Slime`은 구체 클래스인데 상속받은 추상 메서드 `calculateDamage()`를 구현하지 않음 → 구체 클래스에는 추상 메서드가 남아 있으면 안 됨
- 고치는 두 방향:
	- `Slime`에서 `calculateDamage()`를 오버라이딩 구현
	- 아니면 `Slime`도 `abstract`로 선언 (그러면 개체 생성은 불가, 더 깊은 자식에서 구현)

## 다음 코드의 결과는? (추상 메서드를 가진 클래스가 `abstract`가 아님)

```java
public class Shape {
	public abstract double area();
}
```

컴파일 오류

- 추상 메서드가 하나라도 있으면 그 클래스는 반드시 `abstract`여야 함 (추상 메서드 → 반드시 추상 클래스)
- 고치는 두 방향:
	- 클래스에 `abstract` 추가: `public abstract class Shape { ... }`
	- 아니면 `area()`를 구현해 추상 메서드를 없앰

## 다음 코드의 결과는? (추상 메서드가 없는 추상 클래스)

```java
public abstract class Config {
	private int version = 1;

	public int getVersion() {
		return this.version;
	}
}

// main
Config config = new Config();
System.out.println(config.getVersion());
```

컴파일 오류

- 추상 메서드가 하나도 없어도 클래스에 `abstract`가 붙었으면 개체를 만들 수 없음 (추상 클래스 ↔ 추상 메서드는 독립 개념)
- 실익: 개체 생성을 막아 상속 전용 베이스 클래스로 강제하고 싶을 때 이렇게 씀 (다형성이 없어도 성립)

## "추상 메서드를 가지면 추상 클래스다"가 참일 때, 반드시 참인 것은?

1. 추상 클래스이면 추상 메서드를 가진다
2. 구체 클래스이면 추상 메서드를 가지지 않는다
3. 추상 메서드가 없으면 추상 클래스가 아니다
4. 추상 클래스가 아니면 추상 메서드를 가진다

2번

- 원명제 P→Q("추상 메서드 있음(P) → 추상 클래스임(Q)")와 논리적으로 동치인 것은 ==대우 ~Q→~P== 뿐
	- 2번 = "구체 클래스(~Q)이면 추상 메서드를 가지지 않음(~P)" = 대우 ✓ (Java에서 추상 클래스가 아니면 곧 구체 클래스)
- 나머지는 동치가 아님:
	- 1번 = Q→P (역) — 추상 클래스여도 추상 메서드가 없을 수 있음(위 `Config` 예) → 거짓
	- 3번 = ~P→~Q (이) — 추상 메서드가 없어도 추상 클래스일 수 있음 → 거짓
	- 4번 = ~Q→P — 구체 클래스인데 추상 메서드를 가진다는 말이라 대우와 모순
- 근거: [[pocu-note/COMP2500/009-abstract-method-class/009-005-fix-with-abstract-method-class/index|추상 메서드/클래스로 문제 고치기]]의 대우 증명

## 다음 각 명제의 O/X는?

1. 추상 클래스는 생성자를 가질 수 없다
2. 추상 클래스는 개체를 생성할 수 없다

1. **X** — 생성자를 가질 수 있음. 개체를 직접 만들지 못할 뿐, 자식이 `super()`로 호출함
2. **O** — 추상 클래스의 정의 자체

> 클래스 다이어그램 표기법(추상 클래스·메서드 이탤릭)은 ANKI로 분리: https://pocu-site.pages.dev/pocu-note/COMP2500/anki/13-abstract-uml-notation/
