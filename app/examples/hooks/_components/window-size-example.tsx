"use client"

import { useState, useEffect } from "react"
import { useWindowSize } from "usehooks-ts"
import { Badge } from "@/components/ui/badge"
import { Monitor, Tablet, Smartphone } from "lucide-react"

// useWindowSize: 현재 뷰포트 크기를 실시간으로 추적
export function WindowSizeExample() {
  const [mounted, setMounted] = useState(false)
  const { width = 0, height = 0 } = useWindowSize()

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  // 브레이크포인트 감지 (마운트 전에는 기본값 사용)
  const breakpoint = !mounted ? "xs" :
    width >= 1280 ? "xl" :
    width >= 1024 ? "lg" :
    width >= 768 ? "md" :
    width >= 640 ? "sm" : "xs"

  const DeviceIcon = !mounted ? Smartphone : width >= 1024 ? Monitor : width >= 768 ? Tablet : Smartphone

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <DeviceIcon className="size-8 text-muted-foreground" />
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tabular-nums">{mounted ? width : 0}</span>
            <span className="text-muted-foreground">×</span>
            <span className="text-2xl font-bold tabular-nums">{mounted ? height : 0}</span>
            <span className="text-sm text-muted-foreground">px</span>
          </div>
          <p className="text-sm text-muted-foreground">현재 뷰포트 크기</p>
        </div>
        <Badge variant="secondary" className="text-sm font-mono">
          {breakpoint}
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
        {[
          { bp: "xs", range: "< 640px" },
          { bp: "sm", range: "≥ 640px" },
          { bp: "md", range: "≥ 768px" },
          { bp: "lg", range: "≥ 1024px" },
          { bp: "xl", range: "≥ 1280px" },
        ].map(({ bp, range }) => (
          <Badge
            key={bp}
            variant={breakpoint === bp ? "default" : "outline"}
            className="font-mono"
          >
            {bp}: {range}
          </Badge>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        브라우저 창 크기를 조절해 보세요.
      </p>
    </div>
  )
}
