# Week1



## System.out.println()

![img_5.png](pocu-note/COMP2500/week1/image/img_5.png)

- ln means line

### `System` is class

![img_6.png](pocu-note/COMP2500/week1/image/img_6.png)

- this class is pre-defined class in java

### `out` is static member variable in `System`

![img_7.png](pocu-note/COMP2500/week1/image/img_7.png)

- `out` is object
    - specifically `PrintStream` class's object
    - It abstracted stdout

### `println()`

![img_8.png](pocu-note/COMP2500/week1/image/img_8.png)

- The `println()` method is one of the methods of the static member variable `out`
- `println()` method can handle different types of arguments due to **function overloading**

## `printf()` in java

![img_9.png](pocu-note/COMP2500/week1/image/img_9.png)

```java
public class Main {
    public static void main(String[] args) {
        String name = "Mansu";
        int score = 64;
        System.out.print(String.format("%s's score: %d%s", name, score, System.lineSeparator()));
    }
}
```

### Proper Way to Add a New Line Character

![img_10.png](pocu-note/COMP2500/week1/image/img_10.png)

- using `System.lineSeparator()` to correctly add a new line character in a platform-independent way in Java.

### reference

- https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#format-java.lang.String-java.lang.Object...-

## varargs

![img_11.png](pocu-note/COMP2500/week1/image/img_11.png)

![img_12.png](pocu-note/COMP2500/week1/image/img_12.png)

- By specifying the data type in varargs, only data of that type can be passed as arguments.
- When using the `Object` type, the method can accept arguments of any type.
    - All classes in Java inherit from Object

## package

![img_13.png](pocu-note/COMP2500/week1/image/img_13.png)

### Type of package

![img_14.png](pocu-note/COMP2500/week1/image/img_14.png)

### Purpose of package

![img_15.png](pocu-note/COMP2500/week1/image/img_15.png)

- Similar to a linking error in C if function names are the same
    - symbol conflict

### package naming convention

![img_16.png](pocu-note/COMP2500/week1/image/img_16.png)

### package must be specified at the top of the source code

![img_17.png](pocu-note/COMP2500/week1/image/img_17.png)

![img_18.png](pocu-note/COMP2500/week1/image/img_18.png)

- All java source code is located inside the src folder.
- In java, the folder structure must align with the package hierarchy

![img_19.png](pocu-note/COMP2500/week1/image/img_19.png)

![img_20.png](pocu-note/COMP2500/week1/image/img_20.png)

## build and execution process

### add new folder

![img_21.png](pocu-note/COMP2500/week1/image/img_21.png)

- create a folder named class, where the compiled bytecode will be stored

### compiling from the command line

![img_22.png](pocu-note/COMP2500/week1/image/img_22.png)

![img_23.png](pocu-note/COMP2500/week1/image/img_23.png)

![img_24.png](pocu-note/COMP2500/week1/image/img_24.png)

![img_25.png](pocu-note/COMP2500/week1/image/img_25.png)

### run program

![img_26.png](pocu-note/COMP2500/week1/image/img_26.png)

![img_27.png](pocu-note/COMP2500/week1/image/img_27.png)

![img_28.png](pocu-note/COMP2500/week1/image/img_28.png)

- You must specify the path to the folder that contains the package
    - for example if the class is academy.pocu.HelloPocu, you should provide path to the class folder which includes the
      academy package(folder)

![img_29.png](pocu-note/COMP2500/week1/image/img_29.png)

- JVM can load the class by searching through the package hierarchy
- the package name must be included when specifying the class
- `RUNTIME ERROR` occurs if the package name is omitted

### deployment

![img_30.png](pocu-note/COMP2500/week1/image/img_30.png)

![img_31.png](pocu-note/COMP2500/week1/image/img_31.png)

- it is common practice to create a folder named lib(short for library) where .jar files are placed

![img_32.png](pocu-note/COMP2500/week1/image/img_32.png)

- jar command make .jar file with bytecodes(.class file)
- academy directory(top-level package) and all its contents will be packaged into ..\lib\hellopocu.jar
    - the current path is hellopocu\class
    - This is **top-level package** or directory that contains the compiled .class files.

![img_33.png](pocu-note/COMP2500/week1/image/img_33.png)

- hellopocu.jar file includes class\academy\pocu\HelloPocu.class file

### run .jar file

![img_34.png](pocu-note/COMP2500/week1/image/img_34.png)

![img_35.png](pocu-note/COMP2500/week1/image/img_35.png)

- The META-INF directory is automatically included in the .jar file. This directory is essential for storing
  metadata about the contents of the .jar file.

![img_36.png](pocu-note/COMP2500/week1/image/img_36.png)

- Inside the META-INF directory, the jar tool typically creates a file called MANIFEST.MF.
    - This manifest file contains metadata about the .jar file, such as version information, the main class to be
      executed (if specified), and other properties.
- You can create and customize the MANIFEST.MF file yourself and include it in the .jar file.
    - for example which class contains the main method that should be executed when the JAR is run.

> 자동으로 MANIFEST.MF 파일이 생성되기도 하고, 직접 넣어줄 수도 있다. 아래는 직접 main 함수가 위치한 클래스를 명시하는 예

![img_37.png](pocu-note/COMP2500/week1/image/img_37.png)

![img_38.png](pocu-note/COMP2500/week1/image/img_38.png)

- `..\src\Manifest.txt` is the path to the custom manifest file

### reference

- https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jar.html

## import

![img_39.png](pocu-note/COMP2500/week1/image/img_39.png)

- import java.util.Random
    - this mean Using a class called Random from the java.util package
    - Class name start with an upperclass letter

![img_40.png](pocu-note/COMP2500/week1/image/img_40.png)

## java.lang

![img_41.png](pocu-note/COMP2500/week1/image/img_41.png)

- The `java.lang` package is automatically imported by the java compiler
    - so you can use println() method without import statement

## java execution model

- Understanding Java's execution model is also helpful for exception handling

![img_42.png](pocu-note/COMP2500/week1/image/img_42.png)

### traditional compilation

![img_43.png](pocu-note/COMP2500/week1/image/img_43.png)

- The green box typically represents the traditional compilation process.

![img_44.png](pocu-note/COMP2500/week1/image/img_44.png)

- Executable files (machine language) are platform dependent.

### java compile model

![img_45.png](pocu-note/COMP2500/week1/image/img_45.png)

- The JVM is a program that is installed on the target platform.
- While running the JVM translate bytecode into instruction that are suitable for the specific platform and executes
  them accordingly.

### JVM

![img_46.png](pocu-note/COMP2500/week1/image/img_46.png)

![img_47.png](pocu-note/COMP2500/week1/image/img_47.png)

- Bytecode is cross-platform.
    - JVM execute bytecode according to platform.

### java's platform is JVM

![img_48.png](pocu-note/COMP2500/week1/image/img_48.png)

- The method by which the JVM execute bytecode varies depending on the specific JVM implementation.

## Why java become popular

### java applet

![img_49.png](pocu-note/COMP2500/week1/image/img_49.png)

- write and compile a java program and upload the bytecode to the web.
- if web browser supports java applet, user can download package and execute it

![img_50.png](pocu-note/COMP2500/week1/image/img_50.png)

- JVM was installed as a plug-in in the web browser, allowing java applets to run directly in the browser

> 미래에 새로운 플래랫폼이 나오더라도 다시 컴파일 안 해도 되는 이유는 JVM에 의존적인 자바 자체의 장점이라고 볼 수 있다.

![img_51.png](pocu-note/COMP2500/week1/image/img_51.png)

## java syntax

![img_52.png](pocu-note/COMP2500/week1/image/img_52.png)

### data type

![img_53.png](pocu-note/COMP2500/week1/image/img_53.png)

- java's integer data types use the **two’s complement** method.

![img_54.png](pocu-note/COMP2500/week1/image/img_54.png)

![img_55.png](pocu-note/COMP2500/week1/image/img_55.png)

![img_56.png](pocu-note/COMP2500/week1/image/img_56.png)

### problems caused by lack of unsigned

![img_57.png](pocu-note/COMP2500/week1/image/img_57.png)

![img_58.png](pocu-note/COMP2500/week1/image/img_58.png)

![img_59.png](pocu-note/COMP2500/week1/image/img_59.png)

- byte data type cannot be used when representing values in the range of 0 to 255
- The key difference lies in the efficiency and complexity of reading values from disk
    - Reading 4 bytes at once:
        - In languages like C or C++, where unsigned 1-byte data types (`unsigned char`) are available, you can read 4
          bytes at once and directly split them into RGB and alpha values.
        - This approach is straightforward and doesn’t require additional conversion steps, potentially offering
          performance benefits.
    - Reading 2 bytes and converting:
        - In Java, since there are no unsigned 1-byte data types, you might need to read 1 byte and then convert it
          to a 2-byte `short` to handle the bit patterns safely.
        - This could necessitate reading in 2-byte chunks and involves additional conversion steps, increasing
          complexity and possibly leading to performance overhead.

### Integer Class

![img_60.png](pocu-note/COMP2500/week1/image/img_60.png)

- To solve problems caused by lack of unsigned, java offer `Integer` class
- The `Integer` class provides utility methods that allow you to interpret and handle the bit patterns of an `int` as if
  they were unsigned integers.

### char

![img_61.png](pocu-note/COMP2500/week1/image/img_61.png)

- Some Chinese characters or emojis cannot be expressed.

![img_62.png](pocu-note/COMP2500/week1/image/img_62.png)

### boolean

![img_63.png](pocu-note/COMP2500/week1/image/img_63.png)

### primitive types are all value types

![img_64.png](pocu-note/COMP2500/week1/image/img_64.png)

- so it can be directly operated on by the CPU

### String

![img_65.png](pocu-note/COMP2500/week1/image/img_65.png)

![img_66.png](pocu-note/COMP2500/week1/image/img_66.png)

![img_67.png](pocu-note/COMP2500/week1/image/img_67.png)

- when try to modify a String using `[]` operator, **COMPILE ERROR** occur.

### literal

![img_68.png](pocu-note/COMP2500/week1/image/img_68.png)

- If you assign a value within the range of int to a long variable, you can omit the literal suffix (L or l) as the
  value is automatically promoted to long, similar to type promotion.

![img_69.png](pocu-note/COMP2500/week1/image/img_69.png)

> 8진수 리터럴 시험에서 주의

![img_70.png](pocu-note/COMP2500/week1/image/img_70.png)
![img_71.png](pocu-note/COMP2500/week1/image/img_71.png)

- unicode code point is represented in hexadecimal.

![img_72.png](pocu-note/COMP2500/week1/image/img_72.png)

### `final` keyword

![img_73.png](pocu-note/COMP2500/week1/image/img_73.png)
![img_74.png](pocu-note/COMP2500/week1/image/img_74.png)

#### final member variable

![img_75.png](pocu-note/COMP2500/week1/image/img_75.png)
![img_76.png](pocu-note/COMP2500/week1/image/img_76.png)

#### final method parameter

![img_77.png](pocu-note/COMP2500/week1/image/img_77.png)
![img_78.png](pocu-note/COMP2500/week1/image/img_78.png)

#### final variable initialization

![img_79.png](pocu-note/COMP2500/week1/image/img_79.png)
![img_80.png](pocu-note/COMP2500/week1/image/img_80.png)

- final local variable only needs to be initialized before it is used.

```java
public int fun() {
    final int MAX_CLASS;
    System.out.println(MAX_CLASS);  // COMPILE ERROR

    return 0;
}
```

![img_81.png](pocu-note/COMP2500/week1/image/img_81.png)

- final member variable can only be initialized in the constructor.
    - This is because the compiler cannot determine when other methods will be called during execution.
    - Since the constructor is called when an object is created, the compiler can guarantee the initialization timing.

![img_82.png](pocu-note/COMP2500/week1/image/img_82.png)

```java
public class StudentManager {
    final int MAX_STUDENT;  // OK

    public void printScores() {
        final int MAX_CLASS;  // OK
        MAX_CLASS = 5;  // OK
        System.out.printf("%d", MAX_CLASS);  // OK
    }

    public StudentManager() {
        MAX_STUDENT = 10;  // OK
    }
}

public class StudentManager {
    final int MAX_STUDENT = 10;  // OK

    public void printScores() {
        final int MAX_CLASS;  // OK
        MAX_CLASS = 5;  // OK
        System.out.printf("%d", MAX_CLASS);  // OK
    }
}
```

- Both code examples behave the same way
    - initialization in constructor == assigning value at the point of declaration for a member variable

### comment

![img_83.png](pocu-note/COMP2500/week1/image/img_83.png)

#### Javadoc

![img_84.png](pocu-note/COMP2500/week1/image/img_84.png)
![img_85.png](pocu-note/COMP2500/week1/image/img_85.png)
![img_86.png](pocu-note/COMP2500/week1/image/img_86.png)
![img_87.png](pocu-note/COMP2500/week1/image/img_87.png)
![img_88.png](pocu-note/COMP2500/week1/image/img_88.png)

- API documentation is useful when distributing to external users.

### operator

![img_89.png](pocu-note/COMP2500/week1/image/img_89.png)
![img_90.png](pocu-note/COMP2500/week1/image/img_90.png)

#### arithmetic operators

![img_91.png](pocu-note/COMP2500/week1/image/img_91.png)

- unlike C, the `boolean`type is not an integer.

```java
public int fun() {
    long l = 123 + 4L;
    char ch = 'a' + 1;
    char uc = '\u1622' + 2;
    String s = "a" + "b" + "c" + "d" + "e" + "f" + "g" + "h";

    return 0;
}
```

#### assign operator

![img_92.png](pocu-note/COMP2500/week1/image/img_92.png)

##### value type and assign operator

![img_93.png](pocu-note/COMP2500/week1/image/img_93.png)
![img_94.png](pocu-note/COMP2500/week1/image/img_94.png)

- Value types have their own storage space.
    - register, stack memory

![img_95.png](pocu-note/COMP2500/week1/image/img_95.png)

- assigning value 90 to variable `score2` means that writing in own storage space

##### reference type and assign operator

![img_96.png](pocu-note/COMP2500/week1/image/img_96.png)
![img_97.png](pocu-note/COMP2500/week1/image/img_97.png)
![img_98.png](pocu-note/COMP2500/week1/image/img_98.png)

- shallow copy

##### string and assign operator

![img_99.png](pocu-note/COMP2500/week1/image/img_99.png)
![img_100.png](pocu-note/COMP2500/week1/image/img_100.png)
![img_101.png](pocu-note/COMP2500/week1/image/img_101.png)

- because string is immutable new string "Nana" is created.

### casting

![img_102.png](pocu-note/COMP2500/week1/image/img_102.png)

### logical operator

![img_103.png](pocu-note/COMP2500/week1/image/img_103.png)

### == operator and string

![img_104.png](pocu-note/COMP2500/week1/image/img_104.png)
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
