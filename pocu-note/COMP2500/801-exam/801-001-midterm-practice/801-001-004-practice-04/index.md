# 연습 문제 (4)

25분 분량

## 시험 안내

문제 유형 (총 3가지)
- 코드 읽기 (오류 판별 / 출력 예측)
- 코드 작성하기 (예: Animal 상속하여 Dog 클래스 작성, 클래스 3~4개 규모의 간단한 시스템 설계 및 구현)
- 어떤 개념에 대한 설명하기 (예: OOP의 장점은 무엇인가?)

중간고사에 대비해서 공부해야 할 주제들 (COMP2500 폴더 000 ~ 007, 1주 ~ 7주에서 배운 내용 전부)
1. Java 언어의 기본 문법 (정수형/오버플로, char/bool/String, final, 리터럴, 연산자 우선순위, 캐스팅, 단락 평가)
2. 참조형과 포인터, 참조형 인자 전달
3. 개체지향 프로그래밍(OOP)의 필요성 (절차적 프로그래밍의 한계)
4. OOP의 4대 특성
5. 클래스와 개체, 인스턴스와 메모리, 멤버 변수 기본값
6. 생성자, 생성자 오버로딩, this() 체이닝
7. 접근 제어자(access modifier)
8. getter/setter 메서드, setter 베스트 프랙티스 (참조형 getter의 위험)
9. 캡슐화, 데이터 추상화
10. 클래스 다이어그램, 모델링
11. 유연성과 재사용성
12. 정적(static) 멤버 변수 및 메서드
13. 싱글턴, 정적 vs 싱글턴
14. 내포(nested) 클래스
15. 상속, 생성자 호출 순서
16. 개체의 명시적/암시적 캐스팅
17. instanceof, RTTI(run time type identification)
18. Object 클래스, getClass()
19. 다중 상속과 인터페이스
20. 상속 vs 컴포지션 (is-a / has-a)

## 1

아래에 있는 각 코드를 읽고 다음 질문에 답하세요.
a) 이 코드에 오류가 있나요? 경우에 따라 아래처럼 답안지에 써주세요
- 컴파일 오류가 있다면: '컴파일 오류'
- 실행 중 오류가 있다면: '런타임 오류'
- 아무 문제 없다면: '문제 없음'

b) a)에서 오류가 있었다고 답했으면 그 문제를 어떻게 고칠지 설명하세요. 설명은 문장으로 하셔도 되고 코드를 직접 수정하셔도 됩니다. 코드를 직접 수정하실 경우 아래 형식을 따라주세요.

예:
전) a = p;
후) a = p + 11;

c) a)에서 '문제 없음'이라고 답했으면 코드 실행 후 출력되는 결과를 적으세요.

### 1-a)

```java
// Inventory.java
package academy.pocu.comp2500;

public class Inventory {
	private int[] items;

	public Inventory(int[] items) {
		this.items = items;
	}

	public int[] getItems() {
		return this.items;
	}

	public int getTotal() {
		int sum = 0;
		for (int item : this.items) {
			sum += item;
		}
		return sum;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		int[] data = { 1, 2, 3 };
		Inventory inventory = new Inventory(data);

		int[] items = inventory.getItems();
		items[0] = 100;

		System.out.println(inventory.getTotal());
	}
}
```

### 1-b)

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		final int count = 10;
		count = count + 5;
		System.out.println(count);
	}
}
```

### 1-c)

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		int max = 2147483647;
		int next = max + 1;

		System.out.println(max);
		System.out.println(next);
	}
}
```

## 2

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Checker.java
package academy.pocu.comp2500;

public class Checker {
	private int calls;

	public boolean isPositive(int value) {
		++this.calls;
		return value > 0;
	}

	public int getCalls() {
		return this.calls;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Checker checker = new Checker();

		boolean r1 = false && checker.isPositive(5);
		boolean r2 = true || checker.isPositive(5);
		boolean r3 = true && checker.isPositive(-3);

		System.out.println(r1);
		System.out.println(r2);
		System.out.println(r3);
		System.out.println(checker.getCalls());
	}
}
```

## 3

개체지향 프로그래밍(OOP)이 왜 필요한가요? 절차적 프로그래밍(구조체 + 함수)의 한계를 중심으로, OOP가 이를 어떻게 해결하는지 설명하세요.

## 4

유연성(flexibility)과 재사용성(reusability)에 대한 질문입니다.
a) 유연성과 재사용성은 일반적으로 어떤 관계인가요?
b) 유연성을 높이면 어떤 단점이 생기나요? 2가지를 적으세요.

## 5

다음과 같은 클래스가 있습니다.

```java
// Base.java
package academy.pocu.comp2500;

public class Base {
	private int secret;
	protected int shared;

	public Base(int secret, int shared) {
		this.secret = secret;
		this.shared = shared;
	}

	private int getSecret() {
		return this.secret;
	}

	public int reveal() {
		return getSecret();
	}
}

// Derived.java
package academy.pocu.comp2500;

public class Derived extends Base {
	public Derived(int secret, int shared) {
		super(secret, shared);
	}

	public int useShared() {
		return this.shared + 1;
	}
}
```

아래에 있는 각 코드를 읽고 다음 질문에 답하세요.
a) 이 코드에 오류가 있나요? 경우에 따라 아래처럼 답안지에 써주세요
- 컴파일 오류가 있다면: '컴파일 오류'
- 실행 중 오류가 있다면: '런타임 오류'
- 아무 문제 없다면: '문제 없음'

b) a)에서 오류가 있었다고 답했으면 그 문제를 어떻게 고칠지 설명하세요. 설명은 문장으로 하셔도 되고 코드를 직접 수정하셔도 됩니다. 코드를 직접 수정하실 경우 아래 형식을 따라주세요.

예:
전) a = p;
후) a = p + 11;

c) a)에서 '문제 없음'이라고 답했으면 코드 실행 후 출력되는 결과를 적으세요.

### 5-a)

```java
Base base = new Base(1, 2);
System.out.println(base.secret);
```

### 5-b)

```java
Derived derived = new Derived(1, 2);
System.out.println(derived.useShared());
```

### 5-c)

```java
Base base = new Base(7, 8);
System.out.println(base.reveal());
```

## 6

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Pizza.java
package academy.pocu.comp2500;

public class Pizza {
	private String size;
	private int cheese;
	private int pepperoni;

	public Pizza() {
		this("M");
	}

	public Pizza(String size) {
		this(size, 1);
	}

	public Pizza(String size, int cheese) {
		this.size = size;
		this.cheese = cheese;
		this.pepperoni = 0;
	}

	public String describe() {
		return this.size + " cheese=" + this.cheese + " pepperoni=" + this.pepperoni;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Pizza p1 = new Pizza();
		Pizza p2 = new Pizza("L");
		Pizza p3 = new Pizza("S", 3);

		System.out.println(p1.describe());
		System.out.println(p2.describe());
		System.out.println(p3.describe());
	}
}
```

## 7

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		String s1 = "pocu";
		s1.toUpperCase();
		System.out.println(s1);

		String s2 = "pocu";
		String s3 = s2.toUpperCase();
		System.out.println(s2);
		System.out.println(s3);
	}
}
```

## 8

다음 클래스 다이어그램을 보고 Java 코드로 구현하세요. (패키지는 `academy.pocu.comp2500`)

```
+------------------------------------+
|            BankAccount             |
+------------------------------------+
| - owner: String                    |
| - balance: int                     |
+------------------------------------+
| + BankAccount(owner: String,       |
|               balance: int)        |
| + getOwner(): String               |
| + getBalance(): int                |
| + deposit(amount: int): void       |
| + withdraw(amount: int): boolean   |
+------------------------------------+
```

- `+`는 public, `-`는 private을 의미합니다.
- `deposit(amount)`: `amount`만큼 잔액을 늘립니다.
- `withdraw(amount)`: 잔액이 `amount` 이상이면 잔액을 줄이고 `true`를 반환, 부족하면 잔액을 그대로 두고 `false`를 반환합니다.
- `Program`의 `main`에서 `BankAccount`를 하나 만들고, 입금/출금을 한 뒤 잔액을 출력하세요.

가능한 한 캡슐화를 지키세요.

## 9

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Animal.java
package academy.pocu.comp2500;

public class Animal {
}

// Dog.java
package academy.pocu.comp2500;

public class Dog extends Animal {
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Animal animal = new Dog();
		System.out.println(animal.getClass().getName());
	}
}
```

## 10

클래스 다이어그램에 대한 질문입니다.
a) 멤버 앞에 붙는 `+`, `-`, `#` 기호는 각각 무엇을 의미하나요?
b) 상속(is-a) 관계와 컴포지션/has-a 관계는 클래스 다이어그램에서 어떻게 다르게 표현되나요?

## 11

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		System.out.println(2 + 3 * 4);
		System.out.println(17 % 5);
		System.out.println(7 / 2 * 2);
		System.out.println((double) (7 / 2));
		System.out.println(1 + 2 + "a" + 1 + 2);
	}
}
```
