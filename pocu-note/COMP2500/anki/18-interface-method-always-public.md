# 인터페이스의 메서드는 항상 public

노트 유형: **Cloze**

**Text**

주류 언어에서 인터페이스의 모든 메서드는 {{c1::public}} — 누구라도 보고 명령할 수 있는 동작이기 때문. C의 {{c2::헤더 파일 함수 선언(거의 모두 전역 함수)}}과 비슷하다고 보면 이해가 쉬움

- 비교: 추상 클래스의 추상 메서드는 {{c3::protected}}도 가능 (상속받는 클래스에서 호출·구현)

**Back Extra**

- 개념 상의 논의라 다른 의견도 있지만, 주류 OO 언어가 public으로 강제하니 따를 수밖에 없음
- 구현 클래스에서도 인터페이스의 메서드는 모두 public으로 구현해야 함 (생략하면 패키지 접근 수준이라 컴파일 오류)

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/010-interface/010-007-interface-access-modifier/
