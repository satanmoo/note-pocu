# Week1

### 2진수를 10진수로 변환

![img_66.png](images/img_66.png)

- 2진법의 셈과 동일함

![img_67.png](images/img_67.png)

### 10진수 <-> 8진수

![img_68.png](images/img_68.png)

- 10진수를 8진수로 표현할 때
    - 8로 나누면서 나머지 기록
    - 나누는 대상이 8보다 작으면 종료

### 10진수 <-> 16진수

![img_69.png](images/img_69.png)

- 동일한 논리

### 2진수에서 8진수로 변환

![img_70.png](images/img_70.png)

- 2진수의 특수한 성질을 활용

### 8진수에서 2진수로 변환

![img_71.png](images/img_71.png)

![img_72.png](images/img_72.png)

- 2와 8의 관계를 활용했음
- 8진수의 한자릿수는 2진수의 세자릿수와 동일

### 2진수를 16진수로 변환

![img_73.png](images/img_73.png)

- 4자리씩 끊으면 됨

### 16진수를 2진수로 변환

![img_74.png](images/img_74.png)

### 8진수 <-> 16진수

![img_75.png](images/img_75.png)

- 특수한 관계가 없음
- 중간에 2진수로 변환하고 다시 변환하기

## 컴퓨터는 왜 2진수만 사용할까?

![img_76.png](images/img_76.png)

- 트랜지스터는 반도체라 전류의 흐름을 조절할 수 있음

![img_77.png](images/img_77.png)

- 트랜지스터의 두 상태를 숫자로 표현할 때 이진법이 적함

![img_78.png](images/img_78.png)

- 트랜지스터의 상태를 기록하는 가장 최소의 단위를 '비트'라고 부름

## 비트

![img_79.png](images/img_79.png)

- 디지털에서 가장 작은 단위
- 2진법과 어울림

![img_80.png](images/img_80.png)

- 큰 값을 표현하기 위해서는 여러 비트를 사용

![img_81.png](images/img_81.png)

### 비트의 순서

![img_82.png](images/img_82.png)

![img_83.png](images/img_83.png)

- 정답은 없음
- 기본적으로 제일 낮은 비트가 오른쪽으로 가정

## 비트 수와 오디오 포맷

![img_84.png](images/img_84.png)

- 오디오 품질은 비트 수에 따라 결정
    - 스트리밍 퀄리티

- 비트레이트:
    - 1초에 들어오는 데이터의 크기
    - Premium 2배로 데이터를 받으니까 음질이 2배

![img_85.png](images/img_85.png)

- 비트 뎁스:
    - 양자화 개념
    - 그래프의 수직축
    - 음파의 높이를 몇 단계로 나누느냐?
        - 16비트라면 16단계로 나눔

![img_86.png](images/img_86.png)

- 샘플링 레이트:
    - 그래프의 수평축
    - 1초에 막대 몇 개 넣을거냐?
    - 초마다 샘플 몇 개를 챕쳐하냐?

### 오디오 파일의 크기 계산하기

![img_87.png](images/img_87.png)

- wave 파일은 압축하지 않음

![img_88.png](images/img_88.png)

- 'KB' 대문자임
    - 킬로바이트

### 데이터를 저장할 때 단위

![img_89.png](images/img_89.png)

![img_90.png](images/img_90.png)

![img_91.png](images/img_91.png)

- 저장할 때 최소 단위는 '바이트'

## 바이트

![img_92.png](images/img_92.png)

- 8b == 1B

### 왜 저장할 때 바이트를 사용해?

![img_93.png](images/img_93.png)

- 비트는 너무 작음

![img_94.png](images/img_94.png)

- 읽어 오기

![img_95.png](images/img_95.png)

- 쓰기

### 전송에는 비트를 사용함

![img_96.png](images/img_96.png)

- 마케팅에 좋아서 사용함
    - 인터넷이 빨라 보이는...

- 관습적으로 네트워크 쪽에서는 비트를 많이 사용

## 컴퓨터의 데이트 단위

![img_97.png](images/img_97.png)

- 서구권에서 세자리씩 끊음
    - a thousand
    - a million
    - ...

### 컴퓨터의 1K는 1024

![img_98.png](images/img_98.png)

- 2진수로 표현할 때 깔끔하기 위함

![img_99.png](images/img_99.png)

- 1000 대신 단위 올라갈 때 1024를 곱하자

### 예외도 있음

![img_100.png](images/img_100.png)

- 예외:
    - 하드디스크 제조사
    - 네트워크 카드 제조사
    - 인터넷 망 회사

![img_101.png](images/img_101.png)

- 숫자 뻥튀기 용도

![img_102.png](images/img_102.png)

- 기본은 1024
