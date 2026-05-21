---
tags:
  - COMP2500
  - week4
aliases:
  - 내포 클래스를 사용 안 할 경우
---
# 내포 클래스를 사용 안 할 경우

## Record 

![nested-class-example-1.png](pocu-note/COMP2500/004-static/004-017-nested-class-example/images/nested-class-example-1.png)
![nested-class-example-2.png](pocu-note/COMP2500/004-static/004-017-nested-class-example/images/nested-class-example-2.png)
![nested-class-example-3.png](pocu-note/COMP2500/004-static/004-017-nested-class-example/images/nested-class-example-3.png)
![nested-class-example-4.png](pocu-note/COMP2500/004-static/004-017-nested-class-example/images/nested-class-example-4.png)
![nested-class-example-5.png](pocu-note/COMP2500/004-static/004-017-nested-class-example/images/nested-class-example-5.png)

`Record` 클래스 내부에 한 바이트 씩 읽는 함수, 파일 시그내처를 읽는 함수를 구현하면 다음 요구사항을 만족하지 못함
- Record의 사본을 만들지 않되 여러 RecordReader을 만들고 싶음

## RecordReader

내포 클래스를 사용하지 않고 같은 패키지에 클래스를 포함하는 식으로 구현

![nested-class-example-6.png](pocu-note/COMP2500/004-static/004-017-nested-class-example/images/nested-class-example-6.png)

빈 다이아몬드는 **has-a** 관계
- `RecordReader` 가 `Record`를 참조함
- 생성자에서 Record 받고, 멤버변수로 가짐

![nested-class-example-7.png](pocu-note/COMP2500/004-static/004-017-nested-class-example/images/nested-class-example-7.png)

**has-a** 관계에서 다이아몬드가 없는 쪽 숫자
- 참조 대상이 1개
- 하나의 `Record`만 존재

![nested-class-example-8.png](pocu-note/COMP2500/004-static/004-017-nested-class-example/images/nested-class-example-8.png)

**has-a** 관계에서 다이아몬드가 있는 쪽 숫자
- 0개 이상

![nested-class-example-9.png](pocu-note/COMP2500/004-static/004-017-nested-class-example/images/nested-class-example-9.png)

has-a 관계 == 집합
- 퉁쳐서 컴포지션
- -[[pocu-note/COMP2500/002-necessity-of-oop/002-008-oop-characteristic-3/index|OOP의 특성 3]] 참고

![nested-class-example-10.png](pocu-note/COMP2500/004-static/004-017-nested-class-example/images/nested-class-example-10.png)

`canRead()` 매서드에서 `this.record.rawData.length` 로 접근할 수 있는 이유는 `Record` 클래스의 멤버 `rawData`의 접근제어자가 패키지 접근제어자이기 때문

`readByte()` 매서드에서 `this.record.rawData[thid.position++]`로 접근할 수 있는 이유도 마찬가지
- 이 매서드의 기능은 한 바이트 읽고 위치 다음에 읽을 위치를 수정

![nested-class-example-11.png](pocu-note/COMP2500/004-static/004-017-nested-class-example/images/nested-class-example-11.png)
`reader0`, `reader1` 모두 fileData의 처음부터 읽음
- `reader0`은 `readByte()` 매서드를 호출해 한 바이트 읽음
	- 이 때 P는 아스키코드 80
- `reader1`은 `readSignature()` 매서드를 호출해 4 바이트 읽고, String format으로 반환
	- String "POCU"를 반환
