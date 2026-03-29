import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/constants"

// SEO robots.txt 자동 생성
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
