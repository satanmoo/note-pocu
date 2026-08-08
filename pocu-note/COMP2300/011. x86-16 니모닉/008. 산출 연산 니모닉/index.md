---
title: 011-008. 산술 연산 니모닉
tags:
  - COMP2300
  - COMP2300_week_9
---
# 011-008. 산술 연산 니모닉

![[Pasted image 20260331013428.png]]

곱셈, 나눗셈이 추가되었다.

## 덧셈 니모닉

![[Pasted image 20260331013501.png]]

## `add`: 덧셈

![[Pasted image 20260331013548.png]]

캐리 비트를 사용하지 않기 때문에 이 니모닉을 사용하기 전 `clc`를 할 필요 없다.

멀티 바이트 덧셈을 하는 경우 가장 작은 자리(바이트)를 더할 때 `add` 니모닉을 사용하면 된다.
- 캐리 비트가 필요없는 가장 작은 자리니까

> [!warning] `add`는 mem → mem 불가

### 실행해서 확인하기

```masm
TITLE Main

.DOSSEG
.8086
.NO87
.MODEL TINY

.DATA
nums DW 10, 20, 30, 40, 50

.CODE
.STARTUP

	mov dx, 5h
	mov bp, 0
	add dx, [bp+6]

	mov bx, 0
	mov di, 3h
	add nums[bx+di], dx

exit:
	mov ah, 4Ch
	xor al, al
	int 21h
	
END
```

#### `add dx, [bp+6]`

![[Pasted image 20260331015639.png]]

어셈블 결과 코드 바이너리는 `ADD DX, WORD PTR [BP+06]`으로 나온다.

실행 전 `DX`의 값은 5다.

![[Pasted image 20260331020336.png]]

실행 후 `DX`의 값은 `FEF5`다. 그렇다면 `FEF0`을 더했다는 말이다.

`[BP + 6]`에서 값을 읽으면 `FEF0`인지 확인해보자.

> [!NOTE] `BP`를 베이스로 사용하면, 기본 세그먼트가 `SS`다.
> 
> `bp`를 베이스로 쓰면 기본 세그먼트가 `DS`가 아니라 `SS`(스택 세그먼트)가 된다. 지금은 `.MODEL TINY`라서 DS=SS=CS가 전부 같은 세그먼트를 가리키기 때문에 문제가 안 된다.

`d ss:0x0006` 으로 덤프해보자


![[Pasted image 20260331020705.png]]

`ss:0x0006`에 `F0`
`ss:0x0007`에 `FE`

레지스터에 읽어올 때는 `FEF0`으로 읽는다.
- 리틀 엔디언

`[BP + 6]`에서 값을 읽으면 `FEF0`인지 확인했다.

#### `add nums[bx+di], dx`

![[Pasted image 20260331020958.png]]

실행 전 레지스터의 상태는 다음과 같다.
- `BX`: 0000
- `DI`: 0003

`nums`의 주소는 어셈블 시점에 계산되어 `011A`로 바이너리에 적혔다.

![[Pasted image 20260331021308.png]]

`d ds:0x011A` 로 덤프해서 확인해보면

`nums[0] ~ nums[1]`: `0A 00`
- 메모리에 리틀 엔디언으로 저장되니 원래 값을 복원하면 `00 0A`
- 십진수로 10이다.

`nums[2] ~ nums[3]`: `14 00`
- 메모리에 리틀 엔디언으로 저장되니 원래 값을 복원하면 `00 14`
- 십진수로 20이다.

나머지는 생략한다.

![[Pasted image 20260331021558.png]]

덧셈 결과 `CY`를 주목하자. 캐리가 발생했다.

원래 `nums + 3`에 저장된 2바이트 값은 `00 1E`이다.

![[Pasted image 20260331022113.png]]

`0x1E00` + `0xFEF5` 결과 `0x1CF5`가 `nums + 3`에 저장되었다.
- 받아올림 발생
- `nums + 3`에 `F5`
- `nums + 4`에 `FE`

---
## `adc`: 캐리를 이용한 덧셈

![[Pasted image 20260331113327.png]]

캐리 플래그로 받아올림하기 때문에 레지스터 크기보다 큰 숫자 덧셈에 사용된다.

### 실행해서 확인하기

```masm
TITLE Main

.DOSSEG
.8086
.NO87
.MODEL TINY

.DATA
m32 DW 1234h, 5678h

.CODE
.STARTUP
	; 낮은 자리 덧셈
	mov ax, 0FFFFh
	add m32[0], ax
	
	; 높은 자리 덧셈
	mov dx, 1111h
	adc m32[2], dx

exit:
	mov ah, 4Ch
	xor al, al
	int 21h

END
```

프로그램이 실행되고 직후 레지스터 상태는 다음과 같다.

![[Pasted image 20260331185157.png]]

`AX`: 0000
`DX`: 0000
`NC`: No Carry
- [[011. 8088의 레지스터#플래그]] 참고

`m32` 변수의 메모리를 확인해보자

![[Pasted image 20260331185604.png]]

`ds:0x0114`: 0x34
`ds:0x0116`: 0x12
- 리틀 엔디언

> [!NOTE] `m32[0]` 
> 
> 어셈블 시점에 `m32`의 주소(오프셋)를 구하고 `0x0114` 여기에 변위값 0을 더해서 최종 주소`0x0114`가 결정
> - *Code View* 에서 어셈블된 명령어 `ADD WORD PTR [0114],AX`를 확인할 수 있다.
> - [[pocu-note/COMP2300/010. x86-16 소개/014. 비간접 피연산자/index#직접 메모리 피연산자와 색인 연산자]]  참고
>   
> 마찬가지로 `m32[2]`에도 동일하게 적용

`add m32[0], ax`를 실행하면 `m32[0]`에 `0x1233` 가 저장된다.
- `0xFFFF + 0x1234`의 값
- 받아올림이 발생

![[Pasted image 20260401022340.png]]

`d ds:0x114`로 덤프한다.

`0x0114`에 `33 12` 저장된 것 확인

![[Pasted image 20260401022558.png]]

`AX`: FFFF
`CY`: Carry Yes

`adc m32[2], dx`를 실행하면 `m32[2]`에 `0x678A` 가 저장된다.
- `0x5678` + `0x1111` + Carry
- 받아올림 발생 X

![[Pasted image 20260401023355.png]]

`d ds:0x0116`로 덤프한다.
- `m32[2]`의 값이 `0x0116`

`0x0114`에 `8A 67` 저장된 것 확인

![[Pasted image 20260401023526.png]]

`AX`: 1111
`NC`: No Carry

## `inc`: 증가

![[Pasted image 20260402005033.png]]

"unsigned 정수"라고 표현한 이유: 
- 루프 인덱스 증가 용도로 사용하려는 의도

### `inc`를 활용한 멀티바이트 덧셈

```masm
TITLE Main

.DOSSEG
.8086
.NO87
.MODEL TINY

.DATA
	num1 DW 0FF10h, 1234h, 0000h, 0000h ; 0x0000_0000_1234_FF10
	num2 DW 0F000h, 0001h, 0000h, 0000h ; 0x0000_0000_0001_F000
	result DW 0, 0, 0, 0

.CODE
.STARTUP

	mov cx, 4 ; 4개의 워드 단위로 덧셈, cx의 주용도는 반복 카운터
	mov si, 0 ; si 레지스터는 배열의 인덱스 역할을 함
	clc

add_loop:
	; 워드 덧셈
	mov ax, num1[si] ; num1의 현재 워드 읽기
	adc ax, num2[si] ; num2의 현재 워드 더하기, 현재 ax에는 "num1의 워드 + num2의 워드"가 저장됨
	mov result[si], ax ; 결과를 result 배열에 저장
	
	; 다음 워드로 이동
	inc si
	inc si

	; 루프 카운터 감소(캐리 안 건드림)
	dec cx

	; 종료 조건 확인 및 점프
	jnz add_loop

exit:
	mov ah, 4Ch
	xor al, al
	int 21h

END
```

위를 실행하면 예상되는 결과는 `DW`에 `0x0000_0000_1236_EF10`이 들어가는 것이다.

![[Pasted image 20260402014055.png]]

첫번째 루프에서 `mov result[si], ax`까지 실행하고 덤프해서 `result`에 저장된 값을 확인해보자.

`ds:0x012E`를 덤프해보면, `10 EF`를 확인할 수 있다.
- `result`의 주소가 `ds:0x012E`
- 가장 낮은 자리 수 덧셈이 정상적인 것을 확인했다.

이제 캐리 플래그가 켜졌는지 확인해보자.

![[Pasted image 20260402014530.png]]

`CY`: Carry Yes
- 캐리 플래그가 켜졌다.

`CX`: 0004
- 최대 카운터 값 확인

`SI`: 0000
- 현재 인덱스 값 확인

이제 인덱스를 `inc`로 증가시킬 때 캐리 플래그가 변하는지 확인해보자.

![[Pasted image 20260402014745.png]]

변하지 않았다.

> [!NOTE] 멀티 바이트 덧셈에서 인덱스 증가에 `inc`를 사용해야 한다.
> 
> 캐리 플래그에 영향을 주지 않고 인덱스를 증가시킬 수 있기 때문이다.

> [!TIP] "`inc`는 캐리 프래그를 변화시키지 않는다"를 유도할 때 멀티 바이트 덧셈을 생각하자.

### `inc` 와 오버플로우 플래그, 부호 플래그

```masm
TITLE Main

.DOSSEG
.8086
.NO87
.MODEL TINY

.DATA
num DB 7Fh

.CODE
.STARTUP

	; 8bit overflow
	inc num

	; Z=1, S=0, O=0, C=0
	xor ax, ax

	; 16bit overflow
	mov ax, 7FFFh
	inc ax
	
exit:

	mov ah, 4Ch
	xor al, al
	int 21h

END
```

위를 실행해 오버플로우 플래그가 언제 켜지는지 익히자.

부호 플래그의 변화도 확인하자.

![[Pasted image 20260402022042.png]]

`inc num` 실행 전 상태다.

`NV`: No Overflow
`PL`: Plus

![[Pasted image 20260402022123.png]]

`inc num` 실행 후

`OV`: Overflow
`NG`: Negative

![[Pasted image 20260402023038.png]]

`d ds:0x0110`으로 `num`의 값을 덤프했다.

`80`으로 증가했다. "signed" 관점에서 127에서 -128로 오버플로우가 발생했다.

부호도 음수가 되었다. 
- 결과 비트의 MSB를 부호 플래그에 복사

> [!NOTE] Overflow는 signed 관점에서 signed 범위를 넘어서는가를 확인하면 된다.

![[Pasted image 20260402023342.png]]

`xor ax, ax`로 오버플로우 플래그를 초기화했다.

`NV`: No Overflow
`PL`: Plus

![[Pasted image 20260402023442.png]]

`mov ax, 7FFFh`는 데이터 전송 니모닉이라 플래그에 영향을 주지 않는다.

![[003. 데이터 전송 니모닉#`mov` 데이터를 이동]]

![[Pasted image 20260402023624.png]]

`inc ax`를 실행하고 결과를 확인해보자.

`AX`: 8000
`OV`: OverFlow
`NG`: Negative

16비트 수를 `inc`로 증가시켰을 때 오버플로우가 발생함을 확인했다.

16비트 수도 결과의 MSB를 부호 플래그에 복사한다.

> [!NOTE] **16비트 연산**에서도 Overflow는 signed 관점에서 signed 범위를 넘어서는가를 확인하면 된다.

### `inc` 와 제로 플래그

```masm
TITLE Main

.DOSSEG
.8086
.NO87
.MODEL TINY

.DATA
num DB 0FFh

.CODE
.STARTUP
	; 8bit
	inc num

	; Z = 0
	mov ax, 0
	inc ax

	; 16bit
	mov ax, 0FFFFh
	inc ax

exit:
	mov ah, 4Ch
	xor al, al
	int 21h

END
```

위 코드를 실행해 제로 플래그가 언제 켜지는지 확인해보자.

![[Pasted image 20260403021311.png]]

`inc num`을 실행하기 전 상태이다.

`NZ`: Not Zero
- 프로그램 시작 직후에 플래그의 기본값 0

![[Pasted image 20260403021906.png]]

`ZR`: Zero
- `inc num`을 실행한 결과가 `0x00`이다.
- 0xFF → inc → 0x00

![[Pasted image 20260403022300.png]]

```masm
mov ax, 0 ; 여전히 제로 플래그 켜짐
inc ax    ; 제로 플래그 끔
```

`mov`는 [[003. 데이터 전송 니모닉#`mov` 데이터를 이동]]라서 플래그를 바꾸지 않음
- 여전히 제로 플래그가 켜짐

`NZ`: Not Zero
- 0x00 → inc → 0x01 결과 제로 플래그가 꺼짐

![[Pasted image 20260403022540.png]]

```masm
; 16bit
mov ax, 0FFFFh
inc ax
```

`mov`는 [[003. 데이터 전송 니모닉#`mov` 데이터를 이동]]라서 플래그를 바꾸지 않음
- 여전히 제로 플래그가 꺼진 상태

`ZR`: Zero
- 0xFFFF → inc → 0x0000 결과 제로 플래그가 켜짐
- 16비트도 결과에 따라 제로 플래그가 켜짐

> [!NOTE] 결과의 모든 비트가 0이면 제로 플래그가 켜짐!

## `clc/stc`: 캐리 플래그 변경

![[Pasted image 20260403022848.png]]

`clc`: CLear Carry

`stc`: Set Carry

## `sub`: 뺄셈

![[Pasted image 20260415013701.png]]

### `sub al, [bx]`

1. bx에 2바이트 주소가 저장되어 있음
2. 그 주소가 가리키는 메모리에서 1바이트 값을 읽음
	- al에서 빼는 것을 MASM이 알기 때문에 `BYTE PTR`를 명시하지 않아도 1바이트임을 추론 가능
3. al에서 그 값을 빼서 결과를 al에 저장

### `sub nums[di], bl`

1. 유효 주소(nums + di)의 값 dst를 읽음
	- 직접 메모리 피연산자 + 색인 연산자
2. dst - bl이 유효 주소에 저장

![[pocu-note/COMP2300/010. x86-16 소개/014. 비간접 피연산자/index#직접 메모리 피연산자와 색인 연산자|index]]

### `sub BYTE PTR [bx+di], 2`

1. 유효 주소(bx+di)에 저장된 주소값(dst_addr)을 읽음
2. dst_addr에서 1바이트값 dst를 읽음
	- `BYTE PTR`을 명시하지 않으면 MASM이 데이터 크기를 추론할 수 없음
3. dst - 2 를 dst_addr에 저장 

### `sub`와 캐리 플래그

```masm
mov al, 3
sub al, 5
```

![[Pasted image 20260415022752.png]]
실행 전 레지스터, 플래그 상태 확인
- NC: No Carry

![[Pasted image 20260415022825.png]]
실행 후

CY: Carry Yes
- unsigned 연산에서 borrow 발생
- 작은 unsigend에서 큰 unsigned를 뺐으니

```text
0000_0000_0000_0011 - 0000_0000_0000_0101
= 0000_0000_0000_0011 + 1111_1111_1111_1011  
= 1111_1111_1111_1110

carry out = 0
```

carry out을 반전하면 CF가 1

번외: 10 - 7 

```text
0000_0000_0000_1010 - 0000_0000_0000_0111
= 0000_0000_0000_1010 + 1111_1111_1111_1001
= 0000_0000_0000_0011  

carry out = 1 
```

carry out을 반전하면 CF가 0

## `sbb`: 받아내림을 이용한 뺄셈

![[Pasted image 20260415184425.png]]

dst = dst - src - cf

dst가 reg인 경우 src로 무엇이든 가능
dst가 mem인 경우 src로 mem을 제외하고 가능
- **mem - mem 불가능**
dst가 accum인 경우 **imm only**

### `sbb`를 이용한 큰 숫자 뺄셈

```masm

.DATA  
	m32 DD 87654321h, 12345678h
	; memory layout: 21 43 65 87 78 56 34 12  
	result DD ?  
  
.CODE  
.STARTUP  
  
    xor ax, ax  
    mov ax, WORD PTR m32[0] ; ax = 4321h  
    sub ax, WORD PTR m32[4] ; ax = 4321h - 5678h = ECA9h, carry = 1  
    mov WORD PTR result, ax ; result layout: A9 EC ?? ?? | mov는 상태 플래그에 영향을 주지 않으므로 carry는 여전히 1  
  
    mov ax, WORD PTR m32[0]+2 ; ax = 8765h  
    sbb ax, WORD PTR m32[4]+2 ; ax = 8765h - 1234h - carry(1) = 7530h, carry = 0
    mov WORD PTR result[2], ax; result layout: A9 EC 30 75
```

## `dec`: 감소

![[Pasted image 20260417012749.png]]

- unsigned 정수의 감소
	- index 용도
- 캐리 플래그에 영향 X
- wrap around

### `dec` wrap around  & 상태 플래그 확인

```masm
.DATA  
m8 DB 00h  
  
.CODE  
.STARTUP  
	dec m8 ; m8 = 0FFh(warp around)  
	; flags: NV, NG, NZ, NC
```

wrap around:
- `dec m8` 실행 후 m8 덤프하면, 값이 FF인 것을 확인 가능

Overflow:
- 0
- 0에서 -1로 변화는 비트 폭으로 표현할 수 있는 범위 안에서의 변화

Sign:
- 1
- MSB로 판단

Zero:
- 0
- 모든 비트가 0인지 여부

Carry:
- `dec`는 캐리 플래그에 영향을 주지 않음
- 여러 워드에 걸친 큰 수 연산에서 루프 카운터를 dec으로 줄여도 adc/sbb가 사용할 캐리 플래그를 보존하려는 설계

### `dec`과 오버플로우 플래그 변화

```
.DATA  
m8 DB 80h  
  
.CODE  
.STARTUP  
    mov al, m8 ; AL = 80h  
    dec al ; AL = 7Fh  
    ; flag: OV, PL, NZ, NC
```

Overflow:
- 1
- -128 -1 = -129
- 부호 있는 연산의 수학적 결과가 해당 비트 폭(1바이트)의 표현 범위를 벗어남
- 오버플로우
- A - B = R
	- A 와 B의 부호가 다름
	- A 와 R의 부호가 다름

[[007. 오버플로 플래그 V]] 참고

## `neg`: 2의 보수

![[Pasted image 20260419042906.png]]

2의 보수로 음수를 표현

## `mul`: unsigned 곱셈

![[Pasted image 20260419043116.png]]

### `mul`과 데이터 손실

`mul` 니모닉은 데이터 손실이 없음

여기서 말하는 데이터 손실이란?
- 고수준 언어에서 `int * int` 했을 때 `int`범위를 넘어서 값이 손실되는 경우
	- 오버플로우

왜 데이터 손실이 발생하지 않을까?
- 8 비트 곱셈에서 결과는 16비트 ax에 저장
- 16 비트 곱셈에서 결과는 상위 16비트는 dx, 하위 16비트는 ax에 저장

고수준 언어에서는 왜 데이터 손실이 발생하는가?
- `int * int` 했을 때 `int`에 저장하기 때문
- 넘어서는 값이지만 동일한 자료형에 저장하는 것이 기본 동작인 경우가 많음

### `mul`과 피연산자

`mul` 니모닉 옆의 피연산자는 하나임

나머지 피연산자는 8 비트 곱셈에서는 al, 16 비트 곱셈에서는 ax
- "A * B"에서 a레지스터는 고정으로 사용된다고 생각하기

명시적으로 적어주는 피연산자의 크기에 따라 암묵적으로 다음과  같은 동작이 결정됨
- 피연산자의 크기가 8비트면, al과 곱하고, 결과는 ax에 저장
- 피연산자의 크기가 16비트면, ax와 곱하고, 결과는 dx:ax에 저장

8비트 * 16비트 같은 혼합 크기 곱셈은 없음

`mul bx`의 경우 피연산자는 ax, 결과는 dx:ax 에 저장

#### `mul factor` 에서 `factor`의 자료형

factor의 크기는 1바이트, 2바이트만 허용
- DB
- DW

아래와 같은 코드는 어셈블 에러 발생

```masm
TITLE Main  
  
.DOSSEG  
.8086  
.NO87  
.MODEL TINY  
  
.DATA  
factor DD 80h  
  
.CODE  
.STARTUP  
    mov ax, 0000h  
    mul factor
  
exit:  
    ; 프로그램 종료  
    mov ah, 4Ch  
    xor al, al ; 리턴값 0  
    int 21h  
  
END
```

![[Pasted image 20260419190604.png]]

이유는 `.8086`모드에서 `mul`은 바이트, 워드만 지원하기 때문
- 80386-80486 (x86-32)부터 더블 워드 지원
	- 당연히 이것보다 큰 쿼드 워드도 지원하지 않음

> [!QUOTE] MASM 6.1 Reference [[pocu-note/COMP2300/900. 참고자료/x86-instructions/MUL/index|MUL]]
> 
> On the 80386–80486, if the operand is EAX, the product goes into the EDX:EAX register pair.

### `mul  WORD PTR [bx]`에서 `WORD PTR`

bx에 `[]`를 사용했기에 간접 피연산자

따라서 아래와 같이 lea로 주소를 대입해 사용할 수 있음
- mov + OFFSET 조합도 가능

```masm
.DATA  
factors DW 10h, 20h, 30h, 40h, 50h  
  
.CODE  
.STARTUP  
    lea bx, factors  
    mov ax, 0000h  
    mul WORD PTR [bx]
```

곱셈 결과는 워드의 곱셈이라 dx:ax에 저장

`WORD PTR`을 넣지 않으면, 주소에서 몇 바이트 읽어야 하는지 명시할 수 없음
- 따라서 넣지 않고 `mul [bx]`와 같이 작성하면 어셈블 오류 발생

![[Pasted image 20260419192256.png]]
여기서도 당연히 `mul DWORD PTR [bx]`같이 8086에서 지원하지 않는 `mul`연산을 작성하면 어셈블 에러 발생

![[Pasted image 20260419193240.png]]

### `mul`과 오버플로우, 캐리 플래그

> [!QUOTE] MASM 6.1 Reference [[pocu-note/COMP2300/900. 참고자료/x86-instructions/MUL/index|MUL]]
> 
> The carry and overflow flags are set if DX is not 0 for 16-bit operands or if AH is not 0 for 8-bit operands.

`mul`에서는 CF = OF
- 결과가 원래 피연산자의 크기를 넘었는지 여부로 결정
	- 항상 둘이 값이 동일함
- 16비트 피연산자의 경우 DX가 0이 아니면 원래 피연산자의 크기인 2바이트를 넘었기 때문에 CF, OF 모두 켜짐
- 8비트 피연산자의 경오 AH가 0이 아니면 원래 피연산자의 크기인 1바이트를 넘었기 때문에 CF, OF 모두 켜짐

x86 ISA를 설계한 Intel 엔지니어들의 설계 결정
- 곱하기 연산에서 오버플로우나 캐리나 동일한 개념

### ?로 표기된 SF, ZF

말 그대로 예측 불가능

따라서 `mul`연산 이후 SF, ZF를 사용하려면 clear 하는 것이 베스트 프렉티스
### `mul`의 성능

2를 곱할 때는 left shift가 훨씬 성능에 유리함

## `imul`: signed 곱셈

![[Pasted image 20260419221930.png]]

부호를 고려한 `mul` 

조심해야할 포인트는 동일함
- 나머지 피연산자를 어디서 읽어오냐, 결과는 어디에 저장되냐
	- 이 규칙은 명시적으로 표기한 피연산자의 크기에 따라 달라짐(바이트 or 워드)
- OF, CF는 동일한 값으로 변함


## `div`: unsigned 나눗셈

![[Pasted image 20260419223017.png]]

### `div`와 피연산자

[[#`mul`과 피연산자]]와 유사하게 명시적으로 피연산자는 하나
- 이 피연산자(src)의 크기에 따라 연산이 달라짐
	- 8비트라면 al(dst)에 dst/src의 몫, ah에 dst/src의 나머지 저장
	- 16비트라면 ax(dst)에 dst/src의 몫, dx에 dst/src의 나머지 저장

위의 예시를 보면
- cx의 경우 cx/ax의 몫이 ax에 저장, cx/ax의 나머지가 dx에 저장
- dl의 경우 dl/al의 몫이 al에 저장, dl/al의 나머지가 ah에 저장
- `BYTE PTR [bx]`의 경우 bx에 저장된 값은 주소(dst_addr)고, dst_addr에서 1바이트 읽으면 dst, dst/al의 몫이 dst_addr에 저장, dst/al의 나머지가 ah에 저장
- fsize의 경우 8비트, 16비트 인지에 따라 달라지고, `mul`에서 봤듯이 자료형을 초과하면 어셈블 실패

> [!QUOTE] MASM 6.1 Reference [[pocu-note/COMP2300/900. 참고자료/x86-instructions/DIV/index|DIV]]
> 
> Divides an implied destination operand by a specified source operand. Both operands are treated as unsigned numbers. If the source (divisor) is 16 bits wide, the implied destination (dividend) is the DX:AX register pair. The quotient goes into AX and the remainder into DX. If the source is 8 bits wide, the implied destination operand is AX. The quotient goes into AL and the remainder into AH.

### `div`와 OF, SF, ZF, CF

모두 알 수 없음

`div`를 사용하고 이것들을 사용하려면 초기화 해야함

## `idiv`: signed 나눗셈

![[Pasted image 20260419225622.png]]
부호를 고려한 `div`

조심해야할 포인트는 동일함
- 명시적 피연산자(src)의 크기에 따라 dst가 결정, src/dst의 몫과 나머지가 어디에 저장되는지 결정
- OF,SF,ZF,CF 모두 알 수 없음
