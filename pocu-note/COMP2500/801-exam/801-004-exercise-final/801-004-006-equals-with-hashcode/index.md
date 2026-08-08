---
title: equals에서 hashCode로 빠른 탈출 (008-017)
---
# equals에서 hashCode로 빠른 탈출 (008-017)

전제 클래스 (아래 문제 공통 — 방향이 있는 선분으로 동치를 정의)

```java
public final class Point {
	private int x;
	private int y;

	public Point(int x, int y) {
		this.x = x;
		this.y = y;
	}

	public int getX() {
		return this.x;
	}

	public int getY() {
		return this.y;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == this) {
			return true;
		}

		if (obj == null
				|| !(obj instanceof Point)
				|| this.hashCode() != obj.hashCode()) {
			return false;
		}

		Point other = (Point) obj;
		return this.x == other.x && this.y == other.y;
	}

	@Override
	public int hashCode() {
		return this.x * 31 + this.y;
	}
}

public final class Line {
	private Point p1;
	private Point p2;

	public Line(Point p1, Point p2) {
		this.p1 = p1;
		this.p2 = p2;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == this) {
			return true;
		}

		if (obj == null
				|| !(obj instanceof Line)
				|| this.hashCode() != obj.hashCode()) {
			return false;
		}

		Line other = (Line) obj;
		return this.p1.equals(other.p1) && this.p2.equals(other.p2);
	}

	@Override
	public int hashCode() {
		int hash = 17;
		hash = hash * 31 + this.p1.hashCode();
		hash = hash * 31 + this.p2.hashCode();

		return hash;
	}
}
```

## `equals()` 안의 `this.hashCode() != obj.hashCode()`는 무슨 일을 하며, 어떤 계약이 이것을 정당화하나?

비싼 필드 비교로 가기 전에 ==빠르게 `false`를 반환==하는 지름길(fast-path)

- 정당화하는 계약: "동치면 해시값이 같다"의 ==대우== — 해시값이 다르면 반드시 동치가 아님. 그래서 해시값이 다르면 필드를 볼 것 없이 `false` 확정
- 언제 유리한가: 필드 비교가 비쌀 때(예: `Line`은 필드 비교가 `Point`의 `equals()`를 다시 호출 — 재귀적). 해시값은 한 번 계산(또는 캐시)해 정수 비교 한 번으로 끝남
- 주의: 이 지름길은 `hashCode()`가 `equals()`와 ==일관되게(계약을 지키게)== 구현돼 있을 때만 정당함 — 아니면 동치인 개체를 다르다고 오판

## 다음 코드의 출력은?

```java
HashSet<Point> points = new HashSet<>();

Point p1 = new Point(1, 7);
Point p2 = new Point(1, 7);
Point p3 = new Point(7, 1);

points.add(p1);

System.out.println(points.contains(p2));
System.out.println(points.contains(p3));

HashSet<Line> lines = new HashSet<>();

Line l1 = new Line(p1, p3);

Point p4 = new Point(1, 7);
Point p5 = new Point(7, 1);

Line l2 = new Line(p4, p5);

lines.add(l1);
System.out.println(lines.contains(l2));

Line l3 = new Line(p5, p4);
System.out.println(lines.contains(l3));
```

```
true
false
true
false
```

- `Point.hashCode()` = `x * 31 + y` → p1, p2, p4는 모두 (1,7)이라 38 / p3, p5는 (7,1)이라 218
- `points.contains(p2)`: p2 해시 38 = p1과 같은 버킷 → `equals()` 진입 → 필드 (1,7)=(1,7) → **true**
- `points.contains(p3)`: p3 해시 218, p1과 다른 버킷 → `equals()` 호출 없이 **false**
- `Line.hashCode()`: l1=Line(p1,p3) → 17→17*31+38=565→565*31+218=**17733**, l2=Line(p4,p5)도 동일 필드라 17733 → `equals()` 진입, `p1.equals(p4)`와 `p3.equals(p5)` 모두 true → **true**
- `lines.contains(l3)`: l3=Line(p5,p4)는 점 순서가 뒤집힘 → 17→17*31+218=745→745*31+38=**23133** ≠ 17733 → 다른 버킷 → **false**

## `l3`(점 순서가 뒤집힌 선분)이 `false`인 이유는?

`Line.hashCode()`가 `p1`과 `p2`에 ==다른 가중치==를 곱하므로(먼저 넣은 점이 한 번 더 `*31`), 같은 두 점이라도 순서가 다르면 해시값이 달라짐

- 이것이 "방향이 있는 선분" 동치 정의를 코드로 구현한 것 — A→B 선분과 B→A 선분은 다른 개체
- 순서를 무시하고 싶었다면 `hashCode()`를 순서 무관하게(예: 두 점 해시의 합) 구현하고 `equals()`도 그에 맞춰야 함

## 함정: 만약 `Point`가 `hashCode()`를 오버라이딩하지 않았다면, `points.contains(p2)`의 결과는?

`false`

- `hashCode()`가 `Object` 기본 구현(주소 기반)이면 p1과 p2는 다른 개체라 해시값이 다름
- p2는 p1과 다른 버킷으로 가서 `equals()` 호출조차 안 됨 → 필드가 같아도 `false`
- 게다가 `equals()` 안의 `this.hashCode() != obj.hashCode()` 지름길도 항상 참이 되어 필드 비교 전에 `false`로 빠짐
- 결론: `equals()`를 오버라이딩하면 `hashCode()`도 반드시 함께 — 한쪽만 하면 이 최적화가 오히려 정답을 깨뜨림
