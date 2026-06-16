Java의 모든 함수는 클래스 내부에 작성
내포클래스 public 접근제어자 허용
- 접근제어자가 public인 최상위 클래스 2개 이상 컴파일 오류
메인 함수의 시그니처 강제는 실행 중 강제됨
- 올바른 시그니처를 사용하지 않으면, 메인 함수를 찾을 수 없다고 런타임 오류
- 컴파일 타임에 메인 함수의 존재 여부를 알 수 없음
커맨드 라인 인자 파싱
`System.out.println`
- System은 대문자로 시작하는 클래스
- out은 System 클래스의 public static 멤버변수, 타입은 `Printstream`
- `Printstream` 타입의 메서드 중 하나 println
	- println의 함수 오버로딩
printf
- 가변인자를 처리하는 원리
- String.format()