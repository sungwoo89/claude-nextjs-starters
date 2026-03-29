"use client"

import { useState, useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle } from "lucide-react"

// useMediaQuery: CSS 미디어 쿼리 결과를 React 상태로 추적
const QUERIES = [
  { label: "모바일 (max-width: 640px)", query: "(max-width: 640px)" },
  { label: "태블릿 이상 (min-width: 768px)", query: "(min-width: 768px)" },
  { label: "데스크톱 이상 (min-width: 1024px)", query: "(min-width: 1024px)" },
  { label: "다크 모드 선호", query: "(prefers-color-scheme: dark)" },
  { label: "모션 줄이기 선호", query: "(prefers-reduced-motion: reduce)" },
  { label: "포인터 장치 (마우스)", query: "(pointer: fine)" },
] as const

function QueryRow({ label, query }: { label: string; query: string }) {
  const [mounted, setMounted] = useState(false)
  const matches = useMediaQuery(query)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  // 마운트 전에는 항상 "불일치"로 서버와 동일하게 렌더링
  const isMatching = mounted && matches
  return (
    <div className="flex items-center justify-between rounded-md border px-3 py-2">
      <div>
        <p className="text-sm">{label}</p>
        <code className="text-xs text-muted-foreground">{query}</code>
      </div>
      {isMatching ? (
        <Badge className="gap-1">
          <CheckCircle2 className="size-3" /> 일치
        </Badge>
      ) : (
        <Badge variant="secondary" className="gap-1">
          <XCircle className="size-3" /> 불일치
        </Badge>
      )}
    </div>
  )
}

export function MediaQueryExample() {
  return (
    <div className="max-w-lg space-y-2">
      {QUERIES.map((q) => (
        <QueryRow key={q.query} label={q.label} query={q.query} />
      ))}
    </div>
  )
}
