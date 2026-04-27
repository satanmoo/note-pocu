---
tags:
  - COMP2300
---
> [!quote] dosints.pdf, p.60 (Page 60 of 117) - INT 21h AH=3Dh
> 
> **INT 21 - AH = 3Dh DOS 2+ - OPEN DISK FILE WITH HANDLE**
> 
> AL = access code
> - 0 = Read Only
> - 1 = Write Only
> - 2 = Read/Write
> 
> DS:DX = address of ASCIZ filename 
>
> Return: 
> - CF set on error
> 	- AX = error code
> - CF clear if successful
> 	- AX = file handle

여기서 반환한 `AX`의 값을 [[DOS int 21h ah=3Fh]]를 호출할 때  `BX`에 넣어야 한다.
- 이 값은 DOS에서 내부적으로 관리하기 위한 정수값이다.
