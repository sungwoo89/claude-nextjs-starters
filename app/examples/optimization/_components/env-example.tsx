import { CodeBlock } from "./code-block"
import { Badge } from "@/components/ui/badge"

const envFileCode = `# .env.local (로컬 개발, git 제외)
DATABASE_URL=postgresql://localhost:5432/mydb
AUTH_SECRET=your-secret-key-here

# NEXT_PUBLIC_ 접두사: 클라이언트에도 노출됨
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

const envUsageCode = `// 서버 컴포넌트 / API Route / Server Action에서 사용
const dbUrl = process.env.DATABASE_URL  // 서버 전용

// 클라이언트 컴포넌트에서 사용 (NEXT_PUBLIC_ 필수)
const apiUrl = process.env.NEXT_PUBLIC_API_URL

// 타입 안전성을 위한 환경 변수 검증 (zod 활용)
import { z } from "zod"

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  AUTH_SECRET: z.string().min(32),
  NEXT_PUBLIC_API_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)`

const envFilesCode = `# 우선순위 (높음 → 낮음)
.env.local          # 로컬 환경 (git 제외, 최우선)
.env.development    # 개발 환경 (npm run dev)
.env.production     # 프로덕션 환경 (npm run build)
.env                # 모든 환경 (기본값)`

export function EnvExample() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Badge variant="destructive">DATABASE_URL — 서버 전용</Badge>
        <Badge variant="secondary">NEXT_PUBLIC_API_URL — 클라이언트 노출</Badge>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">.env 파일 예시</h3>
        <CodeBlock code={envFileCode} filename=".env.local" language="bash" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">환경 변수 사용 + zod 검증</h3>
        <CodeBlock code={envUsageCode} language="ts" filename="lib/env.ts" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">파일 우선순위</h3>
        <CodeBlock code={envFilesCode} language="bash" />
      </div>
    </div>
  )
}
