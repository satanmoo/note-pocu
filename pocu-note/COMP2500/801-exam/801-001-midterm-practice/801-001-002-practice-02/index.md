---
title: 연습 문제 (2)
---
# 연습 문제 (2)

25분 분량

## 시험 안내

문제 유형 (총 3가지)
- 코드 읽기 (오류 판별 / 출력 예측)
- 코드 작성하기 (예: Animal 상속하여 Dog 클래스 작성, 클래스 3~4개 규모의 간단한 시스템 설계 및 구현)
- 어떤 개념에 대한 설명하기 (예: OOP의 장점은 무엇인가?)

중간고사에 대비해서 공부해야 할 주제들 (COMP2500 폴더 000 ~ 007, 1주 ~ 7주에서 배운 내용 전부)
1. Java 언어의 기본 문법 (정수형/char/bool/String, final, 리터럴, == vs equals)
2. 참조형과 포인터, 참조형 인자 전달
3. 개체지향 프로그래밍(OOP)의 필요성
4. OOP의 4대 특성
5. 클래스와 개체, 인스턴스와 메모리, 멤버 변수 기본값
6. 생성자
7. 접근 제어자(access modifier)
8. getter/setter 메서드, setter 베스트 프랙티스
9. 캡슐화, 데이터 추상화
10. 클래스 다이어그램, 모델링
11. 유연성과 재사용성
12. 정적(static) 멤버 변수 및 메서드
13. 싱글턴, 정적 vs 싱글턴
14. 내포(nested) 클래스
15. 상속, 생성자 호출 순서
16. 개체의 명시적/암시적 캐스팅
17. instanceof, RTTI(run time type identification)
18. Object 클래스
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
// Circle.java
package academy.pocu.comp2500;

public class Circle {
	private final int radius;

	public Circle(int radius) {
		this.radius = radius;
	}

	public int getRadius() {
		return this.radius;
	}

	public void setRadius(int radius) {
		this.radius = radius;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Circle c = new Circle(5);
		c.setRadius(10);
		System.out.println(c.getRadius());
	}
}
```

### 1-b)

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		String s1 = "POCU";
		String s2 = new String("POCU");

		System.out.println(s1 == s2);
		System.out.println(s1.equals(s2));
	}
}
```

### 1-c)

```java
// Box.java
package academy.pocu.comp2500;

public class Box {
	private int width;
	private boolean isOpen;
	private String label;

	public int getWidth() {
		return this.width;
	}

	public boolean getIsOpen() {
		return this.isOpen;
	}

	public String getLabel() {
		return this.label;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Box box = new Box();
		System.out.println(box.getWidth());
		System.out.println(box.getIsOpen());
		System.out.println(box.getLabel());
	}
}
```

## 2

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Counter.java
package academy.pocu.comp2500;

public class Counter {
	private int count;

	public Counter(int count) {
		this.count = count;
	}

	public int getCount() {
		return this.count;
	}

	public void increase() {
		++this.count;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		int x = 10;
		Counter counter = new Counter(10);

		magic(x, counter);

		System.out.println(x);
		System.out.println(counter.getCount());
	}

	private static void magic(int x, Counter counter) {
		x += 5;
		counter.increase();
		counter = new Counter(100);
		counter.increase();
	}
}
```

## 3

상속(inheritance)과 컴포지션(composition) 중 무엇을 사용할지 결정할 때 고려하는 4가지 기준을 적으세요.

## 4

Java는 클래스의 다중 상속(multiple inheritance)을 지원하지 않습니다.
a) 다중 상속을 허용하면 어떤 문제가 생기나요?
b) Java에서는 무엇을 사용하면 한 클래스가 여러 타입을 동시에 가질 수 있나요?

## 5

다음과 같은 클래스가 있습니다.

```java
// Animal.java
package academy.pocu.comp2500;

public class Animal {
	protected String name;

	public Animal(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}
}

// Bird.java
package academy.pocu.comp2500;

public class Bird extends Animal {
	public Bird(String name) {
		super(name);
	}

	public void fly() {
		System.out.println(this.name + " is flying");
	}
}

// Penguin.java
package academy.pocu.comp2500;

public class Penguin extends Bird {
	public Penguin(String name) {
		super(name);
	}

	public void swim() {
		System.out.println(this.name + " is swimming");
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
Animal a = new Penguin("Pingu");
a.fly();
```

### 5-b)

```java
Animal a = new Bird("Tweety");

if (a instanceof Penguin) {
	System.out.println("penguin");
} else if (a instanceof Bird) {
	System.out.println("bird");
} else {
	System.out.println("animal");
}
```

### 5-c)

```java
Animal a = new Bird("Coco");
Penguin p = (Penguin) a;
p.swim();
```

## 6

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Base.java
package academy.pocu.comp2500;

public class Base {
	protected int value = 1;

	public Base() {
		System.out.println("Base ctor: " + this.value);
		this.value = 2;
	}
}

// Derived.java
package academy.pocu.comp2500;

public class Derived extends Base {
	private int x = 10;

	public Derived() {
		System.out.println("Derived ctor: value=" + this.value + ", x=" + this.x);
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Derived d = new Derived();
	}
}
```

## 7

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Player.java
package academy.pocu.comp2500;

public class Player {
	private static int playerCount = 0;
	private int id;

	public Player() {
		++playerCount;
		this.id = playerCount;
	}

	public int getId() {
		return this.id;
	}

	public static int getPlayerCount() {
		return playerCount;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Player p1 = new Player();
		Player p2 = new Player();
		Player p3 = new Player();

		System.out.println(p1.getId());
		System.out.println(p3.getId());
		System.out.println(Player.getPlayerCount());
	}
}
```

## 8

다음 요구사항에 맞게 클래스를 설계 및 구현하세요. (패키지는 `academy.pocu.comp2500`)

- `Shape` (부모 클래스)
	- 이름(`name`)과 넓이(`area`)를 멤버 변수로 저장
	- 생성자로 `name`과 `area`를 받아 초기화
	- `getName()`, `getArea()` 제공
- `Circle` (`Shape` 상속)
	- 반지름(`radius`)을 받아 넓이(`Math.PI * radius * radius`)를 계산해 부모에 전달
- `Rectangle` (`Shape` 상속)
	- 너비(`width`), 높이(`height`)를 받아 넓이(`width * height`)를 계산해 부모에 전달
- `Program`의 `main`에서
	- `Circle`, `Rectangle`을 하나씩 만들고 각각의 이름과 넓이를 출력

가능한 한 캡슐화를 지키세요.

## 9

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Wallet.java
package academy.pocu.comp2500;

public class Wallet {
	private int money;

	public Wallet(int money) {
		this.money = money;
	}

	public class Coin {
		private int value;

		public Coin(int value) {
			this.value = value;
		}

		public void insert() {
			money += this.value;
		}
	}

	public int getMoney() {
		return this.money;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Wallet wallet = new Wallet(100);
		Wallet.Coin coin = wallet.new Coin(50);
		coin.insert();

		System.out.println(wallet.getMoney());
	}
}
```

## 10

싱글턴(singleton) 패턴이 무엇인지 설명하고, 모든 멤버를 `static`으로 만든 클래스 대신 싱글턴을 사용할 때의 장점을 2가지 이상 적으세요.

## 11

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Money.java
package academy.pocu.comp2500;

public class Money {
	private int amount;

	public Money(int amount) {
		this.amount = amount;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Money m1 = new Money(100);
		Money m2 = new Money(100);
		Money m3 = m1;

		System.out.println(m1.equals(m2));
		System.out.println(m1.equals(m3));
	}
}
```
