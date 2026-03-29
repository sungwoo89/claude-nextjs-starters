"use client"

import { useState } from "react"
import { useEventListener, useMediaQuery } from "usehooks-ts"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// 스크롤 투 탑 버튼 — usehooks-ts 활용
// - useEventListener: window scroll 이벤트 감지
// - useMediaQuery: prefers-reduced-motion 접근성 대응
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")

  // 스크롤 이벤트 리스너 (400px 이상 스크롤 시 버튼 표시)
  useEventListener("scroll", () => {
    setIsVisible(window.scrollY > 400)
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="페이지 맨 위로 이동"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 shadow-md transition-all duration-300",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="size-4" />
    </Button>
  )
}
