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

## 방법 4: 예외

![](pocu-note/COMP2500/013-exception/013-019-fix-and-exception/images/fix-and-exception-4.png)

앞의 강의 참고
- [[pocu-note/COMP2500/013-exception/013-001-try-catch-finally/index|try/catch/finally]] 참고
