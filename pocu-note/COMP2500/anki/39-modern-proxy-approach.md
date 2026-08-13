# 프록시 패턴 + 캡슐화의 문제와 요즘 방법

노트 유형: **Cloze**

**Text**

프록시 패턴 + 캡슐화의 문제: 세 로딩 방법이 모두 클래스 안에 캡슐화되어 있으면 클라이언트는 {{c1::언제 이 클래스가 느려지는지(병목점·메모리 사용량)}}를 알 수 없음

- 요즘 방법: {{c2::클라이언트가 로딩 상태를 확인할 수 있게 하고, 로딩·언로딩 시점을 직접 제어하게 함}} — 상태에 따라 개체를 사용하는 {{c3::상태머신}} 방식 (즉시 로딩도 지연 로딩도 아닌 별개 방법)
- 이 사례가 보여주는 것: {{c4::캡슐화(내부 감추기)가 반드시 좋은 것은 아님}} — 내부 동작을 보여주는 방식이 요즘 더 많이 사용됨

**Back Extra**

- 코드 예 — Image 클래스에 로딩 제어·상태 확인 메서드를 공개:

public final class Image {
    public void load() { }       // 외부에서 로딩 지시 (내부에 캐시 로직)
    public void unload() { }
    public boolean isLoaded() { }
    public void draw() { }       // 모두 로딩됐다는 가정하에 호출
}

- 로딩 방법 3가지의 장단점 비교는 38번 카드 참고: https://pocu-site.pages.dev/pocu-note/COMP2500/anki/38-loading-strategies/

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/012-design-patterns/012-017-modern-proxy-pattern-example/
