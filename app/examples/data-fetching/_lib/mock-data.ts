// 데이터 페칭 예제를 위한 모의 데이터 및 유틸리티

export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export type User = {
  id: number
  name: string
  email: string
  role: "admin" | "user" | "editor"
}

export type TodoItem = {
  id: number
  text: string
  done: boolean
}

// 모의 게시글 데이터
export const MOCK_POSTS: Post[] = [
  { id: 1, title: "Next.js 16 새로운 기능", body: "App Router와 Server Components의 최신 업데이트를 살펴봅니다.", userId: 1 },
  { id: 2, title: "React 19의 변화", body: "useActionState, useFormStatus 등 새로운 훅들을 소개합니다.", userId: 1 },
  { id: 3, title: "Tailwind CSS v4 가이드", body: "CSS 기반 설정으로 전환된 Tailwind v4의 주요 변경사항입니다.", userId: 2 },
]

// 모의 사용자 데이터
export const MOCK_USERS: User[] = [
  { id: 1, name: "ysw", email: "kim@example.com", role: "admin" },
  { id: 2, name: "이디자인", email: "lee@example.com", role: "editor" },
  { id: 3, name: "박프론트", email: "park@example.com", role: "user" },
  { id: 4, name: "최백엔드", email: "choi@example.com", role: "user" },
]

// 초기 할 일 목록
export const INITIAL_TODOS: TodoItem[] = [
  { id: 1, text: "컴포넌트 설계하기", done: true },
  { id: 2, text: "API 연동하기", done: false },
  { id: 3, text: "테스트 작성하기", done: false },
]

// 지연 유틸리티 (실제 API 호출 시뮬레이션)
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// 모의 서버 데이터 페칭 함수
export async function fetchPosts(): Promise<Post[]> {
  await delay(800) // 0.8초 지연
  return MOCK_POSTS
}

export async function fetchUsers(): Promise<User[]> {
  await delay(600) // 0.6초 지연
  return MOCK_USERS
}
