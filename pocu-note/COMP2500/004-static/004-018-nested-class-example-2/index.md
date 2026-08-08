---
title: 비정적 내포 클래스를 사용할 경우
tags:
  - COMP2500
  - week4
aliases:
  - 비정적 내포 클래스를 사용할 경우
---
# 비정적 내포 클래스를 사용할 경우

## 비정적 내포 클래스를 사용한 버전

![nested-class-example-2-1.png](pocu-note/COMP2500/004-static/004-018-nested-class-example-2/images/nested-class-example-2-1.png)
![nested-class-example-2-2.png](pocu-note/COMP2500/004-static/004-018-nested-class-example-2/images/nested-class-example-2-2.png)

inner class(non-static nested class)에서 outer class의 멤버에 접근할 수 있음
- 접근 제어자가 private여도 접근할 수 있음
- 이전 구현은 패키지 접근 제어자를 사용했지만, 이번에는 private를 사용해 더 강한 캡슐화
- 이전 구현에서 `RecordReader`은 생성자로 `Record` 개체를 입력 받았으나, 이제는 그럴 필요가 없음
- `Record` 내부에 `RecordReader`을 구현함으로써 더 긴밀한 연관관계 형성

## 괴랄한 개체 생성

![nested-class-example-2-3.png](pocu-note/COMP2500/004-static/004-018-nested-class-example-2/images/nested-class-example-2-3.png)

`<외부 클래스 개체변수>.new` 로 생성자 호출
- 외부 클래스를 개체로 만들지 않으면 비정적 내포 클래스의 개체를 생성할 수 없음
- 생성된 내포 클래스의 개체는 외부 클래스 개체의 참조를 저장
	- `reader0`, `reader1` 모두 record의 참조를 저장
	- 따라서 비정적 내포 클래스의 개체는 외부 클래스의 private 멤버도 읽음

![nested-class-example-2-4.png](pocu-note/COMP2500/004-static/004-018-nested-class-example-2/images/nested-class-example-2-4.png)
![nested-class-example-2-5.png](pocu-note/COMP2500/004-static/004-018-nested-class-example-2/images/nested-class-example-2-5.png)
