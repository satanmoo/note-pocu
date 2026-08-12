# 디커플링이 적합한 곳

노트 유형: **Cloze**

**Text**

단순한 구조에서 디커플링의 실효성이 낮은 이유: 고치다 보면 {{c1::컴파일 에러 덕분에 구조 변경이 어렵지 않음}}

- 커플링이 진짜 문제가 되는 곳: {{c2::복잡한 시스템}}, 그리고 변경이 불가능한 상황 = {{c3::남의 라이브러리(내 소스코드가 아닌 경우)}}

**Back Extra**

- C의 함수 포인터도 디커플링의 좋은 예 — 인터페이스의 규약(함수 시그니처)만 맞으면 어떤 구현이든 허용

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/011-interface-vs-implementation/011-006-where-decoupling-fits/
