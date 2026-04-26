# Week8

## 컴퓨터의 다양한 부품

![img.png](old_note/COMP2200/week9/img.png)

- CPU, 메모리, 하드 디스크
- 단점에 주목하자, 부품들 사이에 연락을 하기 위해서 bus라는 통로를 거치는데, 이 때 비효율이 발생
- 만약 모두 한 부품이고 연결이 되어있다면, 효율적으로 연산이 가능할 것이다... 라는 상상

## 프로그램에서 주로 사용하는 부품

![img_1.png](old_note/COMP2200/week9/img_1.png)

- CPU: 연산
- 메모리: 실행 중 연산의 중간 결과 등을 저장

## 메모리의 종류

![img_2.png](old_note/COMP2200/week9/img_2.png)

- 대표적으로 2개로 나눔
    - STACK
    - HEAP
- 프로그래머가 제어 가능하고, 신경을 써야하는 메모리는 위 2개로 한정해도 됨

### HEAP

![img_3.png](old_note/COMP2200/week9/img_3.png)

- 가장 범용적인 기본 형태
- 메모리 더미에 왕창 쌓아두고, 필요할 때 가져오는 개념

### STACK

![img_4.png](old_note/COMP2200/week9/img_4.png)

- 프로그램마다 `특별한 용도`에 사용하라고 별도로 할당된 메모리
    - 엄밀히 말하면 프로그램의 쓰레드 마다 별도로 할당
- 스택 메모리에서는 스택 자료구조 처럼 순차적으로 메모리를 사용했다가, 해제

### 레지스터: CPU 내부의 메모리

![img_5.png](old_note/COMP2200/week9/img_5.png)

- CPU 내부의 고속 저장 공간
- 메모리 처럼 저장 기능을 수행하나 고속임
- 비슷하게 캐시 메모리라는 것도 있음

## 스택 메모리에 대한 이해

![img_6.png](img_6.png)

- 함수 호출할 때 스택 메모리에 어떻게 쌓이는지를 이해하면 동작 원리를 이해할 수 있음

### [함수 호출 규약]

![img_7.png](img_7.png)

- 컴파일러에 따라 다를 수 있음
- 함수 호출할 때 매개변수를 뒤에서 부터 넣는 것이 함수 호출 규약에 따른 것

## 레지스터에 대한 이해

- 메모리처럼 휘발성 저장 공간

![img_8.png](img_8.png)

- 레지스터의 존재 이유를 위해, 메모리가 비효율적이라는 것을 알아야함

### [메모리의 비효율성]

![img_9.png](img_9.png)

- CPU가 메모리에 접근할 때, 버스를 통해 접근

![img_10.png](img_10.png)

- 버스를 자주 왔다갔다 할 수록 비효율적임

![img_11.png](img_11.png)

- DRAM은 휘발성이라, 계속 업데이트가 필요함. 따라서 비효율적
- SRAM은 휘발성이 아니라, 계속 유지되는데, 비싸서 메모리에 많이 사용하지 않음
- 그래서 SRAM을 메모리에 달면 빠름

### [레지스터의 탄생]

![img_12.png](img_12.png)

- SRAM을 사용해서 CPU에 내장함

### [레지스터의 특징]

![img_13.png](img_13.png)

- CPU가 사용하는 저장 공간 중 가장 빠름
- CPU가 연산할 때 보통 레지스터에 결과를 저장함
- 원칙상 레지스터는 메모리가 아니기 때문에 `주소`의 개념이 없음

![img_14.png](img_14.png)

- ebp, esp, eax, ebx 등이 레지스터
- 어셈블리어에서 확인 가능

### [참고] x86 아키텍쳐에서 사용하는 레지스터

![img_15.png](img_15.png)

### [레지스터 사용 예시]

![img_16.png](img_16.png)

1. 변수의 값을 메모리 어딘가에 저장

![img_17.png](img_17.png)

2. 변수의 값을 읽어와 레지스터에 저장

![img_18.png](img_18.png)

3. 레지스터에 저장된 값(eax에 저장된 값)을 이용해 계산한 뒤 다시 eax에 저장

![img_19.png](img_19.png)

4. 그 결과를 다시 메모리에 저장

![img_20.png](img_20.png)

5. printf할 때 eax의 값을 사용하고 그 결과를 다시 eax에 저장

## register 키워드

![img_21.png](img_21.png)

- 위의 예시에서 레지스터의 값을 메모리에 저장 안 하고, 바로 사용할 수 없을까?

![img_22.png](img_22.png)

- 어셈블리어로 코드를 작성하면 가능함

![img_23.png](img_23.png)

- C언어에서는 register 키워드를 사용하면 레지스터에 저장할 수 있음
- 하지만 최신 컴파일러는 register 키워드를 무시할 수도 있음
- 사실 요즘은 안 쓰는 사라진 흑마법 정도로 생각하자

![img_24.png](img_24.png)

- 컴파일러에 `요청`하는 것이기 때문에, 무조건 레지스터에 저장되는 것은 아님
- 변수 i의 경우, 1000번이나 증가 후 대입하니까, 메모리에 저장하면 느릴 것이라 예상

### [저장 유형 지정자(storage-class specifier)]

![img_25.png](img_25.png)

- register 키워드는 저장 유형 지정자 중 하나
- register 키워드를 붙이면 제약이 생김, 변수가 메모리에 올라가지 않고 레지스터에만 저장될 수 있기 때문

### [register 키워드를 사용할 때 제약]

- 컴파일러에서 제약을 검
- 위에서 설명한 대로, 레지스터와 메모리가 다르다는 개념을 반영

![img_26.png](img_26.png)

1. 변수의 주소를 구할 수 없음
    - address of register variable requested
    - 컴파일 오류 메시지에서도 `요청`이라는 표현을 사용함

![img_27.png](img_27.png)

2. 레지스터 변수로 만든 배열 변수를 포인터에 대입 불가
    - 마찬가지로 주소 개념이 없음

![img_28.png](img_28.png)

3. 블록 범위에서만 사용 가능
    - 전역 변수에 사용 불가
    - 레지스터는 몇 개 없는데, 이 레지스터를 프로그램 하나가 점유하면 너무 치명적이기 때문이다.
    - 오류 메시지에서도 file-scope variable에 사용할 수 없다!

### [register 키워드 왜 배움?]

![img_29.png](img_29.png)

- 최신 컴파일러는 무의미함

![img_30.png](img_30.png)

- 혹시 예전 플랫폼에서 사용할 수도 있어서...

![img_31.png](img_31.png)

- 요즘 컴파일러에서는 release 모드에서 알아서 최적화함

## 힙 메모리에 대한 이해

### [스택 메모리의 단점]

![img_32.png](img_32.png)

1. 수명
- 함수가 반환되면 그 안의 지역변수는 날아감
   - 지역 변수의 수명은 함수가 끝날 때 까지
- 데이터를 오래 보존하려면, 지역 변수가 아니게 만들어야함
  - static 키워드로 전역 변수화
  - 하지만 전역 변수는 프로그램 실행 내내 지속됨
- 그 중간점은 없나?
  - 프로그래머가 알아서 메모리의 수명을 결정하고 싶어!!

![img_33.png](img_33.png)

2. 크기

- 특정 용도로 할당한 메모리라 범용적인 힙에 비해 크기가 작음
- 스택 메모리의 크기는 컴파일 도중 결정
- 세상의 모든 컴퓨터에서 내가 만든 프로그램을 돌릴 수 있을지 상상해보자, 스택 메모리를 너무 크게 잡으면 못 돌리는 컴퓨터도 있을 것이다. 따라서 스택 메모리는 작게 잡을 수록 좋음
  - 실행 중 스택 메모리의 크기를 바꿀 수 없기 때문에, 보수적으로 작게 잡는다고 생각
- 스택 메모리는 작기 때문에 큰 문자열 처리, 용량이 큰 동영상 처리 등등 작업을 할 수 없음

### [힙 메모리의 장점]

![img_34.png](img_34.png)

- 범용적인 메모리라 자유로움
- 프로그래머가 직접 제어 가능

![img_35.png](img_35.png)

- 프로그래머가 수명을 제어
- 프로그래머가 크기를 제어

### [힙 메모리의 단점]

1. 메모리 누수 

![img_36.png](img_36.png)

- 빌려온 메모리는 점유가 됨

![img_37.png](img_37.png)

- 메모리를 해제하지 않으면 메모리 누수 발생

![img_38.png](img_38.png)

- C#, Java의 new 키워드가 힙 메모리를 할당하는 것
- 가비지 컬렉터는 효율성이 떨어질 수 있음
  - 범용적으로 메모리 할당과 해제를 해주는 기능
- C의 경우 프로그래머가 직접 메모리를 할당하고 해제하면서 특정한 목적에 맞게 메모리 관리 가능, 따라서 효율적
- (세상 모든 것에는 장단점이 있음, 범용적이면 비효율적일 수 있고, 특정 목적에 맞게 만들면 효율적일 수 있음) [후기 강조]


2. 할당/헤제 속도

![img_39.png](img_39.png)

- 스택의 경우 오르락 내리락 순차적으로 할당/해제 하기 때문에 빠름
  - 오프셋 개념이라 O(1) 시간 복잡도
- 스택은 순차적이기 때문에 구멍이 없음
- 힙은 순차적이지 않기 때문에, 구멍(빈 공간)을 찾아서 할당해야함
  - 즉 뭔가 검색 작업이 필요함
  - 메모리 파편화 (4바이트가 필요하면 2바이트, 1바이트 구멍은 사용할 수 없음, 만약 이 프로그램이 1바이트, 2바이트를 필요로하지 않으면 사용하지 않지만 사용할 수 없는 메모리 구멍이 생김)
  
- (오프셋 vs 사용/비사용)

## 정적 메모리 vs 동적 메모리

![img_40.png](img_40.png)

- 정적 메모리: 컴파일 도중 결정
  - 할당/해제가 자동으로 관리 되는 메모리
  - 오프셋 개념이 적용됨
- 힙 메모리: 실행 중에 크기 결정

## 언매니지드 언어의 동적 메모리 사용

![img_41.png](img_41.png)

- 프로그램이 동적 메모리(힙)을 사용할 때 총 3단계를 거침
- 언매니지드 언어에서는 1,2,3단계를 프로그래머가 직접 해야함
- 매니지드 언어에서는 1,2단계만 하면 됨

### [1단계: 메모리 할당]

![img_42.png](img_42.png)

- 힙 관리자는 검색해서 메모리를 반환

![img_43.png](img_43.png)

- 검색 과정임, 메모리 파편화
- 흰색 2칸은 사용중이지 않지만, 부족해서 사용할 수 없음

![img_44.png](img_44.png)

- 흰색 말고 색이 칠해진 메모리는 사용 중

![img_45.png](img_45.png)

- `연속된` 빈 공간을 찾으면 반환

![img_46.png](img_46.png)

- 시작 주소를 반환
- 포인터 변수에 저장할 수 있음

- 참고로 힙 관리자는 컴파일러에서 구현한 라이브러리인 C RUNTIME LIBRARY에 있음

### [2단계: 메모리 사용]

![img_47.png](img_47.png)

- 포인터 변수를 사용하듯이 사용하면 됨

### [3단계: 메모리 해제]

![img_49.png](img_49.png)

- 할당 받은 메모리의 첫 주소 반환

![img_48.png](img_48.png)

- 힙 관리자는 반환된 메모리를 다시 관리
  - 사용하지 않는 상태로 변경(흰색)

## C의 메모리 관련 함수

![img_50.png](img_50.png)

- memset, memcpy, memcmp는 동적 메모리, 정적 메모리 모두 사용 가능

### [malloc]

![img_51.png](img_51.png)

- 매개 변수로 입력받은 size 만큼의 메모리를 할당
- 반환값은 할당한 메모리의 첫 주소
- 포인터형은 void*로 반환

![img_52.png](img_52.png)

- 할당된 메모리에 들어있는 값은 쓰레기 값
- 프로그래머가 알아서 초기화 잘해야함
- 메모리가 더 이상 없거나, 할당할 수 없으면 NULL 반환

### [free]

![img_53.png](img_53.png)

- 할당한 메모리를 반납하는 개념

![img_54.png](img_54.png)

- 반드시 malloc을 사용하는 순간, 바로 free를 적어주자!
- 습관이 중요하다!!!

### [malloc 예제]

![img_55.png](img_55.png)

```c++
#define LENGTH (10)

size_t i;
int* nums = malloc(sizeof(int) * LENGTH);   // 동적 배열, 힙에 40바이트 할당

for (i = 0; i < LENGTH; i++) {
    nums[i] = i * LENGTH;
}

for (i = 0; i < LENGTH; i++) {
    printf("%d\n", nums[i]);
}

free(nums); // 반납
```

![img_56.png](img_56.png)
![img_57.png](img_57.png)

```c++
#define NUM_LINES (5)
#define LINE_LENGTH (2048)

char* lines[NUM_LINES]; // 포인터(1줄)을 배열의 원소로 가짐
char line[LiNE_LENGTH];
size_t i;
size_t j;

for (i = 0; i < NUM_LINES; i++) {
    if (fgets(line, LINE_LENGTH, stdin) == NULL) {  // 최대 LINE_LENGTH - 1 만큼 입력받을 수 있음
        clearerr(stdin);    // fgets 성공하면 매개변수의 line, 실패하면 NULL 반환
        break;
    }
    
    lines[i] = malloc(sizeof(char) * (strlen(line) + 1));   // sizeof(char)는 1이므로 생략 가능, 실제로 입력받은 수 strlen(line) + 1만큼만 메모리 할당, 이 값의 최대는 LINE_LENGTH
    if (lines[i] == NULL) { // malloc 실패 시 NULL 반환
        fprintf(stderr, "%s\n", "out of memory");
        break;
    }
    
    strcpy(lines[i], line); // strcpy해도 안전함, 메모리가 충분히 할당되었기 때문임, 복사 후 널문자 추가해줌
    
    for (j = 0; j < i; j++) {   // 이미 i == NUM_LINES
        printf("%s", lines[j]);
    }
    
    for (j = 0; j < i; j++) {
        free(lines[j]);
    }   // lines의 경우 스택 메모리에 할당해서 free 필요없음
}
```

- 키보드로 입력을 받아 배열 또는 멤버로 배열을 갖는 구조체에 저장할 때 배열의 크기를 고정해야했음
- 일단 최대한 많이 입력받기 위해 넉넉하게 배열을 잡다보면, 메모리 낭비가 심함
- 동적 배열을 활용하면, 입력받은 데이터만큼만 메모리를 할당하고 사용할 수 있음

![img_58.png](img_58.png)

- 위 예시도 총 줄 수가 고정이라는 한계가 있음

![img_59.png](old_note/COMP2200/week9/img_59.png)
![img_60.png](old_note/COMP2200/week9/img_60.png)

```c++
#define INCREMENT (2)

typedef struct {
    char firstname[NAME_LEN];
    char lasttname[NAME_LEN];
    unsigned int id;
    float gpa;
} student_t;

student_t read_student(void) {
    student_t student;
    
    printf("Enter first name: ");
    scanf("%s", student.firstname);  // scanf에서 버퍼 오버플로우 발생할 수 있음
    
    printf("Enter last name: ");
    scanf("%s", student.lastname);  // scanf에서 버퍼 오버플로우 발생할 수 있음
    
    printf("Enter id: ");
    scanf("%u", &student.id);
    
    printf("Enter gpa: ");
    scanf("%f", &student.gpa);
    
    return student;
}

while (TRUE) {
    student = read_student();
    
    if (current_index == max_students) {    // current_index가 max_students와 같아지면 더 이상 학생을 추가할 수 없음
        max_students += INCREMENT;  // 최대값 max_students를 늘림
        tmp = malloc(sizeof(student_t) * max_students); // 새로운 메모리 할당
        memcpy(tmp, students, sizeof(student_t) * current_index);   // 기존 데이터 복사
        free(students); // 이전의 할당된 메모리 해제
        students = tmp; // 새로운 메모리를 가리키게 함
    }
    
    students[current_index++] = student;
}

free(students);
students = NULL;
```

- 동적 배열의 크기를 늘릴 때 realloc을 사용해도 됨
- malloc + memcpy + free를 한 번에 할 수 있음

![img_61.png](img_61.png)

```c++
FILE* file;
size_t num_students;
size_t num_read;
student_t* students;

file = fopen("students.dat", "rb");

num_read = fread(&num_students, sizeof(size_t), 1, file);   // 처음 size_t 크기만큼 읽어옴, 학생 수를 알 수 있음, num_read는 성공하면 1이겠죠?

students = malloc(sizeof(student_t) * num_students);    // 학생 수에 맞게 메모리 할당

num_read = fread(students, sizeof(student_t), num_students, file);  // 학생 수만큼 읽어옴, num_read는 성공하면 num_students가 나올 것

fclose(file);
```

- 파일에 학생 수를 몇 명인지를 저장하고 있다면, 동적 할당으로 학생 수에 맞게 메모리를 할당하고 파일에서 읽어올 수 있음

## 제대로된 free()에 대한 설명

![img_62.png](img_62.png)

- 메모리 할당 함수(ex: malloc)을 통해서 얻은 `메모리만` 해제 가능
- 그 외의 주소를 매개변수로 전달하면 정의되지 않은 결과가 발생할 수 있음

## 실수: 할당받아온 주소로 포인터 연산하기

![img_63.png](img_63.png)

- 할당받은 주소를 포인터 연산으로 옮기면, 다른 위치를 가리키게됨
- 실수할 여지 발생
- 다른 주소를 free의 매개변수로 넘기면 결과 정의되지 않음

![img_64.png](img_64.png)

- for문이 끝나고, nums는 0x110을 가리키게 됨
  - 16바이트 증가했음
  - 4바이트(int) 4개잖아~

![img_65.png](img_65.png)

- nums 포인터 변수를 그대로 free에 넘기면, 0x110을 해제하게 됨
- 정의되지 않은 결과 발생

## 코딩 표준: 할당받은 포인터로 연산 금지

![img_66.png](img_66.png)

- nums는 할당 받은 주소를 그대로 가지고 있고 값을 복사해서 연산할 때 사용하자

## 실수: 해제한 메모리를 또 해제

![img_67.png](img_67.png)

- free를 2번 호출하는 실수
- 결과가 정의되지 않음

[후기 강조]
- 참고로 힙 관리자가 연결 리스트와 비슷한 개념으로 메모리를 관리한다. 해제한 메모리를 또 해제하면 내부적으로 관리하는 연결 리스트 비슷한 자료구조가 망가질 수 있음, 그래서 크래시 날 수 있음

## 실수: 해제한 메모리를 또 사용

![img_68.png](img_68.png)

- 당연히 해제한 메모리를 또 사용해도 문제임
- Memory Stomp 발생

## 코딩 표준: 해제 후 널 포인터 대입

![img_69.png](img_69.png)

- free에 NULL을 넘기면 아무 일도 일어나지 않게 설계되어 있음

## 가장 심각한 문제는 할당 받은 주소를 지역 변수로 저장한 경우

![img_70.png](img_70.png)

- 함수 블록을 벗어나면 지울 방법이 아에 없어짐

![img_71.png](img_71.png)

- 반드시 malloc()을 코드에 추가하자마자 free()를 추가하자

## 힙 관리자의 동작

![img_72.png](img_72.png)

- free()의 매개변수로 할당받은 주소만 넘겨준다.
- 힙 관리자는 이 주소만으로 할당된 메모리의 크기를 알 수 있다

![img_73.png](img_73.png)

- 힙 관리자는 할당된 메모리의 크기를 알고 있음
- malloc(), free()에서 할당된 메모리와 추가적으로 앞부분에 `어떤 데이터`를 채움

![img_74.png](img_74.png)

- malloc()에서 메모리 주소를 반환할 때 `어떤 데이터`의 크기 만큼 오프셋을 더한 값을 반환함

![img_75.png](img_75.png)

- free()를 호출하면, `어떤 데이터`의 크기 만큼 오프셋을 뺀 주소로 이동해서 메모리를 해제함

![img_76.png](img_76.png)

- 실제로 메모리의 예시
- `어떤 데이터`로 할당된 메모리의 크기를 확인할 수 있음

## calloc()

![img_77.png](img_77.png)

- 메모리를 할당할 때, 자료형의 수(num), 자료형의 크기(size)를 따로 지정해서 할당할 수 있음
- 모든 바이트를 0으로 초기화함

![img_78.png](img_78.png)

- calloc() 대신 malloc() + memset()을 사용할 수 있음
  - memest()을 사용하면 0대신 다른 값으로 초기화할 수 있음

## memset()

![img_79.png](img_79.png)

- dest 시작 주소로 부터, count 바이트 만큼, ch라는 값으로 초기화
  - 초기화할 때 1바이트 단위(char)로 초기화함
  - 매개변수 ch의 자료형은 int 지만, 내부적으로 unsigned char로 캐스팅됨
- 1바이트 단위 말고 다른 자료형 단위로 초기화하려면 for문을 사용하면 됨
- 문제가 발생하는 경우
  - count 만큼 더했는데, dest의 범위를 넘어갈 경우 (소유하지 않은 메모리에 쓰기)
  - dest가 NULL일 경우 (널 포인터 역참조)
- C11 이후에는 memset_s()를 사용하면 됨

![img_80.png](img_80.png)

- memset()의 두번째 매개변수 ch에 1000의 값을 넣어도, unsigned char로 캐스팅되어 16진수에서 오른쪽 두자리만 값으로 들어감
  - 1000은 0x03E8이므로 0xE8만 들어감
  - 1000 % 256 = 232
  - int 크기로 읽으면 4바이트를 읽고, 비트패턴은 16진수로 E8E8E8E8
    - int값은 오버플로우가 발생해 -387389208

![img_81.png](img_81.png)

- 실제 int로 초기화하고 싶으면 for문을 사용하면 됨

## realloc()

![img_82.png](img_82.png)

- 재할당의 의미는 이미 할당된 메모리의 크기를 바꾼다는 것
- 크기를 바꾸면서 원래 할당된 메모리가 아닌 다른 메모리를 할당할 수 있음
  - 시작 주소가 달라짐
- 다른 메모리를 할당하고 최대한 기존 할당된 메모리의 데이터를 복사해줌

### [크기가 커지는 경우: 새로운 메모리 주소 반환]

![img_83.png](img_83.png)

- 지금 4바이트를 할당했음, 8바이트로 2배로 늘리고 싶어서 할당받고 싶음

![img_84.png](img_84.png)

- 4바이트 바로 뒤에서 연속된 메모리로 8바이트를 할당할 수 없음, 파란색으로 칠해진 메모리가 2바이트 이미 할당됨

![img_85.png](img_85.png)

- `연속된` 메모리를 할당하기 위해서 새로운 공간에 8바이트 할당

![img_86.png](img_86.png)

- 기존 데이터 복사

![img_87.png](img_87.png)

- 기존 메모리 해제
- 새로운 메모리 시작 주소 반환

### [크기가 커지는 경우: 기존 메모리 주소 그대로 반환]

![img_88.png](img_88.png)

- 기존 메모리 바로 뒤에 연속된 메모리 공간이 충분하다면, 기존 주소를 반환할 수 있음

![img_89.png](img_89.png)

- 기존 주소 반환

### [크기가 작아아지는 경우]

![img_90.png](img_90.png)

- 결론적으로 크기가 커지는 경우, 작아지는 경우 기존 주소를 반환할 수도 있고, 아닐 수도 있다는 것
- 따라서 새로 주소를 반환한다 생각하고 코딩하는게 좋음

### [realloc() 반환값]

![img_91.png](img_91.png)

- realloc()이 실패할 경우 NULL을 반환함
  - 메모리가 부족하면 실패
- 기존의 할당된 메모리(첫번째 매개변수)는 해제되지 않음
- 따라서 실패 시 메모리 누수가 발생할 수 있음

![img_92.png](old_note/COMP2200/week9/img_92.png)

- realloc()하고 nums 포인터 변수에 바로 저장함
- 실패하면 nums에 NULL이 저장되고, 기존 nums의 메모리는 해제되지 않은 채, 잃어버리게 됨

![img_93.png](old_note/COMP2200/week9/img_93.png)

- 올바르게 재할당하는 방법은 임시 변수를 사용하기
- 메모리 누수를 막는 realloc 사용법!

![img_94.png](old_note/COMP2200/week9/img_94.png)

- realloc() = malloc() + memcpy() + free()

## memcpy()

![img_95.png](old_note/COMP2200/week9/img_95.png)

- dest에는 const가 없음, 따라서 변할 수 있음
- count 바이트 만큼 복사
- 문제가 발생하는 경우
  - dest가 소유하지 않은 메모리에 복사할 경우
  - src, dest가 NULL인 경우

## realloc() 대신에 malloc() + memcpy() + free() 사용?

![img_96.png](old_note/COMP2200/week9/img_96.png)

- realloc()에서 메모 누수가 나는 경우 메모리가 부족하다는 것이기 때문에, 일부러 프로그램을 종료시키는 것이 더 나을 수도 있음
- 이건 상황에 따라서 잘 판단해야함

## realloc의 특수한 경우

![img_97.png](old_note/COMP2200/week9/img_97.png)

- 첫번째 인자로 NULL을 넘기면, malloc()과 같은 동작을 함

## 여러 줄 입력받아 출력하기 예

```c++
#define INCERMENT (2)
#define LINE_LENGTH (2048)

char** lines;
char line[LiNE_LENGTH]; // 한 줄에 2048바이트까지 입력받을 수 있음
size_t max_lines;
size_t num_lines;
size_t i;
char** tmp;

max_lines = 0;
num_lines = 0;
lines = NULL;

while (1) {
    if (fgets(line, LINE_LENGTH, stdin) == NULL) {  // 최대 LINE_LENGTH - 1 만큼 입력받을 수 있음
        clearerr(stdin);    // fgets 성공하면 매개변수의 line, 실패하면 NULL 반환
        break;
    }
    
    if (num_lines == max_lines) {   // 현재 줄 수가 최대 줄 수와 같으면
        tmp = realloc(lines, (max_lines + INCREMENT) * sizeof(char*));    // realloc 실패하면 NULL 반환
        // 처음에 lines == NULL이어도, malloc((0 + 2) * sizeof(char*))로 메모리 할당됨
        
        if (tmp == NULL) {
            fprintf(stderr, "%s\n", "out of memory");   // realloc 실패 시 errno를 설정한다는 보장이 없어서 perror 사용 불가
            break;
        }
        
        lines = tmp;
        max_lines += INCREMENT;
    }
    
    lines[num_lines] = malloc(strlen(line) + 1);    // 문자열이라 sizeof(char) 생략해도 됨, 1바이트
    if (lines[num_lines] == NULL) { // malloc 실패 시 NULL 반환
        fprintf(stderr, "%s\n", "out of memory");
        break;
    }
    strcpy(lines[num_lines], line); // strcpy해도 안전함, 메모리가 충분히 할당되었기 때문임, 복사 후 널문자 추가해줌
    ++num_lines;
}
    
for (i = 0; i < max_lines; ++i) {
    printf("%s", lines[i]);
}

for (i = 0; i < max_lines; ++i) {
    free(lines[i]);
}
    
free(lines);    // realloc으로 할당했기 때문에 free 필요함
```

- realloc은 errno를 설정하지 않음
  - realloc 실패 시 perror을 사용할 수 없음
  - 직접 fprintf()로 stderr에 출력
- 파일 입출력에서 실패할 때랑 같다고 생각하면 안 됨, 일단 표준상은 실패 시 errno를 설정하지 않음

## memcmp()

![img_98.png](old_note/COMP2200/week9/img_98.png)

- 두 메모리 영역을 비교
- strcmp와 매우 비슷함
  - strcmp와 다르게 널 문자를 만나도 멈추지 않음
- 문제가 발생하는 경우
  - lhs, rhs의 크기를 넘어서서 비교하는 경우 (소유하지 않은 메모리에 쓰기) 
  - lhs, rhs가 NULL인 경우 (역참조)

### [memcmp로 구조체 2개 비교하기]

![img_99.png](old_note/COMP2200/week9/img_99.png)

- 구조체는 깊은 복사가 가능하게 멤버를 구현
  - &s2, &s4 비교할 때 12349와 12340의 비트 패턴으로 비교함
- 구조체의 멤버 변수가 각각 자로형이 다르기 때문에, 각 멤버 변수에 접근해서 비교하려면 코드가 번거로울 수 있음, 따라서 메모리를 통채로 비교하면 코드가 깔끔
  - 성능도 좋음
- 하지만 조심해야할 점이 있음, 구조체 멤버로 배열을 들고 있다면 `배열의 초기화`를 잘 해줘야함
  - 예를 들어 "LuLu" 의 경우 LuLu\0 그리고 뒤에 쓰레기값이 들어있다면, 정상적으로 비교가 안 됨

![img_100.png](old_note/COMP2200/week9/img_100.png)

- 구조체가 포인터 변수를 멤버로 가질 경우 조심해야함
- 포인터 변수를 가진 상태면, 동적 메모리 할당으로 값이 같다도, 포인터 변수의 주소값이 달라서 올바르게 비교할 수 없음
- 깊은 복사해놓고, 제대로 비교를 못한 경우

## 동적 메모리 할당을 이용한 깊은 복사

![img_101.png](old_note/COMP2200/week9/img_101.png)

- 이 경우 문자열이라 strcpy()를 사용해도 됨
- s2는 반드시 free 해줘야함

## 구조체 멤버 변수: 배열 vs 포인터

![img_102.png](old_note/COMP2200/week9/img_102.png)

- 배열
  - 그대로 대입 가능의 의미
    - 구조체 멤버의 배열 변수에 값을 복사하면 깊은 복사라는 것
  - 깊은 복사로 값을 저장하기 때문에 파일에 곧바로 저장 가능
  - memcpy()하면 깊은 복사

- 포인터
  - 그대로 포인터 변수에 대입하면 얕은 복사
  - 얕은 복사는 파일에 곧바로 저장하면 문제가 생길 수 있음
  - memcpy를 바로 사용할 수 없음
    - 깊은 복사를 하기 위해서는 따로 동적 할당 후 memcpy()로 복사해야함

## 베스트 프렉티스: 정적 vs 동적 메모리

![img_103.png](img_103.png)

- 최대한 스택 메모리에서 정적으로 할당하자!

## 동적 메모리의 소유권 문제

![img_104.png](img_104.png)

- 동적 메모리의 소유주는 동적 메모리를 할당받은(생성한) 함수
- 소유주가 반드시 메모리 해제해야함
- 소유주가 아닌 곳에서 동적 메모리에 접근해서 사용할 수 있음, 하지만 해제하면 안 됨
- 결론: 소유주가 할당/해제를 책임지고, 소유주가 아닌 곳에서는 사용만 하기

![img_105.png](img_105.png)

- 호출자가 함수 시그니처만으로는 내부 구현을 알 수 없음
- 함수 내부에서 동적할당 후 해제하지 않는다면 문제가 있음
- 소유주가 해제 책임을 다하지 못한 사례

## C++ RAII

![img_106.png](img_106.png)

- 메모리의 소유주는 개체, 개체가 사라지면 메모리도 해제하는 개념
- 개체 밖의 다른 곳에서 메모리를 사용하는 것은 허용됨

## C에는 개체가 없음

![img_107.png](img_107.png)

- malloc() / free()를 쌍으로 사용허는 코딩 습관으로 RAII와 유사한 개념을 적용할 수 있음

## 함수 중간에 return하는 실수

![img_108.png](img_108.png)

- free()를 호출하지 않고, early return하는 실수

![img_109.png](img_109.png)

- 해결법으로 goto문을 사용할 수 있음

## combine_string 함수 같은 문제: 함수 밖에서 메모리 접근이 필요한 경우

![img_110.png](img_110.png)

- 문자열에서 배운 것 처럼, 함수 외부에서 메모리를 할당해서 매개변수로 넘겨주는 방식이 좋음

![img_111.png](img_111.png)

- 두 문자열을 합친 길이를 구하고, 이를 이용해 동적 메모리 할당
- 함수 외부에서 할당 받은 동적 메모리를 인자로 넘김
- 동적 메모리 해제는 함수 밖에서 수행

## 함수 내부에서 동적 메모리 할당을 피할 수 없는 경우: 코딩 표준으로 해결

![img_112.png](img_112.png)

- 주석으로 표기
- 함수 이름에 들어나게 하기
- 포인터 변수의 변수명에 표기

![img_113.png](img_113.png)

- 함수의 내부에서 동적 메모리 할당을 하는 경우 함수 명에 malloc을 붙이자

![img_114.png](img_114.png)

- 동적 메모리를 저장하는 변수라면 변수명에 pointer allocated를 명시
- pa_var;

## 베스트 프랙티스 정리

![img_115.png](img_115.png)

- malloc() / free() 바로 쌍으로 사용
- 동적 할당을한 메모리를 저장하는 포인터 변수와, 이를 사용하는 포인터 변수를 분리
- 메모리 해제 후 NULL 대입
  - free() 두번해도 괜찮
- 정적 메모리를 우선 사용
- 동적 메모리를 할당하는 경우 함수, 변수에 명시

## 다중 포인터

![img_116.png](img_116.png)

- 포인터는 주소를 저장하는 변수
- 포인터의 주소를 저장하는 변수를 다중 포인터라고 함

![img_117.png](img_117.png)

- 포인터의 주소를 저장하는 변수인 다중 포인터의 자료형은?

![img_118.png](img_118.png)

- int*의 주소를 저장하는 변수는 int**
- pointer to (pointer to int), 오른쪽에서 부터 읽는 포인터 읽는 방법이 그대로 적용됨

## 다중 포인터 사용 예

![img_119.png](img_119.png)

- pp = &p;
- pp에 p의 주소인 0x108를 대입

![img_120.png](img_120.png)

- *pp = q;
- pp에 저장된 0x108 주소값으로 가서, q의 값 대입
- 0x108 주소에 0x104가 저장됨, 0x108은 p의 주소
- p = 0x104가 됨

![img_121.png](img_121.png)

- **pp = 1024;
- pp에 저장된 값은 0x108, 0x108 주소에 저장된 값은 0x104
- 0x104 주소에 1024를 저장함
- p = 1x104 = q
- *q = 1024로 num2 = 1024

![img_122.png](img_122.png)

- pp = &r;
- pp에 r의 주소인 0x110를 대입

![img_123.png](img_123.png)

- **pp = *p * 2
- pp에 저장된 값은 0x110, 0x110 주소에 저장된 값은 0x10C, num1의 주소
- num1 = *p * 2
- p는 0x104, 0x104에 저장된 값은 1024, num2과 동일
- num1 = 1024 * 2 = 2048

## 3중 포인터 이상은?

![img_124.png](img_124.png)

- 3중 포인터는 가끔 씀

## 2중 포인터 사례

![img_125.png](img_125.png)

- 2D 배열처럼 많이 씀

![img_126.png](img_126.png)

- 2차원 배열이 이중 포인터와 비슷함

## char** argv

![img_127.png](img_127.png)

- 명령줄 인자도 이중 포인터로 되있음
- 문자열의 배열

## 포인터 변수 교체하기 swap

![img_128.png](img_128.png)

- 지역변수 n1, n2에 p, q의 주소값 복사

![img_129.png](img_129.png)

- 포인터 변수 tmp에 n1이 가리키는 주소에 있는 값 대입
- n1은 0x108 주소값을 가짐, 0x108 주소에 있는 값은 0x100

![img_130.png](img_130.png)

- n1이 가리키는 주소에 n2가 가리키는 주소에 있는 값을 대입
- n1은 0x108 주소값을 가짐, 0x108 주소에 있는 값은 0x104
- 0x108 주소에 *n2를 대입
- n2는 0x10C 주소값을 가짐, 0x10C 주소에 있는 값은 0x104
- 0x108 주소에 0x104를 저장

![img_131.png](img_131.png)

- n2가 가리키는 주소에 tmp가 가리키는 주소에 있는 값을 대입
- n2는 q의 주소, 0x10c 값을 가짐,
- *n2는 0x10c 주소에 있는 값을 가리킴
- 0x10c 주소에 tmp값인 0x100을 저장
- q = 0x100

## 코드 보기: 단어 정렬

```c++
#include <stdio.h>
#include <stdlib.h>

#include "string_comparer.h"

enum { NUM_WORDS = 6 };

int main(void)
{
    size_t i;
    const char* words[NUM_WORDS] = {
        "premium", "level", "cultured",
        "moaning", "skinny", "curve"
    };  // 정렬할 단어 6개

    puts("\n== sort ascending ==");

    qsort(words, NUM_WORDS, sizeof(const char*), compare_string);
    for (i = 0; i < NUM_WORDS; ++i) {
        printf("%s\n", words[i]);
    }   // compare_string 비교함수만 적절하게 구현하면 됨
    // count는 단어 개수로 6
    // size는 char*로 각 단어의 첫번째 문자를 가리키는 주소

    puts("\n== sort descending ==");
    
    qsort(words, NUM_WORDS, sizeof(const char*), compare_string_desc);
    for (i = 0; i < NUM_WORDS; ++i) {
        printf("%s\n", words[i]);
    }

    return 0;
}
```

```c++
#include <string.h>
#include "string_comparer.h"

int compare_string(const void* a, const void* b)
{
    const char** w0 = (const char**)a;  // qsrot 비교함수는 배열 안의 요소의 주소를 전달 받음
    const char** w1 = (const char**)b; // 배열 안의 요소가 char*라서, char*의 주소는 char** 타입 변수에 저장

    return strcmp(*w0, *w1);    // char**에서 리디렉션 한 번 하면 문자열이됨, 이 두 문자열(단어)을 비교하면 끝
}

int compare_string_desc(const void* a, const void* b)
{
    const char** w0 = (const char**)a;
    const char** w1 = (const char**)b;

    return strcmp(*w1, *w0);    // 두 단어의 순서만 바꾸면 됨
    // -strcmp(*w0, *w1); 해도 똑같음요
}
```

## 복습 퀴즈 1

```c++
int num1 = 10;
int num2 = 13;
int num3 = 19;

int* p1 = &num2;
int* p2 = &num1;
int* p3 = &num3;
	
int** pp1 = &p2;
int** pp2 = &p3;
int** pp3 = &p1;

*pp1 = *pp2;
**pp2 *= 2;
pp3 = pp2;

printf("%d, %d, %d", **pp1, **pp2, **pp3);

```

- pp1에 p2주소가 저장됨
- *pp1 하면 p2에 대입하는 것과 동일함
- pp2에 p3주소가 저장됨
- *pp2 하면 p3의 값과 동일
- p2 = p3이랑 결국 동일함, p2 = p3 = &num3
- p2은 num3의 주소를 저장하고 있음
- **pp2 *= 2는 num3 *= 2와 동일
- num3 = 38
- pp3에 p3의 주소가 저장됨

- **pp1 = *p2 = num3 = 38
- **pp2 = *p3 = num3 = 38
- **pp3 = *p3 = num3 = 38

## 복습 퀴즈 2

```c++
int num1 = 10;
int num2 = 13;
int num3 = 19;  // 6

int* p1 = &num2;
int* p2 = &num1;    // p2 =  &num3;
int* p3 = &num3;

int** pp1 = &p2;
int** pp2 = &p3;
int** pp3 = &p1;    // pp3 = &p3;

int*** ppp1 = &pp3;
int*** ppp2 = &pp1;
int*** ppp3 = &pp2;

*ppp1 = *ppp3;
**ppp2 = **ppp1;
***ppp3 -= ***ppp1;

printf("%d, %d, %d", ***ppp1, ***ppp2, ***ppp3);
```

- ppp1 = &pp3;
- *ppp1는 pp3 변수의 값
- ppp3 = &pp2;
- *ppp3는 pp2 변수의 값
- *ppp1 = *ppp3는 pp3 = pp2와 동일
- pp3 = pp2 / pp3 = &p3;

- ppp2 = &pp1;
- *ppp2 = pp1; = &p2;
- **ppp2 = p2;
- ppp1 = &pp3;
- *ppp1 = pp3; = &p3;
- **ppp1 = p3;
- p2 = p3;

- ppp3 = &pp2;
- *ppp3 = pp2; = &p3;
- **ppp3 = p3 = &num3;
- ***ppp3 = num3 = 19;
- ppp1 =  &pp3;
- *ppp1 = pp3; = &p3;
- **ppp1 = p3 = &num3;
- ***ppp1 = num3 = 19;
- num3 -= num3 = 0;

- ***ppp1 = num3 = 0
- ***ppp2 = num3 = 0
- ***ppp3 = num3 = 0

## 복습 퀴즈 3

```c++
int num1 = 10;  /* num1의 주소값: 0x100 */
int num2 = 13;  /* num2의 주소값: 0x104 */
int num3 = 19;  /* num3의 주소값: 0x108 */  // num3 = 32

int* p1 = &num2;  /* p1의 주소값: 0x10C */
int* p2 = &num1;  /* p2의 주소값: 0x110 */
int* p3 = &num3;  /* p3의 주소값: 0x114 */

int** pp1 = &p2;  /* pp1의 주소값: 0x118 */ // pp1 = &p1 = 0x10C
int** pp2 = &p3;  /* pp2의 주소값: 0x11C */
int** pp3 = &p1;  /* pp3의 주소값: 0x120 */ // pp3 = &p3 // pp3 = pp1 = &p1 = 0x10C

int*** ppp1 = &pp3;  
int*** ppp2 = &pp1;  // ppp2 = ppp3 = &pp2 = 0x11C;
int*** ppp3 = &pp2; 

pp1 = pp3;
**pp2 += **pp3;
pp3 = pp2;

*ppp1 = *ppp2;
ppp2 = ppp3;
*ppp3 = *ppp2;

/* pp1, pp2, pp3, ppp1, ppp2, ppp3의 값은? */
```

- pp2 = &p3
- *pp2 = p3 = &num3
- **pp2 = num3 = 19
- pp3 = &p1
- *pp3 = p1 = &num2
- **pp3 = num2 = 13
- num3 += 13
- num3 = 32

- ppp1 = &pp3
- *ppp1 = pp3
- ppp2 = &pp1
- *ppp2 = pp1
- pp3 = pp1

- ppp3 = &pp2
- *ppp3 = pp2
- ppp2 = &pp2;
- *ppp2 = pp2;
- pp2 = pp2;

- pp1: 0x10C
- pp2: 0x114 
- pp3: 0x10C
- ppp1: 0x120
- ppp2: 0x11C 
- ppp3: 0x11C 
