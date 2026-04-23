# Week4

## 해시 알고리즘의 용도

![img.png](old_note/COMP3500/week4/images/img.png)

- 해시 값이 다른 경우 두 개체가 다른것을 바로 확인할 수 있음
- 해시 값이 같으면 반드시 두 개체가 같지는 않음
    - 해시 충돌
- 누출되면 곤란한 데이터를 해시로 변환해 저장하면 누출되더라도 원본 정보를 알 수 없음
    - 해시의 단방향성:
        - 해시 값에서 원래의 데이터를 복원하는 것은 실질적으로 불가능

## 해시함수의 정의(필수 조건)

![img_1.png](old_note/COMP3500/week4/images/img_1.png)

- 해시 함수 출력의 크기는 고정
    - 해시값
    - 해시코드
    - digest
    - 등등 다양하게 부름

![img_2.png](old_note/COMP3500/week4/images/img_2.png)

- 해시 충돌은 발생할 수 있음

![img_3.png](old_note/COMP3500/week4/images/img_3.png)

- 수학에서 함수의 정의를 만족하지 못함

![img_4.png](old_note/COMP3500/week4/images/img_4.png)

- 결정론적 작동
    - 수학의 함수 정의를 만족한다는 말임

## 해시 알고리듬 분류

![img_5.png](old_note/COMP3500/week4/images/img_5.png)

![img_6.png](images/img_6.png)

## 모든 해시 알고리듬의 속성

![img_7.png](images/img_7.png)

## 균일성

![img_8.png](images/img_8.png)

- 출력값이 고르게 분포되는 정도

- 완벽한 해시 함수는 해시 충돌이 전혀 없음
    - 균일성이 매우 높음

### 균일성의 측정

![img_9.png](images/img_9.png)

![img_10.png](images/img_10.png)

- 균일성을 직접 높일 수 있을까?

![img_11.png](images/img_11.png)

- 균일성을 높이는 방법:
    1) 버킷 수(m)을 소수로 사용
    2) 완벽한 눈사태가 나도록 해시 함수 설계

![img_12.png](images/img_12.png)

### 완벽한 눈사태(avalanche effect)

![img_13.png](images/img_13.png)

- 눈사태 효과가 있으면 원본을 찾기 어려워짐

## 지역 민감 해시

- 균일성은 무조건 높아야 좋을까?

![img_14.png](images/img_14.png)

- 해시 충돌의 '최대화'를 목표로 하는 알고리듬
- 비슷한 내용을가진 데이터(입력)끼리 해시값(출력)이 충돌(비슷)해야함
    - 지역성:
        - 모든 입력 X
    - 균일성이 낮아야함

![img_15.png](images/img_15.png)

- 용도:
    - 엄청나게 많은 데이터에서 비슷한 것들을 찾는 용도
    - 스팸 메일 찾기
    - 웹 검색 엔진에서 비슷한 문서 추천하기
        - 요즘은 머신러닝 많이 씀
    - 음원, 사진 등의 저작권 침해 검사

- POCU 아카데미에서도 과제/실습 부정 검사에 이거 사용하는 듯?

## 효율성

![img_16.png](images/img_16.png)

- 공간을 더 낭비해도 빠른 접근 속도를 선호
    - 왜?
    - 메모리에 비해서 CPU가 더 한정적인 자원

- 하드웨어 가속이 어렵다 == 하드웨어에서 효율성이 좋지 않다
    - 암호학적으로 사용할 때 하드웨어에서 효율성이 좋지 않은 것을 선호

## 암호학적 해시 알고리듬의 추가 속성

![img_17.png](images/img_17.png)

## 비암호학적 해시 함수

![img_18.png](images/img_18.png)

- 해시 함수를 만들었는데, 암호학적으로 사용하기에 문제가 있어서 다른 용도로 사용
- 일반적인 경우 암호학적 해시 함수보다 효율성이 좋음

![img_19.png](images/img_19.png)

- 모든 데이터에 대해 최고의 결과를 보장하는 해시 함수는 없음
- 따라서 입력 데이터에 따라 해시 함수를 사용하는 것이 좋겠죠?
    - Universal Hashing:
        - 해시 함수의 집합을 정의하고 그 집합에서 임의의 해시 함수를 선택하는 방식으로 동작함
        - 여기서 선택할 때 서로 다른 키가 동일한 해시 값을 가질 확률이 기준 이하가 되도록 선택
- Java에서 클래스 구현자에게 hashCode() 함수 구현을 맡기는 이유
    - 클래스를 만든 사람이 그 데이터에 대해서 잘 알고, 따라서 hash함수를 구현하는게 옳음
- 'bit-packing'도 해시 함수로 사용할 수 있음

### 비트 패킹

![img_20.png](images/img_20.png)

- 해시코드 32비트 중에서 상위 16비트는 사용하지 않기 때문에 균일성이 떨어짐

![img_21.png](images/img_21.png)

- 나이는 음수가 안 되기 때문에 최상위 비트 사용하지 않음

![img_22.png](images/img_22.png)

- order는 두번째 기준
    - 나이가 동일하다면 4비트 정도 동일한 나이를 가진 개체를 구분하기 위해 사용
    - 즉 나이가 동일한 데이터 풀에서 최대 16개 정도 서로 다른 순서를 가질 수 있겠죠?

- this.age << 8 | this.order
    - 이 코드가 비트 패킹인데, 이것도 (비암호학적) 해시 함수의 정의를 만족함
        - 결정론적 작동(수학에서 함수의 정의 만족)
        - 고정된 크기의 출력

## 올바른 해시 함수를 고르는 법

![img_23.png](images/img_23.png)

- 해시 함수를 잘 고르는게 더 중요하다
    - 이미 잘 만들어놓은 해시가 많음
- 덤으로 이미 잘 만들어놓은 해시가 어떤 식으로 동작하는지 익히면 좋고

![img_24.png](images/img_24.png)

- 속도, 해시 충돌 수
    - 이 정도가 제일 중요하고 나머진...
- 참고로 속도는 시간복잡도를 측정할 때(가상의 컴퓨터를 가정)와 다르게, 진짜 실제 컴퓨터에서 속도임

## Lose Lose 해시

![img_25.png](images/img_25.png)

![img_26.png](images/img_26.png)

- 가장 최악의 해시 함수
    - 실무에서 못 씀

- byte 자료형이라 아스키 값
- 이 값을 누적해서 더하고, 오버플로우가 나기도 하지만, 최종 값은 구할 수 있음
- 위 예시에서
    - B(66) + E(69) == C(67) + D(68)
    - 충돌나죠?

## Murmur 해시

![img_27.png](images/img_27.png)

- 매개변수 seed 해시값의 초기값
    - fold 에서 acc 변수 생각하면 됨

- 매개변수 len 입력받은 key(8비트 unsigned int 배열)의 길이
    - len >> 2 값이 루프 횟수
    - key의 크기는 len * 8 bit == len Byte
    - len Byte를 읽을 때 4 바이트 블록 단위로 읽는다는 말
    - 쉽게 생각하면 배열의 요소 4개씩 한 번에 읽는거죠

- memcpy로 key에서 1바이트 읽어옴
    - 이 때 CPU가 빅 엔디언인지 리틀 엔디언인지 따라 바이트 순서를 바꿔야할 수도 있음

- 스크랩블해서 xor

- 비트 쉬프트해서 합치고

- hex값 더해주고

- 뭔가 hashing (으깨는) 연산들

- 4바이트씩 읽고 나머지 값들 처리하고 끝

## FNV-1 해시

![img_28.png](images/img_28.png)

- 큰 소수를 사용함
- FNV_OFFSET_32 에서 해시값 초기화
- 모든 입력 문자에 대해 큰 소수 구하고(오버 플로우 발생해도 괜찮음)
- xor 연산하고
- 이 해시가 Murmur 해시보다 성능 좋음

## FNV-1a 해시

![img_29.png](images/img_29.png)

- 연산 순서를 바꾼게 끝

- 여기서 얻은 결론:
    - 소수 곱해서 오버플로우를 발생하고
    - xor 연산을 적절히 버무리면 해시값이 나온다

## 체크섬

![img_30.png](images/img_30.png)

- 길이가 긴 데이터를 전송하는 상황
    - 이 데이터가 올바르게 전송됬는지 확인하고 싶음

### xor8 check sum

- 데이터의 각 8비트(1바이트)단위에 대해 xor 연산을 적용해 하나의 8비트 체크섬 값을 생성하는 방법

- 데이터: [0x1A, 0x2B, 0x3C, 0x4D]
- 주어진 데이터는 바이트 배열

1. 초기값: Checksum = 0x00
2. 첫 번째 바이트 (0x1A): Checksum = 0x00 XOR 0x1A = 0x1A
3. 두 번째 바이트 (0x2B): Checksum = 0x1A XOR 0x2B = 0x31
4. 세 번째 바이트 (0x3C): Checksum = 0x31 XOR 0x3C = 0x0D
5. 네 번째 바이트 (0x4D): Checksum = 0x0D XOR 0x4D = 0x40

- 최종 체크섬:
    - 0x40

- 출력값의 크기가 8비트로 고정된다.
    - 해시 함수의 성질을 모두 만족함
        - 결정론적 작동
        - 고정된 크기의 아웃풋

![img_31.png](images/img_31.png)

- 전송하는 데이터는 언제든 바뀔 수 있음
    - 전송 오류는 항상 존재함
    - 하드 디스크 옆에 자석 두지 말라는 이야기

- 전송자는 체크섬을 계산하고 데이터 전송
- 데이터 전송이 끝나고 수신자가 읽고 다시 체크섬 계산
- 두 체크섬을 비교하면 됨
    - 전송자가 보내기 쉬운게, 체크섬은 짧기 때문

### 체크섬 사용례

![img_32.png](images/img_32.png)

- 오 신기하네

![img_33.png](images/img_33.png)

- Luhn 알고리듬
- 서비스 개발할 때 올바른 신용카드 검사할 때 활용할 수 있음
    - 굳이 신용카드 회사 api 때리기 싫으면, 자체적으로 검사하고 유효한거만 api 호출하고 이렇게 활용할 수 있음

![img_34.png](images/img_34.png)

### 체크섬이 보장하는 것

![img_35.png](images/img_35.png)

- 체크섬은 간단하기 때문에 많이 사용한다
    - 시간, 공간적 자원을 많이 사용하지 않음

![img_36.png](images/img_36.png)

- 체크섬이 보장하는 것:
    - 데이터의 변경 여부
- 체크섬이 일치하지 않으면:
    - 재전송
- 데이터 복구는 일반적으로 지원하지 않음
- 데이터 복구를 지원하는 체크섬도 있음!
    - ECC:
        - 오류 검출 및 데이터 정정 지원
        - 모든 오류를 정정하지는 못함

### 체크섬과 미러 사이트

![img_37.png](images/img_37.png)

- 미러 사이트에서 대신 파일을 호스팅하는 상황
    - 보통 호스팅 하는 주체는 광고달고 광고비를 범
- 하지만 악의적인 목적으로 파일을 호스팅할 때 스파이웨어를 넣을 수 있음
- 이를 막기 위해 체크섬을 공개함
    - 다운로더는 체크섬을 비교해서 파일 변조 여부를 확인할 수 있음
    - 근데 미러 사이트에서 체스섬을 공개할 수 도 있는데, 낚시임 ㅋㅋ
    - 반드시 원저자의 체크섬을 이용하자!

## 패리티 비트

- 체크섬의 일종

![img_38.png](images/img_38.png)

- 원본 데이터에 패리티 데이터를 추가해 데이터의 단위를 구성
    - 보통 1바이트 단위로 많이 사용
- 목적은 원본 데이터가 뒤집혔는지 여부를 확인하는 것
- 짝수 패리티를 사용하는지 홀수 패리티를 사용하는지 고르게 됨
    - 홀수 패리티를 사용하는 경우:
        - 데이터 단위(원본 데이터 + 패리티 비트)에서 값이 1인 비트의 개수가 홀수 개를 만족해야함
        - 원본 데이터가 000 0000 이면 패리티 비트를 1로 정해 1000 0000 을 만들어 홀수로 만들어 전송
        - 수신자는 홀수 패리티를 사용하는 것을 알고 있고, 전송 받은 1000 0000 에서 값이 1인 비트의 수가 홀수임을 확인함

## CRC

- 체크섬의 일종

![img_39.png](images/img_39.png)

- 다항식을 이용한 알고리듬
    - 여기서 말하는 다항식의 나머지 연산이 아래에서 계산하는 방법이라고 생각하면 됨.
    - 근본적인 연산에 대한 정의는 [GF(2)](https://en.wikipedia.org/wiki/GF(2))를 참고하자.
- 이 다항식이 이진수 하드웨어에서 구현하기 쉽게 설계되어 있음

![img_40.png](images/img_40.png)

- 다항식의 최고차항부터 최소차항까지 계수를 이진수로 저장하는 방식
    - 각 차항의 계수는 1 아니면 0
    - 최고차항의 계수는 언제나 1이라고 가정
        - 애초에 최고차항의 계수가 0이면 최고차항이 아니죠?
- 최고차항에 따라 CRC의 이름이 결정됨
    - CRC-3
    - 3차가 최고차항

![img_41.png](images/img_41.png)

- 1011 (총 4비트)

![img_42.png](images/img_42.png)

- 최고차항의 계수는 언제나 1이라서 생략해도 됨
- 011 (총 3비트)

### CRC-3-GSM 계산 예

![img_43.png](images/img_43.png)

- 최종적으로 3비트 체크섬을 만든다

![img_44.png](images/img_44.png)

- 3개 만큼 0을 추가

- 다항식 비트 수 - 1:
    - 이 값이 CRC-3에서 숫자 3과 동일함
    - 3차 다항식에서 최고차항을 제외하면 총 3비트

![img_45.png](images/img_45.png)

![img_46.png](images/img_46.png)

- XOR 계산

![img_47.png](images/img_47.png)

![img_48.png](images/img_48.png)

![img_49.png](images/img_49.png)

- 1을 찾을때 까지 오른쪽으로 쉬프트

![img_50.png](images/img_50.png)

![img_51.png](images/img_51.png)

- xor 계산할 때 가장 왼쪽 비트가 모두 1이라서 결과값은 항상 0이됨

![img_52.png](images/img_52.png)

- 진행하다보면 결과값 비트가 왼쪽에서 부터 0으로 변해가는 것을 확인할 수 있음

![img_53.png](images/img_53.png)

![img_54.png](images/img_54.png)

![img_55.png](images/img_55.png)

![img_56.png](images/img_56.png)

![img_57.png](images/img_57.png)

![img_58.png](images/img_58.png)

![img_59.png](images/img_59.png)

![img_60.png](images/img_60.png)

![img_61.png](images/img_61.png)

- 남는 값이 체크섬

### CRC-3-GSM 검증법

- 받는 사람 입장

![img_62.png](images/img_62.png)

![img_63.png](images/img_63.png)

- 전송자가 보낸 체크섬을 붙임

![img_64.png](images/img_64.png)

![img_65.png](images/img_65.png)

## 복습 퀴즈: CRC-4-ITU

```text
x^4 + x + 1
```

- 원본 메시지가 `10110011` 라면 검사값은 무엇인가요?
- 전송자 입장에서 계산하기

- CRC 다항식을 비트로:
    - 0011
- 최고차항 - 1 개 0을 더하기:
    - 10110011 0000

- 10110011 0000
- 10011
- xor:
    - 00101011 0000

- 00101011 0000
- xx10011
- xor:
    - 00001101 0000

- 00001101 000
- xxxx1001 1
- xor:
    - 00000100 1000

- 00000100 1000
- xxxxx100 11
- xor:
    - 00000000 0100
- 원래의 비트가 모두 0이 되었으니 계산 중단
- 체크섬: 0100

## 코드보기: CRC-32 체크섬

```java
package academy.pocu.comp3500samples.w04.crc32;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.zip.CRC32;
import java.util.zip.CheckedInputStream;

public class Program {
    public static void main(String[] args) {
        String input1 = "My text";
        String input2 = "My text";
        String input3 = "My different text";

        byte[] input1Bytes = input1.getBytes();
        byte[] input2Bytes = input2.getBytes();
        byte[] input3Bytes = input3.getBytes();

        CRC32 crc32 = new CRC32();

        crc32.update(input1Bytes);
        long checksum1 = crc32.getValue();

        System.out.println(
                String.format("input1: %d",
                        checksum1));

        crc32.reset();

        crc32.update(input2Bytes);
        long checksum2 = crc32.getValue();

        System.out.println(
                String.format("input2: %d",
                        checksum2));

        crc32.reset();

        crc32.update(input3Bytes);
        long checksum3 = crc32.getValue();

        System.out.println(
                String.format("input3: %d",
                        checksum3));

        String input = "My long long text";
        byte[] inputArray = input.getBytes(StandardCharsets.UTF_8);
        InputStream inputStream = new ByteArrayInputStream(inputArray);

        CheckedInputStream checkedInputStream = new CheckedInputStream(inputStream, new CRC32());
        byte[] buffer = new byte[1024];

        try {
            while (checkedInputStream.read(buffer,
                    0,
                    buffer.length) >= 0) {
                // intentionally empty
            }

            long checksum = checkedInputStream
                    .getChecksum()
                    .getValue();

            System.out.println(
                    String.format("input: %d",
                            checksum));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

- CRC32 개체의 update 함수는 바이트 배열을 매개변수로 받음
- 1바이트씩 쉬프트하면서 계산하는 동작 생각하자
- 위의 예시와 같이 짧은 문자열은 equals 매서드로 비교하는게 더 쉽긴함
- 하지만 문자열이 매우매우매우 길다면?
    - 위 방식처럼 체크섬을 활용하자!
    - 1024 바이트 정도(1KB) 블락 단위로 읽어오고
    - 체크섬 확인

## 암호학적 해시 알고리듬

- 전통적인 소프트웨어 공학에서 비암호학적 해시 알고리듬을 많이 사용하긴 함
- 일반적인 프로그래머라면 이정도 알면 충분함

![img_66.png](images/img_66.png)

- 해시값에서 원본 값을 찾으려면 비용이 너무 많이 듬
    - 컴퓨팅 파워가 곧 비용
- 해시 함수는 일방향 함수
    - 출력값에서 역으로 입력값을 구할 수 없음(사실상 불가능)

- 원본 값을 찾으려면 브루트 포스
    - 어떤 암호학적 해시 함수는 이미 깨졌음

![img_67.png](images/img_67.png)

- 무결성 검사할 때 데이터 변조를 막을 수 있음
- 디지털 서명은 당연히 원본 서명이 중요함

![img_68.png](images/img_68.png)

### 암호학적 해시 알고리듬의 추가 속성

![img_69.png](images/img_69.png)

- 이 속성들이 강해야 암호학적으로 좋음

## 역상 저항성

![img_70.png](images/img_70.png)

- 디비에 해시값만 저장했는데, 이 해시에서 역으로 원본 비밀번호를 구할 수 있으면..?
- 디비가 털리면 위험하죠?

![img_71.png](images/img_71.png)

![img_72.png](images/img_72.png)

![img_73.png](images/img_73.png)

- 역상 공격을 방지하자
- 산사태 효과가 있는 좋은 알고리듬을 사용하면 역상 저항성이 높다

## 제 2 역상 저항성

![img_74.png](images/img_74.png)

- 해커가 어떤 사이트에 가입함
- 이 때 자신이 설정한 비밀번호로 가입함
    - 입력값을 가지고 있음
- 사이트의 데이터베이스을 털어서 내 비밀번호의 해시값을 구했음
- 이를 통해 다른 원본 데이터를 찾을 수 있음
- 이 때 해시값이 겹치는 다른 원본 데이터를 찾기 어려워야함!!

![img_75.png](images/img_75.png)

![img_76.png](images/img_76.png)

## 충돌 저항성

![img_77.png](images/img_77.png)

- 해커는 데이터를 전혀 가지고 있지 않음
- 아무 값이나 입력해서 해시 충돌을 찾는 것을 막는 개념

![img_78.png](images/img_78.png)

- MD5, SHA-1 알고리듬은 이미 충돌 공격에 노출됨
- 충돌 공격은 역상 공격보다 쉬움
- 생일문제와 관련 있음

## 생일 문제

![img_79.png](images/img_79.png)
![img_80.png](images/img_80.png)

- 모든 사람의 생일이 9월 1일이 아닌 확률을 빼면 됨

![img_81.png](images/img_81.png)

- 모든 사람이 생일이 다를 확률을 빼면 됨

![img_82.png](images/img_82.png)

![img_83.png](images/img_83.png)

- 여기서 충돌 공격이 왜 쉬운지 확률적으로 알 수 있음

![img_84.png](images/img_84.png)

- 이런 문제가 발생한 이유:
    - 출력값의 길이가 고정

![img_85.png](images/img_85.png)

- 생일 문제에서는 365일이 출력값의 길이와 대응됨

![img_86.png](images/img_86.png)

- 출력값(해시값)의 길이(범위)를 늘리면 충돌 확률을 줄일 수 있음

## 보안 이야기: 비밀번호 터는 법

![img_87.png](images/img_87.png)

- 비밀번호는 반드시 해시로 저장하자

![img_88.png](images/img_88.png)

- 해시로 디비에 저장해도, 모든 비밀번호를 시도하는 것 자체를 막을 수는 없음
    - 다만 웹 자체 기능으로 시도를 막음
        - 5번 실패 후 계정 잠금
        - 웹 페이지 갱신 속도 제약
- 무차별 대입 공격으로 해시값을 찾을 수 있는게 역상 저항성이 높다는 거죠?

![img_89.png](images/img_89.png)

- 그렇다면 왜 해시로 저장해야하나?
- 데이터베이스가 털렸을 때 비밀번호(원본 데이터) 노출을 막음

![img_90.png](images/img_90.png)

- 해커의 입장에서 비밀번호를 알아내는 방법?
- 우선 디비를 해킹해서 내 컴퓨터로 데이터를 다 옮겨옴
    - 이제 웹 사이트의 제약을 받지 않음
- 하드웨어 가속해서 무차별 대입
- 그래서 하드웨어에서 가속이 어려운 암호학적 해시 알고리듬을 사용하면 좋음
- 무차별 공격에서 경우의 수를 확실하게 늘리는 법은 비밀번호의 길이
    - 시간복잡도가 엄청 증가함
    - 자리수마다 경우의수 지수 함수 형태로 증가

![img_91.png](images/img_91.png)

- 사전 공격:
    - 사저에 있는 단어들을 조합
    - 사람들은 비밀번호 만들 때 사전에 있는 단어를 사용하는 경우가 많아서
    - 무차별 대입 공격보다 빠름
- 요즘 브라우저에서 생성해주는 이상한 비밀번호가 이 공격을 막기에 좋죠?

![img_92.png](old_note/COMP3500/week4/images/img_92.png)

- 레인보우 테이블:
    - 미리 계산해 놓은 해시값의 목록
    - 해시맵 같은거
        - 해시값과 평문의 대응관계 저장
    - 이거 사용하면 시간복잡도 O(1)

![img_93.png](old_note/COMP3500/week4/images/img_93.png)

![img_94.png](old_note/COMP3500/week4/images/img_94.png)

- 사실 이 공격들 모두 본질적으로 알려진 해시 함수를 사용해서 발생하는 문제
- 하지만 이 때문에 새로운 자체 해시함수를 만들어 사용하는건 비추

![img_95.png](old_note/COMP3500/week4/images/img_95.png)

- 암호학 전문가의 검증받은 해시 알고리듬을 사용하자
- 여튼 알려진 해시 알고리듬을 사용하기 때문에, 보안 업계에서는 어떤 알고리듬이 털리면 빠르게 다른 알고리듬으로 바꾸는게 중요함
    - 니 이웃이 털리면 자물쇠를 바꿔라!

## 보안 이야기: 비밀번호 덜 털리는 법

![img_96.png](old_note/COMP3500/week4/images/img_96.png)

- 이미 대규모로 털린 비밀번호 목록은 사용하지 못하게 하자!
    - 이 목록에 대한 API도 있음 ㅋㅋ
- 긴 비밀번호 강제
    - 시간 복잡도 생각하죠
- 아에 비밀번호를 저장하지 않고, 소셜 로그인도 괜춚함
    - 이게 요즘 대세
    - POCU 아카데미도 이렇게
    - 서비스 개발할 때 웬만하면 이렇게 하는거 강추
    - 최대한 저장하지 않으면 당연히 덜 털리고 좋죠?!

![img_97.png](old_note/COMP3500/week4/images/img_97.png)

- salt 뿌리기
- 비밀번호 저장 시 랜덤 문자열을 함께 저장
- salt 까지 포함한 레인보우 테이블은 존재하기 쉽지 않음
- 디비가 털리면 salt도 털리긴함

![img_98.png](old_note/COMP3500/week4/images/img_98.png)

- 근데 salt는 유저 패스워드 마다 생성하니까
- 해커 입장에서 하나의 유저 패스워드 알아내려고 열심히 연산해서 얻고, salt 값 하나 얻어봤자임
    - 다른 유저 salt도 고생하면서 알아야함

![img_99.png](old_note/COMP3500/week4/images/img_99.png)

- 굉장히 시간복잡도가 증가하는...

![img_100.png](old_note/COMP3500/week4/images/img_100.png)

- pepper도 추가
- 비밀번호의 길이를 늘리는 효과
- 디비에 저장하지 않고 웹서버 메모리에 저장
- 사실 이렇게 다 털리는 경우는 잘 없긴함;

![img_101.png](old_note/COMP3500/week4/images/img_101.png)

![img_102.png](old_note/COMP3500/week4/images/img_102.png)

- 결론 보안 관련 뉴스를 구독해서, 털린 알고리즘 있으면 빨리 바꾸자!!!
- 어떤 웹 사이트 사용할 때 비밀번호 다 리셋을 강요하는 경우 해시 함수를 바꾼거라서 좋은 웹사이트임!!
    - 보안에 신경쓴다는 거니까
- 비밀번호 찾기를 허용하는 사이트는 쓰지말자!
    - 디비에 평문으로 정한다는 소리?!
- 비밀번호 리셋이 안전함

## 코드보기: 비밀번호 해시 만들기

- PBKDF2-HMAC-SHA256로 비밀번호 해시 만들기
- Java에서 제공하는 api 활용

```java
package academy.pocu.comp3500samples.w04.passwordhashing;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Arrays;
import java.util.Base64;
import java.util.UUID;

public final class User {
    private final static int SALT_LENGTH_IN_BYTES = 16;
    private final static int NUM_ITERATIONS = 10000;
    private final static int OUTPUT_KEY_LENGTH_IN_BYTES = 256 / 8;

    private final UUID id = UUID.randomUUID();
    private String email;
    private String paswordHash;

    public User(final String email,
                final String password) {
        this.email = email;
        setPassword(password);
    }

    public UUID getId() {
        return this.id;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPaswordHash() {
        return this.paswordHash;
    }

    public void setPassword(String password) {
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[SALT_LENGTH_IN_BYTES];
        random.nextBytes(salt);

        try {
            KeySpec spec = new PBEKeySpec(password.toCharArray(),
                    salt,
                    NUM_ITERATIONS,
                    OUTPUT_KEY_LENGTH_IN_BYTES * 8);
            SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");

            byte[] hash = factory.generateSecret(spec).getEncoded();

            byte[] outputBytes = new byte[SALT_LENGTH_IN_BYTES + OUTPUT_KEY_LENGTH_IN_BYTES];

            System.arraycopy(salt,
                    0,
                    outputBytes,
                    0,
                    SALT_LENGTH_IN_BYTES);
            System.arraycopy(hash, 0,
                    outputBytes,
                    SALT_LENGTH_IN_BYTES,
                    OUTPUT_KEY_LENGTH_IN_BYTES);

            this.paswordHash = Base64.getEncoder()
                    .encodeToString(outputBytes);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        } catch (InvalidKeySpecException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean isValidPassword(String password) {
        byte[] outputBytes = Base64.getDecoder()
                .decode(this.paswordHash);

        byte[] salt = new byte[SALT_LENGTH_IN_BYTES];
        byte[] expectedHash = new byte[OUTPUT_KEY_LENGTH_IN_BYTES];

        System.arraycopy(outputBytes,
                0, salt,
                0, SALT_LENGTH_IN_BYTES);
        System.arraycopy(outputBytes,
                SALT_LENGTH_IN_BYTES, expectedHash,
                0, OUTPUT_KEY_LENGTH_IN_BYTES);

        try {
            KeySpec spec = new PBEKeySpec(password.toCharArray(),
                    salt, NUM_ITERATIONS,
                    OUTPUT_KEY_LENGTH_IN_BYTES * 8);

            SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");

            byte[] actualHash = factory
                    .generateSecret(spec)
                    .getEncoded();

            return Arrays.equals(expectedHash, actualHash);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        } catch (InvalidKeySpecException e) {
            throw new RuntimeException(e);
        }
    }
}
```

- SALT_LENGTH_IN_BYTES
    - 이 길이는 NIST 에서 권고하는 salt 길이

- Key spec은 위키 찾아보면 됨

- isValidPassword 함수는 비밀번호 입력에 대해서 똑같이 salt 넣고 해시값 계산해서 비교하는 동작