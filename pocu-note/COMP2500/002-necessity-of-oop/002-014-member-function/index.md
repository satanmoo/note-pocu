---
tags:
  - COMP2500
  - week2
aliases:
  - 개체의 메서드 호출하기
---
# 개체의 메서드 호출하기

## 개체의 멤버 함수 호출하기

![img_88.png](pocu-note/COMP2500/002-necessity-of-oop/002-014-member-function/images/img_88.png)

멤버 변수와 동일하게 `.` 연산자 사용

![[pocu-note/COMP2500/002-necessity-of-oop/002-014-member-function/images/img_89.png]]

![img_90.png](pocu-note/COMP2500/002-necessity-of-oop/002-014-member-function/images/img_90.png)

- [[pocu-note/COMP2500/002-necessity-of-oop/002-001-limits-of-structure/index|구조체의 한계]] 참고
## Garbage Collection 

![img_91.png](pocu-note/COMP2500/002-necessity-of-oop/002-014-member-function/images/img_91.png)
![img_92.png](pocu-note/COMP2500/002-necessity-of-oop/002-014-member-function/images/img_92.png)
![img_93.png](pocu-note/COMP2500/002-necessity-of-oop/002-014-member-function/images/img_93.png)
![img_94.png](pocu-note/COMP2500/002-necessity-of-oop/002-014-member-function/images/img_94.png)

## 복습 퀴즈

```java
// Vector.java 
public class Vector { 
	public int x; 
	public int y; 
} 

// Main.java 
public class Main { 
	public static void main(String[] args) { 
		Vector v = new Vector(); 
		System.out.println(v.x); 
	} 
}
```

### 위 코드를 실행하면 출력되는 결과는 무엇인가요?

Java 에서 개체의 멤버 변수를 명시적으로 초기화 하지 않아도 0에 준하는 값으로 초기화
- 멤버 변수 `x`는 int 타입이니 0으로 초기화

정답: 0
