문제 상황은 다음과 같다.
- `Book` 클래스와의 결합도(coupling)가 꽤 높아서 `Book` 클래스가 바뀔 때 `Cart` 클래스도 손 봐야 하는 경우가 꽤 있을 듯합니다.

주어진 코드에서 Book 클래스가 바뀔 때 Cart 클래스의 코드가 수정되는 곳을 찾아보자.
- addBooks
	- Book의 생성을 내부에서 담당
- addBooks
	- 마찬가지

참고 (출처: 011 노트)
- [[pocu-note/COMP2500/011-interface-vs-implementation/011-003-judging-coupling/index|결합도 판정]] — 내부에서 `new`로 직접 생성하면 tight coupling, 외부에서 개체를 생성해 매개변수로 전달하면 loose coupling
- [[pocu-note/COMP2500/011-interface-vs-implementation/011-004-dependency-injection/index|의존성 주입(DI)]] — 이 기법의 이름 (생성자 주입 / setter 주입)

[[pocu-note/COMP2500/902-lab/902-008-lab9/spec#^rule-3-parameter-change|spec의 2. 포마존 장바구니 구현하기 — 전반적인 규칙 3번 항목]] 참고
 - 기존의 매개변수 변경은 허용된다. 따라서 의존성 주입으로 변경

[[pocu-note/COMP2500/902-lab/902-008-lab9/spec#2.2 가격결정 모델의 도입|spec의 2.2]] 참고
- 가격결정 모델을 표현하는 새로운 클래스가 필요함

일단 [[pocu-note/COMP2500/902-lab/902-008-lab9/spec#2.2.1 BuyOneGetOneFree 가격결정 모델을 구현한다|2.2.1 요구사항]]에 따라 BuyOneGetOneFree 가격 모델을 구현하면 다음과 같음

추가적으로 [[pocu-note/COMP2500/902-lab/902-008-lab9/spec#A.1 1+1 기획(Buy One Get One Free)|A.1 1+1 기획(Buy One Get One Free)]]을 참고한다.

```java
package academy.pocu.comp2500.lab9;  
  
import java.util.*;  
  
public final class BuyOneGetOneFree implements IPriceable {  
    private final HashSet<UUID> promotionTargets;  
  
    public BuyOneGetOneFree(final HashSet<UUID> promotionTargets) {  
        this.promotionTargets = promotionTargets;  
    }  
  
    public int getTotalPrice(final ArrayList<Book> books) {  
        int sum = 0;  
        final HashMap<UUID, Integer> countMap = new HashMap<>();  
        final HashMap<UUID, Integer> priceMap = new HashMap<>();  
  
        for (final Book book : books) {  
            countMap.put(book.getSku(), countMap.getOrDefault(book.getSku(), 0) + 1);  
            priceMap.putIfAbsent(book.getSku(), book.getPrice());  
        }  
  
        for (final Map.Entry<UUID, Integer> entry : countMap.entrySet()) {  
            final int count;  
            if (this.promotionTargets.contains(entry.getKey())) {  
                count = (entry.getValue() + 1) / 2;  
            } else {  
                count = entry.getValue();  
            }  
            sum += count * priceMap.get(entry.getKey());  
        }  
  
        return sum;  
    }  
}
```

[[pocu-note/COMP2500/902-lab/902-008-lab9/spec#2.2.2 Cart 클래스에 있는 getTotalPrice() 메서드를 오버로딩한다.|2.2.2 요구사항]]에 따라 Cart 클래스에 getTotalPrice 메서드를 오버로딩

```java
public int getTotalPrice(final BuyOneGetOneFree buyOneGetOneFree) {  
    return buyOneGetOneFree.getTotalPrice(this.books);  
}
```

DecadeMadness 가격 모델을 [[pocu-note/COMP2500/902-lab/902-008-lab9/spec#2.3.1 DecadeMadness 가격결정 모델을 구현한다|2.3.1 요구사항]] 참고해 구현

추가적으로 [[pocu-note/COMP2500/902-lab/902-008-lab9/spec#A.2 동시대 서적 기획(Decade Madness)|부록 A.2 동시대 서적 기획(Decade Madness)]]를 참고한다.

우선 동시대인 책을 판단하는 함수를 구현한다.

```java
// Book.java
public boolean isSameDecade(final Book otherBook) {  
    return this.publishedYear / 10 == otherBook.getPublishedYear() / 10;
}
```

근데 이 함수보다는, 동시대 자체를 구하는 함수가 더 유용하겠는데? 교체하자.

```java
// Book.java
public int getPublishDecade() {  
    return this.publishedYear / 10;  
}
```

```java
package academy.pocu.comp2500.lab9;  
  
import java.util.ArrayList;  
import java.util.HashMap;  
import java.util.Map;  
  
public final class DecadeMadness {  
    public int getTotalPrice(final ArrayList<Book> books) {  
        double sum = 0;  
        final HashMap<Integer, ArrayList<Book>> booksByDecade = new HashMap<>();  
  
        for (final Book book : books) {  
            final int publishDecade = book.getPublishDecade();  
            if (!booksByDecade.containsKey(publishDecade)) {  
                booksByDecade.put(publishDecade, new ArrayList<>());  
            }  
  
            booksByDecade.get(publishDecade).add(book);  
        }  
  
        for (final Map.Entry<Integer, ArrayList<Book>> entry : booksByDecade.entrySet()) {  
            final ArrayList<Book> sameDecadeBooks = entry.getValue();  
            if (sameDecadeBooks.size() > 1) {  
                sum += sameDecadeBooks.stream().mapToDouble(Book::getPrice).sum() * 0.8;  
            } else {  
                sum += sameDecadeBooks.stream().mapToDouble(Book::getPrice).sum();  
            }  
        }  
  
        return (int) sum;  
    }  
}
```

이 가격 모델을 사용할 수 있도록 Cart 클래스를 변경하려면? 56 line에서 구현한 것 처럼 매개변수로 BuyOneGetOneFree 클래스를 받아서는 안 된다.

참고 (출처: 011/010 노트) — 매개변수를 일반화된 타입(부모/인터페이스)으로 추상화
- [[pocu-note/COMP2500/011-interface-vs-implementation/011-005-coupling-in-inheritance/index|상속 관계에서의 결합도]] — 구체 클래스 대신 부모 자료형을 매개변수로 받아 다형성으로 결합도를 줄임, 인터페이스도 동일

따라서 BuyOneGetOneFree, DecadeMadness 의 부모 클래스 또는 인터페이스를 구현한다.
- 동작이 하나밖에 없으니 함수 포인터를 던지는 인터페이스가 더 적절하겠죠?
	- [[pocu-note/COMP2500/010-interface/010-003-interface-is-pure-abstract-class/index|인터페이스는 순수 추상 클래스]] 참고 — 상태를 제거하고 메서드 하나만 선언해 함수 포인터 전달을 흉내

```java
// IPriceable.java
package academy.pocu.comp2500.lab9;  
  
import java.util.ArrayList;  
  
public interface IPriceable {  
    int getTotalPrice(ArrayList<Book> books);  
}
```

가격을 계산하는 동작만 전달하는 IPriceable 인터페이스를 선언하고 가격 모델에서 이를 상속받는다.

이제 Cart 의 getTotalPrice 함수의 매개변수도 수정하자.

```java
// Cart.java
public int getTotalPrice(final IPriceable priceable) {  
    return priceable.getTotalPrice(this.books);  
}
```

SkyIsTheLimit 가격 모델을 [[pocu-note/COMP2500/902-lab/902-008-lab9/spec#2.3.2 SkyIsTheLimit 가격결정 모델을 구현한다|2.3.2 요구사항]]에 따라 구현한다.
- [[pocu-note/COMP2500/902-lab/902-008-lab9/spec#A.3 한계 따윈 없다 기획(Sky is the Limit)|부록 A.3 한계 따윈 없다 기획(Sky is the Limit)]]도 참고

```java
// SkyIsTheLimit.java
package academy.pocu.comp2500.lab9;  
  
import java.util.ArrayList;  
import java.util.Comparator;  
  
public final class SkyIsTheLimit implements IPriceable {  
    private int minimumPrice;  
  
    public SkyIsTheLimit(final int minimumPrice) {  
        this.minimumPrice = minimumPrice;  
    }  
  
    @Override  
    public int getTotalPrice(final ArrayList<Book> books) {  
        final int sum = books.stream().mapToInt(Book::getPrice).sum();  
        if (books.size() >= 5 && sum >= minimumPrice) {  
            final ArrayList<Book> sortedBooks = new ArrayList<>(books);  
            sortedBooks.sort(Comparator.comparingInt(Book::getPrice));  
            final Book firstBook = sortedBooks.get(sortedBooks.size() - 1);  
            final Book secondBook = sortedBooks.get(sortedBooks.size() - 2);  
  
            return (int) ((double) sum - firstBook.getPrice() * 0.5 - secondBook.getPrice() * 0.5);  
        }  
  
        return sum;  
    }  
}
```

SimplePricing 가격 모델을 [[pocu-note/COMP2500/902-lab/902-008-lab9/spec#2.3.3 SimplePricing 가격결정 모델을 구현한다|2.3.3 요구사항]]을 참고해 구현한다.

```java
// SimplePricing.java
package academy.pocu.comp2500.lab9;  
  
import java.util.ArrayList;  
  
public final class SimplePricing implements IPriceable {  
    @Override  
    public int getTotalPrice(final ArrayList<Book> books) {  
        return books.stream().mapToInt(Book::getPrice).sum();  
    }  
}
```

[[pocu-note/COMP2500/902-lab/902-008-lab9/spec#2.3.4 Cart 클래스에 있는 결합도를 줄이세요|2.3.4 요구사항]]을 참고해 Cart 클래스에 남아 있는 결합도를 줄여보자.
- 가격 계산 로직을 모두 Cart에서 제거해야함

Cart 클래스에서 매개변수로 아무것도 받지 않는 getTotalPrice를 제거하자
