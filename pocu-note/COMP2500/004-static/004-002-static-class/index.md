---
tags:
  - COMP2500
  - week4
aliases:
  - 정적 클래스와 생성자
---
# 정적 클래스와 생성자

## private 생성자

![img_8.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-1.png)
![img_9.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-2.png)
![img_10.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-3.png)

기본 생성자를 클래스 다이어그램에 포함하기 
- 기본 생성자가 public이라서 외부에서 생성자를 호출해 개체를 생성할 수 있음

![img_11.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-4.png)
![img_12.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-5.png)
![img_13.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-6.png)

정적 멤버 변수를 개체에서 호출할 수 있는 이유
- 클래스는 **단 하나만** 존재
- 여러 개체가 클래스 하나를 참조

![img_14.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-7.png)

헷갈림을 막기 위해서 개체 생성을 막을 수 있음

![img_15.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-8.png)
![img_16.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-9.png)
![img_17.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-10.png)
![img_18.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-11.png)
![img_19.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-12.png)

private 생성자를 사용하는 방법은 hack
static class를 지원하는 언어는 hack을 사용하지 않아도 됨

![img_20.png](pocu-note/COMP2500/004-static/004-002-static-class/images/static-class-13.png)
