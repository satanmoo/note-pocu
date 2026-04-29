# Week7

- 이번 주의 핵심은 상속과 컴포지션의 비교

## OO에서 재사용성

![img.png](pocu-note/COMP2500/week7/image/img.png)

- 이미 동작과 상태가 명확 개체는 재사용하면 됨

## 클래스를 재사용하면 좋은 점

### 1.시간 절약

- Time is gold
- 일반적인 프로그래밍에서 함수, 라이브러리를 재사용하는 것과 일맥상통

![img_1.png](pocu-note/COMP2500/week7/image/img_1.png)

- 모든 미래를 대비한 프로그램은 없음
- 미래를 대비한다고 지금 사용하지 않는 코드를 만들면 가독성이 좋고, 유지보수가 가능할까?
- 장,단점을 상식에 따라 결정

### 2. 테스트에 걸리는 시간 절약

![img_2.png](pocu-note/COMP2500/week7/image/img_2.png)

- 상속 시 부모 클래스를 테스트하지 않아도 될까?

![img_3.png](pocu-note/COMP2500/week7/image/img_3.png)

- 부모 클래스가 변하지 않더라도 자식 클래스에서 사용할 때 사용 방식이나 순서가 달라질 수 있음
- 자식을 추가하다가 부모 클래스를 바꿀 수 있음
    - 구체적인 것을 작성하다보면 이전에 알지 못했던 일반화 개념을 찾을 수 있고, 부모 클래스에 추가해야함

### 3. 관리 비용을 절약

![img_4.png](pocu-note/COMP2500/week7/image/img_4.png)

- 재사용을 위해 너무 클래스를 분리하다보면 파일 수가 많아져 관리하기 힘들어짐

## OO 모델링 실력 키우기

![img_5.png](pocu-note/COMP2500/week7/image/img_5.png)

- 연습 + 남의 코드 보기

![img_6.png](pocu-note/COMP2500/week7/image/img_6.png)

## 상속 vs 컴포지션

![img_7.png](pocu-note/COMP2500/week7/image/img_7.png)

- 4가지 기준
- 객관적인 편

### 기준1: 메모리

![img_8.png](pocu-note/COMP2500/week7/image/img_8.png)

- 상속은 메모리 한 덩어리

![img_9.png](pocu-note/COMP2500/week7/image/img_9.png)

- 일반적으로 new 2번하면 메모리에 덩어리 2개가 생긴다

![img_11.png](pocu-note/COMP2500/week7/image/img_11.png)

![img_10.png](pocu-note/COMP2500/week7/image/img_10.png)

![img_12.png](pocu-note/COMP2500/week7/image/img_12.png)

#### 왜 메모리의 덩어리가 많으면 성능에 좋지 않을까?

![img_13.png](pocu-note/COMP2500/week7/image/img_13.png)

- CPU 제일 빠름
- 메모리는 CPU에 비해서 느림
- 두 부품간 통신을 버스가 담당

![img_14.png](pocu-note/COMP2500/week7/image/img_14.png)

- 버스를 거치지 않기 위해 CPU 내부에 캐시 메모리
- 참고로 최근에는 CPU에서 캐시 메모리의 크기가 증가함 캐시 메모리의 크기가 CPU 성능에 큰 영향을 주는 것을 보여주는 현상

![img_15.png](pocu-note/COMP2500/week7/image/img_15.png)

- 캐시 메모리는 메모리에서 한 번에 연속된 블럭 단위로 읽음
    - 캐시 라인
- 상속으로 생성한 개체는 메모리에 연속으로 한 덩어리에 들어가기 때문에 한 번에 캐시 메모리에 들어갈 확률이 높음
- 컴포지션으로 생성한 개체는 부품 개체가 흩어져 있기 때문에 캐시 메모리에 로딩할 때 여러 번 메모리에 접근해야 할 확률이 높음
    - 일단 캐시에 개체가 모두 로딩이 되면 그 이후는 빠르게 접근할 수 있는데, 초기에 개체를 캐시에 로딩할 때 성능의 문제가 발생

![img_16.png](pocu-note/COMP2500/week7/image/img_16.png)

- 메모리 할당, 해제 중 언어의 런타임 구조에 따라 느린 것이 있음

- 결론적으로 컴포지션이 확장성은 좋으나 성능은 상속이 좋음

#### 예제

```java
public class A {
}

public class B {
    private int count;
    private A a0 = new A();
    private A a1;
}


public class BB extends B {
    private int length;
    private B b = new B();
}
```

- `new BB();`를 하면 몇 개의 메모리 블록이 할당되나요?
- BB는 B를 상속받기 때문에 부모 클래스인 B의 멤버변수를 하나의 메모리 블록에 가지고 있음
- BB 메모리 블럭
    - A a0 블럭
    - B b 블럭
        - A a0 블럭

- A a1은 null 로 초기화
- 답은 4개

### 기준2: 다형성

![img_17.png](pocu-note/COMP2500/week7/image/img_17.png)

- 다른 형의 개체를 한 번에 처리하고 싶을 때
    - 다형성을 구현하기 위해서는 상속을 사용할 수 밖에 없음
- 상속을 사용하는 이유가 대부분 이런 케이스

### 기준3: 관리의 효율성

![img_18.png](pocu-note/COMP2500/week7/image/img_18.png)

- Person - Teacher 컴포지션 모델에서 주황색으로 강조한 메서드를 호출하려면 Teacher 클래스에 메서드를 만들고 Person 개체의 메서드를 호출하는 식으로 구현

![img_19.png](pocu-note/COMP2500/week7/image/img_19.png)

- 상속으로 모델링하면 코드가 줄어듬
    - 유지보수(관리)의 장점

![img_20.png](pocu-note/COMP2500/week7/image/img_20.png)

- 깊은 상속 관계에서는 부모 클래스 변경이 깊게 자식 클래스를 변경
    - 이 경우 조립성을 강조한 컴포지션이 유리

### 기준4: 상식

![img_21.png](pocu-note/COMP2500/week7/image/img_21.png)

- 실제 세계의 개념을 has-a, is-a 관계로 해석하고, 그에 맞게 모델링하기
    - 개인의 지식에 따라 주관성이 생길 수 있는 부분을 최대한 조직의 상식에 맞게 합의하기

## 코드보기: 그래픽 개체 그리기

```java
package academy.pocu.comp2500samples.w07.graphics;

public class Graphic {
    protected String label;

    public Graphic(String label) {
        this.label = label;
    }

    public String getLabel() {
        return this.label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}
```

```java
package academy.pocu.comp2500samples.w07.graphics;

public class Point extends Graphic {
    private int x;
    private int y;

    public Point(String label, int x, int y) {
        super(label);
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return this.x;
    }

    public int getY() {
        return this.y;
    }

    public void draw() {
        System.out.printf("Draw point '%s'%s",
                this.label,
                System.lineSeparator());
    }
}
```

```java
package academy.pocu.comp2500samples.w07.graphics;

public class Line extends Graphic {
    private Point p1;
    private Point p2;

    public Line(String label,
                Point p1,
                Point p2) {
        super(label);
        this.p1 = p1;
        this.p2 = p2;
    }

    public double getLength() {
        int xDiff = this.p1.getX() - this.p2.getX();
        int yDiff = this.p1.getY() - this.p2.getY();

        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }

    public void draw() {
        System.out.printf("Draw line '%s'%s",
                this.label,
                System.lineSeparator());
    }
}
```

```java
package academy.pocu.comp2500samples.w07.graphics;

public class Circle extends Graphic {
    private Point center;
    private int radius;

    public Circle(String label,
                  Point center,
                  int radius) {
        super(label);
        this.center = center;
        this.radius = radius;
    }

    public double getCircumference() {
        return 2 * radius * Math.PI;
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }

    public void draw() {
        System.out.printf("Draw circle '%s'%s",
                this.label,
                System.lineSeparator());
    }
}
```

```java
package academy.pocu.comp2500samples.w07.graphics;

import java.util.ArrayList;

public class Picture extends Graphic {
    private ArrayList<Graphic> graphics;

    public Picture(String label) {
        super(label);

        this.graphics = new ArrayList<>();
    }

    public void add(Graphic graphic) {
        this.graphics.add(graphic);
    }

    public void draw() {
        int count = this.graphics.size();

        if (count <= 0) {
            return;
        }

        System.out.printf("Draw picture '%s'%s",
                this.label,
                System.lineSeparator());

        for (int i = 0; i < count; ++i) {
            Graphic g = this.graphics.get(i);
            Class c = g.getClass();
            String className = c.getSimpleName();

            switch (className) {
                case "Circle":
                    ((Circle) g).draw();
                    break;

                case "Point":
                    ((Point) g).draw();
                    break;

                case "Line":
                    ((Line) g).draw();
                    break;

                case "Picture":
                    ((Picture) g).draw();
                    break;

                default:
                    String message = String.format("Unknown graphic type %s", className);
                    throw new IllegalArgumentException(message);
            }
        }
    }
}
```

- Picture 개체는 ArrayList<Graphic>을 통해 Graphic 개체 목록을 가질 수 있으며, 이로 인해 재귀적으로 다른 Picture 개체를 포함할 수 있음
    - draw() 메서드는 Picture 개체에서 재귀적으로 호출됨
- 컴포지트 패턴:
    - 개체를 트리 구조로 구성하여 부분과 전체를 동일하게 취급함
- 다형성을 사용하면 switch case 코드를 바꿀 수 있음

```java
package academy.pocu.comp2500samples.w07.graphics;

public class Program {
    public static void main(String[] args) {
        Point p1 = new Point("Point 1", 2, 7);
        Point p2 = new Point("Point 2", 1, 8);

        p1.draw();
        p2.draw();

        System.out.println("----------------------------");

        Line l1 = new Line("Line 1", p1, p2);

        l1.draw();

        System.out.println("----------------------------");

        Circle c1 = new Circle("Circle 1", p1, 5);
        Circle c2 = new Circle("Circle 2", p2, 10);

        c1.draw();
        c2.draw();

        System.out.println("----------------------------");

        Picture pic1 = new Picture("Picture with a line and a circle");

        pic1.add(c1);
        pic1.add(l1);

        pic1.draw();

        System.out.println("----------------------------");

        Picture pic2 = new Picture("More complicated pic");

        pic2.add(pic1);
        pic2.add(c2);

        pic2.draw();

        System.out.println("----------------------------");

        Picture pic3 = new Picture("Even more complicated pic");

        pic3.add(pic1);
        pic3.add(pic2);

        pic3.draw();
    }
}
```

- Picture 개체에 Graphic 클래스를 상속 받은 클래스의 개체들을 포함하고, 또 다른 Picture 개체도 포함할 수 있음
    - Picture 클래스 또한 Graphic 클래스를 상속받기 때문

## 엔티티 컴포넌트 시스템

![img_22.png](pocu-note/COMP2500/week7/image/img_22.png)

- 아키텍쳐 패턴이라고 부름
- 프로그래머 말고 기획자라던지 협업하는 환경 때문에 컴포지션을 선호하게 된 사례
    - 변경이 잦을 때 상속이 불편하기 때문에

![img_23.png](pocu-note/COMP2500/week7/image/img_23.png)

![img_24.png](pocu-note/COMP2500/week7/image/img_24.png)

![img_25.png](pocu-note/COMP2500/week7/image/img_25.png)

### 깊은 상속구조에서 문제

![img_26.png](pocu-note/COMP2500/week7/image/img_26.png)

![img_27.png](pocu-note/COMP2500/week7/image/img_27.png)

![img_28.png](pocu-note/COMP2500/week7/image/img_28.png)

- 변경이 잦으면 프로그래머와 기획자의 다툼이 생길 수도
  - 업무 효율성이 떨어짐
- 변경이 잦을 수 밖에 없는 환경이라면?

![img_29.png](pocu-note/COMP2500/week7/image/img_29.png)

- 이를 해결하기 위해서 나옴

### 엔티티 컴포넌트 시스템으로 수정한 예

![img_30.png](pocu-note/COMP2500/week7/image/img_30.png)

![img_31.png](pocu-note/COMP2500/week7/image/img_31.png)

- 일반화된 컴포넌트를 가지고
  - 컴포넌트에서 세부적으로 분류
- 컴포넌트를 조합해서 플레이어, NPC 등 구체적인 GameObject의 하위 개념 클래스를 만들 수 있음

- EntityComponent: 위치정보
- PhysicsComponent: 물리량(질량, 속도)정보

![img_32.png](pocu-note/COMP2500/week7/image/img_32.png)

- 이를 조합해서 NPC 클래스를 만들 수 있음
  - 다른 조합도 유연하게 조합 가능

![img_33.png](pocu-note/COMP2500/week7/image/img_33.png)

- update() 함수 구현은 다형성으로

```java
public class GameObject {
    private String name;
    private ArrayList<Component> components = new ArrayList<Component>();

    public GameObject(String name) {
        this.name = name;
    }

    public void addComponent(Component component) {
        components.add(component);
    }

    public void update() {
        for (Component component : this.components) {
            component.update();
        }
    }
}
```

```java
GameObject player = new GameObject("player");

player.addComponent(new EntityComponent());
player.addComponent(new PhysicsComponent());
player.addComponent(new ControllableComponent());

player.update();
```

- 플레이어 개체를 만드는 예시
- 위치 정보, 물리 적용, 게임 패드로 조종 가능

```java
GameObject npc = new GameObject("Tact Haelstrom");

npc.addComponent(new EntityComponent());
npc.addComponent(new PhysicsComponent());

npc.update();
```

- 게임 패드로 조종 불가능

```java
GameObject npc = new GameObject("Tact Haelstrom");

npc.addComponent(new EntityComponent());
npc.addComponent(new PhysicsComponent());
npc.addComponent(new AiComponent());

npc.update();
```

- AI 컴포넌트 추가해서 스스로 움직이는 NPC

![img_34.png](pocu-note/COMP2500/week7/image/img_34.png)

- GUI로 기획자가 사용할 수 있게
- 코드 수정이 아니라 데이터 파일을 읽어오는 방식으로 개체 수정을 하기 쉬움

### 예제

- 다음 중 깊은 상속에 대한 설명 중 옳은 것은?
  - 상속을 깊게 하면 생산성이 떨어짐
    - 상황에 따라 달라짐
  - 상속을 깊게 하면 새로운 메서드를 추가하지 않고도 부모 클래스의 동작을 재사용 할 수 있음
    - 옳음
  - 한 번 만든 요구사항을 바꿀 일이 많다면 깊은 상속 구조를 사용하는게 좋음
    - 깊은 상속 구조가 불리함
  - 코드가 아닌 데이터 파일을 통해 개체의 구성을 쉽게 변경하려면 깊은 상속이 유리함
    - 불리함

##  코드보기: 텍스트 파일로부터 엔티티 만들기

```java
package academy.pocu.comp2500samples.w07.entitycomponentsystem;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class Program {
    public static void main(String[] args) {
        GameObject batman = loadGameObjectOrNull("Batman");
        batman.update();

        System.out.println();

        GameObject tree = loadGameObjectOrNull("Tree");
        tree.update();

        System.out.println();

        GameObject scaryVampire = loadGameObjectOrNull("ScaryVampire");
        scaryVampire.update();
    }

    private static GameObject loadGameObjectOrNull(String name) {
        String directory = getClassPath();
        String filename = String.format("%s.txt", name);
        Path filepath = Paths.get(directory, filename);
        File playerFile = new File(filepath.toString());

        if (!playerFile.isFile()) {
            return null;
        }

        List<String> lines;

        try {
            lines = Files.readAllLines(filepath,
                    StandardCharsets.UTF_8);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }

        assert (lines.size() == 1) : "Player setting file is not in correct format!";

        String[] components = lines.get(0)
                .split(",", -1);

        GameObject obj = new GameObject(name);

        for (String c : components) {
            ComponentType type;

            try {
                type = ComponentType.valueOf(c.toUpperCase());
            } catch (IllegalArgumentException e) {
                e.printStackTrace();
                return null;
            }

            switch (type) {
                case AI:
                    obj.addComponent(new AiComponent());
                    break;

                case CONTROLLABLE:
                    obj.addComponent(new ControllableComponent());
                    break;

                case PHYSICS:
                    obj.addComponent(new PhysicsComponent());
                    break;

                case ENTITY:
                    obj.addComponent(new EntityComponent());
                    break;

                default:
                    return null;
            }
        }

        return obj;
    }

    private static String getClassPath() {
        File file = new File(Program.class.getProtectionDomain().getCodeSource().getLocation().getPath());
        String packageName = Program.class.getPackageName();
        packageName = packageName.replace('.', '/');

        Path path = Paths.get(file.getPath(), packageName);

        return path.toAbsolutePath().normalize().toString();
    }
}
```

```text
// Batman.txt
Entity,Physics,Controllable
```

- 파일에 어떤 컴포넌트를 사용하는지 이름이 있음
- 파일을 읽고 파싱해서 그에 맞게 컴포넌트 개체를 만들고 이를 GameObject 개체에 추가해 조립함 
