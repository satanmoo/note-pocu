# Java 어노테이션과 @Override

노트 유형: **Cloze**

**Text**

@Override 어노테이션은 부모의 함수를 오버라이딩함을 컴파일러에게 명시 (C#, C++의 override 키워드에 해당) — 부모에 같은 시그니처의 함수가 없으면 {{c1::컴파일 오류}}가 나서, 오타가 {{c2::새 메서드 추가}}로 이어지는 조용한 버그를 방지

- 여기서 시그니처는 {{c3::함수 이름·매개변수 목록·반환형}}
- @Override처럼 컴파일 중에 처리하는 또 다른 어노테이션 예: {{c4::@Deprecated}}

**Back Extra**

- 미구현·오타 실수를 막기 위해 인터페이스를 반드시 사용할 필요는 없음 — @Override로도 막을 수 있음

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/010-interface/010-006-java-annotation/
