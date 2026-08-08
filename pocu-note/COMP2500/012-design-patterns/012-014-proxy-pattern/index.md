---
title: 프록시 패턴
aliases:
  - 프록시 패턴
tags:
  - COMP2500
  - week12
---
# 프록시 패턴

![](pocu-note/COMP2500/012-design-patterns/012-014-proxy-pattern/images/proxy-pattern-1.png)

프록시
- 캐시 메모리처럼 작동함

클래스가 명백하게 보이지 않기 때문에 조심하긴 해야함

![](pocu-note/COMP2500/012-design-patterns/012-014-proxy-pattern/images/proxy-pattern-2.png)
![](pocu-note/COMP2500/012-design-patterns/012-014-proxy-pattern/images/proxy-pattern-3.png)

값 비싼 리소스를 메모리에 올리지 않고 싶을 때
- 클라이언트가 개체를 사용할 때 이미지가 필요하다면, 개체의 내부에 원래는 이미지를 저장해야함
- 하지만 클라이언트가 요청할 때 이미지 로딩을 하고, 개체 생성 시에는 이미지 로딩에 필요한 정보를 저장
	- 이 정보가 프록시
