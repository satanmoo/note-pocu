---
tags:
  - COMP2500
  - week2
aliases:
  - "코드보기: Vehicle 클래스"
---
# 코드보기: Vehicle 클래스

```java
package academy.pocu.comp2500samples.w02.vehicle;
```

코드 작성 시 가장 먼저 할 일은 제일 위에 패키지 이름 정의
- 폴더 구조도 일치
- IDE 쓰면 편함

```java
public Passenger(String name) {
	this.name = name;
}
```

개발자가 생성자를 작성하면 컴파일러는 더 이상 기본 생성자를 생성하지 않음

```java
import java.util.ArrayList;
```

ArrayList (외부 패키지)를 사용하기 위해 `import` 필요

```java
public ArrayList<Passenger> passengers;
```

`<>` 은 제너릭


```java
public Vehicle(VehicleType type, ArrayList<Passenger> passengers) {
	this(type, passengers, 0.0);
}
```

`this()`로 다른 생성자를 호출할 수 있음
- 생성자 오버로딩 전제

```java
public void removePassenger(String name) {
	for (Passenger p : this.passengers) {
		if (p.name.equals(name)) {
			this.passengers.remove(p);
			break;
		}
	}
}
```

String 비교할 때 내용을 올바르게 비교하기 위해 `equals` 함수 이용

```java
switch (this.type) {
	case MOTORCYCLE:
		gasMileage = 0.05;
		break;
	case SEDAN:
		gasMileage = 0.07;
		break;
	case MINIVAN:
		gasMileage = 0.1;
		break;
	default:
		assert (false) : "Unrecognized vehicle type: " + this.type;
		break;
}
```

enum 사용할 때 `type.{enum entry}` 방식으로 사용하는 것이 아니라 그냥 enum 요소 하나 바로 사용 가능
- 위에서 `VehicleType.SEDAN` 대신 `SEDAN` 

## 복습 퀴즈

```java
public class Product {  
    public int id;  
    public String name;  
    public double price;  
  
    public Product(int id) {  
        this.id = id;  
    }  
  
    public Product(int id, String name) {  
        this.id = id;  
        this.name = name;  
    }  
  
    public Product(int id, String name, double price) {  
        this.id = id;  
        this.price = price;  
    }  
}
```

### 1. new Product(1000);으로 생성한 개체 속에 있는 id, name, price 값은 무엇인가요?

```java
public Product(int id) {  
        this.id = id;  
    }  
```

id, name, price 는 0에 준하는 값으로 초기화 되고 나서 위 생성자 호출해 id 값만 매개변수로 넘어온 값으로 덮어 씀

정답: 1000, null, 0.0

### 2. new Product(1000, "soap");으로 생성한 개체 속에 있는 id, name, price 값은 무엇인가요?

1번과 풀이 동일함

정답: 1000, "soap", 0.0

### 3. new Product(1000, "soap", 1000.0);으로 생성한 개체 속에 있는 id, name, price 값은 무엇인가요?

위와 풀이 동일

두번째 매개변수로 넘어온 `String name` 은 생성자 내부에서 사용되지 않음

정답: 1000, null, 1000.0



