---
title: UTF-8의 예, UTF-16, UTF-32
aliases:
  - UTF-8의 예, UTF-16, UTF-32
tags:
  - COMP1000
  - week2
---
# UTF-8의 예, UTF-16, UTF-32

## UTF-8의 예

![img_117.png](pocu-note/COMP1000/002-data-representation/002-023-utf-8-example/images/utf-8-example-1.png)

'A'
- 유니코드 코드 포인트는 `U+0041`
- `0x41`을 비트패턴으로 표현하면 `100 0001` 
- 7비트로 표현가능한 포맷은 `0xxxx xxxx`
- `0100 0001`
    
'걁'
- 유니코드 코드 포인트는 `U+AC41`
- 16비트로 표현 가능한 포맷은 `1110 xxxx 10xx xxxx 10xx xxxx`
- `0xAC41`을 비트패턴으로 표현하면 `1010 1100 0100 0001`
- 포맷에 왼쪽부터 순서대로 채우면
- `1100 1010 1011 0001 1000 0001`


위 값들은 1바이트 단위로 작은 주소 부터 메모리에 저장 됨
- `01000001`
- `11001010 10110001 10000001`
	- 애초에 엔디언 문제를 정의할 수 없음
	- 이 비트 패턴이 숫자인가? 포맷에 숫자를 집어넣었기에 큰 자리, 작은 자리의 개념이 없음

> [!NOTE] UTF-8 인코딩 결과는 숫자의 비트 패턴이 아님

## UTF-8과 URL

![img_118.png](pocu-note/COMP1000/002-data-representation/002-023-utf-8-example/images/utf-8-example-2.png)

![img_119.png](pocu-note/COMP1000/002-data-representation/002-023-utf-8-example/images/utf-8-example-3.png)

'%'는 hex 표시

![img_120.png](pocu-note/COMP1000/002-data-representation/002-023-utf-8-example/images/utf-8-example-4.png)

"유니코드"
- UTF-8로 인코딩된 한국어 문자는 대부분 3바이트인 것을 기억하자 
	- [[pocu-note/COMP1000/002-data-representation/002-022-pros-and-cons-of-utf-8/index#UTF-8의 장점 2|UTF-8의 장점과 단점]] 참고
- 마지막 글자 '드' 확인
	- 오른쪽에서 부터 3바이트 확인

![img_121.png](pocu-note/COMP1000/002-data-representation/002-023-utf-8-example/images/utf-8-example-5.png)

![img_122.png](pocu-note/COMP1000/002-data-representation/002-023-utf-8-example/images/utf-8-example-6.png)

![img_123.png](pocu-note/COMP1000/002-data-representation/002-023-utf-8-example/images/utf-8-example-7.png)

## UTF-16

![img_124.png](pocu-note/COMP1000/002-data-representation/002-023-utf-8-example/images/utf-8-example-8.png)

[[pocu-note/COMP1000/002-data-representation/002-021-ansi/index#USC-2|UCS-2]]의 확장
- 최소 2바이트, 최대 4바이트 사용

인코딩/디코딩 규칙에 따라 Unicode code point를 변환
- UTF-32와 차이점
- 2바이트에 Unicode code point 값이 비트패턴으로 그대로 저장되지 않음

> [!NOTE] UTF-8은 [[pocu-note/COMP1000/002-data-representation/002-022-pros-and-cons-of-utf-8/index#UTF-8의장점 3|UTF-8의 장점과 단점]]에서 봤듯이 Unicode code point 값이 비트패턴으로 그대로 저장되지 않고 변환됨

## UTF-32

![img_125.png](pocu-note/COMP1000/002-data-representation/002-023-utf-8-example/images/utf-8-example-9.png)

*Unicode code point와 1:1로 대응*
- 변환 규칙 없이 Unicode code point 값을 4바이트에 비트패턴으로 그대로 저장

## 복습 퀴즈

(Q) 다음 중 UTF 인코딩의 장단점에 대해 언급한 것 중 올바르지 않은 것을 고르세요.
- UTF-16은 UCS-2의 확장이라 UCS-2를 모두 제대로 표현할 수 있다
	- **확장**의 개념을 기억하기
- UTF-16은 ASCII와 호환이 불가능하며, 엔디언 문제가 있다
	- ASCII와 호환이 되는 것은 **UTF-8** only
	- 엔디언 문제가 없는 것도 **UTF-8** only
	- [[pocu-note/COMP1000/002-data-representation/002-021-ansi/index#UTF-8의 장점|ANSI, 멀티바이트, 유니코드]] 참고
- UTF-32는 용량 낭비가 심하나, ASCII와 호환 가능하다 (X)
	- ASCII와 호환이 되는 것은 **UTF-8** only
- UTF-8는 엔디언 문제가 발생하지 않는다.
	- 엔디언 문제가 없는 것은 **UTF-8** only

따라서 정답은 3번
