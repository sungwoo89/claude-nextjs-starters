import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Separator } from "@/components/ui/separator"
import { navLinks, siteConfig } from "@/lib/constants"

// 사이트 푸터 — 3컬럼 그리드 + 저작권
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {/* 컬럼 1: 브랜드 */}
          <div className="space-y-3">
            <h3 className="font-semibold">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>

          {/* 컬럼 2: 네비게이션 */}
          <div className="space-y-3">
            <h3 className="font-semibold">페이지</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 컬럼 3: 기술 스택 */}
          <div className="space-y-3">
            <h3 className="font-semibold">기술 스택</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>Next.js 16</li>
              <li>TypeScript</li>
              <li>Tailwind CSS v4</li>
              <li>ShadcnUI</li>
            </ul>
          </div>
        </div>

        <Separator />

        {/* 저작권 */}
        <div className="py-6 text-center text-sm text-muted-foreground">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
