---
title: 잘못 사용하는 빌더 패턴
aliases:
  - 잘못 사용하는 빌더 패턴
tags:
  - COMP2500
  - week12
---
# 잘못 사용하는 빌더 패턴

![](pocu-note/COMP2500/012-design-patterns/012-007-misusing-builder-pattern/images/misusing-builder-pattern-1.png)
![](pocu-note/COMP2500/012-design-patterns/012-007-misusing-builder-pattern/images/misusing-builder-pattern-2.png)
![](pocu-note/COMP2500/012-design-patterns/012-007-misusing-builder-pattern/images/misusing-builder-pattern-3.png)

`robert` 나이가 1인데?

![](pocu-note/COMP2500/012-design-patterns/012-007-misusing-builder-pattern/images/misusing-builder-pattern-4.png)
![](pocu-note/COMP2500/012-design-patterns/012-007-misusing-builder-pattern/images/misusing-builder-pattern-5.png)

이건 컴파일러가 못 잡죠

![](pocu-note/COMP2500/012-design-patterns/012-007-misusing-builder-pattern/images/misusing-builder-pattern-6.png)

그래서 메서드를 빌더 패턴으로 각각 따로 만들면?
- 메서드 명으로 실수할 여지를 줄임
	- 근데 이건 잘못된 해결법임

![](pocu-note/COMP2500/012-design-patterns/012-007-misusing-builder-pattern/images/misusing-builder-pattern-7.png)

이렇게 메서드 이름을 명확하게 해도 `withStartingYear()` 메서드를 호출 안 하는 실수는 막을 수 없음

![](pocu-note/COMP2500/012-design-patterns/012-007-misusing-builder-pattern/images/misusing-builder-pattern-8.png)

`int` 초기값인 0으로 설정
- 개체 생성 시 개체의 상태가 유효해야 한다는 캡슐화에 문제가 생김
	- 원래 이 때문에 생성자를 사용했었음

![](pocu-note/COMP2500/012-design-patterns/012-007-misusing-builder-pattern/images/misusing-builder-pattern-9.png)

- `StringBuilder`는 올바르게 빌더 패턴을 구현함
	- [[pocu-note/COMP2500/012-design-patterns/012-005-builder-pattern-and-stringbuilder/index|빌더 패턴과 StringBuilder]] 참고

## 복습 퀴즈

![](pocu-note/COMP2500/012-design-patterns/012-007-misusing-builder-pattern/images/misusing-builder-pattern-10.png)
