# Week10

## 벡터

![img.png](old_note/COMP1000/week10/images/img.png)

![img_1.png](old_note/COMP1000/week10/images/img_1.png)

![img_2.png](old_note/COMP1000/week10/images/img_2.png)

- "프로그래밍의 벡터"는 확장된 개념

## 전통적 의미의 벡터

![img_3.png](old_note/COMP1000/week10/images/img_3.png)

- 방향을 지칭하기 위해서는 "기준축"이 필요함
- 수학에서 각도를 표현할 때 동쪽(x축)을 기준축으로 반시계 방향으로 각도를 증가

![img_4.png](old_note/COMP1000/week10/images/img_4.png)

- 네비/지도는 북쪽을 기준축으로 시계 방향으로 각도를 증가

### 미완성 벡터의 정의

![img_5.png](old_note/COMP1000/week10/images/img_5.png)

![img_6.png](old_note/COMP1000/week10/images/img_6.png)

- 달리는 상태를 어떻게 표현?

![img_7.png](old_note/COMP1000/week10/images/img_7.png)

- 속력을 표시해야함

### 완성된 벡터의 정의

![img_8.png](old_note/COMP1000/week10/images/img_8.png)

- 화살표의 길이로 크기를 나타내고
- 방향도 나타내고

### 물리에서 물리량

![img_9.png](old_note/COMP1000/week10/images/img_9.png)

- 스칼라:
    - 1차원 개념
    - 크기만 있음
- 벡터:
    - 2차원 개념
    - 크기와 방향

## 프로그래밍에서 벡터

![img_10.png](old_note/COMP1000/week10/images/img_10.png)

- 크기/방향 2개 데이터를 저장하는 클래스

![img_11.png](old_note/COMP1000/week10/images/img_11.png)

- 표현 방법의 한계

![img_12.png](old_note/COMP1000/week10/images/img_12.png)

- 튕겨나오는 것을 계산하려면?

![img_13.png](old_note/COMP1000/week10/images/img_13.png)

- 삼각함수 연산이 필요함
    - 부동 소수점 연산
    - 정밀도가 떨어짐
    - 탄젠트는 값을 구할 수 없을 때도 많음

![img_14.png](old_note/COMP1000/week10/images/img_14.png)

![img_15.png](old_note/COMP1000/week10/images/img_15.png)

- 일반적인 벡터 표현

![img_16.png](old_note/COMP1000/week10/images/img_16.png)

![img_17.png](old_note/COMP1000/week10/images/img_17.png)

- 좌표를 이용해볼까

![img_18.png](old_note/COMP1000/week10/images/img_18.png)

- 기준점은 원점으로 설정하면
- 좌표(x,y)로 벡터를 표현할 수 있음

### 성분 표기법

![img_19.png](old_note/COMP1000/week10/images/img_19.png)

- n차원 벡터는 성분이 n개
- 성분 == component

## 벡터 성분으로 길이, 각도 구하기

### 길이

![img_20.png](old_note/COMP1000/week10/images/img_20.png)

- 피타고라스 정리

![img_21.png](old_note/COMP1000/week10/images/img_21.png)

### 각도

![img_22.png](old_note/COMP1000/week10/images/img_22.png)

- 삼각함수 이용
    - atan 함수

### 2차원 벡터를 좌표 평면 어디든 정의할 수 있음

![img_23.png](old_note/COMP1000/week10/images/img_23.png)

- 시작은 원점
- 끝은 좌표 평면 어디든 존재할 수 있음

### n차원 벡터

![img_24.png](old_note/COMP1000/week10/images/img_24.png)

![img_25.png](old_note/COMP1000/week10/images/img_25.png)

## 벡터의 연산

### 스칼라 곱

![img_26.png](old_note/COMP1000/week10/images/img_26.png)

![img_27.png](old_note/COMP1000/week10/images/img_27.png)

![img_28.png](old_note/COMP1000/week10/images/img_28.png)

- 각 성분에 2를 곱해도 결과는 동일함

![img_29.png](old_note/COMP1000/week10/images/img_29.png)

![img_30.png](old_note/COMP1000/week10/images/img_30.png)

![img_31.png](old_note/COMP1000/week10/images/img_31.png)

![img_32.png](old_note/COMP1000/week10/images/img_32.png)

![img_33.png](old_note/COMP1000/week10/images/img_33.png)

- 간단하게 증명 가능

## 단위 벡터

![img_34.png](old_note/COMP1000/week10/images/img_34.png)

- 방향만 나타내고 싶으면?

![img_35.png](old_note/COMP1000/week10/images/img_35.png)

- 길이를 1로 설정

![img_36.png](old_note/COMP1000/week10/images/img_36.png)

### 단위 벡터 표기법

![img_37.png](old_note/COMP1000/week10/images/img_37.png)

- 모자 씌우기
- hat

![img_38.png](old_note/COMP1000/week10/images/img_38.png)

- 말 그대로 "단위"

### 스칼라 곱하기 단위 벡터

![img_39.png](old_note/COMP1000/week10/images/img_39.png)

## 임의의 벡터를 단위 벡터로 만들기

![img_40.png](old_note/COMP1000/week10/images/img_40.png)

- 크기를 1로 만들기

![img_41.png](old_note/COMP1000/week10/images/img_41.png)

![img_42.png](old_note/COMP1000/week10/images/img_42.png)

- 길이의 역수로 스칼라 곱

![img_43.png](old_note/COMP1000/week10/images/img_43.png)

![img_44.png](old_note/COMP1000/week10/images/img_44.png)

### 단위 벡터 구하기 예시

![img_45.png](old_note/COMP1000/week10/images/img_45.png)

![img_46.png](old_note/COMP1000/week10/images/img_46.png)

- (x,y)
- 성분 표기

![img_47.png](old_note/COMP1000/week10/images/img_47.png)

## 벡터의 덧셈

![img_48.png](old_note/COMP1000/week10/images/img_48.png)

![img_49.png](old_note/COMP1000/week10/images/img_49.png)

![img_50.png](old_note/COMP1000/week10/images/img_50.png)

- 대각선으로 더하기

![img_51.png](old_note/COMP1000/week10/images/img_51.png)

- 개념적으로 성분끼리 더함

![img_52.png](old_note/COMP1000/week10/images/img_52.png)

- 평행 이동

![img_53.png](old_note/COMP1000/week10/images/img_53.png)

- 평행사변형으로 더해서 대각선을 구하는 개념

## 벡터의 뺄셈

![img_54.png](old_note/COMP1000/week10/images/img_54.png)

- 백터의 덧셈과 동일함
- 다만 부호만 바꾸면 됨

![img_55.png](old_note/COMP1000/week10/images/img_55.png)

- 벡터를 음수로 바꾸려먼 -1을 스칼라 곱
- 각도 180도가 변함

![img_56.png](old_note/COMP1000/week10/images/img_56.png)

- 성분끼리 더하면 끝!

![img_57.png](old_note/COMP1000/week10/images/img_57.png)

### 이전의 예시

![img_58.png](old_note/COMP1000/week10/images/img_58.png)

- x 성분 부호만 바꾸면...
- 입사각/반사각 원리

![img_59.png](old_note/COMP1000/week10/images/img_59.png)

![img_60.png](old_note/COMP1000/week10/images/img_60.png)

## 내적

![img_61.png](old_note/COMP1000/week10/images/img_61.png)

- dot product
- 결과는 스칼라
    - 벡터가 아님

![img_62.png](old_note/COMP1000/week10/images/img_62.png)

![img_63.png](old_note/COMP1000/week10/images/img_63.png)

- 각 성분끼리 곱해서 더해도 같은 값을 구할 수 있음

![img_64.png](old_note/COMP1000/week10/images/img_64.png)

- 실제로 내적 공식이 성립하는지 확인을 해보자

![img_65.png](old_note/COMP1000/week10/images/img_65.png)

- 우왕 똑같아
- 컴퓨터에서는 삼각함수를 사용하지 않고 성분끼리 곱하는 연산이 간단하기 때문에 선호함

### 내적의 활용처

![img_66.png](old_note/COMP1000/week10/images/img_66.png)

- 두 벡터 사이의 각도
- 두 벡터가 단위 벡터면, 내적 값이 코사인값
    - 조명 각도 계산할 때 많이 사용함

![img_67.png](old_note/COMP1000/week10/images/img_67.png)

- 단위 벡터로 내적의 값을 구하면
- 코사인 값으로 두 벡터 사이의 각도를 구할 수 있음

![img_68.png](old_note/COMP1000/week10/images/img_68.png)

- 행렬 곱에도 내적 사용

![img_69.png](old_note/COMP1000/week10/images/img_69.png)

- 투영(정사영)
- 외적
    - x,y축이 있을 때 z축 구하기

## 벡터가 프로그래밍에 필요한 이유

![img_70.png](old_note/COMP1000/week10/images/img_70.png)

![img_71.png](old_note/COMP1000/week10/images/img_71.png)

- n개의 성분으로 구성된 자료구조

![img_72.png](old_note/COMP1000/week10/images/img_72.png)

## 튜플

![img_73.png](old_note/COMP1000/week10/images/img_73.png)

- n개의 성분을 저장하는 자료구조를 "튜플"이라고 부르기도 함
- 특히 머신 러닝에서 "피쳐 벡터"를 지칭

### 튜플 vs 벡터

![img_74.png](old_note/COMP1000/week10/images/img_74.png)

- 컴퓨터 공학 분야에서는 잘 구분 안하긴 하는데
- 튜플은 성분의 데이터 형이 다를 수 있음
- 벡터는 성분듸 데이터가 통일
  - 머신 러닝 "피쳐 벡터"는 데이터 형이 다를 수 있음

![img_75.png](old_note/COMP1000/week10/images/img_75.png)

- 데이터베이스 테이블에서 데이터 한 줄
    - row

![img_76.png](old_note/COMP1000/week10/images/img_76.png)

```c#
List<int> scores = new List<int>() { 100, 80, 58 };
```

- 참고로 위 코드는 개념상 벡터
    - 물론 튜플에서 성분의 자료형이 모두 같을 수 있음
    - 튜플의 특수한 경우
- C++ 에서는 "List"대신 "Vector"라고 표현함

### 집합과 비교

![img_77.png](old_note/COMP1000/week10/images/img_77.png)

- 튜플/벡터는 순서가 중요하다

![img_78.png](old_note/COMP1000/week10/images/img_78.png)

![img_79.png](old_note/COMP1000/week10/images/img_79.png)

![img_80.png](old_note/COMP1000/week10/images/img_80.png)

- 용어의 정의는 학문마다 다르니 알잘딱

![img_81.png](old_note/COMP1000/week10/images/img_81.png)

- 벡터로 저장하면 관리하기 편하죠
- 배열을 사용하는 이유를 생각해보자
    - 제일 직관적으로 for문
- 정형화된 데이터는 처리나 수치 분석이 쉬움

## 행렬

![img_82.png](old_note/COMP1000/week10/images/img_82.png)

![img_83.png](old_note/COMP1000/week10/images/img_83.png)

- 2 * 3 행렬

![img_84.png](old_note/COMP1000/week10/images/img_84.png)

- 행렬을 말할 때 행을 먼저 표현
- 프로그래밍에서 2차원 배열의 개념

![img_85.png](old_note/COMP1000/week10/images/img_85.png)

### 벡터와 행렬

![img_86.png](old_note/COMP1000/week10/images/img_86.png)

- 벡터는 행렬의 특수한 경우

![img_87.png](old_note/COMP1000/week10/images/img_87.png)

- 행 벡터
- 열 벡터
- 곱셈할 때 표현이 달라짐
- 벡터 자체의 개념은 똑같음
    - 1 * 3 행벡터
    - 3 * 1 열벡터
    - 모두 3개의 성분을 표현

### 정사각 행렬

![img_88.png](old_note/COMP1000/week10/images/img_88.png)

## 벡터 연산 행렬에 적용하기

![img_89.png](old_note/COMP1000/week10/images/img_89.png)

- 벡터를 확장한 것이 행렬이라 벡터의 연산을 행렬에 적용 가능

![img_90.png](old_note/COMP1000/week10/images/img_90.png)

- 하지만 완전히 모두 적용되는 것은 아님

### 행렬 스칼라 곱

![img_91.png](old_note/COMP1000/week10/images/img_91.png)

### 행렬과 행렬 더하기

![img_92.png](old_note/COMP1000/week10/images/img_92.png)

- 두 행렬의 행 수/열 수 모두 같아야함
- 성분끼리 더하는데 성분이 아에 없으면 못 더하지
    - 정의가 되지 않은 상황

- 벡터도 마찬가지로 성분 수가 다르면 못 더하죠

## 전치 행렬

![img_93.png](old_note/COMP1000/week10/images/img_93.png)

- transpose
- 행과 열을 교환

![img_94.png](old_note/COMP1000/week10/images/img_94.png)

- 우하향 대각선 대칭

## 행렬 연산이 필요한 이유

![img_95.png](old_note/COMP1000/week10/images/img_95.png)

![img_96.png](old_note/COMP1000/week10/images/img_96.png)

![img_97.png](old_note/COMP1000/week10/images/img_97.png)

- 가중치 별로 곱하기

![img_98.png](old_note/COMP1000/week10/images/img_98.png)

- 사실 벡터의 내적임

![img_99.png](old_note/COMP1000/week10/images/img_99.png)

![img_100.png](old_note/COMP1000/week10/images/img_100.png)

![img_101.png](old_note/COMP1000/week10/images/img_101.png)

- 각 성분끼리 곱하면 됨

![img_102.png](old_note/COMP1000/week10/images/img_102.png)

![img_103.png](old_note/COMP1000/week10/images/img_103.png)

- 각 성분끼리 곱하고 더하는 방정식

![img_104.png](old_note/COMP1000/week10/images/img_104.png)

- 방정식에서 계수만 따와서 가중치 벡터로 표현하고
- 미지수 벡터와 내적하는 개념

![img_105.png](old_note/COMP1000/week10/images/img_105.png)

- 모든 부서의 기존(가중치 벡터)를 모아보자

![img_106.png](old_note/COMP1000/week10/images/img_106.png)

![img_107.png](old_note/COMP1000/week10/images/img_107.png)

- 가중치 벡터를 모으면 2차원 배열
- 행렬

![img_108.png](old_note/COMP1000/week10/images/img_108.png)

![img_109.png](old_note/COMP1000/week10/images/img_109.png)

![img_110.png](old_note/COMP1000/week10/images/img_110.png)

- 행렬과 벡터의 곱
- 행렬에서 각 행을 행 벡터로 보고
- 행 백터와 열 벡터의 내적을 반복

![img_111.png](old_note/COMP1000/week10/images/img_111.png)

- 왜 "열 벡터" 모양을 사용했을까?

### 행렬곱의 규칙

![img_112.png](old_note/COMP1000/week10/images/img_112.png)

## 벡터 행렬 곱

![img_113.png](old_note/COMP1000/week10/images/img_113.png)

- 음..

![img_114.png](old_note/COMP1000/week10/images/img_114.png)

- 순서를 바꿔서
- 행 벡터와 행렬을 곱함

![img_115.png](old_note/COMP1000/week10/images/img_115.png)

![img_116.png](old_note/COMP1000/week10/images/img_116.png)

- 곱하기 불가능

![img_117.png](old_note/COMP1000/week10/images/img_117.png)

- 전치 행렬을 사용하자
- 핼렬 곱하기 열벡터
- 행벡터 곱하기 전치행렬

![img_118.png](old_note/COMP1000/week10/images/img_118.png)

![img_119.png](old_note/COMP1000/week10/images/img_119.png)

![img_120.png](old_note/COMP1000/week10/images/img_120.png)

![img_121.png](old_note/COMP1000/week10/images/img_121.png)

- 머신러닝의 피쳐 벡터를 사용하는 방법

![img_122.png](old_note/COMP1000/week10/images/img_122.png)

![img_123.png](old_note/COMP1000/week10/images/img_123.png)

- 취향 차이

![img_124.png](old_note/COMP1000/week10/images/img_124.png)

- 이 과목에서는 오른쪽
- 행 벡터 곱하기 전치 행렬
- "from 좌 to 우"가 메모리를 시각화 할 때 편함

### 벡터의 성분 수와 행렬의 행 수가 동일해야함

![img_125.png](old_note/COMP1000/week10/images/img_125.png)

## 행렬 벡터 곱에서 벡터의 값을 그대로: 단위 행렬

![img_126.png](images/img_126.png)

![img_127.png](images/img_127.png)

![img_128.png](images/img_128.png)

- 이 행렬로 불가능

![img_129.png](images/img_129.png)

![img_130.png](images/img_130.png)

![img_131.png](images/img_131.png)

- 단위 행렬은 반드시 정사각 행렬

![img_132.png](images/img_132.png)

![img_133.png](images/img_133.png)

- 단위 행렬의 기호:
    - "I"

![img_134.png](images/img_134.png)

- 좌항의 한 행(행 벡터)와 우항의 한 열 사이의 내적을 구해 결과 행 벡터의 성분에 차례대로 저장

## 행렬곱

### 벡터의 회전

![img_135.png](images/img_135.png)

![img_136.png](images/img_136.png)

- 공식이 있음

![img_137.png](images/img_137.png)

- 공간 변환 행렬
    - 벡터의 방향이나 길이를 변환시키기 위해 곱해주는 행렬
- 회전도 공간 변환에 포함됨
- 회전 행렬

![img_138.png](images/img_138.png)

![img_139.png](images/img_139.png)

- 회전이 2번이라 행렬이 2개 필요함

![img_140.png](images/img_140.png)

- 교환법칙이 적용되지 않을까

![img_141.png](images/img_141.png)

![img_142.png](images/img_142.png)

![img_143.png](images/img_143.png)

- 벡터와 행렬 곱을 여러번
- 이번 예시는 "from 좌 to 우"로 읽었을 때 "행 벡터 곱하기 행렬" 2번

![img_144.png](images/img_144.png)

![img_145.png](images/img_145.png)

![img_146.png](images/img_146.png)

![img_147.png](images/img_147.png)

![img_148.png](images/img_148.png)

![img_149.png](images/img_149.png)

- 2번째 방법이 공간을 다루는 프로그래밍에서 엄청난 성능 향상을!!!

![img_150.png](images/img_150.png)

- 연산수를 비교해보자

![img_151.png](images/img_151.png)

![img_152.png](images/img_152.png)

- 연산 수 두번째 방법이 많아 보이는데?

![img_153.png](images/img_153.png)

- 벡터 수가 많다면?

![img_154.png](images/img_154.png)

## 행렬의 변환

![img_155.png](images/img_155.png)

- 당연히 가능

![img_156.png](images/img_156.png)

- 벡터가 반드시 방향과 길이를 표현하는 것은 아니다

![img_157.png](images/img_157.png)

- 벡터가 좌표 평면의 한 점을 표현

![img_158.png](images/img_158.png)

- 단지 2개의 성분을 표현

![img_159.png](images/img_159.png)

- 도형의 확대

![img_160.png](images/img_160.png)

- 도형의 변환

![img_161.png](images/img_161.png)

- 영어로 "Scale Matrix"

### Scale Matrix 예시

![img_162.png](images/img_162.png)

![img_163.png](images/img_163.png)

![img_164.png](images/img_164.png)

- 각 벡터에 회전 변환 해주면 사각형이 회전함

![img_165.png](images/img_165.png)

- 확대와 회전을 동시에

![img_166.png](images/img_166.png)

- 행렬 곱을 이용해도 됨

![img_167.png](images/img_167.png)

- 너무 당연함

![img_168.png](images/img_168.png)

![img_169.png](images/img_169.png)

- 행렬 곱을 먼저하는 연산이 보통 빠름
- 사실 인풋이 3개만 되도 방법2가 역전

![img_170.png](images/img_170.png)

![img_171.png](images/img_171.png)

- 우왕 결론

## 변환을 원래 상태로 되돌리기

![img_172.png](images/img_172.png)

- 개념적으로 생각해보면
- 반대 연산

![img_173.png](images/img_173.png)

![img_174.png](images/img_174.png)

- 원래 벡터를 유지한는 "단위 행렬"

![img_175.png](images/img_175.png)

## 역행렬

![img_176.png](images/img_176.png)

![img_177.png](images/img_177.png)

- 곱해서 단위 행렬이 나오면?

![img_178.png](images/img_178.png)

- 역행렬의 정의

### 2 * 2 역행렬 공식

![img_179.png](images/img_179.png)

![img_180.png](images/img_180.png)

- 구한 역행렬이 맞는지 확인하려면 곱해서 단위 행렬 나오는지 확인해보면 됨

![img_181.png](images/img_181.png)

## 역행렬이 존재하지 않는 행렬

![img_182.png](images/img_182.png)

- 분모가 0이 되면?
    - 행렬식 ad-bc == 0

![img_183.png](images/img_183.png)

## 다양한 공간 변환 행렬

![img_184.png](images/img_184.png)

- "직교 행렬":
  - 전치 행렬이 역행렬
  - 대표적으로 회전 행렬이 직교 행렬에 속함

## 행렬의 용도

![img_185.png](images/img_185.png)

- 인접 행렬


