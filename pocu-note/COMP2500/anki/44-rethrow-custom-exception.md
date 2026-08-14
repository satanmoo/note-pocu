# rethrow와 커스텀 예외

노트 유형: **Cloze**

**Text**

예외 다시 던지기(rethrow): 아래(현재 함수)에서는 로그만 남기거나 일부만 해결하고 위(호출자)에서 마저 해결하게 할 때 — 반드시 {{c1::호출 스택을 유지}}하면서 던질 것. Java에서는 {{c2::catch한 예외 변수를 그대로 throw(throw e)}}하면 유지됨

- 커스텀 예외 만들기: {{c3::RuntimeException(또는 Exception)}} 클래스를 상속하고, 생성자에서 {{c4::super(message)}}를 호출해 부모를 초기화
- super(message)를 깜빡하면? 부모에 매개변수 없는 생성자가 있어 암시적 super()가 삽입되므로 {{c5::컴파일은 되지만 getMessage()가 null을 반환}}

**Back Extra**

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/013-exception/013-004-rethrow/
