import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroExample() {
  return (
    <div className="space-y-8">
      {/* 중앙 정렬 히어로 */}
      <div className="rounded-lg border bg-muted/30 px-6 py-12 text-center">
        <Badge variant="secondary" className="mb-4">
          <Sparkles className="mr-1 size-3" />
          신규 출시
        </Badge>
        <h2 className="mb-3 text-3xl font-bold tracking-tight">
          더 빠르게 개발을 시작하세요
        </h2>
        <p className="mb-6 text-muted-foreground">
          준비된 컴포넌트와 패턴으로 아이디어를 빠르게 구현하세요.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button>시작하기 <ArrowRight className="ml-1 size-4" /></Button>
          <Button variant="outline">더 알아보기</Button>
        </div>
      </div>

      {/* 좌측 정렬 히어로 */}
      <div className="rounded-lg border bg-gradient-to-r from-muted/50 to-transparent px-6 py-10">
        <Badge className="mb-3">베타</Badge>
        <h2 className="mb-2 text-2xl font-bold">좌측 정렬 히어로</h2>
        <p className="mb-5 max-w-md text-sm text-muted-foreground">
          텍스트와 CTA가 좌측에 배치되는 레이아웃입니다. 우측에 이미지나 데모를 배치할 수 있습니다.
        </p>
        <Button size="sm">
          무료로 시작 <ArrowRight className="ml-1 size-3" />
        </Button>
      </div>
    </div>
  )
}
