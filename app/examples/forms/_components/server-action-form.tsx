"use client"

import { useActionState } from "react"
import { submitContactAction } from "../_actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"

// useActionState를 활용한 서버 액션 폼
// React 19의 내장 훅으로 Server Action의 pending/state 관리
export function ServerActionForm() {
  const [state, formAction, isPending] = useActionState(submitContactAction, {
    success: false,
    message: "",
  })

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>서버 액션 폼</CardTitle>
        <CardDescription>
          React 19 useActionState + Next.js Server Action 패턴
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="sa-name">이름</Label>
            <Input id="sa-name" name="name" placeholder="홍길동" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sa-email">이메일</Label>
            <Input id="sa-email" name="email" type="email" placeholder="example@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sa-message">메시지</Label>
            <Textarea id="sa-message" name="message" placeholder="10자 이상 입력해 주세요" rows={3} required />
          </div>

          {/* 상태 메시지 표시 */}
          {state.message && (
            <div
              className={`flex items-center gap-2 rounded-md p-3 text-sm ${
                state.success
                  ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                  : "bg-destructive/10 text-destructive"
              }`}
            >
              {state.success ? (
                <CheckCircle className="size-4 shrink-0" />
              ) : (
                <AlertCircle className="size-4 shrink-0" />
              )}
              {state.message}
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "전송 중..." : "문의 전송"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
