---
title: '코드보기: 복사 생성자'
aliases:
  - "코드보기: 복사 생성자"
tags:
  - COMP2500
  - week10
---
# 코드보기: 복사 생성자

`Object.clone()` 메서드 사용보다 더 좋은 방법
- C++ 쪽에서 가져온 방법

![](pocu-note/COMP2500/010-interface/010-013-code-example/images/code-example-1.png)

복사 생성자

![](pocu-note/COMP2500/010-interface/010-013-code-example/images/code-example-2.png)
![](pocu-note/COMP2500/010-interface/010-013-code-example/images/code-example-3.png)

깊은 복사를 해주는 `Line` 클래스의 복사 생성자
- 멤버 변수인 `Point` 개체의 복사 생성자를 내부에서 호출함

![](pocu-note/COMP2500/010-interface/010-013-code-example/images/code-example-4.png)

`other.p1`, `other.p2` 멤버 변수를 바로 대입하면 참조를 복사하게 되고, 얕은 복사가 됨
- [[pocu-note/COMP2500/010-interface/010-012-object-clone/index|Object.clone()]] 참고
