import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { ExampleSectionList } from "@/components/layout/example-section-list"
import { CrudListExample } from "./_components/crud-list-example"
import { ProfileCardExample } from "./_components/profile-card-example"
import { ToastExample } from "./_components/toast-example"
import { SearchFilterExample } from "./_components/search-filter-example"
import { SettingsPanelExample } from "./_components/settings-panel-example"

export const metadata: Metadata = {
  title: "실무 UI 패턴",
  description: "여러 컴포넌트를 조합한 실무 UI 패턴 예제입니다.",
}

const sections = [
  {
    id: "crud",
    title: "CRUD 목록",
    description: "항목 추가/수정/삭제 + DropdownMenu + 확인 다이얼로그",
    component: <CrudListExample />,
  },
  {
    id: "profile",
    title: "프로필 카드",
    description: "Avatar + Badge + Sheet(편집 패널) + Tooltip 조합",
    component: <ProfileCardExample />,
  },
  {
    id: "toast",
    title: "알림/토스트 패턴",
    description: "성공, 에러, 정보, 경고, 액션 포함, 로딩→완료, 커스텀 toast",
    component: <ToastExample />,
  },
  {
    id: "search",
    title: "검색 + 필터",
    description: "검색바 + 배지 필터 + useDebounceValue + 결과 카드",
    component: <SearchFilterExample />,
  },
  {
    id: "settings",
    title: "설정 토글 패널",
    description: "토글 스위치 + Label + Separator + 저장 버튼",
    component: <SettingsPanelExample />,
  },
]

export default function PatternsPage() {
  return (
    <Section>
      <PageHeader
        title="실무 UI 패턴"
        description="여러 컴포넌트를 조합하여 실무에서 자주 쓰이는 UI 패턴 예제 모음입니다."
      />
      <ExampleSectionList sections={sections} />
    </Section>
  )
}
