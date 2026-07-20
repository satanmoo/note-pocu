---
aliases:
  - 중요한 건 클라이언트와의 약속
tags:
  - COMP2500
  - week11
---
# 중요한 건 클라이언트와의 약속

![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-1.png)

코어팀은 회사에서 사용하는 라이브러리를 만듬

![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-2.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-3.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-4.png)

이런 경우 인터페이스에 의존하면 좋긴 함
- 물론 메서드 시그니처가 안 바뀐다는 전제
	- 인터페이스의 시그니처가 바뀌면 똑같은 문제 발생
- 여기서 포인트는 자식 클래스가 많은 일반적인 추상 클래스일수록 일반화되어 있고 바뀔 가능성이 낮음

![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-5.png)

중요한 건 클라이언트
- 코어팀 입장에서 다른 팀들이 클라이언트

요즘은 어떤 방식을 사용할까?

![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-6.png)

대 인터넷 시대

![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-7.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-8.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-9.png)

요즘은 기존 버전, 새로운 버전을 동시에 제공하고
- 기존 버전의 지원 기간을 제한함

![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-10.png)

LTS 개념도 여기서 나온거죠
- 버전 바뀔 때 마이그레이션 가이드도 제공하구

![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-11.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-12.png)
![](pocu-note/COMP2500/011-interface-vs-implementation/011-014-contract-with-client/images/contract-with-client-13.png)
