"use server"

import { revalidatePath } from "next/cache"
import { delay } from "./_lib/mock-data"

export type TodoActionState = {
  success: boolean
  message: string
  todos?: { id: number; text: string; done: boolean }[]
}

// ⚠️ 예제용 인메모리 상태입니다.
// 서버리스 환경(Vercel 등)에서는 인스턴스 간 공유되지 않으며, 서버 재시작 시 초기화됩니다.
// 실제 앱에서는 반드시 데이터베이스(Prisma, Drizzle 등)를 사용하세요.
let serverTodos = [
  { id: 1, text: "컴포넌트 설계하기", done: true },
  { id: 2, text: "API 연동하기", done: false },
  { id: 3, text: "테스트 작성하기", done: false },
]

// 할 일 추가 서버 액션
export async function addTodoAction(
  _prevState: TodoActionState,
  formData: FormData
): Promise<TodoActionState> {
  await delay(400)

  const text = formData.get("text")
  if (!text || typeof text !== "string" || text.trim().length < 2) {
    return { success: false, message: "할 일은 2자 이상 입력해 주세요.", todos: serverTodos }
  }

  const newTodo = {
    id: Date.now(),
    text: text.trim(),
    done: false,
  }
  serverTodos = [...serverTodos, newTodo]

  revalidatePath("/examples/data-fetching")

  return {
    success: true,
    message: "할 일이 추가되었습니다.",
    todos: serverTodos,
  }
}

// 할 일 완료 토글 서버 액션
export async function toggleTodoAction(id: number): Promise<{ todos: typeof serverTodos }> {
  await delay(200)
  serverTodos = serverTodos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  )
  revalidatePath("/examples/data-fetching")
  return { todos: serverTodos }
}

// 현재 할 일 목록 가져오기
export async function getTodosAction(): Promise<typeof serverTodos> {
  return serverTodos
}
