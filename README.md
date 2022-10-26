# 개인프로젝트

## 프로젝트 설명

- 기본적인 로그인 및 회원가입 폼을 제작
- 로그인시 유효성검사 및 약관동의 체크박스 및 회원가입 유효성검사 진행

<br/>
<br/>

## 프로젝트 기한
2022.10.24 - 2022.10.26 (2일)
<br/>
<br/>

## 언어

- JavaScript
- React.js
- Vite
- Styled Component

<br/>
<br/>

## 라이브러리

- react-icons
- react-bootstrap
- react-reset

<br/>
<br/>

# 프로젝트 설치 및 실행 방법

1. Node.JS를 다운받아 설치해주세요. vite를 사용하였기 때문에 최소 14.18 버전 이상이 요구됩니다.

```
https://nodejs.org/
```

<br/><br/>

2. 리포지토리를 클론해주세요.<br/>

```
git clone https://github.com/tmdcjf152/naver-login.git
```

<br/><br/>

3. dependencies를 설치해주세요.

```
npm install
```

<br/><br/>

# 실행방법

1. 다음 명령어를 이용해 Dev server를 실행시켜주세요.

```
npm run dev
```

<br/><br/>

2. 브라우저에서 [배포주소](https://tmdcjf152.github.io/naver-login/)로 접속해주시면 됩니다.

<br/><br/>

# 주요기능

### 1. 아이디/비밀번호 를 작성하지 않았을때 Error메세지를 보여줍니다.

<br/>

<img src='https://velog.velcdn.com/images/tmdcjf152/post/3484a4c4-3c65-4a86-a58b-bcb2fccc8c40/image.gif' width=40%/>

---

<br/><br/>

### 1. UI에서 탭을 클릭헸을경우 보여지는 화면이 변합니다.

### 2. QR코드 클릭시 3분의 제한시간이 작동합니다.

### 3. 3분의 제한시간이 지나면 시간초과알림을 띄웁니다.

<br/>

<img src='https://velog.velcdn.com/images/tmdcjf152/post/e8209513-76b5-4d42-8a06-ca096d53a2fc/image.gif' width=40%/>

---

<br/><br/>

### 1. 약관동의 전체동의 클릭시 모든 체크박스가 선택됩니다.

### 2. 전체동의 후 1개의 체크박스라도 체크해제가 되면 전체동의 체크도 해제됩니다.

### 3. 필수동의를 하지않으면 버튼활성화가 되지 않게 유효성검사를 진행합니다.

<br/>

<img src='https://velog.velcdn.com/images/tmdcjf152/post/8efd27b1-7103-46ea-99e6-757e25d0d30b/image.gif' width=40%/>

---

<br/><br/>

### 1. 정규식 표현식을 사용하여 아이디 유효성검사를 진행합니다.(영문자+숫자 조합)

### 2. 정규식 표현식을 사용하여 비밀번호 유효성검사를 진행합니다. (대문자+소문자+숫자+특수문자 를 포함한 8자이상)

### 3. 정규식 표현식을 사용하여 핸드폰번호 유효성검사를 진행합니다. (010/011/016/017/018/019 를 포함한 10-11자리 핸드폰번호)

### 4. 이름/생년월일/성별/인증번호/비밀번호 재확인에 유효성검사를 진행하고 조건에 부합하지않으면 에러메세지를 출력합니다.

<br/>

<img src='https://velog.velcdn.com/images/tmdcjf152/post/24a7ffb8-b7a4-4b62-8b90-2dd8b1f35bc1/image.gif' width=40%/>

---
