---
aliases:
  - 인터페이스의 접근 제어자
tags:
  - COMP2500
  - week10
---
# 인터페이스의 접근 제어자

![](pocu-note/COMP2500/010-interface/010-007-interface-access-modifier/images/interface-access-modifier-1.png)

추상 클래스의 추상 메서드는 `protected` 키워드 가능
- 상속 받는 클래스에서 호출 및 구현 가능

![](pocu-note/COMP2500/010-interface/010-007-interface-access-modifier/images/interface-access-modifier-2.png)

주류 언어에서 인터페이스의 모든 메서드는 `public`
- 헤더 파일의 함수 선언은 전역적인 것과 유사하다고 개념적으로 이해할 것

![](pocu-note/COMP2500/010-interface/010-007-interface-access-modifier/images/interface-access-modifier-3.png)
![](pocu-note/COMP2500/010-interface/010-007-interface-access-modifier/images/interface-access-modifier-4.png)

인터페이스 자체가 패키지 접근 제한을 가짐
- 인터페이스에 선언한 추상 메서드는 항상 `public`으로 간주

![](pocu-note/COMP2500/010-interface/010-007-interface-access-modifier/images/interface-access-modifier-5.png)

`ConsoleLogger` 클래스는 `public` 접근 제어자를 가정
- 외부인 `academy.pocu.server` 패키지에서 개체 생성할 수 있음

`ConsoleLogger` 클래스에서 `log()` 메서드를 오버라이딩하면서 `public` 접근 제어자를 붙였음
- 외부에서 `log()` 메서드 호출 가능

`academy.pocu.server.Receiver` 클래스에서 `import academy.pocu.ILoggable;`로 임포트 불가능
- `ILoggable` 인터페이스는 패키지 접근 제어자이기 때문

`academy.pocu.server.Receiver` 클래스는 `academy.pocu` 패키지에 속하지 않음
- `processData()` 메서드의 매개변수로 `ILoggable` 인터페이스를 사용하려고 하면 컴파일 오류 발생
	- `ILoggable` 인터페이스는 패키지 접근 제어자이기 때문

인터페이스를 내부 용도로 사용하고 외부에 보여주고 싶지 않을 때 패키지 접근 제어자를 사용
- 여기서 중요한 것은 패키지 접근 제어자가 붙은 인터페이스를 상속한 클래스의 접근 제어자는 별개로 적용
	- `ConsoleLogger` 클래스가 `public` 접근 제어자를 가진 것
