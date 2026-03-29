"use client"

import { useActionState } from "react"
import { addTodoAction, toggleTodoAction } from "../_actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Plus } from "lucide-react"

type Todo = { id: number; text: string; done: boolean }

const INITIAL_TODOS: Todo[] = [
  { id: 1, text: "컴포넌트 설계하기", done: true },
  { id: 2, text: "API 연동하기", done: false },
  { id: 3, text: "테스트 작성하기", done: false },
]

export function MutationExample() {
  const [state, formAction, isPending] = useActionState(addTodoAction, {
    success: false,
    message: "",
    todos: INITIAL_TODOS,
  })

  const todos = state.todos ?? INITIAL_TODOS

  return (
    <div className="max-w-sm space-y-4">
      <p className="text-sm text-muted-foreground">
        Server Action으로 서버에서 데이터를 수정하고 경로를 재검증합니다.
      </p>

      {/* 할 일 목록 */}
      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-3 rounded-md border px-3 py-2"
          >
            <button
              onClick={async () => {
                await toggleTodoAction(todo.id)
              }}
              className="shrink-0 text-muted-foreground hover:text-foreground"
            >
              {todo.done ? (
                <CheckCircle2 className="size-5 text-green-500" />
              ) : (
                <Circle className="size-5" />
              )}
            </button>
            <span className={`flex-1 text-sm ${todo.done ? "text-muted-foreground line-through" : ""}`}>
              {todo.text}
            </span>
            <Badge variant={todo.done ? "secondary" : "outline"} className="text-xs">
              {todo.done ? "완료" : "대기"}
            </Badge>
          </div>
        ))}
      </div>

      {/* 할 일 추가 폼 */}
      <form action={formAction} className="flex gap-2">
        <Input
          name="text"
          placeholder="새 할 일 입력..."
          className="flex-1"
          required
        />
        <Button type="submit" size="icon" disabled={isPending}>
          <Plus className="size-4" />
        </Button>
      </form>

      {/* 상태 메시지 */}
      {state.message && (
        <p className={`text-xs ${state.success ? "text-green-600 dark:text-green-400" : "text-destructive"}`}>
          {state.message}
        </p>
      )}
    </div>
  )
}
