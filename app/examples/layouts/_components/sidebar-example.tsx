import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Home, FileText, Settings, Users, BarChart2 } from "lucide-react"

const navItems = [
  { icon: Home, label: "대시보드", active: true },
  { icon: FileText, label: "문서", active: false },
  { icon: Users, label: "사용자", active: false },
  { icon: BarChart2, label: "분석", active: false },
  { icon: Settings, label: "설정", active: false },
]

export function SidebarExample() {
  return (
    <div className="flex h-80 overflow-hidden rounded-lg border">
      {/* 사이드바 */}
      <aside className="hidden w-48 flex-col border-r bg-muted/30 p-3 sm:flex">
        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          메뉴
        </p>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors ${
                  item.active
                    ? "bg-background font-medium text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                }`}
              >
                <Icon className="size-4" />
                {item.label}
              </button>
            )
          })}
        </nav>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 overflow-auto p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">대시보드</h3>
          <Badge>사이드바 + 콘텐츠</Badge>
        </div>
        <Separator className="mb-4" />
        <p className="text-sm text-muted-foreground">
          사이드바 레이아웃 패턴입니다. 좌측에 내비게이션, 우측에 메인 콘텐츠가 배치됩니다.
          모바일에서는 사이드바가 숨겨집니다 (<code>hidden sm:flex</code>).
        </p>
      </main>
    </div>
  )
}
