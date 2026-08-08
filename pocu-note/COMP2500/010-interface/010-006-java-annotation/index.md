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

## Java 어노테이션

![](pocu-note/COMP2500/010-interface/010-006-java-annotation/images/java-annotation-3.png)

`@Override`는 컴파일 중에 처리하는 어노테이션

`@Deprecated`도 컴파일 중에 처리하는 어노테이션
