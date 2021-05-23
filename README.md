# 케이크 쇼핑몰 CakeShop🍰

**자사 쇼핑몰 플랫폼 하이브리드 앱 개발 개인 프로젝트**
**React와 Ruby On Rails로 구현한 케이크샵 쇼핑몰**


### Reference

> 이 프로젝트는 인썸니아에서 학습목적으로 만들었습니다. 실무 수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.

</br>

## 프로젝트 기간

2021.04.05 ~ 2021.04.29

</br>

## 기술 스택

**Front-end**
`HTML5`, `CSS3`, `JavaScript(ES6+)`, `React`, `React Hooks`

**Back-end**
`Ruby On Rails`, `PostgreSQL`

- `Framework7`와 `Tailwind CSS` 이용한 신속한 UI 구현
- `Formik & Yup`을 활용한 주문 form 및 유효성 검사 기능
- `Recoil`을 적용하여 주문 정보 전역 상태 관리

</br>

## 구현 기능

### 로그인 & 회원가입
- Local Storage의 access token을 이용한 로그인

![](https://images.velog.io/images/sodait/post/cfb80e20-f92b-4f16-90fd-a98b3e7735d6/login.gif)
![](https://images.velog.io/images/sodait/post/5ea4e4bc-9719-42bf-8d25-02d6dbd08f95/image.png)


</br>

### 주문하기
- 로그인 & 회원가입과 마찬가지로 `Formik`과 `Yup` 라이브러리 사용하여 주문 form 구현 및 각각의 정보 유효성 검사
- 필수 입력 사항(이름, 연락처, 주소) 모두 입력 시, 결제하기 버튼 활성화

![](https://images.velog.io/images/sodait/post/da78fbb0-bea2-4be5-80d7-17a4268aeccc/order_yup.jpg)

- 결제하기 버튼 클릭 시, submit이 실행되며 입력받은 order 데이터 백엔드로 전송 및 저장

![](https://images.velog.io/images/sodait/post/e200abc6-5663-467c-a919-603f4e095ae9/image.png)

</br>

### 메뉴 탭 & 상품 리스트
![](https://images.velog.io/images/sodait/post/c67f7b0f-305b-421d-b03a-d30eef0174d3/product_list.gif)

#### Panel
- 햄버거 모양의 메뉴탭이 왼쪽 상단에 위치
- `Framework7` 라이브러리 사용하여 카테고리 메뉴 등 UI 구현

#### 상품 리스트
- 상품리스트 페이지 로드되었을 때, 서버에서 item 불러와짐
![](https://images.velog.io/images/sodait/post/3cf7e2e9-a3b5-4818-8a45-15dc66789cb1/image.png)

</br>

### 상세페이지

![](https://images.velog.io/images/sodait/post/4a781a4a-1c75-4e34-8673-de665d117b80/product_detail.gif)

- 상세페이지 클릭 시, 각 items id별 상세페이지 확인
![](https://images.velog.io/images/sodait/post/34749367-25a1-4003-b325-f584691c74aa/image.png)







