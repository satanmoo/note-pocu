# Week 10

## 다형성과 추상화

![img.png](pocu-note/COMP2500/week10/image/img.png)

- 다형성, 상속도 OO의 다른 특성인 추상화에 기반

![img_1.png](pocu-note/COMP2500/week10/image/img_1.png)

- 추상화의 문제도 있음
- 구체적으로 코딩할 때 없었던 문제가 생기고, 이를 고쳐나가는 과정이 언어의 발전
- 모든 것에는 장,단점이 있음

## 다형적인 Monster 모델링

![img_2.png](pocu-note/COMP2500/week10/image/img_2.png)

![img_3.png](pocu-note/COMP2500/week10/image/img_3.png)

![img_4.png](pocu-note/COMP2500/week10/image/img_4.png)

![img_5.png](pocu-note/COMP2500/week10/image/img_5.png)

![img_6.png](pocu-note/COMP2500/week10/image/img_6.png)

- protected 키워드로 자식 클래스에서 피해량을 적용

![img_7.png](pocu-note/COMP2500/week10/image/img_7.png)

![img_8.png](pocu-note/COMP2500/week10/image/img_8.png)

- `attack()` 매서드 내부에서만 `inflictDamage()` 매서드를 호출하도록 구현
- 자식 클래스 내부에 `attack()` 매서드를 구현하고, 이 자식 클래스에서 protected 키워드가 붙은 `inflictDamage()` 매서드를 호출

## 구현을 강제되지 않아 생기는 문제

![img_9.png](pocu-note/COMP2500/week10/image/img_9.png)

![img_10.png](pocu-note/COMP2500/week10/image/img_10.png)

- 피해량 계산
- 피해량 적용
- 2가지에 다형성이 적용됨
    - 넓음
- 범위를 줄여야함

![img_11.png](pocu-note/COMP2500/week10/image/img_11.png)

![img_17.png](pocu-note/COMP2500/week10/image/img_17.png)

- 부모 클래스에 `calculateDamage()` 매서드를 사용하지는 않지만 자식에서 공통적으로 오버라이딩 할 의도로 구현
    - 공통을 묶어 일반화 하는 용도

![img_12.png](pocu-note/COMP2500/week10/image/img_12.png)

- `inflictDamage()` 매서드의 로직이 부모 클래스의 `attack()`매서드로 올라감
    - 추가적으로 final 키워드를 `attack()`매서드에 붙여 오버라이딩 못 하도록 설정

![img_13.png](pocu-note/COMP2500/week10/image/img_13.png)

- 데미지를 계산하는 로직은 public 해도 상관없음
    - 데미지를 주는 `inflict()` 처럼 상태를 바꾸지 않음

![img_14.png](pocu-note/COMP2500/week10/image/img_14.png)

- 계산하는 로직을 오버라이딩

![img_15.png](pocu-note/COMP2500/week10/image/img_15.png)

- 클래스 다이어그램에 오버라이딩한 매서드는 표시 안 해도 됨!

![img_16.png](pocu-note/COMP2500/week10/image/img_16.png)

- 여전히 문제 발생
- 오버라이딩을 강제하지 않아서 Monster 클래스의 `calculateDamage()`의 기본 동작이 호출되어 데미지가 0으로 나옴

![img_18.png](pocu-note/COMP2500/week10/image/img_18.png)

![img_19.png](pocu-note/COMP2500/week10/image/img_19.png)

- 부모 클래스의 구현을 없애면?

![img_20.png](pocu-note/COMP2500/week10/image/img_20.png)

- 추상 매서드:
    - 매서드 시그니만 있고 동작이 구현되지 않은 매서드

![img_21.png](pocu-note/COMP2500/week10/image/img_21.png)

- Monster 클래스의 개체를 생성하지 않아도 되지 않나?
- 오직 추상화 용도

![img_22.png](pocu-note/COMP2500/week10/image/img_22.png)

## 추상 메서드/클래스로 문제 고치기

![img_23.png](pocu-note/COMP2500/week10/image/img_23.png)

- C 언어의 함수 선언과 유사하게
    - 선언과 구현을 분리

![img_24.png](pocu-note/COMP2500/week10/image/img_24.png)

![img_25.png](pocu-note/COMP2500/week10/image/img_25.png)

- abstract 키워드가 필요함

![img_26.png](pocu-note/COMP2500/week10/image/img_26.png)

![img_27.png](pocu-note/COMP2500/week10/image/img_27.png)

- 클래스도 abstract 키워드를 붙여야함

![img_28.png](pocu-note/COMP2500/week10/image/img_28.png)

- 추상 클래스는 개체를 만들 수 없음

![img_29.png](pocu-note/COMP2500/week10/image/img_29.png)

- 이번에는 Monster 클래스가 아닌 Troll 클래스에 문제가 발생

![img_30.png](pocu-note/COMP2500/week10/image/img_30.png)

- Troll 클래스에 abstract 키워드 붙이면 개체로 만들 수 없음
    - Troll 클래스도 abstract로 만들면 깊은 상속관계로 또 다른 구체 클래스로 상속받아 사용할 수 있긴 함
- 따라서 컴파일 하려면 Troll 클래스에서 만드시 추상 매서드를 오버라이딩 구현해야함

![img_31.png](pocu-note/COMP2500/week10/image/img_31.png)

- Monster 클래스는 이제 개체 생성 불가

## 구체 클래스 vs 추상 클래스

![img_32.png](pocu-note/COMP2500/week10/image/img_32.png)

- 추상 클래스는 클래스 다이어그램에서 *이탤릭*으로 표기

![img_33.png](pocu-note/COMP2500/week10/image/img_33.png)

![img_34.png](pocu-note/COMP2500/week10/image/img_34.png)

- 추상 클래스를 결정하는 여부와 추상 매서드는 다른 개념
    - 추상 매서드가 없어도 추상 클래스로 지정할 수 있음
        - abstract 키워드를 클래스 레벨에 붙이면 됨
- 추상 클래스는 개체를 만들 수 없는 클래스!
- 하지만 추상 매서드가 있다면 반드시 추상 클래스로 만들어야함

![img_35.png](pocu-note/COMP2500/week10/image/img_35.png)

![img_36.png](pocu-note/COMP2500/week10/image/img_36.png)

![img_37.png](pocu-note/COMP2500/week10/image/img_37.png)

![img_38.png](pocu-note/COMP2500/week10/image/img_38.png)

![img_39.png](pocu-note/COMP2500/week10/image/img_39.png)

![img_40.png](pocu-note/COMP2500/week10/image/img_40.png)

![img_41.png](pocu-note/COMP2500/week10/image/img_41.png)

- 추상 매서드가 존재하면, 즉 구현이 없으면 그 클래스는 반드시 추상 클래스

## 코드보기: 추상 BaseEntity

```java
package academy.pocu.comp2500samples.w10.abstractentitybase;

import java.time.OffsetDateTime;
import java.util.UUID;

public abstract class BaseEntity {
    private final UUID id;
    private final OffsetDateTime createdDateTime;
    private OffsetDateTime modifiedDateTime;

    public BaseEntity(final UUID id,
                      final OffsetDateTime createdDateTime,
                      final OffsetDateTime modifiedDateTime) {
        this.id = id;
        this.createdDateTime = createdDateTime;
        this.modifiedDateTime = modifiedDateTime;
    }

    public UUID getID() {
        return this.id;
    }

    public OffsetDateTime getCreatedDateTime() {
        return this.createdDateTime;
    }

    public OffsetDateTime getModifiedDateTime() {
        return this.modifiedDateTime;
    }

    public void setModifiedDateTime(final OffsetDateTime modifiedDateTime) {
        this.modifiedDateTime = modifiedDateTime;
    }
}
```

```java
package academy.pocu.comp2500samples.w10.abstractentitybase;

import java.time.OffsetDateTime;
import java.util.UUID;

public final class Student extends BaseEntity {
    private String name;
    private String email;
    private String nickname;

    public Student(final UUID id,
                   final OffsetDateTime createdDateTime,
                   final OffsetDateTime modifiedDateTime,
                   final String name,
                   final String email,
                   final String nickname) {
        super(id, createdDateTime, modifiedDateTime);
        this.name = name;
        this.email = email;
        this.nickname = nickname;
    }

    public String getName() {
        return this.name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    public String getNickname() {
        return this.nickname;
    }

    public void setNickname(final String nickname) {
        this.nickname = nickname;
    }
}
```

- 추상 클래스를 상속받은 자식 클래스에서 `super()` 로 추상 클래스의 생성자를 호출해야만 함
  - 추상 클래스의 생성자를 호출한다고 추상 클래스의 개체가 생성되는 것은 아님
  - 한 덩어리고 Student 클래스의 개체가 생성될 때 BaseEntity 클래스에 정의된 멤버 변수를 초기화
- 상속의 규칙이 그대로 적용
  - 개체가 올바른 상태로 초기화되도록 만드는 규칙
  - 개체지향 철학  

## 인터페이스

![img_42.png](pocu-note/COMP2500/week10/image/img_42.png)

- 경계면 사이

![img_43.png](pocu-note/COMP2500/week10/image/img_43.png)

- 함수는 블랙박스
- 여기서 함수 시그니처가 인터페이스 개념

![img_44.png](pocu-note/COMP2500/week10/image/img_44.png)

![img_45.png](pocu-note/COMP2500/week10/image/img_45.png)

![img_46.png](pocu-note/COMP2500/week10/image/img_46.png)

![img_47.png](pocu-note/COMP2500/week10/image/img_47.png)

- 함수 포인터는 함수 시그니처만 필요함
    - 오직 추상적인 인터페이스만 존재

![img_48.png](pocu-note/COMP2500/week10/image/img_48.png)

- Monster 클래스에 새로운 매서드를 추가해서 OO의 다형성의 인터페이스를 확인

![img_49.png](pocu-note/COMP2500/week10/image/img_49.png)

- `canSurviveAttack()` 에 개체를 전달한 이유는, 개체의 함수를 호출하기 위함
- 이는 실행 중 어떤 개체가 매개변수로 들어오는지에 따라 어떤 함수를 호출하는지 결정이 됨
    - 다형성
- 함수 포인터와 유사한 개념

## 인터페이스 빌드업

![img_61.png](pocu-note/COMP2500/week10/image/img_61.png)

- 상태를 모두 제거하고 클래스로 만듬
    - 추상 클래스
- 모든 매서드에 abstract 키워드를 붙이고, 오버라이딩 강요
    - 상속받은 클래스는 반드시 동작을 구현해야함

![img_62.png](pocu-note/COMP2500/week10/image/img_62.png)

- 상속받은 클래스에서 추상 매서드(시그니처)를 구현하는 것으로 개체가 함수를 사용하도록 할 수 있음
    - 함수 포인터를 통해 함수의 구현을 전달하는 것과 목적은 동일함

![img_63.png](pocu-note/COMP2500/week10/image/img_63.png)

- 클래스(인터페이스)에 추상 매서드가 하나면 함수 포인터처럼 하나의 함수 구현을 전달하는 결과
- 추상 매서드가 여러 개라면 여러 함수 구현을 동시에 전달할 수 있음!

## 인터페이스는 순수 추상 클래스

![img_50.png](pocu-note/COMP2500/week10/image/img_50.png)

- 개체 전체를 반드시 전달해야할까?
- 동작만 전달하면 되지 않나?
    - 상태는 필요없음
- 동작만 가지는 클래스는 없을까?

![img_51.png](pocu-note/COMP2500/week10/image/img_51.png)

- 순수 추상 클래스
    - 동작만 가짐
    - 구현은 없음

![img_52.png](pocu-note/COMP2500/week10/image/img_52.png)

![img_53.png](pocu-note/COMP2500/week10/image/img_53.png)

- 동작의 시그니처만 있기 때문에 클래스와 다른 규칙을 적용

## 추상클래스를 인터페이스로 변경하기

![img_54.png](pocu-note/COMP2500/week10/image/img_54.png)

- 매서드는 언제나 public 접근 제어자

![img_55.png](pocu-note/COMP2500/week10/image/img_55.png)

- Java는 자식(구체) 클래스에서 오버라이딩 할 때 implements 키워드를 붙임
- 다른 언어에서는 extends와 구분하지 않는 경우도 있음

![img_56.png](pocu-note/COMP2500/week10/image/img_56.png)

- 클래스 다이어그램에서 상속 선에서 점섬으로 수정

## 인터페이스 미구현과 컴파일 오류

![img_57.png](pocu-note/COMP2500/week10/image/img_57.png)

- 인터페이스를 구현한 클래스에서 추상 매서드를 오버라이딩(구현)하지 않으면 컴파일 오류 발생

![img_58.png](pocu-note/COMP2500/week10/image/img_58.png)

- 인터페이스를 상속받은 추상 클래스로 만들면 구현 안 해도 됨
    - 하지만 개체로 만들 수 없죠
    - 깊은 상속이 적용 가능

![img_59.png](pocu-note/COMP2500/week10/image/img_59.png)

- 인터페이스, 추상 클래스를 이용하면 컴파일 오류를 통해 실수 방지 가능

![img_60.png](pocu-note/COMP2500/week10/image/img_60.png)

- 그냥 상속관계를 사용하면 위 처럼 문제 발생
- Cat 클래스에 shuot 오타있음

![img_64.png](pocu-note/COMP2500/week10/image/img_64.png)

## 미구현(오버라이딩 X)를 막기위해 인터페이스를 반드시 사용할 필요는 없음

![img_65.png](pocu-note/COMP2500/week10/image/img_65.png)

- 부모 클래스(구체), 추상 클래스, 인터페이스 모두 함수를 자식 클래스로 전달할 수 있음
- 즉 본질적으로 자식 클래스에서 이 함수를 상속하도록 명시하면 됨
    - 다른 언어는 정식 키워드(override)로 자식 클래스의 함수에서 명시

![img_66.png](pocu-note/COMP2500/week10/image/img_66.png)

- Java 언어는 어노테이션을 사용
- @override 어노테이션이 있으면 부모의 함수를 오버라이딩 한다는 의미
    - 부모에 같은 시그니처를 가진 함수가 없으면 컴파일 오류
    - 여기서 시그니처는 함수 이름, 매서드 목록, 반환형

## Java 어노테이션

![img_67.png](pocu-note/COMP2500/week10/image/img_67.png)

- 메타 데이터
- 컴파일러에게 정보를 제공
- 어노테이션 기반 처리 가능
    - 실행 중
    - 컴파일 중
- 부수적인 옵션

## 인터페이스의 접근 제어자

### 추상 메서드의 접근 제어자

![img_68.png](pocu-note/COMP2500/week10/image/img_68.png)

- 추상 클래스의 추상 메서드는 protected 키워드 가능
- 상속 받는 클래스에서 호출 및 구현 가능

![img_69.png](pocu-note/COMP2500/week10/image/img_69.png)

- 주류 언어에서 인터페이스의 모든 매서드는 public
- 헤더 파일의 함수 선언은 전역적인 것과 유사함

### 인터페이스 클래스 레벨 접근제어자

![img_70.png](pocu-note/COMP2500/week10/image/img_70.png)

![img_71.png](pocu-note/COMP2500/week10/image/img_71.png)

- 인터페이스 자체가 패키지 접근 제한을 가짐
    - 여전히 인터페이스에 선언한 추상 매서드는 public 간주

![img_72.png](pocu-note/COMP2500/week10/image/img_72.png)

- ConsoleLogger 클래스는 public 접근제어자를 가정
    - 외부에서 생성할 수 있음
- ConsoleLogger 클래스에서 log 매서드를 오버라이딩하면서 public 접근 제어자를 붙였기 때문에 외부에서 호출 가능
- Receiver 클래스는 다른 패키지에 구현
    - Receiver 클래스의 개체의 processData 함수를 호출하는데 이 함수의 매개변수 목록에 ILoggable 인터페이스 타입은 패키지 접근 제어자라 사용할 수 없고, 컴파일 오류 발생

## 인터페이스 코딩 표준 & 소수설

![img_73.png](pocu-note/COMP2500/week10/image/img_73.png)

![img_74.png](pocu-note/COMP2500/week10/image/img_74.png)

![img_75.png](pocu-note/COMP2500/week10/image/img_75.png)

![img_76.png](pocu-note/COMP2500/week10/image/img_76.png)

![img_77.png](pocu-note/COMP2500/week10/image/img_77.png)

## 인터페이스와 다중 상속

![img_78.png](pocu-note/COMP2500/week10/image/img_78.png)

- 여러개의 함수 시그니처 전달을 받는 것

![img_79.png](pocu-note/COMP2500/week10/image/img_79.png)

- processData 함수의 매개변수로 사용할 때 ILoggable, ISavable 을 모두 구현한 ConsoleLogger 클래스의 개체를 전달해도 문제 없음

### 왜 인터페이스는 다중 상속을 허용하나?

![img_80.png](pocu-note/COMP2500/week10/image/img_80.png)

- 다중 상속은 상태와 매서드 구현이 중복됨
    - 자식 개체에서 사용할 때 무엇을 사용할지 문제 발생
- 다이아몬드 상속 문제
    - C++ 에서 배움

![img_81.png](pocu-note/COMP2500/week10/image/img_81.png)

- 인터페이스는 실체가 없어서 구현하는 클래스에서 추상 매서드를 구현하면 실체는 단 하나라 괜찮음
- 인터페이스 A, 인터페이스 B의 매서드 시그니처가 동일해도 괜찮음
    - 어차피 함수 시그니처만 전달하는 개념!

![img_82.png](pocu-note/COMP2500/week10/image/img_82.png)

- 함수 시그니처가 겹쳐도 자식 클래스(구현 클래스)에서 하나만 구현하면 문제 없음!!

![img_83.png](pocu-note/COMP2500/week10/image/img_83.png)

- 함수의 시그니처에는 함수의 이름, 매개변수 목록이 포함됨
    - 추가적으로 static 같은 키워드
    - 함수의 시그니처로 컴파일러는 함수를 구별할 수 있음
- 함수 포인터는 반환형, 매개변수 목록을 타입으로 사용함
    - 착각 주의
- 함수 오버로딩에서 함수 시그니처에 함수의 이름, 매개변수 목록이 포함되기 때문에 함수의 이름이 동일하더라도 매개변수 목록이 다르면 컴파일러는 이를 구분할 수 있음
    - 동시에 여러 인터페이스에서 동일한 이름을 가지는 추상 매서드들을 오버라이딩 하더라도 매개변수 목록이 다르면 각기 다른 함수로 취급해 반드시 각각 오버라이딩 해야함
    - 결과적으로 이는 클래스에서 함수 오버로딩을 구현한 것과 동일함
- 위의 예시처럼 반환형만 다르고 추상 매서드의 이름과 매개변수 목록이 동일한 서로 다른 인터페이스를 구현하는 경우 클래스에서 각각 오버라이딩 하면 컴파일 오류 발생
    - 구현한 함수(실체) 시그니처가 겹치기 때문에 컴파일러가 구별할 수 없음
    - 추상 매서드는 반드시 구현해야하고, 이 구현된 매서드들의 시그니처가 겹처서 문제가 생김
- 추상 매서드의 이름은 같은데 매개변수 목록이 다르고 반환형이 다르면 당연히 됨

```java
package prac;

public interface Itest1 {
    public int getSomething();
}

```

```java
package prac;

public interface Itest2 {
    public void getSomething(int a);
}

```

```java
package prac;

public class TestImpl implements Itest1, Itest2 {
    @Override
    public int getSomething() {
        return 0;
    }

    @Override
    public void getSomething(int a) {
    }
}

```

![img_84.png](pocu-note/COMP2500/week10/image/img_84.png)

- 두번째 boolean 반환형의 save 함수를 오버라이딩 하는 코드에서 컴파일 오류가 발생

### 인터페이스의 다중 상속이 안전한가?

- 정말로 문제가 없나?

![img_85.png](pocu-note/COMP2500/week10/image/img_85.png)

- 문제가 없음
- 오직 구현(실체)는 하나

![img_86.png](pocu-note/COMP2500/week10/image/img_86.png)

- ILoggable 인터페이스를 ConsoleLogger 클래스에서 구현
- ExtendedConsoleLogger 클래스는 ConsoleLogger 클래스를 상속받음
- 최종적으로 ExtendedConsoleLogger 클래스에서 log 매서드를 오버라이딩 한다고 했을 때 오직 실체는 하나
    - IReportable 인터페이스의 log 매서드를 동시에 구현하기도 함

![img_87.png](pocu-note/COMP2500/week10/image/img_87.png)

![img_88.png](pocu-note/COMP2500/week10/image/img_88.png)

![img_89.png](pocu-note/COMP2500/week10/image/img_89.png)

![img_90.png](pocu-note/COMP2500/week10/image/img_90.png)

- 상속 + 인터페이스
- IWearable, IMountable 인터페이스 타입으로 저장하면 다형적 호출 가능

![img_91.png](pocu-note/COMP2500/week10/image/img_91.png)

- 다중 상속이 지원된다면 부모 클래스에만 mount 같은 매서드를 구현하고 상속 받아서 사용하면 됨
- 지금은 인터페이스의 추상 매서드를 사용했기에 반드시 구현하는 클래스에서 따로 구현을 해줘야함

### 실무에서 인터페이스 용도 정리

![img_92.png](pocu-note/COMP2500/week10/image/img_92.png)

- 함수 포인터
- 다중 상속 흉내

## 코드보기: 위젯

```java
package academy.pocu.comp2500samples.w10.widgets;

public abstract class Widget {
    private static int numWidgets = 0;

    protected String label;
    protected int x;
    protected int y;

    public Widget(final int x,
                  final int y) {
        this(String.format("Widget%d", numWidgets), x, y);
    }

    public Widget(final String label,
                  final int x,
                  final int y) {
        this.label = label;
        this.x = x;
        this.y = y;
        numWidgets++;
    }

    public String getLabel() {
        return this.label;
    }

    public void setLabel(final String label) {
        this.label = label;
    }

    public int getX() {
        return this.x;
    }

    public int getY() {
        return this.y;
    }
}
```

- 추상 클래스의 생성자의 접근 제어자가 public 이면 패키지 외부에서도 상속받아서 사용할 수 있음
    - 다른 패키지에서도 super 생성자를 호출 가능
- 추상 클래스의 생성자의 접근 제어자가 protected 이면 같은 패키지에서만 상속받아서 사용가능
- 추상 클래스의 생성자의 접근 제어자가 private 이면 접근할 수 없어서 외부에서 상속 받을 수 없음

```java
package academy.pocu.comp2500samples.w10.widgets;

import java.util.ArrayList;
import java.util.Random;

public class Program {
    public static void main(String[] args) {
        final Button button1 = new Button("Button1", 10, 5);
        final Button button2 = new Button("Button2", 5, 0);

        final Card card1 = new Card("Card1", 0, 1);
        final Card card2 = new Card("Card2", -10, -1);

        final Directory directory1 = new Directory("New Folder1", 5, 9);
        final Directory directory2 = new Directory("New Folder2", 12, 22);

        final ArrayList<Widget> widgets = new ArrayList<>();

        widgets.add(button1);
        widgets.add(button2);
        widgets.add(card1);
        widgets.add(card2);
        widgets.add(directory1);
        widgets.add(directory2);

        for (Widget widget : widgets) {
            System.out.printf("Widget label: %s%s",
                    widget.getLabel(),
                    System.lineSeparator());

            // Compile Error
            // widget.onClick();
            // widget.onDrag(10, 14);
            // widget.onDropped(card1);
        }

        final IClickable clickableButton = (IClickable) widgets.get(0);
        clickableButton.onClick();

        System.out.println("----------------");

        final ArrayList<IClickable> clickables = new ArrayList<>();

        clickables.add(button1);
        clickables.add(button2);
        clickables.add(directory1);
        clickables.add(directory2);

        // Compile Error
        // clickables.add(card1);

        // Compile error
        // clickables.add((IClickable) card2);

        for (IClickable clickable : clickables) {
            clickable.onClick();
        }

        System.out.println("----------------");

        final ArrayList<IDraggable> draggables = new ArrayList<>();

        draggables.add(card1);
        draggables.add(card2);
        draggables.add(directory1);
        draggables.add(directory2);

        final Random random = new Random(10);

        for (IDraggable draggable : draggables) {
            int x = random.nextInt(50);
            int y = random.nextInt(50);

            draggable.onDrag(x, y);
        }

        System.out.println("----------------");

        final ArrayList<IDroppable> droppables = new ArrayList<>();

        droppables.add(directory1);
        droppables.add(directory2);

        for (IDroppable droppable : droppables) {
            droppable.onDrop(button1);
        }
    }
}
```

- Widget 클래스와 IClickable, IDroppable, IDraggable 인터페이스는 아무 상관이 없어서 Widget 타입 변수에서 인터페이스에 있는 매서드 호출 불가
    - 컴파일 오류
- Card 클래스는 IClickable 인터페이스를 구현하지 않음
    - 컴파일러가 함수 시그니처를 전달하는지 알 수 있어서 IClickable 타입 컨테이너에 저장 시 컴파일 오류
- Card 타입 변수를 IClickable 인터페이스 타입으로 강제 타입 캐스팅도 불가능
    - 컴파일러가 Card 클래스는 IClickable 인터페이스를 구현하지 않는다는 것을 알 수 있기 때문

## clone()

![img_93.png](pocu-note/COMP2500/week10/image/img_93.png)

- `savePoint` 변수는 `robot` 변수와 동일한 참조를 가지기 때문에 의도한 바(각각 hp 깎음)과 다르게 결과가 나옴
- 얕은 복사 문제

![img_94.png](pocu-note/COMP2500/week10/image/img_94.png)

![img_95.png](pocu-note/COMP2500/week10/image/img_95.png)

- 그냥 바로 Object 클래스의 clone() 매서드를 오버라이딩 하면 예외가 발생
- Clonable 인터페이스를 상속받아서 오버라이딩 해야함
    - 강제됨

![img_96.png](pocu-note/COMP2500/week10/image/img_96.png)

- Cloneable 인터페이스 구현
- Cloneable 인터페이스의 clone 매서드 오버라이딩
- 매서드 내용은 Object 클래스의 super.clone() 매서드를 호출
- 이렇게 구현하면 새로운 주소를 가지는 개체를 복사해서 반환해줌
    - Java 내부적으로 그렇게 동작

![img_97.png](pocu-note/COMP2500/week10/image/img_97.png)

![img_98.png](pocu-note/COMP2500/week10/image/img_98.png)

- Object 클래스의 clone()의 기본 동작은 새로운 메모리를 할당하고 모든 멤버 변수를 대입해서 반환
- 멤버 변수 중 참조형이 존재하면 참조형의 참조를 그대로 대입함
    - 얕은 복사

![img_99.png](pocu-note/COMP2500/week10/image/img_99.png)

- Clonable 인터페이스의 clone() 반환형은 Object
- 마찬가지로 Object 클래스의 clone() 반환형 또한 Object
    - 따라서 캐스팅 필요

![img_100.png](pocu-note/COMP2500/week10/image/img_100.png)

![img_101.png](pocu-note/COMP2500/week10/image/img_101.png)

- 멤버 변수가 참조형일 때 생기는 얕은 복사

![img_102.png](pocu-note/COMP2500/week10/image/img_102.png)

- 이를 해결하려면 깊은 복사로 구현
- 각 참조형 멤버변수도 Cloneable 인터페이스의 clone() 매서드를 구현하고 직접 clone() 의 결과로 복사된 개체에 멤버 변수로 대입하기

![img_103.png](pocu-note/COMP2500/week10/image/img_103.png)

## 코드보기: 복사 생성자

```java
package academy.pocu.comp2500samples.w10.copyconstructor;

public final class Point {
    private int x;
    private int y;

    public Point(final int x, final int y) {
        this.x = x;
        this.y = y;
    }

    public Point(final Point other) {
        this(other.x, other.y);
    }

    public int getX() {
        return this.x;
    }

    public void setX(final int x) {
        this.x = x;
    }

    public int getY() {
        return this.y;
    }

    public void setY(final int y) {
        this.y = y;
    }
}
```

- Point 생성자 중 두번째 생성자가 복사 생성자
    - Point 타입 매개변수를 받음
    - 매개변수로 받아서 각 멤버 변수를 대입해 새로운 개체 생성

```java
package academy.pocu.comp2500samples.w10.copyconstructor;

public final class Line {
    private final Point p1;
    private final Point p2;

    public Line(final Point p1,
                final Point p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    public Line(final Line other) {
        this(new Point(other.p1),
                new Point(other.p2));
    }

    public double getLength() {
        int xDiff = this.p1.getX() - this.p2.getX();
        int yDiff = this.p1.getY() - this.p2.getY();

        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }

    public Point getP1() {
        return this.p1;
    }

    public Point getP2() {
        return this.p2;
    }
}
```

- Line 클래스는 참조형(Point) 멤버변수를 가지기 때문에 복사 생성자에서 각각 멤버변수에 대해 복사 생성자를 호출
- 깊은 복사

```java
package academy.pocu.comp2500samples.w10.copyconstructor;

public class Program {
    public static void main(String[] args) {
        final Point p1 = new Point(1, 1);
        final Point p2 = new Point(p1);

        p1.setX(-4);
        p1.setY(-8);

        System.out.printf("p1.x: %d, p1.y: %d%s",
                p1.getX(),
                p1.getY(),
                System.lineSeparator());
        System.out.printf("p2.x: %d, p2.y: %d%s",
                p2.getX(),
                p2.getY(),
                System.lineSeparator());

        final Point p3 = new Point(5, 7);

        final Line l1 = new Line(p2, p3);
        final Line l2 = new Line(l1);

        p2.setX(10);
        p2.setY(15);

        System.out.printf("l1.p1.x: %d, l1.p1.y: %d%s",
                l1.getP1().getX(),
                l1.getP1().getY(),
                System.lineSeparator());

        System.out.printf("l1.p2.x: %d, l1.p2.y: %d%s",
                l1.getP2().getX(),
                l1.getP2().getY(),
                System.lineSeparator());

        System.out.printf("l2.p1.x: %d, l2.p1.y: %d%s",
                l2.getP1().getX(),
                l2.getP1().getY(),
                System.lineSeparator());

        System.out.printf("l2.p2.x: %d, l2.p2.y: %d%s",
                l2.getP2().getX(),
                l2.getP2().getY(),
                System.lineSeparator());
    }
}
```

## 정리

![img_104.png](pocu-note/COMP2500/week10/image/img_104.png)

- 인터페이스 == 순수 추상 클래스