---
aliases:
  - "코드보기: 해시값 계산"
tags:
  - COMP2500
  - week9
---
# 코드보기: 해시값 계산

![](pocu-note/COMP2500/008-polymorphism/008-017-code-example/images/code-example-1.png)

x에 31을 곱해서 가중치를 둠
- 점 (3,1)과 점 (1,3)이 같지 않게 하기 위함

![](pocu-note/COMP2500/008-polymorphism/008-017-code-example/images/code-example-2.png)

`equals` 메서드에 해시 코드 비교해서 더 빨리 `return` 하는 로직 추가
- 성능에 유리해짐
