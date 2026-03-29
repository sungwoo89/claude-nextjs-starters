import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Inbox, FileSearch, Users } from "lucide-react"

const emptyStates = [
  {
    icon: Inbox,
    title: "받은 편지함이 비어 있습니다",
    description: "새 메시지가 도착하면 여기에 표시됩니다.",
    action: "메시지 작성",
  },
  {
    icon: FileSearch,
    title: "검색 결과가 없습니다",
    description: "다른 검색어를 시도하거나 필터를 조정해 보세요.",
    action: "검색 초기화",
  },
  {
    icon: Users,
    title: "팀원이 없습니다",
    description: "팀원을 초대하여 함께 작업을 시작하세요.",
    action: "팀원 초대",
  },
]

export function EmptyStateExample() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {emptyStates.map((state) => {
        const Icon = state.icon
        return (
          <Card key={state.title} className="flex flex-col items-center p-8 text-center">
            <div className="mb-4 rounded-full bg-muted p-4">
              <Icon className="size-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 font-semibold">{state.title}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{state.description}</p>
            <Button variant="outline" size="sm">
              {state.action}
            </Button>
          </Card>
        )
      })}
    </div>
  )
}
