## Java Exception

### 오류 처리 방법 정리

### 사실 오류 상황을 피하는게 최고임

![img_295.png](pocu-note/COMP2500/week12/images/img_295.png)

- 가장 중요한거죠
- 예를 들어 파일을 읽는데, 파일이 있는지 확인하고 없으면 아에 여는 시도를 안 하는 거죠

![img_296.png](pocu-note/COMP2500/week12/images/img_296.png)

- 인터페이스 개념
- 내가 만드는 코드의 시스템(세계)를 완전히 통제하고, 밖은 통제 못하는 개념

![img_297.png](pocu-note/COMP2500/week12/images/img_297.png)

- 내 시스템 안에 들어온 데이터는 언제나 유효
    - 예외 상황을 고려할 필요 없음
    - 예외 상황이 발생하면 그건 버그
        - 시스템의 문제

![img_298.png](pocu-note/COMP2500/week12/images/img_298.png)

- 남으로부터 받아오는 데이터는 유효하지 않다고 의심
- 경계에서 잡자, 유효성 검증

![img_299.png](pocu-note/COMP2500/week12/images/img_299.png)

- 경계에서 남에게 문제를 알려주는 방법
    - boolean, null 반환
    - 오류코드 반환
        - main() 에서 보통 이렇게 하죠
    - 예외를 던짐

![img_300.png](pocu-note/COMP2500/week12/images/img_300.png)

### 오류 처리 방법 1: 무시

![img_301.png](pocu-note/COMP2500/week12/images/img_301.png)

- 오류 상황 발생 시
    - 예를 들어 외부에서 들어오는 데이터를 검증하는 상황
- 결과적으로 프로그램에 3가지 일 중 하나 발생

![img_302.png](pocu-note/COMP2500/week12/images/img_302.png)

- 보통은 1,2 번
    - 블루 스크린은 운영체제 크래시

![img_303.png](pocu-note/COMP2500/week12/images/img_303.png)

- 데이터가 망가진 상태로, 연산을 하다가 심각한 상황을 초래할 수도 있음

![img_304.png](pocu-note/COMP2500/week12/images/img_304.png)

- 1,2 번 크래시 나는 경우를 매우 안 좋게 보고 무시하는 방법을 저평가하는 사람도 있지만...
    - 실제로는 아님

### 오류 처리 방법 2: 종료

![img_305.png](pocu-note/COMP2500/week12/images/img_305.png)

- 사용자에게 어떤 문제가 있었는지 사용자에게 보여주고 정상 종료
- 크래시랑 어떤게 다르냐면
    - 올바른 사용 방법이 아님
    - 데이터도 올바르지 않음
    - 따라서 심각한 문제를 초래할 수 있음
    - 그래서 종료
- 내가 사용하는 외부 라이브러리에서 내 프로그램을 종료하는 경우가 이런 경우
- 크래시랑 개념이 다름

![img_306.png](pocu-note/COMP2500/week12/images/img_306.png)

- 크래시랑 다르게 좋은 점은 정리를 하고 종료할 수 있음
- 저장도 가능하죠

### 오류 처리 방법 3: 수정

![img_307.png](pocu-note/COMP2500/week12/images/img_307.png)

- 말 그대로 오류 상황을 자체적으로 고치는 것
- UX 고려하면 그냥 수정하는 것 보다 유저에게 다시 입력하라고 요청하는게 좋음

![img_308.png](pocu-note/COMP2500/week12/images/img_308.png)

- 예외는 성능에도 좋지 않아서, 이렇게 수정하는 방법도 택할 수 있음

![img_309.png](pocu-note/COMP2500/week12/images/img_309.png)

- 이 방법의 단점은 처음 문제 발생 상황을 알기 어려움
- PPT 예시에 설명 잘 되어있네용

### 오류 처리 방법 4: 예외

![img_310.png](pocu-note/COMP2500/week12/images/img_310.png)

- 대부분 OO 언어는 예외를 지원함
    - throw
    - catch

## 예외는 OO의 일부가 아님

![img_311.png](pocu-note/COMP2500/week12/images/img_311.png)

- 왜 이런 주장이 나왔을까?

![img_312.png](pocu-note/COMP2500/week12/images/img_312.png)

- 이렇게 추측함
- 예외를 catch 하고 어떻게든 진행해서 프로그램 크래시를 막음

![img_313.png](pocu-note/COMP2500/week12/images/img_313.png)

- 생성자를 호출할 때 문제가 생기는 경우 위의 오류 처리 방법 4가지 중
    - 무시하면 크래시
        - 문제가 발생했다는 사실을 알리기는 쉽지 않음
        - 생성자는 반환값 자체가 없기에 null 반환도 안 됨
    - 미리 검사 후 종료
        - 개체 생성 후 초기화할 때 검사하기는 쉽지 않음
        - 그리고 이미 개체가 생성됬는데?
    - 문제 수정
        - 당연히 안 됨, 이미 개체가 생성됬는데?
    - 예외
        - 개체 생성하고
        - 개체 초기화에 문제가 있다고 예외를 던지고 넘어가는게 그나마 해결책

![img_314.png](pocu-note/COMP2500/week12/images/img_314.png)

![img_315.png](pocu-note/COMP2500/week12/images/img_315.png)

![img_316.png](pocu-note/COMP2500/week12/images/img_316.png)

- 언어의 제약임
- 여튼 결론적으로 생성자 오류 상황에 유일한 해결책이 예외라고 예외가 OO의 일부는 아님

## 잘못된 예외처리보다 크래시가 낫다

![img_317.png](pocu-note/COMP2500/week12/images/img_317.png)

- 예외처리를 잘 못하면 더 큰 문제
- 당연한거죠?

![img_318.png](pocu-note/COMP2500/week12/images/img_318.png)

- 과연 크래시를 최종 사용자가 극혐할까?

![img_319.png](pocu-note/COMP2500/week12/images/img_319.png)

![img_320.png](pocu-note/COMP2500/week12/images/img_320.png)

- 자동 세이브

![img_321.png](pocu-note/COMP2500/week12/images/img_321.png)

- 구글 docs
    - 히스토리 무한임
- 결론적으로 요즘 사용자들은 크래시에 신경을 안 씀

![img_322.png](pocu-note/COMP2500/week12/images/img_322.png)

- 디버깅에는 크래시가 더 유리함
- 메모리 덤프

![img_323.png](pocu-note/COMP2500/week12/images/img_323.png)

- 메모리 상황을 파일에 다 적어주는 것
- 버그 해결하는데 좋음!!

![img_324.png](pocu-note/COMP2500/week12/images/img_324.png)

- 예외는 가지고 있는 정보가 적음
- 크래시 하고 메모리 덤프 따는 것 보다

## 프로그램 종료도 매력적인 방법이다

![img_325.png](pocu-note/COMP2500/week12/images/img_325.png)

- 좀비 프로그램이 제일 안 조음
- 사실 저장하는건 요즘 시대에 큰 실익은 없음. 요즘은 워낙 자동 저장이 잘 되어있어서

![img_326.png](pocu-note/COMP2500/week12/images/img_326.png)

- 예외도 위로 던져서 종료시키면 되는데?

![img_327.png](pocu-note/COMP2500/week12/images/img_327.png)

- 근데 예외를 던지는 입장에서 위의 함수들이 catch 를 해서 어떻게 할지 모르는데, JVM 까지 던져줄꺼라 믿고 던질 수 있을까?

## 오류 처리 방법 4가지 순위

![img_328.png](pocu-note/COMP2500/week12/images/img_328.png)

- 책임감 순위

![img_329.png](pocu-note/COMP2500/week12/images/img_329.png)

- 오지랖 순위
    - 아니 굳이 종료까지야.. 실수는 고치면 되는데

![img_330.png](pocu-note/COMP2500/week12/images/img_330.png)

![img_331.png](pocu-note/COMP2500/week12/images/img_331.png)

- 객관성 순위
    - 종료는 클라이언트가 잘못된 일을 하면 바로 나니까 아주 명백
    - 수정은 수정하고 클라이언트에게 알려준다는 가정
- 다른건 모르겠는데 예외가 처리하기 어려운지는 알겠음

![img_332.png](pocu-note/COMP2500/week12/images/img_332.png)

![img_333.png](pocu-note/COMP2500/week12/images/img_333.png)

- 무시는 크래시가 난다는 전제하에 예외보다 명백함

![img_334.png](pocu-note/COMP2500/week12/images/img_334.png)

- 이런건 여튼 짬밥으로 익히는게 답임

![img_335.png](pocu-note/COMP2500/week12/images/img_335.png)

## 예측 가능한 상황의 처리법

![img_336.png](pocu-note/COMP2500/week12/images/img_336.png)

- 예측한 상황 + 고치기 쉬운 경우 이렇게 하라는 조언

- 고치는게 너무 복잡하면 힘들죠?
    - 이러면 차라리 크래시 내고 고객 상담같이 비즈니스적으로 해결하는게 더 좋음

- 고치고 프로그램 계속 진행
    - 내 시스템에서는 수정이 조음
    - 경계에서는 예외가 좋음

![img_338.png](pocu-note/COMP2500/week12/images/img_338.png)

- 예측한 상황 + 고치기 어려운 경우

- 결론적으로 종료 시키는 방법
- 최종 사용자에게 메시지를 보여주기 싫거나, 불가능한 경우
    - 고치기 어려운 경우는 몰라서 불가능한 경우라고 생각하면 됨

![img_337.png](pocu-note/COMP2500/week12/images/img_337.png)

- 예외를 main() 에서 catch 해서 로그를 남기고 종료하는 방법의 문제

![img_339.png](pocu-note/COMP2500/week12/images/img_339.png)

- 로그는 프로그래머 입장에서 귀찮고, 잘 안 지켜짐
- 메모리 덤프는 프로그래머가 게을러도 모든 정보가 있다

## 예측 못한 상황의 처리법

![img_340.png](pocu-note/COMP2500/week12/images/img_340.png)

- 버그
- 예측한 상황 + 고치기 어려운 경우와 유사함

![img_341.png](pocu-note/COMP2500/week12/images/img_341.png)

![img_342.png](pocu-note/COMP2500/week12/images/img_342.png)

- 걍 결론은 이게 핵심임 ㅋㅋ
- 오류내고 잘 고치자!
- 좀비는 피하자
