# 연습 문제 (4) 답지

각 문제의 풀이. `전)`/`후)`는 코드 수정 형식.

## 1

### ==1-a)==
- **a) 문제 없음**
- **c) 출력** `105`
  - 생성자가 받은 배열을 복사 없이 그대로 참조로 저장하고, `getItems()`도 내부 배열의 참조를 그대로 반환함
  - 따라서 `items[0] = 100`은 `inventory` 내부 배열을 직접 바꿈 → `{100, 2, 3}`
  - `getTotal()` = 100 + 2 + 3 = 105
  - 캡슐화가 깨진 전형적인 예(참조 노출 / aliasing). 막으려면 생성자/`getItems()`에서 배열을 복사(방어적 복사)해야 함

### 1-b)
- **a) 컴파일 오류**
  - `count`가 `final`이라 한 번 초기화한 뒤 다시 대입할 수 없음
- **b)**
  ```
  전) final int count = 10;
  후) int count = 10;
  ```
- **c) (고친 경우 출력)** `15`
  - 10 + 5 = 15

### ==1-c)==
- **a) 문제 없음**
- **c) 출력**
  ```
  2147483647
  -2147483648
  ```
  - `int`의 최댓값(2147483647)에 1을 더하면 표현 범위를 넘어 최솟값(-2147483648)으로 순환(오버플로)
  - Java의 `int`는 부호 있는 32비트라 오버플로 시 예외 없이 값이 래핑됨

## 2
- **출력**
  ```
  false
  true
  false
  1
  ```
  - `false && ...`: 단락 평가로 우변(`isPositive(5)`)을 호출하지 않음 → calls 그대로, r1=false
  - `true || ...`: 단락 평가로 우변을 호출하지 않음 → calls 그대로, r2=true
  - `true && checker.isPositive(-3)`: 우변을 호출함 → calls 1로 증가, `-3 > 0`=false → r3=false
  - 실제로 호출된 건 한 번뿐 → `getCalls()`=1

## ==3==
OOP의 필요성 (예시 답안)
- **절차적 프로그래밍의 한계**: 데이터(구조체)와 그 데이터를 다루는 동작(함수)이 **분리**되어 있음
  - 데이터를 엉뚱한 함수에 넘기는 등 실수를 하기 쉬움
  - 데이터가 많아지고 프로그램이 커질수록 관리·이해가 어려움
- **OOP의 해결**
	- 캡슐화
		- 데이터와 동작을 하나의 클래스(개체)로 **묶음** → 관련된 것이 한곳에 모임
		- 멤버를 숨기고 메서드로만 다루게 해 실수를 줄임
	- 사람이 세상을 "개체" 단위로 인지하는 방식과 가까워 모델링이 직관적이고 유지보수가 쉬움

## ==4==
- **a)** 유연성과 재사용성은 대체로 **비례** 관계 — 유연성이 높아질수록 재사용성도 함께 높아짐
  - **재사용성(reusability)**: 한 번 작성한 클래스/코드를 여러 곳에서 다시 활용할 수 있는 정도
  - **유연성(flexibility)**: 요구사항이 바뀌어도 코드를 적게 고치고 다양한 상황에 대응할 수 있는 정도
- **b)** 하지만 유연성을 높이면 단점도 생김
  - **성능 저하**: 보통 부품(개체)을 잘게 나누고 의존을 간접화하므로 개체 수·간접 호출이 늘어 성능에 불리해짐
  - **가독성 저하**: 추상화 계층과 부품이 늘어 코드를 이해하기 어려워짐
  - 즉, 유연성↑ → 재사용성↑ 이지만 성능·가독성과는 **트레이드오프**라 "유연성 높은 설계가 항상 최고는 아님"

## 5

### 5-a)
- **a) 컴파일 오류**
  - `secret`은 `private`이라 외부 클래스(`Program`)에서 직접 접근 불가
- **b)** public 메서드를 통해 접근
  ```
  전) System.out.println(base.secret);
  후) System.out.println(base.reveal());
  ```
  - (고친 경우 출력) `1`

### 5-b)
- **a) 문제 없음**
- **c) 출력** `3`
  - `shared`는 `protected`라 자식 클래스(`Derived`)에서 접근 가능 → 2 + 1 = 3

### 5-c)
- **a) 문제 없음**
- **c) 출력** `7`
  - `reveal()`은 public, 그 안에서 호출하는 `getSecret()`은 private이지만 **같은 클래스(`Base`) 안**에서의 호출이라 문제없음
  - secret=7 → 7

## 6
- **출력**
  ```
  M cheese=1 pepperoni=0
  L cheese=1 pepperoni=0
  S cheese=3 pepperoni=0
  ```
  - `new Pizza()` → `this("M")` → `this("M", 1)` → size=M, cheese=1, pepperoni=0
  - `new Pizza("L")` → `this("L", 1)` → size=L, cheese=1, pepperoni=0
  - `new Pizza("S", 3)` → size=S, cheese=3, pepperoni=0
  - `this()`로 다른 생성자에 위임하면 중복 초기화 코드를 한곳(가장 인자 많은 생성자)에 모을 수 있음

## 7
- **출력**
  ```
  pocu
  pocu
  POCU
  ```
  - `String`은 불변(immutable). `toUpperCase()`는 원본을 바꾸지 않고 **새 문자열을 반환**함
  - `s1.toUpperCase();`는 반환값을 무시했으므로 s1은 그대로 "pocu"
  - `s3 = s2.toUpperCase()`는 새 문자열 "POCU"를 받지만 s2 자체는 "pocu" 그대로

## 8
예시 답안

```java
// BankAccount.java
package academy.pocu.comp2500;

public class BankAccount {
	private String owner;
	private int balance;

	public BankAccount(String owner, int balance) {
		this.owner = owner;
		this.balance = balance;
	}

	public String getOwner() {
		return this.owner;
	}

	public int getBalance() {
		return this.balance;
	}

	public void deposit(int amount) {
		this.balance += amount;
	}

	public boolean withdraw(int amount) {
		if (this.balance < amount) {
			return false;
		}

		this.balance -= amount;
		return true;
	}
}

// Program.java
package academy.pocu.comp2500;

public class Program {

	public static void main(String[] args) {
		BankAccount account = new BankAccount("Kim", 1000);

		account.deposit(500);
		boolean ok = account.withdraw(2000);

		System.out.println(ok);
		System.out.println(account.getBalance());
	}
}
```

- 포인트
  - 멤버 변수(`owner`, `balance`)는 `private`(다이어그램의 `-`)으로 두어 캡슐화 유지
  - `withdraw()`는 잔액이 부족하면 상태를 바꾸지 않고 `false` 반환 → 개체가 항상 유효한 상태를 유지(setter 베스트 프랙티스와 같은 맥락)
  - 위 `main` 예시 출력: `false` / `1500` (입금 500 → 1500, 출금 2000은 잔액 부족으로 실패)

## ==9==
- **출력** `academy.pocu.comp2500.Dog`
  - `getClass()`는 변수의 정적 타입(`Animal`)이 아니라 **실제 개체의 타입**(`Dog`)을 돌려줌 (RTTI)
  - `getName()`은 패키지를 포함한 정규 클래스 이름을 반환

## ==10==
- **a)** 멤버 접근 제어자 표기
  - `+` : public
  - `-` : private
  - `#` : protected
  - (기호 없음: 패키지 접근)
- **b)**
  - **상속(is-a)**: 자식 클래스에서 부모 클래스로 향하는 **속이 빈 삼각형 화살표**로 표현
  - **컴포지션/has-a**: 다른 클래스를 멤버로 가지는(보유하는) 쪽에 **다이아몬드(◆)**를 붙여 표현 (삼각형 화살표와 구분됨)
    - **컴포지션**: 채워진 다이아몬드(◆)
    - **집합(aggregation)**: 속이 빈 다이아몬드(◇) → [[pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/index|모델링 7: 부품으로 분리해보기]] 참고
	  - [[pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/index|상속 vs 컴포지션: 메모리]] 참고


## ==11==
- **출력**
  ```
  14
  2
  6
  3.0
  3a12
  ```
  - `2 + 3 * 4`: 곱셈이 먼저 → 2 + 12 = 14
  - `17 % 5`: 나머지 → 2
  - `7 / 2 * 2`: 정수 나눗셈 7/2=3 → 3*2 = 6 (왼쪽부터 계산, 0이 아님에 주의)
  - `(double) (7 / 2)`: 괄호 안 정수 나눗셈 7/2=3 먼저 → double로 캐스팅 → 3.0
  - `1 + 2 + "a" + 1 + 2`: 왼쪽부터 → (1+2)=3 → "3"+"a"="3a" → "3a"+1="3a1" → "3a1"+2="3a12"
