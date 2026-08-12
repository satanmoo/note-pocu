---
title: 결합도와 의존성 주입 (011-001~005)
---
# 결합도와 의존성 주입 (011-001~005)

> 서술 개념(의존성 vs 결합도·판정 기준·DI 정의)은 ANKI 참고: [24-의존성과 결합도는 다른 개념](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/24-dependency-vs-coupling/) 이후 카드들

## 다음 코드의 결과는? 두 클래스의 결합도 판정은? (부품 클래스의 생성자 변경)

```java
public class Head {
	private float fovAngle;

	// 원래는 매개변수 없는 기본 생성자였는데, fovAngle 변수가 추가되며 교체됨
	public Head(float fovAngle) {
		this.fovAngle = fovAngle;
	}
}

public class Robot {
	private Head head;

	public Robot() {
		this.head = new Head();
	}
}
```

컴파일 오류, tight coupling

- `Head` 클래스의 기본 생성자가 사라져서 `Robot` 클래스의 `new Head()`에서 컴파일 오류 → `Robot` 클래스의 코드를 수정해야만 함
- 결합도 판정법: ==의존 대상(`Head`)을 실제로 수정해보고== 내(`Robot`) 코드를 고쳐야 하는지 확인
	- 고쳐야 함 → tight coupling / 안 고쳐도 됨 → loose coupling
- 주의: `Robot` 클래스가 `Head` 클래스에 의존하는 것 자체는 문제가 아님 — 기능 분리·캡슐화·재사용성이 좋은 설계. 나쁜 건 의존이 아니라 ==높은 결합도==

## 위 `Robot` 클래스를 loose coupling으로 고쳐라 (코드 작성)

```java
public class Robot {
	private Head head;

	public Robot(Head head) {
		this.head = head;
	}
}

// 사용하는 쪽
Head head = new Head(90.0f);
Robot robot = new Robot(head);
```

- `Head` 개체를 ==외부에서 생성해 생성자의 매개변수로 전달== — 의존성 주입(DI) 중 ==생성자 주입==
- 효과: `Robot` 클래스가 `Head` 클래스의 생성(내부 구현)에 관여하지 않음 → 이후 `Head` 클래스의 생성자가 또 바뀌어도 `Robot` 클래스는 무변경 (loose coupling)
- 의존성이 제거된 게 아님 — `Robot` 클래스는 여전히 `Head` 클래스에 의존. ==결합도만 줄인 것==

## 다음 코드에서 모든 로봇이 `SmartHead`를 쓰게 하려면 `Robot` 클래스를 수정해야 하나? 결합도를 더 줄이는 방법은? (상속 관계에서의 결합도)

```java
public abstract class Head {
	public abstract void pickEnemy();
}

public class SimpleHead extends Head {
	@Override
	public void pickEnemy() {
	}
}

public class SmartHead extends Head {
	@Override
	public void pickEnemy() {
	}
}

public class Robot {
	private SimpleHead head;

	public Robot(SimpleHead head) {
		this.head = head;
	}
}
```

수정해야 함 — 멤버 변수·생성자 매개변수가 `SimpleHead` 타입이라 `SmartHead`로 바꿀 때마다 `Robot` 클래스 코드 변경 필요

```java
public class Robot {
	private Head head;

	public Robot(Head head) {
		this.head = head;
	}
}
```

- ==부모(일반화된) 타입==으로 멤버 변수·매개변수를 선언 → 어떤 자식 개체를 주입해도 `Robot` 클래스는 무변경 — 다형성으로 결합도를 줄임
- 추상화를 잘했다는 가정하에 부모 타입은 바뀔 일이 적음 — 자식 교체가 잦을수록 효과 큼
- 부모가 인터페이스여도 똑같음 — 자식이 아니라 부모 인터페이스에 의존
- 이때도 의존성은 `Head` 클래스에 여전히 있음 — ==없앤 게 아니라 줄인 것==

## 다음 각 명제의 O/X는?

1. 의존성이 있는 설계는 나쁜 설계다
2. loose coupling은 의존성이 없는 상태를 의미한다
3. 의존성 주입을 사용하면 두 클래스 사이의 의존성이 제거된다
4. setter 주입은 생성자 주입과 달리 캡슐화 원칙에 위배될 수 있다

1. **X** — 의존성이 있다는 건 기능이 잘 분리됐다는 뜻 (목적 뚜렷, 캡슐화, 재사용성) → 좋은 설계. 나쁘다는 인식은 ==결합도와 의존성을 같은 개념으로 착각==한 오해
2. **X** — 의존성은 있지만 상대의 변경에 영향을 적게 받는 상태. 애초에 의존은 할 수밖에 없음
3. **X** — 개체 생성을 외부로 옮길 뿐 의존성은 그대로. 제거(remove)가 아니라 ==감소(reduce)==가 정확한 표현 (decoupling은 OO에 없는 개념 — loose/tight 두 가지뿐)
4. **O** — setter 주입은 개체 생성 이후에 의존 개체를 넣으므로 ==생성 시 개체의 상태를 유효하게== 하는 캡슐화 원칙에 위배됨
