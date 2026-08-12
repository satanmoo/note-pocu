# 의존성 주입(DI)

노트 유형: **Cloze**

**Text**

의존성 주입(DI): 의존하고 있는 클래스의 개체를 {{c1::외부에서 생성해서 넣어주는}} 기법 — 생성자의 매개변수로 전달하면 {{c2::생성자 주입}}, setter 함수로 넣어주면 {{c3::setter 주입}}

- setter 주입의 문제: {{c4::생성 시 개체의 상태를 유효하게 하는 캡슐화 원칙}}에 위배됨
- 얻는 것: 의존 대상의 내부 구현(생성)에 관여하지 않게 되어 loose coupling
- 잃는 것: {{c5::편의성}}(개체를 두 번 생성해야 함), 코드 자체가 문서라는 관점에서 의미와 안 맞을 수 있음(분리/합체 로봇이 아닌데 부품을 밖에서 조립)

**Back Extra**

- 용어 주의: DI Container를 줄여서 DI라고 부르기도 하고, dependency inversion도 DI로 불림 — 문맥으로 구분
- 코드 작성 예: 801-004-011의 Robot loose coupling 문제 https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-011-coupling-and-di/

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/011-interface-vs-implementation/011-004-dependency-injection/
