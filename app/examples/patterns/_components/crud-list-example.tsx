"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Plus, Trash2, Pencil, MoreVertical, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ConfirmDialog } from "@/components/confirm-dialog"

type Status = "대기" | "진행중" | "완료"
type Item = { id: number; title: string; status: Status }

const STATUS_VARIANTS: Record<Status, "outline" | "secondary" | "default"> = {
  대기: "outline",
  진행중: "secondary",
  완료: "default",
}

export function CrudListExample() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, title: "UI 컴포넌트 설계", status: "완료" },
    { id: 2, title: "API 연동", status: "진행중" },
    { id: 3, title: "테스트 작성", status: "대기" },
  ])
  const [newTitle, setNewTitle] = useState("")
  const [editId, setEditId] = useState<number | null>(null)
  const [editTitle, setEditTitle] = useState("")
  const [deleteId, setDeleteId] = useState<number | null>(null)

  const handleAdd = () => {
    const trimmed = newTitle.trim()
    if (!trimmed) return
    setItems((prev) => [...prev, { id: Date.now(), title: trimmed, status: "대기" }])
    setNewTitle("")
    toast.success("항목이 추가되었습니다.")
  }

  const handleEditStart = (item: Item) => {
    setEditId(item.id)
    setEditTitle(item.title)
  }

  const handleEditSave = () => {
    if (!editTitle.trim() || editId === null) return
    setItems((prev) =>
      prev.map((item) => (item.id === editId ? { ...item, title: editTitle.trim() } : item))
    )
    setEditId(null)
    toast.success("수정되었습니다.")
  }

  const handleDelete = () => {
    setItems((prev) => prev.filter((item) => item.id !== deleteId))
    setDeleteId(null)
    toast.error("항목이 삭제되었습니다.")
  }

  const cycleStatus = (id: number) => {
    const cycle: Status[] = ["대기", "진행중", "완료"]
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: cycle[(cycle.indexOf(item.status) + 1) % cycle.length] }
          : item
      )
    )
  }

  return (
    <Card className="max-w-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">프로젝트 작업</CardTitle>
          <Badge variant="secondary">{items.length}개</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* 항목 목록 */}
        <div className="space-y-2">
          {items.length === 0 && (
            <p className="py-4 text-center text-sm text-muted-foreground">
              작업 항목이 없습니다.
            </p>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-2 rounded-md border px-3 py-2">
              {editId === item.id ? (
                <>
                  <Input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="h-7 flex-1 text-sm"
                    onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
                    autoFocus
                  />
                  <Button variant="ghost" size="icon" className="size-7" onClick={handleEditSave}>
                    <Check className="size-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-7" onClick={() => setEditId(null)}>
                    <X className="size-3" />
                  </Button>
                </>
              ) : (
                <>
                  <span
                    className="flex-1 cursor-pointer text-sm"
                    onClick={() => cycleStatus(item.id)}
                  >
                    {item.title}
                  </span>
                  <Badge
                    variant={STATUS_VARIANTS[item.status]}
                    className="cursor-pointer text-xs"
                    onClick={() => cycleStatus(item.id)}
                  >
                    {item.status}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="size-7">
                        <MoreVertical className="size-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEditStart(item)}>
                        <Pencil className="mr-2 size-3" /> 수정
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        variant="destructive"
                        onClick={() => setDeleteId(item.id)}
                      >
                        <Trash2 className="mr-2 size-3" /> 삭제
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
            </div>
          ))}
        </div>

        {/* 추가 폼 */}
        <div className="flex gap-2">
          <Input
            placeholder="새 작업 입력..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            className="flex-1"
          />
          <Button size="icon" onClick={handleAdd} disabled={!newTitle.trim()}>
            <Plus className="size-4" />
          </Button>
        </div>
      </CardContent>

      {/* 삭제 확인 다이얼로그 */}
      <ConfirmDialog
        open={deleteId !== null}
        onOpenChange={(open) => !open && setDeleteId(null)}
        title="항목을 삭제하시겠습니까?"
        description="삭제된 항목은 복구할 수 없습니다."
        confirmLabel="삭제"
        cancelLabel="취소"
        variant="destructive"
        onConfirm={handleDelete}
      />
    </Card>
  )
}
