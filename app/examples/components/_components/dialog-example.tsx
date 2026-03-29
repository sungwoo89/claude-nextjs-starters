"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConfirmDialog } from "@/components/confirm-dialog"

// ConfirmDialog 인터랙티브 데모
export function DialogExample() {
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {/* 일반 확인 다이얼로그 */}
        <Button variant="outline" onClick={() => setConfirmOpen(true)}>
          확인 다이얼로그 열기
        </Button>

        {/* 파괴적 액션 다이얼로그 */}
        <Button variant="destructive" onClick={() => setDeleteOpen(true)}>
          <Trash2 />
          삭제 확인
        </Button>
      </div>

      {/* 일반 확인 */}
      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="변경사항을 저장하시겠습니까?"
        description="저장하지 않으면 변경사항이 사라집니다."
        confirmLabel="저장"
        cancelLabel="취소"
        onConfirm={() => toast.success("저장되었습니다.")}
      />

      {/* 삭제 확인 */}
      <ConfirmDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="정말로 삭제하시겠습니까?"
        description="이 작업은 되돌릴 수 없습니다. 데이터가 영구적으로 삭제됩니다."
        confirmLabel="삭제"
        cancelLabel="취소"
        variant="destructive"
        onConfirm={() => toast.error("삭제되었습니다.")}
      />
    </div>
  )
}
