Canvas 개체를 초기화할 때 2차원 배열이 필요함
- x,y 위치의 픽셀을 저장하는 용도
	- 리스트(동적 배열)이 편함

생성자에서 - 너비와 높이는 음수가 아니라고 가정해도 좋습니다. 때문에 assert 처리

스펙의 아래 조건 때문에 drawPixel 메서드에서 매개변수 char 의 유효성은 예외가 아니라 assert 처리 ([[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#전반적인 규칙|전반적 규칙]] 9~11)
1. `char`형 인자는 모두 화면에 출력 가능한 ASCII 문자라고 가정하세요.
2. 출력 가능한 ASCII 문자의 범위는 32부터 126입니다. \[32, 126]
3. 캔버스는 어떤 경우에도 출력 불가능한 ASCII 문자를 가지고 있으면 안 됩니다.
- 근거: 규칙 9가 "유효하지 않은 char가 들어오는 상황" 자체를 배제 → 방어(예외) 대신 assert로 가정 명시 ([[pocu-note/COMP2500/habit-log|습관 로그]] "일어날 수 없는 상황을 방어하는 코드를 쓰지 않는다")
	- 처음엔 규칙 10·11만 보고 예외처리로 판단했다가 규칙 9를 보고 정정 → checked vs unchecked 고민도 같이 소멸 (던질 예외가 없음)
- 규칙 11이 실제로 시험받는 곳: char 인자 없이 픽셀 값을 바꾸는 [[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#2.1.4 increasePixel() 메서드를 구현한다|increasePixel]]('~' 126에서 증가) / [[pocu-note/COMP2500/901-assignmnet/901-004-assignment-4/spec#2.1.5 decreasePixel() 메서드를 구현한다|decreasePixel]](' ' 32에서 감소)
	- 이 경계는 스펙이 boolean 반환으로 처리 방식을 이미 고정 → 여기도 예외 아님

하지만 매개변수 x,y는 오류 상황에 대한 처리가 필요하지 않나?
- x,y 범위가 width, height 범위를 벗어날 수 있음 — 스펙에 x,y에 대한 가정 없음 (스펙의 "가정" 문장은 규칙 9의 char, 2.1.1의 너비/높이 둘뿐)
- char와 반대 방향: "이 상황을 만들 수 있는 코드가 존재하는가?" → 있음 → assert 대상 아님, **예측 가능한 오류 상황 = 기능의 일부** ([[pocu-note/COMP2500/013-exception/013-015-error-vs-exceptional-situation/index|오류 상황, 예외 상황]])
- "여러분이 위 기능들을 `Canvas`라는 이름의 클래스 하나에 모두 구현하면, 다른 동료가 각 메서드를 GUI 도구 키트(GUI toolkit)에 연결해 둔다고 하니 이 부분은 걱정하지 마세요." >> GUI toolkit 도 외부 라이브러리
	- increasePixel, decreasePixel 에서 boolean 반환하니 013-017 에서 본 "남에게 문제를 알려주는 방법"
		- 즉 GUI too니lkit도 "남"으로 취급

그렇다면 4가지 오류 처리 방법 중에 무엇을 고를 것인가?

**결정: 수정 — 사전 검사 후 범위 밖이면 그리지 않고 진행(클리핑)** ([[pocu-note/COMP2500/013-exception/013-016-four-ways-to-handle-errors/index|4가지 오류 상황 처리법]] 소거)
- 예외 탈락: 클라이언트가 catch할지 rethrow할지 모르는 "폭탄 돌리기", 순위 최하위 ([[pocu-note/COMP2500/013-exception/013-023-ranking-of-four-error-handling-methods/index|4가지 처리법의 순위]]) + 범위 밖 입력은 "예외적인 경우"가 아니라 일상적 입력 오류 ([[pocu-note/COMP2500/013-exception/013-014-use-exception-only-for-exceptional-cases/index|예외적인 경우에만 예외 사용]])
- 종료 탈락: 종료의 자리는 "예측했지만 고치기 어려운 상황" ([[pocu-note/COMP2500/013-exception/013-024-handling-predictable-situations/index|예측 가능한 상황의 처리법]]) — 픽셀 하나 때문에 프로그램 종료는 과잉
- 무시 탈락: 무시(→크래시)는 그 상황을 버그로 분류할 때의 길 — 위에서 예측 가능한 오류 상황으로 분류했으므로 모순
- 수정 채택: "예측한 상황이고 안전하게 고칠 수 있으면 고쳐야 함", "수정은 미리 오류 상황을 검사해서 바꾸는 것" — 안 그리고 넘어가면 캔버스 상태가 그대로 유효(규칙 11 불변식 유지)라 안전 조건도 충족

클리핑(clipping) vs 클램프(clamp)
- **클리핑**: 범위 밖 좌표를 검사해서 **그리지 않음** — 호출자의 의도를 왜곡하지 않고 거절. 실제 래스터 API(HTML Canvas 등)도 화면 밖 그리기는 클리핑
- **클램프**: 범위 밖 좌표를 경계값으로 **끌어와서 그림** (예: x=-1 → x=0) — 엉뚱한 위치에 그려 오류를 가림. [[pocu-note/COMP2500/habit-log|습관 로그]] "clamp가 불변식을 가림"(Lab10)의 재판이라 금지

drawPixel이 void인데 "그냥 안 그림"으로 끝나도 되나? → 됨, 이것도 수정
- 무시와의 차이는 **검사의 존재**: 검사 없이 진행하면 무시(→크래시/좀비), 검사하고 의도적으로 거절하면 수정
- void라 실패를 알릴 반환 통로는 없지만, 클라이언트가 getWidth()/getHeight()로 사전 확인할 수 있으니 계약으로 성립
