# Week6

## 조건 명제(implication)

![img.png](old_note/COMP1000/week6/images/img.png)

- 합셩 명제의 일부분
- 함의
- p가 참이면 q가 참이다

![img_1.png](old_note/COMP1000/week6/images/img_1.png)

- 새로운 개념
  - 전제
  - 결론

![img_2.png](old_note/COMP1000/week6/images/img_2.png)

- 전제도 명제임

## 조건 명제의 진리 판단

![img_3.png](old_note/COMP1000/week6/images/img_3.png)

- 조건 명제의 참/거짓을 판단하는 방법?

![img_4.png](old_note/COMP1000/week6/images/img_4.png)

- 전제는 동일하고 결과가 NOT이면 거짓임

![img_5.png](old_note/COMP1000/week6/images/img_5.png)

- 명제 자체에서는 NOT p 일 때 존제를 정의하지 않고 있음

### 무의미한 참(vacuous truth)

![img_6.png](images/img_6.png)

- 전제하지 않는 내용의 결과는 무조건 참

![img_7.png](images/img_7.png)

- 전제가 거짓이면 결과는 참
- 전제가 참이면 결과에 따라 참/거짓 달라짐

## 다른 조건 명제의 전제가 되는 조건 명제

![img_8.png](images/img_8.png)

- 조건 명제를 다른 조건 명제의 전제로 사용하기 위해서 반드시 조건 명제의 참/거짓을 판단할 수 있어야함
  - 때문에 전제가 거짓이면 반드시 참이라고 간주

### 공리

![img_9.png](images/img_9.png)

- 증명없이 참인 명제
  - 너무나 당연한 개념
  - 모두 동의한 진리

![img_10.png](images/img_10.png)

![img_11.png](images/img_11.png)

- 전제의 부정을 통해서 조건 명제의 거짓을 유도할 수 없음
  - 자연수인 전제를 비틀면 논리적으로 의미가 없음

### 정리: 조건 명제에 기초한 새로운 조건 명제

![img_12.png](images/img_12.png)

- p => q가 참일 때 r이 참

### 인간의 사고방식

![img_13.png](images/img_13.png)

- ~p => q

![img_14.png](images/img_14.png)

- ~p => ~q

![img_15.png](images/img_15.png)

- p => ~q
  - 이런 경우 (p => q)거짓

![img_16.png](images/img_16.png)

- 조건 명제가 거짓임을 증명할 때는 결론이 거짓임을 증명하자!

## 조건 명제와 인과관계

![img_17.png](images/img_17.png)

- 전제와 결론에서 인과관계는 중요하지 않음
- 예시의 조건 명제는 인과관계가 성립하지 않음

![img_18.png](images/img_18.png)

- 전제와 결론이 각각 참이고, 인과관계까지 성립해야 올바른 '과학적 사고방법'
- 논리와 인과는 독립적이다
    - 컴퓨터에서 버그도 이런 경우

## 조건 명제의 역(converse)

![img_19.png](images/img_19.png)

- 전제와 결론을 바꾼 것

### 역에서 조심할 점

![img_20.png](images/img_20.png)

- 조견 명제가 참이라고 조건 명제의 역은 반드시 참이 아니다
- 진리표를 그려보자

## 조건 명제의 이(inverse)

![img_21.png](images/img_21.png)

- 전제와 결론에 각각 NOT을 적용

### 이에서 조심할 점

![img_22.png](images/img_22.png)

- 진리표를 그려보자

<br></br>

### 이와 역의 관계

![img_23.png](images/img_23.png)

- 논리적 동치임

### 논리적 동치

![img_24.png](images/img_24.png)

- 이와 역은 논리적 동치
- 진리표가 동일함

## 조건 명제의 대우(contraposition)

![img_25.png](images/img_25.png)

- 역과 이를 합침
- 전제와 결론을 부정하고, 순서 변경!

![img_26.png](images/img_26.png)

- 조건 명제와 조건 명제의 대우는 논리적 동치

![img_27.png](images/img_27.png)

- 정리

## 쌍방조건 명제(bidirectional)

![img_28.png](images/img_28.png)

- 조건 명제, 조건 명제의 역 모두 참
  - AND
- 줄인 표기법: 
  - <->

![img_29.png](images/img_29.png)

- XNOR 게이트와 결과가 동일함

### 쌍방 조건 명제가 항진명제면 두 명제는 논리적 동치

![img_30.png](images/img_30.png)

- 드모르간 법칙의 예로 증명하기
- 좌변이 참이면, 우변이 참이고 + 우변이 참이면 좌변이 참
  - 이게 언제나 참이면?
    - 진리표에서 모든 값 참임을 확인해야함
    - 이 때 조건 명제의 진리표 적용
  - 두 명제는 논리적 동치

- 조건 명제를 이용한 논리적 동치의 증명이 가능함!

## 논리 퍼즐

![img_31.png](images/img_31.png)

- 논리적 사고를 통해 풀 수 있는 문제들
- 이런 문제들을 잘 풀면 좋긴함

![img_32.png](images/img_32.png)

- 크리티컬 패스 분석
  - 우선순위 설정!
  - 훌륭한 PM, 프로그래머라면 이런 역량쯤은..

### 기사와 구라쟁이 논리 퍼즐

![img_33.png](images/img_33.png)

![img_34.png](images/img_34.png)

![img_35.png](images/img_35.png)

- 브루트포스로 모든 경우의 수로 검증해도 됨
- 명제를 만들고 귀류법으로 풀어봅시다

![img_36.png](images/img_36.png)

### 모자 색깔 맞추기

![img_37.png](images/img_37.png)

![img_38.png](images/img_38.png)

- 수많은 정보 중 말이 되는 정보(fact)에 기반해 결론을 내리는 역량을 물어보는 문제
  - 좋은 습관이니 기르자

## 논리 증명

![img_39.png](images/img_39.png)

- 조건 명제를 이용해 결과에 도달하는 과정을 배우자

## 추론(inference)

![img_40.png](images/img_40.png)

- 추론 == 논증(argument)
- 참인 전제를 가정하에 새로운 결론이 참임을 유도하는 과정
- 조건 명제를 기반으로 한 내용

<br></br>

- 유효 추론
  - 타당한 추론
  - 전제와 결론이 모두 참
- 허위 추론
  - 타당하지 않은(잘못된) 추론
  - 전제는 참이지만 결론이 거짓이라 조건 명제가 거짓
- 전제가 거짓인 경우는 보나마나 조건 명제가 참이라 고려하지 않음
  - 증명에서 의미도 없음

### 추론의 방법

![img_41.png](images/img_41.png)

- 추론의 방법이 증명의 방법과 연관이 있음

### 직접 추론

![img_42.png](images/img_42.png)

- 긍정 논법
- 연역 추론

### 간접 추론

![img_43.png](images/img_43.png)

- 부정 논법
- 대우 추론

### 가설 삼단논법

![img_44.png](images/img_44.png)

- 연쇄 논법

### 선언 삼단논법

![img_45.png](images/img_45.png)

- 논리합 삼단논법

### 논리 융합

![img_46.png](images/img_46.png)

- 용해법
- 진리표 그려서 경우의 수 대입해보면 됨
  - p OR q 가 참인 경우 나열
  - NOT p OR r 이 참인 경우 나열
  - 조합!

![img_47.png](images/img_47.png)

- 서폿의 역할이 안 중요해짐

![img_48.png](images/img_48.png)

- 당연한 논리연산

## 증명

![img_49.png](images/img_49.png)

- 올바른 증명:
  - 증명이 성립하면 누구나 의심하지 않게 되어야함

- 직접 증명, 간접 증명은 직접/간접 추론과 유사함

### 모순에 의한 증명

![img_50.png](images/img_50.png)

- 귀류법
- 반증법
- 조건 명제가 거짓이라고 가정하고 논리를 전개해 모순을 유도

![img_51.png](images/img_51.png)

- 'p => q'를 부정할 때 왜 'p AND ~q'를 전제로 사용하지?

![img_52.png](images/img_52.png)

- p => q
  - 조건 명제의 진리표를 구성해 조건 명제가 거짓이 되는 경우를 찾아보자
  - 이 조건 명제가 거짓이려면 진리표에서 p == TRUE, q == FALSE 일 수 밖에

![img_53.png](images/img_53.png)

- NOT (P => Q) == P AND NOT Q
- 논리적 동치
  - 진리표가 동일함

![img_54.png](images/img_54.png)

![img_55.png](images/img_55.png)

- 최소한 4일의 부정은 최대 3일까지

![img_56.png](images/img_56.png)

![img_57.png](images/img_57.png)

- 프로그래밍에서 직접적인 활요도가 크지는 않음

### 사례에 의한 증명

![img_58.png](images/img_58.png)

- 수학에서는 모든 것을 확인하는 것이 거의 불가능
- 프로그래밍에서는 어떨까? 

![img_59.png](old_note/COMP1000/week6/images/img_59.png)

- 32비트 정수라는 제한이 걸리면
  - 2^32개라고 유한한 수
- 주먹구구식이지만, 사실 가능하기만 하면 가장 확실함

### 동치 증명

![img_60.png](old_note/COMP1000/week6/images/img_60.png)

- 쌍방 조건 명제가 항진명제면 두 명제는 논리적 동치
  - p <=> q 가 항상 참이면
  - p === q

- 위를 증명하는 개념

### 존재/반례 증명

![img_61.png](images/img_61.png)

- 한 사례만 찾으면 'any'는 참
- 한 사례만 찾으면 'all'을 거짓으로!

![img_62.png](images/img_62.png)

- 버그 재현(reproduction)
  - A.K.A repro case
- 버그를 하나라도 찾으면 버그 없는 프로그램(all)이 거짓이 됨

![img_63.png](images/img_63.png)

- 교훈

### 유일성 증명

![img_64.png](images/img_64.png)

- 패스

## 크래시 발생

![img_65.png](images/img_65.png)

![img_66.png](images/img_66.png)

- 조건 명제

![img_67.png](images/img_67.png)

![img_68.png](images/img_68.png)

- 이것이 올바른 해결인가?

![img_69.png](images/img_69.png)

### 조건 명제가 맞는지 증명하자

![img_70.png](images/img_70.png)

- 'p => q'가 참인지 확인
  - 거짓이면 새로운 전제(버그의 원인)을 찾아야함
  - 참이면 올바르게 처리

![img_71.png](images/img_71.png)

- 조건 명제는 인과 관계와 독립적임
  - 조건 명제의 참만으로는 '올바른 과학적 사고'가 아니다

![img_72.png](images/img_72.png)

- 조건 명제에서 전제가 거짓이면 조건 명제는 반드시 참
  - 인과 관계가 성립하지 않음!

![img_73.png](images/img_73.png)

- 새로운 가설
  - 이(?)

![img_74.png](images/img_74.png)

- 인과 관계의 검증이 필요
  - 실제로 운영체제에서 0으로 나누면 시스템 레벨 크래시 발생
- 근본적인 원인을 찾아야함
  - 0이 왜 들어오는가?

![img_75.png](images/img_75.png)
  
- 근본을 고치자!
  - 저수준에 대한 이해가 중요

![img_76.png](images/img_76.png)

- 결국 '조건 명제' + '인과 관계'로 올바른 과학적 사고방법!

## 필요/충분 조건

![img_77.png](images/img_77.png)

- 조건 명제가 참이면
- 전제가 결론의 충분조건
- 결론이 전제의 필요조건
