# 반복문

## 라벨이 달린 break는 어떻게 동작하는가?

라벨이 달린 코드 블록(반복문)을 **탈출**함

- 라벨로 "점프"하는 것이 아니라, 라벨이 감싸는 블록을 빠져나가는 개념

## 라벨이 달린 continue는 어떻게 동작하는가?

라벨이 달린 코드 블록의 **다음 iteration**을 진행함

## 다음 코드의 출력은?

```java
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) {
            break outer;
        }
        System.out.println(i + " " + j);
    }
}
```

```text
0 0
```

- i=0, j=0 출력 후 j=1에서 `break outer` → 바깥 루프까지 한 번에 탈출

## 다음 코드의 출력은?

```java
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) {
            continue outer;
        }
        System.out.println(i + " " + j);
    }
}
```

```text
0 0
1 0
2 0
```

- 각 i마다 j=0 출력 후 j=1에서 `continue outer` → 바깥 루프의 다음 i로 진행

## 다음 코드의 출력은? (3중 루프에서 라벨 break)

```java
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        for (int k = 0; k < 3; k++) {
            System.out.println(i + " " + j + " " + k);
            if (k == 1) {
                break outer;
            }
        }
    }
}
```

```text
0 0 0
0 0 1
```

- k=0 출력, k=1 출력 후 `break outer` → 가장 안쪽 루프부터 바깥 루프까지 **한 번에** 탈출

## 다음 코드는 컴파일되는가? (감싸지 않는 라벨)

```java
outer:
for (int i = 0; i < 2; i++) {
    System.out.println(i);
}

for (int j = 0; j < 2; j++) {
    break outer;
}
```

컴파일 오류

- `break`는 자신을 **감싸는(enclosing)** 라벨 블록만 탈출할 수 있음
- `outer`는 첫 번째 for 문에만 붙어 있어 두 번째 for를 감싸지 않음 → 탈출할 대상이 없음 (undefined label)

## 참조형 변수를 함수 매개변수로 넘기면 어떻게 되는가?

주소값이 복사됨

- 함수 안에서 그 주소에 있는 데이터를 바꾸면 호출한 쪽의 원본도 바뀜
- 예) `add(v1)` 안에서 `v1.x`를 변경하면 호출 후에도 반영됨
