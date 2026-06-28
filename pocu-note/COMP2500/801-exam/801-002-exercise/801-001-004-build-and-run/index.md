# 빌드 및 실행

## class라는 폴더에 자바 컴파일 결과물을 저장한다고 할 때 컴파일 명령어는?

javac -d <컴파일 결과물을 저장할 디렉토리> <컴파일할 소스>

## 자바 컴파일 시 생기는 결과물은?

바이트 코드

확장자는 .class

## javac -d class\ src\academy\pocu\*.java 를 실행했을 때 class 폴더에 어떤 폴더 구조로 결과물이 생성되는가?

class\academy\pocu\ 폴더 아래에 바이트 코드들이 생성됨

- `-d`는 **패키지 구조**(`package academy.pocu;`)를 재현함 
- .java 파일 당 하나의 .class 파일 생성

## class 폴더에 바이트 코드가 저장되었다고 가정하자. 프로그램을 실행하는 명령어는?

java -classpath <바이트 코드가 저장된 디렉토리> <메인 함수를 가진 클래스 이름>

- 메인 함수를 가진 클래스를 적을 때 academy.pocu.Main 처럼 패키지 이름도 명시(정규화된 이름)

## java -classpath <바이트 코드가 저장된 디렉토리> <메인 함수를 가진 클래스 이름> 에서 클래스가 메인 함수를 가지지 않았으면 어떤 문제가 발생?

실행 뒤 main **함수(메서드)** 를 찾을 수 없다는 문제가 발생 (Main method not found)

- 클래스 자체는 찾았으나 main 메서드가 없는 경우

## jar 파일 만드는 명령어는?

jar -cf ..\lib\my.jar academy

jar <옵션> <jar 파일 이름> <최상위 패키지(폴더) 경로>

- `academy`는 클래스가 아니라 최상위 **패키지 폴더** (`class` 폴더 안에서 실행)
- -c : 생성
- -f : jar 파일 이름 명시

## jar 파일 실행하는 명령어는?

java -jar <jar 파일 이름(경로 포함)>

## jar 파일 실행 시 main manifest attribute를 찾지 못한다는 오류 발생시?

manifest 파일을 jar에 포함해야함

jar -cfm <jar파일 이름> <manifest 파일 경로> <최상위 패키지(폴더) 경로>

- `cfm` 순서 = c(create) f(file→jar) m(manifest) → 피연산자도 **jar → manifest → 패키지** 순서
- manifest에 main 함수가 있는 클래스를 명시 (`Main-Class:` 항목)
- java -classpath <바이트 코드가 저장된 디렉토리> <메인 함수를 가진 클래스 이름> 에서 메인 함수를 가진 클래스를 명시한 것에 주목하라.
