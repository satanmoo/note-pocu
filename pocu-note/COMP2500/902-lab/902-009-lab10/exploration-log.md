`MovieStore` 구현
- `Movie` 개체를 저장하는 컬렉션을 내부에 가지고 있어야 함
	- `List` vs `Set`
		- 실습에서 주어진 `Movie` 클래스를 확인해 보면 다음과 같음

```java
// academy.pocu.comp2500.lab10.pocuflix.Movie.java
package academy.pocu.comp2500.lab10.pocuflix;  
  
public final class Movie {  
    private final String title;  
    private final Rating rating;  
    private final int playTime;  
  
    public Movie(final String title,  
                 final Rating rating,  
                 final int playTime) {  
        this.title = title;  
        this.rating = rating;  
        this.playTime = playTime;  
    }  
  
    public String getTitle() {  
        return this.title;  
    }  
  
    public int getPlayTime() {  
        return this.playTime;  
    }  
  
    public Rating getRating() {  
        return this.rating;  
    }  
}
```

`equals()`, `hashCode()` 구현이 없음
- 스펙에도 딱히 `Movie`의 동등성을 비교하는 말이 없음
	- [[pocu-note/COMP2500/902-lab/902-009-lab10/spec#2.1 Request 클래스 구현하기|spec의 2.1]] 참고 — "사용자가 보고 싶은 영화의 제목을 지정하면 시스템이 나머지를 알아서 처리". 영화 탐색 기준은 `Movie` 동등성이 아니라 제목 문자열
- 2.1.1 `Request`의 생성자가 영화의 제목을 요구하기 때문에 영화를 찾는 기준이 제목이라고 판단해도 됨

컬렉션 후보
- `Map`
	- key를 영화 제목으로
	- key(제목)와 value(`Movie`)의 `title` 필드가 중복 저장되는 문제가 있음
		- Java 문자열 리터럴 구현(String literal pool) 때문에 실제로는 문제가 없을지도?
			- [[pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/index#영상 퀴즈|대입 연산자, 논리 연산자, 캐스팅]] 참고 — JVM의 **String literal pool** 매커니즘: 같은 내용의 리터럴이 여러 번 나와도 개체는 하나만 존재
- `List`
	- 검색할 때 순회하면서 제목으로 찾으면 됨

`Set`을 사용하려면 `equals()`/`hashCode()` 메서드를 추가해야 하기 때문에 선택지에서 제외

`remove()` 메서드에서 색인으로 영화를 제거함
- `List`가 더 어울림

```java
// academy.pocu.comp2500.lab10.MovieStore.java
package academy.pocu.comp2500.lab10;  
  
import academy.pocu.comp2500.lab10.pocuflix.Movie;  
import academy.pocu.comp2500.lab10.pocuflix.NotFoundResult;  
import academy.pocu.comp2500.lab10.pocuflix.OkResult;  
import academy.pocu.comp2500.lab10.pocuflix.ResultBase;  
  
import java.util.ArrayList;  
  
public final class MovieStore implements IRequestHandler {  
    private final ArrayList<Movie> movies;  
  
    public MovieStore() {  
        this.movies = new ArrayList<>();  
    }  
  
    public void add(final Movie movie) {  
        this.movies.add(movie);  
    }  
  
    public boolean remove(final int index) {  
        if (index < 0 || index >= this.movies.size()) {  
            return false;  
        }  
  
        this.movies.remove(index);  
        return true;  
    }  
  
    @Override  
    public ResultBase handle(final Request request) {  
        final String moveTitle = request.getTitle();  
  
        for (final Movie movie : this.movies) {  
            if (movie.getTitle().equals(moveTitle)) {  
                return new OkResult(movie);  
            }  
        }  
  
        return new NotFoundResult();  
    }  
}
```

`MaintenanceMiddleware` 클래스는 다음 핸들러를 나타내는 `IRequestHandler`을 생성자로 받음
- 이 실습이 책임 연쇄 디자인 패턴 연습
	- [[pocu-note/COMP2500/012-design-patterns/012-018-chain-of-responsibility-and-logger/index|책임 연쇄 패턴과 로거]] 참고
	- [[pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/index|바른 책임 연쇄 패턴 예]] 참고 — `next` 멤버 변수로 다음 핸들러를 들고 있다가 자기가 처리 못 하면 넘기는 구조

`ServiceUnavailableResult` >> `MaintenanceMiddleware` 안의 내포 클래스로 구현하는게 좋음 `MaintenanceMiddleware` 만 사용하잖아?

[[pocu-note/COMP2500/902-lab/902-009-lab10/spec#2.4.3 MaintenanceMiddleware 클래스에 handle() 메서드를 구현한다|스펙의 2.4.3]] "Pocuflix가 점검 중이라면 `ServiceUnavailableResult` 개체를 반환합니다. 아니라면 다음 핸들러에 요청을 넘깁니다." 는 책임 연쇄 패턴을 명확하게 보여줌

```java
package academy.pocu.comp2500.lab10;  
  
import academy.pocu.comp2500.lab10.pocuflix.ResultBase;  
import academy.pocu.comp2500.lab10.pocuflix.ResultCode;  
  
import java.time.OffsetDateTime;  
  
public final class MaintenanceMiddleware implements IRequestHandler {  
    private final IRequestHandler next;  
    private final OffsetDateTime startTime;  
  
    public MaintenanceMiddleware(final IRequestHandler next, final OffsetDateTime startTime) {  
        this.next = next;  
        this.startTime = startTime;  
    }  
  
    @Override  
    public ResultBase handle(final Request request) {  
        final OffsetDateTime endTime = this.startTime.plusHours(1);  
        final OffsetDateTime now = OffsetDateTime.now();  
  
        if (!now.isBefore(this.startTime) && !now.isAfter(endTime)) {  
            if (this.next != null) {  
                return next.handle(request);  
            }  
        }  
  
        return new ServiceUnavailableResult(this.startTime, endTime);  
    }  
  
    private final static class ServiceUnavailableResult extends ResultBase {  
        private final OffsetDateTime startTime;  
        private final OffsetDateTime endTime;  
  
        public ServiceUnavailableResult(final OffsetDateTime startTime, final OffsetDateTime endTime) {  
            super(ResultCode.SERVICE_UNAVAILABLE);  
            this.startTime = startTime;  
            this.endTime = endTime;  
        }  
  
        public OffsetDateTime getStartTime() {  
            return this.startTime;  
        }  
  
        public OffsetDateTime getEndTime() {  
            return this.endTime;  
        }  
    }  
}
```

책임 연쇄 패턴에 따라 자신이 handle 하거나 다음으로 책임을 넘기거나
- handle 하면 책임을 넘기지 않아야함

`AuthorizationMiddleware` 클래스는 `MaintenanceMiddleware` 와 거의 동일
- `Set`을 이용하는 점만 다름

`CacheMiddleware`은 영화별로 expiry count를 가져야함

캐시가 되어 있는지 안 되어있는지 구분
- 예제에서는 `MovieStore`을 생성자의 인자로 받기 때문에 다음 `IRequestHandler`가 `MovieStore`
	- 다음 `IRequestHandler`의 결과에 따라 분기하기

다음 `IRequestHandler`의 결과가 `OkResult`면 캐싱

캐시가 만료되면 캐시에서 제거

캐시를 표현하기 위한 컬렉션은 `Map`이 적절함
- key는 영화제목
- value는 cache expiry count

`OkResult` 받으면 만료 카운트(생성자의 매개변수로 받은 값)만큼 캐시 생성
- 다음 요청 시 expiry count 감소하고, 감소한 결과를 반환
- `cache` 컨테이너의 value 값이 1이되면 다음 요청은 캐시가 만료된다는 의미
	- 캐시에서 제거

```java
package academy.pocu.comp2500.lab10;  
  
import academy.pocu.comp2500.lab10.pocuflix.ResultBase;  
import academy.pocu.comp2500.lab10.pocuflix.ResultCode;  
  
import java.util.HashMap;  
  
public final class CacheMiddleware implements IRequestHandler {  
    private final IRequestHandler next;  
    private final HashMap<String, Integer> cache;  
    private final int maxExpiryCount;  
  
    public CacheMiddleware(final IRequestHandler next, final int maxExpiryCount) {  
        this.next = next;  
        this.cache = new HashMap<>();  
        this.maxExpiryCount = maxExpiryCount;  
    }  
  
    @Override  
    public ResultBase handle(final Request request) {  
        final String movieTitle = request.getTitle();  
  
        if (!this.cache.containsKey(movieTitle)) {  
            if (this.next != null) {  
                final ResultBase result = this.next.handle(request);  
                if (result.getCode() == ResultCode.OK) {  
                    this.cache.put(movieTitle, maxExpiryCount);  
                }  
  
                return result;  
            }  
        }  
  
        final int remainingExpiryCount = this.cache.get(movieTitle) - 1;  
        if (remainingExpiryCount == 1) {  
            this.cache.remove(movieTitle);  
        } else {  
            this.cache.put(movieTitle, remainingExpiryCount);  
        }  
  
        return new CachedResult(remainingExpiryCount);  
    }  
  
    private static final class CachedResult extends ResultBase {  
        private final int expiryCount;  
  
        public CachedResult(final int expiryCount) {  
            super(ResultCode.NOT_MODIFIED);  
            this.expiryCount = expiryCount;  
        }  
  
        public int getExpiryCount() {  
            return this.expiryCount;  
        }  
    }  
}
```

구현 완료 후 `Program.java` 테스트에서 막힘

`MaintenanceMiddleware.handle()`의 점검 판정 조건이 뒤집혀 있었음 → 고침
- 점검 중이면 다음으로 넘기고, 점검 아니면 `ServiceUnavailableResult`를 반환하고 있었음
- 스펙 3절 테스트의 첫 `handle()` 호출(점검 시작 5초 전 → `OkResult` 기대)을 손추적해서 발견

107 line 예측("내포 클래스로 구현하는게 좋음, `MaintenanceMiddleware`만 사용하잖아?")이 틀렸음
- [[pocu-note/COMP2500/902-lab/902-009-lab10/spec#3. 본인 컴퓨터에서 테스트하는 법|스펙 3절]] 테스트 코드가 전제를 깸
	- `import academy.pocu.comp2500.lab10.ServiceUnavailableResult;` — 최상위 클래스로 import
	- 마지막 블록에서 `new ServiceUnavailableResult(now, now)`로 직접 생성해서 `ResultValidator` 검증에 사용 — `MaintenanceMiddleware`만 쓰는 게 아니었음
- `UnauthorizedResult`, `CachedResult`도 같은 이유로 컴파일 실패 (테스트가 직접 import + 캐스팅)
- 셋 다 최상위 public 클래스로 꺼냄 (출처: LLM 세션에서 추출 작업 수행)
- 교훈 후보: "이 클래스를 누가 쓰는가"는 내 구현 코드만 보고 판단하면 안 되고, 스펙의 테스트 코드(사용처)까지 봐야 함

게터 이름도 스펙과 어긋나 있었음 → `getStartTime()`/`getEndTime()`을 [[pocu-note/COMP2500/902-lab/902-009-lab10/spec#2.4.2 ServiceUnavailableResult 클래스 구현하기|spec 2.4.2]]대로 `getStartDateTime()`/`getEndDateTime()`으로 수정

[[pocu-note/COMP2500/902-lab/902-009-lab10/spec#3. 본인 컴퓨터에서 테스트하는 법|스펙 3절 테스트 케이스 코드]] 참고

[[pocu-note/COMP2500/902-lab/902-009-lab10/spec#2.6 CacheMiddleware 클래스 구현하기|스펙 2.6]]의 "사용자는 예전에 받아놓은 영화를 다시 보면 되니까요."을 보면 사용자별로 캐싱해야 함을 알 수 있음

캐시 로직에 대한 해석
- 생성자의 매개변수로 받는 캐시를 만료시키는 요청 수를 n이라고 하면
- 클라이언트는 `CachedResult`를 받았을 때 expiry count 만큼 더 요청 보내면 캐시가 아닌 `OkResult`가 온다고 생각하면 됨
	- [[pocu-note/COMP2500/902-lab/902-009-lab10/spec#2.6.3 CacheMiddleware 클래스에 handle() 메서드를 구현한다|스펙 2.6.3]]의 예시에서는 4번 더 요청 보내면, 마지막으로 보낸 4번째 요청은 `OkResult`

요청이 왔을 때
- 해당 유저가 처음으로 요청하면 `userCache` 맵 생성
	- 캐시 미스
- `userCache` 맵에서 key인 영화 제목으로 조회
- 조회 후 남은 expiry count 감소
- 감소시키고 남은 expiry count 값이 0이면
	- 캐시 미스
- 감소시키고 남은 expiry count 값이 0이 아니면
	- 캐시 히트
		- 남은 expiry count 값을 넣어서 `CachedResult`

```java
{
	CacheMiddleware middleware = new CacheMiddleware(store, 3);

	Request request = new Request("Harry Potter");

	ResultBase result = middleware.handle(request);

	assert (result.getCode() == ResultCode.OK);
	assert (result instanceof OkResult);

	request = new Request("Harry Potter");

	result = middleware.handle(request);

	assert (result.getCode() == ResultCode.NOT_MODIFIED);
	assert (result instanceof CachedResult);

	CachedResult cachedResult = (CachedResult) result;

	assert (cachedResult.getExpiryCount() == 2);

	request = new Request("Harry Potter");
	request.setUser(new User("Jane", "Doe"));

	result = middleware.handle(request);

	assert (result.getCode() == ResultCode.OK);
	assert (result instanceof OkResult);

	request = new Request("Harry Potter");

	result = middleware.handle(request);

	assert (result.getCode() == ResultCode.NOT_MODIFIED);
	assert (result instanceof CachedResult);

	cachedResult = (CachedResult) result;

	assert (cachedResult.getExpiryCount() == 1);

	request = new Request("Harry Potter");
	request.setUser(new User("Jane", "Doe"));

	result = middleware.handle(request);

	assert (result.getCode() == ResultCode.NOT_MODIFIED);
	assert (result instanceof CachedResult);

	cachedResult = (CachedResult) result;

	assert (cachedResult.getExpiryCount() == 2);

	request = new Request("Harry Potter");

	result = middleware.handle(request);

	assert (result.getCode() == ResultCode.OK);
	assert (result instanceof OkResult);
}
```

테스트 코드를 보니까 `setUser()` 메서드를 호출하지 않은 `Request`도 있음
- 익명 `Request`도 하나의 유저로 간주하고 익명 유저의 캐시도 두면 됨

`Request` 클래스의 `getUser()` 메서드를 수정하자
- 익명임을 명확하게 드러내기 위해 null 반환을 메서드에 명시

```java
package academy.pocu.comp2500.lab10;  
  
import academy.pocu.comp2500.lab10.pocuflix.User;  
  
public class Request {  
    private final String title;  
  
    private User user;  
  
    public Request(final String title) {  
        this.title = title;  
    }  
  
    public void setUser(final User user) {  
        this.user = user;  
    }  
  
    public String getTitle() {  
        return this.title;  
    }  
  
    public User getUserOrNull() {  
        return this.user;  
    }  
}
```

`CacheMiddleware` 다음과 같이 수정

```java
package academy.pocu.comp2500.lab10;  
  
import academy.pocu.comp2500.lab10.pocuflix.ResultBase;  
import academy.pocu.comp2500.lab10.pocuflix.ResultCode;  
import academy.pocu.comp2500.lab10.pocuflix.User;  
  
import java.util.HashMap;  
  
public final class CacheMiddleware implements IRequestHandler {  
    private final IRequestHandler next;  
    private final HashMap<User, HashMap<String, Integer>> cache;  
    private final int maxExpiryCount;  
  
    public CacheMiddleware(final IRequestHandler next, final int maxExpiryCount) {  
        this.next = next;  
        this.cache = new HashMap<>();  
        this.maxExpiryCount = maxExpiryCount;  
    }  
  
    @Override  
    public ResultBase handle(final Request request) {  
        final String movieTitle = request.getTitle();  
        final User userOrNull = request.getUserOrNull();  
  
        User user;  
        if (userOrNull == null) {  
            user = new User("GUEST", "GUEST");  
        } else {  
            user = userOrNull;  
        }  
  
        if (!this.cache.containsKey(user)) {  
            this.cache.put(user, new HashMap<>());  
        }  
  
        final var userCache = this.cache.get(user);  
        if (!userCache.containsKey(movieTitle)) {  
            final ResultBase result = this.next.handle(request);  
            if (result.getCode() == ResultCode.OK) {  
                userCache.put(movieTitle, maxExpiryCount);  
            }  
            return result;  
        }  
  
        final int remainingExpiryCount = userCache.get(movieTitle) - 1;  
        if (remainingExpiryCount == 0) {  
            final ResultBase result = this.next.handle(request);  
            if (result.getCode() == ResultCode.OK) {  
                userCache.put(movieTitle, maxExpiryCount);  
            }  
            return result;  
        }  
        userCache.put(movieTitle, remainingExpiryCount);  
  
        return new CachedResult(remainingExpiryCount);  
    }  
}
```

GUEST 센티널 `User`에 구멍이 있었음
- 실제 사용자가 `new User("GUEST", "GUEST")`로 요청하면 익명 요청과 캐시 카운터를 공유해버림
	- `User`의 `equals()`/`hashCode()`가 username+password 기준이라 센티널과 구분 불가

`HashMap`은 null key가 성립함
- 내부 해시 함수가 null을 특별 취급: `(key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16)` — `hashCode()` 호출 없이 해시 0으로 0번 버킷에 일반 항목처럼 저장
- 조회 시에도 `equals()` 호출 전에 `==` 비교를 먼저 하므로 NPE 없음
- 단 `Map` 인터페이스의 보장이 아니라 `HashMap` 구현의 성질 — `Hashtable`/`ConcurrentHashMap`은 null key에 NPE, `TreeMap`은 `compareTo()`에서 NPE
- 따라서 센티널 `User`를 만들 필요 없이 `getUserOrNull()`의 반환값을 그대로 key로 사용 (익명 = null key)

`CacheMiddleware`을 다음과 같이 수정

```java
package academy.pocu.comp2500.lab10;

import academy.pocu.comp2500.lab10.pocuflix.ResultBase;
import academy.pocu.comp2500.lab10.pocuflix.ResultCode;
import academy.pocu.comp2500.lab10.pocuflix.User;

import java.util.HashMap;

public final class CacheMiddleware implements IRequestHandler {
    private final IRequestHandler next;
    private final HashMap<User, HashMap<String, Integer>> cache;
    private final int maxExpiryCount;

    public CacheMiddleware(final IRequestHandler next, final int maxExpiryCount) {
        this.next = next;
        this.cache = new HashMap<>();
        this.maxExpiryCount = maxExpiryCount;
    }

    @Override
    public ResultBase handle(final Request request) {
        final String movieTitle = request.getTitle();
        final User userOrNull = request.getUserOrNull();

        if (!this.cache.containsKey(userOrNull)) {
            this.cache.put(userOrNull, new HashMap<>());
        }

        final var userCache = this.cache.get(userOrNull);
        if (!userCache.containsKey(movieTitle)) {
            final ResultBase result = this.next.handle(request);
            if (result.getCode() == ResultCode.OK) {
                userCache.put(movieTitle, maxExpiryCount);
            }
            return result;
        }

        final int remainingExpiryCount = userCache.get(movieTitle) - 1;
        if (remainingExpiryCount == 0) {
            final ResultBase result = this.next.handle(request);
            if (result.getCode() == ResultCode.OK) {
                userCache.put(movieTitle, maxExpiryCount);
            }
            return result;
        }
        userCache.put(movieTitle, remainingExpiryCount);

        return new CachedResult(remainingExpiryCount);
    }
}
```

[[pocu-note/COMP2500/012-design-patterns/012-019-correct-chain-of-responsibility-example/index|바른 책임 연쇄 패턴 예]] 강의 노트에 따라 관성적으로 null check 해서 다음 `IRequestHandler`로 책임 전달
- 이 실습 스펙에서는 필요없음 — 미들웨어 생성자는 항상 다음 핸들러를 받고(2.4.1/2.5.1/2.6.1), 체인의 말단은 `MovieStore`가 담당
- null check 제거

null check가 만든 fall-through 버그
- `AuthorizationMiddleware`: 허용된 사용자인데 `next == null`이면 안쪽 if를 통과 못 하고 `UnauthorizedResult`로 떨어짐
- `MaintenanceMiddleware`: 점검 기간 밖인데 `next == null`이면 `ServiceUnavailableResult`로 떨어짐
- Happy Path를 if 안에 중첩하고 에러 반환을 fall-through로 두는 구조가 원인
	- 가드 절(에러를 먼저 return)로 뒤집으면 null check와 함께 사라짐

`AuthorizationMiddleware`의 `handle()`을 다음과 같이 수정

```java
@Override
public ResultBase handle(final Request request) {
    if (!this.authorizedUsers.contains(request.getUserOrNull())) {
        return new UnauthorizedResult();
    }

    return this.next.handle(request);
}
```

`MaintenanceMiddleware`의 `handle()`을 다음과 같이 수정

```java
@Override
public ResultBase handle(final Request request) {
    final OffsetDateTime endTime = this.startTime.plusHours(1);
    final OffsetDateTime now = OffsetDateTime.now();

    if (!now.isBefore(this.startTime) && !now.isAfter(endTime)) {
        return new ServiceUnavailableResult(this.startTime, endTime);
    }

    return this.next.handle(request);
}
```

수강생 공유 테스트를 `Program.java`에 `test6()`~`test11()`로 추가
- `test11`(만료 카운트 0)에서 assert 실패 발견
	- 트레이스: 카운트 0을 그대로 캐싱 → 다음 동일 요청에서 remaining = 0 - 1 = -1 → `CachedResult(-1)` 반환
	- 카운트 1을 고칠 때 세운 해석 "만료 카운트 n = n번째 동일 요청이 미스와 동일"을 n=0에 적용하면 **0번째 요청부터 미스 = 아무것도 캐싱하지 않아야 함**

수정 방향: 캐싱 조건에 `maxExpiryCount > 0` 추가 (만료 판정을 `<= 0`으로 넓히는 방법도 있지만, "캐시에 넣을 이유가 없는 건 애초에 안 넣는다"가 [[pocu-note/COMP2500/902-lab/902-009-lab10/spec#2.6 CacheMiddleware 클래스 구현하기|스펙 2.6]]의 "다른 종류의 결과는 캐시에 넣을 이유가 없죠"와 같은 논리라 채택)

중복이던 캐시 미스 처리(다음 핸들러로 전달 → `OkResult`면 캐싱)를 `handleCacheMiss()` private 메서드로 추출
- "만료된 n번째 요청은 미스와 동일하게 동작"이라는 해석이 코드 구조로 드러남

임시로 넣었던 clamp(`Math.max(userCache.get(movieTitle) - 1, 0)`)는 제거하고 assert로 불변식 명시
- `maxExpiryCount > 0`일 때만 캐싱하므로 캐시에 저장되는 값은 항상 1 이상 → 감소 후 `remainingExpiryCount >= 0`이 불변식
- clamp는 일어날 수 없는 상황(음수)의 방어라 불변식을 오히려 흐림 — null check 때와 같은 교훈
- `assert (remainingExpiryCount >= 0);`로 가정을 명시 (전체 테스트를 `-ea`로 돌려 불변식 성립 확인)

`CacheMiddleware`의 `handle()`을 다음과 같이 수정

```java
@Override
public ResultBase handle(final Request request) {
    final String movieTitle = request.getTitle();
    final User userOrNull = request.getUserOrNull();

    if (!this.cache.containsKey(userOrNull)) {
        this.cache.put(userOrNull, new HashMap<>());
    }

    final HashMap<String, Integer> userCache = this.cache.get(userOrNull);
    if (!userCache.containsKey(movieTitle)) {
        return handleCacheMiss(request, userCache);
    }

    final int remainingExpiryCount = userCache.get(movieTitle) - 1;

    assert (remainingExpiryCount >= 0);

    if (remainingExpiryCount == 0) {
        return handleCacheMiss(request, userCache);
    }

    userCache.put(movieTitle, remainingExpiryCount);

    return new CachedResult(remainingExpiryCount);
}

private ResultBase handleCacheMiss(final Request request, final HashMap<String, Integer> userCache) {
    final ResultBase result = this.next.handle(request);
    if (result.getCode() == ResultCode.OK && this.maxExpiryCount > 0) {
        userCache.put(request.getTitle(), this.maxExpiryCount);
    }

    return result;
}
```

빌드봇 H01~H05(IsValidFor...Result) 실패
- `isValid()`가 `getCode()` 비교만 하고 있었음
- 힌트: 개체 검사(instanceof)도 필요 (출처: 수강생 Slack)
- 스펙에서 재도출: [[pocu-note/COMP2500/902-lab/902-009-lab10/spec#2.7 ResultValidator 클래스 구현하기|스펙 2.7]] "캐스팅을 하기 전에 결과 개체들의 **실제 데이터 형**이 캐스팅을 하려는 클래스하고 일치하는지 검증" — 코드값 비교는 '실제 데이터 형' 검증이 아님. 코드값은 맞지만 타입이 다른 `ResultBase` 자식이 오면 통과시켜버림
- 수정: 코드값 일치 확인 후 `ResultCode`별 `instanceof` 검사 (switch, 도달 불가 default에는 `assert (false)`)
- `Program.java`에 `test12()` 회귀 테스트 추가 — 코드가 OK인 가짜 `ResultBase` 익명 자식은 invalid여야 함

```java
public boolean isValid(final ResultCode resultCode) {
    if (this.result.getCode() == resultCode) {
        switch (resultCode) {
            case OK:
                return this.result instanceof OkResult;
            case NOT_MODIFIED:
                return this.result instanceof CachedResult;
            case SERVICE_UNAVAILABLE:
                return this.result instanceof ServiceUnavailableResult;
            case UNAUTHORIZED:
                return this.result instanceof UnauthorizedResult;
            case NOT_FOUND:
                return this.result instanceof NotFoundResult;
            default:
                assert (false) : "unknown result code";
        }
    }

    return false;
}
```