---
tags:
  - COMP2500
  - week2
aliases:
  - 구조체의 한계
---
서# 구조체의 한계
## 절차적 언어의 한계

![img.png](pocu-note/COMP2500/002-necessity-of-oop/002-001-limits-of-structure/images/limits-of-structure-1.png)
![img_1.png](pocu-note/COMP2500/002-necessity-of-oop/002-001-limits-of-structure/images/limits-of-structure-2.png)

데이터가 많아지면 관리가 어려움
- 코드 이해하기도 어려움

## 보완책 (구조체 사용하기)

![img_2.png](pocu-note/COMP2500/002-necessity-of-oop/002-001-limits-of-structure/images/limits-of-structure-3.png)

![img_3.png](pocu-note/COMP2500/002-necessity-of-oop/002-001-limits-of-structure/images/limits-of-structure-4.png)

구조체의 선언
- 데이터의 스펙을 정의

구조체 변수의 선언
- 선언된 정의에 따라 메모리에 할당해서 생성

## 구조체의 한계 1

![img_4.png](pocu-note/COMP2500/002-necessity-of-oop/002-001-limits-of-structure/images/limits-of-structure-5.png)
![img_5.png](pocu-note/COMP2500/002-necessity-of-oop/002-001-limits-of-structure/images/limits-of-structure-6.png)
![img_6.png](pocu-note/COMP2500/002-necessity-of-oop/002-001-limits-of-structure/images/limits-of-structure-7.png)

데이터와 동작(함수)의 분리는 실수를 유발하는 구조

![img_7.png](pocu-note/COMP2500/002-necessity-of-oop/002-001-limits-of-structure/images/limits-of-structure-8.png)
![img_8.png](pocu-note/COMP2500/002-necessity-of-oop/002-001-limits-of-structure/images/limits-of-structure-9.png)

파일 단위로 직접 분리하는 방법도 있음
- Java는 프로그래밍 언어에서 직접 제공
- `.java` 파일에 클래스를 정의하고 여기 데이터와 함수를 모두 정의함
