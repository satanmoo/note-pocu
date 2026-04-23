# Week9

## 수학적 귀납법

![img.png](old_note/COMP1000/week9/images/img.png)

- 원칙상 '자연수 n'에 대해 명제를 적용

![img_1.png](old_note/COMP1000/week9/images/img_1.png)

- 수학적 귀납법 증명도 어렵게 느껴질 수 있음

### 수학적 귀납법의 증명

![img_2.png](old_note/COMP1000/week9/images/img_2.png)

### 수학적 귀납법의 예: 도미노 쓰러뜨리기

![img_3.png](old_note/COMP1000/week9/images/img_3.png)

![img_4.png](old_note/COMP1000/week9/images/img_4.png)

- 첫번째 도미노 조각을 치는게 기본 가정을 증명하는 행위

![img_5.png](old_note/COMP1000/week9/images/img_5.png)

- 나머지는 도미노 조각이 무너지는게 귀납 가정 증명

![img_6.png](images/img_6.png)

- 근접한 k, k+1 간의 관계에서 적용되는 규칙을 연쇄적으로 적용하는 개념

## 수학적 귀납법과 재귀 함수

![img_7.png](images/img_7.png)

- '종료 조건'이 '기본 가정'에 대응

![img_8.png](images/img_8.png)

![img_9.png](images/img_9.png)

![img_10.png](images/img_10.png)

![img_11.png](images/img_11.png)

![img_12.png](images/img_12.png)

![img_13.png](images/img_13.png)

- 수학적 귀납법과 재귀 함수의 차이점을 이해하자

## 수학적 귀납법으로 코드 작성하기

![img_14.png](images/img_14.png)

- 수학적 귀납법으로 등차수열 합 공식 증명하기

![img_15.png](images/img_15.png)

- 공식에 대입해서 증명

![img_16.png](images/img_16.png)

![img_17.png](images/img_17.png)

![img_18.png](images/img_18.png)

- P(K)가 참이라는 가정이라 이렇게 변환할 수 있음

![img_19.png](images/img_19.png)

- 이제 테크닉이 필요함

![img_20.png](images/img_20.png)

![img_21.png](images/img_21.png)

![img_22.png](images/img_22.png)

![img_23.png](images/img_23.png)

- 이미 증명된 것들은 가져다 쓰면 됨

## 내 스스로 만든 공식 검증하기: 홀수의 합 공식

- 어떻게 증명할 수 있을까?

![img_24.png](images/img_24.png)

- 컴퓨터에서는 크기가 정해진 데이터를 활용할 수 있음
    - 정수형의 크기는 고정이잖아

![img_25.png](images/img_25.png)

![img_26.png](images/img_26.png)

![img_27.png](images/img_27.png)

- 디버깅의 기초
    - 값을 넣어보면서 귀납적으로 패턴을 찾기
    - 훌륭한 프로그래머의 자질

![img_28.png](images/img_28.png)

- 어 패턴이?

![img_29.png](images/img_29.png)

- 수학적 귀납법으로 증명이 필요함!

![img_30.png](images/img_30.png)

![img_31.png](images/img_31.png)

![img_32.png](images/img_32.png)

![img_33.png](images/img_33.png)

![img_34.png](images/img_34.png)

![img_35.png](images/img_35.png)

- Sodd(K) == K^2 이 성립한다고 가정했었음

![img_36.png](images/img_36.png)

- 인수분해 활용

![img_37.png](images/img_37.png)

## 멱집합의 원소수 공식

![img_38.png](images/img_38.png)

![img_39.png](images/img_39.png)

![img_40.png](images/img_40.png)

![img_41.png](images/img_41.png)

![img_42.png](images/img_42.png)

- 경우의 수와 관련이 있죠?

![img_43.png](images/img_43.png)

- 곱하기 2하는 개념
    - 합집합 연산하는데 두 집합의 교집합이 없어서

## 수학적 귀납법이 중요한 이유

![img_44.png](images/img_44.png)

- 복잡한 문제를 반복되는 간단한 규칙으로 바꾸는 사고과정
- 과학적 사고 방법

![img_45.png](images/img_45.png)

- 과학적 사고 방법과 수학적 귀납법에서 추론하는 과정은 유사함
- 다만 완벽하게 연역적인 수학적 귀납법과 다르게 과학적 사고 방법은 현실적으로 최대한 데이터를 모아서 사실이라고 믿는 개념
    - 과학은 언제든지 바뀔 수 있음
    - 모든것이 참이라고 증명할 수 없음

![img_46.png](images/img_46.png)

![img_47.png](images/img_47.png)

- 수학적 귀납법은 귀납법이 아님

![img_48.png](images/img_48.png)

- 사실은 연역법의 한 종류

## 재귀와 분할 정복

![img_49.png](images/img_49.png)

![img_50.png](images/img_50.png)

![img_51.png](images/img_51.png)

## 피보나치 수열

![img_52.png](images/img_52.png)

![img_53.png](images/img_53.png)

![img_54.png](images/img_54.png)

![img_55.png](images/img_55.png)

- 배열을 썼기 때문에... 반칙

![img_56.png](images/img_56.png)

- 변수 2개로 전/전전 값을 기억하기

## 하노이의 탑

![img_57.png](images/img_57.png)

![img_58.png](images/img_58.png)

- 재귀적으로 증명하기

![img_59.png](images/img_59.png)

![img_60.png](images/img_60.png)

![img_61.png](images/img_61.png)

![img_62.png](images/img_62.png)

- n에 대해서 증명

![img_63.png](images/img_63.png)

- n-1도 해결

![img_64.png](images/img_64.png)

![img_65.png](images/img_65.png)

- base condition

## 재귀로 풀 수 있는 다양한 문제

![img_66.png](images/img_66.png)

![img_67.png](images/img_67.png)

- 재귀적 사고 방식으로 성능 향상

## 다중 분기 재귀

![img_68.png](images/img_68.png)

- 대중적인 용어는 아님
- 문제의 일부만 방문해 원하는 결과를 찾을 수 있음
- 엄밀히 말하면 '분할 정복'이 아님
    - '분할 정복'은 일부가 아니라 전체를 방문

## 분할 정복: 배열의 요소에서 숫자 찾기

![img_69.png](images/img_69.png)

![img_70.png](images/img_70.png)

- 데이터가 n개일 때 몇 개의 데이터를 접근하냐?
    - 시간복잡도 이슈

![img_71.png](images/img_71.png)

![img_72.png](images/img_72.png)

- 선형적으로 요소 수에 비례해서 방문 횟수가 증가

![img_73.png](images/img_73.png)

- 시간복잡도:
    - O(N)

### 정렬된 배열에서 숫자 찾기

![img_74.png](images/img_74.png)

![img_75.png](images/img_75.png)

- early return 가능

![img_76.png](images/img_76.png)

- 하지만 시간 복잡도는 변하지 않음
    - 시간 복잡도는 입력의 개수에 비례해서 계산하기 때문

![img_77.png](images/img_77.png)

- Big-O 표기법으로 계산하면 동일함

![img_78.png](images/img_78.png)

- 사고 방식의 전환이 필요함
- 알고리듬을 고안해야함

## 이진 탐색

![img_79.png](images/img_79.png)

![img_80.png](images/img_80.png)

![img_81.png](images/img_81.png)

- 코드를 보자

![img_82.png](images/img_82.png)

![img_83.png](images/img_83.png)

![img_84.png](images/img_84.png)

- 계속 절반씩 나눠서 본다
- 모든 곳을 탐색하지 않음!

![img_85.png](images/img_85.png)

- '다중 분기 재귀'라고 볼 수 있음
  - 일부만 방문하잖아

![img_86.png](images/img_86.png)

- 시간복잡도:
    - O(logn)

![img_87.png](images/img_87.png)

![img_88.png](images/img_88.png)

- 그래프로 시각적으로 보면 엄청 빠름

![img_89.png](images/img_89.png)

## 최댓값 구하기

![img_90.png](images/img_90.png)

![img_91.png](images/img_91.png)

![img_92.png](old_note/COMP1000/week9/images/img_92.png)

![img_93.png](old_note/COMP1000/week9/images/img_93.png)

![img_94.png](old_note/COMP1000/week9/images/img_94.png)

- 하드웨어의 힘을 빌려서 분할 정복

![img_95.png](old_note/COMP1000/week9/images/img_95.png)

- 토너먼트처럼

![img_96.png](old_note/COMP1000/week9/images/img_96.png)

![img_97.png](old_note/COMP1000/week9/images/img_97.png)

- 이 방법은 결국 모든 요소를 방문해야함
- 정렬되어 있다면 최대값 O(1)로 찾을 수 있긴 함

## 멀티스레딩

![img_98.png](old_note/COMP1000/week9/images/img_98.png)

- 코어가 하나가 아니라 여럿이라면?

![img_99.png](old_note/COMP1000/week9/images/img_99.png)

- 프로그램을 돌릴 수 있는 주체가 여러개!

![img_100.png](old_note/COMP1000/week9/images/img_100.png)

- 스레드 간에 코드 실행은 독립적
- 메모리에 상태를 공유할 수 있음
- 병렬 실행

![img_101.png](old_note/COMP1000/week9/images/img_101.png)

- 코어 수에 비례한 성능 향상

![img_102.png](old_note/COMP1000/week9/images/img_102.png)

- GPU도 있다

![img_103.png](images/img_103.png)

- 픽셀을 독립적으로 그리기 위해서 코어가 매우 많음

## 병렬 알고리듬: 평균 조도 구하기

![img_104.png](images/img_104.png)

- 각 픽셀마다 조도를 구하고 평균을 구하는 개념
- 몇 백만 픽셀을 하나하나 돌리기에는 느리기 때문에 2*2 크기로 병렬처리

![img_105.png](images/img_105.png)

- 64개 코어로 계산하는 예

![img_106.png](images/img_106.png)

- 평균을 계산해서 스크린샷에 4분할 사각형에서 4분할 경계가 사라짐

![img_107.png](images/img_107.png)

![img_108.png](images/img_108.png)

- 재귀적으로 계산
- 쿼드 트리 비슷하게

![img_109.png](images/img_109.png)

- 각 코어가 독립적으로 일을 담당
- 최종적으로 취합
- 참고로 C#에서 [병렬 프로그래밍 API](https://learn.microsoft.com/ko-kr/dotnet/standard/parallel-programming/how-to-write-a-simple-parallel-for-loop) 제공

## 분산 시스템

![img_110.png](images/img_110.png)

- 메모리가 부족하면?
- 데이터가 너무 크다면?
- 연산 속도가 문제가 아니라 I/O가 문제

![img_111.png](images/img_111.png)

![img_112.png](images/img_112.png)

![img_113.png](images/img_113.png)

- 여러 컴퓨터끼리 연결하기 위해 네트워크가 필요함

![img_114.png](images/img_114.png)

- 각각 컴퓨터의 CPU, 메모리를 사용
- 네트워크 지연은 물리적 이슈
    - 거리가 멀면 지연이 생김

![img_115.png](images/img_115.png)

![img_116.png](images/img_116.png)

### 수억 개의 문서에서 "hello" 찾기: 맵/리듀스 모델

![img_117.png](images/img_117.png)

- 검색만

![img_118.png](images/img_118.png)

![img_119.png](images/img_119.png)

- 다른 레이어에서는 검색 바탕으로 취합(더하기)만 함

![img_120.png](images/img_120.png)

- map:
    - 데이터 대응
    - 여기서는 입력을 Hello 문자열의 개수로 대응
- reduce:
    - 결과를 줄여서 합하는 연산

<br><br/>

- 머신러닝의 대규모 데이터 처리와 연관되어 응용할 수 있기 때문에 알아두면 좋음