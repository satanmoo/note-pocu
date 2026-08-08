---
title: 8진법, 32진법, 64진법
tags:
  - COMP1000
  - week2
aliases:
  - 8진법, 32진법, 64진법
---
# 8진법, 32진법, 64진법

## 8진법

![img_12.png](pocu-note/COMP1000/002-data-representation/002-003-oct-32-64/images/oct-32-64-1.png)

8진수를 표현하려면 3비트 필요
- 1바이트는 8비트인데 3비트로 나눠떨어지지 않아서 불편함

![img_13.png](pocu-note/COMP1000/002-data-representation/002-003-oct-32-64/images/oct-32-64-2.png)

데이터 저장 및 접근 단위가 1바이트라서 8진법은 잘 사용하지 않음

## base32, base64

![img_14.png](pocu-note/COMP1000/002-data-representation/002-003-oct-32-64/images/oct-32-64-3.png)

1바이트(8비트)를 만들기 어렵기 때문에 잘 사용하지 않음
- 5, 6 모두 8의 약수가 아님

### base32, base64 사용례 1

![img_15.png](pocu-note/COMP1000/002-data-representation/002-003-oct-32-64/images/oct-32-64-4.png)

허용되지 않는 문자(예를 들어 `/`)를 URL에 포함할 때
- 왜 허용되지 않은 문자일까?
	- 엄밀하게 표현하면 예약 문자
	- 데이터 `/`인지 경로를 표현하는 `/`인지 구분해야 함
- 현재 상황은 정확하게 말하면 URL의 `?`뒤의 `변수=값` 표현에서 값에 `/`를 포함해야 하는 상황
- `something14549/13460` 이라는 값은 비트 패턴으로 전송
    - 2진법으로 표현하면 너무 URL이 길어지고, 가독성이 안 좋아짐
	    - [[pocu-note/COMP1000/002-data-representation/002-002-hex-and-bit/index|16진수와 비트]] 참고
    - 2진법으로 표현하는 대신 32진법, 64진법은 URL 길이를 줄일 수 있음
	    - 1/5배, 1/6배

### base32, base64 사용례 2

![img_16.png](pocu-note/COMP1000/002-data-representation/002-003-oct-32-64/images/oct-32-64-5.png)

HTML문서에 PNG 형식의 이미지를 포함할 때 2가지 방법을 소개함
1. 경로를 명시하는 방법
2. embed(HTML 파일 속에 포함하는 방식) 방법

경로를 명시하면 브라우저에서 경로의 이미지 파일을 읽어와서 보여주게 됨
- 하드의 파일을 읽어오거나
- 서버에 요청을 보내 이미지를 받아오거나

embed을 사용하면 이미지 파일의 비트 패턴을 HTML문서에 명시함
- 위의 예시에서는 base64로 표현
    - 위의 예시에서는 이미지의 크기가 21KB라서 21 * 1024 * 8 비트로 2진수로 표현하면 너무 길다
    - base64를 사용하면 이 길이를 1/6배 줄일 수 있음

참고로 'index.html' + 'logo.png' 용량을 합치면 22KB인데, 'index_embed.html'의 용량은 28KB로 이미지 파일을 임베드 했을 때 용량이 더 커짐
- 문자는 base64로 정보량이 6비트
- 문자 1개를 1바이트로 저장
	- [[pocu-note/COMP1000/001-number-system-bits-and-bytes/001-017-byte/index|바이트]] 참고
- 문자 하나당 2비트 낭비

logo.png를 HTML문서에 embed 하지 않으면, 파일로 저장됨
- 원래의 바이너리 그대로 저장/전송
- 낭비하는 비트 없음


