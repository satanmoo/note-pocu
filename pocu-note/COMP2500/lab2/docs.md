# Lab2

## 변경 불가능한 클래스: immutable

- 개체를 생성한 뒤에는 그 상태를 바꿀 수 없음
  - 대표적으로 String

- 직접 변경 불가능한 클래스를 구현하고 싶으면?
  - 멤버 캡슐화 잘 하고
    - private, final로 상수화
  - public setter 없애기