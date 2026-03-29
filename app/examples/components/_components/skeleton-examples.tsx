import { Skeleton } from "@/components/ui/skeleton"

// Skeleton 로딩 상태 예제
export function SkeletonExamples() {
  return (
    <div className="space-y-6">
      {/* 텍스트 라인 */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">텍스트 로딩</p>
        <div className="space-y-2">
          <Skeleton className="h-5 w-64" />
          <Skeleton className="h-4 w-96 max-w-full" />
          <Skeleton className="h-4 w-80 max-w-full" />
        </div>
      </div>

      {/* 프로필 카드 */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">프로필 로딩</p>
        <div className="flex items-center gap-4">
          <Skeleton className="size-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      </div>

      {/* 카드 그리드 */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">카드 로딩</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-border p-4 space-y-3">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
