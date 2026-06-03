---
aliases:
  - "코드보기: 텍스트 파일로부터 엔티티 만들기"
tags:
  - COMP2500
  - week7
---
# 코드보기: 텍스트 파일로부터 엔티티 만들기

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-012-code-example/images/code-example-1.png)

열거형이 필요한 이유
- 어떤 컴포넌트 종류가 있는지 알 수 있어야 해서
- 타입으로 구분됨

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-012-code-example/images/code-example-2.png)

외부에 파일에 어떤 컴포넌트가 필요한지 저장
- 여기서 "Entity,Physics,Controllable" 구분을 튀해 `ComponentType`열거형 사용

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-012-code-example/images/code-example-3.png)

텍스트 파일 읽어서 `Component` 개체로 역직렬화

