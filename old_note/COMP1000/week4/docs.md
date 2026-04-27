# Week4

## 집합

![img.png](old_note/COMP1000/week4/images/img.png)

![img_1.png](old_note/COMP1000/week4/images/img_1.png)

- 키워드:
    - 특정 조건
    - 순서가 없음
        - 중복 없음

![img_2.png](old_note/COMP1000/week4/images/img_2.png)

- 집합은 보통 대문자로 표기

## 원소

![img_3.png](old_note/COMP1000/week4/images/img_3.png)

- 집합에 포함된 대상
- A.K.A 요소

### 원소 나열법

![img_4.png](old_note/COMP1000/week4/images/img_4.png)

### 조건 제시법

![img_5.png](old_note/COMP1000/week4/images/img_5.png)

### 벤 다이어그램

![img_6.png](old_note/COMP1000/week4/images/img_6.png)

## 공집합

![img_7.png](old_note/COMP1000/week4/images/img_7.png)

![img_8.png](old_note/COMP1000/week4/images/img_8.png)

- 공집합을 원소로 가지는 집합
- 집합의 원소로 집합을 가질 수 있음!

![img_9.png](old_note/COMP1000/week4/images/img_9.png)

- 이런식으로 집합간의 포함관계

## 집합의 동치

![img_10.png](old_note/COMP1000/week4/images/img_10.png)

- A, B는 동치
- 순서 상관없이 동일한 원소의 구성

## 부분집합

![img_11.png](old_note/COMP1000/week4/images/img_11.png)

- 모든 원소가 다른 집합에 포함되어야 함

![img_12.png](old_note/COMP1000/week4/images/img_12.png)

- 집합의 원소로 집합을 가지는 개념이랑, 부분 집합이랑 다름

![img_13.png](old_note/COMP1000/week4/images/img_13.png)

### 공집합은 모든 집합의 부분집합

![img_14.png](old_note/COMP1000/week4/images/img_14.png)

### 동치면 부분집합

![img_15.png](old_note/COMP1000/week4/images/img_15.png)

![img_16.png](old_note/COMP1000/week4/images/img_16.png)

![img_17.png](old_note/COMP1000/week4/images/img_17.png)

![img_18.png](old_note/COMP1000/week4/images/img_18.png)

- 서로 서로 부분집합이면 두 집합이 동치

## 멱집합

![img_19.png](old_note/COMP1000/week4/images/img_19.png)

![img_20.png](old_note/COMP1000/week4/images/img_20.png)

- 어떤 집합이 가질 수 있는 모든 부분 집합을 요소로 가지는 집합
- 멱집합의 원소의 개수 == 어떤 집합의 모든 부분 집합의 개수
    - 2^n
    - n은 어떤 집합의 원소의 개수

![img_21.png](old_note/COMP1000/week4/images/img_21.png)

![img_22.png](old_note/COMP1000/week4/images/img_22.png)

![img_23.png](old_note/COMP1000/week4/images/img_23.png)

## 집합의 연산

![img_24.png](old_note/COMP1000/week4/images/img_24.png)

- 이런 문제에 대한 대답

![img_25.png](old_note/COMP1000/week4/images/img_25.png)

## 합집합(Union)

![img_26.png](old_note/COMP1000/week4/images/img_26.png)

![img_27.png](old_note/COMP1000/week4/images/img_27.png)

- 'OR'의 개념

![img_28.png](old_note/COMP1000/week4/images/img_28.png)

- 합집합에서 집합의 정의상 중복 원소는 제거함
    - 프로그래밍에서 중복을 제거할 때 SET 사용하기

## 교집합(Intersection)

![img_29.png](old_note/COMP1000/week4/images/img_29.png)

![img_30.png](old_note/COMP1000/week4/images/img_30.png)

## 서로소(disjoint) 집합

![img_31.png](old_note/COMP1000/week4/images/img_31.png)

![img_32.png](old_note/COMP1000/week4/images/img_32.png)

- 교집합이 공집합

## 차집합(set difference)

![img_33.png](old_note/COMP1000/week4/images/img_33.png)

- A에서 A와 B의 교집합을 빼는 개념

![img_34.png](old_note/COMP1000/week4/images/img_34.png)

## 여집합(complement)

![img_35.png](old_note/COMP1000/week4/images/img_35.png)

- 보집합이 좋았을 것 같음

![img_36.png](old_note/COMP1000/week4/images/img_36.png)

![img_37.png](old_note/COMP1000/week4/images/img_37.png)

![img_38.png](old_note/COMP1000/week4/images/img_38.png)

- NOT 연산

## 전체 집합(universal set)

![img_39.png](old_note/COMP1000/week4/images/img_39.png)

- A와 NOT A를 합하면 전체

![img_40.png](old_note/COMP1000/week4/images/img_40.png)

### A와 A 보집합의 교집합은 공집합

![img_41.png](old_note/COMP1000/week4/images/img_41.png)

### 여집합의 법칙

![img_42.png](old_note/COMP1000/week4/images/img_42.png)

## 집합의 연산 법칙

![img_43.png](old_note/COMP1000/week4/images/img_43.png)

![img_44.png](old_note/COMP1000/week4/images/img_44.png)

## 항등 법칙(identity law)

![img_45.png](old_note/COMP1000/week4/images/img_45.png)

- 연산 결과가 자기 자신
- 벤다이어그램으로 증명하기 쉬움

## 지배 법칙(domination laws)

![img_46.png](old_note/COMP1000/week4/images/img_46.png)

- 연산 결과로 언제나 전체 집합이나 공집합
- 좌항이 지배당함

## 멱등 법칙(idempotent laws)

![img_47.png](old_note/COMP1000/week4/images/img_47.png)

- 연산을 여러 번 적용하더라도 결과값이 달라지지 않음

<br/>

- 웹 쪽에서 'idem'이라는 표현 많이 사용
  - idempotent key
  - 은행 출금 요청에 idempotent key를 포함시킴
  - 인터넷이 불안정해서 요청이 2번 이상 서버로 전송
  - idempotent key가 동일하면 하나의 요청만 처리

## 여집합의 여집합(double complement laws)

![img_48.png](old_note/COMP1000/week4/images/img_48.png)

- 부정의 부정 == 긍정

## 교환 법칙

![img_49.png](old_note/COMP1000/week4/images/img_49.png)

- 좌항과 우항을 교환해도 연산 결과는 동일함
- 벤다이어그램으로 증명

## 결합 법칙

![img_50.png](old_note/COMP1000/week4/images/img_50.png)

- 벤다이어그램으로 증명
- 합집합, 교집합에 적용

## 분배 법칙

![img_51.png](old_note/COMP1000/week4/images/img_51.png)

- 합집합도 분배법칙 성립
- 논리회로 설계에 유용
   - 인수분해(?)

![img_52.png](old_note/COMP1000/week4/images/img_52.png)

![img_53.png](old_note/COMP1000/week4/images/img_53.png)

## 드 모르간의 법칙

![img_54.png](old_note/COMP1000/week4/images/img_54.png)

- !(A || B) == !A && !B
- !(A && B) == !A || !B
- 벤다이어그램으로 증명

![img_55.png](old_note/COMP1000/week4/images/img_55.png)

- 부정을 분배법칙처럼 사용한다고 생각하기
- 그리고 안의 피연산자 뒤집기

## 흡수 법칙

![img_56.png](old_note/COMP1000/week4/images/img_56.png)

- 벤다이어그램으로 증명

![img_57.png](old_note/COMP1000/week4/images/img_57.png)

![img_58.png](old_note/COMP1000/week4/images/img_58.png)

## 여집합의 법칙

![img_59.png](old_note/COMP1000/week4/images/img_59.png)

## 함수

![img_60.png](old_note/COMP1000/week4/images/img_60.png)

- 정의역 집합은 중복이 없음
- map에서 key의 모음을 keySet이라고 정의함
  - key는 중복이 없게 구현

- 대응하는 치역은 중복이 발생함
- map에서 value는 중복이 가능

![img_61.png](old_note/COMP1000/week4/images/img_61.png)

![img_62.png](old_note/COMP1000/week4/images/img_62.png)

- 프로그래밍의 함수에서 void 반환형의 경우 수학적 함수랑 개념이 다름

![img_63.png](old_note/COMP1000/week4/images/img_63.png)

- void 반환형 함수를 포함한 프로그래밍의 함수를 '프로시저'라고 부르는 프로그래밍 언어도 있음
  - 수학적으로 엄밀하게 말하면 함수가 아니다는 개념을 반영 