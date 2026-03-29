import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const items = [
  { title: "항목 1", tag: "신규" },
  { title: "항목 2", tag: "인기" },
  { title: "항목 3", tag: "추천" },
  { title: "항목 4", tag: "신규" },
  { title: "항목 5", tag: "인기" },
  { title: "항목 6", tag: "추천" },
]

export function GridExample() {
  return (
    <div className="space-y-6">
      {/* 반응형 3열 그리드 */}
      <div>
        <p className="mb-3 text-sm text-muted-foreground">
          1열 (모바일) → 2열 (sm) → 3열 (lg)
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                  <Badge variant="secondary">{item.tag}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  반응형 그리드 카드 예시입니다.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
