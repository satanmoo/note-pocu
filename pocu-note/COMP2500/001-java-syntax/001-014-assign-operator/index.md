---
tags:
  - COMP2500
  - week1
aliases:
  - 대입 연산자, 논리 연산자, 캐스팅
---
# 대입 연산자, 논리 연산자, 캐스팅

## 대입 연산자

![img_92.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-1.png)

## 값형과 대입 연산자 `=`

![img_93.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-2.png)
![img_94.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-3.png)

값형(value type)은 자신만의 저장 공간을 가짐
- 레지스터, 스택 메모리

값형의 저장 공간에 값이 비트 패턴으로 그대로 저장됨

![img_95.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-4.png)

score2 변수가 차지하는 자신만의 저장 공간에 값이 바뀜

## 참조형과 대입 연산자

![img_96.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-5.png)
![img_97.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-6.png)
![img_98.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-7.png)

얕은 복사 개념

참조형은 자신만의 저장 공간에 주소를 저장

## `String`과 대입 연산자

![img_99.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-8.png)
![img_100.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-9.png)
![img_101.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-10.png)

`String`은 immutable 하기 때문에 새로운 "Nana" 문자열이 생성됨
- [[pocu-note/COMP2500/001-java-syntax/001-010-char-bool-string/index#`String` immutable|String immutable]] 참고 

## 캐스팅

![img_102.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-11.png)

크기가 큰 기본 자료형으로 변환은 암시적으로 가능

크기가 줄어드는 기본 자료형으로 변환은 명시적 필요

## 논리 연산자

![img_103.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-12.png)

## `==` 연산자와 문자열

![img_104.png](pocu-note/COMP2500/001-java-syntax/001-014-assign-operator/images/assign-operator-13.png)

## 영상 퀴즈

### 1. isSame1의 값은 무엇일까?

name1은 String
- 참조형
- JVM의 **String literal pool** 매커니즘 때문에 같은 내용의 리터럴이 여러 번 나와도 객체는 하나만 존재
- "Nana" 문자열 리터럴 객체는 하나만 존재하고, 이 주소를 저장

name2 는 하나만 존재하는 "Nana" 문자열 리터럴 객체의 주소를 저장

`==` 비교 연산자로 값을 비교하면 동일함

### 2. isSame2의 값은 무엇일까?

name3 은 `new`로 새로운 문자열 생성
- 기존의 "Nana" 문자열 리터럴과 내용은 동일하지만 새로운 문자열 생성
	- name1의 주소에 해당하는 "Nana" 문자열 리터럴의 내용을 복사함
- 생성된 문자열의 주소를 저장

`==` 비교 연산자로 값을 비교하면 두 주소가 다름

### 3. isSame3의 값은 무엇일까?

2번과 동일함
- 차이점은 "Nana" 문자열 리터럴을 String의 생성자로 넘긴다는 점
- 결국 "Nana" 문자열 리터럴의 주소에서 내용을 복사하기에 2번과 동일한 동작

### 4. isSame4의 값은 무엇일까?

name1의 값은 "Nana" 문자열 리터럴의 주소
- JVM의 **String literal pool** 매커니즘 때문

`==` 비교 연산자로 두 값(주소)를 비교하면 동일함
