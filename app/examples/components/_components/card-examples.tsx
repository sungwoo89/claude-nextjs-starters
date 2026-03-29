import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

// Card 구성 예제
export function CardExamples() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* 기본 카드 */}
      <Card>
        <CardHeader>
          <CardTitle>기본 카드</CardTitle>
          <CardDescription>CardHeader, CardContent로 구성된 기본 카드입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            카드 본문 콘텐츠가 여기에 위치합니다.
          </p>
        </CardContent>
      </Card>

      {/* 액션 카드 */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>액션 카드</CardTitle>
            <Badge variant="secondary">신규</Badge>
          </div>
          <CardDescription>푸터에 액션 버튼이 있는 카드입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            카드에 다양한 콘텐츠와 액션을 포함할 수 있습니다.
          </p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button size="sm">확인</Button>
          <Button size="sm" variant="outline">취소</Button>
        </CardFooter>
      </Card>

      {/* 통계 카드 */}
      <Card>
        <CardHeader>
          <CardDescription>총 방문자</CardDescription>
          <CardTitle className="text-3xl font-bold">12,345</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
            <Star className="size-3.5" />
            <span>전월 대비 +12%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
