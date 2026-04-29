# Week14

## ADT & PDA 개체지향을 바라보는 두 가지 관점

![img.png](pocu-note/COMP2500/week14/image/img.png)

- OOP를 바라보는 두 가지 관점
- ADT가 다수설

## PDA

![img_1.png](pocu-note/COMP2500/week14/image/img_1.png)

- Alan Kay
- OO의 핵심을 메시지라고 봄

![img_2.png](pocu-note/COMP2500/week14/image/img_2.png)

![img_3.png](pocu-note/COMP2500/week14/image/img_3.png)

- 개체 == 자기의 결정권을 가지는 존재

![img_4.png](pocu-note/COMP2500/week14/image/img_4.png)

- 개체 간의 상호작용은 메시지를 통해서
    - Procedural
    - 함수를 통해서 데이터를 바꿈

![img_5.png](pocu-note/COMP2500/week14/image/img_5.png)

- 악용 사례

![img_6.png](pocu-note/COMP2500/week14/image/img_6.png)

![img_7.png](pocu-note/COMP2500/week14/image/img_7.png)

- 개체지향이라는 용어를 처음 말한 사람이긴 함

![img_8.png](pocu-note/COMP2500/week14/image/img_8.png)

- Alan Kay는 메시지 지향 프로그램이라고 주장

![img_9.png](pocu-note/COMP2500/week14/image/img_9.png)

- Alan Kay도 잘못된 표현이라고 인정함

## 스몰토크의 메서드 호출

![img_10.png](pocu-note/COMP2500/week14/image/img_10.png)

![img_11.png](pocu-note/COMP2500/week14/image/img_11.png)

![img_12.png](pocu-note/COMP2500/week14/image/img_12.png)

![img_13.png](pocu-note/COMP2500/week14/image/img_13.png)

- 스몰토크에서는 이미 존재하는 메서드를 호출하는게 아님
- 개념상 컴파일 중에 메서드 검사 불가능
- 내가 다른 사람에게 시간을 알려달라고 할 수 있다(메시지 보내기)
- 상대방은 시계가 없을 수도 있다(메시지 처리할 수 없을 수도 있음)

![img_14.png](pocu-note/COMP2500/week14/image/img_14.png)

- 참고로 mad
    - multiply + add

![img_15.png](pocu-note/COMP2500/week14/image/img_15.png)

- args에 인자 수가 모자라다면?

![img_16.png](pocu-note/COMP2500/week14/image/img_16.png)

![img_17.png](pocu-note/COMP2500/week14/image/img_17.png)

![img_18.png](pocu-note/COMP2500/week14/image/img_18.png)

![img_19.png](pocu-note/COMP2500/week14/image/img_19.png)

- methodName에서 뭐라도 받을 수 있고, 내부적으로 처리할 수 있으면 다형성
- String 기반 message broadcast system 과 유사함
    - 개체의 배열을 매개변수로 넣어주고
    - 어떤 메시지
    - 처리할 수 있는 개체는 처리하고, 못하면 말고

![img_20.png](pocu-note/COMP2500/week14/image/img_20.png)

- 스몰토크는 예외를 많이 사용할 수 밖에 없음
    - 컴파일 중에 검사가 불가능 ㅋㅋ

![img_21.png](pocu-note/COMP2500/week14/image/img_21.png)

![img_22.png](pocu-note/COMP2500/week14/image/img_22.png)

- 동적 타입을 선호할 수록 예외 처리가 중요하다는 것을 알 수 있음

## late binding

![img_23.png](pocu-note/COMP2500/week14/image/img_23.png)

![img_24.png](pocu-note/COMP2500/week14/image/img_24.png)

- 정적 타입을 나쁘다고 악용

![img_25.png](pocu-note/COMP2500/week14/image/img_25.png)

![img_26.png](pocu-note/COMP2500/week14/image/img_26.png)

![img_27.png](pocu-note/COMP2500/week14/image/img_27.png)

- 컴파일러 is god

![img_28.png](pocu-note/COMP2500/week14/image/img_28.png)

![img_29.png](pocu-note/COMP2500/week14/image/img_29.png)

![img_30.png](pocu-note/COMP2500/week14/image/img_30.png)

## eXtreme programming

![img_31.png](pocu-note/COMP2500/week14/image/img_31.png)

- XP
- 애자일(?)

## Pair programming

![img_32.png](pocu-note/COMP2500/week14/image/img_32.png)

- Y2K
    - 인류 최대의 삽질

![img_33.png](pocu-note/COMP2500/week14/image/img_33.png)

![img_34.png](pocu-note/COMP2500/week14/image/img_34.png)

- ?

![img_35.png](pocu-note/COMP2500/week14/image/img_35.png)

![img_36.png](pocu-note/COMP2500/week14/image/img_36.png)

![img_37.png](pocu-note/COMP2500/week14/image/img_37.png)

![img_38.png](pocu-note/COMP2500/week14/image/img_38.png)

- 흠 ㅋㅋ

![img_39.png](pocu-note/COMP2500/week14/image/img_39.png)

- 코드 리뷰 프로세스는 도움이 되었음

## Xp의 CI

![img_40.png](pocu-note/COMP2500/week14/image/img_40.png)

- Grady Booch 아저씨가 주장한 방법
    - 이 아저씨가 해결하려던 문제는?

- 브랜치 따서 따로 작업

![img_41.png](pocu-note/COMP2500/week14/image/img_41.png)

- 병합

![img_42.png](pocu-note/COMP2500/week14/image/img_42.png)

- 충돌 발생

![img_43.png](pocu-note/COMP2500/week14/image/img_43.png)

![img_44.png](pocu-note/COMP2500/week14/image/img_44.png)

![img_45.png](pocu-note/COMP2500/week14/image/img_45.png)

![img_46.png](pocu-note/COMP2500/week14/image/img_46.png)

- 서로 다른 버전에서 작업하니까 이런 문제가 근본적으로 발생

![img_47.png](pocu-note/COMP2500/week14/image/img_47.png)

- 그래서 너무 오래 각자 브랜치에서 작업하지 말고, 종종 합치자

![img_48.png](pocu-note/COMP2500/week14/image/img_48.png)

- CI 극단적인 규칙
- 모두 최신버전에서 작업하자는 주장

![img_49.png](pocu-note/COMP2500/week14/image/img_49.png)

- 과연 이게 효과적인가?

![img_50.png](pocu-note/COMP2500/week14/image/img_50.png)

- 과제 크기가 클 수록 적당히 시간 텀을 주는게 좋음

![img_51.png](pocu-note/COMP2500/week14/image/img_51.png)

- 과연 하루에 기능을 딱딱 만들 수 있을까?

![img_52.png](pocu-note/COMP2500/week14/image/img_52.png)

- 테스트 시간도 필요하고, 그리고 검증하고 커밋해야죠?

### XP CI의 명확한 한계: 테스팅

![img_53.png](pocu-note/COMP2500/week14/image/img_53.png)

- 버그가 발생하는 가장 큰 이유: 요구사항(스펙)을 잘못 이해해서
- 그래서 구현한 사람은 스스로 문제를 알아채기 어려움

![img_54.png](pocu-note/COMP2500/week14/image/img_54.png)

![img_55.png](pocu-note/COMP2500/week14/image/img_55.png)

![img_56.png](pocu-note/COMP2500/week14/image/img_56.png)

- 이런 테스팅 문제를 해결하기위해 TDD를 주창

## TDD

- 근본적인 것은 가성비
    - 경제적으로 좋냐?!

![img_57.png](pocu-note/COMP2500/week14/image/img_57.png)

- 여기서 문제는 테스트 코드를 작성하는 사람 == 기능을 구현하는 사람

![img_58.png](pocu-note/COMP2500/week14/image/img_58.png)

![img_59.png](pocu-note/COMP2500/week14/image/img_59.png)

![img_60.png](pocu-note/COMP2500/week14/image/img_60.png)

![img_61.png](pocu-note/COMP2500/week14/image/img_61.png)

![img_62.png](pocu-note/COMP2500/week14/image/img_62.png)

![img_63.png](pocu-note/COMP2500/week14/image/img_63.png)

![img_64.png](pocu-note/COMP2500/week14/image/img_64.png)

- 당연히 품질은 높아지는데
- 경제 논리를 생각해보자
- 그리고 본인이 과연 테스트 코드를 제대로 작성할 수 있는가?

![img_65.png](pocu-note/COMP2500/week14/image/img_65.png)

![img_66.png](pocu-note/COMP2500/week14/image/img_66.png)

![img_67.png](pocu-note/COMP2500/week14/image/img_67.png)

![img_68.png](pocu-note/COMP2500/week14/image/img_68.png)

![img_69.png](pocu-note/COMP2500/week14/image/img_69.png)

![img_71.png](pocu-note/COMP2500/week14/image/img_71.png)

![img_70.png](pocu-note/COMP2500/week14/image/img_70.png)

![img_72.png](pocu-note/COMP2500/week14/image/img_72.png)

![img_73.png](pocu-note/COMP2500/week14/image/img_73.png)

![img_74.png](pocu-note/COMP2500/week14/image/img_74.png)

### TDD는 설계 능력을 향상시켜 준다는 주장

![img_75.png](pocu-note/COMP2500/week14/image/img_75.png)

- 함수를 쪼개다 보면 모듈화, 유연성은 올라가지만
- 유지보수는 힘들어짐

![img_76.png](pocu-note/COMP2500/week14/image/img_76.png)

![img_77.png](pocu-note/COMP2500/week14/image/img_77.png)

![img_78.png](pocu-note/COMP2500/week14/image/img_78.png)

- 적당한게 좋은거지
- 무조건 작은게 좋나?

![img_79.png](pocu-note/COMP2500/week14/image/img_79.png)

### 중요한건 경제 논리

![img_80.png](pocu-note/COMP2500/week14/image/img_80.png)

- 품질(장인정신)과 경제 논리의 충돌

![img_81.png](pocu-note/COMP2500/week14/image/img_81.png)

## 효과적인 테스트

![img_82.png](pocu-note/COMP2500/week14/image/img_82.png)

- 소프트웨어 업계에만 해당되는건 아님
- 최종 제품 테스트 > 부품 테스트
- E2E TEST(UI 자동화)
- 적절한 모듈 단위 테스트를 하자

![img_83.png](pocu-note/COMP2500/week14/image/img_83.png)

![img_84.png](pocu-note/COMP2500/week14/image/img_84.png)

![img_85.png](pocu-note/COMP2500/week14/image/img_85.png)

![img_86.png](pocu-note/COMP2500/week14/image/img_86.png)

### 코드 커버리지 100%의 비용

![img_87.png](pocu-note/COMP2500/week14/image/img_87.png)

![img_88.png](pocu-note/COMP2500/week14/image/img_88.png)

![img_89.png](pocu-note/COMP2500/week14/image/img_89.png)

![img_90.png](pocu-note/COMP2500/week14/image/img_90.png)

- 업무 효율이 낮죵

## 안전이 매우 중요하다면 고려하자

![img_91.png](pocu-note/COMP2500/week14/image/img_91.png)

- 비용을 압도하는 안전
- 비즈니스(프로젝트 관리자)의 책임

![img_92.png](pocu-note/COMP2500/week14/image/img_92.png)

- 오픈소스는 전문 테스터 고용할 수도 없고
- 단위 테스트 자동화

![img_93.png](pocu-note/COMP2500/week14/image/img_93.png)

- 비즈니스 로직과 멀수록 단위 테스트가 쉬움
    - 비즈니스 로직은 자주 바뀔 수 있음
    - 바뀌면 유닛테스트가 쓸모가 없어짐
- 입력 출력이 명확한 알고리듬
    - 알고리듬은 로직이 변하는 경우가 적음

![img_94.png](pocu-note/COMP2500/week14/image/img_94.png)

- 위 방법들은 단위 테스트가 효과적이지 않음

## 단위 테스트를 위한 다형성

![img_95.png](pocu-note/COMP2500/week14/image/img_95.png)

![img_96.png](pocu-note/COMP2500/week14/image/img_96.png)

- 잘못된 다형성:
    - 각 실행 파일마다 구현이 다른 경우
        - 빌드에서 처리하는게 옳음
    - 테스트를 위해 다형적으로
- 올바른 다형성:
    - 실행 파일 하나에서 구현이 여러 개를 바꿔가면서 사용하는 경우

![img_97.png](pocu-note/COMP2500/week14/image/img_97.png)

![img_98.png](pocu-note/COMP2500/week14/image/img_98.png)

- 다형성의 개념을 명확하게 하자

## 동적 타입과 TDD

![img_99.png](pocu-note/COMP2500/week14/image/img_99.png)

![img_100.png](pocu-note/COMP2500/week14/image/img_100.png)

![img_101.png](pocu-note/COMP2500/week14/image/img_101.png)

![img_102.png](pocu-note/COMP2500/week14/image/img_102.png)

![img_103.png](pocu-note/COMP2500/week14/image/img_103.png)

![img_104.png](pocu-note/COMP2500/week14/image/img_104.png)

![img_105.png](pocu-note/COMP2500/week14/image/img_105.png)
