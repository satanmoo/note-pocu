# Week5

## 논리

![img.png](old_note/COMP1000/week5/images/img.png)

![img_1.png](old_note/COMP1000/week5/images/img_1.png)

## 명제

![img_2.png](old_note/COMP1000/week5/images/img_2.png)

- 참 또는 거짓으로 결정할 수 있는 말(문장)

![img_3.png](old_note/COMP1000/week5/images/img_3.png)

- 명제가 아닌 문장도 있음

## 진리표(truth table)

![img_4.png](old_note/COMP1000/week5/images/img_4.png)

- 진리:
  - 참/거짓
- 단순 명제의 진리값으로 가능한 것은 참 or 거짓 뿐

## 합성 명제(compound proposition)

![img_5.png](old_note/COMP1000/week5/images/img_5.png)

- 크게 둘로 나뉨
  - 단순 명제를 논리연산자로 결합
  - 조건 명제(implication)

## 논리 부정(not, negation)

![img_6.png](images/img_6.png)

- 여집합 개념
- 단순 명제, 합성 명제 모두 적용 가능

## 모든과 어떤의 부정

![img_7.png](images/img_7.png)

- all vs any
- 모든 것이 이렇다 vs 어떤 것은 이렇지 않다

![img_8.png](images/img_8.png)

- 하나라도 있으면 any

![img_9.png](images/img_9.png)

![img_10.png](images/img_10.png)

![img_11.png](images/img_11.png)

![img_12.png](images/img_12.png)

- '모든 것은 xx다' 라는 명제를 증명하기 어려움
  - 이 명제가 거짓인 것을 증명하기는 쉬움

- '어떤 것은 xx다' 라는 명제가 참이라고 증명하기 쉬움
  - 이 명제가 거짓인 것을 증명하기는 어려움

## 논리곱(and)

![img_13.png](images/img_13.png)

- 합성 명제를 만드는 연산
- 명제의 논리곱:
  - 두 명제가 모두 참이면 참

![img_14.png](images/img_14.png)

## 논리합(or)

![img_15.png](images/img_15.png)

- 합성 명제를 만드는 연산
- 명제의 논리합:
  - 두 명제 중 하나라도 참이면 참

![img_16.png](images/img_16.png)

## 배타적 논리합(xor)

![img_17.png](images/img_17.png)

- 합성 명제를 만드는 연산
- 두 명제의 진리값이 서로 다르면 참

![img_18.png](images/img_18.png)

- 하드웨어에서 많이 사용함

## 진리표 정리

![img_19.png](images/img_19.png)

## 항진 명제: 언제나 참인 명제

![img_20.png](images/img_20.png)

- 집합에서 전체 집합
- 합성 명제 안의 단순 명제의 진리값과 관계없이 언제나 참
  - '합성 명제'이기도 한 것을 알 수 있음
- 단순 명제로는 만들 수 없음

## 모순 명제: 언제나 거짓인 명제

![img_21.png](images/img_21.png)

- 집합에서 공집합
- 합셩 명제 안의 단순 명제의 진리값과 관계없이 언제나 거짓
  - 합성 명제
- 단순 명제로는 만들 수 없음

![img_22.png](images/img_22.png)

## 불 대수

- 컴퓨터 연산의 기반

![img_23.png](images/img_23.png)

- 대수학(대신)

![img_24.png](images/img_24.png)

- bool 타입의 어원

![img_25.png](images/img_25.png)

- 디지털 회로 설계에 사용함
- 컴퓨터의 트랜지스터는 비트(참/거짓)을 표현하기 적합함

![img_26.png](images/img_26.png)

- 조건문
- 논리 연산
- 2진수 연산

![img_27.png](images/img_27.png)

- 집합과 밀접한 연관

![img_28.png](images/img_28.png)

- 사실 거기서 거기임

![img_29.png](images/img_29.png)

- 기호가 다양하지만
- 참고해서 찾아보자

### 연산 우선 순위

![img_30.png](images/img_30.png)

- 곱하기 > 더하기

![img_31.png](images/img_31.png)

- 비트 연산 > 논리 연산

### 비트 연산

![img_32.png](images/img_32.png)

- 한 비트만 보는 연산
  - 0 == false
  - 1 == true

![img_33.png](images/img_33.png)

- 각 비트별로 연산
  - 칸 마다 연산하다고 생각

## 불 대수 연산 법칙

![img_34.png](images/img_34.png)

- 0과 OR 연산하면 동일한 값
- 1과 AND 연산하면 동일한 값
- 1과 OR 연산하면 반드시 참
- 0과 AND 연산하면 반드시 거짓
- 자기와 AND, OR 연산은 자기
  - 벤다이어그램 그려보기
- 어떤 값에 NOT 2번 연산하면 그대로
- 벤다이어그램으로 못할게 없다

## 교환 법칙

![img_35.png](images/img_35.png)

- 진리표, 벤다이어그램 그리는 연습하기

## 결합 법칙

![img_36.png](images/img_36.png)

![img_37.png](images/img_37.png)

![img_38.png](images/img_38.png)

- 진리표는 아주 훌륭한 증명 방법이다

## 분배 법칙

![img_39.png](images/img_39.png)

![img_40.png](images/img_40.png)

- 이건 산술 연산과 동일하죠?
  - 곱셈의 분배법칙

![img_41.png](images/img_41.png)

- 불 대수에서는 성립함
- 진리표로 모든 경우의 수를 확인해서 증명

## 흡수 법칙

![img_42.png](images/img_42.png)

- 이건 벤다이어그램이 더 쉬움

## 기타 연산식

![img_43.png](images/img_43.png)

1. 인수 분해
2. 전개
   - 애매하면 벤다이어그램 ㄱㄱ
3. 전개
4. 벤다이어그램

<br></br>

- 솔직히 벤다이어그램이 제일 편함

## 드 모르간 법칙

![img_44.png](images/img_44.png)

## 논리회로

![img_45.png](images/img_45.png)

![img_46.png](images/img_46.png)

- 논리연산:
  - 1개 이상 논리 입력 => 1개의 논리 출력
- 불 대수 기반

## 게이트(gate)

![img_47.png](images/img_47.png)

- 논리 회로의 기초 구성요소
- 불 연산 하나를 구현
- 전류의 흐름이 불 연산 하나를 표현
- 데이터를 저장하는 개념은 아님!

## 기본 게이트

![img_48.png](images/img_48.png)

- NOT 게이트는 피 연산자가 1개임
  - 단항 연산자

## NAND 게이트

![img_49.png](images/img_49.png)

- AND + NOT
  - AND 결과를 뒤집음

## NOR 게이트

![img_50.png](images/img_50.png)

## XNOR 게이트

![img_51.png](images/img_51.png)

- 두 값이 같으면 참

## 범용 게이트

![img_52.png](images/img_52.png)

- NAND, NOR은 모두 범용게이트
  - NOT, AND, OR, XOR 등등 모두 만들 수 있음

### NAND 게이트를 이용한 NOT 구현

![img_53.png](images/img_53.png)

- 불 대수를 이용함

## 논리 회로를 이용한 비트 연산

![img_54.png](images/img_54.png)

- 비트 연산이 무엇인지 생각해보자
  - 각 비트 별로 불 대수를 적용함

<br></br>

- 유사하게 비트자리마다 게이트를 써서 연산하면 됨

### 4비트 AND 연산

![img_55.png](images/img_55.png)

- 아래 첨자는 비트의 인덱스라고 생각하면 됨

![img_56.png](images/img_56.png)

- 덧셈을 구현할 때는 비트 연산 이상의 받아 올림, 받아 내림을 구현해야해서 복잡

## 게이트의 조합

![img_57.png](images/img_57.png)

- 컴퓨터의 모든 연산은 게이트를 조합함

<br></br>

- 가산기는 '더하기' 기능을 구현
  - '반가산기'는 받아올림을 받는 것을 고려하지 않음
    - 가장 오른쪽(마지막)자리, 1의 자리
  - '전가산기'는 받아올림을 고려함

<br></br>

- 예를들어 반가산기를 구현해보면
  - 0 + 0 == 0
  - 0 + 1 == 1
  - 1 + 0 == 1
  - 1 + 1 == 0
    - 받아올리고 자기 자리는 0이되니
  - 위 결과는 XOR 불 연산
  - 그래서 그림에 S에 XOR 게이트로 표현
  - 받아올림은 1 + 1만 발생
    - AND 불 연산

- 여기에 전가산기를 고려하면 자기보다 아래 자리에서 받아올리는 비트를 저장하는 동작을 구현하면 됨

## 또 다른 게이트 조합 예시

![img_58.png](images/img_58.png)

![img_59.png](images/img_59.png)

- 두 회로는 똑같은 결과를 가져옴
- 게이트를 적게 사용하고 같은 결과를 가져오는 것이 좋음

![img_60.png](images/img_60.png)

![img_61.png](images/img_61.png)

- 카노 맵
  - 불리언 연산을 줄이는 맵
- 프로그래머에게 중요한 것은 if문에서 조건문
