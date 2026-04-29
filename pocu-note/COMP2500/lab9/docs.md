# Lab9

## 공통 규칙

- 결합도 줄이기
- 기존 매서드
    - 반환형 변경 X
    - 기능 추가 X
    - 매개변수 변경 O

## Cart, Book 클래스 커플링 제거

- 커플링(결합도) 를 줄이라는 표현
- loose coupling
    - Cart 클래스는 Book 클래스에 의존
    - Book 클래스의 변경이 Cart 클래스에 영향을 주면 안 됨

```java
package academy.pocu.comp2500.lab9;

import java.util.UUID;

public final class Book {
    private final UUID sku;
    private final String title;
    private final int price;
    private final int publishedYear;

    public Book(final UUID sku, final String title, final int price, final int publishedYear) {
        this.sku = sku;
        this.title = title;
        this.price = price;
        this.publishedYear = publishedYear;
    }

    public int getPrice() {
        return this.price;
    }

    public int getPublishedYear() {
        return this.publishedYear;
    }

    public String getTitle() {
        return this.title;
    }

    public UUID getSku() {
        return this.sku;
    }
}
```

```java
package academy.pocu.comp2500.lab9;

import java.util.ArrayList;
import java.util.UUID;

public final class Cart {
    private ArrayList<Book> books = new ArrayList<>();

    public Book getBookOrNull(final int index) {
        if (this.books.size() <= index) {
            return null;
        }

        return this.books.get(index);
    }

    public int getBookCount() {
        return this.books.size();
    }

    public void addBooks(final UUID[] skus, final String[] titles, final int[] prices, final int[] publishedYears) {
        if (skus.length != titles.length || skus.length != prices.length || skus.length != publishedYears.length) {
            return;
        }

        for (int i = 0; i < skus.length; ++i) {
            Book book = new Book(skus[i], titles[i], prices[i], publishedYears[i]);
            this.books.add(book);
        }
    }

    public void addBook(final UUID sku, final String title, final int price, final int publishedYear) {
        Book book = new Book(sku, title, price, publishedYear);
        this.books.add(book);
    }

    public boolean remove(final int index) {
        if (this.books.size() <= index) {
            return false;
        }

        this.books.remove(index);

        return true;
    }

    public int getTotalPrice() {
        int sum = 0;

        for (Book book : this.books) {
            sum += book.getPrice();
        }

        return sum;
    }
}
```

- Cart 클래스 내부에서 Book 클래스를 생성하는 코드를 수정하자
    - 의존성 주입

## 가격결정 모델의 도입

### BuyOneGetOneFree

- books (장바구니에 담겨있는 모든 책들) 순회
    - 할인 정책이 적용 안 되면 합
    - 적용되면 map 이용해서 개수 count
- 할인 정책 적용되는 map 에서 각 책의 (count + 1) / 2 로 할인적용 후 개수 구하고, 책의 가격 곱해서 누적

### DecadeMadness

- 동시대 (10년) 기준, 같은 동시대의 책들으 구매하면 20% 할인가 적용
    - 1990 - 1999
        - publishedYear / 10 값이 같으면 됨
        - map<시대, count>
        - count > 1 이면 20% 할인

### SkyIsTheLimit

- 매개변수로 입력받은 books 컬렉션의 사이즈 5 이상 조건 확인
- 가격 x 이상 확인
- 최대값 2개 찾는 로직
    - max1, max2 변수 가격의 최소값 0으로 초기화
    - books 순회
        - 어떤 가격이 max1 보다 크면, max1 값 교체, max1의 값은 max2에 대입
        - 어떤 가격이 max1 보다 작지만 max2 보다 크면 max2 값 교체
    - 정렬해서 찾기보다 이게 효율적임

### Cart 클래스 getTotalPrice() 오버로딩 + Cart 클래스에 있는 결합도를 줄이기

- 가겨정책의 인터페이스 만들고 추상화하면 됨
    - 상속과 결합도
    - 부모 클래스에 의존할 수록 결합도 줄여짐

- Cart 클래스에 getTotalPrice 함수 내부에서 가격정책의 getTotalPrice 호출하게
