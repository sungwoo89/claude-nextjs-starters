import { CodeBlock } from "./code-block"

const staticMetadataCode = `// app/page.tsx — 정적 메타데이터
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "홈 페이지",
  description: "스타터킷 홈 페이지입니다.",
  openGraph: {
    title: "홈 페이지",
    description: "스타터킷 홈 페이지입니다.",
    url: "https://example.com",
    siteName: "Starter Kit",
    locale: "ko_KR",
    type: "website",
  },
}`

const dynamicMetadataCode = `// app/posts/[id]/page.tsx — 동적 메타데이터
import type { Metadata } from "next"

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params  // ⚠️ Next.js 16: params는 Promise
  const post = await fetchPost(id)
  return {
    title: post.title,
    description: post.excerpt,
  }
}`

const robotsCode = `// app/robots.ts
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://example.com/sitemap.xml",
  }
}`

const sitemapCode = `// app/sitemap.ts
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://example.com", lastModified: new Date(), priority: 1 },
    { url: "https://example.com/about", lastModified: new Date(), priority: 0.8 },
  ]
}`

export function SeoExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">정적 메타데이터</h3>
        <CodeBlock code={staticMetadataCode} filename="app/page.tsx" />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">동적 메타데이터 (generateMetadata)</h3>
        <CodeBlock code={dynamicMetadataCode} filename="app/posts/[id]/page.tsx" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">robots.ts</h3>
          <CodeBlock code={robotsCode} filename="app/robots.ts" />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">sitemap.ts</h3>
          <CodeBlock code={sitemapCode} filename="app/sitemap.ts" />
        </div>
      </div>
    </div>
  )
}
