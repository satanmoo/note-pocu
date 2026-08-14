---
title: SOLID 설계 정신 (014-001~008)
---
# SOLID 설계 정신 (014-001~008)

> 서술 개념(총론·원칙별 정의)은 ANKI 참고: [54-SOLID 정신 총론](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/54-solid-overview/) 이후 카드들

## 서술형 (공식 연습 12번 그대로): 개방/폐쇄 원칙이란 무엇인지 다섯 문장 이내로 설명하세요

모범답안

개방/폐쇄 원칙은 "확장에는 열려 있고(open for extension), 수정에는 닫혀 있어야(closed for modification) 한다"는 정신임. 즉 어떤 기능을 추가하고 싶을 때 기존 클래스의 내부를 수정하지 않고도 동작을 확장할 수 있어야 한다는 의미임. 좋은 예가 상속으로, 부모 클래스의 코드를 고치지 않은 채 자식 클래스를 추가하고 메서드를 오버라이딩해서 새로운 동작을 확장할 수 있음. 이렇게 하면 이미 검증된 기존 코드를 건드리지 않으므로 기존 기능이 망가질 위험이 줄어듦. 단 SOLID는 반드시 따라야 할 규칙이 아니라 정신이며, Git 같은 외부 도구로 해결할 수 있는 문제는 외부 도구로 해결하는 것이 나음.

## 다음 코드의 출력은? 이 코드는 어떤 SOLID 정신을 위배하나? (직사각형-정사각형)

```java
// Rectangle.java
package academy.pocu.comp2500;

public class Rectangle {
	protected int width;
	protected int height;

	public Rectangle(int width, int height) {
		this.width = width;
		this.height = height;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getArea() {
		return width * height;
	}
}

// Square.java
package academy.pocu.comp2500;

public class Square extends Rectangle {
	public Square(int side) {
		super(side, side);
	}

	@Override
	public void setWidth(int width) {
		this.width = width;
		this.height = width;	// 정사각형 유지
	}

	@Override
	public void setHeight(int height) {
		this.width = height;	// 정사각형 유지
		this.height = height;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {
	public static void printArea(Rectangle rectangle) {
		rectangle.setWidth(5);
		rectangle.setHeight(10);
		System.out.println(rectangle.getArea());
	}

	public static void main(String[] args) {
		printArea(new Rectangle(4, 6));
		printArea(new Square(5));
	}
}
```

```
50
100
```

- `Square`의 실체로 호출하면 `setHeight(10)`이 dynamic dispatch로 오버라이딩 구현을 실행 → 폭까지 10이 되어 `10 × 10 = 100`
- 위배: ==리스코프 치환== — 부모 클래스 변수에 자식 개체를 대입했을 때 문제없이(부모의 기대대로) 동작해야 하는데, "폭과 높이를 독립적으로 설정할 수 있다"는 `Rectangle`의 기대가 깨짐
- 개념적으로는 정사각형이 직사각형에 포함되는데도 위배가 생기는 이유: ==setter 메서드가 존재할 때만== 문제가 됨 — setter를 제거하면 문제 없음 (setter를 없애자던 극단적 OO 진영이 setter가 있어야 성립하는 예로 문제 삼는 것은 모순이라는 강의 비판)

## 다음 코드의 출력은? 결론적으로 `Stack`은 어떻게 구현했어야 하나? (코드보기: 스택)

```java
// Stack.java — ArrayList를 상속해서 구현한 스택
package academy.pocu.comp2500;

import java.util.ArrayList;

public class Stack<E> extends ArrayList<E> {
	public void push(E item) {
		add(item);
	}

	// 스택은 중간 삽입이 없어야 하므로 끝에만 추가하도록 오버라이딩
	@Override
	public void add(int index, E element) {
		super.add(super.size(), element);
	}

	// pop() 등 나머지 코드 생략
}

// Program.java
package academy.pocu.comp2500;

import java.util.ArrayList;

public class Program {
	// 리스트를 오름차순으로 유지하며 값을 삽입
	public static void addInOrder(ArrayList<Integer> list, int value) {
		int i = 0;

		while (i < list.size() && list.get(i) < value) {
			++i;
		}

		list.add(i, value);
	}

	public static void main(String[] args) {
		ArrayList<Integer> list = new ArrayList<>();
		addInOrder(list, 10);
		addInOrder(list, 2);
		addInOrder(list, 5);
		System.out.println(list);

		ArrayList<Integer> stack = new Stack<>();
		addInOrder(stack, 10);
		addInOrder(stack, 2);
		addInOrder(stack, 5);
		System.out.println(stack);
	}
}
```

```
[2, 5, 10]
[10, 2, 5]
```

- `addInOrder()` 메서드가 내부에서 호출하는 `add(int, E)`가 `Stack`에서 오버라이딩되어 있어 ==dynamic dispatch==로 "끝에만 추가"가 실행됨 → 오름차순 유지라는 `ArrayList` 무늬의 기대가 깨짐 — ==리스코프 치환 위배==
- 결론: `Stack`은 `ArrayList`와 ==is-a 관계가 아니므로== 상속이 아니라 ==컴포지션==으로 구현했어야 함 (`ArrayList`를 private 멤버 변수로 갖고 `push()`/`pop()`만 노출) — 상속의 부작용
- 덤: 상속하면 `ArrayList`의 순회·중간 접근 메서드가 전부 노출되는데, 스택의 데이터를 순회하는 것 자체가 스택의 개념에 어긋남

## 다음 각 명제의 O/X는?

1. SOLID는 반드시 따라야 할 규칙이다
2. SOLID로 실제 얻을 수 있는 것은 유연함이며, 이해하기 쉬움과 유지보수 용이는 유연함과 독립적이다
3. 클래스 이름에 "And"가 들어가면(예: `UserAndAccount`) 단일 책임을 어겼다고 의심할 수 있다
4. 인터페이스 분리는 단일 책임과 같은 뿌리, 즉 사람이 동시에 이해할 수 있는 정보 크기의 문제다
5. 의존 역전의 핵심은 구체적인 것에 의존할수록 결합도가 줄어든다는 것이다

1. **X** — 반드시 따라야 할 규칙이 아니라서 ==정신==이라고 표현. 도움이 되는 점이 있어 배우지만 마케팅적 요소도 있음
2. **O** — SOLID(추상화·일반화)에서 얻는 것은 유연함 하나. 유연하다고 이해하기 쉽거나 유지보수가 쉬워지는 것은 아님 (추상화는 오히려 직관적이지 못함)
3. **O** — 주관적인 "하나의 책임"과 달리, 이건 위반을 바로 보여주는 ==객관적 지표==
4. **O** — 둘 다 ==사람이 이해할 수 있는 크기==로 잘게 나누자는 문제 — 교훈은 필요한 만큼 간단하게(밸런스)
5. **X** — 반대. ==추상적인 것==에 의존할수록 결합도가 줄어듦 — 커플링을 줄이기 위해 인터페이스를 사용하라는 것
