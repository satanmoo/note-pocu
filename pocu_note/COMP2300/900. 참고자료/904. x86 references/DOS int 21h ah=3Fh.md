---
tags:
  - COMP2300
---
> [!quote] dosints.pdf, p.60 (Page 60 of 117) - INT 21h AH=3Fh
> **INT 21 - AH = 3Fh DOS 2+ - READ FROM FILE WITH HANDLE**
>
> | Register | Description |
> |----------|------------|
> | BX | file handle |
> | CX | number of bytes to read |
> | DS:DX | address of buffer |
>
> **Return:**
> - CF set on error
>   - AX = error code
> - CF clear if successful
>   - AX = number of bytes read

이 함수를 호출하기 전 [[DOS int 21h ah=3Dh]]에서 얻은 `AX`의 파일 핸들러를 `BX`에 대입해야 한다.