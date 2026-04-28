# Week10

## 자료구조의 개념

![img.png](old_note/COMP2200/week10/img.png)

- 컴퓨터에서 여러 자료들을 조직적, 체계적으로 저장하는 방법

![img_1.png](old_note/COMP2200/week10/img_1.png)

- 보통 자료구조는 동일한 데이터 타입을 가진 데이터들을 어떻게 저장할 것인가?
- 어떤 원칙에 따라서 자료를 저장하는가?
- 자료들끼리의 관계는 어떻게 되는가?
- 효율성, 메모리 소모, 속도 등을 고려하여 자료를 저장하는 방법
- 풀고자하는 문제에 따라서 자료구조를 선택

## 자료구조의 효율성

![img_2.png](old_note/COMP2200/week10/img_2.png)

- 주로 시간 복잡도를 말함
- 자료구조의 효율성을 말할 때 하드웨어 최적화는 고려하지 않음

## Big-O 표기법

![img_3.png](old_note/COMP2200/week10/img_3.png)

- 자료의 수에 따라 알고리즘의 시간 복잡도를 표기하는 방법

## 자료구조의 시간 복잡도 정리

![img_4.png](old_note/COMP2200/week10/img_4.png)

## 배열

![img_5.png](old_note/COMP2200/week10/img_5.png)

- 줄줄이 세워 놓은 구조
- 색인으로 접근

### 배열의 삽입

![img_6.png](old_note/COMP2200/week10/img_6.png)

```c++
#define MAX_NUMS (8)

int s_nums[MAX_NUMS];
size_t s_num_count = 0;

void insert_at(size_t index, int num) {
    size_t i;
    
    assert(index <= s_num_count);
    assert(s_num_count < MAX_NUMS);
    
    for (i = s_num_count; i > index; --i) {
        s_nums[i] = s_nums[i - 1];
    }
    s_nums[index] = num;
    s_num_count++;
}
```

![img_7.png](old_note/COMP2200/week10/img_7.png)

```c++
insert_at(0, 1);
```

- 실행하고 한 줄씩 분석

![img_8.png](old_note/COMP2200/week10/img_8.png)

- index <= s_num_count: 인자로 들어오는 삽입 위치의 범위 [0, s_num_count(배열의 마지막 인덱스 다음)]를 검사

![img_9.png](old_note/COMP2200/week10/img_9.png)

- s_num_count < MAX_NUMS: 배열의 크기를 넘어서는 삽입을 방지

![img_10.png](old_note/COMP2200/week10/img_10.png)

- 마지막 부터 넣으려고 하는 위치에 있는 요소까지 한 칸씩 뒤로 밀어냄

![img_11.png](old_note/COMP2200/week10/img_11.png)

- 삽입 위치에 값을 넣음

![img_12.png](old_note/COMP2200/week10/img_12.png)

- 배열에 인덱스 몇 개가 있는지 수를 증가

![img_13.png](old_note/COMP2200/week10/img_13.png)

- 가장 마지막 자리에 삽입하는 경우

![img_14.png](old_note/COMP2200/week10/img_14.png)

- 반복문 돌지 않고 바로 삽입

![img_15.png](old_note/COMP2200/week10/img_15.png)

- 배열의 제일 뒤
- 그 외의 경우
  - O(n)의 원인

### 배열의 삭제

![img_16.png](old_note/COMP2200/week10/img_16.png)

```c++
#define MAX_NUMS (8)

int s_nums[MAX_NUMS];
size_t s_num_count = 0;

void remove_at(size_t index) {
    size_t i;
    
    assert(index < s_num_count);
    
    s_num_count--;
    for (i = index; i < s_num_count; ++i) {
        s_nums[i] = s_nums[i + 1];
    }
}
```

- 배열의 제일 뒤
- 그 외의 경우
  - O(n)의 원인

![img_17.png](old_note/COMP2200/week10/img_17.png)

- 쓰레기 값은 남아있음
- s_num_count를 줄이는 것으로 삭제 처리

![img_18.png](old_note/COMP2200/week10/img_18.png)

### 배열의 검색, 배열의 접근

![img_19.png](old_note/COMP2200/week10/img_19.png)

```c++
#define MAX_NUMS (8)

int s_nums[MAX_NUMS];
size_t s_num_count = 0;

void find_index(int n) {
    size_t i;
    
    for (i = 0; i < s_num_count; ++i) {
        if (s_numsp[i] == n) {
            return i;
        }
    }
    
    return -1;
}
```

![img_20.png](old_note/COMP2200/week10/img_20.png)

- 배열 속 요소들을 처음부터 차례대로 방문해 찾고자 하는 값이 있는지 확인
  - 있으면 해당 색인 반환
  - 없으면 -1 반환
- O(n)의 원인

![img_21.png](old_note/COMP2200/week10/img_21.png)

- 배열의 색인으로 접근
  - offset 때문
- O(1)

## 코드보기: 빠른 배열

```c++
#include <assert.h>
#include <stdio.h>

enum { MAX_NUMS = 8 };
enum { INVALID_INDEX = -1 };

int s_nums[MAX_NUMS];
size_t s_num_count = 0;

void print_array(void)
{
    size_t i;

    for (i = 0; i < s_num_count; ++i) {
        printf("%d ", s_nums[i]);
    }

    puts("");
}

void insert_at(size_t index, int n)
{
    size_t i;

    assert(index <= s_num_count);
    assert(s_num_count < MAX_NUMS);

    for (i = s_num_count; i > index; --i) {
        s_nums[i] = s_nums[i - 1];
    }

    s_nums[index] = n;
    ++s_num_count;
} 

size_t find_index(int n)
{
    size_t i;

    for (i = 0; i < s_num_count; ++i) {
        if (s_nums[i] == n) {
            return i;
        }
    }

    return INVALID_INDEX;
}

void remove_at(size_t index)
{
    size_t i;

    assert(index < s_num_count);

    --s_num_count;
    for (i = index; i < s_num_count; ++i) {
        s_nums[i] = s_nums[i + 1];
    }
}

void remove_at_unordered(size_t index)
{
    assert(index < s_num_count);

    s_nums[index] = s_nums[--s_num_count];  // 빈 슬롯에 배열의 마지막 요소를 넣음
}

int main(void)
{
    insert_at(0, 0);
    insert_at(1, 1);
    insert_at(2, 2);
    insert_at(3, 3);
    insert_at(4, 4);
    insert_at(5, 5);

    /* 0 1 2 3 4 5 */
    print_array();

    remove_at(1);
    /* 0 2 3 4 5 */
    print_array();

    remove_at_unordered(1);
    /* 0 5 3 4 */
    print_array();

    return 0;
}
```

- 삭제 후 배열의 가장 마지막 요소를 넣음
  - 순서가 중요하지 않은 경우
  - O(1)

![img_22.png](old_note/COMP2200/week10/img_22.png)

- s_num_count가 1일 때
- index 0을 삭제하면?
- s_nums[0] = s_nums[0]로 덮어씌워짐
    - 즉 0번째 인덱스의 요소를 지우고 다시 0번째 인덱스의 값을 대입함
    - 개념적으로 이상함
    - 이미 지웠는데? 그래도 값이 남아있음
    - 하지만 위험한 연산은 아니라서, 이렇게 처리해도 됨
    - if문 안 쓰면 성능상 유리해서 그냥 이렇게 써도 나쁘지 않음

## 스택

![img_23.png](old_note/COMP2200/week10/img_23.png)

- 자료의 삽입과 삭제에 대한 규칙이 존재

![img_26.png](old_note/COMP2200/week10/img_26.png)

- LIFO(Last In First Out)

### push

![img_24.png](old_note/COMP2200/week10/img_24.png)

- 스택에 데이터를 넣는 연산

### pop

![img_25.png](old_note/COMP2200/week10/img_25.png)

### 원칙상 젤 위에 있는 자료에만 접근 가능

![img_27.png](old_note/COMP2200/week10/img_27.png)

- 중간에 있는 자료에 접근 불가

### 스택 메모리

![img_28.png](old_note/COMP2200/week10/img_28.png)

- 스택 메모리는 주소가 큰 곳에서 작은 곳으로 쌓임

### 스택의 구현

![img_29.png](old_note/COMP2200/week10/img_29.png)

- 배열로 쉽게 가능
- 배열의 삽입과 삭제와 비교
  - O(1)
  - 배열에서 삽입과 삭제할 때 O(1)이 되는 경우를 생각하기

### 스택의 삽입

![img_30.png](old_note/COMP2200/week10/img_30.png)

```c++
enum { MAX_NUMS = 8 };

int s_nums[MAX_NUMS];
size_t s_num_count = 0;

void push(int n)
{
    assert(s_num_count < MAX_NUMS);

    s_nums[s_num_count++] = n;
}
```

- s_num_count 위치에 값을 넣고 값을 증가

![img_31.png](old_note/COMP2200/week10/img_31.png)

- O(1)

### 스택의 제거

![img_32.png](old_note/COMP2200/week10/img_32.png)

```c++
enum { MAX_NUMS = 8 };

int s_nums[MAX_NUMS];
size_t s_num_count = 0;

int pop()
{
    assert(s_num_count > 0);

    return s_nums[--s_num_count];
}
```

- 빈 스택에서 꺼낼 수 없음

![img_33.png](old_note/COMP2200/week10/img_33.png)

- O(1)

### 스택의 검색

![img_34.png](old_note/COMP2200/week10/img_34.png)

- 시간 복잡도 O(n)
- 젤 위부터 찾을 때 까지 `뒤져야`함
- 중간에 임의 접근 허용X

![img_35.png](old_note/COMP2200/week10/img_35.png)

- pop()을 계속하면서 찾고
- 다시 push()로 넣어줘야 함

![img_36.png](old_note/COMP2200/week10/img_36.png)

- 원상복구

![img_37.png](old_note/COMP2200/week10/img_37.png)

- 빼서 또 다른 스택에 넣고, push 할때 복구
- 뺄 때 50, 40, 30
- 다시 넣을 때 30, 40, 50

![img_38.png](old_note/COMP2200/week10/img_38.png)

- 제거에 O(N), 복구에 O(N)
- O(N) + O(N) = O(N)

### 스택의 용도

![img_39.png](old_note/COMP2200/week10/img_39.png)

- 자료의 순서를 뒤집는데 유용

![img_40.png](old_note/COMP2200/week10/img_40.png)

- 중위 표기법 해석
- 문자열을 해석해서 숫자로 값 계산

![img_41.png](old_note/COMP2200/week10/img_41.png)

- 중위 표기법을 후위 표기법으로 바꾸면 컴퓨터가 쉽게 연산할 수 있음
- 이 때 스택을 이용

![img_42.png](old_note/COMP2200/week10/img_42.png)

- 알고리즘

![img_44.png](old_note/COMP2200/week10/img_44.png)

- 스택에 3,15,18 순서
- 피연산자 /를 만나면 3, 15를 꺼냄
- `나중에 나온 숫자` / `먼저 나온 숫자`
- 15 / 3 = 5
- 5가 다시 스택에 들어감

![img_45.png](old_note/COMP2200/week10/img_45.png)

- 스택에 5, 18 순서
- 피연산자 -를 만나면 5, 18을 꺼냄
- `나중에 나온 숫자` - `먼저 나온 숫자`
- 18 - 5 = 13
- 13이 다시 스택에 들어감

![img_46.png](old_note/COMP2200/week10/img_46.png)

- 글자를 읽는데 실패한 경우(널 문자 만나는 경우)
- 스택에 pop()으로 값을 불러옴

![img_43.png](old_note/COMP2200/week10/img_43.png)

- 재귀함수
- 반복문 + 스택 자료구조 => 재귀 함수 없애기

## 큐

![img_47.png](old_note/COMP2200/week10/img_47.png)

- 자료의 삽입과 삭제에 대한 규칙이 존재
- FIFO(First In First Out)
- 줄을 서는 개념

![img_48.png](old_note/COMP2200/week10/img_48.png)

- 선입 선출

### 원칙상 임의 접근 불가

![img_49.png](old_note/COMP2200/week10/img_49.png)

- 언제나 가장 앞의 자료만 제거 가능

### 비효율적인 큐 구현

![img_50.png](old_note/COMP2200/week10/img_50.png)

- 배열에서 제일 뒤 삽입을 생각

![img_51.png](old_note/COMP2200/week10/img_51.png)

- 배열에서 제일 앞 삭제를 생각

![img_52.png](old_note/COMP2200/week10/img_52.png)

- 당기면 O(n)

![img_53.png](old_note/COMP2200/week10/img_53.png)

- 내부적으로 배열을 사용하되
- 원형 버퍼의 개념을 이용
- O(1)로 삽입, 삭제 가능

### 큐의 삽입

![img_54.png](old_note/COMP2200/week10/img_54.png)

```c++
enum { MAX_NUMS = 8 };

int s_nums[MAX_NUMS];
size_t s_front = 0;
size_t s_back = 0;
size_t s_num_count = 0;

void enqueue(int n)
{
    assert(s_num_count < MAX_NUMS);

    s_nums[s_back] = n;
    s_back = (s_back + 1) % MAX_NUMS;
    ++s_num_count;
}
```

- s_back 위치(맨 뒤)에 값 넣기
- s_back은 다음에 넣을 위치를 가리키기

![img_55.png](old_note/COMP2200/week10/img_55.png)

- 마지막 위치(인덱스 7)를 가리키고 있음

![img_56.png](old_note/COMP2200/week10/img_56.png)

- 인덱스 7에 삽입

![img_57.png](old_note/COMP2200/week10/img_57.png)

- 도돌이표 연산으로 다음 위치 기억
- 인덱스 0으로 돌아감
- 이 다음에 또 집어넣으려고 하면 assert에 걸림, s_num_count == MAX_NUMS라서
- 뭐 하나 삭제하고, 다시 0부터 넣을 수 있음

![img_58.png](old_note/COMP2200/week10/img_58.png)

- 맨 뒤에 줄을 세운다
- O(1)

### 큐의 삭제

![img_59.png](old_note/COMP2200/week10/img_59.png)

```c++
enum { MAX_NUMS = 8 };

int s_nums[MAX_NUMS];
size_t s_front = 0;
size_t s_back = 0;
size_t s_num_count = 0;

void dequeue(int n)
{
    int res;
    
    assert(s_num_count > 0);
    
    res = s_nums[s_front];
    
    s_front = (s_front + 1) % MAX_NUMS;
    --s_num_count;
    
    return res;
}
```

![img_60.png](old_note/COMP2200/week10/img_60.png)

- s_front 위치의 값 저장

![img_61.png](old_note/COMP2200/week10/img_61.png)

- s_front 위치를 다음 위치로 이동

![img_62.png](old_note/COMP2200/week10/img_62.png)

- 맨 앞에서 하나 빼온다
- O(1)

### 큐의 검색

![img_63.png](old_note/COMP2200/week10/img_63.png)

- 하나씩 제거, 원상 복구

![img_64.png](old_note/COMP2200/week10/img_64.png)

- 스택과 다르게 모두 빼야함
- 맨 뒤에만 넣을 수 있어서 ㅠㅠ

![img_65.png](old_note/COMP2200/week10/img_65.png)

- 뺄 때 다른 큐에 넣으면 됨
- 그래서 사실 다른 큐를 바로 써도 되는... 주소는 다르지만

![img_66.png](old_note/COMP2200/week10/img_66.png)

- 모두 삽입과 삭제에서 O(N) + O(N) = O(N)

### 큐의 용도

![img_67.png](old_note/COMP2200/week10/img_67.png)

- 버퍼링
- 데이터 제공자 > 데이터 소비자

## 연결 리스트

![img_68.png](old_note/COMP2200/week10/img_68.png)

- 연결리스트는 메모리에서 연속된 저장 방법에 기초한 자료구조가 아님
- 반면 배열, 스택, 큐는 연속된 저장 방법에 기초함

### 노드

![img_69.png](old_note/COMP2200/week10/img_69.png)

- 요소와 노드는 다른 개념임
- 자료들이 메모리에 산재해 있는 경우 각 자료를 `노드`라고 부름

![img_70.png](old_note/COMP2200/week10/img_70.png)

- 자료가 메모리에 산재하도록 하려면 동적 메모리 할당이 필요함

![img_71.png](old_note/COMP2200/week10/img_71.png)

- 노드 사이의 선후 관계를 별도로 저장함
- 노드에 다음 노드를 가리키는 메모리 주소도 함께 저장함

### 연결 리스트의 삽입

![img_72.png](old_note/COMP2200/week10/img_72.png)

- 10을 저장한 노드에서 다음 노드를 가리키는 포인터 변수 값을 20을 저장한 노드의 주소로 변경
- 20을 저장한 노드에서 다음 노드를 가리키는 포인터 변수 값을 30을 저장한 노드의 주소로 변경(대입)
- O(1)

### 연결 리스트의 제거

![img_73.png](old_note/COMP2200/week10/img_73.png)

- 삭제할 노드의 이전 노드(20을 가리키는 노드)에서 다음 노드를 가리키는 포인터 변수 값을 삭제할 노드의 다음 노드 주소로 변경
- 삭제할 노드에서 다음 노드를 가리키는 포인터 변수 값은 지움(NULL 대입)

### 연결 리스트의 검색

![img_74.png](old_note/COMP2200/week10/img_74.png)

- O(n)
- 헤드부터 시작해서 노드를 하나씩 따라가야 함
- 색인으로 접근 불가능
  - 메모리에 산재했기 때문에 이런 문제가 있음

## 연결 리스트 전체 출력

```c++
typedef struct node {
    int value;
    struct node* next;
} node_t;

void print_node(const node_t* head)
{
    const node_t* current = head;
    
    while (current != NULL) {
        printf("%d\n", current -> value);
        current = current -> next;
    }
}
```

- 연결 리스트는 함수로 만드는 경우가 많음
  - 배열과 다르게 크기가 고정되지 않아, 전역 변수를 쓸 일도 없고, 함수로 구현하는 것이 편함

![img_75.png](old_note/COMP2200/week10/img_75.png)

- 헤드 노드가 NULL이면 연결 리스트에 노드가 없는 것
- 헤드 노드는 연결 리스트의 첫번째 노드의 주소를 저장하는 변수
- 값은 없음, next만 있음

[연결 리스트의 모든 노드를 메모리 할당 해제하는 코드]

![img_76.png](old_note/COMP2200/week10/img_76.png)

```c++
typedef struct node {
    int value;
    struct node* next;
} node_t;

void destroy(node_t* head)
{
    const node_t* current = head;
    
    while (current != NULL) {
        const node_t* next = current -> next;   // 미리 다음 주소를 저장해두고
        free(current);  // 메모리 할당 해제
        current = next;
    }
}

// 사용할 때

destroy(head);
head = NULL;    // head에도 NULL 대입해 사용하지 않는다는 것을 보장함, 실수 방지하는 코드
```

- 함수 인자에서 node_t*가 const가 아닌 이유는 결과적으로 노드를 메모리 할당 해제하려고
  - print_node 함수와 구별되는 차이점 
  - const한 node_t가 메모리 해제되면 개념적으로 이상함
  - node_t의 내부 값은 모두 변하지 않아야하는데, 메모리가 해제되면 제어할 수 없어서 상수를 보장 못하기 때문
  - [질문][후기 강조]

![img_77.png](old_note/COMP2200/week10/img_77.png)

- 할당 해제 전 상황

![img_78.png](old_note/COMP2200/week10/img_78.png)

- p에 대입하는 코드 실행

![img_79.png](old_note/COMP2200/week10/img_79.png)

- p가 NULL이 아니기 때문에 next에 p의 다음 노드인 2를 가진 노드 주소를 대입

![img_80.png](old_note/COMP2200/week10/img_80.png)

- 메모리 할당 해제
- p, head 변수는 여전히 삭제된 노드의 주소값을 가짐
- 이 주소는 이제 유효하지 않은 주소

![img_81.png](old_note/COMP2200/week10/img_81.png)

- p는 next의 주소값을 가지게 됨 ... 반복

![img_82.png](old_note/COMP2200/week10/img_82.png)

- 마지막으로 p의 값이 NULL이 되면 반복문 종료
- 그리고 head 변수에도 NULL을 대입!

## 연결 리스트 삽입

![img_83.png](old_note/COMP2200/week10/img_83.png)

```c++
typedef struct node {
    int value;
    struct node* next;
} node_t;

void insert_front(node_t** phead, int n)
{
   node_t* new_node = (node_t*)malloc(sizeof(node_t));
   new_node->value = n;
   new_node->next = *phead;
   *phead = new_node;
}
```

- 언제나 head에 추가하는 코드
- O(1)

![img_84.png](old_note/COMP2200/week10/img_84.png)

- 함수 매개변수 phead는 연결 리스트의 헤드의 주소를 저장하는 변수

![img_85.png](old_note/COMP2200/week10/img_85.png)

- 연결 리스트가 빈 경우 헤드가 없음, 따라서 phead의 값은 NULL

![img_86.png](old_note/COMP2200/week10/img_86.png)

- 새로운 노드를 동적할당으로 생성하고 값 대입
- 새로운 노드의 next에 헤드 노드의 주소 대입
  - 지금은 헤드 노드가 없기 때문에 NULL 대입
  - 헤드 노드의 주소는 phead에 저장되어 있음

![img_87.png](old_note/COMP2200/week10/img_87.png)

- 헤드 노드의 주소를 새로운 노드의 주소로 변경
- phead에 새로운 노드의 주소를 저장
- phead: 헤드 노드의 주소를 저장하는 변수

[왜 함수가 이중 포인터를 받는가?]

![img_88.png](old_note/COMP2200/week10/img_88.png)

- 함수 내에서 헤드 노드의 주소값을 가지는 포인터 변수의 값을 변경해야함
- 헤드 노드의 주소값을 가지는 포인터 변수는 함수 밖에서 선언
- 만약에 그냥 포인터를 사용하면, 헤드 노드의 주소값을 복사해서 함수 내부에서 사용함 이를 변경해봤자, 지역변수로 변경되어 함수 밖에서는 변경되지 않음
- 함수 밖의 헤드 노드의 주소값을 가지는 포인터 변수는 여전히 NULL값을 가짐
- 지역변수 phead는 잃어버리게 됨, 따라서 함수 밖에서 헤드 노드가 올바른 값을 가지지 않기 때문에, 연결 리스트가 어떤 주소에서 부터 시작하는 지 알 수 없고, 메모리 누수의 원인이 됨
  - 시작을 알 수 없어서 순회하면서 할당 해제도 불가능

## 연결 리스트 오름차순으로 삽입

![img_89.png](old_note/COMP2200/week10/img_89.png)

```c++
typedef struct node {
    int value;
    struct node* next;
} node_t;

void insert_sorted(node_t** phead, int n)
{
   node_t** pp;
   node_t* new_node;

   new_node = (node_t*)malloc(sizeof(node_t));
   new_node->value = n;
   
   pp = phead;  // 헤드 노드의 주소값 저장, *phead == 첫번째 노드
   while (*pp != NULL) {
       if ((*pp)->value >= n) {  // n: 새로 넣을 값, (*pp)->value: 현재 노드의 값
           break;   // 노드를 순회하다가, 새로 넣을 값보다 큰 값이 나오면 멈춤
       }
       pp = &((*pp)->next);
   }
   new_node->next = *pp;    // *pp: 현재 노드의 주소값, 새로 추가할 노드의 next에 현재 노드의 주소값 대입
   *pp = new_node;  // 새로 추가할 노드의 주소값을 이전 노드의 next에 대입
}
```

[빈 열결리스트에 처음으로 노드를 추가하기]

![img_90.png](old_note/COMP2200/week10/img_90.png)

- 변수 선언 코드
- head
  - 값: NULL
  - 주소: 0x1000
- new_node
  - 값: 미정
  - 주소: 0x200

![img_91.png](old_note/COMP2200/week10/img_91.png)

- pp에 phead의 주소값을 대입, 이후 phead를 쓰지 않아서 그림에서 phead 생략
- pp
  - 값: 0x1000
- new_node
  - value: 2
    - 주소: 0x200
  - next: ???(쓰레기값)
    - 주소: 0x204

![img_92.png](old_note/COMP2200/week10/img_92.png)

- *pp == NULL이면 빈 연결 리스트
- *pp를 하면 pp의 값(어떤 주소)으로 리디렉션
  - 주소 0x1000에 있는 값은 NULL
- 반복문 넘어감

- new_node->next에 *pp를 대입
- new_node
  - value: 2
    - 주소: 0x200
  - next: NULL
    - 주소: 0x204

![img_93.png](old_note/COMP2200/week10/img_93.png)

- *pp를 하면 pp의 값(0x1000)으로 리디렉션
  - 0x1000에 있는 값을 0x200으로 변경
- pp의 값은 head 노드의 주소를 저장하는 포인터의 주소가 저장
- *pp는 head 노드의 주소 == value가 2인 노드의 주소

[현재 상황]

- pp
  - 값: 0x1000
- *pp
  - 값: 0x200
  - 주소: 0x1000
- head
  - value: 2
    - 주소: 0x200
  - next: NULL
    - 주소: 0x204

- head의 값은 새로 추가한 node
- 연결리스트의 head가 새로 추가한 node가 됨

![img_94.png](old_note/COMP2200/week10/img_94.png)

- *pp를 하면 pp의 값(0x1000)으로 리디렉션
  - *pp의 값은 0x200, 헤드 노드의 주소
- 0x200 주소의 노드
  - value: 2
    - 주소: 0x200
  - next: NULL
    - 주소: 0x204
- 2 >= 5로 조건을 만족하지 못함

- *pp -> next 
  - 값: NULL
  - 주소: 0x204
    - 0x200 주소에 노드에서 int 만큼 이동
    - 0x200 주소의 노드의 next의 주소
- pp에 0x204를 대입
- pp
  - 값: 0x204
- pp의 값은 값2를 가지는 노드의 next 변수의 주소
- *pp는 next 변수의 값 == 다음 노드의 주소 == NULL

![img_95.png](old_note/COMP2200/week10/img_95.png)

- *pp는 pp의값 0x204로 리디렉션
  - 0x204의 값은 NULL

- new_node의 next값에 *pp 대입
  - NULL 대입

- new_node
  - value: 5
    - 주소: 0x300 
  - next: NULL
    - 주소: 0x304

- 연결 리스트를 순회했는데, 나(n, 새로 추가한 값)보다 큰 값을 보지 못했음
- 따라서 가장 마지막에 추가해야함
- 새로운 노드의 next 값에 NULL 대입
  - *pp == NULL이기 때문
  - pp는 2값을 가지는 노드의 next 주소값을 가지고 있음
  - 지금까지는 2값을 가지는 노드가 마지막 노드였음, next의 값은 NULL

![img_96.png](old_note/COMP2200/week10/img_96.png)

- *pp로 pp의 값 0x204로 리디렉션
  - 주소 0x204에 있는 값을 0x300으로 변경

- 새로운 노드의 주소값을 이전 노드(값 2를 가지는 노드)의 next에 대입

- 2를 가진 노드
  - value: 2
    - 주소: 0x200
  - next: 0x300
    - 주소: 0x204
      - 0x200 주소에 노드에서 int 만큼 이동
      - 0x200 주소의 노드의 next의 주소

[현재 상황]

- head
  - 값: 0x1000
- *head:
  - 값: 0x200
- 첫번째 노드
  - value: 2
    - 주소: 0x200
  - next: 0x300
    - 주소: 0x204
- 두번째 노드
  - value: 5
    - 주소: 0x300
  - next: NULL
    - 주소: 0x304

![img_97.png](old_note/COMP2200/week10/img_97.png)

[loop1]
- pp: 0x1000
- *pp: 0x1000 주소에 리디랙션, 첫번째 노드의 주소 0x200

- *pp가 NULL이 아니라 조건문 검사
- 0x200주소에서 구조체 멤버 value에 접근하면 값은 2
- 조건문을 만족하지 못함

- pp
  - 값: 0x204 (첫번째 노드의 멤버 next의 주소)
  - 주소: 의미 없음

[loop2]

- *pp: 0x204 주소에 리디렉션
  - 0x300 
  - 2값을 가지는 노드의 next의 주소값에서 역참조하니까 2값을 가지는 노드의 next == 5값을 가지는 노드의 주소
- *pp->value
  - 0x300 주소의 구조체 멤버 value의 값은 5
  - 즉 다음 노드로가서 미리 값을 본다고 생각하면 좀 이해가 쉬움
- 조건문을 만족해 break

![img_98.png](old_note/COMP2200/week10/img_98.png)

- 새로 추가할 3의 값을 가지는 new_node의 next값에 *pp(5값을 가지는 노드의 주소)대입

- new_node
  - value: 3
    - 주소: 0x400
  - next: 0x300
    - 주소: 0x404

![img_99.png](old_note/COMP2200/week10/img_99.png)

- *pp: 0x204 주소에 리디렉션
  - 2값을 가진 node의 멤버 변수 next의 값을 3값을 가진 node의 주소로 변경

- 첫번째 노드
  - value: 2
    - 주소: 0x200
  - next: 0x400
    - 주소: 0x204

- new_node
  - value: 3
    - 주소: 0x400
  - next: 0x300
    - 주소: 0x404

- 두번째 노드
  - value: 5
    - 주소: 0x300
  - next: NULL
    - 주소: 0x304

## 연결 리스트 삭제

![img_100.png](old_note/COMP2200/week10/img_100.png)

```c++
typedef struct node {
    int value;
    struct node* next;
} node_t;

void remove(node_t** phead, int n)
{
   node_t** pp;
   
   pp = phead;
   while (*pp != NULL) {
    if ((*pp)->value == n) {    // 현재 노드의 next(다음 노드의 주소)에서 값을 비교, 삭제할 노드가 다음 노드라는 것을 확인
           node_t* temp = *pp;  // 삭제할 노드의 주소 저장
           *pp = (*pp)->next;   // 현재 노드의 next값을 삭제할 노드의 next값으로 대입(다음 다음 노드의 주소)
           free(temp);  // 삭제할 노드 메모리 할당 해제
           break;
       }
       pp = &((*pp)->next);
   }         
}
```

[연결 리스트에서 첫번째 노드 삭제하기]

![img_101.png](old_note/COMP2200/week10/img_101.png)

- pp: 헤드 노드의 주소값을 가짐
- *pp: 헤드 노드의 값 == 첫번째 노드의 주소
  - head 노드는 next 변수와 개념이 동일함, 첫번째 노드의 주소값을 가짐
  - 0번째 노드인데 value는 없고, next는 첫번째 노드
- 헤더 노드(현재 노드)에서 다음 노드(첫번째 노드)의 값을 확인했더니, 첫번째 노드가 삭제 대상

![img_102.png](old_note/COMP2200/week10/img_102.png)

- 바로 삭제하면, 첫번째 노드의 next값을 알 수 없음, 즉 다음 다음 노드의 주소를 알 수 없음
- 따라서 나중에 삭제하기 위해 임시 저장

![img_103.png](old_note/COMP2200/week10/img_103.png)
![img_113.png](old_note/COMP2200/week10/img_113.png)

- 헤더 노드(현재 노드)의 next값을 다음 다음 노드의 주소로 변경

![img_104.png](old_note/COMP2200/week10/img_104.png)

- 삭제
- 동적 메모리 할당 해제

[연결 리스트에서 마지막 노드 삭제하기]

![img_105.png](old_note/COMP2200/week10/img_105.png)

- 헤더 노드(현재 노드)의 값 == *pp
  - 헤더 노드에 next라는 멤버가 존재한다고 생각하면, 다음 노드의 주소를 의미함
  - 다음 노드의 주소에서 value 값에 참조해서 비교했더니, 삭제할 노드가 아님
- pp에 다음 노드의 next의 주소를 저장

![img_106.png](old_note/COMP2200/week10/img_106.png)

- 3을 가지는 노드(현재 노드)에서 next로(다음 노드)의 값을 비교했더니, 삭제 대상임

![img_107.png](old_note/COMP2200/week10/img_107.png)

- 임시로 저장

![img_108.png](old_note/COMP2200/week10/img_108.png)

- 다음 노드의 next값은 NULL
  - NULL 값을 pp에 저장
  - 3을 가진 노드의 next값을 NULL로 변경

![img_109.png](old_note/COMP2200/week10/img_109.png)

- 지우고 메모리 할당 해제

## 연결 리스트의 용도

![img_110.png](old_note/COMP2200/week10/img_110.png)

- 배열의 한계를 극복
- 필요할 때마다 노드를 추가하고,삭제 즉 길이에서 자유로움

![img_111.png](old_note/COMP2200/week10/img_111.png)

- CPU의 캐시 메모리는 연속된 메모리에 있는 데이터를 빠르게 읽음
- 배열이 굉장히 캐시 메모리에서 유리함
- 그래서 동적 할당 `배열`을 많이 씀
- 커널 모드 프로그래밍에서는 연결 리스트를 많이 씀
  - 미리 메모리를 할당하고, 필요에 따라 그 메모리에서 사용하는 부분/사용하지 않는 부분을 연결 리스트로 구현
  - 이 기법을 `메모리 풀`이라고 부름
[후기 강조]

## 이중 연결 리스트

![img_112.png](old_note/COMP2200/week10/img_112.png)

- 앞, 뒤로 검색 가능
- 노드 크기가 커지는 단점이 있음
