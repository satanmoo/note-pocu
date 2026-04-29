---
tags:
  - COMP2500
  - week0
aliases:
  - 메인 함수
---
# 메인 함수

## 클래스

![img.png](pocu-note/COMP2500/001-java-syntax/001-001-main-function/images/img.png)

Java는 항상 클래스가 필요함
- 문법으로 `class` 사용을 강제함

모든 함수는 `class` 내부에 작성해야 함

## 최고 레벨의 `public class`는 오직 하나만

![img_1.png](pocu-note/COMP2500/001-java-syntax/001-001-main-function/images/img_1.png)

컴파일 에러

## 내포 클래스

![img_2.png](pocu-note/COMP2500/001-java-syntax/001-001-main-function/images/img_2.png)

내포 클래스는 `public`이어도 상관 없음
- 최고 레벨 클래스는 `public` 하나만 존재해야 한다는 점과 비교해서 기억
- 여러 `public`이 붙은 내포 클래스가 존재해도 컴파일 가능

## main 함수

![img_3.png](pocu-note/COMP2500/001-java-syntax/001-001-main-function/images/img_3.png)

런타임 오류 발생
- 컴파일 시점에 못 잡는게 아쉬움

## 커맨드 라인 인자

![img_4.png](pocu-note/COMP2500/001-java-syntax/001-001-main-function/images/img_4.png)
