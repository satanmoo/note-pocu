---
aliases:
  - 상속의 상속
tags:
  - COMP2500
  - week5
---
# 상속의 상속

## 전임 강사와 파트 강사

![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-1.png)
![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-2.png)
![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-3.png)
![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-4.png)
![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-5.png)

상속의 상속 개념이 등장

![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-6.png)
![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-7.png)
![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-8.png)
![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-9.png)
![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-10.png)
![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-11.png)

## 상속의 상속

![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-12.png)

부모 클래스는 일반적
자식 클래스는 구체적

## 복습 퀴즈

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
```

### 1. C 개체를 만들면 콘솔에 무엇이 출력되나요?

![](pocu-note/COMP2500/005-inheritance/005-008-multi-level-inheritance/images/multi-level-inheritance-13.png)

[[pocu-note/COMP2500/005-inheritance/005-004-how-to-inherit/index#`extends`|extend]] 참고
- Java 컴파일러는 자식 생성자의 첫줄이 `super(...)`나 `this(...)`가 아니면 암시적으로 `super()`을 첫 줄에 넣음
