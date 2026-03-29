import Link from "next/link"
import {
  Zap, Shield, Palette, ArrowRight, Layout, FileCode2,
  Puzzle, Database, Search, Moon, Smartphone, CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/layout/section"

// 핵심 기능 카드
const features = [
  {
    icon: Zap,
    title: "빠른 성능",
    description:
      "Next.js 16 App Router와 Turbopack 기반으로 빠른 개발 경험과 최적화된 프로덕션 빌드를 제공합니다.",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description:
      "TypeScript strict 모드로 런타임 오류를 사전에 방지하고 안전한 코드를 작성할 수 있습니다.",
  },
  {
    icon: Palette,
    title: "아름다운 UI",
    description:
      "ShadcnUI + Tailwind CSS v4로 접근성을 갖춘 세련된 컴포넌트를 바로 사용할 수 있습니다.",
  },
]

// 세부 기능 목록
const featureList = [
  { icon: Layout, title: "반응형 레이아웃", desc: "헤더, 푸터, 모바일 내비게이션 완비" },
  { icon: Moon, title: "다크 모드", desc: "next-themes 기반 라이트/다크/시스템 테마" },
  { icon: FileCode2, title: "폼 유효성 검사", desc: "react-hook-form + zod 스키마 검증" },
  { icon: Puzzle, title: "유틸리티 훅", desc: "usehooks-ts 33개 훅 즉시 사용 가능" },
  { icon: Database, title: "데이터 페칭 패턴", desc: "서버 컴포넌트, Suspense, Server Action" },
  { icon: Search, title: "SEO 최적화", desc: "metadata API, robots.txt, sitemap.xml 자동 생성" },
  { icon: Smartphone, title: "모바일 우선 설계", desc: "모든 레이아웃이 모바일에서도 완벽 동작" },
  { icon: CheckCircle2, title: "접근성 기본 적용", desc: "ARIA 속성, 키보드 탐색, 색상 대비 준수" },
]

// 기술 스택 배지 목록
const techStack = [
  "Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4",
  "ShadcnUI", "react-hook-form", "zod", "usehooks-ts",
]

export default function HomePage() {
  return (
    <>
      {/* Hero 섹션 */}
      <Section className="py-24 md:py-36">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* 기술 스택 배지 */}
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* 메인 타이틀 */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            모던 웹 개발을 위한{" "}
            <span className="text-muted-foreground">스타터킷</span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            검증된 기술 스택으로 빠르게 프로젝트를 시작하세요. 반응형 레이아웃,
            다크모드, 접근성을 기본으로 제공합니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/examples">
                예제 보기 <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">소개 보기</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Features 카드 섹션 */}
      <Section className="bg-muted/30">
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">핵심 기술</h2>
            <p className="mt-3 text-muted-foreground">
              프로덕션 수준의 웹 앱을 위한 모든 것이 준비되어 있습니다.
            </p>
          </div>

          {/* 피처 카드 그리드 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="mb-2 size-8 text-muted-foreground" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 주요 기능 목록 섹션 */}
      <Section>
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">주요 기능</h2>
            <p className="mt-3 text-muted-foreground">
              반복적인 초기 설정 없이 바로 개발을 시작할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureList.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg border bg-card p-4"
                >
                  <div className="mt-0.5 rounded-md bg-muted p-2 shrink-0">
                    <Icon className="size-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* CTA 섹션 */}
      <Section className="bg-muted/30">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">지금 바로 시작하세요</h2>
          <p className="max-w-md text-muted-foreground">
            이미 필요한 모든 것이 설정되어 있습니다. 바로 아이디어를 현실로 만들어보세요.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/examples">
                예제 살펴보기 <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
