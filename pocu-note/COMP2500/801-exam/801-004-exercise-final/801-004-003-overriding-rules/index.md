# 대입 규칙과 오버라이딩 함정 (008-005~006)

## 다음 각 대입문은 컴파일 되나?

```java
public class Animal {
	public void shout() {
		System.out.println("...");
	}
}

public class Dog extends Animal {
	@Override
	public void shout() {
		System.out.println("Woof");
	}

	public void fetch() {
		System.out.println("fetch!");
	}
}

public class Cat extends Animal {
}
```

```java
Animal a = new Dog();   // 1)
Dog d = new Animal();   // 2)
Dog d2 = new Cat();     // 3)
```

1. 됨 — 자식 → 부모 대입은 암시적으로 허용 (is-a, 다형성의 선수 조건)
2. 컴파일 오류 — 부모 개체를 자식형 변수에 대입 불가 (실행 중 호환 가능성 0%인 방향의 암시적 대입은 차단)
3. 컴파일 오류 — `Dog`와 `Cat`은 형제 관계, 상속 관계가 아님

## 다음 코드의 결과는? (부모에 시그니처가 없는 메서드)

```java
Animal a = new Dog();
a.fetch();
```

컴파일 오류

- 무늬(`Animal`)가 ==호출 가능한 메서드의 집합==을 결정함 — `Animal`에 `fetch()` 시그니처가 없음
- 실체가 `Dog`인 것은 실행 중 이야기, 컴파일러는 무늬만 봄
- 부모형 변수로 호출하려면 부모 클래스에 시그니처가 명시되어 있어야 함 (다형성이 성립하는 전제)
- 해결: `((Dog) a).fetch()` 다운캐스트 또는 변수를 `Dog`형으로 선언

## 다음 코드의 출력은? (오버로딩 vs 오버라이딩 — 공식 연습 2-a 유형)

```java
public class Parent {
	public void print(int x) {
		System.out.println("Parent " + x);
	}
}

public class Child extends Parent {
	public void print(double x) {
		System.out.println("Child " + x);
	}
}

public class GrandChild extends Child {
	@Override
	public void print(int x) {
		System.out.println("GrandChild " + x);
	}
}
```

```java
Parent a = new Child();
Parent b = new GrandChild();
Child c = new Child();

a.print(1);
b.print(2);
c.print(3);
c.print(3.0);
```

```
Parent 1
GrandChild 2
Parent 3
Child 3.0
```

- `Child`의 `print(double)`은 시그니처가 달라 오버라이딩이 아니라 ==오버로딩== — 별개의 메서드가 하나 더 생긴 것
- `a.print(1)`: 무늬 `Parent`에서 `print(int)` 선택 → 실체 `Child`는 `print(int)`를 오버라이딩하지 않았으므로 부모 구현 (오버라이딩은 선택사항 — 안 하면 부모 것)
- `b.print(2)`: 실체 `GrandChild`가 `print(int)`를 오버라이딩 → 자식 구현
- `c.print(3)`: `int` 인자는 `print(int)`에 정확히 매치 → 부모 구현
- `c.print(3.0)`: `double` 인자는 `print(double)` 매치 → `Child`의 오버로드
- 함정 예방책: 오버라이딩 의도라면 `@Override`를 붙일 것 — 시그니처가 어긋나면 컴파일 오류로 잡아줌

## 다음 코드의 결과는? (무늬와 오버로드 해석)

```java
Parent p = new Child();
p.print(3.0);
```

컴파일 오류

- 오버로드 선택도 ==무늬 기준== — `Parent`에는 `print(int)`뿐이고 `double`은 `int`로 암시 변환되지 않음
- 실체 `Child`에 `print(double)`이 있어도 소용없음 — 컴파일러는 무늬만 봄

## `super.shout()` 호출 규칙 — 생성자의 `super()`와 어떻게 다른가?

오버라이딩한 메서드 안의 `super.shout()`는 **아무 위치에나** 올 수 있고, 아예 호출하지 않아도 됨

```java
public class Dog extends Animal {
	@Override
	public void shout() {
		System.out.println("Woof");
		super.shout();   // 첫 줄 아니어도 됨, 생략도 됨
	}
}
```

- 생성자의 `super()`는 ==첫 줄 강제== — 부모 부분을 먼저 초기화해야 하기 때문
- 일반 메서드는 그런 제약이 없음 — 부모 동작을 앞에 붙일지, 뒤에 붙일지, 안 쓸지 자유
