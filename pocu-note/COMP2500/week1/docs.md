# Week1












![img_105.png](pocu-note/COMP2500/week1/image/img_105.png)

![img_106.png](pocu-note/COMP2500/week1/image/img_106.png)

- `==` operator compare memory address

![img_107.png](pocu-note/COMP2500/week1/image/img_107.png)

- string constant pool

#### equals() method

![img_108.png](pocu-note/COMP2500/week1/image/img_108.png)

- similar to strcmp().

#### operator overloading

![img_109.png](pocu-note/COMP2500/week1/image/img_109.png)
![img_110.png](pocu-note/COMP2500/week1/image/img_110.png)
![img_111.png](pocu-note/COMP2500/week1/image/img_111.png)

- The behavior of an operator is modified based on the data type(class) of its operand.

```java
// Vector.java
public class Vector {
    public int x;
    public int y;

    public Vector(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

// Main.java
Vector v0 = new Vector(1, 1);
Vector v1 = new Vector(2, 2);

Vector v2 = v0 + v1;    // COMPILE ERROR!
```

![img_112.png](pocu-note/COMP2500/week1/image/img_112.png)
![img_113.png](pocu-note/COMP2500/week1/image/img_113.png)

- Note: string plus operator is bad in terms of performance.
    - Instead, use format() or StringBuilder.

![img_114.png](pocu-note/COMP2500/week1/image/img_114.png)

### bit shift operator

![img_115.png](pocu-note/COMP2500/week1/image/img_115.png)
![img_116.png](pocu-note/COMP2500/week1/image/img_116.png)

- In a two’s complement system, the most significant bit is the sign bit.
- When using the shift operators(`>>`), the sign bit is propagated to maintain the correct sign.

![img_117.png](pocu-note/COMP2500/week1/image/img_117.png)

- The `<<<` operator doesn't exist because the rightmost bit is not related to the sign.
    - In a left shift operation, the bits are simply shifted left, and the least significant bit (rightmost bit) does
      not need to consider the sign bit.

### conditional statement

#### if statement

![img_118.png](pocu-note/COMP2500/week1/image/img_118.png)

#### switch/case statement

![img_119.png](pocu-note/COMP2500/week1/image/img_119.png)
![img_120.png](pocu-note/COMP2500/week1/image/img_120.png)

- Unlike C, `String` is included in the data types that can be used in switch statements.

![img_121.png](pocu-note/COMP2500/week1/image/img_121.png)
![img_122.png](pocu-note/COMP2500/week1/image/img_122.png)

- java supports fall-through

### loop statement

![img_123.png](pocu-note/COMP2500/week1/image/img_123.png)

- java doesn't support `goto`

#### break label

![img_124.png](pocu-note/COMP2500/week1/image/img_124.png)
![img_125.png](pocu-note/COMP2500/week1/image/img_125.png)
![img_126.png](pocu-note/COMP2500/week1/image/img_126.png)

- `exit` must be used within a labeled code block

![img_127.png](pocu-note/COMP2500/week1/image/img_127.png)

- below 2 codes operate identically

```java
public static void test() {
    outer1:
    for (int i = 0; i < 3; i++) {
        outer2:
        for (int j = i; j < 3; j++) {
            for (int k = j; k < 3; k++) {
                if (k == 1) {
                    continue;
                }
                System.out.println(i);
                System.out.println(j);
                System.out.println(k);
                System.out.println("--");
            }
        }
    }
}
```

```java
public static void test() {
    outer1:
    for (int i = 0; i < 3; i++) {
        outer2:
        for (int j = i; j < 3; j++) {
            inner:
            for (int k = j; k < 3; k++) {
                if (k == 1) {
                    continue inner;
                }
                System.out.println(i);
                System.out.println(j);
                System.out.println(k);
                System.out.println("--");
            }
        }
    }
}
```

- A label can be attached to any block of code, not just the top-level block

```java
public static void test() {
    outer1:
    for (int i = 0; i < 3; i++) {
        outer2:
        for (int j = i; j < 3; j++) {
            for (int k = j; k < 3; k++) {
                if (k == 1) {
                    continue outer2;
                }

                if (k == 2) {
                    continue outer1;
                }
                System.out.println(i);
                System.out.println(j);
                System.out.println(k);
                System.out.println("--");
            }
        }
    }
}
```

#### foreach style for loop

![img_128.png](pocu-note/COMP2500/week1/image/img_128.png)

### function

![img_129.png](pocu-note/COMP2500/week1/image/img_129.png)

- member function is called method in oop

### reference type argument

![img_130.png](pocu-note/COMP2500/week1/image/img_130.png)
![img_131.png](pocu-note/COMP2500/week1/image/img_131.png)

- In java all objects are passed by reference.

#### final keyword and reference type argument

![img_132.png](pocu-note/COMP2500/week1/image/img_132.png)
![img_133.png](pocu-note/COMP2500/week1/image/img_133.png)

```c
int x = 10;
int y = 20;
int *const ptr = &x;  // ptr은 x를 가리킴

*ptr = 30;   // 가능: x의 값을 30으로 변경
ptr = &y;    // 오류: ptr이 다른 주소를 가리킬 수 없음
```

```java
public static void test() {
    final Vector v1 = new Vector(10, 20);

    v1.x = 30;  // 가능: v1이 가리키는 객체의 상태를 변경
    v1 = new Vector(40, 50);  // 오류: v1이 다른 객체를 가리키도록 변경 불가
}
```

- The final keyword in java, when applied to a reference type, is similar to a const pointer in C.

### Array

![img_134.png](pocu-note/COMP2500/week1/image/img_134.png)
![img_135.png](pocu-note/COMP2500/week1/image/img_135.png)
![img_136.png](pocu-note/COMP2500/week1/image/img_136.png)

- In java, multidimensional array is actually array of arrays, where each element of an array is a reference to another
  array.
    - jagged array

### enum

![img_137.png](pocu-note/COMP2500/week1/image/img_137.png)
![img_138.png](pocu-note/COMP2500/week1/image/img_138.png)
![img_140.png](pocu-note/COMP2500/week1/image/img_140.png)
![img_139.png](pocu-note/COMP2500/week1/image/img_139.png)
![img_141.png](pocu-note/COMP2500/week1/image/img_141.png)
![img_142.png](pocu-note/COMP2500/week1/image/img_142.png)

- While Java enums can have member variables and methods, it is best to use them primarily as data holders, similar to
  enums in C#.
    - **BEST PRACTICE**

> 시험에서 주의

### var

![img_143.png](pocu-note/COMP2500/week1/image/img_143.png)
![img_144.png](pocu-note/COMP2500/week1/image/img_144.png)

- To enable the compiler to infer the type, the variable must be initialized at the time of declaration.

```java
public static void test() {
    var nums[] = new int[20];   // 컴파일 오류: 'var' is not allowed as an element type of an array
    var names = {"aa", "bb"};   // 컴파일 오류: Array initializer is not allowed here
    var names = new String[]{"aa", "bb"};   // OK
}
```

### lambda and Stream API

![img_145.png](pocu-note/COMP2500/week1/image/img_145.png)
![img_146.png](pocu-note/COMP2500/week1/image/img_146.png)

- A lambda expression is an anonymous function that is typically used as a one-time, throwaway function.

### module

![img_147.png](pocu-note/COMP2500/week1/image/img_147.png)
![img_148.png](pocu-note/COMP2500/week1/image/img_148.png)

- Java does not provide an official way to determine the complete list of classes used by an application at runtime.

![img_149.png](pocu-note/COMP2500/week1/image/img_149.png)

![img_150.png](pocu-note/COMP2500/week1/image/img_150.png)
![img_151.png](pocu-note/COMP2500/week1/image/img_151.png)

- A module allows grouping multiple packages together and define clear boundaries and dependencies between modules.
- Store information about necessary packages in the module-info file.

![img_152.png](pocu-note/COMP2500/week1/image/img_152.png)
![img_153.png](pocu-note/COMP2500/week1/image/img_153.png)
![img_154.png](pocu-note/COMP2500/week1/image/img_154.png)
![img_155.png](pocu-note/COMP2500/week1/image/img_155.png)
![img_156.png](pocu-note/COMP2500/week1/image/img_156.png)
![img_157.png](pocu-note/COMP2500/week1/image/img_157.png)

- By specifying dependencies in the module-info.java file, only the required java.sql module will be loaded at runtime.
  This modular approach allows you to package and distribute only the necessary modules, making your deployment more
  efficient and reducing the overall size.

#### reference

- https://openjdk.org/projects/jigsaw/spec/sotms/
