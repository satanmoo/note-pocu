---
tags:
  - assignment1
  - COMP2500
---
## 고민

유저의 종류를 구분해 유저 클래스의 상태로 가지는 것이 필요한가?
- 즉 `Enum UserType` 같은 것을 만들어야 하는가?
	- 필요없음
- 유저를 식별할 수 있으면 됨
	- 방문자인지 블로그 주인인지 글 작성자인지 등등 구별은 식별자로 수행 가능
	- [[#Hint 1]] 참고

블로그에 상태로 유저를 기록함
- 블로그 주인을 상태로 가지기 위함
	- 블로그 주인을 상태로 가져서 무엇을 할 것인가?
		- ~~블로그 주인만 글을 써야함~~
		- 블로그 주인 여부도 중요하지 않음, 블로그 주인 외에 여러 사람이 글을 작성할 수 있음
- 블로그 주인을 상태로 가질 필요가 없음


유저의 고유 식별자
- ~~long 타입 사용하고 0부터 auto-increment~~
	- ~~유틸리티 클래스를 만들 수 없어서 힘듬~~
	- ~~id generator 클래스를 등록할 방법이 없음~~
- ~~UUID~~
- Email
	- 이 고민이 의미가 없었음
	- 결국 유저를 매번 생성해도 똑같은 유저임을 유지해야 함
		- 외부에서 유저에 대한 식별자를 받아오도록 구현

이미 작성한 블로그의 글의 상태를 바꾸는 기능
- 본문 고치기
- 태그 달기
- 댓글 달기
이 기능들은 블로그 클래스의 함수를 껍데기만 지나가고, 내부적으로 동작은 글에서 수행함
- 블로그는 글을 관리하는 컨테이너 다음과 같은 기능을 수행
	- ~~글 찾기~~
	- ~~작성자와 수정자가 일치하는지 검증 수행~~
		- 이를 수행할 필요가 없나?
- 글의 수정은 글이 담당함
	- autonomy(개체가 스스로 상태를 책임)
매개변수로 글을 받는 것이 옳은가?
- UUID 를 주는 방식은 OO적 상호작용과 거리가 먼가?
- 개체 협력은 개체 참조로
	- [[pocu-note/COMP2500/003-object-modeling-1/003-010-modeling-6/index|모델링 6: OO적 상호작용]] 참고
블로그가 글을 보관하고, 그 글을 찾기 위해 매개변수로 글의 식별자를 보내는 방법
- 개체간 상호작용이 부족함
- 글의 식별자는 밖에서 누가 가지고 있는거?
- `public void modifyTitle(final UUID postId, final User user, final String title)`
블로그가 글을 보관하고 글이 이미 존재한다는 가정에 설계
- 여기서 중요한 것은 글의 참조를 블로그 외부에서 알 고 있음
	- 글이 이미 존재하기 때문에 글의 참조를 블로그 외부에서 알고 전달할 수 있는 개념
방법 1:
`public void modifyTitle(final UUID postId, final User user, final String title` 처럼 `postId`를 넘기고 블로그는 내부의 해시셋에서 포스트를 찾아오는 동작을 수행하는 구현
방법 2: 
블로그에 `public void modifyTitle(final Post post, final User user, final String title)` 그리고 Post의 메서드(`void setTitle(final String title)`)
- 블로그 외부에서 Post를 알고 있으니 가능한 방법
- 블로그와 포스트 동일한 패키지에 두고 Post의 메서드는 디폴트 접근 제어자 사용
- 근데 이러면 블로그에서 굳이 찾을 이유가 없음
방법 3:
- 블로그에 `public void modifyPost(final Post post)`
- 애초에 수정된 Post 개체를 받음
	- 수정 방안으로는 Post에서 setter 유사한 메서드 제공하거나
	- 복사 생성자 제공
- 블로그는 자신의 HashSet에 속한 개체인지 확인하고 교체만 함
방법 4:
- 블로그의 역할을 글 읽어오는 놈으로 축소
- 글 수정은 Post가 담당함
	- Post가 자신의 수정을 담당하는게 개념상 맞음
		- 다른 유저가 수정하려할 때 막는 것도 Post
- 애초에 글의 상태를 변화시킬 때 글을 찾을 필요가 없음
	- OOP 관점에서 글의 상태를 수정할 때 이 글이 어디에 위치한가가 중요하지 않음!!!

> [!quote]
> 
> 블로그는 어쩔수 없이 포스트를 개체로든 식별바로든 저장하고 있어야할겁니다. 생성을 블로그 개체 내부에서 하지 않을 뿐이죠
> 
> 그럼 포스트를 변경하는 방법은  
> 1) blog.modifyposttitle()을 하거나  
> 2) post = Blog.getpost()를 한뒤 post.modifytitle() 을 호출하겠죠
>    
> 1번 방법은 사실 oop프로그래머가 아닌 데이터베이스 프로그래머 혹은 C 프로그래머(절차적 언어) 들이 많이 쓰는 방법입니다.
> 
> 굉장히 꿀팁을 하나 드리면 어떤 개체의 상태를 무언가로 한번에 곧바로 바꾸는 것은 oop에서는 거의 대부분 setter로 처리합니다

결론적으로 방법 4가 옳음
- 이게 제일 OOP
- 블로그에서 글을 찾는 방식은 외부에 데이터가 저장되어 있다는 가정에서 나온 생각
댓글을 읽어오는 기능은 포스트에 두는게 맞음
- 블로그가 포스트를 읽어오는 기능을 가지고 있는 것과 유사함
- 포스트에 댓글이 속하는 개념
- 댓글을 다는 기능도 글을 추가하는 기능을 블로그가 담당하는 것과 유사하게 글이 처리하면 됨

대댓글의 경우 댓글이 가지고 있으면 됨
- 재귀

리엑션은 리엑션 종류별로 개수를 기록해야함
- HashMap
- Key에 Enum 사용해도 괜찮겠지?
	- EnumMap 이라는 자료구조도 제공하는 군

참조형 반환할 때 불변으로 반환하자 특히 컬렉션
- [[pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/index#참조형 인자에 final 키워드 붙이기|참조형 인자, 열거형/참조형 인자와 final 키워드]] 참고

글의 작성자가 글의 상태를 변화시낄 때 modifiedAt 값이 갱신되야함
- 태그 다는 것도???
> [!TODO]  ~~빌드봇: 작성자가 태그 달 때 modifiedAt 값 갱신되는지 여부~~

메소드 등록 섹션 보니까
- 태그 필터를 설정하는 메서드 등록
- 즉 블로그에 `public ArrayList<Post> getPosts(EPostSortingType sortingType, HashSet<Tag> tags, HashSet<User> authors)`이렇게 함수를 선언하지 않음
	- 블로그가 태그 필터를 상태로 가지고 있네?
- 작성자 필터, 정렬 방법  모두 상태로 가지고 있네..?
- 이게 더 OOP적으로 맞구나
- 원래 방식이 쿼리에 가깝구나

정렬 방법의 기본값은?
- 작성 일시 내림차순으로 하면되겠지
	- 이게 젤 위에 있으니까?
- ENUM에서 0번째 값
	- 정렬이 적용되지 않는다는 개념은 없으니
	- ENUM 5개 중에 반드시 하나는 있어야 하는 상황에서 기본값을 무엇으로 할 것인가 문제
	- [[pocu-note/COMP2500/901-assignmnet/901-001-assignment-1/spec#3.3 블로그 글 목록 가져오기]]에서도 추론할 수 있음

태그 필터를 재설정할 때 기존은 지우고 새로 대입하는게 맞겟지?
- 보통 그렇잖아? 
- 경험상
- 작성자 필터도 똑같이
태그 필터 적용할 때 어떤 글의 태그가 하나라도 태그 필터에 속하면 그 글도 포함해서 반환해야함!

대댓글에도 추천 수 - 비추천 수 내림차순 정렬 적용

[[pocu-note/COMP2500/901-assignmnet/901-001-assignment-1/spec#2.1 전반적인 규칙]]에서 "8. 여러분이 작성하는 클래스들은 반드시 `academy.pocu.comp2500.assignment1` 패키지 안에 속해야 합니다." >> 주의

~~태그는 tagId가 필요없음~~
- ~~tagId가 존재하는게 더 부자연 스러운~~
- ~~VO(Vlaue Object) 처럼 사용~~
	- 이것도 의미가 없는 고민

태그 필터링
- 글의 태그 중 하나라도 태그 필터 목록에 포함되면 글을 불러올 때 포함되어야 하나?
- yes

> [!TODO] ~~빌드봇: 태그 필터의 태그를 모두 포함하는 글 만 살아남는지? 아니면 태그 필터의 태그 중 하나라도 포함하면 살아남는지?~~

## 테스트 설명에서 스펙 보충

추천/비추천
- 유저가 추천하면 더 추천할 수 없음
- 유저가 추천한 상태에서 비추천하면 비추천으로 바뀜

작성자가 아닌 다른 사람이 블로그 글 변경하면 안 됨

필터 제거 기능을 제공해야함
- 작성자
- 태그

태그 필터에서 태그를 하나라도 포함하면 글을 불러와야함

자기 댓글 추천 가능

## 빌드봇 돌리면서 스펙 보충

### 올바른 Tag의 타입

`A02_NoRestrictionsViolated override not allowed: Tag.equals(1 param)`
`E01_AddTag param type nonsensical: tags`
- 스펙 상 equals/hashcode 오버라이드 금지
- Tag를 String을 Wrapping하는 값 객체처럼 사용 못 함
- Tag는 String으로
	- String으로 두면 equals에서 내용 비교하니까

다른 클래스의 equals, hashcode 오버라이드 지우기
- 기본 동작인 Object의 참조 동등 비교

Blog, Comment, Post 에서 UUID 필드 제거
- 이전에 equals & hashcode에서 사용했었기 때문에 필요없어짐
유저는 어떻게?
- [[#Hint 1]] 에 따라서 고유 식별자 둬야함
- ~~`HashSet<User>` 대신 `HashSet<UUID>`로 변경하기~~
	- ~~voter~~
	- ~~authorfilter~~

유저의 식별자로 이메일을 사용할 수 밖에 없음
- 다른 무언가를 사용하기에 애매함
- 아무튼 String이면 되네
[[#Hint 1]]에서 **같은 유저인데 실행할 때마다 식별자가 바뀌면 안 됩니다.**
내부에서 UUID 랜덤 생성을 하면 `new User()` 두 번 호출 시 같은 사람을 의도해도 달라짐

### 매개변수 subcomment

`D10_SubcommentAdderPatternSensical param nonsensical: subcomment`
`D11_AddSubcomment param nonsensical: subcomment`
`H00_BlogSystemTest1 param nonsensical: subcomment`

매개변수 이름을 subcomment 대신 comment로 변경 (재귀 구조)
- [lab3](obsidian://open?vault=note-pocu&file=pocu-note%2FCOMP2500%2F902-lab%2F902-002-lab3%2Fspec) 참고

### 글에 태그 탈기

`E01_AddTag` 테스트 케이스 등에서 태그 다는 것은 단수로 다는게 맞아 보임??
- 태그 필터는 복수로 걸고
- 이름부터 AddTag
각종 테스트 코드도 그렇게 되어있음

태그달 때는 수정시간 변경 X
- modifiedAt

### 리액션 관련

한 유저가 여러 리액션 달 수 있음
한 유저가 리액션을 제거할 수 잇음

### 요약

- equals/hashCode 오버라이드 제거
- Tag 클래스 제거, String으로 대체
- addPostTag 단일 태그화 + modifiedAt 갱신 제거
- User 식별자를 외부 주입 email 기반으로 전환

## Hint 1

수강생분들이 택한 여러 가지 유저 설계를 보고 유용하겠다 싶어 이 글을 씁니다.  
  
1. 유저 설계에서 가장 중요한 것은 각 사용자를 식별하는 고유한(unique) 값이 있어야 한다는 겁니다. (고유 식별자)  
    * 서로 다른 유저의 고유 식별자가 동일하면 안 됩니다.  
    * 같은 유저인데 실행할 때마다 식별자가 바뀌면 안 됩니다.  
    * 고유 식별자로 사용할 수 있는 데이터와 데이터형은 몇 가지 됩니다.  
2. 블로그에서 유저를 생성하려면 어떤 정보가 필요한가요?  
    * 어떤 정보를 사용하든 간에 최소 그중 하나는 고유 식별자여야 합니다.  
    * 시스템에 따라 고유 식별자 그 자체가 유저가 될 수도 있습니다.  
3. 유저를 클래스로 만든다면 다음의 것들도 고려해보세요.  
    * 코드에서 유저의 고유 식별자를 생성하는 위치가 어디어야 할까요?  
    * 어떤 메서드에 유저 정보를 전달할 때 어떤 형태로 전달하는 게 "올바른" OOP일까요?


## Hint 2

이것도 수강생분들의 여러 가지 설계/구현 방법을 검토하다가 알려드리면 좋을 것 같은 내용이 있어서 공유합니다.  
  
일단 이런 질문에 대한 답을 찾는 가장 좋은 방법은 타제품을 ~~베끼는~~ 리서치하는 겁니다. ![:손으로_입을_가린_얼굴:](https://a.slack-edge.com/production-standard-emoji-assets/16.0/apple-medium/1f92d.png)  
  
1. 아마 흔히들 사용하시는 네*버 블로그는 주인 외에 다른 사람이 글을 게재할 수 없을 겁니다.  
2. 티스토리에는 여러 명의 유저가 글을 쓸 수 있는 팀블로그란 기능이 있습니다.  
3. 역시 구글 블로거에도 팀블로그란 기능이 있습니다.  
4. 회사 자체에서 운영하는 블로그도 보통 여러 명의 직원들이 글을 올립니다. (예: 마이크로소프트 사의 블로그)  
  
따라서 충분히 블로그 주인이 아닌 유저가 블로그 글을 게재할 수 있습니다.  
  
실무에서 팀블로그를 구성할 때는 특정 유저들을 초대해서 작성자 권한을 줍니다. 그리고 누군가 글을 쓰려고 할 때마다 그 사람이 권한이 있는지 확인하겠죠. 하지만 이 과제에서는 권한을 체크하는 코드까지 요구하지는 않습니다.

---

## 문법

### ArrayList 정렬

`ArrayList`정렬에는 `ArrayList.sort` 를 사용

매개변수로 `Comparator<? super E> c`를 넘김
- `E`는 `ArrayList`의 원소 타입
- `?`는 E를 포함한 supertype
	- E가 lowerbound 

왜 `<? super E>`로 E의 상위 클래스의 `Comparator`을 허용하는지 이해하기 위해서, `ArrayList.sort`의 바디를 확인해보면 다음과 같음

```java
@Override  
@SuppressWarnings("unchecked")  
public void sort(Comparator<? super E> c) {  
    final int expectedModCount = modCount;  
    Arrays.sort((E[]) elementData, 0, size, c);  
    if (modCount != expectedModCount)  
        throw new ConcurrentModificationException();  
    modCount++;  
}
```

바디에서 `Comparator<? super E> c`가 사용되는 곳은 `Arrays.sort((E[]) elementData, 0, size, c);` 뿐임

이제 `Arrays.sort`의 구현을 확인해보자
- 주석에서 `c`가 어떻게 사용되는지 확인할 수 있음

> [!quote]
>  Sorts the specified range of the specified array of objects according to the order induced by the specified comparator. The range to be sorted extends from index fromIndex, inclusive, to index toIndex, exclusive. (If fromIndex==toIndex, the range to be sorted is empty.) All elements in the range must be mutually comparable by the specified comparator (that is, c.compare(e1, e2) must not throw a ClassCastException for any elements e1 and e2 in the range).

`c.compare(e1,e2)`처럼 사용한다고 언급함

`compare` 함수가 어떤 동작인지 확인해보자

`Comparator<T>` 인터페이스를 확인해보면 함수 시그니처는 다음과 같음

`int compare(T o1, T o2);`

여기서 핵심은 `Comparator<T>`는 결국 `T` 타입을 인자로 받는 함수를 정의한다는 것
- 이 개념이 제너릭의 consumer 개념

> [!NOTE] PECS
> 
> Producer Extends, Consumer Super
> 
> 읽기(생산)만 한다면 extends
> 
> 쓰기(소비)만 한다면 super

`T` 타입을 인자로 받는 함수는 T 그리고 T의 서브 타입도 인자로 받을 수 있음
- LSP(Liskov Substitution Principle)

이 관점은 Comparator를 고정하고, 요소가 무엇이 올 수 있는지 묻는 관점
- 이 관점을 바꿔보면
	- ArrayList.sort 입장에서 E 타입 요소를 비교하려 할 때 어떤 Comparator을 받아야 하는가?

바뀐 관점은 비교할 요소는 고정하고 Comparator가 무엇이 올 수 있는지 묻는 관점
- 비교할 요소를 E라고 하면, E가 lowerbound 가 되어야 함
- 따라서 `Comparator<? super E>` 
	- LSP를 관점만 다르게 적용
	- E가 T의 서브타입이라고 하면, `Comparator<T>`의 `int compare(T o1, T o2);` 에 E 타입 원소가 인자로 들어가도 문법상 문제 없음 (LSP)
	- 따라서 T는 E의 슈퍼타입 (또는 E 자체)이어야 함 → 와일드카드로 `Comparator<? super E>`

그렇다면 인자로 `Comparator<? super E> c`를 넘겨야하니 `Comparator`을 만드는 방법을 알아보자

4가지 정도 방법이 있고 아래의 클래스를 기반으로 생성된 개체를 비교한다고 가정

```java
public class Dog {  
    private int age;  
  
	public int getAge() {  
	    return age;  
	}
}
```

방법 1: Comparator 구현 클래스 직접 작성

```java
class ByName implement Comparator<Dog> {
	  @Override
      public int compare(Dog d1, Dog d2) {
          return Integer.compare(o1.getAge(), o2.getAge());
      }
}
```

별도 파일에 클래스를 만드는 방식
- 스택 트레이스에 클래스 이름이 나오기 때문에 디버깅에 유리함
- 파일로 남아있기에 재사용에 유리함
- 정렬 방법 마다 클래스 하나씩 필요하다는 단점이 있음

방법 2: 익명 클래스

```java
ArrayList<Dog> dogs = ...;
dogs.sort(new Comparator<Dog>() {  
    @Override  
    public int compare(Dog o1, Dog o2) {  
        return Integer.compare(o1.getAge(), o2.getAge());  
    }  
});
```

사용 시점에 인라인으로 클래스를 정의
- 디버깅에 불리
- 재사용에 불리
- 일회용 용도지만 보일러 플레이트 때문에 불편함

방법 3: 람다

```java
ArrayList<Dog> dogs = ...;
dogs.sort((d1, d2) -> Integer.compare(d1.getAge(), d2.getAge()));
```

방법 2에서 보일러 플레이트를 제거한 버젼
- 디버깅, 재사용 불리
- 문법이 간단함
- 어떻게 비교하는지 (How)가 코드에 그대로 노출

방법 4: `Comparator.comparingXXX` 사용

```java
ArrayList<Dog> dogs = new ArrayList<>();  
dogs.sort(Comparator.comparingInt(Dog::getAge));
```

무엇을 비교하는지 (What)을 코드에 노출함
- 비교 대상을 Key
- Key extracter 을 람다로 인자로 넘김
- 내림차순 문법이 간단함
	- 다른 방법은 인자 순서를 바꿀 때 헷갈림

```java
// 대안 1: 새 클래스 필요
public class DogByAgeDesc implements Comparator<Dog> {
	@Override
	public int compare(Dog d1, Dog d2) {
		return Integer.compare(d2.getAge(), d1.getAge());  // 인자 순서 뒤집음
	}
}
dogs.sort(new DogByAgeDesc());

// 대안 2: 익명 클래스 통째로 다시
dogs.sort(new Comparator<Dog>() {
	@Override public int compare(Dog d1, Dog d2) {
		return Integer.compare(d2.getAge(), d1.getAge());
	}
});

// 대안 3: 람다 본문에서 인자 뒤집기 (실수 위험)
dogs.sort((d1, d2) -> Integer.compare(d2.getAge(), d1.getAge()));

// 대안 4: 한 줄로 .reversed() 붙이면 끝
dogs.sort(Comparator.comparing(Dog::getAge).reversed());
```
