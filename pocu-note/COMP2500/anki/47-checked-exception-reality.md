# checked 예외의 존재의의와 근래 트렌드

노트 유형: **Cloze**

**Text**

checked 예외의 존재의의(진짜 의도): {{c1::예외 상황이 발생하면 프로그램을 정상적으로 회복하라}}는 것 — 그래서 처리 안 하면 컴파일 오류까지 냄

- 현실의 문제 2가지: 처리 안 하고 계속 위로 던지면 모든 호출자의 {{c2::throws 절에 예외가 누적}}되어 너무 길어지고, 대충 출력만 하고 넘어가는 {{c3::swallow}}를 하면 예외를 던지는 의미가 없음
- 회복 시도(exception safe programming — 역순 undo)는 귀찮고 어려워서 {{c4::모든 예외를 안전하게 처리하는 것은 현실적으로 불가능}}
- 근래 트렌드: checked를 catch해서 {{c5::unchecked로 바꿔 던지거나}}, 아예 {{c6::회복하지 않고 실패하면 종료·수정·재시작}}하는 방향

**Back Extra**

- 포프샘 의견: 기본 동작이 unchecked이고 프로그래머가 원할 때 checked인 것이 더 좋음
- 예외 세분성: 회복하려면 문제를 특정해야 해서 예외 클래스를 세분화 — 요즘은 구체적으로 던지되 main의 Exception 한 방에 잡는 절충, 극단적으로는 RuntimeException + 구체적 메시지 주장도 있음

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/
