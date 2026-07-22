---
aliases:
  - 프록시 패턴과 이미지 로딩
tags:
  - COMP2500
  - week12
---
# 프록시 패턴과 이미지 로딩

![](pocu-note/COMP2500/012-design-patterns/012-015-proxy-pattern-and-image-loading/images/proxy-pattern-and-image-loading-1.png)

이미지 데이터가 대표적인 값 비싼 리소스
- 용량 큼
- 저장장치에서 읽어와야 함
	- 병목점 걸림

![](pocu-note/COMP2500/012-design-patterns/012-015-proxy-pattern-and-image-loading/images/proxy-pattern-and-image-loading-2.png)

프록시 패턴을 사용하지 않은 예
- 개체 생성 시 이미지 로딩

![](pocu-note/COMP2500/012-design-patterns/012-015-proxy-pattern-and-image-loading/images/proxy-pattern-and-image-loading-3.png)

값 비싼 리소스를 다룰 때 생기는 문제 발생
- 생성하고 이미지를 안 읽으면 리소스 낭비

![](pocu-note/COMP2500/012-design-patterns/012-015-proxy-pattern-and-image-loading/images/proxy-pattern-and-image-loading-4.png)

그리고 과연 모든 이미지를 사용할까?

![](pocu-note/COMP2500/012-design-patterns/012-015-proxy-pattern-and-image-loading/images/proxy-pattern-and-image-loading-5.png)
![](pocu-note/COMP2500/012-design-patterns/012-015-proxy-pattern-and-image-loading/images/proxy-pattern-and-image-loading-6.png)

이런 방식을 지연 로딩
- lazy loading

`if (this.image == null)` 코드에서 캐시 로직을 적용한 것을 확인할 수 있음
- `draw()` 메서드를 호출할 때 이미지를 로딩
