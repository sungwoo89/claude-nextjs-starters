"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { contactSchema, type ContactFormData } from "@/lib/validations/contact"

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  // 폼 제출 핸들러 (백엔드 연동 시 이 부분을 교체하세요)
  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800))

    toast.success("메시지가 전송되었습니다!", {
      description: "빠른 시일 내에 답변 드리겠습니다.",
    })

    reset()
  }

  return (
    <Section>
      <PageHeader
        title="연락처"
        description="궁금한 점이 있으시면 언제든지 연락해 주세요."
      />

      <div className="mx-auto max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>메시지 보내기</CardTitle>
            <CardDescription>모든 항목을 작성해 주세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              {/* 이름 */}
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  placeholder="홍길동"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* 이메일 */}
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* 메시지 */}
              <div className="space-y-2">
                <Label htmlFor="message">메시지</Label>
                <Textarea
                  id="message"
                  placeholder="메시지를 입력해 주세요... (10~500자)"
                  rows={5}
                  aria-invalid={!!errors.message}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "전송 중..."
                ) : (
                  <>
                    <Send className="mr-2 size-4" />
                    보내기
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
