# 벌마, 리액트 아이콘 쓰자!

## 새로 시도하고 있는 것(수정중)

1. 카카오톡 소셜 로그인
2. 사진 끌어다 놓기(완료)
3. 사진 업로드하면 미리보기 나오게 구현(완료)
4. 모달창 팝업
5. 로그인시 토큰 바디로 받기
6. 캐러셀 사용, 슬라이드 구현(완료)

### 뷰 구성

- 청운 : 메인 페이지, 마이페이지, 게시글 상세 페이지, 마이페이지 프로필 편집
- 영일 : 로그인+회원가입 페이지, 게시글 업로드, 모달 페이지 및 클릭 이벤트

### 기능 구현(수정중)

- 청운 : 검색기능, 카카오톡 소셜 로그인, 게시글 post, 댓글 post, 메인페이지 모달창 팝업, 로그인+회원가입+로그아웃, 댓글 CURD
- 영일 : 다중 이미지 업로드, 헤더 버튼 모달창 팝업, 게시글+대댓글 CRUD, 로그인 토큰 쿠키 저장

### 트러블슈팅

- 로그인을 했으나, 게시글 POST시 username과 boardId가 불러와지지 않아, cookie.get, cookie.set을 이벤트핸들러에 넣어 직접 빼서 사용

![image](https://user-images.githubusercontent.com/109018926/186480333-ea54cdbb-776f-4fd6-9fe1-8b2309ed5872.png)

- 사진 POST 후 미리보기시, 전체 사이즈에 사진이 올라가도록 구현

![image](https://user-images.githubusercontent.com/109018926/186585811-e7a46d23-34d2-42f5-a533-95b6347bab4d.png)

- 게시글 슬라이드 사용할 때, 이미지 사이즈 조정(기존 컨테이너보다 사이즈는 , <div>태그 달아줘야 한다..ㅠㅠ

![image](https://user-images.githubusercontent.com/109018926/186587074-bb355e55-b09f-4195-85f3-cebb376da240.png)

- 모달창 취소버튼 기존 useNavigate 방식 작동하지 않아, 모달창 false로 구현

![image](https://user-images.githubusercontent.com/109018926/186595663-b448762f-6c91-4996-8c5c-2a22c91fe9ec.png)



### API 설계 - 백엔드(spring) 협업

![image](https://user-images.githubusercontent.com/109018926/186645848-80f40452-f641-4f75-8a56-e348bf6d61cc.png)
![image](https://user-images.githubusercontent.com/109018926/186645892-3c1a569d-e0f7-4bec-a581-afff683501ca.png)
![image](https://user-images.githubusercontent.com/109018926/186645938-5667360b-18c3-4247-abd5-15c52cb01387.png)
![image](https://user-images.githubusercontent.com/109018926/186645988-e1293106-aa7d-439c-a7e0-79cfeed9b53a.png)

![image](https://user-images.githubusercontent.com/109018926/186646102-15c21be8-ce35-4777-ac30-ad53e2ef6ebc.png)
