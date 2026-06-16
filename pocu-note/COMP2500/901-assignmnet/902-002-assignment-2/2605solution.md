---
tags:
  - COMP2500
  - assignment2
---
스탬프 크기에 따라 가격이 결정됨
- ==규격== 개념
- 크기를 *Enum* 으로 구현하고, 가격을 *Enum* 에 저장하기?
	- [[pocu-note/COMP2500/003-object-modeling-1/003-014-modeling-8/index|모델링 8: 다시 사용성 높이기]] 참고
	- [[pocu-note/COMP2500/001-java-syntax/001-018-reference-type-argument/index|참조형 인자, 열거형]] 참고 

색상은 *RGB*로 표현
- RGB 클래스에 *Enum* 으로 ==규격== 빨강, 파랑, 녹색 만들 수 있음

> [!Quote] spec
> 
> 8. 색상을 반환할 때는 RGB 값을 사용해야 합니다.

스탬프는 생성자의 인자로 다음을 받음
- RGB 타입의 색
- 크기 *Enum*

달력도 크기에 따라 가격 결정됨
- 흰색은 고정
- *Enum* 으로 규격화

배너도 크기에 따라 **base price** 결정 됨

달력 타입, 배너 타입을 개체 안에 상태로 저장할 것인가?
- 배너 설계하다 보니, 타입을 따로 개체 안에 상태로 저장해야지 구분할 수 있음
	- 이 정보가 없으면 반사,스크림,매쉬를 구분할 수 없음
- 달력도 똑같이 적용
- 규격화해서 *Enum*에 포함된 정보만 사용하는 것이 아니라, 규격 자체인 *Enum* 도 사용하는 상황

배너의 이미지 구현
- `String` 타입으로
- image URL
> [!Quote] spec
> 
> - 제품에 사진을 추가하려는 고객은 우선 프린팃의 서버에 사진을 업로드한 뒤에야 그 이미지를 사용할 수 있음. (즉, 웹 서버에 이미지가 저장되어 있음)

공통의 개념을 모아 부모 클래스로 만들기
- 공통 상태는 다음과 같음
	- 색
	- 크기
	- 가격

가격을 자식 클래스에 둘 것인가, 부모 클래스 `Product` 에 둘 것인가 문제
- 부모 클래스에 두면 장바구니 구현에 편해짐
	- 다형성을 사용못하니까, 상태로 가지고 있는것
	- 다형성을 사욯아면 자식의 가격구하는 함수를 오버라이딩하면 됨

장바구니에 물건이 담길 때 wrapper 클래스
- `Shipement`
	- 컴포넌트로 `Product` 가지고 있음
	- 배송 수단

장바구니에 필요한 기능
- 상품 추가
	- 각 물건의 shipping option 선택
- 상품 제거
- 총액 구하기
	- 각 가격의 getter 필요함

## 테스트 케이스 해결

B01_ApertureHierarchy
- class not found: image aperture
- Aperture 구현에서 `String` 같은 자유로운 자료형을 사용하지 말 것
- 상속을 이용해 구현하기
- 위치, 폭, 높이
	- 유효하지 않은 Aperture에 대한 검증도 필요함
		- (0,0)이 top left
		- Aperture의 위치는 명함과 배너의 폭, 높이 안에 들어와야함
	- 힌트 참고


```
class not found: <where>

클래스를 찾을 수 없음: <위치>

현재 설계에서 다양한 방법을 통해 클래스를 찾다 못찾는 경우. 따라서 설계가 미진하거나 추상화가 모자를 때 이 메시지가 나오기도 함  

참고: 레지스트리에 등록한 클래스 파일이 존재하지 않는 경우를 확인하는 게 아님(그럴 경우는 실습/과제 점수가 곧바로 0점)

```

연관된 케이스 (1)
- D05_TextApertureAdderSensical
	- param nonsensical: BusinessCard.addTextAperture(1 param)
- D06_ImageApertureAdderSensical
	- param nonsensical: BusinessCard.addImageAperture(1 param)
- D09_TextApertureValid
	- FAIL: D05_TextApertureAdderSensical
- D10_ImageApertureValid
	- FAIL: D06_ImageApertureAdderSensical

저는 B01_ApertureHierarchy를 해결하면서, 문구 추가, 사진 추가 메소드 시그니처를 변경해 해결
- 원래 `String`을 사용하다가 Aperture을 표현할 수 있는 클래스로 변경

> [!Quote]
> 
> aperture란 용어가 무엇인지 고민 좀 해보셨나요? 아마 이렇다 할 답을 찾지는 못했을 겁니다. (사전 찾아보면 '조리개'라고 나옴)
> 
> 그 이유는 이게 프린팅 업계에서 사용하는 전문용어이기 때문이죠. 아마 아래 제품을 보는 게 가장 쉽게 이해가 될 겁니다.
> 
> [https://www.amazon.ca/three-fold-aperture-greetings-cards-White/dp/B00FBDKE48](https://www.amazon.ca/three-fold-aperture-greetings-cards-White/dp/B00FBDKE48)
> 
> 저 가운데 있는 구멍을 aperture라고 합니다. 또 다른 예는 다음과 같습니다.
> 
> [https://katysuedesigns.com/collections/card-making/collections_aperture-cards](https://katysuedesigns.com/collections/card-making/collections_aperture-cards)
> 
> 굳이 정리하자면 사용자가 자유롭게 내용을 삽입할 수 있도록 뚫어놓은 구멍? 사진 프레임을 사면 옆에 테두리는 다 있고 속에 있는 사진만 바꿀 수 있게 구멍을 뚫어놓았잖아요? 그걸 aperture라고 이해하시면 될 것 같습니다.
> 
> 이제 aperture의 의미도 아셨으니 설계에 좀 더 도움이 되기를... (총총) (편집됨)
  
```text
param nonsensical: <where>

매개변수가 비상식적: <위치>

어떤 메서드나 생성자에 사용한 매개변수(이름 기준으로 판단)이 상식적이지 않음  
  
참고 1: 실습/과제에서 허용하지 않는 매개변수를 검사하는 것이 아님(그런 매개변수를 사용할 경우 실습/과제 점수는 곧바로 0점)  
  
참고 2: 메서드가 받는 다른 매개변수에 따라 비상식적이 되는 매개변수도 있음. (예: 어떤 메서드에서 author하고 post를 모두 받아야할 때, [author, id]를 넣으면 id는 postId로 판단하여 통과될 수 있으나, [id, text]가 들어오면 이 id가 author인지 post인지 명확하지 않아 비상식적이 될 수도 있음)
```

연관된 케이스 (2)
- Y05_UniformRepresentation
	- class representation not uniform: Poster

저는 `Poster`라는 Aperture을 추가할 수 있는 부모 클래스를 만들었는데, 이 클래스에 Aperture을 추가, 삭제할 수 있는 메서드를 만듬
- 이 때 Aperture을 어떻게 컨테이너로 관리할 것인가?
- 굳이 사진, 문구 메서드를 분리할 필요가 있을 것인가?
	- 상속에서 배운 부모형 클래스 변수에 대입하기 참고
	- 상속 vs 컴포지션에서 다형성 참고

연관된 케이스 (3)
- X08_CartInvalidAperturePriceTest
	- Price not correct: banner, GLOSS, PORTRAIT, SIZE_1000X500
- Y02_ProperApertureAbstraction
	- class not found: image aperture
- Y03_NoInvalidInstantiationAllowed
	- class not found: image aperture
- Y04_EncapsulationSensical
	- abstraction level improper: aperture adder
- Y05_UniformRepresentation
	- class not found: image aperture

[JPEG 스펙을 구현한 코드](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/media/parsers/jpeg_parser.h)을 참고하면 
- Chrome의 JPEG parser

```c++
// JPEG header only uses 2 bytes to represent width and height.  
constexpr int kMaxDimension = 65535;
```

Image Aperture의 width, height에 사용하는 정수 자료형을 결정할 수 있어요

> [!quote]
> 
> **[힌트] '이미지(image) 데이터를 어떻게 표현하지?'**
> 
> 이 과제를 하다 보면 사용자가 선택한 이미지를 클래스 안에 넣어야 하는데 비트맵 데이터를 어떻게 넣을지 고민하는 분들이 있을 것 같습니다.  
> 
> 이것에 대한 힌트는 웹페이지(즉, html 파일)에서 보여줄 이미지를 어떻게 지정하는지 찾아보시면 도움이 될 겁니다. ![:미소짓는_얼굴:](https://a.slack-edge.com/production-standard-emoji-assets/16.0/apple-medium/1f642.png) (html 파일은 텍스트 파일. 하지만 이미지를 보여줄 수 있음)
> 
  (생각해보니 나중에 '프록시 패턴' 강의에서도 나오는 내용이긴 한데 궁금하면 미리 예습 한번 해보시는 것도 나쁘지 않겠네요)  
  
---

C01_Create
- data missing: blue stamp
- 생성자의 매개 변수로 넘기는 데이터가 멤버 변수로 저장 되어 있는지 확인
	- *Enum* 같은 데이터로 받아서 부모 클래스의 멤버 변수로만 분해해서 넘기면 이런 상황 발생함
	- *Enum* 으로 종류를 구분한다면, 자식 개체에서 이를 상태로 가지는게 유효한 개체 상태

[Java 빌드봇 리포트 메시지](https://docs.google.com/document/d/1HvQj4orCIcL6hug-C9n7c2631SiWOKRVawnKi4FkyI8/edit?tab=t.0) 참고
```text
data missing: <where>

데이터를 찾을 수 없음: <위치>

개체 속에 저장되어 있어야할 데이터(멤버 변수)가 없을 때 나오는 메시지  
보통 생성자 호출 후 그 데이터들이 올바로 저장되어 있는지 확인  

참고: 게터(getter) 메서드가 없어서 이 메시지가 등장하는 경우는 드묾
```

---

C02_CanReadData
- not found: shipping method
C03_CanUpdateData
- object state invalid: shipping method
C04_SetterSensical
-   object state invalid: shipping method

제품들은 모두 생성할 때 부터 *Shipping method* 를 상태로 가지고 있어야함
- 저는 장바구니에 넣을 때 *Shipping method* 가 생기도록 구현해서 위 오류 발생

[Java 빌드봇 리포트 메시지](https://docs.google.com/document/d/1HvQj4orCIcL6hug-C9n7c2631SiWOKRVawnKi4FkyI8/edit?tab=t.0) 참고
```text
not found: <where>
예상 데이터를 찾을 수 없음: <위치>

실행 결과 있어야 할 데이터를 찾을 수 없음을 의미
```

```text
object state invalid: <where>  
개체 상태가 유효하지 않음: <위치>

개체의 상태가 올바르지 않을 때 나오는 메시지  
보통 생성 직후, 혹은 어떤 연산 뒤에 개체의 상태가 유효하지 않을 때를 의미
```

---

X02_CartAddProduct
-  not found: banner
X05_CartStorageSensical
- generalization improper: product storage

저는 장바구니에 넣을 때 *Shipping method* 그리고 제품 클래스를 컴포넌트로 가지는 wrapper클래스를 만들었었는데, 이 설계가 문제가 있었음

--- 

C02_CanReadData
- not found: color

예상 데이터를 찾을 수 없음 
- ==유효하지 않은 데이터==라고 해석하면 됨

저는 RGB로 표현했는데, 각각 Red, Green, Blue의 값을 `[0,255]` 범위로 표현할 수 있는 자료형으로 구현
- Java는 `unsigned byte`가 없음

> [!quote]
> 
> **올바른 색상(color) 표현법?**  
> 
> 학생 분들의 코드를 쭉 보면서 느낀 건데 사실 int로 어떤 색상을 표현하기에는 약간의 문제점이 있습니다. (특히 어떤 학생 분이 색상의 유효성을 검사하기 위해 assert를 0x000000부터 0xFFFFFF까지 모두 넣은 걸 보고 느꼈음 ![:박수:](https://a.slack-edge.com/production-standard-emoji-assets/16.0/apple-medium/1f44f.png))  
> 
> RGB로 색을 표현하는 사람도 있고 BGR로 하는 사람도 있거든요. 심지어는 투명색까지 추가하면 ARGB, RGBA, AGBR 등 다양한 포맷이 나옵니다.  
> 
> 따라서 색상에 좀 더 명확한 type을 사용하도록 빌드봇을 보강해 나갈 계획입니다.

---
D02_CanReadData
- not found: display name

장바구니 UI 처럼 *display name* 만들기
- *display name* 은 부모 클래스의 공통 상태로 가지고 있음
