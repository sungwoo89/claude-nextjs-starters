import { Button } from "@/components/ui/button"
import { Plus, Download } from "lucide-react"

// Button 변형 및 사이즈 쇼케이스
export function ButtonExamples() {
  return (
    <div className="space-y-6">
      {/* 변형 */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">변형 (Variants)</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* 사이즈 */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">사이즈 (Sizes)</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="lg">Large</Button>
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
          <Button size="xs">XSmall</Button>
        </div>
      </div>

      {/* 아이콘 */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">아이콘 (Icons)</p>
        <div className="flex flex-wrap gap-2">
          <Button>
            <Plus />
            새로 만들기
          </Button>
          <Button variant="outline">
            <Download />
            다운로드
          </Button>
          <Button size="icon" variant="outline">
            <Plus />
          </Button>
        </div>
      </div>

      {/* 상태 */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">상태 (States)</p>
        <div className="flex flex-wrap gap-2">
          <Button disabled>비활성화</Button>
          <Button variant="outline" disabled>비활성화 Outline</Button>
        </div>
      </div>
    </div>
  )
}
