"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Mail, Shield, Globe } from "lucide-react"

type Setting = {
  id: string
  icon: typeof Bell
  label: string
  description: string
  enabled: boolean
}

const INITIAL_SETTINGS: Setting[] = [
  { id: "email", icon: Mail, label: "이메일 알림", description: "새 댓글, 답글 등 이메일 수신", enabled: true },
  { id: "push", icon: Bell, label: "푸시 알림", description: "브라우저 푸시 알림 허용", enabled: false },
  { id: "security", icon: Shield, label: "보안 알림", description: "로그인, 비밀번호 변경 시 알림", enabled: true },
  { id: "marketing", icon: Globe, label: "마케팅 정보", description: "이벤트, 프로모션 정보 수신", enabled: false },
]

function ToggleSwitch({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={enabled}
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        enabled ? "bg-primary" : "bg-input"
      }`}
    >
      <span
        className={`block size-3.5 rounded-full bg-white shadow transition-transform ${
          enabled ? "translate-x-[18px]" : "translate-x-[2px]"
        }`}
      />
    </button>
  )
}

export function SettingsPanelExample() {
  const [settings, setSettings] = useState<Setting[]>(INITIAL_SETTINGS)

  const toggle = (id: string) => {
    setSettings((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    )
  }

  const enabledCount = settings.filter((s) => s.enabled).length

  const handleSave = () => {
    toast.success("설정이 저장되었습니다.")
  }

  return (
    <Card className="max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">알림 설정</CardTitle>
          <Badge variant="secondary" className="text-xs">{enabledCount}/{settings.length} 활성</Badge>
        </div>
        <CardDescription>알림 수신 방식을 설정합니다.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        {settings.map((setting, index) => {
          const Icon = setting.icon
          return (
            <div key={setting.id}>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-md bg-muted p-1.5">
                    <Icon className="size-3.5 text-muted-foreground" />
                  </div>
                  <div>
                    <Label htmlFor={`setting-${setting.id}`} className="cursor-pointer text-sm">
                      {setting.label}
                    </Label>
                    <p className="text-xs text-muted-foreground">{setting.description}</p>
                  </div>
                </div>
                <ToggleSwitch enabled={setting.enabled} onChange={() => toggle(setting.id)} />
              </div>
              {index < settings.length - 1 && <Separator />}
            </div>
          )
        })}
        <div className="pt-3">
          <Button className="w-full" size="sm" onClick={handleSave}>
            설정 저장
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
