import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"

export const metadata: Metadata = {
  title: "소개",
  description: "Next.js 16 모던 웹 스타터킷 소개 페이지입니다.",
}

// 기술 스택 목록
const techStack = [
  { category: "프레임워크", items: ["Next.js 16", "React 19"] },
  { category: "언어", items: ["TypeScript 5"] },
  { category: "스타일링", items: ["Tailwind CSS v4", "ShadcnUI v4"] },
  { category: "폼 처리", items: ["react-hook-form", "zod", "@hookform/resolvers"] },
  { category: "유틸리티", items: ["usehooks-ts", "sonner", "next-themes", "lucide-react"] },
]

// 포함된 기능 체크리스트
const includedFeatures = [
  "헤더 / 푸터 / 모바일 내비게이션",
  "다크 모드 (라이트 / 다크 / 시스템)",
  "활성 링크 강조 표시",
  "404 / 에러 / 로딩 페이지",
  "연락처 폼 (react-hook-form + zod)",
  "스크롤 투 탑 버튼",
  "토스트 알림 (sonner)",
  "SEO: metadata API, robots.txt, sitemap.xml",
  "ShadcnUI 컴포넌트 14종 설치 완료",
  "카테고리별 예제 페이지 (7개 카테고리)",
]

// 설계 철학
const principles = [
  {
    title: "바퀴를 재발명하지 않는다",
    desc: "커스텀 구현보다 검증된 라이브러리를 우선 활용하여 유지보수성을 높입니다.",
  },
  {
    title: "서버 컴포넌트 우선",
    desc: "필요한 곳에만 'use client'를 사용해 번들 크기를 최소화합니다.",
  },
  {
    title: "타입 안전성 확보",
    desc: "TypeScript strict 모드로 런타임 오류를 사전에 방지합니다.",
  },
  {
    title: "모바일 퍼스트",
    desc: "모든 컴포넌트와 레이아웃이 모바일 환경에서도 완벽하게 동작합니다.",
  },
  {
    title: "접근성 기본 준수",
    desc: "ARIA 속성, 키보드 탐색, 색상 대비를 기본으로 적용합니다.",
  },
  {
    title: "최소한의 복잡성",
    desc: "필요한 것만 추가하고, 불필요한 추상화와 설정을 제거합니다.",
  },
]

export default function AboutPage() {
  return (
    <Section>
      <PageHeader
        title="스타터킷 소개"
        description="Next.js 16 기반의 모던 웹 개발 스타터킷입니다."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* 메인 콘텐츠 */}
        <div className="space-y-8 lg:col-span-2">

          {/* 소개 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">이 스타터킷은 무엇인가요?</h2>
            <p className="leading-7 text-muted-foreground">
              현대 웹 개발에서 반복되는 초기 설정 작업을 최소화하고, 바로 핵심 기능
              개발에 집중할 수 있도록 설계된 Next.js 16 기반의 범용 스타터킷입니다.
            </p>
            <p className="leading-7 text-muted-foreground">
              다크모드, 반응형 레이아웃, 접근성을 기본으로 갖추고 있으며,
              ShadcnUI의 검증된 컴포넌트와 인기 라이브러리를 조합하여
              실무에서 바로 활용 가능한 패턴을 제공합니다.
            </p>
          </div>

          <Separator />

          {/* 포함된 기능 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">포함된 기능</h2>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-foreground" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* 설계 철학 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">설계 철학</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.title} className="rounded-lg border bg-muted/30 p-4">
                  <p className="mb-1 text-sm font-semibold">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 예제 링크 */}
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/examples">
                예제 보기 <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>
        </div>

        {/* 사이드바 */}
        <div className="space-y-4">
          {/* 기술 스택 카드 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">기술 스택</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {techStack.map((group) => (
                <div key={group.category} className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 빠른 시작 카드 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">빠른 시작</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { step: "1", text: "저장소 클론" },
                { step: "2", text: "npm install 실행" },
                { step: "3", text: "npm run dev 시작" },
                { step: "4", text: "바로 개발 시작!" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                    {item.step}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}
