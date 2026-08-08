---
title: hashCode() 메서드
aliases:
  - hashCode() 메서드
tags:
  - COMP2500
  - week9
---
# hashCode() 메서드

![](pocu-note/COMP2500/008-polymorphism/008-015-hashcode-method/images/hashcode-method-1.png)

동치면 반드시 해시값이 같음
- 동치가 아니면 해시값이 거의 다르지만, 같을 수도 있음
	- 해시 충돌

`Object` 클래스 기본 구현
- 주소 기반으로 해시값 구함
- [[pocu-note/COMP2500/008-polymorphism/008-014-equals-method/index|equals() 메서드]] 기본 동작이 주소값 비교니까
	- 동치라면 주소값이 같음

![](pocu-note/COMP2500/008-polymorphism/008-015-hashcode-method/images/hashcode-method-2.png)

해시 코드가 필요한 클래스에서 각자 알아서 정의하면 되는데, 왜 `Object` 클래스에 정의해 오버라이딩하고 사용하게 했을까?
- `HashMap` 클래스에서 사용하기 위해서
- `hashCode` 함수를 `Object`에 구현해서 얻은 추가적인 이득
	- 빠르게 다른 개체인지 확인할 수 있음
		- 해시값이 다르면 두 개체는 반드시 다름
		- `equals`를 호출해 비교하는 것 보다 빠름
		- 하지만 해시값이 같아도 두 개체가 같은지는 확정할 수 없음 (해시 충돌 가능)

해시 충돌
- 해시 코드가 같아도 두 개체가 다를 수 있음
- 두 개체가 같으면 해시 코드는 반드시 같음

> [!NOTE] `equals`를 오버라이딩 했다면, `hashCode`도 반드시 오버라이딩 하자
> 
> 동치의 개념을 반영

![](pocu-note/COMP2500/008-polymorphism/008-015-hashcode-method/images/hashcode-method-3.png)

`String` 클래스에서 구현한 `hashCode()` 를 그대로 사용한 예시
- firstName, lastName 값이 ==순서만 바뀐 경우== 동치로 판단하는 것을 방지하기 위해 비트 시프트

이 `hashCode` 구현은 `equals` 바디 안에서 호출해서 사용할 수 있음
