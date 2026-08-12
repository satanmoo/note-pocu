---
title: 디커플링의 적합성과 단점 (011-006~008)
---
# 디커플링의 적합성과 단점 (011-006~008)

> 서술 개념(적합한 곳·단점 2가지)은 ANKI 참고: [27-디커플링이 적합한 곳](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/27-where-decoupling-fits/), [28-디커플링의 단점 2가지](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/28-decoupling-disadvantages/)

## 다음 `mergeTo()` 메서드는 스펙을 만족하나? 고치면 어떤 비효율이 생기나? (내부를 알아야 좋은 경우)

스펙: 데이터 소스의 모든 데이터를 ==중복 없이== `dataset`에 넣어준다. `dataset`은 어떤 `Collection` 구현이든 될 수 있다.

```java
public class DataSource {
	private ArrayList<String> data;

	public void mergeTo(Collection<String> dataset) {
		for (String item : this.data) {
			dataset.add(item);
		}
	}
}
```

만족 못 함

- `HashSet` 같은 `Set` 구현은 중복을 자동 제거하지만, `ArrayList` 같은 `List` 구현은 ==중복을 허용== → 중복이 들어감
- 모든 구현에서 동작하게 고치려면 `add()` 전에 `contains()` 메서드로 중복 검사:

```java
public void mergeTo(Collection<String> dataset) {
	for (String item : this.data) {
		if (!dataset.contains(item)) {
			dataset.add(item);
		}
	}
}
```

- 생기는 비효율: `Set` 구현이 들어오면 어차피 자동 제거되는데도 매번 `contains()` 검사를 함 — ==추상화로 인한 비효율== (디커플링 단점 2: 내부를 알아야 좋은 경우)
- 대안: 매개변수를 `Collection` 대신 ==더 구체적인 인터페이스 `Set`==으로 좁히면 검사 없이 최적화 가능 — 대신 받아줄 수 있는 타입이 좁아짐 (유연함과 최적의 트레이드오프 — [[pocu-note/COMP2500/003-object-modeling-1/003-012-flexible-not-best/index|추상화의 단점]] 참고)

## 다음 각 명제의 O/X는?

1. 규모가 작고 단순한 구조에서도 디커플링의 실효성은 높다
2. 함수 매개변수의 자료형이 인터페이스에 의존하는 것은 결합도 줄이기의 좋은 예다
3. 결합도를 높이더라도 의존 대상의 내부(구현)를 아는 것이 더 좋은 경우가 있다

1. **X** — 단순 구조에서는 고치다 보면 ==컴파일 에러 덕분에== 구조 변경이 어렵지 않아 실효성이 낮음. 디커플링이 문제가 되는 곳은 복잡한 시스템, 그리고 남의 라이브러리처럼 내가 변경할 수 없는 코드
2. **O** — 인터페이스의 규약(함수 시그니처)만 맞으면 어떤 구현이든 받아줌 — C의 함수 포인터가 디커플링의 좋은 예인 것과 같은 원리
3. **O** — `Collection` vs `Set` 예처럼 구현을 알면 불필요한 중복 검사를 없애 최적화할 수 있음 (디커플링 단점 2)
