// 사이트 기본 설정
// 배포 시 NEXT_PUBLIC_SITE_URL 환경변수를 설정하세요 (예: https://your-domain.com)
export const siteConfig = {
  name: "Starter Kit",
  description: "Next.js 16 모던 웹 스타터킷",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
}

// 네비게이션 링크
export const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/examples", label: "예제" },
  { href: "/contact", label: "연락처" },
] as const

export type NavLink = (typeof navLinks)[number]
