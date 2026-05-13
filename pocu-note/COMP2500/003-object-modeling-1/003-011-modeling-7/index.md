---
tags:
  - COMP2500
  - week3
aliases:
  - "모델링 7: 부품으로 분리해보기"
---
# 모델링 7: 부품으로 분리해보기

![img_182.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-1.png)
![img_183.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-2.png)

여기서 유연성이 떨어지는 이유는 `FlowerPot` 클래스가 직접 `WaterSpray` 클래스에 의존하기 때문

추가적으로 재활용성을 더 높이는 방법을 아래에서 다룸
- 지금 재활용성이 절대적으로 낮다라고 보기는 애매함

## 재활용성

재활용성을 높이는 예시를 다룸

![img_184.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-3.png)
![img_185.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-4.png)
![img_186.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-5.png)
![img_187.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-6.png)
![img_188.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-7.png)
![img_189.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-8.png)
![img_190.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-9.png)

Aggregation(집합) 개념
- Composition 아님
- [[pocu-note/COMP2500/002-necessity-of-oop/002-008-oop-characteristic-3/index|OOP의 특성 3]] 참고

![img_191.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-10.png)
![img_192.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-11.png)
![img_193.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-12.png)
![img_194.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-13.png)
![img_195.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-14.png)
![img_196.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-15.png)
![img_197.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-16.png)
![img_198.png](pocu-note/COMP2500/003-object-modeling-1/003-011-modeling-7/images/modeling-7-17.png)
