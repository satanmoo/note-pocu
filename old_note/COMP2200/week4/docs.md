# Week4

## 문자열 표현과 길이

- C에서 자체 문자열은 없다.
- `C스타일 문자열`은 C에서 문자열을 표현(흉내)하는 법을 말한다.
- 많은 언어들의 내부 구현은 C스타일 문자열을 사용한다.
- 다음 2가지 질문에 집중하자.
    - 문자열을 어떻게 표현하나?
    - 문자열의 길이는 어떻게 구하나?

## 문자열과 다른 기본 자료형의 차이

![img.png](old_note/COMP2200/week4/img.png)

- 기본 자료형에서 중요한 것은
    - 크기
    - 범위
    - 이것들이 중요한 이유는 프로그래머 사이의 약속이기 때문이다.
    - 크기와 범위는 플랫폼마다 정해져있음
        - correspond to CPU's natively support

![img_1.png](old_note/COMP2200/week4/img_1.png)

- 문자열이라는 자료형의 크기를 약속할 수 있을까?
- 문자열은 범위가 있나? 숫자가 아닌데?

## 문자열의 길이는 정해져있지 않다. (후기 강조)

![img_2.png](old_note/COMP2200/week4/img_2.png)

- 두가지 관점에서 생각
- 사람들끼리 통일된 약속이 없다.
- 기본 자료형이 아니라서 컴퓨터와 나 사이의 어떤 약속이 없다.
    - 그래서 컴퓨터에게 문자열을 읽어라고 명령하면 몇 바이트인지 모른다..
- 그래서 컴퓨터에게 문자열을 어떻게 표현할 것인가가 중요하다.

## 문자열을 어떻게 표현할까?

![img_3.png](old_note/COMP2200/week4/img_3.png)

- 글자 하나를 표현한 자료형은 있다. char
- char을 배열로 표현하면 문자열
- 문장이라고 부르지 않고, 문자열이라고 부르는 이유를 생각해보자.

## 배열의 길이를 저장할 수 없을까?

![img_4.png](old_note/COMP2200/week4/img_4.png)

- C언어의 특징이다.
- 일반적인 배열은 배열의 길이를 프로그래머가 따로 변수에 저장해야함.
    - 그래서 함수에 배열을 매개변수로 넘길 때, 길이도 같이 매개변수로 넘기고 했었죠?

## 배열 크기를 저장하는 변수를 바꾸지 않아서 발생하는 실수

![img_5.png](old_note/COMP2200/week4/img_5.png)
![img_6.png](img_6.png)
![img_7.png](img_7.png)

- 배열 크기를 변수에 저장하면 실수할 여지가 많다.
    - 값을 잘못 저장할 수도 있고
    - 배열 크기를 바꿔야 할 때, 변수를 바꿔야 하는 번거로움이 있다.

![img_8.png](img_8.png)

- 버그 유발ㅋㅋ
- 실수를 막기 위해서 언어 자체에서 지원하는 방법을 배워보자.

## 문자열을 어떻게 만들어볼까?

## 작전1: 길이를 배열의 첫 위치에 저장 (후기 강조)

![img_9.png](img_9.png)

- 첫 메모리 위치의 문자열의 길이를 저장
- 실제 문자열은 그 뒤를 따라온다.
- 문자열은 unsigned char의 배열이다. 그래서 첫 메모리 위치에 저장된 값의 범위는 0~255이다.
    - 문자열의 길이가 255를 넘어가면 어떻게 할까?

![img_10.png](img_10.png)

- 그러면 길이를 저장하는 부분은 unsigned int로 바꾸고, 그 뒤는 unsigned char 배열로 저장하면?

### 작전1의 장점

![img_11.png](img_11.png)
![img_12.png](img_12.png)

- 작전1은 다른 언어에서 사용하는 방법이다.
    - OOP로 프로퍼티로 저장
- 첫 주소를 확인하면 글자수를 알 수 있어서 편리하다.
    - C#에서 문자열의 길이를 확인하는 프로퍼티의 시간복잡도가 O(1)이다.

### 작전1의 단점

![img_13.png](img_13.png)

- 용량 낭비
    - 길이를 저장하는 변수가 4바이트이므로, 1바이트 문자열을 저장할 때 5바이트가 필요하다.
    - 실제 문자열에 1글자 밖에 없어서 1바이트면 충분한데, 5바이트나 써야해?
    - 즉 너무 문자열이 짧은 경우 아쉬움.
- 순수 C코드 작성이 애매함
    - 처음 4바이트를 읽을 때는 int*로 캐스팅해서 읽고
    - 다음부터는 char*로 캐스팅해서 읽어야함
    - 주소에서 n 바이트를 읽고 싶다면, `포인터 캐스팅`
- 예시에서는 길이 5(5바이트) 문자열이라서, 길이를 저장하는 변수가 4바이트, 문자열이 5바이트로 총 9바이트가 필요하다.
- 첫번째 주소(array[0])를 int*로 캐스팅해 4바이트를 읽어서 변수 len에 저장
- array[4]부터는 char*로 1바이트씩 읽기

## 작전2: 문자열이 끝나는 위치를 표시

![img_14.png](img_14.png)

- 문자열이 끝나는 위치에 유효하지 않은 값을 넣는 방법
- 배열에서 유효하지 않은 색인으로 -1을 반환하는 방법 생각나죠?
- ENUM에서 마지막 값에 무의미한 값 넣어 길이를 구하는 방법과 유사

### 유효하지 않은 값으로 뭐를 쓰지?

![img_15.png](img_15.png)
![img_16.png](img_16.png)

- 아스키 코드 중 화면에 보이지 않는 특별한 제어 문자가 있다.
- 제어 문자 중 하나인 `널 문자`를 유효하지 않은 값으로 사용한다.

![img_17.png](img_17.png)

```c
char null_char = '0'; // 0에 해당하는 다른 아스키 코드값
char null_char = '\0';  // 널 문자의 아스키 코드값은 0
```

- null 캐릭터 확실하게 써주자.
- C 스타일 문자열의 정의: 널 캐릭터로 끝나는 char 배열

## C 스타일 문자열

### 정의

![img_18.png](img_18.png)

- char[]
- 마지막 요소에 null char(아스키 0)

### C 스타일 문자열 메모리 저장

![img_19.png](img_19.png)

```c
char str1[] = "abc";
const char* str2 = "abc";
```

- 우변에 "abc"라고 대입해도, 컴파일러가 알아서 null char을 넣어준다.
- char[]로 변수를 선언하면, 스택에 복사해서 char 배열이 저장된다. 즉 수정가능한 문자열
- char*로 변수를 선언하면, 읽기전용(데이터 섹션)
    - 그래서 const를 붙여주자.
- 그림을 확인해보자. ⭐️
- str1은 스택에 char 배열로 저장된다. 배열 변수 str1은 배열의 시작 주소(0x010ffbac)값을 저장한다.
- str2 char*는 스택에 저장된다. str2가 가리키는 데이터("abc")는 데이터 섹션에 저장되있다.
- str2는 "abc"의 시작 주소(0x009c7b30)값을 저장한다. (데이터 섹션의 주소)
- str2는 스택 메모리(0x010ffba0)에 저장된다.

### ""을 붙이지 않으면?

![img_20.png](img_20.png)

- 큰 따옴표 말고 배열 초기화 중괄호를 사용하면 컴파일러가 null char을 붙여주지 않는다.
- 사진에서 str을 보면 0x00fffdbc에 첫번째 원소인 'a'가 저장되어 있다. 그리고 "abc.....로 표현했다.
    - str은 null char이 없다. 그래서 문자열의 끝을 알 수 없는 것을 디버거가 알려주는 것이다!!!
    - 실제로 오른쪽의 메모리를 봐도 cc cc ....로 화면에 출력되지 않는 값이 들어있다.
    - cc는 200이 넘을건데, 아스키 범위를 벗어나버리죠?
- 그래서 문자열을 초기화할 때는 ""을 붙여주자. 이것이 C 스타일 문자열을 대입하는 방법이다.

### 퀴즈: 문자열

![img_21.png](img_21.png)

```c
str length: 5
```

- 널문자 까지 포함해서 5바이트임!

![img_22.png](img_22.png)

- 언제나 배열에 널 문자도 있다는 것을 기억하자.
- `최소한` 5라고 표현한 이유는 무엇일까?
    - 배열의 크기를 여유롭게 잡고, 인덱스 4에 널 문자를 넣었기 때문이다.
    - 배열의 널문자를 옮겨서 문자열의 길이를 늘릴 수 있다. (배열 재활용)
    - 결론은 char 배열의 크기가 최소 5는 보장되어야 한다.

## C 스타일 문자열의 장.단점

![img_23.png](img_23.png)

- 스샷에 언급한 장점 외에도
    - 고정된 크기의 배열을 선언하고, 이 때 크기를 여유롭게 정한다.
        - 한 번 할당한 char 배열을 재활용하기(쓰고 지우면 되니까)
        - 하나의 char 배열에 여러 문자열 넣기(이것도 메모리 할당을 한 번만 한다는 관점에 효율적임)
- 단점:
    - 길이를 구할 때 O(N)

## 문자열 길이를 구하는 코드

![img_24.png](img_24.png)

- 기초 of 기초

![img_25.png](img_25.png)

```c++
size_t get_length(const char* str) {
    size_t len = 0;
    for (len = 0; str[len] != '\0'; ++len) {
    }
    
    return len;
}
```

### 이게 최선인가?

![img_26.png](img_26.png)
![img_27.png](img_27.png)

- 반복문을 돌 때 마다, str[len]를 읽어야 한다.
    - 시작 주소 + offset로 주소를 계산해서 접근한다.
    - 이것이 좀 비효율적일 수 있다.
- 개미 눈꼽만큼 더 효율적인 방법이 있죠?

![img_28.png](img_28.png)
![img_29.png](img_29.png)

- 여기서 핵심은
    - 포인터를 자유자재로 다룰 수 있는가?
    - 내부적으로 왜 효율적인지 배열에서 offset으로 점프하는 개념을 아는가?

```c++
size_t get_length(const char* str) {
    size_t len = 0;
    const char* p = str;
    while (*p != '\0') {
        ++len;
        ++p;
    }
    
    return len;
}
```

```c++
size_t get_length(const char* str) {
    size_t len = 0;
    const char* p = str;
    while (*p++ != '\0') {
        ++len;
    }
    
    return len;
}
```

```c++
size_t get_length(const char* str) {
    const char* p = str;
    while (*p++ != '\0') {
    }
    
    return p - 1 - str;
}
```

- 널 문자는 제외하고 길이를 반환합니다!!!

![img_30.png](img_30.png)

- 문자열은 char*로 이해하자!

## 문자열 길이를 구하는 함수

![img_31.png](img_31.png)

- 우리가 구현한 것처럼 널문자를 포함하지 않은 문자의 길이를 반환함!

## 가끔 하는 실수1

![img_32.png](img_32.png)

- char 배열로 문자열 선언하고, 배열 초기화 중괄호로 char 배열을 초기화할 때 널 문자를 빼먹는 실수
- 근데 우연히 더 뒤에 널문자가 들어가있을 수 있어서.
- 길이가 19네요?ㅋㅋ
- C 스타일로 선언합시다! 제발!

## 가끔 하는 실수2

![img_33.png](img_33.png)

- 배열의 길이 메크로 선언할 때 널문자를 빼먹고 생각함..
- 처음부터 + 1을 해주자.

![img_34.png](img_34.png)

## 외부에서 입력받는 문자열을 조심하자

![img_35.png](img_35.png)

- C11 strlen_s는 safe 접미사가 붙어있다. 보안상 이점이 있음. 안전함
- strlen()은 읽어오기만 함.
    - 널문자가 없으면 계속 읽어서 문제가 생길 수 있음
    - 하드웨어가 보호하는 메모리를 읽을 때 문제가 생김
    - 이건 디버깅도 ㅈㄴ어렵습니다. 중구난방

## 문자열 조작

## 두 문자열 비교

![img_36.png](img_36.png)
![img_37.png](img_37.png)

- 두 문자열을 비교하는 함수
- 두 문자열을 비교할 거라 매개변수는 char*
- 값을 보호하기 위해서 const char*
- 같다/아니다를 표현할거면 반환형 true or false
- 사전식 순서로 크다/같다/작다 가능

## 사전식 순서

![img_38.png](img_38.png)
![img_39.png](img_39.png)
![img_40.png](img_40.png)
![img_41.png](img_41.png)

- 아스키 작은 값이 사전상 앞에 있음
    - 대문자가 소문자보다 아스키값이 작으니까 사전상 앞이죠?
- 맨 앞부터 비교해서 차이를 구해서 비교

## compare_string 함수의 반환값

![img_42.png](img_42.png)

- int!
    - 음수도 반환해야 하잖아요~
- 앞에서 뒤를 빼는 개념
- 뺀 결과가 음수면 str0이 사전에서 먼저 나온다.

## compare_string 함수 구현

![img_43.png](img_43.png)

- 두 문자를 대소 비교
- 같은데, 둘다 널문자면 return 0
- 같으면 다음 문자로

## 효율적인 두 문자열 비교

![img_44.png](img_44.png)

```c++
int compare_string(const char* str1, const char* str2) {
    while (*str1 != '\0' && *str1 == *str2) {
        str1++;
        str2++;
    }
    
    return *str1 - *str2;
}
```

- 핵심은 문자열의 끝이 아니고, 두 문자열이 같으면 계속 다음 문자로 진행한다.

```c++
int compare_string(const char* str1, const char* str2) {
    while (*str1 != '\0' && *str1 == *str2) {
        str1++;
        str2++;
    }
    
    if (*str1 == *str2) {
        return 0;
    }
    
    return *str1 > *str2 ? 1 : -1;
}
```

- while의 조건문에서 char* 하나만 널 문자인지 확인하면 됨
- 하나라도 먼저 끝나면 아스키값이 달라 반복문을 빠져나오게 됨
- 둘다 널문자인 경우 반드시 반복문을 나오도록 종료 조건을 설정하자!

![img_45.png](img_45.png)

- 이 둘 중 어느것이 더 빠를까? 어셈 코드를 확인해보자.

## 중구난방 코드

![img_46.png](img_46.png)
![img_47.png](img_47.png)
![img_48.png](img_48.png)

- strlen은 O(N)
- for문을 두 번 더 돌리게 된다.
- 교훈은 데이터가 컴퓨터에 어떻게 저장되어 있는지 알면 더 효율적인 코드를 작성 가능하다!

## 문자열 비교 함수: strcmp()

![img_49.png](img_49.png)

## 자매품: strncmp()

![img_50.png](img_50.png)

- 포프님도 업계에서 거의 써보지 않았음...ㅋㅋ

```c++
int compare_string_n(const char* str1, const char* str2, size_t n) {
    size_t i = 0;
    while (i < n && *str1 != '\0' && *str1 == *str2) {
        str1++;
        str2++;
        i++;
    }
    
    if (i == n) {
        return 0;
    }
    
    return *str1 > *str2 : 1 ? -1;
```

## 코드 샘플: 대소문자 구분없는 문자열 비교

```c++
int string_case_insensitive_compare(const char* str0, const char* str1)
{
    int c1;
    int c2;

    c1 = tolower(*str0);
    c2 = tolower(*str1);

    while (c1 != '\0' && c1 == c2) {
        c1 = tolower(*++str0);
        c2 = tolower(*++str1);
    }

    if (c1 == c2) {
        return 0;
    }

    return c1 > c2 ? 1 : -1;
}
```

- strcmp와 동작이 동일
- 한 문자열 널문자열 만날때 까지 순회
- 같은 인덱스의 문자를 비교
    - 비교하기 전 소문자로 변환
    - 다르면 반복문 종료
- 반복문이 종료되면 아스키 코드값으로 뺄셈을 이용해 결과 반환

## 문자열 복사

![img_51.png](img_51.png)

- 매개변수에서 dest는 const가 아니고, src는 const네요?
    - 프로그래머의 의도가 dest `문자 값`에 변경이 생긴다는 거죠?
- 얼마만큼 복사하나요? `길이`
    - const char* src가 C 스타일 문자열이다. 따라서 널 문자를 통해 길이를 구할 수 있음
- 복사가 끝나면 dest도 C 스타일 문자열 상태가 되어야한다.
    - 마지막에 널 문자 추가하기

- while 블록 안에서 dest++, src++가 컴파일 오류가 아니라 정상적인 이유는 무엇일까요?
    - dest, src는 지역변수는 주소값(pass by value)
    - 주소값은 const로 선언되지 않음
        - 포인터 읽는 방법에서 pointer to char const, pointer to char
    - 이 포인터 변수에는 대입이 가능하다.
        - 배열 변수와 차이점
        - 주소값을 포인터 산술 연산으로 변경
- dest에는 함수 밖에서 char []로 선언해서 넘겨야한다. 스택의 주소를 넘겨야함
    - 이유는 C에서 매개변수로 문자열 다룰 때 국룰
    - 함수 블록 안에서 메모리 할당, 댕글링 포인터를 만들지 말자

![img_52.png](img_52.png)

- 복사 전 0x00AFFE10 주소부터 5바이트에 'cc' 똥값이 들어가있음
- 0x00AFFE10 주소부터 16칸 이동하면 0x00AFFE20 주소부터 5바이트가 src
- 복사 후 똥값 대신 src의 content가 복사됨

## strcpy()

![img_53.png](img_53.png)

- 이 함수 반환값 이상함 --; 업계에서 반환값 안 쓴다고 보면 됨
- C11에서는 strcpy_s로 대체 에러코드 반환! (나중에 배움)

## 그런데 dest가 src보다 짧으면? strcpy 대신 strncpy 사용을 습관화

![img_54.png](img_54.png)

- 예시에서는 str2에는 3개 공간뿐인데, str1은 5개의 문자(널문자 포함)를 가지고 있습니다.
- str2의 메모리 범위를 넘어서 그 뒤 소유하지 않은 메모리도 덮어쓰게됩니다.
    - 그래서 오른쪽의 메모리뷰에서 str2는 마지막에 널문자가 없어서 Pop.... 이렇게 보여주죠
- 이런 경우에는 어떻게 해야할까요?

![img_55.png](img_55.png)
![img_56.png](img_56.png)

- src와 dest의 크기를 통제할 수 없다면 위험하다.
- src의 크기 < dest의 크기인 경우
- strncpy()를 사용하자

## strncpy()

![img_57.png](img_57.png)

- [docs](https://en.cppreference.com/w/c/string/byte/strncpy)

- count는 복사할 문자의 개수
- src를 변경해서 널 문자를 만나면 복사를 중단한다.
- src 길이가 count보다 작으면, dest의 나머지 공간은 널문자로 채워진다.
- src 길이가 count보다 같거나 크면, dest에 src를 count만큼 복사하고 널 문자를 넣지 않는다.
    - dest 길이가 count 보다 긴 경우, dest[strlen(src)] = '\0'; , dest[count] = '\0'; 이렇게 널문자를 넣어줘야함
    - dest 길이가 count 보다 짧은 경우, dest[DEST_SIZE - 1] = '\0' 이렇게 널문자를 넣어줘야함

![img_58.png](img_58.png)

- src 크기가 count보다 같거나 크다면? count만큼 복사하는데, 널 문자를 넣을 공간이 없음..
- 그래서 널문자가 dest에 없어요!

![img_59.png](old_note/COMP2200/week4/img_59.png)

- 좋은 습관: count는 dest의 크기와 동일하게 설정
- dest의 마지막은 널문자로 변경

![img_60.png](old_note/COMP2200/week4/img_60.png)
![img_61.png](img_61.png)

- src의 길이가 count보다 작은 경우 예시

![img_62.png](img_62.png)

- src의 길이가 count보다 큰 경우 예시(DEST_SIZE == 3, count == 3, strlen(src) == 5

- src 길이가 count보다 작으면, src 길이만큼 dest에 복사하고, 나머지 공간 널문자로 채움
    - DEST_SIZE > strlen(src)의 경우, dest[strlen(src)] = '\0'; 이렇게 널문자를 넣어줘야함
    - DEST_SIZE <= strlen(src)의 경우, 복사 후 dest에 널문자가 없음, dest[DEST_SIZE - 1] = '\0'; 로 널문자 넣어줘야함
- src 길이가 count보다 크면, count만큼 dest에 복사함
    - DEST_SIZE > count의 경우, dest[count] = '\0'; 이렇게 널문자를 넣어줘야함
    - DEST_SIZE <= count의 경우, 복사 후 dest에 널문자가 없음, dest[DEST_SIZE - 1] = '\0'; 로 널문자 넣어줘야함
- 따라서 DEST_SIZE가 MIN(strlen(src), count)보다 큰 경우, dest[DEST_SIZE-1] = '\0'으로 C 스타일 문자열을 만들 수 없음
    - 예를 들어 DEST_SIZE = 6, MIN(strlen(src), count) = 3
    - char dest[] = {'a', 'b', 'c', '?', '?', '\0'}; 이렇게 되버려서, 중간에 이상한 값이 들어 올 수 있음
    - 그래서 좋은 습관이 DEST_SIZE == count로 설정하는 것이다.
        - dest를 길이 n으로 먼저 선언을 하고, strncpy에서 count 값을 n으로 똑같이해서 호출하면, 문자열 n - 1자를 복사해 새로운 C 스타일 문자열을 만듬

## 정리: strcpy()와 strncpy()

![img_63.png](img_63.png)

- strcpy는 널문자를 `항상` 넣어줌!
- strncpy는 널문자를 넣어줄 수도, 아닐 수도!

## 문자열 합치기1: strcat()

![img_64.png](img_64.png)
![img_65.png](img_65.png)

- strcpy와 매우 유사하다.
- dest의 끝을 찾아서 즉 널문자를 찾으면 되죠?
- 널문자를 제거해! 그리고 널문자가 있던 위치부터 src의 문자를 차례차례 복사하면 됩니당

![img_66.png](img_66.png)
![img_67.png](img_67.png)

- 여기서 생각해볼 점은 dest의 길이가 충분해야 하겠구나~ 라는 것 (src를 덧붙여도 충분한 공간이 필요)
- 만약 dest의 길이가 부족하다면? 소유하지 않은 메모리에 덮어쓰게 됩니다...
- 정의되지 않은 결과가 발생합니다.
- src 전체를 붙이기 때문에 널문자를 넣어줌
    - 하지만 dest를 작게 설정해 "Hello POCU\0"와 같이 정의되지 않을 수 있음!

- [docs](https://en.cppreference.com/w/c/string/byte/strcat)

> The resulting byte string is null-terminated.

## 문자열 합치기2: strncat()

- 길이를 제한하는 안전한 함수가 다시 등장했습니다.

![img_68.png](img_68.png)
![img_69.png](img_69.png)
![img_70.png](img_70.png)
![img_71.png](img_71.png)

- dest의 널문자가 src[0]으로 교체된다고 생각하면 편합니다.
- count개의 문자를 복사하고 뒤에 널문자를 추가합니다.
- 최대 count + 1 개의 문자를 덮어씁니다.

![img_72.png](img_72.png)
![img_73.png](img_73.png)
![img_74.png](img_74.png)

- 왜 `최대`라고 표현했을까요? 일부러 dest를 작게 잡아서 트롤링해보겠습니다.
- 위 예에서는 P만 덮어쎠졌습니다. 즉 count + 1(3)만큼이 아니라 1이 덮어써짐
- 소유하지 않은 메모리에 접근해서 정의되지 않은 결과가 발생합니다.
- 그리고 dest의 널문자도 없어짐..

![img_75.png](img_75.png)

- 그래서 국룰은 count에 dest의 남은 공간을 넣어주는 것입니다.
    - 그래서 `조금 더` 안전한 함수라고 표현하는 것입니다. (dest를 작게 잡으면 안전하게 작동하지 않음
- dest의 남은 공간은 어떻게 구할까요?
    - dest의 크기 - 현재 사용중인 dest공간 - 널문자 공간
    - DEST_COUNT - strlen(dest) - 1
    - strlen은 널문자를 제외한 길이를 뽑죠!
- 여기서 추가적으로 strlen 쓰면 for문 도니, dest를 선언할 때 "HI ";의 크기를 알 수 있죠? 변수로 size_t n = 4; 이렇게 선언하는 것을 추천합니다.
- 참고로 count에 src의 길이보다 큰 값을 넣으면 src를 그대로 붙여넣음

## 정리: strcat()과 strncat()

![img_76.png](img_76.png)

- 둘다 dest의 끝에 널문자 넣어줌

## 코드샘플: 문자열 버퍼를 이용한 출력

```c++
#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <string.h>

#include "buffered_print.h"

#define BUFFER_LENGTH (32)

static size_t s_buffer_index = 0u;
static char s_buffer[BUFFER_LENGTH];

/*
- 버퍼는 char 배열로 선언합니다.
- 버퍼에 대한 인덱스를 저장하는 변수를 함수 블록 안의 지역변수로 선언하면 안 됩니다. 함수가 끝나면 메모리가 해제되기 때문입니다.
- 그래서 함수 밖에 선언하는데, 외부에서 막 가져다 쓸 수 없도록 static으로 선언합니다.
 */

void buffered_print(const char* src)
{
    size_t num_left;
    const char* p = src;

    num_left = strlen(src);
    
    /*
    * - src에서 남은 복사할 글자 개수를 나타내는 변수입니다. 처음에는 src의 길이와 동일하게 설정합니다.
    - strlen을 한 번만 호출해 src의 길이를 저장, 변수의 값을 감소시키면서 사용할 예정
    - num_left가 0이 아니면, src에서 남은 글자를 버퍼에 복사합니다.
    - num_left가 0이면 더 이상 복사할 글자가 없다는 뜻
    * */

    while (num_left > 0) {
        size_t copy_count = BUFFER_LENGTH - 1 - s_buffer_index;
        /*
        - 버퍼에 한번에 얼마나 복사할 것인지 count하는 변수
            - 최대 BUFFER_LENGHT - 1 (널문자 공간을 제외)
            - 최소 0
        - strncpy를 사용할 때, 버퍼와 count 매개변수에 사용할 예정
        * */

        const int buffer_empty = s_buffer_index == 0;
        /*
        - 버퍼가 비어있으면, strncpy로 버퍼(dest)의 인덱스 0부터 문자 값을 복사
        - 비어있지 않으면, strncat으로 버퍼(dest)의 인덱스 s_buffer_index부터 문자 값을 이어붙임
        * */

        if (num_left < copy_count) {
            copy_count = num_left;
        }
        /*
        - src에서 복사할 남은 글자 개수가 한 번에 버퍼에 복사할 글자 개수보다 작은 경우 num_left 만큼 복사
        * */

        s_buffer_index += copy_count;
        num_left -= copy_count;
        /*
        - num_left > copy_count 인 경우
        - 버퍼에 채울 것이라, 인덱스 증가
        - src에서 num_left만큼 복사할 것이라, num_left 감소
        * */

        if (buffer_empty) {
            strncpy(s_buffer, p, copy_count);
            s_buffer[s_buffer_index] = '\0';  
        } else {
            strncat(s_buffer, p, copy_count);
        }
        /*
        - 버퍼가 비어있으면, strncpy로 버퍼(dest)의 인덱스 0부터 문자 값을 복사
         - strncpy는 마지막 널문자 보장 X
        - 비어있지 않으면, strncat으로 버퍼(dest)의 인덱스 s_buffer_index부터 문자 값을 이어붙임
         - strncat은 마지막 널문자 보장 
        * */

        p += copy_count;
        /*
        * 복사한 글자 수 만큼 src의 인덱스 이동 
        * strncpy, strncat에 src 매개변수를 싱크
        * */

        if (s_buffer_index == BUFFER_LENGTH - 1) {
            printf("%s\n", s_buffer);
            s_buffer_index = 0;
        }
        /*
        * 버퍼가 가득차면 출력
        * */
    }
}
```

```c++
buffered_print("Hello, ");             /* Hello, */
buffered_print("World. ");             /* Hello, World. */
buffered_print("C is awesome! ");      /* Hello, World. C is awesome! */
buffered_print("C# is awesome too! "); /* Hello, World. C is awesome! C# */
buffered_print("Is Java better? ");    /* is awesome too! Is Java better? */
```

- 사용 예를 통해서 버퍼가 어떻게 사용되는지 이해

## 문자열 찾기

![img_77.png](img_77.png)

- string에서 string 찾으니까, strstr
- 일단 특이한 점은 char의 배열에서 검색한다.
    - char* 는 데이터 섹션의 주소를 넘김
    - char[]는 스택에 복사해서 넘김

### 문자열을 못 찾는 경우

- 만약에 못 찾으면 무엇을 반환해야할지 고민해보자..
    - 찾으면 어떤 문자열을 반환하고, 못 찾으면?
    - NULL을 반환해도될까? NULL을 출력하면?
    - NULL을 printf로 출력하는 것은 정의되지 않은 행동인데..?
    - 그래서 어떤 컴파일러는 NULL이라고 알아서 출력해줌

![img_78.png](img_78.png)

- 코드로 NULL 인 경우 제어
- 3항 연산자로 널 확인해서 출력하도록 변경해봤다.

### 문자열을 찾은 경우

![img_79.png](img_79.png)

- 어떤 문자열에서 시작하는 주소를 찾는다.
- 출력하면 찾은 문자열 부터 출력.

![img_80.png](img_80.png)

- 매개변수로 넘길 문자열을 char []로 선언하고, 넘겼었는데 함수 시그니처의 매개변수는 const char* 이다.
- 함수 시그니처를 왜 이렇게 설계 했을까?
- 이 함수의 반환값 때문이다. 매개변수는 const char*이지만 반환값은 char*임을 주목하자.
- 따라서 const char* 타입의 매개변수로 받은 문자열에서 어떤 위치를 찾아서 반환하면, char값을 수정해버릴 수 있다.
- 아니 이러면 매개변수를 const char*로 한 의미가 없잖아?!
- 그래서 변경의 위험이 있어서, 여기 넘길 문자열을 char []로 스택에 복사해와서 넘기는 것이다.
- 데이터 색션을 참조하도록 const char*로 넘겼다면, 데이터 섹션에 접근해서 크래쉬가 나겠죠?
  (strcpy, strcat 에서도 마찬가지로 src에 char []로 스택에 복사했었음)

- 알고리즘 (직접 구현하기)
    - str을 순회하면서 substr의 첫번째 글자를 찾음
        - 찾으면 substr을 순회하면서 str과 비교
            - 다르면 break
        - 다 돌았으면 찾은거니까 위치 반환
    - 다 돌았는데 못 찾으면 NULL 반환

## 문자열 찾기 함수가 매개변수로 입력받은 문자열의 메모리 주소를 반환하는 이유

![img_81.png](img_81.png)

- 잠깐 여기서 생각. strstr에서 구한 부분 문자열이 시작하는 색인을 찾아볼까요?
- 찾은 char*에서 매개변수로 넘긴 const char*를 빼면되죠? offset

![img_82.png](img_82.png)

- 왜 Substring(), IndexOf 같은 함수가 없을까?
- 굳이 메모리 주소를 반환하는 이유는?

## 함수 안에서 새로운 문자열을 생성(할당)한다면, 새로운 문자열은 어디에 저장될까?

### 함수 지역변수 스택?

![img_83.png](img_83.png)

- 이건 유요하지 않은 메모리 주소를 반환하게 되죠?
    - 댕글링 포인터

### 동적 메모리 할당 힙?

![img_84.png](img_84.png)

- 운영체제에 메모리를 부탁해야 하기 때문에 느리다.
- 그리고 free하지 않은 실수가!!! 메모리 누수가 발생할 수 있다.
- 특히 함수 내부에 동적 메모리 할당 코드가 있으면, 가져다 사용하는 입장에서 함수를 까보지 않는 이상 모르죠...
- 그래서 함수 내부에서 동적 할당으로 메모리 만들어서 주는 방식이 굉장히 위험하다.

### 그래서 결론은 주소를 반환할 때 어떤 방법이 실수가 가장 적을까?

![img_85.png](img_85.png)

- 원본에서 시작하는 주소를 반환하는게 가장 안전하다!!!
- 함수 내부에서 뭔가 새로운 메모리(힙, 스택)를 잡아서 반환하는거 자체가 위험함!!!

## 문자열 토큰화

![img_86.png](img_86.png)

- 핵심은 메모리를 추가 할당 하지 않는것!
- 우아한 방법

![img_87.png](img_87.png)
![img_88.png](img_88.png)

- strtok를 사용하면 첫번째 토큰을 찾고, 구분문자를 널문자로 바꿔준다.
- 반환값은 첫번째 토큰의 시작 주소
- 여기서 중요한 점은 새로 추가로 메모리를 잡고 그런게 아니라, 원본 문자열을 수정한다는 것이다.

![img_89.png](img_89.png)

- 두번째 토큰을 찾을 때는 strtok에 NULL을 넣어준다.
- 이유는 기존의 input의 문자열을 그대로 사용하기 때문이다.
- 마찬가지로 구분문자를 널 문자로 변경
- 이 과정을 토큰이 없을 때 까지 반복한다.

![img_90.png](img_90.png)

- 이제 토큰이 없다!
- NULL을 반환한다.

### 정리를 해보자

![img_91.png](img_91.png)

- char msg[]는 const 붙이면 안 되죠? 배열에서 구분자 널 문자로 바꿔야하니..
- 그리고 왜 배열로 선언했는지 이제 알겠죠? 이거 데이터 섹션을 참조하는 char* 넘겼다가, 수정하면 크래시 나죠?
    - mutable string!!!

![img_92.png](old_note/COMP2200/week4/img_92.png)

- 중요 포인트
- msg의 원본이 바뀐다.
- 함수 매개변수에 input 대신 NULL이 들어올 때 그전의 msg를 사용한다.
    - 즉 그렇다면 어딘가에 저장되어있어야함
    - static! 파일 내부에서만 존재하면 되겠죠? 함수 내의 정적변수겠네요...
        - 함수를 다시 호출해도 초기화 되지 않는 성질을 기억하자!

![img_93.png](old_note/COMP2200/week4/img_93.png)

- 알고리즘을 생각해보자
- 토큰화 시작 주소를 저장하는 static 변수를 선언한다.
- str이 NULL이면 토큰화 시작 주소부터 순회한다.
- str이 NULL이 아니면 토큰화 시작 주소에 str을 대입하고(갱신) 순회한다.
- 순회:
    - delims가 연속하는 경우를 제거하기 위해, delims가 아닌 문자까지 토큰화 시작 주소를 이동한다.
    - 반환용으로 delims가 아닌 첫번째 문자의 주소를 시작 주소 변수에 저장한다.
    - 토큰화 시작 주소를 순회한다. delims를 만나면?
        - 그 위치에 널문자를 넣고, 그 다음 주소를 토큰화 시작 주소로 저장한다.
        - 시작 주소를 반환한다.
- 순회가 끝나면 str을 모두 돌고 더 이상 토큰이 없다는 것이다.
    - 따라서 토큰화 시작 주소에 NULL을 대입한다.
    - 시작 주소를 반환한다.

```c++
static 변수 next 선언

함수 my_strtok(문자열 str, 문자열 delims)
    변수 start 선언

    만약 str이 NULL이 아니라면:
        next를 str로 설정

    만약 next가 NULL이라면:
        NULL 반환

    // 구분자가 아닌 첫 문자를 찾는 반복문
    반복문(*next가 '\0'이 아닐 동안):
        만약 my_strchr(delims, *next)가 0이라면 (구분자가 아니라면):
            반복문 탈출

        next를 1 증가

    start를 next로 설정

    // 다음 구분자를 찾아 문자열을 종료시키는 반복문
    반복문(*start가 '\0'이 아닐 동안):
        만약 my_strchr(delims, *start)가 1이라면 (구분자라면):
            *start를 '\0'으로 설정
            next에 start + 1 대입
            start 반환
    
    // 더 이상 토큰이 없다면
    next를 NULL로 설정

    start 반환
```

```c++
함수 my_strchr(문자열 str, 문자 ch)
    반복문(*str가 '\0'이 아닐 동안):
        만약 *str가 ch와 같다면:
            1 반환

    0 반환
```

## 궁금하면 찾아 볼 것

![img_94.png](old_note/COMP2200/week4/img_94.png)

## C 문자열 함수들의 특징

![img_95.png](old_note/COMP2200/week4/img_95.png)

- 매개변수를 보고 원본을 변경하는지, 아닌지 판단하자
- 변경하더라도, 보통 사본을 변경하죠!!!
- 핵심은 원본은 변경하지 않는다! 그리고 절대 새로운 문자열을 만들지 않는다.

## 코드샘플: 문자열을 대문자 또는 소문자로 바꾸기

```c++
#include "string_utils.h"

int is_alpha(int c)
{
   return (c >= 'A' && c <= 'Z')
        || (c >= 'a' && c <= 'z');
}
/*
- 컴파일 할 때는 c >= 'A' 라고 해도 숫자(아스키 코드)로 검사하죠
* */

int to_upper(int c)
{
    if (is_alpha(c)) {
        return c & ~0x20;
    }

    return c;
}

int to_lower(int c)
{
    if (is_alpha(c)) {
        return c | 0x20;
    }

    return c;
}
/*
- to_upper, to_lower은 왜 int를 반환하나요?
- 원래 표준 라이브러리가 그렇게 되어있음...
- char -> int로 변환이 되기 때문에..
- 뭐 어쩌겠음..
- to_upper, to_lower에서 isAlpha를 사용해서 알파벳인지 검사후 비트 연산을 해야함니다.
  - 비트 연산 자체가 알파벳 범위의 아스키 값에만 적용되는거라.. (32를 더하고 빼고)
* */

void string_toupper(char* str)
{
    while (*str != '\0') {
        *str = to_upper(*str);
        ++str;
    }
}

/*
- to_upper은 비트 마스킹을 이용합니다.
  - 대문자로 바꾸려면 32를 빼면 됩니다.
  - 0x20은 32입니다. 비트 패턴 0010 0000, not으로 바꾸면 1101 1111이죠? &연산하면 32를 빼는 연산이랑 동일함
    - 소문자 a: 0110 0001(97), z: 0111 1010(122)
    - 대문자 A: 0100 0001(65), Z: 0101 1010(90)
  - 소문자로 바꾸려면 32를 더하면 됩니다. 비트 패턴 0010 0000, or연산하면 32를 더하는 연산이랑 동일함
- 아스키라서 1바이트 기준으로 비트 패턴을 표시한거지, 실제로 int를 받기 때문에 32비트인데 0으로 채우면 됩니다. ㅇㅇ;
* */

void string_tolower(char* str)
{
    while (*str != '\0') {
        *str = to_lower(*str);
        ++str;
    }
}

/*
- string_toupper, string_tolower은 모두 void를 반환한다. 즉 원본을 수정합니다.
- 이런 원본 수정을 `inplace`라고 합니다.
* */
```

## 출력, 서식 지정(formatted) 출력, 서식 문자열(format string)

### 출력이란?

![img_96.png](old_note/COMP2200/week4/img_96.png)

- 어떤 데이터를 프로그램 외부로 내보내는 것
- from 프로그램 to 외부

### 서식 지정(formatted) 출력이란?

![img_97.png](old_note/COMP2200/week4/img_97.png)

- 흔히 Formatting이라고 표현한다.
- 3가지 종류가 있다
    - printf: 콘솔에 출력
    - fprintf: 파일에 출력(스트림)
    - sprintf: 문자열에 출력
- stdout도 스트림이라서 fprintf()로 출력할 수 있다.
- fprintf, sprintf는 첫번째 매개변수로 각각 파일 스트림, char 배열을 받는다.

## printf의 첫 번째 매개변수

![img_98.png](old_note/COMP2200/week4/img_98.png)

- 반드시 서식 문자열을 넣어야한다.
- C에는 함수 오버로딩이 없다.
    - 함수 이름이 동일한데 매개변수를 다르게 해서 함수를 선언할 방법이 없음..

### 서식 문자열(format string)

![img_99.png](old_note/COMP2200/week4/img_99.png)
![img_100.png](old_note/COMP2200/week4/img_100.png)

- 서식 문자열은 %로 시작한다.
- 서식 문자열에는 하나 이상의 데이터가 들어갈 수 있다.
    - 서식 문자열 개수는 1개 이상이다.
- 추가 매개변수와 동일한 순서를 따른다.

## 서식 문자열의 종류

### 일반적인 서식 문자열 형식

![img_101.png](old_note/COMP2200/week4/img_101.png)

### 서식 지정자(format specifier)

![img_102.png](old_note/COMP2200/week4/img_102.png)
![img_103.png](img_103.png)
![img_104.png](img_104.png)

- %를 출력하려면 %%로 두번 쓰면 된다.
- 바로 문자열을 넣어도 되는데 %s로 써주자. 경고를 주는 컴파일러도 있음
- u는 부호 없는 정수
    - 이 때 음수를 넣으면 해당 수의 비트패턴에 해당하는 부호없는 수가 출력
    - unsigned로 캐스팅한다과 생각하면 되죠..
- f는 float, double 다 된다.
- %p로 주소를 출력할 때 void*로 넣어야한다.

### 너비

![img_105.png](img_105.png)

- 기본적으로 오른쪽 정렬

### 플래그 1

![img_106.png](img_106.png)

- 공백과 +를 같이넣으면 +가 우선순위다. 즉 공백을 부호로 채웁니다.
- -를 넣으면 왼쪽 정렬이라 0으로 채울 수 없어서, 0 무시

![img_107.png](img_107.png)

- +만 넣으면 너비없이 부호만 붙음
    - printf("%+d\n", 10); // +10

### 플래그2

![img_108.png](img_108.png)
![img_109.png](img_109.png)

- 플래그2의 친구들은 모두 `부호 없는 정수`

### 정밀도

![img_110.png](img_110.png)

- "%3.3f"면 최소 너비가 3이다. 소수점 아랫자리 수(정밀도)가 3을 보장한다.
- 3.140까지 보장되었다.이미 여기서 최소 너비3을 넘은 5의 너비를 가지게 된다.
- 최소 너비를 넘어도 상관없다. 말 그대로 `최소`너비니까
- 반면 "%6.3f"면 최소 너비가 6이다. 3.140이면 5의 너비를 가진다. 최소너비에 1부족하다.
    - 따라서 " 3.140" 으로 공백으로 채워준다.
- "%f"의 기본 소수점 아래자리수(정밀도)는 6이다. 따라서 3.14f면 3.140000이 출력된다.

### 정밀도2

![img_111.png](img_111.png)

### 길이 수정자

![img_112.png](img_112.png)
![img_113.png](img_113.png)

- ld, lf
- 요즘 플랫폼에서 int == long, double == long double이라서 볼 일이 별로..?

## 코드보기: ASCII 표 그리기

```c++
#include <stdio.h>

#include "print_ascii_table.h"

void print_ascii_table(void)
{
    const int MIN_ASCII = 32;
    // - MIN_ASCII = 32, 빈칸 문자, 화면에 출력 가능한 가작 작은 문자
    const int MAX_ASCII = 126;
    // - MAX_ASCII = 126, ~ 문자, 화면에 출력 가능한 가장 큰 문자
    const int NUM_CHARS = MAX_ASCII - MIN_ASCII + 1;
    // - 출력 가능한 문자는 95개 126 - 32 + 1
    const int NUM_COLS = 3;
    const int NUM_ROWS = (NUM_CHARS + NUM_COLS - 1) / NUM_COLS;
    /*
    - ROW수 구하는 논리
    - 총 95개 문자에, 3열로 나눌꺼니까, 3으로 나눠서 몫을 구해보자.
    - 95 / 3 = 31, 95 % 3 = 2
    - 31행 3열로 그리면 2개가 남는다. 그래서 1행 추가
    - 이 논리가 결국 나눠떨어지지 않으면 올림을 하는 논리이다.
    - if (95 % 3 != 0) row++; 나머지를 포함할 행을 추가하는 것
    - 수식으로 표현하면 이렇다. NUM_CHARS + NUM_COLS - 1 / NUM_COLS
    - 이렇게 하면 나눠떨어지지 않아도 올림을 해준다.
    - 나눠 떨어지는 경우 나누는 수 - 1을 더해봤자 몫이 증가하지 않음
    - 나눠 떨어지지 않으면 나머지의 최소값이 1이니까 나누는 수 - 1을 더하면 반드시 몫이 증가함
    * */

    int r;
    int ch;

    printf("Dec Hex  Char\tDec Hex  Char\tDec Hex  Char\n");

    for (r = 0; r < NUM_ROWS - 1; ++r) {
        ch = MIN_ASCII + r;
        printf("%03d %#X %c\t", ch, ch, ch);

        ch += NUM_ROWS;
        printf("%03d %#X %c\t", ch, ch, ch);

        ch += NUM_ROWS;
        printf("%03d %#X %c\n", ch, ch, ch);
    }

    /* last row doesn't have all columns */
    for (ch = MIN_ASCII + r; ch <= MAX_ASCII; ch += NUM_ROWS) {
        printf("%03d %#X %c\t", ch, ch, ch);
    }
    /*
    - 마지막줄을 출력할 때 이미 r값이 마지막 줄 offset(NUM_ROWS - 1)이다.
    - 여기서 for문은 column을 건너뛰면서 컬럼 하나씩 출력하는 용도다.
    - 각 row를 출력하는 반복문에서는 하나의 row에서 출력문을 3개 작성해서 굳이 2중 for문을 작성하지 않도록 했다.
    - for문을 만들지 않는게 더 효율적임(컴파일러에서도 이렇게 최적화를 많이 하곤 합니다.)
    * */
}
```

## 코드보기: 바이트 단위 변환 표

- 메크로를 무더기로 정의할 수 있음
- 제목들(칼럼 이름)은 배열로 따로 저장해서 출력
    - static const char* const DATA_STORAGE_NAMES[LENGTH]
    - 다른 파일에서 사용하지 못하게 static화

## 서식 문자열이 필요한 이유

![img_114.png](img_114.png)

- 일단 오버로딩 없음
- 임시 문자열 자동으로 생성을 안 해준다.
    - C에서는 기본적으로 메모리를 추가하지 않음..
- C에서 문자열 + 연산은 없다!!!!

![img_115.png](img_115.png)

- 기본적으로 추가 할당 없이 문자들을 출력한다!

## fprintf()도 동일하다

![img_116.png](img_116.png)

- stdout
- stdin
- stderr
- 이건 콘솔에서 자동으로 제공하는 3개의 스트림이다.
- 표준 스트림이라고 부른다.
- fprintf()에서 stdout, stderr을 사용한다.

## stdout

![img_117.png](img_117.png)

- 라인 버퍼링을 사용한다!
- 버퍼링
    - 출력할 내용을 곧바로 출력하지 않고 쌓아둔다.
- 라인 버퍼링
    - 버퍼가 꽉차면 비운다
    - 새 개행문자 '\n'이 들어오면 비운다.
- 강제로 버퍼를 비우고 싶으면? fflush(stdout);
    - file의 stream의 flush!!

## 버퍼링의 종류

![img_118.png](img_118.png)

## fprintf에서 stdout, stderr

![img_119.png](img_119.png)

- 지금은 콘솔에 똑같이 나오는데요?
- 다음 주에 배워요
    - 리디렉션

## 다른 스트림은 뭐가 있을까?

![img_120.png](img_120.png)

- 파일 스트림
- C#의 buffered writer같은 문자열 스트림은 없음

## sprinf

![img_121.png](img_121.png)

- 매우 많이 사용하는 함수
- char* buffer은 매우 넉넉하게 잡아야한다!!!

### sprinf의 예시

![img_122.png](img_122.png)

0 buffer의 12번 오프셋 부터 쓰레기값 확인

## sprintf의 위험성

![img_123.png](img_123.png)

- 버퍼를 작게 잡으면, 소유하지 않은 메모리에 접근해서... 정의되지 않는 결과가 발생한다.

![img_124.png](img_124.png)

- 그래서 C99에 들어옵니다.
- C89 시절에는 컴파일러마다 다르게 작동되는 표준이 아닌 함수를 사용하곤 했었음..

## 기타 출력 함수

![img_125.png](img_125.png)

- 거의 printf로 퉁치는 분위기
- puts는 마지막에 줄 바꿈 문자 추가해줌
- putchar()은 문자 하나만 출력(문자 하나만 출력하니 개행문자 같은거 넣을리가 없겠죠..?)
    - puts보다는 많이 사용함!

## 정리: C 스타일 문자열, 출력

- C는 문자열 자체가 없다. 널문자열을 통한 C 스타일 문자열
- 문자열 함수의 핵심은 O(N), 메모리 새로 생성 X, const char* vs char*
- 소유하지 않은 메모리 크래시 이슈
- 크기를 정해주는 n이 붙은 함수들, 함수마다 널캐릭터 붙여주는 함수도 있고, 아닌 함수도 있다.
- 서식과 포멧
- printf, fprintf, sprintf 모두 비슷하다.
