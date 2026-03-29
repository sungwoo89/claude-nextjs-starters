import { Skeleton } from "@/components/ui/skeleton"
import { Section } from "@/components/layout/section"

// 페이지 로딩 상태 - Skeleton으로 레이아웃 미리 표시
export default function Loading() {
  return (
    <Section>
      {/* PageHeader 스켈레톤 */}
      <div className="space-y-3 pb-8">
        <Skeleton className="h-9 w-56" />
        <Skeleton className="h-5 w-96 max-w-full" />
      </div>

      {/* 카드 그리드 스켈레톤 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border p-6 space-y-4">
            <Skeleton className="size-8 rounded-md" />
            <Skeleton className="h-5 w-32" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/5" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
