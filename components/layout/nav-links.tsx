"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/constants"

interface NavLinksProps {
  // 렌더링 위치 (데스크톱 수평 / 모바일 세로)
  variant: "desktop" | "mobile"
  // 모바일에서 링크 클릭 시 Sheet 닫기용 콜백
  onNavigate?: () => void
}

// 활성 경로를 강조하는 네비게이션 링크 목록
export function NavLinks({ variant, onNavigate }: NavLinksProps) {
  const pathname = usePathname()

  return (
    <>
      {navLinks.map((link) => {
        // 홈("/")은 정확 일치, 나머지는 접두어 일치
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)

        if (variant === "desktop") {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                isActive ? "text-foreground font-semibold" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          )
        }

        // 모바일 변형
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
              isActive ? "bg-muted text-foreground" : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </>
  )
}
