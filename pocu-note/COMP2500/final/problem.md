1.

public class ComplexFoo {
private Foo foo;

    public ComplexFoo(Foo foo) {
        this.foo = foo
    }

    public int doMiracle(int i, int j) {
        return (this.foo.doMiracle(i, j)) * 4;
    }
}

## 상속 vs 컴포지션 코드 구현

2 - a.

a:
문제없음

c:
two.a.A: hello
two.a.B: world
two.a.C: Pocu
6
7
9

## 다형성(부모 클래스의 가상 매서드 시그니처)

2 - b:

a:
컴파일 오류

b:
Calculator 클래스에서 모든 매서드에 @Override 어노테이션을 제거해야함
프로그래머의 의도는 부모 클래스의 매서드를 상속하겠다 >> 부모 클래스가 없음 따라서 컴파일 오류
Method does not override method from its superclass

## @Override 어노테이션 개념(컴파일러에게 정보를 제공)

2 - c:

a: 문제없음

c:
Bar flies!
Bar flies!
Baz flies!
Foo flies!
Bar flies!
Bar flies!

## 다형성 dynamic dispatch 개념
- 오버라이딩 안 하기
- 오버라이딩 하기
    - 부모 동작 유지하면서 오버라이딩 하기


3 - a:

Foo
Baz

## 다형성 dynamic dispatch 개념

3 - b:

Qux
Qux
Baz

## 다형성 late binding(부모 클래스 타입 변수에 대입, 자식 개체의 함수 호출)
- 변형: 부모 클래스에 매서드 시그니처가 존재해야함

4:

a: 컴파일 오류
b:
final 키워드가 붙은 멤버변수는 개체 초기화 때 값을 대입한 후 수정할 수 없음 doMagic 함수에서 값을 대입하는 코드에서 컴파일 오류
A final 키워드가 붙어있는 매서드는 가상매서드가 아니라, 자식 클래스(B)에서 오버라이딩 할 수 없음

## final 키워드(멤버 변수, 멤버 함수)
- 변형: 클래스, 매서드 파라미터

5:
Arthur Paul
Arthur Pendragon
Sir Gawin Doe

## equals 오버라이딩 동치 개념, equals, hashCode, toString 호출 할 때 어떤 개체에서 호출하냐를 잘 봐야함!!! 구현 오버라이딩해서 착각!
- 변형: Object 기본 구현 (== 연산자의 주소 비교)


6:

two.a.A New Hope(100) by Jane Doe
The Empire Strikes Back(50) by John Mayor

## hashCode 적절한 오버라이딩(멤버 변수의 자료형이 동일할 때 비트 쉬프트 이용해서 순서 개념 추가), 해시 충돌, hashCode와 equals 동시에 구현하지 않을 때 발생하는 오류
- hashMap(set) 동치 비교 원리
    - 해시값 + 연산으로 배열의 인덱스(버킷) 결정
        - 해시값에 연산하는 이유는 배열에 끼워넣기 위함
    - 배열에 원소는 연결리스트로 구현
    - 연결리스트 순회해서 hash값 비교 후, equals로 같으면 덮어쓰고, 아니면 tail에 노드 추가
    - 결론은 equals, hashcode 같이 구현해서 동치 개념을 정확하게 구현해야함
- 변형: Object 기본 구현(개체의 주소를 32비트 정수로)

7 - a:

a: 컴파일 오류

b: abstract class Monster 은 개체를 생성할 수 없음

## 추상 클래스를 사용해서 얻는 이점
- 변형: 구현 강제

7 - b:

a: 문제 없음

c:

I'm magicain Salamander
Burn baby burn!
Firestorm!
I'm magicain Salamander
Freeze for eternity
Blizzard!

## 다형성, 가상매서드(매서드 시그니처 잘 보기)

7 - c:

a: 컴파일 오류

b: Pizza 클래스에 추상 매서드의 구현이 있음

## enum 멤버 변수(생성자 암시적 private), 추상 매서드 문법(Abstract methods cannot have a body)
- 변형: abstract 키워드 없이 매서드 선언만, 추상 메서드가 있는 일반 클래스,

8 - a:

a: 컴파일 오류

b: IFoo, IBar 함수 시그니처가 충돌, 반환형만 달라서 잘못된 함수 오버로딩처럼 컴파일 에러 발라생
Baz 클래스에서 구현이 있어도, 컴파일러 입장에서 어떤 추상 매서드와 매핑할지 결정할 수 없음

## 인터페이스를 다중 상속받을 때 매서드 시그니처가 겹치는 경우 + 반환형이 다른 경우

8 - b:

a: 문제없음

c:

2
7
7

## 다형성: late binding(실제 어떤 개체인지 확인 잘하고 꼼꼼히 구현확인)

8 - c:

a: 문제없음

c:
111
11
55

9 - a:

클래스 A가 클래스 B에 의존할 때, two.a.B 클래스를 수정하면, two.a.A 클래스 코드도 수정해얗ㄴ는 경우

9 - b:

의존성 주입(생성자, setter)
생성자, setter 에서 외부 개체를 주입받을 때 추상적인 타입(인터페이스, 부모 클래스, 추상 클래스 사용)

10:

8
1
5

## clone() 오버라이딩 checked exception (Clonable 인터페이스), Object clone 기본동작(얕은복사)
- 변형: clone 오버라이딩 해서 참조형 멤버 변수 깊은 복사

11:

c 는 컴파일러가 예외를 검사한다. throws 절 로 명시해야지 컴파일 오류가 발생하지 않음, (함수에서 더닞는 경우) 아니면 catch 해서 반드시 처리하기

12:

변경에는 닫혀있고, 확장에는 열려이씅ㅁ

상속, 다ㅇ성으로 구혐
