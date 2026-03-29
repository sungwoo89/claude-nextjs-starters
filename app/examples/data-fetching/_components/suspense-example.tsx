import { Suspense } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { delay, fetchPosts, fetchUsers } from "../_lib/mock-data"

// 느린 게시글 목록 (1.2초 추가 지연)
async function SlowPostList() {
  await delay(1200)
  const posts = await fetchPosts()
  return (
    <div className="space-y-2">
      {posts.map((post) => (
        <div key={post.id} className="rounded-md border p-3">
          <p className="text-sm font-medium">{post.title}</p>
        </div>
      ))}
    </div>
  )
}

// 빠른 사용자 목록 (0.4초 추가 지연)
async function FastUserList() {
  await delay(400)
  const users = await fetchUsers()
  return (
    <div className="space-y-2">
      {users.map((user) => (
        <div key={user.id} className="flex items-center justify-between rounded-md border p-2">
          <span className="text-sm">{user.name}</span>
          <Badge variant="secondary" className="text-xs">{user.role}</Badge>
        </div>
      ))}
    </div>
  )
}

// 스켈레톤 로딩 UI
function ListSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: rows }, (_, i) => (
        <Skeleton key={i} className="h-10 w-full rounded-md" />
      ))}
    </div>
  )
}

// 각 Suspense 경계가 독립적으로 스트리밍됨
export function SuspenseExample() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card>
        <CardContent className="pt-4">
          <p className="mb-3 text-sm font-medium">
            게시글 목록{" "}
            <Badge variant="outline" className="ml-1 text-xs">~1.2초 지연</Badge>
          </p>
          <Suspense fallback={<ListSkeleton rows={3} />}>
            <SlowPostList />
          </Suspense>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-4">
          <p className="mb-3 text-sm font-medium">
            사용자 목록{" "}
            <Badge variant="outline" className="ml-1 text-xs">~0.4초 지연</Badge>
          </p>
          <Suspense fallback={<ListSkeleton rows={4} />}>
            <FastUserList />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
