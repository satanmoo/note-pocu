---
aliases:
  - 늦은 바인딩 vs 이른 바인딩
tags:
  - COMP2500
  - week9
---
# 늦은 바인딩 vs 이른 바인딩

![](pocu-note/COMP2500/008-polymorphism/008-008-late-vs-early-binding/images/late-vs-early-binding-1.png)
![](pocu-note/COMP2500/008-polymorphism/008-008-late-vs-early-binding/images/late-vs-early-binding-2.png)

컴파일 중 결정
- 컴파일 후 바뀌지 않음

![](pocu-note/COMP2500/008-polymorphism/008-008-late-vs-early-binding/images/late-vs-early-binding-3.png)

빌드 중 함수 호출문이 jmp 명령어로 교체
- jmp의 피연산자로 어디로 이동할지 함수 주소값이 들어감
- 메모리의 코드 영역에 함수 주소값이 박히는 개념
