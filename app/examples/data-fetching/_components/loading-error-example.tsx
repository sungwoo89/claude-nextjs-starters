"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, RefreshCw } from "lucide-react"

type FetchState = "idle" | "loading" | "success" | "error"

const MOCK_DATA = [
  { id: 1, name: "김개발", role: "Frontend" },
  { id: 2, name: "이디자인", role: "Designer" },
  { id: 3, name: "박백엔드", role: "Backend" },
]

export function LoadingErrorExample() {
  const [state, setState] = useState<FetchState>("idle")

  const simulateFetch = (shouldFail = false) => {
    setState("loading")
    setTimeout(() => {
      setState(shouldFail ? "error" : "success")
    }, 1200)
  }

  return (
    <div className="max-w-sm space-y-4">
      <div className="flex gap-2">
        <Button size="sm" onClick={() => simulateFetch(false)} disabled={state === "loading"}>
          <RefreshCw className={`mr-1 size-3 ${state === "loading" ? "animate-spin" : ""}`} />
          데이터 로딩
        </Button>
        <Button size="sm" variant="destructive" onClick={() => simulateFetch(true)} disabled={state === "loading"}>
          에러 시뮬레이션
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm">팀원 목록</CardTitle>
            <Badge
              variant={
                state === "success" ? "default" :
                state === "error" ? "destructive" :
                state === "loading" ? "secondary" : "outline"
              }
              className="text-xs"
            >
              {state === "idle" ? "대기" :
               state === "loading" ? "로딩 중..." :
               state === "success" ? "완료" : "에러"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {/* 로딩 상태: 스켈레톤 */}
          {state === "loading" && (
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="size-8 rounded-full" />
                  <div className="flex-1 space-y-1">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 성공 상태: 데이터 표시 */}
          {state === "success" && (
            <div className="space-y-2">
              {MOCK_DATA.map((member) => (
                <div key={member.id} className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
                    {member.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 에러 상태 */}
          {state === "error" && (
            <div className="flex flex-col items-center gap-2 py-4 text-center">
              <AlertTriangle className="size-8 text-destructive" />
              <p className="text-sm font-medium">데이터를 불러오지 못했습니다</p>
              <p className="text-xs text-muted-foreground">네트워크 연결을 확인해 주세요.</p>
              <Button size="sm" variant="outline" onClick={() => simulateFetch(false)}>
                다시 시도
              </Button>
            </div>
          )}

          {/* 초기 상태 */}
          {state === "idle" && (
            <p className="py-4 text-center text-sm text-muted-foreground">
              위 버튼을 클릭하여 데이터를 로드하세요.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
