---
title: '모델링 3: 분무기 용량 추가'
tags:
  - COMP2500
  - week3
aliases:
  - "모델링 3: 분무기 용량 추가"
---
# 모델링 3: 분무기 용량 추가

![img_105.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-1.png)
![img_106.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-2.png)
![img_107.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-3.png)

## 최대 용량 추가

![img_108.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-4.png)
![img_109.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-5.png)

## 클래스 다이어그램의 한계

![img_110.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-6.png)
![img_111.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-7.png)
![img_112.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-8.png)
![img_113.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-9.png)
![img_114.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-10.png)

상수는 상태가 아님
- 상태에 외부에서 관심을 가지는 개념이 포함

## 최대 용량을 상태로 추가

![img_115.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-11.png)
![img_116.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-12.png)
![img_117.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-13.png)

상태로 추가했기 때문에 UML에 보임

## 상태 추가에 따른 동작 추가

![img_118.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-14.png)
![img_119.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-15.png)
![img_120.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-16.png)
![img_121.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-17.png)
![img_122.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-18.png)
![img_123.png](pocu-note/COMP2500/003-object-modeling-1/003-007-modeling-3/images/modeling-3-19.png)

상태를 추가하면 새로운 동작이 필요한 경우가 생김
- 즉 부수 작업이 생김

작업량을 줄이는 관점에서 꼭 필요한 상태만 추가하는 것이 좋음
