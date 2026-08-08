---
title: 모듈
---
# 모듈

## Java의 패키지 시스템에서는 애플리케이션(라이브러리)가 어떤 클래스가 필요한지 알 방법이 없다. 여기서 발생하는 문제점은?

패키지에서 필요한 클래스를 특정할 수 있는 방법이 없기 때문에 애플리케이션을 배포할 때 패키지 전체를 포함해 배포함

java built-in 패키지 전체를 애플리케이션에 포함해서 배포할 수 밖에 없음

java built-in 패키지의 크기가 자바 버젼이 오르면 오를 수록 점점 커져서 배포 용량이 커짐

## 패키지 시스템에서  모든 public 접근 제어자가 붙은 클래스를 유저가 사용할 수 있는가? 특정 public 클래스만 노출할 수 있는 방법은?

패키지 시스템에서는 특정 public 클래스를 노출할 방법이 없음

## com.example.root 패키지 전체를 하나의 모듈로 묶는 베스트 프랙티스 폴더 구조는?

```text
com.example.root/          <- 모듈 폴더 (점이 있어도 한 폴더)
    module-info.java       <- 모듈 정보 (폴더 최상단)
    com/                   <- 여기부터는 패키지 (점 단위로 중첩)
        example/
            root/
                ... .java
```

- 모듈 이름은 최상위 패키지명(`com.example.root`)과 동일하게 짓는 게 베스트 프랙티스
- 주의: **모듈 폴더는 이름에 점이 있어도 한 폴더** (패키지처럼 점 단위로 폴더가 나뉘지 않음)
- 반면 안쪽 패키지(`com/example/root`)는 점 단위로 폴더가 중첩됨

## module-info.java 파일은 컴파일 후 어떻게 변하는가?

.class 파일로 변함

## com.example.root 모듈은 java.sql 모듈에 의존하며, com.example.root.core 패키지를 외부에 노출한다. module-info.java를 작성하라.

```java
module com.example.root {
	requires java.sql;
	exports com.example.root.core;
}
```

## 다음 module-info.java를 읽고 답하라

```java
module com.example.app {
    requires java.sql;
    requires java.logging;
    exports com.example.app.api;
}
```

- 이 모듈이 의존(사용)하는 모듈은? → `java.sql`, `java.logging`
- 외부에 노출하는 패키지는? → `com.example.app.api`
- `com.example.app.internal` 같은 노출하지 않은 패키지는 외부에서 사용 불가

## module-info.java의 requires와 exports의 역할 차이는?

- `requires <모듈>` : 이 모듈이 **의존하는**(가져다 쓰는) 다른 모듈
- `exports <패키지>` : 이 모듈이 **외부에 노출하는** 패키지 (노출 안 한 패키지는 숨겨짐)