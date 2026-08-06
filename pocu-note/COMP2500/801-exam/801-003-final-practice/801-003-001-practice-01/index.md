# 기말 연습 문제

시험 안내·범위는 [[pocu-note/COMP2500/801-exam/final-exam-info|기말고사 정보]] 참고

분량 기준: 이 연습 문제를 25~30분에 풀 실력이 되어야 함 (실제 시험은 4~5배 분량, 2시간)

## 1

다음과 같은 코드가 있습니다.

```java
// Foo.java
package academy.pocu.comp2500;

public class Foo {
    private static int count;

    public Foo() {
        ++count;
    }

    public void doMagic() {
        System.out.println(String.format("Magic: %d", count));
        --count;
    }

    public int doMiracle(int i, int j) {
        return i * 2 + count;
    }
}

// ComplexFoo.java
package academy.pocu.comp2500;

public class ComplexFoo extends Foo {
    @Override
    public int doMiracle(int i, int j) {
        return super.doMiracle(i, j) * 4;
    }
}
```

상속 대신 컴포지션을 이용하여 ComplexFoo를 다시 작성하세요.

## 2

아래에 있는 각 코드를 읽고 다음 질문에 답하세요.

a) 이 코드에 오류가 있나요? 경우에 따라 아래처럼 답안지에 써주세요
- 컴파일 오류가 있다면: '컴파일 오류'
- 실행 중 오류가 있다면: '런타임 오류'
- 아무 문제 없다면: '문제 없음'

b) a)에서 오류가 있었다고 답했으면 그 문제를 어떻게 고칠지 설명하세요. 단, Program.java는 바뀌면 안됩니다. 설명은 문장으로 하셔도 되고 코드를 직접 수정하셔도 됩니다. 코드를 직접 수정하실 경우 아래의 형식을 따라주세요.

예:
전) a = p;
후) a = p + 11;

c) a)에서 '문제 없음'이라고 답했으면 코드 실행 후 출력되는 결과를 적으세요.

### 2-a)

```java
// A.java
package academy.pocu.comp2500;

public class A {
    private final String s;

    public A(String s) {
        this.s = s;
    }

    public String getS() {
        return this.s;
    }

    public void printS() {
        System.out.println(String.format("A: %s", this.s));
    }

    public void doMagic(int x) {
        System.out.println(x + this.s.length());
    }
}

// B.java
package academy.pocu.comp2500;

public class B extends A {
    public B(String s) {
        super(s);
    }

    public void printS() {
        System.out.println(String.format("B: %s", this.getS()));
    }

    public float doMagic(float x) {
        float ret = 2 * x;
        System.out.println(ret);

        return ret;
    }
}

// C.java
package academy.pocu.comp2500;

public class C extends B {
    public C(String s) {
        super(s);
    }

    public void printS() {
        System.out.println(String.format("C: %s", this.getS()));
    }

    public void doMagic(int x) {
        System.out.println((int) (x * x));
    }
}

// Program.java
package academy.pocu.comp2500;

public class Program {
    public static void main(String[] args) {
        A a = new A("hello");
        A b = new B("world");
        A c = new C("Pocu");

        a.printS();
        b.printS();
        c.printS();

        a.doMagic(1);
        b.doMagic(2);
        c.doMagic(3);
    }
}
```

### 2-b)

```java
// Calculator.java
package academy.pocu.comp2500;

public class Calculator {
    @Override
    public int add(int num1, int num2) {
        return num1 + num2;
    }

    @Override
    public int subtract(int num1, int num2) {
        return num1 - num2;
    }

    @Override
    public int multiply(int num1, int num2) {
        return num1 * num2;
    }
}

// WeirdCalculator.java
package academy.pocu.comp2500;

public class WeirdCalculator extends Calculator {
    public int add(int num1, int num2) {
        return num1 + num2 - 1;
    }

    @Override
    public int subtract(int num1, int num2) {
        return -1 * (num1 - num2);
    }

    @Override
    public int subtract(int num1, int num2, int num3) {
        int diff = subtract(num1, num3);
        return subtract(diff, num2);
    }

    public int multiply(int num1, int num2) {
        return num1 * num2 / num2;
    }
}

// AnotherWorldCalculator.java
package academy.pocu.comp2500;

public class AnotherWorldCalculator extends WeirdCalculator {
    @Override
    public int add(int num1, int num2) {
        return (num1 + num2) * -2;
    }

    @Override
    public int subtract(int num1, int num2, int num3) {
        int diff = subtract(num1, num3);
        return subtract(diff, num2);
    }

    @Override
    public int multiply(int num1, int num2) {
        return -1 * (num1 * num2);
    }
}

// Program.java
package academy.pocu.comp2500;

public class Program {
    public static void main(String[] args) {
        AnotherWorldCalculator ac = new AnotherWorldCalculator();

        int sum = ac.add(2, 1);
        int diff = ac.subtract(1, 4, 2);

        System.out.println(sum);
        System.out.println(diff);

        Calculator c = new AnotherWorldCalculator();

        sum = c.add(1, 4);
        diff = c.subtract(0, 3);

        System.out.println(sum);
        System.out.println(diff);
    }
}
```

### 2-c)

```java
// Foo.java
package academy.pocu.comp2500;

public class Foo {
    public void wingardiumLeviosa() {
        System.out.println("Foo flies!");
    }
}

// Bar.java
package academy.pocu.comp2500;

public class Bar extends Foo {
    public void wingardiumLeviosa() {
        System.out.println("Bar flies!");
    }
}

// Baz.java
package academy.pocu.comp2500;

public class Baz extends Bar {
    public void wingardiumLeviosa() {
        System.out.println("Baz flies!");
    }
}

// Qux.java
package academy.pocu.comp2500;

public class Qux extends Bar {
    public void wingardiumLeviosa() {
        super.wingardiumLeviosa();
    }
}

// Manager.java
package academy.pocu.comp2500;

import java.util.ArrayList;

public class Manager {
    private ArrayList<Foo> foos;

    public Manager(ArrayList<Foo> foos) {
        this.foos = foos;
    }

    public void doAllFoos() {
        for (Foo f : this.foos) {
            f.wingardiumLeviosa();
        }
    }
}

// Program.java
package academy.pocu.comp2500;

import java.util.ArrayList;

public class Program {
    public static void main(String[] args) {
        ArrayList<Foo> foos = new ArrayList<>();

        foos.add(new Bar());
        foos.add(new Bar());
        foos.add(new Baz());
        foos.add(new Foo());
        foos.add(new Bar());
        foos.add(new Qux());

        Manager manager = new Manager(foos);

        manager.doAllFoos();
    }
}
```

## 3

아래의 코드를 읽고 질문에 답하세요.

```java
// Foo.java
package academy.pocu.comp2500;

public class Foo {
    public void doSomething() {
        System.out.println("Foo");
    }
}

// Bar.java
package academy.pocu.comp2500;

public class Bar extends Foo {
    @Override
    public void doSomething() {
        super.doSomething();
        System.out.println("Bar");
    }
}

// Baz.java
package academy.pocu.comp2500;

public class Baz extends Foo {
    public void doSomething() {
        System.out.println("Baz");
    }
}

// Qux.java
package academy.pocu.comp2500;

public class Qux extends Baz {
    public void doSomething() {
        System.out.println("Qux");
    }
}
```

### 3-a) 이 코드를 실행하면 무엇이 출력되나요?

```java
// Program.java
package academy.pocu.comp2500;

public class Program {
    public static void main(String[] args) {
        Foo f = new Foo();
        Baz bz = new Baz();

        f.doSomething();
        bz.doSomething();
    }
}
```

### 3-b) 이 코드를 실행하면 무엇이 출력되나요?

```java
// Program.java
package academy.pocu.comp2500;

public class Program {
    public static void main(String[] args) {
        Baz q = new Qux();
        Foo q2 = q;
        Foo b = new Baz();

        q.doSomething();
        q2.doSomething();
        b.doSomething();
    }
}
```

## 4

아래의 코드를 읽고 질문에 답하세요.

a) 이 코드에 오류가 있나요? 경우에 따라 다음 중 하나로 답해주세요.
- 컴파일 오류가 있는 경우: '컴파일 오류'
- 실행 중 오류가 있는 경우: '런타임 오류'
- 아무 문제가 없는 경우: '문제없음'

b) a)에서 오류가 있다고 답했으면 왜 그 문제가 발생하는지 5 문장 이내로 설명하세요.

c) a)에서 '문제없음'이라고 답했으면 코드 실행 후 출력되는 결과를 적으세요.

```java
// A.java
package academy.pocu.comp2500;

import java.util.ArrayList;

public class A {
    private final int x;

    public A(int x) {
        this.x = x;
    }

    public final void print() {
        System.out.println(this.x);
    }

    public void doMagic(final ArrayList<Integer> nums) {
        int i;

        for (i = 0; i < nums.size(); ++i) {
            nums.set(i, i);
        }

        for (int j = i; j < 10; ++j) {
            nums.add(j);
        }

        this.x = nums.size();
    }

    public int getX() {
        return this.x;
    }
}

// B.java
package academy.pocu.comp2500;

public class B extends A {
    private int y;

    public B(int x, int y) {
        super(x);

        this.y = y;
    }

    @Override
    public void print() {
        System.out.println(this.y + 1);
    }

    @Override
    public int getX() {
        return super.getX() + this.y;
    }

    public int getY() {
        return this.y;
    }
}

// C.java
package academy.pocu.comp2500;

import java.util.ArrayList;

public class C extends B {
    public C(int x, int y) {
        super(x, y);
    }

    @Override
    public void doMagic(final ArrayList<Integer> nums) {
        super.doMagic(nums);

        nums.set(0, 0);
        nums.set(nums.size() - 1, 0);
    }

    @Override
    public int getY() {
        return getX() - getY();
    }
}

package academy.pocu.comp2500;

import java.util.ArrayList;

public class Program {

    public static void main(String[] args) {
        A b = new B(10, 10);
        A c = new C(1, 1);

        ArrayList<Integer> nums = new ArrayList<>();

        nums.add(8);
        nums.add(3);
        nums.add(5);
        nums.add(1);
        nums.add(11);

        b.doMagic(nums);
        c.doMagic(nums);

        System.out.println(b.getX());
        System.out.println(c.getX());

        b.print();
        c.print();
    }
}
```

## 5

아래의 코드를 실행하면 무엇이 출력되나요?

```java
// Person.java
package academy.pocu.comp2500;

public class Person {
    private String firstName;
    private String lastName;

    public Person(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFullName() {
        return this.firstName + " " + this.lastName;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }

        if (obj == null || !(obj instanceof Person)) {
            return false;
        }

        Person other = (Person) obj;
        return this.firstName.equals(other.firstName)
                && this.lastName.charAt(0) == other.lastName.charAt(0);
    }
}

// Knight.java
package academy.pocu.comp2500;

public class Knight extends Person {
    public Knight(String firstName, String lastName) {
        super(firstName, lastName);
    }

    @Override
    public String getFullName() {
        return "Sir " + super.getFullName();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj) && this == obj;
    }
}

// Program.java
package academy.pocu.comp2500;

public class Program {
    public static void main(String[] args) {
        Person arthur = new Person("Arthur", "Pendragon");
        Person arthur2 = new Person("Arthur", "Paul");

        if (arthur == arthur2) {
            System.out.println(arthur.getFullName());
        }

        if (arthur2.equals(arthur)) {
            System.out.println(arthur2.getFullName());
        }

        Person arthur3 = new Knight("Arthur", "Pend");

        if (arthur3.equals(arthur2)) {
            System.out.println(arthur3.getFullName());
        }

        if (arthur.equals(arthur3)) {
            System.out.println(arthur.getFullName());
        }

        Person gawain = new Knight("Gawain", "Doe");
        Person gawain2 = new Knight("Gawain", "Daddy");

        if (gawain == gawain2) {
            System.out.println(gawain2.getFullName());
        }

        if (gawain.equals(gawain)) {
            System.out.println(gawain.getFullName());
        }
    }
}
```

## 6

아래의 코드를 실행하면 무엇이 출력되나요?

```java
// Author.java
package academy.pocu.comp2500;

public final class Author {
    private String firstName;
    private String lastName;

    public Author(final String firstName, final String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFullName() {
        return this.firstName + " " + this.lastName;
    }

    @Override
    public int hashCode() {
        return this.firstName.hashCode() ^ (this.lastName.hashCode() << 16);
    }

    @Override
    public String toString() {
        return getFullName();
    }
}

// Book.java
package academy.pocu.comp2500;

public final class Book {
    private final String title;
    private final int pageCount;
    private final Author author;

    public Book(final String title, final int pageCount, final Author author) {
        this.title = title;
        this.pageCount = pageCount;
        this.author = author;
    }

    @Override
    public int hashCode() {
        int hash = this.author.hashCode();
        hash += pageCount;
        hash += title.hashCode();

        return hash;
    }

    @Override
    public String toString() {
        return this.title + String.format("(%d)", this.pageCount) + " by " + this.author.toString();
    }
}

// Program.java
package academy.pocu.comp2500;

import java.util.HashSet;

public class Program {
    public static void main(String[] args) {
        HashSet<Book> books  = new HashSet<>();

        Author author0 = new Author("Jane", "Doe");
        Author author1 = new Author("Jane", "Doe");
        Author author2 = new Author("John", "Mayor");
        Author author3 = new Author("John", "Mayor");

        Book book0 = new Book("A New Hope", 100, author0);
        Book book1 = new Book("A New Hope", 100, author1);
        Book book2 = new Book("The Empire Strikes Back", 50, author2);
        Book book3 = new Book("The Empire Strikes Back", 50, author3);

        books.add(book0);
        books.add(book1);
        books.add(book2);
        books.add(book3);

        for (Book book : books) {
            System.out.println(book.toString());
        }
    }
}
```

## 7

아래에 있는 각 코드를 읽고 다음 질문에 답하세요.

a) 이 코드에 오류가 있나요? 경우에 따라 다음 중 하나로 답해주세요.
- 컴파일 오류가 있는 경우: '컴파일 오류'
- 실행 중 오류가 있는 경우: '런타임 오류'
- 아무 문제가 없는 경우: '문제없음'

b) a)에서 오류가 있다고 답했으면 왜 그 문제가 발생하는지 5 문장 이내로 설명하세요.

c) a)에서 '문제없음'이라고 답했으면 코드 실행 후 출력되는 결과를 적으세요.

### 7-a)

```java
// Monster.java
package academy.pocu.comp2500;

public abstract class Monster {
    private String name;
    private int maxHp;
    protected int hp;
    protected int attackPoints;

    public Monster(String name, int maxHp, int attackPoints) {
        this.name = name;
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.attackPoints = attackPoints;
    }

    public void attack(Monster monster) {
        monster.hp -= this.attackPoints;
    }

    public final void shout() {
        System.out.println(String.format("%s has %d/%d health points left!", this.name, this.hp, this.maxHp));
    }
}

// Ghost.java
package academy.pocu.comp2500;

public class Ghost extends Monster {
    public Ghost(String name, int maxHp, int attackPoints) {
        super(name, maxHp, attackPoints);
    }

    @Override
    public void attack(Monster monster) {
        super.attack(monster);
        super.attack(monster);

        monster.hp += 2;
    }
}

// Vampire.java
package academy.pocu.comp2500;

public class Vampire extends Monster {
    public Vampire(String name, int maxHp, int attackPoints) {
        super(name, maxHp, attackPoints);
    }

    @Override
    public void attack(Monster monster) {
        this.hp += 5;
        super.attack(monster);
    }
}

// Program.java
package academy.pocu.comp2500;

public class Program {

    public static void main(String[] args) {
        Monster monster0 = new Monster("DoppleGanger", 100, 10);
        Monster monster1 = new Vampire("Dracula", 55, 12);
        Monster monster2 = new Ghost("Spectre", 75, 3);

        monster0.attack(monster1);
        monster1.attack(monster2);
        monster2.attack(monster0);

        monster0.shout();
        monster1.shout();
        monster2.shout();
    }
}
```

### 7-b)

```java
// Magician.java
package academy.pocu.comp2500;

public abstract class Magician {
    protected String name;

    public Magician(final String name) {
        this.name = name;
    }

    public void sayName() {
        System.out.println(String.format("I'm magician %s", this.name));
    }

    public abstract void doMagic();
}

// FireMagician.java
package academy.pocu.comp2500;

public final class FireMagician extends Magician {
    public FireMagician(String name) {
        super(name);
    }

    @Override
    public void sayName() {
        super.sayName();
        System.out.println("Burn baby burn!");
    }

    @Override
    public void doMagic() {
        System.out.println("Firestorm!");
    }
}

// IceMagician.java
package academy.pocu.comp2500;

public final class IceMagician extends Magician {
    public IceMagician(String name) {
        super(name);
    }

    @Override
    public void sayName() {
        super.sayName();
        System.out.println("Freeze for eternity!");
    }

    @Override
    public void doMagic() {
        System.out.println("Blizzard!");
    }
}

// Program.java
package academy.pocu.comp2500;

public class Program {

    public static void main(String[] args) {
        Magician magician0 = new FireMagician("Salamander");
        Magician magician1 = new IceMagician("Salamander");

        magician0.sayName();
        magician0.doMagic();

        magician1.sayName();
        magician1.doMagic();
    }
}
```

### 7-c)

```java
// Topping.java
package academy.pocu.comp2500;

public enum Topping {
    PEPERONI(5),
    MUSHROOM(3),
    CHEESE(2),
    TOMATO(2),
    ONIONS(3),
    OLIVES(4),
    PEPPER(2);

    private int price;

    private Topping(int price) {
        this.price = price;
    }

    public int getPrice() {
        return this.price;
    }
}

// Pizza.java
package academy.pocu.comp2500;

import java.util.ArrayList;
import java.util.HashSet;

public abstract class Pizza {
    private String name;
    private HashSet<Topping> toppings = new HashSet<>();

    public Pizza(String name) {
        this.name = name;
    }

    public void addTopping(Topping topping) {
        toppings.add(topping);
    }

    public void removeTopping(Topping topping) {
        toppings.remove(topping);
    }

    public abstract int getPrice() {
        int sum = 10;

        for (Topping t : this.toppings) {
            sum += t.getPrice();
        }

        return sum;
    }

    @Override
    public String toString() {
        ArrayList<String> toppingStrs = new ArrayList<>();

        for (Topping t : this.toppings) {
            toppingStrs.add(t.toString());
        }

        String toppingStr = String.join(",", toppingStrs);

        return String.format("%s (%s)", this.name, toppingStr);
    }
}

// DeepDishPizza.java
package academy.pocu.comp2500;

public class DeepDishPizza extends Pizza {
    private int depth;

    public DeepDishPizza(String name, int depth) {
        super(name);

        this.depth = depth;
    }

    @Override
    public int getPrice() {
        int price = super.getPrice();

        price += this.depth / 2;

        return price;
    }
}

// ThinCrust.java
package academy.pocu.comp2500;

public class ThinCrust extends Pizza {
    public ThinCrust(String name) {
        super(name);
    }

    @Override
    public int getPrice() {
        int price = super.getPrice();
        price -= 5;

        return price;
    }
}

// Program.java
package academy.pocu.comp2500;

public class Program {

    public static void main(String[] args) {
        Pizza pizza0 = new DeepDishPizza("Chicago DeepDish", 3);

        pizza0.addTopping(Topping.PEPERONI);
        pizza0.addTopping(Topping.CHEESE);
        pizza0.addTopping(Topping.PEPPER);

        Pizza pizza1 = new ThinCrust("Thinnest Crust");

        pizza1.addTopping(Topping.MUSHROOM);
        pizza1.addTopping(Topping.OLIVES);
        pizza1.addTopping(Topping.ONIONS);
        pizza1.addTopping(Topping.TOMATO);
        pizza1.addTopping(Topping.CHEESE);

        System.out.println(pizza0.getPrice());
        System.out.println(pizza1.getPrice());
    }

}
```

## 8

아래에 있는 각 코드를 읽고 다음 질문에 답하세요.

a) 이 코드에 오류가 있나요? 경우에 따라 다음 중 하나로 답해주세요.
- 컴파일 오류가 있는 경우: '컴파일 오류'
- 실행 중 오류가 있는 경우: '런타임 오류'
- 아무 문제가 없는 경우: '문제없음'

b) a)에서 오류가 있다고 답했으면 왜 그 문제가 발생하는지 5 문장 이내로 설명하세요.

c) a)에서 '문제없음'이라고 답했으면 코드 실행 후 출력되는 결과를 적으세요.

### 8-a)

```java
// IFoo.java
package academy.pocu.comp2500;

public interface IFoo {
    public String blackMagic(char c);

    int whiteMagic(int x, int y);
}

// IBar.java
package academy.pocu.comp2500;

public interface IBar {
    public void blackMagic(char c);
}

// Base.java
package academy.pocu.comp2500;

public class Base {
    protected int x;

    public Base(final int x) {
        this.x = x;
    }

    public int getX() {
        return this.x;
    }

    public void setX(final int x) {
        this.x = x;
    }
}

// Baz.java
package academy.pocu.comp2500;

public class Baz extends Base implements IFoo, IBar {
    public Baz(int x) {
        super(x);
    }

    @Override
    public String blackMagic(char c) {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < this.x; ++i) {
            sb.append(String.format("%c,", c));
        }

        return sb.toString();
    }

    @Override
    public int whiteMagic(int x, int y) {
        return x + y + this.x;
    }
}

// Program.java
package academy.pocu.comp2500;

public class Program {

    public static void main(String[] args) {
        IFoo foo = new Baz(12);
        IBar bar = new Baz(5);

        System.out.println(foo.blackMagic('z'));
        System.out.println(foo.whiteMagic(4, 8));

        System.out.println(bar.blackMagic('u'));
    }

}
```

### 8-b)

```java
// IA.java
package academy.pocu.comp2500;

public interface IA {
    int fireball(int x, int y, int z);
    int iceStorm(int x, int y);
}

// Base.java
package academy.pocu.comp2500;

public abstract class Base {
    protected int x;
    protected int y;
    protected int z;

    public Base(int x, int y, int z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public abstract int fusRohDah();

    public abstract int tiidKloUi();

    public abstract int durNehViir();
}

// A.java
package academy.pocu.comp2500;

public class A implements IA {

    @Override
    public int fireball(int x, int y, int z) {
        return x * y * z;
    }

    @Override
    public int iceStorm(int x, int y) {
        return x * y;
    }
}

// B.java
package academy.pocu.comp2500;

public class B extends Base implements IA {
    public B(int x, int y, int z) {
        super(x, y, z);
    }

    @Override
    public int fusRohDah() {
        return this.x * this.y * this.z;
    }

    @Override
    public int tiidKloUi() {
        return this.x - this.y + this.z;
    }

    @Override
    public int durNehViir() {
        return this.x + this.y - this.z;
    }

    @Override
    public int fireball(int x, int y, int z) {
        return this.x + y + z + x;
    }

    @Override
    public int iceStorm(int x, int y) {
        return this.z + this.y + x - y;
    }
}

// Program.java
package academy.pocu.comp2500;

public class Program {

    public static void main(String[] args) {
        IA a0 = new A();
        IA a1 = new B(1, 5, 2);
        Base a2 = new B(6, 2, 1);

        System.out.println(a0.fireball(1, 2, 1));
        System.out.println(a2.durNehViir());
        System.out.println(a1.iceStorm(2, 2));
    }

}
```

### 8-c)

```java
// IFoo.java
package academy.pocu.comp2500;

public interface IFoo {
    void blackMagic(String s);

    void whiteMagic(String s, int x);
}

// IBar.java
package academy.pocu.comp2500;

public interface IBar {
    void blackMagic(String s);
}

// Base.java
package academy.pocu.comp2500;

public class Base {
    protected int x;

    public Base(final int x) {
        this.x = x;
    }

    public int getX() {
        return this.x;
    }

    public void setX(final int x) {
        this.x = x;
    }
}

// Baz.java
package academy.pocu.comp2500;

public class Baz extends Base implements IFoo, IBar {
    public Baz(int x) {
        super(x);
    }

    @Override
    public void blackMagic(String s) {
        System.out.println(String.format("%d%d", this.x, s.length()));
    }

    @Override
    public void whiteMagic(String s, int num) {
        int y = s.length() * this.x + num;

        System.out.println(y);
    }
}

// Program.java
package academy.pocu.comp2500;

public class Program {

    public static void main(String[] args) {
        IFoo foo = new Baz(1);
        IBar bar = new Baz(5);

        foo.blackMagic("Hello World");
        foo.whiteMagic("Apple", 6);
        bar.blackMagic("World");
    }

}
```

## 9

다음의 질문에 답하세요.

a) 결합도가 높은 코드란 무엇을 의미하는지 다섯 문장 이내로 설명하세요.

b) 두 클래스 간의 결합도를 줄이는 방법을 최소 2개 설명하세요.

## 10

아래의 코드를 실행하면 무엇이 출력되나요?

```java
// Humanoid.java
package academy.pocu.comp2500;

public class Humanoid implements Cloneable {
    private Head head;
    private Arm leftArm;
    private Arm rightArm;
    private Leg leftLeg;
    private Leg rightLeg;

    public Humanoid(final Head head,
                    final Arm leftArm,
                    final Arm rightArm,
                    final Leg leftLeg,
                    final Leg rightLeg) {
        this.head = head;
        this.leftArm = leftArm;
        this.rightArm = rightArm;
        this.leftLeg = leftLeg;
        this.rightLeg = rightLeg;
    }

    public Arm getLeftArm() {
        return this.leftArm;
    }

    public Arm getRightArm() {
        return this.rightArm;
    }

    public Leg getLeftLeg() {
        return this.leftLeg;
    }

    public Leg getRightLeg() {
        return this.rightLeg;
    }

    public Head getHead() {
        return this.head;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        Humanoid clone = (Humanoid) super.clone();

        return clone;
    }
}

// BasePart.java
package academy.pocu.comp2500;

public abstract class BasePart {
    private int weight;

    public BasePart(final int weight) {
        this.weight = weight;
    }

    public int getWeight() {
        return this.weight;
    }

    public void setWeight(final int weight) {
        this.weight = weight;
    }
}

// Head.java
package academy.pocu.comp2500;

public class Head extends BasePart {
    public Head(int weight) {
        super(weight);
    }
}

// Arm.java
package academy.pocu.comp2500;

public class Arm extends BasePart implements Cloneable {
    private int length;

    public Arm(final int weight, final int length) {
        super(weight);
        this.length = length;
    }

    public int getLength() {
        return this.length;
    }

    public void setLength(int length) {
        this.length = length;
    }
}

// Leg.java
package academy.pocu.comp2500;

public class Leg extends BasePart implements Cloneable {
    private int length;

    public Leg(final int weight, final int length) {
        super(weight);
        this.length = length;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    public int getLength() {
        return this.length;
    }

    public void setLength(int length) {
        this.length = length;
    }
}

// Program.java
package academy.pocu.comp2500;

public class Program {

    public static void main(String[] args) {
        Head head = new Head(10);
        Arm leftArm = new Arm(5, 10);
        Arm rightArm = new Arm(3, 5);
        Leg leftLeg = new Leg(6, 4);
        Leg rightLeg = new Leg(7, 1);

        Humanoid humanoid = new Humanoid(head, leftArm, rightArm, leftLeg, rightLeg);

        Humanoid humanoidCopy;
        try {
            humanoidCopy = (Humanoid) humanoid.clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
            return;
        }

        humanoid.getHead().setWeight(8);
        humanoid.getLeftArm().setLength(1);
        humanoid.getRightLeg().setLength(5);

        System.out.println(humanoidCopy.getHead().getWeight());
        System.out.println(humanoidCopy.getLeftArm().getLength());
        System.out.println(humanoidCopy.getRightLeg().getLength());
    }

}
```

## 11

checked 예외와 unchecked 예외의 차이점을 다섯 문장 이내로 설명하세요.

## 12

개방/폐쇄 원칙이란 무엇인지 다섯 문장 이내로 설명하세요.
