# 실무에서 인터페이스의 용도

노트 유형: **Cloze**

**Text**

실무에서 인터페이스의 용도 2가지: {{c1::함수 포인터}} 흉내, {{c2::다중 상속}} 흉내 — 결국 핵심은 {{c3::다형성}}

- 다중 상속 흉내의 비용: 부모 클래스의 구현을 물려받는 게 아니라서 구현하는 클래스마다 {{c4::따로 구현}}해야 함 — 그래도 dynamic dispatch는 가능

**Back Extra**

- 예: IWearable, IMountable 인터페이스 타입 배열에 저장하고 다형적 호출 — 다중 상속이 지원됐다면 부모 클래스에 mount() 등을 한 번만 구현하고 상속받았을 것

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/010-interface/010-010-interface-and-multiple-inheritance/

