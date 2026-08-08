# Object.hashCode() 기본 구현

**앞면**

`Object.hashCode()`의 기본 구현은 무엇이며, 왜 그렇게 되어 있나?

**뒷면**

개체의 ==주소를 기반으로== 구한 **32비트 정수(int)**

- 기본 `equals()`가 주소(참조) 비교이므로, "동치면 해시값이 같다"는 계약을 지키려면 기본 `hashCode()`도 주소 기반이어야 함
	- 서로 다른 개체 = 다른 주소 → (거의) 다른 해시값 / 같은 개체 = 같은 주소 → 같은 해시값
- 기본 `toString()`이 출력하는 `@16진수`가 바로 이 값 → [[08-tostring-method]]

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/008-polymorphism/008-015-hashcode-method/
