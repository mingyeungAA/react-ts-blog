# React-ts-blog

리액트 + 타입스크립트 + Vite + Tailwind 기반으로 만든 블로그 미니 프로젝트입니다.  
CRUD를 중심으로 점진적으로 기능을 추가하고 있습니다.

---

## ✨ 주요 기능

- 글 목록 조회
- 글 작성 / 수정 / 삭제
- 상세 페이지 이동
- 라우팅 구성 (`react-router-dom`)
- 스타일링 (`tailwindcss`)
- 상태 관리 (React Hook 기반)

---

## 🛠️ 기술 스택

| 분류      | 사용 기술                            |
|-----------|--------------------------------------|
| Frontend | React, TypeScript, Vite              |
| Styling  | Tailwind CSS                         |
| Routing  | React Router v6                      |
| State    | useState, useEffect (Zustand 예정)   |
| 기타     | ESLint, Prettier (예정)              |

---

## 📁 폴더 구조

```
src/
├── pages/
│   ├── list/
│   ├── write/
│   ├── detail/
│   └── update/
├── App.tsx
└── main.tsx
```