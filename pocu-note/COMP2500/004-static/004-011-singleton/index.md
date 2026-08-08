---
title: 싱글턴 패턴
tags:
  - COMP2500
  - week4
aliases:
  - 싱글턴 패턴
---
# 싱글턴 패턴

## 싱글턴 패턴

![singleton-1.png](pocu-note/COMP2500/004-static/004-011-singleton/images/singleton-1.png)

static, global과 유사한 개념

![singleton-2.png](pocu-note/COMP2500/004-static/004-011-singleton/images/singleton-2.png)
![singleton-3.png](pocu-note/COMP2500/004-static/004-011-singleton/images/singleton-3.png)
![singleton-4.png](pocu-note/COMP2500/004-static/004-011-singleton/images/singleton-4.png)

정적 멤버 변수 `instance`는 클래스 로딩될 때 null로 초기화
- 정적 멤버 변수라서 비정적 멤버 변수와 다르게 클래스 로딩 시 초기화됨
	- 비정적 멤버 변수는 개체 생성 시 초기화
