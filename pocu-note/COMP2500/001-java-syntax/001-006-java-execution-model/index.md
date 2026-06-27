---
tags:
  - COMP2500
  - week1
aliases:
  - "\b"
  - Java의 실행 모델
---
# Java의 실행 모델

![img_42.png](pocu-note/COMP2500/001-java-syntax/001-006-java-execution-model/images/java-execution-model-1.png)

Java 광고에 가장 많이 언급되는 내용
- 크로스 플랫폼

## 전통적인 컴파일 방식(C)

![img_43.png](pocu-note/COMP2500/001-java-syntax/001-006-java-execution-model/images/java-execution-model-2.png)

초록색으로 하이라이트한 과정이 한 소스 코드 파일을 **컴파일**하는 과정
- 전처리, 여러 오브젝트 코드에 대한 링킹 결과 실해 파일이 나옴
	- 오브젝트 코드는 한 소스 코드를 컴파일한 결과

![img_44.png](pocu-note/COMP2500/001-java-syntax/001-006-java-execution-model/images/java-execution-model-3.png)

실행 파일 하나는 특정 플랫폼(OS)에서 동작할 수 있음
- C의 실행 파일은 크로스 플랫폼이 아님
- 소스 코드만 봤을 때 크로스 플랫폼
## java compile model

![img_45.png](pocu-note/COMP2500/001-java-syntax/001-006-java-execution-model/images/java-execution-model-4.png)

JVM은 특정 플랫폼에 따라 설치 됨

JVM은 바이트 코드를 플랫폼에 적합한 명령어로 바꿔서 실행
## JVM

![img_46.png](pocu-note/COMP2500/001-java-syntax/001-006-java-execution-model/images/java-execution-model-5.png)

![img_47.png](pocu-note/COMP2500/001-java-syntax/001-006-java-execution-model/images/java-execution-model-6.png)

바이트 코드는 크로스 플랫폼
- 당연히 자바 소스코드도 크로스 플랫폼
## Java의 플랫폼은 JVM

![img_48.png](pocu-note/COMP2500/001-java-syntax/001-006-java-execution-model/images/java-execution-model-7.png)

JVM이 최종 플랫폼에서 바이트 코드를 실행하는 방식은 다양
- 플랫폼, 구현체, 버젼 등에 따라 다름
