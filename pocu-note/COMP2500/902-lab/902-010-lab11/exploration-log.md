`academy.pocu.comp2500.lab11.pocu` 패키지 내부 파일을 둘러보자

Enum 으로 부서 주어지고

커스텀 예외들이 주어지넹

일단 당장은 크게 중요한 점은 없어 보임

## 2.1 `App` 클래스의 `run()` 메서드를 구현한다

출력할 때 flush 필요


java에서 BufferedReader 클래스로 입력을 받는 방법
- 한 글자 읽기
	- "exit"도 읽어야하기 때문에 불가능

- 한 라인 읽기
	- 숫자, "exit" 모두 읽을 수 있음
		- 대신 숫자는 Parsing 필요

BufferedReader.readLine()
- 줄 단위로 잘라줌
	- \n
	- \r
	- \r\n
	- EOF
- 반환되는 문자열에는 줄바꿈 문자 포함되지 않음
- null 반환 가능
	- 스트림이 끝났는데 읽은 문자가 없을 경우
		- 터미널에서 사용자가 바로 EOF를 누르면 됨
		- 아무것도 안 치고 엔터 누르면 빈 문자열

`step` 변수 + switch 상태 기계로 스펙의 단계 번호를 직역
- [[pocu-note/COMP2500/902-lab/902-010-lab11/spec#2.1 App 클래스의 run() 메서드를 구현한다|스펙 2.1]]의 "순서가 틀려서도 안 됨" + "잘못된 입력이 들어왔다면 N번 단계로 돌아갑니다"가 이미 상태 전이표
- 단계 번호 == case 번호라 스펙 대조가 쉬움

잘못된 입력 처리를 처음엔 `InvalidInputException` 커스텀 예외로 설계했다가 제거
- POCU 표준: 외부 데이터 검증은 경계에서, 내부에서는 예외를 던지지 않으려 노력 — 잘못된 입력은 예외적 상황이 아니라 예상되는 경로
- 파싱 실패는 센티널 0으로 → `tryParseChoice()` (0은 어느 단계에서도 유효한 선택지가 아님)
- null을 반환하는 메서드는 OrNull 접미사 → `readLineOrNull()`

`run()`의 `throws IOException` 제거
- [[pocu-note/COMP2500/902-lab/902-010-lab11/spec#3. 본인 컴퓨터에서 테스트하는 법|스펙 3절]]의 하네스가 `main()`에서 `app.run(...)`을 그냥 호출 — `run()`이 checked 예외를 던지면 저 코드가 컴파일이 안 됨 (빌드봇 하네스가 같은 형태일 위험)
- `IOException`은 `readLineOrNull()` 안에서 잡아 null로 반환 — "입력이 더 이상 없다"로 취급해 EOF와 같은 종료 경로에 합류
	- 재시도(step = 1)로 처리하면 고장 난 스트림에서 `readLine()`이 계속 던져 무한 루프

EOF(null)는 'exit'과 동일하게 정상 종료
- `input.equals("exit")`를 null 체크 없이 쓰면 파이프 입력이 'exit' 없이 끝날 때 NPE

## 2.2 SafeWallet 클래스 구현하기

`OverflowException` ([[pocu-note/COMP2500/902-lab/902-010-lab11/spec#2.2.1 OverflowException 클래스를 구현한다|스펙 2.2.1]])
- `RuntimeException` 상속 + `String` 메시지 생성자
- `serialVersionUID`는 "상수는 모두 대문자" 규칙의 예외 — Java 직렬화 스펙이 이 이름을 고정하고 있어 바꾸면 기능이 깨짐

`deposit()` 오버라이딩의 오버플로우 판정식

```java
@Override
public boolean deposit(final int amount) {
    if (Integer.MAX_VALUE - super.getAmount() < amount) {
        throw new OverflowException("Balance overflow");
    }
    return super.deposit(amount);
}
```

- `balance + amount > MAX_VALUE`를 그대로 쓰면 판정식 자체가 오버플로우 — 이항해서 뺄셈 형태로
- `amount <= 0`이면 조건이 항상 거짓 → `super.deposit()`의 false 반환 경로가 유지됨

check-then-act는 atomic이 아님 (LLM 세션 토론)
- [[pocu-note/COMP2500/902-lab/902-010-lab11/spec#A.4 Wallet 클래스|스펙 A.4]]의 보장은 개별 메서드 단위 atomic — `getAmount()`와 `deposit()` 사이는 무방비. atomic한 부품을 조립해도 atomic한 기계가 되지 않음
- 같은 JVM + 같은 인스턴스 공유 + `Wallet`이 `this` 모니터로 동기화한다는 가정이면 `synchronized` 오버라이드로 같은 모니터에 올라탈 수 있음(client-side locking) — JCiP가 fragile로 분류: 부모의 동기화 정책이라는 구현 세부사항에 의존
- 이 실습 모델에선 그마저 불가 — 부서 지갑을 각 직원이 각자의 `new Wallet(user)` 개체로 접근하므로 JVM 모니터는 보호 범위가 안 맞음
- 진짜 답은 atomic해야 하는 로직을 atomicity가 구현된 계층 안으로: 라이브러리 내 검사(원래 올바른 설계), CAS류 원시 연산 + 재시도 루프, 락 노출
- 스펙이 `OverflowException`을 복구 불가·크래시 허용으로 정한 것([[pocu-note/COMP2500/902-lab/902-010-lab11/spec#2.2.3 App.run() 메서드 안에서 SafeWallet 사용한다|스펙 2.2.3]])과 결이 닿음

## 다듬기

`StringBuilder` 재사용
- `setLength(0)` — 길이만 리셋, capacity는 유지라 재할당 없음. `final` 변수여도 내부 상태 변경이라 OK
- case 레이블은 `{}` 없이는 스코프를 안 만듦 → case 1/4에 각각 `final StringBuilder sb`를 선언하면 중복 선언 컴파일 에러
- 루프 밖 1회 선언 + 메시지 만드는 case 시작마다 `setLength(0)`

리팩터링 중 낸 버그: 범위 검사의 부정이 뒤집힘
- `if (choice >= 1 && choice <= length) { step = 1; }` — 유효한 선택이 메뉴로 되돌아가고, 범위 밖 입력은 `values()[choice - 1]`까지 내려가 `ArrayIndexOutOfBoundsException`
- 검증 헬퍼를 인라인하면서 `!`를 빠뜨린 것 → 조건 자체를 뒤집어(`choice < 1 || choice > length`) 수정

case 7 — break를 finally 안으로 옮기면 안 됨
- finally가 break/return/continue로 끝나면 전파 중이던 예외가 소멸 (JLS 14.20.2)
- 이 코드에선 이론이 아님: catch의 환불 `deposit()`이 `SafeWallet`이라 `OverflowException`을 던질 수 있음 — finally의 break가 이걸 삼키면 크래시 나야 할 프로그램이 잔고 이상한 채 조용히 계속 돎
- 답: break를 try-finally의 "다음 줄"로 — 정상 종료면 break 도달, 예외 전파면 break 미도달로 그대로 크래시. break 3개 → 1개

```java
case 7:
    try {
        if (this.wallet.withdraw(this.product.getPrice())) {
            this.warehouse.removeProduct(this.product.getId());
        }
    } catch (final ProductNotFoundException ignored) {
        this.wallet.deposit(this.product.getPrice());
    } finally {
        step = 4;
    }
    break;
```

case 6 — `getProducts()`는 한 번만
- 범위 검사와 `get()`이 각각 `getProducts()`를 호출하면 두 호출 사이 목록이 바뀔 여지 ([[pocu-note/COMP2500/902-lab/902-010-lab11/spec#A.6 Warehouse 클래스|스펙 A.6]]도 메서드 단위 atomic만 보장)
- 한 번 받아온 스냅숏으로 검사와 조회를 같이

품절 경로 mock 확인
- `Warehouse` mock이 index 3 품절을 시뮬레이션 — Eraser 구매 시 `withdraw` 성공 후 `removeProduct`에서 [[pocu-note/COMP2500/902-lab/902-010-lab11/spec#A.8 ProductNotFoundException 클래스|ProductNotFoundException]] → `deposit` 환불 → 잔고 원복, 4번 단계 복귀 확인
- mock이 "다른 직원이 사감"을 흉내 내므로 목록에서 Eraser 자체도 사라짐

## 코딩 표준 검증

POCU Java 코딩 표준 문서 대조 (LLM 세션 수행)
- 위반 1 — 변수 가리기: case 5의 지역 `Product product`가 멤버 `this.product`를 가림. 허용 예외는 "멤버 변수와 생성자/setter 매개변수"뿐 → `currentProduct`로 개명
- 위반 2 — assert 소괄호: `assert false;` → `assert (false) : "invalid step";` + 표준 예시대로 default 끝에 break
- 경미 — catch 변수 `e` → `ex` (표준의 catch 예시가 `ex`, 네이밍 규칙도 `e` 같은 이름을 피하라 함)
- 부합 확인 — `readLineOrNull`(OrNull 규칙), 경계 검증 철학(예외 대신 반환값), switch default 필수 + 도달 불가 default의 `assert (false)`, `@Override`, 클래스 내 등장 순서

빌드봇 통과
