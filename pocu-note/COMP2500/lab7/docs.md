# Lab7

## null

```java
if(o ==null||!(o instanceof ReadingList)){
        return false;
        }
```

- null은 타입이 없음

> Condition 'o == null' covered by subsequent condition '!(o instanceof ReadingList)'

## String hashcode

```java
  /**
 * Returns a hash code for this string. The hash code for a
 * {@code String} object is computed as
 * <blockquote><pre>
 * s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
 * </pre></blockquote>
 * using {@code int} arithmetic, where {@code s[i]} is the
 * <i>i</i>th character of the string, {@code n} is the length of
 * the string, and {@code ^} indicates exponentiation.
 * (The hash value of the empty string is zero.)
 *
 * @return a hash code value for this object.
 */
public int hashCode() {
    int h = hash;
    if (h == 0 && value.length > 0) {
        hash = h = isLatin1() ? StringLatin1.hashCode(value)
                : StringUTF16.hashCode(value);
    }
    return h;
}
```

- 문자열을 구성하는 character 값으로 hashcode value 결정

## Object.hash

```java
public static int hash(Object... values) {
    return Arrays.hashCode(values);
}

public static int hashCode(Object a[]) {
    if (a == null)
        return 0;

    int result = 1;

    for (Object element : a)
        result = 31 * result + (element == null ? 0 : element.hashCode());

    return result;
}
```

- Object.hash() 메서드는 가변인자(Object[])로 배열의 각 원소에 대해서 hashCode() 함수 호출함

> Generates a hash code for a sequence of input values. The hash code is generated as if all the input values were
> placed into an array, and that array were hashed by calling Arrays. hashCode(Object[]).

## Enum equals

- JVM에서 고유한 개체로 취급
    - 값 처럼 생각하면 됨
    - == 연산자로 비교하기

## Set equals

- equals 기본 동작:
    - 비교 대상이 Set interface 구현
    - Set size 동일
    - 원소의 집합이 동일

> Compares the specified object with this set for equality. Returns true if the specified object is also a set, the two
> sets have the same size, and every member of the specified set is contained in this set (or equivalently, every member
> of this set is contained in the specified set). This definition ensures that the equals method works properly across
> different implementations of the set interface.

## Set hashCode

- hashCode 기본 동작:
    - 원소의 hash code 합

> Returns the hash code value for this set. The hash code of a set is defined to be the sum of the hash codes of the
> elements in the set, where the hash code of a null element is defined to be zero. This ensures that s1.equals(s2)
> implies that s1.hashCode()==s2.hashCode() for any two sets s1 and s2, as required by the general contract of Object.
> hashCode.

## List equals

- equals 기본 동작:
    - 비교 대상이 List interface 구현
    - List size 동일
    - 각각 대응되는 요소가 모두 동일
        - 순서가 동일

> Compares the specified object with this list for equality. Returns true if and only if the specified object is also a
> list, both lists have the same size, and all corresponding pairs of elements in the two lists are equal. (Two elements
> e1 and e2 are equal if Objects. equals(e1, e2).) In other words, two lists are defined to be equal if they contain the
> same elements in the same order. This definition ensures that the equals method works properly across different
> implementations of the List interface.

## List hashCode

- hashCode 기본 동작:
    - 원소의 hash code 합

## Author class

- 문자열 hashcode 구하기
- Object[] hashcode 구하기

## Book class

- enum hashcode 구하기
- Author class toString(), equals(), hashCode() 활용하기

## Bookshelf class

- constructor:
    - 초기화 시 ArrayList initial capacity 결정

- remove:
    - 메서드의 인자와 같은 첫번째 책을 제거
        - List.remove 사용
        - 기본 동작이 boolean 으로 제거 여부 반환

- equals:
    - same reference

- hashCode:
    - System.identityHashCode
        - 항상 reference 기반 hashCode 값 추출
        - 어떤 개체의 hashCode()가 오버라이드 되어 멤버 변수의 값에 따라 hashCode 생성해도 여전히 위 함수 사용하면 참조 기반 hashcode 얻을 수 있음

## Bundle class

- remove:
    - Set.remove 사용
    - Book class hashCode == HashSet key
    - 기본 동작이 boolean 으로 제거 여부 반환

- hashSet equals, hashCode

## ReadingList class

- toString:
    - Book class의 toString() 활용
