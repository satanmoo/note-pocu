# checked/unchecked 예외의 구분과 규칙

노트 유형: **Cloze**

**Text**

Java 예외 2종류의 구분 기준(상속 관계):

- unchecked 예외: {{c1::RuntimeException을 상속}}하는 예외 — 컴파일러가 처리 여부를 확인하지 않음
- checked 예외: {{c2::Exception을 상속하되 RuntimeException은 상속하지 않는}} 예외 — 컴파일러가 처리 여부를 확인(check)

checked 예외를 던지는 메서드의 의무 2가지 중 하나: {{c3::메서드 안에서 catch 블록으로 처리}} 또는 {{c4::throws 절로 메서드 시그니처에 명시}} — 명시하면 {{c5::호출자에게 같은 의무가 전파}}됨 (안 지키면 컴파일 오류)

- checked가 막아주는 것: {{c6::어디서 어떤 예외가 발생했는지 알기 어려운 상황 — throws가 시그니처에 명시되어 코드에서 드러남}} (unchecked는 콜스택을 조사해서 확인해야 함)

**Back Extra**

- RuntimeException은 Exception을 상속받으면서 컴파일러가 확인하는 기능을 무시하는 특수한 존재
- catch에서 로그만 남기고 다시 던지면(throw e) 처리한 것이 아님 — throws 절 필요
- 컴파일 오류 메시지: "unreported exception X; must be caught or declared to be thrown"
- checked 실례: Object.clone()의 CloneNotSupportedException — 의무 사슬 코드 문제: https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-010-clone-copy-constructor/

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/013-exception/013-008-java-checked-exception/
