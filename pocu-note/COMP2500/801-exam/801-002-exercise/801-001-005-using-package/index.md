# 패키지 사용하기

## academy.pocu.random 패키지의 클래스를 다른 패키지에서 사용하고 싶으면?

import academy.pocu.random.<클래스 이름>;
- 클래스 이름 대신에 `*`를 넣으면 모든 클래스를 import

## System 클래스의 경우 import 없이 사용할 수 있다. 그 이유는?

java.lang.System

System 클래스는 java.lang 패키지에 속한다. 이 패키지는 자바 컴파일러가 모든 파일에 자동으로 import

- 단, 자동 import는 `java.lang`만 해당. `java.util.Random` 등 다른 `java.*` 패키지는 직접 import 필요
