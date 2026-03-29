import { type ReactNode } from "react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export type ExampleSection = {
  id: string
  title: string
  description?: string
  component: ReactNode
}

interface ExampleSectionListProps {
  sections: ExampleSection[]
  /** 섹션 제목 추가 클래스 (예: hooks 페이지의 "font-mono") */
  titleClassName?: string
  /** true이면 모바일에서도 Separator를 항상 표시 (기본: 데스크톱만 표시) */
  alwaysShowSeparator?: boolean
}

export function ExampleSectionList({
  sections,
  titleClassName,
  alwaysShowSeparator = false,
}: ExampleSectionListProps) {
  return (
    <div className="space-y-12">
      {sections.map((section, index) => (
        <div key={section.id} id={section.id} className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="shrink-0">
              <h2 className={cn("text-lg font-semibold", titleClassName)}>
                {section.title}
              </h2>
              {section.description && (
                <p className="text-sm text-muted-foreground">{section.description}</p>
              )}
            </div>
            <Separator
              className={cn("flex-1", !alwaysShowSeparator && "hidden md:block")}
            />
          </div>
          {section.component}
          {index < sections.length - 1 && <div className="pt-4" />}
        </div>
      ))}
    </div>
  )
}
