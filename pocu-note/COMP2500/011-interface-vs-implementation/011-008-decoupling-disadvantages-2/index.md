---
aliases:
  - 디커플링의 단점 2
tags:
  - COMP2500
  - week11
---
# 디커플링의 단점 2

## 단점 2: 내부를 알아야 좋은 경우도 있다

![](pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/images/decoupling-disadvantages-2-1.png)

결합도를 높이더라도 내부를 알아야 좋은 경우

`DataSource`:
- 데이터 저장 원천
- DB, File 등등

`MergeTo()` 메서드를 호출하면 데이터 소스에서 모든 데이터를 읽어와 중복 없이 dataset에 넣어줌

![](pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/images/decoupling-disadvantages-2-2.png)

[java collection interface](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html)

![](pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/images/decoupling-disadvantages-2-3.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/images/decoupling-disadvantages-2-4.png)

`Collection` 인터페이스의 구현은 다양함
- 구현에 따라 중복을 어떻게 처리하는지 방식이 다름

![](pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/images/decoupling-disadvantages-2-5.png)

구현의 모든 경우에 다 작동하게 하려면?
- `MergeTo()` 메서드의 구현에서 `contains()` 메서드로 중복 검사를 해야 함
- 근데 `Set` 구현이면 필요 없잖아
	- 추상화로 인한 비효율이 발생

만약 `Collection` 대신 `Set`이라는 더 구체적인 인터페이스를 사용하면 최적화 가능
- [[pocu-note/COMP2500/003-object-modeling-1/003-012-flexible-not-best/index|추상화의 단점]] 참고

![](pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/images/decoupling-disadvantages-2-6.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/images/decoupling-disadvantages-2-7.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/images/decoupling-disadvantages-2-8.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/images/decoupling-disadvantages-2-9.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-008-decoupling-disadvantages-2/images/decoupling-disadvantages-2-10.png)

실생활에서도 구현을 몰라서 비효율적인 경우가 있긴 있음
