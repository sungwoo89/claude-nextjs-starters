"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Info, AlertTriangle, Loader2 } from "lucide-react"

export function ToastExample() {
  const showSuccess = () => toast.success("작업이 완료되었습니다!")
  const showError = () => toast.error("오류가 발생했습니다.")
  const showInfo = () => toast.info("새로운 업데이트가 있습니다.")
  const showWarning = () => toast.warning("저장하지 않은 변경사항이 있습니다.")
  const showAction = () =>
    toast("파일이 삭제되었습니다.", {
      action: {
        label: "실행 취소",
        onClick: () => toast.success("복구되었습니다."),
      },
    })
  const showLoading = () => {
    const id = toast.loading("처리 중...")
    setTimeout(() => toast.success("완료!", { id }), 2000)
  }
  const showCustom = () =>
    toast.custom(() => (
      <div className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-md">
        <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
          <CheckCircle className="size-4 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <p className="text-sm font-medium">배포가 완료되었습니다</p>
          <p className="text-xs text-muted-foreground">v1.2.3 → 프로덕션</p>
        </div>
      </div>
    ))

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" onClick={showSuccess}>
        <CheckCircle className="mr-1 size-3 text-green-500" /> 성공
      </Button>
      <Button variant="outline" size="sm" onClick={showError}>
        <XCircle className="mr-1 size-3 text-red-500" /> 에러
      </Button>
      <Button variant="outline" size="sm" onClick={showInfo}>
        <Info className="mr-1 size-3 text-blue-500" /> 정보
      </Button>
      <Button variant="outline" size="sm" onClick={showWarning}>
        <AlertTriangle className="mr-1 size-3 text-yellow-500" /> 경고
      </Button>
      <Button variant="outline" size="sm" onClick={showAction}>
        실행 취소 포함
      </Button>
      <Button variant="outline" size="sm" onClick={showLoading}>
        <Loader2 className="mr-1 size-3" /> 로딩 → 완료
      </Button>
      <Button variant="outline" size="sm" onClick={showCustom}>
        커스텀 toast
      </Button>
    </div>
  )
}
