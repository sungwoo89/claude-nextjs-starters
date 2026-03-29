---
description: "Next.js 16 + 프로젝트 패턴 기준 코드 리뷰"
allowed-tools:
  [
    "Bash(git diff:*)",
    "Bash(git status:*)",
    "Bash(git log:*)",
    "Read",
    "Glob",
    "Grep",
  ]
---

# Claude 명령어: Review

현재 변경사항을 Next.js 16 + 이 프로젝트의 패턴 기준으로 리뷰합니다.

## 프로세스

1. `git diff`로 변경된 파일과 내용을 확인
2. 변경된 파일을 읽고 아래 체크리스트 기준으로 검토
3. `node_modules/next/dist/docs/`의 관련 가이드를 참조하여 Next.js 16 API 준수 여부 확인
4. 발견된 이슈를 심각도별로 정리하여 보고

## 체크리스트

### 서버/클라이언트 컴포넌트

- `"use client"` 페이지에서 `export const metadata` 사용 금지 → `layout.tsx`로 분리 필요
- 상태·훅·이벤트 핸들러 없이 `"use client"` 선언한 경우 → 불필요한 클라이언트 컴포넌트
- 서버 컴포넌트에서 `useState`, `useEffect`, `onClick` 등 사용 → `"use client"` 누락

### 하이드레이션

- `useWindowSize`, `useMediaQuery` 등 브라우저 API 의존 값에 `mounted` 체크 누락
- 올바른 패턴: `useState(false)` + `useEffect(() => setMounted(true), [])` → `mounted ? 실제값 : 기본값`

### 외부 이미지

- `next/image`에 외부 URL 사용 시 `next.config.ts`의 `remotePatterns`에 도메인 등록 여부 확인
- 현재 등록: `picsum.photos`, `avatar.vercel.sh`

### Next.js 16 API

- `node_modules/next/dist/docs/` 가이드를 참조하여 deprecated API 사용 여부 확인
- `next/image`, `next/link`, `next/font` 등의 최신 API 준수 여부

### 폼 패턴

- `react-hook-form` + `zodResolver` + `lib/validations/` 스키마 조합 준수
- Server Action 연동 시 `useActionState` 사용 여부

### 스타일링

- Tailwind CSS v4 문법 준수 (`@import "tailwindcss"` 방식)
- `cn()` 유틸리티(`lib/utils.ts`) 사용 여부 — 조건부 클래스 결합 시 필수

### 프로젝트 구조

- 새 페이지의 `navLinks`(`lib/constants.ts`) 등록 여부
- 예제 컴포넌트의 `_components/` 코로케이션 패턴 준수
- 레이아웃 컴포넌트(`Container`, `Section`, `PageHeader`) 재사용 여부

## 보고 형식

발견된 이슈를 심각도별로 분류하여 보고:

- 🔴 **오류**: 빌드 실패 또는 런타임 에러를 유발하는 문제
- 🟡 **경고**: 동작하지만 패턴 위반 또는 잠재적 버그
- 🟢 **제안**: 개선하면 좋을 사항

이슈가 없으면 "변경사항에 문제가 없습니다 ✅"로 보고합니다.
