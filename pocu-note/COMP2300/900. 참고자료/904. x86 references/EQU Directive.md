---
tags:
  - COMP2300
---
> [!info] EQU — 어셈블 타임 상수
> `EQU`는 메모리를 **전혀 할당하지 않는다**.
> `DB`와의 차이가 핵심.
> 
> | | DB | EQU |
> |---|---|---|
> | 선언 | `num DB 5` | `CONST EQU 9` |
> | 메모리 할당 | ✅ 있음 | ❌ 없음 |
> | 동작 | 주소를 통해 값 참조 | 어셈블 중 숫자로 **매크로처럼 복붙** |
> | 결과 | 메모리 피연산자 | 즉시 피연산자로 인라인됨 |
> 
> `CONST+3` 은 어셈블러가 `9+3 = 12` 로 계산해 바이너리에 `0C 00` 을 박는다.
> 런타임에는 CONST 라는 이름 자체가 존재하지 않는다.

> [!quote] Programmer's Guide.pdf, Chapter 1 (Page 12) - Symbolic Integer Constants
> 
> You can define symbolic integer constants with either of the data assignment directives, `EQU`or the equal sign (`=`). 
> 
> The directives `EQU` and `=` have slightly different purposes. Integers defined with `=` can be redefined, but those defined with `EQU` cannot. Once a symbolic constant is defined with `EQU`, redefining it generates an error.
> 
> Syntax: `symbol EQU expression`
