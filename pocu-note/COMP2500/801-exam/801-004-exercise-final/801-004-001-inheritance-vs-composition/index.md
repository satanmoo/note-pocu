# 상속 vs 컴포지션 종합 (007-004~008)

## 각 상황에서 상속과 컴포지션 중 무엇을 선택해야 하나? 어떤 기준을 적용했나?

a) 서로 다른 형의 개체들을 부모형 컨테이너에 담아 한 번에 같은 명령을 내려야 함
b) 공통 코드를 뽑아낼 부모 클래스가 자주 바뀔 예정이고, 계층이 깊어질 조짐이 보임
c) 실행 중 수만 번 접근하는 개체라 캐시 적중률이 성능의 관건임
d) "자동차는 엔진을 가진다"를 모델링함

정답

- a) **상속** — 다형성 용도. 다형성을 구현하기 위해서는 상속을 사용할 수밖에 없음 (상속을 쓰는 이유의 대부분)
- b) **컴포지션** — 유지보수. 깊은 상속 관계에서는 부모 변경이 많은 자식에게 전파됨, 컴포지션은 독립적으로 조립되어 영향이 좁음
- c) **상속** — 메모리. 상속 개체는 메모리 한 덩어리라 캐시 라인에 한 번에 로드될 확률이 높음
- d) **컴포지션** — 일반적인 경우. has-a 관계 ("가진다")

## 다음 코드에서 `new SportsCar();`를 하면 몇 개의 메모리 블록이 할당되나?

```java
public class Engine {
}

public class Wheel {
}

public class Car {
	private Engine engine = new Engine();
	private Wheel spare;
}

public class SportsCar extends Car {
	private Wheel wheel = new Wheel();
	private Engine turbo = new Engine();
}
```

총 4개

- `SportsCar` + `Car`는 상속이라 ==한 덩어리== 1개
- `Car` 부분의 컴포지션 `engine` 1개
- `spare`는 `null` — 할당 없음 (0개)
- `SportsCar`의 컴포지션 `wheel` 1개, `turbo` 1개

## 다음 설명 중 틀린 것은?

1. A가 B 중의 하나(is-a 관계)면 상속으로 모델링한다
2. 다형성이 필요하면 상속을 사용할 수밖에 없다
3. 상속으로 생성한 개체는 메모리 한 덩어리라 캐시 적중에 유리해 성능이 좋다
4. 깊은 상속 관계가 발생하는 상황에서는 컴포지션보다 상속이 유지보수에 유리하다

4번이 틀림

- 깊은 상속 관계에서는 부모 클래스 변경이 많은 자식 클래스에 영향을 줌 → 독립적으로 조립되는 **컴포지션**이 유지보수에 유리
- 단, 얕은 구조에서 공통 코드 중복 제거는 상속이 유리함 (유지보수 기준은 상황에 따라 갈림 — "상속이 항상 불리"도 아님)

## 아래 상속 코드를 컴포지션으로 재작성하세요 (기말 연습문제 1번과 같은 유형)

```java
public class Person {
	private String name;

	public Person(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}
}

public class Teacher extends Person {
	public Teacher(String name) {
		super(name);
	}

	public void teach() {
		System.out.println(getName() + " teaches");
	}
}
```

정답

```java
public class Teacher {
	private Person person;

	public Teacher(String name) {
		this.person = new Person(name);
	}

	public String getName() {
		return this.person.getName();
	}

	public void teach() {
		System.out.println(this.person.getName() + " teaches");
	}
}
```

- 핵심 절차: ① `extends` 제거 ② 부모를 ==멤버 변수==로 보유 ③ `super(...)` → 생성자에서 부품 개체 생성 ④ 외부에 필요한 부모 메서드는 ==연쇄(포워딩) 호출==로 다시 노출
- 컴포지션의 비용: 공통 메서드를 하나하나 포워딩해야 함 (007-007 관리의 효율성에서 본 단점)
