"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { CodeBlock } from "./code-block"

// SSR 비활성화로 클라이언트에서만 렌더링되는 컴포넌트 (동적 임포트)
const HeavyChart = dynamic(
  () => import("./heavy-chart-mock").then((mod) => ({ default: mod.HeavyChartMock })),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-32 w-full" />
      </div>
    ),
  }
)

const dynamicCode = `import dynamic from "next/dynamic"

// SSR 없이 클라이언트에서만 로드 (차트, 에디터 등)
const HeavyChart = dynamic(
  () => import("@/components/heavy-chart"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-32 w-full" />,
  }
)

// 조건부 로드
export function Page() {
  const [show, setShow] = useState(false)
  return show ? <HeavyChart /> : <Button onClick={() => setShow(true)}>로드</Button>
}`

export function DynamicImportExample() {
  const [showChart, setShowChart] = useState(false)

  return (
    <div className="space-y-6">
      <CodeBlock code={dynamicCode} language="tsx" />

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            onClick={() => setShowChart(true)}
            disabled={showChart}
          >
            동적 컴포넌트 로드
          </Button>
          {showChart && (
            <Badge className="text-xs">컴포넌트 로드됨</Badge>
          )}
        </div>

        {showChart && <HeavyChart />}
      </div>
    </div>
  )
}
