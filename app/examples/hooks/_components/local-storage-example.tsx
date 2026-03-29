"use client"

import { useLocalStorage } from "usehooks-ts"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

// useLocalStorage: 브라우저 로컬 스토리지와 동기화되는 상태
const COLOR_OPTIONS = ["파란색", "초록색", "빨간색", "보라색", "주황색"] as const
type ColorOption = (typeof COLOR_OPTIONS)[number]

const COLOR_MAP: Record<ColorOption, string> = {
  파란색: "bg-blue-500",
  초록색: "bg-green-500",
  빨간색: "bg-red-500",
  보라색: "bg-purple-500",
  주황색: "bg-orange-500",
}

export function LocalStorageExample() {
  const [favoriteColor, setFavoriteColor, removeFavoriteColor] =
    useLocalStorage<ColorOption>("favorite-color", "파란색")

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className={`size-8 rounded-full ${COLOR_MAP[favoriteColor]}`} />
        <div>
          <Label>선택된 색상</Label>
          <p className="text-sm text-muted-foreground">
            로컬 스토리지에 저장됨 (새로고침해도 유지)
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {COLOR_OPTIONS.map((color) => (
          <Button
            key={color}
            variant={favoriteColor === color ? "default" : "outline"}
            size="sm"
            onClick={() => setFavoriteColor(color)}
          >
            {color}
          </Button>
        ))}
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="text-destructive hover:text-destructive"
        onClick={removeFavoriteColor}
      >
        저장 값 삭제
      </Button>
      <p className="text-xs text-muted-foreground">
        키: <Badge variant="outline" className="font-mono text-xs">favorite-color</Badge>
        &nbsp;값: <Badge variant="outline" className="font-mono text-xs">{favoriteColor}</Badge>
      </p>
    </div>
  )
}
