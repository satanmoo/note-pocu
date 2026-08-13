# 책임 연쇄 패턴의 "책임"

노트 유형: **Cloze**

**Text**

책임 연쇄 패턴에서 책임이란: {{c1::한 개체가 처리하면 책임을 지고, 그 뒤의 개체들은 처리할 기회를 받지 못하는 것}} — 우선순위에 따라 기회를 주는 것이지 무조건 기회를 주는 것이 아님

- 처리했든 안 했든 다음 개체에게 무조건 기회를 주는 구현(위키피디아 로거 예, 리스트+for 문)은 {{c2::책임 연쇄가 아님}}
- 책임을 구현하려면 {{c3::next 멤버 변수}}를 사용할 수밖에 없음 — 내가 처리하면 연쇄를 중단해야 하므로

**Back Extra**

- 올바른 구현의 핵심 — 무조건 연쇄를 else if로 수정:

if (logLevels.contains(severity)) {
    log(msg);
} else if (this.next != null) {
    this.next.message(msg, severity);
}

- 잘못된 설명이 웹에 많이 돌아다님 (위키피디아 예시도 무조건 연쇄라 엄밀히는 책임 연쇄가 아님)
- 코드 문제: https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-017-chain-and-observer/

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/
