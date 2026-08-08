---
title: 프록시 패턴의 현대화 예
aliases:
  - 프록시 패턴의 현대화 예
tags:
  - COMP2500
  - week12
---
# 프록시 패턴의 현대화 예

![](pocu-note/COMP2500/012-design-patterns/012-017-modern-proxy-pattern-example/images/modern-proxy-pattern-example-1.png)

`Image` 클래스
- 로딩 상태를 보여주는 메서드 추가
	- `load()` 메서드 추가
		- 외부에서 로드하라고 동작 지시할 수 있음
		- 내부에 캐시 로직이 있음
		- 생성 시 로드 되는 것도 아니고, 그릴 때 로드되는 것도 아니고, 외부에서 호출 시 로드
		- 즉시 로딩 X, 지연 로딩 X, 요즘 방법 O
	- `unload()` 메서드
		- 마찬가지
	- `draw()` 메서드는 모두 로딩됐다는 가정하에 호출
		- 이전에는 `draw()` 메서드 호출 시 지연 로딩 했음

![](pocu-note/COMP2500/012-design-patterns/012-017-modern-proxy-pattern-example/images/modern-proxy-pattern-example-2.png)

새로 추가한 멤버 함수는 클라이언트를 위함
- 클라이언트는 로딩 상태를 확인하고, 로딩도 직접 제어할 수 있음
	- 이렇게 상태에 따라 개체를 사용하는 방식을 상태머신이라고 부름

![](pocu-note/COMP2500/012-design-patterns/012-017-modern-proxy-pattern-example/images/modern-proxy-pattern-example-3.png)

멤버 변수로 이 로딩 스크린에 필요한 이미지들을 가짐
- 직접 이미지를 가지는게 아니라, 이미지 키 같은거로 가지고 있다고 생각하면 됨

`update()` 메서드를 필요한 이미지 멤버 변수의 크기가 0이 될 때까지 반복 호출
- 필요한 이미지를 모두 로딩했으면 상태관리자(스택 기반)에서 이 로딩 스크린 개체를 제거
- 이미지를 로딩할 때 마다 `requiredImages` 멤버 변수에서 0번 인덱스의 이미지 제거

![](pocu-note/COMP2500/012-design-patterns/012-017-modern-proxy-pattern-example/images/modern-proxy-pattern-example-4.png)

반드시 캡슐화가 좋은건 아닌 사례
- 외부에서 명확히 알 수 있도록 하는게 좋을 수도 있음
