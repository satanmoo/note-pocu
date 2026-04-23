# Week 13

## 최소 신장 트리

- 최소로 뻗어 나가는
    - span

![img.png](old_note/COMP3500/week13/images/img.png)

- 모든 노드를 연결하는 변들 찾기
- 비용 최소

### 신장 트리

![img_1.png](old_note/COMP3500/week13/images/img_1.png)

- 어떤 그래프 안에 있는 모든 노드를 연결
- 신장 트리는 여럿 존재 가능

![img_2.png](old_note/COMP3500/week13/images/img_2.png)

- MST

![img_3.png](old_note/COMP3500/week13/images/img_3.png)

- MST에서 변의 개수는 고정임:
    - 노드가 N개라면
    - 변은 N-1개

![img_4.png](old_note/COMP3500/week13/images/img_4.png)

- MST를 완성하는 과정에서 변의 개수가 N-1개가 성립하면 종료하면 됨
- 사이클도 만들면 안 됨
    - MST 알고리듬에서 사이클 여부도 확인할 수 있음

### 순환

![img_5.png](old_note/COMP3500/week13/images/img_5.png)

- 2 -> 3 -> 4 -> 1 -> 2

### 컷

![img_6.png](images/img_6.png)

- 그래프를 disjoint인 두 하위 집합으로 나누는 행위

![img_7.png](images/img_7.png)

- 컷 세트를 모두 제거하면 두 그래프가 둘로 분리됨

![img_8.png](images/img_8.png)

- 컷 세트에서 가중치가 가장 작은 변을 선택하면 MST에서 선택과 동일함
- 최소 비용의 변으로 두 그래프 연결 가능

### MST 컷 세트에서 가중치가 가장 작은 변 선택하는 것이 최적인 이유

![img_9.png](images/img_9.png)

- 직관적으로 당연
- 나머지가 동일할 때 컷 세트에서 가장 작은 변을 고르면 됨

### MST 알고리듬의 기본 원리

![img_10.png](images/img_10.png)

- 그리디
    - 당장 최적을 선택하는데, 글로벌하게 옵티멀함

## 크러스컬 알고리듬

![img_11.png](images/img_11.png)

![img_12.png](images/img_12.png)

- 각 노드마다 각 노드만 포함하는 트리를 만듦
    - N개 노드면 N개 트리로 시작
- 모든 변을 가중치의 오름차순으로 정렬
    - S 배열에 저장
- 가중치가 가장 작은 변을 제거하고 이 변이 두 트리를 연결하는지 검사

### 크러스컬 알고리듬 시뮬레이션

![img_13.png](images/img_13.png)

![img_14.png](images/img_14.png)

- 각 노드마다 트리를 만들었다

![img_15.png](images/img_15.png)

- 가중치의 오름차순으로 변 정렬
    - 코드 작성할 때는 각 변이 어떤 트리2개를 연결하는지 따로 저장해야함
    - 데이터 클래스 정의하면 됨

![img_16.png](images/img_16.png)

- 최소 가중치의 변 찾음

![img_17.png](images/img_17.png)

- 두 트리를 연결할 수 있음
- MST의 일부로 연결

![img_18.png](images/img_18.png)

![img_19.png](images/img_19.png)

- 반복

![img_20.png](images/img_20.png)

- 이미 하나의 트리에 포함됨
    - 두 트리를 연결하는 변이 아님

![img_21.png](images/img_21.png)

- 무시

![img_22.png](images/img_22.png)

![img_23.png](images/img_23.png)

- 반복

![img_24.png](images/img_24.png)

![img_25.png](images/img_25.png)

- 반복

![img_26.png](images/img_26.png)

- 9는 무시
- 10 무시
- 11 무시

![img_27.png](images/img_27.png)

- 13은 MST에 포함

![img_28.png](images/img_28.png)

- 최종 MST
- 모든 노드를 연결
- 변의 개수 N - 1개

![img_29.png](images/img_29.png)

- 참고로 MST도 여러개 가능

![img_30.png](images/img_30.png)

- 우왕 비용 줄었뗘

## disjoint set

![img_31.png](images/img_31.png)

![img_32.png](images/img_32.png)

- 서로소 집합
    - union-find 라고 말하기도 함

### disjoint set의 연산

![img_33.png](images/img_33.png)

- Find() 결과 집합이 리턴
    - 집합을 빠르게 비교하기 위해서 각 집합을 대표하는 해시값을 사용하기도 함
        - 아니면 집합에서 첫번째 요소 (결정론적)
        - 첫번째 요소를 사용해도 관계없는게, 두 집합에서 원소가 겹치지 않으면 각 집합에서 임의의 원소를 뽑았을 때 반드시 다름

- Union에서 인자는 element지만, element를 포함하는 두 트리를 합함

![img_34.png](images/img_34.png)

- 크러스컬 알고리듬에 disjoint set 적용하기
- disjoint set 자료구조만 알면 쉬움

### MST와 사이클

- 사이클이 존재하면 Find(u) == Find(v)라서 변이 알아서 MST에서 제외됨

### 크러스컬 알고리듬의 시간 복잡도

![img_35.png](images/img_35.png)

- disjoint-set 연산은 O(ElogE) 보다 작음
- 궁금하면 찾아보기...
    - 나중에 수업 끝나고 증명해보기

## 프림 알고리듬

![img_36.png](images/img_36.png)

- 나중에 구현, 증명

## 복습 퀴즈

- 위 그래프의 올바른 최소 신장 트리는 무엇인가요? 아래에서 e(u, v)는 노드 u와 v를 연결하는 변입니다.

![img_37.png](images/img_37.png)

- 트리 [1,2] 연결
- MST:
    - [1]

- 트리 [3,6] 연결
- MST:
    - [1,2]

- 트리 [4,5] 연결
- MST:
    - [1,2,6]

- 트리 [1,2,3,6] 연결
- MST:
    - [1,2,6,9]

- 트리 [1,2,3,6, 4,5] 연결
- MST:
    - [1,2,6,9,9]

- e(1,2), e(3,6), e(4,5), e(5,6), e(1,3)

## 코드보기: 크러스컬 알고리듬

```java
package academy.pocu.comp3500samples.w13.kruskal;

public final class Edge implements Comparable<Edge> {
    private final String node1;
    private final String node2;
    private final int weight;

    public Edge(final String node1,
                final String node2,
                final int weight) {
        this.node1 = node1;
        this.node2 = node2;
        this.weight = weight;
    }

    public String getNode1() {
        return this.node1;
    }

    public String getNode2() {
        return this.node2;
    }

    public int getWeight() {
        return this.weight;
    }

    @Override
    public int compareTo(Edge e) {
        return this.weight - e.weight;
    }
}
```

- 가중지 + 어떤 두 노드를 연결하는지 변에 정보를 포함
- 가중치 순으로 정렬하게 compareTo 구현

```java
package academy.pocu.comp3500samples.w13.kruskal;

import java.util.HashMap;

public final class DisjointSet {
    private class SetNode {
        private String parent;
        private int size;

        public SetNode(final String parent, final int size) {
            this.parent = parent;
            this.size = size;
        }
    }

    private final HashMap<String, SetNode> sets = new HashMap<>(64);

    // 생성자: make set
    public DisjointSet(final String[] nodes) {
        for (String s : nodes) {
            SetNode setNode = new SetNode(s, 1);
            this.sets.put(s, setNode);
        }
    }

    // 트리를 대표하는 '루트'라는 노드를 찾음
    public String find(final String node) {
        assert (this.sets.containsKey(node));

        SetNode n = this.sets.get(node);
        // 부모 방향으로 트리 순회하면 됨
        String parent = n.parent;
        if (parent.equals(node)) {
            return node;
        }

        n.parent = find(n.parent);

        return n.parent;
    }

    public void union(final String node1, final String node2) {
        assert (this.sets.containsKey(node1));
        assert (this.sets.containsKey(node2));

        String root1 = find(node1);
        String root2 = find(node2);

        // 루트가 같으면 같은 집합
        if (root1.equals(root2)) {
            return;
        }
        // 두 루트에서 사이즈를 구하고
        SetNode parent = this.sets.get(root1);
        SetNode child = this.sets.get(root2);

        if (parent.size < child.size) {
            SetNode temp = parent;

            parent = child;
            child = temp;
        }
        // 사이즈가 큰 루트가 부모가 됨
        child.parent = parent.parent;
        parent.size = child.size + parent.size;
    }
}
```

- union 에서 사용한 구현의 장점:
    - 트리가 너무 높아지는 것을 방지할 수 있음

```java
package academy.pocu.comp3500samples.w13.kruskal;

import java.util.ArrayList;
import java.util.Arrays;

public final class Kruskal {
    private Kruskal() {
    }

    public static ArrayList<Edge> run(final String[] nodes, final Edge[] edges) {
        // make set
        DisjointSet set = new DisjointSet(nodes);

        ArrayList<Edge> mst = new ArrayList<>(edges.length);
        // 변 오름차순 정렬
        Arrays.sort(edges);

        for (int i = 0; i < edges.length; ++i) {
            String n1 = edges[i].getNode1();
            String n2 = edges[i].getNode2();

            String root1 = set.find(n1);
            String root2 = set.find(n2);
            // 서로소 집합이면 유니온
            if (!root1.equals(root2)) {
                mst.add(edges[i]);
                set.union(n1, n2);
            }
        }

        return mst;
    }
}
```

## 외판원 문제(TSP)

![img_38.png](images/img_38.png)

![img_39.png](images/img_39.png)

![img_40.png](images/img_40.png)

- 동선에서 같은 동네를 또 방문해서 비용이 많이 듬

![img_41.png](images/img_41.png)

- 이동 거리를 최소화!
- 방문 순서
- 방문한 노드는 최대한 재방문 하지 않는게 좋음

![img_42.png](images/img_42.png)

### TSP는 접근법이 다름

![img_43.png](images/img_43.png)

- 시간복잡도가 너무 높은데?
- 최적의 답을 빠른 시간에 구하는 문제가 없음

![img_44.png](images/img_44.png)

- NP-hard

## TSP 근사 알고리듬

![img_45.png](images/img_45.png)

- 다양한 근사 알고리듬이 존재함
    - 최근에도 논문이 계속 나옴
- 수업에서는 "실제 최소 비용보다 최대 k배까지 허용하는 알고리듬"을 살펴본다

![img_46.png](images/img_46.png)

- TSP 다룰 때 보통 무방향 그래프
- 완전 그래프!
    - 모든 노드끼리 딱 한번씩 연결됨
    - 루프 없음
        - 자기에서 자기로 가는 변 없음
- 변의 가중치는 음수가 아님

- 위의 가정이 가장 알고리듬 구현하기 쉬운 가정

![img_47.png](images/img_47.png)

- 모든 도시를 한 번씩 방문하는 경로를 찾는게 목적임

![img_48.png](images/img_48.png)

- 모든 도시를 한 번씩 방문하는 경로를 "해밀턴 경로"라고 정의

![img_49.png](images/img_49.png)

- 해밀턴 경로 중에 원래 노드로 돌아오면 "해밀턴 순환"

- 참고로 어떤 그래프에서 해밀턴 경로가 있냐/없냐를 판단하는 문제도 NPC
    - 이론적으로 알고리듬을 배울 때 NPC 문제는 모두 알아놓으면 증명이 편해서 배움

![img_50.png](images/img_50.png)

![img_51.png](images/img_51.png)

- 요약하면 최소 비용 해밀턴 순환을 찾기

![img_52.png](images/img_52.png)

- 변의 가중치는 "삼각 부등식" 만족!

### 삼각 부등식

![img_53.png](images/img_53.png)

- 유클리드 기하학에서 반드시 성립

![img_54.png](images/img_54.png)

- 여기서 거리를 "유클리드 거리"라고 부름
- 이렇게 삼각 부등식을 만족하는 상황을 "유클리드 TSP"라고 부름
- 삼각 부등식을 만족하는 TSP는 NPC
    - NP-hard에서 NPC로 쉬워짐
    - 여전히 근사는 필요함
    - 하지만 유클리드 TSP를 만족하면 근사 알고리듬을 돌리기 쉬워짐

## 2-근사 알고리듬

![img_55.png](images/img_55.png)

- k == 2

![img_56.png](images/img_56.png)

### 시뮬레이션 해보자

![img_57.png](images/img_57.png)

![img_58.png](images/img_58.png)

- MST를 만들면 뭐가 성립함?
    - TSP 경로는 해밀턴 순환을 찾는 것이 목적
    - TSP 경로에서 강북-서초 변을 제외한 나머지
        - 원래대로 돌아가는 경로가 없음
    - 그렇다면 TSP 경로의 총 비용은 MST보다 반드시 큼
    - 여기서 MST는 TSP 경로 비용 의 하한선임을 알 수 있음

- MST를 만들 수 있는지 여부도 중요함:
    - 연결된 무방향 그래프라면 MST가 가능함
        - 즉 어떻게든 노드에서 다른 노드로 가는 경로가 존재함
    - 현재 TSP문제에서는 완전 그래프를 가정했기에 MST를 만들 수 있음
        - 끊어진 노드가 없죠?

![img_59.png](images/img_59.png)

- MST를 한 바퀴 돎

![img_60.png](images/img_60.png)

- 중구에서 시작
- 아무리 느려도 각 변을 2번 방문
    - 갈 때
    - 올 때
- Double Tree Walk
- 비용의 최대가 MST의 2배
    - 따라서 비용은 MST의 2배 이하

![img_61.png](images/img_61.png)

- 최적화 해서 이미 방문한 노드를 건너뛰면
    - 스킵해도 되는 이유:
        - 완전 그래프라서
        - 즉 어떤 노드에 가기 위해 경유가 필요하고, 경유 때문에 재방문하는 일이 없음

- 이미 방문한 노드를 건너뛰면서 한 바퀴 돌면 해밀턴 순환이 됨

### MST를 한 바퀴 도는 동작에 대한 이해

![img_62.png](images/img_62.png)

- 엥 이게 된다고?

![img_63.png](images/img_63.png)

- 중구에서 시작

![img_64.png](images/img_64.png)

- 크러스컬 알고리듬으로 MST 만들기

![img_65.png](images/img_65.png)

- 보기 좋게 노드에 넘버링

![img_66.png](images/img_66.png)

- DFS 전위 순회

![img_67.png](images/img_67.png)

![img_68.png](images/img_68.png)

![img_69.png](images/img_69.png)

- 돌아올 때 DFS 결과에 적어줘야함
    - 모든 단계를 적어줘야함
    - Double Walk Tree

![img_70.png](images/img_70.png)

![img_71.png](images/img_71.png)

![img_72.png](images/img_72.png)

- 방문하는 노드를 모두 기록했음

![img_73.png](images/img_73.png)

- 총 비용 == MST의 2배
- 해밀턴 순환의 최대 비용

![img_74.png](images/img_74.png)

- DFS의 결과(저장된 노드) + 원본 그래프(완전 그래프)
- 처음으로 방문하는 노드로 향하는 변은 해밀턴 순환에 추가

![img_75.png](images/img_75.png)

- 처음보는 노드라 추가

![img_76.png](images/img_76.png)

- 마찬가지로 처음 보는 노드

![img_77.png](images/img_77.png)

- 이미 방문했기에 무시

![img_78.png](images/img_78.png)

- from 2 to 4 변은 MST에 없던 변임
    - 근데 이게 왜 해밀턴 경로에 속하나요?:
        - 삼각 부등식 때문
    - MST에 없던 변이라면, 실제 그래프에서도 변이 없을 수 있잖아요?
        - 완전 그래프를 가정했잖아요!

![img_79.png](images/img_79.png)

- 처음 보는 노드 3을 향하는 변 추가

![img_80.png](images/img_80.png)

- 1은 이미 방문했기에 무시
    - 의미 없지만 원래 논리상 짚고 넘어가죠
- 그리고 원래의 목적지 1로 돌아와야하기 때문에 1로 돌아오는 변 추가

![img_81.png](images/img_81.png)

- 해밀턴 순환을 구했음
    - MST보다 작은 값

![img_82.png](images/img_82.png)

- 진짜 최선의 경로는 찾지 못함
    - 근사 알고리듬이잖아요

### 2-근사 TSP 알고리듬의 시간 복잡도

![img_83.png](images/img_83.png)

- DFS로 뽑은 노드는 최대 2N개
    - 따라서 중복 없이 방문하는 시간복잡도
    - O(N)
- MST의 시간복잡도가 더 커서, 여기서 결정됨

### TSP 알고리듬의 실제 사용례

![img_84.png](images/img_84.png)

## TSP 알고리듬의 변형

### 변형1: 완전 그래프가 아닌 경우

![img_85.png](images/img_85.png)

![img_86.png](images/img_86.png)

- 완전 그래프로 바꾸면 됨

![img_87.png](images/img_87.png)

- 새로 추가되는 변들의 가중치를 매우 높게 설정
    - MST를 찾는 알고리듬에서 알아서 걸러짐

![img_88.png](images/img_88.png)

- TSP 알고리듬은 여러 가지라서 검색해서

### 변형2: 비대칭 TSP

![img_89.png](images/img_89.png)

- 방향 그래프임
    - 우리가 아는 알고리듬은 완전 그래프 + 무방향에서만 먹히는데?

- 비대칭 TSP 전용 알고리듬도 있으니 알아서 찾아보기

![img_90.png](images/img_90.png)

- 대칭 TSP로 변환!

![img_91.png](images/img_91.png)

- 와
- 고스트 노드 만들고
- 변은 다음과 같은 경우에만 허용:
    - 실제 -> 고스트
    - 고스트 -> 실제
- 이렇게 연결하면 신기하게도 대칭 무방향 그래프를 만들 수 있음
- "A -> A'" 처럼 자기 자신의 고스트와 연결하는 변은 음의 가중치로

![img_92.png](old_note/COMP3500/week13/images/img_92.png)

- 남은 변들 다 채워서 완전 그래프로

![img_93.png](old_note/COMP3500/week13/images/img_93.png)

- 변형하고 실행

![img_94.png](old_note/COMP3500/week13/images/img_94.png)

- 여기서 신기하게도 실제노드 -> 고스트노드
    - 교차로 반복됨
    - TSP 알고리듬에서 B -> B', A -> A' 이런식으로 가게 구현

![img_95.png](old_note/COMP3500/week13/images/img_95.png)

- "실제노드 -> 고스트노드" 에서 B -> B' 처럼 성립하게 구현하면
- 하나의 노드로 취급할 수 있음
    - 실제노드 + 고스트노드

![img_96.png](old_note/COMP3500/week13/images/img_96.png)

- 놀랍네..

### 삼각 부등식이 성립 안 하는 TSP

![img_97.png](old_note/COMP3500/week13/images/img_97.png)

- 이건 다항식 시간 안에 괜찮은 해법을 찾을 수 없음..
- P = NP 가 성립하면 다항식 시간 안에 풀 수 있음

## 2-근사 TSP 복습 퀴즈

![img_98.png](old_note/COMP3500/week13/images/img_98.png)

- 다음 중 위 TSP 그래프를 2-근사 알고리듬을 사용하여 구한 최적 경로를 모두 고르세요. 시작 노드는 A입니다.

- MST를 찾아보자.
- 크러스컬 알고리듬
    - 가중치의 오름차순으로 변 정렬
        - [4,5,7,8,10,11]
        - 가중치가 모두 서로 다르기 때문에 MST는 하나만 나오겠죵
    - 트리 확장
        - [C-D] - 모양
        - [A-C-D] ㄴ 모양
        - [A-C-D-B] ㄷ 모양

- DFS로 방문하는 노드 모두 기록:
    - ABACDCA
    - ACDCABA
        - A에서 dfs할 때 B를 먼저 호출하냐, C를 먼저 호출하냐 차이
- 해밀턴순환 만들기:
    - A->B->C->D->A
    - A->C->D->B->A
    - 답이 2개!

## 흐름 네트워크(Flow Network)

![img_99.png](old_note/COMP3500/week13/images/img_99.png)

- 특별한 그래프
    - 변의 가중치가 용량(capacity)를 나타냄
    - 기본적으로 "방향 그래프" 가정

- 전송할 때 일단 전송이 시작되면 지속적으로 흐름이 유지되어야 함
    - 처음에 도착 지점까지 흐르는 시간이 걸리지만, 도착지점에 도착하고 부터는 흐름대로 계속 이어져야함
    - 수도꼭지와 비슷하게, 처음에 물이 흐르는 시간이 걸리지만 수도꼭지에서 물이 나오기 시작하면 계속 흘러야함

![img_100.png](old_note/COMP3500/week13/images/img_100.png)

- "용량"을 초과해서 보낼 수 없음
    - 단위 시간에 용량만큼 보낼 수 있음

![img_101.png](old_note/COMP3500/week13/images/img_101.png)

- 단위 시간에 현재 보내는 양을 "유량"이라고 부름

## 네트워크 유량 문제(Network Flow Problem)

![img_102.png](old_note/COMP3500/week13/images/img_102.png)

## 최대 유량 문제

![img_103.png](images/img_103.png)

- 흘러서 빠져나갈 수 있는 최대 양을 결정하는 문제

![img_104.png](images/img_104.png)

- 병렬 연결 가능함
- 다른 도시를 거쳐도 괜찮음
- 병목이 생길 수 있음

### 유량의 상한

![img_105.png](images/img_105.png)

- 간단하게 유량의 상한은 구할 수 있음

![img_106.png](images/img_106.png)

- Min(from에서 나가는 유량의 최대, to로 들어오는 유량의 최대)

![img_107.png](images/img_107.png)

- 병목점

### 최대 유량 문제 예시

- 수요와 유통 문제

![img_108.png](images/img_108.png)

- from 포프리 to 돈돈시

## 최대 유량 알고리듬

![img_109.png](images/img_109.png)

- BFS는 주먹구구식임

- 포드-풀커슨은 따로 공부하기

### 에드몬드-카프 알고리듬의 기본 개념

![img_110.png](images/img_110.png)

### 에드몬드-카프 시뮬레이션

![img_111.png](images/img_111.png)

![img_112.png](images/img_112.png)

![img_113.png](images/img_113.png)

- 최단거리는 BFS로 찾기
    - 가중치가 1인 다익스트라

![img_114.png](images/img_114.png)

![img_115.png](images/img_115.png)

![img_116.png](images/img_116.png)

![img_117.png](images/img_117.png)

- 유량이 용량에 도달한 변들은 다음 BFS에서 고려하지 않음

![img_118.png](images/img_118.png)

![img_119.png](images/img_119.png)

![img_120.png](images/img_120.png)

![img_121.png](images/img_121.png)

- 다음 BFS에서 from C to D 고려 안 함

![img_122.png](images/img_122.png)

- 이제 최단 경로가 없음

![img_123.png](images/img_123.png)

![img_124.png](images/img_124.png)

- 도착지에 들어오는 유량을 구하면 3

![img_125.png](images/img_125.png)

- 최적은 이거임

- 왜 최적이 안 나왔을 까?

![img_126.png](images/img_126.png)

- BFS에서 순서를 정할 수 없음
- 먼저 찾은 경로가 최적의 선택지를 지워버림

![img_127.png](images/img_127.png)

- 가상의 변
    - back edge

### 가상의 변과 에드몬드-카프

![img_128.png](images/img_128.png)

- 원래 없는 선이라 용량은 0
- 대신 유량이 음수일 수 있음
    - 대칭성 개념

![img_129.png](images/img_129.png)

- back edge 추가하고
    - 용량 0
    - 유량도 0으로 초기화

![img_130.png](images/img_130.png)

- 원래 변에는 최대 용량을 더하고
- back edge에는 뺌

- 음수 유량이 적용되어 -2/0
    - back edge는 용량보다 유량이 적어 다음 BFS에서 고려할 수 있음

![img_131.png](images/img_131.png)

![img_132.png](images/img_132.png)

![img_133.png](images/img_133.png)

![img_134.png](images/img_134.png)

![img_135.png](images/img_135.png)

- back edge 때문에 경로가 생김

![img_136.png](images/img_136.png)

![img_137.png](images/img_137.png)

- 최대 용량은 2

![img_139.png](images/img_139.png)

- 유량을 흐르게 함

![img_138.png](images/img_138.png)

- 유량의 대칭성 때문에 from B to C 변이 살아남

![img_140.png](images/img_140.png)

![img_141.png](images/img_141.png)

- BFS 하면 더 이상 경로가 없음

![img_142.png](images/img_142.png)

- 마지막으로 최대 유량 구할 때는 back edge는 빼고 계산

### 에드몬드-카프 정리

![img_143.png](images/img_143.png)

### 최대 유량 문제의 예

![img_144.png](images/img_144.png)

- 참고

## 기타 그래프 문제들

![img_145.png](images/img_145.png)

- 여기 문제들 모두 NPC
  - 이를 활용해서 증명해서 알고리듬 문제 품

- 스스로 찾아보자
