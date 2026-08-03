Canvas 개체를 초기화할 때 2차원 배열이 필요함
- x,y 위치의 픽셀을 저장하는 용도
	- 리스트(동적 배열)이 편함

"생성자에서 - 너비와 높이는 음수가 아니라고 가정해도 좋습니다." 
- 스펙 링크 참조
- assert 로 가정 표현하기

## drawPixel

스펙의 아래 조건 때문에 drawPixel 메서드에서 매개변수 char 의 유효성은 예외가 아니라 assert 처리 ([[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#전반적인 규칙|전반적 규칙]] 9~11)
1. `char`형 인자는 모두 화면에 출력 가능한 ASCII 문자라고 가정하세요.
2. 출력 가능한 ASCII 문자의 범위는 32부터 126입니다. \[32, 126]
3. 캔버스는 어떤 경우에도 출력 불가능한 ASCII 문자를 가지고 있으면 안 됩니다.
- 근거: 규칙 9가 "유효하지 않은 char가 들어오는 상황" 자체를 배제함
	- 방어(예외) 대신 assert로 가정 명시 ([[pocu-note/COMP2500/habit-log|습관 로그]] "일어날 수 없는 상황을 방어하는 코드를 쓰지 않는다")

하지만 매개변수 x,y는 오류 상황에 대한 처리가 필요하지 않나?
- x,y 범위가 width, height 범위를 벗어날 수 있음 — 스펙에 x,y에 대한 가정 없음 (스펙의 "가정" 문장은 규칙 9의 char, 2.1.1의 너비/높이 둘뿐)
- char와 반대 방향: "이 상황을 만들 수 있는 코드가 존재하는가?" → 있음 → assert 대상 아님, **예측 가능한 오류 상황 = 기능의 일부** ([[pocu-note/COMP2500/013-exception/013-015-error-vs-exceptional-situation/index|오류 상황, 예외 상황]])
- "여러분이 위 기능들을 `Canvas`라는 이름의 클래스 하나에 모두 구현하면, 다른 동료가 각 메서드를 GUI 도구 키트(GUI toolkit)에 연결해 둔다고 하니 이 부분은 걱정하지 마세요." — GUI toolkit 도 외부 라이브러리
	- [[pocu-note/COMP2500/013-exception/013-017-avoiding-errors-is-best/index|오류 상황을 피하는 게 최고]] 참조

그렇다면 4가지 오류 처리 방법 중에 무엇을 고를 것인가?

**결정: 수정 — 사전 검사 후 범위 밖이면 그리지 않고 진행(클리핑)**
- 예외 탈락: 클라이언트가 catch할지 rethrow할지 모르는 "폭탄 돌리기", 순위 최하위 ([[pocu-note/COMP2500/013-exception/013-023-ranking-of-four-error-handling-methods/index|4가지 처리법의 순위]]) 
- 종료 탈락: 종료는 "예측했지만 고치기 어려운 상황"에  적절함
	- [[pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/index|예측 가능한 상황의 처리법]] 
		- 픽셀 하나 때문에 프로그램 종료는 과잉
- 무시 탈락: 언제 무시가 좋은지 강의에서 명백하게 설명하지는 않음
- 수정 채택: "예측한 상황이고 안전하게 고칠 수 있으면 고쳐야 함", "수정은 미리 오류 상황을 검사해서 바꾸는 것" 
	- 범위 밖이면 안 그림
	- 캔버스 상태가 그대로 유효(규칙 11 불변식 유지)

클리핑(clipping) vs 클램프(clamp)
- **클리핑**: 범위 밖 좌표를 검사해서 **그리지 않음** — 호출자의 의도를 왜곡하지 않고 거절. 
	- 실제 래스터 API(HTML Canvas 등)도 화면 밖 그리기는 클리핑
- **클램프**: 범위 밖 좌표를 경계값으로 **끌어와서 그림** (예: x=-1 → x=0)
	- 엉뚱한 위치에 그려 호출자의 입력 오류를 가림. [[pocu-note/COMP2500/habit-log|습관 로그]] 
		- "clamp가 불변식을 가림"(Lab10)과 공통 습관("조용한 보정이 오류를 은폐")이라 금지

불변식 vs 매개변수의 유효 범위
- **불변식**: 객체 **상태**가 어떤 연산 후에도 항상 만족하는 성질. Canvas의 불변식은 규칙 11(모든 픽셀은 언제나 \[32, 126])과 너비/높이 생성 후 불변
- **매개변수 유효 범위**: 입력에 대한 전제조건. 좌표의 유효 범위는 0 이상, width/height **미만** (x=width는 범위 밖 — 경계값 검산)
- 범위 밖 x,y가 들어와도 Canvas 불변식은 안 깨짐 — 깨진 건 호출자의 요청이지 캔버스 상태가 아님
- 그래서 클램프가 가리는 대상도 다름: Lab10에선 내 상태의 불변식 위반을 가렸고, 여기선 호출자의 전제조건 위반을 가림

drawPixel이 void인데 "그냥 안 그림"으로 끝나도 되나? → 됨, 이것도 수정에 속함
- 무시와의 차이는 **검사의 존재**: 검사 없이 진행하면 무시(→크래시/좀비), 검사하고 의도적으로 거절하면 수정

## getPixel

x,y는 39line의 매개변수 유효 범위와 동일한 범위를 가짐. 매개변수의 범위에 대한 오류 상황을 어떻게 대응할 것인가?

"이미 예측한 상황 + 고치기 쉬운 경우"

고치기 쉬운 경우인가?
- "픽셀 읽기"는 고치기 어렵다고 보기에는 약함

[[pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/index#고치기 쉬운 경우 (수정 또는 예외 + 수정)|예상 + 고치기 쉬운 경우]]에 따르면 수정 또는 예외

수정을 택한 경우 외부에 어떻게 오류 상황을 알릴 것인가?
getPixel의 동작은 어떤 위치의 픽셀을 읽는 것
- 잘못된 위치가 외부에서 오는 경우 오류 코드를 반환
- `'\0'`은 규칙 11 덕분에 절대 정당한 픽셀일 수 없는 대역 외 값이라 **오류 코드로 성립함**
- 픽셀의 초기값 `' '`는 오류 코드로 부적합
	- 픽셀의 초기값인지 오류인지 외부에서 객관성이 떨어짐

정리하면 "수정" 방식대로 구현하면 미리 유효한 위치인지 검사 후 계속 프로그램이 진행되며 외부에는 오류 코드를 통해 알림
- "예외 + 수정"으로 구현할 이유는 없음 잘못된 위치를 필터링하는 조건이 명백하기 때문에 굳이 IndexOutOfBoundsException을 처리해 오류 코드로 수정하는 일은 번거로움

"예외" 방식대로 구현하면 잘못된 위치인지 검사하지 않고 IndexOutOfBoundsException이 발생하도록 두는 것
- 예외는 전파되기 때문에 외부에서는 오류 상황을 알 수 있음

"예외" 방식을 택하면 내부에 두 갈래가 있음
1. **예외 + 수정**: getPixel 내부에서 try-catch로 IndexOutOfBoundsException을 잡고 오류 코드 `'\0'` 반환
2. **그냥 던지기(전파)**: 검사도 catch도 없이 IndexOutOfBoundsException이 경계 밖으로 전파되도록 둠
	- 이게 순수 "예외" 계약 — 코드로는 아무것도 추가하지 않고, 컨테이너(ArrayList)의 검사가 계약을 구현함

따라서 문제는 결국 둘 중 하나를 고르는 것으로 좁혀짐: **오류 코드 반환(수정) vs 예외 전파(예외)** 
- 어느 쪽이 구현이 편한지가 아니라 호출자에게 무엇이 보이는지를 기준으로 비교. 판정 기준은 강의가 순위 매길 때 쓴 명백함(객관성) ([[pocu-note/COMP2500/013-exception/013-023-ranking-of-four-error-handling-methods/index|4가지 처리법의 순위]])

명백함 비교
- 호출자가 성실하게 검사하는 경우: 동점 — 검사한 `'\0'` = 잡은 예외 = "위치가 잘못됐다"는 같은 정보
- 검사를 안 한 경우에 갈림:
	- 오류 코드: `'\0'`이 신호 없이 데이터로 흘러감 → 좀비 ([[pocu-note/COMP2500/013-exception/013-012-beware-of-wrong-exception-guides/index#^zombie-program|좀비 프로그램]]). 의미가 문서에만 존재하는데 [[pocu-note/COMP2500/013-exception/013-007-why-exception-handling-fails/index#^people-dont-read-comments|사람들은 문서를 잘 읽지 않음]]. 증상이 원점에서 먼 곳에서 나타남 — 013-019 방법 3의 단점("처음 문제 발생 상황을 알기 어려움")과 동일 구조
	- 예외: 반환값이 없으니 진행 자체가 불가 → 위반 원점에서 타입 이름(IndexOutOfBoundsException = 오류 내용 자체)과 스택트레이스와 함께 드러남
- 013-023이 '무시'의 순위를 결과로 움직인 것(크래시면 "크래시나기 때문에 명백", 좀비면 최하)을 대입하면: 오류 코드의 최악 = 좀비(최하) < 예외의 최악 = 원점 크래시("명백") → **명백함에서 예외 우세**

강의는 예외의 객관성을 일관되게 최하로 봄 (폭탄 돌리기 — 클라이언트가 catch할지 rethrow할지 모름)

빌드봇을 돌려봐야 알 수 있음
- 오류 코드 반환
- IOOBE 던지기

### getPixel 오류 코드와 캡슐화

캡슐화 반론: ArrayList의 IndexOutOfBoundsException을 그대로 전파하면 GUI toolkit을 연결하는 동료에게 내부 구조가 노출되는 것 아닌가 
- 013-013의 "TryParse = 캡슐화"를 응용

이 때문에 오류 코드 반환하는 구현으로 먼저 테스트 해보기

## increasePixel, decreasePixel

[[pocu-note/COMP2500/013-exception/013-013-no-exception-for-control-flow/index|013-013]]에서 본 parseInt의 예와 다르게 위치 검사 조건은 명백함
- 분기 정보(위치가 유효한가)를 width/height 비교로 직접 계산 가능

스펙이 반환형을 boolean으로 고정 → C# `TryParse()`가 **지향하는 API 형태**(예외 없이 반환값으로 분기)와 같음

x,y 오류 상황은 세 메서드가 같고 통보 채널만 다름: 
- drawPixel(void — 통로 없음, 클리핑) 
- getPixel(오류 코드 반환) 
- increase·decreasePixel(boolean — 스펙이 통보 채널을 boolean으로 확정)

false의 의미가 두 가지로 병합됨 (스펙 시그니처가 강제)
1. 위치가 범위 밖 
2. '~'(126)이라 증가 불가 — 호출자는 boolean만으로 둘을 구분 불가
- 우리가 고를 수 있는 지점 아님 — [[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#2.1.4 increasePixel() 메서드를 구현한다|2.1.4]]가 "증가되었다면 true, 아니면 false"로 이미 병합해 둠

## toUpper, toLower

반환형이 void ([[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#2.1.6 toUpper() 메서드를 구현한다|2.1.6]], [[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#2.1.7 toLower() 메서드를 구현한다|2.1.7]]) → drawPixel과 같은 계약
- 위치가 범위 밖 = 예측 가능한 오류 상황 → 사전 검사(isOutOfBounds) 후 아무것도 하지 않고 진행 (43line의 "수정" 그대로 — 검사가 있으므로 무시가 아님)
- 통보 통로는 없지만 getWidth()/getHeight()로 사전 회피 가능한 것도 동일

두 검사는 성격이 다름 — 구분해서 기록
- **위치 검사** = 오류 상황 처리 (수정/클리핑)
- **알파벳 검사** = 오류 상황 아님 — '5', '$' 같은 비알파벳에는 "변경할 대소문자가 없음" = 그대로 두는 게 자연스러운 의미론. 거절이 아니라 **정의역 전체에서 정의된 연산**

내장 함수 `Character.toUpperCase()`/`toLowerCase()` 채택 근거
1. 알파벳 검사가 내장 함수의 의미론에 이미 흡수됨 — 비문자는 그대로 반환하므로 "알파벳이면 변형" 단계를 따로 쓸 필요 없음
2. 전반적 규칙 5 "public static 메서드를 사용할 수 없습니다"는 **내 클래스에 선언 금지**로 해석 — 근거는 선례: 빌드봇 통과한 Assignment1/3 코드가 `Math.max()`, `Integer.MAX_VALUE` 사용 중이고, 스펙이 제공한 Registry 자체가 `String.format()`을 호출 (호출 금지 해석이면 제공 코드부터 위반)
3. `Character.toUpperCase(char)`는 `String.toUpperCase()`와 달리 locale 무관 — 환경에 따라 결과가 달라질 여지 없음
4. \[32, 126] 입력에서 바뀌는 건 a-z ↔ A-Z뿐이라 결과도 항상 \[32, 126] → 규칙 11 불변식 유지
- 검증: `-ea` 스모크 테스트로 'a'→'A'/'A' 유지/'A'→'a', 비알파벳('5', '~') 무변화, 범위 밖 무동작 확인

## fillHorizontalLine, fillVerticalLine

반환형 void ([[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#2.1.8 fillHorizontalLine() 메서드를 구현한다|2.1.8]], [[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#2.1.9 fillVerticalLine() 메서드를 구현한다|2.1.9]]) → drawPixel 계약 그대로
- 사전 검사 후 범위 밖이면 아무것도 하지 않음(클리핑), char는 assert (규칙 9 가정)
- 단, 전제조건이 픽셀이 아니라 **행/열의 존재**: fillHorizontalLine은 y만, fillVerticalLine은 x만 검사

처음 구현은 `isOutOfBounds(0, y)`로 검사 
- 이건 "픽셀 (0, y)가 유효한가"라는 **다른 명제**
 → `y < 0 || y >= height` 직접 검사로 교체 (fillVerticalLine은 x 대칭)

## clear, getDrawing

두 메서드는 인자가 없음 → 지금까지의 x,y 오류 상황 논의가 처음으로 등장하지 않음 (검사할 입력 자체가 없음)

clear ([[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#2.1.10 clear() 메서드를 구현한다|2.1.10]]): "지운다"의 정의부터
- "지워진 상태" = 생성 직후 상태 — 근거는 [[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#2.1.1 생성자를 구현한다|2.1.1]] "각 픽셀의 초기값은 `' '`" + 3.1 테스트 8번 "캔버스를 지우고 모든 문자가 지워졌는지 확인"
- 구현은 `fillHorizontalLine(y, DEFAULT_PIXEL)` 행 단위 재사용 — 별도 루프 중복 없음

getDrawing ([[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#2.1.11 getDrawing() 메서드를 구현한다|2.1.11]]): 
- 스펙 예제(10×10, '\*'/'$'/'&' 3픽셀)를 문자열 **전체 비교**로 재현 → 일치. "마지막 `+` 이후 줄 바꿈" 포함
- 개행은 `System.lineSeparator()` — 선례로 결정: Lab7 ReadingList(빌드봇 통과한 내 코드)와 Assignment3 SimulationVisualizer가 동일 방식

## 2.2 undo/redo — 커맨드 패턴 도출

커맨드 패턴은 강의 노트에 없음 — 스펙에서 직접 도출해야 함

옵저버 패턴과 커맨드 패턴은 다름
1. 무엇을 개체화했는가 — 옵저버는 **반응자**(Logger, IFundingCallback — 오래 살며 여러 사건에 반복 반응), 커맨드는 **연산 한 건**("여기에 이 문자를 그려라"가 인자까지 품은 개체)
2. 호출이 지나간 뒤 무엇이 남는가 — 옵저버는 없음(일회성 통지, 히스토리 개념 없음), 커맨드는 **히스토리에 남는 것이 존재 이유**

인터페이스 정의는 거의 스펙을 그대로 옮기면 됨

### 2.2.2 구체 클래스 구현하기

모든 구체 클래스가 공통적으로 가져야할 동작
- execute
- undo
- redo

한 번 execute 하면 더 이상 execute 할 수 없음

undo 후 redo 무한 교대 가능
- 스펙에서 "이미 `execute()` 메서드를 호출한 커맨드에서 다시 `execute()`를 호출할 경우 커맨드는 처리가 되지 않아야 합니다. 예를 들어 'A' 캔버스에 어떤 커맨드 개체를 이미 실행(execute)했다면 이 개체의 `execute()` 메서드를 다시 호출해봐야 아무 소용이 없습니다." 라고 execute에 대한 제한만 걸었지 undo, redo에 대한 제한은 명시적으로 걸지 않음
- 테스트 케이스 C09에서 execute 후 undo 없이 redo 실패
- 테스트 케이스 C10에서 redo 후 undo 성공

위키의 "익명 L14 테스트"에서 다음과 같은 결론 도출
- execute 시 redo 대기 중인 command 소멸

exec com0~com6 -> undo com6 -> undo com5
- com5~com6가 redo 대기 중
-> exec com7
- com5~com6 소멸(?)
	- 모두 사라지는지 com6만 사라지는 지 모름
-> exec com8
-> redo
- redo 시 아무일도 일어나지 않음
-> exec com9 -> redo
- redo 시 아무 일도 일어나지 않음
-> exec com10~com13 -> redo()
- redo 시 아무 일도 일어나지 않음
-> exec com14

위키의 "익명 L16 테스트"에서 다음과 같은 결론 도출
- execute 시 redo 대기 중인 command 소멸

exec com0~com1 -> undo com1~com0
- com0~com1 redo 대기
-> exec com2
- com0, com1 redo 대기열에서 소멸(?)
	- 모두 사라지는지 com6만 사라지는 지 모름
-> redo
- 아무 일도 일어나지 않음
-> exec com3~com6 -> redo
- undo 한 것이 없으니 아무 일도 일어나지 않음
-> exec com7 -> undo com7
- com7 redo 대기
-> exec com8
- com7 redo 대기열에서 소멸

-> exec com9

위키의 "CK 테스트"에서 다음과 같은 결론 도출
- execute 후 redo 할 작업이 사라져도, undo 목록은 남아있음
- com4는 undo 목록에 빠지고 redo 목록에 들어가고, execute 때문에 redo 목록에서 빠짐

exec com1(Decrease(2,0)—공백이라 실패) → exec com2(Draw(4,0,'=')) → redo(거절)
→ exec com3(FillV(4,'Z')) → exec com4(ToUpper(3,1)—승낙, 무효과) → undo(com4)
→ exec com5(ToLower(2,2)—승낙, 무효과)   ← com4 소멸
→ undo(com5) → undo(→ com3이어야 함!)  
→ exec com6(Clear) → ... 

Qt — `QUndoStack::push()` 그리고 Java Swing — `javax.swing.undo.UndoManager.addEdit()` 참고 de facto 컨벤션은 아래와 같음
- execute 성공 시 redo 목록 지워버림
	- "새로운 커맨드가 캔버스에 적용되었다면"
	- execute 메서드의 반환형이 boolean
- 스펙의 2.2.3.6 도 동일한 내용

그러면 ICommand 를 상속받는 공통의 클래스(상태를 포함)가 필요한가?
- execute 했는지
- 2.2.1에 "이미 `execute()` 메서드를 호출한 커맨드에서 다시 `execute()` 를 호출할 경우 커맨드는 처리가 되지 않아야 합니다. 예를 들어 'A' 캔버스에 어떤 커맨드 개체를 이미 실행(execute)했다면 이 개체의 `execute()` 메서드를 다시 호출해봐야 아무 소용이 없습니다."
	
대신 2.2.3에 CommandHistoryManager가 redo, undo 등 여러 command들의 실행 순서에 대한 책임을 짐
- Command는 한 번만 execute 할 수 있으니, Command 개체에서 상태를 가지고 있는 것이 옳음

CommandHistoryManager 클래스를 먼저 구현하고 돌아오자

#### 2.2.3 CommandHistoryManager 클래스 구현하기

##### 2.2.3.2 execute() 메서드를 구현한다

execute 할 때 이미 실행된 커맨드라면 ICommand 인터페이스의 execute 메서드의 시그니처에 따라 실패를 반환할 것이고 이를 통해 CommandHistoryManager은 성공/실패 여부를 확인할 수 있음

execute 성공 여부에 따라 다음이 결정
- undo 스택에 넣을지 말지 결정
	- 스택 확정
	- 테스트 케이스, 업계 de facto 참조
- redo 스택을 비울지 말지 여부가 결정됨

##### 2.2.3.5 undo() 메서드를 구현한다

"가장 최근에 취소된" 커맨드 적용
- 스택 활용

##### 2.2.3.6 redo() 메서드를 구현한다

## 다시 구체 커맨드 클래스 그리기로 돌아가기

### 1.  캔버스에 있는 픽셀 하나에 지정된 문자를 그리라고 명령하는 커맨드

DrawPixelCommand

픽셀 위치 지정, 지정된 문자
- 생성자의 인자로 받기

redo, undo 도 ICommand 인터페이스를 상속하는 공통의 클래스가 상태로 가지고 있는 것이 맞나?
- redo,undo가 CommandHistoryManager을 정상적으로 거쳐서 실행되면 필요없음

일단 빌드봇으로 검증

만약 커맨드 자체를 독립적으로 실행하는 테스트를 수행한다면 ICommand 인터페이스를 상속하는 공통의 클래스 BaseCommand가 상태를 관리하기

```java
package academy.pocu.comp2500.assignment4;  
  
public abstract class BaseCommand implements ICommand {  
    private boolean bExecuted;  
  
    protected boolean isExecuted() {  
        return this.bExecuted;  
    }  
  
    protected void setExecuted(final boolean bExecuted) {  
        this.bExecuted = bExecuted;  
    }  
}
```

Canvas 클래스에 구현된 getPixel 메서드에서 반환하는 에러 픽셀은 사용되지 않음
- canExecute로 좌표에 대한 검증을 하기 때문
	- 시스템 내부의 데이터는 모두 정상이라고 가정
		- 013-017 참고
- 에러 픽셀은 외부 GUI Toolkit에 오류 상황을 알리기 위함

### 2. 캔버스에 있는 한 픽셀 저장된 아스키 값을 1만큼 증가시키라고 명령하는 커맨드, 캔버스에 있는 한 픽셀 저장된 아스키 값을 1만큼 감소시키라고 명령하는 커맨드

실행 시 Canvas 클래스에 increasePixel, decreasePixel 메서드 호출
- boolean 을 반환하도록 메서드 시그니처가 스펙에 고정되어 있음
- 성공/실패 여부를 Command 클래스의 execute에서 사용

### 3. 캔버스에 있는 한 픽셀을 대문자로 변경하라고 명령하는 커맨드, 캔버스에 있는 한 픽셀을 소문자로 변경하라고 명령하는 커맨드

하나의 픽셀을 바꾸는 커맨드는 공통으로 묶을 수 있음

### 4. 캔버스에 있는 한 행을 모두 지정된 문자로 채우라고 명령하는 커맨드, 캔버스에 있는 한 열을 모두 지정된 문자로 채우라고 명령하는 커맨드, 캔버스를 깨끗이 지우라고 명령하는 커맨드

... 별 내용 없어서 생략

## 빌드봇은 커맨드 개체를 직접 만들어 호출하는 듯함

> C06_UndoBeforeExecute — execute() 메서드를 호출 **전에** undo() 메서드를 호출할 때 동작이 올바른지 확인합니다.

execute 메서드 호출 전에 undo 호출 시 실패하도록 가드 필요함

> C09_RedoBeforeUndo — undo() 호출 **전에** redo()를 호출하면 동작이 올바른지 확인합니다.
> C11/C12_BasicUndoOrder/BasicRedoOrder — 잘못된 순서로 undo/redo를 호출해도 **캔버스가 망가지지 않는지** 확인합니다.

undo, redo 순서도 가드로 방어가 필요함
- BaseCommand에 flag 상태 추가하도록 수정
- undo 여부로 가드
	- undo는 undo 했으면 불가능
	- redo는 undo 했을 때만 가능

## OverdrawAnalyzer

Canvas를 상속
- 픽셀값을 바꾸는 동작을 변경

히스토리를 어떻게 저장하는가?
- 연결 리스트의 2차원 리스트
	- 덮어쓸 때만 연결 리스트에 추가하도록 가드를 Canvas 클래스에서 쓰기 동작하는 메서드를 오버라이딩 할 때 꼭 넣어야해
- 덮어쓴 횟수는 연결 리스트의 길이

```java
public void clear() {  
    for (int y = 0; y < this.height; ++y) {  
        fillHorizontalLine(y, DEFAULT_PIXEL);  
    }
}
```

위 함수는 오버라이딩 할 필요 없음
- 오버라이딩한 fillHorizontalLine을 dynamic dispatch로 호출하기 때문에 덮어쓰기 히스토리 recordIfUpdated 메서드 기반으로 동작함

## 캔버스가 망가지지 않는지 확인하는 테스트

- ##### C11_BasicUndoOrder
    
- ##### C12_BasicRedoOrder
    
- ##### D11_BasicUndoOrder
    
- ##### D12_BasicRedoOrder
    
- ##### E11_BasicUndoOrder
    
- ##### E12_BasicRedoOrder
    
- ##### F11_BasicUndoOrder
    
- ##### F12_BasicRedoOrder
    
- ##### G11_BasicUndoOrder
    
- ##### G12_BasicRedoOrder
    
- ##### H11_BasicUndoOrder
    
- ##### H12_BasicRedoOrder
    
- ##### I11_BasicUndoOrder
    
- ##### I12_BasicRedoOrder
    
- ##### J10_BasicUndoOrder
    
- ##### J11_BasicRedoOrder

A = DrawPixelCommand(0, 0, 'A'); // oldA = ' '
A.execute(canvas)
B = DrawPixelCommand(0, 0, 'B'); // oldB = 'A'
B.execute(canvas)
A.undo() // B보다 먼저 undo로 잘못된 순서

잘못된 순서에서 캔버스가 파괴되면 안 됨

이를 해결하기 위해 Command 개체는 자신이 바꾼 결과를 가지고 있어야함