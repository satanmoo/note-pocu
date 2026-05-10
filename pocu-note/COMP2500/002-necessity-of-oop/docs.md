# Week2



## Usage Of Object

### Accessing To Member Variable

![img_74.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_74.png)
![img_75.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_75.png)

#### Point To Note 1: Pointer Vs Reference Data Type

![img_76.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_76.png)
![img_77.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_77.png)

- Conceptually, reference type is the same as pointer.

![img_78.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_78.png)
![img_79.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_79.png)
![img_80.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_80.png)

- In C, we can pass ***object*** to function by value or reference
  - in this context, ***object*** is implemented by structure
- In java, ***object*** only can be passed to function by reference

![img_81.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_81.png)

- java's `int` is primitive type and java doesn't have pointer 
- so we can't pass `int` type variable by reference and modify that value within a functions

#### Point To Note 2: Initialization

![img_82.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_82.png)
![img_83.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_83.png)

- In java, even if the programmer does not explicitly initialize variables, they are automatically initialized with default values corresponding to zero
  - this mean zero-equivalent bit pattern

![img_84.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_84.png)

- Because of java's philosophy to prevent mistake ***object***'s member is initialized with default value
- If a programmer wants to assign an initial value to a class field(member variable), they can do so by writing code that assigns the value directly to the member variable in the class definition

#### Point To Note 3: operator `.`

![img_85.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_85.png)
![img_86.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_86.png)
![img_87.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_87.png)

### Accessing To Member Function

![img_88.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_88.png)

- same as member variable, use operator `.`

![img_90.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_90.png)

## Garbage Collection 

![img_91.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_91.png)
![img_92.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_92.png)
![img_93.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_93.png)
![img_94.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_94.png)

## Constructor

![img_95.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_95.png)
![img_96.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_96.png)
![img_97.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_97.png)
![img_98.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_98.png)

> Note: The constructor has no return type.

### Constructor overloading 

![img_99.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_99.png)
![img_100.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_100.png)
![img_101.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_101.png)

- `this()` can call other constructor in same class

### Default Constructor

![img_102.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_102.png)
![img_103.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_103.png)
![img_104.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_104.png)
![img_105.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_105.png)
![img_106.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_106.png)
![img_107.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_107.png)

> Note: when programmer explicitly offer constructor compiler doesn't create default constructor!

### Why use constructor?

![img_108.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_108.png)
![img_109.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_109.png)
![img_110.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_110.png)
![img_111.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_111.png)
![img_112.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_112.png)

#### Mistake scenarios 1: Which member variable be initialized?

![img_113.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_113.png)
![img 121.png](img121.png)

- To know which member variable should be initialized at instantiation, the user need to check class code implementation 

![img_114.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_114.png)

- There may be member variables which do not need to be initialized by user

![img_115.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_115.png)

- Someone else added member variable to the class code that must be initialized by user
- If the user does not initialize it, a runtime error will occur
- A constructor enforces arguments at compile time to prevent this mistakes.

#### Mistake scenarios 2: What value should be used for initialization? 

![img_116.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_116.png)
![img_117.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_117.png)

```java
// 사용자로부터 이름, 나이, 성별, 국적을 입력 받음
Human human = new Human();

human.name = 사용자가 입력한 값;
human.age = 사용자가 입력한 값;
human.sex = 사용자가 입력한 값;
human.citizenship = 사용자가 입력한 값;

if (human.citizenship == Citizenship.KOREA) {
human.age += 1;
}

// 동일한 로직이 반복적으로 사용됨
if (human.citizenship == Citizenship.USA) {
human.age += 1;
}

if (human.citizenship == Citizenship.CANADA) {
human.age += 1;
}
```

- upper code can be duplicated, using constructors prevents code duplication by concentrating the logic in the constructor.

```java
class Human {
    String name;
    int age;
    String sex;
    Citizenship citizenship;

    // 생성자에서 모든 값을 초기화하고, 로직을 처리함
    public Human(String name, int age, String sex, Citizenship citizenship) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.citizenship = citizenship;

        // 국적에 따라 나이를 증가시키는 로직
        if (citizenship == Citizenship.KOREA || 
            citizenship == Citizenship.USA || 
            citizenship == Citizenship.CANADA) {
            this.age += 1;
        }
    }
}

// 객체 생성 시 생성자를 통해 값을 초기화하고, 로직이 자동으로 실행됨
Human human = new Human(사용자가 입력한 이름, 사용자가 입력한 나이, 사용자가 입력한 성별, 사용자가 입력한 국적);
```

![img_118.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_118.png)
![img_119.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_119.png)
![img_120.png](pocu-note/COMP2500/002-necessity-of-oop/image/img_120.png)

- Function is ***BlackBox***
  - Constructor also function
- ***BlackBox*** concept is linked to ***encapsulation***, ***data abstraction***
