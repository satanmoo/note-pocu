# Week11

## 해시 테이블의 시간 복잡도

![img.png](old_note/COMP2200/week11/img.png)

- 평균적으로 검색/삽입/삭제가 O(1)
    - 하지만 최악은 모두 O(n)
    - 왜 이런 차이가 발생하는가? 해시 테이블의 동작 원리를 이해하자

### [검색의 시간 복잡도 O(1)을 가능하게 하는 방법]

![img_1.png](old_note/COMP2200/week11/img_1.png)

- 어떤 메모리 주소에 어떤 데이터가 저장되어 있는지 `한 번에` 알 수 있어야함

### [무작위로 뽑은 수 10개를 저장하는 예시]

![img_2.png](old_note/COMP2200/week11/img_2.png)

- 크기가 10인 배열에 `차례대로` 저장하면 O(N)으로 검색 가능
- 이제 검색의 시간복잡도를 O(1)로 변경하는 방법 

### [무작위로 뽑은 수 10개를 저장하는 방법 1]

![img_3.png](old_note/COMP2200/week11/img_3.png)
![img_4.png](old_note/COMP2200/week11/img_4.png)

- 방법1: 입력값의 최대값을 배열의 크기로
  - 색인의 수 == 입력값의 최대값
  - 배열[입력값]에 값이 있으면 1, 없으면 0을 저장
  - 저장 후 s_numbers[input] == 1 이면 값이 존재함을 알 수 있음
    - 시간 복잡도 O(1)

![img_5.png](old_note/COMP2200/week11/img_5.png)

- 방법 1의 단점
  - 배열의 크기를 무한히 늘릴 수 없음
  - 스택 메모리 크기를 초과할 가능성

### [방법 1을 보완하는 생각]

![img_6.png](img_6.png)

- 입력값의 `개수`는 10개 뿐
- 입력값이 클 수록, 배열의 크기를 크게 잡아야함
  - 배열에서 낭비되는 공간도 많음

![img_7.png](img_7.png)

- 만들어야하는 것을 정리해보자
  - 입력: 10개의 서로 다른 수
  - 출력: [0,9]인 배열의 색인
- 자료(입력)를 색인(출력)으로 바꾸는 함수
- 바꿀 때 O(1)의 시간복잡도를 가져야함

![img_8.png](img_8.png)

- 가장 간단한 방법은 `입력값 % 10`

### [무작위로 뽑은 수 10개를 저장하는 방법 2]

![img_9.png](img_9.png)

- 연산 한 번이면 끝나기 때문에 O(1)의 시간복잡도

![img_10.png](img_10.png)

- 방법 2의 문제
  - 동일한 색인이 출력

### [방법 2를 보완하는 생각]

![img_11.png](img_11.png)

- 배열의 크기를 충분히 키우면?

### [무작위로 뽑은 수 10개를 저장하는 방법 3]

![img_12.png](img_12.png)

- 배열의 크기는 충분하게 하고, 나머지 연산을 사용하는 방법
- 겹치는 색인은 생길 수 밖에 없음

### [방법 3을 보완하는 생각]

![img_13.png](img_13.png)

- 배열의 크기는 최소 입력값 개수의 2배
- 배열의 크기에는 소수를 사용할 것
  - 소수로 나눠서 나머지를 구해야 출력값이 겹칠 가능성이 낮음

![img_14.png](img_14.png)

- 그래도 중복 출력을 100% 막을 수 없음
- 아 그래서 중복을 최대한 줄이고, 추가적인 방법이 필요함
  - 중복을 최대한 줄이는 방법이 방법 3

### [중복 색인을 해결하는 법]

![img_15.png](img_15.png)

- 나머지 연산으로 색인을 구함
- 배열의 색인에 이미 값이 있으면, 색인 위치 이후에 처음으로 나오는 빈 공간을 찾음
  - 색인을 1씩 증가해가며 빈 색인의 위치를 찾아 저장
- 배열에 값을 저장할 때 bool 값이 아니라 입력값을 그대로 저장해야함
  - 만약 bool값으로 저장한다면, 검색할 때 색인값이 겹치는 경우 찾을 수 없음
  - x, y 모두 나머지가 같으면, 구분할 수 없죠?

![img_16.png](img_16.png)

- 배열에 빈 공간을 찾아야함

![img_17.png](img_17.png)
![img_18.png](img_18.png)

- 배열의 빈 공간을 찾는 방법
  - 방법1: 똑같은 크기의 bool 값을 저장하는 배열을 만들기
  - 방법2: 어떤 특정한 값을 저장해서 비어있다는 사실을 표시

![img_19.png](img_19.png)

- 앞선 예시의 10개의 입력값에 이 방법을 적용하기

![img_20.png](img_20.png)
![img_21.png](img_21.png)

- 여기서 주의깊게 볼 것은 724가 색인 12에 들어가있기 때문에, 219는 색인 12에 못들어가고 14에 들어갔음
  - 13에도 이미 있잖아

### [배열을 사용한 해시 테이블 코드]

![img_22.png](img_22.png)

- 빈 공간은 INT_MIN으로 표시하기 위해서, INT_MIN으로 배열을 초기화

```c++
#include <limits.h>

#define TRUE (1)
#define FALSE (0)
#define BUCKET_SIZE (23)
int s_numbers[BUCKET_SIZE];

void init_hashtable(void)
{
    size_t i;

    for (i = 0; i < BUCKET_SIZE; ++i) {
        s_numbers[i] = INT_MIN;
    }
}

int has_value(int value)
{
    int i;
    int start_index;

    start_index = value % BUCKET_SIZE;
    if (start_index < 0) {
        start_index += BUCKET_SIZE;
    }   /* int라 음수가 들어올 수도 있어서 */

    i = start_index;

    do {
        if (s_numbers[i] == value) {
            return TRUE;
        } else if (s_numbers[i] == INT_MIN) {
            return FALSE;   /* 이 코드가 작동할 수 있는 이유는, s_numbers에서 원소가 지워지지 않기 때문 */
        }

        i = (i + 1) % BUCKET_SIZE;
    } while (i != start_index);
    
    return FALSE;
}
```

- s_numbers의 원소가 INT_MIN이라면 한 번도 값이 저장되지 않은 것임
  - 즉 빈 공간을 나타냄 
  - 이 코드는 s_numbers에 한 번 원소를 쓰면, 이후 지우고 INT_MIN으로 되돌리는 행위를 하지 않음
- 따라서 case는 아래와 같음
  - value가 그대로 있는 경우, 값을 찾은 것
  - INT_MIN인 경우, 빈 공간이라 값이 없는 것
  - value도 INT_MIN도 아닌 경우, 인덱스를 한 칸 이동해서 위의 2가지 경우 확인
    - 나머지 값이 충돌한 경우라 다음 인덱스로 이동해서 value를 찾음
      - 인덱스 이동을 반복해서 case 확인
      - 반복문의 종료 조건은 배열을 한 바퀴 돌면 종료

```c++
int add(int value)
{
    int i;
    int start_index;

    start_index = value % BUCKET_SIZE;
    if (start_index < 0) {
        start_index += BUCKET_SIZE;
    }

    i = start_index;

    do {
        if (s_numbers[i] == value || s_numbers[i] == INT_MIN) {
            s_numbers[i] = value;   /* 중복되는 값이 있거나, 빈 경우 덮어씀 */

            return TRUE;
        }

        i = (i + 1) % BUCKET_SIZE;  /* 충돌한 경우 인덱스 이동 */
    } while (i != start_index);

    return FALSE;
}
```

- 나머지로 start_index를 구함
- 배열의 start_index로 가서 확인할 때 case는 아래와 같음
  - 이미 value가 있는 경우, 덮어 씀
  - 빈 경우, 덮어 씀
  - 나머지가 같은 값이 있는 경우(충돌하는 경우), 인덱스 이동
    - 인덱스 이동을 반복해서 case 확인 
    - 반복문 종료 조건은 배열을 한 바퀴 돌면 종료

![img_23.png](img_23.png)

- 초간단 해시 테이블
- 색인 중복이 없으면, 읽는 것도, 쓰는 것도 모두 O(1)
  - 읽는 것: has_value()
  - 쓰는 것: add()

### [연결 리스트를 이용한 해시 테이블]

![img_24.png](img_24.png)

- 똑같이 어떤 소수로 나눠서 나머지 값으로 색인을 구함
- 배열의 색인에 연결 리스트를 저장

![img_25.png](img_25.png)

- 색인이 겹치는 경우 연결 리스트에 삽입
- 배열만 사용할 때보다 최악의 결과가 나올 경우의 수가 적음
  - 한 바퀴 도는 경우 보다, 연결 리스트를 순회하는 것이 빠르다고 이해
- 여기서 최적화를 하면, 연결 리스트 대신 배열의 요소에 또 배열을 넣는 방법이 있음

## 해시

![img_26.png](img_26.png)

- 어떤 데이터를 해시 함수에 넣어서 나온 출력값을 `해시`라고 정의함

### [해시 함수]

![img_27.png](img_27.png)

- 입력값의 크기는 제한이 없음
- 출력값은 `고정 크기`의 값에 대응함
  - 크기의 단위는 비트

![img_28.png](img_28.png)

- 함수의 정의에 따라 입력값이 같으면 출력값은 언제나 같음

![img_29.png](img_29.png)

- 입력값이 달라도 출력값이 같을 수 있다.
  - 일대일 함수가 아님

![img_30.png](img_30.png)

- 이 경우를 `해시 충돌`이라고 정의함
  - 해시 충돌은 적을 수록 적음
- 따라서, 출력값으로부터 입력값을 찾을 수 있다는 보장이 없음
  - 역함수가 존재하지 못함

### [소수 23으로 나누는 함수는 해시 함수인가?]

![img_31.png](img_31.png)

- 반드시 그런건 아님

### [엄밀한 해시 값]

![img_32.png](img_32.png)

- 해시 값은 어떤 데이터를 대표해야함
  - ID(식별자, 정체성)
  - 즉 `형식`(타입)이 데이터를 대표해야함
    - 이 개념을 이해하기 위해서 문자열을 해시 함수에 넣어보면 됨

![img_33.png](img_33.png)

- 앞의 예는 입력값 원본 데이터 자체가 해시 값임
  - 자신을 대표할 수 있잖아
- 다만 배열의 `고정된` 크기의 배열에 넣기 위해 % 연산을 했음

## 해시 셋에 문자열 저장하기

![img_34.png](img_34.png)

- 문자열을 정수형을 변환하는 해시 함수가 필요함
  - 문자열을 대표할 수 있는 정수를 출력해야 해시값의 정의를 만족한다고 볼 수 있음
  - 길이가 정해지지 않은 문자열을 고정된 크기(4바이트)의 정수형으로 변환

![img_35.png](img_35.png)

- 아스키 코드 == 정수값
- 아스키 코드를 활용해보자

### [잘 쓰이지 않는 해시 함수의 예시]

![img_36.png](img_36.png)

- 문자열의 아스키 코드 값을 모두 더함
  - 계속 더하다 보면, 오버플로우도 일어나고 등등 어쨌던 int면 32비트 정수임

![img_37.png](img_37.png)

- 해시 값을 고정된 배열의 크기에 저장하기 위해 나머지 연산

![img_38.png](img_38.png)

- 해시 테이블에 저장하는 add()의 예시
- 매개변수
  - 저장할 데이터
  - 해시 함수
- 함수 안에서 해시값 구하고, 테이블에 저장

![img_39.png](img_39.png)

- 해시 함수 내부에서 문자열 길이만큼 반복문을 돌기 때문에 시간 복잡도 O(문자열 길이)
- O(1) 보다 느림

![img_40.png](img_40.png)

- 최적화를 해보자
- 해시 함수를 한 번만 호출하고, 변수에 해시값 결과를 기억
  - 이 변수의 값으로 해시 테이블 함수를 호출
  - add할 때도, 이전과 다르게 해시 함수 포인터를 전달하는 대신 해시값을 전달

### [해시 세트(Hash Set)]

![img_41.png](img_41.png)

- 지금까지 구현한 것은 해시 세트
  - 해시값을 구해서 중복 없이 저장함
- 해시 맵과 차이점을 생각하기

## 해시 맵

![img_42.png](img_42.png)

- 어떤 키에 대응하는 어떤 값을 쌍으로 저장
  - key-value
  - Dictionary, HashMap

![img_43.png](img_43.png)

- Key로 그 위치에 가서 자물쇠를 열면 데이터가 나옴
- Key는 꼭 정수일 필요가 없음
  - 문자열, 구조체 가능
  - 데이터의 위치에 대한 정보를 포함

### [해시 맵의 충돌]

- 충돌의 종류가 2가지
  - 해시 충돌: 해시 함수의 결과가 같음
  - 색인 충돌: 해시 값이 다른데 같은 색인이 나옴
    - 이거 저장할 때 발생하는 문제
    - 이미 해결했음
    - 연결 리스트, 인덱스 1칸씩 이동

### [해시 충돌의 예]

![img_44.png](img_44.png)
![img_45.png](img_45.png)

- 해시 함수는 일대일 함수가 아님

### [근데 해시 충돌을 반드시 해결해야 하나요?]

![img_46.png](img_46.png)

- 색인 충돌을 해결하면서 동시에 같이 해결할 수 있음
  - 그래서 엄밀이 말하면 안 해도 됨
- 하지만 다른 이점이 있음

![img_47.png](img_47.png)

- 키의 크기를 줄일 수 있음
- 문자열을 키로 사용하지 않고, 해시 함수의 출력값을 키로 사용하면, 문자열을 저장할 필요가 없음
  - 동적 메모리 할당을 줄여 성능의 이점이 있음

## 훌륭한 해시 함수

![img_48.png](img_48.png)

- 어떤 입력이던 고정된 크기의 출력으로 변환
  - 어떤 자료형에 관계 없이
  - 데이터의 크기에 관계 없이
- 해시 충돌이 거의 없음

![img_49.png](img_49.png)

- 사실 살면서 해시 충돌을 보기 힘듬

![img_50.png](img_50.png)

- 다양한 사례들

![img_51.png](img_51.png)

```c++
/* 65599를 곱해나가는 해시 함수
 * (출처: Compilers: Principles, Techniques, and Tools)
 */
size_t hash_65599(const char* string, size_t len)
{
    size_t i;
    size_t hash;

    hash = 0;
    for (i = 0; i < len; ++i) {
        hash = 65599 * hash + string[i];
    }

    return hash ^ (hash >> 16);
}
```

- 65599 해시 함수
  - 이 정도는 외워도 됨

![img_52.png](img_52.png)
![img_53.png](img_53.png)

- 완전히 충돌을 없앨 수는 없음
- C에서는 동적 할당을 피하기 위해 문자열을 해시값으로 변환해 키로 저장하는 경우가 많음
  - 키를 그대로 문자열로 저장하기 보다는, 해시값으로 저장하자!!!
  - 키 저장 단계를 없애자

### [충돌까지 고려한 해시 맵 코드]

```c++
int add(const char* key, int value, size_t (*hash_func)(const char*, size_t)) 
{
    size_t i;
    size_t start_index;
    size_t hash_id;

    hash_id = hash_func(key, strlen(key));
    start_index = hash_id % BUCKET_SIZE;
    i = start_index;

    do {
        if (s_keys[i] == NULL) {
            /* 새 키-값을 삽입 */
            return TRUE;
        }

        if (strcmp(s_keys[i], key) == 0) {
            return TRUE;    /* 이미 문자열이 저장되어있으면 TRUE 반환, 굳이 덮어쓸 필요없음, memcpy 등 성능 생각해 */
        }
        i = (i + 1) % BUCKET_SIZE;
    } while (i != start_index);

    return FALSE;
}
```

- 충돌을 고려해서 `키 저장 단계`를 스킵하지 않음
  - 문자열을 키로 저장

### [해시 충돌이 없다는 가정의 해시 맵 코드]

```c++
int add_fast(size_t hash_key, const char* value)
{
    size_t i;
    size_t start_index;

    start_index = hash_key % BUCKET_SIZE;
    i = start_index;

    do {
        if (s_keys[i] == INT_MIN) {
            /* 새 해시-값 삽입 */
            return TRUE;
        }

        if (s_keys[i] == hash_key) {
            return TRUE;
        }

        i = (i + 1) % BUCKET_SIZE;
    } while (i != start_index);

    return FALSE;
}
```

- 충돌이 없기 때문에 `키 저장 단계` 스킵
  - 해시값을 키로 저장

### [문자열이 아닌 다른 자료형의 해시 맵]

![img_54.png](img_54.png)

- 어떤 자료형이던 char 배열로 표현 가능
  - 메모리에 저장된 값을 읽어올 때 1바이트씩 읽어오면 문자열임
- 문자열은 가장 범용적이 자료형
- 다만 자료형에 걸맞는 해시 함수를 찾아야함
  - 자료형 -> 문자열 변환은 반드시 가능
  - 문자열에 맞는 해시 함수가 변환 전 자료형에 맞는 해시 함수라는 보장은 없음
    - 잘 맞지 않은 해시 함수를 사용하면 해시 충돌이 늘어날 수 있음

## 자료구조 베스트 프랙티스

![img_55.png](img_55.png)

- 기본적으로 배열
- 삽입과 삭제가 빈번하면 연결리스트
- 검색을 빠르게 하려면, 해시 셋(맵)

## 코드보기: 여러 데이터형과 해시 함수

```c++
#include <stddef.h>

#include "hash_function.h"

size_t hash_int(int value)
{
    return value;
}

size_t hash_float(float value)
{
    return *((size_t*)&value);
}

size_t hash_data(const void* data, size_t length)
{
    const char* p;
    size_t i;
    size_t hash;

    p = data;
    hash = 0;
    for (i = 0; i < length; ++i) {
        hash = 65599 * hash + *p++;
    }

    return hash ^ (hash >> 16);
}
```

- 65599 해시를 사용한다는 가정
- 다양한 자료형의 해시 값을 구하는 방법
  - int형: size_t로 캐스팅하면 충분함
    - 65599 해시 함수가 반환 타입이 size_t라 캐스팅이 필요함
    - int는 size_t와 크기가 동일
  - float: 비트 패턴을 size_t로 읽음
    - 바로 캐스팅하면, 컴파일러에서 묵시적으로 소수저 아래 절삭하기 때문
    - 32비트 비트 패턴을 size_t로 읽기만 하면 됨
    - float은 size_t와 크기가 동일
  - string: 앞의 수업과 동일함

```c++
#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <string.h>

#include "hash_function.h"

typedef struct {
    unsigned char age;
    unsigned int id;
    char name[64];
} employee_t;

int main(void)
{
    employee_t person;
    size_t hash;
    float fvalue;

    hash = hash_int(10);
    printf("int    %u\n", hash);

    hash = hash_int(-10);
    printf("int    %u\n", hash);

    hash = hash_int('A');
    printf("char   %u\n", hash);

    hash = hash_float(3.2f);
    printf("float  %u\n", hash);

    hash = hash_data("Pope Kim", strlen("Pope Kim"));
    printf("string %u\n", hash);

    fvalue = 3.2f;
    hash = hash_data(&fvalue, sizeof(float));
    printf("float  %u\n", hash);

    memset(&person, 0, sizeof(employee_t));
    person.age = 23;
    person.id = 18274192;
    strcpy(person.name, "Pope Kim");

    hash = hash_data(&person, sizeof(employee_t));
    printf("struct %u\n", hash);

    return 0;
}
```

- 10: int 그대로 hash_int 함수 사용
- -10: 위와 동일
- 'A': char은 int보다 작은 정수형이라 그대로 사용하면 됨, 앞의 비트패턴이 0일 뿐이다
- 3.2f: hash_float 사용
- 문자열: hash 65599 사용
- 구조체: 문자열로 변환해 hash 65999 사용
  - memset(&person, 0, sizeof(employee_t)) 구조체의 모든 비트 0으로 초기화
    - 스택에 쓰레기 값이 들어가 있기 때문
  - 아래 3줄은 구조체 멤버 초기화 변수
    - 이렇게 멤버를 초기화 하더라도, 비트 패턴에서 쓰레기 값으로 문제가 생길 수 있기 때문에 위의 memset!

## 전처리기

### [전처리기가 할 수 있는 일]

![img_56.png](img_56.png)
![img_57.png](img_57.png)

- 다른 파일 인클루드
- 매크로 대체
- 조건부 컴파일
- 일부러 오류 발생

## 메크로 대체: #define

![img_58.png](img_58.png)

- 전처리기가 소스 코드를 뒤지다가 A가 보이면 모두 (10)으로 바꿔줌
- #define A 만 하면 A를 바꾸지 않음

![img_59.png](img_59.png)

![img_60.png](img_60.png)

### [#undef 식별자]

![img_61.png](img_61.png)

- 이미 정의된 식별자를 없앰
  - 없앤 식별자를 사용하면 컴파일 오류 발생

### [미리 정의되어 있는 #define]

![img_62.png](img_62.png)

- 모든 C 구현이 정의하는, 미리 정의된 식별자가 있음

```c++
fprintf(stderr, "internal error: %s, line %d.\n", __FILE__, __LINE__);
```

- 오류를 출력할 때 유용함

## 조건부 컴파일

![img_63.png](img_63.png)

- 조건에 따라 특정 코드를 컴파일에 포함하거나 배제함
- #if, #ifdef, #ifndef로 시작했다면, 반드시 끝에 #endif가 있어야함

### [조건부 컴파일의 예: 인클루드 가드]

![img_64.png](img_64.png)

### [어떤 식별자가 #define 되어있는지 판단하는 예]

![img_65.png](img_65.png)

### [조건부 컴파일에서 주의할 점]

![img_66.png](img_66.png)

- #if defined(A)는 식별자 A가 정의됬으면 참, 아니면 거짓
- #if A는 식별자 A의 값을 봄
  - 지금 A의 값에 대입을 안해줬기 때문에 거짓임
  - A는 공백으로 대체

### [조건부 컴파일: 버전 관리]

![img_67.png](img_67.png)

- OS에 따라서 컴파일을 다르게 할 때도 유용함

![img_68.png](img_68.png)

- #elif, #else를 사용하는 예

### [조건부 컴파일: 주석 처리를 편하게]

![img_69.png](img_69.png)

- #if 0, #endif의 쌍을 사용하자
- 이거 엄청 좋네요

## 컴파일 오류 발생

![img_70.png](img_70.png)

- 컴파일 도중 강제로 오류를 발생
- 메시지를 꼭 따옴표로 감쌀 필요는 없음

## 컴파일 중에 매크로 정의하기

![img_71.png](img_71.png)

- D하고 기본값이 1임
  - #define A 가아님
  - #define A (1)임

### [배포용으로 컴파일 하기: -DNDEBUG]

![img_72.png](img_72.png)

- #define NDEBUG (1)
- #if !defined(NDEBUG) 속에 디버그 모드에서만 실핼될 코드를 넣으면 됨
  - 컴파일 옵션을 넣으면 #define NDEBUG (1) 매크로가 추가되기 때문

## 매크로 함수

![img_73.png](img_73.png)

- 매개 변수 목록을 사용함

### [매크로 함수에서 하는 실수]

![img_74.png](img_74.png)

- 복붙하면 10 * 10 + 20
  - 결과 120
- 10(10 + 20)이 원래의 의도

![img_75.png](img_75.png)

- 해결책은 소괄호로 감싸는 것
- 코딩 표준에도 소괄호!

### [매크로 함수가 여러 줄이면?]

![img_76.png](img_76.png)

- '\'를 사용하기

### [매크로 함수의 활용: 어서트 재정의]

![img_77.png](img_77.png)

- 함수 오버로딩을 흉내낼 수 있음

![img_78.png](img_78.png)

- __asm { int 3 }은 어셈블리어 코드
  - interrupt
  - x86 어셈블리라 플랫폼 의존적임
- 기본 assert()는 실패 상황에서 호출 스택의 위치가 assert() 함수 속
- __asm { int 3 }은 실제로 어서트에 실패한 코드

## 전처리기 명령어: # 명령어

![img_79.png](img_79.png)

- 매개변수 자체를 `문자열`로 바꾸는 기능
- 매개변수를 쌍따옴표로 감쌈
  - #s -> "s"
  - "\n"의 경우 \"\\n\" 이렇게 이스케이프 문자까지 넣어줌

## 전처리기 명령어: ## 명령어

![img_80.png](img_80.png)

- 대체 목록 안에 있는 두 단어를 합쳐서 새로운 텍스트로 변경
  - 단어는 매개변수일 수도, 아닐 수도
- #define print(n) printf( "%d\n", g_id_##n)
  - 이 경우 매개변수 n이 대체 목록 안의 단어에 포함됨

![img_81.png](img_81.png)

- combine1의 경우 
  - a: student_
  - b: id
  - a#b: student_"b"
- combine2의 경우
  - a: student_
  - b: id
  - a##b: student_id

### [매크로 함수의 장점과 단점]

![img_82.png](img_82.png)

- 장점은 함수 호출에 따른 과부하가 없음
  - 어샘블리어 코드 복붙
  - 스택에 함수 호출 규약에 따라 매개변수 밀어놓고...
  - 점프하고 리턴하고 등등
- 단점은 디버깅이 어려움

## 코드보기: 전처리기를 이용한 튜플 [후기 강조]

```c++
#include <stdio.h>

/* id(int), "name"(const char*), hp(int) */
#define MONSTER_DATA \
    MONSTER_ENTRY(0, "pope",    100)   \
    MONSTER_ENTRY(1, "big rat", 30)    \
    MONSTER_ENTRY(2, "mama",    255)   \
    MONSTER_ENTRY(3, "dragon",  300000)\

int main(void)
{
    size_t i;

    int ids[] = {
#define MONSTER_ENTRY(id, name, hp) id,
        MONSTER_DATA
#undef MONSTER_ENTRY
    };

    const char* names[] = {
#define MONSTER_ENTRY(id, name, hp) name,
        MONSTER_DATA
#undef MONSTER_ENTRY
    };

    int healths[] = {
#define MONSTER_ENTRY(id, name, hp) hp,
        MONSTER_DATA
#undef MONSTER_ENTRY
    };

    for (i = 0; i < sizeof(ids) / sizeof(int); ++i) {
        printf("%3d %6d %s\n",
            ids[i], healths[i], names[i]);
    }

    return 0;
}
```

- 튜플을 C/c++에서 그냥 만들기는 메모리 관리 때문에 귀찮음

```c++
#define MONSTER_DATA \
    MONSTER_ENTRY(0, "pope",    100)   \
    MONSTER_ENTRY(1, "big rat", 30)    \
    MONSTER_ENTRY(2, "mama",    255)   \
    MONSTER_ENTRY(3, "dragon",  300000)\
```

- 이를 컴파일 단계 말고 런타임에 선언하려면
  - 방법1: 구조체의 배열 선언하고 대입
  - 방법2: 각 멤버에 대한 배열을 선언하고, 인덱스로 찾기
    - int 배열, char* 배열, int 배열 이렇게 해서 0번이면 MONSTER_ENTRY 0번임
- 메크로를 사용하면 장점
  - 데이터가 한 곳이 뭉쳐서 정리되어 있음
  - 새로운 데이터를 추가할 때 이 곳만 보면 됨

```c++
const char* names[] = {
#define MONSTER_ENTRY(id, name, hp) name,
        MONSTER_DATA
#undef MONSTER_ENTRY
    };
```

- MONSTER_ENTRY(id, name, hp) 텍스트는 name,로 바뀜
- MONSTER_DATA는 4줄로 바뀌고, 4줄에서 name,으로 바뀜

```c++
const char* names[] = {
        "pope",
        "big rat",
        "mama",
        "dragon",
    };
```

- 마지막에 #undef 잊지 말것

## 코드보기: getter 만들기

```c++
#include <stdio.h>

/* (type, name) */
#define MONSTER_STRUCT \
    MONSTER_MEMBER(int,           id)    \
    MONSTER_MEMBER(const char*,   name)  \
    MONSTER_MEMBER(int,           hp)    \

typedef struct {
#define MONSTER_MEMBER(type, name) type name;
    MONSTER_STRUCT
#undef MONSTER_MEMBER
} monster_t;

#define MONSTER_MEMBER(type, name)       \
type get_mob_##name(const monster_t* mob)\
{                                        \
    return mob->name;                    \
}                                        \

MONSTER_STRUCT

#undef MONSTER_MEMBER

int main(void)
{
    monster_t mob;
    mob.id = 0;
    mob.name = "Pope Mob";
    mob.hp = 10001;

    printf("%3d %6d %s\n",
        get_mob_id(&mob),
        get_mob_hp(&mob),
        get_mob_name(&mob));

    return 0;
}
```

```c++
/* (type, name) */
#define MONSTER_STRUCT \
    MONSTER_MEMBER(int,           id)    \
    MONSTER_MEMBER(const char*,   name)  \
    MONSTER_MEMBER(int,           hp)    \

typedef struct {
#define MONSTER_MEMBER(type, name) type name;
    MONSTER_STRUCT
#undef MONSTER_MEMBER
} monster_t;

typedef struct {
    int id;
    const char* name;
    int hp;
} monster_t;
```

- 전처리 후 이렇게 변함

```c++
#define MONSTER_MEMBER(type, name)       \
type get_mob_##name(const monster_t* mob)\
{                                        \
    return mob->name;                    \
}                                        \

MONSTER_STRUCT

#undef MONSTER_MEMBER

int get_mob_id(const monster_t* mob)
{
    return mob->id;
}

const char* get_mob_name(const monster_t* mob)
{
    return mob->name;
}

int get_mob_hp(const monster_t* mob)
{
    return mob->hp;
}
```

- 변하는 과정을 설명할 수 있고, 스스로 할 수 있어야함

- getter라서 return값은 구조체 멤버의 타입
- ##이라서 name을 그대로 바꿈
  - get_mob_id 이렇게
- getter의 매개변수는 구조체 포인터임
  - OOP 언어도 내부적으로 이렇게 동작함, getter의 첫번째 매개변수는 개체의 참조임