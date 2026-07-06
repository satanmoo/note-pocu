## 체비쇼프 거리

시야, AOE를 [체비쇼프 거리](https://ko.wikipedia.org/wiki/%EC%B2%B4%EB%B9%84%EC%87%BC%ED%94%84_%EA%B1%B0%EB%A6%AC)라고 하네요.

## 시야를 구하는 함수

영역을 구해서 칸(배열)을 반환하는 것은 비효율적
- 시야 영역을 구해도, 어차피 이동/공격에서 시야 배열을 순회하면서 탐색해야 하니까...

시야의 유닛을 모두 반환하는게 좋을까?
- 순회하면서 유닛을 찾겠다는 의도
	- 누가 찾아서 사용할건데?
	- 누군가는 유닛의 목록을 알 고 있으면 유닛을 찾을 필요가 없는데?
		- `SimulationManager`?

### 유닛 목록을 누가 관리하는가?

시뮬레이션 매니저 코드는 직접 구현해야 하고 public 매소드들이 쭉 선언되어 있음
- 이것 만으로 정보는 부족하니까, 사용처를 확인해보자

[[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#3. 본인 컴퓨터에서 테스트하는 법|3. 본인 컴퓨터에서 테스트하는 법]] 코드를 확인해보면
- 직접 유닛을 생성하고 `spawn`함수를 통해 등록하는 개념
- 비쥬얼라이저는 `simulationManager.getUnits()`로 얻은 유닛 목록을 이용해 시각화함

[[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#2.10 SimulationManager 클래스를 구현한다|2.10 SimulationManager 클래스를 구현한다]]  명세를 확인해보면 `SimulationManager`는 유닛 목록을 관리해야함
- 생사 여부

따라서 유닛 목록을 알 고 있는 누군가는 `SimulationManager`로 확정!
- 사고를 전환
	- 맵의 유닛을 찾음 X
	- 유닛 목록을 전지적으로 다 알고 있음 O

### 시야를 구하는 함수의 시그니처 -> 유닛을 볼 수 있는지 확인하는 함수의 시그니처

외부에서 `SimulationManager`가 유닛 목록을 관리하고 있으니, 함수의 매개변수에 유닛을 넣으면 매니저가 넣어주면 됨

어떤 유닛의 함수에 유닛을 넘겨서 유닛이 가진 구체적인 상태(스펙)에 따라 `target.canSee(other)`을 했을 때 "target"이 "other"을 볼 수 있는지 구할 수 있음

매개변수:
- 유닛
반환값:
- boolean

"유닛을 볼 수 있는지 구하는 함수"를 구현한다고 결론!
- 이는 공통 로직이니까 추상 클래스에 선언하면 되겠죠?

유닛을 볼 수 있는 지 판단하는 함수 구현 방법에는 크게 2가지
1. 부모(추상) 클래스에 상태를 정의하고, 이를 생성자로 값을 넘기는 방법
2. 템플릿 메서드 패턴

### 유닛을 볼 수 있는지 확인하는 함수의 시그니처 구현

#### 1. 추상 클래스에 상태를 정의하는 구현

부모(추상) 클래스에 정의된 상태
- 시야
	- 범위 로직에 값을 사용함
- 공중을 볼 수 있는가?
- 지상을 볼 수 있는가?

위 데이터값을 자식 클래스 생성자의 매개변수로 받아, 상태로 가짐

부모 클래스에 시야의 적 목록을 반환하는 함수를 구현하고, 자식 클래스 생성자로 초기화된 값을 이용해 판별에 활용 할 수 있음

```java
// UnitType.java - 최상위 파일로! (규칙 8: 내포 열거형 금지)
public enum UnitType {
    GROUND, AIR
}

// Unit.java
public abstract class Unit {
    private final int vision;
    private final UnitType unitType;      // 나는 지상인가 공중인가
    private final boolean canSeeGround;   // 내가 볼 수 있는 것
    private final boolean canSeeAir;
    private final boolean isVisible;      // 남이 나를 볼 수 있는가 (지뢰만 false)

    protected Unit(IntVector2D position, int hp, int vision,
                   UnitType unitType, boolean canSeeGround, boolean canSeeAir,
                   boolean isVisible) { ... }

    protected final boolean canSee(Unit other) {
        if (!other.isVisible) {
            return false;
        }
        boolean typeOk = (other.unitType == UnitType.GROUND && this.canSeeGround)
                || (other.unitType == UnitType.AIR && this.canSeeAir);
        if (!typeOk) {
            return false;
        }
        
        // 체비쇼프 거리 구하는 공식
        int dx = Math.abs(...);
        int dy = Math.abs(...);
        return Math.max(dx, dy) <= this.vision;
    }
}
```

#### 2. 템플릿 메서드 패턴

```java
public abstract class Unit {
    protected abstract boolean canSeeGround();
    protected abstract boolean canSeeAir();

    protected final boolean canSee(Unit other) {  // 부모의 공통 로직
        boolean typeOk =
                (other.unitType == UnitType.GROUND && this.canSeeGround())
                || (other.unitType == UnitType.AIR && this.canSeeAir());
        // ... 거리 판정
    }
}

public class Tank extends Unit {
    @Override
    protected boolean canSeeGround() {
        return true;
    }

    @Override
    protected boolean canSeeAir() {
        return false;
    }
}
```

**템플릿 메서드 패턴으로 선택**

## 공격하는 함수

공격하는 함수는 인터페이스로 분리하는게 좋겠지?
- [[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#2.1 전반적인 규칙|2.1 전반적인 규칙]] 참고
	- "Thinkable" 을 따로 등록하니까
		- 생각을 해서 "공격, 이동, 아무것도 안 함"을 결정
