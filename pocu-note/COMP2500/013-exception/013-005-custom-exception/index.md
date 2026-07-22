---
aliases:
  - 나만의 예외 만들기
tags:
  - COMP2500
  - week12
---
# 나만의 예외 만들기

![](pocu-note/COMP2500/013-exception/013-005-custom-exception/images/custom-exception-1.png)

상속을 이용하자
- `super`로 부모 클래스 초기화하고

![](pocu-note/COMP2500/013-exception/013-005-custom-exception/images/custom-exception-2.png)

자식 클래스들의 생성자에서 `super`로 `RuntimeException`의 생성자를 호출해야 함
- 컴파일 에러? → 아님
	- `RuntimeException`에는 매개변수 없는 생성자가 있어서 `super(message)`를 생략해도 컴파일러가 암시적으로 `super()`를 삽입해줌 → 컴파일 됨
	- 대신 메시지가 설정되지 않아 `getMessage()` 메서드가 `null`을 반환

![](pocu-note/COMP2500/013-exception/013-005-custom-exception/images/custom-exception-3.png)

유저 이름으로 비교하고 못 찾으면 예외 던짐
- 좋은 코드라면 예외를 던지기보다 `null`을 반환하는게

## C# vs Java 예외

![](pocu-note/COMP2500/013-exception/013-005-custom-exception/images/custom-exception-4.png)
![](pocu-note/COMP2500/013-exception/013-005-custom-exception/images/custom-exception-5.png)

Java에서 `RuntimeException`을 사용하는 예가 많음

![](pocu-note/COMP2500/013-exception/013-005-custom-exception/images/custom-exception-6.png)

물론 자바에서도 `Exception` 클래스를 상속해도 됨
- 옛날에는 `Exception` 클래스를 많이 사용했음

![](pocu-note/COMP2500/013-exception/013-005-custom-exception/images/custom-exception-7.png)

C#의 `Exception` 클래스는 Java의 `RuntimeException` 클래스와 동일함
- 그럼 Java의 `Exception` 클래스는 뭐가 다른가?
