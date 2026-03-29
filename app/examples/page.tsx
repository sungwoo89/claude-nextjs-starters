import type { Metadata } from "next"
import Link from "next/link"
import {
  Component, ClipboardList, LayoutTemplate, Puzzle,
  Database, Zap, Layers, ArrowRight
} from "lucide-react"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "예제 모음",
  description: "스타터킷에서 사용 가능한 UI 패턴과 기능 예제 모음입니다.",
}

// 7개 카테고리 정의
const categories = [
  {
    href: "/examples/components",
    icon: Component,
    title: "컴포넌트 쇼케이스",
    description: "ShadcnUI 컴포넌트별 사용 예시와 변형을 확인합니다.",
    count: 10,
    tags: ["Button", "Card", "Dialog", "Sheet"],
  },
  {
    href: "/examples/forms",
    icon: ClipboardList,
    title: "폼 예제",
    description: "react-hook-form + zod 기반 폼 패턴과 서버 액션 연동.",
    count: 4,
    tags: ["react-hook-form", "zod", "Server Action"],
  },
  {
    href: "/examples/layouts",
    icon: LayoutTemplate,
    title: "레이아웃 예제",
    description: "반응형 그리드, 사이드바, 대시보드 레이아웃 패턴.",
    count: 5,
    tags: ["Grid", "Sidebar", "Dashboard"],
  },
  {
    href: "/examples/hooks",
    icon: Puzzle,
    title: "usehooks-ts 예제",
    description: "usehooks-ts 라이브러리의 유틸리티 훅 활용법.",
    count: 10,
    tags: ["useLocalStorage", "useDebounce", "useMediaQuery"],
  },
  {
    href: "/examples/data-fetching",
    icon: Database,
    title: "데이터 페칭",
    description: "Next.js 16 서버 컴포넌트, Suspense 스트리밍, Route Handler.",
    count: 5,
    tags: ["Server Component", "Suspense", "Server Action"],
  },
  {
    href: "/examples/optimization",
    icon: Zap,
    title: "설정 및 최적화",
    description: "SEO 메타데이터, 이미지·폰트 최적화, 동적 임포트.",
    count: 5,
    tags: ["SEO", "next/image", "next/dynamic"],
  },
  {
    href: "/examples/patterns",
    icon: Layers,
    title: "실무 UI 패턴",
    description: "여러 컴포넌트를 조합한 실무에서 자주 쓰이는 UI 패턴.",
    count: 5,
    tags: ["CRUD", "Search", "Profile"],
  },
]

export default function ExamplesPage() {
  return (
    <Section>
      <PageHeader
        title="예제 모음"
        description="스타터킷에서 바로 활용할 수 있는 UI 패턴과 기능 예제 모음입니다."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link key={category.href} href={category.href} className="group block">
              <Card className="h-full transition-colors hover:border-foreground/30">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="rounded-md bg-muted p-2">
                        <Icon className="size-4 text-foreground" />
                      </div>
                      <CardTitle className="text-base">{category.title}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      {category.count}개
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-sm leading-relaxed">
                    {category.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {category.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    <span>예제 보기</span>
                    <ArrowRight className="size-3" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </Section>
  )
}
