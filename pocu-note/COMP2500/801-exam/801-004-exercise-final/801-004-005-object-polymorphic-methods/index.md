# Object의 다형적 메서드: toString·equals·hashCode (008-013~015)

## 다음 코드의 출력은? (`==` vs `equals()`)

```java
String s1 = new String("pocu");
String s2 = new String("pocu");

System.out.println(s1 == s2);
System.out.println(s1.equals(s2));
```

```
false
true
```

- `==`는 ==참조(주소) 비교== — 서로 다른 개체라 `false`
- `String`은 `equals()`를 문자 하나하나 비교하도록 오버라이딩해 둠 → `true`

## 다음 코드의 출력은? (`equals()` 미오버라이딩)

```java
public class Point {
	private int x;
	private int y;

	public Point(int x, int y) {
		this.x = x;
		this.y = y;
	}
}
```

```java
Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);

System.out.println(p1.equals(p2));
```

`false`

- `Object` 클래스의 `equals()` 기본 구현은 ==참조 비교== — 필드값이 같아도 다른 개체면 `false`
- 각 클래스에서 동치의 개념은 다를 수 있으므로, 값 비교를 원하면 직접 오버라이딩해야 함

> 서술형은 ANKI로 분리: `toString()` 기본 동작·오버라이딩 https://pocu-site.pages.dev/pocu-note/COMP2500/anki/08-tostring-method/ · equals·hashCode 계약(3명제) https://pocu-site.pages.dev/pocu-note/COMP2500/anki/07-equals-hashcode-contract/

## 다음 코드의 출력은? (HashSet 중복 판정 — 공식 연습 6번 유형)

```java
public class Author {
	private String name;

	public Author(String name) {
		this.name = name;
	}

	@Override
	public int hashCode() {
		return this.name.hashCode();
	}
	// equals()는 오버라이딩하지 않음
}
```

```java
HashSet<Author> authors = new HashSet<>();

authors.add(new Author("Jane"));
authors.add(new Author("Jane"));

System.out.println(authors.size());
```

`2`

- `HashSet`은 `hashCode()`로 버킷을 찾고, 최종 중복 판정은 ==`equals()`==로 함
- `equals()`가 기본(참조 비교)이면 해시값이 같아도 서로 다른 개체로 판정 → 둘 다 들어감
- 중복 제거를 원하면 `equals()`와 `hashCode()`를 ==둘 다== 오버라이딩해야 함 (한쪽만 하면 계약이 깨져 오동작)

## `equals()` 표준 구현의 4단계 순서는? (코드 작성 대비)

```java
@Override
public boolean equals(Object obj) {
	if (obj == this) {              // 1. 참조 확인 (같은 개체면 바로 true)
		return true;
	}

	if (obj == null || !(obj instanceof Point)) {   // 2. null 확인 3. 클래스 정보 확인 (RTTI)
		return false;
	}

	Point other = (Point) obj;      // 4. 캐스팅 후 필드 비교
	return this.x == other.x && this.y == other.y;
}
```

- 매개변수 자료형이 `Point`가 아니라 ==`Object`==인 것에 주의 — 아니면 오버라이딩이 아니라 오버로딩이 됨
- IntelliJ 자동 구현도 이 템플릿 (참조 → null → 클래스 정보(RTTI) → 필드)
