# 개방-폐쇄·리스코프 치환·의존 역전

노트 유형: **Cloze**

**Text**

- 개방-폐쇄: {{c1::확장에는 열려 있고(open for extension) 수정에는 닫혀 있어야(closed for modification) 함 — 클래스 내부 수정 없이 동작을 확장}}. 좋은 예가 {{c2::상속}}
- 리스코프 치환: {{c3::부모 클래스 변수에 자식 개체를 대입해도 문제없이(부모의 기대대로) 동작해야 함}}
	- 100% 지키기 어려운 이유: {{c4::자식을 추가하다 보면 부모의 동작(추상화)이 변하는 경우가 많음}}
- 의존 역전: {{c5::추상적인 것에 의존할수록 결합도가 줄어듦 — 커플링을 줄이려면 인터페이스를 사용}}

**Back Extra**

- 리스코프 치환 위배 예 2가지(직사각형-정사각형 setter, Stack extends ArrayList): https://pocu-site.pages.dev/pocu-note/COMP2500/801-exam/801-004-exercise-final/801-004-021-solid/
- 직사각형-정사각형 논쟁의 모순: 문제는 setter가 있을 때만 발생 — setter를 없애자던 극단적 OO 진영이 setter 존재를 전제로 문제 삼음

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/014-solid-design-principles/014-005-open-closed/
