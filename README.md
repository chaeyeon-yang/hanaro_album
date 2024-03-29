# Hanaro Album

## React + Typescript + Vite

### 전역 상태 관리 
- Redux, Redux-persist, useReducer, useContext

### 구현 기능
- 로그인
  - 사용자 입력 값이 1~10 사이의 값인지 유효성 검사
  - 사용자가 값을 입력하지 않은 경우 예외처리
  - 사용자 정보 전역 상태관리
  - 로그인 시 헤더에 사용자 정보 표시
- 로그아웃
  - 로그아웃 버튼 클릭 시 로그아웃 후 로그인 페이지로 이동
  - 로그인 페이지로 이동 시 자동 로그아웃
- 앨범 목록
  - 로그인 유저의 모든 앨범 조회
  - 새로고침해도 앨범 목록 그대로 유지
  - 사용자가 선택한 앨범의 id 전역 상태 관리
  - 사용자가 선택한 앨범의 타이틀에 스타일링 (새로고침 시에도 유지)
  - 앨범을 선택하지 않은 채 상세보기를 클릭 한 경우 경고 메세지 출력
- 상세 화면
  - 선택한 앨범명 화면 상단 출력
  - 앨범의 썸네일 전체 조회
  - 새로 고침해도 화면에 표시된 정보 그대로 유지
  - 뒤로가기 버튼 클릭 시 앨범 목록 페이지로 이동
  
-- 페이지 권한
  - 로그인하지 않은 유저가 URL 직접 접근하는 경우를 막음

### 실행 화면

https://github.com/chaeyeon-yang/hanaro_album/assets/69382168/29122d41-2ce3-41ba-af28-195da0bd01d1






### 실행 방법
```
npm run dev
```
