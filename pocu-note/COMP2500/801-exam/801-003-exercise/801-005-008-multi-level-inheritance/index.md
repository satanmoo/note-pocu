# 상속의 상속

## 다음 코드에서 new C()를 실행하면 무엇이 출력되는가?

```java
public class A {
    public A() {
        System.out.print("A");
    }
}

public class B extends A {
    public B() {
        System.out.print("B");
    }
}

public class C extends B {
    public C() {
        System.out.print("C");
    }
}

// main
new C();
```

```text
ABC
```

- `C()` → 컴파일러가 넣은 `super()` → `B()` → `super()` → `A()`
- 가장 위 조상(`A`)의 생성자 body가 **먼저** 실행되고, 내려오면서 B, C 순으로 출력
- `super(...)`가 자식 body보다 먼저 실행되기 때문

## 상속이 깊을 때 생성자 body는 어떤 순서로 실행되는가?

최상위 조상 → ... → 가장 아래 자식 순서

- 각 자식 생성자에서 `super(...)`가 먼저 실행되므로, 호출은 자식부터 시작하지만 **실행 완료(body)는 조상부터**
