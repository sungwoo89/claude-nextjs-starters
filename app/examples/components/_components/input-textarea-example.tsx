"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

// 글자 수 최대 제한
const MAX_MESSAGE = 200

// Input 변형 + Textarea 글자 수 카운터 데모
export function InputTextareaExample() {
  const [message, setMessage] = useState("")

  return (
    <div className="max-w-sm space-y-6">
      {/* 기본 Input 변형 */}
      <div className="space-y-3">
        <div className="space-y-2">
          <Label>기본 입력</Label>
          <Input placeholder="텍스트를 입력하세요" />
        </div>
        <div className="space-y-2">
          <Label>비밀번호</Label>
          <Input type="password" placeholder="비밀번호 입력" />
        </div>
        <div className="space-y-2">
          <Label>비활성화</Label>
          <Input placeholder="비활성화된 입력" disabled />
        </div>
        <div className="space-y-2">
          <Label>에러 상태</Label>
          <Input
            placeholder="잘못된 입력"
            aria-invalid
            className="border-destructive focus-visible:ring-destructive"
          />
          <p className="text-xs text-destructive">올바른 형식이 아닙니다.</p>
        </div>
      </div>

      {/* Textarea + 글자 수 카운터 */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="message">메시지 (글자 수 카운터)</Label>
          <span
            className={cn(
              "text-xs tabular-nums",
              message.length > MAX_MESSAGE * 0.9
                ? "text-destructive"
                : "text-muted-foreground"
            )}
          >
            {message.length} / {MAX_MESSAGE}
          </span>
        </div>
        <Textarea
          id="message"
          placeholder="메시지를 입력하세요..."
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE))}
          rows={4}
        />
      </div>
    </div>
  )
}
