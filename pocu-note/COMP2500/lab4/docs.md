# Lab4

## Multiton Pattern

- https://en.wikipedia.org/wiki/Multiton_pattern
    - 일반적으로 맵(map)을 사용하여 새로 생성되는 인스턴스를 관리
- 하드 디스크 캐시에 사용하기 적합함
- 컴퓨터에 하드 디스크가 여럿 설치되어 있다고 생각해보세요. 데이터는 보통 파일로 저장되어 있으며, 이 데이터를 읽으려면 이 파일을 찾아서, 열고, 읽은 뒤, 메모리 어디엔가에 저장할 것입니다. 뭔가 하는 일이
  많아 보이지만 이런 일을 아주 가끔씩만 한다면 큰 문제가 없죠. 그러나 이런 일을 빈번한다면 데이터를 메모리에 저장해 두고 재활용하는 게 더 좋을 겁니다. 이렇게 다른 곳에 있는 데이터를 메모리에 저장해 두고
  사용하는 걸 캐시로 관리한다고 하는데요. 다음과 같이 멀티턴 패턴을 사용하면 각 하드 디스크마다 전용 캐시를 만들어 줄 수 있습니다.
    - 하드 디스크의 개수에 맞게 동적으로 하드디스크 전용 캐시를 관리할 수 있음
    - 인스턴스 수 관리 가능
        - static 으로 구현했으면 불가능한 일을 싱글턴 패턴의 확장인 멀티턴으로 해결
    - 캐시 퇴거 정책을 각 인스턴스에 적용해 캐시 인스턴스별 용량 제어
- 메모리는 무한하지 않기에 캐시에 저장된 데이터가 증가하는 것을 어느 정도 제한해야 함
    - 캐시 퇴거 정책
        - 캐시가 가득 찰 때 하는 일을 정의
        - LIFO
        - FIFO
        - [LRU](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU))

## KEY MANAGER 설계

- 양방향 연결리스트
  - node    
- 해쉬맵
  - key: node
  - 노드를 O(1)에 검색

```java
{
            MemoryCache memCacheA = MemoryCache.getInstance("A");
            MemoryCache memCacheB = MemoryCache.getInstance("B");
            MemoryCache memCacheC = MemoryCache.getInstance("C");

            assert memCacheA == MemoryCache.getInstance("A");
            assert memCacheB == MemoryCache.getInstance("B");
            assert memCacheC == MemoryCache.getInstance("C");

            MemoryCache memCache = MemoryCache.getInstance("A");
            memCache.addEntry("key1", "value1");
            memCache.addEntry("key2", "value2");
            memCache.addEntry("key3", "value3");
            memCache.addEntry("key4", "value4");
            memCache.addEntry("key5", "value5");

            memCache.setEvictionPolicy(EvictionPolicy.LAST_IN_FIRST_OUT);
            memCache.setMaxEntryCount(2);
            assert memCache.getEntryOrNull("key1") != null;
            assert memCache.getEntryOrNull("key2") != null;
            assert memCache.getEntryOrNull("key3") == null;
            assert memCache.getEntryOrNull("key4") == null;
            assert memCache.getEntryOrNull("key5") == null;

            memCache.addEntry("key6", "value6");
            assert memCache.getEntryOrNull("key2") == null;

            memCache.setMaxEntryCount(1);
            assert memCache.getEntryOrNull("key6") == null;
            assert memCache.getEntryOrNull("key1") != null;
        }
```




