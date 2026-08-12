# 가상 생성자 패턴

노트 유형: **Cloze**

**Text**

생성자는 {{c1::오버라이딩이 불가능}}해서 dynamic dispatch가 안 됨 → 가상(virtual)이 될 수 없음. 이를 흉내 내는 방법: 부모 클래스에 {{c2::개체 생성용 추상 메서드}}를 선언하고 각 자식 클래스가 오버라이딩해서 알맞은 구체 클래스의 개체를 생성 — 호출하는 쪽은 부모 타입으로 호출하므로 어떤 개체가 생성될지는 실행 중 dynamic dispatch로 결정, 마치 생성자가 가상인 것처럼 동작

- 그래서 팩토리 메서드 패턴의 다른 이름이 {{c3::가상 생성자(virtual constructor)}} 패턴

**Back Extra**

- 정적 팩토리 메서드(createOrNull)로는 다형적 구현 불가 — 정적 메서드는 전역 함수를 클래스에 감싼 것이라 abstract로 선언하면 컴파일 오류
- 코드 예: 801-004-014의 Menu/KoreanMenu/AmericanMenu 문제 https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-014-factory-method/

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/012-design-patterns/012-004-polymorphic-factory-method-pattern-2/
