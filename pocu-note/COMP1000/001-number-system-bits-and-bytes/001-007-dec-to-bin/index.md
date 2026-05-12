---
tags:
  - COMP1000
  - COMP2300
aliases:
  - 10진수->2진수 변환
---
# 10진수->2진수 변환

![img_63.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-007-dec-to-bin/images/dec-to-bin-1.png)

2로 나누는 동작을 반복하면서 나머지를 오른쪽에 적어 나가기

![img_64.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-007-dec-to-bin/images/dec-to-bin-2.png)

몫이 1이 나오면 2를 나누는 동작을 종료

![img_64.png](pocu-note/COMP1000/001-number-system-bits-and-bytes/001-007-dec-to-bin/images/dec-to-bin-2.png)

십진수를 'Decimal'로 불러서 *DEC* 라는 표현을 사용

## 빠른 방법
![[pocu-note/COMP1000/001-number-system-bits-and-bytes/001-007-dec-to-bin/images/dec-to-bin-3.png]]
32 채우고
- 2^5
- 100000

5가 남았으니 4를 채우면
- 2^2
- 100

1이 남았으니
- 1

최종적으로 더하면
- 100101(2)

> [!NOTE] 2진법의 성질을 이용
> 
> 32를 채우면 2^4의 자리부터 아무리 1로 다 채워도 31으로, 32를 넘을 수 없음
> 
> 이런 성질로 채우기가 가능
> 
> 2^n의 계산은 거의 생각없이 나올 수 있기 때문에...




