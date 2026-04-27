# Week7

## printf(), scanf()의 매개변수는 특별하다

![img.png](old_note/COMP2200/week7/img.png)

![img_1.png](old_note/COMP2200/week7/img_1.png)

- C 언어는 함수 오버로딩이 없음
- printf()와 scanf()는 매개변수의 개수와 타입이 다양하게 변함, 무언가 마법이 있음

## 가변 인자 함수(variadic function)

![img_2.png](old_note/COMP2200/week7/img_2.png)

- 가변 인자 함수는 정해지지 않는 매개변수를 허용함
    - 매개변수의 수가 정해지지 않음
    - 매개변수의 자료형도 정해지지 않음
- '...' 문법으로 표현
- 가변 인자 함수를 사용할 때, 반드시 최소 한 개의 정해진 자료형의 매개변수가 필요
    - 일반적인 매개변수가 반드시 1개 필요함

### Reference

[ap?](https://stackoverflow.com/questions/24345199/what-does-ap-stand-for-in-c-examples)

## 가변 인자 함수는 언제 사용하는가?

![img_3.png](old_note/COMP2200/week7/img_3.png)

- 메모리 블록을 크게 잡아놓고, 여러 가지 자료형을 저장하는 함수
- 스택 메모리에 대한 이해도를 높일 목적으로 공부한다고 생각하면 됨

## 가변 인자 함수의 예

![img_4.png](old_note/COMP2200/week7/img_4.png)

- stdarg.h 헤더 파일을 include 해야 함
- va_list, va_start, va_arg, va_end 매크로를 사용함

## va_list

![img_5.png](old_note/COMP2200/week7/img_5.png)

- 가변 인자 목록
- 구체적인 구현은 컴파일러 제조사에서 알아서
- 메크로 함수를 사용할 때 필요한 정보가 포함
    - 함수랑 다름, 함수와 비슷하게 작동하는 메크로

## va_start

![img_6.png](old_note/COMP2200/week7/img_6.png)

- 메크로 함수
- '...'(가변 인자)에 접근하기 전 반드시 호출해야 함
- va_list에 필요한 초기화 수행
    - 가변 인자가 아닌 매개변수를 반드시 필요로함
- 가변 인자 목록과 가변 인자가 시작하기 `바로 직전` 함수의 매개변수를 매개변수로 받음

## va_end

![img_7.png](old_note/COMP2200/week7/img_7.png)

- 메크로 함수
- '...'(가변 인자)에 접근이 끝난 후 반드시 호출해야 함
- 호출 뒤 더 이상 가변 인자 목록을 사용할 수 없음
- clean up 작업 수행

## va_start, va_end 사용 시 중괄호를 사용해 가독성을 높이기

![img_8.png](old_note/COMP2200/week7/img_8.png)

- va_start, va_end를 쌍으로 사용하자

## va_arg

![img_9.png](old_note/COMP2200/week7/img_9.png)

- 메크로 함수
- '...'(가변 인자)에서 다음 인자를 가져옴
- 프로그래머가 어떤 자료형으로 읽어올 지 지정해줘야함, 두 번째 매개변수로 알려줌
- 표준상의 문제로 두 번째 매개변수가 기본 자료형이면 자동 승격됨
- 그래서 두 번째 매개변수에 기본 자료형을 사용할 때 int, double 만 사용하자
    - 이 때문에 printf, scanf의 서식 지정자 %f는 double, float을 모두 받음
    - 어차피 float은 double로 승격되어 받아들이기 때문

### 구조체도 가변 인자로 넣을 수 있음

![img_10.png](old_note/COMP2200/week7/img_10.png)

- va_arg의 두 번째 매개변수에 구조체를 넣어도 됨
- 기본 자료형이 아니라서 승격은 없음

## 가변 인자 목록에서 자료를 읽는 원리: 전처리기, 매크로 함수

![img_11.png](old_note/COMP2200/week7/img_11.png)

- C는 실행 중에 자동으로 자료형을 판단하는 기능이 없음
- 컴파일 되기 전 어떤 자료형으로 읽어야하는지 알려줘야함

![img_12.png](old_note/COMP2200/week7/img_12.png)

- 컴파일 전 처리하는 장치가 있음
- 전처리기
- 전처리기가 매크로 함수의 구현 코드로 대체함

![img_13.png](old_note/COMP2200/week7/img_13.png)
![img_14.png](old_note/COMP2200/week7/img_14.png)

- 예상되는 구현은 아래와 같음
- int형으로 읽고, 4바이트 만큼 포인터를 이동

## 가변 인자 함수 메모리 뷰

### 일반적인 함수 호출 시 메모리 뷰

![img_15.png](old_note/COMP2200/week7/img_15.png)

- 어떤 함수를 호출할 때 마다 매개변수를 순서대로(함수 호출 규약에 따라 가장 마지막 매개변수 부터) 스택에 넣음

### 가변 인자 함수 호출 시 메모리 뷰

#### [가변 인자가 아닌 매개변수의 주소는 함수 호출 규약에 따라 리시버가 알 수 있음]

![img_16.png](old_note/COMP2200/week7/img_16.png)

- 가변 인자 함수는 호출할 때 매번 매개변수의 개수가 바뀔 수 있음
- 이 문제는 가변 인자 함수의 리시버에게 해당됨, 가변 인자 함수의 내부 처리를 위해 매개변수를 읽어올 수 있어야함

![img_17.png](old_note/COMP2200/week7/img_17.png)

- 호출자는 매개변수를 모두 알고 있음
- 가변 인자 함수는 호출할 때 매번 매개변수의 개수가 바뀔 수 있기 때문에, 호출자를 통해 스택 메모리에 매개변수를 모두 넣어줌

![img_18.png](old_note/COMP2200/week7/img_18.png)

- 리시버는 가변 인자가 아닌 매개변수는 확실하게 알 수 있음
    - 함수 호출 규약에 따라 매개변수를 읽어올 수 있음
    - 함수 호출 규약에 따라 리시버의 스택 프레임 바로 위가 첫번째 매개변수임
- 즉 그림에서 빨간색으로 표기된 1, 4는 함수 호출 규약에 따라 리시버가 알 수 있음
- 리시버는 나머지 가변 인자를 알 수 없음

- 이 특성은 함수 호출 규약에 따른 특성으로, 일반 함수를 호출하던 가변 인자 함수를 호출하던 동일한 규칙

#### [va_start: 가변 인자 목록이 시작하는 주소를 계산]

![img_19.png](old_note/COMP2200/week7/img_19.png)

- va_start(<가변 인자 목록>, <가변 인자가 시작하는 직전 매개변수>)에서 가변 인자가 시작하는 직전 매개변수에 기초해 가변 인자 목록의 시작 메모리 주소 계산
- 가변 인자가 시작하는 직전 매개변수의 주소는 함수 호출 규약에 따라 리시버가 알 고 있음
- 가변 인자가 시작하는 직전 매개변수의 자료형을 알고 있기 때문에, 가변 인자 목록의 시작 메모리 주소를 계산할 수 있음
- 그림에서는 예시로 가변 인자가 시작하는 직전 매개변수가 int형이라고 가정
- &count는 가변 인자가 시작하는 직전 매개변수의 주소, char*로 형 변환후 count의 자료형인 int의 크기만큼 더해주면 가변 인자가 시작하는 메모리 주소를 알 수 있음

#### [va_arg: 가변 인자를 자료형에 기초해 읽음]

![img_20.png](old_note/COMP2200/week7/img_20.png)

- va_arg(<가변 인자 목록>, <자료형>)에서 가변 인자 목록에서 다음 인자를 읽음
- va_arg의 두번째 매개변수인 자료형을 기반으로 다음 가변 인자의 시작 주소를 계산
- ap.data는 가변 인자 목록의 시작 주소, int*로 형변환해 읽으면 4바이트를 읽을 수 있음, 그리고 *로 역참조를해 값을 val에 대입
- int*로 형변환 후 포인터 산술 연산(++)을 통해 다음 가변 인자의 시작 주소를 계산
    - ap.data += sizeof(int)와 결과가 동일

- 아래는 이 과정을 그림으로 나타냄

![img_21.png](old_note/COMP2200/week7/img_21.png)
![img_22.png](old_note/COMP2200/week7/img_22.png)
![img_23.png](old_note/COMP2200/week7/img_23.png)

#### [va_list의 내부 구현에 대한 추측]

![img_24.png](old_note/COMP2200/week7/img_24.png)

- va_list는 자세한 구현은 모르지만 va_arg 메크로 함수에 필요한 스택 메모리에서 위치를 가리키는 포인터를 가질 것

## 가변 인자 사용 시 규칙

![img_25.png](old_note/COMP2200/week7/img_25.png)

- 가변 인자 앞에 자료형이 특정된 매개변수가 반드시 있어야 함
- 가변 인자 뒤에 자료형이 특정된 매개변수가 있어서 안 됨
- 가변 인자가 아닌 매개변수 목록 우선, 가변 인자 목록 나중에

### [가변 인자의 개수를 리시버에게 알려주기]

![img_26.png](old_note/COMP2200/week7/img_26.png)

- 앞의 예에서는 가변 인자의 개수를 리시버에게 자료형이 정해진 매개변수 count로 알려줌

### [가변 인자의 자료형을 리시버에게 알려주기]

![img_27.png](old_note/COMP2200/week7/img_27.png)

- 가변 인자의 자료형을 리시버에게 알려주기 위해 가변 인자의 자료형을 리시버에게 알려줘야함
- 대표적인 예시가 printf, scanf

![img_28.png](old_note/COMP2200/week7/img_28.png)

- printf의 서식 문자열에서 가변 인자 함수가 어떤 자료형을 읽어야 하는지 알 수 있음, 개수도!

## printf 서식 문자열 컴파일 `경고`

![img_29.png](old_note/COMP2200/week7/img_29.png)

- printf의 경우 표준 함수라서 컴파일러에서 서식 문자열과 가변 인자를 통해 서식 문자열이 적절함을 판단 가능
- 컴파일러가 배려를 해준 것

![img_30.png](old_note/COMP2200/week7/img_30.png)

- 서식 문자열의 지정자 수가 매개변수보다 많으면 컴파일 경고 발생
- 서식 문자열의 지정자 수가 많으면 가변 인자 목록에서 허용하지 않는 메모리에 접근할 수 있음

## 가변 인자에서 데이터를 잘못된 자료형을 읽으면? 실수

![img_31.png](old_note/COMP2200/week7/img_31.png)
![img_32.png](old_note/COMP2200/week7/img_32.png)

- int를 double로 잘 못 읽은 예시

## 코드 보기: 초간단 서식 지정자

```c++
#include "simpleio.h"

int main(void)
{
    printf_simple("c\n", 'A');
    printf_simple("d\n", 10);
    printf_simple("s\n", "Hello");

    printf_simple("\n");
    printf_simple("c d s\n", 'A', 10, "Hello");

    return 0;
}
```

- 간단하게 구현하기 위해 서식 지정자 3개만 지원, %도 생략
- c: 문자 출력
- d: 정수 출력(unsigned int)
- s: 문자열 출력
- 서식 지정자 없이 바로 문자열 출력 가능
    - printf_simple("\n"); 처럼 사용해도 우리가 만든 함수라 clang에서 컴파일 경고를 내지 않음

```c++
#include <stdarg.h>
#include <stdio.h>
#include <string.h>

#include "simpleio.h"

static void print_int_recursive(unsigned int val)
{
    if (val == 0) {
        return;
    }

    print_int_recursive(val / 10);
    putchar('0' + val % 10);    // 아스키 코드 '0'을 이용해 코드의 가독성을 올림
}

static void print_int(unsigned int val) {
    if (val == 0) {
        putchar('0');
        return;
    }

    print_int_recursive(val);   
    // 123이라는 정수가 있으면, 가장 왼쪽 1을 출력하고, 2, 3을 순서대로 출력
    // 10으로 나눠서 몫과 나머지를 구하면 12, 3이 됨 3부터 출력하면 321로 거꾸로 출력하게 됨
    // 가장 왼쪽 자리 부터 출력하기 위해 스택 자료구조, 즉 재귀함수를 사용
}

void printf_simple(const char* format, ...) // format: 자료형이 정해진 매개변수, ...: 가변 인자
{
    va_list ap;

    va_start(ap, format);   // v_start: 가변 인자 목록이 시작하는 주소를 계산, 첫번째 매개변수로 가변 인자 목록, 두번째 매개변수로 가변 인자가 시작하는 직전 매개변수
    {
        while (*format != '\0') {   // 서식 문자열을 한 글자씩 읽음
            unsigned int val;
            const char* str;

            switch (*format) {
                case 's':   // s: 문자열 출력
                    str = va_arg(ap, const char*);  // va_arg: 가변 인자를 자료형에 기초해 읽음, 첫번째 매개변수로 가변 인자 목록, 두번째 매개변수로 자료형 const char*의 경우 가변 인자에 포함된 문자열에 대한 주소값을 가짐 (4바이트 워드 크기)
                    while (*str != '\0') {
                        putchar(*str++);
                    } // 문자열을 읽어와 한 글자씩 출력
                    break;
                case 'c':   // c: 문자 출력
                    val = va_arg(ap, unsigned int); // va_arg에서 기본 자료형 char은 int로 승격이 되서, unsigned int로 읽음
                    putchar(val);   // putchar: 아스키 코드 값 그대로 출력
                    break;
                case 'd': // d: 정수 출력
                    val = va_arg(ap, unsigned int); 
                    print_int(val); // putchar()로 출력하면 아스키 코드 값 그대로 출력되므로, 양의 정수를 문자열로 변환하여 출력
                    // putchar에 아스키 코드 범위인 0~255 가 아닌 값을 넣으면 결과가 정의되지 않음
                    break;
                default:
                    putchar(*format);   // 서식 지정자가 아닌 다른 문자는 그냥 출력
                    break;
            }

            ++format;
        }
    }
    va_end(ap);
}
```

## [TODO: 음수도 출력하게 새로 작성해보기]

```c++
#include <stdarg.h>
#include <stdio.h>
#include <string.h>

static void print_int_recursive(int val)
{
    if (val >= 0 && val <= 9) {
        putchar('0' + val);
        return;
    }

    if (val < 0) {
        putchar('-');
        val = -val;
    }
    
    print_int_recursive(val / 10);
    putchar('0' + val % 10);
}

void printf_simple(const char* format, ...)
{
    va_list ap;
    
    va_start(ap, format);
    {
        while (*format != '\0') {
            const char* str;
            int val;
            
            switch(*format) {
                case 's':
                    str = va_arg(ap, const char*);
                    while (*str != '\0') {
                        putchar(*str++);
                    }        
                    break;
                case 'c':
                    c = va_arg(ap, const unsigned int);
                    putchar(c); // 아스키 값 -> 문자 출력
                    break;
                case 'd':
                    val = va_arg(ap, const int);
                    print_int_recursive(val);
                    break;
                default:
                    putchar(*format);
                    break;
            }
            ++format;
        }
    }   
    va_end(ap);
}
```

## 오류 처리

- Learn strategies for handling error situations
- C has no exceptions provided by the language
- So how do you deal with problems that arise during execution?

![img_33.png](old_note/COMP2200/week7/img_33.png)

- There is little relationship between exception handling and software quality
- Humans are creatures that cannot handle exceptions perfectly
- Some people just cover up exceptions and move on because they are lazy.

### why is the problem occuring

![img_34.png](old_note/COMP2200/week7/img_34.png)

- consider only happy path

### Advantages of a language without exceptions

![img_35.png](old_note/COMP2200/week7/img_35.png)

- Responds quickly to program crashes
  - imagine "blue screen" in windows

## Example of bad error handling

![img_36.png](old_note/COMP2200/week7/img_36.png)

![img_37.png](old_note/COMP2200/week7/img_37.png)

- A crash occurs if NULL is entered as a function argument.

![img_38.png](old_note/COMP2200/week7/img_38.png)

- Stupid thing happens that checks for NULL in all your code

### "Using the analogy of a circuit breaker."

![img_39.png](old_note/COMP2200/week7/img_39.png)

![img_40.png](old_note/COMP2200/week7/img_40.png)

![img_41.png](old_note/COMP2200/week7/img_41.png)

- It is efficient to find the problem in only one place

## Difference between bugs and errors, correct error handling strategies

![img_42.png](old_note/COMP2200/week7/img_42.png)

![img_43.png](old_note/COMP2200/week7/img_43.png)

- Since C99, static assertions have been introduced, allowing bugs to be detected during compilation

![img_44.png](old_note/COMP2200/week7/img_44.png)

- The precondition of this function is that the deposit must be greater than 0.
- The postcondition of this function is "before_total < after_total"

### Error handling in RUNTIME

![img_45.png](old_note/COMP2200/week7/img_45.png)

- Data must be filtered at the boundaries

![img_46.png](old_note/COMP2200/week7/img_46.png)

- By adding "_or_null" to the name of the function, it indicates that it can return null
  - The same goes for parameters
- It helps you check for null when checking data at the boundaries

![img_47.png](old_note/COMP2200/week7/img_47.png)

- Returning an error code from a function is also good error handling
  - try_get_student() function is boundary(FILE IO)

![img_48.png](old_note/COMP2200/week7/img_48.png)

- make enum for error code

![img_49.png](old_note/COMP2200/week7/img_49.png)

- this is limitation of C language

![img_50.png](old_note/COMP2200/week7/img_50.png)

- the method to store at errno is not intuitive
  - You have to read the function comments or docs to find out.

![img_51.png](old_note/COMP2200/week7/img_51.png)

- 시험에 나올 듯 ㅋㅋ

## What if it crashes?

![img_52.png](old_note/COMP2200/week7/img_52.png)

- fix bug
- Code needs to be fixed

![img_53.png](old_note/COMP2200/week7/img_53.png)

- What if you want to deal with even expected bugs?
- There is no way in C

![img_54.png](old_note/COMP2200/week7/img_54.png)


