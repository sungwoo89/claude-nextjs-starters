import { z } from "zod"

// 연락처 폼 유효성 검사 스키마
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "이름은 2자 이상이어야 합니다."),
  email: z
    .string()
    .email("올바른 이메일 주소를 입력해 주세요."),
  message: z
    .string()
    .min(10, "메시지는 10자 이상이어야 합니다.")
    .max(500, "메시지는 500자 이하여야 합니다."),
})

export type ContactFormData = z.infer<typeof contactSchema>
