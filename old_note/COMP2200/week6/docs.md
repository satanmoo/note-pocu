# week6

## 구조체

- 여러 다른 데이터를 하나로 묶어주는 개념

### 구조체란?

![img.png](old_note/COMP2200/week6/img.png)

- struture: 구조물, 구조체
- 클래스로 가기 전 중간 단계
- 함수는 없고, 데이터만 모아놓은 것

### C 에서는 모두 값형 구조체도 값형

![img_1.png](old_note/COMP2200/week6/img_1.png)

- 참조형처럼 쓰고 싶으면 주소를 전달하면 됨

### 구조체의 필요성

![img_2.png](old_note/COMP2200/week6/img_2.png)
![img_3.png](old_note/COMP2200/week6/img_3.png)
![img_4.png](old_note/COMP2200/week6/img_4.png)

- 사람은 개념을 묶어서 봄

![img_5.png](old_note/COMP2200/week6/img_5.png)

- 실수를 막아준다.

![img_6.png](old_note/COMP2200/week6/img_6.png)

### 컴파일러는 매개변수 중에서 같은 형의 순서를 구분할 수 없음

![img_7.png](old_note/COMP2200/week6/img_7.png)

- 몽말인지 알지
- 개체지향으로 가는 과정

### 컴파일러는 묵시적으로 변환 가능한 자료형이 실수(mistake)인지 알 수 없음

![img_8.png](old_note/COMP2200/week6/img_8.png)

- money는 float형인데, 실수로 여기에 int형 exp를 넣어도, 묵시적으로 형변환이 된다.
- 컴파일러는 이런 실수를 실수로 인식하지 못함.

### 매개변수 목록이 길어질수록 더 힘듬 ㅋㅋㅋ

![img_9.png](old_note/COMP2200/week6/img_9.png)

### 중간에 매개변수 순서를 바꿔도 문제

![img_10.png](old_note/COMP2200/week6/img_10.png)
![img_11.png](old_note/COMP2200/week6/img_11.png)
![img_12.png](old_note/COMP2200/week6/img_12.png)

## 실수를 막는법: atomic operation [후기 강조]

![img_13.png](old_note/COMP2200/week6/img_13.png)

- 뭔가 개체지향의 setter와 닮음
- 근데 이 방식도 빼먹을 수 있어서
- 위 코드에서 잘못된 날짜에 컴퓨터 포멧을 알 수도...

![img_14.png](old_note/COMP2200/week6/img_14.png)

- 원자성을 보장하는 연산(atomic operation)!
- 어떤 함수를 호출했을 때 해야할 일 모두 다하고, 결과를 한 번에 돌려주는 개념이 원자성

## 구조체의 선언 및 사용

- 결과를 한 번에 돌려주려면 데이터를 모으는 개념이 필요함
- 구조체

![img_15.png](old_note/COMP2200/week6/img_15.png)

### 구조체의 선언

![img_16.png](old_note/COMP2200/week6/img_16.png)

```c++
struct data {
    int year;
    int month;
    int day;
};
```

- 세미콜론 잊지 말 것

![img_17.png](old_note/COMP2200/week6/img_17.png)

- date형이라는 새로운 형을 만든다.

![img_18.png](old_note/COMP2200/week6/img_18.png)

- 3개의 멤버 변수를 가진 date형을 만든다.

### 구조체 변수 선언 및 사용하기

![img_19.png](old_note/COMP2200/week6/img_19.png)
![img_20.png](old_note/COMP2200/week6/img_20.png)
![img_21.png](old_note/COMP2200/week6/img_21.png)
![img_22.png](old_note/COMP2200/week6/img_22.png)

- 새로운 타입처럼 사용하면 된다.
- 멤버 변수에 접근할 때는 `.`을 사용한다.
    - 클래스 개체에서 접근하듯이

## 구조체를 지역 변수로 선언하면 당연히 0으로 초기화 안 됨

![img_23.png](old_note/COMP2200/week6/img_23.png)

- 선언 시점에는 그 전에 스택에 위치에 있던 쓰레기값이 들어감
- 지역변수는 반드시 직접 초기화하자!

## 구조체는 장황하다.

![img_24.png](old_note/COMP2200/week6/img_24.png)
![img_25.png](old_note/COMP2200/week6/img_25.png)

- struct date 이렇게 쓰는게 너무 길다. ㅠㅠ

## typedef 사용법

![img_26.png](old_note/COMP2200/week6/img_26.png)

- stddef.h의 size_t처럼
- 별명 짓는겁니다.

![img_27.png](old_note/COMP2200/week6/img_27.png)

- 별명을 짓기 때문에, 서로서로 호환이 됩니다!!!
- size_t <=> unsigned int
- 물론 size_t는 플랫폼마다 다를 수 있음. 각 플랫폼에서 정의한 것이기 때문에

## 구조체에 typedef 사용하기1

![img_28.png](old_note/COMP2200/week6/img_28.png)

- 와! 깔끔하다.
- typedef struct date date_t;

## 구조체에 typedef 사용하기2, 3

![img_29.png](old_note/COMP2200/week6/img_29.png)

- struct {}을 바로 typedef로 묶어버림
- struct의 이름(date)을 생략하고 바로 date_t로 사용 가능

### 각 사용법의 차이점

![img_30.png](old_note/COMP2200/week6/img_30.png)

- 사용법3으로 쓰면 struct date date; 이렇게는 못 쓰죠. 구조체 이름이 없으니깐 ㅋㅋ

## 열거형 enum도 typedef를 사용할 수 있음

![img_31.png](old_note/COMP2200/week6/img_31.png)

- enum을 생략하기 위해서 ㅇㅇ
- enum game_role로 쓰는 것보다는, game_role_t로 쓰는게 더 깔끔하다.

## 코딩 표준

![img_32.png](old_note/COMP2200/week6/img_32.png)

- 다른 언어와 차이가 없게 ㅇㅅㅇ!

## 구조체 변수 초기화 하기

![img_33.png](old_note/COMP2200/week6/img_33.png)

- 선언 시점에는 스택의 쓰레기 값 들어감

![img_34.png](old_note/COMP2200/week6/img_34.png)

- 하드웨어에 구조체 개념은 없음
- 언어 레벨에서 편리한 개념(컴파일러만 알죠)

## 메모리로 구조체 개념이 하드웨어에 있는지 확인해보자

![img_35.png](old_note/COMP2200/week6/img_35.png)
![img_36.png](old_note/COMP2200/week6/img_36.png)

- mov가 대입하다는 어셈블리어임
- 여튼 완전히 똑같음!!!

## 컴파일러 입장에서 보자

![img_37.png](old_note/COMP2200/week6/img_37.png)
![img_38.png](old_note/COMP2200/week6/img_38.png)

- 컴파일러가 기계가 이해하는 코드로 만들 때 알아서 똑같이 만들어줌
- 배열처럼 스택에 순차적으로 쌓이는 개념
    - 여기서 응용하면 구조체 변수의 주소는 구조체의 첫번재 멤버의 주소와 동일함!

## 또 다른 구조체 초기화 방법

![img_39.png](old_note/COMP2200/week6/img_39.png)

- 배열 초기화할 때 봤던 방법
- 컴파일러가 이 식 보면, 알아서 memset으로 바꿔서 최적화 해줌

![img_40.png](old_note/COMP2200/week6/img_40.png)

- 이거도 가능?

![img_41.png](old_note/COMP2200/week6/img_41.png)
![img_42.png](old_note/COMP2200/week6/img_42.png)

- 가능한데, 실수하니까 쓰지말자.
- 본래의 구조체의 목적을 생각해보삼

![img_43.png](old_note/COMP2200/week6/img_43.png)

- 요소 나열법이 유용한 경우가 딱 하나 있긴한데
- const로 선언된 구조체 멤버를 초기화할 때
- 근데 const 멤버 변수를 사용하는 것은 안티 패턴

## 구조체 매개변수

![img_44.png](old_note/COMP2200/week6/img_44.png)
![img_45.png](old_note/COMP2200/week6/img_45.png)

- 값형임 ㅋㅋ

![img_46.png](old_note/COMP2200/week6/img_46.png)

- pass by value
- 구조체 사본을 함수에 넘긴다.

## 함수 인자로 전달할 때 구조체와 그냥 기본자료형은 똑같이 작동하나요?

![img_47.png](old_note/COMP2200/week6/img_47.png)
![img_48.png](old_note/COMP2200/week6/img_48.png)

- 예

![img_49.png](old_note/COMP2200/week6/img_49.png)

- 완전히 똑같음 ㅋㅋ;
- 사실 함수는 int형 매개변수 3개 받는거임

## 구조체의 원본을 바꾸려면? 구조체의 포인터

![img_50.png](old_note/COMP2200/week6/img_50.png)
![img_51.png](old_note/COMP2200/week6/img_51.png)

- 괄호가 필요한 이유는?
- 연산자 우선순위

## -> 연산자

![img_52.png](old_note/COMP2200/week6/img_52.png)

- 괄호 + . 합친거 임

## 구조체 매개변수 베스트 프렉티스

### 매개변수에 주소를 전달할까? 값을 복사할까? 데이터 크기를 고려하라

![img_53.png](old_note/COMP2200/week6/img_53.png)

- 구조체의 경우 배열처럼 데이터의 크기가 클 수 있죠?
- 그래서 배열을 함수의 매개변수로 전달할 때 첫번째 원소의 주소를 전달했음
- 구조체도 마찬가지로 구조체의 주소를 전달해주는게 좋음
    - 스택 메모리 너무 많이 쓰잖아요~
    - 매개변수는 모두 스택 메모리에 올라감
- 주소를 전달했기 때문에 원본 변경이 걱정이면? const!

![img_54.png](old_note/COMP2200/week6/img_54.png)

### 구조체 매개변수 vs 여러 개의 개별 변수

![img_55.png](old_note/COMP2200/week6/img_55.png)
![img_56.png](old_note/COMP2200/week6/img_56.png)

- 이건 그냥 구조체를 전달하는게 좋다고 알면됨

## 함수 반환값으로서의 구조체

![img_57.png](old_note/COMP2200/week6/img_57.png)

- 구조체를 반환하면, 여러 개 값을 반환하는 격
- 복사에 의한 반환

### 반환값을 바로 구조체 변수에 대입할 수 있음

![img_58.png](old_note/COMP2200/week6/img_58.png)
![img_59.png](old_note/COMP2200/week6/img_59.png)

- 어떤 컴파일러는 memcpy로 통채로 복사함
    - 이게 최적화임
- 하나씩 대입보다, 한 번에 메모리 싹 복사하는게

## 구조체의 배열

![img_60.png](old_note/COMP2200/week6/img_60.png)

- 기본 자료형이랑 다르지 않다고 생각하는게 편하다.
- 구조체마다 자료 크기가 딱 정해져있으니 컴파일러가 다른 기본 자료형처럼 처리할 수 있죠
- 예시처럼 int 3개면 3 * sizeof(int)

![img_61.png](old_note/COMP2200/week6/img_61.png)
![img_62.png](old_note/COMP2200/week6/img_62.png)

## 배열의 각 요소의 크기를 알아볼까요?

- 배열은 촘촘하게 모든 요소가 정렬됨

![img_63.png](old_note/COMP2200/week6/img_63.png)

- sizeof(구조체) 해보면 됨
- sizeof(date_t)도 됨
- 구조체 배열에서 0번째 원소와 1번째 원소를 (char*)로 형변환해서 차이를 구하면
    - char(1byte) 기준 offset을 구할 수 있죠!
    - 즉 몇 바이트 차이나는지 구할 수 있음
    - 이것이 배열의 원소의 크기를 알아내는 방법, 여기서는 배열의 원소가 구조체라 구조체 크기를 알 수 있음

![img_64.png](old_note/COMP2200/week6/img_64.png)

- 실제 메모리 보면 각각 12바이트씩 잘 들어가있죵

## 퀴즈

![img_65.png](old_note/COMP2200/week6/img_65.png)
![img_66.png](old_note/COMP2200/week6/img_66.png)

## 얕은 복사, 깊은 복사

![img_67.png](old_note/COMP2200/week6/img_67.png)

- 사고의 시작은 `포인터가 무엇을 저장하는가?`이다.
- 구조체 변수에 구초체를 그대로 대입하면, 모든 구조체 멤버 변수를 대입한 것과 같다.
- 각각이 포인터라서, 주소값을 가지고 있고, 이 주소값이 저장된다.
- 실제로 문자열은 어떤 스택에 저장되있겠죠? 주소값도 마찬가지로 스택에 저장되있죠

![img_68.png](old_note/COMP2200/week6/img_68.png)

- name.lastname[0] = 'N'; 이렇게 하면, 스택에 복사해온 char[]의 원소가 변경된다.
- clone.lastname, name.lastname은 같은 주소값을 가지고 있다.
- 그래서 clone.lastname[0] = 'N'; 하면, name.lastname[0]도 바뀐다.

## 얕은 복사

![img_69.png](old_note/COMP2200/week6/img_69.png)

- 실제 데이터가 아니라 주소를 복사하는 것을 얕은 복사라고 함
    - 모든 데이터를 깊게 들어가 복사한게 아니다.

## 깊은 복사

![img_70.png](old_note/COMP2200/week6/img_70.png)

- 구조체 변수마다 독자적인 메모리 공간을 만들어주고, 문자열 내용을 복사해야함

## 파일을 읽고 쓸 때도 비슷한 문제: 얕은 복사와 깊은 복사

```c++
typedef struct {
    char* firstname;
    char* lastname;
} name_t;
```

![img_71.png](old_note/COMP2200/week6/img_71.png)

- names는 구조체의 배열
- 구조체의 배열의 각 원소를 초기화했음
    - 근데 각 원소가 구조체니까, 구조체의 멤버 변수를 초기화한거임
    - names[0].firstname = "Teemo";
- 근데 근데 구조체의 멤버 변수가 char*임. 따라서 각 멤버 변수는 char 배열의 첫번째 원소의 주소를 값으로 가짐
    - 여기서는 문자열을 char* 형 변수에 바로 대입했기 때문에 데이터섹션의 주소값을 가짐(읽기 전용)

![img_72.png](old_note/COMP2200/week6/img_72.png)

- 파일 쓰기
- 멤버 변수의 주소값(0x009c3006)

![img_73.png](old_note/COMP2200/week6/img_73.png)

- 방금 쓴 파일을 그대로 읽기

![img_74.png](old_note/COMP2200/week6/img_74.png)

- 잘 읽을 수도 있고, 디버그 툴에서 예외를 발생할 수도 있음

![img_75.png](old_note/COMP2200/week6/img_75.png)

- 파일에 저장된 값은, 구조체 변수의 값들이다.
- 이 값이 포인터로 주소를 저장했음

![img_76.png](old_note/COMP2200/week6/img_76.png)

- fread로 읽어올 때도 값을 정상적으로(주소를) 읽어왔습니다.
    - 멤버 변수의 주소값(0x009c3006) 동일함
- 프로그램을 껐다가 켰으니, 메모리의 주소에 저장된 값은 더 이상 유효하지 않다.
- 프로그램을 켜기 전과 후 메모리의 주소에 들어있는 값은 당연히 달라질 수 있습니다.

## 구조체의 크기를 확인해보자

![img_77.png](old_note/COMP2200/week6/img_77.png)

- 8바이트네요?
- 구조체 멤버 변수 2개, 둘다 char* 4바이트(32비트 컴퓨터의 워드 단위)니까 총 8바이트네요
- 결국 그래서 주소를 파일에 저장해봤자, 아무런 의미가 없다는 것을 알 수 있다.
    - 프로그램을 껐다키면, 메모리에 저장된 값은 더 이상 유효하지 않다.
    - 멤버 변수의 주소값(0x009c3006)에 똑같은 문자열이 저장된다는 보장이 없음
    - 파일에 얕은복사를 했는데, 프로그램을 끄고 키면서 메모리가 초기화 된거임

## 구조체 사용 시 포인터 저장의 문제

- 포인터 변수 없는 구조체를 만들어볼까?

```c++
typedef struct {
    char firstname[NAME_LEN];
    char lastname[NAME_LEN];
} name_t;
```

### 구조체로 배열을 복사하가

![img_78.png](old_note/COMP2200/week6/img_78.png)

- 포인터가 아니라 배열 변수로 구조체 멤버 변수를 저장해보자
- sizeof(name_t)로 구조체의 크기를 확인해보니까 64임
- 엇, 원래 배열을 함수의 매개변수로 전달하면 포인터를 전달하잖아?
- 근데 이렇게 구조체의 멤버 변수로 선언하고, 구조체를 함수의 매개변수로 전달하니까 배열의 모든 원소를 복사할 수 있음!!!
- 얉은 복사에서 예시와 다르게 스택 메모리에 저장

### enum { NAME_LEN = 32 };로 enum에 상수 정의하는 방법도 있음

- C++에서 제대로 배움

![img_79.png](old_note/COMP2200/week6/img_79.png)

- 이렇게 구조체의 멤버변수를 배열로 선언하면, 배열에 어떻게 값을 대입할 것인가를 고민해야한다.
- char[]인데... 흠, 기존에는 char*였기 때문에 ""를 이용해서 C 스타일 문자열을 대입했다.
- char[]은 어떻게 초기화하지? strncpy를 쓰면 됨
  [질문]: names[0].firstname = "Teemo"; 이렇게 하면 안되나요? 구조체 변수를 선언하는 순간 배열 변수가 되어서 대입이 불가능?
  [대답]: YES.
- 대신에 구조체를 선언하면서 바로 멤버를 초기화할 수 있음

```c++
#include <stdio.h>
#include <string.h>

enum { NAME_LEN = 32 };

typedef struct {
    char firstname[NAME_LEN];
    char lastname[NAME_LEN];
} name_t;

void check_size(name_t name) {
    size_t size;
    size = sizeof(name);
    printf("Size: %zu\n", size);
}

void copy_name(name_t *dest, const name_t *src) {
    strncpy(dest->firstname, src->firstname, NAME_LEN - 1);
    dest->firstname[NAME_LEN - 1] = '\0';  // Ensure null termination

    strncpy(dest->lastname, src->lastname, NAME_LEN - 1);
    dest->lastname[NAME_LEN - 1] = '\0';   // Ensure null termination
}

int main() {
    name_t name1 = { "John", "Doe" };   // 선언과 동시에 초기화 가능
    name_t name2;

    check_size(name1);  // name_t 구조체의 크기 확인

    copy_name(&name2, &name1);  // name1을 name2로 복사

    printf("Name1: %s %s\n", name1.firstname, name1.lastname);
    printf("Name2: %s %s\n", name2.firstname, name2.lastname);


```

- 문자열을 복사하면 된다.
    - 뭐 내부적으로 for문 도는거겠지만 그냥 strcpy쓰면 된다.
- strncpy는 마지막에 널문자를 보장하지 않는다.
    - 왜냐하면 src의 길이가 dest보다 길 수도 있음. 위 예시에서는 NUM_NAMES 값보다 길이가 긴 이름을 복사하려고 하면, 널 문자를 보장하지 않음
        - 그래서 배열의 마지막 자리에(NAME_LEN-1) 널문자를 넣어줘야함
    - strncpy의 매개변수로 생각해보자
        - src로 들어오는 문자열의 길이가 모두 count보다 작음
            - src로 들어오는 문자열의 길이가 count보다 작다면, strncpy에서는 dest에 src의 길이만큼 복사하고, count - src의 남은 공간은 널문자로 채워줌
        - "Teemo", "Kim", "Lulu", "Lee"(src) 모두 NUM_NAMES(count)보다 작음
        - names의 멤버 firstname, lastname 모두 크기가 NAME_LEN이다. 따라서 dest 공간이 충분하다. 따라서 dest가 C 스타일 문자열임을 보장함
    - 지금 예시에서는 strncpy에서 자동으로 널 문자를 넣어주기 때문에 마지막에 널문자로 바꿔주는 코드가 효과가 없지만, 좋은 습관에 따라 넣어주는게 좋다.
        - 만약 src의 길이가 NAME_LEN과 같거나 크면 dest에 널문자가 들어가지 않기 때문임

![img_80.png](old_note/COMP2200/week6/img_80.png)

- 구조체의 멤버로 배열을 선언하고 배열에 값을 복사해서 파일에 쓰기

![img_81.png](old_note/COMP2200/week6/img_81.png)

- 구조체에 깊은 복사를 하고 파일에 저장 후 파일을 읽어보면, 주소가 아니라 문자 배열의 각 요소값들이 잘 저장된 것을 확인할 수 있다.
- 파일에 깊은 복사 성공

![img_82.png](old_note/COMP2200/week6/img_82.png)

- 프로그램을 통해서 파일을 읽어보자
    - 여기서 sizeof(names[0])의 값은 얼마일까요?
    - 64임. 배열의 크기와 동일하다.
- printf로 출력했더니, 정상적으로 잘 출력됬다.
- 근데 구조체의 멤버 변수가 가지는 `주소값`이 프로그램을 다시 실행하기 전과 비교했을 때 달라졌다.
    - 스택 메모리 주소가 변한 것
    - 파일에서 저장된 내용을 새로운 스택 메모리의 구조체 변수에 복사했기 때문에, 주소값이 달라진 것

![img_83.png](old_note/COMP2200/week6/img_83.png)

- 구조체를 만들 때 좋은 습관은, 구조체의 멤버에 포인터가 없는게 좋음
- 구조체를 값형처럼!!! 깊은 복사해서 사용하자

## 구조체를 다른 구조체의 멤버로 사용하기, 바이트 정렬

![img_84.png](old_note/COMP2200/week6/img_84.png)

- 구조체를 다른 구조체의 멤버 변수로 사용할 수 있음
- 구조체도 데이터형이기 때문이다. 구조체는 멤버로 여러 데이터 형을 포함할 수 있음

## 구조체의 크기를 확인해보자

![img_85.png](old_note/COMP2200/week6/img_85.png)

- 파일에 저장할 때는 몇 바이트일까?
- 이 질문이 왜 중요한가?
    - 다른 플랫폼과 파일을 공유할 수 있음 따라서 파일을 읽을 때 정확하게 구조체의 크기를 알아야함
    - 파생적으로 어떻게 효율적으로 저장할지, 어떻게 읽기 편하려면 어떻게 저장해야 좋을지를 고민

![img_86.png](old_note/COMP2200/week6/img_86.png)

- 실제로는 80바이트 써짐..
- 76바이트가 아닌데?
- sizeof해도 80바이트 나옴

![img_87.png](old_note/COMP2200/week6/img_87.png)

- 각 멤버 변수에서 시작위치와 끝위치의 차이를 통해 각 멤버 변수의 크기를 알 수 있음
    - height는 short인데 4바이트를 차지함
    - age도 short인데 4바이트를 차지함(원래 2바이트)
- char*로 형변환해서 1바이트 단위로 offset을 바꿨죵

- [연습] 구조체 각 멤버 변수의 크기를 확인해보자

```c++
typedef struct {
    int id;
    name_t name;
    unsigned short  height;
    float weight;
    unsigned short age;
} user_info_t;

user_info_t info;

int struct_addr = (char*)&info.id - (char*)&info;   // 0 구조체 변수는 구조체 시작 주소, 구조체 첫번재 멤버의 시작 주소
int off_id = (char*)&info.name - (char*)&info  // 4
int off_name = (char*)&info.height - (char*)&info  // 68
int off_height = (char*)&info.weight - (char*)&info  // 72
int off_age = (char*)&info.age - (char*)&info  // 76
```

![img_88.png](old_note/COMP2200/week6/img_88.png)

- 그림으로 확인하죠

## 바이트 정렬 요구사항

![img_89.png](old_note/COMP2200/week6/img_89.png)

- 바이트 정렬 요구사항 때문에 패딩(안 쓰는 공간)이 생김

![img_90.png](old_note/COMP2200/week6/img_90.png)

- 4바이트를 꽉 채우면, 구멍이 생기지 않지만 2바이트는 구멍을 만든다.
- 4바이트(워드 크기)의 경계에서 데이터를 읽는게 효율적이라서, 컴파일러가 4바이트로 정렬함
    - 4바이트 경계에 정렬된다(aligned)

- 패딩이라고 표현하기도 함
- 플랫폼 마다 다를 수 있음
- 교훈은 어떤 구조체를 파일로 저장했는데, 다른 플랫폼에서 이 파일을 읽으면 바이트 수가 안 맞아서 엉뚱한 값이 읽힐 수 있다.

![img_91.png](old_note/COMP2200/week6/img_91.png)

## 패딩 줄이기

![img_92.png](old_note/COMP2200/week6/img_92.png)

- 4바이트 경계로 예쁘게 멤버의 순서를 변경
- 컴파일러가 패딩을 없앨 수 있음
    - 패딩은 컴파일러의 재량

## #pragma pack

![img_93.png](old_note/COMP2200/week6/img_93.png)

- 컴파일러에 패딩 넣지 마라라고 지시
- C 표준 X, Clang은 지원해줌
- #pragma pack(push, 1): 여기서부터 스택에 1바이트씩 넣음
- #pragma pack(pop): 스택의 끝

## 구조체 베스트 프렉티스

![img_94.png](old_note/COMP2200/week6/img_94.png)

- 업계에서 보통 assert로 구조체 크기 확인

![img_95.png](old_note/COMP2200/week6/img_95.png)

- 명시적으로 코딩으로 패딩을 넣어도 된다.

## 코드보기: 점, 선, 직사각형 [연습]

![img_96.png](old_note/COMP2200/week6/img_96.png)

- 구조체를 여러 파일에서 공유하려면 헤더파일에 선언하자
- 사각형 만들 때 대각선의 두 점을 사용
    - 왼쪽 위, 오른쪽 아래
- 구조체의 멤버로 다른 구조체를 사용하는 예

![img_97.png](old_note/COMP2200/week6/img_97.png)

- 두 점으로 대각선에 따라 사각형을 만드는 코드
    - x좌표, y좌표 둘다 마찬가지
- p0이 왼쪽 아래, p1은 오른쪽 아래를 보장하기 위해 검사하는 개념

![img_98.png](old_note/COMP2200/week6/img_98.png)

[도우미 함수]

```c++ 
rectangle_t build_rectangle(point_t p0, point_t p1)
{
    rectangle_t rect;

    if (p0.x < p1.x) {
        rect.top_left.x = p0.x;
        rect.bottom_right.x = p1.x;
    } else {
        rect.top_left.x = p1.x;
        rect.bottom_right.x = p0.x;
    }

    if (p0.y < p1.y) {
        rect.top_left.y = p0.y;
        rect.bottom_right.y = p1.y;
    } else {
        rect.top_left.y = p1.y;
        rect.bottom_right.y = p0.y;
    }

    return rect;
}
```

- 이 코드의 경우 도우미 함수로 bottom_right.x < top_left.x 가 보장됨. 따라서 abs코드는 효과가 없음
- 근데 구조체의 멤버 변수는 `누구나`접근할 수 있다.
- 따라서 도우미 함수를 사용하지 않고, 직사각형을 만든 후, 이 직사각형을 get_rectangle_area의 인자로 넘길 수 있다.
    - 어떻게 도우미 함수 없이 만들지? 그냥 구조체 선언하고 멤버에 값 대입하면 됨
- abs로 도우미 함수를 사용하지 않고 rectangle 구조체를 만들었을 때 get_rectangle_area의 값이 정상적으로 반환될 수 있도록 방어하는 것

```c++
typedef struct {
    point_t top_left;
    point_t bottom_right;
} rectangle_t;

```

![img_99.png](old_note/COMP2200/week6/img_99.png)

- [연습] scanf로 stdin의 입력을 받아봐, 출력도 해보자

![img_100.png](old_note/COMP2200/week6/img_100.png)

- 벡터의 개념
- 방향도 포함된다.

![img_101.png](old_note/COMP2200/week6/img_101.png)

- 도우미 함수 사용안하고, 멋대로 직사각형 만드는 경우
- 가정이 깨짐..

![img_102.png](old_note/COMP2200/week6/img_102.png)

- abs로 미리 처리해놔서 괜춘괜춘

## 비트 필드

- 프로그래머가 임의로 데이터의 크기를 조절한 자료형을 만들어볼까?

![img_103.png](old_note/COMP2200/week6/img_103.png)

### 비트 플래그 예시

![img_104.png](old_note/COMP2200/week6/img_104.png)

```csharp
byte ToBitFlags(bool[] flags)
{
    byte result = 0;
    for (int i = 0; i < flags.Length; i++)
    {
        if (flags[i])
        {
            result |= (byte)(1 << i);
        }
    }
    return result;
}
// 배열은 왼쪽부터 인덱스가 0부터 시작
// 비트 플래그의 경우 오른쪽 부터 0부터 시작
// {true, false, true, flase, flase, flase, flase, flase}
// 00000101
// 읽는 방법이 다름
```

- C#에서 bool은 1비트
- 8개의 bool로 비트 플래그를 만드는 코드
- 비트 플래그의 자료형은 8비트 즉 byte

### C에서 구조체를 이용한 비트 플래그 / : 연산자

![img_105.png](old_note/COMP2200/week6/img_105.png)

- `콜론`을 찍으면 1비트만 쓰겠다!
- 1비트 8개가 들어가서, sizeof(구조체)는 1바이트
- 콜론없이 했으면 8바이트 나왔겠쥬

![img_106.png](old_note/COMP2200/week6/img_106.png)

- {0, };로 모두 0으로 초기화

![img_107.png](old_note/COMP2200/week6/img_107.png)

- 메모리에 8비트를 쓰니까, 이 flags 구조체의 값이 변하면 붉은색으로 마스킹된 1바이트 값만 변함
- 4번째 비트를 1로 바꾸면, 비트 패턴이 00001000이 됨
- 그래서 값이 8이쥬

## 불편한점: 플래그 전체 한 번에 체크가 어려움

![img_108.png](old_note/COMP2200/week6/img_108.png)

- 구조체의 멤버를 한 번에 동시에 체크하는 방법이 없음

## 하지만 포인터로 할 수 있음!!! [연습]

![img_109.png](old_note/COMP2200/week6/img_109.png)

- flag의 주소를 char*로 캐스팅하면
- 이 포인터 변수에서 1바이트를 통채로 읽어올 수 있다.
    - 그리고 역참조를 통해 *val의 값을 읽을 수 있어, 이를 정수값과 비교함

![img_110.png](old_note/COMP2200/week6/img_110.png)

- 하지만 이 기능을 권하지는 않습니다.
- 공용체가 똑같은 일을 할 수 있어요!!

## 공용체

- 어떤 메모리를 어떻게 읽을 것인가?

![img_111.png](old_note/COMP2200/week6/img_111.png)

- 구조체와 비슷하게 만들고, 선언함
- 공용체의 목적은, 똑같은 메모리를 다른 변수로 접근하는 방법이다.
- 즉 읽는 방법을 바꿔서, 다르게 해석하고 싶어유
- 포인터 캐스팅이랑 비슷한 개념임 ㅇㅇ;

![img_112.png](old_note/COMP2200/week6/img_112.png)

- union이라고 예약어가 있음
- val, bits 둘다 같은 메모리 주소를 가리키는게 공용체의 특징
- 공용체 내부의 구조체에 접근할 때 .으로 한번 더 접근해야함
    - 문법이 살짝 달라졌죠
- 공용체의 크기는 `가장 큰 멤버 변수의 크기`로 결정됨
- 이 예에서는 둘다 8비트로 동일해서 1바이트

![img_113.png](old_note/COMP2200/week6/img_113.png)

- 코드로 보자
- 우선 0으로 초기화
    - 초기화 코드 기억하기

![img_114.png](old_note/COMP2200/week6/img_114.png)

- 비트패턴 변경
- val의 값이 바뀌는것 주목

![img_115.png](old_note/COMP2200/week6/img_115.png)

- .으로 접근할 때 문법은 depth가 생김

![img_116.png](old_note/COMP2200/week6/img_116.png)

- char로 읽음

![img_117.png](old_note/COMP2200/week6/img_117.png)

- 동일한 메모리 주소에서 어떻게 읽냐?

## 코드보기: 색상 표현하기 [연습]

![img_118.png](old_note/COMP2200/week6/img_118.png)

- RGB
- 컴퓨터의 3원색
- 각각 16진수 값이 있음

![img_119.png](old_note/COMP2200/week6/img_119.png)

- 8비트 3개라서 2의 24승만큼 색을 나타낼 수 이씀

![img_120.png](old_note/COMP2200/week6/img_120.png)

- a채널: 투명도
    - 255개의 스팩트럼?

![img_121.png](old_note/COMP2200/week6/img_121.png)

- red.val로 `모든 비트 패턴`을 초기화 하는거죠?

![img_122.png](old_note/COMP2200/week6/img_122.png)

- 공용체의 대입
- 값을 복사함, 초기화

## 메모리 공유만을 위한 공용체

- 메모리 공유만을 위한다??
- 방금 전 공용체의 예시는 구성 요소를 따로 따로 해석, 구성 요소 모두를 해석하는 예시였음
    - 구성 요소를 따로 따로 변경해서 RGBA 색을 바꿈
    - 구성의 변경이 전체의 변경으로 이어짐
- 그냥 같은 메모리 공간을 공유하는게 주목적으로 공용체를 사용할 수 있음
    - 멤버끼리 연관이 없음, 독립적임

![img_123.png](old_note/COMP2200/week6/img_123.png)

- ivalue, dvalue가 서로 의미가 없음
- 상관관계도 없음, 정수, 실수형이라 비트패턴 해석에서 뭔가 겹칠 일도 없음
- calculate 함수를 살펴봐야 알죠?
- 이 공용체의 크기는 8바이트
    - 가장 큰 멤버의 크기가 double로 8바이트기 때문

![img_124.png](old_note/COMP2200/week6/img_124.png)

- 열거형 op_t로, 정수를 연산할지, double을 연산할지 결정함

### 메모리 보면...

![img_125.png](old_note/COMP2200/week6/img_125.png)
![img_126.png](old_note/COMP2200/week6/img_126.png)

- ivalue로 업데이트하면, 4바이트만 업데이트됨

![img_127.png](old_note/COMP2200/week6/img_127.png)

- result를 구할 때 4바이트까지 읽어서 값을 구함

![img_128.png](old_note/COMP2200/week6/img_128.png)

- 부동소수점 IEEE754
- 8바이트로 표현됨

![img_129.png](old_note/COMP2200/week6/img_129.png)

- result도 8바이트로 읽어서 출력하면 double값으로 정상 작동

## 메모리 공유만 위한 공용체의 사용

![img_130.png](old_note/COMP2200/week6/img_130.png)

- 사실 실수하기 좋은 코딩 방식임
- 차라리 함수로 다른 매개변수(int, double)를 받는게 좋음

## 함수 포인터, 함수를 변수에 저장할 수 있을까?

### switch 문을 이용한 사칙연산 프로그램

![img_131.png](old_note/COMP2200/week6/img_131.png)

- 함수 선언을 할 때, 매개변수의 이름을 생략할 수 있음
- 컴파일할 때 필요한 것은 함수의 이름, 매개변수의 자료형이 무엇인가, 매개변수의 목록이 몇 개인가?
- 근데 매개변수명 써주는 것이 좋음

![img_132.png](old_note/COMP2200/week6/img_132.png)

- 사용자의 입력을 받아서 switch문으로 함수를 호출하는 코드

### switch문 말고 다른 방법이 없을까?

![img_133.png](old_note/COMP2200/week6/img_133.png)

- 함수 선언에서 공통점을 찾아보자
- 사칙연산은 모두 피연산자가 2개다.
- 유일하게 다른 점은 함수 이름이다.

![img_134.png](old_note/COMP2200/week6/img_134.png)

- 변하는 피연산자는 `매개변수`로 값을 바꿔서 함수를 호출할 수 있다.

![img_135.png](old_note/COMP2200/week6/img_135.png)

- 함수도 어디에 저장해 둔 뒤 매개변수로 전달하기 가능?
- 함수를 변수에 저장할 때, 무엇을 저장해야 함수라고 인식할까?

### 함수 호출 과정에서 함수의 시작 주소는 언제 결정될까?

![img_136.png](old_note/COMP2200/week6/img_136.png)

- 함수 호출 코드에서 직접 함수명을 사용함
- 함수 호출 코드를 어셈블리어로 변환하면 그 함수의 시작 주소로 점프하는 명령어임
    - 그리고 코드를 실행하다가 리시버의 return문을 만나면 호출자로 점프해 돌아오게 됨
    - 이 때 리시버의 주소는 스택 프레임에 넣지 않음?
    - [질문]: 리시버의 주소는 스택 메모리 말고 코드 영역에 저장되어있나요?
    - [답변]: 네, 코드 영역에 저장되어 있음
- 함수의 시작 주소는 언제 결정될까? `컴파일 타임`에 결정된다.
    - 실행 중에 리시버 함수의 시작 주소가 바뀌진 않음

### 함수가 종료되고 return할 때 돌아가는 호출자의 주소는 언제 결정될까?

![img_137.png](old_note/COMP2200/week6/img_137.png)

- 실행 도중에 메모리 주소가 바뀌는 경우가 있음
- 호출된 함수를 반환하고 돌아갈 때 호출자의 주소는 실행 중 변할 수 있음
    - 어떤 함수를 여러 곳에서 호출할 수 있잖아.

![img_138.png](old_note/COMP2200/week6/img_138.png)

- call 이라는 어셈블리어가 실행되면, (리시버)0E21040h로 점프하고, 돌아갈 코드 주소인 00E211AB를 `스택 메모리`에 저장
- 돌아갈 코드의 주소 값은 실행 도중에 바뀔 수 있다.
- 즉 00E211AB 값은 호출자가 누구냐에 따라 실행 중 바뀐다.

## 모든 것이 다 메모리 주소

![img_139.png](old_note/COMP2200/week6/img_139.png)

- 모든 어셈블리어 명령어는 그 명령어의 주소가 저장되어있음
- 함수도 마찬가지로, 함수의 시작 주소가 저장되어있음
- 메모리 영역
    - 코드 영역 (Text Segment): 프로그램의 실행 코드가 저장되는 영역입니다. 여기에는 함수의 코드도 포함됩니다. 함수의 시작 주소와 관련된 코드는 이 영역에 위치합니다.
    - 스택 (Stack): 함수 호출 시 리턴 주소, 함수의 인자, 지역 변수 등이 저장되는 영역입니다. 스택은 함수 호출 시점에 동적으로 할당되고, 함수가 종료되면 해제됩니다.
    - 함수 포인터와 주소 저장
        - 함수 포인터는 함수의 시작 주소를 가리키는 포인터입니다. 함수 포인터는 코드 영역에 있는 함수의 주소를 저장합니다.
        - 함수 포인터를 통해 함수를 호출하면, 해당 주소로 점프하여 함수 실행을 시작합니다.
    - 리턴 주소의 저장 위치
        - 리턴 주소는 스택에 저장됩니다. 이는 함수가 호출될 때 호출자의 다음 명령 주소를 스택에 푸시하는 방식으로 이루어집니다.
        - 함수가 리턴될 때, 이 리턴 주소를 스택에서 팝하여 그 주소로 점프합니다.

## 함수를 매개변수로 전달할 때 필요한 것들, 함수 포인터 선언

![img_140.png](old_note/COMP2200/week6/img_140.png)

- 그러면 함수를 매개변수로 전달하려면, 함수 코드의 시작 주소를 넣으면 된다.
- 이 주소를 저장하는 자료형이 함수 포인터

![img_141.png](old_note/COMP2200/week6/img_141.png)

- 매개변수로 함수의 주소를 넣는거죠

### 함수의 자료형은 뭐임?

![img_142.png](old_note/COMP2200/week6/img_142.png)
![img_143.png](old_note/COMP2200/week6/img_143.png)
![img_144.png](old_note/COMP2200/week6/img_144.png)

- 함수의 자료형이 말이 안 된다.
- 매개변수 목록, 반환형, 함수의 이름이 다양한데 이를 공통의 통일된 자료형으로 묶기 쉽지않음

![img_145.png](old_note/COMP2200/week6/img_145.png)

- 다시 함수가 어떻게 실행되는지 떠올려보자.
- 우선 caculate 함수를 호출하면, double 형 2개를 스택에 복사하게된다.
    - 하지만 이 매개변수는 calculate의 지역 변수
- 어떤 함수를 호출하면, 그 함수에서 사용할 매개변수를 먼저 스택에 복사하고, 호출된 함수의 스택프레임이 만들어진다.
- `매개변수로 전달된 함수`에 대해서 컴파일러 입장에서 아무것도 모른다.
    - `매개변수로 전달된 함수`의 매개변수 목록을 알 수 없다.
    - `매개변수로 전달된 함수`의 반환값도 알 수 없다. (반환값을 알아야 resister에 반환값을 자료형에 따라 저장함)
- 즉 호출자인 calculate와 리시버인 `매개변수로 전달된 함수`사이에 어떤 규약이 필요하다.

![img_146.png](old_note/COMP2200/week6/img_146.png)

- func라는 `매개변수로 전달된 함수`는 컴파일러 입장에서 생뚱맞은 상황
- 단지 이 `매개변수로 전달된 함수`의 시작 주소만 알고 있음
    - [질문] 여기서 함수의 이름은 결국 주소로 대체되는 건가요? 의미가 없어보이네요. 함수 시그니처의 구성요소로 매개변수 목록, 반환형, 함수의 이름
- func의 매개변수 목록을 알 수 없다.
    - 컴파일러 입장에서는 "double r = func(op1, op2);" 에서 검사를 할 때 op1, op2의 자료형을 알아야 검사할 수 있음
- func의 반환값을 알 수 없다.
    - 컴파일러 입장에서는 "double r = func(op1, op2);" 에서 검사를 할 때 func의 반환값의 자료형을 알아야 검사할 수 있음. double이 아니면 어쩔건데?
    - 내부적으로 반환값이 중요한 이유는, void일 때는 레지스터에 반환값을 저장하지 않아도 되고, int일 때는 레지스터에 반환값을 저장해야함.

![img_147.png](old_note/COMP2200/week6/img_147.png)

- 결론은 함수 포인터에 매개변수 목록, 반환형이 필요하다는 것이다.

### 올바른 함수 포인터의 선언

![img_148.png](old_note/COMP2200/week6/img_148.png)

- func는 함수 포인터 변수 이름
- func에 대입할 때 add함수를 대입가능, ()가 없어야함
- ()가 있는 순간 호출하려는 것
- 함수 포인터 변수를 매개변수로 사용하면 마찬가지로 괄호 없이 대입

![img_149.png](old_note/COMP2200/week6/img_149.png)

- 함수 포인터 변수의 선언
- 함수의 시작 주소를 저정하는 변수

## 함수 포인터 읽는 방법, 오른쪽-왼쪽 규칙(Right-Left Rule)

![img_150.png](old_note/COMP2200/week6/img_150.png)
![img_151.png](old_note/COMP2200/week6/img_151.png)
![img_152.png](old_note/COMP2200/week6/img_152.png)
![img_153.png](old_note/COMP2200/week6/img_153.png)
![img_154.png](old_note/COMP2200/week6/img_154.png)
![img_155.png](old_note/COMP2200/week6/img_155.png)
![img_156.png](old_note/COMP2200/week6/img_156.png)
![img_157.png](old_note/COMP2200/week6/img_157.png)
![img_158.png](old_note/COMP2200/week6/img_158.png)

### 함수 포인터 읽는 방법 예시

![img_159.png](old_note/COMP2200/week6/img_159.png)

### 이제 함수의 매개변수로 함수를 사용할 수 있다!!

![img_160.png](old_note/COMP2200/week6/img_160.png)

## 함수 포인터를 배열에 담아보자

![img_161.png](old_note/COMP2200/week6/img_161.png)

- ops는 배열인데
    - 오른쪽 벽에서 부딪힘
        - )
    - 오른쪽 벽 사라짐
- ops는 포인터의 배열이다.
    - 왼쪽 벽에서 부딪힘
        - (
    - 왼쪽 벽 사라짐
- 매개변수는 int, int인 함수 포인터의 배열
    - 맨 끝에 도달했으니 다시 왼쪽으로 읽음
- 반환값은 int인 함수 포인터의 배열

## 함수 포인터 쉽게 읽기

![img_162.png](old_note/COMP2200/week6/img_162.png)
![img_163.png](old_note/COMP2200/week6/img_163.png)

### 코드를 분해 하자

![img_164.png](old_note/COMP2200/week6/img_164.png)
![img_165.png](old_note/COMP2200/week6/img_165.png)

- 반환형은 저런식으로 적지 않음. 분해가 필요함

![img_166.png](old_note/COMP2200/week6/img_166.png)
![img_167.png](old_note/COMP2200/week6/img_167.png)
![img_169.png](old_note/COMP2200/week6/img_169.png)
![img_168.png](old_note/COMP2200/week6/img_168.png)

- bsd_signal은 (int, ?)를 매개변수로 받습니다.
    - 오른쪽으로 갈 때 ( 괄호는 벽이 아님
    - bsd_signal(int, void (*)
        - 여기까지 진행
- ?를 분석하는거죠, 어떤 포인터인데 ) 벽에 막혀서 왼쪽으로 갑니다.
    - void를 반환하는 함수 포인터네요
    - (int, ... 여기서 왼쪽 벽에 막힘
- 다시 오른쪽으로 진행해서
    - bsd_signal(int, void (*)(int)
    - 여기까지 갑니다.
    - ? 분석이 끝남
    - 함수 포인터인데 int 1개를 매개변수로 받고, int를 반환함
- 다시 왼쪽으로 진행하죠
    - (*bsd_signal 여기서 왼쪽 벽에 막힘
    - bsd_signal은 포인터를 반환한다.
- 다시 오른쪽으로 진행하죠
    - bsd_signal(int, void (*)(int)) 여기까지 진행
    - bsd_signal 함수의 매개변수형은 확정됬고, 반환형은 포인터인 것만 알 고 있다.
- 다시 왼쪽으로 진행하죠
    - 왼쪽 끝까지 갑니다.
    - void 포인터?는 아닌데..?
- 다시 오른쪽으로 진행
    - 오른쪽 끝까지 갑니다.
    - 아 void를 반환하고 int를 매개변수로 받는 함수 포인터를 반환하는 거구나!!

## 코드보기: 콜백 함수

```c++
#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <time.h>

#include "error_handler.h"

static void (*s_handler)(const char*) = NULL;   
// 함수 포인터, 변수명은 s_handler, 반환형은 void, 매개변수는 const char*인 함수 포인터, 초기값은 NULL

void register_error_handler(void (*handler)(const char* msg))
{
    // 함수 포인터를 매개변수로 받는 함수
    s_handler = handler;
}
// 등록된 커스텀 에러 핸들러를 호출하는 함수
void log_error(const char* msg)
{
    if (s_handler != NULL) {
        s_handler(msg);
    }
}
// 기본 에러 핸들러
void default_error_handler(const char* msg)
{
    time_t now;
    struct tm* local;

    now = time(NULL);

    local = localtime(&now);

    fprintf(stderr, "[%02d:%02d:%02d] %s\n", 
        local->tm_hour, local->tm_min, local->tm_sec,
        msg);
}
```

![img_170.png](old_note/COMP2200/week6/img_170.png)

- 다른 회사의 라이브러리를 사용하다보면 그 안에서 발생하는 오류를 받아야함. 왜?
- 라이브러리를 잘 못 사용하는 경우 알려줘야하는게 파는쪽 입장이죠

![img_171.png](old_note/COMP2200/week6/img_171.png)

- 이럴 때 콜백 함수를 사용함
- 사용자가 라이브러리를 사용하다가 문제가 생기면, 사용자가 함수 포인터로 등록한 콜백 함수를 호출해 에러메시지를 전달함
- 위 코드가 라이브러리의 일부분이라고 가정하자

![img_172.png](old_note/COMP2200/week6/img_172.png)

- 콜백 함수의 결과를 보고 수정할 수 있음

![img_173.png](old_note/COMP2200/week6/img_173.png)

- 지역변수 handler라는 함수 포인터는, c 스타일 문자열을 매개변수로 받고, 아무런 반환값이 없다.
- 문제가 생기면 이 함수 포인터 변수값의 콜백함수를 호출해준다.

![img_174.png](old_note/COMP2200/week6/img_174.png)

- log_error은 문제 상황이 발생하면 호출된다.
- log_error 내부에서 함수 포인터로 넘긴 콜백함수를 호출해줌

![img_175.png](old_note/COMP2200/week6/img_175.png)

- default는 라이브러리 자체에서 제공한 콜백함수

![img_176.png](old_note/COMP2200/week6/img_176.png)

- 라이브러리와 같이 딸려오는 기능

![img_177.png](old_note/COMP2200/week6/img_177.png)

- 콜백함수를 static으로 등록함
- 등록된 시점과, 콜백함수를 호출함수를 호출하는 시점이 다르기 때문에, 저장해두어야함

![img_178.png](old_note/COMP2200/week6/img_178.png)

- 등록 함수는 간단하죠

![img_179.png](old_note/COMP2200/week6/img_179.png)
![img_180.png](old_note/COMP2200/week6/img_180.png)

- 콜백함수 등록을 확인하고
- 콜백함수를 호출함

![img_181.png](old_note/COMP2200/week6/img_181.png)

- 로깅할 때 시, 분, 초 구조체

![img_182.png](old_note/COMP2200/week6/img_182.png)

- 로깅할 때 함수 포인터로 문자열만 전달하는 것은 유용하지 않음
- 제대로된 오류 처리기는 열거형 변수에 따라서 대응, 오류 메시지의 중요도 구분 등을 해야함

```c++
#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

#include "error_handler.h"

#define TRUE (1)
#define FALSE (0)

void simple_stderr_print(const char* msg);
int run(void);

int main(void)
{
    int success;

    success = run();

    register_error_handler(default_error_handler);
    if (run() == FALSE) {
        success = FALSE;
    }

    register_error_handler(simple_stderr_print);
    if (run() == FALSE) {
        success = FALSE;
    }

    return success ? 0 : 1;
}

int run(void)
{
    int numerator;
    int denominator;

    while (TRUE) {
        printf("enter numerator: ");
        if (scanf("%d", &numerator) == 1) {
            break;
        }
    }

    while (TRUE) {
        printf("enter denominator: ");
        if (scanf("%d", &denominator) == 1 ) {
            break;
        }
    }

    if (denominator == 0) {
        log_error("cannot divide by zero");
        // 커스텀 에러 핸들러가 등록되지 않았다면? log_error는 아무것도 하지 않음
        return FALSE;
    }

    printf("%d / %d = %.2f\n",
        numerator, denominator,
        numerator / (float)denominator );

    return TRUE;
}

void simple_stderr_print(const char* msg)
{
    fputs(msg, stderr);
}
```

## 배열의 포인터, 퀵 정렬, void 포인터

![img_183.png](old_note/COMP2200/week6/img_183.png)

- 오른쪽/왼쪽 법칙의 적용

![img_184.png](old_note/COMP2200/week6/img_184.png)

- 배열 전체를 모두 가리키는 포인터도 있음
- pointer to array
- 배열 전체를 가리키기 때문에, 요소 3개인 배열을 가리키는 포인터에 요소 5개인 배열의 주소를 대입할 수 없음

### 배열의 포인터

![img_185.png](old_note/COMP2200/week6/img_185.png)
![img_186.png](old_note/COMP2200/week6/img_186.png)
![img_187.png](old_note/COMP2200/week6/img_187.png)

- matrix 지역변수는 포인터인데 int 10개 배열을 가리킴
- *(matrix + 1)의 결과 int 10개 배열

## 함수 포인터의 예: 퀵 정렬

![img_188.png](old_note/COMP2200/week6/img_188.png)

- O(NlogN)의 시간복잡도를 가지는 정렬 알고리즘
- 어떤 데이터(구조체 포함)도 정렬할 수 있음
- 자료마다 정렬 기준이 다를 수 있음, 이 정렬 함수를 함수 포인터 매개변수로 넘긴다.

## void 포인터

![img_189.png](old_note/COMP2200/week6/img_189.png)

- 범용적이다.
- 대입용도
- 매개변수로 void*를 사용하면, 어떤 자료형이든 받을 수 있다.
- 데이터 크기를 알아야하는 연산이 불가능함
    - 역 참조
    - 포인터 산술 연산

## void*의 예

![img_190.png](old_note/COMP2200/week6/img_190.png)

## 다른 언어에도 함수 포인터가 있음

![img_191.png](old_note/COMP2200/week6/img_191.png)
![img_192.png](old_note/COMP2200/week6/img_192.png)

## 코드보기: 구조체를 사용한 퀵 정렬

```c++
typedef enum {
    SEX_MALE,
    SEX_FEMALE,
    SEX_UNKNOWN
} sex_t;

typedef struct {
    unsigned short id;
    unsigned char age;
    sex_t sex;
} userdata_t;

#include "userdata.h"
#include "user_sorter.h"

int compare_age_id(const void* p0, const void* p1)
{
    const userdata_t* user0 = p0;
    const userdata_t* user1 = p1;

    if (user0->age == user1->age) {
        return user0->id - user1->id;
        // 음수 반환: user0이 user1보다 앞에 있어야함, 순서 안 변함
        // 0 반환: 순서 바꾸지 않음
        // 양수 반환: user0이 user1보다 뒤에 있어야함, 따라서 순서가 바뀜
    }

    return user0->age - user1->age;
}

int compare_age_desc_sex(const void* p0, const void* p1)
{
    // 외부에서 호출할 때, p0,p1이 user_date_t의 주소라는 가정
    const userdata_t* user0 = p0;
    const userdata_t* user1 = p1;

    if (user0->age == user1->age) {
        return user0->sex - user1->sex;
        // MALE < FEMALE < UNKNOWN
    }

    return user1->age - user0->age;
    // 음수 반환: user0이 user1보다 앞에 있어야함, user0의 age > user1의 age => 내림차순, 큰게 먼저 나옴
    // 0 반환: 순서 바꾸지 않음
    // 양수 반환: user0이 user1보다 뒤에 있어야함, 순서 바뀜
}
```

![img_193.png](old_note/COMP2200/week6/img_193.png)

- void*를 매개변수로 받음
- 퀵 소트를 호출할 때 userdata_t의 크기를 알기 때문에, void*를 사용함
- qsort가 알아야하는 것
    - 배열
    - 배열의 요소 크기
    - 배열의 요소 개수
    - qsort는 배열의 모든 요소를 보면서, 두 요소를 뽑아서, 두 요소의 시작위치를 비교함수로 전달
    - 비교함수는 프로그래머가 만들어서, 4번째 매개변수로 전달
    - 그러면 비교함수에서 void*에서 형변화을 통해서 비교하는 것임!!!

![img_194.png](old_note/COMP2200/week6/img_194.png)

- 형 변환
- p0, p1에 반드시 userdata_t의 주소가 들어온다는 가정
  - void*라서 안 들어올 수 있음
  - 애초에 qsort를 호출할 때 void*로 어떤 주소를 넘기는데, 이 주소의 데이터가 user_date_t인지 확신할 수 없음
  - 호출자가 잘 호출해야함!!!

![img_195.png](old_note/COMP2200/week6/img_195.png)
![img_196.png](old_note/COMP2200/week6/img_196.png)

- i를 변수로 값을 누적했기 때문에, assert에 활용할 수 있다.

![img_197.png](old_note/COMP2200/week6/img_197.png)

- qsort의 매개변수로 요소의 개수, 요소의 데이터 크기를 넘겨야함

```c++
#include <assert.h>
#include <stdio.h>
#include <stdlib.h>

#include "userdata.h"
#include "user_sorter.h"

enum { NUM_USERS = 7 };

int main(void)
{
    userdata_t users[NUM_USERS];
    size_t i;

    i = 0u;
    users[i].id = 482;
    users[i].sex = SEX_FEMALE;
    users[i++].age = 102;

    users[i].id = 510;
    users[i].sex = SEX_MALE;
    users[i++].age = 22;

    users[i].id = 32;
    users[i].sex = SEX_UNKNOWN;
    users[i++].age = 1;

    users[i].id = 221;
    users[i].sex = SEX_FEMALE;
    users[i++].age = 38;

    users[i].id = 15;
    users[i].sex = SEX_FEMALE;
    users[i++].age = 22;

    users[i].id = 333;
    users[i].sex = SEX_MALE;
    users[i++].age = 1;

    users[i].id = 1024;
    users[i].sex = SEX_UNKNOWN;
    users[i++].age = 52;

    assert(i == NUM_USERS);
    // i를 assert에 재활용

    puts("== sort by age, id ==");
    
    qsort(users, NUM_USERS, sizeof(userdata_t), compare_age_id);
    for (i = 0; i < NUM_USERS; ++i) {
        printf("age: %3d, id: %5d, sex: %d\n",
            users[i].age, users[i].id, users[i].sex);
    }

    puts("\n== sort by age(desc), sex ==");
    
    qsort(users, NUM_USERS, sizeof(userdata_t), compare_age_desc_sex);
    for (i = 0; i < NUM_USERS; ++i) {
        printf("age: %3d, sex: %d, id: %d\n",
            users[i].age, users[i].sex, users[i].id);
    }

    return 0;
}
```

## 코드보기: 기수(radix) 정렬

```c++
typedef enum {
    SEX_MALE,
    SEX_FEMALE,
    SEX_UNKNOWN
} sex_t;

typedef struct {
    unsigned short id;
    unsigned char age;
    sex_t sex;
} userdata_t;

typedef struct {
    unsigned int sort_key;  // sort_key가 첫번째 멤버임을 주목, 구조체 포인터의 주소가 곧 sort_key의 주소
    userdata_t user;
} radix_userdata_t;

#include <assert.h>
#include <stdio.h>
#include <stdlib.h>

#include "userdata.h"

enum { NUM_USERS = 7 }; // 메크로를 enum으로

int compare_uint(const void* p0, const void* p1);

int main(void)
{
    radix_userdata_t users[NUM_USERS];
    size_t i;

    i = 0u;
    users[i].user.id = 482;
    users[i].user.sex = SEX_FEMALE;
    users[i++].user.age = 102;

    users[i].user.id = 510;
    users[i].user.sex = SEX_MALE;
    users[i++].user.age = 22;

    users[i].user.id = 32;
    users[i].user.sex = SEX_UNKNOWN;
    users[i++].user.age = 1;

    users[i].user.id = 221;
    users[i].user.sex = SEX_FEMALE;
    users[i++].user.age = 38;

    users[i].user.id = 15;
    users[i].user.sex = SEX_FEMALE;
    users[i++].user.age = 22;

    users[i].user.id = 333;
    users[i].user.sex = SEX_MALE;
    users[i++].user.age = 1;

    users[i].user.id = 1024;
    users[i].user.sex = SEX_UNKNOWN;
    users[i++].user.age = 52;

    assert(i == NUM_USERS);

    puts("== sort by age, id ==");
    for (i = 0; i < NUM_USERS; ++i) {
        unsigned char age = users[i].user.age;
        unsigned short id = users[i].user.id;

        users[i].sort_key = age << 16 | id;
        // 상위 16비트는 age, 하위 16비트는 id
        // age의 자료형이 unsigned char이기 때문에, 16트면 충분함
        // id의 자료형이 unsigned short이기 때문에, 16비트면 충분함
    }

    qsort(users, NUM_USERS, sizeof(radix_userdata_t), compare_uint);
    for (i = 0; i < NUM_USERS; ++i) {
        printf("age: %3d, id: %5d, sex: %d\n",
            users[i].user.age,
            users[i].user.id,
            users[i].user.sex);
    }

    puts("\n== sort by age(desc), sex ==");
    assert(SEX_UNKNOWN < (1 << 2)); // 성별 개수를 보장하는 방법, inv_age << 2에서 딱 2비트 밀었기 때문에 이 가정이 틀리면 2비트보다 더 밀어야 할 수도 있음

    for (i = 0; i < NUM_USERS; ++i) {
        unsigned char inv_age = 255 - users[i].user.age;
        sex_t sex = users[i].user.sex;

        users[i].sort_key = inv_age << 2 | sex;
    }

    qsort(users, NUM_USERS, sizeof(radix_userdata_t), compare_uint);
    for (i = 0; i < NUM_USERS; ++i) {
        printf("age: %3d, sex: %d, id: %d\n",
            users[i].user.age,
            users[i].user.sex, 
            users[i].user.id);
    }

    return 0;
}

int compare_uint(const void* p0, const void* p1)
{
    const unsigned int* i0 = p0;
    const unsigned int* i1 = p1;

    return *i0 - *i1;
}
```

- 비교 속도를 굉장히 빠르게 만드는 정렬

![img_198.png](old_note/COMP2200/week6/img_198.png)

- 추가적으로 sort_key가 필요함

![img_199.png](old_note/COMP2200/week6/img_199.png)

- 비교 함수 하나로 2개의 역할을 할 수 있음

![img_200.png](old_note/COMP2200/week6/img_200.png)

- 간단한데?

![img_201.png](old_note/COMP2200/week6/img_201.png)

- sort_key를 초기화했음

![img_202.png](old_note/COMP2200/week6/img_202.png)
![img_203.png](old_note/COMP2200/week6/img_203.png)

- 비트 쉬프트해서 or 연산으로 합친다.
- 상위 16비트는 나이, 하위 16비트는 id
- 32비트인 unsigned int에 16비트 2개를 넣은거죠

![img_204.png](old_note/COMP2200/week6/img_204.png)

- sort_key의 값에 따라 순서 결정

![img_205.png](old_note/COMP2200/week6/img_205.png)

- 비교하는 함수가 compare_uint임
- 퀵 소트는 각 요소(radix_user_t)의 시작 메모리 주소에서 처음 나오는 데이터가 unsigned int임
- 이를 int로 읽어서 비교함

```c++
typedef struct {
    unsigned int sort_key;
    userdata_t user;
} radix_userdata_t;
```

![img_206.png](old_note/COMP2200/week6/img_206.png)

- 나이를 뒤집으면 내림차순으로 정렬하는 것과 마찬가지

![img_207.png](old_note/COMP2200/week6/img_207.png)

- sex_t는 2비트만 필요함
- 열거형 원소가 3개뿐이라서 그럼
    - 00, 01, 10
    - 2비트면 4개까지 표현 가능하니까 2비트로 충분함
- age는 16비트 필요하지만, 30비트나 차지함

```
typedef enum {
    SEX_MALE,
    SEX_FEMALE,
    SEX_UNKNOWN
} sex_t;
```

![img_208.png](old_note/COMP2200/week6/img_208.png)

- 성별이 추가되면 어떻게 하나요?

![img_209.png](old_note/COMP2200/week6/img_209.png)

- SEX_UNKNOWN이 enum의 마지막 멤버로 enum의 수를 알 수 있어야함.
- set_t가 2비트만 필요하다는 가정을 보장

![img_210.png](old_note/COMP2200/week6/img_210.png)