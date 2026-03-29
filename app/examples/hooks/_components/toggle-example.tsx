"use client"

import { useBoolean } from "usehooks-ts"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Bell, BellOff, Eye, EyeOff, Lock, Unlock } from "lucide-react"

// useBoolean: 토글 가능한 boolean 상태 관리
const PANELS = [
  {
    key: "notification",
    label: "알림",
    onIcon: Bell,
    offIcon: BellOff,
    onText: "켜짐",
    offText: "꺼짐",
  },
  {
    key: "visibility",
    label: "표시",
    onIcon: Eye,
    offIcon: EyeOff,
    onText: "공개",
    offText: "비공개",
  },
  {
    key: "lock",
    label: "잠금",
    onIcon: Unlock,
    offIcon: Lock,
    onText: "잠금 해제",
    offText: "잠금됨",
  },
]

function ToggleItem({
  label,
  onIcon: OnIcon,
  offIcon: OffIcon,
  onText,
  offText,
}: {
  label: string
  onIcon: typeof Bell
  offIcon: typeof Bell
  onText: string
  offText: string
}) {
  const { value, toggle } = useBoolean(false)
  const Icon = value ? OnIcon : OffIcon

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-lg border p-4 transition-colors",
        value ? "border-foreground/30 bg-muted/50" : "bg-card"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon
          className={cn(
            "size-5",
            value ? "text-foreground" : "text-muted-foreground"
          )}
        />
        <div>
          <p className="text-sm font-medium">{label}</p>
          <Badge variant={value ? "default" : "secondary"} className="text-xs">
            {value ? onText : offText}
          </Badge>
        </div>
      </div>
      <Button variant="ghost" size="sm" onClick={toggle}>
        {value ? "끄기" : "켜기"}
      </Button>
    </div>
  )
}

export function ToggleExample() {
  return (
    <div className="max-w-sm space-y-2">
      {PANELS.map((panel) => (
        <ToggleItem key={panel.key} label={panel.label} onIcon={panel.onIcon} offIcon={panel.offIcon} onText={panel.onText} offText={panel.offText} />
      ))}
    </div>
  )
}
