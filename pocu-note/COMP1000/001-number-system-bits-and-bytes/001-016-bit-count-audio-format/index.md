---
tags:
  - COMP1000
  - week1
aliases:
  - 비트 수와 오디오 포맷
---
# 비트 수와 오디오 포맷

## 비트 수와 오디오 포맷

![img_84.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-016-bit-count-audio-format/images/img_84.png)

오디오 품질은 비트 수에 따라 결정

비트레이트:
- 1초에 들어오는 데이터의 크기
- Premium 2배로 데이터를 받으니까 음질이 2배

## 비트 뎁스

![img_85.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-016-bit-count-audio-format/images/img_85.png)

양자화 개념
- 음파의 높이를 몇 단계로 나눠서, 음파의 높낮이를 얼마나 세세히 표현할 것인지?
- 피피티의 높은 비트 뎁스의 경우 3비트 사용(2^3)
- 하나의 샘플에 몇 비트를 사용할 것인가?

## 샘플링 레이트

![img_86.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-016-bit-count-audio-format/images/img_86.png)

1초에 막대 몇 개 넣을거냐?
- 초마다 샘플 몇 개를 챕쳐하냐?
	- 막대 = 샘플
- 시간을 얼마나 세세하게 나눠서 표현할 것인가?

피피티의 44.1kHz는 1초에 44100개 샘플을 캡쳐한다는 의미

## 오디오 파일의 크기 계산하기

![img_87.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-016-bit-count-audio-format/images/img_87.png)

참고로 wave 파일은 압축하지 않음

스테레오 vs 모노
- 모노는 소리 데이터가 1줄
	- 음파가 1개
	- 채널이 1개
- 스테레오는 소리 데이터가 2줄
	- 좌우 음향이 다른 경우
	- 음파가 2개
	- 채널이 2개

![img_88.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-016-bit-count-audio-format/images/img_88.png)

계산 결과는 2,822,400 비트
실제로 344KB
- **KB** 
- 대문자임
	- 아래 비트레이트는 1441 kbps
		- 여기서 비트는 소문자네?

## 데이터를 저장할 때 단위

![img_89.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-016-bit-count-audio-format/images/img_89.png)

![img_90.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-016-bit-count-audio-format/images/img_90.png)

![img_91.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-016-bit-count-audio-format/images/img_91.png)

컴퓨터 관련에서 어딘가 저장할 때 최소 단위는 **바이트**
- 하드 디스크
- 메모리