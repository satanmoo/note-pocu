# Week 10

## 동적 계획법(dynamic programming)

- 프로그래밍이라는 표현보다 `계획법`이라는 표현에 주목하기.
- 테크닉이라고 생각합시다.

![img.png](old_note/COMP3500/week10/images/img.png)

- 복잡한 문제에 특별한 속성이 존재해야지 DP로 풀 수 있다.
    - 재귀적
    - 가장 단순한 문제부터 해결

### 복잡한 문제의 예: 배낭 문제

![img_1.png](old_note/COMP3500/week10/images/img_1.png)

![img_2.png](old_note/COMP3500/week10/images/img_2.png)

![img_3.png](old_note/COMP3500/week10/images/img_3.png)

![img_4.png](old_note/COMP3500/week10/images/img_4.png)

![img_5.png](old_note/COMP3500/week10/images/img_5.png)

- 이 문제를 판정 버전으로 바꾸면 "약한 NPC" 문제가 된다.
    - 최소 어떤 값어치 V만큼 넣을 수 있는가?
    - 의사 다항식 시간 안에 풀 수 있음
- 판정 문제가 아니라면 약한 NPC 문제보다 어려움

#### 의싀 다항식 시간(pseudo-polynomial time)

- 입력 크기의 길이(비트 수)에 대한 다항식 시간이 아니라, 입력에 포함된 수치 값(실제 숫자 값)에 대해 다항식 시간 안에 알고리듬이 실행된다는 것

### brute-force로 푸는 배낭 문제

![img_6.png](old_note/COMP3500/week10/images/img_6.png)

![img_7.png](old_note/COMP3500/week10/images/img_7.png)

- O(2^n)
    - n은 물건의 개수

![img_8.png](old_note/COMP3500/week10/images/img_8.png)

### 배낭 문제의 시간복잡도

![img_9.png](old_note/COMP3500/week10/images/img_9.png)

### 피보나치 수를 동적 계획법으로 풀어보자

![img_10.png](old_note/COMP3500/week10/images/img_10.png)

![img_11.png](old_note/COMP3500/week10/images/img_11.png)

![img_12.png](old_note/COMP3500/week10/images/img_12.png)

![img_13.png](old_note/COMP3500/week10/images/img_13.png)

- 최적화
- 메모이제이션

## 메모이제이션

![img_14.png](old_note/COMP3500/week10/images/img_14.png)

- 처음 계산 결과를 캐시에 저장해 둔 뒤, 나중에 재사용하는 기법
    - 처음 계산할 때 만 저장!
- 보통 함수가 매개변수에 따라 반환하는 값을 캐싱
    - 예를 들어 n, f(n) 이렇게
    - 피보나치의 경우 배열에 저장하기 편함

### 메모이제이션을 사용한 피보나치 함수

![img_15.png](old_note/COMP3500/week10/images/img_15.png)

- 엄밀히 말하면 동적 계획법은 아님

### 메모이제이션과 동적 계획법의 관계

![img_16.png](old_note/COMP3500/week10/images/img_16.png)

- 동적 계획법을 사용할 때 메모이제이션을 활용한다고 보면 됨

### top-down 동적 계획법

- 피보나치에 적용한 동적 계획법을 top-down 방식이라고 부른다

![img_17.png](old_note/COMP3500/week10/images/img_17.png)

- 위에서 아래로
- 필요에 따라 복잡한 문제에서 간단한 문제로
    - 필요에 따라라는 표현은 조건 분기를 의미함
        - 이미 계산했으면 계산 생략
        - 처음 계산하면 계산해야함
- 하위 문제(간단한 문제)를 푸는 순서는 중요하지 않음

### 최적의 피보나치 평가 순서를 찾아보자

![img_18.png](old_note/COMP3500/week10/images/img_18.png)

![img_19.png](old_note/COMP3500/week10/images/img_19.png)

- 아래에서 위로 패턴이 있음

![img_20.png](old_note/COMP3500/week10/images/img_20.png)

- 사실 배열이 필요없음
- 변수 두개로 가능
    - 왜냐하면 f(2)를 계산한 뒤 이후 계산에서 f(0)은 사용하지 않기 때문
    - f(1)은 f(3) 이후 계산에서 필요없음
    - ...

## 타뷸레이션

![img_21.png](old_note/COMP3500/week10/images/img_21.png)

- bottom-up 방식

```java
public static int fibonacci(int number) {
    int a = 0;
    int b = 1;

    for (int i = 2; i <= number; ++i) {
        int next = a + b;
        a = b;
        b = next;
    }

    return b;
}
```

![img_22.png](old_note/COMP3500/week10/images/img_22.png)

- 가장 작은 문제부터 해결
- 순서대로 문제를 풀기 때문에 필요하지 않은 하위 문제를 평가함
    - 최적의 순서를 결정하는 것이 중요함
- 일반적으로 top-down 방식보다 빠름
    - CPU 캐시에 좀 더 친화적
        - 순서대로 계산하면서, 방금 계산한 값을 곧바로 읽어오기 때문
        - 배열에서 연속적으로 값을 읽기 때문
    - 재귀 함수 호출을 피할 수 있음
- 모든 하위 문제를 평가할 필요가 없는 경우 메모이제이션이 효율적일 수 있음

## 메모이제이션, 타뷸레이션의 비용

![img_23.png](old_note/COMP3500/week10/images/img_23.png)

- 공간을 더 차지함

## 동적 계획법으로 푸는 배낭 문제

![img_24.png](old_note/COMP3500/week10/images/img_24.png)

![img_25.png](old_note/COMP3500/week10/images/img_25.png)

- 모든 동적 계획법 알고리듬은 그리드로 시작한다고 해도 과언이 아님

![img_26.png](old_note/COMP3500/week10/images/img_26.png)

![img_27.png](old_note/COMP3500/week10/images/img_27.png)

![img_28.png](old_note/COMP3500/week10/images/img_28.png)

![img_29.png](old_note/COMP3500/week10/images/img_29.png)

![img_30.png](old_note/COMP3500/week10/images/img_30.png)

![img_31.png](old_note/COMP3500/week10/images/img_31.png)

- 첫 행(리코더 행)은 오직 리코더만 물품에 있을 때를 고민
- 6칸 배낭에 리코더가 이미 들어가있기 때문에 고민할 필요가 없음

![img_32.png](old_note/COMP3500/week10/images/img_32.png)

![img_33.png](old_note/COMP3500/week10/images/img_33.png)

- 슬라이드에 "+책"이라고 표현함
    - 책 만 고려하는게 아니라, 책을 추가하는 개념
- 책을 추가할 때 책만 넣을 것인가? 기존의 리코더를 뺄 것인가를 고민

![img_34.png](old_note/COMP3500/week10/images/img_34.png)

![img_35.png](old_note/COMP3500/week10/images/img_35.png)

![img_36.png](old_note/COMP3500/week10/images/img_36.png)

- 윗 행(리코더 행)에서 4칸 배낭일 때 최대값이 0이기 때문에 최대값을 늘리기 위해서 훔치는 것이 좋음

![img_37.png](old_note/COMP3500/week10/images/img_37.png)

![img_38.png](old_note/COMP3500/week10/images/img_38.png)

- 윗 행에서 훔친 것이 책보다 비싸지만, 책을 훔치면 1칸이 남고, 남은 1칸에 발생하는 이득을 계산해서 최대값을 구해야함

![img_39.png](old_note/COMP3500/week10/images/img_39.png)

- 그렇다면 1칸에 발생하는 이득의 최대값은 어떻게 찾나요?
- 지금까지 찾은 결과에서 찾아야함

![img_40.png](old_note/COMP3500/week10/images/img_40.png)

- 책은 제외하고, 리코더를 훔칠 때 1칸에 발생하는 이득의 최대값은 0

![img_41.png](old_note/COMP3500/week10/images/img_41.png)

![img_42.png](old_note/COMP3500/week10/images/img_42.png)

![img_43.png](old_note/COMP3500/week10/images/img_43.png)

![img_44.png](old_note/COMP3500/week10/images/img_44.png)

- 리코더만 넣으면 최대값 5
- 리코더를 빼고, 책을 넣으면 최대값 2에 5칸이 남음
- 5칸으로 구할 수 있는 최대값은 5
- 책을 넣으면 최대값 7을 얻을 수 있어서 리코더를 빼고 책을 넣는게 이득!
    - 책을 넣고 리코더도 넣게 됨

![img_45.png](old_note/COMP3500/week10/images/img_45.png)

![img_46.png](old_note/COMP3500/week10/images/img_46.png)

![img_47.png](old_note/COMP3500/week10/images/img_47.png)

- 10칸까지 넣을 수 없기 때문에, 기존의 것을 빼고 사슴을 추가할 지 판단할 필요도 없음

![img_48.png](old_note/COMP3500/week10/images/img_48.png)

- 그래서 윗행의 결과를 취하면 됨

![img_49.png](old_note/COMP3500/week10/images/img_49.png)

![img_50.png](old_note/COMP3500/week10/images/img_50.png)

![img_51.png](old_note/COMP3500/week10/images/img_51.png)

- 유지하는게 좋음

![img_52.png](old_note/COMP3500/week10/images/img_52.png)

- 도식화 해보자
- 이번에 추가하는 사슴의 값 == v(사슴)
- 기존의 최대값 v(2, 12)ㅣ
    - 12칸이고 2개의 물건으로 구한 최대값
    - 2는 행, 12는 열
- 사슴을 추가하고 남는 배낭에 넣을 수 있는 값 v(2,1)
    - 1칸 남기 때문에, 1칸이고 2개의 물건으로 구한 최대값

![img_53.png](old_note/COMP3500/week10/images/img_53.png)

- 코드로 보면 max 취한 거임

![img_54.png](old_note/COMP3500/week10/images/img_54.png)

![img_55.png](old_note/COMP3500/week10/images/img_55.png)

![img_56.png](old_note/COMP3500/week10/images/img_56.png)

![img_57.png](old_note/COMP3500/week10/images/img_57.png)

![img_58.png](old_note/COMP3500/week10/images/img_58.png)

![img_59.png](old_note/COMP3500/week10/images/img_59.png)

### 패턴

![img_60.png](old_note/COMP3500/week10/images/img_60.png)

- 첫 행은 그냥 넣으면 끝

![img_61.png](old_note/COMP3500/week10/images/img_61.png)

- 두번째 행을 채울 때는?
- 윗 행(첫번째)행의 값과 일치하거나, 큼
    - 동작 방식에 따라 반드시 그럴 수 밖에 없음!

![img_62.png](old_note/COMP3500/week10/images/img_62.png)

- 세번째 행을 채울 때는?
    - 첫번째 행은 보지 않고 두번째 행만 고려함
    - 두번째 행의 값과 일치하거나 큼!

### 일반화 해보자!

![img_63.png](old_note/COMP3500/week10/images/img_63.png)

- 새로 추가될 때 배낭의 칸 수(S)만큼 읽으면 됨!
    - 열 개수
- 총 시간 복잡도는 O(NS)
    - N은 물건의 개수, 행 개수

![img_64.png](old_note/COMP3500/week10/images/img_64.png)

![img_65.png](old_note/COMP3500/week10/images/img_65.png)

![img_67.png](old_note/COMP3500/week10/images/img_67.png)

![img_66.png](old_note/COMP3500/week10/images/img_66.png)

![img_68.png](old_note/COMP3500/week10/images/img_68.png)

![img_69.png](old_note/COMP3500/week10/images/img_69.png)

![img_70.png](old_note/COMP3500/week10/images/img_70.png)

![img_71.png](old_note/COMP3500/week10/images/img_71.png)

![img_72.png](old_note/COMP3500/week10/images/img_72.png)

- 잠깐 여기서 어떤 물품이 들어가 있을까?
- 중요한가?

![img_73.png](old_note/COMP3500/week10/images/img_73.png)

- 기록 안 해서 모름 ㅋㅋ

![img_74.png](old_note/COMP3500/week10/images/img_74.png)

### 동적 계획법으로 푼 배낭 문제 공식(코드)

![img_75.png](old_note/COMP3500/week10/images/img_75.png)

![img_76.png](old_note/COMP3500/week10/images/img_76.png)

- 메모이제이션 코드

```java
package academy.pocu.comp3500samples.w10.knapsack;

public class Program {
    public static void main(String args[]) {
        Item[] items = new Item[5];

        items[0] = new Item(3, 5);
        items[1] = new Item(9, 12);
        items[2] = new Item(1, 2);
        items[3] = new Item(5, 4);
        items[4] = new Item(7, 9);

        int maxValue = getMaxValue(15, items);

        System.out.println(String.format("Max Value: %d", maxValue));
    }

    private static int getMaxValue(final int numSpace, final Item[] items) {
        final int[][] grid = new int[items.length][numSpace + 1];
        for (var e : grid) {
            Arrays.fill(e, -1);
        }
        return getMaxValueRecursive(numSpace, items, items.length - 1, grid);
    }

    private static int getMaxValueRecursive(final int numSpace, final Item[] items, final int itemIndex, final int[][] grid) {
        if (itemIndex == 0) {
            final Item item = items[itemIndex];
            int res;
            if (numSpace < item.space) {
                res = 0;
            } else {
                res = item.value;
            }
            grid[itemIndex][numSpace] = res;
            return res;
        }

        if (grid[itemIndex][numSpace] != -1) {
            return grid[itemIndex][numSpace];
        }

        final int prev = getMaxValueRecursive(numSpace, items, itemIndex - 1, grid);
        final Item item = items[itemIndex];
        final int current;
        if (item.space > numSpace) {
            current = 0;
        } else {
            current = items[itemIndex].value + getMaxValueRecursive(numSpace - item.space, items, itemIndex - 1, grid);
        }
        final int res = Math.max(prev, current);
        grid[itemIndex][numSpace] = res;

        return res;
    }
}

public class Item {
    private int value;
    private int space;

    public Item(final int value, final int space) {
        this.value = value;
        this.space = space;
    }

    public int getValue() {
        return this.value;
    }

    public int getSpace() {
        return this.space;
    }
}
```

## 동적 계획법을 적용할 수 있는 문제의 특징

![img_77.png](old_note/COMP3500/week10/images/img_77.png)

- 최적 부분 구조
    - 하위 문제의 최적 해법으로부터 큰 문제의 최적 해법을 구할 수 있음

![img_78.png](old_note/COMP3500/week10/images/img_78.png)

- 하위 문제의 반복
    - 똑같은 평가를 반복할 때 반복이 많으면 많을수록 유리함
    - 하위 문제의 크기가 상위 문제보다 작아야 함

## 분할 정복과 동적 계획법

![img_79.png](old_note/COMP3500/week10/images/img_79.png)

- 반복 여부!

![img_80.png](old_note/COMP3500/week10/images/img_80.png)

- 머지 소트에서 부분을 반복하지 않쥬

## 동적 계획법으로 문제를 푸는 과정

![img_81.png](old_note/COMP3500/week10/images/img_81.png)

![img_82.png](old_note/COMP3500/week10/images/img_82.png)

![img_83.png](old_note/COMP3500/week10/images/img_83.png)

![img_84.png](old_note/COMP3500/week10/images/img_84.png)

![img_85.png](old_note/COMP3500/week10/images/img_85.png)

## 코드보기: 배낭문제

```java
package academy.pocu.comp3500samples.w10.knapsack;

public class Program {
    public static void main(String args[]) {
        Item[] items = new Item[5];

        items[0] = new Item(3, 5);
        items[1] = new Item(9, 12);
        items[2] = new Item(1, 2);
        items[3] = new Item(5, 4);
        items[4] = new Item(7, 9);

        int maxValue = getMaxValue(15, items);

        System.out.println(String.format("Max Value: %d", maxValue));
    }

    private static int getMaxValue(int numSpace, Item[] items) {
        int numItems = items.length;

        int cache[][] = new int[numItems][numSpace + 1];

        for (int s = 1; s <= numSpace; ++s) {
            if (items[0].getSpace() > s) {
                continue;
            }

            cache[0][s] = items[0].getValue();
        }

        for (int i = 1; i < numItems; ++i) {
            for (int s = 1; s <= numSpace; ++s) {
                if (items[i].getSpace() > s) {
                    cache[i][s] = cache[i - 1][s];
                    continue;
                }

                int remainingSpace = s - items[i].getSpace();
                int remainingMaxValue = cache[i - 1][remainingSpace];

                int choice1 = cache[i - 1][s];
                int choice2 = items[i].getValue()
                        + remainingMaxValue;

                cache[i][s] = Math.max(choice1,
                        choice2);
            }
        }

        return cache[numItems - 1][numSpace];
    }
}

public class Item {
    private int value;
    private int space;

    public Item(final int value, final int space) {
        this.value = value;
        this.space = space;
    }

    public int getValue() {
        return this.value;
    }

    public int getSpace() {
        return this.space;
    }
}
```

## 그리디(greedy)

![img_86.png](old_note/COMP3500/week10/images/img_86.png)

![img_87.png](old_note/COMP3500/week10/images/img_87.png)

- 그 순간 최적(locally optimal)의 해법을 찾는 방법
    - 미래를 생각하지 않고
    - 현재만 생각함
    - 조삼모사
- 최종적으로 최적(globally optimal) 해법이 안 나올 수도 있음
- 근사 알고리듬
- 보통 성능 때문에 사용

![img_88.png](old_note/COMP3500/week10/images/img_88.png)

- 기준이 여러 개!

![img_89.png](old_note/COMP3500/week10/images/img_89.png)

![img_90.png](old_note/COMP3500/week10/images/img_90.png)

- 우연히 globally optimal

![img_91.png](old_note/COMP3500/week10/images/img_91.png)

![img_92.png](old_note/COMP3500/week10/images/img_92.png)

- 과제 1이 생각나네용.

![img_93.png](old_note/COMP3500/week10/images/img_93.png)

![img_94.png](old_note/COMP3500/week10/images/img_94.png)

### 그리디 알고리듬의 장점

![img_95.png](old_note/COMP3500/week10/images/img_95.png)

## 쪼갤 수 있는 배낭 문제

![img_96.png](old_note/COMP3500/week10/images/img_96.png)

- 물품을 쪼개서 넣을 수 있음
    - 0 or 1 이 아니다!

![img_97.png](old_note/COMP3500/week10/images/img_97.png)

![img_98.png](old_note/COMP3500/week10/images/img_98.png)

- 단위 면적 당으로 접근하면 globally optimal 구할 수 있음

![img_99.png](old_note/COMP3500/week10/images/img_99.png)

![img_100.png](old_note/COMP3500/week10/images/img_100.png)

- 증명은 쉽지 않지만, 해보면 최적이 나옴!

## 그리디 알고리듬을 사용하기 적합한 경우

![img_101.png](old_note/COMP3500/week10/images/img_101.png)

![img_102.png](old_note/COMP3500/week10/images/img_102.png)

- DP를 사용하지 못할 때 그리디를 사용하면 된다고 말할 수 있는게, 최적 부분구조는 두 방법이 사용되는 상황의 공통적인 속성임

![img_103.png](old_note/COMP3500/week10/images/img_103.png)

- 최소/최대 문제
- 여러 그리디 선택(앞의 예에서 3가지)이 가능하면 모든 시도 또는 반례를 통해 경우의 수를 줄여야함
- 정렬을 활용하는 경우가 많음

## 동전 교환 문제

![img_104.png](old_note/COMP3500/week10/images/img_104.png)

- 참고로 이게 globally optimal 함

![img_105.png](old_note/COMP3500/week10/images/img_105.png)

- 가장 큰 동전이 앞에오게 내림차순 정렬
- 큰 동전부터 주면서 잔액을 줄임

![img_106.png](old_note/COMP3500/week10/images/img_106.png)

- 시간 복잡도는 O(nlogn)
    - 정렬이 가장 큰 비용

### 그리디가 최적이 아닌 경우

![img_107.png](old_note/COMP3500/week10/images/img_107.png)

![img_108.png](old_note/COMP3500/week10/images/img_108.png)

![img_109.png](old_note/COMP3500/week10/images/img_109.png)

![img_110.png](old_note/COMP3500/week10/images/img_110.png)

- 동전 체계가 특별하기 때문!

- 이게 그리디가 증명하기 어려운 이유
    - 반례를 찾을 찾아가면서 최적이 아님을 증명할 수는 있는데, 최적임은 증명하기 쉽지 않음

## 인터벌 스케쥴링(Interval Scheduling)

![img_111.png](old_note/COMP3500/week10/images/img_111.png)

![img_112.png](old_note/COMP3500/week10/images/img_112.png)

![img_113.png](old_note/COMP3500/week10/images/img_113.png)

![img_114.png](old_note/COMP3500/week10/images/img_114.png)

- 최대한 많은 곳을 터는 것이 목적

![img_115.png](old_note/COMP3500/week10/images/img_115.png)

![img_116.png](old_note/COMP3500/week10/images/img_116.png)

![img_117.png](old_note/COMP3500/week10/images/img_117.png)

![img_118.png](old_note/COMP3500/week10/images/img_118.png)

![img_119.png](old_note/COMP3500/week10/images/img_119.png)

![img_120.png](old_note/COMP3500/week10/images/img_120.png)

- 이 반례에서 박물관 1개면 끝임
    - 그리디에 따르면

![img_121.png](old_note/COMP3500/week10/images/img_121.png)

![img_122.png](old_note/COMP3500/week10/images/img_122.png)

- 이것도 안 됨

![img_123.png](old_note/COMP3500/week10/images/img_123.png)

![img_124.png](old_note/COMP3500/week10/images/img_124.png)

![img_125.png](old_note/COMP3500/week10/images/img_125.png)

![img_126.png](images/img_126.png)

![img_127.png](images/img_127.png)

![img_128.png](images/img_128.png)

![img_129.png](images/img_129.png)

![img_130.png](images/img_130.png)

- 왜?

### 인터벌 스케쥴링 증명

![img_131.png](images/img_131.png)

![img_132.png](images/img_132.png)

- 그리디 알고리듬의 정의에 따라서 종료 시간이 빠른 것을 선택함
    - 따라서 o(k+1)보다 먼저 끝나는 g(k+1)이 존재함

![img_133.png](images/img_133.png)

- 남은 공간 때문에 g(k+1)이 최적일 수 밖에 없음

![img_134.png](images/img_134.png)

- 그리디가 최적이 아니라고 한 가정이 모순

### 인터벌 스케쥴링 의사 코드

![img_135.png](images/img_135.png)

```java
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Program {

    public static void main(String args[]) {
        List<Schedule> scheduleList = new ArrayList<>();
        scheduleList.add(new Schedule("경찰서", LocalTime.of(8, 0), LocalTime.of(10, 0)));
        scheduleList.add(new Schedule("은행", LocalTime.of(9, 0), LocalTime.of(12, 0)));
        scheduleList.add(new Schedule("병원", LocalTime.of(9, 0), LocalTime.of(11, 0)));
        scheduleList.add(new Schedule("박물관", LocalTime.of(10, 0), LocalTime.of(13, 0)));
        scheduleList.add(new Schedule("시청", LocalTime.of(9, 0), LocalTime.of(14, 0)));
        scheduleList.add(new Schedule("골드문 본사", LocalTime.of(11, 0), LocalTime.of(15, 0)));
        scheduleList.add(new Schedule("주유소", LocalTime.of(12, 0), LocalTime.of(13, 0)));
        scheduleList.add(new Schedule("도서관", LocalTime.of(13, 0), LocalTime.of(16, 0)));
        scheduleList.add(new Schedule("편의점", LocalTime.of(14, 0), LocalTime.of(15, 0)));
        scheduleList.add(new Schedule("전당포", LocalTime.of(16, 0), LocalTime.of(19, 0)));
        scheduleList.add(new Schedule("POCU 대학교", LocalTime.of(15, 0), LocalTime.of(20, 0)));

        List<Schedule> result = findOptimalIntervalSchedule(scheduleList);
        for (var e : result) {
            System.out.println(e);
        }
    }

    private static List<Schedule> findOptimalIntervalSchedule(List<Schedule> scheduleList) {
        scheduleList.sort(Comparator.comparing(s -> s.end));
        List<Schedule> result = new ArrayList<>();

        Schedule current = scheduleList.get(0);
        result.add(current);
        for (int i = 1; i < scheduleList.size(); ++i) {
            Schedule next = scheduleList.get(i);
            if (next.start.isAfter(current.end)) {
                result.add(next);
                current = next;
            }
        }
        return result;
    }

    private static class Schedule {
        String name;
        LocalTime start;
        LocalTime end;

        public Schedule(String name, LocalTime start, LocalTime end) {
            this.name = name;
            this.start = start;
            this.end = end;
        }

        @Override
        public String toString() {
            return String.format("%s(%s~%s)", name, start, end);
        }
    }
}
```

## 그리디 접근법으로 풀 수 있는 문제

![img_136.png](images/img_136.png)

## 허프만 코딩 개론

- 허프만 코딩은 거의 매일 사용함
- zip 파일을 다운로드 받을 때 마다

![img_137.png](images/img_137.png)

- 웹 사이트를 방문할 때 마다 알아서 zip 파일을 받음
    - 웹 서버에서 컨텐츠를 gzip(압축 포맷)으로 압축해 전송하고 브라우저는 이를 압축 해제해서 보여줌
    - Request Header에 어떤 압축 포맷으로 받을 지 accept-encoding 필드로 명시
        - [accept-encoding](https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Accept-Encoding)

- 요즘 많은 프로그램들은 데이터를 저장할 때 바이너리보다는 xml, json 등 파일을 zip으로 압축해서 저장함

- 압축에 허프만 코딩이 사용됨!

## 데이터 압축

![img_138.png](images/img_138.png)

- 정의:
    - 원본 데이터보다 적은 비트 수로 데이터를 표현하는 방법

- 주목적:
    - 저장공간 절약
        - 사진찍어서 나오는 JPEG(제이펙)파일도 압축이 적용된 결과
        - 따라서 휴대폰에 많이 저장할 수 있습니다.
    - 전송속도 단축
        - 브라우저가 서버로부터 전송받을 때 속도를 향상시키기 위해 압축된 파일을 받음
        - CPU에서 압축을 푸는 비용은 매우 낮음
            - 연산은 매우 빠르기 때문
        - 네트워크 전송할 때 비용은 크다
            - 따라서 전송하는 파일은 크기가 작을 수록 이득
    - 파일 합치기
        - 실용적으로 파일이 하나면 관리하기 편함
    - Uglify
        - 데이터 난독화 개념

### 압축 알고리듬 종류

![img_139.png](images/img_139.png)

![img_140.png](images/img_140.png)

- 이들을 분류할 수 있는데, 어떤 속성으로 분류하면 좋을까?

![img_141.png](images/img_141.png)

- 손실/무손실

- 손실 알고리듬은 원본으로 복구할 수 없음
    - 음질이 좀 떨어져도, 화질이 좀 떨어져도 사람이 느끼기에 별 차이 없으면 괜찮지?
    - 인간에 대한 이해가 중요한 알고리듬

![img_142.png](images/img_142.png)

## 양자화(quantization)

![img_143.png](images/img_143.png)

- 원본 데이터는 아날로그
    - 연속적인 데이터라 컴퓨터로 표현할 수 없음

- 표현할 수 있는 값의 개수를 줄이는 방법
    - 명확한 정의는 연속적인 수치를 특정 간격의 이산적인 값들로 매핑
    - 아날로그 -> 디지털 변환도 양자화
    - 디지털 -> 디지털 변환도 양자화
        - 7개로 표현하는 방법에서 4개로 표현하는 방법으로 바꾸기
            - 높이 0부터 가로 라인의 개수 == 표현하는 개수
        - 음원 파일로 치면 고음질에서 저음질 포맷으로 변환

![img_144.png](images/img_144.png)

- 24비트 색상:
    - R,G,B 각각 8비트
        - 따라서 픽셀 하나 당 3바이트
            - 추가적으로 알파채널 포함해서 4바이트로 픽셀을 저장하기도 함

- 예전 오락은 색상이 적다. 아래와 같은 과정으로 변환하기 때문
    - 원본 그림의 색상에서 대표하는 16개 색상만 뽑는다
        - 이 뽑은 색상들을 "팔레트"라고 부름
        - lookup table의 일종
    - 원본 그림의 색상을 16개 색상과 대응시킴
        - 따라서 픽셀 하나당 16개 경우를 나타내면 된다.
        - 4비트가 필요함

![img_145.png](images/img_145.png)

- 위의 고양이 사진보다 화질 차이가 덜 느껴지는 이유:
    - 고양이 사진은 비슷한 색상을 기준으로 압축
    - JPEG은 주파수를 이용함
        - 색상 데이터를 주파수로 변형
        - 비슷한 주파수끼리 합치는 연산
            - 주파수를 합치는 연산은 잘 모르지만, 여튼 합친다
        - 합친 결과를 양자화
        - 화면에 보여줄 때는 합친 주파수를 색상으로 변환해서 보여줌
            - 사람들은 비슷한 주파수는 잘 구분 못한다네요
        - 이런 알고리듬을 DCT(Discrete Cosine Transform)
            - 궁금하면 찾아보기

![img_146.png](images/img_146.png)

- DXT1 기법 궁금하면 찾아보세요
    - 참고로 그래픽 카드에서 자체적으로 지원함

### 양자화 복습 퀴즈

- 1번
- 다음 중 양자화의 예인 것은 무엇인가요?
    - 반올림
    - 더하기
    - 절대값 구하기
    - 나누기
    - 제곱

- 답:
    - 반올림
    - 연속적인 실수값을 이산적인 정수값으로 매핑

- 2번
- 다음 중 가장 오차가 적은 양자화 방법은 무엇인가요?
    - 무조건 올림
    - 반올림
    - 무조건 내림

- 답:
    - 반올림
    - 너무 직관적이죠

## 문자열 전송하기

![img_147.png](images/img_147.png)

- 어떻게 문자열을 이진수로 표현하지?

![img_148.png](images/img_148.png)

- 인코딩이 필요합니다

- 그렇다면 아스키로 인코딩한다고 가정하에 이 데이터를 전송하기 위해서는 몇 비트 필요할까?
    - 아스키 말고도 UTF-8 등 다른 방식이 있음

![img_149.png](images/img_149.png)

- 아스키 인코딩이면 문자 하나에 1바이트(8비트)가 필요함

![img_150.png](images/img_150.png)

- 네트워크 전송 속도는 느리기 때문에 비트 수를 줄여보자

### 팔레트를 사용한 압축

![img_151.png](images/img_151.png)

![img_152.png](images/img_152.png)

- 사용하는 문자를 팔레트로 등록해보자
- 총 4개만 사용하네? 2비트면 충분

![img_153.png](images/img_153.png)

- 팔레트 만들고

![img_154.png](images/img_154.png)

- lookup table을 참고해 값으로 치환하면 됨

![img_155.png](images/img_155.png)

- 총 20비트로 1/4로 줄어들었음

- 이제 여기서 좀 더 줄여보자

![img_156.png](images/img_156.png)

![img_157.png](images/img_157.png)

- leading zero를 제거해보자

![img_158.png](images/img_158.png)

![img_159.png](images/img_159.png)

- leading zero를 모두 제거했을 때 디코딩

![img_160.png](images/img_160.png)

![img_161.png](images/img_161.png)

- 디코딩이 불가능함

![img_162.png](images/img_162.png)

- 이런 문제를 허프만 코딩으로 해결할 수 있음!

## 허프만 코딩

![img_163.png](images/img_163.png)

- 정의:
    - 입력 문자들에 적합한 가변 부호(code)를 선택하는 알고리듬
    - 가변 부호란?:
        - 문자마다 서로 다른 부호
            - 여기서 "가변"의 의미는 부호의 크기(비트 수)가 서로 다르다는 의미
    - 최적 접두어 코드를 사용함
        - 접두어 코드가 겹치지 않음
            - 문자에 대해서 서로 다른 접두어 코드
        - 참고로 위에서 leading zero를 제거하는 방식은 접두어가 겹쳤음

![img_164.png](images/img_164.png)

- 최적의 의미는?

![img_165.png](images/img_165.png)

- 그리디의 최적!

![img_166.png](images/img_166.png)

- 자주 등장하는 문자의 코드의 비트 수를 적게 할당해 전체 비트 수를 줄이는 목적을 달성
    - 참고로 많은 압축 알고리듬이 이런 매커니즘(개념)을 사용함

### 허프만 트리

![img_167.png](images/img_167.png)

- 이진 트리의 일종
    - 이진 탐색 트리는 아님
    - 자식의 수가 2개 이하

- 문자는 리프 노드에 위치
- 빈도가 높은 문자일수록 루트에 가까움

![img_168.png](images/img_168.png)

- 빈도의 오름차순으로 정렬한 표를 통해 허프만 트리를 만들어 보자

#### 1. 빈도가 가장 낮은 두 행(문자-빈도)를 선택

![img_169.png](images/img_169.png)

#### 2. 두 문자가 리프가 되도록 트리를 만듦

![img_170.png](images/img_170.png)

- 문자는 리프에 위치하게 하고
- 부모 노드에는 두 문자의 빈도를 합한 값을 적음

#### 3. 만든 트리를 다시 표에 넣고 재정렬

![img_171.png](images/img_171.png)

#### 4. 모두 트리로 합쳐질 때 까지 반복

![img_172.png](images/img_172.png)

![img_173.png](images/img_173.png)

![img_174.png](images/img_174.png)

![img_175.png](images/img_175.png)

- 참고로 원래 표에 넣을 때 이미 정렬된 배열에 넣는 개념이라서 시간 복잡도 O(N)
    - 개념적으로 우선 순위 큐랑 동일함

![img_176.png](images/img_176.png)

![img_177.png](images/img_177.png)

![img_178.png](images/img_178.png)

- 비트 패턴을 위해 규칙을 적용하자
    - 0, 1

![img_179.png](images/img_179.png)

#### 허프만 트리에서 인코딩 하기

![img_180.png](images/img_180.png)

![img_181.png](images/img_181.png)

![img_182.png](images/img_182.png)

![img_183.png](images/img_183.png)

![img_184.png](images/img_184.png)

- 어떤 문자열의 비트도 다른 문자열의 prefix가 되지 않음!

### 허프만 트리 복습 퀴즈

- 허프만 코딩으로 "mommymamaoa"를 인코딩했을 때 몇 비트가 필요한가요?

- 정렬된 빈도 테이블을 만들어 보자:

```text
y: 1
o: 2
a: 3
m: 5
```

- 가장 빈도 수가 작은 2행으로 트리를 구성해보자

```text
 3
y o
```

- 다시 테이블에 넣고 정렬해보자

```text
tree: 3
a: 3
m: 5
```

- 가장 빈도 수가 작은 2행으로 트리를 구성해보자

```text
     6
   3  a
  y o
```

- 다시 테이블에 넣고 정렬해보자

```text
m: 5
tree: 6
```

- 가장 빈도 수가 작은 2행으로 트리를 구성해보자

```text
    11
  m   6
     3 a
    y o
```

- 트리가 완성됬으니 규칙을 부여하자
    - 0: 왼쪽 자식
    - 1: 오른쪽 자식

```text
m: 0
a: 11
y: 100
o: 101
```

- 어떤 문자도 다른 문자의 prefix가 되지 않음!

- 빈도 테이블을 이용해 총 필요한 비트 수를 구하자

```text
y: 1
o: 2
a: 3
m: 5
```

```text
3 * 1 + 3 * 2 + 2 * 3 + 1 * 5
```

- 답:
    - 20비트

### 허프만 디코딩

![img_185.png](images/img_185.png)

- 인코딩 된 메시지는 비트로 구성됨
    - 복습 퀴즈의 예시로 치면:
        - 01010010001101110111
- 트리에서 비트 값과 일치하는 변(edge)를 따라감
- 리프 노드까지 따라가는 것 반복
- 리프 노드에 도달했으면 문자 출력 후 복귀
- 모든 비트를 읽을 때 까지 반복

- 디코딩 하기 위한 전제조건:
    - 인코딩에 사용한 허프만 트리를 알고 있어야함!

![img_186.png](images/img_186.png)

![img_187.png](images/img_187.png)

![img_188.png](images/img_188.png)

![img_189.png](images/img_189.png)

#### 허프만 트리는 어떻게 전달하나?

![img_190.png](images/img_190.png)

![img_191.png](images/img_191.png)

- 왼쪽이 0인지 오른쪽이 0인지 규칙은 공유해야함

> 옵션1 빈도 테이블에서 옵션2와 같은 허프만 트리를 만들 수 있는 것은 이해했는데, 왼쪽이 0이고 오른쪽이 1이라는 규칙도 수신자 발신자가 공유하는 것도 추가적으로 필요하겠죠?
> 발신자 쪽에서 이 규칙을 모르면 비트 패턴을 해석할 수 없을 것 같아서 질문드립니다.

> 맞습니다. 보통은 허프만 트리에서 왼쪽 자식을 0, 오른쪽 자식을 1로 매핑하는 방식이 관례처럼 쓰이지만, 이건 어디까지나 구현상의 선택일 뿐 정해진 표준은 아닙니다. 따라서 발신자와 수신자 모두 이 매핑 규칙에
> 대한 합의가 있어야 정확한 디코딩이 가능합니다.
> 만약 특정 파일 포맷이나 통신 프로토콜에서 해당 규칙이 고정되어 있다면 별도로 전달할 필요는 없지만, 그렇지 않은 경우에는 보통 헤더나 메타데이터에 이러한 정보를 함께 포함시켜야 수신자가 정확하게 비트 패턴을 해석할
> 수 있습니다.


![img_192.png](images/img_192.png)

- zip 파일이 확실하게 용량을 줄이지 않고, 거의 못 줄일 때 도 있는게 그리디 알고리듬이라서 global 최적이 아닐 수 있음을 보여준다.

### 허프만 디코딩 복습 퀴즈

![img_193.png](images/img_193.png)

- 위에 제시된 허프만 트리를 사용해 '00011010001010011110101011101111'를 디코딩하면 어떤 메시지가 되나요?

- wold holler
