---
title: 래퍼 패턴과 프록시 패턴 (012-011~017)
---
# 래퍼 패턴과 프록시 패턴 (012-011~017)

> 서술 개념(래퍼 용도 3가지·프록시 정의와 단점·로딩 3방식)은 ANKI 참고: [36-래퍼(어댑터) 패턴](https://pocu-site.pages.dev/pocu-note/COMP2500/anki/36-wrapper-pattern/) 이후 카드들

## 래퍼 패턴을 적용해 아래 코드를 재작성하세요 (코드 작성 — 공식 1번 재작성 유형)

아래 클라이언트는 `OpenGL`을 직접 사용 중이다. 추후 DirectX(시그니처: `void clear(int r, int g, int b, int a)`, rgba 순서, 값 범위 0~255)로 바꾸기로 결정하면 클라이언트 코드를 모든 곳을 찾아 고쳐야 한다. 래퍼 클래스 `Graphics`를 만들고 클라이언트를 재작성하되, 이후 API를 교체해도 클라이언트 코드가 바뀌지 않게 하라.

```java
// OpenGL.java — 남의 라이브러리라 수정 불가
package academy.pocu.comp2500;

public final class OpenGL {
	// 화면을 지움 — 매개변수는 argb 순서, 값 범위 0.0f~1.0f
	public void clearScreen(float a, float r, float g, float b) {
		// ...
	}
}

// Renderer.java — 클라이언트 (OpenGL을 직접 사용 중)
package academy.pocu.comp2500;

public final class Renderer {
	private OpenGL graphics = new OpenGL();

	public void renderTitle() {
		this.graphics.clearScreen(1.0f, 0.0f, 0.0f, 0.0f);	// 검은 화면
		// 코드 생략
	}

	public void renderGameOver() {
		this.graphics.clearScreen(1.0f, 1.0f, 0.0f, 0.0f);	// 빨간 화면
		// 코드 생략
	}
}
```

```java
// Graphics.java — 래퍼 클래스
package academy.pocu.comp2500;

public final class Graphics {
	private OpenGL gl = new OpenGL();

	// 내가 정한 시그니처 — rgba 순서, 값 범위 0.0f~1.0f
	public void clear(float r, float g, float b, float a) {
		this.gl.clearScreen(a, r, g, b);
	}
}

// Renderer.java — 클라이언트 재작성
package academy.pocu.comp2500;

public final class Renderer {
	private Graphics graphics = new Graphics();

	public void renderTitle() {
		this.graphics.clear(0.0f, 0.0f, 0.0f, 1.0f);
		// 코드 생략
	}

	public void renderGameOver() {
		this.graphics.clear(1.0f, 0.0f, 0.0f, 1.0f);
		// 코드 생략
	}
}
```

이후 DirectX로 교체하면 — `Graphics` 클래스 내부만 바뀌고 `Renderer` 클래스는 그대로:

```java
// DirectX.java — 교체해 들어온 라이브러리 (수정 불가)
package academy.pocu.comp2500;

public final class DirectX {
	// 화면을 지움 — 매개변수는 rgba 순서, 값 범위 0~255
	public void clear(int r, int g, int b, int a) {
		// ...
	}
}

// Graphics.java — DirectX 교체 후. 이 클래스 내부만 수정됨
package academy.pocu.comp2500;

public final class Graphics {
	private DirectX dx = new DirectX();

	public void clear(float r, float g, float b, float a) {
		this.dx.clear((int) (r * 255), (int) (g * 255), (int) (b * 255), (int) (a * 255));
	}
}
```

- 래퍼는 기존 클래스의 개체를 ==private 멤버 변수==로 가짐(컴포지션) — 내가 정한 `clear()` 시그니처 안에서 이름·매개변수 순서·값 범위 차이를 흡수
- 클라이언트는 이제 `Graphics`의 시그니처만 사용 → 교체 시 ==`Graphics` 내부 구현만 수정==되고 `Renderer` 클래스는 한 줄도 안 바뀜 — 클라이언트 코드 무변경이 핵심

## 다음 코드의 출력은? (프록시 패턴과 지연 로딩)

```java
// Image.java
package academy.pocu.comp2500;

public final class Image {
	private String filePath;
	private byte[] image;

	public Image(String filePath) {
		this.filePath = filePath;
	}

	public void draw() {
		if (this.image == null) {
			System.out.println("load: " + this.filePath);
			this.image = new byte[1024];	// 저장장치에서 읽어왔다고 가정
		}

		System.out.println("draw: " + this.filePath);
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {
	public static void main(String[] args) {
		Image a = new Image("a.png");
		Image b = new Image("b.png");

		a.draw();
		a.draw();
		b.draw();
	}
}
```

```
load: a.png
draw: a.png
draw: a.png
load: b.png
draw: b.png
```

- 생성자는 이미지 데이터를 로딩하지 않고 ==로딩에 필요한 정보(`filePath`)만 저장== — 이 정보가 프록시
- 첫 `draw()` 호출 때 `if (this.image == null)`에서 로딩 — 이렇게 늦게 읽어오는 방식이 ==지연 로딩(lazy loading)== (반대는 즉시 로딩)
- 두 번째 `a.draw()`는 이미 로딩돼 있어 로딩 생략 — `if (image == null)`이 ==캐시 로직==
- `b`는 `draw()` 전까지 메모리를 안 씀 — 생성만 하고 안 쓰는 개체의 리소스 낭비가 없음 (프록시 패턴의 목적)

## 서술형: 래퍼(어댑터) 패턴이 무엇이며 언제 유용한지 다섯 문장 이내로 설명하세요

모범답안

래퍼 패턴은 기존 클래스를 다른 클래스로 감싸서 원하는 메서드 시그니처로 바꿔 제공하는 패턴임(GoF 책에서의 이름은 어댑터 패턴). 감싸는 방식은 기존 클래스의 개체를 멤버 변수로 가지는 컴포지션임. 남의 라이브러리처럼 코드를 직접 수정할 수 없는 클래스를 커스터마이징하거나 기능을 추가할 때 유용함. 클라이언트가 래퍼의 시그니처만 사용하므로 내부 라이브러리를 교체해도 래퍼 내부 구현만 고치면 되고 클라이언트 코드는 바뀌지 않음. 이것이 래퍼 패턴의 핵심 이득임.

- 확장된 용도: 내부 개체를 노출하지 않고 일부·변형만 DTO로 공개(`toDto()`) — 엄밀히 말하면 어댑터 패턴은 아니지만 목적이 비슷함 (012-013)

## 다음 각 명제의 O/X는?

1. 지연 로딩은 개체 생성 시점에 리소스를 메모리에 올린다
2. 즉시 로딩은 로딩 이후 원본 데이터가 바뀌면 최신 데이터가 아닐 수 있다
3. 프록시 패턴 적용 여부를 캡슐화해 감추면 클라이언트가 병목점 파악과 메모리 사용량 계산을 하기 쉬워진다
4. 이미지 클래스가 `load()`·`unload()` 메서드를 외부에 공개하는 요즘 방식은 캡슐화가 반드시 좋은 것은 아니라는 사례다

1. **X** — 사용(호출) 시점에 로딩. 생성 시점에 올리는 것은 즉시 로딩
2. **O** — 처음 실행할 때 로딩하므로 이후 데이터가 바뀌면 캐시 리프레시 없이는 최신이 아닐 수 있음
3. **X** — 반대. 원인은 ==캡슐화==: 어떤 로딩 방식(즉시/지연/프록시)을 쓰는지 내부를 알 수 없어 병목점·메모리 사용량을 알기 어려움 — "남몰래" 프록시 패턴이 문제가 되는 이유 (4번과 이어짐)
4. **O** — 클라이언트가 로딩 상태를 확인하고 직접 제어(상태머신)하는 편이 좋을 수 있음 — 내부 동작을 보여주는 방식이 요즘 더 많이 사용됨
