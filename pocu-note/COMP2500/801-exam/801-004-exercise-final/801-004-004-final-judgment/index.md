---
title: final 판정 (008-010)
---
# final 판정 (008-010)

> 서술형은 ANKI로 분리: 다형성의 장점 https://pocu-site.pages.dev/pocu-note/COMP2500/anki/05-polymorphism-advantages/ · 바인딩 정의·성능 https://pocu-site.pages.dev/pocu-note/COMP2500/anki/06-binding-and-final/

## 다음 코드의 결과는? (`final` 메서드 — 공식 연습 4번 유형)

```java
public class A {
	public final void print() {
		System.out.println("A");
	}
}

public class B extends A {
	@Override
	public void print() {
		System.out.println("B");
	}
}
```

컴파일 오류

- `final` 메서드는 자식 클래스에서 오버라이딩(동일 시그니처 선언) 불가
- `final`을 붙이는 순간 컴파일러는 이 메서드가 오버라이딩되지 않음을 알 수 있음 → ==이른 바인딩 가능== (최적화 여지)

## 다음 설명 중 틀린 것은? (`final` 클래스)

1. `final` 클래스는 상속할 수 없다
2. `final` 클래스 안의 메서드에 `final`을 붙이는 것은 중복이다
3. 모든 메서드가 `final`인 클래스 A는 상속할 수 없다
4. Java의 기본 동작은 모든 클래스가 상속 가능하고 메서드는 가상(오버라이딩 가능)이다

3번이 틀림

- 모든 메서드가 `final`이어도 **상속 자체는 가능** — 오버라이딩만 불가 (새 메서드 추가는 됨)
- 클래스 상속을 막으려면 클래스에 `final`을 붙여야 함 (1번) — 상속이 안 되니 오버라이딩도 원천 불가라 메서드 `final`은 중복 (2번)
- Java는 기본이 가상이라 마음대로 상속·오버라이딩되는 것을 막는 수단이 `final` (4번)

## 다음 코드를 읽고 답하세요 (공식 4번 오답 변형 — 정적 스캔 드릴)

a) 이 코드에 오류가 있나요? (컴파일 오류 / 런타임 오류 / 문제없음)
b) 오류가 있다면 위반 지점을 ==모두== 찾아 설명하세요.
c) 문제없다면 출력을 적으세요.

```java
// Account.java
package academy.pocu.comp2500;

import java.util.ArrayList;

public class Account {
	private final int id;
	protected int balance;

	public Account(int id, int balance) {
		this.id = id;
		this.balance = balance;
	}

	public final void printBalance() {
		System.out.println(this.balance);
	}

	public void deposit(ArrayList<Integer> amounts) {
		for (int i = 0; i < amounts.size(); ++i) {
			this.balance += amounts.get(i);
		}

		this.id = this.balance;
	}
}

// SavingsAccount.java
package academy.pocu.comp2500;

public class SavingsAccount extends Account {
	private int rate;

	public SavingsAccount(int id, int balance, int rate) {
		super(id, balance);
		this.rate = rate;
	}

	@Override
	public void printBalance() {
		System.out.println(this.balance * this.rate);
	}
}

// Program.java
package academy.pocu.comp2500;

import java.util.ArrayList;

public class Program {
	public static void main(String[] args) {
		ArrayList<Integer> amounts = new ArrayList<>();
		amounts.add(100);
		amounts.add(50);

		Account account = new SavingsAccount(1, 1000, 2);
		account.deposit(amounts);
		account.printBalance();
	}
}
```

a) **컴파일 오류**
b) 위반 지점 2곳:
- `deposit()` 메서드의 `this.id = this.balance;` — ==`final` 멤버 변수는 생성자 밖에서 재대입 불가== ("cannot assign a value to final variable id")
- `SavingsAccount`의 `printBalance()` — ==`final` 메서드는 오버라이딩 불가== ("overridden method is final")
c) (적지 않음 — 오류로 판정했으면 c를 적으면 감점)

- 함정 구조: `ArrayList` 조작 로직이 시선을 끌지만 답은 로직과 무관하게 ==선언부에== 있음 — 로직 추적 전에 정적 스캔(`final`·`abstract`·접근 제어자·`throws`) 먼저, 출력 추적은 "문제없음" 확정 후에만
- "모두 찾기" 주의 — 첫 위반에서 멈추면 반쪽 답 ([[pocu-note/COMP2500/801-exam/exam-habit-log|기말 습관 로그]] 참고)
