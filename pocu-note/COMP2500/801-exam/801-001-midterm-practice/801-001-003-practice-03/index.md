# 연습 문제 (3)

25분 분량

## 시험 안내

문제 유형 (총 3가지)
- 코드 읽기 (오류 판별 / 출력 예측)
- 코드 작성하기 (예: Animal 상속하여 Dog 클래스 작성, 클래스 3~4개 규모의 간단한 시스템 설계 및 구현)
- 어떤 개념에 대한 설명하기 (예: OOP의 장점은 무엇인가?)

중간고사에 대비해서 공부해야 할 주제들 (COMP2500 폴더 000 ~ 007, 1주 ~ 7주에서 배운 내용 전부)
1. Java 언어의 기본 문법 (정수형/char/bool/String, final, 리터럴, 정수 나눗셈/형변환, == vs equals)
2. 참조형과 포인터, 참조형 인자 전달
3. 개체지향 프로그래밍(OOP)의 필요성
4. OOP의 4대 특성
5. 클래스와 개체, 인스턴스와 메모리, 멤버 변수 기본값
6. 생성자, this() 생성자 체이닝
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
// Temperature.java
package academy.pocu.comp2500;

public class Temperature {
	private int celsius;

	public Temperature(int celsius) {
		this.celsius = celsius;
	}

	public int getCelsius() {
		return this.celsius;
	}

	public int getFahrenheit() {
		return this.celsius * 9 / 5 + 32;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Temperature t = new Temperature(100);
		System.out.println(t.getFahrenheit());
	}
}
```

### 1-b)

```java
// User.java
package academy.pocu.comp2500;

public class User {
	private String name;
	private int age;

	public User(String name) {
		this.name = name;
		this(name, 0);
	}

	public User(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public String getName() {
		return this.name;
	}

	public int getAge() {
		return this.age;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		User u = new User("Kim");
		System.out.println(u.getName());
		System.out.println(u.getAge());
	}
}
```

### 1-c)

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		char c = 'A';
		int x = c + 1;
		System.out.println(x);
		System.out.println((char) x);

		int a = 7;
		int b = 2;
		System.out.println(a / b);
		System.out.println((double) a / b);
	}
}
```

## 2

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Box.java
package academy.pocu.comp2500;

public class Box {
	private int value;

	public Box(int value) {
		this.value = value;
	}

	public int getValue() {
		return this.value;
	}

	public void setValue(int value) {
		this.value = value;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Box b1 = new Box(10);
		Box b2 = new Box(20);

		swap(b1, b2);
		System.out.println(b1.getValue());
		System.out.println(b2.getValue());

		change(b1);
		System.out.println(b1.getValue());
	}

	private static void swap(Box x, Box y) {
		Box temp = x;
		x = y;
		y = temp;
	}

	private static void change(Box x) {
		x.setValue(99);
	}
}
```

## 3

캡슐화(encapsulation)가 무엇인지 설명하세요. 또한 OOP에서 추상화(abstraction)를 바라보는 두 가지 관점을 각각 설명하세요.

## 4

정적(static) 멤버 변수와 인스턴스(instance) 멤버 변수의 차이를 설명하세요. 또한 정적 메서드 안에서 `this`를 사용할 수 없는 이유를 설명하세요.

## 5

다음과 같은 클래스가 있습니다.

```java
// Vehicle.java
package academy.pocu.comp2500;

public class Vehicle {
	protected String name;

	public Vehicle(String name) {
		this.name = name;
	}

	public void move() {
		System.out.println(this.name + " moves");
	}
}

// Car.java
package academy.pocu.comp2500;

public class Car extends Vehicle {
	public Car(String name) {
		super(name);
	}

	public void honk() {
		System.out.println(this.name + " honks");
	}
}

// Boat.java
package academy.pocu.comp2500;

public class Boat extends Vehicle {
	public Boat(String name) {
		super(name);
	}

	public void sail() {
		System.out.println(this.name + " sails");
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
Vehicle v = new Car("Sedan");
v.move();
v.honk();
```

### 5-b)

```java
Car c = new Car("Truck");
Vehicle v = c;

if (v instanceof Boat) {
	System.out.println("boat");
} else if (v instanceof Car) {
	System.out.println("car");
} else {
	System.out.println("vehicle");
}
```

### 5-c)

```java
Vehicle v = new Boat("Yacht");
Car c = (Car) v;
c.honk();
```

### 5-d)

```java
Vehicle v = new Car("Mini");
Car c = (Car) v;
c.honk();
```

## 6

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Account.java
package academy.pocu.comp2500;

public class Account {
	private static int nextId = 1000;
	private int id;

	public Account() {
		this.id = nextId;
		nextId += 10;
	}

	public int getId() {
		return this.id;
	}

	public static int getNextId() {
		return nextId;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Account a = new Account();
		Account b = new Account();
		Account c = new Account();

		System.out.println(a.getId());
		System.out.println(c.getId());
		System.out.println(Account.getNextId());
	}
}
```

## 7

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Grandparent.java
package academy.pocu.comp2500;

public class Grandparent {
	public Grandparent() {
		System.out.println("Grandparent");
	}
}

// Parent.java
package academy.pocu.comp2500;

public class Parent extends Grandparent {
	public Parent() {
		System.out.println("Parent");
	}
}

// Child.java
package academy.pocu.comp2500;

public class Child extends Parent {
	public Child() {
		System.out.println("Child");
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Parent p = new Child();
	}
}
```

## 8

다음 요구사항에 맞게 클래스를 설계 및 구현하세요. (패키지는 `academy.pocu.comp2500`) **컴포지션(composition)** 을 사용하세요.

- `Engine`
	- 마력(`horsepower`, int)을 멤버 변수로 저장
	- 생성자로 `horsepower`를 받아 초기화
	- `getHorsepower()` 제공
- `Car`
	- 이름(`name`)과 `Engine` 한 개를 멤버 변수로 가짐 (has-a 관계)
	- 생성자로 `name`과 `horsepower`를 받아, 내부에서 `Engine`을 생성해 보관
	- `getName()` 제공
	- `getHorsepower()` 제공 (보관한 `Engine`에 위임)
- `Program`의 `main`에서
	- `Car`를 하나 만들고 이름과 마력을 출력

가능한 한 캡슐화를 지키세요.

## 9

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Library.java
package academy.pocu.comp2500;

public class Library {
	private int bookCount;

	public Library(int bookCount) {
		this.bookCount = bookCount;
	}

	public class Shelf {
		private int capacity;

		public Shelf(int capacity) {
			this.capacity = capacity;
		}

		public void store() {
			bookCount += this.capacity;
		}
	}

	public int getBookCount() {
		return this.bookCount;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Library library = new Library(30);
		Library.Shelf shelf = library.new Shelf(20);
		shelf.store();
		shelf.store();

		System.out.println(library.getBookCount());
	}
}
```

## 10

개체의 상태를 수정하는 '이상적인 방법'은 무엇인지 (setter 베스트 프랙티스 4) 설명하세요. 또한 무조건 setter를 추가하는 것이 왜 좋지 않은지 적으세요.

## 11

문제 5의 `Vehicle`, `Car`, `Boat` 클래스를 그대로 사용합니다. 다음 코드를 실행하면 무엇이 출력되나요?

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Vehicle[] vehicles = new Vehicle[3];
		vehicles[0] = new Car("A");
		vehicles[1] = new Boat("B");
		vehicles[2] = new Car("C");

		for (Vehicle v : vehicles) {
			if (v instanceof Car) {
				((Car) v).honk();
			} else if (v instanceof Boat) {
				((Boat) v).sail();
			}
		}
	}
}
```
