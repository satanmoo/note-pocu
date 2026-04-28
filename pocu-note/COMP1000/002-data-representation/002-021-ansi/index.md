---
tags:
  - COMP1000
  - week2
aliases:
  - ANSI, 멀티바이트, 유니코드
---
# ANSI, 멀티바이트, 유니코드

## ANSI

![img_98.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_98.png)

영어만 표현하려면 아스키로 충분하다

![img_99.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_99.png)

다른 언어를 표현하기 위해 아스키를 확장함

![img_100.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_100.png)

8비트를 사용해서 추가적으로 128개의 라틴문자 표시

## 그 밖의 다른 문자 인코딩

![img_101.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_101.png)

## 멀티바이트

![img_102.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_102.png)

![img_103.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_103.png)

더 추가하고 싶어도 1바이트에서는 추가할 수 없음

![img_104.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_104.png)

2바이트 내에서 표현하지만 가변 너비 인코딩

가변 너비 인코딩
- 1바이트로 표현 가능한(아스키 범위)의 문자들은 1바이트로 표현
- 아스키 범위를 넘어서는 문자들은 2바이트로 표현
- 즉 문자마다 바이트 수가 달라서 **가변 너비**

## EUC

![img_105.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_105.png)

한국어, 일본어, 중국어를 위한 **멀티바이트** 문자 인코딩

코드 페이지
- 바이너리 패턴을 디코딩할 때 사용하는 매핑 테이블
- 동일한 비트패턴이라도 나라에 따라서 코드 페이지가 달라서 다른 문자로 디코딩
- EUC-JP 에서 `0000_1010`이 일본어 '아'인데 우리나라에서는 'ㄲ'로 디코딩

## EUC-KR

![img_106.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_106.png)

## 멀티바이트의 한계

![img_107.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_107.png)

한 번에 여러 나라의 문자를 동시에 표현할 수 없음
- 코드 페이지는 하나만 사용 가능

## 유니코드(Unicode)

![img_108.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_108.png)

글자에 대응되는 정수를 **유니코드 코드 포인트**라고 부름
- `U+D3EC`와 같은 값

> [!NOTE] 유니코드와 인코딩은 다른 개념
> 
> 어떤 문자와 유니코드 코드 포인트의 대응은 표준으로 정해짐
> 
> `U+xxxx`를 어떻게 어떤 비트 패턴으로 표현하는 인코딩은 별개의 문제

## 유니코드 인코딩의 종류

![img_109.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_109.png)

현재 유니코드의 모든 문자를 표현하기 위해서 17~18 비트가 필요함

인코딩 방법마다 17~18 비트를 어떻게 활용하는지가 달라짐
- 최소 몇 바이트를 사용하냐?
- 모든 인코딩 방법이 최대 4바이트를 사용한다는 것은 공통점
## UCS-2

![img_110.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_110.png)

최초의 유니코드 인코딩
- UTF-16의 전신
- 하지만 UTF-16과 다르게 최소 2바이트가 아니라 **2바이트 고정**

## UCS-4

**UTF-32**와 동의어
- 4바이트 고정
- 용량 낭비가 심함

## UCS-2에서 시작된 삽질의 역사

![img_111.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_111.png)

플랫폼(윈도우즈, 리눅스)에 따라 인코딩하면 바이트 크기가 다른 삽질
## UTF-8

![img_112.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_112.png)
## UTF-8의 장점

![img_113.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_113.png)

아스키 코드하고 100% 호환
- 어떤 아스키 코드 범위에 해당하는 문자를 UTF-8로 인코딩해 저장한 비트 패턴으로 아스키 코드를 구해 아스키 테이블에 매핑하면 원래의 문자가 그대로 복원됨

엔디언 문제가 발생하지 않음
- 숫자를 비트 패턴으로 그대로 메모리에 저장하지 않음
	- [[pocu-note/COMP1000/002-data-representation/002-022-pros-and-cons-of-utf-8/index#UTF-8의장점 3|UTF-8의 장점과 단점]] 참고

**엔디언**
- 컴퓨터의 저장 단위는 [[pocu-note/COMP1000/001-number-system-bits-and-bytes/001-017-byte/index|바이트]]
- 1바이트를 초과하는 데이터를 저장할 때 바이트의 저장 순서를 의미함
- A.K.A 바이트 정렬

![img_114.png](pocu-note/COMP1000/002-data-representation/002-021-ansi/images/img_114.png)

**리틀 엔디언**
- 데이터가 끝나는 마지막 단위 = 작은 자리의 숫자
	- `0x4CF3`이라면 `0xF3`이 가장 작은 자리
	- 단위는 바이트 기준 (컴퓨터의 저장 단위는 바이트니까)
- 리틀 엔디언에서는 작은 자리의 숫자부터 작은 메모리 주소에 위치
	- `0xF3`이 작은 메모리 주소에 위치

**빅 엔디언**
    - `0xF3`이 큰 메모리 주소에 위치
    - 빅 엔디언이라는 의미에 맞게 설명하면, 데이터가 시작하는 처음 단위(큰 자리의 숫자)가 작은 메모리 주 소에 위치
    - `0x4C`가 작은 메모리 주소에 위치

## 복습 퀴즈

(Q1) 4바이트 숫자 0x13FD 5E9C을 리틀 엔디언으로 저장하면 메모리에는 어떻게 저장될까요?
- 리틀을 찾으면 `0x9C`
	- 바이트 단위로 나눴을 때 가장 작은 자리
- 가장 작은 자리가 낮은 메모리부터 위치
- `9C`로 시작하는 답을 골라
- `9C 5E FD 13`

(Q2) 4바이트 숫자 0xAABB CCDD(16)이 빅 엔디언으로 저장된다면, 다음 중 메모리에 저장되는 값은 무엇인가요?
- 빅을 찾으면 `0xAA`
	- 바이트 단위로 나눴을 때 가장 큰 자리
- 가장 큰 자리가 낮은 메모리부터 위치
- `AA BB CC DD`

복습 퀴즈의 나온 숫자들은 모두 숫자의 비트 패턴을 그대로  메모리에 저장
