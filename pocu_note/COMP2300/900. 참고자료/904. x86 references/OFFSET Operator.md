---
tags:
  - COMP2300_week_1
---
> [!quote] Programmer's Guide, Chapter 3 — The OFFSET Operator (p.60)
> An address constant is a special type of immediate operand that consists of an offset or segment value. The OFFSET operator returns the offset of a memory location.
> ```asm
> mov bx, OFFSET var    ; Load offset address
> ```

어셈블 시점에 메모리의 offset 주소를 반환한다. (바이너리에 적힌다.)