import { NextRequest, NextResponse } from "next/server"
import { MOCK_POSTS, delay } from "../_lib/mock-data"

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

  const body = await request.json()

  if (!body.title || !body.body) {
    return NextResponse.json(
      { error: "title과 body 필드가 필요합니다." },
      { status: 400 }
    )
  }

  const newPost = {
    id: MOCK_POSTS.length + 1,
    title: body.title,
    body: body.body,
    userId: 1,
  }

  return NextResponse.json(newPost, { status: 201 })
}
