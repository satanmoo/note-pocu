---
aliases:
  - C 함수 포인터와의 비교
tags:
  - COMP2500
  - week9
---
# C 함수 포인터와의 비교

![](pocu-note/COMP2500/008-polymorphism/008-009-comparison-with-c-function-pointers/images/comparison-with-c-function-pointers-1.png)

`qsort()` 함수의 마지막 매개변수는 함수 포인터
- jmp 명령어로 빌드 중 어디로 이동할지 결정하는 것 불가능
- 실행 중 어떤 함수를 호출할지 알 수 있음

## Java의 다형성도 C의 함수 포인터와 유사함

![](pocu-note/COMP2500/008-polymorphism/008-009-comparison-with-c-function-pointers/images/comparison-with-c-function-pointers-2.png)

C 언어와 유사한 원리로 함수 포인터를 전달하는 방식을 언어 자체에서 제공하는게 OO 언어의 대표 Java

![](pocu-note/COMP2500/008-polymorphism/008-009-comparison-with-c-function-pointers/images/comparison-with-c-function-pointers-3.png)

다형적으로 작동할 수 있는 메서드를 **가상 메서드**라고 부름
- 부모 클래스에 메서드가 있고, 자식 클래스에서 구현을 바꿀 수 있는 메서드
	- 기본적으로 자바의 ==모든 메서드==는 *가상 메서드*
