## 1

```java
// StudentManager.java

package midterm;

public class Student {
    private String name;
}

public class Teacher {
    private final String name;

    public Teacher(String name) {
        this.name = name;
    }
}
```

```text
답:
a) 컴파일 오류
b) Teacher.java 파일을 생성하고, Teacher 클래스를 옮긴다. 한 .java 파일에는 최고 레벨 public 클래스가 단 하나만 있어야 함
```

## 2

```java
// StudentManager.java
package midterm;

public class Student {
    private String name;

    public void func(String... args) {
        for (String arg : args) {
            System.out.println(arg);
        }
    }
}
```

```java
// Main.java
package midterm;

import com.example.util.Utility;

public class Main {
    public static void main(String[] args) {
        Utility utility = new Utility();
        utility.func("a", "b", "c");
    }
}
```

```text
답:
a) 문제 없음
c)
>>출력
a
b
c

```

## 3

```java
// Main.java
package midterm;


import com.example.util.Utility;

public class Main {
    public static void main(String[] args) {
        Utility utility = new Utility();
        utility.func("a", "b", 1, 2);
    }
}
```

```java
// StudentManager.java
package midterm;


public class Student {
    private String name;


    public void func(String... args) {
        for (String arg : args) {
            System.out.println(arg);
        }
    }
}
```

```text
답:
a) 컴파일 오류
b) 가변인자의 자료형에 맞는 데이터만 인자로 전달 가능
```

## 4

```java
// Main.java
package midterm;


import com.example.util.Utility;

public class Main {
    public static void main(String[] args) {
        Utility utility = new Utility();
        utility.func("a", 1, 2.3f, 4L, 'z');
    }
}
```

```java
// StudentManager.java
package midterm;

public class Student {
    private String name;

    public void func(String... args) {
        for (var arg : args) {
            System.out.println(arg);
        }
    }
}
```

```text

답:
a) 문제 없음
b)
>> 출력
a
1
2.3
4
z

```

## 5

```java
// StudentManager.java
package midterm;


public class Student {
    private String name;


    public void func(String prefix, Object... args) {
        for (var arg : args) {
            System.out.printf(prefix + arg + System.lineSeparator());
        }
    }
}
```

```java
// Main.java
package midterm;

import com.example.util.Utility;

public class Main {
    public static void main(String[] args) {
        Utility utility = new Utility();
        utility.func("k", 1, 2, 3);
    }
}
```

```text
답:
a) 문제 없음
b)
>> 출력

k1
k2
k3
```

## 6

```java
// StudentManager.java
package midterm;

public class Student {
    private String name;

    public void func(Object... args, String sufix) {
        for (var arg : args) {
            System.out.printf(arg + sufix + System.lineSeparator());
        }
    }
}
```

```java
// Main.java
package midterm;

import com.example.util.Utility;

public class Main {
    public static void main(String[] args) {
        Utility utility = new Utility();
        utility.func(1, 2, 3, "k");
    }
}
```

```text
답:
a) 컴파일 오류
c) Vararg parameter must be the last in the list, 가변 인자는 반드시 함수의 마지막 매개변수여야 함.
```

## 7

```java
// 파일 경로: /src/com/util/Utility.java

package com.example.util;

public class Utility {
    public static void main(String[] args) {
        System.out.println("Utility class");
    }
}

답:
a)
컴파일 오류
c)java:
cannot find
symbol,
패키지 구조와
파일 시스템이
일치해야함.이 클래스
파일의 경로를 /src/com/example/util/
Utility.java 로
수정
```

## 8

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        String name = "Java";
        String name2 = new String("Java2");
        name[0] = 'h';
        System.out.println(name);
        System.out.println(name2);
    }
}

답:
a)
컴파일 오류
b)
자바에서 String
        개체는 immutable, 배열과
같은 방식으로
인덱스 접근을
통해 원소를
수정할 수
없음.대신에 새로운
문자열을 생성해야함

// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        String name = "Java";
        String name2 = new String("Java2");
        name = "hava";
        System.out.println(name);
        System.out.println(name2);
    }
}

```

## 9

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        int num1 = 012;
        int num2 = 12;
        System.out.println(num1 + num2);
    }
}

```

답:
a)문제없음
c)
> > 출력
> > 22

## 10

```java
public class StudentManager {
    public final int MAX_STUDENT;

    public StudentManager() {
        final int MAX_CLASS;
        MAX_CLASS = 5;
        System.out.printf("%d", MAX_CLASS);
    }
}

public class StudentManager {
    public final int MAX_STUDENT = 10;

    public StudentManager() {
        final int MAX_CLASS;
        MAX_CLASS = 5;
        System.out.printf("%d", MAX_CLASS);
        System.out.println(MAX_STUDENT);
    }
}

public class StudentManager {
    public final int MAX_STUDENT;

    public StudentManager() {
        final int MAX_CLASS;
        MAX_CLASS = 5;
        System.out.printf("%d", MAX_CLASS);
        this.MAX_STUDENT = 10;  // 생성자에서 초기화
        System.out.println(MAX_STUDENT);
    }
}
```

답:
a)
컴파일 오류
b)
final 키워드가 붙은
멤버 변수는
반드시 사용
전 초기화
되어야함.클래스에서 선언할
때 선언과
동시에 초기화하거나, 생성자롸
개체를 생성할
때 초기화해야함

## 11

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        byte num1 = -12;
        byte num2 = -12;
        System.out.println(num1 >> 1);
        System.out.println(num2 >>> 1);
    }
}
```

> > 출력
> > -6
> > 2147483642

- 자바의 비트 시프트 연산자는 byte 값을 내부적으로 int로 변환하여 처리함
- byte -12
    - 11110100 (2의 보수)
    - 11111111 11111111 11111111 11110100 (int 변환)
- -12 >> 1
    - 11111111 11111111 11111111 11111010
    - 00000000 00000000 00000000 00000110 (2의 보수로 6)
- -12 >>> 1
    - 01111111 11111111 11111111 11111010
        - 2147483642

## 12

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        String name = "A";

        switch (name) {
            case "A":
                System.out.println("Hello A");
            case "B":
                System.out.println("Hello B");
                break;
            case "C":
                System.out.println("Hello C");
                break;
        }
    }
}
```

> > 출력
> > Hello A
> > Hello B

break 빼먹어도 컴파일 오류는 나지 않음  
실행 시 fall-through

## 13

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        int[] scores = {10, 20, 30, 40};

        outer:
        for (int i = 0; i < scores.length; i++) {
            if (scores[i] > 30) {
                break exit;
            }
            System.out.println(scores[i]);
        }

        exit:
        {
            System.out.println("Exit block reached.");
        }
    }
}
```

답:
a)
컴파일 오류
b)break
문에 사용하는
라벨은 반드시
break를 감싸는
라벨이어야 함 break
exit 대신 break
outer로 수정

## 14

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        outer:
        for (int i = 0; i < 4; ++i) {
            inner:
            for (int j = i; j < 4; ++j) {
                if (j == 1) {
                    break inner;
                }
                if (j == 2) {
                    continue outer;
                }
                System.out.print("*");
            }
            System.out.println();
        }
    }
}

```

> > 출력

*\n\n*\n

## 15

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        int[][] jaggedArray = new int[3][4];
        for (int i = 0; i < jaggedArray.length; i++) {
            System.out.println(jaggedArray[i].length);
        }
    }
}

```

> > 출력
> > 4
> > 4
> > 4

## 16

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        int[][] jaggedArray = new int[3][];
        for (int i = 0; i < jaggedArray.length; i++) {
            jaggedArray[i] = new int[i + 1];
        }
        for (var arr : jaggedArray) {
            System.out.println(arr.length);
        }
    }
}
```

> > 출력
> > 1
> > 2
> > 3

## 17

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        int[][] jaggedArray = new int[3][];
        for (int i = 0; i < jaggedArray.length; i++) {
            System.out.println(jaggedArray[i].length);
        }
    }
}
```

a)
런타임 오류
b)
배열 안의 배열을 초기화하지 않아서,null 배열을 배열의 원소로 선언하고 초기화하지 않으면 참조형의 0 의 준하는 값 null

## 18

배열을 이용한 swap

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 5};
        System.out.println("before Swap");
        for (int e : arr) {
            System.out.println(e);
        }
        swap(arr, 0, 1);
        System.out.println("after Swap");
        for (int e : arr) {
            System.out.println(e);
        }
    }

    private static void swap(int[] arr, int idx1, int idx2) {
        int temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
}

```

## 19

```java
package midterm;

public class Student {
    private final String name;
    private final int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Student(int age) {
        this("noname" + age, age);
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
```

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        System.out.println(student.getName());
    }
}
```

a) 컴파일 오류
b) 생성자를 호출할 때 매개변수로, age값, name값을 넣으면 된다. 클래스에 직접 생성자를 구현하면, 컴파일러는 기본 생성자를 만들어주지 않는다.

## 20

```java
package midterm;

public class SingleTon {

    private static SingleTon instance = null;
    private int counter = 0;
    private static int counter = 0; // static 키워드 여부와 관계없이 멤버 변수 이름 중복 X

    private SingleTon() {
    }

    public static SingleTon getInstance() {
        if (SingleTon.instance == null) {
            SingleTon.instance = new SingleTon();
            return SingleTon.instance;
        }

        return SingleTon.instance;
    }

    private SingleTon getInstance() {
        return SingleTon.instance;  // static 키워드 여부와 관계없이 멤버 함수 이름 중복 X
    }

    public void doDive() {
        System.out.println("SingleTon");
    }
}
```

- 멤버 변수, 멤버 함수 이름 중복:
    - 컴파일 에러

## 21

```java
package midterm;

public class SingleTon {

    private static SingleTon instance = null;
    private int mCounter = 0;
    private static int counter = 0;

    private SingleTon() {
    }

    public static SingleTon getInstance() {
        if (SingleTon.instance == null) {
            SingleTon.instance = new SingleTon();
            return SingleTon.instance;
        }

        return SingleTon.instance;
    }

    public static int getCounter() {
        return mCounter;
    }

    public void doDive() {
        System.out.println(SingleTon.counter);
    }
}
```

- 정적 멤버 함수에서 비정적 멤버 변수로 접근 X
    - 컴파일 에러: Non-static field 'mCounter' cannot be referenced from a static context

## 22

```java
package midterm;

public class Outer {
    Inner inner = new Inner("f");

    public Outer() {
        nonStaticInner = new Inner("c"); // Outer 클래스의 생성자에서 Inner 클래스 개체 생성 가능, Outer 개체 생성 후 호출되기 때문
        Inner inner2 = new Inner("d");  // Outer 클래스의 생성자도 non-staic method이기 때문에 Outer 개체 생성 후 non-static method인 Inner class의 생성자 호출 가능
    }

    public void nonStaticMethod() {
        for (int i = 0; i < nonStaticInner.innerMemberVariable; ++i) {
            System.out.println(nonStaticInner.name);
            this.nonStaticInner = new Inner("create!");
        }
    }

    public static void staticMethod() {
        Inner inner = new Inner("inner");    // COMPILE ERROR: Outer 클래스를 생성하기 전, non-static inner class 개체 생성할 수 없음
        Inner inner2 = this.new Inner("inner"); // COMPILE ERROR: Outer 클래스의 static method에서 non-static에 접근할 수 없음, this
    }

    public class Inner {
        private int innerMemberVariable = 3;
        private final String name;

        public Inner(String name) {
            this.name = name;
        }
    }
}
```

## 23

```java
// Outer.java
package midterm;

public class Outer {
    Inner inner = new Inner("f");

    public Outer() {
        nonStaticInner = new Inner("c");
    }

    public void nonStaticMethod() {
        for (int i = 0; i < this.nonStaticInner.innerMemberVariable; ++i) {
            System.out.println(this.nonStaticInner.name);
        }
    }

    public class Inner {
        private int innerMemberVariable = 3;
        private final String name;

        public Inner(String name) {
            this.name = name;
        }

        public void nonStaticMethod() {
            System.out.println(nonStaticInner.name);
        }
    }
}
```

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner("innerName");
        inner.nonStaticMethod();
    }
}
```

> > 출력

```
c\n
```

## 24

```java
// Outer.java
package midterm;

public class Outer {
    Inner nonStaticInner;
    private static final Inner staticInner = new Inner();

    public Outer() {
        nonStaticInner = new Inner();
    }

    public static void staticMethod() {
        for (int i = 0; i < staticInner.innerMemberVariable; ++i) {
            System.out.println(Inner.CONSTANT);
        }
    }

    public static class Inner {
        private static final int CONSTANT = 5;
        private int innerMemberVariable = 3;

        public void nonStaticMethod() {
            System.out.println(innerMemberVariable);
        }

        public static void staticMethod() {
            staticInner.nonStaticMethod();
        }
    }
}
```

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        Outer.Inner.staticMethod();
    }
}
```

> > 출력

```java
3\n
```

## 25

```java
package midterm;

public class Outer {
    Inner nonStaticInner;
    private static final Inner staticInner = new Inner();

    public Outer() {
        nonStaticInner = new Inner();
    }

    public static void staticMethod() {
        for (int i = 0; i < staticInner.innerMemberVariable; ++i) {
            System.out.println(Inner.CONSTANT);
        }
    }

    public static class Inner {
        private static final int CONSTANT = 5;
        private int innerMemberVariable = 3;

        public void nonStaticMethod() {
            System.out.println(nonStaticInner.innerMemberVariable); // COMPILE ERROR: Outer 클래스의 non-static member에 접근할 수 없음
            System.out.println(innerMemberVariable);
        }

        public static void staticMethod() {
            staticInner.nonStaticMethod();
        }
    }
}

```

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        Outer.Inner.staticMethod();
    }
}
```

- 컴파일 에러:
    - Inner class의 static 메소드에서 Outer class의 non-static 멤버에 접근할 수 없음

## 26

```java
// Base.java
package midterm;

public class Base {
    private int baseMemberVariable = 3;

    private Base() {
    }

    public Base(int baseMemberVariable) {
        this.baseMemberVariable = baseMemberVariable;
    }

    public int getBaseMemberVariable() {
        return baseMemberVariable;
    }

    protected void setBaseMemberVariable(int baseMemberVariable) {
        this.baseMemberVariable = baseMemberVariable;
    }
}

```

```java
// Derived.java
package midterm;

public class Derived extends Base {
    public Derived(int x, int y) {
        super(x + y);
        super(3);
        super.setBaseMemberVariable(x + y);
    }

    public void fun() {
        System.out.println(super.getBaseMemberVariable());
    }
}
```

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        Derived derived = new Derived(1, 5);
        derived.fun();
    }
}
```

- 컴파일 에러:
    - Only one explicit constructor call allowed in constructo
    - 부모 클래스의 생성자를 2번 호출할 수 없음

## 27

```java
package midterm;

public class Base {
    private int baseMemberVariable = 3;

    private Base() {
    }

    public Base(int baseMemberVariable) {
        this.baseMemberVariable = baseMemberVariable;
    }

    public int getBaseMemberVariable() {
        return baseMemberVariable;
    }

    protected void setBaseMemberVariable(int baseMemberVariable) {
        this.baseMemberVariable = baseMemberVariable;
    }
}
```

```java
package midterm;

public class Derived extends Base {
    public Derived(int x, int y) {
        super.setBaseMemberVariable(x + y);
    }

    public void fun() {
        System.out.println(super.getBaseMemberVariable());
    }
}
```

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        Derived derived = new Derived(1, 5);
        derived.fun();
    }
}
```

- 컴파일 오류:
    - 자식 클래스의 생성자에서 부모 클래스의 기본 생성자를 호출하도록 컴파일러가 넣어주는데, 기본 생성자를 private 접근제어자로 해놔서 호출이 안 됨.
    - 'Base()' has private access in 'midterm.Base'

## 28

```java
// Main.java
package midterm;

public class Main {
    public static void main(String[] args) {
        Base base = new Base(10);
        Derived derived = new Derived(1, 5);
        derived.fun();
    }
}
```

```java
package midterm;

public class Derived extends Base {
    public Derived(int x, int y) {
        super(x + y);
    }

    public void fun() {
        System.out.println(super.getBaseMemberVariable());
        System.out.println(this.pm);    // 부모 클래스의 protected 멤버 변수에 this로 접근가능
        System.out.println(super.pm);
    }
}

```

```java
package midterm;

public class Base {
    private int baseMemberVariable = 3;
    protected String pm = "pm!";

    public Base(int baseMemberVariable) {
        this.baseMemberVariable = baseMemberVariable;
    }

    public int getBaseMemberVariable() {
        return baseMemberVariable;
    }

    protected void setBaseMemberVariable(int baseMemberVariable) {
        this.baseMemberVariable = baseMemberVariable;
    }
}

```

> > 출력

```shell
3\npm!pm!\n
```

- 자식 클래스 코드에서 부모 클래스의 protected 멤버 변수에 접근할 때 this를 사용할 수 있음!
    - 하지만 super가 가독성이 좋다!