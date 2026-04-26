# Week1

## 수업 일정

C89/ANSI-C 내용이 강의에서 70%정도 차지한다. 그만큼 중요하다. C99, C11과 그 이후는 나머지

![img.png](old_note/COMP2200/week1/img.png)

이렇게 역사대로 배우는 이유는 무엇일까? 내가 코딩하는 플랫폼에 맞게 코딩을 해야하기 때문이다. 이것을 판단하는 능력도 중요하다.

## 언매니지드 언어를 배워야하는 이유

- 메모리 동작 원리
- CPU 동작 원리
- 컴퓨터처럼 생각하는 방법
- 매니지드 언어에서 작동하는 모든 마법같은 기능의 원리

![img_1.png](old_note/COMP2200/week1/img_1.png)

## 언매니지드 언어로서의 C

![img_2.png](old_note/COMP2200/week1/img_2.png)

- 간접참조(indirection) 개념을 훈련할 기회
    - 사람은 직관적으로 눈 앞에 보이는 것을 잘 다룬다. 간접참조를 훈련해 눈 앞에 보이지 않더라도 믿고 따르는 능력(?)을 기를 수 있다.
    - 컴퓨터 구조상 간접참조 할 수 밖에 없는 것들이 있다.

![img_3.png](old_note/COMP2200/week1/img_3.png)

## C언어는 모든 언어의 어머니

- 현재 TIOBE Top10 프로그래밍 언어들이 대부분 C의 영향을 받음

## C89 표준에 대한 개요

![img_4.png](old_note/COMP2200/week1/img_4.png)

![img_5.png](old_note/COMP2200/week1/img_5.png)

- 소형 하드웨어는 그것을 직접 제어하는 전용 운영체제가 있음

## Hello World!

```c
#include <stdio.h>
```

## #include

![img_6.png](img_6.png)

- C#의 using 지시문(directive)와 비슷한 일을 한다. 즉 다른 파일에 구현된 변수나 함수를 가져와서 사용할 수 있게 해준다.
- 하지만 using 지시문과 다르게 똑똑하지 않다. 뭔가 주먹구구 식으로 처리한다. 즉 처리하는 동작 방식이 다르다.
- #include 지시문은 전처리기(preprocessor)에 의해 처리된다. 전처리기는 컴파일하기 전 텍스트를 `복붙`해주는 역할을 한다. 여기서 텍스트는 소스 코드를 말한다.

![img_7.png](img_7.png)

- <> 안의 단어는 실제 디스크 상에 존재하는 파일 이름이다.
- 즉 파일을 찾아서 포함하는 것이다.

### #include의 동작 방법

![img_8.png](img_8.png)

![img_9.png](img_9.png)

![img_10.png](img_10.png)

동작 과정을 살펴보자.

1. 전처리기는 #include 지시문을 만나면 <> 안의 파일을 찾는다.
2. hello_pocu.c와 같이 원래 c로 끝나는 파일은 메모리에 그대로 둔 상태에서, <>안의 파일 내용을 복사한다.
3. <> 구문을 제거하고 복사한 내용을 붙여넣는다.
4. 따라서 최종 결과는 header 파일의 모든 내용이 hello_pocu.c에 텍스트가 복사된다.

그래서 결국 컴파일할 때 stdio.h를 포함한 모든 내용이 hello_pocu.c에 포함된다. 사용하지 않는 다른 함수도 포함되있다.

### #include 사용법

![img_11.png](img_11.png)

- stdio.h에 한해서는 <>을 사용하자.

## C표준 라이브러리

![img_12.png](img_12.png)

stdio.h는 C표준 라이브러리의 일부이다.

### stdio.h의 역할

![img_13.png](img_13.png)

- 표준 입력과 출력을 담당하는 라이브러리

## main(void) 함수

![img_14.png](img_14.png)

- 프로그램의 entry point
- C 코드를 빌드해서 나온 실행파일을 실행하면 main 함수가 자동으로 실행됨
    - .exe는 windows 계열
    - .out는 UNIX 계열

![img_15.png](img_15.png)

- 반드시 int형을 반환해야함
    - 0: 프로그램이 정상 종료
    - 0이 아닌 값: 프로그램이 비정상 종료
        - 일반적으로 양수값을 에러 코드로 사용한다. 따라서 실행하는 사람이 어떤 잘못을 했는지 판단할 수 있다.

### 프로그램 종료코드 확인하기: 윈도우 CMD

![img_16.png](img_16.png)

화면에 에러코드를 바로 보여주지 않는다.

### 프로그램 종료코드 확인하기: 리눅스 Shell

![img_17.png](img_17.png)

### main(void)에서 void

![img_18.png](img_18.png)

- 매개변수에 아무것도 안 받으면 명시적으로 void 쓰는 습관을 기르자.

## main() 함수와 커맨드 인자

![img_19.png](img_19.png)

## printf()

![img_20.png](img_20.png)
![img_21.png](img_21.png)
![img_22.png](img_22.png)

### printf로 문자열 출력하기

![img_23.png](img_23.png)

### printf로 정수 출력하기

![img_24.png](img_24.png)

핵심은 서식문자(formatting)을 변수로 변환해서 보여준다는 것이다.

그리고 불편한점을 코드로 확인해보자.

```csharp
Console.WriteLine("{1} + {0}", num1, num2);
Console.WriteLine($"{num2} + {num1}");
```

csharp는 이런식으로 문자열 내에서 포메팅의 순서를 바꿔서 출력할 수 있다. 하지만 C언어는 이런식으로 출력할 수 없다.

```c
printf("%d + %d", num1, num2);
printf("%d + %d", num2, num1);
```

매개변수의 순서를 바꿔주어야 한다.

### printf로 둘다 출력하기

![img_25.png](img_25.png)

## 주석(comment)

![img_26.png](img_26.png)
![img_27.png](img_27.png)

/**/만 지원한다.

엄밀히 말하면 C89 표준에서 그렇다. 그 이후 //도 지원하긴 함.

## C 언어의 기본 문법

### C는 절차적 언어

![img_28.png](img_28.png)
![img_29.png](img_29.png)
![img_30.png](img_30.png)

데이터와 프로세스가 분리되는 것이 컴퓨터 구조에 일치한다. CPU에서 계산하고 메모리에 저정한다.

- 함수는 기본적으로 전역 함수(global)
- 변수는 함수 밖에 선언되어 있으면 global 함수 블록 안이면 local

## 자료형 개요

![img_31.png](img_31.png)
![img_32.png](img_32.png)

- C는 unsigned 단어를 자료형 이름 앞에 넣어줘야 한다.
- unsigned대신 signed를 붙일 수 있다. 하지만 그냥 unsigned나 signed를 생략하면 signed이다.
- 예외로 1바이트를 나타내는 char이 있다. (가장 작은 단위)

## char형 개요

### char의 크기

![img_33.png](img_33.png)

표준에서 최소 8비트라고 명시했기 때문에 컴파일러에 따라서 char의 크기가 다를 수 있다.
그렇다면 컴파일러에서 char의 정확한 크기를 확인할 수 있는 방법은??

### char가 몇 비트인지 찾는 방법

![img_34.png](img_34.png)

1바이트를 CHAR_BIT의 크기라고 부르는 배경을 생각해보자. 다양한 하드웨어에 따라 메모리에 최소로 저장할 수 있는 단위가 달라진다.

- CHAR_BIT는 메모리의 최소 저장 단위다. 그리고 이를 1바이트라고 정의한다. 1바이트의 구체적인 크기는 기계에 따라 다르다.
- 1바이트 == 메모리의 최소 저장 단위 == CHAR_BIT

### char과 ASCII 코드

![img_35.png](img_35.png)

clang에서 char의 크기는 8비트다. 따라서 1바이트로 표현할 수 있는 수는 2^8개이다.
그리고 이를 ASCII 코드로 표현할 수 있다. 왜냐하면 아스키코드는 2^7개의 숫자를 표현할 수 있기 때문이다.

### signed/unsigned char

![img_36.png](img_36.png)

C 표준에 char가 signed인지 unsigned인지 정하지 않았기 때문에 컴파일러마다 char가 signed/unsigned가 달라진다.

- clang에서는 signed char로 정의되어 있다.

![img_37.png](img_37.png)

char을 문자를 표현하기 위해 문자형으로 사용할 것인지, 정수를 표현하기 위해 정수형으로 쓸 건지에 따라
unsigned/signed를 정할 때 제약이 생긴다.

- 문자형으로 사용하는 경우 7비트만 사용하면 된다. 따라서 signed/unsigned를 정하지 않아도 된다.
- 8비트 정수형으로 사용하는 경우 signed/unsigned를 정해야 한다.
    - unsigned char(-128~127)
    - signed char(0~255)
    - 이렇게 각각 표현하는 자료형이 달라지기 때문에 singed/unsigned를 정해야 한다.
- 이것을 정하지 않으면 다른 플랫폼에 포팅(porting)할 때 문제가 생길 수 있다.
    - 0~127범위만 공통으로 사용하기 때문에 괜찮음!

### char의 부호 여부를 판단하는 방법

![img_38.png](img_38.png)

근데 굳이 확인할 바에는 unsinged/signed 잘 넣어주자..

- 결론: C 표준은 signed/unsigned가 생략된 char가 signed인지 unsigned인지 정하지 않았다. 따라서 컴파일러마다 구현이 달라진다. 하지만 대부분의 플랫폼에서는 signed로 정의되어
  있다.

### char로 표현 가능한 숫자의 범위

[표준]
![img_39.png](img_39.png)

왜 -128이 아니라 -127일까? `1의 보수` 방법을 사용하고 있기 때문이다.
아주 예전에는 1의 보수를 사용하는 기계가 있었다...

- 주의점: C 표준에서는 1의 보수를 사용하기 때문에 signed char의 범위가 -127~127이다!

[실제]
![img_40.png](img_40.png)

대부분 플랫폼에서는 이렇게 사용한다.

- char의크기: 8비트
- 정수형 signed char: -128~127
    - signed를 생략한 char은 signed char로 간주한다.
- 정수형 unsigned char: 0~255

## short 개론

[표준]
![img_41.png](img_41.png)

표준에 따르면 다음과 같다.

- unsigned/signed 안 붙이면 signed로 간주
- 최소 16 비트 && char형 크기 이상
    - char형이 가장 작은 단위
- 포팅 문제 없는 값의 범위
    - unsigned short: 0~65535
    - signed short: -32767~32767
        - 표준에서는 1의 보수를 사용한다.

[실제]
![img_42.png](img_42.png)

- short의 크기: 16비트
- 범위
    - unsigned short: 0~65535
    - signed short: -32768~32767
- CPU에서 계산할 때 보통 int 단위로 하기 때문에 short를 사용하면 성능의 문제가 생길 수 있다.(`단점`) 계산할 때 변환 과정이 필요하기 때문
    - 하지만 short로 메모리를 아낄 수 있다는 `장점`이 있다.

## int 개론

[표준]
![img_43.png](img_43.png)

- unsigned/signed 안 붙이면 signed로 간주
- 최소 16 비트 && short형 크기 이상
    - ??? 왜 16 비트 이상인가?

### C 표준에서 int가 왜 16비트 이상일까요?

![img_44.png](img_44.png)

- int의 원초적 의미: integer(정수)
- CPU에서 정수를 처리하라고 명령할 때 int 단위로 처리한다.
- CPU에는 ALU(산술 논리 장치)가 있다. 이 것의 기본 데이터 크기를 word라고 부르며, word의 크기는 레지스터의 크기와 일치한다.
- 따라서 CPU에서 정수를 처리할 때는 word 단위로 처리한다. 그리고 이 word의 크기가 int의 크기와 일치한다.
- 따라서 CPU의 word 크기가 달라지면(하드웨어 어떻게 만드느냐에 따라) int의 크기도 달라진다.

### 64비트 플랫폼의 등장

![img_45.png](img_45.png)

- 너무 오랜기간 int를 32비트로 사용했다.
- 기존 코드 + 다른 언어도 그렇고 32비트로 int를 사용해서 C 표준을 어기고 유지한다.
- C 표준에 따르면 CPU가 64비트면 word가 64비트고 int도 64비트여야 한다.

다시 실제 사용할 때 int에 대해서 알아보자.

[실제]
![img_46.png](img_46.png)

- 포팅에 안전한 범위: short
    - 포팅에 안전하려면 엄격하게 C 표준의 최소 조건을 지키면 됨
- int의 크기: 32비트
- 범위
    - unsigned int: 0~4294967295
    - signed int: -2147483648~2147483647 (2의 보수)

### int 리터럴

![img_47.png](img_47.png)

- u/U는 int(signed)의 범위를 넘어서는 양수 값을 표현할 때 붙여야한다.
- `컴파일 경고`가 나온다.
    - 2147483648은 signed int의 범위를 넘어서기 때문에 컴파일 경고가 나온다.
        - 리터럴이 없기 때문에 컴파일러는 `int`로 간주
        - 리터럴을 추가하면 `unsigned int`로 간주하기 때문에 경고가 사라짐
    - unsigned int가 표현할 수 있기 때문에 `컴파일 에러`가 발생하지는 않음(아마도?)

## long 개요

[표준]
![img_48.png](img_48.png)
![img_49.png](img_49.png)

- unsigned/signed 안 붙이면 signed로 간주
- 최소 32비트 && int형 크기 이상
- 포팅 안전한 범위: -2147483647~2147483647(1의 보수) (signed int와 같음)
- 최소 64비트인 정수형은 C89에 없음...
- 32비트 시스템에서 long은 32비트, 64비트 시스템에서 long은 64비트라서 헷갈립니다..(질문 필요!)
    - 32비트 시스템에서 long == int임;;

### long의 리터럴

![img_50.png](img_50.png)

- l(L)은 long을 나타내는 접미사
    - int의 범위(32비트)를 벗어나는 수(Ex: 2147483648)를 표현할 때 안 붙이면 `컴파일 경고`를 준다.
- u(U)는 unsigned를 나타내는 접미사

## float 개요

![img_51.png](img_51.png)
대부분 언어에서 부동 소수점 자료형은 IEEE 754 표준을 따른다. 하지만 C 언어가 동작하는 하드웨어는 IEEE 754가
나오기 전 부터 존재했다.

![img_52.png](img_52.png)
[표준]

- 크기는 char 이상이기만 하면 된다.
- unsigned 형이 없음(IEEE 754 표준에도 없다.)
    - unsigned 붙이면 `컴파일 에러`
- signed 붙이면 `컴파일 에러`

[실제]

- float의 크기: 32비트
- 범위: IEEE 754 Single
    - 1.175494351e-38 ~ 3.402823466e+38
    - 1비트: 부호, 8비트: 지수, 23비트: 가수

### float의 리터럴

![img_53.png](img_53.png)

- unsigned가 없기 때문에 u리터럴 사용하면 `컴파일 에러`

## double

[표준]
![img_54.png](img_54.png)

- 표준에 따르면 CPU가 계산하는 기본 데이터 크기(질문: 이게 int에서 설명한 word와 같은건지?)
- signed/unsigned 개념이 없이 모두 signed로 간주
    - 따라서 signed, unsigned 붙이면 컴파일 에러
- float은 CPU가 계산하는 기본 데이터 크기가 아니라, 빠르게 연산하기 위해 만든 더 작은 부동소수점형

[실제]
![img_55.png](img_55.png)

- double의 크기: 64비트
- 범위: IEEE 754 Double
    - 2.2250738585072014e-308 ~ 1.7976931348623158e+308
    - 1비트: 부호, 11비트: 지수, 52비트: 가수

## long double 개요

[표준]
![img_56.png](img_56.png)

- signed/unsigned 개념이 없음
    - signed/unsigned 붙이면 `컴파일 에러`
- double 보다 크면 됨
- 잘 사용 안함.
  [실제]
- 크기: double 보다 큼

## C89의 기본 자료형

![img_57.png](img_57.png)

## 교훈

![img_58.png](img_58.png)

- long이 32비트인 것만 기억하자.. long 대신 int 씁시다!

## bool형 개요

![img_59.png](old_note/COMP2200/week1/img_59.png)
![img_60.png](old_note/COMP2200/week1/img_60.png)

- bool형을 안 쓰는 이유: 정수로 대신 쓸 수 있어서
    - 0: false
    - 0이 아닌 값: true
- 하드웨어에서도 0이냐 아니냐만 있음

### 어셈블리 예

![img_61.png](img_61.png)

- cmp할 때 빼서 계산함. 즉 argc의 값이랑 0이랑 뺀 결과가 0인지 확인한다. 그리고 je(점프 이퀄)로 점프한다.

### while문에서 사용하기

![img_62.png](img_62.png)

- 이런 코드 나쁜 조건식임
    - 가독성이 좋지않아요

### 코딩표준: 참,거짓 반환하기

![img_63.png](img_63.png)

- 거짓일 때: 0
- 참일 때: 1

## 열거형

![img_64.png](img_64.png)

- int -> enum 대입 가능
- enum -> int 대입 가능
- enum -> 또 다른 enum 대입가능
- 따라서 실수를 막을 수 있는 장점이 사라짐 ㅠㅠ
  ![img_65.png](img_65.png)
- C#에서는 다른 enum에 대입하면 컴파일 에러가 발생했죠?
    - EDay -> EMonth 대입X
    - EMonth -> EDay 대입X
- enum day에서 DAY_MONDAY = 0이면 DAY_TUESDAY = 1이다.

## 변수 선언

![img_66.png](img_66.png)

- 변수 선언은 반드시 블록 시작에서 선언하고 뒤에서 대입해야한다.. 안 그러면 `컴파일 오류`
    - 불편함점..

![img_67.png](img_67.png)

- 함수와 스택 메모리가 동작할 때 함수 내부에서 쓰는 모든 변수에 대한 메모리를 예약한다.
    - 모든 변수 선언이 블록 시작에서 되면 컴파일러가 스택 메모리에 한 번에 할당할 수 있어서 (컴파일러가) 편하다.
    - 아마 예전에는 컴파일러 구현이 어려워서 그런 것 같다.(POPE 뇌피셜)

## 연산자 개요

![img_68.png](img_68.png)
![img_69.png](img_69.png)
![img_70.png](img_70.png)

- 연산자 우선순위는 `결합 순위`와 관련이 있다.
    - 우선 순위가 같으면 결합 법칙에 따라 방향이 다르게 결합된다.
    - 결합 순위가 다르면 높은 순위가 먼저 평가된다.
- 연산자 우선순위는 `평가 순위`랑 관련이 없다.

## sizeof() 연산자

![img_71.png](img_71.png)
![img_72.png](img_72.png)

- 피연산자의 크기를 바이트 단위 변환해준다.
    - 배열도 피연산자에 포함된다
- 함수가 아니라 연산자다!
    - 따라서 sizeof는 컴파일 중에 평가된다.(실행 중 X)
- 이 연산자가 반환하는 값은 `부호없는 정수형` size_t이다.

## size_t

![img_73.png](img_73.png)

- size_t는 부호없는 정수형이다.
- typedef로 정의되어 있다.
    - 플랫폼마다 정의가 다르다.
- 실제 데이터형은 아니다!

### size_t의 크기

![img_74.png](img_74.png)

- size_t의 크기는 배열의 바이트 크기를 담을 수 있어야한다. 배열의 크기는 선언을 어떻게 하냐에 따라 다르다.
- C99 표준에서 최소 16비트를 요구했음
- 보통은 unsigned int를 사용한다.
    - 32비트라서 16비트 이상을 만족한다.

### size_t의 용도

![img_75.png](img_75.png)

- 좋은 예는 반복문이나 배열에 접근할 때 사용하는 것
    - 인덱스는 음수가 될 수 없기 때문임
- 위 예시 코드에서 int배열에 size_t형을 바로 대입하는데, 형 변환을 해주는 것이 좋아요!

### size_t와 -1

![img_76.png](img_76.png)

- indexOf 처럼 색인을 반환하는 함수에서 사용한다.
- 유효하지 않은 색인값을 -1과 비트패턴이 동일한 값을 반환한다.
- size_t는 unsigned int의 값과 동일하니까 -1 비트패턴이면 4294967295가 된다.
  ![img_77.png](img_77.png)
- 만약 최대 비트값인 4294967295개의 요소를 가지면?
    - 애초에 unsigned int라서 양수 값 개수가 거의 2배인데... 이런 걱정은 할 필요가 없다. 2배 큰게 더 실용적으로 굿

### 유효하지 않은 색인에서 예외를 던지는건 어떨까요?

![img_78.png](img_78.png)

- C언어는 예외를 던지는 기능이 없다.

## sizeof() 연산자에서 같은 배열이라도 크기가 다르게 나올 수 있다!

![img_79.png](img_79.png)

- 배열의 경우 함수 인자로 받을 경우 다른 결과가 나온다.
    - 배열의 크기는 함수 인자로 넘길 때 포인터로 변환되기 때문이다.
    - 따라서 sizeof() 연산자는 포인터의 크기를 반환한다.
    - 32비트 컴퓨터에서는 4바이트(위 예시), 64비트 컴퓨터에서는 8바이트가 나온다.
- 배열을 인자로 넘길 때 문법에 주의하자 `char data[]`이런 식이다.

## 역참조 연산자*

![img_80.png](img_80.png)
![img_81.png](img_81.png)

- 포인터형 변수에만 역참조 연산자를 사용할 수 있다.

## 주소 연산자&

![img_82.png](img_82.png)

- 비트연산자 and랑 구분하자
    - 피연산자가 2개면 비트연산자 and
- 주소 연산자는 피연산자가 1개다.
- 구조체, 포인터, 공용체 배우고 새로 정리

## 구조체와 공용 멤버 접근 연산자 . ->

![img_83.png](img_83.png)

- 구조체, 포인터, 공용체 배우고 새로 정리

## 비교 연산자 논리 연산자

![img_84.png](img_84.png)

## 조건 연산자

![img_85.png](img_85.png)

- 3항 연산자

## if 문

![img_86.png](img_86.png)
![img_87.png](img_87.png)

- C의 불 표현식(비교 연산자, 조건 연산자의 반환값)
    - true 면 1, false면 0
- 0이 아닌수를 true로 간주한다.
  ![img_88.png](img_88.png)
- 그래서 if 문의 조건식에 숫자 값을 넣어도 된다.
- 정수형 말고, 포인터형, float형 등도 가능하다.
    - float 0.0의 비트패턴이 0이라서 false로 간주한다.
- 결국은 비트패턴이 컴퓨터가 판단하는 기준이다.

## switch/case 문

### case 레이블에 사용가능한 데이터형

![img_89.png](img_89.png)
![img_90.png](img_90.png)

- C는 정수형만 가능하다

### fall-through

![img_91.png](img_91.png)

- break를 안 쓰면 fall-through가 발생한다.
- switch 문을 곧바로 탈출하지 않고 그 아래 있는 코드를 계속 실행한다.
    - 다른 case문, default문을 실행한다.
    - 다른 case문에서 break를 만나거나, switch 블록의 끝 즉 default문까지 실행하면 탈출한다.
- fall-through는 C언어의 특징이다.
    - C#에서는 break가 없으면 컴파일 에러가 발생한다.

![img_92.png](old_note/COMP2200/week1/img_92.png)
![img_93.png](old_note/COMP2200/week1/img_93.png)

- 의도적 fall-through가 아니면 break를 써주자.
- 코딩 표준으로 제어

### case 레이블에 사용할 수 없는 데이터형

![img_94.png](old_note/COMP2200/week1/img_94.png)

- case 레이블은 반드시 상수만!
    - 컴파일 타임에 결정된다.
    - 컴파일러가 자동으로 if문 만들어준다.
- 배열의 값은 런타임에 알 수 있다!! 따라서 case 레이블에 사용할 수 없다.

## for문

![img_95.png](old_note/COMP2200/week1/img_95.png)

- 주의할 점: for문의 초기화 코드에 자료형을 선언할 수 없다.
    - 컴파일 오류 발생
- C89 표준에서 변수 선언은 제일 위에서 해야한다.

## while 문

![img_96.png](old_note/COMP2200/week1/img_96.png)

### break

![img_97.png](old_note/COMP2200/week1/img_97.png)

### continue

![img_98.png](old_note/COMP2200/week1/img_98.png)

- 밑에 코드 무시하고, 다음 회차 진행시켜

### 코딩표준 while 문

![img_99.png](old_note/COMP2200/week1/img_99.png)

## do while 문

![img_100.png](old_note/COMP2200/week1/img_100.png)

## 함수

![img_101.png](old_note/COMP2200/week1/img_101.png)

### C 함수 특징

![img_102.png](old_note/COMP2200/week1/img_102.png)

- 클래스 사라짐
    - 프로퍼티 없음
    - 접근 제어자 없음
- 전역 함수

### 함수 오버로딩 안 됨

![img_103.png](img_103.png)

- 함수 오버로딩 없음
    - 함수명을 다르게 만들어야...

### C89 컴파일러 가정

![img_104.png](img_104.png)
![img_105.png](img_105.png)

- 함수 정의(definition) 과 선언을 구분하자
- 가정: 반환형은 int, 매개변수는 아무거나 즉 공백

## 해결법

![img_106.png](img_106.png)

- 함수 정의를 위에 해주면 됨!

## 너무 불편하다.

![img_107.png](img_107.png)

- 위 아래 왔다 갔다...

## 함수 선언(declaration)

![img_108.png](img_108.png)

- 함수 원형(prototype)만 선언
    - 구현체 X
    - 반환형, 함수명, 매개변수만 선언

### 정의와 선언

![img_109.png](img_109.png)

## 함수 선언 위치

![img_110.png](img_110.png)

- 함수를 사용하기 전에 선언하면 되나, 보통 제일 위에 선언하는 것이 국룰
    - forward declaration
- 혹은 헤더 파일에 넣음
    - 이게 더 좋은 방법!

## 전방 선언(forward declaration)의 원리

![img_111.png](img_111.png)
![img_112.png](img_112.png)
![img_113.png](img_113.png)
![img_114.png](img_114.png)

- 컴파일러는 실제 어디로 가서 코드를 찾아야하는지(메모리 주소)를 구멍으로 남김
- 이 구멍의 값(메모리 주소)로 jump해서 실제 함수를 찾아서 호출하는 방식
- 이 구멍을 채우는 것이 링커의 역할
    - 링커는 여러 오브젝트 파일을 하나로 합쳐준다.
    - 링커는 이 구멍을 채워준다.

## 코딩 표준

![img_115.png](img_115.png)

- 함수 선언 반드시하자!

## 함수의 평가 순서

![img_116.png](img_116.png)
![img_117.png](img_117.png)
![img_118.png](img_118.png)

- unspecified
    - 표준에서 명시하지 않음. 대신 경우의 수를 줌
- 순서는 컴파일러 마음

### 순서가 ㄹㅇ 상관없음

![img_119.png](img_119.png)

## 문제가 되는 경우

![img_120.png](img_120.png)
![img_121.png](img_121.png)

- 해법은 순서가 보장 안 되면... 따로 따로 두 줄에 나눠적자!
- sequence point라는 개념. 순서를 보장하는 지점
    - ;가 sequence point

## undefined behavior: 결과가 정의되지 않음

![img_122.png](img_122.png)
![img_123.png](img_123.png)

## 기본적으로 한 줄에서 동일한 변수를 여러 번 바꾸면 위험하다!

![img_124.png](img_124.png)
![img_125.png](img_125.png)

- 이런 코드 작성 ㄴㄴ해
-

![img_126.png](img_126.png)
![img_127.png](img_127.png)

- = 연산자도 마찬가지임!

## 연산자 우선 순위와 평가 순서

![img_128.png](img_128.png)

- 평가 순서와 연산자 우선 순위는 아무런 상관이 없다
    - 각 함수는 sequence point가 아니다!

![img_129.png](img_129.png)
![img_130.png](img_130.png)

- unspecified behavior

![img_131.png](img_131.png)

## 평가 순서를 강제하는 연산자

- ||, && 는 sequence point다
    - 즉 예네 앞에 오는 식은 평가를 우선적으로 해야한다.
- 평가와 실행은 다른 개념이다.
    - 전위 연산자는 실행 후 평가된다.

![img_132.png](img_132.png)
![img_133.png](img_133.png)
![img_134.png](img_134.png)
![img_135.png](img_135.png)

## 다른 예시

![img_136.png](img_136.png)

- 후위 연산자는 평가 후 실행된다.
    - 따라서 i는 0으로 평가된 후 후위 연산자가 실행되 i값은 1로 바뀐다.
- ||의 왼쪽이 거짓이기 때문에 ||의 오른쪽도 평가 및 실행한다.

![img_137.png](img_137.png)

- &&도 sequence point다
- 왼쪽 식부터 평가 및 실행한다.
- 전위 연산자는 실행 후 평가된다. 따라서 j값이 1이 된 후 평가가 된다.
- &&의 왼쪽이 참이기 때문에 &&의 오른쪽도 평가 및 실행한다.
- 전위 연산자는 실행 후 평가된다. 따라서 k값이 1이 된 후 평가가 된다.

![img_138.png](img_138.png)

## short-circuit

![img_139.png](img_139.png)

## 정리

![img_140.png](img_140.png)

- 한 줄에 있는 피연산자들의 평가 순서는 기본적으로 보장되지 않는다!

## 범위(scope) 개요

![img_156.png](img_156.png)

- 4가지 범위

## 블록 범위

![img_157.png](img_157.png)

- for문 내부의 변수가 바깥의 변수에 접근할 수 있음
    - 반대는 불가능

```

int main(void)
{

    for (int i = 0; i < 5; ++i) {
        int inner = 5;
        i++;
    }

    inner = 6;

    return 0;
}
```

![img_143.png](img_143.png)

- 블록 범위는 중괄호로 둘러싸인 범위를 말한다.
- 변수 선언은 블록 범위의 처음에만 할 수 있다.
    - 그래서 아래 변수를 nested block을 선언하고 다시 맨 위에 선언하는 식으로 컴파일 오류를 막을 수 있음 ㅇㅇ;

### 블록 범위와 변수 선언 위치

![img_144.png](img_144.png)

- 원칙 상 사용하기 직전에 변수 선언하는 것이 좋은 방식이라서..
    - 근데 블록을 사용하면 들여쓰기가 되서 가독성이 안 좋아진다.

### 변수 가리기 금지(variable shadowing)

![img_145.png](img_145.png)

## 파일 범위

![img_146.png](img_146.png)

- 엄밀히 말하면 translation unit 범위
    - translation unit이 파일과 범위가 같을 수 있다.

### 파일 범위의 변수는 메모리 어디에 위치할까?

![img_147.png](img_147.png)

- 지역 변수를 생각해보자. 지역 변수는 함수가 실행되고 나서 사라진다.(스택 메모리)
- 그렇다면 파일 범위 변수는?
    - 전역 변수
    - 다른 파일에서도 링크 가능
    - 데이터 섹션에 저장된다.
- 메모리 주소 증가 방향을 잘 보자. 아래에서 위로 증가한다.

## 함수 범위

![img_148.png](img_148.png)

- 유일한 예가 함수의 label이다.
    - goto와 같이 사용된다.
    - 함수 안에서 선언된 레이블은 함수 어디에서라도 접근 할 수 있다. (위-아래 순서를 따르지 않음)
        - 다른 범위에서는 위에 선언된 것만 접근 가능하죠?
- 함수 범위는 함수의 시작과 끝을 말한다.

## 함수 선언 범위

![img_149.png](img_149.png)

- 함수 선언의 매개변수 목록에 있는 매개변수들은 서로서로 접근할 수 있다.

## const 키워드 개요

![img_150.png](img_150.png)

- 매직 넘버 보다는 상수

## C의 const

### 예시 1

![img_151.png](img_151.png)

- 수정하면 안 되는 변수를 수정해도, 컴파일러는 잡을 수 없음

![img_152.png](img_152.png)

- C에서 const 키워드로 수정을 막을 수 있다.
    - const 키워드가 매개변수에 붙어있으면 함수 범위 안에서 수정할 수 없다.

### 예시 2

![img_153.png](img_153.png)

- data 배열의 최대 색인을 벗어날 수 있다.

![img_154.png](img_154.png)

- C에서는 지역변수를 const로 만들면 컴파일 도중에 결정되는 값이 아니더라도, 실행 중 결과값이 결정되고 그 결과값을 바꿀 수 없다는 것을 컴파일러에게 알려준다.
- C#에서는 애초에 const로 선언하면 컴파일 도중에 결정되는 상수 값만 넣을 수 있다.

### const 베스트 프렉티스

![img_155.png](img_155.png)

- 기본으로 모든 변수에 const 붙이자
    - Rust let, Kotlin val
- 실수를 막아주는 좋은 코딩
- for문 지역변수 i에는 const 쓰면 안 되겠죠?~~~~