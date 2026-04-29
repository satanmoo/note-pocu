# Week12

## 확률을 이용한 알고리듬

- 남들이 만들어놓은 확률 알고리듬을 이해하는 것이 필요할 때가 있음
- 직접 만들기는... 쉽지 않죠

### 결정적 알고리듬

![img.png](old_note/COMP1000/week12/img.png)

- deterministic

![img_1.png](old_note/COMP1000/week12/img_1.png)

- 결정적 알고리듬이 "느릴 때"
- 휴리스틱하게 접근을 해보면?
- np 문제와도 연관이 있는 개념

### 확률적 알고리듬

![img_2.png](old_note/COMP1000/week12/img_2.png)

- 다음 단계를 난수에 따라 결정

![img_3.png](old_note/COMP1000/week12/img_3.png)

- 크게 두 부류
- 최근에 관심이 높아지는 분야
    - 특히 양자 컴퓨팅

### 확률적 알고리듬과 속도 향상

![img_4.png](old_note/COMP1000/week12/img_4.png)

- 운이 좋으면 무작위로 사건 하나를 뽑는 행위(즉 시행)이 줄어들어서 속도가 빠름
    - 즉 표본 공간 전부를 안 훑고도 결과를 도출할 수 있음

![img_5.png](old_note/COMP1000/week12/img_5.png)

- 입력 데이터가 똑같아도 무작위로 뽑기 때문에 입력 데이터 중 어떤 것을 먼저 뽑을지는 무작위

## 라스 베가스 vs 몬테 카를로

![img_6.png](old_note/COMP1000/week12/img_6.png)

## 몬테 카를로 알고리듬

### 판정 문제

![img_7.png](old_note/COMP1000/week12/img_7.png)

- yes/no 답이 있는 문제

### 몬테 카를로 알고리듬과 판정 문제

![img_8.png](old_note/COMP1000/week12/img_8.png)

- 판정 문제에 몬테 카를로 알고리듬을 적용할 수 있음
- 검사를 정해진 수 만큼 진행
    - 속도 향상을 기대할 수 있지만, 판정 문제에서 오답을 찾을 수도
- 검사의 반복은 언제 종료?
    - 정해진 수의 검사를 모두 수행했을 때
        - 계속 판정 문제의 NO만 나왔음
        - 내가 뽑지 않은 다른 수행에서 YES가 나올 수 있음
    - YES를 찾은 경우
        - 운이 좋은 경우죠?
        - 찾았으니 판정 문제의 답은 YES로 결정

![img_9.png](old_note/COMP1000/week12/img_9.png)

- 정해진 수만큼 수행해서 못 찾으면 판정 문제의 답은 NO로 결정
- 내가 검사 하지 않은 데이터에서 판정 문제의 정답이 있을 수 있지만, 이 확률을 낮추는게 관건!

### 몬테 카를로 알고리듬의 예

![img_10.png](old_note/COMP1000/week12/img_10.png)

- 판정 문제의 실제 정답이 NO면?
    - 어떤 수행에 대해서도 판정 문제가 YES일 수 없음!!!
    - 몬테 카를로 알고리듬에 따라 정해진 수 만큼 반복하고 판정 문제의 답을 NO로 결정
    - 실제 정답과 일치

![img_11.png](old_note/COMP1000/week12/img_11.png)

- 판정 문제의 실제 정답이 YES면?
    - 수행을 반복하다 YES를 찾은 경우
        - 처음에 정한 수행 횟수보다 적게 수행하고, 판정 문제의 정답도 찾음!
    - 처음에 정해진 수행 횟수를 모두 채운 경우
        - 판정 문제의 답을 NO로 간주하는 것이 몬테 카를로 알고리듬
        - 실제 판정 문제의 정답이 YES라 틀릴 수 있지만, 이 틀릴 확률이 매우 낮음!

![img_12.png](old_note/COMP1000/week12/img_12.png)

- 몬테 카를로 알고리듬을 구현할 때 틀릴 확률을 줄이는 것이 주요 목표

![img_13.png](old_note/COMP1000/week12/img_13.png)

- 베르누이 시행과 똑같은 개념

![img_14.png](old_note/COMP1000/week12/img_14.png)

- 모든 회차에서 "모르겠다"라고 하는 확률을 구해보면
- 회차가 늘수록 급격하게 감소함
    - (1-p)^n

![img_15.png](old_note/COMP1000/week12/img_15.png)

![img_16.png](old_note/COMP1000/week12/img_16.png)

![img_17.png](old_note/COMP1000/week12/img_17.png)

- 지수함수

### 몬테 카를로 알고리듬에서 얻을 수 있는 결론

![img_18.png](old_note/COMP1000/week12/img_18.png)

- 100번정도 시도해서 다 틀리면(NO)면 YES일 가능성이 엄청 높음

### 몬테 카를로 예1: 품질 관리

![img_19.png](old_note/COMP1000/week12/img_19.png)

![img_20.png](old_note/COMP1000/week12/img_20.png)

![img_21.png](old_note/COMP1000/week12/img_21.png)

![img_22.png](old_note/COMP1000/week12/img_22.png)

- 핵심은 1000개를 모두 검사하는게 비효율적이라는 것
- 일부만 검사해서 정확도를 높일 수 없을까?

![img_23.png](old_note/COMP1000/week12/img_23.png)

- 우선 목표를 정함
- 여기서 "불량률"은 불량 여부를 오판할 확률

![img_24.png](old_note/COMP1000/week12/img_24.png)

- "판정 문제"를 정의해야함
- 불량인지 판정
    - 정답을 맞출 확률(불량인데 불량이라고 판단) p
    - 정답을 틀릴 확률(불량인데 불량이지 않다고 판단) 1 - p

![img_25.png](old_note/COMP1000/week12/img_25.png)

- 몇 번 시행할지를 결정해야함
    - n을 구하기

![img_26.png](old_note/COMP1000/week12/img_26.png)

![img_27.png](old_note/COMP1000/week12/img_27.png)

- 38개를 검사해서 모두 정답을 맞춘다면(불량인데 불량이라고 판단)
- 불량 여부를 오판할 확률(불량률)이 2프로 미만임

![img_28.png](old_note/COMP1000/week12/img_28.png)

- 핵심은 목표(신뢰도, 불량률)에 몇 개를 검사할 것인지를 결정하는 것

## 소수와 합성수

![img_29.png](old_note/COMP1000/week12/img_29.png)

![img_30.png](old_note/COMP1000/week12/img_30.png)

- 소수는 자연 현상

![img_31.png](old_note/COMP1000/week12/img_31.png)

- 두 소수의 곱이 두 소수의 최소 공배수

![img_32.png](old_note/COMP1000/week12/img_32.png)

![img_33.png](old_note/COMP1000/week12/img_33.png)

- 왜 굳이 소수 주기에 출몰?

![img_34.png](old_note/COMP1000/week12/img_34.png)

- 자연에서 소수 주기로 출몰
    - 신기하네

![img_35.png](old_note/COMP1000/week12/img_35.png)

- 천적의 성장 패턴은 소수가 아닌 경우가 많나봄

### 몬테 카를로 예2: 소수 판별법

![img_36.png](old_note/COMP1000/week12/img_36.png)

- RSA 암호화
    - 소수 활용
    - 비대칭 암호

![img_37.png](old_note/COMP1000/week12/img_37.png)

![img_38.png](old_note/COMP1000/week12/img_38.png)

### 주먹구구식 소수 판별법

![img_39.png](old_note/COMP1000/week12/img_39.png)

- 주니어 프로그래머 면접에 매우 자주 나오는

![img_40.png](old_note/COMP1000/week12/img_40.png)

- 수학적 개념을 이용해 조금 더 빠른 알고리듬
- 곱에서 순서쌍(조합)이 동일함을 이용

![img_41.png](old_note/COMP1000/week12/img_41.png)

- RSA에 사용하는 소수는 매우 큼
- 연산이 매우 많아야함

### 연산을 줄이기 위해서 몬테 카를로 알고리듬!

![img_42.png](old_note/COMP1000/week12/img_42.png)

- 확률을 알아야함

### 밀러 라빈 소수 판별법

![img_43.png](old_note/COMP1000/week12/img_43.png)

- 소수인지 확률적으로 알려주는 판별법을 "밀러 라빈 소수 판별법"으로 구할 수 있음

![img_44.png](old_note/COMP1000/week12/img_44.png)

- 밀러 라빈 소수 판별법은 합성수임을 바로 알 수 있음

![img_45.png](old_note/COMP1000/week12/img_45.png)

- 몬테 카를로 알고리듬을 적용하기

- 결정문제는 n이 합성수인가?
- n이 소수이면 반복 수행에도 항상 밀러 라빈 소수 판별법을 통과함
    - 어떤 수행에 대해서도 판정 문제가 YES일 수 없음!!!
    - 어떤 수행에 대해서도 b는 합성수일 수 없음

- 임의의 수 만큼 반복하는데 결정 문제의 답이 NO라면?
    - 즉 n이 소수라면?
    - 정해진 반복 횟수만큼 b에 대해 밀러 라빈 소수 판별법을 수행하면 모두 통과함
    - 몬테 카를로 알고리듬에 따라 NO라고 결론을 내림
    - 즉 소수라고 결론을 내림
- 임의의 수 만큼 반복하는데 결정 문제의 답이 YES라면?
    - 즉 n이 합성수라면?
    - 만약 수행 반복 중간에 b가 밀러 라빈 소수 판별법을 통과하지 못하면 몬테 카를로 알고리듬에 따라 YES라고 결론
    - 정해진 반복 횟수만큼 밀러 라빈 소수 판별법을 수행하고 모두 통과한 경우
        - 실제 합성수인데 소수라고 결론을 내림
        - 결정 문제의 답은 YES인데 몬테 카를로 알고리듬의 결과 NO라고 결론을 내림. 오답!

![img_46.png](old_note/COMP1000/week12/img_46.png)

- 밀러 라빈 판별법에 따르면 n이 합성수일 때, 임의의 b를 뽑았을 때 판별법을 통과할 확률은 1/4이하
- 밀러 라빈 판별법에 따르면 n이 소수일 때, 임의의 b에 대해서 판별법을 통과할 확률은 100%
- 밀러 라빈 판별법은 b에 통과/탈락을 적용해 이 결과에 따라 n이 합성수인지 판단하는 방법이다. b가 소수인지 합성수인지 여부는 중요하지 않음
    - 요건 너무 수학적 내용이니까...

![img_47.png](old_note/COMP1000/week12/img_47.png)

- "1 < b < n" 을 만족하는 b를 무작위로 반복해서 뽑는 시행

![img_48.png](old_note/COMP1000/week12/img_48.png)

- 10번정도 무작위로 b를 뽑으면 n이 합성수이지만(판정 문제의 답이 YES) 소수라고 오답(판정 문제의 답이 NO)을 내릴 확률이 매우 낮아짐

![img_49.png](old_note/COMP1000/week12/img_49.png)

![img_50.png](old_note/COMP1000/week12/img_50.png)

- 큰 홀수 하나 뽑고(n) 1과 n사이 홀수를 무작위로 10번정도 뽑아서 소수인지 아닌지 판별
- 큰 소수 2개 찾기를 매우 효율적으로 가능!

## 확률적 알고리듬과 프로그래머

![img_51.png](old_note/COMP1000/week12/img_51.png)

- 프로그래머는 결적적 알고리듬을 선호

![img_52.png](old_note/COMP1000/week12/img_52.png)

- 지금까지는 확률적 알고리듬을 피해온 경향이 있음
- 하지만 확률적 알고리듬을 사용하는 분야가 점점 증가

## 참고: 동영상 검수

![img_53.png](old_note/COMP1000/week12/img_53.png)

- 동영상 녹화와 녹음의 sync

![img_54.png](old_note/COMP1000/week12/img_54.png)

![img_55.png](old_note/COMP1000/week12/img_55.png)

![img_56.png](old_note/COMP1000/week12/img_56.png)

![img_57.png](old_note/COMP1000/week12/img_57.png)

- 10분씩 건너뛰며 5초씩만 확인해도 거의 문제 없음
    - 확률적 알고리듬

## 통계

![img_194.png](old_note/COMP1000/week12/img_194.png)

- 통계학이 컴퓨터 발전에 영향을 받아 함께 발전

### 통계학

![img_195.png](old_note/COMP1000/week12/img_195.png)

## 평균

![img_196.png](old_note/COMP1000/week12/img_196.png)

## 중앙값 (median)

![img_197.png](old_note/COMP1000/week12/img_197.png)

- 나열하는 원소의 개수가 짝수/홀수 여부에 따라 계산이 달라짐

## 벨 커브(bell curve)

![img_198.png](old_note/COMP1000/week12/img_198.png)

- 종 모양의 연속 확률 분포

![img_199.png](old_note/COMP1000/week12/img_199.png)

### 벨커브의 용도

![img_200.png](old_note/COMP1000/week12/img_200.png)

![img_201.png](old_note/COMP1000/week12/img_201.png)

- 작동 원리를 이해하기는 어려움

### 벨 커브의 발견

![img_202.png](old_note/COMP1000/week12/img_202.png)

- 확률을 쉽게 계산하기 위한 도구에서 시작

![img_203.png](old_note/COMP1000/week12/img_203.png)

![img_204.png](old_note/COMP1000/week12/img_204.png)

- 이항 분포에서 시행 횟수(n)이 너무 증가해서 계산이 어려워짐

![img_205.png](old_note/COMP1000/week12/img_205.png)

- 확률변수 x를 입력하면 결과로 확률을 도출하는 "근사 그래프 공식"이 도출됨

![img_206.png](old_note/COMP1000/week12/img_206.png)

![img_207.png](old_note/COMP1000/week12/img_207.png)

- 아직까지 정규 분포와 연관성은..?

![img_208.png](old_note/COMP1000/week12/img_208.png)

- 특정 조건을 만족할 때 정규 분포에 가까워짐
    - p가 0.5
    - 시행 횟수(n)가 엄청 클때

### 천문학의 문제

![img_209.png](old_note/COMP1000/week12/img_209.png)

- 측정 결과의 객관성이 필요했음

![img_210.png](old_note/COMP1000/week12/img_210.png)

- 정규 분포가 생기면서 측정 결과의 객관성이 확보됨

![img_211.png](old_note/COMP1000/week12/img_211.png)

- "측정 오차"가 문제임

![img_212.png](old_note/COMP1000/week12/img_212.png)

![img_213.png](old_note/COMP1000/week12/img_213.png)

- 중구난방으로 싸웠다는 이야기

### 관측 오차를 포함하는 하나의 기준

![img_214.png](old_note/COMP1000/week12/img_214.png)

- 관측 오차를 고려한 기준이 필요함

![img_215.png](old_note/COMP1000/week12/img_215.png)

- 실제 값과 관측값의 차이를 어느정도 허용할 것인가?

### 오차 곡선

![img_216.png](old_note/COMP1000/week12/img_216.png)

- 왜 "오차 곡선"인가?

![img_217.png](old_note/COMP1000/week12/img_217.png)

- 직선이 아니라 곡선임
- 수학자들의 증명

![img_218.png](old_note/COMP1000/week12/img_218.png)

- 갈릴레오 형님의 직관

![img_219.png](old_note/COMP1000/week12/img_219.png)

- 그러면 실제 참값은 어떻게 찾음?

![img_220.png](old_note/COMP1000/week12/img_220.png)

- 갈릴레오는 "중앙값"을 참값이라고 추측함

![img_221.png](old_note/COMP1000/week12/img_221.png)

![img_222.png](old_note/COMP1000/week12/img_222.png)

### 오차 곡선을 찾기 위한 노력들

![img_223.png](old_note/COMP1000/week12/img_223.png)

- 심슨의 오차 곡선

![img_224.png](old_note/COMP1000/week12/img_224.png)

- 곡선이 아니라 당연히 잘못됨
- 하나의 간단한 시도였음

![img_225.png](old_note/COMP1000/week12/img_225.png)

![img_226.png](old_note/COMP1000/week12/img_226.png)

![img_227.png](old_note/COMP1000/week12/img_227.png)

- 라플라스 오차 곡선

![img_228.png](old_note/COMP1000/week12/img_228.png)

- 미분 불가능해서 욕먹음
- 참값 주변에서 변화율이 갑자기 확 바뀜

![img_229.png](old_note/COMP1000/week12/img_229.png)

- 이를 보완했지만
- 연속 곡선이 아니라서 비판 받음

![img_230.png](old_note/COMP1000/week12/img_230.png)

![img_231.png](old_note/COMP1000/week12/img_231.png)

![img_232.png](old_note/COMP1000/week12/img_232.png)

![img_233.png](old_note/COMP1000/week12/img_233.png)

![img_234.png](old_note/COMP1000/week12/img_234.png)

![img_235.png](old_note/COMP1000/week12/img_235.png)

![img_236.png](old_note/COMP1000/week12/img_236.png)

### 정규 분포의 발견

![img_237.png](old_note/COMP1000/week12/img_237.png)

- 가우스의 최소제곱법

![img_238.png](old_note/COMP1000/week12/img_238.png)

![img_239.png](old_note/COMP1000/week12/img_239.png)

- h(정밀도)값에 따라 곡선의 모양을 바꿀 수 있음
- x는 확률변수

![img_240.png](old_note/COMP1000/week12/img_240.png)

- 가우스가 사용한 h
    - 시그마를 활용

![img_241.png](old_note/COMP1000/week12/img_241.png)

- 가우스는 참값은 평균에 있다고 못 박음
- 참값(평균)을 0으로 만들도록 이동시키게 치환함

![img_242.png](old_note/COMP1000/week12/img_242.png)

### 사회에서 발견한 정규 분포

![img_243.png](old_note/COMP1000/week12/img_243.png)

- BMI를 만든 사람

![img_244.png](old_note/COMP1000/week12/img_244.png)

![img_245.png](old_note/COMP1000/week12/img_245.png)

![img_246.png](old_note/COMP1000/week12/img_246.png)

- "평균인"이라는 개념도 만듬
- 하지만 자연현상에 어떻게 정규분포가 적용되는지 비판을 받음
    - 수학적 이론인데? 말이 되나?

![img_247.png](old_note/COMP1000/week12/img_247.png)

![img_248.png](old_note/COMP1000/week12/img_248.png)

- 정리하자면
- "천문학에서 개별적인 관측 오차", "동일 집단에 속한 대상들 간의 차이"는 성질이 비슷함
- 이 성질이 무엇이냐
    - 참값(평균)이 있고, 어떤 요인이 추가되면 참값에 멀어짐
    - 예를들어 어릴 때 사고를 당했고, 우유를 못 먹었고 등등 모든 나쁜 요인이 다 해당되면 평균에서 아주 멀어져 작은 키가 관측되는거
    - 즉 평균에 가까운 관측들은 요인의 개수가 적음
        - 요인의 종류보다는 개수가 중요함
    - 즉 동일한 관측 결과라도 평균에서 멀어지는 요인의 구성은 다를 수 있으나, 확실한 것은 평균에서 멀어지는 요인이 많을 수록 평균에서 멀어진다는 것임
- 이런 내용을 수학적으로 체계화한게 "중심 극한 정리"

![img_249.png](old_note/COMP1000/week12/img_249.png)

![img_250.png](old_note/COMP1000/week12/img_250.png)

- 우연히 좋은 방법(정규 분포)를 찾음
- 근사치라 결정론적이지는 않음

![img_251.png](old_note/COMP1000/week12/img_251.png)

- "신뢰의 도약"으로 이를 기반으로 사회과학에 적용
- 거의 대부분(99.99%) 잘 맞음

## 정규 분포

![img_252.png](old_note/COMP1000/week12/img_252.png)

- "이상적인 그래프"
- 정규분포에 가까울 수록 이상적임

### 기댓값

![img_253.png](old_note/COMP1000/week12/img_253.png)

- 평균개념

## 대표값

![img_254.png](old_note/COMP1000/week12/img_254.png)

- 기댓값 외에도 대표값에 다른 것을 사용할 수 있음

![img_255.png](old_note/COMP1000/week12/img_255.png)

![img_256.png](old_note/COMP1000/week12/img_256.png)

- 정규분포의 너비
- 평균에서 떨어진 오차가 얼마나 많은가?

![img_257.png](old_note/COMP1000/week12/img_257.png)

- 평균에서 떨어진 값이 얼마나 많은가?

![img_258.png](old_note/COMP1000/week12/img_258.png)

- 시그마의 값에 따라 h값이 결정되고
- h값에 따라 너비가 결정됨

## 분산

![img_259.png](old_note/COMP1000/week12/img_259.png)

- 시그마의 제곱
- 평균에서 떨어진 값이 얼마나 있는가?

![img_260.png](old_note/COMP1000/week12/img_260.png)

![img_261.png](old_note/COMP1000/week12/img_261.png)

- 분산에 띠라 그래프의 모양(너비)가 달라짐

## 평균만 다른 정규 분포 그래프

![img_262.png](old_note/COMP1000/week12/img_262.png)

- 그래프 좌/우로 평행이동

![img_264.png](old_note/COMP1000/week12/img_264.png)

![img_263.png](old_note/COMP1000/week12/img_263.png)

## 분산을 계산하기

![img_265.png](old_note/COMP1000/week12/img_265.png)

- 정규 분포 그래프의 모양을 결정하는 것:
    - 평균
    - 분산

![img_266.png](old_note/COMP1000/week12/img_266.png)

- 편차:
    - 관측값과 평균의 차

![img_267.png](old_note/COMP1000/week12/img_267.png)

- 관측값마다 편차가 다름
- 편차들를 평균내는 개념이 분산임

![img_268.png](old_note/COMP1000/week12/img_268.png)

![img_269.png](old_note/COMP1000/week12/img_269.png)

![img_270.png](old_note/COMP1000/week12/img_270.png)

- 편차의 합은 항상 0임
- 편차는 음수가 나올 수 있음
- 따라서 편차의 제곱을 평균으로!

![img_271.png](old_note/COMP1000/week12/img_271.png)

![img_272.png](old_note/COMP1000/week12/img_272.png)

- "평균 제곱 오차"라고 표현하기도 함

![img_273.png](old_note/COMP1000/week12/img_273.png)

## 분산과 제곱

![img_274.png](old_note/COMP1000/week12/img_274.png)

- 분산값은 너무 큼
- 계산할 때 제곱을 사용했기 때문

## 표준 편차

![img_275.png](old_note/COMP1000/week12/img_275.png)

- 분산값에 루트를 씌워서 원래의 차원(단위)로 돌아옴
- 관측값의 단위랑 가까워짐

![img_276.png](old_note/COMP1000/week12/img_276.png)

- 표준 편차가 "시그마" 정규 분포의 상수값(h)에 사용

![img_277.png](old_note/COMP1000/week12/img_277.png)

## 정규분포의 상수값에 시그마 제곱으로 계산하는 이유?

![img_278.png](old_note/COMP1000/week12/img_278.png)

- 음수를 없애려면 절대값으로 계산하면 안 되나요?

![img_279.png](old_note/COMP1000/week12/img_279.png)

![img_280.png](old_note/COMP1000/week12/img_280.png)

- 평균에서 멀수록 오차(편차)의 값이 커지게 하기 위해 제곱
- 직관적으로 생각하면 곡선을 만들기 위함

## 정규 분포의 확률 밀도 함수

![img_281.png](old_note/COMP1000/week12/img_281.png)

![img_282.png](old_note/COMP1000/week12/img_282.png)

![img_283.png](old_note/COMP1000/week12/img_283.png)

![img_284.png](old_note/COMP1000/week12/img_284.png)

- 정규 분포로 그리면 다른 자료와 비교 분석이 용이함

![img_285.png](old_note/COMP1000/week12/img_285.png)

![img_286.png](old_note/COMP1000/week12/img_286.png)

- 사실 거의 모든 데이터가 정규 분포를 따른다고 가정함

![img_287.png](old_note/COMP1000/week12/img_287.png)

- 원치 않은 이혼 여부를 알 수 있음

![img_288.png](old_note/COMP1000/week12/img_288.png)

- 아웃 라이어가 표현상 감춰짐

![img_289.png](old_note/COMP1000/week12/img_289.png)

- 즉 데이터의 "노이즈"를 제거하기 탁월함!!!

![img_290.png](old_note/COMP1000/week12/img_290.png)

- 대표적인 적용 예가 수능
    - 상대평가

- 참고로 북미에서는 한동안 상대평가가 비인간적이라고 절대평가가 유행했음

![img_291.png](old_note/COMP1000/week12/img_291.png)

![img_292.png](old_note/COMP1000/week12/img_292.png)

![img_293.png](old_note/COMP1000/week12/img_293.png)

![img_294.png](old_note/COMP1000/week12/img_294.png)

- 상위 몇 프로인지 구하기 위해 적분한다는 내용

![img_295.png](old_note/COMP1000/week12/img_295.png)

![img_296.png](old_note/COMP1000/week12/img_296.png)

![img_297.png](old_note/COMP1000/week12/img_297.png)

- 적분 계산이 매번 귀찮음

![img_298.png](old_note/COMP1000/week12/img_298.png)

- "표준 정규 분포"로 쉽게 계산

## 표준 정규 분포

![img_299.png](old_note/COMP1000/week12/img_299.png)

- 정규 분포의 모양은 평균과 표준편차에 따라 결정된다는 아이디어에서 출발

![img_300.png](old_note/COMP1000/week12/img_300.png)

- 평균과 표준편차의 값에 상관없이 그래프를 정규화하자!

![img_301.png](old_note/COMP1000/week12/img_301.png)

![img_302.png](old_note/COMP1000/week12/img_302.png)

- 정규화 결과 표준 편차를1, 평균을 0으로 만듬!

![img_303.png](old_note/COMP1000/week12/img_303.png)

- 모든 개별값에 표준화 공식을 적용하면 됨
- 그러면 새로운 정규 분포(표준화된 정규 분포)의 평균은 0, 표준 편차는 1

![img_304.png](old_note/COMP1000/week12/img_304.png)

![img_305.png](old_note/COMP1000/week12/img_305.png)

![img_306.png](old_note/COMP1000/week12/img_306.png)

![img_307.png](old_note/COMP1000/week12/img_307.png)

## Z-score

![img_308.png](old_note/COMP1000/week12/img_308.png)

- 표준화된 개별값
- 평균에서 몇 표준편차(몇 시그마)만큼 떨어져 있는지 표현

![img_309.png](old_note/COMP1000/week12/img_309.png)

## 표준 정규 분포의 의미

![img_310.png](old_note/COMP1000/week12/img_310.png)

- 상위/하위 비율을 구하기 매우 쉬워짐

![img_311.png](old_note/COMP1000/week12/img_311.png)

- 실제 값(x)가 달라도 z값은 유사할 수 있음
- 집단의 분포를 알기 쉬워짐

![img_312.png](old_note/COMP1000/week12/img_312.png)

## 68-95-99.7 Rule

### 68%

![img_313.png](old_note/COMP1000/week12/img_313.png)

- 1 시그마 안의 데이터

### 95%

![img_314.png](old_note/COMP1000/week12/img_314.png)

- 2 시그마 안의 데이터

### 99.7%

![img_315.png](old_note/COMP1000/week12/img_315.png)

![img_316.png](old_note/COMP1000/week12/img_316.png)

- 3 시그마 밖의 데이터(개별 걊)은 뭔가 이상한 자료임
- 어 관측이 잘못됬나?

![img_317.png](old_note/COMP1000/week12/img_317.png)

- 상위 n%를 구할 때 z가 중요함

## 표준 정규 테이블(z-table)

![img_318.png](old_note/COMP1000/week12/img_318.png)

![img_319.png](old_note/COMP1000/week12/img_319.png)

- 보통 z의 왼쪽 영역 넓이를 계산해줌

![img_320.png](old_note/COMP1000/week12/img_320.png)

![img_321.png](old_note/COMP1000/week12/img_321.png)

![img_322.png](old_note/COMP1000/week12/img_322.png)

- 이런식으로 읽음

![img_323.png](old_note/COMP1000/week12/img_323.png)

![img_324.png](old_note/COMP1000/week12/img_324.png)

![img_325.png](old_note/COMP1000/week12/img_325.png)

### z = 1 일 때 너비

![img_326.png](old_note/COMP1000/week12/img_326.png)

![img_327.png](old_note/COMP1000/week12/img_327.png)

![img_328.png](old_note/COMP1000/week12/img_328.png)

- 우리가 구하고 싶은 영역은 1시그마 영역

![img_329.png](old_note/COMP1000/week12/img_329.png)

![img_330.png](old_note/COMP1000/week12/img_330.png)

- 대칭을 이용해서 계산

![img_331.png](old_note/COMP1000/week12/img_331.png)

![img_332.png](old_note/COMP1000/week12/img_332.png)

- 이것이 표준 정규 분포와 z-table

## 대단위 통계

![img_333.png](old_note/COMP1000/week12/img_333.png)

- 표본 수가 적으면 구하기 쉬움

![img_334.png](old_note/COMP1000/week12/img_334.png)

- 근데 대학생 전체의 평균을 구하려면?
- 비용이 엄청나다

### 샘플링

![img_335.png](old_note/COMP1000/week12/img_335.png)

- 일부로 평균을 구해서
- 전체 평균을 추정해보자

![img_336.png](old_note/COMP1000/week12/img_336.png)

- 비가역적인 성질이 있는 경우도 표본 조사(샘플링)해야함
- 뭔가 몬테카를로 알고리듬이랑 비슷함

![img_337.png](old_note/COMP1000/week12/img_337.png)

- 일부만 조사한 뒤 결과를 토대로 전체를 조사
- 대표적으로 여론조사가 이런식

## 모집답/표본집단

![img_338.png](old_note/COMP1000/week12/img_338.png)

- 모/표본

## 표본 집단을 조사할 때 고려할 점

![img_339.png](old_note/COMP1000/week12/img_339.png)

- 공정한 표본 추출 방법의 대표가 "무작위 표본 추출"

![img_340.png](old_note/COMP1000/week12/img_340.png)

- 모평균과 표본평균은 다름

![img_341.png](old_note/COMP1000/week12/img_341.png)

- 너무 당연하죠?

![img_342.png](old_note/COMP1000/week12/img_342.png)

- 표본 수가 크면 모집단의 통계값과 거의 유사해짐
- 이거 증명은 생략하고 직관적으로 당연함

![img_343.png](img_343.png)

- 그래서 중요한 직관은 표본집단에 따라 실제 모집단의 통계와 얼마나 달라지냐?

## 구간 추정

![img_344.png](img_344.png)

- "모집단의 통계"가 있을 것 같은 구간을 정함
- 그 구간에 모집단의 통계가 있을 확률을 구함

![img_345.png](img_345.png)

- 정확도:
    - 모집단의 통계를 포함할 확률
- 정밀도:
    - 구간의 폭이 좁은가를 나타내는 개념

![img_346.png](img_346.png)

- 어떤 값을 예측하고 그 값이 맞을 확률을 구하는게 아님
- 구간을 정의하고 구간에 있을 확률을 구하는 것

![img_347.png](img_347.png)

- 구간을 "신뢰 구간"이라고 표현
- 구간에 존재할 확률(정확도)를 "신뢰도"라고 표현

## 신뢰 구간

![img_348.png](img_348.png)

- 모집단의 통계가 있다고 추정하는 구간

## 신뢰도

![img_349.png](img_349.png)

- 모집단의 통계가 신뢰 구간에 존재할 확률

![img_350.png](img_350.png)

- 신뢰도가 높으면 정밀도는 떨어짐
- 정밀도는 구간에 반비례

![img_351.png](img_351.png)

## 신뢰 구간과 오차 범위

![img_352.png](img_352.png)

- 모집단의 통계와 표본집단의 통계의 차이를 수치화한 것이 "오차 범위"
    - 허용 오차

- 오차 범위를 통해 신뢰 구간을 구할 수 있음

![img_353.png](img_353.png)

- 근데 오차 범위는 어떻게 구함

![img_354.png](img_354.png)

- 증명됬으니 가져다 쓰자
- 표본 수가 30개 넘으면 사용 가능

![img_355.png](img_355.png)

## 신뢰도 95%

![img_356.png](img_356.png)

![img_357.png](img_357.png)

- a,b를 찾으려면?
- z값에서 역으로 찾기

![img_358.png](img_358.png)

- 알파는 모평균이 속하지 않는 범위의 넓이(확률)

![img_359.png](img_359.png)

- 대칭을 이용해서 구함

![img_360.png](img_360.png)

![img_361.png](img_361.png)

- z값 찾음
- 이 값을 오차 범위를 구하는 공식에 넣으면 됨

![img_362.png](img_362.png)

![img_363.png](img_363.png)

- 매번 표를 볼 필요없이 너무 자주 등장하는 값이라 인덱싱

![img_364.png](img_364.png)

![img_365.png](img_365.png)

- 오차 범위로 신뢰 구간 구하기
- 표본 평균에서 빼고 더하면 끝

![img_366.png](img_366.png)

- "평균 키"에 대한 신뢰구간
- 모평균이 속하는 범위를 구하는 문제
- 신뢰 구간 추정!

![img_367.png](img_367.png)

- 결론을 잘 이해해야함

![img_368.png](img_368.png)

![img_369.png](img_369.png)

![img_370.png](img_370.png)

- 99% 라서 범위가 넓어짐

![img_371.png](img_371.png)

- z값이 커지니까

![img_372.png](img_372.png)

- 오차 범위 공식을 사용할 수 없는 경우
- 표본의 표준 편차를 구할 수 없는 경우

## 모비율의 구간 추정

![img_373.png](img_373.png)

- 이항 분포 개념이 포함되어 있음
- 표본비율의 값이 어떨 때 구간이 좁아질까?
- 표본 비율이 0.5일 때 구간이 가장 넓음
- 동일한 신뢰도(z값)이라도 표본 비율에 따라 구간이 변함
- 직관적으로 생각하면, 표본비율을 뽑았는데 1:9로 집중되어 있으면 오차가 적음(지지율 경향이 결정)
- 표본비율을 뽑았는데 5:5로 반반이면 오차가 큼(지지율 경향이 결정되지 않아서 불확실)

![img_374.png](img_374.png)

![img_375.png](img_375.png)

![img_376.png](img_376.png)

- 그저 공식 대입

![img_377.png](img_377.png)

- 지지율이 56%에 오차범위 4%

- 후보자 2명의 지지율이 나왔는데
- 한명은 53%, 다른 한명은 54%
- 둘다 95% 신뢰구간에서 오차범위 2%
- 신뢰구간이 겹치는 부분이 생기고, 오차범위 내에서 접전

![img_378.png](img_378.png)

![img_379.png](img_379.png)

- 이런 기사는 신뢰 구간에 대한 이야기
- 95%확률로 모비율(모집단의 통계값)이 42~48% 사이 존재

## 통계의 오류

![img_380.png](img_380.png)

![img_381.png](img_381.png)

![img_382.png](img_382.png)

- 그래프를 읽자
- 표본 조사가 잘 못 되면...

## 대푯값

![img_383.png](img_383.png)

- 언제 평균값보다 중앙값이 의미가 있을까?

### 중앙값을 대푯값으로 쓰기 좋을 때

![img_384.png](img_384.png)

- 아웃라이어로 인한 데이터 왜곡

![img_385.png](img_385.png)

### 최빈값

![img_386.png](img_386.png)

- 가장 자주 나오는 값
- 영어로 "mode"
- 최빈값은 여러 개가 나올 수 이씀

## 정규 분포의 이름(용어 정리)

![img_387.png](img_387.png)

- 정규 분포 이름이 별로임

![img_388.png](img_388.png)

- 진짜 정규화된건 표준 정규 분포

### 프로그래머는 가우시안 분포를 선호함

![img_389.png](img_389.png)

- 이게 더 분명함

### 가우시안 분포를 사용하는 곳

![img_390.png](img_390.png)

- 가장 중요한 인사이트는 작은 오차를 가진 개별 값들이 대푯값 근처에 많이 있다는 것

### 신호의 노이즈 제거

![img_391.png](img_391.png)

### 이미지 블러 효과

![img_392.png](img_392.png)

- 여기저기 쓰인다고 알고 있으면 됨

- 그리고 포프샘은 "푸리에 변환" 공학자들에게 참 중요하다고 꼭 공부하면 좋다고 하심!