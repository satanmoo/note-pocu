# 연습 문제 (5) 답지

각 문제의 풀이. `전)`/`후)`는 코드 수정 형식.

## 1

### 1-a)
- **a) 문제 없음**
- **c) 출력** `8`
  - `happiness`에는 접근 제어자가 없어 **패키지(default) 접근** — 같은 패키지(`academy.pocu.comp2500`)의 `Program`에서 직접 접근 가능
  - 5 + 3 = 8
  - 참고: 만약 `Program`이 **다른 패키지**에 있었다면 `dog.happiness`는 컴파일 오류

### 1-b)
- **a) 컴파일 오류**
  - `10000000000`은 `int` 리터럴로 해석되는데 `int`의 최댓값(2147483647)을 넘어감 ("integer number too large"). `long`에 대입하더라도 리터럴 자체가 `int`라 오류
- **b)** 리터럴 뒤에 `L`을 붙여 `long` 리터럴로 만듦
  ```
  전) long big = 10000000000;
  후) long big = 10000000000L;
  ```
- **c) (고친 경우 출력)** `10000000000`

### 1-c)
- **a) 문제 없음**
- **c) 출력**
  ```
  8
  16
  2
  ```
  - `010`은 **8진수** → 8
  - `0x10`은 **16진수** → 16
  - `0b10`은 **2진수** → 2
  - 변수 자체에는 진법 개념이 없음 — 값은 메모리에 **2진수(비트)로 저장**되고, 리터럴의 진법(8/16/2진수)은 소스 코드 표기 방식일 뿐 셋 다 같은 정수값으로 컴파일됨
  - `println`은 내부적으로 `Integer.toString(int)`를 호출하는데, 이게 그 값을 **기본 10진수 문자열로 변환**해 출력함 (즉 10진수로 "포맷"되는 건 저장된 값이 아니라 출력 문자열). 16진수로 보려면 `Integer.toHexString`, 2진수는 `Integer.toBinaryString`

## 2
- **출력** `ID-7`
  - `Item`은 **정적 내포 클래스**라 바깥 인스턴스 없이 `new Catalog.Item(7)`로 생성
  - 정적 내포 클래스는 바깥 클래스의 **static 멤버**(`prefix`)에 접근 가능 → `"ID-" + 7` = `"ID-7"`

## 3
접근 제어자 4가지의 접근 범위
- **public**: 모든 곳에서 접근 가능 (다른 패키지 포함)
- **protected**: 같은 패키지 + 다른 패키지의 자식 클래스에서 접근 가능
- **package (아무것도 안 붙임, default)**: **같은 패키지 안의 클래스에서만** 접근 가능
  - 같은 패키지에서는 public처럼, 다른 패키지에서는 private처럼 동작
- **private**: 같은 클래스 내부에서만 접근 가능

## ==4==
정적 vs 비정적 내포 클래스
- **a) 개체 생성 방법**
  - **정적(static) 내포 클래스**: 바깥 인스턴스가 필요 없음 → `new Outer.Inner()`
  - **비정적(non-static) 내포 클래스**: 바깥 인스턴스가 먼저 있어야 함 → `outer.new Inner()` (예: `Outer outer = new Outer(); outer.new Inner();`)
- **b) 바깥 인스턴스 멤버 접근**
  - **정적 내포 클래스**: 바깥 클래스의 **인스턴스 멤버에는 접근 불가** (static 멤버만 접근 가능). 필요하면 바깥 개체를 인자로 받아 그 참조로 접근해야 함
	  - 단, 바깥 개체를 인자로 받아 그 참조로 접근하면 바깥 클래스의 **private 멤버 변수에도 접근 가능** (내포 클래스는 바깥 클래스의 멤버라 private도 보임)
  - **비정적 내포 클래스**: 바깥 인스턴스에 묶여 있으므로 바깥의 **인스턴스 멤버(심지어 private)에도 접근 가능**
- 정리: 바깥 인스턴스 멤버가 필요 없으면 정적, 필요하면 비정적을 사용

## 5

### 5-a)
- **a) 문제 없음**
- **c) 출력** `105`
  - `StaticInner`는 정적 내포 클래스 → `new Outer.StaticInner(5)`로 생성
  - `compute()` = `this.n` + `staticValue`(바깥 static) = 5 + 100 = 105

### 5-b)
- **a) 컴파일 오류**
  - `Inner`는 비정적 내포 클래스라 바깥 인스턴스 없이 `new Outer.Inner()`로 생성할 수 없음
- **b)** 바깥 개체를 먼저 만들고 `outer.new Inner()`로 생성
  ```
  전) Outer.Inner inner = new Outer.Inner();
  후) Outer outer = new Outer();
      Outer.Inner inner = outer.new Inner();
  ```
  - (고친 경우 출력) `110` ( `instanceValue` 10 + `staticValue` 100 )

### ==5-c)==
- **a) 컴파일 오류**
  - 정적 내포 클래스(`StaticInner`)는 바깥 클래스의 **인스턴스 멤버**(`instanceValue`)에 접근할 수 없음 (static 멤버만 가능)
- **b)** 바깥 인스턴스를 인자로 받아 그 참조로 접근하거나, 해당 값을 static으로 두거나, `instanceValue` 사용을 빼야 함

## 6
- **출력**
  ```
  two
  three
  ```
  - `x`가 2라 `case 2`로 진입 → "two" 출력
  - `case 2`에 `break`가 없어 **fall-through**로 `case 3`까지 실행 → "three" 출력 후 `break`로 종료
  - Java는 `break`를 빼먹은 fall-through를 컴파일 단계에서 막아주지 않음

## 7
- **출력** `7`
  - i=1 → sum=1
  - i=2 → sum=3
  - i=3 → `continue`로 건너뜀 (sum 그대로 3)
  - i=4 → sum=7
  - i=5 → `break`로 반복 종료 (더하지 않음)
  - 최종 sum=7

## 8
예시 답안

```java
// GameConfig.java
package academy.pocu.comp2500;

public class GameConfig {
	private static GameConfig instance;

	private int difficulty;

	private GameConfig() {
	}

	public static GameConfig getInstance() {
		if (instance == null) {
			instance = new GameConfig();
		}

		return instance;
	}

	public int getDifficulty() {
		return this.difficulty;
	}

	public void setDifficulty(int difficulty) {
		this.difficulty = difficulty;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		GameConfig.getInstance().setDifficulty(3);

		System.out.println(GameConfig.getInstance().getDifficulty());
	}
}
```

- 포인트
  - `private` 생성자로 외부에서 `new GameConfig()`를 막음
  - `private static GameConfig instance`에 단 하나의 인스턴스를 보관하고, `getInstance()`에서 처음 호출 시에만 생성(지연 초기화)
  - 두 번의 `getInstance()`가 같은 개체를 반환하므로 출력은 `3`
  - 클래스 이름으로 인스턴스 메서드를 바로 호출(`GameConfig.getDifficulty()`)할 수는 없고, 반드시 `getInstance()`로 개체를 거쳐야 함

## 9
- **출력** `80`
  - `setHp(120)`: 100 초과라 거부(상태 유지) → hp=50
  - `setHp(-10)`: 0 미만이라 거부(상태 유지) → hp=50
  - `setHp(80)`: 유효 → hp=80
  - setter에서 유효성 검사를 해 개체가 항상 유효한 상태(0~100)를 유지함

## ==10==
생성자에서 초기화해야 하는 이유 (예시)
- **개체가 생성과 동시에 유효한 상태가 됨 (후조건)**
  - 생성자도 함수라 선조건/후조건이 적용됨. 생성자의 후조건은 "개체의 상태는 개체 생성과 동시에 유효하다"
  - 개체를 만든 뒤 따로 값을 대입하면 그 사이에 속이 빈(유효하지 않은) 개체가 존재 → 개념상 이상함 (공장에서 나온 콜라가 캔만 있고 내용물이 없는 격)
- **사용자의 실수 방지**
  - 그 클래스를 쓰는 사용자(코드/프로그래머)가 "어떤 멤버를, 어떤 값으로 초기화해야 하는지" 일일이 신경 쓰지 않아도 됨
  - 나중에 멤버 변수가 추가돼도 생성자만 고치면 되어, 흩어진 초기화 코드의 누락 위험이 줄어듦
- **생성자는 계약(contract)**
  - 필요한 값을 인자로 강제해, "그 값을 주면 유효한 개체를 만들어 준다"는 계약 역할을 함
  - 함수는 블랙박스이며, 이는 캡슐화·데이터 추상화와 같은 맥락

## 11
- **출력**
  ```
  false
  true
  false
  ```
  - `Door`는 `Lock`을 **상속(is-a)하지 않고 멤버로 가짐(has-a)** → 컴포지션
  - `boolean` 멤버 `locked`의 기본값은 `false` → 처음 `isLocked()`는 `false`
  - `close()`는 보관한 `Lock`에 위임해 잠금(`lock()` → true), `open()`은 풂(`unlock()` → false)
  - 즉 `Door`는 상태 관리를 `Lock`에 위임(delegation)함
