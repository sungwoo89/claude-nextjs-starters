# Next.js 스타터킷

Next.js 16 + React 19 기반의 모던 웹 개발 스타터킷입니다. 반복적인 초기 설정 없이 바로 핵심 기능 개발에 집중할 수 있도록 검증된 기술 스택과 실무 패턴을 제공합니다.

## 기술 스택

| 분류 | 라이브러리 |
|------|-----------|
| 프레임워크 | Next.js 16, React 19 |
| 스타일링 | Tailwind CSS v4, ShadcnUI v4 |
| 폼 처리 | react-hook-form, zod, @hookform/resolvers |
| 유틸리티 | usehooks-ts, sonner, next-themes, lucide-react |

## 포함된 기능

- **레이아웃** — 헤더, 푸터, 모바일 내비게이션, 스크롤 투 탑 버튼
- **다크 모드** — next-themes 기반 라이트 / 다크 / 시스템 테마
- **폼 유효성 검사** — react-hook-form + zod 연동 예제
- **토스트 알림** — sonner 기반 다양한 알림 패턴
- **SEO** — metadata API, robots.txt, sitemap.xml 자동 생성
- **공통 페이지** — 404, 에러 바운더리, 로딩 스켈레톤
- **예제 모음** — 컴포넌트, 폼, 레이아웃, 훅, 데이터 페칭, 최적화, UI 패턴 (7개 카테고리)

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 결과를 확인하세요.

## 주요 명령어

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```
