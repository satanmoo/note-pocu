# 연습 문제 (3) 답지

각 문제의 풀이. `전)`/`후)`는 코드 수정 형식.

## 1

### 1-a)
- **a) 문제 없음**
- **c) 출력** `212`
  - `100 * 9 / 5 + 32` → 900 / 5 = 180 → 180 + 32 = 212
  - 정수 나눗셈이지만 900은 5로 나누어떨어짐

``### ==1-b)==
- **a) 컴파일 오류**
  - `this(...)` 생성자 호출은 생성자 본문의 **첫 문장**이어야 함. `this.name = name;` 뒤에 와서 오류
- **b)**
  ```
  전) public User(String name) {
          this.name = name;
          this(name, 0);
      }
  후) public User(String name) {
          this(name, 0);
      }
  ```
- **c) (고친 경우 출력)**
  ```
  Kim
  0
  ```
  - `User("Kim")` → `this("Kim", 0)` → name=Kim, age=0

### ==1-c)==
- **a) 문제 없음**
- **c) 출력**
  ```
  66
  B
  3
  3.5
  ```
  - `'A'`는 65 → `c + 1` = 66 (char가 int로 승격)
  - `(char) 66` → 'B'
  - `7 / 2`는 정수 나눗셈 → 3
  - `(double) 7 / 2` → 7.0 / 2 = 3.5 (캐스팅이 나눗셈보다 먼저)

## 2
- **출력**
  ```
  10
  20
  99
  ```
  - `swap`은 지역 매개변수 `x`, `y`만 교환 → 호출부 b1, b2엔 영향 없음 (10, 20 그대로)
  - `change`는 받은 참조로 원본 개체를 변경 → `b1.setValue(99)` → 99
  - 참조형 인자: 참조(주소)는 값으로 복사되므로 재할당은 호출부 무관, 멤버 변경은 반영됨

## 3
- **캡슐화(encapsulation)**: 함수의 black box(추상화) 개념을 클래스 단위로 확장한 것. 데이터(멤버 변수)와 그 데이터를 다루는 메서드를 하나로 묶고, 멤버 변수를 `private`으로 숨겨 외부의 직접 접근을 막음. 함수를 분리할 때의 원칙을 그대로 적용해, 클래스 안에 중복된 동작이 있으면 private 메서드로 분리
- **추상화(abstraction)**: OOP에서 추상화란 "어떤 구체적인 것에 직접 손대지 않겠다"는 의미. 이를 바라보는 관점이 두 가지 있음
  - **추상 자료형(abstract data type, ADT) 관점**
    - 사용자는 클래스를 하나의 자료형처럼 사용할 수 있음
    - 그 클래스 안에 들어 있는 멤버 변수가 정확히 뭔지 몰라도 됨
    - 그냥 클래스로부터 개체를 생성해서 사용
  - **절차적 데이터 추상화(procedural data abstraction) 관점**
    - 데이터를 직접 조작하는 대신 메서드를 호출해서 다룸
    - OOP라는 용어를 처음 주창했던 소수설의 관점과 유사 (동적인 개체, behavioral objects 진영)

## 4
- **정적(static) 멤버 변수**: 클래스당 하나만 존재하며 모든 인스턴스가 **공유**함. 인스턴스를 만들지 않아도 클래스 이름으로 접근 가능
- **인스턴스 멤버 변수**: 개체(인스턴스)마다 따로 존재하며 각자 값을 가짐
- **정적 메서드에서 `this`를 쓸 수 없는 이유**: 정적 메서드는 특정 인스턴스에 묶이지 않고 클래스에 속함. 호출 시 가리킬 "현재 개체"가 없으므로 그 개체를 의미하는 `this`를 사용할 수 없음 (따라서 인스턴스 멤버에도 직접 접근 불가)

## 5

### 5-a)
- **a) 컴파일 오류**
  - 정적 타입이 `Vehicle`인데 `Vehicle`에는 `honk()`가 없음
- **b)**
  ```
  전) Vehicle v = new Car("Sedan");
  후) Car v = new Car("Sedan");
  ```
  - 또는 `((Car) v).honk();`
- **c) (고친 경우 출력)**
  ```
  Sedan moves
  Sedan honks
  ```

### 5-b)
- **a) 문제 없음**
- **c) 출력** `car`
  - 실제 개체는 `Car` → `v instanceof Boat`는 false, `v instanceof Car`는 true

### 5-c)
- **a) 런타임 오류** (ClassCastException)
  - 컴파일은 통과(`Vehicle` → `Car` 다운캐스트 허용)하나, 실제 개체가 `Boat`라 `Car`로 캐스팅 시 예외
- **b)** 실제 타입(Boat)에 맞게 캐스팅
  ```
  전) Car c = (Car) v;
      c.honk();
  후) Boat c = (Boat) v;
      c.sail();
  ```
  - (고친 경우 출력) `Yacht sails`

### 5-d)
- **a) 문제 없음**
- **c) 출력** `Mini honks`
  - 실제 개체가 `Car`라 `Car`로의 다운캐스트가 성공

## 6
- **출력**
  ```
  1000
  1020
  1030
  ```
  - `nextId`는 static → 모든 인스턴스가 공유
  - a 생성: id=1000, nextId→1010
  - b 생성: id=1010, nextId→1020
  - c 생성: id=1020, nextId→1030
  - a.id=1000, c.id=1020, getNextId()=1030

## 7
- **출력**
  ```
  Grandparent
  Parent
  Child
  ```
  - 상속 계층: `Grandparent ← Parent ← Child`
  - `new Child()` → 암시적 `super()`가 위로 전파 → 최상위 부모 생성자부터 실행
  - 즉 생성자 본문은 부모 → 자식 순서(위에서 아래로)로 실행됨
  - `Parent p = new Child()`는 유효한 업캐스트 (문제 없음)

## 8
예시 답안

```java
// Engine.java
package academy.pocu.comp2500;

public class Engine {
	private int horsepower;

	public Engine(int horsepower) {
		this.horsepower = horsepower;
	}

	public int getHorsepower() {
		return this.horsepower;
	}
}

// Car.java
package academy.pocu.comp2500;

public class Car {
	private String name;
	private Engine engine;

	public Car(String name, int horsepower) {
		this.name = name;
		this.engine = new Engine(horsepower);
	}

	public String getName() {
		return this.name;
	}

	public int getHorsepower() {
		return this.engine.getHorsepower();
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		Car car = new Car("Sedan", 150);

		System.out.println(car.getName());
		System.out.println(car.getHorsepower());
	}
}
```

- 포인트
  - `Car`가 `Engine`을 **상속**(is-a)하지 않고 멤버로 **가짐**(has-a) → 컴포지션
  - `getHorsepower()`는 보관한 `Engine`에 위임(delegation)
  - 멤버 변수는 `private`으로 두어 캡슐화 유지
  - 출력 예: `Sedan` / `150`

## 9
- **출력** `70`
  - 내포(inner) 클래스 `Shelf`는 바깥 클래스 `Library`의 private 멤버 `bookCount`에 접근 가능
  - `library.new Shelf(20)`로 바깥 인스턴스에 묶인 내부 개체 생성
  - `store()` 두 번 → `bookCount += 20` 두 번 → 30 + 20 + 20 = 70

## 10
- **이상적인 개체 상태 수정법**
  1. 그 개체의 사용자가 어떤 **동작을 지시**함
  2. 그 동작의 결과로 개체 안에 있는 어떤 상태가 바뀜
  - 즉, 외부가 멤버 변수를 직접 대입하는 게 아니라 **개체 스스로 자신의 상태를 변경**(책임)함
  - 예: `Classroom`에서 `setScore(index, score)`를 호출하면 점수를 저장하면서 평균(`mean`)도 함께 `updateMean()`으로 갱신 → 사용자가 `mean`을 직접 건드리지 않아도 개체가 일관된 상태를 유지
- **무조건 setter를 추가하면 안 좋은 이유**
  - setter는 데이터를 직접 바꾸므로 가능하면 피하는 게 좋음
  - 중요한 점: 개체가 **불확실(불완전)한 상태**가 되는 경우를 만드는 게 최대의 악수
  - 따라서 setter는 "고민 후" 꼭 필요할 때만 추가

## 11
- **출력**
  ```
  A honks
  B sails
  C honks
  ```
  - 배열의 정적 타입은 `Vehicle`이지만 실제 개체는 각각 Car/Boat/Car
  - `instanceof`(RTTI)로 실제 타입을 확인한 뒤 알맞게 다운캐스팅하여 메서드 호출
  - vehicles[0] Car → honk, [1] Boat → sail, [2] Car → honk
