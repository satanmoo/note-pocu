# 연습 문제 답지

각 문제의 풀이. `전)`/`후)`는 코드 수정 형식.

## 1

### 1-a)
- **a) 컴파일 오류**
  - `bar.x`는 `private` 필드라 `Program`에서 직접 접근 불가
- **b)**
  ```
  전) bar.x -= 10;
  후) bar.setX(bar.getX() - 10);
  ```
- **c) (고친 경우 출력)** `20`
  - 34 → (24) → setX(20) → 20

### 1-b)
- **a) 문제 없음**
- **c) 출력**
  ```
  15
  10
  ```
  - 초기 p1(5,10), p2(-1,-1), p3(10,0)
  - `p1.addTo(p2)`: p2 += p1 → p2(4,9)
  - `p2.add(p3)`: p2 += p3 → p2(14,9)
  - `p3.addTo(p1)`: p1 += p3 → p1(15,10)
  - p1 출력 → 15, 10

### 1-c)
- **a) 컴파일 오류** (두 곳)
  - `Baz`의 `super(x)`가 `private Bar(int x)` 호출 → 자식이 private 생성자 접근 불가
  - `Baz.magic()`의 `blackMagic("Rock")` → `Bar`의 private 메서드라 자식에서 호출 불가
- **b)**
  ```
  전) private Bar(int x) {
  후) protected Bar(int x) {

  전) private void blackMagic(String s) {
  후) protected void blackMagic(String s) {
  ```
- **c) (둘 다 고친 경우 출력)** `Rock Academy`
  - `Baz(10)` → `Bar(10)` → `this("POCU","Academy",10)` → s1=POCU, s2=Academy
  - `magic()`에서 `blackMagic("Rock")` → s1=Rock → `s1 + " " + s2`

## 2
- **출력**
  ```
  30
  20
  ```
  - `Foo(int value)` 생성자가 인자를 무시 → value는 초기값 10 유지
  - foo0: 10 → darkMagic → 30
  - bar2는 한 번도 건드리지 않음 → a = 20
  - `bar0.lightMagic(foo1)`은 bar0/foo1만 바꿈 (출력 대상 아님)

## 3
- OOP의 4대 특성: **추상화(abstraction), 캡슐화(encapsulation), 상속(inheritance), 다형성(polymorphism)**

## 4
public 필드 대신 getter/setter를 쓰면 좋은 이유 (예시 답안)
- 상속을 통한 다형성 구현
- 멤버 변수를 저장하지 않고 필요할 때마다 getter에서 계산
- setter에서 추가적인 로직 실행
	- 유효성 검사

## 5

### 5-a)
- **a) 문제 없음**
- **c) 출력**
  ```
  Jim
  Jim
  ```
  - `myName`이 **static**이라 모든 인스턴스가 공유함
  - "Greg" → "Bob" → setMyName("Jim") → 둘 다 "Jim"

### 5-b)
- **a) 컴파일 오류**
  - `static` 메서드 `darkMagic`에서 `this`를 사용할 수 없음
- **b)**
  ```
  전) this.x += increment;
  후) x += increment;
  ```
- **c) (고친 경우 출력)**
  ```
  10
  10
  ```
  - `x`가 static → A(3), A(6) 거쳐 6, darkMagic(4) → 10, 둘 다 10

### 5-c)
- **a) 문제 없음**
- **c) 출력** `3`
  - count: `new Foo(7)`→1, `setX(8)`→2, `getX()`→변화 없음, `increaseCount()`→3

## 6
- **출력**
  ```
  10
  10
  ```
  - `doSomething`에서 `foo1.m = foo2.m`(=10) 후 `foo2.m = foo1.m`(이미 10) → 두 개체 모두 10
  - 참조가 같은 개체를 가리키므로 메서드 안 변경이 그대로 반영됨 (값 교환 실패의 전형)

## 7
- **출력** `5`
  - `getInstance()`는 호출마다 `new Bar()`를 반환 → bar1, bar2는 서로 다른 개체 (싱글턴 아님)
  - `bar2.doSomething()`은 bar2만 10으로 만듦 → `bar1.getX()` = 5

## 8

### 8-a)
- **a) 문제 없음**
- **c) 출력**
  ```
  Animal Kevin
  Hi! I'm a dog!
  ```
  - `sayName()`은 Animal에서 상속, `introduce()`는 Dog 것

### 8-b)
- **a) 컴파일 오류**
  - 정적 타입이 `Animal`인데 `Animal`에는 `introduce()`가 없음
- **b)**
  ```
  전) Animal cat0 = new Cat("Honey");
  후) Cat cat0 = new Cat("Honey");
  ```
  - 또는 `((Cat) cat0).introduce();`
- **c) (고친 경우 출력)**
  ```
  Animal Honey
  Hi! I'm a cat!
  ```

### 8-c)
- **a) 런타임 오류** (ClassCastException)
  - 컴파일은 통과(`Animal` → `Dog` 캐스팅 허용)하나, 실제 개체는 `Cat`이라 `Dog`로 캐스팅 시 예외
- **b)** 실제 타입(Cat)에 맞게 캐스팅
  ```
  전) Dog dog1 = (Dog) animal0;
      dog1.introduce();
  후) Cat cat2 = (Cat) animal0;
      cat2.introduce();
  ```
  - (고친 경우 출력) `Hi! I'm a cat!`

### 8-d)
- **a) 런타임 오류** (ClassCastException)
  - 실제 개체는 `Dog`인데 `Cat`으로 캐스팅 → 예외
- **b)** 실제 타입(Dog)에 맞게
  ```
  전) Cat cat = (Cat) animal;
      cat.sayCatName();
  후) Dog dog = (Dog) animal;
      dog.sayDogName();
  ```
  - (고친 경우 출력) `Dog Rocky`

## 9
- **a) 문제 없음**
- **출력** `false`
  - `magic` 안의 재할당은 지역 매개변수만 바꿔 호출부 vector0/vector1엔 영향 없음
  - `==`는 참조 비교 → 서로 다른 개체라 `false`

## 10
- **a) 컴파일 오류** (두 곳)
  - `Rectangle` 생성자가 `super(name)`을 호출하지 않음 → 암시적 `super()`가 필요한데 `Shape`에 기본 생성자가 없음
  - `getArea()`에서 `this.p1.x` 등 → `Point`의 `x`, `y`가 private이라 `Rectangle`에서 직접 접근 불가
- **b)**
  ```
  전) public Rectangle(String name, Point p1, Point p2) {
          this.p1 = p1;
  후) public Rectangle(String name, Point p1, Point p2) {
          super(name);
          this.p1 = p1;

  전) return Math.abs(this.p1.x - this.p2.x) * Math.abs(this.p1.y - this.p2.y);
  후) return Math.abs(this.p1.getX() - this.p2.getX()) * Math.abs(this.p1.getY() - this.p2.getY());
  ```
- **c) (고친 경우 출력)** `12`
  - p1(1,5), p2(-2,1) → |1-(-2)| × |5-1| = 3 × 4 = 12

## 11
- **a) 문제 없음** (`Qux qux = new Bar()`는 유효한 업캐스트)
- **출력**
  ```
  Qux
  Foo
  Baz
  Bar
  ```
  - 상속 계층: `Qux ← Foo ← Baz ← Bar`
  - `new Bar()` → 생성자 체인이 위로 올라가 Qux부터 실행, 그 뒤 역순으로 출력

## 12
- **a) 문제 없음**
  - 내포 클래스 `B`와 바깥 클래스 `A`는 서로의 private 멤버에 접근 가능 (`b.x`, `b.doMagic()`, `B`에서 `z` 접근 모두 OK)
- **출력**
  ```
  5
  21
  ```
  - `a = new A(4)` → z=4
  - `doMagic(2,1)`: `b = new B(3)` → b.x=3 → `b.x += 2` → 5
  - `z *= b.x` → 4×5 = 20
  - `b.doMagic()` → `z++` → 21
  - 출력: b.x=5, z=21
