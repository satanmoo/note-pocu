---
aliases:
  - 어류 모델링
tags:
  - COMP2500
  - week6
---
# 어류 모델링

## 동물

![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-1.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-2.png)

어류를 포함하는 기준만 필요함

![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-3.png)
파충류, 양서류는 편의상 생략

![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-4.png)

## `Animal`

![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-5.png)

`setAge`는 개념상 말이 안 됨
- 한 살 더먹는 개념으로 `getAge`

## `Fish`

![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-6.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-7.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-8.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-9.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-10.png)

수영 안 하는 물고기

![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-11.png)

개념 상 바람직하지 못 함

![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-12.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-13.png)

부치의 `swim()` 동작을 바꾸려면 다형성 필요

![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-14.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-15.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-16.png)
![](pocu-note/COMP2500/006-object-modeling-2/006-019-fish-modeling/images/fish-modeling-17.png)

이 수업에서 볼 수 있는 것은 다음과 같음
- 잘 정형화된 분류 체계에서도 상속은 어려운 문제가 발생할 수 있다!
