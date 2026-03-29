import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, ShoppingCart, DollarSign } from "lucide-react"

const stats = [
  {
    title: "총 사용자",
    value: "12,345",
    change: "+12%",
    positive: true,
    icon: Users,
  },
  {
    title: "월 매출",
    value: "₩4,250,000",
    change: "+8.2%",
    positive: true,
    icon: DollarSign,
  },
  {
    title: "신규 주문",
    value: "573",
    change: "-3%",
    positive: false,
    icon: ShoppingCart,
  },
  {
    title: "성장률",
    value: "18.7%",
    change: "+2.1%",
    positive: true,
    icon: TrendingUp,
  },
]

export function DashboardExample() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="mt-1 flex items-center gap-1">
                <Badge
                  variant={stat.positive ? "default" : "destructive"}
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
                <span className="text-xs text-muted-foreground">전월 대비</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
