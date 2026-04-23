# week5

## 입력

![img.png](old_note/COMP2200/week5/img.png)
![img_1.png](old_note/COMP2200/week5/img_1.png)

- `happy path`만 존재하는게 아니다.
    - 고양이가 입력하면?
- 입력 함수의 반환값이 매우 중요하다.
- 문서에서 확실히 읽고 코드에서 반환값으 검사할 것

### 입력의 출처

![img_2.png](old_note/COMP2200/week5/img_2.png)

- 입력의 출처는 출력할 때 이미 봤음
- 스트림
    - 콘솔
    - 파일
- 문자열

### 입력처리 전략

![img_3.png](old_note/COMP2200/week5/img_3.png)

- 입력을 처리하는 방법
    - 한 글자씩 읽기
    - 한 줄씩 처리
    - 한 데이터씩 읽기
        - 각 데이터형에 맞게
    - 한 블록씩 읽기(이진 데이터)
        - 바이트 단위
        - int로 4바이트 단위
        - 배열 단위

## 한 글자씩 읽기, 한 글자씩 읽는 알고리듬

### 한 글자씩 읽는 알고리즘: 시도 1

![img_4.png](old_note/COMP2200/week5/img_4.png)
![img_5.png](old_note/COMP2200/week5/img_5.png)
![img_6.png](img_6.png)

- while TRUE로 계속 반복
- c = getchar()로 한 글자씩 읽기
- putchar(c)로 한 글자씩 출력하기

- 12 엔터 입력
- 12 출력
- a 엔터 입력
- a 출력

![img_7.png](img_7.png)

- getchar() 실행 후 대기 중
- 버퍼에 아무 문자가 없기 때문에 대기 중
- 버퍼로 부터 입력을 받아야 다음으로 넘어감

![img_8.png](img_8.png)

- 키보드로 'a'를 입력 후 엔터키를 누름

![img_9.png](img_9.png)

- 버퍼에 'a' 써짐
- 버퍼로부터 한 글자('a')를 읽어옴
- getchar() 함수 종료, 반환해서 c에 대입

![img_10.png](img_10.png)

- putchar(c)로 'a'를 출력
- 콘솔에서 아직 줄이 안 바뀜

![img_11.png](img_11.png)

- 버퍼에 아직 엔터('\n')가 남아있음
- getchar()을 다시 실행
- getchar()은 버퍼로 부터 한 글자('\n')를 읽어옴

![img_12.png](img_12.png)

- putchar(c)로 '\n'을 출력

![img_13.png](img_13.png)

- 버퍼에 문자가 없으면 키보드에서 입력 받기를 기다린다.

### getchar() 반쪽자리 설명

![img_14.png](img_14.png)

- 반환형은 int임

## getchar()와 EOF 키

### 멈추지 않는 프로그램

![img_15.png](img_15.png)

- 이 코드는 프로그램이 끝나질 않음..

### 언제 읽는 것을 멈출까?

![img_16.png](img_16.png)

- 예를들어 특별한 키 'x'를 누르면 프로그램이 종료?
- x는 못쓰는데...? 불편하죠
- [후기 강조 포인트]

![img_17.png](img_17.png)

- 어디에서도 사용 가능한 "입력 끝"을 나타내는 무언가
- getchar()의 반환값이 int와 연관됨

![img_18.png](img_18.png)

- 실패하면 EOF 반환
- EOF는 -1

![img_19.png](img_19.png)

- C표준에 EOF는 음수
- 그래서 getchar()은 int 반환
- char은 c 표준에 unsigned, signed가 정해져있지 않아서 EOF를 표현할 수 없음

### 완전한 getchar() 설명

![img_20.png](img_20.png)

- 성공 시 읽은 문자의 아스키 코드 반환
- 실패 시 EOF 반환
- fgetc(stdin)과 같음

## 한 글자씩 읽기 알고리듬 2, EOF 키는 어디 있나요?

### 한 글자씩 읽는 알고리즘: 시도 2

![img_21.png](img_21.png)
![img_22.png](img_22.png)

- 우선 반복문 밖에서 하나 읽고
- 반복문 조건에서 검증 후
    - 출력하고
    - 다시 입력 받고

![img_23.png](img_23.png)
![img_24.png](img_24.png)

- EOF는 키보드로 어떻게 입력???

![img_25.png](img_25.png)

- 유닉스: ctrl + d
- 윈도우: ctrl + z

![img_26.png](img_26.png)

### 이거 눈에 밟히면..?

![img_27.png](img_27.png)
![img_28.png](img_28.png)

- 띠용

![img_29.png](img_29.png)

- 괄호 안 부터 실행

![img_30.png](img_30.png)
![img_31.png](img_31.png)

- getchr()실행 후
- c에 대입

![img_32.png](img_32.png)

- 이제 c에 든 값과 EOF와 비교

### c = getchar()을 괄호로 안 감싸도 됨?

![img_33.png](img_33.png)

- 괄호로 감싸지 않으면 문제가 됨.. 연산자 우선순위 때문
- 이러면 c가 0이나 1이라서 1만 주구장창 출력하게 됨
- 결론은 실수를 줄이자!

## 한 글자씩 읽는 방법이 유용한 경우

![img_34.png](img_34.png)

- 들어오는 족족 처리하니까 메모리 절약 가능

![img_35.png](img_35.png)

- O(N) for문 한 번 돌면서 각각 처리할 때 적합함(특히 문자열)
- 하지만 문제점: char말고 다른 데이터형으로 쓰기는 어려움
    - 예시를 상상해보자.
    - 한 글자씩 받아서, 123을 만드려면...? 1받고 곱하기 10하고, 2받고 곱하기 10하고 1에 또 곱하기 10하고.. 너무 번거롭네요
- 그래서 결론은 문자, 문자열에 쓰기에 적합함

## 코드보기: 공백(whitespace)과 줄 수 세기

- 공백 문자에는 ' '말고도 다른 것들도 있다.
    - \n, \t
- isspace() 함수를 사용하면 공백 문자인지 아닌지 판별 가능
    - ctype.h에 있음

## 한 줄씩 읽기, gets()

### 한 줄씩 읽는 알고리듬

![img_36.png](img_36.png)

- 한줄을 읽었는데, EOF 같은게 들어왔다. 어떻게 될까요?
    - 종료됩니다.
- 한줄의 끝은 어떻게 알 수 있나요?
    - EOF
    - 개행문자

### 한 줄을 읽어서 어디에 저장하죠?

![img_37.png](img_37.png)

- 함수 내부에서 메모리를 할당해서 반환하기? 거의 없음
- C언어의 기본 규칙은 외부에서 함수로 어떤 배열을 넘기고, 그 배열에 무언가를 저장하는 방식

![img_38.png](img_38.png)

- 새로운 문자열을 반환하는게 아님
- 만약에 새로운 문자열을 메모리 할당해서 반환했다고 해보자.
    - 그러면 함수를 호출한 쪽에서 반드시 해제를 해줘야한다.
    - 안전하지 않은 코드죠?
- 메모리 누수가 발생할 위험이 있죠.

![img_39.png](img_39.png)

- c는 함수에서 메모리 새로 할당하는 경우 없다고 보면 됨.
- 프로그래머가 미리 배열(스택 메모리)에 문자열 복사해서 함수에 인자로 전달해야함
- 함수는 그 배열에 한 줄을 읽어옴

### gets() 함수

![img_40.png](img_40.png)
![img_41.png](img_41.png)

### gets()의 매개변수

- 매개변수: char* str(버퍼)
- char* gets(char* str)에서 매개변수가 const가 아닌 이유?
    - str을 변경해야하죠.
    - stdin에서 계속 문자를 읽어서 str에 추가해야하니 ㅇㅇ;
- '\n', EOF를 stdin에서 읽으면, str에서 그 전 마지막 문자 뒤에 '\0'을 추가함
    - 즉 개행문자, EOF를 널문자로 교체한다! 라고 생각하면 편하겠죠?
- stdin에서 '\n'을 제거하지만 버퍼에 저장하지는 않아서, '\n'은 읽지 않는다.
    - 개행 문자를 못 읽네요?

### gets()의 반환값

![img_42.png](img_42.png)

- 성공 시 str을 반환하므로, 의미가 없음
    - 어차피 매개변수로 넘길 때 char* 알잖아.
- 실패 시 NULL 반환
    - 이 녀석을 활용해서 성공/실패 여부를 판단한다.

## 한 줄 읽기

![img_43.png](img_43.png)

- gets는 매우 위험하다.

## 왜 위험할까?

![img_44.png](img_44.png)

- 버퍼 오버플로우
- 통제 불가

![img_45.png](img_45.png)
![img_46.png](img_46.png)

- 디버거보면 10개짜리 잡았는데, 10개 이상 썼다고 알려줌
- 그리고 실제로 출력값도 보면, "okay I have"까지가 10개인데, 그 뒤 문자도 출력됨...

## 왜 버퍼 오버플로우가 발생할까?

![img_47.png](img_47.png)

- 버퍼의 크기를 넘어서 덮어쓰다보니, 스택 프레임에서 베이스 포인터, 돌아갈 함수 주소 등 다 바꿔버림
- 여기서 해킹도 가능 ㅇㅇ; (버퍼 오버플로우 어택) [후기 강조]
    - 버퍼에 이상한 값을 넣어서, 메모리를 조작할 수 있겠죠?
- 결론은 gets 쓰지말자!!!

## fgets()로 안전하게 한 줄 읽기

![img_48.png](img_48.png)

- f가 붙었으니 파일 스트림에서 읽는다는 의미
- 첫번째 매개변수: 버퍼
- 두번째 매개변수: 최대 읽는 글자 수
    - 버퍼를 일부러 작게 두고, 최대 읽는 글자 수를 그 보다 크게 하면 버퍼오버플로우가 발생
- 파일 스트림으로 부터 count - 1개 문자를 읽어, str(버퍼)에 저장한다. str[count]에 '\0'을 넣어줌
- gets처럼 새줄을 만나거나, EOF를 만나면 str에 저장해서 반환한다. 여기에 스트림에서 count-1까지 읽으면 str에 저장해서 반환하는 조건이 추가됨
- gets와 다르게 str에 '\n'을 넣어줌
    - gets는 stdin에서 '\n'을 제거하지만 버퍼에 저장하지 않아서, '\n'은 못 읽음

### 왜 \n을 넣어줄까요?

![img_49.png](img_49.png)

- 새 줄을 만나서 끝났을 때와 아닐 때를 구분하기 위함
  - gets의 경우 어차피 뉴라인까지 읽고, 버퍼에서는 뉴라인이 없으니까, 버퍼를 사용할 때 알아서 뉴라인을 넣어서 써!
- 위는 count가 4인경우 예시
- fgets는 count-1만큼 읽어서 str에 저장하고, 마지막에 '\0'을 넣어줌
- 따라서 3개의 문자를 읽죠?
- 버퍼에 {H, e, l, \0}이 저장된다.
    - 만약 gets처럼 새줄 문자를 버퍼에 넣지 않는다면, 이 버퍼만 보고 새줄 문자를 만나서 버퍼에 저장됬는지, count-1만큼 읽어서 저장됬는지 알 수 없음
- gets의 경우 어차피 뉴라인/EOF를 만날 때 까지 쭉 읽으니까, 뉴라인이면 반드시 문자의 끝이라고 볼 수 있음
- 그래서 한 줄만 딱 읽은 때는 gets가 더 편하긴 함

## fgets의 매개변수

![img_51.png](img_51.png)

- 첫번째 매개변수: 버퍼
- 두번째 매개변수: 최대 읽는 글자 수
    - 널 문자를 포함한 수라서, count - 1개를 실제로 읽음
    - str[count] = '\0'
- 세번째 매개변수: 파일 스트림, 키보드 입력을 읽어오고 싶다면 stdin

## stream 자료형이 이상해요

![img_50.png](img_50.png)

- 스트림을 제어하기 위해 필요한 정보
    - 스트림에서 위치를 표시하는, 파일 위치 표시자
    - 스트림이 사용하는 버퍼의 포인터
    - 읽기/쓰기 중에 발생한 오류를 기록하는 오류 표시자
    - 파일의 끝에 도달했음을 기록하는 EOF 지시자

![img_52.png](img_52.png)

- FILE* stream
- 표준에서 정의하지 않는다. 따라서 플랫폼마다 다르다.
- 입출력 스트림은 오직 `FILE 포인터로만` 접근 및 조작할 수 있다.
    - 캡슐화: 프로그래머 입장에서 이 데이터형이 어떤 것을 담고 있는지 몰라도 됨 다만 FILE*에서 제공하는 함수를 사용할 뿐
- stdin, stdout, stderr도 포함된다.
- 파일을 열 때도 이 자료형을 사용합니다.

## fgets()의 반환값

![img_53.png](img_53.png)

- gets와 동일하다.
- 성공 시, str을 반환한다.
- 실패 시, NULL을 반환한다.

## fgets()로 한 줄 읽기

![img_54.png](img_54.png)

```c
#define LINE_LENGTH (10)

char line[LINE_LENGTH];

while (fgets(line, LINE_LENGTH, stdin) != NULL) {
    printf("%s", line);
}
```

![img_55.png](img_55.png)

- 엔터칠 때 까지 기다림(stdin 버퍼가 엔터칠 때 까지 기다리기 때문)
- 12345789abcd + 엔터를 키보드로 입력

![img_56.png](img_56.png)

- 입력 스트림(stdin)에서 LINE_LENGTH - 1만큼 읽어서 str에 저장
- str 마지막에 '\0'을 넣어줌
- 123456789\0이 저장됨

![img_57.png](img_57.png)

- 성공적으로 읽었으므로 NULL이 아니라서, 반복문 실행

![img_58.png](img_58.png)

- 반복문 블록 안의 printf 실행

![img_59.png](img_59.png)

- fgets 실행
- fgets는 \n까지 읽음
- 기존에 버퍼에 있는 내용에 그냥 덮어쓴다.
    - 그래서 789\0은 남아있는거 확인하시고.
- 쉽게 생각하며 읽은만큼 덮어쓴다.
- 보통 버퍼 넉넉하게 512, 1024로 잡아놓음

![img_60.png](img_60.png)

- 성공적으로 읽었으므로 NULL이 아니라서, 반복문 실행

![img_61.png](img_61.png)

- line을 출력
- abcd\n이 출력된다. (C 스타일 문자열은 널문자로 문자열의 끝을 구분하죠)

![img_62.png](img_62.png)

- 다시 stdin 버퍼에서 읽기 대기

![img_63.png](img_63.png)

- EOF를 입력하고 (윈도우면 엔터도 필요), 버퍼에 EOF가 들어온다.
- fegets()는 NULL을 반환하고, 반복문 종료

## fgets()에 쓸 버퍼는 초기화 필요 없음

![img_64.png](img_64.png)

- 어차피 처음부터 읽어서 덮어쓰니깐요.
    - 그래서 쓰레기값이 들어있던 말던, 덮어쓰죠?

## puts와 printf

![img_65.png](img_65.png)

- fgets()는 줄바꿈 문자를 제거하지 않고, 버퍼에 저장합니다.
- printf대신에 puts를 사용하면, `puts는 문자열을 출력하고, 줄바꿈 문자를 추가하기 때문에` 두번 줄바꿈함.
- gets()를 사용할 때는 puts를 사용해도 괜찮은게, gets는 줄바꿈 문자를 제거하고 버퍼에 저장하기 때문이죠

```c++
char line[10];

while (gets(line) != NULL) {
    puts(line);
}
```

```c++
char line[10];

while (fgets(line, 10, stdin) != NULL) {
    printf("%s", line);
}

```

## 한 줄씩 읽는 방법이 유용한 경우

![img_66.png](img_66.png)

- 모든 프로그램의 공통사항인데, CPU 안에서 모든 것을 돌릴 때 가장 빠르다.
    - 메모리에서 읽어오면, 느려진다. 이 때 여러번 읽는 것 보다 한 번에 읽는게 빠르다.
- CPU를 벗어나서 외부 구성요소로부터 읽어올 때 여러번 읽어올 때 과부하가 크다. 한 번에 많이 읽어오는게 빠르다!
- 그래서 버퍼도 충분히 크게 잡죠, 버퍼 오버플로도 방지하고!

![img_67.png](img_67.png)

- 한 데이터씩 읽어올 때 한 줄씩 읽는 방법이 유용하다.

## 한 데이터씩 읽기, scanf()

- 텍스트로 들어오더라도, 정수, 실수, 한글자 등 데이터형을 지정해서 입력 받자!!

![img_68.png](img_68.png)

- prinf에 대응한다고 생각하죠!

### 3가지 버전이 있다.

![img_69.png](img_69.png)

- scanf(): stdin에서 읽어옴
- fscanf(): 파일 스트림에서 읽어옴
- sscanf(): C스타일 문자열에서 읽어옴

## stdin에서 정수 읽기

![img_70.png](img_70.png)

## scanf

![img_71.png](img_71.png)

- 키보드(stdin)에서 정수를 읽어서, num에 저장

## 왜 저장할 변수의 주소를 전달하나요??

- 포인트1: 함수 외부에서 어떤 변수의 주소를 전달한다.
    - 여기에 저장해줘
- 왜 이런 방식으로 구현했을까?

![img_72.png](img_72.png)

- 주소를 넣고, 주소에 저장된 값을 바꾸자 (pass by reference)
- 그냥 num을 넣는다고 생각하면, 값이 복사되죠? 함수 블록 안에서 지역변수는 사라집니다.ㅋㅋ 원본을 못바꿈 (pass by value)

## 매개변수에 주소 안 넣고, 각 타입에 맞게 반환하면 안 되나유?

- 포인트2: scanf()의 반환값은 특별하다.
- 왜 이런 방식으로 구현했을까? [후기 강조]
- 즉 scanf()에서 정수형을 입력받으면, 정수형으로 반환하고 싶다는 말입니다.

![img_73.png](img_73.png)

- C는 함수 오버로딩도 없기 때문에 scanf를 다양하게 만들어야합니다. ㅠㅠ

![img_74.png](img_74.png)

- 다양하게 만들 수도 없음ㅋㅋ;
- 여러개 입력 받으면 어쩔건데? 반환값이 여러 개일 수 없죠?
- 심지어 숫자하나, 문자하나.. 이렇게 자료형이 각기 다를 수도 있음.

## scanf()의 반환값

![img_75.png](img_75.png)

- 몇 개의 데이터를 읽었는지 반환
- 첫 데이터를 읽기 전에 실패했다면 EOF 반환

## scanf()에서 서식 문자열

![img_76.png](img_76.png)
![img_77.png](img_77.png)

- 서식 지정자 반드시 넣어야함!!
- 단어 단위로 읽는 개념이다.
    - default로 단어를 구분하기 위해 공백문자를 사용한다.
    - 그래서 "3 4"를 입력받으면 3, 4 이렇게 읽게된다. 공백문자 날아감
- 공백문자를 읽기 위해서는 아스키 %c로 읽어야함 ㅇㅇ;

## 대입 생략 문자 *

![img_78.png](img_78.png)

- 과연 쓸 일이 있을까?

## 너비

![img_79.png](img_79.png)

- 버퍼 오버플로우를 막기 위해 너비를 제한할 수 있다.
- 하지만 더 좋은 방법이 있습니다.

![img_80.png](img_80.png)

- 왜 너비를 잘 사용하지 않는지 이유
- 버퍼에 남아있는 애들 처리하기가 까다로움
- 너비를 사용하면 디폴트(단어 단위로 읽음, 공백 문자까지 읽음)가 아니라, 너비값 만큼 단어를 읽는다.
    - 다시 주의할 점은 공백문자는 %d로 읽을 수 없다. 무시하고 넘어간다!
    - 그래서 "789 987654321"을 읽을 때 789를 읽고 "공백987654321" 을 "%3d"로 읽으면 공백은 건너뛰고 세글자 987을 읽어 num2에 저장한다.

## 길이 수정자

![img_81.png](img_81.png)

- 시험 직전에 바르기

## scanf()의 예

![img_82.png](img_82.png)

- 123까지 숫자니까 읽고, scanf에서 하나 읽었다고 반환함 따라서 result = 1
- 입력 스트림에서 위치 표시자는 p를 가리키고 있다.

![img_83.png](img_83.png)

- 숫자가 없음
- result에 0반환
- 입력스트림은 p를 가리키고 있다.

![img_84.png](img_84.png)

- 단어를 세보자. 단어 몇개고?
- 12, 34 총 2개죠?
- 그래서 "%d %d" 로 단어 2개 읽도록 scanf의 서식문자열
- 각각 12, 34읽고 result=2 반환
- 공백을 읽으려면 %c로 읽어야함
- [질문]: 공백을 무시할 때 stdin에서 공백은 사라지는 거로 이해했는데 맞나요?

![img_85.png](img_85.png)

- 단어를 세보자. 단어는 1개네요? 입력에 공백이 없잖아.
- 12를 읽고 p는 문자라 못 읽음
- result에 1단어 읽어서, 1이 저장됨

![img_86.png](img_86.png)

- 단어를 세보자. 단어는 2개네요?
- 12, 34.56 각각 읽어서 대입됨

![img_87.png](img_87.png)

- 단어를 세보자. 단어는 1개네요?
- 정수를 읽어야하는데, .에서 못읽음 따라서 1234까지 읽고 멈춤
- %d, num1에 1234 저장
- .56을 읽고 0.56으로 저장
    - 이게 신기하네요...

![img_88.png](img_88.png)

- 단어를 세보자. 단어는 2개네요? 12, 34.56p
- 정수 단어를 읽는다. 12까지
- 실수 단어를 읽는다. 34.56까지. p는 못읽음
- result에 2 반환
- 입력 스트림의 위치 표시자는 p를 가리키고 있다.

![img_89.png](img_89.png)

- 단어를 세보자. 단어는 3개네요?
- 각각에 맞게 읽음
- 3반환
- str은 애초에 배열이라서, 주소죠 ㅇㅇ;

![img_90.png](img_90.png)

- 12.34까지 읽고
- p따로 읽음
- 사실 문자열로 주면 다 읽는다고 보면 됨.
    - scanf("%s", str)은 키보드 입력 끝까지 읽는다.
- 마지막에 널문자 넣어줌

![img_91.png](img_91.png)

- 12 읽고
- .34p 읽음

## 문자를 읽을 때 scanf()의 문제점과 해결책, clearerr()

![img_92.png](old_note/COMP2200/week5/img_92.png)

- 버퍼 오버플로우 ㅠㅠ
- 그래서 scanf도 문자열을 읽을 때 사용하지 않는 것이 좋습니다.

![img_93.png](old_note/COMP2200/week5/img_93.png)

- 문자열이 아니라 다른 자료형을 읽을 때 도 scanf는 무한 루프에 빠질 위험이 크다...

### scanf 무한 루프

![img_94.png](old_note/COMP2200/week5/img_94.png)
![img_95.png](old_note/COMP2200/week5/img_95.png)

- 입력에 5P를 입력했다?
- 5까지 읽고, stdin 버퍼에 남아있는 P를 읽으면서 무한 루프에 빠짐
    - scanf의 반환값이 0이 됩니다.
    - 그리고 Error!\n을 출력한다.
- 다시 반복문을 도는데, 버퍼에서 그대로 남아있어서 계속 scanf는 0을 반환합니다.
- 이 코드는 숫자 0을 읽어서 반복문을 종료하는데, 문자가 stdin 버퍼에 남아있어서 0을 입력할 수 가 없어요!

## 무한 루프의 해결법: fgets + sscanf

![img_96.png](old_note/COMP2200/week5/img_96.png)

- fgets로 한 줄을 읽어서 버퍼에 저장
    - fgets는 버퍼에 저장할 때, '\n'을 넣어줌 (gets와 차이점)
    - fgets는 버퍼에 저장할 때, 최대 읽는 글자 수 - 1만큼 읽어서 저장하고, 마지막에 '\0'을 넣어줌
    - 이렇게 하면 scanf만 사용할 때와 어떤게 다른거지? 버퍼를 stdin의 버퍼를 소모한다! scanf에서 처럼 못 읽는 문자를 stdin 버퍼에 남기는 일이 없다.

![img_97.png](old_note/COMP2200/week5/img_97.png)

- 키보드에 입력이 들어옴

![img_98.png](old_note/COMP2200/week5/img_98.png)

- fgets는 LINE_LENGTH - 1만큼 읽어서, 버퍼에 저장
- 개행문자를 만나도 읽기 종료
- 마지막에 널문자 넣어줌
- 위 예시는 10a\n까지 읽음
- stdin의 버퍼는 소모된다.(이게 핵심이죠!!!)

![img_99.png](old_note/COMP2200/week5/img_99.png)

- line에 10a\n\0이 저장됨
- fgets는 제대로 읽었으면 NULL이 아닌 값을 반환
- 따라서 if문은 통과한다.

![img_100.png](old_note/COMP2200/week5/img_100.png)

- sscanf는 c스타일 문자열에서 읽어오죠?
- sscanf는 첫번째 매개변수 line을 읽어서, num에 저장
- "%d" 한 단어 => line에서 10까지 읽고, a부터 문자니까 못읽음
- sscanf에서 위치 표시자는 a를 가리키고 있다.

![img_101.png](old_note/COMP2200/week5/img_101.png)

- num에는 10이 저장됩니다.
- sscanf에서 1을 반환합니다. 숫자 하나를 읽는데 성공했습니다.
- if문의 조건문을 통과했습니다.

![img_102.png](old_note/COMP2200/week5/img_102.png)

- 정상적으로 더함
- 이런식으로 반복되고, 종료하려면 EOF입력해서, fgets가 NULL을 반환하게 하면 됩니다!!!

## 버퍼 오버플로 문제 없이 문자열 읽기

![img_103.png](img_103.png)

- fgets로 한 줄을 읽을 때 LENGTH - 1 만큼 읽어서 버퍼 오버플로우를 방지합니다.
    - stdin으로 부터 읽어서, line에 쓴다.
- 그리고 sscanf로 line을 읽습니다.
- 4096보다 긴 문자열이 들어오면?
    - 4095개까지 읽고 잘리고, 다음에 읽을 때 stdin에 남은 문자열을 읽게되겠죠?

## clearerr()은 뭔가요

![img_104.png](img_104.png)

- EOF를 만나면, 스트림의 EOF 표시자가 세팅된다.
    - EOF 표시자가 1이면 EOF를 만났다는 뜻
    - EOF 표시자가 0이면 EOF를 만나지 않았다는 뜻
- 그 이외의 이유로 실패하면, 오류 표시자가 세팅된다.
    - 오류 표시자가 1이면 오류가 발생했다는 뜻
    - 오류 표시자가 0이면 오류가 발생하지 않았다는 뜻
- EOF 표시자가 세팅되면, 다른 곳에서 stdin으로 입력을 받을 때 문제가 생길 수 있다.
    - 다른 곳에서 입력받을 때 EOF 표시된줄 알고 입력을 받지 않을 수 있음
- 그래서 지워줘야합니다!!!!
- 참고로 표시자 세팅 여부를 확인하려면
    - feof() 함수로 EOF 표시자를 확인
    - ferror() 함수로 오류 표시자를 확인

## 한 데이터씩 읽는 방법이 유용한 경우

![img_105.png](img_105.png)

- 텍스트를 다른 자료형으로 곧바로 읽어오는 가장 간단한 방법!!!

## 코드보기: 게임 전적 쓰고 읽기

![img_106.png](img_106.png)

- NUM_CHAMPS로 수를 미리 메크로로 선언해두면, 실수 방지 굿

![img_107.png](img_107.png)
![img_108.png](img_108.png)

- 챔피언 수에 맞게, 승수, 패수를 배열에 저장해야겠죠
- KDA도 ㅇㅇ

![img_109.png](img_109.png)
![img_110.png](img_110.png)

- 버퍼는 충분히 크게
- 버퍼에 모든 전적을 예쁘게 저장할거임

![img_111.png](img_111.png)

- BUFFER_LLENGTH도 함수 인자로 전달해 주서 이 함수가 버퍼 범위를 넘어서 쓰는 경우를 방지
- 함수 내부에서 사용하려고

![img_112.png](img_112.png)

- 버퍼에 저장된 전적을 출력

![img_113.png](img_113.png)

- _s가 달린 함수를 쓰라는 경고를 끄는 거임

![img_114.png](img_114.png)

- 실제로 업계에서도 끄는 경우가 많음

![img_115.png](img_115.png)
![img_116.png](img_116.png)
![img_117.png](img_117.png)

- 제일 마지막 매개변수는 챔피언 수, 즉 kills, wins... 이런 배열의 길이죵
- C에서 배열과 배열의 길이를 같이 전달하는 경우가 필수잖아요 ㅇㅅㅇ;

![img_118.png](img_118.png)
![img_119.png](img_119.png)
![img_120.png](img_120.png)

- remaining_buffer_size: 버퍼에서 얼마나 공간이 남아있느냐?
    - 아직 남아있는 쓸 글자

![img_121.png](img_121.png)

- 초기화는 버퍼 크기 -1
    - 마지막은 널문자 넣어야하니깐

![img_122.png](img_122.png)

- C에서 빈 문자열을 정의하는 방법

![img_123.png](img_123.png)

- line을 이미 크게 여유롭게 잡아놨음
- line에 출력할 때 아무리 길어봤자.
    - 문자열 8자리(챔퍼언 이름)
    - (소수점 2자리 + 정수 n자리) * 3 (KDA)
    - (정수 n자리) * 2 (승수, 패수)
    - 설마 4096까지 가겠습니까?
- 제일 마지막에 줄바꿈은 한 줄씩 작성하니까, 줄바꿈!

![img_124.png](img_124.png)

- 한 줄의 예시

![img_125.png](img_125.png)

- line마다 길이가 변할 수 있으니, strlen으로 변수에 저장
- [질문] sprintf의 return값을 사용해도 되나요? https://en.cppreference.com/w/cpp/io/c/fprintf 레퍼런스: Number of characters written if
  successful (not including the terminating null character)

![img_126.png](img_126.png)

- 남은 버퍼 공간이 충분한지 확인
- 충분하지 않으면, 반복문 그만둠, 이번 챔피언뿐만 아니라 다음 챔피언도 못넣쥬 ㅠㅠ

![img_127.png](img_127.png)

- 공간 충분하면, 버퍼에 한 줄 카피하죵
- 엇 근데 strcat해야 할것 같은데.. 덮어쓰지 않나용

![img_128.png](img_128.png)

- 포인터를 옴겨줍니다.

![img_129.png](img_129.png)

- strcat을 쓸거면, 포인터(char* buffer) 옮길 필요 없음
- 근데 개미 눈꼽만큼 비효율적인게, strncat은 포인터에서 처음부터 쭉 확인하면서 널문자 찾고, 널문자부터 덮어쓰죠?
- 그래서 처음부터 쭉 확인하는 비효율성 발생 ㅠㅠ
- 반면에 지금 구현처럼 strcpy하고, 포인터 옮겨놓으면 처음부터 확인할 필요없으니
- 4주차에서 배운 strlen을 직접 구현할 때 개미 눈꼽만큼 비효율적인 방법 생각나시죠 ㅎㅎ

![img_130.png](img_130.png)

- 버퍼의 남은 공간을 기억하는 변수를 줄여주자.

![img_131.png](img_131.png)

- 버퍼를 읽는다
- const char*가 아닙니다. 우왕

![img_132.png](img_132.png)

- DELIM으로 토큰화 하자

![img_133.png](img_133.png)
![img_134.png](img_134.png)

- 파일에서 읽으면, 한 줄씩 읽는 방법이 있는데, 나중에 배웁니다.

![img_135.png](img_135.png)

- 제목 출력

![img_136.png](img_136.png)
![img_137.png](img_137.png)

- strtok 사용법 기억하죠
- 반복할 때는 NULL을 첫번째 매개변수(토큰화 할 대상)으로 넘겨야죠

![img_138.png](img_138.png)

- 지금은 괜찮은데, 누군가 여기 버퍼에 접근해서 버퍼 속에 굉장히 많은 값으로 이름을 바꿀 수 있긴 있어서 ㅠㅠ
    - 거의 뭐 트롤, 해킹이죠

![img_139.png](img_139.png)

- name이 안전하다고 가정해서 %s
- continue는 이번 챔피언 읽는데 실패했으면, 다음 챔피언 읽는거임 ㅇㅇ;
- break 해버리면, 버퍼에 남아있는 챔피언들 못 읽는거지

![img_140.png](img_140.png)

- sscanf로 tokenizer(한 줄, 챔피언 정보) 읽어서
- 챔피언 정보를 변수에 저장하고, 조작해서 printf로 출력해따

## 복습 퀴즈: scanf

```c++
#include <stdio.h>

#define LINE_LENGTH (128)

int main(void)
{
    char line[LINE_LENGTH];

    scanf("%8s", line); /* 1a2b3c4d5e6f 입력됨 */

    printf("line: %s", line);
}
```

- 1a2b3c4d5e6f를 입력했을 때, line에 저장되는 문자열은 무엇인가요?
- line에 저장되는 문자열은 "1a2b3c4d"입니다.
- scanf에서 읽고 `널문자 넣어줍니다.`
- Matches a sequence of non-whitespace characters (a string).
  If width specifier is used, matches up to width or until the first whitespace character, whichever appears first.
  Always stores a null character in addition to the characters matched (so the argument array must have room for at
  least width+1 characters)

## 한 블록씩 읽기

- 블록이 뭘까? 뭉텅이?
- `이진 파일을 읽을 때 이 방법밖에 없다고 생각하면 됩니다.

![img_141.png](img_141.png)

## fread() 함수, fwrite() 함수

### [fread 함수]
![img_142.png](img_142.png)

- 퀵 소트 함수랑 엄청 비슷하네요.

- 매개변수
    - 첫번째: 버퍼
    - 두번째: 읽을 데이터의 크기(바이트 단위)
    - 세번째: 읽을 데이터의 개수
    - 네번째: 파일 스트림
- 반환값: 읽은 데이터의 개수 반환
- stream에서 size만큼 바이트로 count개 만큼 읽어서 버퍼에 저장한다.

![img_143.png](img_143.png)

- EOF만나면 멈춘다.
- EOF를 먼저 만난다면 count보다 적은 수를 읽을 수 있다.
- 그래서 반환값이 실제로 읽은 개수
    - EOF를 만나거나, count 만큼 읽거나.

### [fwrite 함수]
- 비슷한 함수로 fwrite가 있다.
    - 첫번째 매개변수는 const void*로, 읽기만 가능하다.
    - buffer에서 읽는데, size 만큼 count개를 읽어서 스트림에 저장한다.

## 이진 데이터를 읽어서 어디에 쓰지?

![img_144.png](img_144.png)
![img_145.png](img_145.png)

- 프로그래밍 입문 과목에서 이진 파일에 썼었죠
- 동일하게 파일에 쓰고 읽음.

![img_146.png](img_146.png)

- fstream은 파일을 열고, 닫고, 쓰는 법에서 배웁니다.
- fread 해석
    - 파일 스트림에서 부터 sizeof(nums[0])의 크기(4바이트)로 64개를 읽는다. nums 주소에 저장한다.
- fwrite 해석
    - nums에서 64개를 sizeof(nums[0])의 크기(4바이트)로 파일 스트림에 쓴다.

## 한 블록씩 읽는 방법이 유용한 경우

![img_147.png](img_147.png)

- 이진 데이터 읽으려면 거의 이 방법만 쓴다고 봐야함
- 이진 데이터를 블록씩(덩어리)로 읽는게 성능에 유리하죠

## 주의할 점

![img_148.png](img_148.png)

- 플랫폼마다 자료형의 크기가 다를 수 있음...

## 파일 입출력

![img_149.png](img_149.png)
![img_150.png](img_150.png)

- 규칙
    - 파일을 연다.
    - 하고싶은걸 한다.
    - 파일을 닫는다.

## 파일 열기

![img_151.png](img_151.png)

- fopen: 파일을 열어서 파일 스트림을 반환
    - 이 때 자료형은 FILE*
- fgets: 파일 스트림에서 한 줄을 읽어서 버퍼에 저장
    - 버퍼는 char*로 받아야함
    - 한 줄을 읽기 때문에 newline character 만나면 읽기 종료
    - 최대 1023개 문자까지 읽을 수 있음
    - 당연히 EOF만나도 읽기 종료
    - 읽고나면, 버퍼에 널문자를 넣어줌
    - 반환값: 성공하면 인자로 받은 버퍼(char *)를 반환, 실패하면 NULL 반환

![img_152.png](img_152.png)

- fopen() 함수
    - 첫번째 매개변수: 파일 이름
    - 두번째 매개변수: 파일 열기 모드
        - r: 읽기
        - w: 쓰기
        - a: 추가
        - b: 바이너리
        - t: 텍스트
    - mode가 배열이라서, 여러 모드를 동시에 사용할 수 있음!
    - 반환값: 파일 스트림

### 파일 열기 모드

![img_153.png](img_153.png)

- 파일이 이미 있다면, 없다면 구분
- 헷갈리는 부분: r+ vs w+
    - w+는 파일이 없으면 새로 만들고, 있으면 덮어씀
    - r+은 파일이 없으면 에러

### 이진모드는 텍스트 모드와 무엇이 다른가요?

![img_154.png](img_154.png)

- b붙이면, 이진모드
- 유닉스 계열에는 텍스트 모드와 이진모드가 아무 차이 없음
- 윈도우에서는 \n을 \r\n 뉴 라인 캐릭터 처리하는 것만 달라진다.

![img_155.png](img_155.png)

- 참고만 합시다...!
- 파일 읽기용 모드(r, r+, rb, r+b)로 텍스트 파일을 열어서 확인해보자.
- 윈도우즈에서 텍스트 파일을 쓰면, 개행문자를 \r\n으로 저장한다.
    - 사진에서 확인할 수 있는데, 아스키 코드 0D가 \r에 해당하고, 아스키 코드 0A가 \n에 해당한다.
- 텍스트 모드로 읽으면 \r\n을 \n으로 바꿔서 파일 스트림 버퍼에 저장한다.
- 이진 모드로 읽으면 파일 스트림의\r\n 그대로 읽음

![img_156.png](img_156.png)

- 텍스트 모드에서 버퍼의 \n을 파일의 \r\n으로 바꿔줌
- 이진 모드에서는 버퍼의 \n을 파일의 \n으로 그대로 씀
- 문자열에 \r\n이라면 두 모드 모두 \r\n그대로 씀

## 파일 쓰기

![img_157.png](img_157.png)

- 파일 쓰기의 예시
- 한 블록 읽기의 fwrite()가 등장했다.
    - 첫번째 매개변수: 버퍼(쓸 대상)
    - 두번째 매개변수: 쓸 데이터의 크기
    - 세번째 매개변수: 쓸 데이터의 개수
    - 네번째 매개변수: 파일 스트림
    - 반환값, 몇 개 저장됬는지, (LENGTH 이하)
- 참고로 두번째, 세번째 매개변수는 컴퓨터 입장에서 중요하지 않음, 두 값을 곱해서 총 몇 바이트 만큼 쓰냐? 의 개념이 중요함
- stream은 wb로 열었으니, 이진 파일로 쓰겠다는 의미
    - 기존에 파일이 있으면 `지우고`
    - 없으면 새로 만든다.
- write_file은 커스텀 함수 이름
    - wirte_file의 내용이 위의 코드들임

![img_158.png](img_158.png)

- 이진 파일에 저장된 결과
- 16진수 64는 100이죠, 리틀 엔디안

## 파일에 바로 써지지 않음: 라인 버퍼링

![img_159.png](img_159.png)
![img_160.png](img_160.png)

- 새로 썼는데, 바로 파일에 써지지 않았음...
- 띠용? 호출했는데 바로 안 써지네
- 일반적인 버퍼를 비우는 방법
    - \n이 입력에 들어오거나. (이건 라인 버퍼링 일 때)
    - fflush() 호출

## fwrite에서 '\n'을 어떻게 인식하나요? 못 합니다 ㅋㅋ;

![img_161.png](img_161.png)

- 첫번째 매개변수가 void*이기 때문에 fwrite()는 char로 인식할 수 없음
    - fwrite 입장에서는 비트 패턴이 줄줄이 들어오는 것임!
- fwrite()에서 '\n'을 인식해서 파일 스트림 버퍼에 넣어줘야하는데, 인식 조차 못하는 거죠

## 라인 버퍼를 비우는 유일한 방법: fflush()

![img_162.png](img_162.png)
![img_163.png](img_163.png)

- 그래서 바로 쓰려면 fflush()를 호출하는데,
    - 무엇을 flush하냐?
    - fflush의 인자로 무엇을 넘기냐?
    - stream을 넘겨야합니다. 즉 파일 스트림의 버퍼를 플러쉬!

## 파일 읽기

![img_164.png](img_164.png)

```c++
#include <stdio.h>
#include <string.h>

#define LENGTH (6)

void read_file(const char* filename)
{
    FILE* stream;
    char data[LENGTH];
    
    stream = fopen(filename, "rb");

    while (TRUE) {
        if (fgets(data, LENGTH, stream) == NULL) {
            break;
        }
        printf("%s\n", data);
    }
}
```

- 읽기 전용/이진 모드로 파일 스트림 연다.
    - 사실 텍스트 모드로 열어도 상관없음
- 한 줄(5글자씩) 읽어서 printf로 stdout에 출력한다.
- fget는 LEGNTH - 1개 읽고, 마지막에 널문자 넣어준다.
    - 어디에? 버퍼(data)에

![img_165.png](img_165.png)

- 이 코드의 목적은 5글자씩 읽어서 한줄씩 출력하는 것이다.
- 파일 스트림에서 "Hello"(5글자)를 읽어서 버퍼(변수명 data)에 저장한다. 그리고 버퍼에 있는 내용을 출력한다. 파일 위치 표시자는 "공백"을 가리킨다.
- " POCU"(공백 포함 5글자)를 읽어서 버퍼(변수명 data)에 저장한다. 그리고 버퍼에 있는 내용을 출력한다. 파일 위치 표시자는 "!"을 가리킨다.
- "!\n"를 읽어서 버퍼(변수명 data)에 저장한다. 이 때 뉴 라인 캐릭터를 만나서 읽기가 끝났다. fgets의 반환값은 버퍼(변수명 data의 주소값과 동일) 그리고 버퍼에 있는 내용을 출력한다. 파일 위치
  표시자는 EOF를 가리킨다.
- EOF를 읽고 일기가 종료된다. fgets의 반환값은 NULL이다. 반복문이 종료된다.

## 파일 위치 표시자의 위치

![img_166.png](img_166.png)

- 여기서 의문점이, fgets가 파일 스트림으로 부터 한 줄씩 읽는데, 어떻게 파일 스트림의 마지막 위치를 기억하지?
    - "Hello"를 읽고, 바로 " POCU"를 읽는게 신기하네요
- 이게 `파일 위치 표시자`라는 개념이다.
- 파일을 "r", "r+"모드로 열 경우 파일 위치 표시자는 파일의 처음을 가리킨다.

![img_167.png](img_167.png)

- n번째 바이트까지 읽으면, 파일 위치 표시자는 n+1번째 바이트를 가리킨다.
- "Hello"를 읽으면, 다음 바이트는 공백문자임

![img_168.png](img_168.png)

- 파일 스트림을 읽을 때마다, 표시자 위치가 바뀝니다.

![img_169.png](img_169.png)

- 파일을 r, r+로 열 경우 파일 위치 표시자는 파일의 처음을 가리킨다.

![img_170.png](img_170.png)

- 5글자를 읽어서 파일 위치 표시자는 공백문자를 가리킨다.

![img_171.png](img_171.png)

- 파일 위치 표시자가 가리키는 다음 위치는 !

![img_172.png](img_172.png)

- 마지막으로 파일 위치 표시자는 EOF를 가리키게 된다.
- fgets는 EOF를 만나면 NULL을 반환한다.
- 따라서 반복문을 종료한다.

## 파일에 붙여쓰기

![img_173.png](img_173.png)

```c++
#include <stdio.h>
#include <string.h>

#define LENGTH (1024)

void append_file(const char* filename)
{
    FILE* stream;
    char data[LENGTH];
    
    stream = fopen(filename, "ab");
    
    if (fgets(data, LENGTH, stdin) != NULL) {
        fwrite(data, strlen(data), 1, stream);
    }
}

append_file("test.txt");
```

![img_174.png](img_174.png)

- 우선 이 코드를 작성할 때 상황을 생각해야하는게, 이미 hello.txt 파일에 Hello POCU!라고 텍스트가 저장된 상태다.
- ab 모드로 열면, 파일 끝에 붙여쓰기가 가능하다.
- 파일 위치 표시자는 뉴라인 캐릭터의 뒤 EOF를 가리키고 있는 상태다.
- Good night!를 stdin에(키보드로) 입력한다.
- fgets는 stdin에서 버퍼(변수명 data)에 "Good night!\n"을 입력한다.
- fwrite는 버퍼(변수명 data)에 있는 내용을 파일 스트림에 쓴다. 데이터 크기 strlen(data)는 12이다. count는 1이다. 따라서 총 12바이트를 쓴다. 쓰는데 성공하면 반환값은 1이다.
- 여기서 주목할 점은 fwrite에서 size, count를 넣을 때 유연하게 프로그래머의 의도에 따라 넣을 수 있다.
    - size: strlen(data), count: 1 => 이건 문자열 하나를 쓰겠다는 의도로, 문자열 하나를 쓰는데 성공햇으면, fwrite의 반환값은 1이다.
    - size: 1, count: strlen(data) => 이건 문자를 문자열 길이(수)만큼 쓰겠다는 의도로, 문자열 길이만큼 쓰는데 성공햇으면, fwrite의 반환값은 strlen(data)이다.

- [fwrite의 반환값](https://en.cppreference.com/w/c/io/fwrite)
- The number of `objects` written successfully, which may be less than count if an error occurs. If size or count is zero,
  fwrite returns zero and performs no other action.

## 파일 닫기

![img_175.png](img_175.png)

- 파일을 열였으면 반드시 닫아야한다.

## fclose

![img_176.png](img_176.png)

- 성공하면 0
- 실패하면 EOF
    - 음수 반환
- 버퍼링 중인 스트림
    - 출력 버퍼링: 남은 데이터는 파일로 다 보내서 쓴다.
    - 입력 스트림: 무시하고 닫음(즉 입력 끝)

## 통제 못하는 환경을 C에서 어떻게 처리할 수 있을까?

![img_177.png](img_177.png)

- 파일을 열고자 하는데, 파일이 없음
    - 누가 중간에 지웠을 수도...
    - 근데 C에는 예외처리가 없는데?

### [fopen이 실패하면? 오류는 어떻게 처리?] 

![img_178.png](img_178.png)

- fopen은 실패하면 NULL을 반환한다. 
  - 생각하는 방법: fopen의 반환값이 FILE* 이잖아요..? 즉 포인터죠? 포인터에서 아무 것도 없음을 나타내는 방법은 NULL

### [fopen, fclose, fprintf의 오류 시 처리 방식이 각각 다름]

![img_179.png](img_179.png)
![img_180.png](img_180.png)

- fopen에서는 실패하는 경우 NULL
- flose에서는 실패하는 경우 EOF
- fprintf에서 stderr에 출력함

## stderr

![img_181.png](img_181.png)

- stderr는 표준 에러 출력 스트림
- stdout과 비슷함
- 관습(약속)상 오류관련 메시지는 stderr에 출력하자.
- stderr는 버퍼링이 없음
    - 바로 출력(오류는 바로 바로 보여줘야 하니까)
- 콘솔창에서 실행하면, stderr, stdout 섞여 나온다.

![img_182.png](img_182.png)

- 파일 열기 실패 예시

## 실패한 이유를 알 고 싶음: errno

![img_183.png](img_183.png)

- 실패하면 오류 코드를 어딘가에 저장해둠(전역변수 라던가..)
- errno라는 메크로를 출력해보면, 이유를 알 수 있음

![img_184.png](img_184.png)

- 2번 오류 코드?

![img_185.png](img_185.png)

- 플랫폼마다 다르다.

## 오류 코드를 말로 설명해주는 함수: char* strerror(int errnum)

![img_186.png](img_186.png)
![img_187.png](img_187.png)

## void perror(const char* s)

![img_188.png](img_188.png)
![img_189.png](img_189.png)

- perror에서 자기가 알아서 콜론찍고, 에러코드 해석해서, 문자열로 예쁘게 stderr에 출력한다.
- errno 해석, strerror(errno)를 호출을 추가해줌

## C에서의 오류 처리는 보통 이런식 [후기 강조]

![img_190.png](img_190.png)

- 함수가 곧바로 오류코드 반환
- 이 오류코드를 전역변수로 들고있다가. errno, strerror, perror에서 사용함.

## 코드보기: 파일 복사하기

![img_191.png](img_191.png)

- 파일을 복사하는 함수
- const char*니까 `파일 이름`이죠?, src를 dst로 복사한다.

![img_192.png](img_192.png)

- 일단 파일 포인터 2개 선언하죠?
- c는 원본에서 읽은 문자 하나를 저장하는 곳

![img_193.png](img_193.png)

- 실패할 수 있음
- 반환값 FILE*은 NULL이 된다.

![img_194.png](img_194.png)

- src는 열기 성공
- dst가 실패하면?
- 에러 메시지 출력하고
- src를 닫아줘야겠죠?
    - goto문으로 해결하자!

![img_195.png](img_195.png)

- 원본 파일을 닫는다.
- 닫는데 실패하면 EOF 반환하니, 에러 메세지 출력한다. 성공하면 0 알지?

![img_196.png](img_196.png)

- 여기서 중요한 점은, 이 close_source: 레이블이 함수의 가장 아래에 위치한다는 점이다.
- 즉 어떤 경로를 통해 오더라도, 이 명령문에 도달해서 src파일을 닫아주게 된다.

![img_197.png](img_197.png)

- 원위치로 돌아가서
- fgetc: src_file에서 한 글자씩 읽고
    - 한 글자씩 읽다가 EOF를 만나면 종료
- fputc: dst_file에 한글자씩 쓴다.

![img_198.png](img_198.png)

- 복사가 끝났으니 복사본 파일을 닫음
- fclose는 실패하면 EOF 반환하니, 에러 메세지 출력한다. 성공하면 0 알지?

![img_199.png](img_199.png)

- 파일 이름을 하드코드 하는게 좀 아쉽긴함 ㅇㅇ;

## 파일 탐색

![img_200.png](img_200.png)

- 탐색의 개념은 스트림에서 쓸 위치, 읽을 위치를 이동하는 것
- 탐색이 가능한 스트림이 있고, 아닌 스트림도 있다.
- stdin의 경우 상식적으로 탐색이 불가능하다.
    - 키보드 입력했는데... 시간을 거스를 수도 없고

## 파일 위치 표시자

![img_201.png](img_201.png)

- file position indicator
- 스트림 안에서 현재 위치를 나타냄
- fopen에서 r, r+로 열면, 파일 위치 표시자는 파일의 처음을 가리킨다.
- fopen에서 a, a+로 열면, 파일 위치 표시자는 파일의 끝을 가리킨다.

## 파일에서 3개의 표시자 정리

![img_202.png](img_202.png)

- clearerror()로 EOF, 오류 표시자를 지울 수 있다.

## void rewind(FILE* stream): 처음 위치로 되돌리기

![img_203.png](img_203.png)

- 파일의 처음 위치로 되돌린다.

### rewind로 파일 두 번 읽기

![img_204.png](img_204.png)
![img_205.png](img_205.png)

- 참고로 scores.bin에서 리틀엔디안으로 저장된거 확인할 수 있다.
  - 00 00 00 14 => 20
  - 00 00 00 4A => 74

## int fseek(FILE* stream, long offset, int origin): 임의의 위치로 이동

![img_206.png](img_206.png)

- 파일 위치 표시자를 origin으로부터, offset만큼 이동한다.
- origin의 세종류
  - SEEK_SET: 파일의 처음
  - SEEK_CUR: 현재 위치
  - SEEK_END: 파일의 끝
- 반환값:
    - 성공하면: 0
    - 실패하면: 0이 아닌 수
- 참고로 파일의 끝은 표준에서 반드시 강제하고 있지는 않음. [후기 강조]
    - 이유는 파일에 1바이트를 저장할 때, 디스크에 저장할 수 있는 최소 저장단위인 1kb로 저장한다.
    - 파일을 저장하는 논리적 단위랑 물리적 단위가 다를 수 있음
    - 이 경우 운영체제게 파일 제일 뒤로가라는 SEEK_END를 했을 때 1바이트가 아니라 1kb를 이동할 수 있다.
    - 뭐 이런 이유 때문에 표준에서 강제하지 않음. 그래서 SEEK_END가 없는 플랫폼도 있긴함 ㅇㅇ;

## fseek로 파일의 다음으로 이동하기

![img_207.png](img_207.png)
![img_208.png](img_208.png)

- 일단 파일을 연다.
- 파일 위치 표시자는 시작위치 14를 가리킨다. ab모드 아니고 rb모드라서

![img_209.png](img_209.png)

- fseek으로 int하나 만큼 뒤로 옮겼음

![img_210.png](img_210.png)

- 읽으면, 파일 위치 표시자는 끝을 가리킴

![img_211.png](img_211.png)

- 출력하면 첫번째 원소 제외하고 4개만 나오쥬

## offset이 음수라면 시작 위치 쪽으로 돌아감

![img_212.png](img_212.png)

- 처음 위치에서 3 * 4 바이트 만큼 이동함
  - 따라서 파일 위치 표시자는 49를 가리킴
- 현재 위치(49)에서 -1 * 4 바이트 만큼 이동함
  - 따라서 파일 위치 표시자는 99를 가리킴
- fread로 읽으면, 파일 위치 표시자가 가리키는 곳 부터 5 * 4 바이트 읽음(LENGTH == 5) 하지만 3 * 4바이트 읽고 `EOF를 만나서 fread는 종료됨`
  - 반환값은 3 따라서 num_read == 3

## fseek이 실패하는 경우(파일 위치 표시자 이동 실패)

![img_213.png](img_213.png)

- rb로 열자마자, SEEK_CUR은 현재 위치니까 파일 스트림 버퍼에서 가장 처음 위치
- 음수 offset을 사용하면 가장 처음보다 먼저 위치는 없기 때문에 이동에 실패함
- fseek는 실패하면 0이 아닌 값을 반환함
- fseek은 성공하면 0반환
  - 따라서 result != 0으로 성공/실패 여부를 체크함

## 스트림의 끝(SEEK_END)에서 양수 바이트 만큼 이동 가능

![img_214.png](img_214.png)

- 하지만 이상한 곳을 접근함
- 결론: 
  - SEEK_SET에서 음수 바이트 이동은 불가능
    - 반환값: 0이 아닌 값
  - SEEK_END에서 양수 바이트 이동은 가능 하지만 이상한 곳을 접근
    - 반환값: 0 

## long ftell(FILE* stream): 파일 스트림의 위치 표시자를 알려주는 함수

![img_215.png](img_215.png)

- long ftell(FILE* stream)
- 파일 스트림의 위치 표시자를 알려주는 함수
- 실패하면 -1 반환하는데, 잘 발생하지 않음

![img_216.png](img_216.png)

- 반환값은 바이너리 모드로 열었을 때와 텍스트 모드로 열었을 때가 다르다.
- 바이너리 모드로 열었을 때는, 파일 스트림의 시작지점에서 정확하게 몇 바이트 떨어져있는지 알려준다.
- 텍스트 모드로 열었을 때는 fseek의 offset 매개변수에 사용할 수 있는 유효한 값을 줍니다.
- 편하게 생각하면 fseek에 매개변수에 사용할 수 있다고 생각합시다.(설명이 애매함)

## 코드보기: 도돌이표

![img_217.png](img_217.png)

- :로 감싸진 부분을 반복한다.
- :는 절대 출력하지 않는다.

![img_218.png](img_218.png)

- 도돌이표가 시작하는 위치를 기억하는 변수 pos
- 처음에는 기억할 위치가 없기 때문에 -1로 초기화

![img_219.png](img_219.png)

- 도돌이표라고 무한정 반복이 아니라, 딱 2번 반복하기 때문에
- 이번이 두번째 방문인지 저장하는 변수

![img_220.png](img_220.png)

- 파일 열고 한 글자씩 읽음
- 읽은 문자가 도돌이표가 아니면, 출력하고 다음 문자로 건너

![img_221.png](img_221.png)

- goto 레이블은 while 블록 끝나기 바로 전에 있음

![img_222.png](img_222.png)

- 알고리즘
  - 도돌이표를 만난 경우
    - !repeating
      - 처음 만난 경우(pos == -1): pos에 파일 위치 표시자를 저장 (여는 도돌이표의 다음 위치 저장)
      - 닫는 도돌이표를 만난 경우(pos != -1): repeating을 true로 설정, fseek로 pos(여는 도돌이표)로 이동 
    - repeating
      - 닫는 도돌이표를 만난 경우: pos를 -1로 초기화, repeating을 false로 초기화

- !repeating이면, 이 도돌이표를 처음 방문한다는 것
- 여기서 pos를 확인하는데
    - 만약 pos가 -1(즉 초기화 상태면) 여는 도돌이표를 처음 만난 것

![img_223.png](img_223.png)

- 파일 스트림에서 파일 위치 표시자는 도돌이표 다음을 가리키는 중 (이미 도돌이표는 읽었기 때문)
- fgetc로 읽으면, 파일 위치 표시자는 읽은 뒤 문자를 가리킴 

![img_224.png](img_224.png)

- ftell이 위치를 찾아오는데 실패하면, 그냥 함수 실행을 관둔다.

![img_225.png](img_225.png)

- pos가 양수라면, 이미 여는 도돌이표를 만나서 pos에 파일 위치 표시자를 저장한 것임
- 즉 닫는 도돌이표를 만난거임

![img_226.png](img_226.png)

- 닫는 도돌이표니까, 기억하고 있는 pos로 fseek
- reapting을 true로 두번째 방문임을 표시

![img_227.png](img_227.png)

- 다음 문자로 이동

![img_228.png](img_228.png)

- reapting이 true이고, 다시 :를 만난 경우 닫는 도돌이표를 두번째로 만난거임
  - 여는 도돌이표는 두번 만날 수 없음
- 즉 도돌이표로 반복이 끝났다는 거죠?
- pos를 -1로 초기화하고, repeating을 false로 초기화

## 입출력 리디렉션

![img_229.png](img_229.png)
![img_230.png](img_230.png)
![img_231.png](img_231.png)

- 입력의 들어오는 방향, 출력의 나가는 방향을 다른 곳으로
- 키보드로 부터 입력이 들어오는게 아니라 파일로 부터 입력이 들어오게 해줘!
- stderr, stdout으로 화면에 출력하는게 아니라 파일에 출력해줘!
- 코드 변경 없이 원래 stdin, stdout, stderr을 파일로 바꾸는 것 뿐임!!

![img_232.png](img_232.png)

- shell의 기능
- 코드 변경이 없다는 점에서 쉘의 기능임을 알 수 있음

### 리디렉션 사용방법

![img_233.png](img_233.png)

- a.exe의 입력을 stdin 대신 input.txt에서 읽어라!
- a.exe의 출력을 stout 대신 output.txt에 출력하라!
- a.exe의 오류 메시지를 stderr 대신 error.txt에 출력하라!
- 세개 중 골라서 사용할 수 있음
    - 세개 모두를 써도되고, 하나만 써도 되고, 두개만 써도 되고

![img_234.png](img_234.png)

- 파일에서 읽으면, 키보드 입력처럼! 와 편하다!!!
- 출력, 오류 메시지를 별도의 파일에 구분 가능

### 파일의 끝이 있다. EOF 자동추가!

![img_235.png](img_235.png)

- 키보드(stdin)에서 입력할 때는 EOF + \n을 입력해서 다음 코드에서 읽을 때 버퍼에 남은 \n을 읽을 수 있음
- 파일은 끝이 정해져있어서, EOF가 자동으로 입력되죠~ 엔터를 칠 필요가 없다!

## 리디렉션 예시: 빈 input.txt를 읽을 때

![img_236.png](img_236.png)

- stdin대신 input.txt으로 읽고, stdout은 output.txt, stderr은 error.txt로 출력
- input.txt가 비어있으면, EOF만 있음
- fgets로 한 줄을 읽었는데, EOF만 있으면, fgets의 반환값은 NULL
  - fgets가 성공하면 char* 버퍼(여기서는 첫번째 매개변수 filename)를 반환
- 그래서 조건문 안의 블록에서 fprintf로 stderr에 출력하게 됨
- 쉘에서 stderr을 리디렉션해서 error.txt에 출력하게 됨

## 리디렉션 예시: input.txt의 숫자를 출력하기

![img_237.png](img_237.png)

- scanf의 반환값은 몇 개 읽었는지 반환, 서식문자열이 "%d"라서 하나씩 읽습니다.
    - Number of receiving arguments successfully assigned (which may be zero in case a matching failure occurred before
      the first receiving argument was assigned), or EOF if input failure occurs before the first receiving argument was
      assigned.
- stdin 대신 input.txt에서 숫자를 하나씩 읽음
- 성공하면 1개 읽어서 1, 실패하면 EOF이겠죠.(첫 데이터를 읽기 전 실패했으니)
- stdout대신 output.txt에 숫자 하나씩 출력
- 반복문으로 input.txt의 EOF를 만날 때까지 읽어서 출력
    - EOF를 반환하면, 반복문 종료되고 printf 출력X

## 콘솔창에는 아무것도 없다!

![img_238.png](img_238.png)

- 코드도 fscanf()로 입력받는 코드도 없는데, 입력이 되었네요?
- scanf로 stdin에서 받아야하는데, 리디렉션으로 input.txt에서 받았네요?

## 주의: fopen()하고 다름...

![img_239.png](img_239.png)
![img_240.png](img_240.png)

- 리디렉션으로 디버깅하자!!!

## 커맨드 라인 인자

![img_241.png](img_241.png)

- main 함수의 매개변수
- argc: 인자의 개수
- argv: 인자의 배열
- argc는 왜 필요할까? c 에서는 배열만으로 배열의 크기를 알 수 없죠.

### argc

![img_242.png](img_242.png)

- 들어온 인자의 수
- 실행한 파일 이름까지 포함(C의 특성)

### argv

![img_243.png](img_243.png)

- argv의 크기는 argc + 1
- argv[0]은 실행한 파일 이름
- argv[1]부터는 인자
- argv[argc]은 NULL 포인터
- 반복문 돌릴 때 1부터 argc - 1까지 돌리면 됨
  - [1, argc - 1)

![img_244.png](img_244.png)

- 포인터의 배열
- 각 포인터는 C 스타일 문자열
- 커맨드 라인에 들어온 값을 프로그램 실행할 때 만든 프로세스의 메모리 어딘가에 저장
- 이때 커맨드 라인에 들어온 값은 띄어쓰기로 구분!
- 이 주소를 argv배열에 넘겨준다.

![img_245.png](img_245.png)

- 프로그램 실행할 때 메모리 어디에 저장되있는지는 모르지만, 운영체제가 알아서 이 주소를 argv의 원소로 넣어줌

![img_246.png](img_246.png)

- 똑같이 c 스타일 문자열 처럼 사용가능
- 띄어쓰기로 구분했으니 argv[1]은 "a.txt"이다.
    - 마지막에 널문자 들어와서, C 스타일 문자열임

## 복습 퀴즈: 명령줄 인자

```a.exe hello world < input.txt output.txt```

- argc는 몇개?
    - 4개
- argv[0]은 무엇인가요?: a.exe
- argv[1]은 무엇인가요?: hello
- argv[2]은 무엇인가요?: world
- argv[3]은 무엇인가요?: output.txt
- argv[4]은 무엇인가요?: NULL
    - argv[argc]은 NULL이다.

## 커맨드 라인 인자 메모리 뷰

### 커맨들 라인 인자 통채로 복사

![img_247.png](img_247.png)

- 커맨드 라인에 있는 `모든 것`을 그대로 메모리에 복사함
- 통채로 한 줄로 복사한다는 의미죠?

![img_248.png](img_248.png)

- 그리고 각 인자가 시작하는 곳의 주소들을 넘겨준 것인가용?

![img_249.png](img_249.png)

- 이러면 공백 문자가 메모리에 남아있어야함.
    - 왜? 싸그리 한 번에 복사했으니깐 공백으로 구분 해야함

![img_250.png](img_250.png)

- 만약 공백이 많이 들어오면, 싸그리 복사할 때 공백 문자가 많이 들어가게 됨

### 커맨드 라인 인자 하나씩 복사

![img_251.png](img_251.png)
![img_252.png](img_252.png)

- 커맨드 라인 인자를 공백을 만나기 전까지 읽고, 메모리에 복사

![img_253.png](img_253.png)

- 공백은 무시하고, 다음 커맨드 라인 인자도 메모리에 복사

![img_254.png](img_254.png)

- 이렇게 하면 읽을 때 부터 공백을 무시하면서 읽게 됨

## 과연 실제로 어떻게 저장될까용?

![img_255.png](img_255.png)

- 메모리를 확인해보니 공백 없이 촘촘히 저장됨 

![img_256.png](img_256.png)
![img_257.png](img_257.png)

- 앞으로 궁금하면 메모리를 보자!!!

## 입출력 리디렉션과 커맨드 라인 인자는 다름

![img_258.png](img_258.png)

- 실제로 출력해보면, 파일 이름 a.exe 밖에 없으니까 argc는 1이다.
  - argv[0]은 a.exe이다.
  - argv[1]은 NULL이다.
- 리디렉션은 파일로부터 입출력을 받는 것
- 명령줄 인자는 말 그대로 메인 함수의 인자로 넘기는 애들이구;

## 코드보기: 제대로 된 파일복사

![img_259.png](img_259.png)

- main함수에서 커맨드 라인 인자를 받음
- 커맨드 라인 인자로 src, dest를 받는거네용
- 정상적인 경우 argc == 3
  - 파일 이름
  - src
  - dst
- --help를 입력한 경우는 사용법을 stdout에
  - 이 경우 argc == 2
  - 파일 이름
  - --help
- 커맨드 라인에서 사용자가 실수한 경우를 stderr에 출력

![img_260.png](img_260.png)

- 프로그램 비정상 종료면, 0이아닌 수 반환

## 정리

- 입력은 출력보다 어렵다
    - 4가지 전략
    - 한 글자씩 읽는법
    - 한 줄씩 읽는 방법: scanf와 함께 쓰면 유용하다.
    - 데이터형 하나씩 읽는 방법: scanf
        - 무한 루프, 버퍼 오버플로우를 막기위해 fgets와 함께 사용
    - 한 블록씩 읽는 방법
    - 문서를 열심히 읽자.
- 파일 입출력
    - 파일 리소스 반납 잘 하자

- 입출력 리디렉션
- 커맨드 라인 인자

## 주요 질문 정리

- 깊은 복사 vs 얉은 복사
  - C/C++ 업계에서 흔히 따르는 원칙은 외부에서 전달된 포인터를 내부에서 저장하지 않는다.
  - 저장할 때는 깊은 복사

- scanf에서 stdin의 공백을 무시하고 읽는다.
  - stdin에서 읽을 위치를 가리키는 포인터가 공백을 건너뛴다.
  - stdin은 스트림이라 한번 읽을때 마다 다음에 읽을 위치를 가리키는 포인터가 이동함