"use client"

import { useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

// useDebounceValue: 입력값 변경 후 지정된 시간이 지나야 값이 업데이트됨
// 검색, API 호출 최적화에 활용
export function DebounceExample() {
  const [inputValue, setInputValue] = useState("")
  const [debouncedValue] = useDebounceValue(inputValue, 400)

  return (
    <div className="max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="search-input">검색어 입력</Label>
        <Input
          id="search-input"
          placeholder="입력해 보세요..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className="rounded-md border p-3 space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">즉시 값 (입력 즉시)</span>
          <Badge variant="secondary" className="font-mono">
            {inputValue || "(비어있음)"}
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">디바운스 값 (400ms 후)</span>
          <Badge variant="outline" className="font-mono">
            {debouncedValue || "(비어있음)"}
          </Badge>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        입력을 멈춘 후 400ms가 지나야 디바운스 값이 업데이트됩니다.
        실제로는 이 값으로 API 검색 요청을 보냅니다.
      </p>
    </div>
  )
}
