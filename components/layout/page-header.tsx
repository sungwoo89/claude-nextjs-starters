import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

// 페이지 상단 제목 및 설명 컴포넌트
export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-3 pb-8", className)}>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
