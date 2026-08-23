---
title: 단위 테스트를 위한 다형성
aliases:
  - 단위 테스트를 위한 다형성
tags:
  - COMP2500
  - week14
---
# 단위 테스트를 위한 다형성

![](pocu-note/COMP2500/015-claims-from-minority-views/015-012-polymorphism-for-unit-tests/images/polymorphism-for-unit-tests-1.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-012-polymorphism-for-unit-tests/images/polymorphism-for-unit-tests-2.png)

- 잘못된 다형성:
    - 각 실행 파일마다 구현이 다른 경우
        - 빌드에서 처리하는게 옳음
    - 테스트를 위해 다형적으로
- 올바른 다형성:
    - 실행 파일 하나에서 구현이 여러 개를 바꿔가면서 사용하는 경우

![](pocu-note/COMP2500/015-claims-from-minority-views/015-012-polymorphism-for-unit-tests/images/polymorphism-for-unit-tests-3.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-012-polymorphism-for-unit-tests/images/polymorphism-for-unit-tests-4.png)

- 다형성의 개념을 명확하게 하자
