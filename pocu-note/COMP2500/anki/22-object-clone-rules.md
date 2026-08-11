# Object.clone() 사용 규칙

노트 유형: **Cloze**

**Text**

Java에서 Object.clone()으로 개체를 복사할 때의 규칙 3가지:

1. {{c1::Cloneable}} 인터페이스를 구현 — 안 하면 super.clone() 호출 시 {{c2::CloneNotSupportedException}} 예외 발생
2. clone()을 오버라이딩하고 내부에서 {{c3::super.clone()}}을 호출 (규약) — 새 메모리 할당과 모든 멤버 변수 대입은 Java가 내부적으로 수행
3. 반환형이 {{c4::Object}}라서 사용하는 쪽에서 캐스팅 필요

- 기본 동작의 한계: 참조형 멤버 변수는 참조를 그대로 대입 → {{c5::얕은 복사}} — 깊은 복사를 원하면 직접 작성

**Back Extra**

- 깊은 복사 직접 작성: 참조형 멤버의 클래스도 Cloneable을 구현해 clone()을 오버라이딩하고, 복사된 개체의 멤버 변수에 그 clone() 결과를 직접 대입
- Cloneable 구현 강제는 컴파일 타임 장치가 아니라 런타임 검사 — Cloneable은 빈 마커 인터페이스라 컴파일러가 미구현을 못 잡고, Object.clone()이 실행 중 검사해서 예외를 던짐
- CloneNotSupportedException은 checked 예외 — 예외 발생은 런타임이지만 throws 선언/try-catch는 컴파일 타임에 강제 (없으면 컴파일 오류)
- super.clone() 호출은 컴파일러 강제가 아니라 규약 — 안 지켜도 컴파일되지만, 복사 기본 동작(새 메모리 할당·멤버 대입)을 받으려면 이 통로를 거쳐야 함

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/010-interface/010-012-object-clone/

