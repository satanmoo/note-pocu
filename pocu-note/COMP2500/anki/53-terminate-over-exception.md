# 종료가 크래시·예외보다 나은 이유

노트 유형: **Cloze**

**Text**

프로그램 종료(방법 2)의 우위:

- 크래시보다 나은 점: {{c1::정리(graceful shut-down)가 가능 — 저장 등을 하고 사용자에게 문제를 보여준 뒤 정상 종료}}
- "예외도 위로 던지면 JVM이 종료해주니 같다"는 주장의 문제: {{c2::호출자가 중간에 catch(swallow)하면 JVM까지 전파된다는 보장이 없음}} — 종료를 원하면 예외에 의존하지 말고 직접 종료해야 확실함
- 언어별로 실행 중인 프로그램을 안전하게 종료하는 방법이 있어 {{c3::반드시 main()까지 예외를 올려서 종료할 필요 없음}}

**Back Extra**

- 종합 반박 연습: 801-004-020의 "예외 = 종료" 반박 서술형 https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-020-error-handling/

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/013-exception/013-022-terminating-program-is-also-valid/
