---
aliases:
  - 리스코프 치환
tags:
  - COMP2500
  - week13
---
# 리스코프 치환

![](pocu-note/COMP2500/014-solid-design-principles/014-006-liskov-substitution/images/liskov-substitution-1.png)

상속, 다형성으로 부모 클래스 변수에 자식 개체를 대입
- 이때 문제없이 동작해야 함
- [[pocu-note/COMP2500/005-inheritance/005-010-is-a-and-parent-type-variable/index#^assign-child-to-parent|자식 개체를 부모 클래스 변수에 대입 (컴파일 허용)]] 참고

![](pocu-note/COMP2500/014-solid-design-principles/014-006-liskov-substitution/images/liskov-substitution-2.png)

현실적으로 100% 지키기 쉽지 않음

![](pocu-note/COMP2500/014-solid-design-principles/014-006-liskov-substitution/images/liskov-substitution-3.png)

자식을 추가하다가 부모 동작을 바꾸는 경우가 많음
- [[pocu-note/COMP2500/007-inheritance-vs-composition/007-010-inheritance-and-frequent-class-changes/index|상속과 잦은 클래스 변경]] 참고

![](pocu-note/COMP2500/014-solid-design-principles/014-006-liskov-substitution/images/liskov-substitution-4.png)

추상화는 자식을 추가하다보면 변함

## 리스코프 치환 극단적 주장

![](pocu-note/COMP2500/014-solid-design-principles/014-006-liskov-substitution/images/liskov-substitution-5.png)
![](pocu-note/COMP2500/014-solid-design-principles/014-006-liskov-substitution/images/liskov-substitution-6.png)

직사각형이 부모 클래스

정사각형이 자식 클래스

직사각형 타입의 변수에 정사각형 개체의 참조를 대입했을 때
- 정사각형 개체에서 `setWidth()` 메서드, `setHeight()` 메서드 오버라이딩
	- 이때 정사각형 내부에는 `width == height` 만족하도록 구현됨
	- 따라서 직사각형 모양으로 set 할 수 없음
	- 오직 정사각형 모양만 가능함

개념적으로 정사각형이 직사각형에 포함되지만 리스코프 치환 원칙 위배

```java
// Base class: Rectangle
class Rectangle {
    protected int width;
    protected int height;

    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getArea() {
        return width * height;
    }
}

// Subclass: Square
class Square extends Rectangle {
    public Square(int side) {
        super(side, side);
    }

    @Override
    public void setWidth(int width) {
        this.width = width;
        this.height = width; // Enforce square property
    }

    @Override
    public void setHeight(int height) {
        this.width = height; // Enforce square property
        this.height = height;
    }
}

// Test class
public class LiskovViolationExample {
    public static void printRectangleArea(Rectangle rectangle) {
        rectangle.setWidth(5);
        rectangle.setHeight(10);
        System.out.println("Expected Area: 50, Actual Area: " + rectangle.getArea());
    }

    public static void main(String[] args) {
        // Test with a Rectangle
        Rectangle rect = new Rectangle(4, 6);
        printRectangleArea(rect); // Expected Area: 50, works as intended

        // Test with a Square
        Square square = new Square(5);
        printRectangleArea(square); // Expected Area: 50, but Actual Area: 100
    }
}
```

![](pocu-note/COMP2500/014-solid-design-principles/014-006-liskov-substitution/images/liskov-substitution-7.png)
![](pocu-note/COMP2500/014-solid-design-principles/014-006-liskov-substitution/images/liskov-substitution-8.png)
![](pocu-note/COMP2500/014-solid-design-principles/014-006-liskov-substitution/images/liskov-substitution-9.png)

정사각형이 직사각형의 자식인 것이 리스코프 치환에 어긋난다는 주장의 모순

정사각형이 직사각형의 자식이 될 때 문제가 발생하는 상황은 오직 setter 메서드가 존재할 때
- setter 메서드를 제거하면 문제가 없음

이 주장을 하는 진영에서는 setter를 없애자고 했던 극단적 OO 주의자
- [[pocu-note/COMP2500/002-necessity-of-oop/002-022-setter-best-practice/index#^avoid-setters|setter는 고민 후 추가 — 개체 스스로 상태를 수정하는 것이 이상적]] 참고

setter를 없애자고 했던 진영에서 setter가 존재할 때 문제를 삼고 있으니 모순

![](pocu-note/COMP2500/014-solid-design-principles/014-006-liskov-substitution/images/liskov-substitution-10.png)
![](pocu-note/COMP2500/014-solid-design-principles/014-006-liskov-substitution/images/liskov-substitution-11.png)
