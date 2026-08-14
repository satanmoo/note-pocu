# try/catch/finally 실행 규칙

노트 유형: **Cloze**

**Text**

try/catch/finally 실행 규칙 3가지:

1. try 블록에서 예외가 발생하면 {{c1::발생 지점 이후의 try 코드는 실행되지 않고}} 예외 종류에 따라 catch로 분기
2. finally 블록은 {{c2::예외 발생 여부와 관계없이 항상 실행 — catch 블록에서 return을 해도 실행된 뒤 리턴}}
3. catch 블록이 여러 개면 {{c3::specific to general}} 순서로 작성 — 부모 예외 블록이 위에 있으면 자식 예외 블록은 도달 불가

**Back Extra**

- Exception 클래스는 최상위 예외 부모 — catch 문에 부모 클래스를 넣으면 자식 클래스 예외도 캐치함
- 리소스 정리(close)를 finally에 넣는 이유와 GC finalize 의존 금지는 801-004-018 서술형 참고: https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-018-exception-syntax/

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/013-exception/013-001-try-catch-finally/
