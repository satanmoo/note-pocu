---
references:
  - https://winworldpc.com/product/macro-assembler/6x
  - https://docs.google.com/document/d/11rd1zTBbWTccohJhiX95u3CZy6BzVp3wIbeJqNhRRnw/edit?pli=1&tab=t.0
---
#  x86-16 개발환경 설정 방법

## 1. MASM 6.11 다운로드

[POCU에서 제한 MASM](https://github.com/POCU/MASM611) 다운로드
## 2. 소스 파일을 넣을 폴더 준비

.ASM 파일을 저장할 폴더를 준비
- 풀코스 과제 루트
## 3. DosBox-X 설치

### 3-1. DosBox-x 다운로드

```zsh
# 설치
brew install dosbox-x

# 실행
dosbox-x
```
### 3-2. DosBox-x 설정

처음으로 실행하면 preference 파일이 생성됨

> [!QUOTE] doxbox-x prefrence file (Mac OS X)
> 
> If you are using Mac OS X, a preferences file will be created for you on the first time you run DOSBox (as of version 0.73). This file contains the same system settings and initialization values as the **dosbox.conf** file on other systems.
> 
> It can be found (and modified) at **~/Library/Preferences/DOSBox 0.73 Preferences**, where ~/ is your [user profile folder](https://www.dosbox.com/wiki/User_profile_folder "User profile folder") (usually /Macintosh HD/Users/_username_/). The exact folder name in the [Finder](http://en.wikipedia.org/wiki/Finder_\(software\)) may vary, depending on the language you use for OS X.
> 
> https://www.dosbox.com/wiki/Dosbox.conf#Mac_OS_X

![[Pasted image 20260414021230.png]]
스크린샷의 `CONFIG: Created and loaded user config file...` 확인

생성된 preference 파일을 dosbox-x 워킹 디렉토리로 이동

```zsh
mv ~/Library/Preferences/DOSBox-X\ 2026.03.29\ Preferences <working-directory>
```

옮긴 파일의 이름을 `dosbox-x.conf`로 변경

> [!QUOTE] dosbox-x 설정 로드 동작
> 
> By default, DOSBox-X will first try to load the file **dosbox-x.conf** (or dosbox.conf) from the current directory, followed by the DOSBox-X program directory. You can specify an alternative directory (instead of the current directory) for DOSBox-X to look for the configuration file with the `-defaultdir` command-line option, such as `-defaultdir mydir`. If the config file is not found, DOSBox-X will then try to load the configuration file from the user directory according to the platform:
>... 
>
>https://dosbox-x.com/wiki/#Home#_dosbox_xs_configuration_file

![[Pasted image 20260414022628.png]]
스크린샷의 `CONFIG: Created and loaded user config file...` 확인
- 워킹 디렉토리의 dosbox-x.conf에서 읽어오는 것을 확인

`<working-directory>/dosbox.conf` 수정 (vim 의 `/`(forward search) 사용하면 편함)
-  `set path =`로 시작되는 줄을 찾아 제일 뒤에 다음 텍스트를 추가`;T:\MASM611\BIN`
- `[autoexec]` 섹션(제일 아래에 위치)를 찾아 다음과 같이 내 폴더를 에뮬레이터 속에 마운트한다. 
	- `MOUNT A "<.ASM 파일이 저장된 폴더의 경로>"`
	- `MOUNT T "<MASM611 git을 클론 받은 폴더의 경로>"`

## 코드 편집

내 데스크톱에서 .ASM 파일을 "Visual Studio Code" "masm 익스텐션"을 사용해 편집한다.

## 어셈블 및 실행

1. DosBox-X를 실행한다.
2. 소스 파일이 들어있는 드라이브(`A:`) 및 폴더로 이동한다.
	- `A:`
	- 드라이브로 이동하고 cd 명령어로 폴더 이동하면된다.
	- 마운트한 소스 코드 폴더로 이동하는 개념이다.
3. 다음 명령어를 통해 프로그램을 빌드한다.
	- `ML /W3 <SOURCE>.ASM`
	- `/W3`은 반드시 대문자로 해주어야 한다.
4. 어셈블 결과로 나온 .COM 이나 .EXE 파일을 실행한다.
	- dosbox 콘솔에서 파일명을 그대로 입력하면 파일이 실행된다.
	- 확장자 없이 이름만 입력해도 실행되고, 대소문자 구분이 없다.

## 디버깅 팁

1. 디버그 빌드를 따로 만든다.
	- `ML /W3 /Zi <SOURCE>.ASM`
	- `/Zi`를 넣으면 CodeView에서 심볼/소스 추적이 쉬워진다.
 2. .EXE는 CodeView, .COM은 DEBUG를 우선 사용한다.
	- EXE: `CV <SOURCE>.EXE`
	- COM: `DEBUG <SOURCE>.COM`
3. 시작 직후 레지스터를 먼저 확인한다.
	- Tiny 모델(.COM)에서는 보통 `CS == DS`를 기대한다.
	- 문자열/배열 주소는 항상 `DS:offset` 기준으로 본다.
4. `int 21h` 호출 직전에 상태를 점검한다.
	- 예: `AH=09h` 출력 시 `DS:DX`가 문자열 시작을 가리키는지 확인한다.
	- 문자열 끝에 `$`(24h)가 없으면 출력이 비정상적일 수 있다.
5. 메모리 덤프로 배열/문자열 패턴을 검증한다.
	- `DB 20 DUP(2)`는 `02`가 20개 연속으로 보여야 한다.
	- `DB 10 DUP(30h,20h)`는 `30 20 30 20 ...` 반복 패턴이 보여야 한다.
6. DOSBox-X 경로/마운트 문제를 먼저 배제한다.
	- `A:` 이동 후 `dir`로 현재 폴더의 소스/실행 파일을 확인한다.

- `ML`, `CV`, `DEBUG` 명령이 인식되는지 먼저 점검한다.

## DEBUG 명령어 정체와 도움말 확인

[위키](https://en.wikipedia.org/wiki/Debug_(command))

1. `DEBUG`는 MASM 명령어가 아니라 MS-DOS(또는 DOSBox-X 내 DOS 환경)의 디버거 유틸리티다.
	- 즉 `ML`/`LINK` 같은 어셈블러/링커와는 별개 도구다.
	- `.COM`/`.EXE`를 로드해 레지스터, 메모리, 디스어셈블 결과를 확인할 수 있다.
2. `DEBUG` 실행 후 `?`를 입력하면 help screen이 출력된다.
	- 예: `DEBUG MAIN.COM` 실행 후 `-` 프롬프트에서 `?` 입력
	- 화면에 `DOS Debug ... help screen`과 함께 `R`, `D`, `U`, `S`, `G` 등 사용 가능한 명령 목록이 나온다.
3. 도움말은 현재 DOSBox-X에 포함된 DEBUG 버전에 따라 표기가 조금 다를 수 있다.
	- 실제 문서는 위키/블로그보다 `?` 출력 결과를 우선 기준으로 사용한다.


## MASM 6.1 레퍼런스 다운로드

[여기](https://winworldpc.com/download/c3a9c281-7cc3-bcc2-a1c3-ac11c3a4c2ac)에서 PDF를 다운로드 받으면 된다.

"Programmers's Guide"를 참고하자.

## DOS INT 21h 레퍼런스 다운로드

[여기](https://web.archive.org/web/20240113235754/http://www2.ift.ulaval.ca/~marchand/ift17583/dosints.pdf)에서 PDF를 다운로드 받으면 된다.
[여기2](https://web.archive.org/web/20201020151502/https://0baeb308-a-62cb3a1a-s-sites.googlegroups.com/feeds/media/content/site/ee322mms/5099485914281118814)에서 PDF를 다운로드 받으면 된다.

