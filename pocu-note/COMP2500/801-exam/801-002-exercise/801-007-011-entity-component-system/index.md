# 엔티티 컴포넌트 시스템

## 다음 클래스 다이어그램 (이 그림을 보고 아래 문제에 답하라)

```text
┌──────────────┐ 1      0..* ┌──────────────┐
│ GameObject   │◆────────────│ Component    │
├──────────────┤             ├──────────────┤
│ - name       │             │ + update()   │
│ + addComponent(c)          └──────────────┘
│ + update()   │                   △
└──────────────┘                   │
        ┌────────────────┬─────────┴────────┬──────────────┐
 EntityComponent  PhysicsComponent  ControllableComponent  AiComponent
```

(◆ = 채워진 다이아몬드, △ = 빈 세모)

## GameObject와 Component의 관계(◆)는?

합성(composition) — 강한 has-a

- 채워진 다이아몬드(◆)는 합성: `GameObject`가 `Component`를 **소유**하며 생명주기가 묶임 (GameObject가 사라지면 Component도 함께)
- 숫자 `0..*` → 하나의 `GameObject`는 0개 이상의 `Component`를 가질 수 있음

## 채워진 다이아몬드(◆)와 빈 다이아몬드(◇)의 차이는?

- ◆ 합성(composition): 강한 has-a, 전체가 부품을 소유 / 부품은 독립적으로 존재 못 함 (생명주기 묶임)
- ◇ 집합(aggregation): 약한 has-a, 부품이 독립적으로 존재하거나 공유될 수 있음 (예: RecordReader–Record)

## Component와 EntityComponent/PhysicsComponent의 관계(△)는?

is-a (상속)

- 각 구체 컴포넌트는 `Component`의 자식
- `Component`의 `update()`를 공통으로 가짐

## player, NPC 같은 구체적인 개체는 어떻게 만드는가?

상속이 아니라 필요한 **컴포넌트들을 조합**(addComponent)해서 만듦

- 예: player = Entity + Physics + Controllable
- 예: NPC = Entity + Physics (+ AI)
- 같은 `GameObject` 클래스로 조합만 바꿔 다양한 개체 생성 → 유연함

## 이 구조(ECS)의 장점은?

조합을 데이터 파일로 저장해 두면, 구성을 바꿔도 재컴파일이 필요 없음

- 요구사항이 자주 바뀌거나 기획자가 GUI로 구성할 때 유리
