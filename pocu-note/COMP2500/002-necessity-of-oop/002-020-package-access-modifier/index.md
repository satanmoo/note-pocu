---
aliases:
  - 패키지 접근 제어자
tags:
  - COMP2500
  - week3
---
# 패키지 접근 제어자

## 접근 제어자를 안 붙일 경우

![img_23.png](pocu-note/COMP2500/002-necessity-of-oop/002-020-package-access-modifier/images/package-access-modifier-1.png)
![img_24.png](pocu-note/COMP2500/002-necessity-of-oop/002-020-package-access-modifier/images/package-access-modifier-2.png)
![img_25.png](pocu-note/COMP2500/002-necessity-of-oop/002-020-package-access-modifier/images/package-access-modifier-3.png)

```java
// Application.java

happy.happiness +=1.0;     // compile error! Application.java exists in a different package.
```

![img_26.png](pocu-note/COMP2500/002-necessity-of-oop/002-020-package-access-modifier/images/package-access-modifier-4.png)
![img_27.png](pocu-note/COMP2500/002-necessity-of-oop/002-020-package-access-modifier/images/package-access-modifier-5.png)
![img_28.png](pocu-note/COMP2500/002-necessity-of-oop/002-020-package-access-modifier/images/package-access-modifier-6.png)

## 패키지 접근 제어자 용도

![img_29.png](pocu-note/COMP2500/002-necessity-of-oop/002-020-package-access-modifier/images/package-access-modifier-7.png)

내포 클래스로 사용할 클래스를 상위 클래스 파일 내부에 선언하는 것이 아니라, 따로 파일을 빼서 선언하고 접근 제어자를 생략

### Before — 같은 파일 안에 내포 클래스로 선언

```java
// Car.java
package academy.pocu.comp2500samples.w03.vehicle;

public class Car {
    private Engine engine = new Engine();

    public void start() {
        engine.run();
    }

    // 같은 파일 안에 선언된 내포(중첩) 클래스
    static class Engine {
        public void run() {
            System.out.println("engine running");
        }
    }
}
```

### After — 최상위 클래스로 분리하고 접근 제어자 생략

```java
// Car.java
package academy.pocu.comp2500samples.w03.vehicle;

public class Car {
    private Engine engine = new Engine();

    public void start() {
        engine.run();
    }
}
```

```java
// Engine.java  (같은 패키지)
package academy.pocu.comp2500samples.w03.vehicle;

// 접근 제어자 생략 → package-private
// 같은 패키지의 Car 등에서는 자유롭게 사용,
// 외부 패키지에서는 import조차 불가
class Engine {
    public void run() {
        System.out.println("engine running");
    }
}
```

`Engine`은 `Car`에서만 사용하기 때문에 외부 패키지에 노출할 필요가 없음. 

파일을 분리해 코드 가독성을 확보하면서도, 접근 제어자를 생략해 **패키지 외부에는 숨김** 처리.

## 복습 퀴즈

```java
// Bread.java  
package academy.pocu.bakery;  
  
import java.time.OffsetDateTime;  
  
public class Bread {  
    private OffsetDateTime expiryDate = OffsetDateTime.now().plusDays(3);  
  
    boolean isFresh() {  
        return OffsetDateTime.now().isBefore(expiryDate);  
    }  
}  
  
// Bakery.java  
package academy.pocu.bakery;  
  
import java.util.ArrayList;  
import java.time.OffsetDateTime;  
  
public class Bakery {  
    ArrayList<Bread> breads = new ArrayList<>();  
  
    public void addBread(Bread bread) {  
        this.breads.add(bread);  
    }  
  
    // 1  
    void removeExpiredBread() {  
        for (Bread bread : this.breads) {  
            if (!bread.isFresh()) {  
                this.breads.remove(bread);  
                return;  
            }  
        }  
    }  
  
    // 2  
    void recycleBreads() {  
        for (Bread bread : this.breads) {  
            bread.expiryDate = OffsetDateTime.now().plusDays(3);  
        }  
    }  
}
```

```java
// Main.java  
package academy.pocu.shop;  
  
import academy.pocu.bakery.Bakery;  
import academy.pocu.bakery.Bread;  
  
public class Main {  
    public static void main(String[] args) {  
        Bakery bakery = new Bakery();  
        Bread bread = new Bread();  
  
        // 3  
        bakery.addBread(bread);  
  
        // 4  
        if (!bread.isFresh()) {  
            System.out.println("bad bread");  
        }  
    }  
}
```

### 1. 컴파일 시 1번 코드에서 오류가 발생하나요?

주의해야할 것은 `isFresh` 메소드가 패키지 접근 제어자
- `Bread`, `Bakery` 모두 같은 패키지
- `Bakery` 클래스에서 `isFresh` 메소드 호출 가능

컴파일 오류 발생 X

### 2. 컴파일 시 2번 코드에서 오류가 발생하나요?

주의해야할 것은 `expiryDate` 멤버 변수는 private 접근 제어자
- `Bakery` 클래스에서 접근할 수 없음

컴파일 오류 발생 O

### 3. 컴파일 시 3번 코드에서 오류가 발생하나요?

주의해야할 것은 `Main` 클래스는 `Bread`, `Bakery` 와 다른 패키지

`Bakery` 클래스의 `addBread`는 public 접근 제어자
- 다른 패키지의 `Main` 클래스에서 호출할 때 문제 없음

컴파일 오류 발생 X

### 4. 컴파일 시 4번 코드에서 오류가 발생하나요?

주의해야할 것은 `Bread`의 `isFresh` 메소드가 패키지 접근 제어자

`Main` 클래스는 `Bread` 와 다른 패키지라 접근할 수 없음

컴파일 오류 발생 O
