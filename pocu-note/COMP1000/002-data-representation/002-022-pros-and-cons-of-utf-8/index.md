---
aliases:
  - UTF-8의 장점과 단점
tags:
  - COMP1000
  - week2
---
# UTF-8의 장점과 단점

## UTF-8의 장점 2

![img_115.png](pocu-note/COMP1000/002-data-representation/002-022-pros-and-cons-of-utf-8/images/pros-and-cons-of-utf-8-1.png)

CJK를 제외한 거의 모든 문자에 1바이트 또는 2바이트 사용
- UTF-8로 인코딩 하면 한국어는 대부분 3바이트 사용

## UTF-8의 장점 3

![img_116.png](pocu-note/COMP1000/002-data-representation/002-022-pros-and-cons-of-utf-8/images/pros-and-cons-of-utf-8-2.png)

문자가 몇 바이트인지를 표기하는 비트를 사용

 4바이트를 사용하는 경우 "x"의 개수를 세보면 21개
- [[pocu-note/COMP1000/002-data-representation/002-021-ansi/index#유니코드(Unicode)|ANSI, 멀티바이트, 유니코드]]에서 표현 가능한 문자의 수는  $2^{17} \ between \ 2^{18}$라고 했던 것 참고

> [!NOTE] 여기서 비트를 낭비한다는 단점도 생김
## 복습 퀴즈

(Q) 다음은 UTF-8로 인코딩된 어떤 문자의 첫 바이트입니다. 1110 xxxx(2) 이 문자가 어떤 문자인지 알려면 총 몇 바이트를 읽어야 할까요?
- 맨 앞 바이트에서 `1110`패턴이니 3바이트

