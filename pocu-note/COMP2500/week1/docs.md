# Week1





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
