---
title: 연습 문제 (5)
---
# 연습 문제 (5)

25분 분량

## 시험 안내

문제 유형 (총 3가지)
- 코드 읽기 (오류 판별 / 출력 예측)
- 코드 작성하기 (예: Animal 상속하여 Dog 클래스 작성, 클래스 3~4개 규모의 간단한 시스템 설계 및 구현)
- 어떤 개념에 대한 설명하기 (예: OOP의 장점은 무엇인가?)

중간고사에 대비해서 공부해야 할 주제들 (COMP2500 폴더 000 ~ 007, 1주 ~ 7주에서 배운 내용 전부)
1. Java 언어의 기본 문법 (정수형/리터럴(8·16·2진수, L), char/bool/String, 캐스팅, 조건문/switch, 반복문)
2. 참조형과 포인터, 참조형 인자 전달
3. 개체지향 프로그래밍(OOP)의 필요성
4. OOP의 4대 특성
5. 클래스와 개체, 인스턴스와 메모리, 멤버 변수 기본값
6. 생성자, 생성자 오버로딩, this() 체이닝
7. 접근 제어자(access modifier) — public / protected / package(default) / private
8. getter/setter 메서드, setter 베스트 프랙티스 (유효성 검사)
9. 캡슐화, 데이터 추상화
10. 클래스 다이어그램, 모델링
11. 유연성과 재사용성
12. 정적(static) 멤버 변수 및 메서드, static에 대한 비판
13. 싱글턴, 정적 vs 싱글턴
14. 내포(nested) 클래스 — 정적(static) vs 비정적
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
// Dog.java
package academy.pocu.comp2500;

public class Dog {
	int happiness;

	public Dog(int happiness) {
		this.happiness = happiness;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Dog dog = new Dog(5);
		dog.happiness += 3;

		System.out.println(dog.happiness);
	}
}
```

### 1-b)

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		long big = 10000000000;
		System.out.println(big);
	}
}
```

### 1-c)

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		int a = 010;
		int b = 0x10;
		int c = 0b10;

		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
	}
}
```

## 2

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Catalog.java
package academy.pocu.comp2500;

public class Catalog {
	private static String prefix = "ID-";

	public static class Item {
		private int number;

		public Item(int number) {
			this.number = number;
		}

		public String getCode() {
			return prefix + this.number;
		}
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Catalog.Item item = new Catalog.Item(7);
		System.out.println(item.getCode());
	}
}
```

## 3

Java의 접근 제어자 4가지(public, protected, package(아무것도 안 붙임), private)의 접근 가능 범위를 각각 설명하세요. 특히 아무 접근 제어자도 붙이지 않으면 어디에서 접근할 수 있나요?

## 4

정적(static) 내포 클래스와 비정적(non-static) 내포 클래스의 차이를 설명하세요. 아래 내용을 포함하세요.
a) 각각 어떻게 개체를 생성하나요?
b) 바깥 클래스의 인스턴스 멤버 변수에 접근할 수 있나요?

## 5

다음과 같은 클래스가 있습니다.

```java
// Outer.java
package academy.pocu.comp2500;

public class Outer {
	private static int staticValue = 100;
	private int instanceValue = 10;

	public static class StaticInner {
		private int n;

		public StaticInner(int n) {
			this.n = n;
		}

		public int compute() {
			return this.n + staticValue;
		}
	}

	public class Inner {
		public int compute() {
			return instanceValue + staticValue;
		}
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
Outer.StaticInner si = new Outer.StaticInner(5);
System.out.println(si.compute());
```

### 5-b)

```java
Outer.Inner inner = new Outer.Inner();
System.out.println(inner.compute());
```

### 5-c)

`Outer`의 `StaticInner.compute()`를 아래처럼 바꾼다면 어떻게 되나요?

```java
public int compute() {
	return this.n + instanceValue;
}
```

## 6

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		int x = 2;

		switch (x) {
			case 1:
				System.out.println("one");
			case 2:
				System.out.println("two");
			case 3:
				System.out.println("three");
				break;
			case 4:
				System.out.println("four");
			default:
				System.out.println("default");
		}
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
		int sum = 0;

		for (int i = 1; i <= 5; ++i) {
			if (i == 3) {
				continue;
			}
			if (i == 5) {
				break;
			}
			sum += i;
		}

		System.out.println(sum);
	}
}
```

## 8

다음 요구사항에 맞게 **싱글턴(singleton)** 클래스를 설계 및 구현하세요. (패키지는 `academy.pocu.comp2500`)

- `GameConfig`
	- 프로그램 전체에서 인스턴스가 **단 하나만** 존재해야 함
	- 외부에서 `new`로 생성할 수 없어야 함
	- `getInstance()`로 그 하나뿐인 인스턴스에 접근
	- 난이도(`difficulty`, int)를 멤버 변수로 저장하고 getter/setter 제공
- `Program`의 `main`에서
	- `getInstance()`로 인스턴스를 가져와 난이도를 설정한 뒤, 다시 `getInstance()`로 가져와 난이도를 출력 (같은 개체임을 보이기)

## 9

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Player.java
package academy.pocu.comp2500;

public class Player {
	private int hp;

	public Player(int hp) {
		this.hp = hp;
	}

	public int getHp() {
		return this.hp;
	}

	public void setHp(int hp) {
		if (hp < 0 || hp > 100) {
			return;
		}
		this.hp = hp;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Player player = new Player(50);

		player.setHp(120);
		player.setHp(-10);
		player.setHp(80);

		System.out.println(player.getHp());
	}
}
```

## 10

멤버 변수를 개체 생성 후에 따로 대입하지 않고, 생성자에서 초기화해야 하는 이유를 설명하세요.

## 11

다음 코드를 실행하면 무엇이 출력되나요?

```java
// Lock.java
package academy.pocu.comp2500;

public class Lock {
	private boolean locked;

	public void lock() {
		this.locked = true;
	}

	public void unlock() {
		this.locked = false;
	}

	public boolean isLocked() {
		return this.locked;
	}
}

// Door.java
package academy.pocu.comp2500;

public class Door {
	private Lock lock = new Lock();

	public void close() {
		this.lock.lock();
	}

	public void open() {
		this.lock.unlock();
	}

	public boolean isLocked() {
		return this.lock.isLocked();
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Door door = new Door();
		System.out.println(door.isLocked());

		door.close();
		System.out.println(door.isLocked());

		door.open();
		System.out.println(door.isLocked());
	}
}
```
