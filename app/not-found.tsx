import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
}

// 404 Not Found 페이지
export default function NotFound() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-6 text-center">
        {/* 큰 404 숫자 */}
        <p className="text-8xl font-bold text-muted-foreground/40 md:text-9xl">404</p>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-muted-foreground">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
        </div>
        <Button asChild>
          <Link href="/">홈으로 돌아가기</Link>
        </Button>
      </div>
    </Section>
  )
}
