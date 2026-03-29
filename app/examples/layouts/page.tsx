import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { GridExample } from "./_components/grid-example"
import { SidebarExample } from "./_components/sidebar-example"
import { DashboardExample } from "./_components/dashboard-example"
import { EmptyStateExample } from "./_components/empty-state-example"
import { HeroExample } from "./_components/hero-example"

export const metadata: Metadata = {
  title: "레이아웃 예제",
  description: "Tailwind CSS 기반 반응형 레이아웃 패턴 예제입니다.",
}

const sections = [
  {
    id: "grid",
    title: "반응형 그리드",
    description: "화면 크기에 따라 열 수가 자동 조정되는 그리드 레이아웃",
    component: <GridExample />,
  },
  {
    id: "sidebar",
    title: "사이드바 레이아웃",
    description: "좌측 내비게이션 + 우측 콘텐츠 영역 (모바일에서 사이드바 숨김)",
    component: <SidebarExample />,
  },
  {
    id: "dashboard",
    title: "대시보드 통계 카드",
    description: "KPI 지표를 표시하는 대시보드 카드 그리드",
    component: <DashboardExample />,
  },
  {
    id: "empty",
    title: "빈 상태 (Empty State)",
    description: "데이터가 없을 때 표시하는 UI 패턴",
    component: <EmptyStateExample />,
  },
  {
    id: "hero",
    title: "히어로 섹션",
    description: "랜딩 페이지에서 사용하는 히어로 섹션 변형",
    component: <HeroExample />,
  },
]

export default function LayoutsPage() {
  return (
    <Section>
      <PageHeader
        title="레이아웃 예제"
        description="Tailwind CSS 기반의 반응형 레이아웃 패턴 예제 모음입니다."
      />
      <div className="space-y-12">
        {sections.map((section, index) => (
          <div key={section.id} id={section.id} className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <h2 className="text-lg font-semibold">{section.title}</h2>
                {section.description && (
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                )}
              </div>
              <Separator className="hidden flex-1 md:block" />
            </div>
            {section.component}
            {index < sections.length - 1 && <div className="pt-4" />}
          </div>
        ))}
      </div>
    </Section>
  )
}
