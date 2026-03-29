"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// 기본 검증 스키마
const schema = z.object({
  username: z
    .string()
    .min(3, "사용자명은 3자 이상이어야 합니다.")
    .max(20, "사용자명은 20자 이하여야 합니다."),
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
})

type FormData = z.infer<typeof schema>

export function BasicForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    toast.success(`${data.username}님, 제출되었습니다!`)
    reset()
  }

  return (
    <div className="max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="space-y-2">
          <Label htmlFor="username">사용자명</Label>
          <Input
            id="username"
            placeholder="3~20자"
            aria-invalid={!!errors.username}
            {...register("username")}
          />
          {errors.username && (
            <p className="text-sm text-destructive">{errors.username.message}</p>
          )}
        </div>
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
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "제출 중..." : "제출"}
        </Button>
      </form>
    </div>
  )
}
