# week14

## 점근 표기법

![img.png](old_note/COMP1000/week14/img.png)

- 수학적으로 이해하려면 어려움
- 함수가 증가하는 모습을 다른 함수와 비교하는 개념

## 대표적인 표기법

![img_1.png](old_note/COMP1000/week14/img_1.png)

- 주로 빅오 표기법을 학습

## 빅오 표기법

![img_2.png](old_note/COMP1000/week14/img_2.png)

- 알고리듬을 분류하기 위해 사용
- order of the function
    - 대략

### 구체적인 분류 방법

![img_3.png](old_note/COMP1000/week14/img_3.png)

- 입력 데이터가 많아짐에 따라 얼마나 증가하는가?

## 빅오 표기법과 단항식

![img_4.png](old_note/COMP1000/week14/img_4.png)

- 빅오 표기법은 미지수가 1개인 단항식으로 표현

![img_5.png](old_note/COMP1000/week14/img_5.png)

- 왜 다항식은 없나요?

![img_6.png](old_note/COMP1000/week14/img_6.png)

- 계수가 없는 단항식으로 표현하는 것이 빅오 표기법의 가장 큰 특징!

### 왜 계수가 없는 단항식으로 표현하나요?

![img_7.png](old_note/COMP1000/week14/img_7.png)

![img_8.png](old_note/COMP1000/week14/img_8.png)

![img_9.png](old_note/COMP1000/week14/img_9.png)

- 입력값이 증가할 때 가장 큰 영향을 주는 차항은?
    - 당연히 가장 높은 차항

![img_10.png](old_note/COMP1000/week14/img_10.png)

![img_11.png](old_note/COMP1000/week14/img_11.png)

- 계수도 차수에 비하면 영향이 적음

![img_12.png](old_note/COMP1000/week14/img_12.png)

- 상수도 당연히 차수가 낮으니까 무시

![img_13.png](old_note/COMP1000/week14/img_13.png)

- 빅오 표기법으로 다항식을 계수 없는 단항식으로 바꿈

![img_14.png](old_note/COMP1000/week14/img_14.png)

- 이것이 "대략 어느 정도"의 의미
    - order of the function

![img_15.png](old_note/COMP1000/week14/img_15.png)

- 빅오 표기법은 "대략"의 의미가 포함되어있고 근사값임
- 따라서 등호도 같다는 의미가 아님!

## 빅오 표기법에서의 곱

![img_16.png](old_note/COMP1000/week14/img_16.png)

- 곱 계산은 최고차항만 계산하면 되서 간단함

![img_17.png](old_note/COMP1000/week14/img_17.png)

- 경우의 수에서 곱의 법칙과 동일한 개념

![img_18.png](old_note/COMP1000/week14/img_18.png)

- 너무나 당연하게 상수 곱은 의미가 없어용

## 빅오 표기법에서의 합

![img_19.png](old_note/COMP1000/week14/img_19.png)

- 다항식을 더하고 빅오 표기법으로 바꾸면 됨
- 결국 최고차항의 최대값이 채택

## 빅오 표기법의 크기 비교

![img_20.png](old_note/COMP1000/week14/img_20.png)

- 너무나 익숙한

## 빅오 표기법의 로그에서 밑

![img_21.png](old_note/COMP1000/week14/img_21.png)

## 복잡한 식에서 빅오 표기법

![img_22.png](old_note/COMP1000/week14/img_22.png)

- 다 때고 최고차항 찾아!

## 빅오 표기법의 예시

- 코드의 시간 복잡도를 빅오 표기법으로 계산할 때 아래 2가지 개념만 알면 됨
    - 반복문이 몇 겹 중첩되었냐?
    - 분할 정복이 있냐?

![img_23.png](old_note/COMP1000/week14/img_23.png)

![img_24.png](old_note/COMP1000/week14/img_24.png)

- 이진 탐색
- 대표적인 분할 정복

![img_25.png](old_note/COMP1000/week14/img_25.png)

- 이중 for문

![img_26.png](old_note/COMP1000/week14/img_26.png)

- 실전에서 이런걸 사용할 이유가..?
- 이론적인 알고리듬에서만 종종 등장

![img_27.png](old_note/COMP1000/week14/img_27.png)

- 이것도 이론적인 알고리듬에서 종종 등장

## 시간 복잡도 개선하기

![img_28.png](old_note/COMP1000/week14/img_28.png)

- 수학 개념을 적용하기!

![img_29.png](old_note/COMP1000/week14/img_29.png)

- 해시 테이블에서 탐색의 시간복잡도가 대표적인 O(1)

![img_30.png](old_note/COMP1000/week14/img_30.png)

![img_31.png](old_note/COMP1000/week14/img_31.png)

![img_32.png](old_note/COMP1000/week14/img_32.png)

## 지수

![img_33.png](old_note/COMP1000/week14/img_33.png)

![img_34.png](old_note/COMP1000/week14/img_34.png)

- a는 양수를 가정
- 음수면 연속함수가 나오지 않음!

![img_35.png](old_note/COMP1000/week14/img_35.png)

- a의 범위에 따라 증가함수/감소함수
- 부드럽게 변하기 때문에 곡선을 만들기 위해서 종종 사용함

![img_36.png](old_note/COMP1000/week14/img_36.png)

## 로그

![img_37.png](old_note/COMP1000/week14/img_37.png)

- 지수함수의 역함수

![img_38.png](old_note/COMP1000/week14/img_38.png)

- 지수를 구하는 함수
- 밑이 1인 경우는 정의하지 않음

![img_39.png](old_note/COMP1000/week14/img_39.png)

![img_40.png](old_note/COMP1000/week14/img_40.png)

- 증가하는 로그 함수는 점점 증가량이 감소함
- 그래서 효율적인 시간복잡도

![img_41.png](old_note/COMP1000/week14/img_41.png)

- 밑을 어떻게 정의하냐에 따라 로그 표기법이 달라짐
    - 흔히 10,2,e를 밑으로 사용

![img_42.png](old_note/COMP1000/week14/img_42.png)

- 빅오 표기법에서는 밑이 2
- 수학에서 일반적으로 자연로그

![img_43.png](old_note/COMP1000/week14/img_43.png)

- 고등학교 때 배운
