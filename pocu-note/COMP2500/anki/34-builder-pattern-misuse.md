# 빌더 패턴의 오용

노트 유형: **Cloze**

**Text**

필수값이 있는 개체를 빌더 패턴으로 만들면 오용 — withXxx()처럼 메서드 이름을 명확히 해도 {{c1::메서드를 호출 안 하는(설정 누락) 실수}}를 막을 수 없고, 누락된 값이 기본값(0)으로 설정되어 {{c2::생성 시 개체의 상태가 유효해야 한다는 캡슐화}}에 위배됨 — 원래 이 보장 때문에 {{c3::생성자}}를 사용하는 것

- StringBuilder가 올바른 빌더인 이유: 어떤 순서·횟수로 append해도 중간 상태가 항상 유효하고, {{c4::toString()이 완성품(String 개체)을 반환}}

**Back Extra**

- 오용 코드 예 (컴파일·실행 잘 되는 조용한 버그):

Employee robert = new EmployeeBuilder(1)
        .withAge(31)
        .withName("Robert", "Lee")
        .build();
// withStartingYear() 호출 누락 → yearStarted가 0인 채로 생성 (로버트가 서기 0000년 입사)

- 올바른 빌더 예: new StringBuilder().append("a").append("b").toString() — 어느 단계에서 멈춰도 유효, 완성품은 toString()으로
- 서술형 연습: 801-004-015의 "올바른 빌더 vs 오용" 5문장 문제 https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-015-builder-pattern/

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/012-design-patterns/012-007-misusing-builder-pattern/
