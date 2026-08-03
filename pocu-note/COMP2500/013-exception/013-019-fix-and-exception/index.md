---
aliases:
  - "'수정'과 '예외' 방법"
tags:
  - COMP2500
  - week12
---
# '수정'과 '예외' 방법

## 방법 3: 수정

![](pocu-note/COMP2500/013-exception/013-019-fix-and-exception/images/fix-and-exception-1.png)

미리 검사하고 오류 상황이라면 수정
- UX 관점에서는 그냥 수정하는 것보다 유저에게 다시 입력하라고 요청하는게 좋음

![](pocu-note/COMP2500/013-exception/013-019-fix-and-exception/images/fix-and-exception-2.png)

이렇게 검사하고 고치는 "방법 3"을 OO 정신이 아니라고 배척하는 사람들이 있음
- 모든 것을 예외로 하자는 사람들

![](pocu-note/COMP2500/013-exception/013-019-fix-and-exception/images/fix-and-exception-3.png)

단점으로 고치기 때문에 처음 문제 발생 상황을 알기 어려움

파일을 읽었을 때 없는 파일이 마치 빈 파일인 것처럼 취급되는 상황
- 빈 파일일 때 빈 문자열을 반환하고, 못 찾았을 때도 빈 문자열을 반환하기 때문

### 수정의 본질 (정리)

수정이 고치는 대상은 잘못된 입력이 아니라 **오류 상황을 만난 프로그램의 진행**
- 피호출자는 외부에서 온 잘못된 입력 자체를 고칠 수 없음 (없는 파일을 만들어낼 수 없음)
- `divisor` 변수를 1로 바꾸는 것도 목적은 0-나눗셈 크래시 없이 프로그램을 계속 진행시키는 것
- 즉 수정 = 미리 검사해서 프로그램이 안전하고 유효한 상태로 계속되게 하는 **정의된 행동**

수정은 단일 동작이 아니라 스펙트럼 — 그 안에 서열이 있음
- **조용한 치환** (`divisor = 1`): 슬라이드가 소개하자마자 단점을 명시함 — 처음 문제 발생 상황을 알기 어려움 (없는 파일 ≈ 빈 파일 구분 불가)
	- 치환이 성립하는 경우는 내 앱 내부의 정책 결정일 때 ("0이면 1로 간주"를 앱 소유자가 정한 경우)
- **거부 + 통보** (사용자에게 다시 요청): 슬라이드 스스로 "이보다 나은 해법"이라고 함
- [[pocu-note/COMP2500/013-exception/013-023-ranking-of-four-error-handling-methods/index|4가지 처리법의 순위]]에서 수정이 상위권인 근거도 "수정하고 클라이언트에게 뭐가 문제인지 **알려주면** 되니까 객관적" — 통보가 조건절에 들어 있음

## 방법 4: 예외

![](pocu-note/COMP2500/013-exception/013-019-fix-and-exception/images/fix-and-exception-4.png)

앞의 강의 참고
- [[pocu-note/COMP2500/013-exception/013-001-try-catch-finally/index|try/catch/finally]] 참고
