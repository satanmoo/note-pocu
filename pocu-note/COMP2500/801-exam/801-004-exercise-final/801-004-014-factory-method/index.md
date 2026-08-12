---
title: 팩토리 메서드 패턴 (012-001~004)
---
# 팩토리 메서드 패턴 (012-001~004)

> 서술 개념(장점 3가지·가상 생성자 패턴)은 ANKI 참고: [32-팩토리 메서드 패턴의 장점 3가지](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/32-factory-method-benefits/), [33-가상 생성자 패턴](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/33-virtual-constructor-pattern/)

## 다음 코드의 결과는? (정적 팩토리 메서드와 `private` 생성자)

```java
public enum CupSize {
	SMALL,
	MEDIUM,
	LARGE
}

public final class Cup {
	private int sizeMl;

	private Cup(int sizeMl) {
		this.sizeMl = sizeMl;
	}

	public static Cup createOrNull(CupSize size) {
		switch (size) {
			case SMALL:
				return new Cup(355);
			case MEDIUM:
				return new Cup(473);
			case LARGE:
				return new Cup(651);
			default:
				assert (false) : "Unhandled CupSize: " + size;
				return null;
		}
	}
}

// main
Cup cup1 = new Cup(500);
Cup cup2 = Cup.createOrNull(CupSize.SMALL);
```

컴파일 오류

- `new Cup(500)` — 생성자가 `private`이라 외부에서 호출 불가. `createOrNull()` 정적 메서드를 통해서만 개체 생성 가능 (이 줄이 없다면 `cup2` 쪽은 정상)
- 이렇게 만드는 이유: 고객이 "250ml 주세요"가 아니라 "스몰 주세요"라고 하게 함 — ==클라이언트가 내부(실제 용량)를 정확히 몰라도 됨==, 규격(`CupSize` enum)만 고르면 됨
- 생성이 불가능한 경우의 처리 차이:
	- 생성자: 시그니처상 ==반환형이 없어== 예외를 던질 수밖에 없음
	- 정적 팩토리 메서드: ==`null` 반환 가능== — 예외보다 개념상 맞음

## 다음 코드의 결과는? (정적 메서드를 추상 메서드로)

```java
public abstract class Menu {
	public abstract static Cup createCupOrNull(CupSize size);
}
```

컴파일 오류

- ==정적 메서드는 `abstract`가 될 수 없음== — 정적 메서드는 오버라이딩(dynamic dispatch)이 안 되기 때문. 사실상 전역 함수를 클래스 내부에 감싸놓은 것
- 그래서 `createOrNull()` 정적 메서드는 다형적으로 구현할 수 없음 → 다형적 팩토리 메서드로 가려면 `static`을 빼고 ==인스턴스 추상 메서드==로 선언한 뒤 자식 클래스(`KoreanMenu`, `AmericanMenu`)가 오버라이딩

## 다음 코드에서 `cup` 변수에 담기는 개체의 실체는? 무엇이 그걸 결정하나? (다형적 팩토리 메서드)

```java
public abstract class Menu {
	public abstract Cup createCupOrNull(CupSize size);
}

public class KoreanMenu extends Menu {
	@Override
	public Cup createCupOrNull(CupSize size) {
		// ... GlassCup 개체를 생성해 반환
	}
}

public class AmericanMenu extends Menu {
	@Override
	public Cup createCupOrNull(CupSize size) {
		// ... 뚜껑(Lid)이 달린 PaperCup 개체를 생성해 반환
	}
}

// main
Menu menu = new AmericanMenu();
Cup cup = menu.createCupOrNull(CupSize.SMALL);
```

`PaperCup` 개체 — 실행 중 dynamic dispatch가 결정

- 무늬는 `Menu` 추상 클래스지만 실체가 `AmericanMenu`이므로 `AmericanMenu` 클래스의 오버라이딩이 실행됨
- 호출하는 쪽은 부모 타입(`Menu`)만 알고, ==어떤 구체 클래스의 개체가 생성될지는 실행 중에 결정== — 생성자는 오버라이딩이 불가능하지만, 개체 생성용 추상 메서드를 오버라이딩해서 ==마치 생성자가 가상인 것처럼== 동작시킴 (가상 생성자 패턴)
- 매개변수(enum 여러 개)로 분기하는 방식보다 다형성을 이용하는 것이 OO적인 사고방식
- 참고 — 이 구조에서 `Cup` 계열 생성자의 접근 제어자: 클라이언트가 직접 `new` 못 하게 막되 같은 패키지의 `Menu` 계열 클래스는 생성할 수 있어야 하므로 `private`이 아니라 ==패키지 접근==으로 선언

## 다음 각 명제의 O/X는?

1. 생성자는 생성이 불가능한 경우 `null`을 반환할 수 있다
2. 나중에 상태(멤버 변수)가 추가될 가능성이 높은 타입이라면 인터페이스보다 추상 클래스로 만드는 것이 낫다

1. **X** — 생성자는 시그니처상 반환형이 없어 실패 시 ==예외를 던질 수밖에 없음==. `null` 반환이 가능한 건 정적 팩토리 메서드
2. **O** — 인터페이스는 상태를 가질 수 없음 ([[pocu-note/COMP2500/010-interface/010-003-interface-is-pure-abstract-class/index|인터페이스는 순수 추상 클래스]] 참고). 강의 예: `Menu`를 인터페이스가 아닌 추상 클래스로 만든 이유
