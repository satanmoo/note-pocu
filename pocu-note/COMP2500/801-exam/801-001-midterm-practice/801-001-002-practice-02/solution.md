# 연습 문제 (2) 답지

각 문제의 풀이. `전)`/`후)`는 코드 수정 형식.

## 1

### 1-a)
- **a) 컴파일 오류**
  - `radius`가 `final`이라 생성자 외부(`setRadius`)에서 재할당 불가
- **b)** `final` 제거 (또는 `setRadius` 삭제)
  ```
  전) private final int radius;
  후) private int radius;
  ```
- **c) (final 제거한 경우 출력)** `10`
  - 5 → setRadius(10) → 10

### 1-b)
- **a) 문제 없음**
- **c) 출력**
  ```
  false
  true
  ```
  - `s1`은 문자열 리터럴(상수 풀), `s2`는 `new String`으로 만든 새 개체 → `==`(참조 비교)는 `false`
  - `equals`는 내용 비교 → `true`

### 1-c)
- **a) 문제 없음**
  - 명시적 생성자가 없으면 컴파일러가 기본 생성자를 제공
- **c) 출력**
  ```
  0
  false
  null
  ```
  - 멤버 변수 기본값: `int` → 0, `boolean` → false, 참조형(`String`) → null

## 2
- **출력**
  ```
  10
  11
  ```
  - `x`는 기본형 → 값 복사로 전달, `magic` 안의 `x += 5`는 호출부에 영향 없음 → 10
  - `counter.increase()`는 원본 개체를 11로 만듦
  - 그 뒤 `counter = new Counter(100)`은 지역 매개변수만 새 개체로 바꿈 → 이후 `increase()`(101)는 호출부와 무관
  - 호출부 `counter`는 11

## 3
상속 vs 컴포지션 선택 시 4가지 기준
- **관계 (is-a / has-a)**: "~의 한 종류"면 상속(is-a), "~를 가지고 있다"면 컴포지션(has-a)
- **메모리**: 상속은 메모리 덩어리 개수가 컴포지션에 비해서 적음. 캐시에 한 번에 올라갈 가능성이 높음. 메모리 할당/해제도 상속이 적음
- **다형성**: 다형성이 필요하면 상속(또는 인터페이스)
- **유지보수**: 부모가 자주 바뀌거나 상속 계층이 깊어지면 컴포지션이 유리

## 4
- **a)** 다중 상속을 허용하면 여러 부모에 같은 이름의 멤버/메서드가 있을 때 어느 것을 써야 하는지 모호해짐(다이아몬드 문제). 계층이 복잡해지고 유지보수가 어려워짐
- **b)** **인터페이스(interface)**
  - 클래스는 하나만 상속(`extends`)할 수 있지만 인터페이스는 여러 개 구현(`implements`) 가능 → 여러 타입을 동시에 가질 수 있음

## 5

### 5-a)
- **a) 컴파일 오류**
  - 정적 타입이 `Animal`인데 `Animal`에는 `fly()`가 없음
- **b)**
  ```
  전) Animal a = new Penguin("Pingu");
  후) Bird a = new Penguin("Pingu");
  ```
  - 또는 `((Bird) a).fly();`
- **c) (고친 경우 출력)** `Pingu is flying`

### 5-b)
- **a) 문제 없음**
- **c) 출력** `bird`
  - 실제 개체는 `Bird` → `a instanceof Penguin`은 false(부모는 자식이 아님), `a instanceof Bird`는 true

### 5-c)
- **a) 런타임 오류** (ClassCastException)
  - 컴파일은 통과(`Animal` → `Penguin` 다운캐스트 허용)하나, 실제 개체가 `Bird`라 `Penguin`으로 캐스팅 시 예외
- **b)** 실제 개체를 `Penguin`으로 만들거나, `swim()`이 필요 없으면 캐스팅하지 않음
  ```
  전) Animal a = new Bird("Coco");
  후) Animal a = new Penguin("Coco");
  ```
  - (고친 경우 출력) `Coco is swimming`

## 6
- **출력**
  ```
  Base ctor: 1
  Derived ctor: value=2, x=10
  ```
  - `new Derived()` → `Derived()`는 먼저 암시적 `super()` 호출
  - `Base`: 필드 초기화 `value=1` → 생성자 본문 출력 `Base ctor: 1` → `value=2`
  - 다시 `Derived`: 필드 초기화 `x=10` → 생성자 본문 출력 (이때 value는 이미 2)
  - 즉, 부모 → 자식 순서로 생성자 본문 실행

## 7
- **출력**
  ```
  1
  3
  3
  ```
  - `playerCount`는 static → 모든 인스턴스가 공유
  - p1 생성 → count 1, id 1 / p2 → count 2 / p3 → count 3, id 3
  - p1.id=1, p3.id=3, 총 개수=3

## 8
예시 답안

```java
// Shape.java
package academy.pocu.comp2500;

public class Shape {
	private String name;
	private double area;

	public Shape(String name, double area) {
		this.name = name;
		this.area = area;
	}

	public String getName() {
		return this.name;
	}

	public double getArea() {
		return this.area;
	}
}

// Circle.java
package academy.pocu.comp2500;

public class Circle extends Shape {
	public Circle(String name, int radius) {
		super(name, Math.PI * radius * radius);
	}
}

// Rectangle.java
package academy.pocu.comp2500;

public class Rectangle extends Shape {
	public Rectangle(String name, int width, int height) {
		super(name, width * height);
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Circle circle = new Circle("circle1", 5);
		Rectangle rect = new Rectangle("rect1", 3, 4);

		System.out.println(circle.getName() + ": " + circle.getArea());
		System.out.println(rect.getName() + ": " + rect.getArea());
	}
}
```

- 포인트
  - 넓이를 `area` 멤버 변수에 저장하고, 자식 생성자에서 계산한 값을 `super(name, area)`로 전달
  - `getArea()`는 부모(`Shape`)에만 두고 자식에서 재정의(오버라이딩)하지 않음
  - 멤버 변수는 `private`으로 두어 캡슐화 유지

## 9
- **출력** `150`
  - 내포(inner) 클래스 `Coin`은 바깥 클래스 `Wallet`의 private 멤버 `money`에 접근 가능
  - `wallet.new Coin(50)`로 바깥 인스턴스에 묶인 내부 개체 생성
  - `coin.insert()` → `money += 50` → 100 + 50 = 150

## 10
- **싱글턴**: 클래스의 인스턴스가 프로그램 전체에서 단 하나만 존재하도록 보장하는 패턴
  - 보통 private 생성자 + static `getInstance()`로 구현
- **static 클래스 대비 장점 (예시)**
  - 개체이므로 인터페이스 구현/상속을 통해 **다형성** 사용 가능 (테스트용 대체 구현 주입 등이 쉬움)
  - 실제로 처음 필요할 때 생성하는 **지연 초기화(lazy initialization)** 가능
  - 개체를 인자로 넘기는 등 일반 개체처럼 다룰 수 있음

## 11
- **출력**
  ```
  false
  true
  ```
  - `Money`가 `equals`를 재정의하지 않음 → `Object`의 `equals`가 사용되며, 이는 **참조 비교**
  - `m1.equals(m2)`: 서로 다른 개체 → false
  - `m1.equals(m3)`: `m3 = m1`로 같은 개체 → true
