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

공격하는 함수 전 공격이라는 동작을 결정하는 "생각"이라는 기능이 필요함
- [[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#2.10 SimulationManager 클래스를 구현한다|2.10 SimulationManager 클래스를 구현한다]] 에서 `update`함수의 동작 참고
	- 마린은 생각할 수 있는 유닛 같아
		- 공격/이동을 결정하니까

"생각"(행동 결정)과 "실행"은 분리되어 있음
- [[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#A.2 시뮬레이션 규칙|A.2 시뮬레이션 규칙]] 참고
	- 각 유닛의 이동 순서가 달라져도 시뮬레이션 결과는 동일함
	- 각 유닛의 공격 순서가 달려저도 시뮬레이션 결과는 동일함
- 분리해야 각 유닛이 동일한 상황(스냅샷)을 보고 실행할 동작이 결정나니까, 실행 간의 순서가 바뀌어도 문제가 없음
- 만약 분리되지 않아서 먼저 실행한 유닛에 따라 상황(스냅샷)이 바뀌진 않음

따라서 생각하는 함수 기능을 먼저 구현해

## 생각하는 함수

[[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#2.10 SimulationManager 클래스를 구현한다|2.10 SimulationManager 클래스를 구현한다]] 를 보면 `registerThinkable` 함수가 있음
- 일단 접미사가 "~able" 이니 인터페이스로 구현해볼까?
	- 어떤 유닛은 생각, 어떤 유닛은 움직일 수 있고, 등등
		- 다중 상속 관점
			- [[pocu-note/COMP2500/006-object-modeling-2/006-016-add-wristwatch-and-multiple-inheritance/index|006-016-add-wristwatch-and-multiple-inheritance]]
			- 유닛의 능력이 상속 트리로 표현하기 어려움
	- `registerThinkable` 함수의 매개변수 타입을 `IThinkable` 로

`IThinkable` 에 생각하는 함수의 시그니처를 작성해보자

반환값은 enum으로 하면 되겠지?
- `SimulationManager.update` 내부에서 사용하기 편하잖아?

매개변수로는 유닛 목록을 받으면 판단할 수 있잖아?
- 시뮬레이터가 유닛 목록을 관리하니 넣어주면 되고

### 마린의 생각하는 함수

==마린==의 생각하는 함수에 어떤 식으로 구현할까?
- [[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#A.2 시뮬레이션 규칙|A.2 시뮬레이션 규칙]]
	- A.2.9 에서 공격을 먼저 판단해야 함을 알 수있음
- 공격 
	- 시야에서 발견한 적을 공격
	- 공격 위치 정해서 상태로 기록
		- [[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#A.2 시뮬레이션 규칙|A.2 시뮬레이션 규칙]]의 A.2.13 참고
			- 교전/이동 규칙의 각 단계를 실행한 후에도 적이 한 명으로 특정되지 않고 여럿이 남아있다면 남은 적들에 대해 다음 단계들을 실행
- 이동
	- 시야에서 발견했지만, 공격 구역이 아닐 때
	- 이동 위치 정해서 상태로 기록
		- A.2.13 규칙 그대로 적용
- 아무 행동 X
	- 시야에 적이 없는 경우

이동 로직을 구현하기 위해 이동 함수를 구현해보자

## 이동하는 함수

[[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#2.10 SimulationManager 클래스를 구현한다|2.10 SimulationManager 클래스를 구현한다]] 를 보면 `registerMovable` 함수가 있음
- `IThinkable` 처럼 움직이는 함수를 구현하자

A.2.6
- 바로 인접한 타일
	- 동서남북 중 한 방향
	- 한 프레임에 한 칸만
	- [[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#A.2 시뮬레이션 규칙|A.2 시뮬레이션 규칙]] 참고

공격처럼 A.2.13 그대로 적용
- 스냅샷 기반 이동 위치 정하기

반환값은 `Int2DVector`로 위치 반환하면 될 것 같은데?
매개변수는 `Think`처럼 유닛 목록을 받으면 되지 않을까?
- 유닛 목록이 필요없으면 받아서 안 쓰면 되고..
	- 이 부분 아쉬우면 최적화
- 일단 마린은 필요하네

공격/이동 함수를 구현하다보니, 연쇄적으로 필터링하는 구조가 스펙과 매칭하기 좋고, 스펙을 보면서 디버깅하기 좋음

## 필터링

### 마린이 필요한 필터링

공격

1. 공격 가능 지역으로 필터링
	- 자기 자신은 제외
2. HP가 가장 낮은 유닛으로 필터링
3. 시계 방향 점수로 필터링
	- 공격 가능 지역은 하위 유닛에 "vector:점수" 룩업 테이블을 이용함
		- 이 룩업 테이블은 "1.공격 가능 지역으로 필터링"에서도 재활용

이동

1. 볼 수 있는 유닛 확인
	- [[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#A.3.1 해병(Marine, 마린)|#A.3.1 해병(Marine, 마린)]] 참고, 해병은 볼 수 있는 유닛이 없으면 움직이지 않음
2. 거리로 필터링
3. HP가 가장 낮은 유닛으로 필터링
4. 시계 방향 점수로 필터링
	- 공격과 동일하게 룩업 테이블 활용해 "방향:점수" 관계를 저장

참고로 타일에 유닛이 겹쳐 있을 수 있음
- [[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#A.3.1 해병(Marine, 마린)|#A.3.1 해병(Marine, 마린)]] 에서 해병은 자신 위치의 유닛을 공격한다고 명시
- [[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#3. 본인 컴퓨터에서 테스트하는 법|c3. 본인 컴퓨터에서 테스트하는 법]] 에서 "한 타일 안에 여러 유닛이 있을 경우"가 명시되어 있음
- [[pocu-note/COMP2500/901-assignmnet/901-003-assignment-3/spec#A.2 시뮬레이션 규칙|A.2 시뮬레이션 규칙]]에서 A.2.13 "어떤 단계를 실행 후, 적이 하나로 특정되었다면"에서 "하나로 특정"은 필터링 후 유닛이 하나 남는게 아니라, ==타일(위치)==가 하나 남는 것으로 해석
	- A.3.1 해병에서 해병은 "타일"을 공격한다고 명시
	- A.2.10 시뮬레이션 규칙 "유닛이 어떤 타일을 공격하면, 그 타일 안에 있는 다른 모든 유닛이 공격을 받습니다."
	- 이를 통해 타일 기준임을 알 수 있음

> [!TODO] 정확한 필터링 로직은 빌드봇 돌려보거나 질문