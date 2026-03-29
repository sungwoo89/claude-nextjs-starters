"use client"

import { useCountdown } from "usehooks-ts"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Square, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

// useCountdown: 카운트다운 타이머
export function CountdownExample() {
  const INITIAL = 60
  const [count, { startCountdown: start, stopCountdown: stop, resetCountdown: reset }] = useCountdown({
    countStart: INITIAL,
    intervalMs: 1000,
    isIncrement: false,
    countStop: 0,
  })

  const progress = (count / INITIAL) * 100
  const isRunning = count < INITIAL && count > 0

  return (
    <div className="max-w-xs space-y-4">
      {/* 원형 타이머 표시 */}
      <div className="flex justify-center">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-muted">
          <div
            className={cn(
              "absolute inset-0 rounded-full border-4 border-transparent transition-all",
              count === 0 ? "border-destructive" : "border-foreground"
            )}
            style={{
              background: `conic-gradient(currentColor ${progress}%, transparent ${progress}%)`,
              WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 4px), white 0)",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), white 0)",
            }}
          />
          <span className="text-4xl font-bold tabular-nums">{count}</span>
        </div>
      </div>

      {/* 상태 배지 */}
      <div className="text-center">
        <Badge
          variant={count === 0 ? "destructive" : isRunning ? "default" : "secondary"}
        >
          {count === 0 ? "종료됨" : isRunning ? "진행 중" : "대기"}
        </Badge>
      </div>

      {/* 컨트롤 버튼 */}
      <div className="flex gap-2">
        <Button onClick={start} disabled={isRunning || count === 0} className="flex-1">
          <Play className="size-4" />
          시작
        </Button>
        <Button variant="outline" onClick={stop} disabled={!isRunning} className="flex-1">
          <Square className="size-4" />
          정지
        </Button>
        <Button variant="ghost" size="icon" onClick={reset}>
          <RotateCcw className="size-4" />
        </Button>
      </div>
    </div>
  )
}
