---
tags:
  - COMP2300
---
> [!quote] dosints.pdf, p.55 (Page 55 of 117) - INT 21h AH=0Ah
> **INT 21 - AH = 0Ah DOS - BUFFERED KEYBOARD INPUT**
> 
> DS:DX = address of buffer
> 
> Note: first byte of buffer must contain maximum length on entry, second byte contains actual length of previous line which may be recalled with the DOS line-editing commands on return the second byte contains actual length, third and subsequent bytes contain the input line.

입력을 받고 난 뒤 버퍼 상태는 다음과 같다.

오프셋 0: 최대 입력 길이(호출 전에 설정해야 함)
오프셋 1: 실제 입력 길이(DOS가 반환해서 호출 전에 어떤 값이 있어도 상관없음)
오프셋 2~: 입력된 문자열, *CR(0Dh)*로 종료

예를 들어 "Hello"를 입력하면 버퍼는 다음과 같다.

`[06][05][H][e][l][l][o][0Dh]`
- 미리 "오프셋 0"을 `06`으로 초기화 했다고 가정한다.
