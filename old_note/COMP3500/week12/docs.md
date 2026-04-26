# Week12

## 너비 우선 탐색

![img.png](old_note/COMP3500/week12/images/img.png)

- DFS 처럼 방문한 노드를 기억해야 무한 루프를 막을 수 있음

![img_1.png](old_note/COMP3500/week12/images/img_1.png)

- discovered 변수로 발견한 노드를 관리
    - 발견하고 큐에 넣는 개념
- 큐에서 뽑았을 때는 이웃에 대한 처리
    - 처리 == 발견 + 큐에 다시 넣기

### BFS의 시간 복잡도

![img_2.png](old_note/COMP3500/week12/images/img_2.png)

- O(N + E)
    - DFS와 동일함

## 최단 경로 찾기

- BFS는 최단 경로 찾기에 활용됨
- 그래프 문제 중에 가장 널리 활용됨

### 최단 경로

![img_3.png](old_note/COMP3500/week12/images/img_3.png)

- from 집 to 학교에는 다양한 경로가 있음

![img_4.png](old_note/COMP3500/week12/images/img_4.png)

- 경로의 개수는 무한대
    - 그래프에 순환이 있기 때문

- 추가적으로 지금 Edge(거리)의 길이는 모두 동일하다고 가정

### 최단 경로를 찾는 가장 간단한 방법

![img_5.png](old_note/COMP3500/week12/images/img_5.png)

- 주먹구구식 방법
- 시간 복잡도가 크다
- 하지만 BFS를 사용하면 최단 경로를 찾을 수 있음!

### BFS가 최단 경로를 찾는 이유

![img_6.png](images/img_6.png)

- 직관적으로 이해하는게 좋음
    - 증명 보다는..

![img_7.png](images/img_7.png)

### BFS로 최단 경로 찾기

![img_8.png](images/img_8.png)

- 깊이 == 최단 경로의 거리
- 깊이를 기억하는 코드가 필요함
    - 해시 맵
    - 인접 행렬과 유사하게 from-to 거리 저장
    - 노드 내부에 저장
        - OOP 관점에서는 좋지 못함

![img_9.png](images/img_9.png)

- 위 코드는 HashMap에 "Node-거리"를 저장
- 마지막에 못 찾는 경우 -1을 반환
    - 깊이 개념이라서 0부터 시작하기 때문
    - 음수 거리는 없죠?

![img_10.png](images/img_10.png)

- 직관적으로 거리 == 깊이를 이해

- 학교 노드 입장에서 "최단 경로"를 알아야함
    - 지금은 "최단 거리"만 알고, 어떤 노드들을 방문했는지 모르는 상태

![img_11.png](images/img_11.png)

- 경로 추적을 위해 추가 정보 필요
    - 트리는 미리 규칙이 있어서 이런 정보가 필요없었는데 ㅠㅠ
    - 그래프는 굉장히 일반화된 개념이라는 것을 다시 느낄 수 있음
- 누가 나를 큐에 넣었는지를 기록
    - 해시 맵
    - 노드 내부
        - OOP 관점에서는 좋지 못함

## 각 변의 거리가 다른 최단 경로 찾기(가중 그래프에서 최단 경로)

![img_12.png](images/img_12.png)

- 단순히 BFS로 불가능함!

## 다익스트라 알고리듬

![img_13.png](images/img_13.png)

- 성능도 괜찮음
- 변의 가중치가 음수인 경우에는 제대로 동작하지 않음
    - 실세계에서는 이런 경우가 없어서 충분히 많이 활용 가능

![img_14.png](images/img_14.png)

- 그래프 문제는 보통 이미 있는 문제에 알고리듬을 적용하는게 어려움
    - 그래프 디자인이 어렵!

- 다익스트라는 모든 노드를 한 번씩 방문하기 때문에 시간 복잡도가 크지 않음

- 아직 방문 안 한 노드 중에서 가장 가까운 노드 n 선택
- n의 각 이웃 노드 m으로 여행하는 거리를 계산
- m 노드가 가지고 있는 기존 거리와 위 결과를 비교해서 가까우면 업데이트

![img_15.png](images/img_15.png)

- 직관적으로 모든 노드를 거치면서 최솟값으로 업데이트 하면서 최솟값을 취했음

![img_16.png](images/img_16.png)

- 이거 혹시 "그리디"?

### 다익스트라는 동적 계획법

![img_17.png](images/img_17.png)

![img_18.png](images/img_18.png)

![img_19.png](images/img_19.png)

- Tabulation

### 다익스트라 구현

![img_20.png](images/img_20.png)

- 종료조건:
    - 모든 노드 방문
    - 목적지 도착

![img_21.png](images/img_21.png)

- 구현에 따라 시간 복잡도가 달라짐

### 인접 행렬을 이용한 다익스트라

![img_22.png](images/img_22.png)

- 우선 인접 행렬을 만들기

![img_23.png](images/img_23.png)

- 모든 거리를 무한으로 초기화
    - INT.MAX

![img_24.png](images/img_24.png)

- 우선 시작노드에 대한 처리
    - 노드의 거리는 0으로 초기화
    - 아직 미방문

![img_25.png](images/img_25.png)

- 미방문 목록(큐)에서 가장 거리값이 작은 노드는 시작 노드
- 시작 노드를 뽑아서 이웃 노드에 대한 처리를 하자

![img_26.png](images/img_26.png)

![img_27.png](images/img_27.png)

- 업데이트 해야겠지?

![img_28.png](images/img_28.png)

![img_29.png](images/img_29.png)

![img_30.png](images/img_30.png)

- 이제 시작노드 방문 완료

![img_31.png](images/img_31.png)

- 방문한 시작 노드는 확인할 필요 없음
- 미방문한 3,5 노드에 대해 처리

![img_32.png](images/img_32.png)

![img_33.png](images/img_33.png)

![img_34.png](images/img_34.png)

- 노드2, 3의 거리값이 동일해서 뭘 고르든 상관 없음
- 이 예시에는 노드 2를 먼저 고름

![img_35.png](images/img_35.png)

- 업데이트 X

![img_36.png](images/img_36.png)

- 노드 1,2는 이미 방문해서 생략하고

![img_37.png](images/img_37.png)

- 업데이트 처리

![img_38.png](images/img_38.png)

- 노드4에서 방문할 수 있는 노드는 노드5밖에 없음
    - 노드3은 이미 방문

![img_39.png](images/img_39.png)

- 업데이트

![img_40.png](images/img_40.png)

- 마지막 남은 노드에서 방문할 수 있는 노드 없음
    - 이미 다 방문

![img_41.png](images/img_41.png)

- 누가 나를 업데이트 했는지(큐에 넣었는지) 추적하면 최단 경로 복원 가능

### 인접 행렬을 사용한 다익스트라의 문제점

![img_42.png](images/img_42.png)

- 노드에 비해 변의 수가 엄청 적을 때
- 공간복잡도가 일단 너무 큼
    - O(N^2)
    - 시간 복잡도도 마찬가지

![img_43.png](images/img_43.png)

- 인접 리스트로 만들면 O(N + E)로 공간 복잡도를 줄일 수 있음

### 다익스트라 알고리듬의 시간 복잡도

- 아래 설명은 인접 리스트를 사용한다고 가정

![img_44.png](images/img_44.png)

- 모든 노드에 대해 수행

![img_45.png](images/img_45.png)

- 미방문 노드(최대 N개) 중 최소 거리 노드를 선택해야함
    - 순회해서 찾는다고 가정

![img_46.png](images/img_46.png)

- 모든 변은 한 번 이상은 지나감
    - O(k*E) 추가

- 위 연산 중 빠르게 할 수 있는 것은?

![img_47.png](images/img_47.png)

![img_48.png](images/img_48.png)

- 우선 순위큐를 사용하면!
    - min heap

- 하지만 거리 값 업데이트가 O(1)이 되지 못함
    - 업데이트하고 heap을 heapify하는 비용이 추가적으로 발생

![img_49.png](images/img_49.png)

- 우선 순위큐 대신에 BST 사용해도 똑같음

![img_50.png](images/img_50.png)

- 참고 "피보나치 힙"

### 다익스트라와 음의 가중치

![img_51.png](images/img_51.png)

- 한 번 방문한 노드는 다시 방문 안 하기 때문에 양의 가중치만 가정했을 때 다음 거리는 언제나 이미 방문한 거리 이상

![img_52.png](images/img_52.png)

- s 노드에서 시작하고, 그 다음 노드로 거리값이 1로 가장 낮은 아래의 노드에서 진행
- d 노드를 4로 갱신하고 종료

![img_53.png](images/img_53.png)

- 다음으로 거리값이 3으로 가장 낮은 위의 노드에서 진행
- 기존의 아래 노드의 거리값이 음의 가중치 때문에 0이 됨
- 이렇게 되면 그 다음으로 뽑을 노드가 0으로 최소인 아래 노드를 뽑아서 진행해야하는데, 한 번 방문한 노드를 다시 방문할 수 없는 규칙 때문에 방문할 수 없음

![img_54.png](images/img_54.png)

- 음수 가중치를 처리하려면 "벨만-포드 알고리듬"

### 다익스트라 복습 퀴즈

- 인접 행렬을 사용한 다익스트라 알고리듬의 시간 복잡도는 무엇인가요?

- O(N^2)

### 코드보기: 우선순위 큐를 사용한 다익스트라 알고리듬

- 모든 노드의 최단 경로 값을 구함
    - 목적지를 찾는다고 종료하는게 아니라, 모두 구할 때 까지 계속 진행

```java
package academy.pocu.comp3500samples.w12.dijkstra;

import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public class Dijkstra {
    private Dijkstra() {
    }

    public static HashMap<String, Integer> run(final HashMap<String, Node> nodes, final String from, final HashMap<String, String> prevs) {
        // 최단 거리 저장하는 해시맵
        HashMap<String, Integer> minDists = new HashMap<>();

        // 모든 노드의 거리값 초기화
        final int INF = Integer.MAX_VALUE;
        for (var entry : nodes.entrySet()) {
            String name = entry.getKey();

            minDists.put(name, INF);
        }
        // 시작 노드 초기화
        minDists.put(from, 0);

        prevs.put(from, null);

        PriorityQueue<Candidate> open = new PriorityQueue<>();

        Node s = nodes.get(from);
        Candidate candidate = new Candidate(s, 0);

        open.add(candidate);

        while (!open.isEmpty()) {
            // 후보 중 거리값이 가장 낮은 노드
            candidate = open.poll();

            Node n = candidate.getNode();
            String nodeName = n.getName();

            int minDist = minDists.get(nodeName);
            int dist = candidate.getDistance();
            // 후보의 거리값이 이미 알려진 노드의 최소 거리값보다 크면 볼 필요없음
            // 그냥 버림
            if (minDist < dist) {
                continue;
            }
            // 이웃에 대해서
            Map<Node, Integer> roads = n
                    .getRoads();

            for (var e : roads.entrySet()) {
                Node next = e.getKey();
                // 새로운 거리 계산
                int weight = e.getValue();
                int newDist = minDist + weight;
                // 글로벌로 노드의 최소 거리값 저장하는 맵 갱신 준비
                String nextName = next.getName();
                int nextMinDist = minDists
                        .get(nextName);
                // 갱신할 이유 없음
                if (newDist >= nextMinDist) {
                    continue;
                }
                // 갱신
                minDists.put(nextName, newDist);
                // 최단 경로 기록
                // 이게 도착점에 포함되면 거꾸로 복원 가능
                prevs.put(nextName, nodeName);

                Candidate newCandidate = new Candidate(next, newDist);

                open.add(newCandidate);
            }
        }

        return minDists;
    }
}
```

```java
package academy.pocu.comp3500samples.w12.dijkstra;

import java.util.HashMap;
import java.util.Map;

public final class Node {
    private final String name;
    private final HashMap<Node, Integer> roads = new HashMap<>();

    public Node(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public Map<Node, Integer> getRoads() {
        return this.roads;
    }

    public void addRoad(final Node to,
                        final int dist) {
        this.roads.put(to, dist);
    }

    public int getDistance(final Node to) {
        return this.roads.get(to);
    }
}
```

```java
package academy.pocu.comp3500samples.w12.dijkstra;

public final class Candidate implements Comparable<Candidate> {
    private final Node node;
    private final int distance;

    public Candidate(final Node node, final int distance) {
        this.node = node;
        this.distance = distance;
    }

    public Node getNode() {
        return this.node;
    }

    public int getDistance() {
        return this.distance;
    }

    @Override
    public int compareTo(Candidate o) {
        return this.distance - o.distance;
    }
}
```

- 우선 순위 큐에 사용하기 위해서 compareTo 구현

## A*

- 인공지능, 게임쪽에 정말 많이 사용된다.

![img_55.png](images/img_55.png)

![img_56.png](images/img_56.png)

- 다익스트라 알고리듬이 얼마나 똑똑한지 확인해보자.
    - 검정색 칸은 벽을 의미함
    - 칸 사이의 거리(가중치)는 모두 1로 동일함
        - 따라서 BFS랑 동일함

![img_57.png](images/img_57.png)

- 굳이 이렇게 찾아야할까?

![img_58.png](images/img_58.png)

- 비효율적인디?

![img_59.png](old_note/COMP3500/week12/images/img_59.png)

- A* 알고리듬의 실제 실행 속도는 훨씬 빠름!
    - Big-O 표기법 개념으로 시간 복잡도를 측정했을 때는 별 차이가 없지만
    - 빅오 표기법이랑 실제랑 다른거 확인
- 하지만 100% 최적의 경로를 보장하지는 못함

### A* 알고리듬 정리

![img_60.png](old_note/COMP3500/week12/images/img_60.png)

- 기본은 다익스트라
    - 쓸데없는 평가를 피하기

- "목적지까지의 거리" 기준을 추가

![img_61.png](images/img_61.png)

- 진행 중 "목적지까지의 거리"를 확실하게 알 수 없음
- 휴리스틱한 함수를 사용
    - 휴리스틱에 따라 성능이 달라짐

### A*의 노드 선택 기준

![img_62.png](images/img_62.png)

- f(n) 값은 추정치

![img_63.png](images/img_63.png)

- 빨간 화살표 크기가 h(n)

- h(n) 함수는 출발점(테두리만 빨간 칸)에서 도착지까지 거리를 계산

![img_64.png](images/img_64.png)

- 거리를 계산할 때
    - 유클리드 거리
    - 맨해튼 거리
        - 상황에 따라 선택
        - 휴리스틱의 한계

- h(n)에 따라 목적지까지 경로의 굵기(?)가 달라짐
    - 더 넓게 가냐 아니냐

![img_65.png](images/img_65.png)

- 'OPEN' 이라는 이름의 방문한 최단 경로 후보 노드들이 있음
- 최소 f(n)을 통해 후보 선택
- 같은 노드를 두 번 이상 방문할 수 있음!

### A* 알고리듬 시뮬레이션

![img_66.png](images/img_66.png)

- f(n)은 g(n) + h(n)의 값으로 결정하기 때문에 g(n) 값을 먼저 최대값으로 초기화하고 대입하는 식으로 구현 가능
- 시작 노드 초기화
    - g(s) = 0
        - 지금까지 거리니까
    - f(s) = h(s) 성립
- 시작 노드 s를 'OPEN'에 추가하고 반복
- 'OPEN'에서 f(n)이 가장 작은 노드를 찾아 제거
- 뽑은 노드 n의 각 이웃 m에 대해서 g(m) 업데이트하고, m을 OPEN에 추가

- 다익스트라와 거의 똑같은데 'OPEN'에서 f(n)이 가장 작은 노드를 찾아 제거할 때 h(n)이 어떻게 영향을 미치는가에 주목하자

![img_67.png](images/img_67.png)

- h(n)은 직선 거리로 일단 가정
    - 휴리스틱하게..

![img_68.png](images/img_68.png)

- g는 처음에 무한으로 초기화
- h는 각 노드마다 미리 계산
- f == g + h

![img_69.png](images/img_69.png)

- 시작 노드 초기화

![img_70.png](images/img_70.png)

- 'OPEN'에 넣었다는 표시

![img_71.png](images/img_71.png)

- f(n)이 가장 작은 노드 뽑기
    - 어차피 한 개라 시작 노드로 확정

![img_72.png](images/img_72.png)

- 각 이웃 m에 대해 g(m) 업데이트
    - f(m)도 업데이트 됨

![img_73.png](images/img_73.png)

- 두 이웃 m이 업데이트되고 'OPEN'에 들어가게 됨

![img_74.png](images/img_74.png)

- f가 작은 경찰서 노드를 골라 이웃에 대해 g 업데이트하고 'OPEN'에 넣는 과정 반복

![img_75.png](images/img_75.png)

- 다익스트라와 다르게 이미 방문했던 집 노드쪽 간선을 확인하게 됨

![img_76.png](images/img_76.png)

- 집 노드는 g를 업데이트할 필요가 없음
    - 0 < 2 + 2

![img_77.png](images/img_77.png)

- 나머지 이웃은 g를 업데이트하고 'OPEN'에 추가

![img_78.png](images/img_78.png)

- f가 최소인 학교를 뽑았는데, 목적지에 도착!

![img_79.png](images/img_79.png)

- 다익스트라 처럼 최단 경로를 100% 보장하지 않는 알고리듬임을 알 수 있음

### h(n) 함수에 대한 이해

![img_80.png](images/img_80.png)

- h'(n)은 실제 비용이라고 가정해봅시다.

![img_81.png](images/img_81.png)

- h(n)이 언제나 0인 경우를 가정

- 다익스트라 알고리듬과 똑같이 동작하게 됨
    - 다익스트라는 A*의 특수한 케이스임을 확인할 수 있다.

![img_82.png](images/img_82.png)

- 모든 노드에 대해 h(n) <= h'(n) 을 만족하면 A*의 정확성이 보장됨
    - 직관적으로 당연히..
    - 증명도 귀류법 비슷하게 하면 최적이지 않은 경로가 나오는 것 확인할 수 있음

- h(n) <= h'(n) 을 만족하는 h(n)을 `admissible` 라고 표현함

![img_83.png](images/img_83.png)

- h(n) << h'(n)
    - 추정 거리가 실제 거리보다 훨씬 작은 케이스

- 더 많은 경로를 탐색해 탐색 범위가 넓어지고 오히려 속도가 느려짐

- h(n)에 따라 f(n)이 달라지고 'OPEN'에서 최소값을 가진 노드를 뽑는 변별력이 생김
    - h(n)이 너무 작아지면 변별력이 사라져, 너무 많은 노드를 조사하게 될 수도 있음
    - g(n)의 영향력이 커지고, 다익스트라와 비슷해짐

![img_84.png](images/img_84.png)

- 이건 이상적인 경우
    - 현재 위치에서 목적지를 가는 거리를 정확하게 알고 있는 경우 ㅋㅋ

### A*의 중복 방문

![img_85.png](images/img_85.png)

- 다익스트라에서 새로 방문하는 노드의 실제 거리가 최소
    - g(n)만 기준으로 사용하기 때문
- 즉 경로에서 한 단계씩 다음 노드로 진행할 때 노드의 거리값은 점점 커질 수 밖에 없음
    - 양의 가중치를 가정
    - 최소 추가 거리를 더함

- A*는 h(n)으로 추정하는 부분이 있어서 새로 방문하는 노드의 거리가 실제 거리가 아님
    - 위의 시뮬레이션 예시에서:
        - 경찰서 -> 학교 경로는 최적이 아님
            - h(n) 때문에 은행으로 가는 경로가 멀다고 판단 미스
        - 경찰서 -> 은행 -> 도서관 -> 학교 경로가 최적

    - 이 때문에 재방문을 허용
- h(n) 이 특정 조건을 만족하면 노드를 한 번씩만 방문
    - 재방문 X
    - 이 조건을 만족하면 일관적/단조로운 휴리스틱

![img_86.png](images/img_86.png)

- 특정 조건 참고만...

### A*의 시간 복잡도

![img_87.png](images/img_87.png)

- 휴리스틱이라서 시간 복잡도가 큰 의미가 없음
    - 논해봤자 의미가 없음
- AI 분야에서는 b(branch factor), d(depth)를 고려함

### A* 복습 퀴즈 1

- A* 알고리듬이 언제나 최단 거리를 찾을 수 있는 조건은 무엇인가요?
    - h(n) >= h'(n)

- 모든 노드에 대해서 h(n) <= h'(n)을 만족하면 언제나 최단 거리를 찾을 수 있음
    - h(n) == h'(n)을 포함하는 조건

### A* 복습 퀴즈 2

- A* 알고리듬이 매우 느려지는 조건은 무엇인가요?

- h'(n) >> h(n)

## 플로이드 워셜 알고리듬: 모든 쌍의 최단 경로 찾기

- 임의의 두 노드(쌍)에 대해 최단 경로를 찾아보자
    - 시작점이 정해진 것이 아님

![img_88.png](images/img_88.png)

- SSSP를 모든 노드에 대해서 실행하면, APSP의 답을 구할 수 있긴 함

![img_89.png](images/img_89.png)

- 다익스트라에서는 거리 배열을 사용했지만
    - 코드에서 구현할 때는 node:거리값 맵으로 작성하긴 함

- 플로이드 워셜은 2D 인접 행렬
    - 직관적으로 from-to 쌍에 대한 거리를 기록하니까

### 플로이드 워셜 알고리듬의 기본 원리

- 다익스트라와 마찬가지로 DP

![img_90.png](images/img_90.png)

- A에서 E로 가는 경로가 최단 경로임을 알고 있는 상태

![img_91.png](images/img_91.png)

- 그렇다면 중간에 거치는 C에 대해서 다음이 성립함:

![img_92.png](old_note/COMP3500/week12/images/img_92.png)

- from A to C도 최단 경로
- from C to A도 최단 경로

- 동적 계획법에서 자주 다루는 "하위 문제" 컨셉

### 플로이드 워셜 알고리듬 시뮬레이션

![img_93.png](old_note/COMP3500/week12/images/img_93.png)

- 중간에 거치는 노드는 안 지나가도 됨
    - 선택

- 1 ~ k 노드에서 번호는 처음에 번호를 매길 때 결정

![img_94.png](old_note/COMP3500/week12/images/img_94.png)

![img_95.png](old_note/COMP3500/week12/images/img_95.png)

![img_96.png](old_note/COMP3500/week12/images/img_96.png)

- sp(i, j, k):
    - k == 0
        - 매기지 않은 번호값이라 아무 노드로 거치지 않음을 의미함

![img_97.png](old_note/COMP3500/week12/images/img_97.png)

- k == 1
    - i == k를 만족:
        - 자기 자신을 거치기 때문에 아무 노드도 거치지 않음을 의미

![img_98.png](old_note/COMP3500/week12/images/img_98.png)

- k == 2
    - 2번 노드를 거침
    - 파란색 경로가 추가됨
- sp(1,3,2)에서는 최단 경로를 고르기 때문에 파란 경로를 고르게 됨
    - 2를 지나가도 되는 상황에서는 파란 경로가 최단 경로임!

### 플로이드 워셜 공식

- 동적 계획법에 필요한 공식을 정의해보자

![img_99.png](old_note/COMP3500/week12/images/img_99.png)

- 귀납적

- 결론이 하나임:
    - sp(i,j,k-1) 기존 경로를 고르거나
    - 추가적으로 k 노드를 지나는 경로를 고르거나

![img_100.png](old_note/COMP3500/week12/images/img_100.png)

- 추가적으로 k 노드를 지나는 경로에 대한 이해:
    - 경로를 분해해보자
    - sp(i,k,k-1):
        - from i to k 경로 비용
    - sp(k,j,k-1):
        - from k to j 경로 비용

![img_101.png](old_note/COMP3500/week12/images/img_101.png)

### 플로이드 워셜 DP로 풀어보자

![img_102.png](old_note/COMP3500/week12/images/img_102.png)

- 그리드 만들기

![img_103.png](images/img_103.png)

- 행렬에서 보기 편하라고 0-based로 보여줌
    - 원래 플로이드 워셜은 1-based

![img_104.png](images/img_104.png)

- k == -1:
    - 플로이드 워셜로 치면 0번 노드
    - 경유하는 노드가 없음

- 직접 경로밖에 없기 때문에 인접 행렬과 동일함

- 직접 연결하는 edge가 없는 경우 행렬의 값을 무한으로 표기

- 행렬의 의미는 현재까지 알려진 최단 거리

![img_105.png](images/img_105.png)

- 2중 for문으로 공식에 따라 업데이트 해보장

![img_106.png](images/img_106.png)

![img_107.png](images/img_107.png)

![img_108.png](images/img_108.png)

![img_109.png](images/img_109.png)

![img_110.png](images/img_110.png)

- from 0 to 0
- from 0 to 3
- edge가 없어서 바뀌는게 없네

![img_111.png](images/img_111.png)

- 0을 경유햇는데, 최단 경로가 아니라서 업데이트 안 됨

![img_112.png](images/img_112.png)

- k = 0 에서 업데이트한 행렬을 사용한다

![img_113.png](images/img_113.png)

- 와 업데이트
- 1을 경유하면 빠르죠

![img_114.png](images/img_114.png)

- 길이 없네

![img_115.png](images/img_115.png)

- 업데이트

![img_116.png](images/img_116.png)

- 2를 경유하면 최단 경로 업데이트

![img_117.png](images/img_117.png)

- 무한이 사라지고 있어

![img_118.png](images/img_118.png)

![img_119.png](images/img_119.png)

- 시험에서 표 그리고 dp 연습해야함

![img_120.png](images/img_120.png)

- 모든 쌍의 최단 거리를 구했다!

### 플로이드 워셜의 복잡도

![img_121.png](images/img_121.png)

- k: 최대값이 N
    - 0부터 N - 1까지 불판 갈면서 진행

![img_122.png](images/img_122.png)

- 2D 배열만 업데이트하면 되서 공간복잡도는 O(N^2)

### 플로이드 워셜 복습 퀴즈

- 플로이드 워셜 알고리듬을 사용하여 위 그래프의 모든 쌍의 최단 경로를 찾으려고 합니다. k = 1일 때 최단 거리를 계산 한 후 i = 3, j = 0에 해당하는 요소의 값은 무엇인가요? k는 -1부터 시작한다고
  가정해도 좋습니다.

![img_123.png](images/img_123.png)

- k == -1 초기화

| 0   | 3 | 2 | inf |
|-----|---|---|-----|
| 3   | 0 | 1 | 3   |
| 2   | 1 | 0 | 1   |
| inf | 3 | 1 | -   |

- k == 0 테이블 업데이트

| 0   | 3 | 2 | inf |
|-----|---|---|-----|
| 3   | 0 | 1 | 3   |
| 2   | 1 | 0 | 1   |
| inf | 3 | 1 | 0   |

- k == 1 테이블 업데이트

| 0 | 3 | 2 | 6 |
|---|---|---|---|
| 3 | 0 | 1 | 3 |
| 2 | 1 | 0 | 1 |
| 6 | 3 | 1 | 0 |
