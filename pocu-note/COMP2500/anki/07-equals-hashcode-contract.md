# equals·hashCode 계약

**앞면**

equals와 hashCode 사이의 계약 — 동치와 해시값의 3가지 함의는? 그리고 equals를 오버라이딩하면 hashCode도 해야 하는 이유는?

**뒷면**

1. 동치(`equals` true) → 해시값 반드시 같음 (계약의 필수 조건)
2. 해시값 같음 → 동치라고 확정 못 함 (해시 충돌 가능)
3. 해시값 다름 → 반드시 동치 아님 (1의 대우 — "다름"은 해시만으로 빠르게 확정)

`HashMap`·`HashSet`이 hashCode로 버킷을 찾고 equals로 최종 판정하므로, equals만 바꾸면 계약이 깨져 오동작 (같은 값인데 해시가 달라 다른 버킷에 들어가는 등) → 둘은 항상 세트로 오버라이딩

출처: https://pocu-site.pages.dev/pocu-note/COMP2500/008-polymorphism/008-015-hashcode-method/
