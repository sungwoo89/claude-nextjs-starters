"use client"

import { useCounter } from "usehooks-ts"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus, RotateCcw } from "lucide-react"

// useCounter: 증가/감소/리셋이 있는 카운터
export function CounterExample() {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    <div className="max-w-xs space-y-4">
      {/* 카운터 표시 */}
      <div className="flex items-center justify-center rounded-lg border bg-muted/50 py-6">
        <span className="text-5xl font-bold tabular-nums">{count}</span>
      </div>

      {/* 컨트롤 버튼 */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={decrement}
          disabled={count <= 0}
          className="flex-1"
        >
          <Minus className="size-4" />
          감소
        </Button>
        <Button
          variant="outline"
          onClick={increment}
          disabled={count >= 10}
          className="flex-1"
        >
          <Plus className="size-4" />
          증가
        </Button>
        <Button variant="ghost" size="icon" onClick={reset}>
          <RotateCcw className="size-4" />
        </Button>
      </div>

      {/* 범위 표시 */}
      <div className="flex justify-between text-xs text-muted-foreground">
        <Badge variant="outline">최소: 0</Badge>
        <Badge variant="outline">최대: 10</Badge>
      </div>
    </div>
  )
}
