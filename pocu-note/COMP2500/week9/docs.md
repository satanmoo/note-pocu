# Week9

## 다형성 개념

### 용어 의미

![img.png](pocu-note/COMP2500/week9/image/img.png)

- 다양한 형태로 변함

### OO의 다형성

![img_1.png](pocu-note/COMP2500/week9/image/img_1.png)
![img_2.png](pocu-note/COMP2500/week9/image/img_2.png)
![img_3.png](pocu-note/COMP2500/week9/image/img_3.png)

- 절차적 언어에서 불편함

![img_4.png](pocu-note/COMP2500/week9/image/img_4.png)

- late binding:
    - 실제로 어떤 함수가 실행되는지는 실행 중 결정
    - 함수 시그니처는 컴파일 중 결정
- 다형성을 구현하려면 상속이 필요
    - 컴파일을 할 때 함수 시그니처가 존재한다는 것은 컴파일러가 알야아함
    - 상속관계를 이용해 부모 클래스의 시그니처의 존재를 컴파일러가 알 수 있음
    - 시그니처는 유지하되 자식 클래스에서 함수의 바디 내용은 다르게 구현
- C 언어의 함수 포인터와 유사한 개념
    - 함수의 시그니처를 변수의 자료형처럼 사용
    - 즉 함수의 매개변수 목록과 반환형만 동일하면 구체적인 구현은 몰라도 함수 포인터에 대입, 전달할 수 있음

![img_5.png](pocu-note/COMP2500/week9/image/img_5.png)

- 다른 종류의 개체를 편하게 저장 및 처리 가능

![img_6.png](pocu-note/COMP2500/week9/image/img_6.png)

- 서브 타입 다형성
    - 굳이 엄밀하게 표현하면

## 무늬와 실체

![img_7.png](pocu-note/COMP2500/week9/image/img_7.png)

- 원칙은 실제 개체 자료형의 함수가 호출
    - 변수명은 무늬
    - 실제 개체 자료형은 실체

![img_8.png](pocu-note/COMP2500/week9/image/img_8.png)

- 부모 클래스형의 변수는 다양한 자식 클래스 실제 개체를 참조할 수 있음

![img_9.png](pocu-note/COMP2500/week9/image/img_9.png)

### 겉보기에는 같은 형

![img_10.png](pocu-note/COMP2500/week9/image/img_10.png)

- 부모 클래스 변수에 자식 개체를 대입할 수 있음
    - 반대로 자식 클래스 변수에 부모 개체 대입은 컴파일 에러
    - 당연히 상속 관계가 아닌 형제(?)관계 등은 대입하면 컴파일 에러

![img_11.png](pocu-note/COMP2500/week9/image/img_11.png)

- 다형성의 선수 조건은 상속
    - 부모 자료형 변수에 대입
    - 함수의 부모 자료형 매개변수에 대입

### 개체들에 내리는 동일한 명령

![img_12.png](pocu-note/COMP2500/week9/image/img_12.png)

- 부모 클래스에 매서드 시그니처를 명시해야함
    - 그렇지 않으면 부모 클래스 변수에 매서드가 없어서 컴파일 오류 발생

![img_13.png](pocu-note/COMP2500/week9/image/img_13.png)

- 오버라이딩:
    - 자식 클래스에서 부모 클래스의 동일한 시그니처를 가진 매서드의 내용을 변경(덮어씀)

![img_14.png](pocu-note/COMP2500/week9/image/img_14.png)

- 오버라이딩은 선택 사항임
    - 덮어쓰지 않으면 부모 클래스 매서드 내용 그대로 사용

![img_15.png](pocu-note/COMP2500/week9/image/img_15.png)

- 부모 동작도 유지하면서 오버라이딩 가능
    - `super.x()` 호출하면 됨
    - 생성자와 다르게 반드시 첫번째 줄 호출할 필요 없음
        - 생성자에서 그렇게 한 이유는 부모를 먼저 초기화하는 법칙 때문에
- 외부에서 호출하면 실제 자식 개체의 매서드를 호출하는 원칙은 그대로 적용

## 다형성의 장점

![img_16.png](pocu-note/COMP2500/week9/image/img_16.png)

- 다형성이 없다면 코드에서 중재자가 개체의 타입을 판단해 각각에 맞는 매서드를 호출
- 다형성이 있다면 언어 레벨에서 이를 지원함
    - 개체가 스스로 자신의 상태를 책임진다는 OO의 원칙
    - 자신의 타입은 개체 스스로가 앎

![img_17.png](pocu-note/COMP2500/week9/image/img_17.png)

- 각 자료형에 맞는 코드가 하나의 클래스에 모두 들어감
    - 캡슐화
- 새로운 클래스를 추가할 때도 클래스만 추가하면 됨
    - 유지 보수성 굿
- 중재자에 분기를 추가하고 이런 번거로움 X
    - 클라이언트, 라이브러리 제공자 모두에게 해택을 줌
    - 책임의 분리

## 늦은 바인딩 vs 이른 바인딩

- 누구를 호출할 지 결정은 실행 중

![img_18.png](pocu-note/COMP2500/week9/image/img_18.png)

- 동적 바인딩이라고 부름

![img_19.png](pocu-note/COMP2500/week9/image/img_19.png)

- 컴파일 중 결정
    - 컴파일 후 바뀌지 않음

![img_20.png](pocu-note/COMP2500/week9/image/img_20.png)

- 함수 호출문이 jmp 명령어로 교체
- 메모리의 코드 영역에 함수 주소값을 바로 넣음
- 다형성 지원이 아니라 빌드 중 함수로 점프하는 개념

## 함수 포인터와 늦은 바인딩

![img_21.png](pocu-note/COMP2500/week9/image/img_21.png)

- `qsort() 함수의 마지막 매개변수는 함수 포인터
- jmp 명령어로 함수 주소값에 가는거 불가능

## Java의 다형성 구현

![img_22.png](pocu-note/COMP2500/week9/image/img_22.png)

- C 언어와 유사한 원리로 함수 포인터를 전달하는 방식을 언어 자체에서 제공하는게 OO 언어의 대표 Java

![img_23.png](pocu-note/COMP2500/week9/image/img_23.png)

- 다형적으로 작동할 수 있는 매서드를 가상 매서드라고 부름
    - 부모 클래스에 매서드가 있고, 자식 클래스에서 구현을 바꿀 수 있는 매서드
- 기본적으로 자바의 매서드는 가상 매서드

## 이른 바인딩 vs 늦은 바인딩: 성능

![img_24.png](pocu-note/COMP2500/week9/image/img_24.png)

- 이른 바인딩이 성능에 유리
    - 컴파일 중에 충분한 시간을 통해 최적화 가능
- 실행 중 최적화 하기에는 절대적으로 시간이 부족

## 오버라이딩 막기: final 키워드

![img_25.png](pocu-note/COMP2500/week9/image/img_25.png)

- final 키워드가 붙은 매서드를 자식 클래스에서 선언하면 컴파일 오류 발생

```java
public class A {
    public final int getA() {
        return 'a';
    }
}

public class B extends A {
    public int getA() {
        // 이 순간 IDE에서 바로 컴파일 에러
    }
}
```

![img_26.png](pocu-note/COMP2500/week9/image/img_26.png)

- final 키워드를 매서드에 붙이는 순간 컴파일러는 이 매서드가 오버라이딩 되지 않는다는 것을 알 수 있음
- 이른 바인딩 가능
    - JVM에서 최적화 해줄 수도?
    - 정확한 구현은 알 수 없긴함

### final 키워드 정리

![img_27.png](pocu-note/COMP2500/week9/image/img_27.png)

- 변수 앞에 붙이는 final
- 매개변수 앞에도 마찬가지

![img_28.png](pocu-note/COMP2500/week9/image/img_28.png)

- 매서드 앞에 붙이는 final
- 오버라이딩 불가능

![img_29.png](pocu-note/COMP2500/week9/image/img_29.png)

- 클래스 앞의 final이 붙어있으면 상속 불가

![img_30.png](pocu-note/COMP2500/week9/image/img_30.png)

- 언어의 기본 동작
    - 모든 클래스는 상속이 됨
    - 마음대로 상속하는 것을 막기 위해서 final 사용
- C++ 에서는 반대
    - 모든 클래스는 상속 불가
    - 상속하기 위해서 상속 지정자 사용

## 다형성 적용 예

![img_31.png](pocu-note/COMP2500/week9/image/img_31.png)

- 시계 붙이기 개념
- 어디에 붙일 대상을 매개변수로
    - 일반화의 끝판왕 Object 타입

![img_32.png](pocu-note/COMP2500/week9/image/img_32.png)

- 클래스 다이어그램에서 오버로딩으로 구현이 어떻게 바뀌었는지 당연히 확인 불가
- 인터페이스를 사용하는 것이 더 좋은 구현

## 코드보기: 마법사

```java
package academy.pocu.comp2500samples.w09.magician;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;

public final class Magician {
    private String name;
    private Attunement attunement;
    private OffsetDateTime lastEliteAttackUsedDateTime;

    public Magician(String name) {
        this.name = name;
        this.attunement = new None(this);
        this.lastEliteAttackUsedDateTime = OffsetDateTime.of(1, 1, 1, 0, 0, 0, 0, ZoneOffset.UTC);
    }

    public String getName() {
        return this.name;
    }

    public void setAttunement(final Attunement attunement) {
        if (this.attunement.getClass() != attunement.getClass()) {
            this.attunement = attunement;
            this.attunement.onEntry();
        }
    }

    public void attack() {
        this.attunement.attack();
    }

    public void useEliteSkill() {
        this.attunement.useEliteSkill(this.lastEliteAttackUsedDateTime);
        this.lastEliteAttackUsedDateTime = OffsetDateTime.now(ZoneOffset.UTC);
    }

    public void onDeath() {
        this.attunement.onDeath();
        this.lastEliteAttackUsedDateTime = OffsetDateTime.of(1, 1, 1, 0, 0, 0, 0, ZoneOffset.UTC);
    }
}
```

- lastEliteAttackUsedDateTime(쿨다운) 초기화할 때 OffsetDateTime 타입의 가장 오래된 시간으로 초기화
- `onEntry()` 매서드는 조율 후 동작인데 생략
    - 예를 들어 불을 장착했으면, 장착 이펙트 발동이라던가...
- 마법사에 장착한 조율의 종류에 따라 마법사의 `attack`, `onDeath` 등 동작이 달라짐

```java
package academy.pocu.comp2500samples.w09.magician;

import java.time.OffsetDateTime;

public class Attunement {
    protected Magician magician;

    public Attunement(final Magician magician) {
        this.magician = magician;
    }

    public void onEntry() {

    }

    public void attack() {

    }

    public void useEliteSkill(OffsetDateTime lastEliteAttackUsedDateTime) {

    }

    public void onDeath() {

    }
}
```

- 이건 인터페이스, 추상 클래스로 구현하는 것이 더 좋음
- 다른 자식 클래스에서 다형적으로 구현

## Object 클래스의 가상 매서드

![img_33.png](pocu-note/COMP2500/week9/image/img_33.png)

- `finalize`는 사라질 예정

### toString()

![img_34.png](pocu-note/COMP2500/week9/image/img_34.png)

![img_35.png](pocu-note/COMP2500/week9/image/img_35.png)

![img_36.png](pocu-note/COMP2500/week9/image/img_36.png)

- Java 기본 문서에서는 모든 클래스의 `toString()`을 오버라이딩 하는 것을 권장

### equals()

![img_37.png](pocu-note/COMP2500/week9/image/img_37.png)

- 기본 동작은 참조 주소비교
- 문자열 `String` 비교할 때 사용하는 함수
    - `String` 클래스는 개체 속 문자(character)을 하나하나 비교하도록 구현

![img_38.png](pocu-note/COMP2500/week9/image/img_38.png)

- 오버라이딩 하지 않은 기본 구현

![img_39.png](pocu-note/COMP2500/week9/image/img_39.png)

- 각 클래스에서 동치의 개념은 다를 수 있음
- `equals()` 를 오버라이딩 하는 순간 `hashcode()`도 오버라이딩 해야함

![img_40.png](pocu-note/COMP2500/week9/image/img_40.png)

- intellij 자동 구현도 이 탬플릿
    - 참조 확인
    - null 확인
    - 클래스 정보 확인
        - RTTI

### hashCode()

![img_41.png](pocu-note/COMP2500/week9/image/img_41.png)

- 동치면 반드시 해시값이 같음
- 동치가 아니면 해시값이 거의 다르지만, 같을 수도 있음
  - 해시 충돌
- Object 클래스 기본 구현
  - 주소 기반으로 해시값 구함

![img_42.png](pocu-note/COMP2500/week9/image/img_42.png)

- Object 클래스에 이 메서드가 있는 이유?
  - HashMap 클래스에서 사용하려고
- 두 개체가 다름은 100% 판단할 수 있음
  - 해시코드가 다르면 반드시 두 개체는 다르기 때문
  - 대우 명제
- 해시 코드가 같아도 두 개체가 다를 수 있기 때문에 두 개체가 같음은 확신할 수 없음

![img_43.png](pocu-note/COMP2500/week9/image/img_43.png)

- String 클래스에서 구현한 hashCode() 를 그대로 사용한 예시
- firstName, lastName 값이 순서만 바뀐 경우 동치로 판단하는 것을 방지하기 위해 비트 쉬프트

## 코드보기: 개체 비교, 코드보기: 해시값 계산

```java
package academy.pocu.comp2500samples.w09.hashcode;

public final class Line {
    private Point p1;
    private Point p2;

    public Line(Point p1, Point p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    public double getLength() {
        int xDiff = this.p1.getX() - this.p2.getX();
        int yDiff = this.p1.getY() - this.p2.getY();

        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }

        if (obj == null
                || !(obj instanceof Line)
                || this.hashCode() != obj.hashCode()) {
            return false;
        }

        Line other = (Line) obj;
        return this.p1.equals(other.p1) && this.p2.equals(other.p2);
    }

    public int hashCode() {
        int hash = 17;
        hash = hash * 31 + this.p1.hashCode();
        hash = hash * 31 + this.p2.hashCode();

        return hash;
    }
}
```

- 이 클래스의 가정은 방향이 있는 선분
  - 벡터 개념
- 해시코드를 구현할 때는 분포가 중요함
  - best practice 검색해서 ㄱ
