---
aliases:
  - 코드로 본 다형성의 의미
tags:
  - COMP2500
  - week9
---
# 코드로 본 다형성의 의미


![](pocu-note/COMP2500/008-polymorphism/008-005-polymorphism-in-code/images/polymorphism-in-code-1.png)

## 겉보기에는 같은 형

![](pocu-note/COMP2500/008-polymorphism/008-005-polymorphism-in-code/images/polymorphism-in-code-2.png)

부모 클래스 변수에 자식 개체를 대입할 수 있음
- 상속 (is-a 관계)
	- 반대로 자식 클래스 변수에 부모 개체 대입은 컴파일 에러
	- 당연히 상속 관계가 아닌 형제(?)관계 등은 대입하면 컴파일 에러

![](pocu-note/COMP2500/008-polymorphism/008-005-polymorphism-in-code/images/polymorphism-in-code-3.png)

다형성의 선수 조건은 상속
- 부모 자료형 변수에 대입
- 함수의 부모 자료형 매개변수에 대입

## 개체들에 내리는 동일한 명령

![](pocu-note/COMP2500/008-polymorphism/008-005-polymorphism-in-code/images/polymorphism-in-code-4.png)

부모 클래스에 메서드 시그니처를 명시해야 함
- 그렇지 않으면 부모 클래스 변수에 메서드가 없어서 ==컴파일 오류== 발생

![](pocu-note/COMP2500/008-polymorphism/008-005-polymorphism-in-code/images/polymorphism-in-code-5.png)

오버라이딩
- 자식 클래스에서 부모 클래스의 동일한 시그니처를 가진 메서드의 내용을 변경(덮어씀)

## 오버라이딩은 선택사항

![](pocu-note/COMP2500/008-polymorphism/008-005-polymorphism-in-code/images/polymorphism-in-code-6.png)

오버라이딩은 선택 사항임
- 상속에서 부모 동작 그대로 사용해도 괜찮음

## 복습 퀴즈

![](pocu-note/COMP2500/008-polymorphism/008-005-polymorphism-in-code/images/polymorphism-in-code-7.png)

### 1)

![](pocu-note/COMP2500/008-polymorphism/008-005-polymorphism-in-code/images/polymorphism-in-code-8.png)

int 형을 매개변수로 받는 print는 오버라이딩
### 2)

![](pocu-note/COMP2500/008-polymorphism/008-005-polymorphism-in-code/images/polymorphism-in-code-9.png)

double 형을 받는 변수는 부모의 함수를 그대로 사용
- 오버라이딩은 선택사항
