---
title: '상속 vs 컴포지션: 메모리'
aliases:
  - "상속 vs 컴포지션: 메모리"
tags:
  - COMP2500
  - week7
---
# 상속 vs 컴포지션: 메모리

[[pocu-note/COMP2500/007-inheritance-vs-composition/007-004-four-criteria-for-inheritance-vs-composition/index|상속 vs 컴포지션 선택 시 4가지 기준]] 에서 **기계상 차이**

## 상속과 메모리

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/images/inheritance-vs-composition-memory-1.png)

상속은 개체 생성 시 메모리 한 덩어리

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/images/inheritance-vs-composition-memory-2.png)

컴포지션은 `new` 할 때 마다 각각 메모리 덩어리 생성

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/images/inheritance-vs-composition-memory-3.png)
![](pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/images/inheritance-vs-composition-memory-4.png)
![](pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/images/inheritance-vs-composition-memory-5.png)

## 메모리 덩어리와 성능

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/images/inheritance-vs-composition-memory-6.png)

CPU와 메모리 사이의 데이터 전송이 필요함
- **버스**가 통신을 담당

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/images/inheritance-vs-composition-memory-7.png)

*버스* 로 통신하지 않으면 성능 향상 가능

CPU 내부에 캐시 메모리
- 메모리와 *버스* 를 통해 통신할 필요가 없어서 성능 향상

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/images/inheritance-vs-composition-memory-8.png)

**캐시 라인**
- 캐시 메모리는 메모리에서 한 번에 연속된 블럭 단위로 읽음
- 이 단위를 *캐시 라인* 이라고 부름

상속으로 생성한 개체는 메모리에 ==연속으로 한 덩어리==에 들어가기 때문에 한 번에 캐시 메모리에 로드할 확률이 높음

컴포지션으로 생성한 개체는 부품 개체의 메모리 덩어리가 ==흩어져== 있기 때문에 캐시 메모리에 로드할 때 여러 번 메모리에 접근해야 할 확률이 높음
- *버스* 를 여러 번 사용하게 됨
 
![](pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/images/inheritance-vs-composition-memory-9.png)

메모리 할당, 해제 중 언어의 런타임 구조에 따라 느린 것이 있음
- ==할당과 해제를 많이 할 수록 성능에 불리함==

> [!NOTE] 결론적으로 컴포지션이 확장성은 좋으나 성능은 상속이 좋음

## 복습 퀴즈

```java
public class A {  
}  
  
public class B {  
    private int count;  
    private A a0 = new A();  
    private A a1;  
}  
  
public class BB extends B {  
    private int length;  
    private B b = new B();  
}
```

### new BB();를 하면 몇 개의 메모리 블록이 할당되나요?

`BB`는 `B`를 상속 받음
- `BB` 와 `B`는 하나의 덩어리로 생성 됨

`BB`는 `B`를 컴포지션으로 가짐
- 상속도 하고 컴포지션으로 가지기도 하고

`B`는 `A`를 컴포지션으로 1개 가짐
- `a1`은 새로운 메모리를 할당하지 않음 (`null`)

`BB + B` (상속) 1개
- 여기의 `B`의 컴포지션 `A` 1개

`BB`의 컴포지션 `B` 1개
- 여기싀 `B`의 컴포지션 `A` 1개

A: 총 4개

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-005-inheritance-vs-composition-memory/images/inheritance-vs-composition-memory-10.png)
