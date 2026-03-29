"use server"

import { z } from "zod"

// 서버 액션 결과 타입
export type ActionState = {
  success: boolean
  message: string
}

// 간단한 문의 서버 액션
const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다."),
  email: z.string().email("올바른 이메일 주소를 입력해 주세요."),
  message: z.string().min(10, "메시지는 10자 이상이어야 합니다."),
})

export async function submitContactAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // 실제 처리 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 800))

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  }

  const result = contactSchema.safeParse(rawData)

  if (!result.success) {
    const firstError = result.error.issues[0]
    return { success: false, message: firstError.message }
  }

  // 실제 서비스에서는 DB 저장, 이메일 발송 등 처리
  return {
    success: true,
    message: `${result.data.name}님, 문의가 접수되었습니다!`,
  }
}
