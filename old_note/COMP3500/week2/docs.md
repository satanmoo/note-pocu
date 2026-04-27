# Week2

## 재귀 함수

![img.png](old_note/COMP3500/week2/images/img.png)

## 재귀 함수의 간단한 에: 피보나치 수열

![img_1.png](old_note/COMP3500/week2/images/img_1.png)

![img_2.png](old_note/COMP3500/week2/images/img_2.png)

![img_3.png](old_note/COMP3500/week2/images/img_3.png)

## 재귀 함수의 장단점

![img_4.png](old_note/COMP3500/week2/images/img_4.png)

- 모든 재귀함수는 반복문으로 작성할 수 있음

![img_5.png](old_note/COMP3500/week2/images/img_5.png)

- 스택 오버플로
- 함수 호출 오버헤드

## 재귀함수는 가독성이 좋음

![img_6.png](old_note/COMP3500/week2/images/img_6.png)

## 꼬리 재귀

### 꼬리 호출

![img_7.png](old_note/COMP3500/week2/images/img_7.png)

- 조건1:
    - 함수 코드 제일 마지막에서 다른 함수 호출
- 조건2:
    - 그 이후에 실행하는 명령어가 없음

- 2가지 조건을 만족할 때 호출자(함수)의 스택 프레임을 유지하는게 실익이 있을까?

![img_8.png](old_note/COMP3500/week2/images/img_8.png)

- 스택 프레임이 존재하는 이유에 대해 고민해보자
    - 호출한 함수가 반환되면 스택 프레임이 유지되면서 저장했던 값과 이후 연산을 하기 위해 필요
- 꼬리 호출의 경우 함수 코드 제일 마지막에서 호출한 함수를 반환하고 더 이상 연산이 없음
    - 따라서 기존 함수의 스택 프레임을 유지할 필요없음

![img_9.png](old_note/COMP3500/week2/images/img_9.png)

- 컴파일러 최적화: TCO
    - 프로그래밍 언어, 컴파일러, VM에 따라 달라짐

### 꼬리 재귀는 꼬리 호출의 특수한 경우

![img_10.png](old_note/COMP3500/week2/images/img_10.png)

- 꼬리 호출에 적용하는 최적화 그대로 적용 가능

### 꼬리 재귀 예시: 팩토리얼 재귀 함수

![img_11.png](old_note/COMP3500/week2/images/img_11.png)

- 이 함수는 꼬리 재귀일까?
    - NO!!!

- 마지막 줄에서 다른 함수를 호출하는 조건1은 만족
- 근데 반환값으로 이후 연산을 해서 조건2를 만족 X
    - 즉 함수 호출이 마지막 명령어는 아니죠~

![img_12.png](old_note/COMP3500/week2/images/img_12.png)

- 꼬리 재귀로 수정해보자

![img_13.png](old_note/COMP3500/week2/images/img_13.png)

- 꼬리 재귀는 가독성이 안 좋음

![img_14.png](old_note/COMP3500/week2/images/img_14.png)

- 꼬리 재귀로 작성하는 이유의 대부분은 TCO 최적화
    - 하지만 꼬리 재귀 최적화를 지원하지 않는 환경이라면?
    - 안 돼도 의미는 있어요. 꼬리 재귀는 반복문으로 쉽게 변경할 수 있음

![img_15.png](old_note/COMP3500/week2/images/img_15.png)

## 코드보기: 재귀 함수로 총합 구하기

```java
package academy.pocu.comp3500samples.w02.sumrecursive;

public class Program {
    public static void main(String[] args) {
        int sum = sumRecursive(10);

        System.out.println(sum); // 55

        sum = sumRecursive(100);

        System.out.println(sum); // 5050

        sum = sumRecursive(1000);

        System.out.println(sum); // 500500

        sum = sumRecursive(100000); // STACK OVERFLOW

        System.out.println(sum);
    }

    private static int sumRecursive(int n) {
        if (n <= 1) {
            return n;
        }

        return n + sumRecursive(n - 1);
    }
}
```

- 꼬리 재귀가 아닌 그냥 재귀로 1..n 합 구하기
- n의 값이랑 콜스택이 정비례
    - n의 값이 커지면 스택오버플로

```java
package academy.pocu.comp3500samples.w02.sumtailrecursive;

public class Program {
    public static void main(String[] args) {
        int sum = sumTailRecursive(10, 0);

        System.out.println(sum); // 55

        sum = sumTailRecursive(100, 0);

        System.out.println(sum); // 5050

        sum = sumTailRecursive(1000, 0);

        System.out.println(sum); // 500500

        sum = sumTailRecursive(100000, 0); // ??

        System.out.println(sum);
    }

    private static int sumTailRecursive(int n, int sum) {
        if (n <= 0) {
            return sum;
        }

        return sumTailRecursive(n - 1, sum + n);
    }
}
```

- 꼬리 재귀로 구현
- Java 에서 TCO 지원 안 하기 때문에 스택 오버플로는 여전히 발생함..

## 복습 퀴즈: 재귀

- 위 함수가 있습니다. puff(4, 6, 4)를 실행했을 때 최대 스택 프레임 깊이는 무엇인가요?

```java
public static void puff(int n, int a, int b) {
    if (n <= 0) {
        return;
    }

    System.out.println(String.format("%d %d %d", n, a, b));

    puff(n - 3, a, b + n);
    puff(n - 1, b, a + n);
    puff(n - 2, b, a + n);
}
```

- 6
- puff를 호출하는 함수의 콜스택도 포함해야함

## 주먹구구식 알고리듬

- brute force

![img_16.png](old_note/COMP3500/week2/images/img_16.png)

- 모든 가능한 경우의 수를 시도하는 알고리듬

![img_17.png](old_note/COMP3500/week2/images/img_17.png)

- 효율성을 고려하지 않음
    - 어떤 문제를 해결하는 법은 주먹구구식 알고리듬밖에 없는 경우도 있음

## 완전(exhaustive) 검색

![img_18.png](old_note/COMP3500/week2/images/img_18.png)

- 배열 끝까지 봐야함
    - 시간복잡도 O(N)

![img_19.png](old_note/COMP3500/week2/images/img_19.png)

- 여기 알고리듬은 기본으로 1분 안에 작성할 수 있어야함
    - 시험에 나올수도..?

![img_20.png](old_note/COMP3500/week2/images/img_20.png)

- 보안 분야가 주먹구구식 알고리듬의 느림에 의존함

## 주먹구구식 비밀번호 깨기

![img_21.png](old_note/COMP3500/week2/images/img_21.png)

![img_22.png](old_note/COMP3500/week2/images/img_22.png)

- 자물쇠 풀기 생각해보셈

![img_23.png](old_note/COMP3500/week2/images/img_23.png)

- 비밀번호 자릿수 N이 늘어나면 시간복잡도 기하급수적으로 증가
    - exponential growth
    - 그래서 비밀번호를 잘 지으려면? 최대한 길게짓자!!!
        - 중간에 대소문자를 섞니, 특수문자를 섞니 즉 K 보다 N이 훨씬 시간복잡도에 영향이 크다

## 외판원 문제(traveling salesman problem)

![img_24.png](old_note/COMP3500/week2/images/img_24.png)

![img_25.png](old_note/COMP3500/week2/images/img_25.png)

- 모든 경우의수(순열)에 따라 시간복잡도가 결정
    - O(N!)
    - exponential growth

## 기하급수적 증가 알고리듬의 문제점

![img_26.png](old_note/COMP3500/week2/images/img_26.png)

- 너무 느려서 실무에 사용할 수 없음

![img_27.png](old_note/COMP3500/week2/images/img_27.png)

- A.K.A 지수 시간

![img_28.png](old_note/COMP3500/week2/images/img_28.png)

- 지수 시간 vs 다항식 시간
    - NP vs P

![img_29.png](old_note/COMP3500/week2/images/img_29.png)

## 복습 퀴즈: 지수시간 알고리듬

> 부분집합 합 문제는 정수의 집합이 제공되고 총합이 x가 되는 부분 집합이 있는지 확인하는 문제입니다. 아래는 문제를 풀기 위한 주먹구구식 알고리듬입니다.

> 1. 정수 집합의 모든 부분 집합을 찾는다.
> 2. 각 부분 집합의 원소들의 합을 구한다.
> 3. 원소들의 합이 정확히 x인 부분 집합을 찾는다.

- 위와 같은 위 알고리듬의 Big-O 시간 복잡도는 무엇인가요?
    - O(n * 2^n)

## P 분류

![img_45.png](old_note/COMP3500/week2/images/img_45.png)

- classification
- 판정 문제:
    - 입력값에 대해 yes or no
- 이 판정 문제를 분류하는 방법
- 결정론적 튜링 기계에서 다항식 시간 안에 풀 수 있는 모든 문제를 P 분류라고 함

## 결정론적 튜링 기계

![img_46.png](old_note/COMP3500/week2/images/img_46.png)

- 보통 우리가 사용하는 프로그래밍 언어는 튜링 컴플리트를 만족
    - 튜링 기계의 조건을 모두 만족하는 언어
    - 참고로 블록체인 쪽은 만족하지 않는 언어도 있음
- 결정론적:
    - 다음 단계가 분명하다

## NP 분류

![img_47.png](old_note/COMP3500/week2/images/img_47.png)

- Not P X
- Nondeterministic
    - 비결정론적 튜링기계
    - 사실 이런 기계가 없다고 봐야 무방함

## 비결정론적 튜링 기계

![img_48.png](old_note/COMP3500/week2/images/img_48.png)

- CPU 코어가 무한대인 경우를 상상하기

## 결정론적 튜링 기계에서 NP 문제

![img_49.png](old_note/COMP3500/week2/images/img_49.png)

- 답을 검증하는 시간이 다항식 시간 안에 가능
- 답을 모를 때 답을 찾는 과정은 지수시간이 걸릴 수 있음

## 랜덤 접근 기계 == 결정론적 튜링 기계

![img_50.png](old_note/COMP3500/week2/images/img_50.png)

- NP 문제를 푸는 다른 접근법:
    - 무작위, 근사, 휴리스틱 등

## P vs NP 영상 퀴즈

```java
public static boolean hasGreater(int[] nums, int k) {
    for (int i = 0; i < nums.length; ++i) {
        if (nums[i] > k) {
            return true;
        }
    }
    return false;
}
```

- 위 함수는 P인가요 NP인가요?
    - 둘 다 맞음

## P 또는 NP 배타적인 관계가 아님

![img_51.png](old_note/COMP3500/week2/images/img_51.png)

![img_53.png](old_note/COMP3500/week2/images/img_53.png)

- 비결정론적 튜링 기계에서 당연(?)히 다항식 시간에 풀 수 있음
    - P 이면 NP!

![img_52.png](old_note/COMP3500/week2/images/img_52.png)

- 결정론적 튜링 기계에서 다항식 시간 안에 검증할 수 있음
    - 답(각 분기마다 따라야하는 가지)를 모두 알기 때문에 검증은 다항식 시간에 할 수 있음

![img_54.png](old_note/COMP3500/week2/images/img_54.png)

- 포함관계

## NP 완전 (NPC)

![img_55.png](old_note/COMP3500/week2/images/img_55.png)

- NP 문제의 부분 집합
    - P 문제랑 배타 관계
- 성질:
    - "모든" NP 문제는 다항식 시간안에 NP-완전 문제로 환원할 수 있음
    - NP 완전 문제가 더 일반화된 알고리듬(개념)
        - 즉 NP 완전이 아닌 NP는 NP 문제(특정)에 국한된 알고리듬
        - NP 완전 문제는 NP 완전이 아닌 다른 NP 문제들을 풀 수 있는 일반화된 알고리듬
            - 이게 환원이 가능하다는 의미
    - NP 문제의 성질 때문에 결정론적 튜링기계에서 다항식 시간 안에 답을 검증할 수 있음
- NP 문제들을 대표하는 어려운 문제라고 이야기함

![img_56.png](old_note/COMP3500/week2/images/img_56.png)

- NPC 예시

![img_57.png](old_note/COMP3500/week2/images/img_57.png)

- 의사 다항식 시간 안에 풀 수 있음
    - 약한 NPC 문제

## NP 난해(NP-hard) 문제

![img_58.png](old_note/COMP3500/week2/images/img_58.png)

- NPC 만큼 어려운 문제
- 결정론적 튜링기계에서 다항식 시간 안에 답 검증조차 불가능할 수도 있음
    - 회색 영역

## P vs NP 문제라는 용어에 대해서 ?

![img_59.png](old_note/COMP3500/week2/images/img_59.png)

- P 또는 NP냐 구분하는게 아님
- P와 NP가 같은지 아닌지를 논하는 문제

![img_60.png](old_note/COMP3500/week2/images/img_60.png)

- 가정을 해서, 만약 어떤 NPC 문제 중 하나라도 다항식 시간 안에 풀 수 있다면?
    - 이건 P 문제인데?
    - 근데 NPC 문제의 성질로 모든 NP문제를 다항식 시간안에 NPC 문제로 환원할 수 있음
    - 어 그러면 다항식 시간안에 환원해서 NPC 문제로 환원하고 다항식 시간안에 풀면?
    - P == NP

![img_61.png](old_note/COMP3500/week2/images/img_61.png)

- 이거 성공하면?
    - 대박임ㅋㅋ
    - 정보처리량이 엄청~

![img_62.png](old_note/COMP3500/week2/images/img_62.png)

- 만약 성공하면 왼쪽 그림처럼

![img_63.png](old_note/COMP3500/week2/images/img_63.png)

- 모든 NP 문제를 다항식 시간 안에 NPC 문제로 환원할 수 있기 때문에, 하나라도 다항식 시간안에 풀면 증명 완료
- 근데 아직 아무도 성공 못 해서..

## 탐색 알고리듬

![img_30.png](old_note/COMP3500/week2/images/img_30.png)

- 광범위한 개념

![img_31.png](old_note/COMP3500/week2/images/img_31.png)

- 대표적으로 배열에서 특정 요소 find
- 해시맵에서 찾기
    - 모두 범용적인 알고리듬

![img_32.png](old_note/COMP3500/week2/images/img_32.png)

- 여기서 시간복잡도는 평균
- 해시맵에서 N보다 큰 공간복잡도는 해시 맵 최적의 버킷사이즈가 2N + A 를 만족하는 소수
- 속도와 용량의 trade-off

- 용량은 같은데 O(N) 보다 빠른 알고리듬이 '이진 탐색'
    - 데이터의 성질이 전제조건

## 데이터 성질과 알고리듬

![img_33.png](old_note/COMP3500/week2/images/img_33.png)

- 특정 데이터에 특화된 알고리듬도 중요함

## 이진 탐색

- 전제 조건:
    - 정렬된 데이터

![img_34.png](old_note/COMP3500/week2/images/img_34.png)

![img_35.png](old_note/COMP3500/week2/images/img_35.png)

- 정렬된 데이터에서 오른쪽은 현재 값보다 큰 값
- 왼쪽은 현재 값보다 작은 값

![img_36.png](old_note/COMP3500/week2/images/img_36.png)

- 가운데 위치 확인

![img_37.png](old_note/COMP3500/week2/images/img_37.png)

- 왼쪽으로 범위 좁힘

![img_38.png](old_note/COMP3500/week2/images/img_38.png)

![img_39.png](old_note/COMP3500/week2/images/img_39.png)

- ...

![img_40.png](old_note/COMP3500/week2/images/img_40.png)

- 시간 복잡도:
    - O(logN)

### 이진 탐색의 시간복잡도

![img_41.png](old_note/COMP3500/week2/images/img_41.png)

- 정렬된 배열에서 사용가능!
- 분할 정복
    - 기법
- 재귀 함수로 쉽게 구현 가능

- 아래 개념 구분
    - 문제
    - 기법
        - 분할 정복
        - 그리디
    - 알고리듬
        - 이진탐색 알고리듬

```java
public boolean binarySearchRecursive(int nums[], int l, int r, int value) {
    if (l > r) {
        return false;
    }

    int midIndex = l + (r - l) / 2;
    int midValue = nums[midIndex];
    if (midValue > value) {
        return binarySearchRecursive(nums, l, midIndex - 1, value);
    } else if (midValue < value) {
        return binarySearchRecursive(nums, midIndex + 1, r, value);
    } else {
        return true;
    }
}
``` 

```text
nums = [2, 4, 6, 8, 10]

l = 0
r = 4
value = 5
midIndex = 0 + (4 - 0) / 2 == 2
midValue = 6
midValue > value == 6 > 5
왼쪽 절반에서 탐색

r = 2 - 1 == 1
l = 0
value = 5
midIndex = 0 + (1 - 0) / 2 == 0
midValue = 2
midValue < value == 2 < 5
오른쪽 절반에서 탐색

r = 1
l = midIndex + 1 == 1
value = 5
midValue = 4
midValue < value == 4 < 5
오른쪽 절반에서 탐색

r = 1
l = midIndex + 1 == 2
l > r == 2 > 1
break
fail!
```

### 이진 탐색 알고리듬

![img_42.png](old_note/COMP3500/week2/images/img_42.png)

## 정렬된 데이터와 알고리듬

![img_43.png](old_note/COMP3500/week2/images/img_43.png)

- 정렬된 데이터에 사용할 수 있는 효율적인 알고리듬이 많다
    - 대표적으로 이진 탐색
- 삽입할 때 마다 정렬하면 비효율적임
    - 이진 탐색을 위해 배열의 상태를 정렬된 상태로 유지하려고 매번 삽입하면 배보다 배꼽이 더 큼

![img_44.png](old_note/COMP3500/week2/images/img_44.png)

- 배열이 바뀌는 경우 이진 탐색을 사용하려면?
    - 반드시 배열을 정렬해야함
        - 배열이 바뀔 때 마다 곧바로 정렬
        - boolean 으로 배열이 바뀐 여부만 저장하다가, 이진 탐색 직전에 정렬 1번

- 탐색 빈도가 높다면 정렬된 상태로 배열을 유지하기 위해 정렬 비용을 지불하는 것 not bad

## 코드보기: 회전된 배열에서의 검색

- sorted rotated array
    - 회전 정렬 배열
- 가정:
    - 중복되는 요소가 없음
    - 오직 1번만 회전!

```java
package academy.pocu.comp3500samples.w02.searchrotatedarray;

public class Program {

    public static void main(String[] args) {
        int[] numbers = new int[]{20, 25, 26, 29, 33, 1, 3, 5, 6, 10, 11, 19};

        int index = indexOfRotatedArray(numbers, 0, numbers.length - 1, 0);

        System.out.println(index);

        index = indexOfRotatedArray(numbers, 0, numbers.length - 1, 1);

        System.out.println(index);

        index = indexOfRotatedArray(numbers, 0, numbers.length - 1, 29);

        System.out.println(index);

        index = indexOfRotatedArray(numbers, 0, numbers.length - 1, 6);

        System.out.println(index);
    }

    private static int indexOfRotatedArray(int[] numbers, int start, int end, int num) {
        if (start > end) {
            return -1;
        }

        int mid = (start + end) / 2;
        if (numbers[mid] == num) {
            return mid;
        }

        if (numbers[start] <= numbers[mid]) {
            if (numbers[start] <= num && num <= numbers[mid]) {
                return indexOfRotatedArray(numbers, start, mid - 1, num);
            }

            return indexOfRotatedArray(numbers, mid + 1, end, num);
        }

        if (numbers[mid] <= num && num <= numbers[end]) {
            return indexOfRotatedArray(numbers, mid + 1, end, num);
        }

        return indexOfRotatedArray(numbers, start, mid - 1, num);
    }
}
```

- 목표는 num 의 위치를 찾기

- int[] numbers = new int[]{20, 25, 26, 29, 33, 1, 3, 5, 6, 10, 11, 19};
    - 정렬된 배열을 민(회전) 상태
    - 튀는 지점이 딱 하나만 존재함!
        - 인덱스 4, 5
        - 배열이 한 번만 회전되었다고 표현
            - [20, 25, 26, 29, 33, 1, 3, 5, 6, 10, 11, 23] 이 경우 배열이 2번 회전
            - 33에서 1
            - 23에서 20
    - 반으로 구간을 나눴을 때 한쪽 구간은 반드시 정렬되어있음

- 주먹구구식 방법:
    - 선형 탐색

- 배열을 원래 정렬된 상태로 복원하는 방법:
    - 한 칸 밀고 정렬됬는지 확인하고,
        - Shift: 시간복잡도 O(N)
        - Check Sorted: 시간복잡도 O(N)
        - 반복
            - O(2N) * O(N) == O(N^2)

- 최적의 방법:
    - 이진 탐색 종료 조건은 동일
        - 중간 인덱스에 찾는 숫자가 있으면 종료
        - 인덱스 넘어가면 종료
            - 못 찾는 경우
    - 정렬된 구간과 아닌 구간(회전된 구간)을 구분하기
        - 구간의 시작과 끝을 비교하면 이 구간이 정렬됬는지 확인할 수 있음
            - 문제 가정에서 1번만 회전했거든!
        - numbers[start] <= numbers[mid] 여부 확인
        - 만족하면:
            - [start, mid] 까지 단조증가
                - 이 구간은 이진탐색해도 됨
            - 찾는 수(num)이 이 구간에 위치하는지 확인:
            - numbers[start] <= num && num <= numbers[mid]
                - 이 조건식이 일반적인 정렬된 상황에서 이진 탐색과 다른 점
                - 일반적인 이진탐색에서는 numbers[mid] 와 num의 비교로 num이 어떤 구간에 속하지 않는지 바로 알 수 있음
            - 찾는 수가 정렬된 구간에 위치하는 경우:
                - [start, mid - 1] 에서 이진 탐색
                - 구현에서는 재귀호출
                    - 이진 탐색하는 함수를 따로 구현해서 호출해도 똑같음, 이 함수가 기능을 더 추가한 함수이기 때문
            - 찾는 수가 정렬된 구간에 위치하지 않는 경우:
                - 한번 회전한 배열에 대해서 재귀 호출
                - [mid + 1, end] 에서 재귀 호출

        - 불만족:
            - numbers[mid] <= numbers[end] 를 만족함
                - 한번만 회전한다는 문제의 가정 때문
            - [mid + 1, end] 까지 단조증가
            - 찾는 수(num)이 이 구간에 위치하는지 확인 후 재귀호출

### numbers[start] <= num && num <= numbers[mid], numbers[mid] <= num && num <= numbers[end] 조건에 대한 이해

- 왜 반드시 구간의 시작과 끝을 모두 명시해야할까?
- 만약 num <= numbers[mid] 을 조건식으로 사용한다고 가정해보자
    - num < numbers[start] 를 만족하는 경우에 [start, mid - 1] 구간을 탐색하게 됨
        - 하지만 num 은 이 구간에 존재하지 않고, [mid + 1, end] 구간에 존재할 가능성이 있음
            - 왜? 문제 가정이 배열 안의 수는 모두 서로 다르고, 한 번만 회전했기 때문임
                - [mid + 1, end] 구간에 numbers[start] 보다 작은 수들이 존재할 수 있음
            - number[start] > number[end] 를 만족
            - number[start] < number[end] 인 경우는 문제 가정상 존재할 수 없음

### 시뮬레이션!!

#### CASE 1

- num == 0

- {20, 25, 26, 29, 33, 1, 3, 5, 6, 10, 11, 19}
- mid == 5
- numbers[mid] == 1
- numbers[mid] <= numbers[end] 만족
    - [mid + 1, end] 구간 증가
    - numbers[mid + 1] == 3
    - numbers[end] == 19
    - 정렬된 구간에 존재 X
    - [start, mid - 1] 구간 재귀호출

- {20, 25, 26, 29, 33}
- mid == 2
- numbers[mid] == 26
- numbers[start] <= numbers[mid] 만족
    - [start, mid - 1] 구간 증가
    - numbers[start] = 20
    - numbers[mid - 1] = 25
    - 정렬된 구간에 존재 X
    - [mid + 1, end] 구간 재귀호출

- {29, 33}
- mid == 0
- numbers[mid] == 29
- numbers[start] <= numbers[mid] 만족
    - start == mid
    - [start, mid - 1] 구간 증가
    - 정렬된 구간에 존재 X
    - [mid + 1, end] 구간 재귀호출

- {33}
- mid == 0
- numbers[mid] == 33
- numbers[start] <= numbers[mid] 만족
    - start == mid
    - [start, mid - 1] 구간 증가
    - 정렬된 구간에 존재 X
    - [mid + 1, end] 구간 재귀호출

- l == mid + 1 == 1
- r == 0
- l > r 로 못 찾음

#### CASE 2

- num == 1

- {20, 25, 26, 29, 33, 1, 3, 5, 6, 10, 11, 19}
- 범위 체크(start =< end)
    - OK
- mid:
    - 5
- numbers[mid] == 1
    - 바로 찾음

#### CASE 3

- num == 29

- {20, 25, 26, 29, 33, 1, 3, 5, 6, 10, 11, 19}
- 범위 체크(start =< end)
    - OK
- mid:
    - 5
- 정렬된 구간과 그렇지 않은 구간 찾기:
    - numbers[start] == 20
    - numbers[mid] == 1
    - numbers[end] == 19
    - numbers[mid] < numbers[end] 만족
    - [mid + 1, end] 단조 증가 구간
- 찾는 수가 어떤 구간에 속하는지 확인:
    - 반드시 정렬된 구간을 먼저 확인해야함
        - 이를 위해 정렬된 구간과 그렇지 않은 구간을 나눔!!!
    - numbers[mid] <= num <= numbers[end] 만족 X
    - 정렬되지 않은 구간에 속함
- [start, mid - 1] 구간에 대해 재귀호출

- {20, 25, 26, 29, 33}
- 범위 체크(start =< end)
    - OK
- mid:
    - 2
- 정렬된 구간과 그렇지 않은 구간 찾기:
    - numbers[start] == 20
    - numbers[mid] == 26
    - numbers[end] == 33
    - numbers[start] < numbers[mid] 만족
    - [start, mid - 1] 단조 증가 구갼
    - numbers[mid] < numbers[end] 만족
    - [mid + 1, end] 단조 증가 구간
        - 조건문의 순서 때문에 [start, mid - 1] 단조 증가 구간이 정렬된 구간처럼 선택되지만, 사실 [mid + 1, end]도 정렬된 구간임
        - 이전 재귀호출에서 mid 위치의 값이 회전된 위치였기 때문에 이 깊이의 재귀 호출을 포함해서 이후 재귀호출은 사실 모두 정렬된 구간에 대해서 호출
- 찾는 수가 어떤 구간에 속하는지 확인:
    - numbers[start] <= num <= number[mid] 만족 X
    - 정렬된 구간에 찾는 수가 없는 것을 확신했기에 다른 구간을 탐색
- 다른 구간인 [mid + 1, end]에 대해 재귀호출

- {29, 33}
- 범위 체크(start =< end)
    - OK
- mid:
    - 0
- number[mid] == 29
    - 바로 찾음