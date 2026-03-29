import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { MOCK_POSTS, delay } from "../_lib/mock-data"

const postSchema = z.object({
  title: z.string().min(1, "title은 필수입니다."),
  body: z.string().min(1, "body는 필수입니다."),
})

// GET /examples/data-fetching/api
// 게시글 목록 반환
export async function GET(request: NextRequest) {
  await delay(300)

  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get("limit") ?? "10")

  const posts = MOCK_POSTS.slice(0, limit)

  return NextResponse.json({
    posts,
    total: MOCK_POSTS.length,
    limit,
  })
}

// POST /examples/data-fetching/api
// 새 게시글 생성 (시뮬레이션)
export async function POST(request: NextRequest) {
  await delay(400)

  let rawBody: unknown
  try {
    rawBody = await request.json()
  } catch {
    return NextResponse.json(
      { error: "유효한 JSON 형식이 아닙니다." },
      { status: 400 }
    )
  }

  const result = postSchema.safeParse(rawBody)
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0].message },
      { status: 400 }
    )
  }

  const newPost = {
    id: MOCK_POSTS.length + 1,
    title: result.data.title,
    body: result.data.body,
    userId: 1,
  }

  return NextResponse.json(newPost, { status: 201 })
}
