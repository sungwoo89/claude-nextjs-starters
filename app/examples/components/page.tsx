import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { ExampleSectionList } from "@/components/layout/example-section-list"
import { ButtonExamples } from "./_components/button-examples"
import { BadgeExamples } from "./_components/badge-examples"
import { CardExamples } from "./_components/card-examples"
import { AvatarExamples } from "./_components/avatar-examples"
import { SkeletonExamples } from "./_components/skeleton-examples"
import { DialogExample } from "./_components/dialog-example"
import { DropdownExample } from "./_components/dropdown-example"
import { SheetExample } from "./_components/sheet-example"
import { TooltipExample } from "./_components/tooltip-example"
import { InputTextareaExample } from "./_components/input-textarea-example"

export const metadata: Metadata = {
  title: "컴포넌트 쇼케이스",
  description: "ShadcnUI 컴포넌트별 사용 예시입니다.",
}

// 컴포넌트 섹션 정의
const sections = [
  { id: "button", title: "버튼 (Button)", component: <ButtonExamples /> },
  { id: "badge", title: "배지 (Badge)", component: <BadgeExamples /> },
  { id: "card", title: "카드 (Card)", component: <CardExamples /> },
  { id: "avatar", title: "아바타 (Avatar)", component: <AvatarExamples /> },
  { id: "skeleton", title: "스켈레톤 (Skeleton)", component: <SkeletonExamples /> },
  { id: "dialog", title: "다이얼로그 (Dialog)", component: <DialogExample /> },
  { id: "dropdown", title: "드롭다운 메뉴 (Dropdown Menu)", component: <DropdownExample /> },
  { id: "sheet", title: "시트 (Sheet)", component: <SheetExample /> },
  { id: "tooltip", title: "툴팁 (Tooltip)", component: <TooltipExample /> },
  { id: "input-textarea", title: "입력 필드 (Input & Textarea)", component: <InputTextareaExample /> },
]

export default function ComponentsPage() {
  return (
    <Section>
      <PageHeader
        title="컴포넌트 쇼케이스"
        description="설치된 ShadcnUI 컴포넌트들의 실제 사용 예시입니다."
      />
      <ExampleSectionList sections={sections} alwaysShowSeparator />
    </Section>
  )
}
