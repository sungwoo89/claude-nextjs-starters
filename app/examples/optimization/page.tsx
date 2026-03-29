import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { ExampleSectionList } from "@/components/layout/example-section-list"
import { SeoExample } from "./_components/seo-example"
import { ImageExample } from "./_components/image-example"
import { FontExample } from "./_components/font-example"
import { DynamicImportExample } from "./_components/dynamic-import-example"
import { EnvExample } from "./_components/env-example"

export const metadata: Metadata = {
  title: "설정 및 최적화",
  description: "Next.js SEO, 이미지, 폰트, 동적 임포트, 환경 변수 설정 가이드입니다.",
}

const sections = [
  {
    id: "seo",
    title: "SEO 메타데이터",
    description: "metadata 객체, generateMetadata, robots.ts, sitemap.ts 패턴",
    component: <SeoExample />,
  },
  {
    id: "image",
    title: "이미지 최적화 (next/image)",
    description: "자동 WebP 변환, 지연 로딩, 반응형 srcset, CLS 방지",
    component: <ImageExample />,
  },
  {
    id: "font",
    title: "폰트 최적화 (next/font)",
    description: "폰트 자체 호스팅, Zero layout shift, CSS 변수 연동",
    component: <FontExample />,
  },
  {
    id: "dynamic",
    title: "동적 임포트 (next/dynamic)",
    description: "무거운 컴포넌트 지연 로딩 — SSR 비활성화, 커스텀 로딩 UI",
    component: <DynamicImportExample />,
  },
  {
    id: "env",
    title: "환경 변수",
    description: "NEXT_PUBLIC_ 접두사 규칙, .env 파일 우선순위, zod 검증",
    component: <EnvExample />,
  },
]

export default function OptimizationPage() {
  return (
    <Section>
      <PageHeader
        title="설정 및 최적화"
        description="Next.js 16의 성능 최적화 기능과 설정 가이드 모음입니다."
      />
      <ExampleSectionList sections={sections} />
    </Section>
  )
}
