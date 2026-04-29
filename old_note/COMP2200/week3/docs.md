# Week3

## 포인터 개요

### 스택 메모리를 복습해봅시다.

![img.png](old_note/COMP2200/week3/img.png)

- int my_nums[5]를 초기화
  - 스택에 저장됨
  - 0, 1, 2, 3, 4로 스택 메모리에 저장됨
- process(my_nums, 5) 호출
  - process 함수의 인자로 my_nums의 `시작 주소값`이 전달됨
    - 함수의 매개변수로 배열을 전달할 때 배열의 모든 원소를 매개변수로 복사하지 않는다.
  - process 함수 호출 결과 스택의 배열이 변함(배열은 노락색 표시됨)
  - i의 경우 process 함수의 스택 프레임이라 파란색으로 표시됨

### 주소 연산자 &

![img_1.png](old_note/COMP2200/week3/img_1.png)

- 변수의 주소를 알아내는 연산자
- 지역 변수의 주소를 출력할 수 있다.

```c
#include <stdio.h>

int main(void) {
    int num = 10;
    /* printf("%p\n", &num); complie error*/
    printf("%p\n", (void*)&num);

    return 0;
}
```

- 주소를 출력할 때 void*로 캐스팅하지 않으면 컴파일 에러가 발생한다.
- "error: format specifies type 'void *' but the argument has type 'int *' [-Werror,-Wformat-pedantic]"

![img_2.png](old_note/COMP2200/week3/img_2.png)

- 출력해보면 주소가 잘 나온다.
  - 16진수 8개로 이뤄졌으니까 2^32개의 주소를 가질 수 있다.(32bit 컴퓨터)
  - 16진수 2개면 1바이트

![img_3.png](old_note/COMP2200/week3/img_3.png)
![img_4.png](old_note/COMP2200/week3/img_4.png)

- 비트 연산자는 피연산자가 2개
- 주소 연산자는 피연산자가 1개(단항 연산자)
- printf()에서 서식 문자 "%p"는 주소를 16진수로 보여준다.
  - 실행할 때 마다 스택 메모리 주소 바뀜(요즘 운영체제)
  - 보안 문제 때문에 이렇게 바꿔준다.(ASLR: [Address Space Layout Randomization](https://en.wikipedia.org/wiki/Address_space_layout_randomization))

## 주소를 저장하는 방법: 포인터

![img_5.png](old_note/COMP2200/week3/img_5.png)

- 메모리 주소도 숫자니까 변수에 저장할 수 있지 않을까?
- 4바이트 짜리 숫자? (32비트니까?)

![img_6.png](old_note/COMP2200/week3/img_6.png)

- 펭귄 붙여서 나온 주소값을 4바이트짜리 변수에 저장했다.

![img_7.png](old_note/COMP2200/week3/img_7.png)

- 컴파일 에러가 발생했다.
- 포인터랑 integer형이랑 호완이 되지 않는다!

### 설사 주소를 일반적인 변수에 저장하는 것도 문제임.

![img_8.png](old_note/COMP2200/week3/img_8.png)
![img_9.png](old_note/COMP2200/week3/img_9.png)

- 주소를 저장하는 특별한 변수가 포인터
- 이 숫자가 주소값인지 변수에 저장한 값인지 숫자만으로 알 수 없음

## 포인터의 정의

![img_10.png](old_note/COMP2200/week3/img_10.png)

- 주소를 저장하기 위한 변수형
- 변수인데 속에 담긴 값은 메모리 주소

## 포인터의 자료형

### 하드웨어(메모리)에 저장된 비트패턴은 자료형이라는 개념이 없다

![img_11.png](old_note/COMP2200/week3/img_11.png)
![img_12.png](old_note/COMP2200/week3/img_12.png)
![img_13.png](old_note/COMP2200/week3/img_13.png)

- 하드웨어는 자료형을 신경쓰지 않음
- 비트패턴은 그대로 저장됨, 하지만 해석이 바뀐다.
  - int 형으로 읽으면 32비트 읽죠.
  - char 형으로 읽으면 8비트를 읽죠. (그리고 아스키 코드 매핑)

### 프로그래밍 언어 입장(레이어)에서 자료형 개념이 존재한다.

![img_14.png](old_note/COMP2200/week3/img_14.png)

- 프로그래밍 언어 레이어에서 비트 패턴을 해석함
- 프로그래머가 컴파일러에게 하드웨어에 해당 주소로 부터 몇 바이트 읽어야하는지 알려줘야한다.
- 포인터 변수의 자료형: 그 주소에 어떤 형의 데이터가 저장됬는지 알려줌

## 포인터 변수의 선언

![img_15.png](old_note/COMP2200/week3/img_15.png)

- 포인터 변수의 선언은 자료형 뒤에 *을 붙인다.

![img_16.png](old_note/COMP2200/week3/img_16.png)

- 별표 왼쪽의 자료형은 그 메모리 주소로 가면 저장되어 있는 자료형
- 하드웨어가 몇 바이트 읽어오냐에 따라 자료형이 달라진다.

## 코딩 표준: int*(인트 포인터형)

![img_17.png](old_note/COMP2200/week3/img_17.png)

## 포인터 변수를 부르는 법

![img_18.png](old_note/COMP2200/week3/img_18.png)

- pointer to an int
- int*를 만나면 `오른쪽에서 왼쪽`으로 읽자

### 포인터 변수는 어디에 저장되어 있지?

![img_19.png](old_note/COMP2200/week3/img_19.png)
![img_20.png](old_note/COMP2200/week3/img_20.png)
![img_21.png](old_note/COMP2200/week3/img_21.png)

- 포인터 변수도 메모리에 저장되어 있음

![img_22.png](old_note/COMP2200/week3/img_22.png)

- 기본 개념은 포인터는 메모리 주소를 저장하는 변수!

## 메모리의 예시

![img_23.png](old_note/COMP2200/week3/img_23.png)

- 0a는 10이죠?(num에 저장된 값, 리틀 엔디언)

### 메모리에 저장된 값이 이상해요: 리틀 엔디언

![img_24.png](old_note/COMP2200/week3/img_24.png)
![img_25.png](old_note/COMP2200/week3/img_25.png)

- 인텔 PC는 리틀 엔디언 방식으로 저장한다.
- 왼쪽이 작은 메모리 주소임

## 포인터의 비유

![img_26.png](old_note/COMP2200/week3/img_26.png)
![img_27.png](old_note/COMP2200/week3/img_27.png)

## char 포인터

![img_28.png](old_note/COMP2200/week3/img_28.png)

- ch_pointer의 주소는 0x007ef7cc
- ch_pointer 주소에가서 4바이트를 차지하는 ch_pointer의 값을 읽으면? d3 f7 7e 00
  - 읽을 때 큰 주소 -> 작은 주소(오른쪽 -> 왼쪽)으로 읽기 
  - 리틀 엔디언으로 읽으면 007ef7d3
- ch_pointer에 저장된 주소값이 007ef7d3이다.
- 여기에는 ch변수의 주소값이 들어있다.
- 007ef7d3에서 1바이트를 읽으면? 63
  - 16진수 63은 99
  - 아스키 99는 소문자 c

## short 포인터

![img_29.png](old_note/COMP2200/week3/img_29.png)

## float 포인터

![img_30.png](old_note/COMP2200/week3/img_30.png)

- float은 4바이트

## double 포인터

![img_31.png](old_note/COMP2200/week3/img_31.png)

- double은 8바이트
- 논리는 모두 동일하다.

## 포인터에 저장된 주소 값도 바꿀 수 있나요?

![img_32.png](old_note/COMP2200/week3/img_32.png)

- pointer에 ch1의 주소를 대하고, 출력한 뒤, ch2의 주소를 다시 대입했음
- 포인터는 변수의 일종임, 값을 바꿀 수 있음(대입)

## 포인터와 함수 매개변수

![img_33.png](old_note/COMP2200/week3/img_33.png)

- 함수의 매개변수로 포인터를 전달할 수 있다.
- 매개변수로 받은 포인터에는 어떤 주소값이 저장되어 있다.
- 이 주소값에 저장된 데이터에 접근해서 무언가 할 수 있다.

### 주소에 저장된 값을 출력하기

![img_34.png](old_note/COMP2200/week3/img_34.png)
![img_35.png](old_note/COMP2200/week3/img_35.png)

- *를 붙이면 그 주소에 가서 값을 가져오라는 말이다.
  - 값을 가져올 때 어떤 자료형으로 가져오지? 포인터에 자료형!

## 역 참조 연산자 *

![img_36.png](old_note/COMP2200/week3/img_36.png)
![img_37.png](old_note/COMP2200/week3/img_37.png)

- 포인터 변수에 저장된 주소에 가서 값을 가져오는 연산자

## 참조와 역참조

![img_38.png](old_note/COMP2200/week3/img_38.png)

- 포인터가 하는 일이 참조
- 주소를 참조!
- 역참조는 그 주소에 저장된 값에 접근

![img_39.png](old_note/COMP2200/week3/img_39.png)

- indirection

## 역 참조를 통해 값을 변경해보자

![img_40.png](old_note/COMP2200/week3/img_40.png)

- 역 참조로 변수의 주소로 가서, 그 주소에 저장된 값을 변경

![img_41.png](old_note/COMP2200/week3/img_41.png)
![img_42.png](old_note/COMP2200/week3/img_42.png)

## 포인터 변수 선언 vs 역 참조

![img_43.png](old_note/COMP2200/week3/img_43.png)

- 타입이 있으면 포인터 변수 선언!
- 별표 때문에 헷갈림 ㄴㄴ

## 포인터로 두 변수의 값 바꾸기

![img_44.png](old_note/COMP2200/week3/img_44.png)

- 안 바뀌죠

![img_45.png](old_note/COMP2200/week3/img_45.png)

- 참조형 vs 값형 예제였죠?

![img_46.png](old_note/COMP2200/week3/img_46.png)

- ref가 포인터의 역할을 해줌

![img_47.png](old_note/COMP2200/week3/img_47.png)

## 값에 의한 전달 vs 참조에 의한 전달

![img_48.png](old_note/COMP2200/week3/img_48.png)
![img_49.png](old_note/COMP2200/week3/img_49.png)
![img_50.png](old_note/COMP2200/week3/img_50.png)

- 엄밀히 말하면 값에 의한 전달(포인터 값을 복사하니까)
- 결국 중요한 것은 원본이 바뀌는지 안 바뀌는지

## 포인터와 함수 반환값

![img_51.png](old_note/COMP2200/week3/img_51.png)

### 함수에서 지역 변수의 주소를 반환하는 코드는 매우 위험함

![img_52.png](old_note/COMP2200/week3/img_52.png)
![img_53.png](old_note/COMP2200/week3/img_53.png)

- 컴파일러도 경고를 줌
  - 실행 파일이 생기긴 하죠

![img_54.png](old_note/COMP2200/week3/img_54.png)
![img_55.png](old_note/COMP2200/week3/img_55.png)

- 함수의 호출이 끝나면 스택 프레임의 지역 변수도 사라짐
- 스택 프레임 자체가 유효하지 않음

## 댕글링 포인터(Dangling pointer)

![img_56.png](old_note/COMP2200/week3/img_56.png)

- 함수의 지역 변수의 주소를 반환하면 댕글링 포인터가 됨
- 컴파일 경고임

![img_57.png](old_note/COMP2200/week3/img_57.png)

- 포인터를 반환해도 되는 경우
- 지역 변수가 아닌 경우: 함수 스택 프레임 안에 속하지 않는 경우
  - 전역 변수
  - 함수 내부의 static 변수
  - 파일 속 static 전역 변수(extern 해서 못 쓰게 막음, extern으로 사용하려 시도하면 링킹 오류)
  - 참고로 이런 변수들은 데이터 섹션에 저장됨

![img_58.png](old_note/COMP2200/week3/img_58.png) 

- 도우미 함수 안에 생성한 변수를 다른 함수에서 사용하고자 할 때
  - 도우미 함수 안에 생성한 변수를 호출하는 함수에서 바로 쓰면 괜찮겠죠?
- 힙 메모리 사용할 때(나중에)

## NULL 포인터

- 함수로 포인터를 반환하려는데 유효하지 않은 주소는 어떻게 반환할까?

![img_59.png](old_note/COMP2200/week3/img_59.png)

- 유효한 주소가 없다는 뜻

![img_60.png](old_note/COMP2200/week3/img_60.png)

- 값이 0인 상수 표현식
- 포인터에 0을 대입해도 됨
- 전용 매크로가 있음: NULL을 지우고 ((void*)0)으로 복붙
- 하드웨어에서 주소 0은 아무것도 가리키지 않는 주소! 이건 약속임

![img_61.png](old_note/COMP2200/week3/img_61.png)

- NULL은 비교 연산 가능

![img_62.png](old_note/COMP2200/week3/img_62.png)

- 코딩 표준은 NULL을 사용하자!!! (0보다는 보기 좋잖아)

## NULL은 골치덩어리다!

![img_63.png](old_note/COMP2200/week3/img_63.png)

- 어떤 함수의 매개변수로 포인터가 들어올 때 그 포인터가 유효하다고 믿고 싶다.
- 함수의 선조건 문제
  - 선조건으로 NULL이 아니라고 해줘야함!
- 그래서 함수를 작성할 때 기본적으로 NULL이 아니라고 가정해야함!

### 코딩 표준: 널 포인터를 허용하는 매개변수

![img_64.png](old_note/COMP2200/week3/img_64.png)
![img_65.png](old_note/COMP2200/week3/img_65.png)

- 디버그 중에 assert로 검증
- 흘러오는 데이터 검증

![img_66.png](old_note/COMP2200/week3/img_66.png)

- 함수에서 NULL을 반환하는 것도 마찬가지
- 사용하는 곳에서 필요없는 분기문 만들 수 있음 ㅠㅠ
  - 반환값으로 NULL 확인을 해야하는...

![img_67.png](old_note/COMP2200/week3/img_67.png)

## 널 포인터의 사용처

### 1. 포인터 변수 초기화

![img_68.png](old_note/COMP2200/week3/img_68.png)

- 포인터 변수를 선언하면서 NULL로 초기화
- 초기화하지 않으면 스택의 쓰레기 값이 들어가죠?

### 2. 포인터 변수의 유효성 검사

![img_69.png](old_note/COMP2200/week3/img_69.png)

- 포인터 변수가 NULL이면 유효하지 않다고 판단
- NULL 포인터 변수를 역 참조하면 `결과가 정의되지 않음`
- 운영체제에서 NULL 메모리에 역 참조하면 크래시를 내줌
  - Java, C#의 NULL 포인터 예외와 유사함
 
![img_70.png](old_note/COMP2200/week3/img_70.png)

- 좋은습관: 역참조를 하기 전 NULL인지 검사하자!
- 검사는 비교 연산자를 사용함
- NULL이 아닌 경우에만 *로 역참조

### 3. 댕글링 포인터를 막기 위해

![img_71.png](old_note/COMP2200/week3/img_71.png)

- free를 호출해도 ptr이라는 포인터 변수에 값이 지워지지는 않는다. 즉 더 이상 사용하지 않는 주소가 남아있음
- 포인터 변수도 스택 메모리에 값을 저장하는데, 이 값이 쓰레기 값인거죠
- ptr을 사용하지 않는 주소인 NULL로 초기화, 이미 지운 메모리라고 표시하는 느낌

## 포인터의 비교

- NULL 포인터를 검사할 때 비교 연산을 했음

![img_72.png](old_note/COMP2200/week3/img_72.png)
![img_73.png](old_note/COMP2200/week3/img_73.png)

- 주소를 비교하기 vs 값을 비교하기
  - 주소가 달라도 값은 다를 수 있죠

![img_74.png](old_note/COMP2200/week3/img_74.png)

- 포인터에 비교 연산자를 사용 할 수 있음
  - (==, >, <, >=, <=, !=)
- 주소를 비교해서 어디에 쓰죠??
- 배열!!!

## 포인터의 크기

![img_75.png](old_note/COMP2200/week3/img_75.png)

- 워드(word) CPU가 한 번에 처리할 수 있는 데이터의 크기
- 포인터의 크기는 시스템 아키텍쳐에 따라 결정
  - 포인터를 indirection하면 자료형에 따라 몇 바이트를 읽어야 하는지 결정
- 비교 연산에서 포인터의 크기를 비교하는 것이 아님

### 포인터의 크기 예

![img_76.png](old_note/COMP2200/week3/img_76.png)
![img_77.png](old_note/COMP2200/week3/img_77.png)

### 매개변수로 배열을 전달할 때 포인터를 전달했음 

![img_78.png](old_note/COMP2200/week3/img_78.png)
![img_79.png](old_note/COMP2200/week3/img_79.png)

- 매개변수에는 배열 첫번째 원소의 주소를 전달
  - 배열은 스택 메모리에 줄줄이 전달
- 함수의 스택 프레임에 배열 전체를 다 복사하는게 아님

## 배열과 포인터

![img_80.png](old_note/COMP2200/week3/img_80.png)
![img_81.png](old_note/COMP2200/week3/img_81.png)

- 배열을 포인터에 대입하면?
  - 배열의 첫번째 요소의 주소가 포인터에 대입된다.
- 배열과 포인터는 똑같음...

![img_82.png](old_note/COMP2200/week3/img_82.png)
![img_83.png](old_note/COMP2200/week3/img_83.png)

- 첫번째 요소를 대입하면, 이건 요소니까 변수의 값임. 주소가 아니죠
- 어떻게 수정해볼까? &nums[0]

![img_84.png](old_note/COMP2200/week3/img_84.png)
![img_85.png](old_note/COMP2200/week3/img_85.png)

- 컴파일러에서 힌트도 주네요 ㅋㅋㅋ

![img_86.png](old_note/COMP2200/week3/img_86.png)

## 배열 속에서 각 요소의 위치

![img_87.png](old_note/COMP2200/week3/img_87.png)

- 배열에서 각 요소 사이의 `바이트 간격은 일정`하다
- 일정한 간격의 크기는 `자료형의 크기`이다

![img_88.png](old_note/COMP2200/week3/img_88.png)

- 각 원소의 위치를 시작 원소의 주소만 알면 계산할 수 있다.
- offset 개념
- n번째 원소 - 1번째 원소의 주소값 차이 = (n - 1) * 자료형 크기

![img_89.png](old_note/COMP2200/week3/img_89.png)
![img_90.png](old_note/COMP2200/week3/img_90.png)

- 그래서 더해봤는데...?
- sizeof 연산자로 주소를 4만큼 더해볼까?
- 근데 메모리 주소가 4만큼 더해진게 아닌데??
  - 0x004ff7e0 -> 0x004ff7f0
  - 16 바이트가 증가했다!
  - 원래 의도는 주소값을 4 바이트만큼 증가하는건데...?

### 포인터에 정수를 더한다는 건...?

![img_91.png](old_note/COMP2200/week3/img_91.png)

- 바이트를 더하는게 아님
- 메모리 주소를 자료형에 따라 그 다음으로 옮겨줘!!! 라는 의미임
- int*에 1을 더하면 4바이트만큼 옮겨줌
  - int가 4바이트니까
  - 빼기, ++ ,-- 모두 가능
- &nums[0] + 1은 nums[1]의 주소임
- &nums[0]은 nums 포인터와 동일하다. 따라서 포인터 정수 연산 적용

![img_92.png](old_note/COMP2200/week3/img_92.png)

- 배열의 인덱스와 포인터 연산은 같은 의미(offset)
- nums + 3
- &nums[3]

## 배열 요소에 포인터로 접근하기

![img_93.png](old_note/COMP2200/week3/img_93.png)
![img_94.png](old_note/COMP2200/week3/img_94.png)

- 포인터에 배열의 첨자 연산자[]를 사용할 수 있다.
```c++
int* ptr = nums;
printf("%d, %d, %d\n", nums[0], ptr[1], *(ptr + 2));
```

![img_95.png](old_note/COMP2200/week3/img_95.png)

- 컴파일러에게 모두 같은 의미
- 한 칸에 몇 바이트? 는 자료형이 결정

### 배열의 모든 요소 더하기 예시

![img_96.png](old_note/COMP2200/week3/img_96.png)
![img_97.png](old_note/COMP2200/week3/img_97.png)

- 사실 매개변수에 배열이 들어온다고 적어주는게 좋긴함 int data[] 이렇게 말이죠..?

## 포인터의 캐스팅

![img_98.png](old_note/COMP2200/week3/img_98.png)
![img_99.png](old_note/COMP2200/week3/img_99.png)

### 딱 1바이트 옮기기

![img_100.png](old_note/COMP2200/week3/img_100.png)

- char 포인터로 캐스팅해서 포인터 연산

![img_101.png](old_note/COMP2200/week3/img_101.png)

- 캐스팅해도 메모리 주소에 들어있는 값은 변하지 않는다.
- 단지 그 주소의 값을 읽어올 때 어떻게 해석할지만 바뀐다.

![img_102.png](old_note/COMP2200/week3/img_102.png)

- int_array 배열의 첫번째 원소의 주소는 0x0096f864
  - 만약 캐스팅하지 않고, int_ptr + 1을 하면 값이 0x0096f868이 나온다.
- char*로 캐스팅하면 포인터에 정수를 더할 때 char의 크기만큼 주소를 더한다. 따라서 0x0096f865가 나온다.
- 그리고 이 주소값을 int_ptr에 대입했다. 따라서 리틀 엔디언으로 41/00/00/00으로 읽죠? 엄청 큰 값이 나옴!

## 두 주소간의 사칙연산

![img_103.png](old_note/COMP2200/week3/img_103.png)

- 주소에는 정수만 더하거나 뺄 수 있다.
- 만약에 int형의 절반(2바이트)만큼 주소를 이동하고 싶다?
  - char형으로 포인터 캐스팅하고 2를 더하자...
  - char형 캐스팅으로 가장 작은 주소의 단위인 바이트를 이동할 수 있다.

![img_104.png](old_note/COMP2200/week3/img_104.png)
![img_105.png](old_note/COMP2200/week3/img_105.png)

- 두 주소간의 뺄셈만 가능함
- 뺄셈만 의미가 있음. 나머지는 이상하죠?
- 뺄셈은 offset, 데이터가 몇 개 들어갈 수 있냐?
- 배열의 첫번째 원소와 마지막 원소의 주소를 알면 `배열의 크기`를 구할 수 있다.

## 자바와 C#은 모든 것이 포인터

![img_106.png](old_note/COMP2200/week3/img_106.png)
![img_107.png](old_note/COMP2200/week3/img_107.png)
![img_108.png](old_note/COMP2200/week3/img_108.png)
![img_109.png](old_note/COMP2200/week3/img_109.png)

- 안전하지 않아서 허용하지 않음

## 안전하지 않은 코드

![img_110.png](old_note/COMP2200/week3/img_110.png)
![img_111.png](old_note/COMP2200/week3/img_111.png)

- 배열 외의 데이터에 접근할 수 있음

![img_112.png](old_note/COMP2200/week3/img_112.png)

## 포인터와 배열의 차이

1. sizeof 연산자

![img_113.png](old_note/COMP2200/week3/img_113.png)

- 포인터에 사용하면 포인터의 크기를 반환
  - 포인터의 크기는 워드 단위, 플랫폼에 따라 달라짐(32bit, 64bit)
- 배열에 사용하면 배열의 크기를 반환

2. 문자열 초기화

![img_114.png](old_note/COMP2200/week3/img_114.png)

- c 스타일 문자열: char 배열, 끝에 널문자('\0')가 있음

![img_115.png](old_note/COMP2200/week3/img_115.png)

- C 스타일 문자열 초기화하는 방법1
- char 배열로 변수를 선언하고 우변에 "문자열"을 대입
- 지역변수로 char 배열 변수를 선언했다면, 스택 메모리에 저장
- 일반 배열과 똑같음, 다만 마지막에 널문자를 넣어줌
- 문자열을 수정해도 괜찮다.

![img_116.png](old_note/COMP2200/week3/img_116.png)

- C 스타일 문자열 초기화하는 방법2
- char* 변수를 서언하고 우변에 "문자열"을 대입
- "문자열" 값은 데이터 섹션에 저장
- char* 변수는 스택에 저장
- char* 변수의 값은 데이터 섹션의 주소
- 문자열을 수정하면 안된다. 읽기 전용

![img_117.png](old_note/COMP2200/week3/img_117.png)

3. 대입

![img_118.png](old_note/COMP2200/week3/img_118.png)
![img_119.png](old_note/COMP2200/week3/img_119.png)

- 포인터 변수 값을 대입할 수 있음
- 배열 변수에는 값을 대입할 수 없음

4. 포인터 산술 연산
 
![img_120.png](old_note/COMP2200/week3/img_120.png)
![img_121.png](old_note/COMP2200/week3/img_121.png)

- 배열 변수는 상수 주소라고 생각하면 된다.
- 읽기/역참조만 가능

## 다시 만나는 연산자 결합 법칙

![img_122.png](old_note/COMP2200/week3/img_122.png)
![img_123.png](old_note/COMP2200/week3/img_123.png)

```c++
int nums[] = { 123, 456, 789 };
int* p = nums;
```

### *p++

![img_124.png](old_note/COMP2200/week3/img_124.png)
![img_125.png](old_note/COMP2200/week3/img_125.png)
![img_126.png](old_note/COMP2200/week3/img_126.png)
![img_127.png](old_note/COMP2200/week3/img_127.png)
![img_128.png](old_note/COMP2200/week3/img_128.png)
![img_129.png](old_note/COMP2200/week3/img_129.png)
![img_130.png](old_note/COMP2200/week3/img_130.png)

- *p++에서 ++이 *보다 연산자 우선순위가 높다.
- 평가와 증감 실행은 다르다는 것을 기억하자
- p++은 p로 평가된다.
- 평가 후 역참조 연산자 평가해서 값에 접근한다.
- =이 평가되서 값 134를 num에 대입한다.
- 증감이 실행되서 p = p + 1, 0x108을 p에 저장한다.

### *++p

![img_131.png](old_note/COMP2200/week3/img_131.png)
![img_132.png](old_note/COMP2200/week3/img_132.png)
![img_133.png](old_note/COMP2200/week3/img_133.png)
![img_134.png](old_note/COMP2200/week3/img_134.png)
![img_135.png](old_note/COMP2200/week3/img_135.png)

- 연산자 우선순위가 동일해서 오른쪽에서 왼쪽으로 결합법칙 적용
- 그리고 어차피 왼쪽에서 오른쪽으로 결합법칙 적용해보면 말이 안 되는 것을 알 수 있음
  - *++ 사이에 피연산자가 없음ㅋㅋ
- *(++p) 와 돌일하다.
- 전위 연산자라서 증감 실행 후 평가한다.
- ++p를 실행하면 주소가 0x104에서 0x108로 증가한다.
- 평가 결과 p의 값은 0x108이며, 역참조 연산자로 0x108의 값을 가져온다.
- num에 가져온 값 68을 대입한다.
- 이미 p에는 0x108이 저장되어 있음(이미 실행됬죠?)

### ++*p

![img_136.png](old_note/COMP2200/week3/img_136.png)
![img_137.png](old_note/COMP2200/week3/img_137.png)
![img_138.png](old_note/COMP2200/week3/img_138.png)
![img_139.png](old_note/COMP2200/week3/img_139.png)
![img_140.png](old_note/COMP2200/week3/img_140.png)

- 연산자 우선순위가 동일하다. 따라서 오른쪽에서 왼쪽으로 결합법칙 적용
- ++(*p)와 동일하다.
- 역참조 연산자로 p의 값 0x104 주소에 있는 값 134에 접근한다.
- 전위 연산자니까 실행 후 평가한다. 따라서 134를 135로 증가시킨다.
- 평가된 값 135를 num에 대입한다.
- 주목해야할 점은 0x104주소에 있는 값이 바뀌었다는 것이다.
  - 전위 연산자를 실행할 때 *p = *p + 1이라서 p에 역참조해서 135를 대입하는것임!!

### (*p)++

![img_141.png](old_note/COMP2200/week3/img_141.png)
![img_142.png](old_note/COMP2200/week3/img_142.png)
![img_143.png](old_note/COMP2200/week3/img_143.png)
![img_144.png](old_note/COMP2200/week3/img_144.png)
![img_145.png](old_note/COMP2200/week3/img_145.png)

- 괄호가 있으니 명백하다. 만세!
- 우선 역참조로 0x104의 134에 접근한다.
- 후위 연산자라 평가 먼저해서 대입후, 1을 더한다.
- num에 134를 대입한다.
- 0x104의 134값을 135로 증가시킨다.
  - *p = *p + 1

## 동일한 우선순위를 갖는 연산자들

![img_146.png](old_note/COMP2200/week3/img_146.png)

- 동일한 우선순위를 가지는 연사자들이 여려개 있다.
  - 이 때 어떤 것들은 오른쪽 -> 왼쪽 결합/ 어떤 것들은 왼쪽 -> 오른쪽 결합..?
- 말이 안 되죠..?

![img_147.png](old_note/COMP2200/week3/img_147.png)

- 결론은 괄호를 쓰자!

## 조금 더 빠른 배열의 요소 더하기 함수

![img_148.png](old_note/COMP2200/week3/img_148.png)

- int* p에 매개변수로 받은 주소값(배열의 첫번째 주소)을 대입하면 장점이 뭘까?
  - 함수의 지역변수 p에 주소값을 이것 저것 바꿀 수 있다.
  - nums이라는 배열 변수는 상수니까 못 바꾸죠?

![img_149.png](old_note/COMP2200/week3/img_149.png)

- 배열은 첫주소 + 요소 위치까지 오프셋을 계산해서 접근함
- 포인터는 이미 다음 요소 주소까지 가있어서 그대로 참조!

## 왜 *p++이 더 빠르죠?

![img_150.png](old_note/COMP2200/week3/img_150.png)
![img_151.png](old_note/COMP2200/week3/img_151.png)

- 배열 변수는 쓰는 경우

![img_152.png](old_note/COMP2200/week3/img_152.png)

- 포인터를 쓰는 경우

![img_153.png](old_note/COMP2200/week3/img_153.png)

## 포인터의 const

![img_154.png](old_note/COMP2200/week3/img_154.png)
![img_155.png](old_note/COMP2200/week3/img_155.png)
![img_156.png](old_note/COMP2200/week3/img_156.png)
![img_157.png](old_note/COMP2200/week3/img_157.png)
![img_158.png](old_note/COMP2200/week3/img_158.png)

- 지역변수 포인터의 값을 바꿔도 문제가 없다.
- 하지만 포인터를 역참조해서 원본인 id값을 바꾸는 것은 문제가 매우매우 많다.
- 이럴때 읽기 전용을 위해 const를 쓰자
- const는 2개를 보호한다.

## 주소를 보호하는 const

![img_159.png](old_note/COMP2200/week3/img_159.png)
![img_160.png](old_note/COMP2200/week3/img_160.png)

- 포인터 변수에 const를 붙이면 포인터 변수의 메모리 주소값을 바꿀 수 없다.

![img_161.png](old_note/COMP2200/week3/img_161.png)
![img_162.png](old_note/COMP2200/week3/img_162.png)

![img_163.png](old_note/COMP2200/week3/img_163.png)
![img_164.png](old_note/COMP2200/week3/img_164.png)

- 포인터 변수는 오른쪽에서 왼쪽으로 읽는다.
- p is a const pointer to int

![img_165.png](old_note/COMP2200/week3/img_165.png)

- const라서 생성과 동시에 초기화 해야한다.
- 초기화 이후 다른 값으로 변경할 수 없다.
  - 포인터 변수의 주소값을 바꿀 수 없다.
- const가 아닌 변수에 대입할 수 있다.
  - 다른 포인터 변수에 주소값을 대입할 수 있다.
- const 포인터가 가리키는 값은 바꿀 수 있다.

## 값을 보호하는 const를 가리키는 포인터

![img_166.png](old_note/COMP2200/week3/img_166.png)
![img_167.png](old_note/COMP2200/week3/img_167.png)
![img_168.png](old_note/COMP2200/week3/img_168.png)

- 방법이 2가지임!
- const int* p
- int const* p
- 주소에 저장된 값을 보호한다.

## 두 const의 정리와 예

![img_169.png](old_note/COMP2200/week3/img_169.png)
![img_170.png](old_note/COMP2200/week3/img_170.png)

- char* const p는 p라는 char 포인터 변수 값(주소)를 바꿀 수 없다.
  - 하지만 p가 가리키는 값은 바꿀 수 있다.
- const char* p는 const char을 가리키는 포인터 변수다. p에 다른 주소를 대입해도 된다.
  - p가 가리키는 char 변수 값을 바꿀 수 없다.

## 주소와 값 모두 지키는 const

![img_171.png](old_note/COMP2200/week3/img_171.png)

- 초기화 된 후 절대 바뀌지 않는 변수에 유용하다.
  - 전역변수, 구조체 멤버 변수

## const 포인터 읽는 방법 정리

![img_172.png](old_note/COMP2200/week3/img_172.png)

- 오른쪽에서 왼쪽으로 읽자
- 정말 꾸르팁

## const는 절대 제거하지 말자

![img_173.png](old_note/COMP2200/week3/img_173.png)
![img_174.png](old_note/COMP2200/week3/img_174.png)
![img_175.png](old_note/COMP2200/week3/img_175.png)

- 만행을 저지르지 말자
- 최대한 const는 붙이자.
- 함수 시그니처는 약속이다.

## 포인터의 용도

![img_176.png](old_note/COMP2200/week3/img_176.png)

- 큰 데이터를 함수의 매개변수로 전달할 때

![img_177.png](old_note/COMP2200/week3/img_177.png)

- 반환 값이 둘 이상일 때

![img_178.png](old_note/COMP2200/week3/img_178.png)

- 동적 메모리 할당
  - 데이터 크기를 컴파일 도중에 알 수 없다.
  - 프로그램 실행 수명보다 짧은 시간 동안만 사용

![img_179.png](old_note/COMP2200/week3/img_179.png)

- 데이터 구조를 구현할 때
- 하드웨어의 메모리에 직접 접근

## 포인터의 배열

![img_180.png](old_note/COMP2200/week3/img_180.png)

- 포인터도 변수니까, 배열에 저장할 수 있다.
- 근데 배열 선언 방법이?

![img_181.png](old_note/COMP2200/week3/img_181.png)

- 배열의 배열

![img_182.png](old_note/COMP2200/week3/img_182.png)

- 바깥쪽 배열이 행, 안쪽이 열
- 각 행마다 열의 길이가 달라질 수 있다.

![img_183.png](old_note/COMP2200/week3/img_183.png)
![img_184.png](old_note/COMP2200/week3/img_184.png)

- 원소마다 포인터가 저장되어 있음. 이 포인터가 각각의 배열을 가리킨다.
- 한 덩어리 아님

## 2차원 배열 vs 포인터의 배열

### 배열의 배열을 함수에서 사용하기 

![img_185.png](old_note/COMP2200/week3/img_185.png)

- 함수 내부에서 접근하려면, 각 내부 배열의 길이를 알려주는 size_t 배열이 필요하다.

### 2차원 배열을 함수에서 사용하기

![img_186.png](old_note/COMP2200/week3/img_186.png)
![img_187.png](old_note/COMP2200/week3/img_187.png)

- 오류가 난다.
- 2차원 배열은 모두 한 덩어리임(1차원 배열과 동일함) 그래서 매개변수에 전달할 때 1행 1열의 주소를 넘긴다.
- 2차원 배열에서 1행 1열(2차원 배열 변수)은 주소값이다. 나머지 칸은 주소값에 offset을 통해 접근하는 방식이다.
- do_magic의 매개변수에 필요한 것은 int*의 배열이다.(int**) 근데 2차원 배열은 그냥 int배열이다. 주소값의 배열이 아니다. 헷갈리지 말죠!
  - 포인터의 배열과 그냥 자료형의 배열이 다르니까 호환이 안됨! 
  - 그래서 PPT에 한 덩어리 메모리라 주솟값이 저장된 곳이 없다고 설명
- 대신에 매개변수에 int arr[][10] 이렇게 컴파일러에게 2차원 배열임을 알려야한다.
  - 컴파일러에게 열의 길이를 알려줘서 1행을 건너뛸 때 (열의 길이 * 자료형 크기) 계산으로 행을 건너뛸 수 있다.


![img_188.png](old_note/COMP2200/week3/img_188.png)
![img_189.png](old_note/COMP2200/week3/img_189.png)

- 매개변수로 전달할 때 행 수는 전달해줘야한다. 컴파일러는 열의 길이만 알 수 있다.
  - 열의 길이로 1행을 넘어갈 때 몇 offset씩 건너뛰어야 하는지 계산할 수 있을 뿐, 총 행이 몇 개인지는 모른다.