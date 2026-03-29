import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { ExampleSectionList } from "@/components/layout/example-section-list"
import { LocalStorageExample } from "./_components/local-storage-example"
import { DebounceExample } from "./_components/debounce-example"
import { ClipboardExample } from "./_components/clipboard-example"
import { WindowSizeExample } from "./_components/window-size-example"
import { MediaQueryExample } from "./_components/media-query-example"
import { IntersectionExample } from "./_components/intersection-example"
import { HoverExample } from "./_components/hover-example"
import { CounterExample } from "./_components/counter-example"
import { ToggleExample } from "./_components/toggle-example"
import { CountdownExample } from "./_components/countdown-example"

export const metadata: Metadata = {
  title: "usehooks-ts 예제",
  description: "usehooks-ts 라이브러리 유틸리티 훅 활용 예제입니다.",
}

const sections = [
  {
    id: "local-storage",
    title: "useLocalStorage",
    description: "브라우저 로컬 스토리지와 동기화되는 React 상태",
    component: <LocalStorageExample />,
  },
  {
    id: "debounce",
    title: "useDebounceValue",
    description: "입력값 변경을 지연시켜 불필요한 API 호출 방지",
    component: <DebounceExample />,
  },
  {
    id: "clipboard",
    title: "useCopyToClipboard",
    description: "클립보드 복사 기능 + 시각적 피드백",
    component: <ClipboardExample />,
  },
  {
    id: "window-size",
    title: "useWindowSize",
    description: "뷰포트 크기 실시간 추적 및 브레이크포인트 감지",
    component: <WindowSizeExample />,
  },
  {
    id: "media-query",
    title: "useMediaQuery",
    description: "CSS 미디어 쿼리 결과를 React 상태로 추적",
    component: <MediaQueryExample />,
  },
  {
    id: "intersection",
    title: "useIntersectionObserver",
    description: "요소의 뷰포트 진입/이탈 감지 — 스크롤 애니메이션",
    component: <IntersectionExample />,
  },
  {
    id: "hover",
    title: "useHover",
    description: "마우스 호버 상태를 ref 기반으로 추적",
    component: <HoverExample />,
  },
  {
    id: "counter",
    title: "useCounter",
    description: "증가/감소/리셋 기능이 있는 카운터 (최소/최대값 설정 가능)",
    component: <CounterExample />,
  },
  {
    id: "toggle",
    title: "useBoolean",
    description: "setTrue/setFalse/toggle 메서드가 있는 boolean 상태",
    component: <ToggleExample />,
  },
  {
    id: "countdown",
    title: "useCountdown",
    description: "시작/정지/리셋이 가능한 카운트다운 타이머",
    component: <CountdownExample />,
  },
]

export default function HooksPage() {
  return (
    <Section>
      <PageHeader
        title="usehooks-ts 예제"
        description="usehooks-ts v3 라이브러리의 유틸리티 훅 활용 예제 모음입니다."
      />
      <ExampleSectionList sections={sections} titleClassName="font-mono" />
    </Section>
  )
}
