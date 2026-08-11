# 복사 생성자

노트 유형: **Cloze**

**Text**

복사 생성자: {{c1::같은 타입의 개체}}를 매개변수로 받아 복사하는 생성자 — C++에서 가져온 방법으로, Object.clone()보다 더 좋은 방법

- 깊은 복사 방법: 참조형 멤버 변수는 그 멤버의 {{c2::복사 생성자}}를 내부에서 호출해 새 개체를 만들어 대입 (바로 대입하면 참조 복사 → 얕은 복사)
- clone()보다 좋은 이유: {{c3::Cloneable 구현·super.clone() 호출·캐스팅}}이 전혀 필요 없는 그냥 생성자

**Back Extra**

- 코드 작성 예: 801-004-010의 Line 복사 생성자 문제 https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-010-clone-copy-constructor/

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/010-interface/010-013-code-example/
