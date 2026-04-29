# Week11

## 조합론

![img.png](old_note/COMP1000/week11/img.png)

- 그룹 짓는 방법을 연구

### 조합론 예시

![img_1.png](old_note/COMP1000/week11/img_1.png)

- 알고리듬의 복잡도
- 전화번호
- IP 주소 패턴
    - "IPv4"로 개수가 부족해서 "IPv6"

![img_2.png](old_note/COMP1000/week11/img_2.png)

![img_3.png](old_note/COMP1000/week11/img_3.png)

- 비트 수에 따라 표현 가능한 수 구하기

## 경우의 수

![img_4.png](old_note/COMP1000/week11/img_4.png)

- 사건(event)는 고유한 결과
    - 각 사건끼리 고유해야함
    - 주사위를 던졌을 때 1과6이 동시에 나올 수 없음
    - 동전의 옆면이 나올 수 없음

![img_5.png](old_note/COMP1000/week11/img_5.png)

- 경우의 수가 있으면 확률도 구할 수 있음

## 경우의 수 세기

![img_6.png](old_note/COMP1000/week11/img_6.png)

![img_7.png](old_note/COMP1000/week11/img_7.png)

- 일(task)의 개념
- 일은 여러 번 시도할 수 있음

![img_8.png](old_note/COMP1000/week11/img_8.png)

- 일을 여러 번 시도하면 복잡해짐

![img_9.png](old_note/COMP1000/week11/img_9.png)

- 모든 경우의 수를 다 확인할 수 있을까?

![img_10.png](old_note/COMP1000/week11/img_10.png)

- 수학적으로 "경우의 수 세기"를 이용해 복잡하게 일이 여러 번 발생할 때 효율적으로 모든 경우의 수를 셀 수 있음

## 곱의 법칙

![img_11.png](old_note/COMP1000/week11/img_11.png)

- 절차:
    - 여러 일(task)로 구성됨
    - 일은 동시에 진행되지 않음
        - 어떤 일이 끝나야 다른 일을 할 수 있음

![img_12.png](old_note/COMP1000/week11/img_12.png)

![img_13.png](old_note/COMP1000/week11/img_13.png)

- 첫번째 비트를 결정하는 것이 "일"
- 두번째 비트를 결정하는 것도 "일"
- 절차는 첫번째 비트 결정하고 두번째 비트 결정

![img_14.png](old_note/COMP1000/week11/img_14.png)

- 중요한 개념은 어떤 일을 '끝낸 후' 다른 일을 함

![img_15.png](old_note/COMP1000/week11/img_15.png)

- 일의 수가 늘어나면 일반화해서 경우의 수를 곱함

![img_16.png](old_note/COMP1000/week11/img_16.png)

![img_17.png](old_note/COMP1000/week11/img_17.png)

- 모든 조합을 구해보면?

![img_18.png](old_note/COMP1000/week11/img_18.png)

- 대표적인 곱의 법칙

![img_19.png](old_note/COMP1000/week11/img_19.png)

- '프로그래밍의 다중 중첩 for문'은 곱의 법칙
- for문 중첩이 많을 수록 연산 수가 마구마구 증가

### 곱의 법칙 예제: 행사장 의자에 번호 붙이기

![img_20.png](old_note/COMP1000/week11/img_20.png)

### 곱의 법칙 예제: 멱집합의 원소 수

![img_21.png](old_note/COMP1000/week11/img_21.png)

- 하나의 일이 "포함하냐/포함하지 않냐"

## 합의 법칙

![img_22.png](old_note/COMP1000/week11/img_22.png)

- 일이 연속적으로 일어나지 않음
    - 절차가 아님
- 각 일에서 오직 하나의 일만 발생하는 개념

![img_23.png](old_note/COMP1000/week11/img_23.png)

![img_24.png](old_note/COMP1000/week11/img_24.png)

![img_25.png](old_note/COMP1000/week11/img_25.png)

- '프로그래밍의 병렬 for문'은 합의 법칙
- O(c + s)
    - 시간복잡도 빅오표기법에 경우의 수 개념이 강력하게 포함됨!

### 합의 법칙 예제: 두 주사위의 합

![img_26.png](old_note/COMP1000/week11/img_26.png)

- 2가 되는 일
- 3이 되는 일
- 동시에 일어날 수 없음
- OR

## 복잡한 경우의 수 문제

### 예제: 길이가 최대 두 글자인 변수명 짓기

![img_27.png](old_note/COMP1000/week11/img_27.png)

- 최대 2글자
    - 합의 법칙

![img_28.png](old_note/COMP1000/week11/img_28.png)

- 변수명이 한 글자일 때 + 변수명이 두 글자일 때
- 변수명이 두 글자일 때:
    - 곱의 법칙
    - 예약어 뺄 때 합의 법칙

### 예제: 인터넷 주소 수 세기

![img_29.png](old_note/COMP1000/week11/img_29.png)

- 참고로 "클래스 D/E" 는 특별함

![img_30.png](old_note/COMP1000/week11/img_30.png)

- 모든 클래스 고통으로 "hostid"의 비트패턴은 모두 0이나 모두 1이 될 수 없음

![img_31.png](old_note/COMP1000/week11/img_31.png)

![img_32.png](old_note/COMP1000/week11/img_32.png)

![img_33.png](old_note/COMP1000/week11/img_33.png)

## 포함-배제 원리

![img_34.png](old_note/COMP1000/week11/img_34.png)

- 중복된 경우의 수를 빼야함
    - 두번 카운트 한 수는 빼주자
- 집합 더하기 생각하면 쉬움
    - 집합에서 중복 원소는 없음

![img_35.png](old_note/COMP1000/week11/img_35.png)

## 트리 이용하기

![img_36.png](old_note/COMP1000/week11/img_36.png)

![img_37.png](old_note/COMP1000/week11/img_37.png)

- 모든 경우의 수를 세는 효과적인 방법

![img_38.png](old_note/COMP1000/week11/img_38.png)

![img_39.png](old_note/COMP1000/week11/img_39.png)

![img_40.png](old_note/COMP1000/week11/img_40.png)

![img_41.png](old_note/COMP1000/week11/img_41.png)

- 같은 면이 두번 연속해서 나오지 않는 경우만 세보면

![img_42.png](old_note/COMP1000/week11/img_42.png)

- 가지치면서 따지면 쉽게 카운팅 가능

### 가위 바위 보 삼세판

![img_43.png](old_note/COMP1000/week11/img_43.png)

![img_44.png](old_note/COMP1000/week11/img_44.png)

### 티셔츠 선택

![img_45.png](old_note/COMP1000/week11/img_45.png)

![img_46.png](old_note/COMP1000/week11/img_46.png)

- "결정 트리"
- if 분기 처리가 들어가는 개념
- 사이즈로 분기하고 각 분기로 들어가면 색을 고르는

## 순열/조합

![img_47.png](old_note/COMP1000/week11/img_47.png)

![img_48.png](old_note/COMP1000/week11/img_48.png)

- Permutation
- Combination

## 순열

![img_49.png](old_note/COMP1000/week11/img_49.png)

- 나열:
    - 순서가 중요하다는 개념이 포함된 단어

![img_50.png](old_note/COMP1000/week11/img_50.png)

- 펜 색에 관계없이
- '6P6'
- 6!

![img_51.png](old_note/COMP1000/week11/img_51.png)

### 순열 공식

![img_52.png](old_note/COMP1000/week11/img_52.png)

### 순열의 예: 온라인 게임

![img_53.png](old_note/COMP1000/week11/img_53.png)

- '16P3'
- 1,2,3 등수가 중요하기 때문에 순서 개념을 포함하는 순열

### 순열의 예2: 수강 순서

![img_54.png](old_note/COMP1000/week11/img_54.png)

- '12P12'
- 12!

### 순열의 예3: 도우미와 함께 줄 세우기

![img_55.png](old_note/COMP1000/week11/img_55.png)

- C,D를 묶어서 하나로 보면 됨

![img_56.png](old_note/COMP1000/week11/img_56.png)

![img_57.png](old_note/COMP1000/week11/img_57.png)

- C,D 순서 바꾸는 것은 고려하지 않음

## 중복 순열

![img_58.png](old_note/COMP1000/week11/img_58.png)

### 중복 순열 공식

![img_59.png](old_note/COMP1000/week11/img_59.png)

### 중복 순열의 예: 패스워드

![img_60.png](old_note/COMP1000/week11/img_60.png)

- '52^8'
- 대/소문자 26개씩해서 52

## 조합

![img_61.png](old_note/COMP1000/week11/img_61.png)

- 햄버거 세트(콤보)
    - 참고로 미국에서는 "콤보"가 공식 용어

![img_62.png](old_note/COMP1000/week11/img_62.png)

![img_63.png](old_note/COMP1000/week11/img_63.png)

- 순열로 시작하고
- 포함-배제 원리로 순서를 고려해서 중복된 경우의 수를 빼주자

![img_64.png](old_note/COMP1000/week11/img_64.png)

![img_65.png](old_note/COMP1000/week11/img_65.png)

- 뽑은 결과(2개로 이루어짐)에서 생각하기
- 이 결과에서 2개의 펜을 나열하는(순서를 고려) 경우의 수는 2!

![img_66.png](old_note/COMP1000/week11/img_66.png)

![img_67.png](old_note/COMP1000/week11/img_67.png)

![img_68.png](old_note/COMP1000/week11/img_68.png)

- 전체 경우의 수에서 뽑은 결과 마다 순서를 없애니까
- 2!으로 나누기

### 조합 공식

![img_69.png](old_note/COMP1000/week11/img_69.png)

- 순열공식에서 뽑는 개수(r) 팩토리얼로 나누기

![img_70.png](old_note/COMP1000/week11/img_70.png)

### 조합의 예: 경진대회 나갈 학생 고르기

![img_71.png](old_note/COMP1000/week11/img_71.png)

- 팀을 구성하기
- 팀에서 순서는 의미업음
- 집합 개념
- '20C5'

### 조합의 예2: 로또 당첨 번호

![img_72.png](old_note/COMP1000/week11/img_72.png)

### 조합의 예: 32비트 정수에 1이 10개 있는 경우

![img_73.png](old_note/COMP1000/week11/img_73.png)

- 1인 비트가 10개가 있는 경우를 모두 찾기
- 나머진 0으로 채우면 됨
- '32C10'
- 반대로 0인 비트 22개를 고르면 됨
- "조합의 대칭"

## 중복 조합

![img_74.png](old_note/COMP1000/week11/img_74.png)

- 중복 조합 사고

![img_75.png](old_note/COMP1000/week11/img_75.png)

- 순서 상관없이 구성만 다르면 됨

![img_76.png](old_note/COMP1000/week11/img_76.png)

- 칸막이의 위치를 정하는 개념

![img_77.png](old_note/COMP1000/week11/img_77.png)

- 공간에서 칸막이 위치를 찾는 조합 문제로 변환

![img_78.png](old_note/COMP1000/week11/img_78.png)

![img_79.png](old_note/COMP1000/week11/img_79.png)

- 조합의 대칭성 적용 가능

![img_80.png](old_note/COMP1000/week11/img_80.png)

### 중복 조합 공식

![img_81.png](old_note/COMP1000/week11/img_81.png)

- 공식 유도는 자연스러움
- n-1: 칸막이 수
- r: 대상

### 중복 조합의 에: 방정식 해법의 수

![img_82.png](old_note/COMP1000/week11/img_82.png)

- x,y,z가 양의 정수라서
- 최소 1이상으로 배정

![img_83.png](old_note/COMP1000/week11/img_83.png)

- 미리 빼고 계산

![img_84.png](old_note/COMP1000/week11/img_84.png)

## 확률

- 양자컴퓨터
- 머신러닝
- 모두 확률에 기반함

![img_85.png](old_note/COMP1000/week11/img_85.png)

- 정의:
    - 어떤 사건이 일어날 가능성을 수치화

- 표본 공간
- 실험
- 정의 숙지하기

![img_86.png](old_note/COMP1000/week11/img_86.png)

### 무한한 표본 공간

![img_87.png](old_note/COMP1000/week11/img_87.png)

- 확률이 0에 수렴해서 의미가 없음

### 유한 표본 공간

![img_88.png](old_note/COMP1000/week11/img_88.png)

- 표본 공간이 유한하다고 가정하고 확률을 정의함

### 확률의 예: 연필 뽑기

![img_89.png](old_note/COMP1000/week11/img_89.png)

### 확률의 예: 로또 1등

![img_90.png](old_note/COMP1000/week11/img_90.png)

- 경우의 수를 배운 이유는 표본 공간을 구하기 위함

### 확률의 예: 포커의 포카드

![img_91.png](old_note/COMP1000/week11/img_91.png)

![img_92.png](old_note/COMP1000/week11/img_92.png)

### 확률의 예: 특정 숫자들을 순서대로 뽑을 확률

![img_93.png](old_note/COMP1000/week11/img_93.png)

## 여사건

![img_94.png](old_note/COMP1000/week11/img_94.png)

- 표본 공간의 모든 사건들이 일어날 확률을 모두 더하면 1

![img_95.png](old_note/COMP1000/week11/img_95.png)

- 여집합과 유사하게 전체(1)에서 빼는 계산

### 여사건의 예: 1인 비트가 하나 이상 있을 확률

![img_96.png](old_note/COMP1000/week11/img_96.png)

![img_97.png](old_note/COMP1000/week11/img_97.png)

- 모든 비트가 0인 경우의 수는 1

![img_98.png](old_note/COMP1000/week11/img_98.png)

## 합사건

![img_99.png](old_note/COMP1000/week11/img_99.png)

- 포함 배제의 원리랑 유사함
- 교집합을 빼는 개념

### 합 사건의 에: 경품 당첨 확률

![img_100.png](old_note/COMP1000/week11/img_100.png)

![img_101.png](old_note/COMP1000/week11/img_101.png)

## 확률에 기반한 사고

![img_102.png](old_note/COMP1000/week11/img_102.png)

- 합리적인 사고는 확률에 기반함

![img_103.png](old_note/COMP1000/week11/img_103.png)

### 몬티 홀 문제

![img_104.png](old_note/COMP1000/week11/img_104.png)

![img_105.png](old_note/COMP1000/week11/img_105.png)

![img_106.png](old_note/COMP1000/week11/img_106.png)

![img_107.png](old_note/COMP1000/week11/img_107.png)

![img_108.png](old_note/COMP1000/week11/img_108.png)

- 그룹은 2개로 나눌 수 있음
- 고른 문/고르지 않은 문

![img_109.png](old_note/COMP1000/week11/img_109.png)

- 골랐을 때 맞을 확률 1/3

![img_110.png](old_note/COMP1000/week11/img_110.png)

- 게임 규칙에 따라 내가 고르지 않은 문 2개 중 1개를 염

![img_111.png](old_note/COMP1000/week11/img_111.png)

- 선택을 바꾸면 문 2개를 고른 것과 같음

### 현질도 경제적으로 할 수 있다?!

![img_112.png](old_note/COMP1000/week11/img_112.png)

![img_113.png](old_note/COMP1000/week11/img_113.png)

![img_114.png](old_note/COMP1000/week11/img_114.png)

## 조건부 확률

![img_115.png](old_note/COMP1000/week11/img_115.png)

- 표본 공간의 개념으로 이해

### 조건부 확률의 예: 동전 연속으로 던지기

![img_116.png](old_note/COMP1000/week11/img_116.png)

- 우선 F,E를 정의하기

![img_117.png](old_note/COMP1000/week11/img_117.png)

- F: 처음 던저셔 앞면이 나옴
- E: 2번 더 던져서 앞면이 나온 총횟수가 홀수

![img_118.png](old_note/COMP1000/week11/img_118.png)

- E 와 F의 교집합을 찾아보자

![img_119.png](old_note/COMP1000/week11/img_119.png)

- 표본 집합을 구할 때 모든 경우의 수로 계산

![img_120.png](old_note/COMP1000/week11/img_120.png)

- 교집합으로 계산한 확률의 표본 공간은 전체

![img_121.png](old_note/COMP1000/week11/img_121.png)

- 표본 공간을 줄여보자

![img_122.png](old_note/COMP1000/week11/img_122.png)

![img_123.png](old_note/COMP1000/week11/img_123.png)

- 곱의 법칙을 역산으로 적용한다고 생각해도 됨

![img_124.png](old_note/COMP1000/week11/img_124.png)

- 여기서 공식 유도 가능

![img_125.png](old_note/COMP1000/week11/img_125.png)

### 조건부 확률 예: 자녀 성비 예측하기

![img_126.png](old_note/COMP1000/week11/img_126.png)

![img_127.png](old_note/COMP1000/week11/img_127.png)

- 표본 공간을 제한

![img_128.png](old_note/COMP1000/week11/img_128.png)

![img_129.png](old_note/COMP1000/week11/img_129.png)

- 말장난 같지만 교집합 확률은 1/4

![img_130.png](old_note/COMP1000/week11/img_130.png)

- 최소 한 명은 딸일 확률은 3/4
    - 여사건 이용

## 독립 사건

![img_131.png](old_note/COMP1000/week11/img_131.png)

- 두 사건이 서로 영향을 주지 않는 경우

### 독립 사건의 예

![img_132.png](old_note/COMP1000/week11/img_132.png)

![img_133.png](old_note/COMP1000/week11/img_133.png)

- 최상위 비트와 무관하게 홀수는 최하위 비트가 결정

![img_134.png](old_note/COMP1000/week11/img_134.png)

![img_135.png](old_note/COMP1000/week11/img_135.png)

### 조건부 확률 공식 써보기

![img_136.png](old_note/COMP1000/week11/img_136.png)

- 조건부 확률 공식에서 두 사건이 독립인지 아닌지 판단 가능

![img_137.png](old_note/COMP1000/week11/img_137.png)

- 수식으로 접근해보면

### 조건부 확률 공식으로 독립 판단하기 예

![img_138.png](old_note/COMP1000/week11/img_138.png)

- 독립사건이 아님을 알 수 있음

### 독립 판단의 의의

![img_139.png](old_note/COMP1000/week11/img_139.png)

- 연산 최적화 가능

## 기대값

![img_140.png](old_note/COMP1000/week11/img_140.png)

- 반복적으로 시행할 때 평균적으로 "기대"가능

![img_141.png](old_note/COMP1000/week11/img_141.png)

- 무한히 반복적으로 시행하는 가정

![img_142.png](old_note/COMP1000/week11/img_142.png)

- 값과 확률을 곱하는 개념

![img_143.png](old_note/COMP1000/week11/img_143.png)

- 주사위 2번 던지면 각 사건(쌍)마다 확률이 다름

![img_144.png](old_note/COMP1000/week11/img_144.png)

- 가중 평균
- 가중 평균을 계산할 때 벡터를 이용해서 계산함
    - 이게 머신러닝에서 "피쳐 벡터" 개념

### 애매한 경우

![img_145.png](old_note/COMP1000/week11/img_145.png)

- "값"을 어떻게 정의해야하지?

![img_146.png](old_note/COMP1000/week11/img_146.png)

- 이런 것을 도와주는 함수가 있음

## 확률 변수

- 확률에 사용하는 변수

![img_147.png](old_note/COMP1000/week11/img_147.png)

- 표본 공간에서 실행한 실험의 결과를 실수로 수치화해주는 함수
    - "무작위 실험의 결과를 수치화해주는 함수"
- 기호 "X"를 많이 사용함

![img_148.png](old_note/COMP1000/week11/img_148.png)

- 앞면이 나오는 횟수를 확룰 변수로 정의

![img_149.png](old_note/COMP1000/week11/img_149.png)

![img_150.png](old_note/COMP1000/week11/img_150.png)

### 확률 변수의 예: 두 개의 동전 던지기

![img_151.png](old_note/COMP1000/week11/img_151.png)

## 기댓값 공식

![img_152.png](old_note/COMP1000/week11/img_152.png)

- 그냥 가중 평균 공식

![img_153.png](old_note/COMP1000/week11/img_153.png)

## 확률 분포

![img_154.png](old_note/COMP1000/week11/img_154.png)

- 각 사건이 일어날 확률은 어떻게 "분포"되어 있는가?

![img_155.png](old_note/COMP1000/week11/img_155.png)

- "분포"라는 단어는 중요함

### 확률 분포 종류

![img_156.png](old_note/COMP1000/week11/img_156.png)

## 이산 확률 분포

![img_157.png](old_note/COMP1000/week11/img_157.png)

- 확률 변수가 취할 있는 값이 유한개
    - 쉽게 생각하며 확률 변수가 유한개

### 이산 확률 분포의 에

![img_158.png](old_note/COMP1000/week11/img_158.png)

![img_159.png](old_note/COMP1000/week11/img_159.png)

![img_160.png](old_note/COMP1000/week11/img_160.png)

![img_161.png](old_note/COMP1000/week11/img_161.png)

- 우왕 분포가 평행하다

## 이산 균등 분포

- 평평한 분포는 특별한 이름이 있음

![img_162.png](old_note/COMP1000/week11/img_162.png)

- 은근히 중요한 개념

![img_163.png](old_note/COMP1000/week11/img_163.png)

- 이 조건을 만족해야만 하는 개념이 있음
- 대표적으로 "난수"
- 결과가 평향되지 않아야 함

## 확률 질량 함수

![img_164.png](old_note/COMP1000/week11/img_164.png)

- 확률 변수에 대응하는 확률값을 정의하는 함수

![img_165.png](old_note/COMP1000/week11/img_165.png)

- 논문에서 "pmf"라고 줄여서 표현하면 확률 질량 함수 생각합시다

### 이산 확률 분포의 기댓값

![img_166.png](old_note/COMP1000/week11/img_166.png)

- 똑같이 가중평균
- 확률 변수 * 확률 질량 함수의 결과값을 모두 더하자

## 연속 확률 분포

![img_167.png](old_note/COMP1000/week11/img_167.png)

- 확률 변수가 구간 안의 모든 실수값을 취하는 경우

![img_168.png](old_note/COMP1000/week11/img_168.png)

- 이산 확률 분포처럼 가중 평균의 합으로 구할 수 없음

### 연속 확률 분포의 모든 확률의 합은 1

![img_169.png](old_note/COMP1000/week11/img_169.png)

- 이 개념은 전체 사건(표본 공간)과 확률의 정의에 따라 당연함

### 연속 확률 분포의 기댓값

![img_170.png](old_note/COMP1000/week11/img_170.png)

- 적분으로 확률의 합을 구할 수 있음
- "확률 밀도 함수"라는 표현을 씀
    - pdf

<br/>

- pmf/pdf 이산/연속

![img_171.png](old_note/COMP1000/week11/img_171.png)

- "확률 변수 * 확률 밀도 함수"해서 적분

## 컴퓨터 공학에서 사용하는 확률 분포: 이산 확률 분포

![img_172.png](old_note/COMP1000/week11/img_172.png)

- 기본적으로 이산적임

## 베르누이 시행

![img_173.png](old_note/COMP1000/week11/img_173.png)

- 우선 "베르누이 분포"를 이해하자

### 베르누이 분포

![img_174.png](old_note/COMP1000/week11/img_174.png)

- 결과가 오직 bool
    - 이런 시행을 "베르누이 시행"이라고 표현
    - "성공과 실패라는 정확히 두가지 가능한 결과를 가진 단일 실험"

- 베르누이 시행과 시행에 대한 확률은 또 다른 개념

### 베르누이 분포의 확률 변수

![img_175.png](old_note/COMP1000/week11/img_175.png)

- 확률 변수로 표현할 때 1 or 0 값으로 정의하면 직관적임
- 확률도 표현하기 쉬움(p, 1-p)

![img_176.png](old_note/COMP1000/week11/img_176.png)

### 베르누이 분포의 예

![img_177.png](old_note/COMP1000/week11/img_177.png)

- 7이면 1, 아니면 0

![img_178.png](old_note/COMP1000/week11/img_178.png)

### 베르누이 분포 그래프의 예

![img_179.png](old_note/COMP1000/week11/img_179.png)

## 이항 분포

![img_180.png](old_note/COMP1000/week11/img_180.png)

- 베르누이의 시행을 여러 번 실행하면 "이항 분포"
    - 여기서 몇 번 성공에 대한 확률 분포
    - "독립적인 베르누이 시행을 여러 번 했을 때 성공 횟수의 확률 분포"

### 이항 확률 분포의 예

![img_181.png](old_note/COMP1000/week11/img_181.png)

- 몇 번 성공하는지를 확률 변수로 표현

![img_182.png](old_note/COMP1000/week11/img_182.png)

- "이항 확률 변수"

![img_183.png](old_note/COMP1000/week11/img_183.png)

- 1번은 7일 확률을 따르고, 나머지는 아닐 확률을 따르면 됨
- 근데 순서도 고려해야죠?

![img_184.png](old_note/COMP1000/week11/img_184.png)

- ...

![img_185.png](old_note/COMP1000/week11/img_185.png)

## 이항 분포의 확률 질량 함수

- 위에서 예를 통해 귀납적으로 확률 질량 함수(확률을 도출하는 함수)를 구해보자

![img_186.png](old_note/COMP1000/week11/img_186.png)

## 이항 분포의 기댓값

![img_187.png](old_note/COMP1000/week11/img_187.png)

- 확률 변수는 (n번 시도 중 k번 성공)
- 확률 변수의 확률은 "이항 분포의 확률 질량 함수"로 구함

![img_188.png](old_note/COMP1000/week11/img_188.png)

- 전개해서 쭉 계산해보면 "np"와 동일함
- 시행횟수 * 베르누이 시행 성공확률

## 시행 횟수에 따른 이항 분포 그래프 모형

![img_189.png](old_note/COMP1000/week11/img_189.png)

- "n == 10" 만족할 때 이항 분포 그래프

![img_190.png](old_note/COMP1000/week11/img_190.png)

- 어어 그래프 모양이?
    - 뭔가 대칭같음

- 직관적으로 기댓값이 나올 확률이 가장 높음
- 그래프에서 확률이 가장 높은 시행 횟수는 기대값 주변

### p 값이 0.5일 때 이항 분포 그래프

![img_191.png](old_note/COMP1000/week11/img_191.png)

### p 값이 0.9일 때 이항 분포 그래프

![img_192.png](old_note/COMP1000/week11/img_192.png)

- 실험 수
- 베르누이 시행의 성공 확률
- 이 2가지가 그래프 모형에 영향을 주지만
- 결정적인 것은 실험(시행)수

![img_193.png](old_note/COMP1000/week11/img_193.png)

- 점점 연속 확률 분포에 가까워 짐

- 여기서 중요한 속성
- 평균에 가까울 수록 확률이 지수적으로 높아짐
