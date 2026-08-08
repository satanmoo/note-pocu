---
title: 연습 문제
---
# 연습 문제

20-25분 분량

## 시험 안내

문제 유형 (총 3가지)
- 코드 읽기 (이 문제 유형을 보여주기 위해 아래 연습 문제 제공)
- 코드 작성하기 (예: Animal 상속하여 Dog 클래스를 작성하시오. ~~한 간단한 시스템을 설계 및 구현하세요(클래스 3~4개 정도 규모))
- 어떤 개념에 대한 설명하기 (예: OOP의 장점은 무엇인가?)

중간고사에 대비해서 공부해야 할 주제들 (1주 ~ 6주에서 배운 내용 전부)
1. Java 언어의 기본 문법
2. 개체지향 프로그래밍(OOP)의 필요성
3. OOP의 4대 특성 소개
4. 클래스와 개체
5. 참조형과 포인터
6. 생성자
7. 접근 제어자(access modifier)
8. getter/setter 메서드
9. 캡슐화
10. 데이터 추상화
11. 클래스 다이어그램
12. 유연성과 재사용성
13. 정적(static) 멤버 변수 및 메서드
14. 싱글턴
15. 내포(nested) 클래스
16. 상속
17. 개체의 명시적/암시적 캐스팅
18. RTTI(run time type identification) 기능
19. Object 클래스
20. 다중 상속

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
// Bar.java
package academy.pocu.comp2500;

public class Bar {
	private int x;

	public Bar(int x) {
		this.x = x;
	}

	public int getX() {
		return this.x;
	}

	public void setX(int x) {
		this.x = x;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Bar bar = new Bar(34);
		bar.x -= 10;

		bar.setX(20);
		System.out.println(bar.getX());
	}
}
```

### 1-b)

```java
// Point.java
package academy.pocu.comp2500;

public class Point {
	private int x;
	private int y;

	public Point(int x, int y) {
		this.x = x;
		this.y = y;
	}

	public int getX() {
		return this.x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return this.y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public void add(Point other) {
		this.y += other.y;
		this.x += other.x;
	}

	public void addTo(Point other) {
		other.y += this.y;
		other.x += this.x;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Point p1 = new Point(5, 10);
		Point p2 = new Point(-1, -1);
		Point p3 = new Point(10, 0);

		p1.addTo(p2);
		p2.add(p3);
		p3.addTo(p1);

		System.out.println(p1.getX());
		System.out.println(p1.getY());
	}
}
```

### 1-c)

```java
// Foo.java
package academy.pocu.comp2500;

public class Foo {
	protected String s1;
	protected String s2;

	public Foo(String s1, String s2) {
		this.s1 = s1;
		this.s2 = s2;
	}

	public String getS1() {
		return this.s1;
	}

	public String getS2() {
		return this.s2;
	}
}

// Bar.java
package academy.pocu.comp2500;

public class Bar extends Foo {
	private int x;

	private Bar(int x) {
		this("POCU", "Academy", x);
	}

	public Bar(String s1, String s2, int x) {
		super(s1, s2);
		this.x = x;
	}

	public int getX() {
		return this.x;
	}

	public void setX(int x) {
		this.x = x;
	}

	private void blackMagic(String s) {
		this.s1 = s;
	}
}

// Baz.java
package academy.pocu.comp2500;

public class Baz extends Bar {

	public Baz(int x) {
		super(x);
	}

	public String magic() {
		blackMagic("Rock");
		return this.s1 + " " + this.s2;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Baz baz = new Baz(10);
		System.out.println(baz.magic());
	}
}
```

## 2

아래의 코드를 읽고 질문에 답하세요.

```java
// Foo.java
package academy.pocu.comp2500;

public class Foo {
	private int value = 10;

	public Foo(int value) {

	}

	public int getValue() {
		return this.value;
	}

	public void darkMagic() {
		this.value += 20;
	}
}

// Bar.java
package academy.pocu.comp2500;

public class Bar {
	private int a = 20;

	public void lightMagic(Foo foo) {
		this.a = foo.getValue();
		foo.darkMagic();
	}

	public int getA() {
		return this.a;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Foo foo0 = new Foo(7);
		Foo foo1 = new Foo(7);

		foo0.darkMagic();
		foo1.darkMagic();

		Bar bar0 = new Bar();
		Bar bar1 = new Bar();
		Bar bar2 = new Bar();

		bar0.lightMagic(foo1);

		System.out.println(foo0.getValue());
		System.out.println(bar2.getA());
	}
}
```

코드를 실행하면 무엇이 출력되나요?

## 3

OOP의 4가지 특성을 열거하세요.

## 4

멤버 변수를 public으로 선언하는 대신 getter와 setter을 사용하는게 더 좋은 이유를 5문장 이내로 설명하시요.

## 5

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
// Person.java
package academy.pocu.comp2500;

public class Person {
	private static String myName;

	public Person(String name) {
		myName = name;
	}

	public String getMyName() {
		return myName;
	}

	public void setMyName(String name) {
		myName = name;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Person person1 = new Person("Greg");
		Person person2 = new Person("Bob");

		person1.setMyName("Jim");

		System.out.println(person1.getMyName());
		System.out.println(person2.getMyName());
	}
}
```

### 5-b)

```java
// A.java
package academy.pocu.comp2500;

public class A {
	private static int x;

	public A(int x) {
		this.x = x;
	}

	public int getX() {
		return this.x;
	}

	public static void darkMagic(int increment) {
		this.x += increment;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		A a1 = new A(3);
		A a2 = new A(6);
		A.darkMagic(4);

		System.out.println(a1.getX());
		System.out.println(a2.getX());
	}
}
```

### 5-c)

```java
// Foo.java
package academy.pocu.comp2500;

public class Foo {
	private static int count;
	private int x;

	public Foo(int x) {
		this.x = x;
		increaseCount();
	}

	public static void increaseCount() {
		++count;
	}

	public static int getCount() {
		return count;
	}

	public int getX() {
		return this.x;
	}

	public void setX(int x) {
		this.x = x;
		increaseCount();
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Foo foo = new Foo(7);

		foo.setX(8);
		int x = foo.getX();
		foo.increaseCount();

		System.out.println(foo.getCount());
	}
}
```

## 6

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Foo.java
package academy.pocu.comp2500;

public class Foo {
	public int m;
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Foo foo1 = new Foo();
		Foo foo2 = new Foo();

		foo1.m = 20;
		foo2.m = 10;

		doSomething(foo1, foo2);

		System.out.println(foo1.m);
		System.out.println(foo2.m);
	}

	private static void doSomething(Foo foo1, Foo foo2) {
		foo1.m = foo2.m;
		foo2.m = foo1.m;
	}
}
```

## 7

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Bar.java
package academy.pocu.comp2500;

public class Bar {
	private int x;

	public Bar() {
		this.x = 5;
	}

	public Bar(int x) {
		this.x = x;
	}

	public static Bar getInstance() {
		return new Bar();
	}

	public void doSomething() {
		this.x += 5;
	}

	public int getX() {
		return this.x;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Bar bar1 = Bar.getInstance();
		Bar bar2 = Bar.getInstance();
		bar2.doSomething();

		System.out.println(bar1.getX());
	}
}
```

## 8

다음과 같은 클래스가 있습니다.

```java
// Animal.java
package academy.pocu.comp2500;

public class Animal {
	protected String name;

	public Animal(String name) {
		this.name = name;
	}

	public void sayName() {
		System.out.println("Animal " + this.name);
	}
}

// Cat.java
package academy.pocu.comp2500;

public class Cat extends Animal {
	public Cat(String name) {
		super(name);
	}

	public void sayCatName() {
		System.out.println("Cat " + this.name);
	}

	public void introduce() {
		System.out.println("Hi! I'm a cat!");
	}
}

// Dog.java
package academy.pocu.comp2500;

public class Dog extends Animal {
	public Dog(String name) {
		super(name);
	}

	public void sayDogName() {
		System.out.println("Dog " + this.name);
	}

	public void introduce() {
		System.out.println("Hi! I'm a dog!");
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

### 8-a)

```java
Dog dog0 = new Dog("Kevin");
dog0.sayName();
dog0.introduce();
```

### 8-b)

```java
Animal cat0 = new Cat("Honey");
cat0.sayName();
cat0.introduce();
```

### 8-c)

```java
Cat cat1 = new Cat("Chocolate");
Animal animal0 = cat1;
Dog dog1 = (Dog) animal0;
dog1.introduce();
```

### 8-d)

```java
Animal animal = new Dog("Rocky");
Cat cat = (Cat) animal;
cat.sayCatName();
```

## 9

다음 프로그램의 출력 결과는 무엇인가요?

```java
// Vector.java
package academy.pocu.comp2500;

public class Vector {
	private int x;
	private int y;

	public Vector(int x, int y) {
		this.x = x;
		this.y = y;
	}

	public int getX() {
		return this.x;
	}

	public int getY() {
		return this.y;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Vector vector0 = new Vector(1, 2);
		Vector vector1 = new Vector(1, 2);

		magic(vector0, vector1);

		boolean isEqual = vector0 == vector1;
		System.out.println(isEqual);
	}

	private static void magic(Vector vector0, Vector vector1) {
		vector0 = new Vector(4, 5);
		vector1 = vector0;
	}
}
```

## 10

a) 이 코드에 오류가 있나요? 경우에 따라 아래처럼 답안지에 써주세요
- 컴파일 오류가 있다면: '컴파일 오류'
- 실행 중 오류가 있다면: '런타임 오류'
- 아무 문제 없다면: '문제 없음'

b) a)에서 오류가 있었다고 답했으면 그 문제를 어떻게 고칠지 설명하세요. 설명은 문장으로 하셔도 되고 코드를 직접 수정하셔도 됩니다. 코드를 직접 수정하실 경우 아래 형식을 따라주세요.

예:
전) a = p;
후) a = p + 11;

c) a)에서 '문제 없음'이라고 답했으면 코드 실행 후 출력되는 결과를 적으세요.

```java
// Shape.java
package academy.pocu.comp2500;

public class Shape {
	private String name;

	public Shape(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}
}

// Point.java
package academy.pocu.comp2500;

public class Point {
	private int x;
	private int y;

	public Point(int x, int y) {
		this.x = x;
		this.y = y;
	}

	public int getX() {
		return this.x;
	}

	public int getY() {
		return this.y;
	}
}

// Rectangle.java
package academy.pocu.comp2500;

public class Rectangle extends Shape {
	private Point p1;
	private Point p2;

	public Rectangle(String name, Point p1, Point p2) {
		this.p1 = p1;
		this.p2 = p2;
	}

	public Point getP1() {
		return this.p1;
	}

	public void setP1(Point p1) {
		this.p1 = p1;
	}

	public Point getP2() {
		return this.p2;
	}

	public void setP2(Point p2) {
		this.p2 = p2;
	}

	public int getArea() {
		return Math.abs(this.p1.x - this.p2.x) * Math.abs(this.p1.y - this.p2.y);
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Point p1 = new Point(1, 5);
		Point p2 = new Point(-2, 1);
		Shape shape = new Rectangle("rect1", p1, p2);

		System.out.println(((Rectangle) shape).getArea());
	}
}
```

## 11

다음 프로그램의 출력 결과는 무엇인가요?

```java
// Foo.java
package academy.pocu.comp2500;

public class Foo extends Qux {
	public Foo() {
		super();
		System.out.println("Foo");
	}
}

// Bar.java
package academy.pocu.comp2500;

public class Bar extends Baz {
	public Bar() {
		super();
		System.out.println("Bar");
	}
}

// Baz.java
package academy.pocu.comp2500;

public class Baz extends Foo {
	public Baz() {
		super();
		System.out.println("Baz");
	}
}

// Qux.java
package academy.pocu.comp2500;

public class Qux {
	public Qux() {
		System.out.println("Qux");
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Qux qux = new Bar();
	}
}
```

## 12

a) 이 코드에 오류가 있나요? 경우에 따라 아래처럼 답안지에 써주세요
- 컴파일 오류가 있다면: '컴파일 오류'
- 실행 중 오류가 있다면: '런타임 오류'
- 아무 문제 없다면: '문제 없음'

b) a)에서 오류가 있었다고 답했으면 그 문제를 어떻게 고칠지 설명하세요. 설명은 문장으로 하셔도 되고 코드를 직접 수정하셔도 됩니다. 코드를 직접 수정하실 경우 아래 형식을 따라주세요.

예:
전) a = p;
후) a = p + 11;

c) a)에서 '문제 없음'이라고 답했으면 코드 실행 후 출력되는 결과를 적으세요.

```java
// A.java
package academy.pocu.comp2500;

public class A {
	private int z;

	public A(int z) {
		this.z = z;
	}

	public class B {
		private int x;

		public B(int x) {
			this.x = x;
		}

		private void doMagic() {
			z++;
		}
	}

	public void doMagic(int x, int y) {
		B b = new B(x + y);
		b.x += 2;
		this.z *= b.x;
		b.doMagic();

		System.out.println(b.x);
		System.out.println(this.z);
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		A a = new A(4);
		a.doMagic(2, 1);
	}
}
```
