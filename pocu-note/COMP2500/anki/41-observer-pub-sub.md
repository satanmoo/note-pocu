# 옵저버 패턴과 pub-sub 패턴

노트 유형: **Cloze**

**Text**

옵저버 패턴: {{c1::여러 감시자(개체들)}}가 {{c2::하나의 감시 대상(개체)}}을 관찰하다가, 대상이 변하면 감시자들이 행동하는 패턴

- 요즘 명칭: 사실상 {{c3::pub-sub}} 패턴으로 부름 — 옵저버 패턴을 포함하는 더 넓은 개념
- 본질: 옵저버 패턴은 결국 {{c4::콜백 (함수의) 목록}} — 구독 등록은 콜백 등록이고, 대상이 변할 때 목록의 콜백을 다형적으로 호출

**Back Extra**

- 예: 핸드폰 푸시 알람, event-driven architecture
- LogManager(리스트로 로거 관리) 구조가 사실 옵저버 패턴 — LogManager가 pub, Logger들이 sub

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/012-design-patterns/012-020-observer-pattern-and-pub-sub-pattern/
