# 생성자 인자 실수를 줄이는 해법

노트 유형: **Cloze**

**Text**

생성자의 인자 순서·의미 실수(컴파일러가 못 잡음)를 줄이는 해법:

1. {{c1::매개변수 클래스(DTO)}} — 매개변수를 구조체처럼 만들어 전달, 필드 이름이 대입 코드에 드러나 실수를 줄임. 멤버 변수를 모두 {{c2::final}}로 선언하면 반드시 초기화하도록 컴파일 시점에 강제 가능
2. 언어 차원 해법: {{c3::named parameter}} — 최근 언어는 거의 지원 (코틀린 등)

- 이 사례가 보충하는 명제: 디자인 패턴의 많은 것은 {{c4::언어에서 자체 지원이 있다면 사용할 필요 없음}}

**Back Extra**

- 매개변수 클래스 코드 예 ① 대입 스타일 — 필드 이름이 대입에 드러나 순서·의미 실수가 줄어듦 (단, 대입을 깜빡하면 기본값으로 남음):

public final class CreateEmployeeParams {
    public String firstName;
    public String lastName;
    public int id;
    public int yearStarted;
    public int age;
}

CreateEmployeeParams params = new CreateEmployeeParams();
params.firstName = "Robert";
params.lastName = "Lee";
params.id = 1;
params.yearStarted = 2020;
params.age = 31;
Employee robert = new Employee(params);   // 생성자는 Employee(CreateEmployeeParams params) 하나

- 코드 예 ② final 보강 — 초기화 누락을 컴파일 오류로 강제 (생성자에서 안 채우면 컴파일 안 됨):

public final class CreateEmployeeParams {
    public final String firstName;
    public final String lastName;
    public final int id;
    public final int yearStarted;
    public final int age;

    public CreateEmployeeParams(String firstName, String lastName, int id, int yearStarted, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.yearStarted = yearStarted;
        this.age = age;
    }
}

- 단 ②는 생성자 인자 순서 실수가 도로 생김 — 그래서 강의도 "완벽한 방법은 아님"이라고 함 (근본 해법은 언어의 named parameter)
- CreateEmployeeParams의 멤버는 값 전달 용도라 전부 final로 해도 됨 — 반면 Employee 멤버의 final 여부는 그 변수가 변할 수 있는지(성격)로 따로 결정
- 빌더 패턴으로 이 문제를 풀려는 것은 잘못된 해결법 (34번 카드 참고: https://pocu-site.pages.dev/pocu-note/COMP2500/anki/34-builder-pattern-misuse/)

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/012-design-patterns/012-008-correct-solution-without-builder-pattern/
