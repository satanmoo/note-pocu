---
title: 즉시로딩 vs 지연로딩
aliases:
  - 즉시로딩 vs 지연로딩
tags:
  - COMP2500
  - week12
---
# 즉시로딩 vs 지연로딩

![](pocu-note/COMP2500/012-design-patterns/012-016-eager-loading-vs-lazy-loading/images/eager-loading-vs-lazy-loading-1.png)

즉시 로딩은 처음 실행할 때 로딩하기 때문에 그 이후 이미지 데이터가 바뀌면 최신 데이터가 아니게 됨
- 캐시를 사용해도 캐시 리프레시를 하지 않는 이상 최신 데이터가 아닐 수 있음
	- 즉 자주 사용하는 이미지는 최신 데이터, 자주 사용하지 않으면 최신이 아닐 수 있음

프록시 패턴은 병목점 찾기가 애매하고, 메모리 사용량 계산이 어려움

## 요즘 프록시 패턴

![](pocu-note/COMP2500/012-design-patterns/012-016-eager-loading-vs-lazy-loading/images/eager-loading-vs-lazy-loading-2.png)

요즘 컴퓨터는 메모리 큼
- 디스크 로딩도 예전보다 빠름
	- SSD
- 인터넷으로 이미지를 로딩하면 당연히 하드디스크보다 느림
	- 이미지 많은 웹 사이트 접속해보면 알 수 있음

![](pocu-note/COMP2500/012-design-patterns/012-016-eager-loading-vs-lazy-loading/images/eager-loading-vs-lazy-loading-3.png)

프록시 패턴의 문제는 내부를 알기 어려움
- 병목점
- 메모리 사용량

![](pocu-note/COMP2500/012-design-patterns/012-016-eager-loading-vs-lazy-loading/images/eager-loading-vs-lazy-loading-4.png)

캡슐화에 따르면 로딩 방법 3가지 중 어떤 구현을 사용하는지 클라이언트는 알 필요가 없음
- 근데 이게 꼭 좋은건가?
	- 사용자의 편의성을 생각해보자

![](pocu-note/COMP2500/012-design-patterns/012-016-eager-loading-vs-lazy-loading/images/eager-loading-vs-lazy-loading-5.png)

요즘은 내부 동작을 보여주는 방식이 더 많이 사용됨
- 거의 이렇죠?

![](pocu-note/COMP2500/012-design-patterns/012-016-eager-loading-vs-lazy-loading/images/eager-loading-vs-lazy-loading-6.png)
