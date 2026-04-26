# Week7

## 과학적 사고방법

![img.png](old_note/COMP1000/week7/images/img.png)

- '확률/비율'이 중요한 역할을 함
- 과학과 다르게 수학은 '참/거짓'의 진리값을 도출하는게 중요함

![img_1.png](old_note/COMP1000/week7/images/img_1.png)

- 과학은 여태까지 경험한 현상에 대해 설명하는 학문
    - 모든 것을 관찰하고 일반화하는 것이 현실적으로 불가능
    - 최대한 객관성을 보장하려고 노력하는 개념

- 가설-연역 방법:
    - 사람들의 공감을 얻어 정설로 수용하고 이를 기반으로 이론을 전개

## 귀납법/연역법

![img_2.png](old_note/COMP1000/week7/images/img_2.png)

![img_3.png](old_note/COMP1000/week7/images/img_3.png)

![img_4.png](old_note/COMP1000/week7/images/img_4.png)

## 과학적 사고방법 과정

![img_5.png](old_note/COMP1000/week7/images/img_5.png)

![img_6.png](images/img_6.png)

![img_7.png](images/img_7.png)

- 과학적 사고방법은 프로그래밍(특히 디버깅)과 매우 유사하다

## 과학적 사고를 하지 않는 프로그래머

![img_8.png](images/img_8.png)

![img_9.png](images/img_9.png)

![img_10.png](images/img_10.png)

- 컴퓨터를 이해하지 못하는 경우

![img_11.png](images/img_11.png)

- 근본적인 원인을 찾지 않는 경우

![img_12.png](images/img_12.png)

## 과학적 사고방법이 주는 교훈

![img_13.png](images/img_13.png)

- 'repro case' 로 정확히 관찰하자!

![img_14.png](images/img_14.png)

- 필연적인 인과관계를 찾아라

![img_15.png](images/img_15.png)

- 가설이 틀릴 수 있다
- 진리는 없다

![img_16.png](images/img_16.png)

- 자신이 반드시 옳다는 사람/기관을 믿지 말자

![img_17.png](images/img_17.png)

- 데이터 없이 주장하는 것은 '허구'다
- 데이터가 곧 근거

## 머신러닝과 과학적 사고방법

![img_18.png](images/img_18.png)

- 인류가 만든 가장 선입견을 가진 기계
    - 기존 데이터를 바탕으로 새로운 것을 판단할 뿐
    - 패턴인식
    - 사실 이 개념이 선입견이죠? 좋게 말하면 직관

![img_19.png](images/img_19.png)

## 이진수를 이용한 꼼수

![img_20.png](images/img_20.png)

- 한 자리에 오는 수가 2개라서 가능한 테크닉

![img_21.png](images/img_21.png)

- 이진법에서 값이 1씩 늘어날 때 마다 최하위 비트(가장 오른쪽 비트)가 0/1을 번갈아 반복하게 됨
- 각 자릿수마다 불 대수 연산을 적용해서 '비트 연산'을 구현할 수 있음

### 정수 변수의 값 0으로 초기화 하기

![img_22.png](images/img_22.png)

![img_23.png](images/img_23.png)

![img_25.png](images/img_25.png)

- AND, OR, NOT, XOR 다 시도해보자

![img_24.png](images/img_24.png)

![img_26.png](images/img_26.png)

![img_27.png](images/img_27.png)

![img_28.png](images/img_28.png)

- 우왕 XOR

![img_29.png](images/img_29.png)

- 동일한 비트패턴을 비트연산하면 모든 비트를 0으로 초기화할 수 있음

![img_30.png](images/img_30.png)

- 요즘 언어는 컴파일러가 최적화해서 저렇게 바꿔줌

### 두 정수의 값을 교환하기(swap)

![img_31.png](images/img_31.png)

![img_32.png](images/img_32.png)

![img_33.png](images/img_33.png)

![img_34.png](images/img_34.png)

- 교집합 영역:
    - a,b에서 값이 동일한 비트

![img_35.png](images/img_35.png)

![img_36.png](images/img_36.png)

![img_37.png](images/img_37.png)

- 교집합 영역은 비우고, 아닌 부분은 채워야함

![img_38.png](images/img_38.png)

![img_39.png](images/img_39.png)

![img_40.png](images/img_40.png)

![img_41.png](images/img_41.png)

- 신기하죠
- 수식으로 증명도 가능

### 2진수에서 주어진 숫자가 짝수인지 홀수인지 판단

![img_42.png](images/img_42.png)

![img_43.png](images/img_43.png)

![img_44.png](images/img_44.png)

- 최하위 비트 빼고는 모두 짝수일 수 밖에

![img_45.png](images/img_45.png)

- 최하위 비트가 결국 홀/짝을 결정

## 비트 마스킹

![img_46.png](images/img_46.png)

- 컴퓨터에서 0과 비교할 수 있으면 개미눈꼽만큼 성능에 도움이 됨

![img_47.png](images/img_47.png)

- 모듈러 연산 대신에 비트 연산

![img_48.png](images/img_48.png)

- 최하위 비트만 작성했는데 나머지 비트는 0으로 채워짐
- 최하위 비트 위치만 마스킹(비트값을 1로)하고 나머지는 0으로 채워서 AND 연산으로 원하는 위치인 최하위 비트 위치가 0인지 1인지 값을 알 수 있음

![img_49.png](images/img_49.png)

## 비트 마스킹: 양수/음수 판단

![img_50.png](images/img_50.png)

- 최상위 비트가 양수/음수를 결정함

![img_51.png](images/img_51.png)

- 최상위 비트를 비트마스킹으로

![img_52.png](images/img_52.png)

- 1000_0000_0000_0000_0000_0000_0000_0000
- 16진수

![img_53.png](images/img_53.png)

- 최상위 비트를 마스킹해서 값이 0이면 양수, 아니면 음수

## 비트 플래그

![img_54.png](images/img_54.png)

- 32비트 정수형이면 불리언(2진수)를 32개 담을 수 있음
- 비트플래그 32개
    - flags

![img_55.png](images/img_55.png)

![img_56.png](images/img_56.png)

- CPU 오버플로우/언더플로우 플래그에서 사용됨

### 특정 플래그를 켜는 방법

![img_57.png](images/img_57.png)

![img_58.png](images/img_58.png)

- 다른 비트는 그대로 나와야하고, 특정 플래그는 반드시 1이되어야함
    - OR연산!

### 특정 플래그를 끄는 방법

![img_59.png](old_note/COMP1000/week7/images/img_59.png)

- NOT과 AND의 조합

![img_60.png](old_note/COMP1000/week7/images/img_60.png)

- 다른 비트는 그대로 나와야하고, 특정 플래그는 반드시 0이되어야함

### 특정 플래그를 토글하는 법

![img_61.png](images/img_61.png)

![img_62.png](images/img_62.png)

- 0과 XOR하면 값이 그대로
- 1과 XOR하면 값이 반드시 뒤집힘

### 비트 플래그 예

![img_63.png](images/img_63.png)

![img_64.png](images/img_64.png)

- 데이터 용량을 줄일 수 있음
- bit flags 값을 비교해서 여러 플래그를 동시에 비교할 수 있음
    - 동일한 상태인지 확인할 때 유용함!

## 비트마스킹: 데이터 패킹(data packing), 기수(radix) 정렬

![img_65.png](images/img_65.png)

- 'bit flags'는 데이터 패킹이 적용된 사례

![img_66.png](images/img_66.png)

- 데이터 패킹을 사용하는 근본적인 이유:
    - 용량 줄이기

![img_67.png](images/img_67.png)

![img_68.png](images/img_68.png)

- 정렬 속도를 높이기 위해서 데이터 패킹을 사용할 수 있음

![img_69.png](images/img_69.png)

- delivery(배송 수단)이 첫번째 기준
- color가 두번째 기준
- shape가 세번째 기준

![img_70.png](images/img_70.png)

- 기수(radix) 정렬
- 기준으로 먼저 사용할 플래그를 상위에 배치
- 상위 비트값이 자리수가 높아서 크기 비교하면 기준의 우선순위에 따라 정렬할 수 있음

## 비트 마스킹: 대소문자 변환

![img_71.png](images/img_71.png)

- 32라는 차이값을 활용하자

![img_72.png](images/img_72.png)

- 32는 2^5
- 비트패턴으로 100000

![img_73.png](images/img_73.png)

- 1이 하나라서 비트 마스킹에 어울리죠

![img_74.png](images/img_74.png)

![img_75.png](images/img_75.png)

![img_76.png](images/img_76.png)

- from 소문자 to 대문자:
    - 있던 비트 끄기
    - NOT + AND
- from 대문자 to 소문자:
    - 없던 비트 켜기
    - OR
- 토글로 구현하기:
    - 현재 대문자인지 소문자인지 몰라도 변환 가능!
    - XOR

![img_77.png](images/img_77.png)

## 비트 마스킹: 2의 승수인지 판단하기

![img_78.png](images/img_78.png)

- 2의 승수:
    - 비트패턴에서 1이 하나고 나머지가 0이면 됨

![img_79.png](images/img_79.png)

- 주어진 수 n이 1이될 때 까지 2로 나누는 동작을 반복
- 반복 중간에 나머지가 1이면 홀수
- 끝까지 나눠서 1이되면 최상위 비트만 1인 2의 승수라고 판단

![img_80.png](images/img_80.png)

- 반복문 없이 구할 수 있을까?

![img_81.png](images/img_81.png)

```c#
if (x > 0 && (x & (x - 1)) == 0) {
    // 2의 n승
}
```

## 이진수 꼼수들이 중요한 이유

![img_82.png](images/img_82.png)

- 이진수에 대한 이해를 높이기 위함

![img_83.png](images/img_83.png)

- 회로수 줄이기

![img_84.png](images/img_84.png)

- 이와 관련된 유명한 책도 있음
    - 교양 정도
