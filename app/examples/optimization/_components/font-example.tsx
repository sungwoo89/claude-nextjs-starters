import { CodeBlock } from "./code-block"
import { Badge } from "@/components/ui/badge"

const fontCode = `// app/layout.tsx — next/font/google 사용
import { Geist, Geist_Mono } from "next/font/google"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// <html>에 CSS 변수 적용
export default function Layout({ children }) {
  return (
    <html lang="ko" className={\`\${geist.variable} \${geistMono.variable}\`}>
      <body>{children}</body>
    </html>
  )
}`

const localFontCode = `// 로컬 폰트 사용 (next/font/local)
import localFont from "next/font/local"

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
})`

export function FontExample() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          "폰트 자체 호스팅 (개인정보 보호)",
          "Zero layout shift",
          "자동 서브셋",
          "CSS 변수로 Tailwind 연동",
        ].map((feature) => (
          <Badge key={feature} variant="secondary">✓ {feature}</Badge>
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Google Fonts (현재 적용됨)</h3>
        <CodeBlock code={fontCode} filename="app/layout.tsx" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">로컬 폰트 (Pretendard 등)</h3>
        <CodeBlock code={localFontCode} language="ts" />
      </div>

      <div className="rounded-lg border p-4 space-y-2">
        <p className="text-sm font-semibold">현재 적용된 폰트</p>
        <p className="text-sm" style={{ fontFamily: "var(--font-geist-sans)" }}>
          Geist Sans — 한글 문서, 본문 텍스트에 사용
        </p>
        <p className="text-sm font-mono" style={{ fontFamily: "var(--font-geist-mono)" }}>
          Geist Mono — 코드, 기술 용어에 사용
        </p>
      </div>
    </div>
  )
}
