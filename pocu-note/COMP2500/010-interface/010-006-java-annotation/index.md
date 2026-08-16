---
title: Java 어노테이션
aliases:
  - Java 어노테이션
tags:
  - COMP2500
  - week10
---
# Java 어노테이션

## 미구현 실수를 막기 위해 인터페이스를 반드시 사용할 필요는 없다

![](pocu-note/COMP2500/010-interface/010-006-java-annotation/images/java-annotation-1.png)

컴파일러에게 자식 클래스의 메서드가 오버라이딩함을 명시적으로 전달하면 됨
- C#, C++의 `override` 키워드

![](pocu-note/COMP2500/010-interface/010-006-java-annotation/images/java-annotation-2.png)

Java는 어노테이션을 사용
- `@Override` 어노테이션이 있으면 부모의 함수를 오버라이딩 한다는 의미
	- 부모에 같은 시그니처를 가진 함수가 없으면 컴파일 오류
		- 여기서 시그니처는 함수 이름, 매개변수 목록, 반환형

위 세 요소는 케이스로 외울 필요 없음 — 원리 하나로 도출됨:
- 호출부는 `obj.method(인자)`로 ==이름과 인자만 지정==할 수 있고 반환형을 지정할 방법이 없음 (반환값을 버리고 호출해도 됨) → ==메서드의 정체(identity) = 이름·매개변수 목록==
	- 그래서 반환형만 다른 두 메서드는 공존 불가 — 컴파일러가 "already defined" 중복 정의로 처리 ([[pocu-note/COMP2500/010-interface/010-009-implementing-multiple-interfaces/index|여러 인터페이스 구현하기]] 참고)
- `@Override`의 매칭은 이 정체로 부모 사슬(Object까지)을 대조 — 없으면 컴파일 오류 ("method does not override or implement a method from a supertype")
- 반환형은 정체가 아니라 ==무늬가 클라이언트에 한 약속== — 정체가 일치해 오버라이딩으로 확정된 뒤, 반환형이 호환되지 않으면 어노테이션과 무관하게 컴파일 오류 ("return type ... is not compatible")
	- 부모형 변수로 호출한 쪽은 부모의 반환형을 전제로 컴파일됐는데, 실행 중 자식 구현이 그 약속을 깨면 안 되기 때문 (리스코프 치환의 반환형 버전)
- 결과적으로 `@Override`를 붙이면 셋 중 무엇이 어긋나도 컴파일 오류 — 위 슬라이드 요약이 성립하는 이유

## Java 어노테이션

![](pocu-note/COMP2500/010-interface/010-006-java-annotation/images/java-annotation-3.png)

`@Override`는 컴파일 중에 처리하는 어노테이션

`@Deprecated`도 컴파일 중에 처리하는 어노테이션
