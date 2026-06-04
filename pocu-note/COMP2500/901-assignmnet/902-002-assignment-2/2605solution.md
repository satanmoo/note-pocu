---
tags:
  - COMP2500
  - assignment2
---
스탬프 크기에 따라 가격이 결정됨
- ==규격== 개념
- 크기를 *Enum* 으로 구현하고, 가격을 *Enum* 에 저장하기?
	- [[pocu-note/COMP2500/003-object-modeling-1/003-014-modeling-8/index|모델링 8: 다시 사용성 높이기]] 참고
	- [[pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/index|참조형 인자, 열거형]] 참고 

색상은 *RGB*로 표현
- RGB 클래스에 *Enum* 으로 ==규격== 빨강, 파랑, 녹색 만들 수 있음

> [!Quote] spec
> 
> 8. 색상을 반환할 때는 RGB 값을 사용해야 합니다.

스탬프는 생성자의 인자로 다음을 받음
- RGB 타입의 색
- 크기 *Enum*
