# 옵저버 패턴과 메모리 누수

노트 유형: **Cloze**

**Text**

옵저버 패턴이 매니지드 언어에서 메모리 누수를 만드는 주범인 이유: 구독자 변수에 null을 대입해도 {{c1::감시 대상의 구독자 목록이 여전히 참조를 가지고 있어}} 가비지 컬렉터가 수거하지 않음

- 해결법: {{c2::unsubscribe() 메서드로 구독자 목록에서 직접 제거}} — 문제는 등록한 곳을 전부 찾아 제거하는 것을 까먹기 쉬움

**Back Extra**

- 코드 문제(왜 GC가 못 지우는지): https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-017-chain-and-observer/

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/012-design-patterns/012-022-observer-pattern-and-memory-leak/
