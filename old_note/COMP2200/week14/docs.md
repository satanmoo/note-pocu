# Week14

## <tgmath.h> and `Generic Selection`

### Drawbacks and Limitation of C99 <tgmath.h>

![img.png](old_note/COMP2200/week14/img.png)

- 컴파일러가 구현해준 것
    - 표준에서 implementation-defined
- 프로그래머가 직접 매크로를 만들 방법이 없었음

### C11 generic selection

- Programmers can also directly implement this macro
    - this macro == <tgmath.h> macro
- Use `_Generic` keyword

[**Note**]

- `Selection`(in generic selection) means that you can choose which macro to use

### `_Generic` Keyword

![img_1.png](old_note/COMP2200/week14/img_1.png)

- It is a method to switch the associated list(`<연관목록>`) based on the type of the controlling expression(`<제어 표현식>`).
- In **complie time** it chooses expression
  - 컴파일 타임 중요!! [시험]
- It is commonly used as a `replacement list` for macro functions
    - Ex) #define <identifier> <replacement list>

### <tgmath.h> example

![img_2.png](old_note/COMP2200/week14/img_2.png)

- The _Generic replacement list works similarly to a switch-case statement
- Depending on the type of the parameter X, a different function is called at runtime
- For example, at compile time, if X is of type long double, the ceill function will be called
    - ceil(X) -> ceill(X)

### associated list

![img_3.png](old_note/COMP2200/week14/img_3.png)

- Form of associated list
    - Data type(<자료형>): multiple can be used
    - default: only one can be used
- Replacement Rules
    - If the type of the `controlling expression` is in the `associated list`, replace it with the corresponding
      expression
    - If the type is not in the associated list but there is a `default:`, replace it with the corresponding expression
    - If there is no match and no `default:`, the code will not compile
        - `complie error`
        - 시험에 나올 삘

## static assert

- Understanding the Context of Static/Dynamic
    - `Dynamic` refers to actions performed during runtime
    - While `static` refers to actions performed at compile-time or outside of runtime

### assert is programmers best practice

![img_4.png](old_note/COMP2200/week14/img_4.png)

- It can check pre-condition of function
- It helps to catch mistakes early during development

### Limitation of assert

![img_5.png](old_note/COMP2200/week14/img_5.png)

![img_6.png](old_note/COMP2200/week14/img_6.png)

![img_7.png](old_note/COMP2200/week14/img_7.png)

- compile done

**Not** Porting can also be outsourced

![img_8.png](old_note/COMP2200/week14/img_8.png)

![img_9.png](old_note/COMP2200/week14/img_9.png)

![img_10.png](old_note/COMP2200/week14/img_10.png)

- In C standard `int` should be larger than `short`. Therefore, there is no guarantee that `int` is always 4 bytes

### Best Solution: `static assert`

![img_11.png](old_note/COMP2200/week14/img_11.png)

- The conditions for the `assert `must be evaluated at compile-time.
- Conditions that can only be evaluated during runtime cannot be evaluated at compile-time.
    - The assert condition for division by zero cannot be evaluated at compile-time

![img_12.png](old_note/COMP2200/week14/img_12.png)

- the data types on the platform can be evaluated at compile-time.

![img_13.png](old_note/COMP2200/week14/img_13.png)

- `#define static_assert _Static_assert` is a macro defined to make `_Static_assert` easier to use.

![img_14.png](old_note/COMP2200/week14/img_14.png)

![img_15.png](old_note/COMP2200/week14/img_15.png)

- Static assert must include an error message

### QUIZ

```c++
#include <assert.h>

void check(int n)
{
    static_assert(n > 5, "Oh noez!");
}

int main()
{
    int x = 3;
    check(x);

    return 0;
}
```

- `static_assert`'s expression must be evaluated at compile-time(it requires a constant expression)
    - otherwise a compile-time error occurs
- expression n > 5 is not constant expression
- `COMPILE ERROR`

### BEST PRACTICE

![img_16.png](old_note/COMP2200/week14/img_16.png)

## _Noreturn

![img_17.png](old_note/COMP2200/week14/img_17.png)

- (농담) 한글로 `주사위는 던져졌다`

![img_18.png](old_note/COMP2200/week14/img_18.png)

![img_19.png](old_note/COMP2200/week14/img_19.png)

![img_20.png](old_note/COMP2200/week14/img_20.png)

![img_21.png](old_note/COMP2200/week14/img_21.png)

- `void` keyword include the concept of return
    - just no return value
    - after function finish execution return to caller
- '_Noreturn' macro does not include the concept of return

### Why use `_Noreturn`?

![img_22.png](old_note/COMP2200/week14/img_22.png)

![img_23.png](old_note/COMP2200/week14/img_23.png)

![img_24.png](old_note/COMP2200/week14/img_24.png)

- The role of these functions is to terminate thread or program

![img_25.png](old_note/COMP2200/week14/img_25.png)

![img_26.png](old_note/COMP2200/week14/img_26.png)

![img_27.png](old_note/COMP2200/week14/img_27.png)

![img_28.png](old_note/COMP2200/week14/img_28.png)

- if function which use `_Noreturn` returns, it results in undefined behavior

![img_29.png](old_note/COMP2200/week14/img_29.png)

![img_30.png](old_note/COMP2200/week14/img_30.png)

![img_31.png](old_note/COMP2200/week14/img_31.png)

## Memory Alignment

### Pattern of memory address allocated by malloc

![img_32.png](old_note/COMP2200/week14/img_32.png)

![img_33.png](old_note/COMP2200/week14/img_33.png)

![img_34.png](old_note/COMP2200/week14/img_34.png)

![img_35.png](old_note/COMP2200/week14/img_35.png)

- Memory with a starting address that is a multiple of 4 is called `4 Byte aligned memory`

### Is there a need for programmer to manually align memory?

![img_36.png](old_note/COMP2200/week14/img_36.png)

1. performance improvement
2. program does not work without alignment

## aligned_alloc()

![img_37.png](old_note/COMP2200/week14/img_37.png)

- parameter `size` must be multiples of parameter `alignment`

![img_38.png](old_note/COMP2200/week14/img_38.png)

- The takeaway here is that there is no need to set parameter values that would cause failure conditions. Make sure to
  provide parameters that meet the requirements

![img_39.png](old_note/COMP2200/week14/img_39.png)

- 포인터 변수 p2에 aligned_alloc()을 사용했고, 이는 문법상 오류도 없고 정의된 결과대로 작동함
    - 하지만 4096개의 int 원소를 가진 배열을 할당하는 방법
- 원래의 의도는 int*로 int 하나를 담을 수 있는 메모리를 할당하는 것이 목적이라 잘못된 방법

![img_40.png](old_note/COMP2200/week14/img_40.png)

- 올바른 방법은 다음과 같음
- 올림 함수(align_up())를 사용해서 aligned_alloc()의 매개변수 size의 크기를 구함
    - 예를 들어 align_up(4096, size)를 호출할 때 아래와 같음
        - size == 0, output: 0
        - size == 1, output: 4096
        - size == 4095, output: 4096
        - size == 4096, output: 4096
        - size == 4097, output: 8182
    - 이렇게 경계값을 통해 확인할 수 있음
- p의 주소를 출력했을 때 `000`으로 끝나기 때문에 4096의 배수로 정렬됨을 확인할 수 있음

## _Alignas Keyword

![img_41.png](old_note/COMP2200/week14/img_41.png)

![img_42.png](old_note/COMP2200/week14/img_42.png)

- aligned_alloc()는 동적 할당에 사용
- 스택 메모리에 할당할 때는 `_Alignas` 키워드 사용
- 스택 메모리의 경우 컴파일 타임에 결정하기 때문에 메크로 함수로 지시해야함

![img_43.png](old_note/COMP2200/week14/img_43.png)

- num2만 4096 바이트 정렬
- num1, num3는 4바이트 정렬

## align struct

![img_44.png](old_note/COMP2200/week14/img_44.png)

- 구조체 정렬에 두가지 방법이 있음
    1. 각 멤버를 각기 다른 크기로 정렬
    2. 모든 멤버를 같은 크기로 정렬
- 구조체 변수를 선언할 때, 변수의 시작 주소도 정렬 가능

### CASE1: 멤버를 각기 다른 크기로 정렬

![img_45.png](old_note/COMP2200/week14/img_45.png)

- `_Alignof()`의 결과가 4096인 이유
    - 첫번째 멤버 변수 num이 4096 바이트에 정렬됬기 때문
- `data.num`: 4096 바이트 정렬
    - 주소를 출력했을 때 끝이 `000`으로 끝남
- `data.dummy`: 1024 바이트 정렬
    - 주소를 출력했을 때 끝이 `400`으로 끝남
- 구조체 data의 크기는 4096
    - 4096의 배수 주소에 `data.num`이 정렬되고 4바이트 차지
    - `data.num`의 주소에서 1024 건너뛰어서, 1024의 배수 주소에서 `data.dummy`가 40바이트 차지

### CASE2: 멤버를 동일한 크기로 정렬

![img_46.png](old_note/COMP2200/week14/img_46.png)

- 슬라이드에서는 구조체 정렬을 적용하지 않은 경우와 비교
- 구조체의 멤버 변수 오직 하나에 alignas 키워드를 붙이면, 모든 멤버가 같은 크기로 정렬됨
    - 코드의 가독성은 좋지 않음

- `_Alignof(aligned_data)`의 결과가 4096인 이유
    - 첫번째 멤버 변수 num이 4096 바이트에 정렬됬기 때문
- `aligned_data.num`: 4096 바이트 정렬
    - 주소를 출력했을 때 끝이 `000`으로 끝남
- `aligned_data.dummy`: 4096 바이트 정렬
    - 주소를 출력했을 때 끝이 `000`으로 끝남
- 구조체 data의 크기는 8192
    - 4096의 배수 주소에 `data.num`이 정렬되고 4바이트 차지
    - `data.num`의 주소에서 4096 건너뛰어서, 4096의 배수 주소에서 `data.dummy`가 40바이트 차지

### 구조체 변수를 선언할 때, 변수의 시작 주소도 정렬 가능

![img_47.png](old_note/COMP2200/week14/img_47.png)

- 구조체 멤버 num, dummy는 메모리에 연속적으로 배치
    - 4096의 배수 주소에 `data.num`이 정렬되고 4바이트 차지
    - `data.num`뒤에 연속으로 `data.dummy가 40바이트 차지
    - 정렬하기 때문에 총 4096 차지

### 동적 할당을 하는 경우 주의

![img_48.png](old_note/COMP2200/week14/img_48.png)

- `malloc()` does not account for structure memeber alignment
    - it just only allocates requested size of memeory
- Instead, use `aligned_alloc()`
    - memory size(2nd parameter) must be a multiple of alignmnet size(1st parameter)
    - create a rounging-up function like `align_up()`

- below slid show example

![img_49.png](old_note/COMP2200/week14/img_49.png)

- correct example

```c++
#include <stdio.h>
#include <stdlib.h>
#include <stdalign.h>
#include <string.h>

typedef struct {
    alignas(4096) int num;
    alignas(1024) int dummy[10];
} data_t;

int main()
{
    // Ensure the size is a multiple of alignment
    size_t size = sizeof(data_t);
    size_t alignment = alignof(data_t);

    // Allocate memory using aligned_alloc
    data_t* data = aligned_alloc(alignment, size);
    if (data == NULL) {
        perror("aligned_alloc failed");
        return EXIT_FAILURE;
    }

    data->num = 1;
    memset(data->dummy, 2, sizeof(int) * 10);

    printf("data address: %p\n",
           (void*)data);  // check if the address end in '000' (4096 == 0x1000, An address ending in 000 indicates that it is a multiple of 0x1000, meaning it is aligned to 4096 bytes.)
    printf("num address: %p\n", (void*)&data->num); // The address of the first member of structure is same as the structure's address
    printf("dummy address: %p\n", (void*)&data->dummy); // check if the address end in `400' (1024 == 0x400, An address ending in 400 indicates that it is aligned to 1024 bytes.)

    free(data);
    return 0;
}
```

- incorrect example

```c++
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    alignas(4096) int num;
    alignas(1024) int dummy[10];
} data_t;

int main() {
    // Allocate memory using malloc
    data_t *data = malloc(sizeof(data_t));
    if (data == NULL) {
        perror("malloc failed");
        return EXIT_FAILURE;
    }

    data->num = 1;
    memset(data->dummy, 0, sizeof(int) * 10);

    printf("data address: %p\n", (void*)data);
    printf("num address: %p\n", (void*)&data->num);
    printf("dummy address: %p\n", (void*)&data->dummy);

    free(data);
    return 0;
}
```

### how to check how many bytes variable is aligned to?

![img_50.png](old_note/COMP2200/week14/img_50.png)

- The simplest way is to use the modulus operation to divide the variable’s address by the alignment value and check if
  the remainder is 0

## _Alignof()

![img_51.png](old_note/COMP2200/week14/img_51.png)

![img_52.png](old_note/COMP2200/week14/img_52.png)

- _Aligeof(expression)
- alingof(expression)

## Multi Threading

![img_53.png](old_note/COMP2200/week14/img_53.png)

![img_54.png](old_note/COMP2200/week14/img_54.png)

![img_55.png](old_note/COMP2200/week14/img_55.png)

![img_56.png](old_note/COMP2200/week14/img_56.png)

![img_57.png](old_note/COMP2200/week14/img_57.png)

![img_58.png](old_note/COMP2200/week14/img_58.png)

![img_59.png](old_note/COMP2200/week14/img_59.png)

![img_60.png](old_note/COMP2200/week14/img_60.png)

![img_61.png](old_note/COMP2200/week14/img_61.png)

- Supporting multithreading in C11 is conceptually strange

### An operating system that manages multithreading

![img_62.png](old_note/COMP2200/week14/img_62.png)

![img_63.png](old_note/COMP2200/week14/img_63.png)

- Multithreading was the responsibility of the operating system.
- Not supported at language level

![img_64.png](old_note/COMP2200/week14/img_64.png)

- The operating system is responsible for supervising multithreading.
    - By analogy, the conductor of an orchestra

![img_65.png](old_note/COMP2200/week14/img_65.png)

- NON portable
    - It is platform dependent because it uses functions provided by the operating system.
    - At code use `#ifdef` macro

![img_66.png](old_note/COMP2200/week14/img_66.png)

- After C11
    - PORTABLE!

### Difficulties with multithreading programs

![img_67.png](old_note/COMP2200/week14/img_67.png)

![img_68.png](old_note/COMP2200/week14/img_68.png)

![img_69.png](old_note/COMP2200/week14/img_69.png)

- at cpu register

![img_70.png](old_note/COMP2200/week14/img_70.png)

- store at memory

![img_71.png](old_note/COMP2200/week14/img_71.png)

![img_72.png](old_note/COMP2200/week14/img_72.png)

![img_73.png](old_note/COMP2200/week14/img_73.png)

![img_74.png](old_note/COMP2200/week14/img_74.png)

![img_75.png](old_note/COMP2200/week14/img_75.png)

![img_76.png](old_note/COMP2200/week14/img_76.png)

- Race Condition

![img_77.png](old_note/COMP2200/week14/img_77.png)

![img_78.png](old_note/COMP2200/week14/img_78.png)

![img_79.png](old_note/COMP2200/week14/img_79.png)

- Locks decrease performance

![img_80.png](old_note/COMP2200/week14/img_80.png)

- Atomic operations are safe in a multithreading environment even without locks.

- Conditions are required for atomic operations to be possible.
    1) Basic data type
        - Not possible for complex data types (structures)
    2) Simple calculation

- The reason this condition occurs is because atomic operations are supported by the CPU itself.
- There is an special instruction that makes simple operations performed on the CPU atomic.

## Atomic

![img_81.png](old_note/COMP2200/week14/img_81.png)

![img_82.png](old_note/COMP2200/week14/img_82.png)

- The core concept of atomic is to group operations such as load, update, and store into one indivisible operation.

![img_83.png](old_note/COMP2200/week14/img_83.png)

![img_84.png](old_note/COMP2200/week14/img_84.png)

![img_85.png](old_note/COMP2200/week14/img_85.png)

![img_86.png](old_note/COMP2200/week14/img_86.png)

![img_87.png](old_note/COMP2200/week14/img_87.png)

![img_88.png](old_note/COMP2200/week14/img_88.png)

- You can use the atomic keyword at the compiler level (the `__STDC_NO_ATOMICS__` macro is not defined)

- However the hardware-level CPU does not support atomic operations Lock can be used internally instead at the
  compiler (language) level.

## _Thread_local

![img_89.png](old_note/COMP2200/week14/img_89.png)

- Fundamental question: Why share memory between threads?

![img_90.png](old_note/COMP2200/week14/img_90.png)

- Shouldn't each thread occupy its own memory?

![img_91.png](old_note/COMP2200/week14/img_91.png)

![img_92.png](old_note/COMP2200/week14/img_92.png)

- Programmers could use dynamic allocation to occupy memory for each thread.
- However, in the case of static variables in the file scope, there was no way to separately occupy memory for each thread.

![img_93.png](old_note/COMP2200/week14/img_93.png)

![img_94.png](old_note/COMP2200/week14/img_94.png)

- Internally, a copy of the variable is created for each thread.

![img_95.png](old_note/COMP2200/week14/img_95.png)

![img_96.png](old_note/COMP2200/week14/img_96.png)

