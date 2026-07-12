## Schedule

### 2.2.1 생성자 구현

몇 번 째 틱에서 켜야하는지
- startTick
몇 번의 틱이 경과한 후에 `Sprinkler`가 꺼야 하는지를 나타내는 `int`
- 지속 시간을 의미하는?
- durationTicks

상태 만들고 생성자로 매개변수 받아서 만들면 됨

## SmartDevice

"클래스로부터는 개체를 만들 수 없습니다."
- 추상 클래스죠?

### 2.2.1 `isOn()` 메서드를 구현한다

상태로 가지고 있다가 반환
- 자식 클래스에서 상태 값을 바꾸면 됨
	- setOn

### 2.2.2 `onTick()` 메서드를 구현한다

스프링클러
- 현재 몇 틱인지 카운트하기

드레이너
- 현재 몇 틱인지 카운트하기

공통이군?

몇 틱인지 상태로 가지고, non-abstract 가보자
- currentTick

### 2.2.3 `getTicksSinceLastUpdate()` 메서드를 구현한다

이것도 상태로 sinceLastUpdateTick 같은거 on/off 변할 때 상태 기록
- setOn
	- toggle (boolean 상태 바뀌면 현재 틱(상태로 가지고 있음)을 활용해 상태 저장)

## 스프링 클러

onTick 호출 시
- 현재 스케쥴을 처리하고 있는가?
	- 큐의 젤 위 보면 됨
		- 유효한 스케쥴이 나올 때 까지 버리는 아이디어
		- 유효한 스케쥴이면 큐의 맨 위에 두고 아래 로직 진행
	- 다음 로직으로 유효한지 여부를 확인
		- 2.3에서 "1. 스케줄은 그 스케줄의 시작 틱이 0이 아니고 `Sprinkler`가 꺼져야 되는 틱이 현재 틱 이상일 때만 유효합니다."
- 큐의 젤 위에 스케쥴(현재 처리 중 스케쥴)로 다음 로직 진행
	- 스케쥴의 시작 틱이 현재 틱이랑 같으면 스프링쿨러 키기
	- 스케쥴의 끝 틱이 현재 틱이랑 깥으면 스프링쿨러 끄기
	- on/off 가 변할 때만 sinceLastUpdateTick 값 변화
		- SmartDevice.setOn 맛있다...
		- 스프링 쿨러 커져있으면, 물 뿌리고
		- 꺼져있으면 안 뿌리고

틱마다 스케쥴 관리가 필요함

스케쥴 관리에 따라 on/off 상태가 변하고

물 뿌리는 트리거(메시지 publisher)은 Planter

## 드레이너

틱마다 추가적으로 할 일 없고

감지로 on/off

물 빼기

## 플랜터

### `installSmartDevice`

메시지 subscriber 등록하고
- 등록하면서 subscriber에 메시지 받을 수 있게 register
	- registerTo

과제3 시뮬레이터 매니저와 비교
