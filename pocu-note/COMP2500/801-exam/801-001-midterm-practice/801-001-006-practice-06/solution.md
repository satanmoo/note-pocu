# 연습 문제 (6) 답지

각 문제의 풀이. `전)`/`후)`는 코드 수정 형식.

## 1

### 1-a)
- **a) 런타임 오류** (NullPointerException)
  - 참조형 멤버 변수 `label`은 초기화하지 않으면 기본값이 **null**
  - `getLabelLength()`에서 `this.label.length()`로 null을 역참조 → NullPointerException
- **b)** `label`을 유효한 값으로 초기화 (선언 시 또는 생성자에서)
  ```
  전) private String label;
  후) private String label = "";
  ```
  - (고친 경우 출력) `0` ( `""`의 길이 )

### 1-b)
- **a) 문제 없음**
- **c) 출력** `10.0`
  - `int` → `long` → `double`은 작은 자료형에서 큰 자료형으로의 **자동(암시적) 형변환**이라 캐스팅이 필요 없음
  - `d`는 `double` 10.0 → 출력은 `10.0`

### 1-c)
- **a) 컴파일 오류**
  - `x`가 `final` 매개변수라 메서드 안에서 다시 대입할 수 없음
- **b)**
  ```
  전) x = x + 1;
      return x;
  후) return x + 1;
  ```
- **c) (고친 경우 출력)** `6`
  - 5 + 1 = 6

## 2
- **출력** `20`
  - `Stopwatch(10)` → `super(10)` → `seconds`=10
  - `tick()`은 `super.seconds += 5` → 상속받은(부모의) `seconds`를 5 증가
  - 두 번 호출 → 10 → 15 → 20
  - `seconds`는 `protected`라 자식에서 `super.seconds`로 접근 가능

## 3
- **클래스(class)**: 개체를 만들 때 쓰는 **명세서(설계도)**. 어떤 속성(상태)과 동작을 가질지 정의함. 개체는 반드시 클래스로부터 만들어짐
- **개체(object, 인스턴스)**: 클래스라는 명세서로부터 실제로 **만들어진 실체**. 메모리에 올라가며 각자 자신의 상태값을 가짐
- 비유: 클래스는 붕어빵 **틀**(또는 설계도/레시피), 개체는 그 틀로 찍어낸 **붕어빵** 하나하나. 틀 하나로 여러 개체를 만들 수 있음
- 클래스로부터 개체를 만드는 행위를 **인스턴스화(instantiation)** 라고 함

## 4
- **메모리 구조**
  - **상속**: 자식 개체를 만들면 부모 부분까지 **하나의 연속된 메모리 덩어리**로 생성됨
  - **컴포지션**: 부품(멤버) 개체를 각각 `new` 하므로 메모리 덩어리가 **여러 개로 흩어져** 있음
- **성능 영향**
  - CPU 캐시는 메모리를 **캐시 라인(연속된 블록)** 단위로 읽음. 상속 개체는 연속된 한 덩어리라 한 번에 캐시에 올라갈 확률이 높아 유리
  - 컴포지션 개체는 부품들이 흩어져 있어 캐시에 올릴 때 메모리(버스)에 여러 번 접근해야 할 수 있어 불리
  - 또한 컴포지션은 `new`/해제 횟수가 많아 메모리 할당·해제 비용도 더 큼
- **결론**: 확장성(유연성)은 컴포지션이 좋지만, **성능은 상속이 유리**

## 5

### 5-a)
- **a) 문제 없음**
- **c) 출력** `3`
  - `Grade.B`의 `point`는 3 → `getPoint()` = 3

### ==5-b)==
- **a) 컴파일 오류**
  - `enum`은 `new`로 인스턴스를 만들 수 없음 (정해진 상수만 존재, 생성자는 암시적으로 private)
- **b)** 미리 정의된 상수를 사용
  ```
  전) Grade g = new Grade(5);
  후) Grade g = Grade.A;
  ```
  - (고친 경우 출력) `4`

### 5-c)
- **a) 문제 없음**
- **c) 출력** `excellent`
  - `g`가 `Grade.A` → `case A`가 실행되고 `break`로 종료
  - (참고: enum을 switch의 case에 쓸 때는 `Grade.A`가 아니라 `A`처럼 상수 이름만 적음)

## 6
- **출력** `3`
  - `w1`, `w2`가 **같은 `Counter` 개체**(`shared`)의 참조를 받아 보관함 (참조 공유)
  - `value` 기본값 0 → `w1.work()`(1), `w2.work()`(2), `w2.work()`(3)
  - 셋 다 같은 개체를 증가시키므로 `shared.getValue()` = 3

## ==7==
- **출력**
  ```
  person
  student
  ```
  - `new Person()`처럼 부모 클래스도 **독립적으로 인스턴스화** 가능 → role="person"
  - `new Student()`는 먼저 암시적 `super()`(Person 생성자, role="person")가 실행된 뒤 자식 생성자가 role="student"로 덮어씀
  - `role`은 `protected`라 자식 생성자에서 접근·수정 가능

## 8
예시 답안

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

	public void eat() {
		System.out.println(this.name + " is eating");
	}
}

// Dog.java
package academy.pocu.comp2500;

public class Dog extends Animal {
	public Dog(String name) {
		super(name);
	}

	public void bark() {
		System.out.println("Bark!");
	}
}

// Cat.java
package academy.pocu.comp2500;

public class Cat extends Animal {
	public Cat(String name) {
		super(name);
	}

	public void meow() {
		System.out.println("Meow!");
	}
}
```

- 포인트
  - 두 클래스에 중복되던 `name`, `getName()`, `eat()`을 부모 `Animal`로 올림
  - 자식은 `super(name)`으로 부모 생성자를 호출해 이름을 초기화
  - 자식 고유 동작(`bark()`, `meow()`)만 각자 남김
  - `name`은 `protected`로 두면 부모의 `eat()`에서 사용 가능 (private로 두고 `getName()`을 쓰는 것도 가능)

## 9
private 메서드의 용도 (예시)
- private 메서드는 **같은 클래스 안에서만** 호출할 수 있음
- 여러 public 메서드에 **중복되는 내부 로직**을 private 메서드로 분리해 중복을 없애고 재사용함
- 외부에 노출할 필요 없는 **내부 구현 세부사항을 숨김**(캡슐화) → 클래스의 공개 인터페이스를 깔끔하게 유지

## 10
- **모든 클래스는 `Object` 클래스를 상속**함 (컴파일러가 `extends Object`를 암시적으로 붙임). 그래서 모든 개체는 `getClass()`, `toString()`, `equals()` 같은 `Object`의 메서드를 가짐
- **RTTI(run time type identification)**: 실행 중에 개체의 **실제 타입 정보**를 알아내는 기능. `getClass()`가 대표적이며, `getClass().getName()`은 패키지를 포함한 클래스 이름을 돌려줘 로그 등에 자주 활용됨
- **단점**: 실행 중에 타입 정보를 알아내는 추가 비용이 들어, **성능이나 메모리가 중요한 경우에는 부적합**함 (C/C++ 등에서는 RTTI를 지원하지 않거나 잘 쓰지 않음)

## 11
- **출력**
  ```
  60
  20
  ```
  - 중복되던 합 계산을 `private` 메서드 `sum()`으로 분리해 `getTotal()`과 `getAverage()`가 함께 사용
  - sum = 10 + 20 + 30 = 60 → `getTotal()` = 60
  - `getAverage()` = 60 / 3 = 20
