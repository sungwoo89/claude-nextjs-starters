"use client"

import { useIntersectionObserver } from "usehooks-ts"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// useIntersectionObserver: 요소가 뷰포트에 진입/이탈할 때 감지
// 스크롤 애니메이션, 지연 로딩에 활용
function AnimatedCard({ title, delay }: { title: string; delay: string }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={cn(
        "rounded-lg border bg-card p-4 transition-all duration-500",
        isIntersecting
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      )}
    >
      <div className="flex items-center justify-between">
        <p className="font-medium">{title}</p>
        <Badge variant={isIntersecting ? "default" : "secondary"}>
          {isIntersecting ? "화면에 표시됨" : "숨겨짐"}
        </Badge>
      </div>
    </div>
  )
}

export function IntersectionExample() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        스크롤하여 카드가 뷰포트에 진입할 때 애니메이션이 적용됩니다.
      </p>
      {Array.from({ length: 4 }, (_, i) => (
        <AnimatedCard
          key={i}
          title={`스크롤 애니메이션 카드 ${i + 1}`}
          delay={`${i * 100}ms`}
        />
      ))}
    </div>
  )
}
