# 예외 사용 원칙

노트 유형: **Cloze**

**Text**

예외를 {{c1::제어 흐름용}}으로 사용하지 말 것 — {{c2::goto}}와 개념이 같고 오히려 더 hack

- 예외를 오류 상황에만 써야 하는 이유: 예외가 오류 상황이라는 전제로 {{c3::모든 툴이 개발됨(예외 중단점 등)}} — 모두가 동의하는 개념대로 써야 하고, 어기면 협업에서 남이 디버깅할 때 민폐

**Back Extra**

- 나쁜 예: 재귀 콜스택에서 한 번에 빠져나오려고 예외 사용 (반환값을 쓸 것)
- Integer.parseInt()는 실패 시 무조건 예외라 분기용으로 쓰면 제어 흐름 — boolean을 반환하는 tryParseInt()로 감싸 캡슐화 (코드 작성 문제: https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-020-error-handling/)

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/013-exception/013-013-no-exception-for-control-flow/
