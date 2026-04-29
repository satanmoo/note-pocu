# 연습문제

## 1

- a: 컴파일 오류
- b: Program 클래스의 메서드에서 Bar 개체의 멤버변수 x에 접근할 수 없다. private 접근제어자 때문, getter, setter을 이용해서 코드를 수정

## 2

a) 문제없음

c)

```
14
9

```

## 3

a) 컴파일 오류

b) Baz.magic() 블록 안의 blackMagic("Magic")에서 컴파일 오류 발생, blackMagic은 상위 클래스 Bar의 메서드인데, Bar.blackMagic의 접근 제어자가 private이기
때문에 호출할 수 없음.
protected로 수정

## 4

a) 문제없음

c)

```
30
20

```

## 5

캡슐화
상속
다형성
데이터 추상화

## 6

개체가 스스로 자신의 상태를 책임지게 할 수 있다.
캡슐화: 클래스 설계자의 의도에 따라 멤버 변수를 읽게, 쓰게(수정하게)할 수 있다.
데이터를 저장하지 않고, getter을 통해서 계산하기
setter에서 추가 로직 실행
다형성 적용

## 7

a) 문제없음

c)

```shell
Jim
Jim

```

## 8

a) 컴파일 오류

b) public static void darkMagic 메서드는 static 메서드라 this 키워드를 사용한 non-static에 접근할 수 없음

- non-static variable this cannot be referenced from a static context

## 9

```shell
3

```

## 10

```shell
10
10

```

## 11

a) 문제없음

c)

```shell
5

```

## 12

a) 문제없음

c)

```shell
Animal Kevin
Hi! I'm a dog!
```

## 13

a) 컴파일 에러

b) 변수 cat0의 타입은 암묵적으로 Animal, Animal은 introduce()라는 메서드를 가지고 있지 않음. 따라서 컴파일 에러 발생. introduce() 메서드를 호출하고 싶으면, instanceof
연산자로 Cat 타입인지 확인하고 호출

```java
public class Main {
    public static void main(String[] args) {
        Animal cat0 = new Cat("Honey");
        cat0.sayName();
        if (cat0 instanceof Cat) {
            ((Cat) cat0).introduce();
        }
    }
}
```

## 14

a) 런타임 오류(ClassCastException)

b) instanceof 연산자로 animal0 Dog 클래스에 속하는지 확인하고, 명시적 캐스팅하면 예외가 발생하는 것을 막을 수 있음

## 15

a) 런타임 오류(ClassCastException)

b) instanceof 연산자로 animal Cat 클래스에 속하는지 확인하고, 명시적 캐스팅하면 예외가 발생하는 것을 막을 수 있음

## 16

```shell
false

```

## 17

a) 컴파일 오류

b) Rectangle의 생성자에서 super(name)으로 Shape 개체를 먼저 초기화해야함.

밑에 getArea() 함수 바디에서도 this.p1.x Point의 멤버변수 x의 접근제어자는 private인데, 바로 접근해서 컴파일 에러

## 18

```shell
Qux
Foo
Baz
Bar
```

## 19

```shell
5
21

```



