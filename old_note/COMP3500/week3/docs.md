# Week3

## 정렬 알고리듬

![img.png](old_note/COMP3500/week3/images/img.png)

- 정렬에 사용할 데이터(입력 데이터)는 보통 배열에 저장
    - 임의 접근이 편하기 때문

![img_1.png](old_note/COMP3500/week3/images/img_1.png)

## 안정성(Stability)

![img_2.png](old_note/COMP3500/week3/images/img_2.png)

- 똑같은 Key 를 가진 데이터들의 순서가 바뀌지 않느냐 여부
- 이게 왜 문제?

![img_3.png](old_note/COMP3500/week3/images/img_3.png)

- 어떤 문제에서는 이게 중요함
- 결론은 어떤 정렬 알고리듬은 안정성을 보장하지 않기 때문에 주의해야함

### 문제가 되는 경우 1

![img_4.png](old_note/COMP3500/week3/images/img_4.png)

- 정렬 키와 실제 데이터(값)이 다른 경우
    - 값의 순서를 유지해야함

### 문제가 되는 경우 2

![img_5.png](old_note/COMP3500/week3/images/img_5.png)

- 구조체/클래스의 일부 멤버만 정렬 키로 사용
    - 위 예시에서는 이름 순은 그대로 유지해야함
    - 나이 순으로 정렬하다가 이름 순 정렬이 파괴되면 안 됨

## 대표적인 정렬 알고리듬

![img_6.png](old_note/COMP3500/week3/images/img_6.png)

- 버블 정렬:
    - 언제든 구현
- 선택 정렬:
    - 사람들에게 가장 익숙한 방식

![img_7.png](old_note/COMP3500/week3/images/img_7.png)

- 퀵 정렬:
    - 작성할 수 있으면 좋음
    - 설명은 완전하게 할 수 있어야함!
    - 많은 언어에서 사용하는 기본 정렬 방식

![img_8.png](old_note/COMP3500/week3/images/img_8.png)

- 어차피 시험에 나와서 다 익혀야함

## 정렬 알고리듬 비교

- 가장 기초적인 발상:
    - 가장 빠를 수 있는 경우, 한계치를 생각해보기

![img_9.png](old_note/COMP3500/week3/images/img_9.png)

- 모든 요소를 한 번 이상 방문할 수 밖에 없음
    - 최소 O(N)

![img_10.png](old_note/COMP3500/week3/images/img_10.png)

- 빠르면 O(N logN)
- 느리면 O(N^2)

## 왜 퀵정렬을 많이 사용하나요?

![img_11.png](old_note/COMP3500/week3/images/img_11.png)

![img_12.png](old_note/COMP3500/week3/images/img_12.png)

- 시간 복잡도만 실제 성능에 고려하지는 않음
    - 추가적으로 고려할게 있음

![img_13.png](old_note/COMP3500/week3/images/img_13.png)

- 퀵 소트는 재귀 호출을 기반으로 동작
    - 스택 메모리를 사용함
- 병합 소트의 경우 힙 메모리를 사용
    - 메모리 할당/해제 오버헤드 때문에 퀵 소트가 유리함

- 힙 정렬은? 메모리가 O(1)인데?
    - 힙 정렬과 퀵 정렬 평균에서 시간복잡도는 동일함
    - Big-O 표기법에서 파라매터를 나타내지 않아서 동일하지만, 실제로 파라매터가 퀵 정렬이 훨씬 작음
    - 최악에서 시간 복잡도는 힙 정렬이 빠르지만 퀵 정렬이 최악의 경우가 될 때가 거의 없음

![img_14.png](old_note/COMP3500/week3/images/img_14.png)

- 안정성은 검색해서 찾아보면 됨

## 정렬 선택 가이드

![img_15.png](old_note/COMP3500/week3/images/img_15.png)

- 이 정도 가이드

- 어떤 경우에도 느려지면 알 될 때 == 퀵 정렬 최악의 경우를 허용하면 안 될 때

## Bubble sort

![img_16.png](old_note/COMP3500/week3/images/img_16.png)

- 안정성 유지 됨

### 버블 정렬의 시간 복잡도

![img_17.png](old_note/COMP3500/week3/images/img_17.png)

![img_18.png](old_note/COMP3500/week3/images/img_18.png)

![img_19.png](old_note/COMP3500/week3/images/img_19.png)

![img_21.png](old_note/COMP3500/week3/images/img_21.png)

![img_20.png](old_note/COMP3500/week3/images/img_20.png)

![img_22.png](old_note/COMP3500/week3/images/img_22.png)

- 평균으로 계산하기

![img_23.png](old_note/COMP3500/week3/images/img_23.png)

- 꼼수로 for 문 2번 중첩이면 O(N^2)

### 버블 정렬의 공간 복잡도

![img_24.png](old_note/COMP3500/week3/images/img_24.png)

### 버블 정렬의 안정성

![img_25.png](old_note/COMP3500/week3/images/img_25.png)

- 같은 값은 바꾸질 않아서 안정적임

![img_26.png](old_note/COMP3500/week3/images/img_26.png)

### 버블 정렬의 코드

```java
public static void bubbleSort(int[] nums) {
    for (int i = 0; i < nums.length - 1; ++i) {
        for (int j = 0; j < nums.length - 1 - i; ++j) {
            if (nums[j] > nums[j + 1]) {
                int temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
}
```

- 목록을 총 훑는 횟 수 == N - 1
- 원본 배열을 바꾸기 때문에 (in-place 정렬)
    - 메모리 O(1)

```java
public static void bubbleSort(int[] nums) {
    for (int i = 0; i < nums.length - 1; ++i) {
        for (int j = 0; j < nums.length - 1 - i; ++j) {
            if (nums[j] < nums[j + 1]) {
                int temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
}
```

- 내림 차순은 조건만 바꾸면 끝!

## 선택 정렬

![img_27.png](old_note/COMP3500/week3/images/img_27.png)

- 최소값을 찾아 선택한다고 해서 선택 정렬

![img_28.png](old_note/COMP3500/week3/images/img_28.png)

- 안정성이 보장 안 됨

```java
public static void selectionSort(final int[] nums) {
    for (int i = 0; i < nums.length - 1; ++i) {
        int minIndex = findMinIndex(nums, i);
        int temp = nums[minIndex];
        nums[minIndex] = nums[i];
        nums[i] = temp;
    }
}

private static int findMinIndex(final int[] nums, final int start) {
    int min = nums[start];
    int minIndex = start;
    for (int i = start + 1; i < nums.length; ++i) {
        if (min > nums[i]) {
            min = nums[i];
            minIndex = i;
        }
    }
    return minIndex;
}
```

## 삽입 정렬

![img_29.png](old_note/COMP3500/week3/images/img_29.png)

- 이전에 방문했던 요소들은 순서를 유지한 상태
    - 이번에 새로 뽑은(현재 위치)요소를 기존에 방문했던 요소들 사이에 넣어야 정렬이 될까?
    - 배열에 삽입하면서 요소가 밀릴 수 있음

![img_30.png](old_note/COMP3500/week3/images/img_30.png)

![img_31.png](old_note/COMP3500/week3/images/img_31.png)

![img_32.png](old_note/COMP3500/week3/images/img_32.png)

![img_33.png](old_note/COMP3500/week3/images/img_33.png)

![img_34.png](old_note/COMP3500/week3/images/img_34.png)

![img_35.png](old_note/COMP3500/week3/images/img_35.png)

![img_36.png](old_note/COMP3500/week3/images/img_36.png)

![img_37.png](old_note/COMP3500/week3/images/img_37.png)

![img_38.png](old_note/COMP3500/week3/images/img_38.png)

![img_39.png](old_note/COMP3500/week3/images/img_39.png)

- 안정성 유지

![img_40.png](old_note/COMP3500/week3/images/img_40.png)

- 제 위치 찾으면 더 이상 비교할 필요 없음
- 이번 회 끝

![img_41.png](old_note/COMP3500/week3/images/img_41.png)

- ...

![img_42.png](old_note/COMP3500/week3/images/img_42.png)

- 외부 반복문의 반복 횟수는 고정

![img_43.png](old_note/COMP3500/week3/images/img_43.png)

- 내부 반복문의 반복 횟수는 가변적

![img_44.png](old_note/COMP3500/week3/images/img_44.png)

- PPT 삽입 정렬임
    - 오타입니다..
- OK

```java
public static void insertionSort(final int[] nums) {
    for (int i = 1; i < nums.length; ++i) {
        int cur = nums[i];  // current value
        int j = i - 1;  // previous index
        while (j >= 0 && cur < nums[j]) {
            nums[j + 1] = nums[j];
            --j;
        }
        nums[j + 1] = cur;
    }
}
```

## 퀵정렬

![img_45.png](old_note/COMP3500/week3/images/img_45.png)

- 분할 정복 vs decrease-and-conquer
    - 모든 요소를 방문하기 때문에 분할 정복

### 시뮬레이션

![img_46.png](old_note/COMP3500/week3/images/img_46.png)

![img_47.png](old_note/COMP3500/week3/images/img_47.png)

- 기준값(pivot):
    - 정렬할 범위에서 가장 오른쪽 요소가 기준값

![img_48.png](old_note/COMP3500/week3/images/img_48.png)

- 좌에서 우 방향으로 모든 요소를 pivot과 비교

![img_49.png](old_note/COMP3500/week3/images/img_49.png)

- 7은 6보다 크기 때문에
    - 기준값보다 큰 값은 오른쪽으로 보내야함

![img_50.png](old_note/COMP3500/week3/images/img_50.png)

- 근데 그대로 둠

![img_51.png](old_note/COMP3500/week3/images/img_51.png)

- 기준값보다 작은 경우
    - 좌(인덱스)의 요소와 교환
    - 좌(인덱스) 오른쪽으로 1칸 이동

![img_52.png](old_note/COMP3500/week3/images/img_52.png)

![img_53.png](old_note/COMP3500/week3/images/img_53.png)

![img_54.png](old_note/COMP3500/week3/images/img_54.png)

![img_55.png](old_note/COMP3500/week3/images/img_55.png)

- 결과적으로 좌(인덱스)의 왼쪽의 요소들은 모두 pivot 보다 작아지게 됨

![img_56.png](old_note/COMP3500/week3/images/img_56.png)

![img_57.png](old_note/COMP3500/week3/images/img_57.png)

![img_58.png](old_note/COMP3500/week3/images/img_58.png)

![img_59.png](old_note/COMP3500/week3/images/img_59.png)

![img_60.png](old_note/COMP3500/week3/images/img_60.png)

- 오랫만에 pivot 보다 큰 값
    - 그대로 둠

![img_61.png](old_note/COMP3500/week3/images/img_61.png)

![img_62.png](old_note/COMP3500/week3/images/img_62.png)

![img_63.png](old_note/COMP3500/week3/images/img_63.png)

![img_64.png](old_note/COMP3500/week3/images/img_64.png)

- 안정성 보장 X

![img_65.png](old_note/COMP3500/week3/images/img_65.png)

![img_66.png](old_note/COMP3500/week3/images/img_66.png)

![img_67.png](old_note/COMP3500/week3/images/img_67.png)

- 1회차 정리
    - 기준값보다 작은 값이 모여있는 구간
    - 기준값보다 큰거나 같은 값이 모여있는 구간

![img_68.png](old_note/COMP3500/week3/images/img_68.png)

![img_69.png](old_note/COMP3500/week3/images/img_69.png)

- 기준값을 두 범위 사이에 넣기
    - 진짜 넣고 배열을 미는게 아니라
    - 좌(인덱스), 우(인덱스) 값 교환하면 됨
        - 이렇게 해도 괜찮은 이유:
            - 어차피 기준값 이상인 범위는 정렬된게 아니라, 자리 바꿔도 문제될 일 X

![img_70.png](old_note/COMP3500/week3/images/img_70.png)

![img_71.png](old_note/COMP3500/week3/images/img_71.png)

- 결과적으로 6(기준값)은 본인의 위치를 찾게됨
    - 6 미만 값은 모두 왼쪽
    - 6 이상 값은 모두 오른쪽

![img_72.png](old_note/COMP3500/week3/images/img_72.png)

- 2회차
- 재귀

![img_73.png](old_note/COMP3500/week3/images/img_73.png)

![img_74.png](old_note/COMP3500/week3/images/img_74.png)

- 호출 트리

![img_75.png](old_note/COMP3500/week3/images/img_75.png)

![img_76.png](old_note/COMP3500/week3/images/img_76.png)

- 좌(인덱스)와 교환
    - 자기 자신과 교환되서 위치는 바뀌질 않음

![img_77.png](old_note/COMP3500/week3/images/img_77.png)

![img_78.png](old_note/COMP3500/week3/images/img_78.png)

![img_79.png](old_note/COMP3500/week3/images/img_79.png)

![img_80.png](old_note/COMP3500/week3/images/img_80.png)

![img_81.png](old_note/COMP3500/week3/images/img_81.png)

![img_82.png](old_note/COMP3500/week3/images/img_82.png)

![img_83.png](old_note/COMP3500/week3/images/img_83.png)

![img_84.png](old_note/COMP3500/week3/images/img_84.png)

![img_85.png](old_note/COMP3500/week3/images/img_85.png)

![img_86.png](old_note/COMP3500/week3/images/img_86.png)

![img_88.png](old_note/COMP3500/week3/images/img_88.png)

![img_87.png](old_note/COMP3500/week3/images/img_87.png)

![img_89.png](old_note/COMP3500/week3/images/img_89.png)

![img_90.png](old_note/COMP3500/week3/images/img_90.png)

![img_91.png](old_note/COMP3500/week3/images/img_91.png)

![img_92.png](old_note/COMP3500/week3/images/img_92.png)

- 깊이 3

![img_93.png](old_note/COMP3500/week3/images/img_93.png)

- 셀프 교환

![img_94.png](old_note/COMP3500/week3/images/img_94.png)

- 셀프 교환

![img_95.png](old_note/COMP3500/week3/images/img_95.png)

- 좌(인덱스)와 우(인덱스)가 같아짐

![img_96.png](old_note/COMP3500/week3/images/img_96.png)

- 셀프 교환
- 3 위치 고정

![img_97.png](old_note/COMP3500/week3/images/img_97.png)

![img_98.png](old_note/COMP3500/week3/images/img_98.png)

- 좌(인덱스), 우(인덱스) 같은 위치라 바로 끝
- 셀프 교환
- 5 위치 고정

![img_99.png](old_note/COMP3500/week3/images/img_99.png)

- 같으면 그대로 두죠?

![img_100.png](old_note/COMP3500/week3/images/img_100.png)

- 우(인덱스) 직전까지 모두 작업했고
    - 기준값보다 작은 건 모두 좌 왼쪽, 크거나 같은건 좌 오른쪽에 있는 상태
- 좌우교환
- 7 위치 고정

![img_101.png](old_note/COMP3500/week3/images/img_101.png)

![img_102.png](old_note/COMP3500/week3/images/img_102.png)

![img_103.png](old_note/COMP3500/week3/images/img_103.png)

- 좌(인덱스), 우(인덱스) 같은 위치라 바로 끝
- 셀프 교환
- 9 위치 고정

![img_104.png](old_note/COMP3500/week3/images/img_104.png)

- 기준값보다 큼
- 그대로 둠

![img_105.png](old_note/COMP3500/week3/images/img_105.png)

- 좌보다 왼쪽은 기준값보다 작고, 같거나 큰쪽은 큼

![img_106.png](old_note/COMP3500/week3/images/img_106.png)

- 좌,우 값 바꾸고
- 기준값 위치 고정

![img_107.png](old_note/COMP3500/week3/images/img_107.png)

- 좌,우 같은 위치라 바로 끝
- 셀프 교환
- 기준값 위치 고정

![img_108.png](old_note/COMP3500/week3/images/img_108.png)

- 좌,우 같은 위치라 바로 끝
- 셀프 교환
- 기준값 위치 고정

![img_109.png](old_note/COMP3500/week3/images/img_109.png)

- 끝

### 코드: 재귀

![img_110.png](old_note/COMP3500/week3/images/img_110.png)

- 매개변수:
    - 정렬할 대상
    - 좌 인덱스
    - 우 인덱스
        - 범위를 지정하기 위함

![img_111.png](old_note/COMP3500/week3/images/img_111.png)

![img_112.png](old_note/COMP3500/week3/images/img_112.png)

- 좌, 우 같은 위치면 바로 끝
    - 셀프 교환, 기준값 위치 고정 생략

![img_113.png](old_note/COMP3500/week3/images/img_113.png)

- 기준값의 위치를 고정하는 함수
    - 각 회차의 정렬을 실행한 결과 기준값의 위치가 결정됨
    - partition 함수 따로 만듬
        - 기준값의 위치를 반환하도록

![img_114.png](old_note/COMP3500/week3/images/img_114.png)

- 재귀 호출

![img_115.png](old_note/COMP3500/week3/images/img_115.png)

![img_116.png](old_note/COMP3500/week3/images/img_116.png)

![img_117.png](old_note/COMP3500/week3/images/img_117.png)

![img_118.png](old_note/COMP3500/week3/images/img_118.png)

![img_119.png](old_note/COMP3500/week3/images/img_119.png)

![img_120.png](old_note/COMP3500/week3/images/img_120.png)

![img_121.png](old_note/COMP3500/week3/images/img_121.png)

![img_122.png](old_note/COMP3500/week3/images/img_122.png)

![img_123.png](old_note/COMP3500/week3/images/img_123.png)

- 바로 끝!

![img_124.png](old_note/COMP3500/week3/images/img_124.png)

![img_125.png](old_note/COMP3500/week3/images/img_125.png)

![img_126.png](images/img_126.png)

- 바로 끝!
    - 2 위치 고정

![img_127.png](images/img_127.png)

![img_128.png](images/img_128.png)

![img_129.png](images/img_129.png)

![img_130.png](images/img_130.png)

![img_131.png](images/img_131.png)

![img_132.png](images/img_132.png)

![img_133.png](images/img_133.png)

![img_134.png](images/img_134.png)

![img_135.png](images/img_135.png)

![img_136.png](images/img_136.png)

![img_137.png](images/img_137.png)

![img_138.png](images/img_138.png)

![img_139.png](images/img_139.png)

![img_140.png](images/img_140.png)

![img_141.png](images/img_141.png)

![img_142.png](images/img_142.png)

![img_143.png](images/img_143.png)

![img_144.png](images/img_144.png)

![img_145.png](images/img_145.png)

![img_146.png](images/img_146.png)

![img_147.png](images/img_147.png)

![img_148.png](images/img_148.png)

![img_149.png](images/img_149.png)

- 끝

### 코드: 분할(partition)

![img_150.png](images/img_150.png)

- pivot: 오른쪽 인덱스의 값

![img_151.png](images/img_151.png)

- 오른쪽 바로 전까지 방문

- i == -1

- nums[0] == 1
- pivot 보다 작음
- i == 0
- 교환
    - [2, 5, 1, 3, 4]

- nums[1] == 5
- pivot 보다 큼
- 그대로

- nums[2] == 1
- pivot 보다 작음
- i == 1
- 교환
    - [2, 1, 5, 3, 4]

- nums[3] == 3
- pivot 보다 작음
- i == 2
- 교환
    - [2, 1, 3, 5, 4]

- 좌(인덱스) == 2
- 우(인덱스, 기본값 위치) == 4

- 구현할 때 좌(인덱스) 오른쪽으로 밀고, 교환
- 이렇게 해야지 좌(인덱스)를 포함한 왼쪽 구간이 기준값 미만으로 구성됨

![img_152.png](images/img_152.png)

![img_153.png](images/img_153.png)

- 기준값 미만 값은 i(좌) 이하
- 기준값 초과 값은 i(좌) 다음

![img_154.png](images/img_154.png)

- 기준값의 위치 == i + 1

![img_155.png](images/img_155.png)

![img_156.png](images/img_156.png)

![img_157.png](images/img_157.png)

- swap이 한 번도 안 일어나는 경우를 대비해서 테크닉
    - 이 경우 left를 포함한 오른쪽 구간이 모두 pivot 이상의 값으로 구성 됨
    - 그래서 pivotPos = i + 1 그대로 구해버리면 left + 1이 다음 pivotPos가 되어서 문제가 생김
- 미리 1빼두고 더하는 식으로 구현
- 논리적으로 i는 바꿀값의 포인터, j는 순회하는 포인터
    - if 절로 바꿀 상황이 생기면 i가 범위 내로 들어오는게 논리적으로 맞음
    - 한 번도 바꿀 상황이 일어나지 않으면 i는 범위 밖의 초기값
        - 근데 초기값 + 1 == new pivot position 식에 딱 맞게 left - 1로 구현하면 편함
        - 모드 pivot 보다 크면 new pivot position 값이 0이 되게 설계

- 이 방법을 "Lomuto Partition" 이라고 부름

```text
function partition(arr, low, high):
    pivot = arr[high]  // pivot은 배열의 마지막 요소
    i = low - 1        // i는 pivot 보다 작은 값들을 배치할 영역의 끝을 추적

    for j from low to high - 1:
        if arr[j] <= pivot:
            i = i + 1
            swap arr[i] with arr[j]  // 현재 요소를 작은 값 영역으로 이동

    swap arr[i + 1] with arr[high]  // pivot을 올바른 위치로 이동
    return i + 1                    // pivot의 최종 위치 반환
```

- 일반적으로 i = low - 1 로 "i는 pivot 보다 작은 값들을 배치할 영역의 끝을 추적"하는 방식이 직관적이니 이걸 사용합시다

### 퀵 정렬의 복잡도

![img_158.png](images/img_158.png)

- 파티션이 균등하게 나뉘냐에 따라 시간복잡도 결정

![img_159.png](images/img_159.png)

![img_160.png](images/img_160.png)

- 기준값 위치를 어떻게 결정하냐에 따라 파티션 나뉘는게 달라지긴 하지만
- 근본적인 해결책은 없음

![img_161.png](images/img_161.png)

- 최악의 상황을 줄이는 방법은 랜덤으로 기준값 뽑기
- 정말 최악의 상황을 피하고 싶으면?
    - 힙 소트
    - 머지 소트

![img_162.png](images/img_162.png)

- 기준값 뽑는 기준을 바꾸면 원래 코드 정상동작 X

![img_163.png](images/img_163.png)

- 분할법은 다양함

![img_164.png](images/img_164.png)

- 실습 해보기
- "Hoare partition"

## Hoare partitioning

```java
public static int hoarePartition(int nums[], int left, int right) {
    int pivot = nums[(left + right) / 2];

    int i = left - 1;
    int j = right + 1;

    while (true) {
        do {
            i++;
        } while (nums[i] < pivot);

        do {
            j--;
        } while (nums[j] > pivot);

        if (i < j) {
            swap(nums, i, j);
        } else {
            break;
        }
    }

    return j;
}
```

- Hoare Partition의 경우 헬퍼함수 구현이 살짝 달라짐
    - partition 함수에서 반환하는 pivotPos가 확정이 아님
    - 그냥 j 반환
- 재귀호출할 때 범위 [left, pivotPos], [pivotPost + 1, right]
    - pivot이 분할될 때 포함됨
    - Lomuto Partition은 pivot 위치가 고정되어 포함되지 않았음

```java
private static void sortGameStatsRecursive(final GameStat[] gameStats, int left, int right) {
    if (left >= right) {
        return;
    }

    int pivotPos = partitionGameStats(gameStats, left, right);

    sortGameStatsRecursive(gameStats, left, pivotPos);
    sortGameStatsRecursive(gameStats, pivotPos + 1, right);
}
```

- 가장 교과서적인 구현
- input:
    - [2, 8, 7, 3, 6, 5, 1, 4]
    - left == 0
    - right == 7

- loop 전
- pivot == 3
- i == -1
- j == 8

- loop1
- i == 1
- j == 6
- swap
- [2, 1, 7, 3, 6, 5, 8, 4]

- loop2
- i == 2
- j == 3
- swap
- [2, 1, 3, 7, 6, 5, 8, 4]

- loop3
- i == 3
- j == 2
- break

- return 3
- [left, j] 구간에는 pivot 보다 이하값
- [j + 1, right] 구간에는 pivot 보다 이상값

### i 와 j 가 만나는 input

- [2, 8, 7, 3, 3, 6, 5, 1, 4]

- loop 전
- pivot == 3
- i == -1
- j == 9

- loop1
- i == 1
- j == 7
- swap
- [2, 1, 7, 3, 3, 6, 5, 8, 4]

- loop2
- i == 2
- j == 4
- swap
- [2, 1, 3, 3, 7, 6, 5, 8, 4]

- loop3
- i == 3
- j == 3
- break

- do while 문으로 구현되어있기 때문에 loop3 에서 i, j가 이동했음
    - 반드시 1번은 이동하게 구현
    - 왜 반드시 1번은 이동해도 괜찮을까?
        - 이동 전의 상태에는 2가지 가능성이 있음
        - 첫째: 초기상태(i = left - 1, j = right + 1)
        - 둘째: swap 이후 상태
        - 첫째에서 반드시 이동해서 배열의 범위 안으로 들어오게 하는 것은 자명함
        - 둘째에서 swap 이후 i, j 각각이 가리키는 값은 이미 파티션 처리가 완료된 값
        - 결국 두 가지 상태에서 모두 i,j 이동을 해도 괜찮음(반드시 해줘야함)

- return 4
- [left, j] 구간에는 pivot 보다 이하값
- [j + 1, right] 구간에는 pivot 보다 이상값

### 구현 변형 1

```java
public static int hoarePartition(int nums[], int left, int right) {
    int pivot = nums[(left + right) / 2];

    int i = left;
    int j = right;

    while (true) {
        while (nums[i] < pivot) {
            i++;
        }

        while (nums[j] > pivot) {
            j--;
        }

        if (i < j) {
            swap(nums, i, j);
            i++;
            j--;
        } else {
            break;
        }
    }

    return j;
}
```

```java
public static int hoarePartition(int nums[], int left, int right) {
    int pivot = nums[(left + right) / 2];

    int i = left;
    int j = right;

    while (i <= j) {
        while (data[i] < pivot) {
            i++;
        }

        while (data[j] > pivot) {
            j--;
        }


        if (i < j) {
            swap(data[i++], data[j--]);
        } else {
            i++;
        }
    }

    return j;
}
```

### pivot 선택의 중요성

```java
public static int hoarePartition(int nums[], int left, int right) {
    int pivot = nums[left];

    int i = left;
    int j = right + 1;

    while (true) {
        do {
            i++;
        } while (nums[i] < pivot);

        do {
            j--;
        } while (nums[j] > pivot);

        if (i < j) {
            swap(nums, i, j);
        } else {
            break;
        }
    }

    return j;
}
```

- pivot 고를 때, 맨앞(left) 또는 맨뒤(right)를 선택하는 경우 pivot이 partition 대상을 벗어나게 됨
    - 즉 pivot은 left 위치의 원소
    - partition 대상은 [left + 1, right]
- 이 경우 i, j 가 진행 중 partiton 범위를 벗어날 수 있음

- [5, 2, 1, 4, 3]
- pivot == 5
- left == 0
- right == 4

- loop 전
- i == 0
- j == 5

- loop1
- i 는 배열 범위를 벗어나게 됨
- 왜 이런 일이 생길까?
    - pivot 값을 중간값을 뽑는 방식을 사용할 때는 partition 대상에 반드시 pivot이 포함되어, nums[i] < pivot, nums[j] > pivot 에서 걸릴 수 밖에 없음
    - 하지만 partion에 pivot과 동일한 값이 없는 경우 위 상황 발생

- 어떻게 해결할까?
- do-while 조건에 범위 검사를 넣어야함
- i는 partition의 오른쪽 끝으로 범위를 제한, j는 partion의 왼쪽 끝으로 범위를 제한

```java
public static int hoarePartition(int nums[], int left, int right) {
    int pivot = nums[left];

    int i = left;
    int j = right + 1;

    while (true) {
        do {
            i++;
        } while (i <= right && nums[i] < pivot);

        do {
            j--;
        } while (j > left && nums[j] > pivot);

        if (i < j) {
            swap(nums, i, j);
        } else {
            break;
        }
    }

    return j;
}
```

- [5, 6, 8, 9, 7]

- loop 1
- i == 1
- j == 0
- break

![img_165.png](images/img_165.png)

- 퀵 정렬은 재귀호출 기반
    - 스택 메모리 사용
    - 공간 복잡도 O(logN)

- 꼬리 재귀로 풀 수 있음
    - 반복문으로 구현할 수 있음

### 퀵소트 꼬리 재귀를 반복문으로!

```java
public static void quickSortLoop(int[] nums) {
    Stack<int[]> stack = new Stack<>();
    int[] initRange = new int[]{0, nums.length - 1};
    stack.push(initRange);

    while (!stack.isEmpty()) {
        int[] range = stack.pop();
        int left = range[0];
        int right = range[1];

        if (left >= right) {
            continue;   // partitioning 완료된 구간, pivot 위치 확정
        }

        int pivotPos = partition(nums, left, right);

        // 왼쪽 구간을 스택에 추가
        stack.push(new int[]{left, pivotPos - 1});

        // 오른쪽 구간을 스택에 추가
        stack.push(new int[]{pivotPos + 1, right});
    }
}
```

## 코드보기: 안정성

```java
package academy.pocu.comp3500samples.w03.stability;

public final class Book {
    private final int id;
    private final String title;

    public Book(final int id, final String title) {
        this.id = id;
        this.title = title;
    }

    public int getID() {
        return this.id;
    }

    public String getTitle() {
        return this.title;
    }
}
```

```java
package academy.pocu.comp3500samples.w03.stability;

import java.util.Arrays;
import java.util.Comparator;

public class Program {

    public static void main(String[] args) {
        Book[] books = new Book[10];

        books[0] = new Book(5, "My Book 5 copy 1");
        books[1] = new Book(1, "My Book 1");
        books[2] = new Book(5, "My Book 5");
        books[3] = new Book(1, "My Book 1 copy 2");
        books[4] = new Book(3, "My Book 3");
        books[5] = new Book(2, "My Book 2");
        books[6] = new Book(4, "My Book 4 copy 1");
        books[7] = new Book(4, "My Book 4");
        books[8] = new Book(1, "My Book 1 copy 1");
        books[9] = new Book(4, "My Book 4 copy 2");

        Book[] booksCopy = copyBooks(books);

        quickSort(booksCopy);

        printBooks(booksCopy);

        booksCopy = copyBooks(books);

        Arrays.sort(booksCopy, Comparator.comparingInt(Book::getID));

        printBooks(booksCopy);
    }

    private static Book[] copyBooks(Book[] books) {
        Book[] newBooks = new Book[10];

        for (int i = 0; i < books.length; ++i) {
            newBooks[i] = new Book(books[i].getID(), books[i].getTitle());
        }

        return newBooks;
    }

    private static void printBooks(Book[] books) {
        System.out.println("--------------Books--------------");

        for (Book book : books) {
            System.out.println(String.format("%d. %s", book.getID(), book.getTitle()));
        }

        System.out.println("--------------end--------------");
    }

    private static void quickSort(Book[] books) {
        quickSortRecursive(books, 0, books.length - 1);
    }

    private static void quickSortRecursive(Book[] books, int left, int right) {
        if (left >= right) {
            return;
        }

        int pivotPos = partition(books, left, right);

        quickSortRecursive(books, left, pivotPos - 1);
        quickSortRecursive(books, pivotPos + 1, right);
    }

    private static int partition(Book[] books, int left, int right) {
        Book pivot = books[right];
        int i = (left - 1);

        for (int j = left; j < right; ++j) {
            if (books[j].getID() < pivot.getID()) {
                ++i;
                swap(books, i, j);
            }
        }

        int pivotPos = i + 1;

        swap(books, pivotPos, right);

        return pivotPos;
    }

    private static void swap(Book[] books, int pos1, int pos2) {
        Book temp = books[pos1];
        books[pos1] = books[pos2];
        books[pos2] = temp;
    }
}
```

- 퀵 정렬 특징
    - 안정성 보장 X
- Array.sort()
    - merge sort 사용!
    - 안정성 보장 O
- Java API 문서 확인해서 어떤 정렬 사용하는지 확인하는 습관!

## 병합 정렬

### 이미 정렬된 두 배열 합치기

![img_166.png](images/img_166.png)

![img_167.png](images/img_167.png)

```java
public static int[] mergeArray(int[] arr1, int[] arr2) {
    int[] res = new int[arr1.length + arr2.length];

    int i = 0;
    int j = 0;
    int k = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            res[k++] = arr1[i++];
        } else {
            res[k++] = arr2[j++];
        }
    }

    while (i < arr1.length) {
        res[k++] = arr1[i++];
    }

    while (j < arr2.length) {
        res[k++] = arr2[j++];
    }

    return res;
}
```

![img_168.png](images/img_168.png)

- 이게 병합 정렬(merge sort)과 관련있음

### 병합 정렬에 적용

![img_169.png](images/img_169.png)

![img_170.png](images/img_170.png)

![img_171.png](images/img_171.png)

![img_172.png](images/img_172.png)

- 재귀적으로 모두 나누면?

![img_173.png](images/img_173.png)

- 와 정렬됬다!
- 그리고 merge

![img_174.png](images/img_174.png)

- 무조건 O(N logN)에 끝나는 알고리듬
    - 최악 같은거 없음

![img_175.png](images/img_175.png)

![img_176.png](images/img_176.png)

![img_177.png](images/img_177.png)

![img_178.png](images/img_178.png)

![img_179.png](images/img_179.png)

![img_180.png](images/img_180.png)

```java
public static int[] mergeSort(int[] arr) {
    if (arr.length == 1) {
        return arr;
    }

    int mid = arr.length / 2;
    int[] left = Arrays.copyOfRange(arr, 0, mid);
    int[] right = Arrays.copyOfRange(arr, mid, arr.length);

    int[] sortedLeft = mergeSort(left);
    int[] sortedRight = mergeSort(right);

    return mergeArray(sortedLeft, sortedRight);
}

public static int[] mergeArray(int[] arr1, int[] arr2) {
    int[] res = new int[arr1.length + arr2.length];

    int i = 0;
    int j = 0;
    int k = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            res[k++] = arr1[i++];
        } else {
            res[k++] = arr2[j++];
        }
    }

    while (i < arr1.length) {
        res[k++] = arr1[i++];
    }

    while (j < arr2.length) {
        res[k++] = arr2[j++];
    }

    return res;
}
```

- 이렇게 구현하면 공간복잡도 O(nlogn)

```java
private static void mergeSort(final int[] array) {
    int[] temp = new int[array.length];

    mergeSortRecursive(0, array.length - 1, array, temp);
}

private static void mergeSortRecursive(int left, int right, int[] array, int[] temp) {
    if (left >= right) {
        return;
    }

    int mid = (left + right) / 2;
    mergeSortRecursive(left, mid, array, temp);
    mergeSortRecursive(mid + 1, right, array, temp);
    merge(left, right, mid, array, temp);
}

private static void merge(int left, int right, int mid, int[] array, int[] temp) {
    assert (right >= left);
    System.arraycopy(array, left, temp, left, right + 1 - left);

    int i = left, j = mid + 1, k = left;
    while (i <= mid && j <= right) {
        if (temp[i] < temp[j]) {
            array[k++] = temp[i++];
        } else {
            array[k++] = temp[j++];
        }
    }

    while (i <= mid) {
        array[k++] = temp[i++];
    }
}
```

- temp 배열 선언하고 재활용해서, in-place 정렬하면 공간복잡도 O(n)

## 힙 정렬

![img_181.png](images/img_181.png)

### Heap

- 트리에 기반한 자료 구조
- 우선순위 큐를 구현하는 방법

### Heap에 던지면 자동 정렬

![img_182.png](images/img_182.png)

- 배열 순회하면서 첫번째 원소부터 삽입

![img_183.png](images/img_183.png)

![img_184.png](images/img_184.png)

- 힙 규칙에 따라 부모의 Key가 자식의 Key 이상으로 유지됨

![img_185.png](images/img_185.png)

- 다음 레벨

![img_186.png](images/img_186.png)

- 규칙에 맞지 않음

![img_187.png](images/img_187.png)

- 규칙에 맞게 교환
- 원래 2 > 1 로 2가 1의 부모였음
- 3 > 2 로 더 큰 값이 부모가 되도 논리적으로 문제 없음
    - 3 > 1

![img_188.png](images/img_188.png)

- 위의 레벨과 비교
- 규칙에 맞기 때문에 끝

![img_189.png](images/img_189.png)

- 규칙에 맞지 않음

![img_190.png](images/img_190.png)

- 교환

![img_191.png](images/img_191.png)

- 규칙에 맞기 때문에 끝

![img_192.png](images/img_192.png)

- 규칙에 맞음

![img_193.png](images/img_193.png)

![img_194.png](images/img_194.png)

![img_195.png](images/img_195.png)

![img_196.png](images/img_196.png)

![img_197.png](images/img_197.png)

![img_198.png](images/img_198.png)

- 힙의 규칙대로 트리에 들어가있음
- 여기서 힙의 규칙대로 순서대로 제거하면 정렬된 원소들을 얻을 수 있음

![img_199.png](images/img_199.png)

- 제거는 반드시 가장 낮은 레벨의 부모

![img_200.png](images/img_200.png)

- 빈 자리는 제일 마지막에 있는 값으로 채움

![img_201.png](images/img_201.png)

- 힙의 규칙에 맞지 않음

![img_202.png](images/img_202.png)

![img_203.png](images/img_203.png)

- 같은 레벨에서 가장 큰 값을 올려야함

![img_204.png](images/img_204.png)

- 같은 값이라 왼쪽을 택함

![img_205.png](images/img_205.png)

![img_206.png](images/img_206.png)

- 2와 6중에는 6이 큼

![img_207.png](images/img_207.png)

- 이제 규칙을 지킴

- 이 과정 반복해서 계속 제거하면 됨
- 영상 참고

## 코드보기: 배열 요소의 최소 차이 찾기

```java
package academy.pocu.comp3500samples.w03.minimumdiff;

import java.util.Arrays;
import java.util.Random;

public class Program {

    public static void main(String[] args) {
        Random random = new Random(512);

        int[] nums = new int[15];

        for (int i = 0; i < nums.length; ++i) {
            nums[i] = random.nextInt(1000);
        }

        printNums(nums);

        Arrays.sort(nums);

        int minDiff = Integer.MAX_VALUE;
        int num1 = 0;
        int num2 = 0;

        for (int i = 0; i < nums.length - 1; ++i) {
            int diff = Math.abs(nums[i] - nums[i + 1]);

            if (diff < minDiff) {
                minDiff = diff;
                num1 = nums[i];
                num2 = nums[i + 1];
            }
        }

        System.out.println(String.format("minimum difference: %d", minDiff));
        System.out.println(String.format("num1: %d, num2: %d", num1, num2));
    }

    private static void printNums(int[] nums) {
        String[] s = new String[nums.length];

        for (int i = 0; i < nums.length; ++i) {
            s[i] = String.format("%d", nums[i]);
        }

        System.out.println(String.format("[ %s ]", String.join(", ", s)));
    }
}
```

- 정렬에 O(NlogN) 사용해도, 값을 찾는데 O(N)이라 brute force 2중 for문 방식보다 유리함
- 최소 차이를 구하려면, 정렬된 상태에서 인접한 원소만 비교하면 됨
    - 너무 직관적이죠?
    - 정렬된 상태에서 굳이 먼 요소랑 비교할 필요가 없지..

![img_208.png](images/img_208.png)
