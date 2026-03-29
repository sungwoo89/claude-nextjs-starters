"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info, Settings, Trash2, Download, Share2 } from "lucide-react"

// Tooltip 방향별 및 아이콘 버튼 데모
export function TooltipExample() {
  return (
    <div className="space-y-6">
      {/* 아이콘 버튼 + 툴팁 */}
      <div className="flex flex-wrap gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Settings />
            </Button>
          </TooltipTrigger>
          <TooltipContent>설정</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Trash2 />
            </Button>
          </TooltipTrigger>
          <TooltipContent>삭제</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Download />
            </Button>
          </TooltipTrigger>
          <TooltipContent>다운로드</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Share2 />
            </Button>
          </TooltipTrigger>
          <TooltipContent>공유</TooltipContent>
        </Tooltip>
      </div>

      {/* 방향별 툴팁 */}
      <div className="flex flex-wrap gap-3">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="secondary" size="sm">
                <Info className="mr-1 size-3" />
                {side}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              {side} 방향 툴팁
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
