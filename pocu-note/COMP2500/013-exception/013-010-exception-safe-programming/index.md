---
aliases:
  - 예외로부터 안전한 프로그래밍
tags:
  - COMP2500
  - week12
---
# 예외로부터 안전한 프로그래밍

![](pocu-note/COMP2500/013-exception/013-010-exception-safe-programming/images/exception-safe-programming-1.png)

이전 강의에서 본 추측 3의 의도처럼 프로그램을 정상 상태로 회복할 수 있을까?
- [[pocu-note/COMP2500/013-exception/013-009-why-checked-exception-exists/index#checked exception 존재의의 추측 3|checked 예외의 존재의의 - 추측 3]] 참고

![](pocu-note/COMP2500/013-exception/013-010-exception-safe-programming/images/exception-safe-programming-2.png)

포인트 결제 연산
- 포인트 차감하기 연산 종료 후
- 재고 갱신 연산 종료 후
- 주문 넣기 연산 중 예외 발생

![](pocu-note/COMP2500/013-exception/013-010-exception-safe-programming/images/exception-safe-programming-3.png)
![](pocu-note/COMP2500/013-exception/013-010-exception-safe-programming/images/exception-safe-programming-4.png)

역순으로 undo 하게끔 구현하면 중간에 예외가 발생해도 상태가 망가지지 않음
- 이런 방식을 exception safe programming이라고 부르는데 상당히 귀찮고 어려움

할 수 있으면 하면 좋은데 귀찮고 어려움

![](pocu-note/COMP2500/013-exception/013-010-exception-safe-programming/images/exception-safe-programming-5.png)
![](pocu-note/COMP2500/013-exception/013-010-exception-safe-programming/images/exception-safe-programming-6.png)
![](pocu-note/COMP2500/013-exception/013-010-exception-safe-programming/images/exception-safe-programming-7.png)

모든 예외를 안전하게 처리하는 것은 현실적으로 불가능함

![](pocu-note/COMP2500/013-exception/013-010-exception-safe-programming/images/exception-safe-programming-8.png)

예외가 필요한지 제품 설계를 어떻게 하냐에 따라 달라지고, 비즈니스에 따라 달라짐
- 어떤 프로그램은 빨리 실패하게 만들고 복구해주는게 유리할 수 있음

심지어 프로그램으로 모든 것을 해결할 수 있는건 아님

결론적으로 모든 메서드에 대해서 예외 처리하는 것은 현실적으로 불가능함
- 사람의 집중력에는 한계가 있음
