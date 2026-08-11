# 인터페이스 자체의 접근 제어자

노트 유형: **Cloze**

**Text**

인터페이스 자체는 {{c1::패키지}} 접근 제어자로 선언할 수 있음 — 내부 용도로 쓰고 외부에 보여주고 싶지 않을 때. 이때 외부 패키지에서 인터페이스 형을 임포트·사용하면 {{c2::컴파일 오류}}

- 단, 그 인터페이스를 구현한 클래스의 접근 제어자는 {{c3::별개(public 가능)}} — 외부 패키지는 구현 클래스를 임포트해서 사용 가능

**Back Extra**

- 패키지 범위 인터페이스여도 안에 선언한 추상 메서드는 여전히 public — 인터페이스 형 그 자체를 외부에서 못 쓰는 게 전부
- 외부 패키지에서는 인터페이스 무늬를 쓸 수 없으므로 매개변수·변수 타입도 구현 클래스 타입으로 받아야 함 (코드 예: https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-008-interface-basics/)

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/010-interface/010-007-interface-access-modifier/
