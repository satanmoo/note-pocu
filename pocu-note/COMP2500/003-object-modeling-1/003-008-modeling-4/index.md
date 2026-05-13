---
tags:
  - COMP2500
  - week3
aliases:
  - "모델링 4: 수도꼭지"
---
# 모델링 4: 수도꼭지

![img_124.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-1.png)
![img_125.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-2.png)
![img_126.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-3.png)
![img_127.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-4.png)
![img_128.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-5.png)
![img_129.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-6.png)
![img_130.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-7.png)
![img_131.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-8.png)

`WaterSpray` 의 `remainingWaterInMl` 멤버 변수는 private
- 이를 변경할 수 있는 메서드를 `Faucet`에 제공할 수 밖에 없음

`addWater` 메소드를 추가할 때 public 으로 만들어야 함
- `Faucet` 이 같은 패키지라는 보장이 없기 때문

![img_132.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-9.png)

`WaterSpray` 와 `Faucet`을 같은 패키지에 넣고 기본 접근 제어자를 사용하는 방법도 있음

## 클래스 간의 상호작용?

![img_133.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-10.png)

어떻게 고치나요? 에서 문제는 두 클래스 연관 관계를 강하게 맺는 방법
- `Faucet` 만 `WaterSpray`를 사용하게 강제하는 방법
- 나중에 설명할 예정

![img_134.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-11.png)
![img_135.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-12.png)
![img_136.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-13.png)
![img_137.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-14.png)
![img_138.png](pocu-note/COMP2500/003-object-modeling-1/003-008-modeling-4/images/modeling-4-15.png)
