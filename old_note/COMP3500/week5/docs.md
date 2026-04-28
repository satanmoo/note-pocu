# Week5

## 암호화

![img.png](old_note/COMP3500/week5/images/img.png)

- 평문(사람이 누구나 읽으면 이해할 수 있는 정보)

![img_1.png](old_note/COMP3500/week5/images/img_1.png)

- 암호문(본다고 이해할 수 없음)

![img_2.png](old_note/COMP3500/week5/images/img_2.png)

- 암호화된 정보를 이해하려면 '특별한 정보'를 알아야 함

## 복호화

![img_3.png](old_note/COMP3500/week5/images/img_3.png)

- 암호화에 사용한 방법을 알면 빠르게 복호화 할 수 있음

## 해시 알고리듬과 암호화

![img_4.png](old_note/COMP3500/week5/images/img_4.png)

- (암호학적) 해시 알고리듬은 1-way
    - 원문 복구를 막는게 목표
    - 여기서 말하는 해시 알고리듬은 암호학적 해시 알고리듬이라고 생각하기
    - 비밀번호 같은 경우 입력받은 비밀번호를 해시 함수에 넣어 나온 결과를 비교하기만 하면 되기 때문에 원문 복구할 필요가 없음

- 암호화 알고리듬은 원문 복구를 허용해야함
- 고객의 정보를 데이터베이스에 저장하는 경우 암호화 알고리듬을 사용
    - 보안 관점에서 중요한 것은 필요한 고객 정보만 저장하는 것
    - 예를 들어, 본인인증에서 주민번호를 사용하는 상황에서 인증하는 동안은 주민번호 정보를 가지고 있어야함. 하지만 인증 후 이 고객이 인증했다는 여부만 저장하고 주민번호는 지워야함
    - 예를 들어, 판매 사이트에서 배송을 위해 고객의 주소를 저장해야함. 데이터베이스에 주소는 평문으로 저장하면 안 됨
        - 데이터베이스가 털리거나, 내부자가 유출할 수 있음
        - 주소는 암호화해서 저장하고 배송할 때 복호화 과정이 필요함

- 결론은 용도에 따라서 구분하기

## 암호화의 역사

![img_5.png](old_note/COMP3500/week5/images/img_5.png)

![img_6.png](old_note/COMP3500/week5/images/img_6.png)

![img_7.png](old_note/COMP3500/week5/images/img_7.png)

- 범죄 예방의 기본
    - 내정보가 옆 사이트보다 안전하면 됨
    - 도둑은 덜 안전해보이는 집을 텀

![img_8.png](old_note/COMP3500/week5/images/img_8.png)

- 글자 교환 방식은 brute force로 깰 수 있음

## 정수론

![img_9.png](old_note/COMP3500/week5/images/img_9.png)

- 암호 때문에 관심을 받기 시작한 학문

### 암호학에서 사용하는 정수

![img_10.png](old_note/COMP3500/week5/images/img_10.png)

- 암호학에서는 매우 큰 정수를 사용한다.
    - 32비트를 훨씬 넘는다.
- 암호학에서 입력크기 N은 정수의 비트 수를 의미한다.
    - 보통 Big-O 표기법에서 N은 배열속의 요소 수로 한 번에 처리할 수 있는 연산을 N번 처리한다는 의미
        - 32비트 컴퓨터라면 32비트 정수를 한 번에 계산할 수 있다.
- 암호학에서 곱셈, 나눗셈, 모듈러 연산의 시간복잡도는 비트 수에 비례
    - 한 번에 32비트까지 연산하는 컴퓨터라면 3200비트 정수를 연산할 때 100번 연산해야함
    - Big-O 표기법의 random access machine 은 O(1)

## 현대에 사용하는 암호화 알고리듬의 두 종류

![img_11.png](old_note/COMP3500/week5/images/img_11.png)

- 대칭 키 암호화
    - 암호화/복호화에 동일한 키를 사용
    - 변환표에서 암호화 ㄴ -> ㅌ, 복호화 ㅌ -> ㄴ
    - 똑같은 키

![img_12.png](old_note/COMP3500/week5/images/img_12.png)

- 비대칭 키 암호화
    - 암호화/복호화에 서로 다른 키를 사용
    - '공개 키 암호화'라고 부름

## 대칭 키 암호화

![img_13.png](old_note/COMP3500/week5/images/img_13.png)

- 키는 송신자와 수신자간의 공유하는 비밀
    - 다른 사람이 키를 알면 곤란하쥬
    - 이게 대칭 키 암호화의 단점

### 예시

![img_14.png](old_note/COMP3500/week5/images/img_14.png)

![img_15.png](old_note/COMP3500/week5/images/img_15.png)

![img_16.png](old_note/COMP3500/week5/images/img_16.png)

![img_17.png](old_note/COMP3500/week5/images/img_17.png)

- xor 연산이 편한 이유
    - 두번 연산하면 원래대로 돌아옴

![img_18.png](old_note/COMP3500/week5/images/img_18.png)

![img_19.png](old_note/COMP3500/week5/images/img_19.png)

![img_20.png](old_note/COMP3500/week5/images/img_20.png)

- 암호화 키로 xor 연산하면 복호화

![img_21.png](old_note/COMP3500/week5/images/img_21.png)

- 핵심은 암호화 키를 서로만 알아야함!!

## 스트림 암호와 블록 암호

- 대칭키 암호화에 적용되는 개념

![img_26.png](old_note/COMP3500/week5/images/img_26.png)

- 스트림 암호:
    - 한 번에 1바이트씩 암호화 진행
    - 위 예시에서는 모든 바이트에 동일한 키(10110101)을 사용했지만, 안전하게 하려면 적용하는 키가 달라야함
        - 보통은 시드값을 정하고 난수로 생성함
        - 암호화, 복호화 양쪽에 동일한 시드값 + 난수 알고리듬 사용해서 비트마다 난수값 교체
        - 동적으로 난수를 활용해 키를 생성하기 때문에 이를 위한 설정이 상대적으로 복잡함
    - 블록 암호보다 설정이 복잡지만 속도가 빠름

- 블록 암호:
    - 정해진 블록을 한 번에 암호화
    - 각 블록에 사용하는 키가 동일함
        - 이 키가 대칭키
    - 스트림 암호보다 각 블록에 대해 복잡한 연산을 하기 때문에 속도가 느림

### WI-FI  비밀번호도 일종의 대칭 키

![img_22.png](old_note/COMP3500/week5/images/img_22.png)

- 공유기에 설정하는 비밀번호와 스마트폰에서 입력하는 비밀번호가 동일함
    - 이 비밀번호의 정체가 대칭 키
- 통신할 때 이 대칭 키로 암호화 하고 복호화
    - 하지만 엄밀하게 말하면 대칭 키는 아니다!!

![img_23.png](old_note/COMP3500/week5/images/img_23.png)

- 실제로 암호화 키는 비밀번호 + 기기 식별값으로 구성됨
    - 따라서 접속자마다 다른 대칭 키를 사용하게 됨
    - WPA2-Personal
    - 해커가 공유기와 스마트폰 사이의 모든 트래픽을 캡쳐한다면, 처음 교환하는 기기 식별값을 알아낼 수 있어서 공개 키가 노출될 수도..
        - 이 때문에 공용 와이파이를 사용할 때 VPN을 사용하라는 조언도 있음

## AES 알고리듬

- 유명한 대칭 키 알고리듬들

![img_24.png](old_note/COMP3500/week5/images/img_24.png)

![img_25.png](old_note/COMP3500/week5/images/img_25.png)

- NSA에서 승인해서 공신력 굿
    - 미국 정보국
- 블록 암호(block cipher)
- 키 길이 다양하게 결정할 수 있음
- 키 길이에 따라 '라운드' 수가 달라짐
    - 라운드는 암호화에서 반복적인 연산을 말함

### AES의 블록

![img_27.png](old_note/COMP3500/week5/images/img_27.png)

- 128 비트
    - 16 바이트
- 행렬 연산 기반

### AES 알고리듬의 구성

![img_28.png](old_note/COMP3500/week5/images/img_28.png)

- 여러 라운드 연산을 하게 됨
- 키 길이에 따라 라운드 수 달라짐
- 각 라운드 마다 하는 일도 다르고 키도 다름

## AES 내부 연산

![img_29.png](old_note/COMP3500/week5/images/img_29.png)

- 이 예시에서 사용할 데이터
    - 총 20바이트라서 한 블럭에 모두 들어가지 못함
    - 만약 입력하는 평문이 20바이트라면 나머지 4바이트 + 12바이트 패딩으로 출력은 32바이트
- 키 길이는 128 비트 정수라고 가정

### 키 확장(key expansion)

- 우리가 제공한 암호화 키(대칭 키, 위에서 정한 128비트 정수)에 따라 각 라운드에 사용할 키를 생성
    - AES key schedule 개념
- 암호화 키의 길이가 달라져도 각 라운드에 사용되는 '라운드 키'는 모두 128비트임
    - AES-128 알고리듬이라서

### 0 라운드: 라운드 키 더하기

![img_30.png](old_note/COMP3500/week5/images/img_30.png)

![img_31.png](old_note/COMP3500/week5/images/img_31.png)

- 더하는 것의 개념은 xor

![img_32.png](old_note/COMP3500/week5/images/img_32.png)

- 원문을 아스키 비트패턴으로 바꿔서 xor
- 이 결과 평문(원본 메시지)가 암호화 됨
- 그리고 0라운드의 암호화된 출력을 1라운드의 입력으로 사용함
    - 그리고 연쇄로 ...

### 최종 라운드 전 여러 라운드: 바이트 대체

![img_33.png](old_note/COMP3500/week5/images/img_33.png)

- SubBytes
    - AES S-Box 룩업 테이블을 사용

![img_34.png](old_note/COMP3500/week5/images/img_34.png)

![img_35.png](old_note/COMP3500/week5/images/img_35.png)

- 행,렬 퍼즐 찾듯이 테이블에 따라 값 찾아서 바꿈
    - 룩업 테이블이 이런 개념입니다!

![img_36.png](old_note/COMP3500/week5/images/img_36.png)

![img_37.png](old_note/COMP3500/week5/images/img_37.png)

- 룩업 테이블의 장점은 선형적인 변환이 아니다!!
    - 단순 사칙 또는 비트 연산으로 찾을 수 없음
- 여기서 얻는 효과가 혼돈 효과(confusion)

### 최종 라운드 전 여러 라운드: 행 이동

![img_38.png](old_note/COMP3500/week5/images/img_38.png)

- 행렬 구조에서 행 단위로 바이트 쉬프트

![img_39.png](old_note/COMP3500/week5/images/img_39.png)

- 행,열 한 칸이 1바이트니까 바이트 쉬프트입니다

![img_40.png](old_note/COMP3500/week5/images/img_40.png)

- 여기서 얻는 효과가 확산 효과(diffusion)

### 최종 라운드 전 여러 라운드: 열 섞기

![img_41.png](old_note/COMP3500/week5/images/img_41.png)

- 한 열이 4바이트이고, 벡터 곱을 한 결과도 4바이트

![img_42.png](old_note/COMP3500/week5/images/img_42.png)

- 어떤 행렬을 각 열마다 벡터 곱

![img_43.png](old_note/COMP3500/week5/images/img_43.png)

![img_44.png](old_note/COMP3500/week5/images/img_44.png)

- 행렬 연산에서 더하기는 xor 배타합을 사용

![img_45.png](old_note/COMP3500/week5/images/img_45.png)

![img_46.png](old_note/COMP3500/week5/images/img_46.png)

- 곱하기도 특별한 규칙으로 바꿈

![img_47.png](old_note/COMP3500/week5/images/img_47.png)

- 어떤 수를 곱하냐에 따라 다른 연산

![img_48.png](old_note/COMP3500/week5/images/img_48.png)

![img_49.png](old_note/COMP3500/week5/images/img_49.png)

![img_50.png](old_note/COMP3500/week5/images/img_50.png)

![img_51.png](old_note/COMP3500/week5/images/img_51.png)

![img_52.png](old_note/COMP3500/week5/images/img_52.png)

![img_53.png](old_note/COMP3500/week5/images/img_53.png)

![img_54.png](old_note/COMP3500/week5/images/img_54.png)

![img_55.png](old_note/COMP3500/week5/images/img_55.png)

- 이번에는 곱하기 2 연산할 때 최상위 비트가 0이라서 0x1B xor 연산 안 해도 됨

![img_56.png](old_note/COMP3500/week5/images/img_56.png)

![img_57.png](old_note/COMP3500/week5/images/img_57.png)

- 이렇게 열 섞기 계산해서...

![img_58.png](old_note/COMP3500/week5/images/img_58.png)

![img_59.png](old_note/COMP3500/week5/images/img_59.png)

- 모든 열에 연산 적용하면 됨!

![img_60.png](old_note/COMP3500/week5/images/img_60.png)

- 이 연산이 갈루아필드 곱
- 확산 효과를 받을 수 있음

### 최종 라운드 전 여러 라운드: 라운드 키 더하기

![img_61.png](old_note/COMP3500/week5/images/img_61.png)

- 바이트 대체 -> 행 이동 -> 열 섞기 -> 라운드 키 더하기
    - 128 비트니까 4 * 4 행렬에 더하는 연산으로 라운드키를 더함
    - 0라운드 연산과 동일한 방식

- 여러 라운드에 4가지 연산을 순서대로 적용
- 이전 라운드의 출력값이 다음 라운드의 입력이 되는거 잊지 말기!

### 최종 라운드

![img_62.png](old_note/COMP3500/week5/images/img_62.png)

- 여러 라운드에서 4가지 연산 중 열 섞기를 제외한 나머지 3개 연산 수행
- 이 결과가 최종 암호문!
    - 블록 단위
- 결국 최종 결과는 블록의 합으로 평문의 크기와 동일함
    - AES 암호화에서 크기는 변화하지 않음!
- 복호화는 각 라운드에서 모두 역으로 연산하면 됨!

## 코드보기: AES

```java
package academy.pocu.comp3500samples.w05.aes;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class Program {
    public static void main(String[] args) {
        String plaintext = "My message";
        String longPlaintext = "My longer message";

        {
            String aes128key = "1234567890123456";
            byte[] keyInBytes = aes128key.getBytes(StandardCharsets.US_ASCII);

            String ciphertext = encrypt(plaintext, keyInBytes);
            String longCiphertext = encrypt(longPlaintext, keyInBytes);

            System.out.println(ciphertext);
            System.out.println(longCiphertext);

            String decryptedText = decrypt(ciphertext, keyInBytes);
            String longDecryptedText = decrypt(longCiphertext, keyInBytes);

            System.out.println(decryptedText);
            System.out.println(longDecryptedText);
        }

        {
            String aes192key = "123456789012345678901234";
            byte[] keyInBytes = aes192key.getBytes(StandardCharsets.US_ASCII);

            String ciphertext = encrypt(plaintext, keyInBytes);
            String longCiphertext = encrypt(longPlaintext, keyInBytes);

            System.out.println(ciphertext);
            System.out.println(longCiphertext);

            String decryptedText = decrypt(ciphertext, keyInBytes);
            String longDecryptedText = decrypt(longCiphertext, keyInBytes);

            System.out.println(decryptedText);
            System.out.println(longDecryptedText);
        }

        {
            String aes256key = "12345678901234567890123456789012";
            byte[] keyInBytes = aes256key.getBytes(StandardCharsets.US_ASCII);

            String ciphertext = encrypt(plaintext, keyInBytes);
            String longCiphertext = encrypt(longPlaintext, keyInBytes);

            System.out.println(ciphertext);
            System.out.println(longCiphertext);

            String decryptedText = decrypt(ciphertext, keyInBytes);
            String longDecryptedText = decrypt(longCiphertext, keyInBytes);

            System.out.println(decryptedText);
            System.out.println(longDecryptedText);
        }
    }

    private static String encrypt(String plaintext, byte[] key) {
        assert (key.length == 16 || key.length == 24 || key.length == 32);

        try {
            byte[] plaintextInBytes = plaintext.getBytes(StandardCharsets.UTF_8);

            SecretKeySpec secretKey = new SecretKeySpec(key, "AES");

            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
            cipher.init(Cipher.ENCRYPT_MODE,
                    secretKey,
                    new IvParameterSpec(new byte[16]));

            byte[] encrypted = cipher
                    .doFinal(plaintextInBytes);

            return Base64.getEncoder()
                    .encodeToString(encrypted);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    private static String decrypt(String cipherText, byte[] key) {
        assert (key.length == 16 || key.length == 24 || key.length == 32);

        try {
            byte[] encrypted = Base64.getDecoder()
                    .decode(cipherText);

            SecretKeySpec secretKey = new SecretKeySpec(key, "AES");

            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
            cipher.init(Cipher.DECRYPT_MODE,
                    secretKey,
                    new IvParameterSpec(new byte[16]));

            byte[] plaintext = cipher
                    .doFinal(encrypted);

            return new String(plaintext, StandardCharsets.UTF_8);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
}
```

- 'Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");'
    - CBC 블록 암호 운용 방식
    - PKCS5 패딩 방식
    - 이런 방식을 사용한다
- IvParameterSpec:
    - 초기화 벡터
    - 의미론적 안정성을 위해 추가하는 데이터
    - 해시에서 salt랑 비슷한 개념
- 주목할 점은 입력에 따라 출력 길이가 각각 달라진다는 것
    - 해시처럼 고정된 크기의 아웃풋이 나오는게 아님!

## 비대칭 키 암호화

- 대칭 키 암호화보다 나중에 나옴

![img_63.png](old_note/COMP3500/week5/images/img_63.png)

- 키를 배포하기 위해 탄생

![img_64.png](old_note/COMP3500/week5/images/img_64.png)

- 당연히 가장 쉽게 키를 배포하는 법은 그냥 공개하는 것
- 공개하면서 안전하게!

![img_65.png](old_note/COMP3500/week5/images/img_65.png)

- 수학의 신
- '복호화'에 사용할 키를 완전히 공개
    - 암호화에 사용하는 키는?

![img_66.png](old_note/COMP3500/week5/images/img_66.png)

- 암호화와 복호화에 사용하는 키가 다르다
- 달라도 되는 이유는 수학적인 관계 때문임
    - 서로 상응하는 key pair에서 둘 중 한 키로 암호화한 메시지를 다른 키로 복호화할 수 있음
- 공개 키로 복호화
- 암호화에 사용하는 키는 비밀키
    - 개인 키

![img_67.png](old_note/COMP3500/week5/images/img_67.png)

![img_68.png](old_note/COMP3500/week5/images/img_68.png)

![img_69.png](old_note/COMP3500/week5/images/img_69.png)

![img_70.png](old_note/COMP3500/week5/images/img_70.png)

![img_71.png](old_note/COMP3500/week5/images/img_71.png)

![img_72.png](old_note/COMP3500/week5/images/img_72.png)

![img_73.png](old_note/COMP3500/week5/images/img_73.png)

![img_74.png](old_note/COMP3500/week5/images/img_74.png)

![img_75.png](old_note/COMP3500/week5/images/img_75.png)

![img_76.png](old_note/COMP3500/week5/images/img_76.png)

![img_77.png](old_note/COMP3500/week5/images/img_77.png)

- 위 방법은 잘못된 방식
    - 공개키가 누구에게나 공개되어있으면 암호화 의미가 없죠!

![img_78.png](old_note/COMP3500/week5/images/img_78.png)

- 올바른 방식에서는 공개키로 암호화
    - 누구나 암호화 가능
    - 복호화는 비밀키를 가진 사람(수신자)만 할 수 있음
    - 공개 키로 복호화는 할 수 없음!
        - 수학적인 이유로 반드시 쌍에서 상응하는 다른 키로 복호화할 수 있음

![img_79.png](old_note/COMP3500/week5/images/img_79.png)

- 이게 올바른 메시지 암호화

## 비대칭 키 암호화의 두 가지 주요 용도

- 처음에 언급한 잘못된 방법도 용도가 있음

![img_80.png](old_note/COMP3500/week5/images/img_80.png)

- 전자 서명은 비밀키로 암호화 하는 방식
    - 메시지 송신자가 올바름을 증명
    - 비밀키를 가진 사람이 암호화했으니 권한이 있고, 자격이 증명된다는 논리
    - 공개기로 복호화됬다는 것은 이 공개키에 상응하는 비밀키로 암호화했다는 거고, 올바른 자격을 가진 사람이 암호화했음!
        - 암호화폐에서 이런 방법을 사용함
        - 전자서명, 로그인없이!

![img_81.png](old_note/COMP3500/week5/images/img_81.png)

![img_82.png](old_note/COMP3500/week5/images/img_82.png)

- 내 지갑(공개 키)
- 어머니 지갑(공개 키)
- 코인 수에대한 정보

- 이런 데이터를 내가 가진 비밀키로 암호화해 전자서명

![img_83.png](old_note/COMP3500/week5/images/img_83.png)

![img_84.png](old_note/COMP3500/week5/images/img_84.png)

- 블록체인 시스템에서 송신인의 지갑 주소(공개 키)를 이용해 복호화하고, 자격이 증명됬으니 송금처리 완료!
- 이더리움에서 로그인 없이 이런식으로 동작함!!

## 비대칭 키 암호화를 사용하는 곳

![img_85.png](old_note/COMP3500/week5/images/img_85.png)

- HTTPS
- 비밀 채팅 모드
    - 서버에서도 저장하지 않음
    - 서버에서도 비밀키를 저장하지 않아서 복호화할 방법이 없음
    - 서버는 암호만 저장
- Git 커밋 전자서명
    - GPG 키
    - 커밋을 할 때 비밀키로 전자서명하고 업로드
    - 깃허브에서 내 로그인 시스템에 저장된 공개키로 전자서명 검증
- 이메일 암호화
    - OpenPGP

## 비대칭 키 암호화 기법

![img_86.png](old_note/COMP3500/week5/images/img_86.png)

- RSA
- 많이 사용됨

## RSA와 큰 소수

![img_87.png](old_note/COMP3500/week5/images/img_87.png)

- RSA의 장점:
    - 공개 키/비밀 키 쌍을 만드는게 쉽다
- 간단한 방식

![img_88.png](old_note/COMP3500/week5/images/img_88.png)

- 소수의 특징을 활용함

![img_89.png](old_note/COMP3500/week5/images/img_89.png)

- 인수 분해 알고리듬은 없음
    - 사실상 brute force
- 곱셉을 1, 2, ... 루트 N 까지 해봐야함, 그 이후 수는 곱셈 쌍으로 나오니까

![img_90.png](old_note/COMP3500/week5/images/img_90.png)

- 200자리라면?
- 우주의 나이가 10^18 초 ㅋㅋ

![img_91.png](old_note/COMP3500/week5/images/img_91.png)

## RSA 키 길이와 연산 속도

![img_92.png](old_note/COMP3500/week5/images/img_92.png)

- 키의 길이가 길 수록 긴 자리의 소수를 사용해 시간이 오래걸린다고 생각
- 그래서 비트 수(길이)만 늘리면 보안 강화 가능

## RSA 키의 기초

![img_93.png](old_note/COMP3500/week5/images/img_93.png)

- 비밀 키, 공개 키가 슬라이드 내용과 완전히 동치는 아님
    - 하지만 그 내용을 기반으로 함
    - 그래서 "" 표시
- 공개 키를 인수분해 해서 비밀 키를 찾는 동작

![img_94.png](old_note/COMP3500/week5/images/img_94.png)

- 슬라이드와 같은 관계를 만족하는 값을 찾고
- 이 때문에 공개 키/비밀 키 쌍을 만드는게 쉬움

### 합동식(modular congruence)

![img_95.png](old_note/COMP3500/week5/images/img_95.png)

- 합동식은 좌우 동일한 연산을 했을 때 결과가 같음을 의미함
- a % n == b % n
- 결과적으로 a - b 는 n의 배수

![img_96.png](old_note/COMP3500/week5/images/img_96.png)

## RSA 키 생성

![img_97.png](old_note/COMP3500/week5/images/img_97.png)

### 1. 매우 큰 두 소수 p, q 찾기

![img_98.png](old_note/COMP3500/week5/images/img_98.png)

- 확률적 알고리듬은 몇 번 회차를 반복하면 이게 틀릴확률이 엄청 낮아지는 알고리듬
    - 소수가 아닐 확률이 매우 낮은 두 큰 수를 찾음

![img_99.png](old_note/COMP3500/week5/images/img_99.png)

- 예시는 매우 작은 소수 사용

### 2. p와 q를 곱해 n을 만든다

![img_100.png](old_note/COMP3500/week5/images/img_100.png)

- 곱하는 연산은 어렵지 않음

### 3. p,q와 특수한 관계인 e를 찾음

![img_101.png](old_note/COMP3500/week5/images/img_101.png)

- 람다함수는 카마이클 수를 의미함
- 누군가 증명을 해놨음
- 최소 공배수(p - 1 , q - 1) 로 치환할 수 있음

![img_102.png](old_note/COMP3500/week5/images/img_102.png)

![img_103.png](old_note/COMP3500/week5/images/img_103.png)

- 부등식을 만족하고 카마이클 수와 서로소인 e 찾기
- e의 값은 여러 개가 될 수 있는데 그 중 아무거나 뽑으면 됨

### 4. e와 특수한 관계인 d를 찾음

![img_104.png](old_note/COMP3500/week5/images/img_104.png)

- e 와 카마이클 수가 서로소기 때문에 반드시 d가 존재함
    - 증명된 사실

![img_105.png](old_note/COMP3500/week5/images/img_105.png)

![img_106.png](old_note/COMP3500/week5/images/img_106.png)

## RSA 암호화/복호화

### 암호화

![img_107.png](old_note/COMP3500/week5/images/img_107.png)

- 패딩 등의 방법은 복호화에서도 똑같이 적용
    - 공개된 방식임

![img_108.png](old_note/COMP3500/week5/images/img_108.png)

### 복호화

![img_109.png](old_note/COMP3500/week5/images/img_109.png)

![img_110.png](old_note/COMP3500/week5/images/img_110.png)

![img_111.png](old_note/COMP3500/week5/images/img_111.png)

## RSA 증명 by 정수론

![img_112.png](old_note/COMP3500/week5/images/img_112.png)

- c 는 % n 의 결과기 때문에 n 보다 작은 수
    - [0, n-1]
    - c % n == c 성립

![img_113.png](old_note/COMP3500/week5/images/img_113.png)

- 합동식의 성질로 d 거듭제곱 해도 성립함

![img_114.png](old_note/COMP3500/week5/images/img_114.png)

- 목표는 복호화 공식이 m을 출력함을 증명

![img_115.png](old_note/COMP3500/week5/images/img_115.png)

- 복호화 공식을 합동식으로!
- 암호화 하기 전 패딩 등을 통해서 m < n이 만족하게끔 되어있음
    - m == m % n

![img_116.png](old_note/COMP3500/week5/images/img_116.png)

- 합동식의 성질 이용

![img_117.png](old_note/COMP3500/week5/images/img_117.png)

- 증명할 관계식이 결정됨

![img_118.png](old_note/COMP3500/week5/images/img_118.png)

![img_119.png](old_note/COMP3500/week5/images/img_119.png)

![img_120.png](old_note/COMP3500/week5/images/img_120.png)

![img_121.png](old_note/COMP3500/week5/images/img_121.png)

![img_122.png](old_note/COMP3500/week5/images/img_122.png)

![img_123.png](old_note/COMP3500/week5/images/img_123.png)

- 관계식 이용해서 식 변형
- ed - 1은 lcm(p-1, q-1)의 배수

![img_124.png](old_note/COMP3500/week5/images/img_124.png)

- 최소 공배수의 성질을 이용

![img_125.png](old_note/COMP3500/week5/images/img_125.png)

- 중국인의 나머지 정리 활용
- 두 개의 식으로 나눠서 증명

![img_126.png](images/img_126.png)

![img_127.png](images/img_127.png)

- 첫번째 식 부터 증명
- 이 식도 두가지 케이스로 나눠서 증명
- 두 케이스 모두 참임을 증명

![img_128.png](images/img_128.png)

- 첫번째 식의 첫번째 케이스
- 합동식의 성질 + m이 p의 배수임을 활용

![img_129.png](images/img_129.png)

- 첫번째 식의 두번째 케이스

![img_130.png](images/img_130.png)

- 치환

![img_131.png](images/img_131.png)

![img_132.png](images/img_132.png)

- 페르마의 소정리

![img_133.png](images/img_133.png)

![img_134.png](images/img_134.png)

![img_135.png](images/img_135.png)

- ed - 1 = h(p - 1)
- 만족하게 뽑았기 때문

![img_136.png](images/img_136.png)

- 두번째 식의 첫번째 케이스

![img_137.png](images/img_137.png)

- 두번째 식의 두번째 케이스

![img_138.png](images/img_138.png)

![img_139.png](images/img_139.png)

## 증명에서 배울 것

![img_140.png](images/img_140.png)

- 소수의 힘
    - 정수론
- 비대칭 암호화는 굉장히 뭔가 연산을 많이해야함
    - 수도 매우 큰 소수를 사용

## 대칭 키 vs 비대칭 키 암호화의 속도

![img_141.png](images/img_141.png)

- 매우 큰 소수를 쓰기 때문에 long long 타입 이런걸로 안 됨 ㅋㅋ
- 성능 때문에 용도가 다름
    - 세션 동안 통신에는 성능이 좋은 대칭 키를 사용하고
    - 아직 세션에 참여하지 않았지만 세션 동안 사용할 유저들에게 전송할 때는 비대칭 키 암호화

## 코드보기: RSA

```java
package academy.pocu.comp3500samples.w05.rsa;

import javax.crypto.Cipher;
import java.nio.charset.StandardCharsets;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.util.Base64;

public class Program {
    public static void main(String[] args) {
        KeyPair keyPair = getKeyPair();

        PublicKey publicKey = keyPair.getPublic();
        PrivateKey privateKey = keyPair.getPrivate();

        System.out.println(publicKey.toString());
        System.out.println(privateKey.toString());

        String plaintext = "My love letter";

        String ciphertext = encrypt(plaintext, publicKey);

        System.out.println(ciphertext);

        String actualPlaintext = decrypt(ciphertext, privateKey);

        System.out.println(actualPlaintext);

        actualPlaintext = decryptWithPublicKey(ciphertext, publicKey);

        System.out.println(actualPlaintext);
    }

    private static KeyPair getKeyPair() {
        try {
            KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");

            generator.initialize(2048, new SecureRandom());
            KeyPair pair = generator.generateKeyPair();

            return pair;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    private static String encrypt(String plaintext, PublicKey publicKey) {
        try {
            Cipher cipher = Cipher.getInstance("RSA");
            cipher.init(Cipher.ENCRYPT_MODE, publicKey);

            byte[] bytes = plaintext.getBytes(StandardCharsets.UTF_8);

            byte[] ciphertext = cipher.doFinal(bytes);

            return Base64.getEncoder()
                    .encodeToString(ciphertext);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    private static String decrypt(String ciphertext, PrivateKey privateKey) {
        try {
            byte[] bytes = Base64.getDecoder()
                    .decode(ciphertext);

            Cipher cipher = Cipher.getInstance("RSA");
            cipher.init(Cipher.DECRYPT_MODE, privateKey);

            byte[] plaintext = cipher.doFinal(bytes);

            return new String(plaintext, StandardCharsets.UTF_8);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    private static String decryptWithPublicKey(String encryptedMessage, PublicKey publicKey) {
        try {
            byte[] bytes = Base64.getDecoder().decode(encryptedMessage);

            Cipher cipher = Cipher.getInstance("RSA");
            cipher.init(Cipher.DECRYPT_MODE, publicKey);

            byte[] plaintext = cipher.doFinal(bytes);

            return new String(plaintext, StandardCharsets.UTF_8);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
}
```

- API 잘 되어있음
- decryptWithPublicKey
    - 공개 키로 복호화 하는 메서드
    - 예외 발생!
      - 암호화와 복호화에 같은 키를 사용할 수 없기 때문
      - 내부적으로 같은 키 여부를 확인함!!
