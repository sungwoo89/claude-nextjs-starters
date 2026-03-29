"use client"

import { useRef } from "react"
import type React from "react"
import { useHover } from "usehooks-ts"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Bookmark } from "lucide-react"

// useHover: 요소의 마우스 호버 상태를 추적 (ref를 전달받아 boolean 반환)
const CARDS = [
  { icon: Heart, label: "좋아요", color: "text-red-500" },
  { icon: Star, label: "즐겨찾기", color: "text-yellow-500" },
  { icon: Bookmark, label: "저장", color: "text-blue-500" },
]

function HoverCard({
  icon: Icon,
  label,
  color,
}: {
  icon: typeof Heart
  label: string
  color: string
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<HTMLElement>(null) as any
  const isHovering = useHover(ref)

  return (
    <div
      ref={ref}
      className={cn(
        "flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-6 transition-all duration-200",
        isHovering ? "border-foreground bg-muted shadow-sm" : "bg-card"
      )}
    >
      <Icon
        className={cn(
          "size-8 transition-all duration-200",
          isHovering ? cn("scale-125", color) : "text-muted-foreground"
        )}
      />
      <span className="text-sm font-medium">{label}</span>
      <Badge variant={isHovering ? "default" : "secondary"} className="text-xs">
        {isHovering ? "호버됨" : "대기"}
      </Badge>
    </div>
  )
}

export function HoverExample() {
  return (
    <div className="flex flex-wrap gap-4">
      {CARDS.map((card) => (
        <HoverCard key={card.label} {...card} />
      ))}
    </div>
  )
}
