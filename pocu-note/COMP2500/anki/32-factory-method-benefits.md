# 팩토리 메서드 패턴의 장점 3가지

노트 유형: **Cloze**

**Text**

팩토리 메서드 패턴의 장점 3가지:

1. {{c1::클라이언트는 생성할 개체(내부)를 몰라도 됨}} — "250ml"가 아니라 "스몰"만 고르면 됨 (규격 enum)
2. {{c2::생성 오류 시 null 반환 가능}} — 생성자는 반환형이 없어 예외를 던질 수밖에 없는데, 예외보다 null 반환이 개념상 맞음
3. {{c3::가상 생성자 패턴(다형성)}} — 어떤 구체 클래스의 개체가 생성될지 실행 중에 결정

**Back Extra**

- 생성을 팩토리 메서드로만 하도록 생성자는 private(또는 패키지) 접근 제어자로 막음

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/
