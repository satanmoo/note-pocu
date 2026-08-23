---
title: 지속적 통합(CI)
aliases:
  - 지속적 통합(CI)
tags:
  - COMP2500
  - week14
---
# 지속적 통합(CI)

## Xp의 CI

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-1.png)

- Grady Booch 아저씨가 주장한 방법
    - 이 아저씨가 해결하려던 문제는?

- 브랜치 따서 따로 작업

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-2.png)

- 병합

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-3.png)

- 충돌 발생

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-4.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-5.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-6.png)

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-7.png)

- 서로 다른 버전에서 작업하니까 이런 문제가 근본적으로 발생

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-8.png)

- 그래서 너무 오래 각자 브랜치에서 작업하지 말고, 종종 합치자

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-9.png)

- CI 극단적인 규칙
- 모두 최신버전에서 작업하자는 주장

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-10.png)

- 과연 이게 효과적인가?

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-11.png)

- 과제 크기가 클 수록 적당히 시간 텀을 주는게 좋음

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-12.png)

- 과연 하루에 기능을 딱딱 만들 수 있을까?

![](pocu-note/COMP2500/015-claims-from-minority-views/015-007-continuous-integration/images/continuous-integration-13.png)

- 테스트 시간도 필요하고, 그리고 검증하고 커밋해야죠?
