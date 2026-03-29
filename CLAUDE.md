# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ 중요: Next.js 버전 주의

이 프로젝트는 **Next.js 16** (React 19)을 사용합니다. 학습 데이터의 Next.js와 API, 컨벤션, 파일 구조가 다를 수 있습니다. 코드를 작성하기 전에 `node_modules/next/dist/docs/`의 관련 가이드를 반드시 확인하고, 데프리케이션 경고를 준수하세요.

## 개발 명령어

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 실행
```

## 아키텍처 개요

### 기술 스택

- **Next.js 16** App Router + **React 19**
- **Tailwind CSS v4** (CSS 기반 설정, `@import "tailwindcss"` 방식)
- **ShadcnUI v4** — Radix UI 기반 컴포넌트 (`radix-ui` 단일 패키지)
- **next-themes** — 라이트/다크/시스템 테마
- **react-hook-form** + **zod** + **@hookform/resolvers** — 폼 유효성 검사
- **sonner** — 토스트 알림
- **usehooks-ts** — 유틸리티 훅 모음
- **lucide-react** — 아이콘

### 레이아웃 구조

루트 레이아웃(`app/layout.tsx`)의 Provider 계층:

```
ThemeProvider (next-themes)
  └── TooltipProvider (Radix)
        ├── Header
        ├── <main>{children}</main>
        ├── Footer
        ├── ScrollToTop
        └── Toaster (sonner, richColors)
```

### 디렉토리 구조

```
app/
├── layout.tsx              # 루트 레이아웃
├── page.tsx                # 홈 페이지
├── error.tsx               # 글로벌 에러 바운더리 ("use client" 필수)
├── loading.tsx             # 글로벌 로딩 UI
├── not-found.tsx           # 404 페이지
├── robots.ts / sitemap.ts  # SEO 자동 생성
├── about/
├── contact/
│   ├── layout.tsx          # 메타데이터 분리 (page가 "use client"이므로)
│   └── page.tsx            # "use client" — react-hook-form 사용
└── examples/               # 7개 카테고리 예제
    ├── components/, forms/, layouts/, hooks/
    ├── data-fetching/, optimization/, patterns/
    └── 각 카테고리/_components/  # 예제 컴포넌트

components/
├── ui/                     # ShadcnUI 컴포넌트 (수정 최소화)
├── layout/                 # Header, Footer, Nav, MobileNav, Container, Section, PageHeader
├── theme-toggle.tsx
├── user-menu.tsx
├── confirm-dialog.tsx
└── scroll-to-top.tsx

lib/
├── constants.ts            # siteConfig, navLinks
├── utils.ts                # cn() 유틸리티
└── validations/contact.ts  # zod 스키마
```

### 핵심 패턴

**서버/클라이언트 컴포넌트 분리**
- 기본은 서버 컴포넌트. 상태·훅·이벤트가 필요한 경우에만 `"use client"` 추가
- `"use client"` 페이지에서 `metadata`를 export하면 Next.js 오류 발생 → 같은 경로에 `layout.tsx`를 만들어 메타데이터 분리 (예: `app/contact/layout.tsx`)

**브라우저 전용 API의 하이드레이션 처리**
- `useWindowSize`, `useMediaQuery` 등 브라우저 API에 의존하는 값은 SSR과 클라이언트 간 불일치가 발생
- `useState(false)` + `useEffect(() => setMounted(true), [])` 패턴으로 마운트 전 서버와 동일한 기본값 렌더링

```tsx
const [mounted, setMounted] = useState(false)
useEffect(() => { setMounted(true) }, [])
// 렌더링 시: mounted ? 실제값 : 기본값
```

**폼 패턴**
- `react-hook-form` + `zodResolver` + `lib/validations/` 스키마 사용
- 서버 액션 연동 시 React 19의 `useActionState` + Next.js Server Action 조합

**메타데이터**
- 루트 레이아웃에서 `title.template: "%s | Starter Kit"` 설정
- 각 페이지(서버 컴포넌트)에서 `export const metadata: Metadata = { title: "페이지명" }` 추가

**외부 이미지**
- `next/image`로 외부 URL 사용 시 `next.config.ts`의 `remotePatterns`에 도메인 등록 필요
- 현재 등록된 도메인: `picsum.photos`, `avatar.vercel.sh`

**네비게이션**
- `lib/constants.ts`의 `navLinks` 배열이 Header, Footer, MobileNav에서 공통으로 사용됨
- 사이트 이름·설명·URL은 `siteConfig`에서 관리
