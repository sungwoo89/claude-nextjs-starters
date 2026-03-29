import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "연락처",
  description: "궁금한 점이 있으시면 언제든지 연락해 주세요.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
