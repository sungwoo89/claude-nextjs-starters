import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { ExampleSectionList } from "@/components/layout/example-section-list"
import { ServerFetch } from "./_components/server-fetch"
import { SuspenseExample } from "./_components/suspense-example"
import { MutationExample } from "./_components/mutation-example"
import { LoadingErrorExample } from "./_components/loading-error-example"
import { RouteHandlerExample } from "./_components/route-handler-example"

export const metadata: Metadata = {
  title: "데이터 페칭",
  description: "Next.js 16 데이터 처리 패턴 예제입니다.",
}

const sections = [
  {
    id: "server-fetch",
    title: "서버 컴포넌트 페칭",
    description: "async 서버 컴포넌트에서 직접 데이터 페칭 — 클라이언트 JS 없음",
    component: <ServerFetch />,
  },
  {
    id: "suspense",
    title: "Suspense 스트리밍",
    description: "독립적인 Suspense 경계로 점진적 UI 로딩 — 빠른 콘텐츠가 먼저 표시됨",
    component: <SuspenseExample />,
  },
  {
    id: "route-handler",
    title: "Route Handler (API 엔드포인트)",
    description: "GET /examples/data-fetching/api — Next.js App Router API 라우트",
    component: <RouteHandlerExample />,
  },
  {
    id: "mutation",
    title: "Server Action 뮤테이션",
    description: "useActionState + Server Action으로 서버 데이터 수정 및 경로 재검증",
    component: <MutationExample />,
  },
  {
    id: "loading-error",
    title: "로딩 및 에러 상태",
    description: "Skeleton 로딩, 에러 UI, 재시도 패턴",
    component: <LoadingErrorExample />,
  },
]

export default function DataFetchingPage() {
  return (
    <Section>
      <PageHeader
        title="데이터 페칭"
        description="Next.js 16의 서버 컴포넌트, Suspense, Server Action, Route Handler 패턴 예제입니다."
      />
      <ExampleSectionList sections={sections} />
    </Section>
  )
}
