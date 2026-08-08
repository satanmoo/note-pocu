# final 판정 (008-010)

> 서술형은 ANKI로 분리: 다형성의 장점 https://pocu-site.pages.dev/pocu-note/COMP2500/anki/05-polymorphism-advantages/ · 바인딩 정의·성능 https://pocu-site.pages.dev/pocu-note/COMP2500/anki/06-binding-and-final/

## 다음 코드의 결과는? (`final` 메서드 — 공식 연습 4번 유형)

```java
public class A {
	public final void print() {
		System.out.println("A");
	}
}

public class B extends A {
	@Override
	public void print() {
		System.out.println("B");
	}
}
```

컴파일 오류

- `final` 메서드는 자식 클래스에서 오버라이딩(동일 시그니처 선언) 불가
- `final`을 붙이는 순간 컴파일러는 이 메서드가 오버라이딩되지 않음을 알 수 있음 → ==이른 바인딩 가능== (최적화 여지)

## 다음 설명 중 틀린 것은? (`final` 클래스)

1. `final` 클래스는 상속할 수 없다
2. `final` 클래스 안의 메서드에 `final`을 붙이는 것은 중복이다
3. 모든 메서드가 `final`인 클래스 A는 상속할 수 없다
4. Java의 기본 동작은 모든 클래스가 상속 가능하고 메서드는 가상(오버라이딩 가능)이다

3번이 틀림

- 모든 메서드가 `final`이어도 **상속 자체는 가능** — 오버라이딩만 불가 (새 메서드 추가는 됨)
- 클래스 상속을 막으려면 클래스에 `final`을 붙여야 함 (1번) — 상속이 안 되니 오버라이딩도 원천 불가라 메서드 `final`은 중복 (2번)
- Java는 기본이 가상이라 마음대로 상속·오버라이딩되는 것을 막는 수단이 `final` (4번)
