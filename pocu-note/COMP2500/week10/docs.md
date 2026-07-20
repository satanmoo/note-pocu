# Week 10
지
## clone()

![img_93.png](pocu-note/COMP2500/week10/image/img_93.png)

- `savePoint` 변수는 `robot` 변수와 동일한 참조를 가지기 때문에 의도한 바(각각 hp 깎음)과 다르게 결과가 나옴
- 얕은 복사 문제

![img_94.png](pocu-note/COMP2500/week10/image/img_94.png)

![img_95.png](pocu-note/COMP2500/week10/image/img_95.png)

- 그냥 바로 Object 클래스의 clone() 매서드를 오버라이딩 하면 예외가 발생
- Clonable 인터페이스를 상속받아서 오버라이딩 해야함
    - 강제됨

![img_96.png](pocu-note/COMP2500/week10/image/img_96.png)

- Cloneable 인터페이스 구현
- Cloneable 인터페이스의 clone 매서드 오버라이딩
- 매서드 내용은 Object 클래스의 super.clone() 매서드를 호출
- 이렇게 구현하면 새로운 주소를 가지는 개체를 복사해서 반환해줌
    - Java 내부적으로 그렇게 동작

![img_97.png](pocu-note/COMP2500/week10/image/img_97.png)

![img_98.png](pocu-note/COMP2500/week10/image/img_98.png)

- Object 클래스의 clone()의 기본 동작은 새로운 메모리를 할당하고 모든 멤버 변수를 대입해서 반환
- 멤버 변수 중 참조형이 존재하면 참조형의 참조를 그대로 대입함
    - 얕은 복사

![img_99.png](pocu-note/COMP2500/week10/image/img_99.png)

- Clonable 인터페이스의 clone() 반환형은 Object
- 마찬가지로 Object 클래스의 clone() 반환형 또한 Object
    - 따라서 캐스팅 필요

![img_100.png](pocu-note/COMP2500/week10/image/img_100.png)

![img_101.png](pocu-note/COMP2500/week10/image/img_101.png)

- 멤버 변수가 참조형일 때 생기는 얕은 복사

![img_102.png](pocu-note/COMP2500/week10/image/img_102.png)

- 이를 해결하려면 깊은 복사로 구현
- 각 참조형 멤버변수도 Cloneable 인터페이스의 clone() 매서드를 구현하고 직접 clone() 의 결과로 복사된 개체에 멤버 변수로 대입하기

![img_103.png](pocu-note/COMP2500/week10/image/img_103.png)

## 코드보기: 복사 생성자

```java
package academy.pocu.comp2500samples.w10.copyconstructor;

public final class Point {
    private int x;
    private int y;

    public Point(final int x, final int y) {
        this.x = x;
        this.y = y;
    }

    public Point(final Point other) {
        this(other.x, other.y);
    }

    public int getX() {
        return this.x;
    }

    public void setX(final int x) {
        this.x = x;
    }

    public int getY() {
        return this.y;
    }

    public void setY(final int y) {
        this.y = y;
    }
}
```

- Point 생성자 중 두번째 생성자가 복사 생성자
    - Point 타입 매개변수를 받음
    - 매개변수로 받아서 각 멤버 변수를 대입해 새로운 개체 생성

```java
package academy.pocu.comp2500samples.w10.copyconstructor;

public final class Line {
    private final Point p1;
    private final Point p2;

    public Line(final Point p1,
                final Point p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    public Line(final Line other) {
        this(new Point(other.p1),
                new Point(other.p2));
    }

    public double getLength() {
        int xDiff = this.p1.getX() - this.p2.getX();
        int yDiff = this.p1.getY() - this.p2.getY();

        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }

    public Point getP1() {
        return this.p1;
    }

    public Point getP2() {
        return this.p2;
    }
}
```

- Line 클래스는 참조형(Point) 멤버변수를 가지기 때문에 복사 생성자에서 각각 멤버변수에 대해 복사 생성자를 호출
- 깊은 복사

```java
package academy.pocu.comp2500samples.w10.copyconstructor;

public class Program {
    public static void main(String[] args) {
        final Point p1 = new Point(1, 1);
        final Point p2 = new Point(p1);

        p1.setX(-4);
        p1.setY(-8);

        System.out.printf("p1.x: %d, p1.y: %d%s",
                p1.getX(),
                p1.getY(),
                System.lineSeparator());
        System.out.printf("p2.x: %d, p2.y: %d%s",
                p2.getX(),
                p2.getY(),
                System.lineSeparator());

        final Point p3 = new Point(5, 7);

        final Line l1 = new Line(p2, p3);
        final Line l2 = new Line(l1);

        p2.setX(10);
        p2.setY(15);

        System.out.printf("l1.p1.x: %d, l1.p1.y: %d%s",
                l1.getP1().getX(),
                l1.getP1().getY(),
                System.lineSeparator());

        System.out.printf("l1.p2.x: %d, l1.p2.y: %d%s",
                l1.getP2().getX(),
                l1.getP2().getY(),
                System.lineSeparator());

        System.out.printf("l2.p1.x: %d, l2.p1.y: %d%s",
                l2.getP1().getX(),
                l2.getP1().getY(),
                System.lineSeparator());

        System.out.printf("l2.p2.x: %d, l2.p2.y: %d%s",
                l2.getP2().getX(),
                l2.getP2().getY(),
                System.lineSeparator());
    }
}
```

## 정리

![img_104.png](pocu-note/COMP2500/week10/image/img_104.png)

- 인터페이스 == 순수 추상 클래스