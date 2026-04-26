# Week9

## 트리 속에 있는 데이터 찾기

![img.png](old_note/COMP3500/week9/images/img.png)

- 트리에 데이터를 저장할 때 특별한 규칙이 없는 경우
    - 트리에 데이터가 없을 수도 있음
- 어떤 순서로 방문해서 원하는 데이터를 찾을 것인가?
- 일반화된 트리 탐색 방식

![img_1.png](old_note/COMP3500/week9/images/img_1.png)

- 재귀적으로 각 노드에서 실행할 수 있는 알고리듬이 필요함
    - 트리가 재귀적인 구조이기 때문

![img_2.png](old_note/COMP3500/week9/images/img_2.png)

![img_3.png](old_note/COMP3500/week9/images/img_3.png)

![img_4.png](old_note/COMP3500/week9/images/img_4.png)

![img_5.png](old_note/COMP3500/week9/images/img_5.png)

- ...

![img_6.png](images/img_6.png)

- DFS
- 한 우물부터 깊이 파는 방식
    - 리프까지 진행

![img_7.png](images/img_7.png)

- 자식 순서는 중요하지 않음
    - 지금 슬라이드는 왼쪽 자식 부터
- 중위 순회(전위, 후위도 마찬가지)는 DFS의 일종임
    - 재귀 함수로 작성할 수 있음
    - 스택 자료구조에 지역변수를 저장해서 구현할 수 있음
- "미로 탈출하기 전략"

## DFS

![img_8.png](images/img_8.png)

- 스택에 다음에 방문할 노드를 저장하기 위함
- top을 방문
- 방문하고, 자식들을 스택에 push

![img_9.png](images/img_9.png)

![img_10.png](images/img_10.png)

![img_11.png](images/img_11.png)

![img_12.png](images/img_12.png)

- 자식을 순회하는 for 문 동작이 0번 인덱스 부터 동작해서
    - B,C,D 순서로 스택에 저장
    - D를 가장 먼저 방문하게 됨
- 이 순서는 DFS랑 관계없음
    - 깊이 개념이 아니죠?

![img_13.png](images/img_13.png)

![img_14.png](images/img_14.png)

![img_15.png](images/img_15.png)

![img_16.png](images/img_16.png)

- ...
- 이하 생략

![img_17.png](images/img_17.png)

- 트리에서 어떤 순서로 방문하는지 설명할 수 있어야함

- 재귀 ver

```java
public static void searchDepthFirstRecursive(Node node) {
    if (node == null) {
        return;
    }

    System.out.println(node.data);

    for (Node child : node.childern) {
        searchDepthFirstRecursive(child);
    }
}
```

## BFS

- 넓이가 아니라 "너비"임

![img_18.png](images/img_18.png)

![img_19.png](images/img_19.png)

![img_20.png](images/img_20.png)

![img_21.png](images/img_21.png)

- 최단 경로 찾기에 적합함
- 방사형으로 검색
    - 내가 본 깊이 이상은 아직 안 봤으니까
    - 도착한다면 내가 최소 깊이겠지?

![img_22.png](images/img_22.png)

![img_23.png](images/img_23.png)

![img_24.png](images/img_24.png)

![img_25.png](images/img_25.png)

![img_26.png](images/img_26.png)

![img_27.png](images/img_27.png)

- ...

![img_28.png](images/img_28.png)

- 큐를 이용해서 구현하면 된다.

## 깊이 우선 vs 너비 우선

![img_29.png](images/img_29.png)

- 메모리 사용량은 트리 모양에 따라 다르다고 봐야함
    - 트리의 모양이 옆으로 퍼져있냐, 좁고 깊냐?
    - 슬라이드에 메모리 사용량은 일반적인 경우를 설명하는 것
        - DFS를 재귀호출로 구현한다고 생각하면, 트리의 깊이에 따라 결정되고, 원소의 개수가 n개라고 하면 O(logn)의 메모리 사용량을 가지게 됨
            - 균형 잡힌 트리의 경우
            - 만약 편향된 트리는 어차피 연결리스트라서 O(n)
        - BFS는 너비에 비례하는 메모리를 사용함
        - [ref](https://stackoverflow.com/questions/23477856/why-does-a-breadth-first-search-use-more-memory-than-depth-first)
- 부모-자식 관계가 캐시 메모리에 친화적임
    - 노드가 자식에 대한 참조를 가지도록 구현했을 때(pointer-based tree), 자식을 연속적으로 접근하면 메모리상에서 근접할 확률이 높음
    - BFS에서는 형제를 방문하는데, 형제에 대한 참조는 일반적으로 가지지 않음
- 병렬처리 질문

```java
public static void searchDepthFirstRecursive(Node node) {
    if (node == null) {
        return;
    }

    System.out.println(node.data);

    for (Node child : node.childern) {
        searchDepthFirstRecursive(child);
    }
}

```

> DFS가 병렬처리에 더 적합한지에 관해 질문입니다.
> 예를 들면 위 코드에서 child 별로 병렬 처리를 한다는 말인가요?
> 정확히 어떤 점에서 유리한지 추가적인 설명 부탁드립니다.

> 사실 그래프의 경우 BFS가 병렬처리에 더 적합합니다. 그래프 탐색에서는 방문한 노드를 기억해야 하므로 DFS에서 병렬 처리를 하기가 쉽지 않죠.
> 하지만 트리의 경우에는 BFS와 DFS 모두 병렬 처리가 가능합니다. 다만, BFS에서 동일한 깊이에 있는 모든 노드를 병렬적으로 처리하려면 그 노드들을 다시 어떤 큐에 넣고 관리하는 추가적인 작업이 필요하며,
> 여러
> 쓰레드에서 이 큐를 접근해야 하기 때문에 thread-safe한 처리가 필요합니다.
> 반면, DFS에서는 각 자식 노드를 개별적으로 병렬 처리할 수 있기 때문에(말씀해주신 코드처럼), 별도의 자료구조를 추가하지 않고도 자연스럽게 병렬 처리를 적용할 수 있는 장점이 있습니다. 즉, DFS는 트리
> 구조
> 자체를 그대로 활용하여 병렬 처리를 할 수 있기 때문에 구현이 간단해지는 경향이 있습니다.
> 따라서 강의에서 제가 드린 말씀은 자료구조 변경 없이 병렬 처리를 하기에 무엇이 더 편한지에 대한 설명으로 봐주시면 좋을 것 같습니다.

- 정리:
    - 트리(그래프도 마찬가지) BFS에서 병렬 처리:
        - 보통 큐를 사용하여 현재 깊이(레벨)의 모든 노드를 저장한 다음, 그 다음 레벨의 모든 노드들을 큐에 넣어서 순차적으로 처리
        - 현재 레벨의 모든 노드들이 포함된 큐에 여러 스레드가 접근할 수 있어야하고 동기화 문제 발생
            - thread-safe한 ConcurrentLinkedQueue 사용하면 성능에 문제
    - 트리 DFS에서 병렬 처리:
        - 재귀적으로 자식 노드에서 독립적으로 병렬처리 가능
        - 각 자식들의 서브 트리는 서로 독립
        - 각 분기(서브 트리)를 스레드 풀에 넘기기만 하면 됨
    - 그래프 DFS에서 병렬 처리:
        - 그래프는 순환이 있을 수 있어서, 전역 방문 집합의 업데이트가 필요하고 복잡해짐
            - 전역 방문 집합은 thread-safe 한 자료구조 사용해야함
        - 트리의 경우 순환이 반드시 없기 때문에 이런 문제가 발생하지 않음

## 그래프와 깊이/너비 우선 탐색

- 그래프는 일반적인 자료구조라서 연결 리스트, 트리, 배열도 그래프로 표현할 수 있다.
    - 2차원 배열에서 BFS로 최단경로 찾기

![img_30.png](images/img_30.png)

- 그래프는 연관 있는 노드의 집합
    - 연관 있는 노드끼리 변(edge)로 연결 됨
- 연관만 있으면 되고, 더 구체적인 부모-자식 관계는 요구하지 않음
    - 즉 어떤 관계가 있는데, 부모-자식 관계 같은게 아니라 일반적인 관계
    - 어떤 공간 사이에 경로를 의미할 수도 있고(A에서 B로 갈 수 있음)
    - 친구 관계를 의미할 수 있음(A의 친구는 B,C)
- 트리는 부모-자식 관계를 요구하기 때문에 방향이 있는 그래프임
    - 추가적으로 부모는 1개라는 제약

![img_31.png](images/img_31.png)

- 지금 슬라이드에 그래프는 무방향 그래프
    - 그래서 루프로 계속 돌 수도 있음

![img_32.png](images/img_32.png)

- 이런 무방향 그래프에서 DFS-BFS를 사용하면 문제가 생길 수 있음
- 무한 루프를 방지하기 위해서는 방문했던 노드를 기억하고 재방문을 막아야함

![img_33.png](images/img_33.png)

- 무방향 그래프를 저장하기 위해서는 "인접 행렬"이라는 개념을 사용해야함
- 2차원 배열처럼 행렬로 from-to를 관리
- [인접행렬](https://ko.wikipedia.org/wiki/인접행렬)
- 아니면 [A, B, C, D] 이렇게 배열로 선언하고
    - A에서 방문할 수 있는 노드 링크드 리스트로 (B-C) 표현하는 방법도 있음

## 코드보기: 디렉터리 트리 출력하기

```java
package academy.pocu.comp3500samples.w09.directorytree;

import java.io.File;

public class Program {
    private static final int INDENT_LENGTH = 2;

    public static void main(String[] args) {
        if (args.length != 1) {
            System.err.println(String.format("Wrong number of arguments: %d", args.length));
            System.exit(1);
        }

        String path = args[0];
        File file = new File(path);

        printDirectoryTreeRecursive(file, 0);
    }

    private static void printDirectoryTreeRecursive(File file, int depth) {
        String filename = file.getName();

        String message = String.format("- %s",
                filename);
        message = padLeft(INDENT_LENGTH * depth,
                message);

        System.out.println(message);

        if (file.isDirectory()) {
            File[] children = file.listFiles();

            for (File child : children) {
                printDirectoryTreeRecursive(child,
                        depth + 1);
            }
        }
    }

    private static String padLeft(int padLength, String message) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < padLength; i++) {
            sb.append(' ');
        }

        sb.append(message);

        return sb.toString();
    }
}
```

## 틱택토 게임(미니 맥스)

- 미니 맥스 알고리듬은 체스 ai에 사용됬음

![img_34.png](images/img_34.png)

- 틱택토를 AI로 작성해보자

![img_35.png](images/img_35.png)

- 인풋:
    - 현재 보드 구성

![img_36.png](images/img_36.png)

- 총 게임 진행 경우의 수는 `9!`이라서 브루트 포스로 구현해도 되긴함
- 이 때 현재 상황에서 앞으로 놓을 모든 경우의 수를 보여주기 적합한 자료구조는 트리

![img_37.png](images/img_37.png)

- 이렇게 게임에 사용하는 트리를 "게임 트리"라고 부르기도 함

![img_38.png](images/img_38.png)

- 내 턴, 상대 턴 번갈아가면서 트리의 노드로 표현

![img_39.png](images/img_39.png)

- 여기서 가장 좋은 승리의 경로(파란색 노드)를 선택해야함

![img_40.png](images/img_40.png)

![img_41.png](images/img_41.png)

![img_42.png](images/img_42.png)

- 왼쪽에 승리 경로가 있긴한데, 상대방이 바보도 아니고
    - 어뷰징은 없다고 가정

![img_43.png](images/img_43.png)

![img_44.png](images/img_44.png)

![img_46.png](images/img_46.png)

- 상대방이 어뷰징이면 이렇게 선택할 것이다.

![img_45.png](images/img_45.png)

- 어뷰징은 없다고 가정해서, 무승부

## 틱태토 전략

![img_47.png](images/img_47.png)

- 상대방은 자신의 최대 이득을 위해 동작
- 상대방의 최대 이득을 최소화 하는 전략이 틱태토의 전략
    - 이것이 "미니 맥스"

![img_48.png](images/img_48.png)

- 바꿔서 말하면, 내 최대 손실을 최소화
- 그렇다면 여기서 문제는 손실,이득을 어떻게 평가할 것인가?
    - "평가 함수"가 필요하다

## 평가 함수

![img_49.png](images/img_49.png)

- 게임이 끝나는 지점(트리의 리프)에 점수를 평가 함수를 적용해 점수를 매김

![img_50.png](images/img_50.png)

![img_51.png](images/img_51.png)

- 그렇다면 리프가 아닌 노드는 어떻게 평가하지?

![img_52.png](images/img_52.png)

- 리프에서 부모 노드로 거슬러 올리면 됨
    - 여기서는 자식 노드가 하나라서 바로 가져올 수 있음
- 그리고 상대 입장에서 이익, 나의 입장에서 손실을 고려해야함

![img_53.png](images/img_53.png)

- 자식 노드들의 평가값이 여러 개면 최소값을 구해야함
- 깊이 2에서는 상대방의 턴이기 때문에 상대 이익의 최소값을 구하는 개념

![img_54.png](images/img_54.png)

- 깊이 1에서는 나의 턴이기 때문에 나의 이익의 최대값을 구하는 개념

## 미니 맥스 알고리듬

![img_55.png](images/img_55.png)

- 일반화하면 자기 턴에서는 최대 점수, 상대 턴에서는 최소 점수

![img_56.png](images/img_56.png)

- 번외로 AI에 대해서
    - 예전의 주류 ai 알고리듬과 머신 러닝은 다름
    - 요즘은 머신 러닝이 대세가 되서 사실 거의 동일한 용어가 됬음

![img_57.png](images/img_57.png)

- 상대방도 최적의 결정을 내린다고 가정
    - 이게 중요함
- 순서와 전략이 있어야함
- 포커, 블루마블과 같은 운이 포함된 게임에는 비적합

## 깊이 제한 미니맥스

![img_58.png](images/img_58.png)

- 틱태토 게임에서 가장 많은 경우의 수를 고려할 때는?
    - 게임을 처음 시작할 때
    - 루트

- 만약 제한된 하드웨어에서 모든 계산을 할 수 없는 경우
    - 리프까지 갈 수 없을 때

![img_59.png](old_note/COMP3500/week9/images/img_59.png)

- 특정 깊이까지만 계산
    - 근사치일 수 밖에 없음
    - 휴리스틱한 평가 함수(evaluation function)
        - 참고로 머신 러닝에서도 모든 데이터를 다 훑을 수 없어서 이렇게 접근함

![img_60.png](old_note/COMP3500/week9/images/img_60.png)

- 여기서 전략이 X를 놓을 때 X가 2개가 되는 경우면 이길 확률이 높아짐
- 이를 공식화 하면
    - 한 줄에 x가 2개, 빈 칸이 1개 있으면 +2점을 주도록 평가 함수를 고안할 수 있음

![img_61.png](images/img_61.png)

- 결국 평가함수를 정하는 건 프로그래머의 역량
    - 이 평가함수에 따라 알고리듬의 성능이 결정

![img_62.png](images/img_62.png)

![img_63.png](images/img_63.png)

- 체스에는 위와 같이 점수를 줄 수 있음
    - 말의 중요도에 따라

## 미니맥스 알고리듬의 성능

![img_64.png](images/img_64.png)

- 성능을 개선하기 위해서
    - 방문 여부를 확인해서 재방문을 막거나
    - 끝까지 평가하지 않아도 다른 경로보다 안 좋은게 확실하면 더 이상 평가하지 않는 개념
        - alpha-beta pruning

## 코드보기: 틱택토

```java
package academy.pocu.comp3500samples.w09.tictactoe;

import java.util.ArrayList;

public class TicTacToe {
    public static final int BOARD_SIZE = 9;

    private TicTacToe() {
    }

    public static int getBestMoveIndex(final Player[] board, final Player player) {
        assert (board.length == BOARD_SIZE);

        Player opponent = player == Player.O
                ? Player.X : Player.O;

        Move move = getBestMoveRecursive(board,
                player,
                opponent,
                player);

        return move.getIndex();
    }

    private static Move getBestMoveRecursive(final Player[] board, final Player player, final Player opponent, final Player turn) {
        assert (board.length == BOARD_SIZE);

        if (hasWon(board, opponent)) {
            return new Move(-1, -10);
        }

        if (hasWon(board, player)) {
            return new Move(-1, 10);
        }

        ArrayList<Integer> availableIndexes = getEmptyIndexes(board);
        if (availableIndexes.isEmpty()) {
            return new Move(-1, 0);
        }

        ArrayList<Move> moves = new ArrayList<>();

        for (int i = 0; i < availableIndexes.size(); ++i) {
            int index = availableIndexes.get(i);

            Player[] newBoard = copyBoard(board);

            newBoard[index] = turn;

            Player nextPlayer = turn == player
                    ? opponent : player;

            int score = getBestMoveRecursive(newBoard,
                    player,
                    opponent,
                    nextPlayer)
                    .getScore();

            Move move = new Move(index, score);
            moves.add(move);
        }

        if (turn == player) {
            return getMaxScoreMove(moves);
        }

        return getMinScoreMove(moves);
    }

    private static Move getMaxScoreMove(final ArrayList<Move> moves) {
        assert (!moves.isEmpty());

        Move bestMove = moves.get(0);
        for (int i = 1; i < moves.size(); ++i) {
            if (moves.get(i).getScore() > bestMove.getScore()) {
                bestMove = moves.get(i);
            }
        }

        return bestMove;
    }

    private static Move getMinScoreMove(final ArrayList<Move> moves) {
        assert (!moves.isEmpty());

        Move bestMove = moves.get(0);
        for (int i = 0; i < moves.size(); ++i) {
            if (moves.get(i).getScore() < bestMove.getScore()) {
                bestMove = moves.get(i);
            }
        }

        return bestMove;
    }

    private static Player[] copyBoard(final Player[] board) {
        assert (board.length == BOARD_SIZE);

        Player[] newBoard = new Player[board.length];

        for (int i = 0; i < board.length; ++i) {
            newBoard[i] = board[i];
        }

        return newBoard;
    }

    private static ArrayList<Integer> getEmptyIndexes(final Player[] board) {
        assert (board.length == BOARD_SIZE);

        ArrayList<Integer> indexes = new ArrayList<>();

        for (int i = 0; i < board.length; ++i) {
            if (board[i] == null) {
                indexes.add(i);
            }
        }

        return indexes;
    }

    private static boolean hasWon(final Player[] board, final Player player) {
        assert (board.length == BOARD_SIZE);

        return (board[0] == player && board[1] == player && board[2] == player)
                || (board[3] == player && board[4] == player && board[5] == player)
                || (board[6] == player && board[7] == player && board[8] == player)
                || (board[0] == player && board[3] == player && board[6] == player)
                || (board[1] == player && board[4] == player && board[7] == player)
                || (board[2] == player && board[5] == player && board[8] == player)
                || (board[0] == player && board[4] == player && board[8] == player)
                || (board[2] == player && board[4] == player && board[6] == player);
    }
}
```

- 미니 맥스는 DFS를 바탕으로 한다는 것을 알 수 있음