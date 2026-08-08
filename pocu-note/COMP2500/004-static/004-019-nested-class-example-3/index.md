---
title: 정적 내포 클래스를 사용할 경우
tags:
  - COMP2500
  - week4
aliases:
  - 정적 내포 클래스를 사용할 경우
---
# 정적 내포 클래스를 사용할 경우

## 정적 내포 클래스를 사용한 버젼

![nested-class-example-3-1.png](pocu-note/COMP2500/004-static/004-019-nested-class-example-3/images/nested-class-example-3-1.png)

내포 클래스에 static 키워드 추가
- [[pocu-note/COMP2500/004-static/004-018-nested-class-example-2/index|비정적 내포 클래스를 사용할 경우]] 와 차이점

생성자로 `Record` 개체를 받아야함
- 그렇지 않으면 외부 클래스의 멤버에 바로 접근할 수 없음
- 외부 클래스의 참조만 ==있다면== 외부 클래스의 private 멤버에 접근 가능
	- 접근제어자는 클래스 레벨 개념, 개체 레벨 개념이 아님

![nested-class-example-3-2.png](pocu-note/COMP2500/004-static/004-019-nested-class-example-3/images/nested-class-example-3-2.png)
![nested-class-example-3-3.png](pocu-note/COMP2500/004-static/004-019-nested-class-example-3/images/nested-class-example-3-3.png)

static을 붙이는 것은 outer class의 레퍼런스가 없다는 의미
- outer class의 레퍼런스가 없기 때문에 외부에서 생성자로 입력받음
- 입력받은 outer class의 개체를 통해서만 outer class의 non-static 멤버에 접근할 수 있음
- [[pocu-note/COMP2500/004-static/004-018-nested-class-example-2/index|비정적 내포 클래스를 사용할 경우]]의 내포 클래스는 외부 클래스에 대한 참조를 암시적으로 가짐

![nested-class-example-3-4.png](pocu-note/COMP2500/004-static/004-019-nested-class-example-3/images/nested-class-example-3-4.png)
[[pocu-note/COMP2500/004-static/004-017-nested-class-example/index|내포 클래스를 사용 안 할 경우]] 보다 강한 캡슐화

![nested-class-example-3-5.png](pocu-note/COMP2500/004-static/004-019-nested-class-example-3/images/nested-class-example-3-5.png)

outer class의 static 멤버는 inner class가 가지고 있는 outer class의 개체에 대한 참조를 통하지 않고 바로 접근할 수 있음
- 클래스 레벨에서 하나만 있으니
- 예시에서도 outer class에 대한 참조를 통하지 않고 바로 정적 멤버에 접근
- `Record.SOME_HACK` 처럼 클래스명을 붙이지 않아도 됨
	- 클래스명 붙여도 컴파일 오류는 나지 않음

인스턴스 멤버 변수 `ANOTHER_HACK`의 경우 outer class 인스턴스의 참조가 필요
- `record.ANOTHER_HACK` 과 같이 참조 변수를 통해 접근

![nested-class-example-3-6.png](pocu-note/COMP2500/004-static/004-019-nested-class-example-3/images/nested-class-example-3-6.png)

내포 클래스가 아닌 경우 public, 기본 접근제어자 붙일 수 있음
- 최상위 레벨 클래스
- [[pocu-note/COMP2500/002-necessity-of-oop/002-018-access-modifier/index#접근 제어자 private|접근 제어자]] 참고

내포 클래스는 4종류 접근제어자 모두 붙일 수 있음

## 복습 퀴즈

```java
package academy.pocu;  
  
public class Outer {  
    private int value;  
  
    public Outer(int value) {  
        this.value = value;  
    }  
  
    public static class Nested {  
        public void print() {  
            System.out.println(value);  
        }  
    }  
}
```

```java
Outer outer = new Outer(1);
Outer.Nested nested = outer.new Nested();
nested.print();
```

### 1. 위 코드의 출력 결과는 무엇인가요?

컴파일 오류 발생

`Nested`는 정적 내포 클래스
- 외부 클래스 인스턴스 참조 없어도 됨
- `outer.new` 문법이 오류
- `Outer.new`
