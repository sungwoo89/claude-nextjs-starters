import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchPosts } from "../_lib/mock-data"

// 서버 컴포넌트: async/await로 직접 데이터 페칭
// 클라이언트에 JS 번들이 전송되지 않음
export async function ServerFetch() {
  const posts = await fetchPosts()

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        이 컴포넌트는 서버에서 렌더링됩니다. 클라이언트에 JS 코드가 전송되지 않습니다.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-sm leading-snug">{post.title}</CardTitle>
                <Badge variant="outline" className="shrink-0 text-xs">
                  #{post.id}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{post.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
