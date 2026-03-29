"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavLinks } from "@/components/layout/nav-links"
import { siteConfig } from "@/lib/constants"

// 모바일 슬라이드 네비게이션 (Sheet 기반, 활성 링크 강조 포함)
export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="메뉴 열기">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left">{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        {/* 네비게이션 링크 (활성 링크 강조) */}
        <nav className="flex flex-col gap-1">
          <NavLinks variant="mobile" onNavigate={() => setOpen(false)} />
        </nav>
        <Separator className="my-4" />
        {/* 테마 토글 */}
        <div className="flex items-center gap-2 px-3">
          <span className="text-sm text-muted-foreground">테마</span>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
