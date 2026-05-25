---
aliases:
  - "코드보기: 클래스 정보 찾기"
tags:
  - COMP2500
  - week5
---
# 코드보기: 클래스 정보 찾기

![](pocu-note/COMP2500/005-inheritance/005-015-code-example/images/code-example-1.png)

패키지 이름 찾기

![](pocu-note/COMP2500/005-inheritance/005-015-code-example/images/code-example-2.png)

패키지 이름을 포함한 전체 이름 찾기

![](pocu-note/COMP2500/005-inheritance/005-015-code-example/images/code-example-3.png)

메서드 리스트 찾기

![](pocu-note/COMP2500/005-inheritance/005-015-code-example/images/code-example-4.png)

조상 클래스로 부터 상속한 메서드도 포함해서 가져옴
- [[pocu-note/COMP2500/005-inheritance/005-013-class-info-and-object-class/index#Object|Object 클래스]] 부터 포함

![](pocu-note/COMP2500/005-inheritance/005-015-code-example/images/code-example-5.png)

현재 클래스에서 선언한 메서드만 가져오기

![](pocu-note/COMP2500/005-inheritance/005-015-code-example/images/code-example-6.png)

특정 매개변수를 받는 메서드 찾기
- 매개변수에 "add"가 메서드 이름
- 매개변수에 `Vector.class` 가 특정 타입의 매개변수
	- `Vector` 타입을 매개변수로 받는 메서드 검색
- 오버로딩 상황에서 유용한 기능

![](pocu-note/COMP2500/005-inheritance/005-015-code-example/images/code-example-7.png)

모든 멤버 변수를 가져오기
- private 접근 제어자가 붙어도 가져옴

![](pocu-note/COMP2500/005-inheritance/005-015-code-example/images/code-example-8.png)

부모 클래스도 구할 수 있음
- `Vector`클래스의 경우 명시적으로 `extends`를 사용해 상속 받지 않음
- 따라서 `Object`가 바로 위 부모 클래스


