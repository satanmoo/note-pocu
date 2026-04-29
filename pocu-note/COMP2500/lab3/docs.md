# Lab3

## 요구사항

- 블로그 글 안에 목록을 추가할 수 있는 기능
    - 클래스 하나 가지고 구현
    - 블로그 글 작성자가 추가할 수 있는 목록 단계에 제한이 없음(infinite depth)
    - 기본 글머리 기호는 언제나 *
        - 글머리 기호를 매개변수로 받는 생성자도 만들어 ListItem에 원하는 글머리 기호를 사용할 수 있게 허용할 것
        - 글머리 기호의 setter를 만들어 언제라도 글머리 기호를 변경할 수 있게 허용할 것
    - 어떤 ListItem 개체에 있는 하위 목록을 제거할 수 있는 방법을 추가할 것

## UML

- public ListItem(String text);
- public ListItem(String text, char bulletStyle);
- public getText(): List<ListItem>;
- public setText();
- public getBulletStyle(): char;
- public addSublistItem();
- public getSublistItem(int index): ListItem
    - assert (index >= 0 && index < sublist.Length)
- public toString(): String
  - 포멧에 따라 문자열 생성
- public setBulletStyle(char c);
- public removeSublistItem(int index);
    - assert (index >= 0 && index < sublist.Length)
    - 특정 위치의 하위 목록 아이템 제거

## toString() 오버라이딩

- 재귀 호출하기 편한 구조
- 상위에서 하위를 참조하는 구조

## 문자열 반복하기

```java
String repeated = "abc".repeat(12);
```

- https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#repeat(int)
- https://stackoverflow.com/questions/1235179/simple-way-to-repeat-a-string