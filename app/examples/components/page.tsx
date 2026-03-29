import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
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
      <div className="space-y-12">
        {sections.map((section, index) => (
          <div key={section.id} id={section.id} className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="shrink-0 text-lg font-semibold">{section.title}</h2>
              <Separator className="flex-1" />
            </div>
            {section.component}
            {index < sections.length - 1 && <div className="pt-4" />}
          </div>
        ))}
      </div>
    </Section>
  )
}
