---
aliases:
  - 예외 다시 던지기(rethrow)
tags:
  - COMP2500
  - week12
---
# 예외 다시 던지기(rethrow)

![](pocu-note/COMP2500/013-exception/013-004-rethrow/images/rethrow-1.png)

예외 발생 시 진행 순서 정리

![](pocu-note/COMP2500/013-exception/013-004-rethrow/images/rethrow-2.png)

로그만 남거나 절반을 해결하거나 등 위에서 해결하기
- 호출 스택을 유지하면서 위로 던져야 함

![](pocu-note/COMP2500/013-exception/013-004-rethrow/images/rethrow-3.png)

C#에서 실수하기 쉬움
- `throw`만 넣어야 함
- `throw e` 하면 안 됨

![](pocu-note/COMP2500/013-exception/013-004-rethrow/images/rethrow-4.png)

자바에서는 그냥 `throw e`(변수) 하면 호출 스택 유지됨

![](pocu-note/COMP2500/013-exception/013-004-rethrow/images/rethrow-5.png)

rethrow 한다면 ==반드시== 호출 스택을 유지하면서 던질 것!
