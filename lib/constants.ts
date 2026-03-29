// 사이트 기본 설정
export const siteConfig = {
  name: "Starter Kit",
  description: "Next.js 16 모던 웹 스타터킷",
  url: "https://example.com",
} as const

// 네비게이션 링크
export const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/examples", label: "예제" },
  { href: "/contact", label: "연락처" },
] as const

export type NavLink = (typeof navLinks)[number]
