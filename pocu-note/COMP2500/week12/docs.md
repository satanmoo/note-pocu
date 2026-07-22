# Week12


## 복습퀴즈: 디자인 패턴

- 어떤 개체의 상태가 변할 때 다른 개체들의 상태도 연쇄적으로 바뀌게 하려면 사용하기 적합한 패턴은?
    - 옵저버 패턴
    - 책임 연쇄 패턴이랑 착각하지 마쇼. 책임 연쇄 패턴은 한 개체가 책임을 지면 그 뒤로 기회를 받지 못함
- 개체 생성이 값비싼 연산을 수반할 때 그 연산을 최대한 늦추는 패턴은?
    - 프록시 패턴
- 우선순위에 따라 여러 개체에게 일을 처리할 기회를 주려고 할 때 적합한 패턴은?
    - 책임 연쇄 패턴

## 예외

- 개체지향과 비슷한 시점에 나왔음

![img_163.png](pocu-note/COMP2500/week12/images/img_163.png)

- try 블록 위에서 부터 순서대로 실행
- 예외 발생하면 예외 종류에 따라 분기해서 catch
    - 언어 자체에서 제공하는 예외
    - 사용하는 함수에서 자체적으로 제공하는 예외
- 예외 발생 여부와 관계없이 finally 블록 실행
    - catch 에서 return 문이 있더라도 finally 블록 실행

![img_164.png](pocu-note/COMP2500/week12/images/img_164.png)

- Exception 클래스는 최상위 예외 부모
- catch 문에 부모 클래스 넣으면 자식 클래스 예외가 발생하면 캐치함

![img_165.png](pocu-note/COMP2500/week12/images/img_165.png)

- 부모 예외 클래스 catch 블락이 자식 예외 클래스 catch 블락보다 위에 나오면 안 됨
    - catch 문에 부모 클래스 넣으면 자식 클래스 예외가 발생하면 캐치하기 때문
    - 왼쪽의 예에서는 `FileNotFoundException` 예외가 발생할 수 없음
- specific to general 로 작성하자~

### 예외 예시 사용법

![img_166.png](pocu-note/COMP2500/week12/images/img_166.png)

![img_167.png](pocu-note/COMP2500/week12/images/img_167.png)

![img_168.png](pocu-note/COMP2500/week12/images/img_168.png)

- 최종 파일 경로를 구하는 코드

![img_169.png](pocu-note/COMP2500/week12/images/img_169.png)

- 파일의 모든 줄을 읽는 코드

![img_170.png](pocu-note/COMP2500/week12/images/img_170.png)

- 몇 줄 읽었다고 출력

![img_171.png](pocu-note/COMP2500/week12/images/img_171.png)

- 예외 발생하지 않아서 catch 블록에 걸리지 않고 한 줄 씩 출력

![img_172.png](pocu-note/COMP2500/week12/images/img_172.png)

- 이제 catch 에서 예외 잡는 사례

![img_173.png](pocu-note/COMP2500/week12/images/img_173.png)

- path 값에 해당하는 경로에 파일이 없기 때문에 예외 발생

![img_174.png](pocu-note/COMP2500/week12/images/img_174.png)

- 예외가 발생하는 순간 다음은 실행 안 됨
  - `Files.readAllLines(path)`에서 예외 발생하고, `System.out.format...` 은 건너뜀

![img_175.png](pocu-note/COMP2500/week12/images/img_175.png)

![img_176.png](pocu-note/COMP2500/week12/images/img_176.png)

![img_177.png](pocu-note/COMP2500/week12/images/img_177.png)

- stack trace 출력

![img_178.png](pocu-note/COMP2500/week12/images/img_178.png)

![img_179.png](pocu-note/COMP2500/week12/images/img_179.png)

![img_180.png](pocu-note/COMP2500/week12/images/img_180.png)

- IOException catch 블록에서 return 문으로 함수 빠져나감
- 만약 return 문이 없다면?
    - 아래 for (String line: lines) 로 건너뛰어 실행함

### Exception 클래스가 가지고 있는 출력 매소드

![img_181.png](pocu-note/COMP2500/week12/images/img_181.png)

- printStackTrace()
- getMessage()

### finally 사용 예

![img_182.png](pocu-note/COMP2500/week12/images/img_182.png)

- 파일에 Byte 타입으로 쓰는 함수 2번 호출

![img_183.png](pocu-note/COMP2500/week12/images/img_183.png)

- WriteByte 함수 블록의 구현에서 파일을 염
- 첫번째 WriteByte 함수 호출 뒤 파일을 닫지 않고, 두번째 WriteByte 함수를 호출했기에 예외 발생

![img_184.png](pocu-note/COMP2500/week12/images/img_184.png)

- 파일을 닫는 코드를 추가해도 문제가 있음
- fs.WriteByte() 에서 문제가 생기면, 즉 파일을 작성하는 동안 문제가 생겨서 예외가 생기면
    - fs.Close() 구문이 실행되지 않음
- 이 예외를 잡기 위해 catch IOException 블록을 추가해서 fs.Close() 를 넣을 수 있음
    - 근데 또 다른 예외가 발생하면, 또 catch 블록 추가하고..
        - 이게 귀찮음
        - 모든 예외가 발생하는 케이스 + 예외가 발생하지 않는 케이스 모두 fs.Close() 를 호출하게 하고싶음

![img_185.png](pocu-note/COMP2500/week12/images/img_185.png)

- finally 블록에서 if (fs != null) 조건으로 파일 열렸는지 확인
- catch 블록에서 return 문으로 함수를 리턴할 때 finally 블록은 실행하고 리턴함
  - 컴파일러 과정에서 반드시 finally 블록을 실행하도록 블록 실행 루틴을 삽입한다고 생각하면 됨

![img_186.png](pocu-note/COMP2500/week12/images/img_186.png)

- 정상적으로 도는 것 처럼 보이는 코드

![img_187.png](pocu-note/COMP2500/week12/images/img_187.png)

- FileOutputStream 클래스 개체를 GC가 닫아줌
    - 내부적으로 finalize(), close() 호출
- 일반적으로 한 프로그램이 열 수 있는 파일의 수를 제한함
    - OS의 역할로 리소스 제한

![img_188.png](pocu-note/COMP2500/week12/images/img_188.png)

- GC의 finalize()에 의존하는 것을 피하자!!

![img_189.png](pocu-note/COMP2500/week12/images/img_189.png)

- close() 직접 호출
- try-with-resources 문

![img_190.png](pocu-note/COMP2500/week12/images/img_190.png)

- out != null 조건
    - out = new FileOutputStream(...) 생성자를 호출할 때 정상적으로 파일 스트림을 열였으면, null이 아니게 됨
- finally 블록 안에서 out.close() 를 호출할 때 try, catch 문으로 넣어야함
    - 안 그러면 컴파일 오류
    - 자바에서 chekced exception에 강제하는 규칙
- https://docs.oracle.com/javase/8/docs/api/?java/io/FileOutputStream.html

## 예외 다시 던지기 (rethrow)

![img_191.png](pocu-note/COMP2500/week12/images/img_191.png)

- 예외 발생 시 진행 순서 정리

![img_192.png](pocu-note/COMP2500/week12/images/img_192.png)

- 로그만 남기고 절반 해결하고, 위에서 해결하기
- 호출 스택을 유지하면서 위로 던져야함~~

![img_193.png](pocu-note/COMP2500/week12/images/img_193.png)

- C# 에서 실수하기 쉬움
    - throw 만 넣어야함
    - throw e 하면 안 됨

![img_194.png](pocu-note/COMP2500/week12/images/img_194.png)

- 자바에서는 그냥 throw e(변수) 하면 호출 스택 유지됨

![img_195.png](pocu-note/COMP2500/week12/images/img_195.png)

- rethrow 무지성으로 남발하지 말자

## 나만의 예외 만들기

![img_196.png](pocu-note/COMP2500/week12/images/img_196.png)

- 상속을 이용하자
    - 당연히 클래스 선언해야겠쥬
    - super 로 부모 클래스 초기화하고

![img_197.png](pocu-note/COMP2500/week12/images/img_197.png)

- RuntimeException 클래스의 생성자에 명시된 생성자 매서드 시그니처대로 잘 쓰면 됨

![img_198.png](pocu-note/COMP2500/week12/images/img_198.png)

- 유저 이름으로 비교하고 못 찾으면 예외 던짐

### C# vs Java 예외

![img_199.png](pocu-note/COMP2500/week12/images/img_199.png)

![img_200.png](pocu-note/COMP2500/week12/images/img_200.png)

- Java 에서 RuntimeException 을 사용하는 예가 많음

![img_201.png](pocu-note/COMP2500/week12/images/img_201.png)

- 물론 자바에서도 Exception 클래스를 상속해도 됨
- 옛날에는 Exception 클래스를 많이 사용했음

![img_202.png](pocu-note/COMP2500/week12/images/img_202.png)

- C# Exception == Java RuntimeException
- 그럼 Java Exception 클래스는 뭐가 다른가?

## Java Exception

![img_203.png](pocu-note/COMP2500/week12/images/img_203.png)

- 배경을 알아보자

![img_204.png](pocu-note/COMP2500/week12/images/img_204.png)

- 예외 catch를 전혀 안 했다고 가정해보자

![img_205.png](pocu-note/COMP2500/week12/images/img_205.png)

- main() 함수에서도 catch 하지 않음
- main() 함수에서 위로 던지면 JVM 에서 처리
    - JVM 은 오류메시지를 보여주고 프로그램을 종료시킴

![img_206.png](pocu-note/COMP2500/week12/images/img_206.png)

- JVM이 OS 대신 책임져줌

![img_207.png](pocu-note/COMP2500/week12/images/img_207.png)

- 그러면 가상머신이 없는 예전은 어떨까?

### 옛날 이야기

![img_208.png](pocu-note/COMP2500/week12/images/img_208.png)

- 프로그램이 예외로 뻗으면 크래시(하드웨어가 뻗음)
    - 그냥 멈춘 상태
    - 해결법은 재부팅

![img_209.png](pocu-note/COMP2500/week12/images/img_209.png)

- 누군가 재부팅할 사람이 없는 구조라면?
- 웹서버 켜놓고 자다가 재부팅해야해?

### 요즘 이야기

![img_210.png](pocu-note/COMP2500/week12/images/img_210.png)

- 가상 메모리
- 프로그램마다 독자적인 메모리 공간

![img_211.png](pocu-note/COMP2500/week12/images/img_211.png)

- 크래시가 발생해도 OS가 프로그램 종료, 가상 메모리 해제
- 즉 프로그램을 껐다 키면 해결이 됨
    - 옛날에는 하드웨어 자체를 껐다 켰죠?

- 그래서 결론:
    - 요즘은 예전보다 예외 처리의 실익이 줄어듬
        - 컴퓨터 재부팅 vs 프로그램 재부팅

## 잘못된 예외 처리 방식

![img_212.png](pocu-note/COMP2500/week12/images/img_212.png)

- 요즘은 예외를 덜 사용하면 프로그램의 품질이 더 좋아짐

![img_213.png](pocu-note/COMP2500/week12/images/img_213.png)

![img_214.png](pocu-note/COMP2500/week12/images/img_214.png)

- 오류 상황을 반환하는걸 포프샘은 권함

![img_215.png](pocu-note/COMP2500/week12/images/img_215.png)

- 예외를 던지는 방식은 사람이 사용하기 쉽지 않음
- 왜?

![img_216.png](pocu-note/COMP2500/week12/images/img_216.png)

- 예외를 던지면 함수의 명백함이 사라짐
    - 함수를 작성할 때 함수가 올바르게 작성하지 않는다는 것을 가정하고 작성해야함
- 함수 시그니처가 함수 호출자와 함수 제작자의 규약
    - 이 규약을 가지고 통신할 수 있게 만드는게 좋음
- 합수 호출 깊이가 깊어지면 정말 예외를 처리하기 힘들어짐

![img_217.png](pocu-note/COMP2500/week12/images/img_217.png)

- 예외 때문에 모든 함수를 다 까보는 것은 캡슐화에 위배됨

![img_218.png](pocu-note/COMP2500/week12/images/img_218.png)

- 함수 위에 어떤 예외를 던지는지 주석으로 표기
- 하지만 사람들은 잘 안 읽죠?

![img_219.png](pocu-note/COMP2500/week12/images/img_219.png)

## Java checked exception vs unchecked exception

![img_220.png](pocu-note/COMP2500/week12/images/img_220.png)

- Java 예외는 2종류

![img_221.png](pocu-note/COMP2500/week12/images/img_221.png)

### unchecked exception

![img_222.png](pocu-note/COMP2500/week12/images/img_222.png)

- 코드를 까보거나, 문서를 읽지 않으면 어떤 함수가 어떤 예외를 던지는지 확인하기 어려움

### checked exception

![img_223.png](pocu-note/COMP2500/week12/images/img_223.png)

- 컴파일러가 check 하는 예외
- checked exception 이 발생하는 코드에서 처리하지 않으면 컴파일 오류 발생
    - catch
    - 이 매서드가 예외를 던진다는 것을 매서드 시그니처에 표기

![img_224.png](pocu-note/COMP2500/week12/images/img_224.png)

- Exception 클래스는 checked exception

![img_225.png](pocu-note/COMP2500/week12/images/img_225.png)

- 이렇게 매서드 시그니처에 표기해야함
- RuntimeException 클래스의 경우 unchecked exception
    - 따라서 이런 제약 없음

![img_226.png](pocu-note/COMP2500/week12/images/img_226.png)

- 매서드 시그니처에 예외가 표기된 함수를 사용하는 곳에서 try-catch 해줘서 컴파일 오류 없음
    - main 함수에서도 이 예외를 던진다는 것을 표기하면 됨

```java
public static void main(String[] args) throws UserNotFoundException {
    User user = null;
    user = db.findUser("pope"); // 예외가 발생하면 JVM에 전달됨
}
```

### throws 절

![img_227.png](pocu-note/COMP2500/week12/images/img_227.png)

- 매서드 시그니처에 예외를 추가하는 문법

![img_228.png](pocu-note/COMP2500/week12/images/img_228.png)

- checked exception 인데
    - catch 로 처리하지 않음
    - 매서드 시그니처에 throws 절 표기 안 하면 컴파일 오류

![img_229.png](pocu-note/COMP2500/week12/images/img_229.png)

- 만약 main() 에서 catch 하고 처리하지 않고 싶다면?

![img_230.png](pocu-note/COMP2500/week12/images/img_230.png)

- checked exception 인데
    - catch 로 처리하지 않음
    - 매서드 시그니처에 throws 절 표기 안 하면 컴파일 오류
- 똑같이 규칙 적용됨

```java
public static void main(String[] args) {
    User user = null;
    try {
        user = db.findUser("pope"); // 예외 발생 가능
    } catch (UserNotFoundException e) {
        e.printStackTrace(); // 로그 남기기
        throw e; // 예외를 다시 던짐
    }
}
```

- 참고로 catch 에서 처리하는데 또 다시 예외를 던지면?
- throws 절이 필요함
- 이건 처리한게 아니라 그냥 다시 던지는 개념이라 컴파일러에서 오류 냄

```java
public static void main(String[] args) {
    User user = null;
    try {
        user = db.findUser("pope");
    } catch (UserNotFoundException e) {
        e.printStackTrace(); // 로그 남기기
        System.out.println("User not found: " + e.getMessage());
    }
}
```

- 이렇게 완전히 처리하거나

```java
public static void main(String[] args) throws UserNotFoundException {
    User user = null;
    try {
        user = db.findUser("pope");
    } catch (UserNotFoundException e) {
        e.printStackTrace();
        throw e;
    }
}
```

- 다시 던지러면 매서드 시그니처에 throws 절 표기

### 실무적으로 checked, unchecked 구분하기

![img_231.png](pocu-note/COMP2500/week12/images/img_231.png)

- 사용할 때는
    - Exception 상속:
        - checked
    - RuntimeException 상속:
        - unchecked

![img_232.png](pocu-note/COMP2500/week12/images/img_232.png)

- RuntimeException 클래스는 Exception 클래스를 상속받아 checked exception 으로 컴파일러 확인하는 기능을 무시함

## checked 예외의 존재의의

![img_233.png](pocu-note/COMP2500/week12/images/img_233.png)

![img_234.png](pocu-note/COMP2500/week12/images/img_234.png)

- checked exception 이 녀석은 왜 필요할까?

![img_235.png](pocu-note/COMP2500/week12/images/img_235.png)

- API 제작자 입장에서 생각
- 매서드 시그니처에 처리하라고 명시할 수 있음

![img_236.png](pocu-note/COMP2500/week12/images/img_236.png)

- 근데 처리는 뭘까?
    - 매서드 시그니처에는 예외를 던지다고만 표기함

### checked exception 존재의의 추측 1

![img_237.png](pocu-note/COMP2500/week12/images/img_237.png)

- 처리 안하고 다시 던지는 상황을 생각해보자

![img_238.png](pocu-note/COMP2500/week12/images/img_238.png)

- 함수 시그니처에 throws 절이 굉장히 길어지는 것 확인할 수 있음

![img_239.png](pocu-note/COMP2500/week12/images/img_239.png)

- 특히 depth 가 있으면 ㅎㄷㄷ

![img_240.png](pocu-note/COMP2500/week12/images/img_240.png)

![img_241.png](pocu-note/COMP2500/week12/images/img_241.png)

- 너무 고통스러운데요?

![img_242.png](pocu-note/COMP2500/week12/images/img_242.png)

### checked exception 존재의의 추측 2

![img_243.png](pocu-note/COMP2500/week12/images/img_243.png)

- catch 하고 이렇게 간단하게 처리(출력)만 하는 것을 영어로 swallow 라고 표현함
    - 꿀꺽 삼킴

![img_244.png](pocu-note/COMP2500/week12/images/img_244.png)

- 이럴 바에는 예외를 왜 던짐? 그냥 리턴하지

### checked exception 존재의의 추측 3

![img_245.png](pocu-note/COMP2500/week12/images/img_245.png)

- checked exception 을 처리 안 하면 컴파일 오류까지 내는 이유는 예외 상황이 발생하면 프로그램을 정상적으로 회복하라는 거임

![img_246.png](pocu-note/COMP2500/week12/images/img_246.png)

## 예외로부터 안전한 프로그래밍: 현실적으로 불가능

![img_247.png](pocu-note/COMP2500/week12/images/img_247.png)

- 추측 3 에서 생각한 것 처럼 프로그램을 정상 상태로 회복 할 수 있을까?

![img_248.png](pocu-note/COMP2500/week12/images/img_248.png)

- 포인트 결제 연산
    - 포인트 차감하기 연산 종료 후
    - 재고 갱신 연산 종료 후
    - 주문 넣기 연산 중 예외 발생

![img_249.png](pocu-note/COMP2500/week12/images/img_249.png)

![img_250.png](pocu-note/COMP2500/week12/images/img_250.png)

- 역순으로 undo
- 이런 방식을 exception safe programming 이라고 부르는데
    - 상당히 귀찮고 어려움

![img_251.png](pocu-note/COMP2500/week12/images/img_251.png)

![img_252.png](pocu-note/COMP2500/week12/images/img_252.png)

![img_253.png](pocu-note/COMP2500/week12/images/img_253.png)

- 모든 예외를 안전하게 처리하는 것은 현실적으로 불가능함

![img_254.png](pocu-note/COMP2500/week12/images/img_254.png)

- 이런건 제품 설계를 어떻게 하냐에 따라 달라지고, 비즈니스에 따라 달라지고
- 프로그램으로 모든 것을 해결할 수 있는건 아님
- 결론은 checked exception 사용하고 예외를 안전한게 처리하는 방식은 한계가 있음

## 요즘 예외 처리 트렌드

- 그래서 checked exception 사용 + exception safe programming >> 말고 요즘 트랜드

### 요즘 1: unchecked 로 돌아가기

![img_255.png](pocu-note/COMP2500/week12/images/img_255.png)

- checked exception catch 로 잡고 unchecked exception 던지기
    - RuntimeException 클래스로 새로 던짐
- 함수 시그니처에 throws 절도 빼버림
- 그래서 unchecked exception 단점이 다시 들어남
    - 어떤 함수에서 예외를 던지는지 알기 어려움
    - 그래서 checked exception 에서 throws 절을 강제해서 가시성을 높였었죠

### 요즘 2: 재부팅

![img_256.png](pocu-note/COMP2500/week12/images/img_256.png)

- 예외로 부터 회복하지 않는다
    - 아까 포인트로 결제하는 연산에서 생각해보기
        - 포인트 회복, 재고 복구 >> 이런 회복 작업하다가 잘 못할 수도 있음
        - 이렇게 되면 오히려 고칠게 많아지죠?
    - 그래서 실패하면 바로 종료하고 고치고 재시작하는게 더 좋을 수도 있음

### 예외의 세분성에 대한 고민(exception granularity)

![img_257.png](pocu-note/COMP2500/week12/images/img_257.png)

![img_258.png](pocu-note/COMP2500/week12/images/img_258.png)

- 특정 문제 상황마다 예외 클래스를 만들고 catch 문에서 타입별로 처리하고
    - 타입에 의존하면 명확하게 어떤 예외인지 알 수 있고 catch 문에서 처리하기도 편하고

![img_259.png](pocu-note/COMP2500/week12/images/img_259.png)

- 문제 상황이 발생하면 특정 예외를 던짐
- 근데 catch 를 Exception 으로 한 방에 처리(?)함
    - 주로 main() 에서
    - 보통 catch 할 때 로그는 남기고, 다시 던짐
    - 포프쌤은 처리(?)라는 표현이 애매하다고 함
        - 로그는 남기되 정상 회복작업을 하는건 아님
        - 그리고 catch Exception 으로 한 방에 잡으면 예외 타입을 알기 어렵기 때문에 처리하기도 어려움
- 극단적 의견으로 RunTimeException 으로 던지되, 메시지만 잘 작성하자는 의견도 있음
- 여튼 결론은 catch 에서 Exception 타입으로 한 방에 잡아서 처리하는게 트랜드

## 잘못된 예외 처리 가이드 조심하기

![img_260.png](pocu-note/COMP2500/week12/images/img_260.png)

- 예외를 회복해서 프로그램 계속 돌도록 만들어라는 주장
    - checked exception 유행할 때 주장

![img_261.png](pocu-note/COMP2500/week12/images/img_261.png)

- 이런 주장이 나온 배경을 생각해보자

![img_262.png](pocu-note/COMP2500/week12/images/img_262.png)

- 과거의 공포
- 프로그램이 크래시나면 누군가 켜줘야하는

![img_263.png](pocu-note/COMP2500/week12/images/img_263.png)

![img_264.png](pocu-note/COMP2500/week12/images/img_264.png)

- 이 과거의 공포 때문이라고 추론할 수 있는 이유는 이 문장에서 힌트를 얻을 수 있음

![img_265.png](pocu-note/COMP2500/week12/images/img_265.png)

- 프로그램을 시작할 때는 프로그램을 켰던 사람이 컴퓨터 앞에 있을거니

![img_266.png](pocu-note/COMP2500/week12/images/img_266.png)

- 예외가 JVM 까지 올라오고 프로그램 종료되거나, 예외 처리 안 해서 크래시가 난다면 웹서버 다시 켜줘야함
    - 이걸 두려워한거죠
- 즉 예전에 웹서버 누군가 재부팅해야되는 상황에 대한 두려움이 남아있음

![img_267.png](pocu-note/COMP2500/week12/images/img_267.png)

- 기본적으로 예외 처리 안 하면 다시 키면 됨

![img_268.png](pocu-note/COMP2500/week12/images/img_268.png)

- 지켜보는 사람 없이 오래 작동하는 프로그램의 경우
    - 다른 프로그램을 이용해 프로그램을 재시작하게 하면 됨
    - OS 에서 해주기도 하고, 도커같은 컨테이너에서 해주기도 함
- 요즘은 기계가 크래시나는 경우는 OS가 일단 막아주니

![img_269.png](pocu-note/COMP2500/week12/images/img_269.png)

- 오히려 모든 예외를 catch 하고 고치려는 시도, 즉 예외로부터 안전한 프로그래밍(exception safe programming)을 시도하다가 '실패'하면 더 문제가 많음
    - 예외를 회복하려다 오히려 프로그램을 이상한 상태에 빠지게 할 수도
    - 이상한 상태로 계속 동작하는 프로그램을 '좀비 프로그램' 이라고 부름
        - 이러면 어디서 문제가 발생했는지 알기가 어려움
        - 예외 발생 시 프로그램을 종료한다면, 그 문제는 바로 알 수 있죠? 그 이후 문제는 없으니

![img_270.png](pocu-note/COMP2500/week12/images/img_270.png)

- 결론은 상황에 맞게

## 제어 흐름용으로 예외를 사용하지 말 것

![img_271.png](pocu-note/COMP2500/week12/images/img_271.png)

- 예외를 제어흐름용으로 사용하면 goto와 개념이 같음

![img_272.png](pocu-note/COMP2500/week12/images/img_272.png)

- 재귀 콜스택에서 한 번에 빠져나오려고 예외를 사용하는 건 정말 나쁜 예
- search 함수를 호출한 곳에서 catch 해서 결과를 사용하겠다는 의도인데...
- 이런건 금지

![img_273.png](pocu-note/COMP2500/week12/images/img_273.png)

- 정수를 읽다 실패하면 무조건 예외가 발생할 수 밖에 없음
- NumberFormatException 일 때 로직을 넣고 싶으면 제어흐름용으로 사용할 수 밖에 없음

![img_274.png](pocu-note/COMP2500/week12/images/img_274.png)

- C# TryParse() 의 경우 예외를 던지지 않고, boolean 반환해서 제어흐름용으로 사용할 수 있게 언어에서 지원
- Java 에서는 직접 만들어서 TryParse() 흉내낼 수 있음
    - 내부적으로 try-catch 문 이용하면 됨
    - 이것도 캡슐화라고 볼 수 있죠, 호출자는 내부적으로 try-catch 사용하는지 몰라도 됨

## 예외적인 상황에만 예외를 사용해야 하는 경우: 제어 흐름용으로 예외를 사용하면 나쁜 이유

![img_275.png](pocu-note/COMP2500/week12/images/img_275.png)

- 제어의 흐름으로 쓸 수 있다고, 해야하는건 아님

![img_276.png](pocu-note/COMP2500/week12/images/img_276.png)

![img_277.png](pocu-note/COMP2500/week12/images/img_277.png)

![img_278.png](pocu-note/COMP2500/week12/images/img_278.png)

- 예외 중단점 기능
- 예외가 발생하면 프로그래밍 실행을 중단하고 보여줌
- 이 기능 잘 써라

![img_279.png](pocu-note/COMP2500/week12/images/img_279.png)

![img_280.png](pocu-note/COMP2500/week12/images/img_280.png)

![img_281.png](pocu-note/COMP2500/week12/images/img_281.png)

![img_282.png](pocu-note/COMP2500/week12/images/img_282.png)

- 개념적으로 예외답게 사용하자

![img_283.png](pocu-note/COMP2500/week12/images/img_283.png)

- 예외가 오류 상황이라는 전제하에 모든 툴이 개발됨
- 즉 모두가 동의하는 개념대로 해야함

![img_284.png](pocu-note/COMP2500/week12/images/img_284.png)

- 남하고 일할 때 이런게 중요함

## 올바른 오류 처리방법

![img_285.png](pocu-note/COMP2500/week12/images/img_285.png)

- happy path 를 벗어나는 상황을 이 강의에서는 '오류 상황' 이라고 부르기로 함
    - 오류 상황, 예외 상황, 프로그래밍 언어의 Exception 용어들이 혼용되기도 해서 문맥에 따라 해석해야함

![img_286.png](pocu-note/COMP2500/week12/images/img_286.png)

- 오류 상황에서 어떻게 처리해야하는가?

### 오류 상황

![img_287.png](pocu-note/COMP2500/week12/images/img_287.png)

- 오류 상황은 예측이 가능해야함
    - 예를 들어 파일을 열 때 파일이 사라지는 경우
- 오류 상황에 대한 처리는 기능의 일부임

### 버그

![img_288.png](pocu-note/COMP2500/week12/images/img_288.png)

- 예측 못한 상황은 버그
- 버그는 고치고 다시 빌드해야함

### 오류 처리 방법 정리

![img_289.png](pocu-note/COMP2500/week12/images/img_289.png)

![img_290.png](pocu-note/COMP2500/week12/images/img_290.png)

![img_291.png](pocu-note/COMP2500/week12/images/img_291.png)

![img_292.png](pocu-note/COMP2500/week12/images/img_292.png)

![img_293.png](pocu-note/COMP2500/week12/images/img_293.png)

![img_294.png](pocu-note/COMP2500/week12/images/img_294.png)

### 사실 오류 상황을 피하는게 최고임

![img_295.png](pocu-note/COMP2500/week12/images/img_295.png)

- 가장 중요한거죠
- 예를 들어 파일을 읽는데, 파일이 있는지 확인하고 없으면 아에 여는 시도를 안 하는 거죠

![img_296.png](pocu-note/COMP2500/week12/images/img_296.png)

- 인터페이스 개념
- 내가 만드는 코드의 시스템(세계)를 완전히 통제하고, 밖은 통제 못하는 개념

![img_297.png](pocu-note/COMP2500/week12/images/img_297.png)

- 내 시스템 안에 들어온 데이터는 언제나 유효
    - 예외 상황을 고려할 필요 없음
    - 예외 상황이 발생하면 그건 버그
        - 시스템의 문제

![img_298.png](pocu-note/COMP2500/week12/images/img_298.png)

- 남으로부터 받아오는 데이터는 유효하지 않다고 의심
- 경계에서 잡자, 유효성 검증

![img_299.png](pocu-note/COMP2500/week12/images/img_299.png)

- 경계에서 남에게 문제를 알려주는 방법
    - boolean, null 반환
    - 오류코드 반환
        - main() 에서 보통 이렇게 하죠
    - 예외를 던짐

![img_300.png](pocu-note/COMP2500/week12/images/img_300.png)

### 오류 처리 방법 1: 무시

![img_301.png](pocu-note/COMP2500/week12/images/img_301.png)

- 오류 상황 발생 시
    - 예를 들어 외부에서 들어오는 데이터를 검증하는 상황
- 결과적으로 프로그램에 3가지 일 중 하나 발생

![img_302.png](pocu-note/COMP2500/week12/images/img_302.png)

- 보통은 1,2 번
    - 블루 스크린은 운영체제 크래시

![img_303.png](pocu-note/COMP2500/week12/images/img_303.png)

- 데이터가 망가진 상태로, 연산을 하다가 심각한 상황을 초래할 수도 있음

![img_304.png](pocu-note/COMP2500/week12/images/img_304.png)

- 1,2 번 크래시 나는 경우를 매우 안 좋게 보고 무시하는 방법을 저평가하는 사람도 있지만...
    - 실제로는 아님

### 오류 처리 방법 2: 종료

![img_305.png](pocu-note/COMP2500/week12/images/img_305.png)

- 사용자에게 어떤 문제가 있었는지 사용자에게 보여주고 정상 종료
- 크래시랑 어떤게 다르냐면
    - 올바른 사용 방법이 아님
    - 데이터도 올바르지 않음
    - 따라서 심각한 문제를 초래할 수 있음
    - 그래서 종료
- 내가 사용하는 외부 라이브러리에서 내 프로그램을 종료하는 경우가 이런 경우
- 크래시랑 개념이 다름

![img_306.png](pocu-note/COMP2500/week12/images/img_306.png)

- 크래시랑 다르게 좋은 점은 정리를 하고 종료할 수 있음
- 저장도 가능하죠

### 오류 처리 방법 3: 수정

![img_307.png](pocu-note/COMP2500/week12/images/img_307.png)

- 말 그대로 오류 상황을 자체적으로 고치는 것
- UX 고려하면 그냥 수정하는 것 보다 유저에게 다시 입력하라고 요청하는게 좋음

![img_308.png](pocu-note/COMP2500/week12/images/img_308.png)

- 예외는 성능에도 좋지 않아서, 이렇게 수정하는 방법도 택할 수 있음

![img_309.png](pocu-note/COMP2500/week12/images/img_309.png)

- 이 방법의 단점은 처음 문제 발생 상황을 알기 어려움
- PPT 예시에 설명 잘 되어있네용

### 오류 처리 방법 4: 예외

![img_310.png](pocu-note/COMP2500/week12/images/img_310.png)

- 대부분 OO 언어는 예외를 지원함
    - throw
    - catch

## 예외는 OO의 일부가 아님

![img_311.png](pocu-note/COMP2500/week12/images/img_311.png)

- 왜 이런 주장이 나왔을까?

![img_312.png](pocu-note/COMP2500/week12/images/img_312.png)

- 이렇게 추측함
- 예외를 catch 하고 어떻게든 진행해서 프로그램 크래시를 막음

![img_313.png](pocu-note/COMP2500/week12/images/img_313.png)

- 생성자를 호출할 때 문제가 생기는 경우 위의 오류 처리 방법 4가지 중
    - 무시하면 크래시
        - 문제가 발생했다는 사실을 알리기는 쉽지 않음
        - 생성자는 반환값 자체가 없기에 null 반환도 안 됨
    - 미리 검사 후 종료
        - 개체 생성 후 초기화할 때 검사하기는 쉽지 않음
        - 그리고 이미 개체가 생성됬는데?
    - 문제 수정
        - 당연히 안 됨, 이미 개체가 생성됬는데?
    - 예외
        - 개체 생성하고
        - 개체 초기화에 문제가 있다고 예외를 던지고 넘어가는게 그나마 해결책

![img_314.png](pocu-note/COMP2500/week12/images/img_314.png)

![img_315.png](pocu-note/COMP2500/week12/images/img_315.png)

![img_316.png](pocu-note/COMP2500/week12/images/img_316.png)

- 언어의 제약임
- 여튼 결론적으로 생성자 오류 상황에 유일한 해결책이 예외라고 예외가 OO의 일부는 아님

## 잘못된 예외처리보다 크래시가 낫다

![img_317.png](pocu-note/COMP2500/week12/images/img_317.png)

- 예외처리를 잘 못하면 더 큰 문제
- 당연한거죠?

![img_318.png](pocu-note/COMP2500/week12/images/img_318.png)

- 과연 크래시를 최종 사용자가 극혐할까?

![img_319.png](pocu-note/COMP2500/week12/images/img_319.png)

![img_320.png](pocu-note/COMP2500/week12/images/img_320.png)

- 자동 세이브

![img_321.png](pocu-note/COMP2500/week12/images/img_321.png)

- 구글 docs
    - 히스토리 무한임
- 결론적으로 요즘 사용자들은 크래시에 신경을 안 씀

![img_322.png](pocu-note/COMP2500/week12/images/img_322.png)

- 디버깅에는 크래시가 더 유리함
- 메모리 덤프

![img_323.png](pocu-note/COMP2500/week12/images/img_323.png)

- 메모리 상황을 파일에 다 적어주는 것
- 버그 해결하는데 좋음!!

![img_324.png](pocu-note/COMP2500/week12/images/img_324.png)

- 예외는 가지고 있는 정보가 적음
- 크래시 하고 메모리 덤프 따는 것 보다

## 프로그램 종료도 매력적인 방법이다

![img_325.png](pocu-note/COMP2500/week12/images/img_325.png)

- 좀비 프로그램이 제일 안 조음
- 사실 저장하는건 요즘 시대에 큰 실익은 없음. 요즘은 워낙 자동 저장이 잘 되어있어서

![img_326.png](pocu-note/COMP2500/week12/images/img_326.png)

- 예외도 위로 던져서 종료시키면 되는데?

![img_327.png](pocu-note/COMP2500/week12/images/img_327.png)

- 근데 예외를 던지는 입장에서 위의 함수들이 catch 를 해서 어떻게 할지 모르는데, JVM 까지 던져줄꺼라 믿고 던질 수 있을까?

## 오류 처리 방법 4가지 순위

![img_328.png](pocu-note/COMP2500/week12/images/img_328.png)

- 책임감 순위

![img_329.png](pocu-note/COMP2500/week12/images/img_329.png)

- 오지랖 순위
    - 아니 굳이 종료까지야.. 실수는 고치면 되는데

![img_330.png](pocu-note/COMP2500/week12/images/img_330.png)

![img_331.png](pocu-note/COMP2500/week12/images/img_331.png)

- 객관성 순위
    - 종료는 클라이언트가 잘못된 일을 하면 바로 나니까 아주 명백
    - 수정은 수정하고 클라이언트에게 알려준다는 가정
- 다른건 모르겠는데 예외가 처리하기 어려운지는 알겠음

![img_332.png](pocu-note/COMP2500/week12/images/img_332.png)

![img_333.png](pocu-note/COMP2500/week12/images/img_333.png)

- 무시는 크래시가 난다는 전제하에 예외보다 명백함

![img_334.png](pocu-note/COMP2500/week12/images/img_334.png)

- 이런건 여튼 짬밥으로 익히는게 답임

![img_335.png](pocu-note/COMP2500/week12/images/img_335.png)

## 예측 가능한 상황의 처리법

![img_336.png](pocu-note/COMP2500/week12/images/img_336.png)

- 예측한 상황 + 고치기 쉬운 경우 이렇게 하라는 조언

- 고치는게 너무 복잡하면 힘들죠?
    - 이러면 차라리 크래시 내고 고객 상담같이 비즈니스적으로 해결하는게 더 좋음

- 고치고 프로그램 계속 진행
    - 내 시스템에서는 수정이 조음
    - 경계에서는 예외가 좋음

![img_338.png](pocu-note/COMP2500/week12/images/img_338.png)

- 예측한 상황 + 고치기 어려운 경우

- 결론적으로 종료 시키는 방법
- 최종 사용자에게 메시지를 보여주기 싫거나, 불가능한 경우
    - 고치기 어려운 경우는 몰라서 불가능한 경우라고 생각하면 됨

![img_337.png](pocu-note/COMP2500/week12/images/img_337.png)

- 예외를 main() 에서 catch 해서 로그를 남기고 종료하는 방법의 문제

![img_339.png](pocu-note/COMP2500/week12/images/img_339.png)

- 로그는 프로그래머 입장에서 귀찮고, 잘 안 지켜짐
- 메모리 덤프는 프로그래머가 게을러도 모든 정보가 있다

## 예측 못한 상황의 처리법

![img_340.png](pocu-note/COMP2500/week12/images/img_340.png)

- 버그
- 예측한 상황 + 고치기 어려운 경우와 유사함

![img_341.png](pocu-note/COMP2500/week12/images/img_341.png)

![img_342.png](pocu-note/COMP2500/week12/images/img_342.png)

- 걍 결론은 이게 핵심임 ㅋㅋ
- 오류내고 잘 고치자!
- 좀비는 피하자
