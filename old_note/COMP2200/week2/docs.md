# Week2

## goto 문

![img.png](old_note/COMP2200/week2/img.png)

- goto 뒤의 레이블을 읽고, 레이블의 콜론(:)뒤 코드를 실행한다.

### goto의 나쁜 예

![img_1.png](old_note/COMP2200/week2/img_1.png)

### 또 다른 예

![img_2.png](old_note/COMP2200/week2/img_2.png)

- 어셈블리어로 확인해보자
  ![img_3.png](old_note/COMP2200/week2/img_3.png)
  ![img_4.png](old_note/COMP2200/week2/img_4.png)

### 반복문과 goto문의 관계

![img_5.png](old_note/COMP2200/week2/img_5.png)

- 반복문의 본질은 goto다.
    - 어셈보면 거의 똑같죠?
- 다만 실수를 막기 위해서 반복(for, while)이 나왔다.
- 조건문도 goto도 기반이 된다.

### goto는 악마일까?

![img_6.png](old_note/COMP2200/week2/img_6.png)

- 스파게티 코드 생성 위험이 높음ㅋㅋ

### goto를 유용하게 사용하는 경우1

![img_7.png](old_note/COMP2200/week2/img_7.png)

- 참고로 첫번째 for문에서 조건문 &&로 연속해서 썼는데, 이거 좋은 코드는 아님
    - 예시라서 그냥 이렇게 쓴겨
- goto문을 사용하면 코드가 깔끔해질 수 있다.

### goto를 유용하게 사용하는 경우2

![img_8.png](old_note/COMP2200/week2/img_8.png)

- if문 검사할 필요 없을 때 검사 안 하고 넘어가기~
- early exit으로 해결할 수 있긴함

![img_9.png](old_note/COMP2200/week2/img_9.png)

- 하지만 goto를 사용하면 편하게 가능

![img_10.png](old_note/COMP2200/week2/img_10.png)

### 리눅스 커널의 예제

![img_11.png](old_note/COMP2200/week2/img_11.png)

### C#의 goto문 ⭐️(진짜 꿀팁임 이거)

![img_12.png](old_note/COMP2200/week2/img_12.png)

- 고객은 내 서버로 요청을 보내고, 내 서버는 블록체인 쪽 서버에서 결과를 받아온다. 즉 중개하는 서버를 상상하자.
- 블록체인 쪽에서 트랜잭션 딜레이가 있을 때 status machine을 사용하면 좋다.
    - isComplete(): 블록체인 쪽 서버에서 처리 완료됬는지 확인하는 함수
- 새로운 요청이 왔을 때 요청을 처리하고, 블록체인 쪽 서버에 요청을 보내고, 블록체인 쪽 서버에서 처리가 완료될 때까지 기다린다.
    - case ERequest.Pending 문에서 isComplete()를 호출해서 처리가 완료됬는지 확인한다.
    - 요청이 완료됬으면, 바로 고객에게 완료 응답을 보낸다.
    - 아니면 아무것도 하지 않는다. 나중에 고객이 다시 요청하면 위를 반복한다.
- 이 방법을 적용하지 않으면, New 요청이 왔을 때, 시간이 지나고 다시 함수가 호출될 때 까지 기다렸다가 New 요청을 처리하는 상태 머신을 만들어야한다.
- 이 방법을 사용하면, 일단 New 요청이 왔을 때, 바로 Complete 상태까지 하나의 로직으로 확인할 수 있다.
    - 물론 바로 Complete 안 되는 요청은 다시 요청을 받아서 처리할 수 있다.(이 방법을 적용하지 않을 때와 동일함)

### goto 베스트 프렉티스

![img_13.png](old_note/COMP2200/week2/img_13.png)

- goto로 점프할 때는 아래쪽으로만 하자!

## 배열

### C# 배열과 차이점

![img_14.png](old_note/COMP2200/week2/img_14.png)

- new를 안 써도 된다.
- float GPAs[] = { 3.1f, 2.5f, 4.0f }; 이렇게 사용해도 됩니다.
    - 선언과 초기화를 동시에 하면 컴파일러가 배열 원소의 개수를 알 수 있기 때문이다.
    - 컴파일 시점에 배열의 크기를 결정할 수 있어야함!

### 배열에 접근하는 법

![img_15.png](old_note/COMP2200/week2/img_15.png)

### 어떻게 new 없이 배열을 만들 수 있을까?

![img_16.png](old_note/COMP2200/week2/img_16.png)

### C는 값형으로 배열을 만들 수 있다.

![img_17.png](old_note/COMP2200/week2/img_17.png)

## 스택 메모리

### 스택 메모리 개요

![img_18.png](old_note/COMP2200/week2/img_18.png)

- 왜 스택메모리라고 부르냐?
    - LIFO에 따라서 스택 자료구조와 비슷하게 작동하기 때문이다.
- 스택은 함수를 호출할 때, 함수 블록의 지역변수를 저장할 때 사용한다.
- 스택 메모리 크기는 프로그램 빌드 시 결정된다. (지역 변수가 얼마정도 되는지 컴파일러가 아니까 컴파일 시 지정)
    - 컴파일 플래그로 스택 메모리의 크기를 지정할 수 있다.
- 스택 메모리의 위치는 실행 시 결정됨 (운영체제에서 실행할 때 빈 메모리 찾아서 넣어준다.)
    - 프로그램이 항상 내 컴퓨터에서만 실행되는 것이 아니라는 점을 생각해보자.
    - 다른 컴퓨터에서는 메모리 스펙이 다르니까... 실행할 때 마다 스택 메모리의 위치는 달라진다.

![img_19.png](old_note/COMP2200/week2/img_19.png)

### 기본 자료형 변수는 스택 메모리를 차지한다.

![img_179.png](img_179.png)

- new 없이 할당: 스택메모리
    - 컴파일러는 함수 내부의 지역 변수를 몇 개, 타입은 뭔지 정보를 모두 알기 때문에 함수를 호출할 때 몇 바이트가 필요한지 안다.
        - 컴파일 시점에 스택메모리는 얼마 쓸 지 알 수 있다.
        - 운영체제 입장에서 컴파일된 코드에서 스택 메모리 크기를 알 수 있다.
    - A 함수에서 B 함수를 호출할 때, B 함수에 필요한 인자들을 복사해서 넘겨준다. 이것이 값형의 정체다.
    - 복사한 인자들을 A함수 스택 다음에 쌓이고, B함수 스택이 쌓인다. `차곡차곡 쌓인다` 는 것에 주목하자.
- new로 할당: 힙메모리
    - 스택 메모리 보다 훨씬 크다.
    - 구멍 숭숭
    - 실행 도중에 알아야할 정보가 많다. 빈 공간도 찾아야하고, 크기도 알아야하고... 힙을 사용하면 느리다.

### 스택 메모리 구성 요소

![img_20.png](old_note/COMP2200/week2/img_20.png)

- 큰 주소에서 작은 주소로 쌓임
- EBP: 스택 메모리 시작 부분(스택 프레임의 제일 큰 주소)
- ESP: 스택 메모리 끝 부분(스택 프레임의 제일 작은 주소)

### 함수 호출과 스택 메모리

![img_21.png](old_note/COMP2200/week2/img_21.png)

#### [0001100] push ebp

- main 함수의 호출자의 EBP를 스택에 저장
    - main 함수가 종료되고 돌아갈 주소를 저장
- 그림은 없음

#### [00011001] mov ebp,esp

![img_22.png](old_note/COMP2200/week2/img_22.png)

- ESP를 EBP에 대입
    - ESP는 스택 메모리의 가장 낮은 주소를 가리킨다. 이 때 ESP는 main 함수의 스택 프레임 시작 주소값을 가진다.
    - EBP에 ESP를 대입하여, main 함수의 스택 프레임 시작 주소를 저장한다.

#### [00011003] sub esp,14h

![img_23.png](old_note/COMP2200/week2/img_23.png)

- esp에서 14h를 뺀다.
- 14h(20byte) 만큼 내려감
    - 그림에 한 칸에 4바이트임
- main 함수의 스택 프레임을 확보한다.
    - 컴파일 시점에 지역변수, 함수 다 알기 때문에 스택 프레임 공간을 확보하기 위해 esp에서 얼마를 빼야할지 알 수 있다.

#### [00011006 ~ 00011014]mov dword ptr [addr], value  (변수 대입 과정)

![img_24.png](old_note/COMP2200/week2/img_24.png)

- mov dword ptr [ebp - 4], 0
    - 설명 생략
- mov dword ptr [ebp - 8], 1
    - 매개변수 a 대입 과정이다.
- mov dword ptr [ebp - 0Ch], 2
    - 매개변수 b 대입 과정이다.

#### [0001101B ~ 0001101E]

- mov eax,dword ptr [ebp-0Ch]
    - eax는 레지스터, CPU에서 계산을 위해 임시로 값을 저장하는 공간
    - ebp - 0Ch(12byte)에 있는 값 2를 eax에 넣음
- mov ecx,dword ptr [ebp-8]
    - ebp - 8(8byte)에 있는 값1을 ecx에 넣음

#### [00011021 ~ 00011024]

![img_180.png](img_180.png)

- dword ptr [esp],ecx
    - ecx에 들어있는 값 1을 esp 주소에 넣음
    - add 함수에 전달해줄 첫번째 인자의 값을 넣음

- 여기서 의문점?: 스택에 중간이 비었네요? [영상 8분 50초쯤 참고, 11분쯤에 설명 한 번 더]
    - 이게 컴파일러마다 달라질 수 있는 성질인데, add 함수의 첫번째 인자를 스택 프레임에서 가장 낮은 주소에 배치하고, 두번째 인자를 그 위에 배치하는 방식이다.
    - 다른 컴파일러는 mov대신에 push를 사용해서, 지금 스크린샷에서 보이는 빈 공간에 첫번째 인자를 저장했다가, 두번째 인자를 저장할 때 push를 통해서 첫번째 인자의 값을 아래로 밀어버린다.

![img_25.png](old_note/COMP2200/week2/img_25.png)

- dword ptr [dsp+4],eax
    - eax에 들어있는 값 2를 esp 주소에 넣음
    - add 함수에 전달해줄 두번째 인자의 값을 넣음

#### [00011028] call 00011040 (함수 호출 명령어)

![img_26.png](old_note/COMP2200/week2/img_26.png)

- 00011040로 점프해서 명령어를 실행하라 그리고 스택 메모리에 돌아올 주소 0001102D를 push해라
- call이 jump + push가 합쳐진 명령어임
    - 다음 명령어의 주소(00011024)를 스택 메모리에 대입하고, call의 인자(00011040)로 점프한다.

#### [00011040] push ebp (add 함수의 프롤로그)

![img_27.png](old_note/COMP2200/week2/img_27.png)

- add함수의 제일 처음 코드
- ebp에는 main함수의 스택프레임 시작 주소가 저장되어 있다.(0x0073FE6C)
- 함수 호출이 끝나고, ebp를 복구해야하기 때문에 push로 스택에 저장한다.
    - 함수 호출이 끝나면, main 함수의 스택 프레임으로 돌아온다.
    - 이 때 ebp는 main 함수의 스택 프레임 시작 주소를 가리켜야 한다.
- 스택 메모리에 push가 되면 esp는 가장 최근에 push된 값을 가리키게 된다.
    - 이 값이 add 함수 스택 프레임의 시작 주소가 된다.

#### [00011041] mov ebp,esp

![img_29.png](old_note/COMP2200/week2/img_29.png)

- 원래 ebp에 있던 main 함수 스택 프레임의 시작 주소를 스택에 저장했기 때문에 덮어써도 된다.
- esp는 add 함수의 스택 프레임 시작 주소를 가지고 있다.
    - esp는 스택 메모리에서 가장 최근에 push된 값을 저장하기 때문
- add 함수의 스택 프레임을 만들기 전 상태

#### [00011043] sub esp,0Ch

![img_28.png](old_note/COMP2200/week2/img_28.png)

- 0Ch(12byte) 만큼 내려감
- add 함수의 스택 프레임 결정
    - esp는 ebp랑 동일한 값이었는데, esp는 ebp - 0Ch가 되었다.
    - esp는 push로도 변할 수 있지만, sub로 빼서도 변할 수 있다.
- add함수의 스택 프레임 결정

#### [00011046 ~ 00011052]

![img_30.png](old_note/COMP2200/week2/img_30.png)

- [00011046]mov eax,dword ptr[ebp + 0Ch]
    - eax 레지스터에 ebp + 0ch 주소에 있는 값을 넣음
    - 즉 ebp에서 3칸(12바이트) 올라가면 add의 두번째 인자 2의 값이 있죠? 이 값을 대입함
- [00011049]mov ecx, dword ptr[ebp + 8] ecx 레지스터에 ebp + 8h 주소에 있는 값을 넣음
    - 즉 ebp에서 2칸(8바이트) 올라가면 add의 첫번째 인자 1의 값이 있죠?
- [0001104C]mov edx, dword ptr[ebp + 8] edx 레지스터에 ebp + 8h 주소에 있는 값을 넣음
- [0001104F]add edx, dword ptr [ebp + 0ch] edx에 ebp + 0Ch 주소에 있는 값을 더함
- [00011052]mov dword ptr [ebp - 4], edx edx의 값(3)을 ebp - 4주소(지역변수 res)로 대입

#### [00011058]

![img_31.png](old_note/COMP2200/week2/img_31.png)

- ebp - 8 주소에 eax에 저장된 값(지역변수 b(2))을 넣음

#### [0001105B]

- edx값(res(3))을 eax에 대입
    - eax가 반환값을 저장하는 레지스터기 때문
    - Calling convention에 따라서 eax에 반환값을 저장한다.

#### [0001105D]

![img_32.png](old_note/COMP2200/week2/img_32.png)

- ebp - 0Ch 위치에 ecx에 저장된 값(지역변수 a(1))을 넣음

#### [00011060] add esp,0Ch

![img_33.png](old_note/COMP2200/week2/img_33.png)

- esp에 0Ch(12byte) 더함
- add 함수의 ebp가 있는 메모리 주소로 돌아감
    - push 말고도, add로 esp를 조작할 수 있다.
- add 함수의 스택 프레임이 없어지는 과정
- 스택 메모리의 회색 처리된 부분은 아직 데이터가 남아있음(쓰레기)
    - 이것 때문에 다른 함수에서 이 스택메모리를 사용할 때 변수를 초기화하지 않으면 쓰레기 값이 나올 수 있음

#### [00011063] pop ebp

- pop 실행 전(위 사진)을 보면 EBP, ESP가 동일한 주소값을 가진다.

![img_34.png](old_note/COMP2200/week2/img_34.png)

- pop을 실행하면 스택 메모리의 가장 하단의 값을 ebp에 대입한다.
    - add함수를 호출할 때 저장한 main함수의 ebp값을 복원한다.
- 스택 메모리는 pop후 한칸 줄어든다.
    - esp는 스택 메모리에서 최근에 push된 값을 가리키기 때문에, pop을 하면 esp가 한칸 올라간다.

#### [00011064] ret

![img_181.png](img_181.png)

- return을 하면 스택 프레임에서 pop을 하고, 저장된 명령어 주소로 점프하고 실행한다.
    - esp에 저장된 주소(0001102D)로 점프
    - esp는 한 칸 올라가게 된다.

#### [0001102D~ 000110031] main 함수의 프롤로그

![img_35.png](old_note/COMP2200/week2/img_35.png)

- 아직 [0001102D]의 코드가 실행되기 전 상태라서, 중간에 네모가 있음

[0001102D] add esp,14h

- 명령어 실행 전 상태
    - ebp는 [00011063] 명령어를 통해 main 함수의 ebp로 복원됨
    - esp는 스택 프레임의 가장 최근에 push된 값을 가리키기 때문에 사진의 빨간 박스를 가리킴
- esp에 14h(20byte) 더함
    - 메인 함수 스택 프레임 없어지는 과정

[00011030] pop ebp

- 그림에는 없지만 ESP와 EBP가 동일한 주소를 가짐
    - ESP는 스택프레임의 0x0073FE6C 주소를 가리키고 있음
- 스택 메모리에서 pop을 하고, 이 값을 ebp에 대입함
- 즉 main함수가 종료되고 돌아갈 주소를 저장한 ebp를 복원함
- 이 명령어가 실행되면 ESP는 한 칸 올라가서 0x0073FE70을 가리키게 됨

[00011031] ret

- return을 하면 스택 프레임에서 pop을 하고, 저장된 명령어 주소로 점프하고 실행한다.
    - 스택 메모리의 0x0073FE70는 pop된다.
    - 0x0073FE70에 main함수를 호출한 명령어 다음의 주소(?)가 저장되어 있는데, 이 명령어로 점프한다.
- main 함수의 retrun 값은 add 함수의 리턴값과 동일하다.
- 그런데 add 함수의 스택 프레임이 종료될 때 eax 레지스터에 이미 add 함수의 반환값을 저쟁했다. 여기 저장된 값을 main함수의 반환값으로 그대로 사용한다.
    - eax는 반환값을 저장하는 레지스터기 때문이다.

### 스택 메모리와 배열

![img_37.png](old_note/COMP2200/week2/img_37.png)

- 함수의 블록에 배열을 넣으면 어떻게 될까?

![img_36.png](old_note/COMP2200/week2/img_36.png)

- 배열도 스택 메모리에 들어간다!!
- 스택 메모리에서 add함수의 프레임이 증가함을 알 수 있다.
    - 64바이트(char배열 [64]) 보다 더 큰 메모리를 잡긴했는데 이건 뭔가 다른 이유가 있구, 여튼 증가함 ㅇㅇ
- 결론은 `배열은 컴파일 시점에 스택 메모리 결정 가능!`

### 스택의 크기는 한정적: 스택 오버 플로우

![img_38.png](old_note/COMP2200/week2/img_38.png)

- [참고] 멀티스레딩 환경에서는 스레드 마다 스택이 따로 있음
    - 운영체제에서 스레드 수 늘리면 각 스레드에 맞게 스택 메모리 줌
    - 각 스레드에서 같은 함수를 호출하더라도 각각 스레드의 스택 메모리에서 각각 실행
    - 스택 메모리는 스레드마다 독립적이다.

![img_39.png](old_note/COMP2200/week2/img_39.png)

- 요즘은 툴이 잘 나와서 잡아주긴 함
- 너무 크게 잡으면 내가 소유하지 않은 메모리에 접근할 수 도 있음
- 결론은 내가 소유하지 않은 메모리에 접근하면 안 됩니다!

![img_40.png](old_note/COMP2200/week2/img_40.png)

- 여튼 결론은 너무 큰 데이터는 스택에 넣지 말자
- 큰 메모리가 필요하면 동적 할당으로!

### 재귀함수와 스택 오버 플로우

![img_41.png](old_note/COMP2200/week2/img_41.png)

- 운영체제가 꽥 해서 잡아줄 수 있음

## 배열의 요소 개수 구하기

### sizeof 연산자로 배열이 사용하는 크기 바이트 단위로 구하기

![img_42.png](old_note/COMP2200/week2/img_42.png)

- sizeof 연산자는 컴파일 시 계산하는 연산자.
- 컴파일 시점에 이미 스택메모리에 몇 바이트 사용할 지 알기 때문에 그 값을 반환해줄 수 있다.

### sizeof를 활용해서 배열의 크기 구하기

![img_43.png](old_note/COMP2200/week2/img_43.png)

- sizeof(배열) / sizeof(원소)

### sizeof(매개변수) 와 sizeof(배열)은 다르다.

![img_44.png](old_note/COMP2200/week2/img_44.png)
![img_45.png](old_note/COMP2200/week2/img_45.png)

- sizeof(배열)에서 배열의 크기를 반환하려면, 배열의 모든 요소가 스택 메모리에 복사되어 전달되야한다.
- 그리고 호출되는 함수가 스택에 복사된 모든 `배열의 원소의 크기`(자료형으로 알 수 있음)를 정확히 알아야함

![img_182.png](img_182.png)

- 근데 이러면 말이 안 되는게... 같은 함수가 매개변수에 따라서 사용하는 스택의 크기가 다름
    - 다를 수 없음!!

![img_46.png](old_note/COMP2200/week2/img_46.png)

### 함수의 스택 메모리 사용량은 고정

![img_47.png](old_note/COMP2200/week2/img_47.png)

- 함수는 호출자를 모른다.
- 함수가 결정되고(스택 메모리에 다 결정), 호출되는 거임
- 즉 선후관계를 따졌을 때, 함수가 호출자가 넣는 매개변수(배열의 경우) 알 수 없음!!!

![img_48.png](old_note/COMP2200/week2/img_48.png)

- 따라서 배열 매개변수로 전달할 때는 실제 모든 요소를 스택에 넣지 않음
- 그 대신 배열의 첫번째 원소의 주소를 스택에 넣어줌
- 이 주소의 크기가 `포인터 데이터형`의 크기
    - 플랫폼 마다 달라짐, 32비트 플랫폼은 4바이트, 64비트 플랫폼은 8바이트
- sizeof(매개변수)하면 4바이트가 나오는게 이 이유입니다.

## 길이가 명시된 배열

![img_49.png](old_note/COMP2200/week2/img_49.png)
![img_50.png](old_note/COMP2200/week2/img_50.png)

- 길이가 명시된 배열은 프로그래머가 읽기 편하라고 만든 것
    - 문서화 개념이라고 보면 됨
- 내부 동작은 매개변수의 배열은 `포인터형`으로 동작

### 원본 배열 바꾸기

![img_51.png](old_note/COMP2200/week2/img_51.png)

- 파란색 스택 메모리 공간은 i 변수의 값
- 노란색은 배열의 값

![img_52.png](old_note/COMP2200/week2/img_52.png)

- 용어 논쟁
- 포인터 변수를 복사하기 때문에 참조에 의한 호출을 흉내낸다라고 표현함...
- 중요한 것은 원본이 바뀐다는 것만 잘 알자!!!

## 매개변수 배열의 길이, 배열 요소의 초기값

### 매개변수 배열의 길이

![img_53.png](old_note/COMP2200/week2/img_53.png)

- 매개변수 배열의 길이를 함수에서 알 수 있는 방법이 없음
- 따라서 안전한 방법은 `매개변수로 길이`를 넣어주는거임

### 배열 요소의 초기값

![img_54.png](old_note/COMP2200/week2/img_54.png)

- 자체적으로 초기화하지 않기 때문에 쓰레기값이 있음
- 그전 스택 메모리에 있던값임 ㅇㅇ;
- 그러면 배열 요소를 초기화하는 방법 없냐???

### 배열 요소 초기화 방법

![img_55.png](old_note/COMP2200/week2/img_55.png)

- int nums1[4]를 실행했을 때 결과값으로 쓰레기값에 주목하자.
- 쓰레기 값은 리틀 엔디안으로 저장된다.
    - 리틀 엔디안: 작은 주소에 작은 유효 값이 저장됨
    - 스택 메모리 증가방향을 보면 좌에서 우로 증가, 좌쪽이 작은 주소임
    - 따라서 왼쪽부터 유효값이 저장된다!

- 가장 많은 정보를 코드에 적는 방법(배열 선언에도 크기 명시, 초기화 중괄호에도 값 명시)
- 배열의 원소 개수를 4개 선언했는데, 2개만 초기화하면 나머지 0으로 초기화
- 배열의 원소 개수를 2개 선언했는데, 3개를 초기화하면 `컴파일 에러`
- 배열의 원소 개수를 지정하지 않으면, 중괄호 초기화 코드에서 컴파일러가 개수를 알고, 자료형은 선언했으니까 배열의 크기 결정해준다.

### 베스트 프랙티스: 배열의 모든값을 0으로

![img_56.png](old_note/COMP2200/week2/img_56.png)

- 맨 앞 원소 0으로 초기화하고, 나머지 비우면 0으로 초기화 해줌
- `선언과 동시`에 초기화해야한다.

```c
int arr[4] = {0,}; /* 가능 */
int arr2[4];

arr2 = { 0, }; /* 불가능 */
```

### C에서 할 수 있는 실수

![img_57.png](old_note/COMP2200/week2/img_57.png)

- 초기화 안 된 지역 변수를 모른 채 사용할 수 있음
    - 배열 초기화 깜빡하면... 쓰레기값이 들어가서 문제가 생길 수 있음
- 버퍼 오버플로우 가능
    - 내가 소유하지 않은 메모리를 써버림(memory stomp)

## 다차원 배열

![img_58.png](old_note/COMP2200/week2/img_58.png)
![img_59.png](old_note/COMP2200/week2/img_59.png)

- 2차원 배열을 1차원 배열로 표현할 수 있음
    - i가 2칸씩(열 만큼) 증가하면 새로운 행으로 넘어가는 개념이죠?

### 결국 메모리에 일렬로 들어감

![img_60.png](old_note/COMP2200/week2/img_60.png)

### 다차원 배열 선언과 동시에 초기화 하기?

- best practice가 2중 포문으로 초기화하는 법임!!

## 소스코드에서 실행파일까지, C 프로그램의 빌드 과정

### C 프로그램의 빌드 과정

![img_61.png](old_note/COMP2200/week2/img_61.png)

- 컴파일이라는 용어가 좁은의미~넓은의미 해석이 다양함
- 소스코드를 기계어로 바꾸는 과정을 `빌드`라고 부른다.
- 빌드는 4가지 과정이 있음
- 전처리 + 컴파일 + 어셈블을 합쳐서 컴파일이라고 부르기도 함

![img_62.png](old_note/COMP2200/week2/img_62.png)

- 파란색이 (전처리 + 컴파일 + 어셈블)
- 초록색이 (컴파일 + 어셈블)
- 각 단계에서 입력과 출력이 정해져있음

### clang하면 4단계 다 해줌

![img_63.png](old_note/COMP2200/week2/img_63.png)

- clang에서 단계 나눌 수 있음
    - 컴파일 + 링킹으로 많이 나눔

### 이 예시로 확인한다.

![img_64.png](old_note/COMP2200/week2/img_64.png)

![img_65.png](old_note/COMP2200/week2/img_65.png)

![img_66.png](old_note/COMP2200/week2/img_66.png)

- 컴파일 경고가 나오는데, 컴파일 되긴함 ㅇㅇ;

![img_67.png](old_note/COMP2200/week2/img_67.png)

## .h와 .c 파일

![img_68.png](old_note/COMP2200/week2/img_68.png)

- .c: 소스코드
- .h: 헤더파일
    - 함수 선언이 있음
    - 여러 소스코드(.c, .h)에 필요 것들을 저장해두는 파일
    - #inclue를 통해 포함시킴(복 붙)

### 순서대로 확인해보자

![img_69.png](old_note/COMP2200/week2/img_69.png)
![img_70.png](old_note/COMP2200/week2/img_70.png)
![img_71.png](old_note/COMP2200/week2/img_71.png)
![img_72.png](old_note/COMP2200/week2/img_72.png)
![img_73.png](old_note/COMP2200/week2/img_73.png)

- 함수의 원형 = 함수의 선언
    - 즉 함수의 헤더
- #include + 헤더파일로 실제 구현된 함수의 정의를 찾아줌

## 헤더파일이 필요한 이유

- 사실 반드시 필요하진 않음
- 근데 있으면 효율적임

![img_74.png](old_note/COMP2200/week2/img_74.png)

- 파일을 쪼개는거죠

### 코드 중복을 줄이자

![img_75.png](old_note/COMP2200/week2/img_75.png)

![img_76.png](old_note/COMP2200/week2/img_76.png)

- 헤더파일을 통해 여러 C파일들과 함수 원형(프로토타입)을 공유하는 거임

### 함수 선언만 가지고 프로그램이 어떻게 돌죠?

![img_77.png](old_note/COMP2200/week2/img_77.png)

- 빌드가 여러 단계로 쪼개져있는 이유가, 함수 선언(원형)만 가지고도 컴파일 되게 하기 위함이다
- 실제 함수가 어디에 있는지는 링커가 알아서 찾아줌

## #include <> vs #include ""

### #include <> vs #include "" 개요

![img_78.png](old_note/COMP2200/week2/img_78.png)

- 두 방식의 차이점은 디스크 상의 `어디에서` 헤더파일을 찾느냐?

### #include <>

![img_79.png](old_note/COMP2200/week2/img_79.png)

- 보통 컴파일러가 제공하는 시스템 헤더파일을 찾을 때 사용
- <>는 시스템 경로에서만 파일을 검색한다.

### #include ""

![img_80.png](old_note/COMP2200/week2/img_80.png)

- 현재 `working directory`에서 먼저 헤더파일을 검색함
    - 없으면 시스템 경로에서 검색
- 보통 개발자가 구현한 헤더 파일을 검색할 때 사용
    - 우리가 직접 만듬 ㅇㅇ

## 빌드과정: 전처리 단계

![img_81.png](old_note/COMP2200/week2/img_81.png)

- 전처리기(preprocessor)라는 별도의 프로그램이 담당한다.

![img_82.png](old_note/COMP2200/week2/img_82.png)

- C 파일을 하나 입력했다.

![img_83.png](old_note/COMP2200/week2/img_83.png)

- 주석을 제거한다.

![img_84.png](old_note/COMP2200/week2/img_84.png)

- 메크로를 복붙함(전문용어로 확장)
    - #으로 시작하는 코드가 메크로임

![img_85.png](old_note/COMP2200/week2/img_85.png)

- 인클루드 파일을 복붙함
    - 이 때 working directory, system directory에서 찾음
- 헤더 파일의 내용을 그대로 가져다 붙임

![img_86.png](old_note/COMP2200/week2/img_86.png)

- 복붙한 결과임
- #include"adder.h"을 지우고 adder.h의 코드가 그대로 붙여졌죠?

![img_87.png](old_note/COMP2200/week2/img_87.png)

- 출력: 확장된 소스코드(translation unit)
- 컴파일의 기본단위

![img_88.png](old_note/COMP2200/week2/img_88.png)

- #include <stdio.h> 도 마찬가지임 복붙!

## 트랜슬레이션 유닛 보는 방법

![img_89.png](old_note/COMP2200/week2/img_89.png)
![img_90.png](old_note/COMP2200/week2/img_90.png)
![img_91.png](old_note/COMP2200/week2/img_91.png)

- clang 컴파일에 -E 플래그를 넣으면
- 전처리기만 돌리고 translate unit까지 결과를 보여줌
    - 파일에 저장하려면 >(출력 리디렉션/output redirection)을 사용하면 됨

## 빌드과정: 컴파일 단계

![img_92.png](old_note/COMP2200/week2/img_92.png)

- 컴파일러라는 프로그램이 담당

![img_93.png](old_note/COMP2200/week2/img_93.png)

- 전처리기가 만든 트랜슬레이션 유닛을 입력한다.

![img_94.png](old_note/COMP2200/week2/img_94.png)

- 컴파일러가 어셈블리어로 바꿔서 출력된다.

![img_95.png](old_note/COMP2200/week2/img_95.png)
![img_96.png](old_note/COMP2200/week2/img_96.png)

- 어셈블리어 코드는 모르는 심볼을 사용할 수 있음
- 심볼(symbol)은 변수나 함수의 이름임
- 이 때문에 헤더파일의 함수의 선언(원형)만 있어도 컴파일 할 수 있음
- 컴파일러가 변수나, 함수의 정의를 못찾는 경우 구멍으로 두고, 나중에 링커가 구멍을 매움
    - 이 구멍에 주소가 들어온다. 링커가 주소를 넣어주고 나중이 실행할 때 주소를 통해서 스택메모리의 함수 호출, 변수찾음

## 어셈블리어 코드 보는 방법

### adder.c 부터 컴파일

![img_97.png](old_note/COMP2200/week2/img_97.png)

- 컴파일 플래그 -S를 사용하면 화면에 보여주는게 아니라 바로 파일로 저장됨!
    - .s 파일
    - 출력 리디렉션 피료없음

![img_98.png](old_note/COMP2200/week2/img_98.png)
![img_99.png](old_note/COMP2200/week2/img_99.png)

- 주목할 점은 adder.s에 add함수가 있음
    - adder.c에 구현부(C코드)가 있었는데, 이게 어셈블리어로 바뀐거임
    - _add라고 나중에 쉽게 찾게 레이블도 있음

### main.c 컴파일

![img_100.png](old_note/COMP2200/week2/img_100.png)
![img_101.png](old_note/COMP2200/week2/img_101.png)

- _add 레이블에서 함수 호출(어셈블리어: call)을 하쥬?
- 이게 구멍을 남겨두는 거임

### 어셈블리어 레벨부터는 플랫폼에 종속적임

![img_102.png](old_note/COMP2200/week2/img_102.png)

- 이때 플랫폼에 맞는 자료형 크기가 모두 결정되죠?

## 빌드 과정: 어셈블 단계

![img_103.png](old_note/COMP2200/week2/img_103.png)

- 어셈블리어 코드를 조립해서 오브젝트 코드로 만든다.
- 어셈블러라는 프로그램이 담당

![img_104.png](old_note/COMP2200/week2/img_104.png)

- 이렇게 어셈블러 코드를 받아서

![img_105.png](old_note/COMP2200/week2/img_105.png)

- 기계어로 바꿔줌
- 이게 오브젝트 코드

![img_106.png](old_note/COMP2200/week2/img_106.png)

## 오브젝트 코드 보는 방법

![img_107.png](old_note/COMP2200/week2/img_107.png)

- 컴파일 플래그 -c를 사용하면 오브젝트 코드가 생성됨
    - .o 파일

![img_108.png](old_note/COMP2200/week2/img_108.png)

- 이제부터 이진파일

![img_109.png](old_note/COMP2200/week2/img_109.png)

- hex에디터로 확인해봄.
- 레이블(구멍) 확인할 수 있죠.

![img_110.png](old_note/COMP2200/week2/img_110.png)

- _add는 아스키코드로 볼 수 있죠?

## 빌드 과정: 링크 단계

![img_111.png](old_note/COMP2200/week2/img_111.png)

- 링커라는 프로그램이 담당

![img_112.png](old_note/COMP2200/week2/img_112.png)

- 입력은 여태까지 컴파일 한 모든 오브젝트 코드

![img_113.png](old_note/COMP2200/week2/img_113.png)

- 오브젝트 코드의 구멍을 매꿔준다.

### 링커는 어떻게 구멍을 매꿀까?

![img_114.png](old_note/COMP2200/week2/img_114.png)
![img_115.png](old_note/COMP2200/week2/img_115.png)

- 함수의 메모리 주소를 기억하고
- 함수를 호출하는 코드를 만나면 그 주소로 점프하는 코드를 넣어준다.

![img_116.png](old_note/COMP2200/week2/img_116.png)

- 구멍에 매꿔야하는데, 없어서 구멍을 못매꾸면 링커 오류 발생
- 컴파일 오류임!
    - 새로운 exe파일 안 나오죠
- 함수 원형에서 오타나면 링커 오류 발생
- 함수 구현을 빼먹었거나.

![img_117.png](old_note/COMP2200/week2/img_117.png)

- 최종 결과는 실행파일!!

## 왜 링크 단계를 분리할까?

![img_118.png](old_note/COMP2200/week2/img_118.png)
![img_119.png](old_note/COMP2200/week2/img_119.png)

- .c 파일(몸체)의 변경이 자주 발생한다면?
    - .c 파일만 컴파일하면 되고, 링크는 안해도 됨
- 함수 중복 문제
    - .c 파일로 분리하면 함수 하나만 작성해고 공통으로 쓸 수 있죠. 관리가 쉽쥬

![img_120.png](old_note/COMP2200/week2/img_120.png)

- -c 플래그로 만들어진 오브젝트 코드들을 명시하면 exe파일 만들 수 있다.

## 라이브러리

![img_121.png](old_note/COMP2200/week2/img_121.png)

- 실행은 곧바로 안 되는 파일이 결과물임
- main 함수 필요없죠?
- 오브젝트 파일로 만들어서 필요할 때 링킹해서 쓸 수 있음

### 정적 라이브러리와 링크

![img_122.png](old_note/COMP2200/week2/img_122.png)

- 실행 파일 크기가 커짐
- 메모리도 더 잡아 먹음
- 실행 속도는 빠름
    - 컴파일 단계에서 이미 다 불러오고 최적화도 하고..

### 동적 라이브러리와 링크

![img_123.png](old_note/COMP2200/week2/img_123.png)
![img_124.png](old_note/COMP2200/week2/img_124.png)

- 실행 파일을 실행할 때 링크함
    - 링킹은 실행 중 운영체제가 해줌
- dll 알죠?

![img_125.png](old_note/COMP2200/week2/img_125.png)

- 장점은 실행 파일 크기가 작아지고, 공통의 동적 라이브러리를 실행 중 불러오면 됨
- 여러 프로그램을 메모리에 띄우더라도 한번만 메모리에 올라가면 됨
- 두 은행에서 같은 동적 라이브러리 사용하는데, 버전이 다르다면... 지옥이 발

## 분할 컴파일과 전역 변수

- 전역 변수를 어떻게 여러 파일에서 공유하면서 컴파일할까?
- 전역 변수도 실체는 몰라도 선언만 해서 쓸 수 있음 (함수 원형만으로 구멍 뚫고 링킹에서 사용하는거랑 원리 동일)

### 분할 컴파일: 여러 개 파일과 C 빌드

![img_126.png](img_126.png)
![img_127.png](img_127.png)

- .c파일은 `개별적으로` 컴파일(전처리 ,컴파일, 어셈블) 된다.
- 오브젝트 파일을 한 번에 링킹한다.

## 다른 파일에 있는 전역 변수 사용 시 문제점

![img_128.png](img_128.png)

- 전역 변수가 선언되지 않았다고, 컴파일 에러 발생

![img_129.png](img_129.png)

- 컴파일 단계에서 .c 파일을 개별적으로 컴파일하기 때문에, 다른 .c파일의 전역변수는 모릅니다.

![img_183.png](img_183.png)

- 이렇게 전역 변수를 각각 파일에 모두 적어주면...?

![img_131.png](img_131.png)
![img_132.png](img_132.png)

- 컴파일은 되는데, 링커가 오류 발생
- 전역 변수가 중복되어서

![img_133.png](img_133.png)

- 구멍을 남겨야한다.

## extern 키워드: 구멍 남길태니 컴파일 가능

![img_134.png](img_134.png)

- 어쨋던 monster_repo.c에 있는 g_mob_count를 사용한다는 의미
- monster_repo.h, main.c는 외부 파일인데 여기서 사용할 수 있죠?

![img_135.png](img_135.png)

- extern 키워드는 오히려 사용하는 곳에서 키워드 쓰고 사용한다.
- 컴파일러에게 알려주는 거임!!! 이 변수는 다른 파일에 있어요 라고

### 아니 그러면 어떤 변수가 있는지 extern 붙은 변수 찾으려고 다 뒤져야함?

![img_136.png](img_136.png)
![img_137.png](img_137.png)
![img_138.png](img_138.png)

- 그래도 되긴하는데 굳이...?
- 헤더파일에 넣으면, 헤더파일로 다른 모든 곳에서 사용할 수 있게 하는 거임
- c파일에 넣는건 그 파일 안에서만 쓰게 하는 것
    - 위의 예에서는 monster_repo.c에 썼는데, 다른 곳에서 다썼음

![img_139.png](img_139.png)
![img_140.png](img_140.png)

- 이렇게 헤더에 extern 키워드 안 붙이고 변수 선언 + 대입하면?
- 전처리 단계에서 복붙하잖아
- 컴파일은 문제 없음
- 근데 링커 오류 발생
- 전역변수가 중복되잖음

![img_141.png](img_141.png)

- 함수는 자동으로 extern
- { 안 열고 ;로 끝나쥬
- 함수는 주로 헤더 파일에 넣는다.
    - C 파일에 넣을 필요가 없쥬...?

## 전역 변수의 문제, static 키워드

![img_142.png](img_142.png)

- 전역 변수는 파일 안에 포함되는 것이라서, 프로그래밍이 실행되는 동안 계속 메모리에 살아있음
- 내 파일에서만 쓰려면 static

![img_143.png](img_143.png)

- static 키워드를 붙이면, extern해도 링킹할 때 오류가 발생함
- 컴파일은 됩니다. (extern은 컴파일러에게 이 변수는 다른 파일에 있어요 라고 알려주는 것)
- 결국 extern 키워드가 붙은 변수를 사용하려고 해도, static 키워드가 붙은 변수는 링커가 찾지 못함

![img_144.png](img_144.png)

- 전역 변수에 접근하지 못하게 하는 법
- 실행 동안 메모리에 있음
- 다른 파일에서 접근하지 못함

### static 키워드의 또다른 예: 지역변수에 static 키워드?

![img_145.png](img_145.png)
![img_146.png](img_146.png)
![img_147.png](img_147.png)

- add_moster()을 세번 호출했다
- 지역변수는 함수가 끝나면 사라지는데, static 키워드를 붙이면 사라지지 않음
- 그래서 3으로 값이 변경되었음
- 엥 초기화도 여러번 하니까 1아닌가?

![img_148.png](img_148.png)

- 전역 변수처럼 데이터 섹션에 생성됨(스택 X)
- 하지만 범위가 함수 안으로 제한됨
- 초기화를 한 번만함!!!
    - 함수를 재호출해도 초기화 코드 실행 X

### 함수에서 static 키워드

![img_149.png](img_149.png)

- 함수도 static 키워드를 붙일 수 있음
- 당연히 static 함수의 원형은 다른 곳에서 사용할 의도가 아니니까 헤더 파일에 들어가지 않죠?
- 들어가봐야 못 써서 아무 의미 없다..!

## .c와 .h 파일 정리, 순환 헤더 인클루드와 해결법

![img_150.png](img_150.png)

- 헤더 파일에는 선언만 넣자
    - 전역 변수 extern 선언
    - 함수 원형(프로토타입)
    - 헤더 파일은 컴파일 대상이 아니라 전처리 대상임을 기억하자!! 복붙(include)
- c 파일에는 정의만 들어감
    - 함수 정의(외부에서 쓸 수 있음)
    - 전역 변수 선언 및 초기화(대입)
    - 정적 변수는 뭐 그 파일에서 쓸거니까 당연히 ㅇㅇ;

### 순환 헤더 include

![img_151.png](img_151.png)
![img_152.png](img_152.png)
![img_153.png](img_153.png)

- 순환 복붙으로 계속 복붙...ㅋㅋㅋ
- 컴파일러가 보다 못해 멈춰 줌
- 헤더 꼬였다..

### 순환 헤더 해결법

![img_154.png](img_154.png)
![img_155.png](img_155.png)
![img_156.png](img_156.png)

- 업계 표준
- 다양한 전처리기 지시문을 활용해보자

## 인클루드 가드 작동법

![img_157.png](img_157.png)
![img_158.png](img_158.png)

- 전처리기 지시문은 코드를 컴파일하기 전에 전처리기가 처리함
- 전처리기가 어떤 상수를 넣어서 컴파일러가 컴파일할 때 이 상수로 판단을 함
- FOO_H를 정의하면 foo.h의 코드를 복붙함

## 인클루드 가드 예제

![img_159.png](img_159.png)
![img_160.png](img_160.png)
![img_161.png](img_161.png)
![img_162.png](img_162.png)

- ifndef, endif 때고 그 사이의 코드를 넣어줌

![img_163.png](img_163.png)

- #define A_H는 a.h를 인클루드 했다는 것을 나타냄
- 다음 줄(#include "b.h")을 전처리기가 읽죠.

![img_164.png](img_164.png)

- 또 고대로 b.h에서 복붙, #include "b.h"은 지워지죵

![img_165.png](img_165.png)

- 다시 한 줄씩 읽는당.

![img_166.png](img_166.png)

- 가드 안(#ifndef~#endif) 코드 복붙

![img_167.png](img_167.png)

- #define B_H는 b.h를 인클루드 했다는 것을 나타냄
- 다음 줄은 #include "a.h"를 읽는다.

![img_168.png](img_168.png)

- a.h 인클루드함 복붙!

![img_169.png](img_169.png)
![img_170.png](img_170.png)

- #define A_H는 이미 정의되어 있으니까, 가드 안(#ifndef A_H~#endif) 코드는 복붙하지 않음

![img_171.png](img_171.png)

- 걍 싹 날림
- #ifndef A_H, #endif는 원래 지우고, 그 안의 내용을 복붙하냐마냐의 문제죠?

![img_172.png](img_172.png)

- 와 끝!

![img_173.png](img_173.png)

- 그리고 컴파일

![img_174.png](img_174.png)

- 일단 무지성으로 인클루드 가드 ㄱㄱ

### #pragma once?

![img_175.png](img_175.png)

- C 표준 아니라서 일단 ㄴㄴ C++에서 ㄱㄱ

## C 컴파일러의 종류와 특징

![img_176.png](img_176.png)
![img_177.png](img_177.png)
![img_178.png](img_178.png)


















