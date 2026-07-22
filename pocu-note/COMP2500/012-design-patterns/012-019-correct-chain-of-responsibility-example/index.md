---
aliases:
  - 바른 책임 연쇄 패턴 예
tags:
  - COMP2500
  - week12
---
# 바른 책임 연쇄 패턴 예

![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-1.png)

왜 굳이 `Logger` 클래스에 `next` 멤버 변수를 사용했을까?

`LogManager` 클래스를 사용하면 더 직관적인 구현이 가능함

![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-2.png)

`LogManager` 클래스로 관리하면 다형적으로 메서드 호출 가능한데?

![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-3.png)

가지고 있는 모든 `Logger` 개체에서 다형적으로 `message()` 메서드 호출 ^logmanager-second-example

![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-4.png)

이제 `Logger` 클래스에서 `next` 멤버 변수 사라짐
- 이전 노트에서 본 것처럼 여전히 `Logger` 개체가 스스로 어떤 로그 레벨에 출력하는지 책임은 그대로 짐

![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-5.png)
![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-6.png)
![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-7.png)

`Logger` 클래스를 상속받는 자식 클래스들은 변한게 없음

![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-8.png)

`LogManager` 개체 생성
- `addHandler()` 메서드로 등록
- `message()` 메서드 호출

이전 노트에서 본 `next` 멤버 변수 설정하는 것보다 훨씬 간단함
- [[pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/index|책임 연쇄 패턴과 로거]] 참고

![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-9.png)
![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-10.png)

위키의 예가 잘못됨

![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-11.png)

`next` 멤버 변수는 "책임"을 위해 필요함

![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-12.png)

기회는 받지만
- 이전 강의([[pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/index|책임 연쇄 패턴과 로거]])에서 본 첫번째 예에서는 `next`로 다음 개체에서 호출 기회를 ==무조건== 줌
- [[pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/index#^logmanager-second-example|위에서 본 두번째 예]]에서는 `for` 문으로 `this.loggers` 순회해서 ==무조건== 기회를 줌

책임이란?
- 한 개체가 처리하면 책임을 지고, 그 뒤의 개체들은 메시지 처리할 기회를 받지 못함!!
- 책임에 대한 처리를 위해서는 `next` 멤버 변수를 사용할 수 밖에 없음
	- 이전 강의([[pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/index|책임 연쇄 패턴과 로거]])에서 본 첫번째 예

![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-13.png)

조건문으로 첫번째 예의 `message()` 메서드를 수정하면 됨
- 책임을 지도록
- 내가 책임지면 끝
- 내 뒤는 로그 출력할 필요 없어!

![](pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/images/correct-chain-of-responsibility-example-14.png)

`alt`는 선택지를 의미함
