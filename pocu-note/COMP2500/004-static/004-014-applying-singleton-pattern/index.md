---
tags:
  - COMP2500
  - week4
aliases:
  - 싱글턴 패턴의 응용
---
# 싱글턴 패턴의 응용

## 싱글턴 생성 시 인자가 필요한 경우

![applying-singleton-pattern-1.png](pocu-note/COMP2500/004-static/004-014-applying-singleton-pattern/images/applying-singleton-pattern-1.png)

처음 `getInstance()`를 호출할 때는 초기화 때문에 인자가 필요함
- 인자로 넘긴 값들은 초기화할 때만 필요함
- 그 이후 호출할 때는 필요없음

`getInstance()` 함수 하나에서 초기화와 개체 반환을 모두 수행하는 문제가 발생
- 함수의 역할이 너무 많아짐

## 싱글턴의 변형

![applying-singleton-pattern-2.png](pocu-note/COMP2500/004-static/004-014-applying-singleton-pattern/images/applying-singleton-pattern-2.png)
![applying-singleton-pattern-3.png](pocu-note/COMP2500/004-static/004-014-applying-singleton-pattern/images/applying-singleton-pattern-3.png)
![applying-singleton-pattern-4.png](pocu-note/COMP2500/004-static/004-014-applying-singleton-pattern/images/applying-singleton-pattern-4.png)
![applying-singleton-pattern-5.png](pocu-note/COMP2500/004-static/004-014-applying-singleton-pattern/images/applying-singleton-pattern-5.png)

하나의 함수가 많은 역할을 했었지만 이를 분리했음

![applying-singleton-pattern-6.png](pocu-note/COMP2500/004-static/004-014-applying-singleton-pattern/images/applying-singleton-pattern-6.png)

`getInstance()`를 호출하기 전 `createInstance()`를 호출하지 않았다면, 개체가 유효한 상태가 아님
- 초기화 되지 않음 따라서
- OOP 정신에 어긋남

![applying-singleton-pattern-7.png](pocu-note/COMP2500/004-static/004-014-applying-singleton-pattern/images/applying-singleton-pattern-7.png)

위 방법은 엄밀하게 말하면 OOP 정신에 어긋남
- OOP 생성자는 개체가 생성되면 유효한 상태를 가짐
- 싱글턴의 `getInstance()`도 개체를 처음으로 참조할 때 개체를 유효한 상태로 만들고 참조하게 강제함

위 방법이 OOP 정신에 어긋나도, 활용할 가치가 있음
- `createInstance()`
- `deleteInstnace()`
	- 위 둘이 까먹기 어려움

## 안티패턴

![applying-singleton-pattern-8.png](pocu-note/COMP2500/004-static/004-014-applying-singleton-pattern/images/applying-singleton-pattern-8.png)
![applying-singleton-pattern-9.png](pocu-note/COMP2500/004-static/004-014-applying-singleton-pattern/images/applying-singleton-pattern-9.png)
