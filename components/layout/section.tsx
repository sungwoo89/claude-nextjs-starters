import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/container"

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
}

// 일관된 수직 패딩과 컨테이너를 가진 섹션 래퍼
export function Section({ children, className, containerClassName, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
