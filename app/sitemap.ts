import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/constants"

// SEO sitemap.xml 자동 생성
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/examples",
    "/examples/components",
    "/examples/forms",
    "/examples/layouts",
    "/examples/hooks",
    "/examples/data-fetching",
    "/examples/optimization",
    "/examples/patterns",
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))
}
