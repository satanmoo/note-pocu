---
title: 단위 테스트의 용도
aliases:
  - 단위 테스트의 용도
tags:
  - COMP2500
  - week14
---
# 단위 테스트의 용도

## 안전이 매우 중요하다면 고려하자

![](pocu-note/COMP2500/015-claims-from-minority-views/015-011-purpose-of-unit-tests/images/purpose-of-unit-tests-1.png)

- 비용을 압도하는 안전
- 비즈니스(프로젝트 관리자)의 책임

![](pocu-note/COMP2500/015-claims-from-minority-views/015-011-purpose-of-unit-tests/images/purpose-of-unit-tests-2.png)

- 오픈소스는 전문 테스터 고용할 수도 없고
- 단위 테스트 자동화

![](pocu-note/COMP2500/015-claims-from-minority-views/015-011-purpose-of-unit-tests/images/purpose-of-unit-tests-3.png)

- 비즈니스 로직과 멀수록 단위 테스트가 쉬움
    - 비즈니스 로직은 자주 바뀔 수 있음
    - 바뀌면 유닛테스트가 쓸모가 없어짐
- 입력 출력이 명확한 알고리듬
    - 알고리듬은 로직이 변하는 경우가 적음

![](pocu-note/COMP2500/015-claims-from-minority-views/015-011-purpose-of-unit-tests/images/purpose-of-unit-tests-4.png)

- 위 방법들은 단위 테스트가 효과적이지 않음
