"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { RefreshCw } from "lucide-react"

type Post = { id: number; title: string; body: string; userId: number }
type ApiResponse = { posts: Post[]; total: number; limit: number }

export function RouteHandlerExample() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch("/examples/data-fetching/api?limit=3")
      const json = await res.json()
      setData(json)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-sm space-y-4">
      <div className="flex items-center gap-3">
        <Button size="sm" onClick={fetchData} disabled={loading}>
          <RefreshCw className={`mr-1 size-3 ${loading ? "animate-spin" : ""}`} />
          GET /examples/data-fetching/api
        </Button>
        {data && (
          <Badge variant="secondary" className="text-xs">
            총 {data.total}개 중 {data.limit}개
          </Badge>
        )}
      </div>

      {loading && (
        <div className="space-y-2">
          {[1, 2, 3].map((i) => <Skeleton key={i} className="h-16 w-full" />)}
        </div>
      )}

      {data && !loading && (
        <div className="space-y-2">
          {data.posts.map((post) => (
            <Card key={post.id}>
              <CardContent className="px-3 py-2">
                <p className="text-sm font-medium">{post.title}</p>
                <p className="text-xs text-muted-foreground line-clamp-1">{post.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
