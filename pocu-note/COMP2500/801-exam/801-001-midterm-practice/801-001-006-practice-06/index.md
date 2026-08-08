---
title: 연습 문제 (6)
---
# 연습 문제 (6)

25분 분량

## 시험 안내

문제 유형 (총 3가지)
- 코드 읽기 (오류 판별 / 출력 예측)
- 코드 작성하기 (예: Animal 상속하여 Dog 클래스 작성, 클래스 3~4개 규모의 간단한 시스템 설계 및 구현)
- 어떤 개념에 대한 설명하기 (예: OOP의 장점은 무엇인가?)

중간고사에 대비해서 공부해야 할 주제들 (COMP2500 폴더 000 ~ 007, 1주 ~ 7주에서 배운 내용 전부)
1. Java 언어의 기본 문법 (정수형/리터럴, char/bool/String, final, 캐스팅(자동 형변환), 조건문/switch, 반복문, 열거형(enum))
2. 참조형과 포인터, 참조형 인자 전달, 참조 공유
3. 개체지향 프로그래밍(OOP)의 필요성
4. OOP의 4대 특성
5. 클래스와 개체(인스턴스)의 차이, 인스턴스와 메모리, 멤버 변수 기본값
6. 생성자, 생성자 오버로딩, this() 체이닝
7. 접근 제어자(access modifier), private 메서드의 용도
8. getter/setter 메서드, setter 베스트 프랙티스 (유효성 검사)
9. 캡슐화, 데이터 추상화
10. 클래스 다이어그램, 모델링
11. 유연성과 재사용성
12. 정적(static) 멤버 변수 및 메서드
13. 싱글턴, 정적 vs 싱글턴
14. 내포(nested) 클래스
15. 상속, 생성자 호출 순서, 부모 멤버 접근(super), 부모 클래스의 독립성, 중복 코드 분리
16. 개체의 명시적/암시적 캐스팅
17. instanceof, RTTI(run time type identification)
18. Object 클래스, getClass()
19. 다중 상속과 인터페이스
20. 상속 vs 컴포지션 (is-a / has-a), 메모리 관점

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
// Box.java
package academy.pocu.comp2500;

public class Box {
	private String label;

	public int getLabelLength() {
		return this.label.length();
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Box box = new Box();
		System.out.println(box.getLabelLength());
	}
}
```

### 1-b)

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		int i = 10;
		long l = i;
		double d = l;

		System.out.println(d);
	}
}
```

### 1-c)

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		System.out.println(addOne(5));
	}

	private static int addOne(final int x) {
		x = x + 1;
		return x;
	}
}
```

## 2

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Timer.java
package academy.pocu.comp2500;

public class Timer {
	protected int seconds;

	public Timer(int seconds) {
		this.seconds = seconds;
	}

	public int getSeconds() {
		return this.seconds;
	}
}

// Stopwatch.java
package academy.pocu.comp2500;

public class Stopwatch extends Timer {
	public Stopwatch(int seconds) {
		super(seconds);
	}

	public void tick() {
		super.seconds += 5;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Stopwatch sw = new Stopwatch(10);
		sw.tick();
		sw.tick();

		System.out.println(sw.getSeconds());
	}
}
```

## 3

클래스(class)와 개체(object, 인스턴스)는 어떻게 다른가요? 예/비유를 들어 설명하세요.

## 4

상속(inheritance)과 컴포지션(composition)은 **메모리 관점**에서 어떻게 다른가요? 그리고 그 차이가 성능에 어떤 영향을 주나요?

## 5

다음과 같은 열거형(enum)이 있습니다.

```java
// Grade.java
package academy.pocu.comp2500;

public enum Grade {
	A(4),
	B(3),
	C(2);

	private int point;

	Grade(int point) {
		this.point = point;
	}

	public int getPoint() {
		return this.point;
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
Grade g = Grade.B;
System.out.println(g.getPoint());
```

### 5-b)

```java
Grade g = new Grade(5);
System.out.println(g.getPoint());
```

### 5-c)

```java
Grade g = Grade.A;

switch (g) {
	case A:
		System.out.println("excellent");
		break;
	case B:
		System.out.println("good");
		break;
	default:
		System.out.println("ok");
}
```

## 6

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Counter.java
package academy.pocu.comp2500;

public class Counter {
	private int value;

	public void increase() {
		++this.value;
	}

	public int getValue() {
		return this.value;
	}
}

// Worker.java
package academy.pocu.comp2500;

public class Worker {
	private Counter counter;

	public Worker(Counter counter) {
		this.counter = counter;
	}

	public void work() {
		this.counter.increase();
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Counter shared = new Counter();
		Worker w1 = new Worker(shared);
		Worker w2 = new Worker(shared);

		w1.work();
		w2.work();
		w2.work();

		System.out.println(shared.getValue());
	}
}
```

## 7

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Person.java
package academy.pocu.comp2500;

public class Person {
	protected String role;

	public Person() {
		this.role = "person";
	}

	public String getRole() {
		return this.role;
	}
}

// Student.java
package academy.pocu.comp2500;

public class Student extends Person {
	public Student() {
		this.role = "student";
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Person p = new Person();
		Student s = new Student();

		System.out.println(p.getRole());
		System.out.println(s.getRole());
	}
}
```

## 8

다음 두 클래스에는 중복된 코드가 있습니다. 공통 부분을 부모 클래스 `Animal`로 분리하고, `Dog`와 `Cat`이 이를 상속하도록 다시 작성하세요. (패키지는 `academy.pocu.comp2500`)

```java
// Dog.java
package academy.pocu.comp2500;

public class Dog {
	private String name;

	public Dog(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public void eat() {
		System.out.println(this.name + " is eating");
	}

	public void bark() {
		System.out.println("Bark!");
	}
}

// Cat.java
package academy.pocu.comp2500;

public class Cat {
	private String name;

	public Cat(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public void eat() {
		System.out.println(this.name + " is eating");
	}

	public void meow() {
		System.out.println("Meow!");
	}
}
```

## 9

`private` 메서드는 언제, 왜 사용하나요? 용도를 설명하세요.

## 10

Java의 모든 클래스는 어떤 클래스를 상속하나요? 또한 `getClass()` 같은 RTTI(run time type identification) 기능이 무엇이며, 어떤 단점이 있는지 설명하세요.

## 11

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Stat.java
package academy.pocu.comp2500;

public class Stat {
	private int[] scores;

	public Stat(int[] scores) {
		this.scores = scores;
	}

	private int sum() {
		int total = 0;
		for (int s : this.scores) {
			total += s;
		}
		return total;
	}

	public int getTotal() {
		return sum();
	}

	public int getAverage() {
		return sum() / this.scores.length;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Stat stat = new Stat(new int[] { 10, 20, 30 });

		System.out.println(stat.getTotal());
		System.out.println(stat.getAverage());
	}
}
```
