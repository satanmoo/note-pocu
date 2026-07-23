

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
