# week11

## 그래프 서론

- 덜 정형화된 실세계에서 볼법한 데이터를 처리하는 알고리듬
- 면접에서 상대적으로 덜 중요함
    - 그래프 알고리듬이 진짜 필요한 회사 아니면..?
    - 알고리듬 경진 대회에는 많이 나옴!

## 그래프

- 그래프를 한 마디로 표현하면:
    - 데이터들을 잘 정리하는 방법
    - ..?

![img.png](old_note/COMP3500/week11/images/img.png)

- 여기서 데이터는 무엇인가요?
    - 노드

![img_1.png](old_note/COMP3500/week11/images/img_1.png)

- 노드에는 어떤 데이터를 저장하나요?

![img_2.png](old_note/COMP3500/week11/images/img_2.png)

- 트리의 노드와 마찬가지로 딱히 제약은 없습니다.

- 노드를 Vertex(정점)이라고 부르기도 함
    - Point(꼭지점)

![img_3.png](old_note/COMP3500/week11/images/img_3.png)

- 어떻게 잘 정리하나요?

![img_4.png](old_note/COMP3500/week11/images/img_4.png)

- 노드 간의 관계를 잘 정리
    - 관계를 선으로 표기함

- A-D 는 직접적인 관계
    - 따라서 선으로 이어져있음
- A-B 는 간접적인 관계

- 선을 edge(변)으로 부름
    - edge는 간선이라고 해석하기도 함

![img_5.png](old_note/COMP3500/week11/images/img_5.png)

- 어떤 관계를 edge로 표현하나요?

![img_6.png](old_note/COMP3500/week11/images/img_6.png)

- 관계는 무엇이든 상관없이 정의하기 나름

- 노드의 데이터, 관계 모두 정의하기 나름이다!

### 그래프의 예

![img_7.png](old_note/COMP3500/week11/images/img_7.png)

- 서울 지하철 노선표

![img_8.png](old_note/COMP3500/week11/images/img_8.png)

- 선수과목 관계

- 지하철 노선표와 다르게 방향이 한 방향이죠!
- 지하철에는 변에 거리라는 개념이 포함되어 있지만, 이번에는 없음

![img_9.png](old_note/COMP3500/week11/images/img_9.png)

- 전/현 직장동료

- 그래프는 네트워크를 표현할 때 편리하다

![img_10.png](old_note/COMP3500/week11/images/img_10.png)

- 변에 조건이 있음
    - 시간 초과여부
- 노드로 돌아오는 루프 edge도 있음

![img_11.png](old_note/COMP3500/week11/images/img_11.png)

- 스킬 트리
- 선수과목과 유사함

![img_12.png](old_note/COMP3500/week11/images/img_12.png)

- 스킬 트리는 "트리"다
- 트리는 그래프의 특수한 케이스
    - 트리는 DAG!

- 사실 배열, 2d배열, 트리 모두 그래프
    - 여기서 사용했던 알고리듬(bfs, dfs)등 모두 그래프에 사용 가능

### 그래프 복습 퀴즈

![img_13.png](old_note/COMP3500/week11/images/img_13.png)

![img_14.png](old_note/COMP3500/week11/images/img_14.png)

![img_15.png](old_note/COMP3500/week11/images/img_15.png)

- 1,2,3 중 트리인 것은 1번!
    - 유일하게 비순환

### 그래프 정리

![img_16.png](old_note/COMP3500/week11/images/img_16.png)

- 정의:
    - Node와 Edge의 집합
    - 수식이 깔끔하게 표현 해줌
        - G = (N, E)

![img_17.png](old_note/COMP3500/week11/images/img_17.png)

- degree(차수):
    - node에 연결된 edge의 개수

![img_18.png](old_note/COMP3500/week11/images/img_18.png)

- loop:
    - 자기 자신으로 돌아오는 edge를 가진 노드

### 그래프의 종류

![img_19.png](old_note/COMP3500/week11/images/img_19.png)

#### 방향 vs 무방향 그래프

![img_20.png](old_note/COMP3500/week11/images/img_20.png)

- 방향을 화살표로 표기
- 방향(꼬리 -> 머리)로만 이동 가능

- 무방향 그래프는 사실 양 방향임
    - 방향에 제약이 없음

- 일부 edge만 방향을 가지고 있어도 방향 그래프로 간주함!

#### 무방향 그래프의 최대 변 개수

![img_21.png](old_note/COMP3500/week11/images/img_21.png)

- 노드 수가 주어질 때 이 노드의 관계를 표현하는 edge의 최대 개수
    - nC2
    - 조합 개념

#### 순환 vs 비순환 그래프

![img_22.png](old_note/COMP3500/week11/images/img_22.png)

- cycle 여부

#### 가중 vs 비가중

![img_23.png](old_note/COMP3500/week11/images/img_23.png)

- edge에 값이 있으면 가중

### DAG

![img_24.png](old_note/COMP3500/week11/images/img_24.png)

- 말 그대로 방향, 비순환

### 방향 가중 그래프

![img_25.png](old_note/COMP3500/week11/images/img_25.png)

- A -> C
- C -> D
- C -> E
    - 방향이 존재함

### 그래프를 사용해 풀 수 있는 문제들

![img_26.png](old_note/COMP3500/week11/images/img_26.png)

## 그래프를 표현하는 방법들

![img_27.png](old_note/COMP3500/week11/images/img_27.png)

![img_28.png](old_note/COMP3500/week11/images/img_28.png)

- 그래프를 컴퓨터에 어떻게 표현하지?
    - 코드로 어떻게 옮기지

![img_29.png](old_note/COMP3500/week11/images/img_29.png)

- 그래프를 표현할 때 대표적으로 3가지 정도 방법

### 원과 선

![img_30.png](old_note/COMP3500/week11/images/img_30.png)

- 사람이 이해하기 편함
- 노드, edge가 너무 많으면..?

![img_31.png](old_note/COMP3500/week11/images/img_31.png)

- 노드끼리 서로서로 참조하는 경우도 생기고 복잡해짐

### 인접 행렬

![img_32.png](old_note/COMP3500/week11/images/img_32.png)

![img_33.png](old_note/COMP3500/week11/images/img_33.png)

![img_34.png](old_note/COMP3500/week11/images/img_34.png)

- from-to 관계를 정리하면 됨

![img_35.png](old_note/COMP3500/week11/images/img_35.png)

- from A to A 불가능
    - 갈 수 있다면 루프가 형성되어야함

![img_36.png](old_note/COMP3500/week11/images/img_36.png)

- from A to B
- from A to C
- 모두 가능
    - true(1)

![img_37.png](old_note/COMP3500/week11/images/img_37.png)

- from A to D
- 직접 edge로 연결되지 않아 불가능
    - false(0)

![img_38.png](old_note/COMP3500/week11/images/img_38.png)

![img_39.png](old_note/COMP3500/week11/images/img_39.png)

- 행렬이 대각선 기준 대칭
    - 무방향 그래프의 특징임

![img_40.png](old_note/COMP3500/week11/images/img_40.png)

```text
  A B C D
A 0 0 1 0
B 1 0 0 1
C 0 1 0 0
D 0 0 0 0
```

- 방향 그래프의 인접 행렬을 읽는 법
    - 행으로 읽으면?
        - A행: 0 0 1 0
            - 노드 A가 누구를 가리키는지 알 수 있음
    - 열로 읽으면?
        - A열: 0 1 0 0
            - 노드 A를 누가 가리키는지 알 수 있음

![img_41.png](old_note/COMP3500/week11/images/img_41.png)

- 인접 행렬은 2d 배열로 구현함
    - 장점:
        - 2d 배열이라 변 제거의 시간복잡도가 인덱스로 O(1)
        - from-to 관계도 인덱스로 O(1)로 찾음
    - 단점:
        - 공간복잡도는 O(N^2)
        - edge와 관계없이 노드 수(N)가 공간의 크기를 결정함
        - 2d 배열 생성할 때 O(N^2)
        - 인접 노드를 찾을 때는 하나의 행을 모두 훑어야한다
            - O(N)

- edge수가 적은 경우 인접행렬을 사용하는건 나쁨

### 인접 리스트

![img_42.png](old_note/COMP3500/week11/images/img_42.png)

- 연결리스트의 배열
    - 2d 배열보다 공간을 아낄 수 있음

- 연결리스트 대신에 다른 자료구조 사용해도 되긴함

![img_43.png](old_note/COMP3500/week11/images/img_43.png)

![img_44.png](old_note/COMP3500/week11/images/img_44.png)

- 여기서 연결리스트에서 B -> C의 관계를 의미하는 건 아님
    - A에 연결된 노드를 연결리스트로 표현할 뿐!

![img_45.png](old_note/COMP3500/week11/images/img_45.png)

![img_46.png](old_note/COMP3500/week11/images/img_46.png)

- 장점:
    - 노드 수 + edge 수 만큼 공간 차지
        - 최악의 경우 edge 수가 최대인 경우
        - 모든 노드가 연결된 경우
    - 삽입은 O(1)
        - 순서가 중요한게 아니라서 연결 리스트 끝에 삽입하면 됨
    - 삭제는 연결 리스트 순회하고 삭제해야해서 O(E)
- 단점:
    - from-to 관계 찾을 때 O(1)으로 불가능
        - 행 or 열 정해서 O(E)로 순회해서 확인해야함

![img_47.png](old_note/COMP3500/week11/images/img_47.png)

- 기타 표현법

### 인접 행렬 복습 퀴즈

- 1번

![img_48.png](old_note/COMP3500/week11/images/img_48.png)

```text
0 1 0 0
1 0 1 1
0 1 0 0
0 0 1 0
```

- 2번
    - 인접 리스트로 나타내기

## 그래프의 DFS

![img_49.png](old_note/COMP3500/week11/images/img_49.png)

- 트리에서 깊이 우선 탐색

![img_50.png](old_note/COMP3500/week11/images/img_50.png)

![img_51.png](old_note/COMP3500/week11/images/img_51.png)

- 무방향 그래프의 경우 트리의 DFS 알고리듬을 사용하면 무한루프

### 그래프 DFS의 무한루프

- 왜 무한루프가 발생하는지 시뮬레이션 해보자!

![img_52.png](old_note/COMP3500/week11/images/img_52.png)

- 자식을 스택에 추가하는 과정을 반복하다 보면 노드를 다시 방문하는 일이 발생함

![img_53.png](old_note/COMP3500/week11/images/img_53.png)

- 무한루프를 해결하려면?
    - 처리했던 노드를 기억하면 됨

![img_54.png](old_note/COMP3500/week11/images/img_54.png)

- HashSet으로 방문한 노드를 검증해보자

```text
A E C D F B C
```

- C를 두번 방문하는데?
- 왜 이렇지?
    - Set에 들어가기 전에 Stack에 중복해서 들어갈 수 있음

![img_55.png](old_note/COMP3500/week11/images/img_55.png)

- 스택에 중복해서 들어가는 것을 막아야함
- 아니면 스택에서 pop해서 처리했던 노드인지 확인하기

![img_56.png](old_note/COMP3500/week11/images/img_56.png)

- 스택에 넣을 시점에 동시에 Set에도 넣어서, 발견한 노드라는 개념으로 접근하기

### 방향 그래프에서 DFS

![img_57.png](old_note/COMP3500/week11/images/img_57.png)

![img_58.png](old_note/COMP3500/week11/images/img_58.png)

- 과연 모든 노드를 방문할 수 있나?

![img_59.png](old_note/COMP3500/week11/images/img_59.png)

- 트리에서 DFS는 트리의 특수한 성질 때문에 모든 노드를 방문할 수 있었음!
    - 루트에서 시작해서 리프로 반드시 도착할 수 있음
        - 깊이 개념

- 일반적인 그래프에서는 방향, 끊어진 노드 때문에 모든 노드와 직간접적으로 연결 못 하는 경우 발생

- 그래서 해결책:
    - 모든 노드에서 DFS
        - 대신 방문 목록은 공유해서 중복 방문은 막기
        - 그래서 속도가 엄청 늦어지는건 아님

### OOP 개념에서는 좋지 못한 방법

![img_60.png](old_note/COMP3500/week11/images/img_60.png)

- 노드의 상태를 업데이트
- 만약 그래프에서 이미 DFS했는데, 또 DFS하고 싶으면? 모든 노드의 방문상태를 false로 변경하는 작업이 필요함!

### 후위 순회 DFS

![img_61.png](old_note/COMP3500/week11/images/img_61.png)

- 재귀 함수로 만들면 쉬움

![img_62.png](old_note/COMP3500/week11/images/img_62.png)

- 이 그래프를 후위 순회 DFS로 출력해보자!

```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


public class Program {

    public static void main(String[] args) {
        var a = new Node('A', new ArrayList<>());
        var b = new Node('B', new ArrayList<>());
        var c = new Node('C', new ArrayList<>());
        var d = new Node('D', new ArrayList<>());
        var e = new Node('E', new ArrayList<>());
        var f = new Node('F', new ArrayList<>());

        a.children.add(e);
        a.children.add(c);
        b.children.add(f);
        c.children.add(d);
        c.children.add(e);
        c.children.add(a);
        d.children.add(c);
        e.children.add(f);
        e.children.add(c);
        e.children.add(a);
        f.children.add(b);

        searchGraph(List.of(a, b, c, d, e, f));
    }

    private static void searchGraph(final List<Node> nodeList) {
        Set<Node> discovered = new HashSet<>();
        for (Node node : nodeList) {
            searchDepthFirstRecursive(node, discovered);
        }
    }

    // post-order
    private static void searchDepthFirstRecursive(final Node node, final Set<Node> discovered) {
        if (discovered.contains(node)) {
            return;
        }
        discovered.add(node);

        for (Node child : node.children) {
            searchDepthFirstRecursive(child, discovered);
        }

        System.out.println(node.data);
    }

    private static class Node {
        final char data;
        final List<Node> children;

        Node(final char data, final List<Node> children) {
            this.data = data;
            this.children = children;
        }
    }
}

```

- 시간 복잡도는?
    - O(N + E)

![img_63.png](old_note/COMP3500/week11/images/img_63.png)

- 각 변은 최대 두번 고려됨:
    - 무방향 그래프라서!
    - 노드가 서로서로 참조

![img_64.png](old_note/COMP3500/week11/images/img_64.png)

- 근데 트리의 DFS의 시간복잡도에서는 Edge를 고려했었나?

![img_65.png](old_note/COMP3500/week11/images/img_65.png)

- 사실은 고려했었음
    - 하지만 E = N - 1 성립해서 Big-O 표기법 때문에 없는 것으로 착각

![img_66.png](old_note/COMP3500/week11/images/img_66.png)

- E = N - 1 성립은 아무 트리나 그려보면 알 수 있음

### 그래프 DFS 복습 퀴즈

![img_67.png](old_note/COMP3500/week11/images/img_67.png)

- 위 그래프를 후위 순회하면 방문하는 노드들을 순서대로 적으세요. 순회를 시작하는 노드는 F입니다.

- D B A C E F
- B D A C E F
    - 둘 다 됩니다!

## 위상 정렬

- 위상:
    - 서로의 위치 관계

![img_68.png](old_note/COMP3500/week11/images/img_68.png)

![img_69.png](old_note/COMP3500/week11/images/img_69.png)

- 노드:
    - task
- Edge:
    - 각 task의 우선 순위를 표현
    - task 선-후 관계

![img_70.png](old_note/COMP3500/week11/images/img_70.png)

- 이게 왜 어려울까?
    - 인간에게 step-by-step이 가장 편하기 때문임!

![img_71.png](old_note/COMP3500/week11/images/img_71.png)

- 위상 정렬을 이용해보자!
- 우선순위(선-후 관계)는 바뀌지 않음
- DAG만 유효한 위상 정렬이 가능
    - 순환하면 선-후 관계 판단 불가능
    - 시작점이 존재해야함!

- 결과는 여러개!

![img_72.png](old_note/COMP3500/week11/images/img_72.png)

![img_73.png](old_note/COMP3500/week11/images/img_73.png)

- 시작점은 항상 들어오는 edge가 없는 노드!

![img_74.png](old_note/COMP3500/week11/images/img_74.png)

- 위상 정렬 알고리듬에 2가지 정도 활용!
    - DFS
    - 칸 알고리듬

- 위상정렬의 용도:
    - 실제로 위상 정렬!
    - 위상 정렬 가능한 그래프인지 판단
        - 순환 여부 판단

### DFS를 이용한 위상정렬

![img_75.png](old_note/COMP3500/week11/images/img_75.png)

![img_76.png](old_note/COMP3500/week11/images/img_76.png)

- "물 받기" 노드에서 시작해서 DFS
- 모든 노드에 대해서 DFS 적용하기 위해 "봉지 뜯기", "파 썰기", "수저 놓기" 에서도 DFS 적용
    - 위에서 배운 DFS 모든 노드에 적용하는 동작 그대로 사용

![img_77.png](old_note/COMP3500/week11/images/img_77.png)

- 근데 문제가 있음
- "맛있게 먹기" 노드는 항상 마지막에 처리해야하는거 아닌가요?
- 현재 방법에서는 "물 받기"가 아니라 어떤 노드에서 시작하던 답은 나오지 않음

![img_78.png](old_note/COMP3500/week11/images/img_78.png)

![img_79.png](old_note/COMP3500/week11/images/img_79.png)

- DFS 후위 순회하고, 역으로 과정을 복원하면 됨
    - Stack
    - 연결리스트 addFirst 반복

### 위상 정렬의 용도

![img_80.png](old_note/COMP3500/week11/images/img_80.png)

- 프로젝트 일정 만들기
- CPU의 out of order scheduling
- 스프레드 시트 셀 평가 순서 결정
    - 셀 끼리 참조 순서가 있음
- 컴파일 순서 결정
    - 오브젝트 파일끼리 참조 순서가 있음
- DB 테이블 로딩 순서 결정
    - 테이블 간 참조 순서가 있음
- 선수 순위 결정
    - 누가 누구를 이겼고, 졌고 관계를 노드와 edge로 정의하면 됨!

## 코드보기: POCU 수강 순서

```java
package academy.pocu.comp3500samples.w11.topologicalsort;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedList;

public class Program {
    public static void main(String[] args) {
        ArrayList<Course> courses = createCourseGraph();

        LinkedList<Course> sortedCourses = sortTopologically(courses);

        for (Course course : sortedCourses) {
            System.out.println(course.getTitle());
        }

        System.out.println("=======================================");

        Collections.shuffle(courses);

        sortedCourses = sortTopologically(courses);

        for (Course course : sortedCourses) {
            System.out.println(course.getTitle());
        }
    }

    private static LinkedList<Course> sortTopologically(ArrayList<Course> courses) {
        HashSet<Course> discovered = new HashSet<>();
        LinkedList<Course> sortedList = new LinkedList<>();

        for (Course course : courses) {
            if (discovered.contains(course)) {
                continue;
            }

            topologicalSortRecursive(course,
                    discovered,
                    sortedList);
        }

        return sortedList;
    }

    private static void topologicalSortRecursive(Course course, HashSet<Course> discovered, LinkedList<Course> linkedList) {
        discovered.add(course);

        for (Course nextCourse : course.getNextCourses()) {
            if (discovered.contains(nextCourse)) {
                continue;
            }

            topologicalSortRecursive(nextCourse,
                    discovered,
                    linkedList);
        }

        linkedList.addFirst(course);
    }

    private static ArrayList<Course> createCourseGraph() {
        final Course comp0000 = new Course("0000: Intro to Programming for Novices and Hobbyists (C#)");
        final Course comp1500 = new Course("1500: Intro to Professional Programming with C#");
        final Course comp1000 = new Course("1000: Math for Software Engineers");
        final Course comp1600 = new Course("1600: Visual Programming with C#");
        final Course comp2200 = new Course("2200: Unmanaged Programming with C");
        final Course comp2500 = new Course("2500: Object Oriented Programming and Design with Java");
        final Course comp4700 = new Course("4700: Database Programming with C#");
        final Course comp2300 = new Course("2300: Assembly");
        final Course comp3200 = new Course("3200: Unmanaged Programming with C++");
        final Course comp3500 = new Course("3500: Algorithm & Data Structure with Java");
        final Course comp3000 = new Course("3000: Computer Architecture (C or Assembly)");
        final Course comp4000 = new Course("4000: Operating Systems (C)");
        final Course comp4100 = new Course("4100: Data Comm (C or C++");

        comp0000.addNext(comp1500);

        comp1500.addNext(comp1000);
        comp1500.addNext(comp1600);
        comp1500.addNext(comp2200);
        comp1500.addNext(comp2500);

        comp1000.addNext(comp1600);
        comp1000.addNext(comp2200);
        comp1000.addNext(comp2500);

        comp1600.addNext(comp4700);

        comp2200.addNext(comp2300);
        comp2200.addNext(comp3200);
        comp2200.addNext(comp3000);

        comp2500.addNext(comp4700);
        comp2500.addNext(comp3200);
        comp2500.addNext(comp3500);

        comp2300.addNext(comp3000);

        comp3200.addNext(comp4000);
        comp3200.addNext(comp4100);

        comp3000.addNext(comp4000);

        ArrayList<Course> courses = new ArrayList<>();

        courses.add(comp0000);
        courses.add(comp1000);
        courses.add(comp1500);
        courses.add(comp1600);
        courses.add(comp2200);
        courses.add(comp2300);
        courses.add(comp2500);
        courses.add(comp3000);
        courses.add(comp3200);
        courses.add(comp3500);
        courses.add(comp4000);
        courses.add(comp4100);
        courses.add(comp4700);

        return courses;
    }
}
```

- 후위 순회 DFS로 위상 정렬하는 코드

### 위상 정렬 복습 퀴즈

- 위상 정렬의 올바른 시간 복잡도는 무엇인가요?:
    - O(N + E)
    - DFS 후위 순회랑 동일함

## 강한 결합 요소(SCC)

- 그래프 최적화에 많이 사용
- 위상 정렬과 관련이 있음

### 송수관 깔기 문제

![img_81.png](old_note/COMP3500/week11/images/img_81.png)

- 물은 한 방향으로만 흐른다고 가정

![img_82.png](old_note/COMP3500/week11/images/img_82.png)

- 진입 차수가 0인 노드가 유리함
    - 위상 정렬에서도 사용되는 논리

![img_83.png](old_note/COMP3500/week11/images/img_83.png)

- 이 그래프는 진입 차수가 0인 노드가 없음!

![img_84.png](old_note/COMP3500/week11/images/img_84.png)

- 순환은 어떻게 처리하지?
- 1,2,3 노드간의 관계를 정의해보자

![img_85.png](old_note/COMP3500/week11/images/img_85.png)

- 1에서 2,3에 도달 가능
- 2에서 1,3에 도달 가능
- 3에서 1,2에 도달 가능
- 이런 관계가 SCC의 개념

### SCC 영상 퀴즈

![img_86.png](old_note/COMP3500/week11/images/img_86.png)

- 위 그래프에서 또 다른 SCC를 올바르게 고른 것은?
- 5,6,7,8,9,10,11

![img_87.png](old_note/COMP3500/week11/images/img_87.png)

![img_88.png](old_note/COMP3500/week11/images/img_88.png)

- SCC는 하나의 노드로 간주해도 된다!

![img_89.png](old_note/COMP3500/week11/images/img_89.png)

- 치환하면 간단해짐!

![img_90.png](old_note/COMP3500/week11/images/img_90.png)

- 진입차수가 0인 c2에 송수관을 꽂으면 됨!

![img_91.png](old_note/COMP3500/week11/images/img_91.png)

- 우왕

### SCC 개념 정리

![img_92.png](old_note/COMP3500/week11/images/img_92.png)

- 방향 그래프
- 관계를 가지는 "최대" 그룹

### SCC의 주용도

![img_93.png](old_note/COMP3500/week11/images/img_93.png)

- 최적화
    - 하나의 노드로 간주해서 문제를 단순화

- 분할정복 비슷하게, SCC로 나눠서 처리하고 다시 합치는 알고리듬도 있음

### 송수관 변형 문제

![img_94.png](old_note/COMP3500/week11/images/img_94.png)

- 그래프는 설계도라고 생각하면 됨
    - edge(송수관)은 존재하지 않음
- 부분별로 설치할 때 공사가 완료된 집은 수도가 열려야함
    - 과정에서 최대한 효용 발생?
- 설치 순서 결정하기

![img_95.png](old_note/COMP3500/week11/images/img_95.png)

- 위상정렬?
- DAG가 아닌데
    - 순환이 있잖아

![img_96.png](old_note/COMP3500/week11/images/img_96.png)

- SCC를 순환하는 노드로 치환하면 위상정렬 할 수 있음!

### SCC 알고리듬

![img_97.png](old_note/COMP3500/week11/images/img_97.png)

- 사람 이름이 들어가있으면, 수학에서 들어왔다고 보면 됨
- 타잔 알고리듬은 보고가면 좋음

## 코사라주 알고리듬

![img_98.png](old_note/COMP3500/week11/images/img_98.png)

- 시뮬레이션 해보자

![img_99.png](old_note/COMP3500/week11/images/img_99.png)

- 인강 참고

![img_100.png](old_note/COMP3500/week11/images/img_100.png)

![img_101.png](old_note/COMP3500/week11/images/img_101.png)

![img_102.png](old_note/COMP3500/week11/images/img_102.png)

![img_103.png](old_note/COMP3500/week11/images/img_103.png)

- 하나의 SCC를 찾음

![img_104.png](old_note/COMP3500/week11/images/img_104.png)

- 하나의 SCC를 찾음

![img_105.png](old_note/COMP3500/week11/images/img_105.png)

- 4,5,0 은 DFS에서 처리 순서
    - 처리랑 처음 방문은 다르죠
    - 후위 순회니까

![img_106.png](old_note/COMP3500/week11/images/img_106.png)

- 이런식으로 반복

![img_107.png](old_note/COMP3500/week11/images/img_107.png)

### 코사라주 알고리듬의 이해

![img_108.png](old_note/COMP3500/week11/images/img_108.png)

- 실행 결과가 올바른 선후 관계를 보장
    - 12345 순서대로 DFS:
        - 1 5432
    - 역순으로 만들면:
        - 2345 1
    - 역순 결과는 올바른 선후 관계를 보장함

![img_109.png](old_note/COMP3500/week11/images/img_109.png)

- 일반화해서 DFS의 결과는 올바른 선후 관계를 보장함

![img_110.png](old_note/COMP3500/week11/images/img_110.png)

- 전치 그래프에서도 SCC 관계는 변하지 않음
    - SCC끼리 순서는 변함(전치)
        - v -> u
    - SCC 내부에서 edge 방향(순서)도 변함
        - 전치 그래프니까..

![img_111.png](old_note/COMP3500/week11/images/img_111.png)

- 세 번째 단계에서 첫 번째 단계(DFS 후위 순회 + 역순)한 결과
- 역순으로 시작하기 때문에 u부터 시작
- u -> v edge는 없음!
    - 이미 전치했잖아!
- 결과적으로 u에서 DFS하면 C1 SCC 하나를 찾을 수 있음
- 그리고 순회하면서 v에서 DFS하면 C2 SCC 하나를 찾을 수 있음
    - 이미 C1 SCC는 모두 방문해서 처리 안 함
- ... 반복

### SCC의 용도

![img_112.png](old_note/COMP3500/week11/images/img_112.png)

- 여전히 진입이 가능하게 보장하면서 일방 통행로 봉쇄
    - SCC로 묶어서 간접적으로는 SCC 안에서는 통행할 수 있음
- 한 도시에서 다른 도시로 비행기 여행 가능하지 확인
    - 둘이 같은 SCC에 속하면 당연히 가능
    - 다른 SCC에 속하더라도 C1 -> C2 관계로 가능할 수도
- SNS 관계
    - 광고, 추천 시스템 등등

### SCC 복습 퀴즈

- 코사라주 알고리듬의 올바른 시간 복잡도는 무엇인가요?
    - O(N + E)

![img_113.png](old_note/COMP3500/week11/images/img_113.png)

- 위 그래프에서 강한 결합 요소는 총 몇 개인가요?
    - 코사라주 알고리듬 적용하기

```text
[A]
[G, D]
[C, F, E]
[B]
[H]
[J, I]
```
