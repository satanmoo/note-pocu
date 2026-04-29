# Week5

## 상속(inheritance)

### 상속 개요

![img.png](pocu-note/COMP2500/week5/image/img.png)

- 예전에는 개체 지향의 핵심을 상속이라고 여겼음
    - 하지만 시간이 흐르고 모든 것을 상속으로 해결할 수 없었음
- 재사용의 정점 == 상속
- 일반적으로 상속이 없으면 개체지향을 지원하는 언어가 아님
- 다형성의 기반

![img_1.png](pocu-note/COMP2500/week5/image/img_1.png)
![img_2.png](pocu-note/COMP2500/week5/image/img_2.png)

- inheritance
    - 어떤 특징을 물려받음
    - 유전에 의미가 가까움

### OOP에서 상속

![img_3.png](pocu-note/COMP2500/week5/image/img_3.png)

- 이미 존재하는 클래스를 기반으로 새 클래스를 만듬
    - 상태와 동작 추가
    - 계속해서 상속의 상속이 가능

![img_5.png](pocu-note/COMP2500/week5/image/img_5.png)
![img_4.png](pocu-note/COMP2500/week5/image/img_4.png)
![img_6.png](pocu-note/COMP2500/week5/image/img_6.png)

- 상속 관계를 설명하는 표현
    - 상속
    - 파생(extend)
    - 한 종류(is-a)

### 상속 예시

- 대학교 시스템
    - 학생
    - 선생

![img_7.png](pocu-note/COMP2500/week5/image/img_7.png)

- 상속 적용 전 클래스 다이어그램

- changeName()은 개념적으로 setter와 다름
    - full name을 바꿈
- student의 department는 nullable 반면 teacher의 department는 nullable X

![img_8.png](pocu-note/COMP2500/week5/image/img_8.png)

![img_9.png](pocu-note/COMP2500/week5/image/img_9.png)

- java는 enum이 클래스형이라서 nullable함
    - enum Major가 nullable

![img_10.png](pocu-note/COMP2500/week5/image/img_10.png)

### 중복 코드 상속으로 제거하기

![img_11.png](pocu-note/COMP2500/week5/image/img_11.png)

- 선생과 학생의 공통분모는 사람

![img_12.png](pocu-note/COMP2500/week5/image/img_12.png)
![img_13.png](pocu-note/COMP2500/week5/image/img_13.png)
![img_14.png](pocu-note/COMP2500/week5/image/img_14.png)
![img_15.png](pocu-note/COMP2500/week5/image/img_15.png)

![img_16.png](pocu-note/COMP2500/week5/image/img_16.png)
![img_17.png](pocu-note/COMP2500/week5/image/img_17.png)
![img_18.png](pocu-note/COMP2500/week5/image/img_18.png)

- 아직 상속이 적용된 것이 아님

![img_19.png](pocu-note/COMP2500/week5/image/img_19.png)

- Student 클래스에서 Person 클래스의 함수를 호출했는데, 컴파일 에러 발생

### 상속 문법

![img_20.png](pocu-note/COMP2500/week5/image/img_20.png)

- extends 키워드

![img_21.png](pocu-note/COMP2500/week5/image/img_21.png)

- 생성자 인자 오류

![img_23.png](pocu-note/COMP2500/week5/image/img_23.png)
![img_22.png](pocu-note/COMP2500/week5/image/img_22.png)
![img_24.png](pocu-note/COMP2500/week5/image/img_24.png)

- 상속이 적용된 개체는 부모 개체를 부모 생성자로 초기화하고, 자식 개체를 자식 생성자로 초기화 해야함

### 상속에서 생성자 호출 순서

![img_25.png](pocu-note/COMP2500/week5/image/img_25.png)

- 기본적으로 컴파일러는 부모 생성자를 먼저 호출함

![img_26.png](pocu-note/COMP2500/week5/image/img_26.png)

- 개체 생성 시 아래와 같은 작업이 연속적으로 실행됨
    - 힙 메모리 할당
    - 부모 생성자 호출
    - 자식 생성자 호출

### 부모 생성자를 어떻게 호출할지 정해주지 않으면 부모 클래스의 기본 생성자가 호출됨

![img_27.png](pocu-note/COMP2500/week5/image/img_27.png)
![img_28.png](pocu-note/COMP2500/week5/image/img_28.png)
![img_29.png](pocu-note/COMP2500/week5/image/img_29.png)

- 컴파일러는 부모 클래스의 기본 생성자를 호출

![img_30.png](pocu-note/COMP2500/week5/image/img_30.png)

- 구현에서 Person 클래스는 매개변수가 없는 기본 생성자가 없음
    - 매개변수를 가지는 생성자를 명시하면 컴파일러는 기본 생성자를 추가해주지 않기 때문

![img_31.png](pocu-note/COMP2500/week5/image/img_31.png)
![img_32.png](pocu-note/COMP2500/week5/image/img_32.png)
![img_33.png](pocu-note/COMP2500/week5/image/img_33.png)

- 개체는 생성할 때 부터 유요한 상태를 가져야하기 때문에 Person 클래스에 매개변수를 받지 않는 기본 생성자를 추가하면 개념적으로 문제가 있음

![img_34.png](pocu-note/COMP2500/week5/image/img_34.png)
![img_35.png](pocu-note/COMP2500/week5/image/img_35.png)

- 컴파일러는 매개변수를 받지 않는 기본 생성자가 없기 때문에 구현된 (String, String)을 매개변수로 받는 생성자를 호출해야됨!

![img_36.png](pocu-note/COMP2500/week5/image/img_36.png)
![img_37.png](pocu-note/COMP2500/week5/image/img_37.png)

- 하지만 자식 클래스에서 매개변수로 (String, String)을 넘기지 않음

![img_38.png](pocu-note/COMP2500/week5/image/img_38.png)

- Student 클래스의 생성자에서 (String, String)을 받아 부모 생성자에 전달해주기

### super 키워드

![img_39.png](pocu-note/COMP2500/week5/image/img_39.png)

- 현 개체의 부모 클래스를 가리킴

![img_41.png](pocu-note/COMP2500/week5/image/img_41.png)
![img_40.png](pocu-note/COMP2500/week5/image/img_40.png)
![img_42.png](pocu-note/COMP2500/week5/image/img_42.png)

- 자식에서 부모의 매서드를 호출하는 것은 문제가 없음
- 하지만 부모가 자식의 매서드를 호출할 수 있을까? 특정이 불가능해서 호출하지 못함
    - 정적 매서드가 비정적 멤버 변수에 접근할 수 없는 것과 유사한 개념

### 부모 클래스의 독립성

![img_43.png](pocu-note/COMP2500/week5/image/img_43.png)

- 부모 클래스 자체를 사용할 수 있음
- 내포 클래스와 다르게 Person 개체는 Student 개체에 접근할 수 없음
    - 부모 클래스도 외부 클래스임

### Teacher 클래스 예시

![img_44.png](pocu-note/COMP2500/week5/image/img_44.png)
![img_45.png](pocu-note/COMP2500/week5/image/img_45.png)

```java
public class Teacher extends Person {
    private Department department;

    public Teacher(String firstName, String lastName, Department department) {
        this.department = department;
        super(firstName, lastName);
    }

    public Department getDepartment() {
        return this.department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
```

이 코드처럼 부모 생성자를 먼저 호출하지 않고, 자식 생성자의 코드를 실행하면 컴파일 오류 발생

![img_46.png](pocu-note/COMP2500/week5/image/img_46.png)

### 상속을 적용한 클래스 다이어그램

![img_47.png](pocu-note/COMP2500/week5/image/img_47.png)
![img_48.png](pocu-note/COMP2500/week5/image/img_48.png)

```java
public class Teacher extends Person {
    private Department department;

    public Teacher(Department department) {
        super("하드코딩값", "하드코딩값");
        this.department = department;
    }

    public Department getDepartment() {
        return this.department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
```

위와 같이 자식 클래스(여기선 Teacher 클래스만 예시로 듬)에서 매개변수로 String을 전달받지 않고, 단순히 하드코딩된 값을 부모 생성자에 넘겨도 문법적 오류는 없음

### 이메일 주소 추가

![img_49.png](pocu-note/COMP2500/week5/image/img_49.png)
![img_50.png](pocu-note/COMP2500/week5/image/img_50.png)

- 선생은 이메일을 바꿀 수 있고, 학생은 이메일을 바꿀 수 없음
- 참고로 이메일은 고유 식별자로 사용할 수 있음

![img_51.png](pocu-note/COMP2500/week5/image/img_51.png)

- 이메일의 특성이 Student, Teacher 클래스에 다르게 적용되는데, 이메일은 어떤 클래스의 멤버 변수로 저장하지?

![img_52.png](pocu-note/COMP2500/week5/image/img_52.png)

- 공통의 멤버 변수는 부모 클래스에 구현하자

![img_53.png](pocu-note/COMP2500/week5/image/img_53.png)

- 이메일 주소 초기화는 처음 개체를 생성할 때, 즉 생성자에서 처리하면 됨

![img_54.png](pocu-note/COMP2500/week5/image/img_54.png)

- 개체 생성할 때 이름값을 받고, 이를 이용해 이메일 초기화하기

![img_55.png](pocu-note/COMP2500/week5/image/img_55.png)
![img_56.png](pocu-note/COMP2500/week5/image/img_56.png)
![img_57.png](pocu-note/COMP2500/week5/image/img_57.png)

- Person 생성자에서 이메일 멤버변수를 초기화
- Person 클래스에 getEmail() 메서드를 구현
    - Student, Teacher에서 공통으로 사용할 수 있게 함

![img_58.png](pocu-note/COMP2500/week5/image/img_58.png)

- 코드 재사용성이 높아졌음

![img_59.png](pocu-note/COMP2500/week5/image/img_59.png)

- Teacher 클래스에만 이름을 바꿀 수 있게 구현해야함

![img_60.png](pocu-note/COMP2500/week5/image/img_60.png)
![img_61.png](pocu-note/COMP2500/week5/image/img_61.png)

- 컴파일 오류 발생

![img_62.png](pocu-note/COMP2500/week5/image/img_62.png)
![img_63.png](pocu-note/COMP2500/week5/image/img_63.png)

- 접근 제어자 문제

![img_64.png](pocu-note/COMP2500/week5/image/img_64.png)
![img_65.png](pocu-note/COMP2500/week5/image/img_65.png)
![img_66.png](pocu-note/COMP2500/week5/image/img_66.png)

### protected 접근 제어자

![img_67.png](pocu-note/COMP2500/week5/image/img_67.png)

- 참고로 자식 클래스(Student, Teacher)에서 super로 Person 클래스의 생성자를 호출할 수 있었던 이유는, Person의 생성자가 public 접근제어자를 가졌기 때문

![img_68.png](pocu-note/COMP2500/week5/image/img_68.png)
![img_69.png](pocu-note/COMP2500/week5/image/img_69.png)
![img_70.png](pocu-note/COMP2500/week5/image/img_70.png)

- this로 부모의 멤버를 호출할 수 있음
- 애매한 개념
- 명백하게 super 사용하는 것 추천

![img_71.png](pocu-note/COMP2500/week5/image/img_71.png)
![img_72.png](pocu-note/COMP2500/week5/image/img_72.png)

- 클래스 다이어그램에서 protected는 #으로 표현

![img_73.png](pocu-note/COMP2500/week5/image/img_73.png)

### 전임 강사와 파트 강사 예시

![img_74.png](pocu-note/COMP2500/week5/image/img_74.png)
![img_75.png](pocu-note/COMP2500/week5/image/img_75.png)
![img_76.png](pocu-note/COMP2500/week5/image/img_76.png)
![img_77.png](pocu-note/COMP2500/week5/image/img_77.png)
![img_78.png](pocu-note/COMP2500/week5/image/img_78.png)

- 상속의 상속 개념이 등장

![img_79.png](pocu-note/COMP2500/week5/image/img_79.png)
![img_80.png](pocu-note/COMP2500/week5/image/img_80.png)

- 클래스 구현 시 가정1
    - 시간 강사는 일할시간이 정해진 경우, 일하는 시간 멤버 변수를 초기화한 상태로 개체 생성
    - 시간 강사는 일할시간이 정해지지 않은 경우, 일하는 시간 멤버 변수를 기본값(0)으로 초기화한 상태로 개체 생성
- 클래스 구현 시 가정2
    - 전임 강사는 채용 시 오피스를 배정받지 않기 때문에, 오피스 번호 멤버 변수는 기본값으로 초기화
        - 기본값 0은 올바르지 않은 오피스로 간주

![img_81.png](pocu-note/COMP2500/week5/image/img_81.png)
![img_82.png](pocu-note/COMP2500/week5/image/img_82.png)
![img_83.png](pocu-note/COMP2500/week5/image/img_83.png)
![img_84.png](pocu-note/COMP2500/week5/image/img_84.png)

### 상속의 상속

![img_85.png](pocu-note/COMP2500/week5/image/img_85.png)

- 부모 클래스는 일반적
- 자식 클래스는 구체적

### is-a

![img_86.png](pocu-note/COMP2500/week5/image/img_86.png)

- 자식 클래스 is-a 부모 클래스

### has-a

![img_87.png](pocu-note/COMP2500/week5/image/img_87.png)

### 상속 vs 컴포지션

![img_88.png](pocu-note/COMP2500/week5/image/img_88.png)
![img_89.png](pocu-note/COMP2500/week5/image/img_89.png)

- 개념적으로 is-a, has-a를 구분해서 상속, 컴포지션을 적용하자

### 상속과 자료형

![img_90.png](pocu-note/COMP2500/week5/image/img_90.png)
![img_91.png](pocu-note/COMP2500/week5/image/img_91.png)

- 자식 클래스 개체를 부모 클래스 변수에 대입해도 컴파일 오류는 발생하지 않음

![img_92.png](pocu-note/COMP2500/week5/image/img_92.png)

- 부모 클래스 배열에 넣어도 괜찮죠

![img_93.png](pocu-note/COMP2500/week5/image/img_93.png)

- 이것이 is-a 관계

![img_94.png](pocu-note/COMP2500/week5/image/img_94.png)
![img_95.png](pocu-note/COMP2500/week5/image/img_95.png)

- 반대로 부모 클래스 개체를 자식 클래스 변수에 대입하면 컴파일 안 됨
    - is-a 개념에 위배
- 실제로 개체가 Student 개체라도, Person 자료형 변수에 대입한 뒤, 다시 Student 자료형 변수에 대입할 수 없음
    - 실제로 개체가 Student 자료형임은 실행 중 확인할 수 있음

![img_96.png](pocu-note/COMP2500/week5/image/img_96.png)
![img_97.png](pocu-note/COMP2500/week5/image/img_97.png)
![img_98.png](pocu-note/COMP2500/week5/image/img_98.png)

- 부모 클래스 변수를 자식 클래스 변수에 대입하는 것을 허용하면 부모 클래스 변수의 실행 중 자료형은 실행 중에 알 수 있기 때문에 컴파일러가 대입을 막음

![img_99.png](pocu-note/COMP2500/week5/image/img_99.png)

- 반대로 자식 개체에서 부모 클래스의 매서드는 호출할 수 있음
    - 부모 클래스의 매서드 접근 제어자가 private이 아니라는 가정

![img_100.png](pocu-note/COMP2500/week5/image/img_100.png)
![img_101.png](pocu-note/COMP2500/week5/image/img_101.png)

- 컴파일러는 현재 변수의 자료형을 바탕으로 판단하기 때문에, 부모 자료형 변수에서 자식 매서드를 호출할 수 없음
    - 부모 입장에서 자신을 상속받는 자식은 무수히 많을 수 있음

### 상속과 암시적 캐스팅

![img_102.png](pocu-note/COMP2500/week5/image/img_102.png)
![img_103.png](pocu-note/COMP2500/week5/image/img_103.png)
![img_104.png](pocu-note/COMP2500/week5/image/img_104.png)

- 자식을 부모에 대입하는 것은 컴파일러가 암시적으로 캐스팅 해줌
    - is-a 관계 개념에서 자식을 부모에 대입하는 것은 문제가 없음

### 상속과 명시적 캐스팅

![img_105.png](pocu-note/COMP2500/week5/image/img_105.png)
![img_106.png](pocu-note/COMP2500/week5/image/img_106.png)

- 반대로 부모를 자식에 대입할 때는 명시적 캐스팅이 필요함
    - 실행 중 반드시 대입한 변수의 자료형과 개체의 자료형이 호환되어야함

![img_107.png](pocu-note/COMP2500/week5/image/img_107.png)

- 실행 중 호환될 가능성이 전혀 없는 경우 컴파일러가 에러를 발생
    - 상속 관계가 아닌 경우

![img_108.png](pocu-note/COMP2500/week5/image/img_108.png)

- 부모 클래스 변수가 실제로 실행 중 자식 클래스 개체일 수는 있음
    - 가능성 0%는 아님

![img_109.png](pocu-note/COMP2500/week5/image/img_109.png)

- 이건 실행 중 가능성 0%라 컴파일러가 미리 막아줌

![img_110.png](pocu-note/COMP2500/week5/image/img_110.png)

### 컴파일러가 잡을 수 없는 실행 중 문제는 예외로 발생

![img_111.png](pocu-note/COMP2500/week5/image/img_111.png)
![img_112.png](pocu-note/COMP2500/week5/image/img_112.png)

- 실행 중 person 변수의 개체는 Student 자료형인데, 이를 Teacher 클래스로 캐스팅해서 예외가 발생
    - ClassCastException

### instanceof 연산자

![img_113.png](pocu-note/COMP2500/week5/image/img_113.png)

- 예외를 피할 수 있다면 피하는 것이 좋음
- instanceof 연산자를 사용하면 ClassCastException 예외를 방지할 수 있음

![img_114.png](pocu-note/COMP2500/week5/image/img_114.png)
![img_115.png](pocu-note/COMP2500/week5/image/img_115.png)

- 실행 중 어떤 변수(부모형 변수)에 저장된 개체가 어떤 자료형인이 알아내는 방법이 필요함
    - RTTI(run time type identification)

![img_116.png](pocu-note/COMP2500/week5/image/img_116.png)
![img_117.png](pocu-note/COMP2500/week5/image/img_117.png)

- 이렇게 예외를 방지할 수 있음

![img_118.png](pocu-note/COMP2500/week5/image/img_118.png)

- 여기서 '특정 클래스'는 클래스 하나를 지칭
    - 상속 관계에서도 instanceof 연산자를 사용할 수 있음

![img_119.png](pocu-note/COMP2500/week5/image/img_119.png)
![img_120.png](pocu-note/COMP2500/week5/image/img_120.png)

- PartTimeTeacher 클래스는 PartTimeTeacher이면서, Teacher임
    - is-a 관계
- 부모 클래스를 instanceof의 피연산자로 사용하면 변수가 자식 클래스에 속하면 true

### getClass()

![img_121.png](pocu-note/COMP2500/week5/image/img_121.png)

- Class 클래스에는 클래스 정보를 제공

![img_122.png](pocu-note/COMP2500/week5/image/img_122.png)
![img_123.png](pocu-note/COMP2500/week5/image/img_123.png)

- 클래스 이름을 문자열로 반환
    - 패키지 경로를 포함

![img_124.png](pocu-note/COMP2500/week5/image/img_124.png)

- 로그에 보통 활용

![img_125.png](pocu-note/COMP2500/week5/image/img_125.png)

- RTTI는 성능에 별로 좋지 않아유
    - 실행 중에 뭔가 하면 성능이 별로임
- C++에서는 컴파일할 때 이 기능을 꺼버릴 수 있음

![img_126.png](pocu-note/COMP2500/week5/image/img_126.png)

- getClass() 매서드는 이미 어떤 클래스에 구현되어있음

### Object

![img_127.png](pocu-note/COMP2500/week5/image/img_127.png)
![img_128.png](pocu-note/COMP2500/week5/image/img_128.png)

- equals(), toString()도 Object 클래스에서 제공함

## 코드보기 Base Entity

- 데이터 베이스에 저장되는 entity

```java
package academy.pocu.comp2500samples.w05.baseentity;

import java.time.OffsetDateTime;
import java.util.UUID;

public class BaseEntity {
    private UUID id;
    private OffsetDateTime createdDateTime;
    private OffsetDateTime modifiedDateTime;

    public BaseEntity(UUID id, OffsetDateTime createdDateTime, OffsetDateTime modifiedDateTime) {
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

    public void setModifiedDateTime(OffsetDateTime modifiedDateTime) {
        this.modifiedDateTime = modifiedDateTime;
    }
}
```

- id, 생성시간, 수정시간 모두 DB에 저장할 때 유용한 정보
    - 모든 테이블에 이 entity 클래스의 자식 클래스를 넣는다고 생각하면 됨
- createdDataTime, id는 바꿀 수 없다는 가정
    - 그래서 setter가 없음

```java
package academy.pocu.comp2500samples.w05.baseentity;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.UUID;

public class Course extends BaseEntity {
    private String courseCode;
    private String title;
    private ArrayList<CourseTerm> courseTerms;

    public Course(UUID id,
                  OffsetDateTime createdDateTime,
                  OffsetDateTime modifiedDateTime,
                  String courseCode,
                  String title) {
        super(id, createdDateTime, modifiedDateTime);
        this.courseCode = courseCode;
        this.title = title;
        this.courseTerms = new ArrayList<>();
    }

    public String getCourseCode() {
        return this.courseCode;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public ArrayList<CourseTerm> getCourseTerms() {
        return this.courseTerms;
    }

    public void setCourseTerms(ArrayList<CourseTerm> courseTerms) {
        this.courseTerms = courseTerms;
    }

    // helper methods
    public void addCourseTerm(int term) {
        CourseTerm courseTerm = new CourseTerm(UUID.randomUUID(),
                OffsetDateTime.now(ZoneOffset.UTC),
                OffsetDateTime.now(ZoneOffset.UTC),
                this,
                term);

        this.courseTerms.add(courseTerm);
    }
}
```

- 과목은 하나지만 여러 학기에 개설되기 때문에 Course 클래스는 멤버 변수로 CourseTerm 개체의 컬랙션을 가지고 있음
    - 생성자에서 빈 리스트로 초기화
        - 과목을 만들 때 언제 학기에 개설되는지는 미정이라고 가정

- courseCode는 setter가 없음
    - 개체 생성후 바뀌지 않는 값, 가정, 구현자의 의도

```java
package academy.pocu.comp2500samples.w05.baseentity;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.UUID;

public class CourseTerm extends BaseEntity {
    private int term;
    private Course course;
    private ArrayList<Student> students;

    public CourseTerm(UUID id, OffsetDateTime createdDateTime, OffsetDateTime modifiedDateTime, Course course, int term) {
        super(id, createdDateTime, modifiedDateTime);
        this.course = course;
        this.term = term;
        this.students = new ArrayList<>();
    }

    public int getTerm() {
        return this.term;
    }

    public Course getCourse() {
        return this.course;
    }

    public ArrayList<Student> getStudents() {
        return this.students;
    }

    public void setStudents(ArrayList<Student> students) {
        this.students = students;
    }

    // helper methods
    public void addStudent(Student student) {
        this.students.add(student);
    }

    public int getStudentCount() {
        return this.students.size();
    }
}
```

```java
package academy.pocu.comp2500samples.w05.baseentity;

import java.time.OffsetDateTime;
import java.util.UUID;

public class Student extends BaseEntity {
    private String name;
    private String email;
    private String nickname;

    public Student(UUID id,
                   OffsetDateTime createdDateTime,
                   OffsetDateTime modifiedDateTime,
                   String name,
                   String email,
                   String nickname) {
        super(id, createdDateTime, modifiedDateTime);
        this.name = name;
        this.email = email;
        this.nickname = nickname;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public String getNickname() {
        return this.nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
```

```java
package academy.pocu.comp2500samples.w05.baseentity;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.UUID;

public class Program {
    public static void main(String[] args) {
        UUID id = UUID.randomUUID();
        OffsetDateTime now = OffsetDateTime.now(ZoneOffset.UTC);

        Student student1 = new Student(id,
                now,
                now,
                "Tom",
                "Smith",
                "tommy hammer");

        printStudentInformation(student1);

        id = UUID.randomUUID();
        now = OffsetDateTime.now(ZoneOffset.UTC);

        BaseEntity student2 = new Student(id,
                now,
                now,
                "Kevin",
                "Park",
                "KtotheP");

        // Compile Error!
        // printStudentInformation(student2);

        printStudentInformation((Student) student2);

        ((Student) student2).setNickname("KevinInThePark");

        now = OffsetDateTime.now(ZoneOffset.UTC);
        student2.setModifiedDateTime(now);

        printStudentInformation((Student) student2);

        id = UUID.randomUUID();
        now = OffsetDateTime.now(ZoneOffset.UTC);

        Course comp2500 = new Course(id,
                now,
                now,
                "COMP2500",
                "Java");

        id = UUID.randomUUID();
        now = OffsetDateTime.now(ZoneOffset.UTC);

        CourseTerm term202005 = new CourseTerm(id,
                now,
                now,
                comp2500,
                202005);

        comp2500.getCourseTerms().add(term202005);

        printCourseInformation(comp2500);

        comp2500.addCourseTerm(202009);

        printCourseInformation(comp2500);

        term202005.addStudent(student1);
        term202005.addStudent((Student) student2);

        comp2500.setTitle("Object Oriented Programming and Design (Java)");

        printCourseInformation(comp2500);
    }

    private static void printStudentInformation(Student student) {
        System.out.println("student:");

        printBaseEntityInformation(student);

        System.out.printf("    name: %s%s",
                student.getName(),
                System.lineSeparator());

        System.out.printf("    email: %s%s",
                student.getEmail(),
                System.lineSeparator());

        System.out.printf("    nickname: %s%s",
                student.getNickname(),
                System.lineSeparator());
    }

    private static void printCourseInformation(Course course) {
        System.out.println("course:");

        printBaseEntityInformation(course);

        System.out.printf("    course code: %s%s",
                course.getCourseCode(),
                System.lineSeparator());

        System.out.printf("    title: %s%s",
                course.getTitle(),
                System.lineSeparator());

        System.out.println("    course terms:");

        for (CourseTerm courseTerm : course.getCourseTerms()) {
            System.out.printf("        term: %s%s",
                    courseTerm.getTerm(),
                    System.lineSeparator());
            System.out.printf("        # students: %s%s",
                    courseTerm.getStudentCount(),
                    System.lineSeparator());
        }
    }

    private static void printBaseEntityInformation(BaseEntity entity) {
        System.out.printf("    id: %s%s",
                entity.getID(),
                System.lineSeparator());

        System.out.printf("    created: %s%s",
                entity.getCreatedDateTime(),
                System.lineSeparator());

        System.out.printf("    modified: %s%s",
                entity.getModifiedDateTime(),
                System.lineSeparator());
    }
}
```

- `printStudentInformation(student2);` 바로 호출 불가능
    - 컴파일 에러 발생
    - 부모 클래스 변수를 자식 클래스 매개변수로 념겼음
    - 명시적 캐스팅하면 넘길 수 있음
        - `term202005.addStudent((Student) student2);`

## 코드보기: 클래스 정보 찾기

```java
package academy.pocu.comp2500samples.w05.classinfo;

public class Vector {
    private int x;
    private int y;

    public Vector(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return this.x;
    }

    public int getY() {
        return this.y;
    }

    public Vector add(Vector other) {
        int sumX = this.x + other.x;
        int sumY = this.y + other.y;

        return new Vector(sumX, sumY);
    }

    public Vector subtract(Vector other) {
        int diffX = this.x - other.x;
        int diffY = this.y - other.y;

        return new Vector(diffX, diffY);
    }

    public int dot(Vector other) {
        int dotProduct = this.x * other.x + this.y * other.y;
        return dotProduct;
    }
}
```

- `dot()` 는 벡터의 내적

```java
package academy.pocu.comp2500samples.w05.classinfo;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class Program {
    public static void main(String[] args) {
        Vector vector = new Vector(2, 5);

        Class vectorClass = vector.getClass();

        System.out.printf("Package name: %s%s",
                vectorClass.getPackageName(),
                System.lineSeparator());

        System.out.printf("Type name: %s%s",
                vectorClass.getTypeName(),
                System.lineSeparator());

        Method[] methods = vectorClass.getMethods();

        System.out.printf("# methods: %d%s",
                methods.length,
                System.lineSeparator());

        methods = vectorClass.getDeclaredMethods();

        System.out.printf("# declared methods: %d%s",
                methods.length,
                System.lineSeparator());

        for (Method m : methods) {
            System.out.printf("    - %s%s",
                    m.getName(),
                    System.lineSeparator());
        }

        try {
            Method method = vectorClass
                    .getMethod("toString");

            System.out.println(method.toString());
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }

        try {
            Method method = vectorClass
                    .getDeclaredMethod("toString");

            System.out.println(method.toString());
        } catch (NoSuchMethodException e) {
            System.out.println("No such method!");
        }

        try {
            Method method = vectorClass.getDeclaredMethod("changeName");

            System.out.println(method.toString());
        } catch (NoSuchMethodException e) {
            System.out.println("No such method!");
        }

        try {
            Method method = vectorClass.getDeclaredMethod("add", Vector.class);

            System.out.println(method.toString());
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }

        Field[] fields = vectorClass
                .getDeclaredFields();

        System.out.printf("# member vars: %d%s",
                fields.length,
                System.lineSeparator());

        Class objectClass = vectorClass
                .getSuperclass();

        System.out.printf("Superclass: %s%s",
                objectClass.getTypeName(),
                System.lineSeparator());
    }
}
```

- `getMethods()` 호출 시 부모 클래스의 메서드까지 모두 포함
- `getDeclaredMethods` 는 이 클래스에 선언된 메서드만 가져옴
- `Method method = vectorClass.getDeclaredMethod("add", Vector.class);`
    - add라는 이름을 가지고, Vector 클래스 매개변수 1개를 받는 메서드 찾기
    - add매서드 오버로딩이 많은 경우 유용하겠죠?
