import Image from "next/image"
import { CodeBlock } from "./code-block"
import { Badge } from "@/components/ui/badge"

const imageCode = `import Image from "next/image"

// 반응형 이미지 (layout fill)
<div className="relative aspect-video">
  <Image
    src="/hero.jpg"
    alt="히어로 이미지"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
    priority  // LCP 이미지에 사용
  />
</div>

// 고정 크기 이미지
<Image
  src="/avatar.png"
  alt="프로필"
  width={48}
  height={48}
  className="rounded-full"
  placeholder="blur"  // 로딩 중 블러 효과
/>`

export function ImageExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {[
            "자동 WebP/AVIF 변환",
            "지연 로딩 기본 적용",
            "CLS 방지 (크기 예약)",
            "반응형 srcset 자동 생성",
          ].map((feature) => (
            <Badge key={feature} variant="secondary">✓ {feature}</Badge>
          ))}
        </div>
        <CodeBlock code={imageCode} language="tsx" filename="컴포넌트.tsx" />
      </div>

      {/* 실제 next/image 데모 */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">데모: next/image (외부 URL)</h3>
        <div className="relative h-40 w-full overflow-hidden rounded-lg border">
          <Image
            src="https://picsum.photos/800/320"
            alt="데모 이미지"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          next/image는 자동으로 WebP로 변환하고 뷰포트에 맞는 크기로 최적화합니다.
          외부 URL을 사용하려면 next.config.ts에 도메인을 등록해야 합니다.
        </p>
      </div>
    </div>
  )
}
