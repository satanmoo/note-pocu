---
aliases:
  - "코드보기: Base Entity"
tags:
  - COMP2500
  - week5
---
# 코드보기: Base Entity

![](pocu-note/COMP2500/005-inheritance/005-014-code-example/images/code-example-1.png)

id, 생성시간, 수정시간 모두 DB에 저장할 때 유용한 정보
- 유용한 정보를 가지는 부모 클래스 entity를 선언
- 테이블에 들어가는 개체는 모두 entity의 자식

![](pocu-note/COMP2500/005-inheritance/005-014-code-example/images/code-example-2.png)

UUID의 개념

![](pocu-note/COMP2500/005-inheritance/005-014-code-example/images/code-example-3.png)

생성 시간은 개체 생성 후 바뀔 수 없는 개념
수정 시간은 당연히 바뀔 수 있으니 setter 존재

![](pocu-note/COMP2500/005-inheritance/005-014-code-example/images/code-example-4.png)

스펙에 따라 과목 처음 생성 시 개설된 학기가 없음

![](pocu-note/COMP2500/005-inheritance/005-014-code-example/images/code-example-5.png)

courseCode는 위에서 본 수정시간 처럼 한 번 정해지면 변하지 않는 개념
- setter 없음

![](pocu-note/COMP2500/005-inheritance/005-014-code-example/images/code-example-6.png)



