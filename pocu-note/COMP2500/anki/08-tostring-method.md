# toString() 메서드

**앞면**

`System.out.println(개체)`를 하면 무엇이 호출되나? 오버라이딩하지 않으면 무엇이 출력되며, 그 문자열은 무엇으로 이루어지나?

**뒷면**

`toString()` 메서드가 호출됨 (Object의 다형적 메서드 — 늦은 바인딩으로 실체의 구현 실행)

- 오버라이딩하지 않으면 `Object`의 기본 구현: `클래스이름@16진수` 형태
	- 이 `@` 뒤의 16진수가 곧 `hashCode()` 값을 16진수로 표현한 것 (`Integer.toHexString(hashCode())`)
	- 즉 기본 `toString()`은 기본 `hashCode()`에 의존함 → [[09-object-hashcode-default]]
- Java 기본 문서는 모든 클래스의 `toString()` 오버라이딩을 권장

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/008-polymorphism/008-013-object-class-and-tostring/
