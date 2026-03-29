import Link from "next/link"
import { Container } from "@/components/layout/container"
import { NavLinks } from "@/components/layout/nav-links"
import { UserMenu } from "@/components/user-menu"
import { MobileNav } from "@/components/layout/mobile-nav"
import { siteConfig } from "@/lib/constants"

// 반응형 헤더 — 데스크톱: 수평 네비 + 유저 메뉴, 모바일: 햄버거 메뉴
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
          >
            {siteConfig.name}
          </Link>

          {/* 데스크톱 네비게이션 (활성 링크 강조 포함) */}
          <nav className="hidden items-center gap-6 md:flex">
            <NavLinks variant="desktop" />
          </nav>

          {/* 우측 액션 */}
          <div className="flex items-center gap-2">
            {/* 데스크톱: 테마 전환이 포함된 유저 메뉴 */}
            <div className="hidden md:block">
              <UserMenu />
            </div>
            {/* 모바일 햄버거 메뉴 */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
