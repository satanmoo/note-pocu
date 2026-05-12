---
tags:
  - COMP1000
  - week1
aliases:
  - 10진수/8진수 변환, 10진수/16진수 변환
---
# 10진수/8진수 변환, 10진수/16진수 변환
## 10진수 <-> 8진수

![img_68.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-009-dec-oct-and-dec-hex/images/dec-oct-and-dec-hex-1.png)

10진수를 8진수로 표현하기
- [[pocu-note/COMP1000/001-number-system-bits-and-bytes/001-007-dec-to-bin/index|10진수를 2진수로]] 참고
- 8로 나누는 동작을 반복
	- 나머지를 오른쪽에 기록
	- 몫은 아래에 기록
	- 몫이 다음에 나누는 대상
- 나누는 대상이 8보다 작으면 반복 종료

## 10진수 <-> 16진수

![img_69.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-009-dec-oct-and-dec-hex/images/dec-oct-and-dec-hex-2.png)

위와 동일한 논리
- 16으로 나누는 동작 반복
	- 나머지를 오른쪽에 기록
	- 몫은 아래에 기록
	- 몫이 다음에 나누는 대상
- 나누는 대상이 16보다 작으면 반복 종료
