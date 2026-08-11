---
title: Object.clone()과 복사 생성자 (010-012~013)
---
# Object.clone()과 복사 생성자 (010-012~013)

> 서술 개념(clone 사용 규칙·복사 생성자 정의)은 ANKI 참고: [22-Object.clone() 사용 규칙](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/22-object-clone-rules/), [23-복사 생성자](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/23-copy-constructor/)

## 다음 코드의 출력은? (참조 대입은 복사가 아님)

```java
public class Robot {
	public int hp = 100;
}

// main
Robot robot = new Robot();
Robot savePoint = robot;
robot.hp -= 30;
System.out.println(savePoint.hp);
```

`70`

- `savePoint` 변수는 `robot` 변수와 ==동일한 참조==를 가짐 — 개체가 복사된 게 아님 (의도한 세이브 포인트가 안 됨)
- 각각 따로 두려면 개체 복사가 필요 → `Object` 클래스의 `clone()` 메서드 또는 복사 생성자

## 다음 코드의 결과는? (`Cloneable` 미구현 clone)

```java
public class Robot {
	public int hp = 100;

	@Override
	public Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
}

// main (throws CloneNotSupportedException 선언됨)
Robot robot = new Robot();
Robot copy = (Robot) robot.clone();
System.out.println(copy.hp);
```

a) 컴파일 오류? **아니오**
b) 런타임 오류? **예** — `CloneNotSupportedException`
c) 출력: 없음

- `Object` 클래스의 `clone()` 메서드를 오버라이딩만 하고 ==`Cloneable` 인터페이스를 구현하지 않으면== `super.clone()` 호출 시 `CloneNotSupportedException` 예외 발생 — Java가 `Cloneable` 구현을 강제하는 방식
	- 이 강제는 ==런타임 검사== — `Cloneable`은 추상 메서드가 없는 빈 마커 인터페이스라 컴파일러가 미구현을 잡을 수 없고, `Object`의 `clone()` 구현이 실행 중 검사해서 던짐 (그래서 a는 아니오, b는 예)
- `CloneNotSupportedException`은 ==checked 예외== — 처리(try-catch) 또는 선언(`throws`) 의무가 ==호출 사슬을 따라 단계마다== 적용됨. 어느 하나라도 빠지면 그 지점이 컴파일 오류 — [[pocu-note/COMP2500/013-exception/013-008-java-checked-exception/index|Java의 checked 예외]] 참고
	- `Object`의 `clone()` 시그니처가 `throws CloneNotSupportedException` → `super.clone()`을 호출하는 `Robot`의 `clone()`은 처리하거나 선언해야 함 (이 코드는 `throws` 선언 선택)
	- 그 결과 `Robot`의 `clone()` 시그니처에도 `throws`가 붙음 → `robot.clone()`을 호출하는 main에게 같은 의무 발생 (주석의 "main에 `throws` 선언됨"이 이 전제)
	- 만약 `Robot`의 `clone()`이 선언 대신 내부에서 try-catch로 처리했다면 의무는 거기서 끊겨 main에는 아무것도 필요 없음
- 고치는 법: `public class Robot implements Cloneable`
- `clone()` 메서드의 반환형은 `Object` → 사용하는 쪽에서 `(Robot)` 캐스팅 필요

## 다음 코드의 출력은? (`super.clone()`의 얕은 복사)

```java
public class Engine {
	public int power = 50;
}

public class Robot implements Cloneable {
	public int hp = 100;
	public Engine engine = new Engine();

	@Override
	public Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
}

// main (throws CloneNotSupportedException 선언됨)
Robot robot = new Robot();
Robot copy = (Robot) robot.clone();

robot.hp -= 30;
robot.engine.power -= 20;

System.out.println(copy.hp + " " + copy.engine.power);
```

`100 30`

- `Object` 클래스의 `clone()` 메서드 기본 동작: ==새 메모리를 할당하고 모든 멤버 변수를 대입==해서 반환
	- 기본형 `hp` 변수: 값이 복사됨 → `copy.hp`는 100 유지
	- 참조형 `engine` 변수: ==참조가 그대로 대입==(얕은 복사) → `robot`과 `copy`가 같은 `Engine` 개체를 공유 → 30
- 깊은 복사를 원하면 직접 작성: 참조형 멤버(`Engine`)도 `Cloneable`을 구현해 `clone()` 메서드를 오버라이딩하고, 복사된 개체의 멤버 변수에 그 `clone()` 결과를 직접 대입

## `Line` 클래스의 깊은 복사 복사 생성자를 작성하라 (코드 작성 — 공식 안내 예시 유형)

```java
public class Point {
	private int x;
	private int y;

	public Point(int x, int y) {
		this.x = x;
		this.y = y;
	}

	// 복사 생성자는 이미 작성되어 있음
	public Point(Point other) {
		this.x = other.x;
		this.y = other.y;
	}
}

public class Line {
	private Point p1;
	private Point p2;

	public Line(Point p1, Point p2) {
		this.p1 = p1;
		this.p2 = p2;
	}

	// 여기에 복사 생성자를 작성
}
```

```java
public Line(Line other) {
	this.p1 = new Point(other.p1);
	this.p2 = new Point(other.p2);
}
```

- 복사 생성자: ==같은 타입의 개체를 매개변수==로 받는 생성자 — `Object.clone()` 메서드보다 더 좋은 방법 (C++에서 가져옴)
- 깊은 복사의 핵심: 참조형 멤버 변수는 그 멤버의 ==복사 생성자를 내부에서 호출==해서 새 개체를 만들어 대입
- 오답 주의: `this.p1 = other.p1;`처럼 바로 대입하면 참조 복사 → 얕은 복사가 됨
- 참고: `Point` 클래스의 복사 생성자 안에서 `other.x`처럼 다른 개체의 `private` 멤버에 접근 가능 — 접근 제어자는 개체 단위가 아니라 ==클래스 단위==

## 다음 각 명제의 O/X는?

1. `clone()` 메서드를 오버라이딩할 때 `super.clone()`을 호출하지 않으면 컴파일 오류가 발생한다
2. `super.clone()`은 참조형 멤버 변수의 개체까지 복사해준다
3. 복사 생성자를 쓰려면 `Cloneable` 인터페이스를 구현해야 한다

1. **X** — 컴파일러가 강제하지 않음. 호출 없이 직접 개체를 만들어 반환해도 컴파일·실행됨
	- 강의의 "반드시 `super.clone()`을 호출해야 됨"은 ==규약== — 새 메모리 할당·모든 멤버 대입이라는 복사 기본 동작은 `Object`의 `clone()` 메서드가 해주므로 그 통로를 거치라는 것
	- (범위 밖 보충) 규약을 어기고 `new`로 만들면 자식 클래스가 그 `clone()`을 물려받았을 때 실제 개체 타입과 다른 타입을 반환하는 문제 — `super.clone()`은 실행 중 실제 클래스 기준으로 복사

```java
public class Robot implements Cloneable {
	public int hp = 100;

	@Override
	public Object clone() {	// super.clone() 대신 new 사용 — 컴파일 정상, throws도 필요 없어짐
		Robot copy = new Robot();
		copy.hp = this.hp;
		return copy;
	}
}

public class BattleRobot extends Robot {
	public int attack = 30;
	// clone()을 오버라이딩하지 않고 그대로 물려받음
}

// main
BattleRobot robot = new BattleRobot();
BattleRobot copy = (BattleRobot) robot.clone();	// 런타임 오류 — ClassCastException
```

- 물려받은 `clone()` 메서드는 실체가 `BattleRobot`이어도 언제나 `Robot` 개체를 만듦 → `attack` 변수는 복사될 곳조차 없고, `BattleRobot`으로 캐스팅하는 순간 `ClassCastException`
- `super.clone()`을 호출했다면 실행 중 ==실제 클래스(`BattleRobot`) 기준==으로 새 개체를 만들고 `attack` 변수까지 대입해줌 — 자식이 `clone()`을 오버라이딩하지 않아도 안전
- 함정: `new` 방식은 `CloneNotSupportedException`을 던질 일이 없어 `throws` 선언도 필요 없음 — 문법적으로는 오히려 편해 보여서 규약 위반을 알아채기 어려움
2. **X** — 참조형 멤버는 ==참조만 대입==(얕은 복사). 개체까지 복사(깊은 복사)하려면 직접 작성
3. **X** — 복사 생성자는 그냥 생성자라서 `Cloneable`·`super.clone()`·캐스팅이 전혀 필요 없음 — 이것이 clone()보다 좋은 이유
