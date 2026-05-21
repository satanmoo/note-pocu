---
tags:
  - COMP2500
  - week4
aliases:
  - 싱글턴 패턴 예
---
# 싱글턴 패턴 예

## 싱글턴 Math 클래스

![singleton-example-1.png](pocu-note/COMP2500/004-static/004-012-singleton-example/images/singleton-example-1.png)
![singleton-example-2.png](pocu-note/COMP2500/004-static/004-012-singleton-example/images/singleton-example-2.png)
![singleton-example-3.png](pocu-note/COMP2500/004-static/004-012-singleton-example/images/singleton-example-3.png)

싱글턴을 만드는데 필요한 것(멤버 변수, 메서드)만 static으로 선언  

나머지 메서드는 비정적으로 선언  

사실 이 예(`Math`)는 정적 클래스로 선언하는게 더 좋음
- 메서드만 있기 때문
- 상태가 없음

아래 `Configuration`은 상태를 가지는 예

![singleton-example-4.png](pocu-note/COMP2500/004-static/004-012-singleton-example/images/singleton-example-4.png)
![singleton-example-5.png](pocu-note/COMP2500/004-static/004-012-singleton-example/images/singleton-example-5.png)
![singleton-example-6.png](pocu-note/COMP2500/004-static/004-012-singleton-example/images/singleton-example-6.png)
![singleton-example-7.png](pocu-note/COMP2500/004-static/004-012-singleton-example/images/singleton-example-7.png)
![singleton-example-8.png](pocu-note/COMP2500/004-static/004-012-singleton-example/images/singleton-example-8.png)
