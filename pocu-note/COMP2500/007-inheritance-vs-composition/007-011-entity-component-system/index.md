---
title: 엔티티 컴포넌트 시스템
aliases:
  - 엔티티 컴포넌트 시스템
tags:
  - COMP2500
  - week7
---
# 엔티티 컴포넌트 시스템

## 엔티티 컴포넌트 시스템으로 수정한 예

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-011-entity-component-system/images/entity-component-system-1.png)
![](pocu-note/COMP2500/007-inheritance-vs-composition/007-011-entity-component-system/images/entity-component-system-2.png)

일반화된 컴포넌트를 가지고
- 컴포넌트에서 세부적으로 분류
- 컴포넌트를 조합해서 플레이어, NPC 등 구체적인 GameObject의 하위 개념 클래스를 만들 수 있음

`EntityComponent`: 위치정보
`PhysicsComponent`: 물리량(질량, 속도)정보

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-011-entity-component-system/images/entity-component-system-3.png)

`EntityComponent` + `PhysicsComponent` 조합해서 NPC 클래스를 만들 수 있음

다른 조합도 유연하게 조합 가능

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-011-entity-component-system/images/entity-component-system-4.png)

```java
public class GameObject {
    private String name;
    private ArrayList<Component> components = new ArrayList<Component>();

    public GameObject(String name) {
        this.name = name;
    }

    public void addComponent(Component component) {
        components.add(component);
    }

    public void update() {
        for (Component component : this.components) {
            component.update();
        }
    }
}
```

```java
GameObject player = new GameObject("player");

player.addComponent(new EntityComponent());
player.addComponent(new PhysicsComponent());
player.addComponent(new ControllableComponent());

player.update();
```

플레이어 개체를 만드는 예시
- 위치 정보, 물리 적용, 게임 패드로 조종 가능

```java
GameObject npc = new GameObject("Tact Haelstrom");

npc.addComponent(new EntityComponent());
npc.addComponent(new PhysicsComponent());

npc.update();
```

게임 패드로 조종 불가능

```java
GameObject npc = new GameObject("Tact Haelstrom");

npc.addComponent(new EntityComponent());
npc.addComponent(new PhysicsComponent());
npc.addComponent(new AiComponent());

npc.update();
```

AI 컴포넌트 추가해서 스스로 움직이는 NPC

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-011-entity-component-system/images/entity-component-system-5.png)

GUI로 기획자가 사용할 수 있게
- 코드를 수정하고 컴파일해서 수정하는 방식 X
- 데이터 파일에 컴포넌트 구성을 저장하고 게임 실행 시 파일을 읽어와 구성에 맞는 개체 생성

구성 조합 변경 시 재컴파일 필요없음

## 복습 퀴즈

### 다음 중 깊은 상속에 대한 설명 중 옳은 것은?

![](pocu-note/COMP2500/007-inheritance-vs-composition/007-011-entity-component-system/images/entity-component-system-6.png)

상속의 장점은 유지보수
- [[pocu-note/COMP2500/007-inheritance-vs-composition/007-007-inheritance-vs-composition-maintenance/index|상속 vs 컴포지션: 유지보수]]

요구사항이 자주 바뀌는 경우 ECS
- [[pocu-note/COMP2500/007-inheritance-vs-composition/007-010-inheritance-and-frequent-class-changes/index|상속과 잦은 클래스 변경]]
- [[pocu-note/COMP2500/007-inheritance-vs-composition/007-011-entity-component-system/index|엔티티 컴포넌트 시스템]]

파일을 통해 개체의 구성을 쉽게 변경하려면 ECS
