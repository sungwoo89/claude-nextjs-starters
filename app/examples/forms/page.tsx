import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { ExampleSectionList } from "@/components/layout/example-section-list"
import { BasicForm } from "./_components/basic-form"
import { LoginForm } from "./_components/login-form"
import { RegisterForm } from "./_components/register-form"
import { ServerActionForm } from "./_components/server-action-form"

export const metadata: Metadata = {
  title: "폼 예제",
  description: "react-hook-form + zod 기반 폼 패턴 예제입니다.",
}

const sections = [
  {
    id: "basic",
    title: "기본 폼 (react-hook-form + zod)",
    description: "useForm, zodResolver를 활용한 기본 폼 유효성 검사 패턴",
    component: <BasicForm />,
  },
  {
    id: "login",
    title: "로그인 폼",
    description: "이메일/비밀번호 + 소셜 로그인 구분선이 있는 인증 폼",
    component: <LoginForm />,
  },
  {
    id: "register",
    title: "회원가입 폼",
    description: "비밀번호 일치 검증 (zod .refine())을 포함한 회원가입 폼",
    component: <RegisterForm />,
  },
  {
    id: "server-action",
    title: "서버 액션 폼 (useActionState)",
    description: "React 19 useActionState + Next.js Server Action 조합 패턴",
    component: <ServerActionForm />,
  },
]

export default function FormsPage() {
  return (
    <Section>
      <PageHeader
        title="폼 예제"
        description="react-hook-form + zod 기반의 실무 폼 패턴 예제 모음입니다."
      />
      <ExampleSectionList sections={sections} />
    </Section>
  )
}
