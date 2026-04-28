# Week 11

## 의존성

![img.png](old_note/COMP2500/week11/images/img.png)

- A 클래스가 B 클래스에 의존
    - B 클래스가 필요조건

### 의존성이 나쁜 것일까?

![img_1.png](old_note/COMP2500/week11/images/img_1.png)

![img_2.png](old_note/COMP2500/week11/images/img_2.png)

- 의존성이 있음
    - 각 클래스의 기능이 분리됨
        - 즉 각 클래스의 목적이 뚜렸함
        - 캡슐화
        - 재사용성이 높음

![img_3.png](old_note/COMP2500/week11/images/img_3.png)

- 오해
- 결합도와 의존성은 다른 개념

## 결합도

![img_4.png](old_note/COMP2500/week11/images/img_4.png)

- 상호 의존성
- 원론적 의미

## OO의 결합도

![img_5.png](old_note/COMP2500/week11/images/img_5.png)

- OO Coupling

- A가 B에 의존하는 상황에서 B를 변경할 때 프로그램이 잘 작동하는가?
    - A의 내부를 변경 안 해도 제대로 동작
        - A가 B에 의존함
            - B가 없으면 A가 동작하지 않음
        - B의 변경에 A가 영향받지 않음
        - loose coupling
    - A의 내부를 변경해야만 제대로 동작
        - A가 B에 의존함
        - B의 변경에 A가 영향 받음
        - tight coupling

![img_6.png](old_note/COMP2500/week11/images/img_6.png)

## 표현 정리

### 높은 결합도를 의미하는 표현

![img_7.png](old_note/COMP2500/week11/images/img_7.png)
![img_8.png](old_note/COMP2500/week11/images/img_8.png)

- 위의 표현들은 높은 결합도를 의미하는 용어로 많이 쓰지만 엄밀하게 말하면 틀린 표현

![img_9.png](old_note/COMP2500/week11/images/img_9.png)

- 수식어를 붙여서 의미가 위의 표현에 비해 상대적으로 명확해짐

![img_10.png](old_note/COMP2500/week11/images/img_10.png)

- 결과적으로 높은 결합도는 나쁘다
    - OK
- 의존성이 있어서 나쁘다
    - NO
    - 의존성은 있을 수 밖에 없음
        - 캡슐화

### 낮은 결합도를 의미하는 표현

![img_11.png](old_note/COMP2500/week11/images/img_11.png)

- 낮은 결합도를 의미하지만 정확하지 못함
    - 낮은 결합도는 의존성은 있지만 변경에 영향받지 않는 개념
        - loose coupling
    - decoupled 는 애초에 개념이 없음
        - OO Coupling 종류는 2개

![img_12.png](old_note/COMP2500/week11/images/img_12.png)

### 결합도를 줄이는 것을 의미하는 표현

![img_13.png](old_note/COMP2500/week11/images/img_13.png)

- 결합관계를 제거하는 것과 줄이는 것은 당연히 다른데... 잘못 사용함

![img_14.png](old_note/COMP2500/week11/images/img_14.png)

- 의존성을 제거할 수는 없음

- 결합도를 줄인다가 정확함
    - reduce

## OO 결합도 판정

```java
public final class Robot {
    private int hp;
    private Head head;

    // 다른 멤버 변수는 생략

    public Robot(int initialHp) {
        this.hp = initialHp;
        this.head = new Head();
    }

    // 메서드 모두 생략
}
```

- Robot 클래스는 Head 클래스에 의존
- 두 사이 결합도는 높냐 낮냐?
    - Head 클래스를 수정해보면 알 수 있음 이 때 Robot 클래스를 수정해야한다면 tight coupling

```java
public final class Head {
    private int fovAngle;
    // 다른 멤버 변수 생략

    public Head(int fovAngle) {
        this.fovAngle = fovAngle;
        ...
    }

    public Robot pickEnemy() {
        Robot robot;
        // 공격할 로봇을 찾는다
        return robot;
    }
    // 메서드 모두 생략
}
```

- fovAngle 새로운 멤버 변수 추가
-

```java
public final class Robot {
    private int hp;
    private Head head;
    // 다른 멤버 변수 생략

    public Robot(int initialHp) {
        this.hp = initialHp;
        this.head = new Head();
    }
    // 메서드 모두 생략
}
```

![img_15.png](old_note/COMP2500/week11/images/img_15.png)

- Robot 클래스 컴파일 오류 발생
    - Head 클래스의 생성자가 변경되었음

![img_16.png](old_note/COMP2500/week11/images/img_16.png)
![img_17.png](old_note/COMP2500/week11/images/img_17.png)

- Robot 클래스의 코드를 수정해야 컴파일됨

![img_18.png](old_note/COMP2500/week11/images/img_18.png)

- 일단 다른 결합도는 고려하지 말자

![img_19.png](old_note/COMP2500/week11/images/img_19.png)

- 일단 원칙대로 판단하면
    - tight coupling

### 결합도를 줄이자

![img_20.png](old_note/COMP2500/week11/images/img_20.png)

- WaterSpray 클래스의 생성자를 주목
    - SprayHead, SprayBottle 타입을 매개변수로 받음
    - 외부에서 넣어주는거네?!

![img_21.png](old_note/COMP2500/week11/images/img_21.png)

- 미리 외부에서 Head 개체 생성해서 Robot 생성자의 인자로 전달

![img_22.png](old_note/COMP2500/week11/images/img_22.png)

- 효과는 Robot 클래스가 Head 내부 구현을 몰라도 됨
- loose coupling

![img_23.png](old_note/COMP2500/week11/images/img_23.png)

```java
public final class Head {
    private int fovAngle;
    // 다른 멤버 변수 생략

    public Head(int fovAngle) {
        this.fovAngle = fovAngle;
        ...
    }

    public Robot pickEnemy() {
        Robot robot;
        // 공격할 로봇을 찾는다
        return robot;
    }
    // 메서드 모두 생략
}
```

```java
public final class Robot {
    ...

    public Robot(int initialHp, Head head) {
        this.hp = initialHp;
        this.head = head;
    }
    ...
}
```

```java
public final class Main {
    public static void main(String[] args) {
        Head head = new Head(45);
        Robot robot = new Robot(300, head);
    }
}
```

- Head 개체 생성하는 곳의 코드는 바꿔줘야함

![img_24.png](old_note/COMP2500/week11/images/img_24.png)

## 의존성 주입

![img_25.png](old_note/COMP2500/week11/images/img_25.png)

- 의존하고 있는 클래스의 개체를 외부에서 생성해서 넣어주는 기법(?)을 의존성 주입이라고 부름
- Robot 클래스 예시에서 사용한 방법은 생성자의 매개변수로 개체를 전달했음
    - 생성자 주입
- setter 함수로 넣어주면
    - setter 주입

![img_26.png](old_note/COMP2500/week11/images/img_26.png)

- DI Container 줄여서 DI 라고 부르기도 함
- dependency inversion 도 DI 라고 부르기도 함

### setter 주입

![img_27.png](old_note/COMP2500/week11/images/img_27.png)

![img_28.png](old_note/COMP2500/week11/images/img_28.png)

- setter 주입은 생성 시 개체의 상태를 유효하게 하는 캡슐화 원칙에 위배됨

### 의존성 주입을 통해 얻은 것과 잃은 것

![img_29.png](old_note/COMP2500/week11/images/img_29.png)

- 참고로 Head 클래스를 컴파일해서 따로 배포하는 일은 예전에 사용한 방법
    - 요즘은 보통 통채로 전체를 다시 컴파일함

- 편의성:
    - 프로그래머 입장
    - 변경 전 코드는 new Robot() 한 번이면 끝
    - 변경 후 코드는 new Head() + new Robot() 번거로워짐

- 코드 자체가 문서
    - 의미에 맞게
    - 만약 프로그래머의 원래 의도가 분리/합체 로봇이 아니라면 결합도를 낮추기 위해 의존성 주입을 사용하는 것은 좋지 않음
        - Robot 클래스 개체 생성 시 내부에서 Head 개체 생성하는 로직이 포함되어 있으면 의미에 더 맞음

## 상속 관계에서 결합도

![img_30.png](old_note/COMP2500/week11/images/img_30.png)

- Head 클래스는 추상 클래스
    - 클래스 다이어그램에서 Italic

![img_31.png](old_note/COMP2500/week11/images/img_31.png)

![img_32.png](old_note/COMP2500/week11/images/img_32.png)

- Robot 클래스는 의존성 주입으로 SimpleHead 클래스의 개체에 의존함
    - loose coupling

![img_33.png](old_note/COMP2500/week11/images/img_33.png)

- 이제 모든 Robot 클래스에서 SimpleHead 클래스 대신 SmartHead 클래스에 의존하도록 하고 싶음

![img_34.png](old_note/COMP2500/week11/images/img_34.png)

- 가장 단순한 접근
    - 그냥 생성자의 매개변수 수정, Robot 클래스 멤버변수 수정

![img_35.png](old_note/COMP2500/week11/images/img_35.png)

- 결합도가 높은 상황
    - SimpleHead 클래스를 수정하는 것은 Robot 클래스에 영향을 주지 않음
    - SimpleHead 클래스 자체를 이제 사용 안하기 때문에 수정이 필요함

![img_37.png](old_note/COMP2500/week11/images/img_37.png)

![img_36.png](old_note/COMP2500/week11/images/img_36.png)

- 바꾸는 것보다 일반화된 타입으로 생성자의 매개변수, 멤버변수로?!
    - 부모의 자료형을 사용해보자!!!

![img_38.png](old_note/COMP2500/week11/images/img_38.png)

- 다형성을 사용해 결합도를 줄였음

![img_39.png](old_note/COMP2500/week11/images/img_39.png)

- 의존성을 없앤게 아니다!
    - 줄인것!

![img_40.png](old_note/COMP2500/week11/images/img_40.png)

- 인터페이스를 사용해도 똑같음
- 일반적인 타입을 사용하면 편리함!

### 복습 퀴즈: 결합도

```java
// A.java
public class A {
    public B b = new B(0, 0);

    public void setB(B b) {
        this.b = b;
    }
}

// B.java
public class B {
    private int x;
    private int y;

    public B(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

- A와 B의 결합도는 어떤가요?
    - A 클래스는 B 클래스에 의존
    - B 클래스를 수정하면 A 클래스를 수정해야함
        - B의 생성자를 변경한다고 가정해봐
- A와 B의 결합도를 낮추는 방법?

```java
// A.java
public class A {
    public B b;

    public A(B b) {
        this.b = b;
    }
}

// B.java
public class B {
    private int x;
    private int y;

    public B(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

- 생성자 주입으로 변경하기
    - 멤버 변수에서 초기화하는 코드를 제거하는거 빼먹으면 안 됨

## 디커플링이 적합한 곳들

![img_41.png](old_note/COMP2500/week11/images/img_41.png)

- 단순 구조에서 디커플링의 실효성은 낮음
- 여기서 말하는 변경이 불가능한 상황:
    - 남의 라이브러리 사용
    - 내 소스코드가 아닌 경우
- 고치다 보면 컴파일 에러 덕분에 구조 변경도 어렵지 않음

### 복잡한 시스템에서 커플링은 문제가 됨

![img_42.png](old_note/COMP2500/week11/images/img_42.png)

![img_43.png](old_note/COMP2500/week11/images/img_43.png)

![img_44.png](old_note/COMP2500/week11/images/img_44.png)

### 함수 포인터도 디커플링의 좋은 예

![img_45.png](old_note/COMP2500/week11/images/img_45.png)

- 인터페이스의 규약 == 함수 시그니처
    - 이 규약에 맞는 어떤 함수 구현이 허용됨
- 인터페이스에 의존하는 것 == 함수 포인터로 전달 받기
    - 디커플링의 좋은 예

## 디커플링의 단점

### 디커플링하기 위해 추상화가 사용됨

![img_46.png](old_note/COMP2500/week11/images/img_46.png)

- 추상화로 유연성, 재사용성을 얻지만
- 단점도 있음

### 단점1: 직관적이지 못함

![img_47.png](old_note/COMP2500/week11/images/img_47.png)

- 직관적이지 못함
- 구체적이지 않기 때문

### 직관적이지 못한 것을 해결해보자

![img_48.png](old_note/COMP2500/week11/images/img_48.png)

- `new Robot()` 생성자를 호출하는 코드에서 `Head head` 매개변수로 뭐가 넘어가는지 직접 확인하기

![img_49.png](old_note/COMP2500/week11/images/img_49.png)

- Head 클래스가 일반화된 클래스기 때문에 어떤 구체적인 개체가 사용됬는지 일일히 모두 확인해야함

![img_50.png](old_note/COMP2500/week11/images/img_50.png)

- 물론 위의 예처럼 프로그램 A, 프로그램 B 각각 다른 구체적인 클래스 개체를 사용하는 경우는 다형성을 잘 못 사용하고 있는 예시
    - 다형성은 하나의 프로그램에서 여러 구체적인 개체를 사용하고 싶을 때
    - 지금은 하나의 프로그램에 하나의 개체만 필요함
- 올바른 방식은 컴파일러 플래그(스위치) 같은거로 구현체 바꾸도록 컴파일하게 하는게 옳은 방식

![img_51.png](old_note/COMP2500/week11/images/img_51.png)

![img_52.png](old_note/COMP2500/week11/images/img_52.png)

![img_53.png](old_note/COMP2500/week11/images/img_53.png)

- DI 컨테이너 이용해서 `new SimpleHead()`, `new SmartHead()` 같이 직접 개체를 생성하는 코드가 없는 경우도 있음!!
- 스프링

![img_54.png](old_note/COMP2500/week11/images/img_54.png)
![img_55.png](old_note/COMP2500/week11/images/img_55.png)

- 게임을 생각해보자
    - 게임을 2시간 플레이해야 로봇이 생성된다면..?

### 단점2: 내부를 알아야 좋은 경우도 있다

![img_56.png](old_note/COMP2500/week11/images/img_56.png)

- 결합도를 높이더라도 내부를 알아야 좋은 경우
- DataSource:
    - 데이터 저장 원천
    - DB, File 등등
- `MergeTo()` 함수를 호출하면 데이터 소스에서 모든 데이터를 읽어와 중복 없이 dataset에 넣어줌
    - dataset 은 매개변수로 전달

![img_57.png](old_note/COMP2500/week11/images/img_57.png)

- [java collection interface](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html)

![img_58.png](old_note/COMP2500/week11/images/img_58.png)

![img_59.png](old_note/COMP2500/week11/images/img_59.png)

- collection 인터페이스의 구현은 다양함
- 구현에 따라 중복을 어떻게 처리하는지 방식이 다름

![img_60.png](old_note/COMP2500/week11/images/img_60.png)

- 구현의 모든 경우에 다 작동하게 하려면?
    - `MergeTo()` 함수의 구현에서 contains() 중복 검사를 해야함
    - 근데 Set 구현이면 필요없잖
- 만약 Collection 대신 Set 이라는 더 구체적인 인터페이스를 사용하면 최적화 가능

![img_61.png](old_note/COMP2500/week11/images/img_61.png)

![img_62.png](old_note/COMP2500/week11/images/img_62.png)

![img_63.png](old_note/COMP2500/week11/images/img_63.png)

![img_65.png](old_note/COMP2500/week11/images/img_65.png)

![img_64.png](old_note/COMP2500/week11/images/img_64.png)

- 실생활에서도 구현을 몰라서 비효율적인 경우가 있긴 있음

## 인터페이스에 대한 오해

![img_66.png](old_note/COMP2500/week11/images/img_66.png)

- 왜?
- 디커플링

![img_67.png](old_note/COMP2500/week11/images/img_67.png)

- 언제나 디커플링이 중요한 것은 아님

![img_68.png](old_note/COMP2500/week11/images/img_68.png)

![img_69.png](old_note/COMP2500/week11/images/img_69.png)

![img_70.png](old_note/COMP2500/week11/images/img_70.png)

- 모두 인터페이스로 바뀜
- 다형적이지도 않음

![img_71.png](old_note/COMP2500/week11/images/img_71.png)

- 굳이 없는 걸 대비해서 만들어야하냐?
- 미래에 모든걸 대비해야함?

![img_72.png](old_note/COMP2500/week11/images/img_72.png)

- 다형성이 필요하면 인터페이스 만드세용

![img_73.png](old_note/COMP2500/week11/images/img_73.png)

- 다시 인터페이스의 정의

![img_74.png](old_note/COMP2500/week11/images/img_74.png)

- 주요 사용 예

### 인터페이스에 대한 오해 1: 모든 걸 인터페이스로 만들어라

![img_75.png](old_note/COMP2500/week11/images/img_75.png)

- 인터페이스라는 용어가 굉장히 다양한 의미로 사용됨
- 인터페이스의 개념적 정의:
    - 개체가 이해하는 명령(메시지)를 나열한 것
- 이 개념적 정의는 public 추상 메서드의 집합과 일맥상통함
    - 하지만 다형성을 빼고 이 개념을 잘못 받아들이면 이상해짐

![img_76.png](old_note/COMP2500/week11/images/img_76.png)

- 명령의 나열에서 명령에 집중
- 명령에서 커플링을 줄이는 것이 개체지향의 본질이라는 잘못된 해석

### GOF 디자인 패턴

![img_77.png](old_note/COMP2500/week11/images/img_77.png)

- 이 책의 내용이 곡해됨

![img_78.png](old_note/COMP2500/week11/images/img_78.png)

- 특히 이 문구 ㅋㅋ

![img_79.png](old_note/COMP2500/week11/images/img_79.png)

![img_80.png](old_note/COMP2500/week11/images/img_80.png)
![img_81.png](old_note/COMP2500/week11/images/img_81.png)

![img_82.png](old_note/COMP2500/week11/images/img_82.png)

- 이 문장에서 interface 는 자바의 interface 가 아님

![img_83.png](old_note/COMP2500/week11/images/img_83.png)

- 결국 다형성이 포함되어야 함

![img_84.png](old_note/COMP2500/week11/images/img_84.png)

- 제대로된 상속에 대한 설명
    - 추상 클래스의 연산을 오버라이딩
        - 추상 매서드 오버라이딩
        - 이것도 다형성
    - 추상 클래스에 없는 새로운 연산 추가
- SOLID 배울 때 다시 배움

![img_85.png](old_note/COMP2500/week11/images/img_85.png)

![img_86.png](old_note/COMP2500/week11/images/img_86.png)

![img_87.png](old_note/COMP2500/week11/images/img_87.png)

- 이 책에서 말하는 interface:
    - 부모 클래스의 다형적 매서드

### 인터페이스에 대해 프로그래밍하라는 의미

![img_88.png](old_note/COMP2500/week11/images/img_88.png)

- 다형성이 있죠?

![img_89.png](old_note/COMP2500/week11/images/img_89.png)

- 함수 블랙박스:
    - 함수의 시그니처로 약속
- 다형성 + 함수 블랙박스:
    - 부모 클래스에서 정의한 다형적 매서드의 시그니처로 약속
    - 재사용성 향상, 다형적 호출 가능

![img_90.png](old_note/COMP2500/week11/images/img_90.png)

- 결론은 다형성을 가진 일반화된 매서드 시그니처를 만드는 것!

### 인터페이스에 대한 오해 2: 디커플링이 언제나 제일 중요하다

![img_91.png](old_note/COMP2500/week11/images/img_91.png)

- 이 주장을 하는 사람의 행적도 의심스러움
- 이 주장은 오랜 시간동안 검증결과 잘못됬다고 결과적으로 결론 났다고 이해

![img_92.png](old_note/COMP2500/week11/images/img_92.png)

![img_93.png](old_note/COMP2500/week11/images/img_93.png)

- 협업에서 실수를 줄이는 것이 중요함
- 특히 코딩에서 일반적으로 만드는 시간 보다 실수를 고치는 시간을 많이 씀
- 모든 사람이 동의하는 규칙 + 이 규칙이 실수를 줄인다면 좋다!

![img_94.png](old_note/COMP2500/week11/images/img_94.png)

- 추상화, indirection 은 모두에게 어려움
    - 인간에게 그냥 어려움
- 추상화가 적을 수록 실수가 적음

![img_95.png](old_note/COMP2500/week11/images/img_95.png)

- 객관적인 정의로 인터페이스를 이해하자

## 디커플링 모범 사례: 이클립스 API

![img_96.png](old_note/COMP2500/week11/images/img_96.png)

![img_97.png](old_note/COMP2500/week11/images/img_97.png)

- API 버전이 변할 때 최대한 변화가 적어야함
    - 여기서 변화는 매서드 시그니처라던가 다시 컴파일해야하는 상황을 만드는 경우

![img_98.png](old_note/COMP2500/week11/images/img_98.png)

- 자체적으로 약속을 함
    - 키워드에 의미를 부여함

![img_99.png](old_note/COMP2500/week11/images/img_99.png)

- 하지만 결론적으로 interface 도 변경됨

![img_100.png](old_note/COMP2500/week11/images/img_100.png)

- 인터페이스에 숫자 붙이기
    - IWorkbenchPart2 는 IWorkbenchPart 인터페이스의 모든 동작을 포함함
    - 확장하는 개념

![img_101.png](old_note/COMP2500/week11/images/img_101.png)

- 나중에 클라이언트가 인터페이스를 교체하면
    - 기존의 구현은 건드릴 필요없고
    - 새로 추가된 기능(추상 매서드)만 구현하면 됨

![img_102.png](old_note/COMP2500/week11/images/img_102.png)

- 하지만 이런 방법도 문제가 있음
- 애초에 모든 비즈니스 상황을 예상하고 설계할 수 없음
    - 설계는 변함

![img_103.png](old_note/COMP2500/week11/images/img_103.png)

![img_104.png](old_note/COMP2500/week11/images/img_104.png)

- 특히 이런 방식은 오래전부터 인터페이스를 사용한 고객이 아니라 뉴비한태 어려

![img_105.png](old_note/COMP2500/week11/images/img_105.png)

![img_106.png](old_note/COMP2500/week11/images/img_106.png)

- 이렇게 확실하게 구분해서 빡세게(?) 설계하는 프로젝트는 흔치 않음
    - 하지만 비용의 문제

![img_107.png](old_note/COMP2500/week11/images/img_107.png)

- 이클립스 API 의 시도는 의의는 있음
    - 내가 많은 사람이 사용하는 라이브러리 만든다면 생각해볼만 함
- 요즘 트렌드는 빨리 만들고 빨리 고치고 부수고 수정하고
    - 이클립스 API 처럼 정말 안 바뀔 것을 예상한 설계는 잘 안함

## 중요한 건 클라이언트와의 약속

![img_108.png](old_note/COMP2500/week11/images/img_108.png)

- 코어팀은 회사에서 사용하는 라이브러리를 만듬

![img_109.png](old_note/COMP2500/week11/images/img_109.png)

![img_110.png](old_note/COMP2500/week11/images/img_110.png)

![img_111.png](old_note/COMP2500/week11/images/img_111.png)

- 이런 경우 인터페이스에 의존하면 좋긴함
    - 물론 매서드 시그니처가 안 바뀐다는 전제
- 여기서 팩트는 자식 클래스가 많은 일반적인 추상 클래스일수록 일반화되어있고 바뀔 가능성이 낮음

![img_112.png](old_note/COMP2500/week11/images/img_112.png)

- 중요한건 클라이언트
    - 코어팀 입장에서 다른 팀들
- 요즘은 어떤 방식을 사용할까?

![img_113.png](old_note/COMP2500/week11/images/img_113.png)

- 대 인터넷 시대

![img_114.png](old_note/COMP2500/week11/images/img_114.png)

![img_115.png](old_note/COMP2500/week11/images/img_115.png)

![img_116.png](old_note/COMP2500/week11/images/img_116.png)

- 요즘은 기존 버전, 새로운 버전을 동시에 제공하고
    - 기존 버전의 지원 기간을 제한함

![img_117.png](old_note/COMP2500/week11/images/img_117.png)

- LTS 개념도 여기서 나온거죠
- 버전 바뀔 때 마이그레이션 가이드도 제공하구

![img_118.png](old_note/COMP2500/week11/images/img_118.png)

![img_119.png](old_note/COMP2500/week11/images/img_119.png)

![img_120.png](old_note/COMP2500/week11/images/img_120.png)

- 정리

## 실용적인 인터페이스 사용법 (원칙)

![img_121.png](old_note/COMP2500/week11/images/img_121.png)

- 위에서 부터 순서대로 원칙을 적용하자!!!

![img_122.png](old_note/COMP2500/week11/images/img_122.png)

- 변화에 대한 대비는 이렇게 판단하자
    - == 내가 쉽게 바꿀 수 없는 경우
- 위의 3가지 사례에서는 변화에 크게 대비할 필요없음

![img_123.png](old_note/COMP2500/week11/images/img_123.png)

- 쉽게 바꿀 수 없는 경우 변화에 대비하여 인터페이스
- 여튼 이런건 다 짬밥이다~

### 복습 퀴즈: 인터페이스의 장단점

- 다음 interface의 장단점에 대한 설명 중 올바르지 않은 것은?
    - interface를 사용하면 미래의 변화에 좀 더 잘 대비되어 있을 가능성이 높다.
        - 다형성을 사용할 수 있기 때문에 미래의 변화에 대비할 수 있음
    - 함수 매개변수의 자료형으로 interface를 사용하면 그 함수 내에서 호출하는 매개변수의 메서드를 좀 더 명확하게 특정할 수 있다.
        - 함수 포인터
        - 한 클래스가 여러 인터페이스를 구현한 경우 매개변수의 자료형으로 클래스를 사용하면 클래스가 구현한 인터페이스들의 모든 함수를 호출할 수 있지만, 특정 인터페이스를 매개변수의 자료형으로 사용하면 그
          인터페이스가 전달하는 함수 시그니처만 호출할 수 있음
            - Interface Segregation Principle
    - interface는 가독성을 높인다.
        - 구현을 알면 유리한 경우 구현을 찾아봐야하기 때문에 오히려 가독성이 떨어짐
        - 인터페이스만 보고 정확하게 함수의 동작을 예측할 수 있는 경우 인터페이스 때문에 가독성이 높아진게 아니라 함수 시그니처를 잘 만들어서 생긴 현상 
    - interface를 사용해도 여러 부모로부터 함수 구현을 상속받을 수 없다.
        - 함수 구현을 상속받는 것 자체가 안 됨
        - 인터페이스를 사용해서 여러 함수 시그니처(함수 포인터)를 전달받을 수 있죠
