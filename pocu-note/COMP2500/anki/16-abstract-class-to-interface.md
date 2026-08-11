# 추상 클래스를 인터페이스로 바꾸면 달라지는 것

**앞면**

추상 클래스를 인터페이스로 바꾸면 달라지는 것 3가지는? (선언, 상속 키워드, UML)

**뒷면**

1. 선언: `abstract class` → `interface`, 추상 메서드는 `abstract` 키워드·접근 제어자 없이 시그니처만 (언제나 `public`으로 간주)
2. 자식 클래스의 키워드: `extends` → ==`implements`== (Java 말고 다른 언어에서는 구분하지 않는 경우도 있음)
3. 클래스 다이어그램: 상속 선이 실선 → ==점선==

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/010-interface/010-004-change-abstract-class-to-interface/
