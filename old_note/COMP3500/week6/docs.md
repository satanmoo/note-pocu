# Week6

## 트리

![img.png](old_note/COMP3500/week6/images/img.png)

### Node

![img_1.png](old_note/COMP3500/week6/images/img_1.png)

- 실제로 저장하는 데이터

### Root

![img_2.png](old_note/COMP3500/week6/images/img_2.png)

- 최상위에 위치한 데이터
    - 시작 노드
    - 모든 노드와 직간접적으로 연결됨

### Leaf

![img_3.png](old_note/COMP3500/week6/images/img_3.png)

- 더 이상 가지가 없는 노드

## 부모-자식 관계

![img_4.png](old_note/COMP3500/week6/images/img_4.png)

- 자식은 정확히 depth 1 차이

![img_5.png](old_note/COMP3500/week6/images/img_5.png)

- 부모는 언제가 1개 노드

![img_6.png](old_note/COMP3500/week6/images/img_6.png)

- 조부모

![img_7.png](old_note/COMP3500/week6/images/img_7.png)

- 삼촌(uncle)

![img_8.png](old_note/COMP3500/week6/images/img_8.png)

- 형제(sibling)

### 깊이(depth)

![img_9.png](old_note/COMP3500/week6/images/img_9.png)

- 루트를 기준으로 경로 길이

### 높이(height)

![img_10.png](old_note/COMP3500/week6/images/img_10.png)

- 리프를 기준으로 '최대' 길이

![img_11.png](old_note/COMP3500/week6/images/img_11.png)

![img_12.png](old_note/COMP3500/week6/images/img_12.png)

![img_13.png](old_note/COMP3500/week6/images/img_13.png)

- 트리의 높이 == 루트에서 시작해 리프까지 가는 가장 긴 경로 == 루트 노드의 높이

### 하위 트리(subtree)

![img_14.png](old_note/COMP3500/week6/images/img_14.png)

![img_15.png](old_note/COMP3500/week6/images/img_15.png)

![img_16.png](old_note/COMP3500/week6/images/img_16.png)

- 재귀 구조

## 트리와 재귀

![img_17.png](old_note/COMP3500/week6/images/img_17.png)

![img_18.png](old_note/COMP3500/week6/images/img_18.png)

- 나
- 왼쪽 하위 트리 재귀로 합 구하기
- 오른쪽 하위 트리 재귀로 합 구하기

![img_19.png](old_note/COMP3500/week6/images/img_19.png)

![img_20.png](old_note/COMP3500/week6/images/img_20.png)

![img_21.png](old_note/COMP3500/week6/images/img_21.png)

![img_22.png](old_note/COMP3500/week6/images/img_22.png)

## 트리의 저장법

![img_23.png](old_note/COMP3500/week6/images/img_23.png)

![img_24.png](old_note/COMP3500/week6/images/img_24.png)

- 부모가 자식을 참조하는 직관적인 방법
    - hashset 사용해도 괜찮

![img_26.png](old_note/COMP3500/week6/images/img_26.png)

- 이게 범용적인 트리의 모습

![img_25.png](old_note/COMP3500/week6/images/img_25.png)

- 자식의 수에 제약이 있는 경우

![img_27.png](old_note/COMP3500/week6/images/img_27.png)

![img_28.png](old_note/COMP3500/week6/images/img_28.png)

![img_29.png](old_note/COMP3500/week6/images/img_29.png)

- 굳이 컬렉션을 사용하기보다는, 변수로!
- nullable
- 이렇게 자식이 최대 2개인 트리를 binary tree

![img_30.png](old_note/COMP3500/week6/images/img_30.png)

![img_31.png](old_note/COMP3500/week6/images/img_31.png)

![img_32.png](old_note/COMP3500/week6/images/img_32.png)

- 자식이 한 명이면?
- 링크드 리스트
    - 링크드 리스트는 트리의 특별한 케이스!

## 트리의 용도

![img_33.png](old_note/COMP3500/week6/images/img_33.png)

- 계층적 데이터 표현
- 효율적인 검색 알고리듬 구현 가능

## 이진 탐색 트리

- 이진 트리의 특수한 형태
- 거의 트리를 대표할 정도로 많이 사용함

![img_34.png](old_note/COMP3500/week6/images/img_34.png)

![img_35.png](old_note/COMP3500/week6/images/img_35.png)

- 양분할 때 탐색에 특화한 기준을 만들기

![img_36.png](old_note/COMP3500/week6/images/img_36.png)

- 규칙:
    - 왼쪽 자식은 부모보다 작다
    - 오른쪽 자식은 부모보다 이상
    - 같은 자식은 둘 중 하나로

![img_37.png](old_note/COMP3500/week6/images/img_37.png)

- 정렬된 트리
- 재귀적으로 읽는 순서를 지키면 정렬된 순서로 읽을 수 있음

![img_38.png](old_note/COMP3500/week6/images/img_38.png)

- 왼쪽으로 가야겠죠?

![img_39.png](old_note/COMP3500/week6/images/img_39.png)

- 왼쪽 서브 트리 모두 방문
- 6 방문
- 오른쪽 서브 트리 모두 방문

![img_40.png](old_note/COMP3500/week6/images/img_40.png)

- 위 방법을 중위 순회법
- in-order traversal

## 이진 탐색 트리와 정렬된 배열

![img_41.png](old_note/COMP3500/week6/images/img_41.png)

- 정렬된 배열과의 차이점을 기반으로 이해하기

![img_42.png](old_note/COMP3500/week6/images/img_42.png)

- 삽입/삭제 시 정렬 상태가 유지됨
    - 시간복잡도 배열보다 빠름

![img_43.png](old_note/COMP3500/week6/images/img_43.png)

- 평균적으로 배열보다 검색/삽입/삭제 모두 빠름

![img_44.png](old_note/COMP3500/week6/images/img_44.png)

## BST 탐색

![img_45.png](old_note/COMP3500/week6/images/img_45.png)

![img_46.png](old_note/COMP3500/week6/images/img_46.png)

- 이진 탐색과 동일한 개념

![img_47.png](old_note/COMP3500/week6/images/img_47.png)

- 한 줄로 자식이 나열되면 최악의 시간 복잡도
    - 연결리스트처럼 O(N)

![img_48.png](old_note/COMP3500/week6/images/img_48.png)

![img_49.png](old_note/COMP3500/week6/images/img_49.png)

- 노드를 찾는 코드

## BST 삽입

![img_50.png](old_note/COMP3500/week6/images/img_50.png)

- 노드에 자식이 2개 있는지 확인해야함
    - 자식이 2개 이미 있으면 추가할 수 없음

![img_51.png](old_note/COMP3500/week6/images/img_51.png)

- 값에 따라서 오른쪽 자식/왼쪽 자식이 결정되는데 이 때 결정되는 방향에 자식이 없어야함

![img_52.png](old_note/COMP3500/week6/images/img_52.png)

- 같은 값을 가지는 노드는 오른쪽 서브 트리로 넣는다고 가정

![img_53.png](old_note/COMP3500/week6/images/img_53.png)

![img_54.png](old_note/COMP3500/week6/images/img_54.png)

- 새로 가지를 뻗어가는 이미지
- 새로 삽입하는 노드는 언제나 리프 노드임!

## 코드보기: BST 삽입

```java
package academy.pocu.comp3500samples.w06.insert;

public class Node {
    private final int data;
    private Node left;
    private Node right;

    public Node(final int data) {
        this.data = data;
    }

    public int getData() {
        return this.data;
    }

    public Node getLeft() {
        return this.left;
    }

    public Node getRight() {
        return this.right;
    }

    public static Node insertRecursive(final Node node, int data) {
        if (node == null) {
            return new Node(data);
        }

        if (data < node.data) {
            node.left = insertRecursive(node.left, data);
        } else {
            node.right = insertRecursive(node.right, data);
        }

        return node;
    }
}
```

## BST 삭제

![img_55.png](old_note/COMP3500/week6/images/img_55.png)

- 탐색

![img_56.png](old_note/COMP3500/week6/images/img_56.png)

- 지우면?
- BST 속성을 만족함
- 왜?
    - 리프를 삭제했기 때문

![img_57.png](old_note/COMP3500/week6/images/img_57.png)

- 탐색해서 못 찾으면 당연히 못 지우죠

![img_58.png](old_note/COMP3500/week6/images/img_58.png)

- 리프가 아닌 노드를 지우면?

![img_59.png](old_note/COMP3500/week6/images/img_59.png)

- BST 속성을 만족하지 않음

![img_60.png](old_note/COMP3500/week6/images/img_60.png)

- 삭제된 노드의 자리에 새로운 노드를 넣어야함
- 뭘 넣을까?
- 힌트는 리프를 삭제했을 때 BST가 유지된다는 점
- BST는 정렬된 배열과 개념상 같기 때문에 정렬된 배열에서 어떤 원소를 지우고 이를 정렬된 배열 상태로 유지하려면?

![img_61.png](old_note/COMP3500/week6/images/img_61.png)

![img_62.png](old_note/COMP3500/week6/images/img_62.png)

- 당기던가 밀던가

![img_63.png](old_note/COMP3500/week6/images/img_63.png)

![img_64.png](old_note/COMP3500/week6/images/img_64.png)

- 당기는 방법을 트리에서 in-order successor 을 사용하는 방법이라고 부름
- 오른쪽 서브트리에서 최소값 찾기(가장 왼쪽 리프)

![img_65.png](old_note/COMP3500/week6/images/img_65.png)

- 미는 방법을 트리에서 in-order predecessor 을 사용하는 방법이라고 부름
- 왼쪽 서브트리에서 최대값 찾기(가장 오른쪽 리프)

### 삭제 전략(알고리듬)

![img_66.png](old_note/COMP3500/week6/images/img_66.png)

- 검색

![img_67.png](old_note/COMP3500/week6/images/img_67.png)

- in-order predecessor 찾기

![img_68.png](old_note/COMP3500/week6/images/img_68.png)

- swap
- 값 교환

![img_69.png](old_note/COMP3500/week6/images/img_69.png)

- 리프 노드 삭제

### 삭제의 시간복잡도

![img_70.png](old_note/COMP3500/week6/images/img_70.png)

```java
public class BST {
    // BST Node class
    class Node {
        int key;
        Node left, right;

        Node(int key) {
            this.key = key;
            left = right = null;
        }
    }

    Node root;

    public BST() {
        root = null;
    }

    // Insert a key into the BST.
    public void insert(int key) {
        root = insertRecursive(root, key);
    }

    private Node insertRecursive(Node root, int key) {
        if (root == null) {
            return new Node(key);
        }
        if (key < root.key) {
            root.left = insertRecursive(root.left, key);
        } else if (key > root.key) {
            root.right = insertRecursive(root.right, key);
        }
        return root;
    }

    // Delete a key from the BST using in-order successor.
    public void deleteUsingSuccessor(int key) {
        root = deleteUsingSuccessorRecursive(root, key);
    }

    private Node deleteUsingSuccessorRecursive(Node root, int key) {
        if (root == null) return root;

        if (key < root.key) {
            root.left = deleteUsingSuccessorRecursive(root.left, key);
        } else if (key > root.key) {
            root.right = deleteUsingSuccessorRecursive(root.right, key);
        } else {
            // Node to be deleted found.
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            }
            // Node with two children: Get the in-order successor (smallest in right subtree)
            Node successor = minValueNode(root.right);
            // Copy the successor's value to this node
            root.key = successor.key;
            // Delete the successor
            root.right = deleteUsingSuccessorRecursive(root.right, successor.key);
        }
        return root;
    }

    private Node minValueNode(Node root) {
        Node current = root;
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }

    // Delete a key from the BST using in-order predecessor.
    public void deleteUsingPredecessor(int key) {
        root = deleteUsingPredecessorRec(root, key);
    }

    private Node deleteUsingPredecessorRec(Node root, int key) {
        if (root == null) return root;

        if (key < root.key) {
            root.left = deleteUsingPredecessorRec(root.left, key);
        } else if (key > root.key) {
            root.right = deleteUsingPredecessorRec(root.right, key);
        } else {
            // Node to be deleted found.
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            }
            // Node with two children: Get the in-order predecessor (largest in left subtree)
            Node predecessor = maxValueNode(root.left);
            // Copy the predecessor's value to this node
            root.key = predecessor.key;
            // Delete the predecessor
            root.left = deleteUsingPredecessorRec(root.left, predecessor.key);
        }
        return root;
    }

    private Node maxValueNode(Node root) {
        Node current = root;
        while (current.right != null) {
            current = current.right;
        }
        return current;
    }

    // In-order traversal for printing
    public void inorder() {
        inorderRec(root);
        System.out.println();
    }

    private void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.key + " ");
            inorderRec(root.right);
        }
    }

    // Main method for testing
    public static void main(String[] args) {
        BST bst = new BST();
        bst.insert(50);
        bst.insert(30);
        bst.insert(20);
        bst.insert(40);
        bst.insert(70);
        bst.insert(60);
        bst.insert(80);

        System.out.print("Original Inorder: ");
        bst.inorder();

        // Delete node with two children using in-order successor
        bst.deleteUsingSuccessor(50);
        System.out.print("After deleting 50 (using successor): ");
        bst.inorder();

        // For demonstration, insert 50 again.
        bst.insert(50);

        // Delete node with two children using in-order predecessor
        bst.deleteUsingPredecessor(50);
        System.out.print("After deleting 50 (using predecessor): ");
        bst.inorder();
    }
}
```

## 트리 순회

![img_71.png](old_note/COMP3500/week6/images/img_71.png)

![img_72.png](old_note/COMP3500/week6/images/img_72.png)

- 현재 노드의 위치에따라 순회 방식이 결정

## 중위 순회

![img_73.png](old_note/COMP3500/week6/images/img_73.png)

## 전위 순회

![img_74.png](old_note/COMP3500/week6/images/img_74.png)

![img_75.png](old_note/COMP3500/week6/images/img_75.png)

![img_76.png](old_note/COMP3500/week6/images/img_76.png)

![img_77.png](old_note/COMP3500/week6/images/img_77.png)

![img_78.png](old_note/COMP3500/week6/images/img_78.png)

- 트리 복사에 사용됨
- 새로운 트리를 만드는 과정에서 자연스러운 순서는
    - 부모 만들고
    - 자식 만들고
- 직관적인 방식
    - 다른 순회로 할 수도 있는데 직관적이지 못함

![img_79.png](old_note/COMP3500/week6/images/img_79.png)

- 중위 표기법
- 사람에게 익숙한 수식은 중위 표기법을 사용함

![img_80.png](old_note/COMP3500/week6/images/img_80.png)

- 전위 표기법
- 연산자와 괄호의 우선순위가 사라지고 왼쪽에서 부터 읽으면 됨
- E,D 읽고 스택에 push
- '+' 연산자 읽으면 앞의 두 개 pop 해서 연산
- D + E 결과를 다시 스택에 push
- C, B 스택에 push
- '-' 연산자 만나서 앞의 두 개(C, B) pop 해서 연산
- B - C 스택에 push
- A 스택에 push
- '*' 연산자 만나서 A, B - C pop 해서 연산
- A * (B - C) 스택에 push
- '-' 연산자 만나서 A * (B - C), D + E pop 해서 연산
- 결과는 A * (B - C) - (D + E)

## 후위 순회

![img_81.png](old_note/COMP3500/week6/images/img_81.png)

- 위의 전위 표기법은 오른쪽에서 왼쪽 방향으로 읽음
- 컴퓨터는 왼쪽에서 오른쪽으로 읽는게 편함

## 순회를 어떻게 선택할 것인가?

![img_82.png](old_note/COMP3500/week6/images/img_82.png)

- 리프보다 루트를 먼저 봐야 한다면?
    - 전위 순회
- 리프를 다 본다음에 다른 노드를 봐야한다면?
    - 후위 순회
- 순서대로 봐야 한다면?
    - 중위 순회

![img_83.png](old_note/COMP3500/week6/images/img_83.png)

- BST 요약!

![img_84.png](old_note/COMP3500/week6/images/img_84.png)

- 힙도 이진트리에 어떤 규칙을 추가한 것!
- 힙 정렬에 사용함

## 코드보기: 전위 순회

```java
package academy.pocu.comp3500samples.w06.preorder;

import java.util.Stack;

public class Node {
    private final int data;
    private Node left;
    private Node right;

    public Node(final int data) {
        this.data = data;
    }

    public int getData() {
        return this.data;
    }

    public Node getLeft() {
        return this.left;
    }

    public Node getRight() {
        return this.right;
    }

    public static Node insertRecursive(final Node root, int data) {
        if (root == null) {
            return new Node(data);
        }

        if (data < root.data) {
            root.left = insertRecursive(root.left, data);
        } else {
            root.right = insertRecursive(root.right, data);
        }

        return root;
    }

    public static void traversePreOrderRecursive(final Node node) {
        if (node == null) {
            return;
        }

        System.out.println(node.data);
        traversePreOrderRecursive(node.left);
        traversePreOrderRecursive(node.right);
    }

    public static void traversePreOrder(final Node root) {
        if (root == null) {
            return;
        }

        Stack<Node> nodes = new Stack<>();

        nodes.push(root);

        while (!nodes.empty()) {
            Node node = nodes.pop();

            System.out.println(node.data);

            if (node.right != null) {
                nodes.push(node.right);
            }

            if (node.left != null) {
                nodes.push(node.left);
            }
        }
    }
}
```

- traversePreOrder 함수
- 재귀를 흉내내기 위해 스택 사용
- pop 하는 순서가 방문 순서
    - 오른쪽 자식부터 스택에 넣어야 왼쪽 자식부터 방문할 수 있음

## 코드보기: 깊은 트리 복사

```java
package academy.pocu.comp3500samples.w06.copytree;

public class Node {
    private int data;
    private Node left;
    private Node right;

    public Node(final int data) {
        this.data = data;
    }

    public int getData() {
        return this.data;
    }

    public void setData(final int data) {
        this.data = data;
    }

    public Node getLeft() {
        return this.left;
    }

    public Node getRight() {
        return this.right;
    }

    public static Node insertRecursive(final Node node, int data) {
        if (node == null) {
            return new Node(data);
        }

        if (data < node.data) {
            node.left = insertRecursive(node.left, data);
        } else {
            node.right = insertRecursive(node.right, data);
        }

        return node;
    }

    public static Node copyRecursive(final Node node) {
        if (node == null) {
            return null;
        }

        Node newNode = new Node(node.data);
        newNode.left = copyRecursive(node.left);
        newNode.right = copyRecursive(node.right);

        return newNode;
    }

    public static void traverseInOrderRecursive(final Node node) {
        if (node == null) {
            return;
        }

        traverseInOrderRecursive(node.left);
        System.out.println(node.data);
        traverseInOrderRecursive(node.right);
    }
}
```

- 전위 순위는 깊은 복사에 사용됨
- 참고로 setter은 깊은 복사 테스트 용
    - 복사본을 변경해도 원본이 영향을 받지 않음
- 복사본에 insert 해도 원본이 영향 받지 않음

## 레드-블랙 트리

![img_85.png](old_note/COMP3500/week6/images/img_85.png)

- 1비트 추가 정보(Red or Black)

![img_86.png](old_note/COMP3500/week6/images/img_86.png)

- self-balancing
    - 높이를 최소하는게 목표
    - 삽입과 삭제 시 self-balancing 작업이 발생함

## 레드-블랙 트리의 특성

![img_87.png](old_note/COMP3500/week6/images/img_87.png)

- 모든 노드는 레드 or 블랙

![img_88.png](old_note/COMP3500/week6/images/img_88.png)

- 루트 노드는 항상 블랙

![img_89.png](old_note/COMP3500/week6/images/img_89.png)

- 레드-블랙 트리에서는 널 포인터가 리프 노드임
- 리프 노드는 언제나 블랙

![img_90.png](old_note/COMP3500/week6/images/img_90.png)

- 레드의 자식은 모두 블랙
- 레드의 자식이 레드면 안 됨!

![img_91.png](old_note/COMP3500/week6/images/img_91.png)

- 어떤 노드와 리프 사이의 최대 깊이가 높이
- 그래서 어떤 노드와 어떤 리프 사이에 있는 블랙 노드의 수를 블랙 높이라고 부름
- 어떤 노드의 모든 블랙 높이는 동일함
    - 원래의 높이는 '최대' 개념이 들어갔는데
    - 이제는 사라짐

![img_92.png](old_note/COMP3500/week6/images/img_92.png)

- 블랙 노드에만 있는 제약 == 블랙 노드의 수를 이 규칙에 기준으로 사용한다는 의미

![img_93.png](old_note/COMP3500/week6/images/img_93.png)

- 리프 노드는 데이터를 담지 않음
    - 다만 검은색
- 루트의 블랙 높이 == 레드-블랙 트리의 블랙 높이
- 어떤 노드의 모든 블랙 높이는 동일하기 때문에, 루트 노드의 모든 블랙 높이는 동일함
    - 루트에서 모든 리프노드 사이에 있는 블랙 노드 수는 같음

### 레드-블랙 트리의 특성으로 얻는 것

![img_94.png](old_note/COMP3500/week6/images/img_94.png)

- 한쪽으로 완벽하게 쏠려서 최악의 탐색 시간 복잡도를 막을 수 있음
- 최대 리프 깊이가 최소 리프 깊이의 2배를 넘지 못함

### 레드-블랙 트리 특성의 증명

- '최대 리프 깊이가 최소 리프 깊이의 2배를 넘지 못함'을 증명하자

![img_95.png](old_note/COMP3500/week6/images/img_95.png)

- 블랙 높이가 x인 트리 가정
    - 루트 노드와 모든 리프 사이에 블랙 노드가 x개 있어야함
- from 루트 to 리프 길이가 최소가 되려면 레드 노드가 없으면 됨

![img_96.png](old_note/COMP3500/week6/images/img_96.png)

- 이 상태에서 레드 노드를 최대한 집어넣기

![img_97.png](old_note/COMP3500/week6/images/img_97.png)

- 레드 노드의 자식은 모두 블랙이기 때문에 블랙 노드 사이에 하나씩만 넣을 수 있음

![img_98.png](old_note/COMP3500/week6/images/img_98.png)

- 그래서 최대 길이는 2x개 노드

## 레드-블랙 트리의 연산

![img_99.png](old_note/COMP3500/week6/images/img_99.png)

- 탐색은 BST와 동일
    - O(logn) 보장

## 레드-블랙 트리의 삽입 방법

![img_100.png](old_note/COMP3500/week6/images/img_100.png)

- 패턴에서 규칙을 찾아야함
    - 어려움

![img_101.png](old_note/COMP3500/week6/images/img_101.png)

- 삽입/삭제의 원리 정도는 감을 잡고

![img_102.png](old_note/COMP3500/week6/images/img_102.png)

- 이것저것 해보면서 감 잡고

![img_103.png](images/img_103.png)

- 이해하려고 노력하는 과정에서 배우는게 있음

![img_104.png](images/img_104.png)

- BST 삽입의 성질 때문에 언제나 삽입되는 노드는 리프 노드
- 추가적으로 이 리프 노드의 색은 레드
- 그리고 재귀적으로 트리 고치기!

### 삽입 case 1

![img_105.png](images/img_105.png)

- 처음으로 삽입
- 언제나 추가하는 노드는 레드!

![img_106.png](images/img_106.png)

- 리프 노드긴 하지만 실제로는 널 노드까지 보여주는게 레드-블랙 트리에서 보기 좋음

![img_107.png](images/img_107.png)

- 지금 레드-블랙 트리의 성질을 만족하지 못함
    - 루트 노드가 레드임!

![img_108.png](images/img_108.png)

- 색을 바꾸면 성질 만족

![img_109.png](images/img_109.png)

- N(새로 추가한 노드)가 루트인 경우 색바꾸면 끝!!

### 삽입 case 2

![img_110.png](images/img_110.png)

- BST 삽입 성질에 따라 왼쪽으로 삽입

![img_111.png](images/img_111.png)

- 레드-블랙 트리 성질을 만족하는데?

![img_112.png](images/img_112.png)

![img_113.png](images/img_113.png)

- 이 case를 일반화:
    - N(새로 추가한 노드)의 부모(P)가 블랙일 때
    - 아직 확정은 아님
    - 귀납적으로 여러 사례를 확인해보자

![img_114.png](images/img_114.png)

- 이런 사례는요?
- 부모(P)가 블랙이고, sibling이 블랙

![img_115.png](images/img_115.png)

- 이런 레드-블랙 트리가 존재할 수 있냐?

![img_116.png](images/img_116.png)

- 루트의 블랙 높이가 서로 다른데?
- 따라서 논할 가치가 없음

![img_117.png](images/img_117.png)

- 이런 경우는?
- 레드-블랙 트리 만족하네용

![img_118.png](images/img_118.png)

- 추가해봅시다!
- BST 성질에 따라 15 노드 왼쪽에 삽입
- 새로 삽입하는 노드는 레드로!
- 삽입 후 레드-블랙 트리의 성질을 만족함

![img_119.png](images/img_119.png)

- P가 블랙인 경우 일반화 가능
    - P의 자식이 없는 경우
    - P의 자식(N의 형제)가 레드인 경우

![img_120.png](images/img_120.png)

- 잠깐만!
- P의 자식(N의 형제)가 레드인 경우에서 자식이 존재하는 경우는요?

![img_121.png](images/img_121.png)

- 존재할 수 없음
- 만약 레드 자식이 존재한다고 가정하면, 레드-블랙 트리의 조건을 만족하지 못함
    - 레드의 자식은 반드시 블랙!
- 블랙 자식이 존재한다고 가정해도, 레드-블랙 트리의 조건을 만족하지 못함
    - 루트 노드로 부터 블랙 높이가 달라집니다

![img_122.png](images/img_122.png)

![img_123.png](images/img_123.png)

### 번외 테크닉: 두 자식이 같은 색!

![img_124.png](images/img_124.png)

![img_125.png](images/img_125.png)

- 두 자식이 같은 색

![img_126.png](images/img_126.png)

- 루트에서 모든 블랙 높이는 동일

![img_127.png](images/img_127.png)

- 두 자식이 모두 같은 색이라서 각 자식의 블랙 높이는 모두 동일함
    - 10에서 블랙 높이 == 20에서 블랙 높이
    - 두 자식이 같은 색이니까! 당연하죠?

![img_128.png](images/img_128.png)

- 두 자식이 같은 색이기 때문에 두 자식의 하위 트리의 블랙 높이도 같음
- 하위 트리의 블랙 높이가 같아야지
    - 10, 15를 포함해서 계산한 블랙 높이가 같아짐
    - 이 값이 루트에서 구한 블랙 높이

### 삽입 case 3

![img_129.png](images/img_129.png)

- P(부모) 레드, U(부모의 형제) 레드

![img_130.png](images/img_130.png)

- BST 성질에 따라 삽입

![img_131.png](images/img_131.png)

- 레드 노드의 자식은 모두 블랙이어야 하지만 만족하지 못함!

![img_132.png](images/img_132.png)

- 삽입한 녀석을 블랙으로 바꿔보았다

![img_133.png](images/img_133.png)

- 블랙 높이가 동일해야하는데 만족하지 못함

![img_134.png](images/img_134.png)

- P를 블랙으로 바꿔보았다

![img_135.png](images/img_135.png)

- 다시 블랙 높이 성질을 만족하지 못함 ㅠㅠ

![img_136.png](images/img_136.png)

- 왜 이렇게 고치는 방향이 문제가 있을까?
- 루트 노드 기준으로 왼쪽 하위 트리에 블랙 노드가 추가될 수 밖에 없기 때문임

![img_137.png](images/img_137.png)

- 그렇다면 N,P 를 블랙으로 바꾸고 추가적으로 루트 노드 기준 오른쪽 하위 노드에도 블랙 노드를 추가해볼까?

![img_138.png](images/img_138.png)

![img_139.png](images/img_139.png)

- 우선 U 를 블랙으로!

![img_140.png](images/img_140.png)

- 그리고 N 을 블랙으로 바꿨는데, 만족 못함

![img_141.png](images/img_141.png)

- P를 블랙으로 바꾸면 되네?!

![img_142.png](images/img_142.png)

### 삽입 case 3 더 일반화!

![img_143.png](images/img_143.png)

![img_144.png](images/img_144.png)

- 재귀적으로 같은 해법을 사용해보죠

![img_145.png](images/img_145.png)

- 새로운 루트(25)기준으로 왼쪽 서브트리의 블랙 높이가 늘어났음
- 만족 못함 ㅠㅠ

![img_146.png](images/img_146.png)

- N(새로 추가한 노드) 기준 GP(조부모, 15)를 레드로!

![img_147.png](images/img_147.png)

- 이렇게 조부모의 색을 바꾸는 방식이 더 일반화된 방식

![img_148.png](images/img_148.png)

- 이렇게 바꾸면

![img_149.png](images/img_149.png)

- 루트 노드가 레드인데?

![img_150.png](images/img_150.png)

- 이건 삽입 case 1 처럼 해결!
- 이 케이스를 P == RED, U == RED 로 정리할 수 있음
    - GP == BLACK
    - 왜 조부모는 BLACK 일 수 밖에 없을까?
    - 레드 노드의 자식은 모두 블랙이어야해서, 조부모가 레드가 되면 안 되용

### 삽입 case 4

![img_151.png](images/img_151.png)

- 여기서 만약 루트가 레드라면?

![img_152.png](images/img_152.png)

- 루트가 레드가 되면 레드-블랙 트리가 아니죠

![img_153.png](images/img_153.png)

- 그래서 루트를 또 추가했음

![img_154.png](images/img_154.png)

- 레드 노드의 자식이 모두 블랙이라는 조건을 만족하지 못함..

- 여기서 고칠 때 위로 올라가면서 고쳐보자
- 아래 서브 트리만 봤을 때 이미 레드-블랙 트리의 조건을 만족하잖어

![img_155.png](images/img_155.png)

- 노드 15를 기준으로 위로 재귀적으로 풀어보자
    - 25 P
    - nil U
    - 30 GP
- 근데 nil이니까 블랙 노드 아무거나 넣어서 풀어보죠
    - 넣을 때 BST 성질은 만족하게 40정도 값

![img_156.png](images/img_156.png)

- 이 case 일반화하면 P == RED, U == BLACK

![img_157.png](images/img_157.png)

- P를 블랙으로?
- 안 되죠

![img_158.png](images/img_158.png)

![img_159.png](images/img_159.png)

![img_160.png](images/img_160.png)

- GP 내려가고

![img_161.png](images/img_161.png)

- P 올라가고
- P 의 오른쪽 서브트리는 BST의 성질에 따라 GP의 왼쪽 서브트리가 됨

![img_162.png](images/img_162.png)

![img_163.png](images/img_163.png)

- 규칙이 많이 깨졌는데요?

![img_164.png](images/img_164.png)

- GP, P 의 색을 서로 교환하면?
- 와!

![img_165.png](images/img_165.png)

### 삽입 case 5

![img_166.png](images/img_166.png)

- case 4에서 루트를 레드로 바꾸고, GP를 추가한건 동일함
- 이번에는 루트 오른쪽에 서브트리에 노드들이 존재함

![img_167.png](images/img_167.png)

- 비슷해 보이니까 회전 기기

![img_168.png](images/img_168.png)

![img_169.png](images/img_169.png)

- 밸런스가 맞기 어려워보이는데?

![img_170.png](images/img_170.png)

- 이거를 트리 안쪽에 있다고 표현함
- case 4는 트리 바깥쪽에 있다고 표현함
- 그래서 안쪽 -> 바깥쪽으로 수정

![img_171.png](images/img_171.png)

- 참고로 회전해도 신기하게 BST의 속성은 안 깨짐
    - 당연하죠? BST가 정렬되어있는데, 밀기만 한다고 정렬 순서가 바뀌지는 않으니..

![img_172.png](images/img_172.png)

- 왼쪽으로 회전해서 안쪽 -> 바깥쪽으로 수정

![img_173.png](images/img_173.png)

- 회전할 서브트리가 바깥쪽에 있게 됨

![img_174.png](images/img_174.png)

- 이제 case4 처럼 오른쪽 회전해서 풀면

![img_175.png](images/img_175.png)

- P, GP 교환까지 하면 끝!

## 레드-블랙 트리의 삽입 전략 정리

![img_176.png](images/img_176.png)

- 레드-블랙 트리의 특성을 고치는 과정에서 재귀적으로 위로 올라가면서 색상 바꾸고, 회전
    - O(logn)

![img_177.png](images/img_177.png)

- 새 노드가 오른쪽에 추가되도 비슷한데, 트리 회전 방향만 달라짐!

![img_178.png](images/img_178.png)

![img_179.png](images/img_179.png)

![img_180.png](images/img_180.png)

- G 부터 다시 재귀적으로

![img_181.png](images/img_181.png)

- N이 안쪽에 있는 경우 왼쪽으로 회전하기
- 참고로 P, N 하위에 검정색 점은 다른 서브트리(세모)보다 블랙 높이가 1 높다는 걸 의미함

![img_182.png](images/img_182.png)

- N이 바깥쪽에 있으면, 오른쪽으로 회전하고
- P, GP 색 바꾸기!

## 레드-블랙 트리 삭제

![img_183.png](images/img_183.png)

- 케이스 6개 + 전처리

![img_184.png](images/img_184.png)

- 교훈만 얻자

![img_185.png](images/img_185.png)

![img_186.png](images/img_186.png)

- 지우려는 값을 찾기

![img_187.png](images/img_187.png)

- 값만 복사
- 색은 그대로

![img_188.png](images/img_188.png)

- 지울 대상 지우기

![img_189.png](images/img_189.png)

- 자식을 처리해야함

![img_190.png](images/img_190.png)

- 자식을 지운 대상 위치로

![img_191.png](images/img_191.png)

- 레드-블랙 트리의 특성을 유지하기 위한 매커니즘을 공부

![img_192.png](images/img_192.png)

- 값을 복사하고, M을 지우는 시점을 생각
- BST 에서 노드를 지우는 방법
    - in-order successor
    - in-order predecessor
- M 위치에 올 노드는(C) 오른쪽 하위 트리의 최소값 또는 왼쪽 하위 트리의 최대값
- in-order successor 예시로, 오른쪽 하위 트리의 최소값이라고 가정하면
- 오른쪽 하위 트리의 최소값이 M 위치로 오게됬을 때, M의 왼쪽 자식은 없음
    - M은 이미 서브 트리의 최소값이거든
    - 왼쪽 자식에는 더 작은 값이 들어가야함

![img_193.png](images/img_193.png)

- M에 위치에 들어갈 노드는
    - 자식이 모두 NIL
    - 왼쪽 자식만!
- 즉 중요한 것은 in-order successor, in-order predecessor 모두 자식이 2개일 수 없다는 것

### 삭제 case 1

![img_194.png](images/img_194.png)

![img_195.png](images/img_195.png)

- 지울 노드를 M으로 표기

![img_196.png](images/img_196.png)

- 자식 둘 중 아무거나 C

![img_197.png](images/img_197.png)

- C를 올려서 교체하면 N

![img_198.png](images/img_198.png)

- 레드 + 자식노드가 없는 노드를 지우면 레드-블랙 트리 그대로 유지

### 삭제 case 2

![img_199.png](images/img_199.png)

- 4랑 8 값 교체
- 색은 그대로

![img_200.png](images/img_200.png)

- M 노드 지우고

![img_201.png](images/img_201.png)

- C 올라가고, N이 됬음

![img_202.png](images/img_202.png)

- 레드-블랙 트리 성질이 유지됨

### 삭제 case 3

![img_203.png](images/img_203.png)

![img_204.png](images/img_204.png)

![img_205.png](images/img_205.png)

![img_206.png](images/img_206.png)

- 레드-블랙 트리 성질이 유지됨

### 이게 왜 괜찮지?

![img_207.png](images/img_207.png)

- 레드를 지워도 아무 문제가 없음
- 레드 노드의 자식은 유무는 아무 상관이 없음

![img_208.png](images/img_208.png)

- 40 레드 노드를 지우면?

![img_209.png](images/img_209.png)

- 블랙 높이가 바뀔까?

![img_210.png](images/img_210.png)

- 안 바뀌죠

### MC THE BLACK

![img_211.png](images/img_211.png)

![img_212.png](images/img_212.png)

- M,C 모두 레드일 수는 없죠
    - RBT 규칙

![img_213.png](images/img_213.png)

- M이 블랙, C가 레드인 경우

![img_214.png](images/img_214.png)

- in-order successor 때문에 C의 왼쪽은 NIL
    - C가 최소값이어야함!
- 그래서 C의 왼쪽 경로 높이는 1

![img_215.png](images/img_215.png)

- 레드 노드의 자식은 모두 블랙이기 때문에
- 오른쪽(60) 경로는 높이가 2

![img_216.png](images/img_216.png)

- 근데 이럴 수 있나?
- RBT 규칙에 따라 블랙 높이는 동일해야하는데?

![img_217.png](images/img_217.png)

- C의 자식이 없다는 결론에 도달한다
- 그래서 M이 블랙, C가 레드인 경우 간단하게 해결 가능

![img_218.png](images/img_218.png)

- C가 M 자리에 올라가고 N이 됨

### case 4

![img_219.png](images/img_219.png)

![img_220.png](images/img_220.png)

- 교환

![img_221.png](images/img_221.png)

- M 지우기

![img_222.png](images/img_222.png)

- C 를 M으로
- 이제 N이 됨
- 45를 블랙으로 바꾸면?

![img_223.png](images/img_223.png)

- 성질 만족함!

![img_224.png](images/img_224.png)

### case 5

![img_225.png](images/img_225.png)

![img_226.png](images/img_226.png)

- M C THE BLACK

![img_227.png](images/img_227.png)

![img_228.png](images/img_228.png)

![img_229.png](images/img_229.png)

![img_230.png](images/img_230.png)

- 15 노드를 블랙으로 바꿔도 레드-블랙 트리 성립 안 함

![img_231.png](images/img_231.png)

- RBT 성립함

![img_232.png](images/img_232.png)

### case 6

![img_233.png](images/img_233.png)

![img_234.png](images/img_234.png)

![img_235.png](images/img_235.png)

![img_236.png](images/img_236.png)

![img_237.png](images/img_237.png)

- 오른쪽 블랙 높이가 +1 되버림

![img_238.png](images/img_238.png)

- RBT 성질 만족 못함

![img_239.png](images/img_239.png)

![img_240.png](images/img_240.png)

- 왼쪽이 블랙 높이가 낮으니까 왼쪽으로 회전해보자

![img_241.png](images/img_241.png)

- RBT 성질 만족 못함

![img_242.png](images/img_242.png)

- 색깔 바꾸면 RBT 성질 만족

![img_243.png](images/img_243.png)

### case 7

![img_244.png](images/img_244.png)

![img_245.png](images/img_245.png)

![img_246.png](images/img_246.png)

![img_247.png](images/img_247.png)

- 오른쪽 높이가 낮으니까 회전을 해보자

![img_248.png](images/img_248.png)

- 방법이 없음

![img_249.png](images/img_249.png)

- 원복
- 안쪽 모양이 문제

![img_250.png](images/img_250.png)

- 왼쪽으로 회전해보자

![img_251.png](images/img_251.png)

![img_252.png](images/img_252.png)

- 색상을 바꾸고

![img_253.png](images/img_253.png)

- 오른쪽 회전

![img_254.png](images/img_254.png)

![img_255.png](images/img_255.png)

- 색 뒤집어도 OK

![img_256.png](images/img_256.png)

### case 8

![img_257.png](images/img_257.png)

![img_258.png](images/img_258.png)

### case 9

![img_259.png](images/img_259.png)

- 루트 삭제

![img_260.png](images/img_260.png)

- 오른쪽 회전이 필요해보임

![img_261.png](images/img_261.png)

- (-1)은 루트노드가 블랙이 아닌 상태

![img_262.png](images/img_262.png)

- 우선 색 바꾸기는 쉬우니깐
- 15 노드만 잘 조지면?

![img_263.png](images/img_263.png)

- RBT 성립!!

![img_264.png](images/img_264.png)

![img_265.png](images/img_265.png)

- 우리는 뭘 느껴야하는가?
- 언제 회전하고, 언제 색을 바꾸는지 감을 잡기

## 레드-브랙 트리 삭제 전략

- M,C 모두 블랙이고
- M 삭제 후, C가 M 위치로 가면서 N이 될 때 동작 시작

![img_266.png](images/img_266.png)

- 재귀적으로 동작

![img_267.png](images/img_267.png)

![img_268.png](images/img_268.png)

![img_269.png](images/img_269.png)

![img_270.png](images/img_270.png)

- 다음 단계인 case3 에서는 SL이 S로
    - 새로운 단계에서는 N 기준으로 다시 명명

![img_271.png](images/img_271.png)

- N이 NIL 인 경우 이런 트리가 생길 수 있음
- 원래 N자리에 M을 지우고 NIL 이 올라온 경우

![img_272.png](images/img_272.png)

![img_273.png](images/img_273.png)

![img_274.png](images/img_274.png)

![img_275.png](images/img_275.png)

![img_276.png](images/img_276.png)

![img_277.png](images/img_277.png)

- 가상으로 S의 부모의 왼쪽 자식이 N

![img_278.png](images/img_278.png)

- case 6으로 넘어갈 때 SL이 S로 바뀜

![img_279.png](images/img_279.png)

![img_280.png](images/img_280.png)

![img_281.png](images/img_281.png)

![img_282.png](images/img_282.png)

## 레드-블랙 트리 삭제의 시간 복잡도

![img_283.png](images/img_283.png)

- 재귀적으로 고쳐서 O(logn)
