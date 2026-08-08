---
title: 클래스 다이어그램
---
# 클래스 다이어그램

## 다음 클래스 다이어그램 (이 그림을 보고 아래 문제에 답하라)

```text
┌─────────────────────────────────┐
│ Human                           │   <- 1번 칸: 클래스 이름
├─────────────────────────────────┤
│ - name : String                 │   <- 2번 칸: 멤버 변수
│ - age : int                     │
├─────────────────────────────────┤
│ + Human(name : String, age : int)│  <- 3번 칸: 멤버 함수
│ + getName() : String            │
│ + feed(dog : Dog) : void        │
└─────────────────────────────────┘
              │
              │  의존(dependency):  Human - - -> Dog
              v
┌─────────────────────────────────┐
│ Dog                             │
├─────────────────────────────────┤
│ - happiness : int = 0           │
│ - name : String                 │
├─────────────────────────────────┤
│ + Dog(name : String)            │
│ + bark() : void                 │
│ + getHappiness() : int          │
└─────────────────────────────────┘
```

표기법: `+` public, `-` private, `#` protected, `~` package-private / `이름 : 타입` / 반환형은 `) : 타입`

## 위 다이어그램의 클래스 이름은?

`Human`, `Dog`

- 클래스 박스의 맨 위 칸이 클래스 이름

## Human의 멤버 변수는 무엇인가? (이름과 타입)

- `name : String`
- `age : int`

- 박스의 두 번째 칸이 멤버 변수
- `Dog`의 `happiness : int = 0`처럼 초기값도 표기 가능

## 위 멤버 변수들의 접근 제어자는?

모두 `private` (앞의 `-` 기호)

- `+`였다면 public, `#`는 protected, `~`는 package-private

## Dog의 멤버 함수와 각 매개변수·반환값은?

- `Dog(name : String)` — 생성자, 매개변수 `name : String`
- `bark() : void` — 매개변수 없음, 반환형 `void`
- `getHappiness() : int` — 매개변수 없음, 반환형 `int`

- 반환형은 `)` 뒤 콜론에 표시됨

## 위 다이어그램의 의존 관계는?

`Human`이 `Dog`에 의존함

- `Human`의 `feed(dog : Dog)`처럼 `Dog`를 매개변수로 사용 → 사용하면 의존하게 됨
- 점선 화살표(`Human - - -> Dog`)는 의존하는 쪽(`Human`)에서 의존받는 쪽(`Dog`)을 가리킴
