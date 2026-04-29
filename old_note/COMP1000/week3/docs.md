# Week3

## 실수

- 어떤 정수와 정수 사이의 실수는 무한하다.
    - 아날로그에 가까움
- 반면 컴퓨터는 디지털로 유한함

![img.png](old_note/COMP1000/week3/images/img.png)

- 유리수/무리수 구분은 큰 의미가 없음.
- 수학적인 개념으로 정수가 유리수에 포함됨
- 하지만 컴퓨터에서는 표현할 때 실수형과 정수형을 구분하자
    - 물론 정수를 실수형으로 쓸 수 있긴한데, 권하지 않음

### 10진법 실수

![img_1.png](old_note/COMP1000/week3/images/img_1.png)

- 진법의 규칙인 자리 수가 늘어나고 줄어들 때 10을 곱하고, 나누는 과정이 적용됨

![img_2.png](old_note/COMP1000/week3/images/img_2.png)

### 2진법 실수

![img_3.png](old_note/COMP1000/week3/images/img_3.png)

- 마찬가지로 자리 수에 규칙 적용

## 실수의 10진수 <=> 2진수 변환

![img_4.png](old_note/COMP1000/week3/images/img_4.png)

- 19를 만들기 위해 역으로 생각해서
    - 16
    - 2
    - 1
    - 이렇게 생각해서 2진수 변환하는 논리를 유사하게 적용할 수 있음

![img_5.png](old_note/COMP1000/week3/images/img_5.png)

- 같은 로직 적용

![img_6.png](old_note/COMP1000/week3/images/img_6.png)

- 0.101xxx
    - xxx에 들어가는 0은 생략

![img_7.png](old_note/COMP1000/week3/images/img_7.png)

- 정수 부분 먼저

![img_8.png](old_note/COMP1000/week3/images/img_8.png)

- 같은 로직을 적용

### 일반화

![img_9.png](old_note/COMP1000/week3/images/img_9.png)

- 양변에 2를 곱한다
    - 0.5보다 1이 계산이 편함

![img_10.png](old_note/COMP1000/week3/images/img_10.png)

- 'x1'의 값은 몇이 되어야 할까?
    - 1이 되어야 함
    - x2 항부터 ... xn 항까지 아무리 더해도 1에 근사
    - 무한등비급수

![img_11.png](old_note/COMP1000/week3/images/img_11.png)

![img_12.png](old_note/COMP1000/week3/images/img_12.png)

- 양변에서 1을 빼서 x2가 가장 왼쪽의 항이 되도록 식을 변형
- 위 과정을 반복해보자

![img_13.png](old_note/COMP1000/week3/images/img_13.png)

- x2는 0 or 1
    - 1이 될 수 없음!!!
    - 반드시 0

![img_14.png](old_note/COMP1000/week3/images/img_14.png)

- 다시 양변 2곱하고 반복

![img_15.png](old_note/COMP1000/week3/images/img_15.png)

- x3이 1이되면 좌변이 0이라 종료

![img_16.png](old_note/COMP1000/week3/images/img_16.png)

- 이제 x4부터는 모두 0일 수 밖에 없음

![img_17.png](old_note/COMP1000/week3/images/img_17.png)

![img_18.png](old_note/COMP1000/week3/images/img_18.png)

- 풀이 프로세스
- 2를 곱하고 정수를 따와서 비트로 변환

![img_19.png](old_note/COMP1000/week3/images/img_19.png)

### 2^n 을 활용하는 2진법의 논리

![img_20.png](old_note/COMP1000/week3/images/img_20.png)

- 진법의 개념

### 무한으로 반복되는 2진법으로 나타낸 실수

![img_21.png](old_note/COMP1000/week3/images/img_21.png)

- 도돌이표

![img_22.png](old_note/COMP1000/week3/images/img_22.png)

- 정확히 2진수로 표현 못하는 실수가 존재함!
- '0.1'을 2진수로 표현하면 무한히 반복되다가, 비트 수 제한으로 숫자가 누락(truncated)됨
    - 여기서 정확도, 오차의 개념이 등장

![img_23.png](old_note/COMP1000/week3/images/img_23.png)

- 무한 반복되는 실수는 컴퓨터에 어떻게 저장해야하나..?

![img_24.png](old_note/COMP1000/week3/images/img_24.png)

- 2종류의 방식을 배운다.
- 고정 소수점 수
- 부동 소수점 수(IEEE 754)

## 고정 소수점 수

![img_25.png](old_note/COMP1000/week3/images/img_25.png)

- 점이 고정됨
- N자리 숫자가 있을 때 언제나 정해진 자리에 소수점이 찍힘

![img_26.png](old_note/COMP1000/week3/images/img_26.png)

- 8비트 예시
- 언제나 3비트를 소수에 사용
- 음수 표현해보는 연습하기

![img_27.png](old_note/COMP1000/week3/images/img_27.png)

- 고정 소수점 수를 지원하는 라이브러리에서 보통 절반은 정수 나머지는 소수점에 비트 사용

![img_28.png](old_note/COMP1000/week3/images/img_28.png)

- 12 34 56 7C
    - 10진수 한 자리마다 비트 패턴으로 표현
- 참고로 C는 BCD에서 양수를 나타내는 비트

### 고정 소수점 수의 장점

![img_29.png](old_note/COMP1000/week3/images/img_29.png)

- 표현할 수 있는 범위의 값은 확실히 표현 가능
    - 왜? 정수처럼 정밀도 100%
- CPU에서 실수 계산 전담장치가 없을 시절에 구현해서 사용했음

### 고정 소수점 수의 단점

![img_30.png](old_note/COMP1000/week3/images/img_30.png)

- 너무 직관적이게도 표현 가능한 수의 범위가 작음
- 정수 표현 범위가 늘면 소수점 표현 범위가 줄어듬
- CPU에 실수 계산 전담장치는 부동 소수점만 지원해서, 고정 소수점 계산은 속도가 굉장히 느림

![img_31.png](old_note/COMP1000/week3/images/img_31.png)

- 연산 결과 정밀도 손실 및 오버플로우
- 생각해보면 직관적이다
    - 오버플로우는 정수 표현법의 논리가 그대로 적용되서 생겼다고 이해

## 부동 소수점 수

- 이 개념을 잘 배우면 디버깅에 굉장히 유리함

![img_32.png](old_note/COMP1000/week3/images/img_32.png)

- 소수점의 위치가 고정이 아님

![img_33.png](old_note/COMP1000/week3/images/img_33.png)

- 표현 가능한 범위가 엄청 증가

### 부동 소수점 수의 장점

![img_34.png](old_note/COMP1000/week3/images/img_34.png)

- 유효숫자는 바뀌지 않는데, 소수점을 이동하면 당연히 엄청 넓겠죠?
- CPU, GPU, 프로그래밍 언어에서 지원

### 부동 소수점 수의 단점

![img_35.png](old_note/COMP1000/week3/images/img_35.png)

![img_36.png](old_note/COMP1000/week3/images/img_36.png)

- 정밀도 문제
- 근데 생각보다 문제가 안 되는 경우가 있음
    - ex: 그래픽의 연기 효과

## 과학적 표기법(Scientific notation)

![img_37.png](old_note/COMP1000/week3/images/img_37.png)

- 너무 크거나 작은 수를 읽기 편하게 작성

![img_38.png](old_note/COMP1000/week3/images/img_38.png)

- 가수
    - 부동 소수점 수의 유효 숫자
    - significand(유효하고 굉장히 중요한 것)
- 지수
    - 정수로 이루어짐
    - 소수점의 위치(자리 수)를 나타냄

## 유효 숫자

![img_39.png](old_note/COMP1000/week3/images/img_39.png)

- 수의 정확도와 정밀도에 영향을 줌

![img_40.png](old_note/COMP1000/week3/images/img_40.png)

- 위 3가지 케이스를 이해하기

## 정확도와 정밀도

![img_41.png](old_note/COMP1000/week3/images/img_41.png)

- 정확도:
    - 원하는 값에 얼만큼 근접했는가
- 정밀도:
    - 각 데이터끼리 얼마나 가까운가

![img_42.png](old_note/COMP1000/week3/images/img_42.png)

![img_43.png](old_note/COMP1000/week3/images/img_43.png)

- 실수 계산에도 정확도/정밀도 개념이 적용

## 정규화한 과학적 표기법

![img_44.png](old_note/COMP1000/week3/images/img_44.png)

- 어떤 대상을 일정한 규칙을 따르도록 바꾸는 것
    - 양자화와 비슷함
    - 스케일을 규격화

- 가수의 제일 왼쪽에 있는 유효 숫자를 정수부의 첫 번째 자리로 이동

![img_45.png](old_note/COMP1000/week3/images/img_45.png)

- 정수부에 딱 1자리만 남음
- 2진수의 가수에서 정수부는 1이 확정

![img_46.png](old_note/COMP1000/week3/images/img_46.png)

- 컴퓨터는 정규화된 과학적 표기법을 사용

## IEEE 754 Single

![img_47.png](old_note/COMP1000/week3/images/img_47.png)

- 지수 비트:
    - 8비트로 2^8개 표현
        - 부호 없이 절대값으로 비트 표현
    - 음의 지수도 표현하기 위해 -127을 해서 실제 지수를 구함
    - 즉 표현 범위의 수 중 절반은 음의 지수로 할당

![img_48.png](old_note/COMP1000/week3/images/img_48.png)

- 정규화된 과학적 표기법이 적용되었기 때문에 가수의 정수는 반드시 1
- 비트패턴에서 2^-1 부터 시작

![img_49.png](old_note/COMP1000/week3/images/img_49.png)

- 정규화 예시
    - 부호
    - 가수
    - 지수
        - +127해서 비트에 저장!

- '수 => 비트 패턴' 변환에서 지수에 +127
- '비트 패턴 => 수' 변환에서 지수에 -127

### 부동 소수점의 양수와 음수

![img_50.png](old_note/COMP1000/week3/images/img_50.png)

- 부호절대값 방식
- CPU에서 가산기를 활용하지 않고 별도의 부동소수점 처리 장치가 있기 때문에 2의 보수로 덧셈을 하는 연산 X

### 가수비트

![img_51.png](old_note/COMP1000/week3/images/img_51.png)

- 정밀도:
    - 몇 비트로 수를 표현하느냐?
    - '정확도/정밀도'에서 정밀도랑 다른 개념
    - 원래 섞어 쓰는 용어
- 명시적으로 23비트 저장하지만 가수의 정수 1자리는 반드시 1이라 24비트
- '유효 숫자' 와 같은 말

![img_52.png](old_note/COMP1000/week3/images/img_52.png)

- sign:
    - 부호 비트
    - 0 또는 1
- e_bit:
    - 지수 비트에 저장된 값
    - -127해서 정규화된 과학적 표기법의 지수를 구함
- b:
    - 가수비트에 저장된 값
        - 2진수 가수에서 소수 부분 그대로 표현함
    - 등비 수열의 합

![img_53.png](old_note/COMP1000/week3/images/img_53.png)

- 가수가 표현하는 값을 10진수로 변경하기 위해 2^n 구해서 등비수열의 합 계산하면 됨

![img_54.png](old_note/COMP1000/week3/images/img_54.png)

## 지수와 지수비트

![img_116.png](old_note/COMP1000/week3/images/img_116.png)

- 지수를 구하려면?
    - 지수 비트에 저장된 비트 패턴을 부호없는 정수로 10진수 변환
    - 변환한 값에서 -127
    - bias

- 역으로 지수를 저장하려면?
    - 먼저 정규화해서 지수를 구함
    - '지수 + 127' 10진수 결과를 비트 패턴으로 변경해서 8비트에 저장

![img_117.png](old_note/COMP1000/week3/images/img_117.png)

- 표현 가능한 지수 범위가 부족함
    - 모두 0인 경우 (0 - 127)
    - 모두 1인 경우 (255 - 127)

### 지수값 -127(지수비트 0x00)

![img_118.png](old_note/COMP1000/week3/images/img_118.png)

- 현재 공식에서 어떻게 0을 표현할 것인가?
- 위 값에서 어떤 값을 부호비트, 지수비트, 가수비트에 넣어봤자 0을 구할 수 없음

![img_119.png](old_note/COMP1000/week3/images/img_119.png)

![img_120.png](old_note/COMP1000/week3/images/img_120.png)

![img_121.png](old_note/COMP1000/week3/images/img_121.png)

- 지수비트가 모두 0인 경우 예외적으로 새로운 공식을 적용
    - 지수 비트값 대신 고정 상수
    - 가수 비트에서 가수로 변환할 때 정수 2^0자리가 0으로 시작한다고 간주

<br/>

- 위 새로운 공식에서 부호비트 제외하고 지수비트, 가수비트 모두 0이면 0을 표현할 수 있음
    - 지수비트 0이라서 새로운 공식 적용
    - 가수비트 모두 0이면 0.000...0을 표현하니까!
    - 부호 비트를 포함해서 모든 비트 패턴이 0이면 0을 표현하게되는 직관적이고 정수와 동일한 논리

<br/>

- 새로운 공식에서 가수비트를 변화해서 0에 아주 가까운 수 역시 표현 가능!
    - 비정규화 수

### 지수비트 0x00: 비정규화 수

![img_122.png](old_note/COMP1000/week3/images/img_122.png)

- 비정상 값
    - 지수비트0 + 가수비트 0아님 => 비정규화 수
    - 지수비트, 가수비트 모두 0이면 0을 표현(굳이 비정규화 수라고 부르지는 않음)

- 0에 아주 가까운, 절대값이 엄청 작은 숫자를 표현할 수 있음
- 슬라이드에서 파란색으로 표시된 범위

![img.png](old_note/COMP1000/week3/img.png)

### 지수값 128(지수비트 0xFF)

- 255 - 127(bias) == 128
- 가수비트의 값에 따라 특별한 값을 표현
- 가수비트가 모두 0이면:
    - 무한대
    - 부호비트는 독립적으로 부호 적용해서 음의 무한, 양의 무한
- 가수비트가 0x00이 아닐 때:
    - 나머지 경우
    - Nan
    - 잘못된 계산, 실수로 표현할 수 없는 값

### 지수 비트 정리

![img_123.png](old_note/COMP1000/week3/images/img_123.png)

## IEEE 754 Single Example

### 3.75 비트패턴으로 저장

![img_55.png](old_note/COMP1000/week3/images/img_55.png)

- 정수 부분 소수 부분 분리해서 10진수 => 2진수 변환
    - 변환 방식은 위에서 배운 방식 ('x1 * 2^-1 + x2 * 2^-2...' 처럼 항을 이용하는 방식)
    - 3.75(10) => 11.11(2)

![img_56.png](old_note/COMP1000/week3/images/img_56.png)

- 2진법으로 변환된 값을 가수로 정규화
    - 11.11(2) => 1.111 * 2^1

![img_57.png](old_note/COMP1000/week3/images/img_57.png)

- 정규화 결과 지수 비트 구하기:
    - '지수 + 127' 의 결과를 비트 패턴으로 표시
    - 1 + 127 => 1000_0000
- 가수 비트 구할 수 있음
    - 가수 비트 총 23비트 남는 비트는 0으로 채움
    - 가수 값에서 정수는 반드시 1일 수 밖에 없기 때문에, 정수(2^0의 자리)를 제외하고 소수 부분만 비트로 저장
    - 1.111 => 1110_0000_00.... (총 23비트)

![img_58.png](old_note/COMP1000/week3/images/img_58.png)

### 비트패턴에서 3.75 복원

![img_59.png](old_note/COMP1000/week3/images/img_59.png)

- 부호:
    - 0
    - 양수
    - (가수 * 지수)에 1을 곱할 예정
- 지수:
    - 128 - 127 == 1
    - 가수에 2^1으 곱할 예정
- 가수:
    - 1.111(2)
    - 가수의 정수는 반드시 1이기 때문에 1을 추가해서 복원

- 1.111(2) * 2^1 == 11.11(2)를 10진수로 최종적으로 변환하면 3.75

![img_60.png](old_note/COMP1000/week3/images/img_60.png)

### 3.14 비트패턴으로 저장

![img_61.png](old_note/COMP1000/week3/images/img_61.png)

- 10진수에서 2진수 변환:
    - 정수: 3(10) => 11(2)
    - 소수: 가수자리가 24개가 될 때까지 표현(2진수로 표현할 때 한계)
        - 정보가 유실됨

![img_124.png](old_note/COMP1000/week3/images/img_124.png)

- 정규화:
    - 11.0010....(2)
    - 1.10010....(2) * 2^1

### 비트패턴에서 3.14

![img_62.png](old_note/COMP1000/week3/images/img_62.png)

- 다시 10진수로 변환해서 얼마나 유실이 됬는지 확인할 수 있음
- 가수에서 소수점 아래 23개까지만 원본과 동일

![img_63.png](old_note/COMP1000/week3/images/img_63.png)

- 반올림 된 것 마냥 숫자가 커짐

![img_64.png](old_note/COMP1000/week3/images/img_64.png)

- 0.1도 32비트 부동소수점 비트패턴으로 저장했다가, 다시 원본으로 복원하면 오차가 발생함

## 반올림 오차(rounding error)

![img_65.png](old_note/COMP1000/week3/images/img_65.png)

- 가수 비트가 23개 제한이라서(정수 포함 24자리 까지 표현) 근사치

## IEEE 754 Single 범위

### 정규화 한 수

![img_66.png](old_note/COMP1000/week3/images/img_66.png)

- 정규화를 이용한 공식을 적용

<br/>

- 절대값의 최소를 어떻게 만들 수 있을까?
- 우선 지수 비트는 1로 2^(1-127)이 최소값을 만드는 지수
    - 지수 비트에서 1(0000_0001)이 최소인 이유:
        - 지수 비트가 모두 0이면 예외 케이스로 특별한 수를 나타냄
        - 비정규화 공식을 적용해야함
- 가수 비트 패턴에서 최소는 모두 0이면, 1.0
- 그래서 절대값 중 가장 크기가 작은 값은 1 * 2^(-126)

<br/>

- 절대값의 최대 만들기:
- 지수 비트는 254로 2^(254-127)이 최소값을 만드는 지수
    - 지수 비트에서 254가 최대인 이유:
        - 지수 비트가 모두 1이면(1111_1111) 값이 255이다. 이 경우 Nan, 무한대를 나타낼 때 사용
        - 지수 비트가 (1111_1110)이 최대 지수로 254
- 가수 비트 패턴에서 최대는 모두 1
    - 1.111111.....
    - 소수점 아래 23개
    - 등비수열 합 공식
    - 아래와 같이 계산해도 됨

```text
  10.000000000...0000 (2)
 - 0.000000000...0001 (2^(-23))
   1.11111111....1111
```

- 양수/음수 부호만 반대로 하면 되기 때문에 수 범위 동일함

### 비정규화 한 수

![img_67.png](old_note/COMP1000/week3/images/img_67.png)

- 지수는 -126으로 고정
    - 지수 비트는 모두 0
- 23개의 비트(b22...b0)으로 가수 표현
    - 가수의 정수가 0으로 간주
- 가수(b22...b0)가 0이면 최소 절대값인 0
- 절대값 중 0과 가장 가까운 값 구하기:
    - 가수: 0.00000...1
        - 소수점 아래 23개
    - 여기에 고정된 지수를 곱하변 2^(-23) * 2^(-126) == 2^(-149)
- 절대값 중 0과 가장 먼 값 구하기:
    - 가수: 0.1111...1
    - 등비수열 합 공식
    - 아래와 같이 계산
        - 1 - 2^(-23)
    - 여기에 고정된 지수 곱하면
        - 2^(-126) - 2^(-149)
        - 근사값으로 2^(-126)으로 표현
    - 이렇게 표현하면 정규화한 수에서 부동 소수점 범위 구할 때 절대값의 최소값과 일치함

```text
 1.0000...0 (1)
-0.0000...1 (2^(-23))
 0.1111...1
```

### 정규, 비정규 범위 합치기

![img_68.png](old_note/COMP1000/week3/images/img_68.png)

- 정규화로 표현해서 구한 부동 소수점 범위와 비정규화로 표현해서 구한 부동 소수점 범위를 합치면 위와 같음
    - 트릭으로 딱 정규화한 수에서 절대값의 최소값이랑 비정규화 수에서 절대값의 최대와 일치하게 만듬
    - 위에서 근사치 사용한 트릭

## IEEE 754 Single 정밀도

![img_69.png](old_note/COMP1000/week3/images/img_69.png)

- 이 문장의 의미를 생각해보자

![img_70.png](old_note/COMP1000/week3/images/img_70.png)

- 개념적으로 이상함

![img_71.png](old_note/COMP1000/week3/images/img_71.png)

- 잘못된 표현임

### 잘못된 점 1: 유효 숫자가 빠짐

![img_72.png](old_note/COMP1000/week3/images/img_72.png)

- 올바른 표현은 '유효 숫자'를 보장한다는 것
    - 즉 '가수'를 보장함

### 잘못된 점 2: 6,7,8,9개가 아님

![img_73.png](old_note/COMP1000/week3/images/img_73.png)

- 6 to 9
- 정확히 말하면 어떤 경우에는 6개까지, 어떤 경우에는 9개까지 보장
    - 딱 2가지 경우

### 정밀도 6의 개념

![img_74.png](old_note/COMP1000/week3/images/img_74.png)

- 10진수 실수(컴퓨터에 비트 패턴으로 저장되기 전)
- float(IEEE 754 Single 스펙으로 비트 패턴으로 저장)
- 10진수로 복원(비트 패턴을 스펙에 따라 되돌렸을 때 값)

<br/>

- 이 때 유효숫자(가수)6자리 까지는 항상 온전하게 원본값이 나옴

![img_75.png](old_note/COMP1000/week3/images/img_75.png)

- 유효숫자 6자리 원본 보장

![img_76.png](old_note/COMP1000/week3/images/img_76.png)

- '123456' 6자리까지 보장되나?
    - 아닌 것 같은데
    - 사실은 이게 보장 되는거임

![img_77.png](old_note/COMP1000/week3/images/img_77.png)

- 유효 숫자를 구할 때 정규화된 과학적 표기법을 사용함

![img_78.png](old_note/COMP1000/week3/images/img_78.png)

- 돌아온 값의 유효 숫자가 6개가 되도록 다시 맞춰야 함

![img_79.png](old_note/COMP1000/week3/images/img_79.png)

- 여기서 끊기
- 6자리

![img_80.png](old_note/COMP1000/week3/images/img_80.png)

- 나머지 자리의 수들은 어떻게 처리?

![img_81.png](old_note/COMP1000/week3/images/img_81.png)

- 반올림

![img_82.png](old_note/COMP1000/week3/images/img_82.png)

- 두 값이 이제 일치!
- 이게 스펙에 정의된 비트패턴에서 원본으로 복원하는 공식

![img_83.png](old_note/COMP1000/week3/images/img_83.png)

- 돌아온 값을 사람 기준으로 유효 숫자 자리를 6개로 맞추면 원래 값이 보장

### 정밀도 6 최종 정리

![img_84.png](old_note/COMP1000/week3/images/img_84.png)

- 즉 유효 숫자 6개까지는 바이너리 패턴으로 변환했다가 다시 원래 10진수 실수로 변환하고 원래의 유효 숫자 개수로 반올림해서 맞출 때 원래 유효 숫자 값이 그대로 나올 수 있음
    - 정밀도 6이면 유효숫자 7자리 부터는 원래값 보장 X
    - 7자리부터는 반올림을 하기 때문이죠!

![img_85.png](old_note/COMP1000/week3/images/img_85.png)

- 원본: 123.45612
- 변환 후 돌아와서 반올림: 123.45612
- 8자리까지 일치하는데?
    - 6개까지 반드시 보장한다는 거지, 넘는 수를 보장하지 않는다는 것은 아님!
    - 다른 8자리 유효숫자를 가지는 값은 보장이 안 될 수도

![img_86.png](old_note/COMP1000/week3/images/img_86.png)

- 값에 따라 보장될 수도 안 될수도 있음
    - 로그써서 계산하는 방법이 있음
    - 유효 비트의 개수는 24비트(암묵적 선행 1비트 + 실제 저장된 23비트)
    - 이 24비트가 갖는 10진수 정밀도는 24 * log2(밑이 10인 상용로그)
        - 7.225...
    - 대충 아이디어는 p비트 이진 유효 숫자는 2^p가지 서로 다른 값을 구별
    - 10진수로 10^d가지 값을 구별하려면 d자리가 필요
    - 2^p ≈ 10^d
    - 양변 로그 취해서 d를 구하면 됨
- 지수의 값에 따라 1비트 정도 정밀도를 잃어버리는 경우가 있어서 7.225 - 1 해서 6.2개 보장
- 이 때문에 6개 보장은 확실함

## 정밀도의 중요성

![img_87.png](old_note/COMP1000/week3/images/img_87.png)

- 이렇게 판단하면 안 됨

![img_88.png](old_note/COMP1000/week3/images/img_88.png)

- 유효숫자 6개까지 무엇이 안전할까?

![img_89.png](old_note/COMP1000/week3/images/img_89.png)

- 유효숫자 6개 넘으면 IEEE 754 Single 스펙에 따라 비트 패턴으로 저장했다가, 다시 복원했을 때 원본을 보장하지 못함

![img_90.png](old_note/COMP1000/week3/images/img_90.png)

- 정수로 변환하는 Hack
    - 센트 없애기
    - 표현 범위가 너무 줄어듬

![img_91.png](old_note/COMP1000/week3/images/img_91.png)

- float 으로 저장했을 때(비트 패턴으로 저장) 다시 그 값을 그대로 돌려받을 수 있는가?
- 이것이 문제다

![img_92.png](old_note/COMP1000/week3/images/img_92.png)

![img_93.png](old_note/COMP1000/week3/images/img_93.png)

- 쿼드 트리

![img_94.png](old_note/COMP1000/week3/images/img_94.png)

![img_95.png](old_note/COMP1000/week3/images/img_95.png)

- 유효 숫자 5자리는 아무 문제 없음
- 원점에 가까워서 정수 자리 값이 작음

![img_96.png](old_note/COMP1000/week3/images/img_96.png)

- 원점에서 먼 곳은 정수가 값이 커서 유효 숫자 자리가 늘어남

![img_97.png](old_note/COMP1000/week3/images/img_97.png)

- 'Z-fighting' 현상
- 뒷면에 그려져야할게 앞면에 그려지는 오류

![img_98.png](old_note/COMP1000/week3/images/img_98.png)

- 이걸 방지하는 꼼수도 있음

### 정밀도 9의 개념

![img_99.png](old_note/COMP1000/week3/images/img_99.png)

![img_100.png](old_note/COMP1000/week3/images/img_100.png)

- 32비트 (IEEE 754 Single)에서 가질 수 있는 가수:
    - 가수 비트에 23개 사용하고, 정규화 적용될 때는 정수비트 1이고, 비정규 일때는 0이니까
    - 대략 2^24

![img_101.png](old_note/COMP1000/week3/images/img_101.png)

- 누군가 의문을 제기함

![img_102.png](old_note/COMP1000/week3/images/img_102.png)

- 두 부동 소수점이 같은지 다른지 판단

![img_103.png](old_note/COMP1000/week3/images/img_103.png)

- 두 수의 값을 비교하려면 유효 숫자가 몇 개까지 읽어서 비교할까?
- 이 때 10진수로 비교

![img_104.png](old_note/COMP1000/week3/images/img_104.png)

![img_105.png](old_note/COMP1000/week3/images/img_105.png)

- 귀납적으로 유효 숫자를 늘려보자..
    - 유효숫자 범위를 딱 벗어난 바로 아래 자리에서 반올림을 하는게 규칙

![img_106.png](old_note/COMP1000/week3/images/img_106.png)

![img_107.png](old_note/COMP1000/week3/images/img_107.png)

![img_108.png](old_note/COMP1000/week3/images/img_108.png)

- 유효숫자를 벗어난 9자리에서 반올림하면 같음

![img_109.png](old_note/COMP1000/week3/images/img_109.png)

- 다르다는 것을 알 수 있음!
- 이 숫자들의 경우 유효 숫자를 8개까지 보면 됨
    - 9자리에서 반올림하기

![img_110.png](old_note/COMP1000/week3/images/img_110.png)

![img_111.png](old_note/COMP1000/week3/images/img_111.png)

![img_112.png](old_note/COMP1000/week3/images/img_112.png)

- 이 숫자들의 경우 유효 숫자를 9개까지 보면 됨
    - 10자리에서 반올림

![img_113.png](old_note/COMP1000/week3/images/img_113.png)

- 정밀도 9:
    - 어떤(모든) 두 숫자를 9자리까지 읽으면(10진수로 변환해서 읽기, 10번째 자리에서 반올림) 두 숫자가 같고 다름을 확인할 수 있음
- 즉 10진수 부동 소수점값을 9자리까지 읽어서 비교했는데 숫자가 동일하면? 그 두 숫자의 IEEE 754 Single 비트 패턴은 동일함
    - 지수가 동일하고 가수 패턴이 아주 조금 달라(위의 예시처럼)이 때 10진수 원본에서 유효숫자 9자리로 비교하면 두 수에 대한 정확한 비교 가능

<br/>

- 실제값:
    - 1011.5999755859375
- 유효숫자 9까지 정리:
    - 1.01159998 & 10^3
    - 10자리에서 반올림
- 정리한 수를 IEEE 754 Single 비트패턴으로 저장:
    - 0 10001000 11111001110011001100110
    - 이 비트패턴이 실제값 '1011.5999755859375' 비트패턴과 같음
- 비트패턴으로 저장한 수를 10진수로 복원
    - 1011.5999755859375

### 정밀도 9 최종 정리

![img_114.png](old_note/COMP1000/week3/images/img_114.png)

- IEEE 754 Single 비트패턴 2개가 다름
- 이를 10진수로 변환한 뒤 최대 9번째 유효숫자까지 확인해야 두 수가 같은지 확인할 수 있음

<br/>

- 그리고 이 9개의 유효 숫자만 다시 32비트 부동 소수점으로 변환하면 원래 수의 32비트 부동 소수점이 그대로

![img_115.png](old_note/COMP1000/week3/images/img_115.png)

- 참고 자료를 잘 보자

## 자료형 변환

![img_126.png](old_note/COMP1000/week3/images/img_126.png)

- from 정수 to 32비트 부동 소수점
    - 정밀도 손실
        - 앞의 precision6, precision9, '정확도/정밀도'에서 정밀도와 모두 다른 개념
    - 직관적으로 2^32로(32비트로) 정수를 표현하지만, 가수는 최대 24비트까지 표현하기 때문

<br></br>

```text
float a = 16777216;  // 표현 가능, 이진수 비트 패턴: 1000000000000000000000000
float b = 16777217;  // 표현 불가 → 가장 가까운 짝수인 16777216으로 반올림, 이진수 비트 패턴: 1000000000000000000000001
```

- 가수에서 마지막 25번째 비트는 잘리기 때문에 홀수 표현이 불가능

## 부동 소수점 비교하기

![img_125.png](old_note/COMP1000/week3/images/img_125.png)

- 부동 소수점끼리 비교할 때 동치 연산자를 사용하면 안 됨
- 앱실론으로 비교
- 두 부동 소수점의 차이가 앱실론보다 작으면 같다고 간주

## 64비트 부동 소수점

![img_127.png](old_note/COMP1000/week3/images/img_127.png)

- 규칙은 동일함
- 지수 비트, 가수 비트만 늘어남
- 따라서 from 32비트 부동 소수점 to 64비트 부동 소수점 캐스팅 전혀 문제 없음
- 정밀도 16
    - Single에서 정밀도 6과 대응
    - 소수점 이하 15자리까지(유효숫자 16자리)의 수를 IEEE 754 Double 스펙으로 바이너리 패턴으로 저장하고, 이를 스펙에 따라 10진수로 복원했을 때 반드시 원본값 보장

## 16비트 부동 소수점

![img_128.png](old_note/COMP1000/week3/images/img_128.png)

- IEEE 754 Half
- 규칙 동일함
- 지수 비트, 가수 비트만 줄어듬
- 정밀도 3
    - Single에서 정밀도 6과 대응

![img_129.png](old_note/COMP1000/week3/images/img_129.png)

- 색상 값을 그래픽 카드에 넣을 때 정규화
- 255.0f 로 나눠서 정규화
    - 이 수가 16비트 부동소수점

![img_130.png](old_note/COMP1000/week3/images/img_130.png)

- GPU에서 쉐이더 작성할 때
- 정밀도 3이 보장되면
    - 52단계 색: 0.203 (소수점 3자리까지)
    - 53단게 색: 0.207 (소수점 3자리까지)
    - 두 색의 정도(채도, 단계)가 다름을 확인할 수 있음
- 16비트 부동 소수점 GPU 하드웨어 연산을 지원해서 빠름

![img_131.png](old_note/COMP1000/week3/images/img_131.png)

## Single vs Double

![img_132.png](old_note/COMP1000/week3/images/img_132.png)

- CPU가 계산할 때 한 번에 계산할 수 있는 총양의 공간이 정해져있음
- 이 공간에 몇 개의 매개변수를 넣을 수 있냐로 연산 속도가 달라짐
- Single이 Double보다 작아서 많이 넣을 수 있어서 빠름

<br/>

- 테라플롭스:
    - NVIDIA Tegra 칩에서 초당 연산 속도
    - 닌텐도 스위치에 쓰이는 칩임

## 부동 소수점 수의 사칙 연산

### 덧셈

![img_133.png](old_note/COMP1000/week3/images/img_133.png)

![img_134.png](old_note/COMP1000/week3/images/img_134.png)

- 지수가 작은쪽의 수를 큰 쪽 지수와 동일하게

![img_135.png](old_note/COMP1000/week3/images/img_135.png)

- 가수끼리 덧셈

![img_136.png](old_note/COMP1000/week3/images/img_136.png)

- 정규화된 과학적 표기
- 그리고 비트패턴으로 변환하면 됨

### 뺄셈

![img_137.png](old_note/COMP1000/week3/images/img_137.png)

![img_138.png](old_note/COMP1000/week3/images/img_138.png)

- 지수 통일

![img_139.png](old_note/COMP1000/week3/images/img_139.png)

- 가수끼리 뺄셈

![img_140.png](old_note/COMP1000/week3/images/img_140.png)

- 정규화된 과학적 표기

### 곱셈

![img_141.png](old_note/COMP1000/week3/images/img_141.png)

![img_142.png](old_note/COMP1000/week3/images/img_142.png)

- 가수끼리 곱함

![img_143.png](old_note/COMP1000/week3/images/img_143.png)

- 지수끼리 더함

![img_144.png](old_note/COMP1000/week3/images/img_144.png)

- 이번 케이스는 이미 정규화

### 나눗셈

![img_145.png](old_note/COMP1000/week3/images/img_145.png)

- 곱셈이랑 비슷

![img_146.png](old_note/COMP1000/week3/images/img_146.png)

![img_147.png](old_note/COMP1000/week3/images/img_147.png)

![img_148.png](old_note/COMP1000/week3/images/img_148.png)
