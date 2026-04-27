# Week7

## Trie 개요

![img.png](old_note/COMP3500/week7/images/img.png)

![img_1.png](old_note/COMP3500/week7/images/img_1.png)

![img_2.png](old_note/COMP3500/week7/images/img_2.png)

- 메모리에 캐싱

- 어떤 자료구조를 사용해야할까?
    - 배열 NO
    - 해시 테이블?
        - 해시 충돌 가능성 있음
        - 그래서 문자열 비교는 필요함
            - 문자열의 길이가 K라면 시간복잡도 O(K)
        - 영단어 검색 기능만 있다면 해시 테이블도 적당함

![img_3.png](old_note/COMP3500/week7/images/img_3.png)

- 자동완성 기능을 만드려면 해시 테이블로 충분하지 못함
    - 길이라는 속성도 고려해야함
    - 부분 문자열 뒤에 오는 모든 문자들의 조합을 고려해야함

## 사전의 패턴

![img_4.png](old_note/COMP3500/week7/images/img_4.png)

- 아스키 순서

![img_5.png](old_note/COMP3500/week7/images/img_5.png)

- a로 시작하는 단어 모두 나열 후 b로 시작하는 단어 시작됨

![img_6.png](old_note/COMP3500/week7/images/img_6.png)

![img_7.png](old_note/COMP3500/week7/images/img_7.png)

![img_8.png](old_note/COMP3500/week7/images/img_8.png)

![img_9.png](old_note/COMP3500/week7/images/img_9.png)

![img_10.png](old_note/COMP3500/week7/images/img_10.png)

- 공통으로 가지는 prefix 활용

## 트라이에 단어를 저장하기

![img_11.png](old_note/COMP3500/week7/images/img_11.png)

- Bold 표시는 어떤 단어가 끝남을 의미함
- 자식 노드 입장에서 루트부터 부모를 포함한 경로의 모든 문자를 순서대로 나열하면 접두사

## 이진 트리 vs 트라이

![img_12.png](old_note/COMP3500/week7/images/img_12.png)

- 이진 트리:
    - 노드 자체에 키를 저장
    - 각 노드의 연결(방식)이 키에 따라 결정
        - 구체적으로 키 값의 대소 관계에 따라 결정

![img_13.png](old_note/COMP3500/week7/images/img_13.png)

- 트라이:
    - 노드 위치가 키를 결정
    - 노드에 키가 저장되지는 않음

## Trie

![img_14.png](old_note/COMP3500/week7/images/img_14.png)

- A.K.A:
    - digital tree
    - prefix tree

![img_15.png](old_note/COMP3500/week7/images/img_15.png)

- 공통 접두어:
    - 가장 긴 접두어
    - 여기선 abl

![img_16.png](old_note/COMP3500/week7/images/img_16.png)

- 공통 접두어:
    - ab
        - a, l 자식에서 분기만 확인하면 됨
        - 이 분기 이후로 재귀적으로 찾으면 공통 접두러로 시작하는 단어 모두 구하죠

- 이런 성질을 이용해 자동 완성

![img_17.png](old_note/COMP3500/week7/images/img_17.png)

![img_18.png](old_note/COMP3500/week7/images/img_18.png)

![img_19.png](old_note/COMP3500/week7/images/img_19.png)

![img_20.png](old_note/COMP3500/week7/images/img_20.png)

- 이 방식은 Depth first search 에 가까움

![img_21.png](old_note/COMP3500/week7/images/img_21.png)

- 유한집합에서 특정한 키(문자열)를 찾을 때 사용
- 노드가 키 자체를 저장하는게 아님
- 노드 위치가 키를 결정 + 노드의 연결이 키

![img_22.png](old_note/COMP3500/week7/images/img_22.png)

- 충돌이 없어서 해시 테이블을 대신해서 사용하는 경우가 있음
- 해시 테이블은 value에 문자열의 참조를 저장하기 때문에 한 글자 한 글자를 모두 저장하는 트라이보다 공간복잡도가 낮음
- 주로 사전 데이터 저장
    - 다른 데이터형에는 잘 사용하지 않음

## 공간분할 트리 소개

![img_23.png](old_note/COMP3500/week7/images/img_23.png)

![img_24.png](old_note/COMP3500/week7/images/img_24.png)

- 배열은 1차원 공간(선)
- 트리는 1차원 공간을 분할한 개념

![img_25.png](old_note/COMP3500/week7/images/img_25.png)

- 인간의 눈은 3차원 공간을 2차원으로 투영하게 됨

![img_26.png](old_note/COMP3500/week7/images/img_26.png)

- voxel
    - volume + pixel
- 3차원
- 데이터 양이 많고, GPU에 부담을 줌

### 2D 게임 예

![img_27.png](old_note/COMP3500/week7/images/img_27.png)

![img_28.png](old_note/COMP3500/week7/images/img_28.png)

![img_29.png](old_note/COMP3500/week7/images/img_29.png)

![img_30.png](old_note/COMP3500/week7/images/img_30.png)

- 전부 그래픽 카드가 그리는건 무리
- 현재 화면에 나올 것들만 그리기!

![img_31.png](old_note/COMP3500/week7/images/img_31.png)

![img_32.png](old_note/COMP3500/week7/images/img_32.png)

- 경계를 만들고, 이 경계를 기준으로 화면에 들어오는지 계산하고
- 화면에 들어오면 계산 요청
- 화면에 안 보여도, 경계 상자가 화면에 들어올 수 있음

![img_33.png](old_note/COMP3500/week7/images/img_33.png)

- CPU에서 연산을 더하고, GPU에서 연산을 덜 하는게 목표
- 경계(상자, 구)를 만들면 CPU에서 계산하기 쉬움
- 여전히 모든 물체에 대해서 투영 연산을 수행해야함
    - 모든 물체에 대해서 투영하지 않는 방법이 있다?!

## 쿼드 트리

![img_34.png](old_note/COMP3500/week7/images/img_34.png)

![img_35.png](old_note/COMP3500/week7/images/img_35.png)

![img_36.png](old_note/COMP3500/week7/images/img_36.png)

- 전체 맵
    - 깊이 0
    - 2D 배열과 다를 바 없음

![img_37.png](old_note/COMP3500/week7/images/img_37.png)

- 4분할
    - 깊이 1

![img_38.png](old_note/COMP3500/week7/images/img_38.png)

- 재귀적으로 4분할
    - 깊이 2

![img_39.png](old_note/COMP3500/week7/images/img_39.png)

### 탐색 방법

- 이진 탐색이랑 유사하네

![img_40.png](old_note/COMP3500/week7/images/img_40.png)

![img_41.png](old_note/COMP3500/week7/images/img_41.png)

![img_42.png](old_note/COMP3500/week7/images/img_42.png)

![img_43.png](old_note/COMP3500/week7/images/img_43.png)

![img_44.png](old_note/COMP3500/week7/images/img_44.png)

![img_45.png](old_note/COMP3500/week7/images/img_45.png)

- 애매하게 분할면 사이에 걸쳐있다면?

- 얕은 뎁스에서 포함한 큰 면에서 계산하거나
- 깊은 뎁스에서 포함하는 면 복수 이상으로 구하거나

![img_46.png](old_note/COMP3500/week7/images/img_46.png)

## 옥 트리(Oct)

![img_47.png](old_note/COMP3500/week7/images/img_47.png)

- 마인크래프트

## 기타 공간분할 트리

![img_48.png](old_note/COMP3500/week7/images/img_48.png)

- 필요할 때 찾아보기

## 코드보기: 쿼드 트리

- 일반적인 트리와 저장 방법이 다름
- 미리 노드를 만들고, 값을 대입하는 방식

```java
package academy.pocu.comp3500samples.w07.quadtree;

public final class BoundingRect {
    private final Point topLeft;
    private final Point bottomRight;

    public BoundingRect(final Point topLeft, final int width, final int height) {
        assert (width >= 0);
        assert (height >= 0);

        this.topLeft = topLeft;
        this.bottomRight = new Point(topLeft.getX() + width,
                topLeft.getY() + height);
    }

    public int getWidth() {
        final int x1 = this.topLeft
                .getX();
        final int x2 = this.bottomRight
                .getX();

        return Math.abs(x1 - x2);
    }

    public int getHeight() {
        final int y1 = this.topLeft
                .getY();
        final int y2 = this.bottomRight
                .getY();

        return Math.abs(y1 - y2);
    }

    public Point getTopLeft() {
        return this.topLeft;
    }

    public Point getBottomRight() {
        return this.bottomRight;
    }

    public boolean contains(final Point point) {
        final int pX = point.getX();
        final int pY = point.getY();

        return pX >= this.topLeft.getX()
                && pX <= this.bottomRight.getX()
                && pY >= this.topLeft.getY()
                && pY <= this.bottomRight.getY();
    }

    public boolean contains(final BoundingRect other) {
        final int x1 = this.topLeft.getX();
        final int x2 = this.bottomRight.getX();
        final int y1 = this.topLeft.getY();
        final int y2 = this.bottomRight.getY();

        final int otherX1 = other.topLeft.getX();
        final int otherX2 = other.bottomRight.getX();
        final int otherY1 = other.topLeft.getY();
        final int otherY2 = other.bottomRight.getY();

        return x1 <= otherX1
                && x2 >= otherX2
                && y1 <= otherY1
                && y2 >= otherY2;
    }
}
```

```java
package academy.pocu.comp3500samples.w07.quadtree;

import java.util.ArrayList;

public final class Quadrant {
    private static final int MIN_QUAD_DIMENSION = 2;

    private final BoundingRect boundingRect;

    private Quadrant topLeft;
    private Quadrant topRight;
    private Quadrant bottomLeft;
    private Quadrant bottomRight;

    private ArrayList<GameObject> gameObjects = new ArrayList<>();

    public Quadrant(final BoundingRect boundingRect) {
        this.boundingRect = boundingRect;

        createChildren();
    }

    public boolean insert(final GameObject gameObject) {
        final Point position = gameObject
                .getPosition();

        if (!this.boundingRect
                .contains(position)) {
            return false;
        }

        this.gameObjects.add(gameObject);

        if (this.topLeft != null) {
            this.topLeft.insert(gameObject);
            this.topRight.insert(gameObject);
            this.bottomLeft.insert(gameObject);
            this.bottomRight.insert(gameObject);
        }

        return true;
    }

    public ArrayList<GameObject> getGameObjects(final BoundingRect rect) {
        if (!this.boundingRect.contains(rect)) {
            return new ArrayList<>();
        }

        if (this.topLeft == null) {
            return this.gameObjects;
        }

        if (this.topLeft.boundingRect
                .contains(rect)) {
            return this.topLeft
                    .getGameObjects(rect);
        }

        if (this.topRight.boundingRect
                .contains(rect)) {
            return this.topRight
                    .getGameObjects(rect);
        }

        if (this.bottomRight.boundingRect
                .contains(rect)) {
            return this.bottomRight
                    .getGameObjects(rect);
        }

        if (this.bottomLeft.boundingRect
                .contains(rect)) {
            return this.bottomLeft
                    .getGameObjects(rect);
        }

        return this.gameObjects;
    }

    private void createChildren() {
        final int width = this.boundingRect.getWidth();
        final int height = this.boundingRect.getHeight();

        if (width < 2 * MIN_QUAD_DIMENSION
                || height < 2 * MIN_QUAD_DIMENSION) {
            return;
        }

        int x1 = this.boundingRect
                .getTopLeft()
                .getX();
        int y1 = this.boundingRect
                .getTopLeft()
                .getY();
        int x2 = this.boundingRect
                .getBottomRight()
                .getX();
        int y2 = this.boundingRect
                .getBottomRight()
                .getY();

        int midX = (x1 + x2) / 2;
        int midY = (y1 + y2) / 2;

        Point p1 = new Point(x1, y1);
        Point p2 = new Point(midX, midY);

        BoundingRect rect = new BoundingRect(p1,
                p2.getX() - p1.getX(),
                p2.getY() - p1.getY());

        this.topLeft = new Quadrant(rect);

        p1 = new Point(midX, y1);
        p2 = new Point(x2, midY);
        rect = new BoundingRect(p1,
                p2.getX() - p1.getX(),
                p2.getY() - p1.getY());

        this.topRight = new Quadrant(rect);

        p1 = new Point(x1, midY);
        p2 = new Point(midX, y2);
        rect = new BoundingRect(p1,
                p2.getX() - p1.getX(),
                p2.getY() - p1.getY());

        this.bottomLeft = new Quadrant(rect);

        p1 = new Point(midX, midY);
        p2 = new Point(x2, y2);
        rect = new BoundingRect(p1,
                p2.getX() - p1.getX(),
                p2.getY() - p1.getY());

        this.bottomRight = new Quadrant(rect);
    }
}
```

- MIN_QUAD_DIMENSION
    - 분할 할 때 최대 너비(높이)
    - 가장 작은 단위(종료조건)을 정의

- BoundingRect:
    - 경계 사각형
    - 왼쪽 위, 옹른쪽 아래 모서리를 정의해서 사각형 결정

- private ArrayList<GameObject> gameObjects = new ArrayList<>();
    - 내 하위 깊이(트리 기준 자식)에 포함되는 gameObject도 저장
        - 중복 저장 발생

- insert:
    - gameObject를 경계 사각형에 저장
        - 현재 사분면(경계 사각형)에 포함되는지 확인
        - 추가하고
        - 재귀적으로 나눠서 호출

- createChildren:
    - 생성자 내부에서 호출
    - 미리 재귀적으로 자식 사분면 개체 재귀적으로 생성하고
        - 종료 조건으로 MIN_QUAD_DIMENSION 활용해서 쪼갤 수 있는지 여부 확인
    - 참조 변수(topLeft, topRight, bottomLeft, bottomRight) 초기화

- getGameObjects:
    - 재귀적으로 가장 작은 포함하는 영역의 gameObjects 반환
    - !this.boundingRect.contains(rect):
        - 포함하지 않으면 끝
    - this.topLeft == null:
        - 쿼드 트리의 리프인지 확인
    - 각 자식 노드마다 완전히 포함하면 재귀호출
        - 즉 여러 자식에 걸쳐 포함하지 않는지 확인
    - 여러 자식에 걸쳐 포함되면 자기 자신이 가장 작은 단위
