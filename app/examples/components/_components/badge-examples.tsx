import { Badge } from "@/components/ui/badge"

// Badge 변형 쇼케이스
export function BadgeExamples() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">활용 예시</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="outline">v16.2.1</Badge>
          <Badge variant="destructive">Deprecated</Badge>
        </div>
      </div>
    </div>
  )
}
