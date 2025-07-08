# React-ts-blog

리액트 + 타입스크립트 + Vite 기반으로 만든 블로그 미니 프로젝트입니다.  
CRUD를 중심으로 점진적으로 기능을 추가하고 있습니다.

---

## ✨ 주요 기능

- 글 목록 조회
- 글 작성 / 수정 / 삭제
- 상세 페이지 확인
- 라우팅 구성 (`react-router-dom`)
- SCSS 기반 스타일링
- 상태 관리 (`useState`, `useEffect` 기반)

---

## 🛠️ 기술 스택

| 분류      | 사용 기술                          |
|-----------|------------------------------------|
| Frontend | React, TypeScript, Vite            |
| Styling  | SCSS (모듈 방식 없이 전역으로 구성) |
| Routing  | React Router v6                    |
| State    | useState, useEffect                |
| 기타     | ESLint, Prettier (추가 예정)       |

---

## 📁 폴더 구조

```
src/
├── pages/
│ ├── list/
│ │ └── container/
│ ├── write/
│ │ └── container/
│ ├── detail/
│ │ └── container/
│ └── update/
│ └── container/
├── common/
│ └── WriteForm.tsx
├── styles/
│ ├── global.scss
│ ├── variables.scss
│ └── frontEnd.scss
├── App.tsx
└── main.tsx

```