# 대입 연산자, 논리 연산자, 캐스팅

## 참조형 변수를 다른 변수에 대입(=)하면 무엇이 복사되는가?

주소가 복사됨 (얕은 복사)

- 두 변수가 같은 객체를 가리킴

## 기본 자료형 캐스팅 규칙은?

- 크기가 큰 자료형으로 변환: 암시적으로 가능
- 크기가 줄어드는 자료형으로 변환: 명시적 캐스팅 필요

## String 변수에 새 문자열을 대입하면 기존 문자열이 바뀌는가?

NO

- String은 immutable 
- 새로운 문자열 객체가 생성되고, 변수는 그 새 객체의 주소를 가리킴

## String literal pool이란?

JVM이 같은 내용의 문자열 리터럴을 객체 하나만 유지하는 메커니즘

- 같은 내용의 리터럴이 여러 번 나와도 객체는 하나 → 같은 주소를 공유

## 다음 코드의 출력 결과는?

```java
String name1 = "Nana";
String name2 = "Nana";
String name3 = new String("Nana");

System.out.println(name1 == name2);
System.out.println(name1 == name3);
```

```
true
false
```

- `name1 == name2` → **true**: String literal pool 때문에 두 리터럴은 같은 객체(같은 주소)
- `name1 == name3` → **false**: `new String(...)`은 내용은 같지만 새 객체를 생성 → 다른 주소
- `==`는 주소(참조) 비교임에 주의 (내용 비교는 `equals`)
