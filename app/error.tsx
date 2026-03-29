"use client"

// Next.js 요구사항: error.tsx는 반드시 클라이언트 컴포넌트여야 함
import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

// 전역 에러 바운더리 페이지
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <Section>
      <div className="flex flex-col items-center gap-6 text-center">
        <AlertTriangle className="size-14 text-destructive" />
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">문제가 발생했습니다</h1>
          <p className="text-muted-foreground">
            {error.message || "알 수 없는 오류가 발생했습니다."}
          </p>
        </div>
        <div className="flex gap-3">
          {/* 현재 페이지 재시도 */}
          <Button onClick={reset}>다시 시도</Button>
          <Button variant="outline" asChild>
            <Link href="/">홈으로</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
