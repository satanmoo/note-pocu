# "program to an interface"의 올바른 의미

노트 유형: **Cloze**

**Text**

"program to an interface, not an implementation"에서 interface는 Java의 interface가 아니라 {{c1::부모 클래스의 다형적 메서드}}를 의미 — 함수 블랙박스(시그니처로 약속)에 다형성을 더한 것으로, 결론은 {{c2::다형성을 가진 일반화된 메서드 시그니처}}를 만들라는 것

- 이 문구가 곡해되는 방식: Java의 interface로 읽어서 {{c3::다형성}}을 빼놓고 "모든 건 인터페이스로"라고 해석함

**Back Extra**

- GoF 책의 제대로 된 상속 설명: 추상 클래스의 연산을 오버라이딩(다형성) + 추상 클래스에 없는 새로운 연산 추가 — SOLID에서 다시 배움

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/011-interface-vs-implementation/011-010-misunderstanding-interface/
