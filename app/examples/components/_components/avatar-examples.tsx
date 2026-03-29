"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
} from "@/components/ui/avatar"

// Avatar 및 AvatarGroup 예제
export function AvatarExamples() {
  return (
    <div className="space-y-6">
      {/* 사이즈 */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">사이즈 (Sizes)</p>
        <div className="flex items-center gap-4">
          <Avatar size="sm">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar size="default">
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* 이미지 + Fallback */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">이미지 & Fallback</p>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>홍길</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* 배지 */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">배지 (Badge)</p>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>온라인</AvatarFallback>
            <AvatarBadge className="bg-green-500" />
          </Avatar>
        </div>
      </div>

      {/* 그룹 */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">그룹 (Group)</p>
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>가</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>나</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>다</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+5</AvatarGroupCount>
        </AvatarGroup>
      </div>
    </div>
  )
}
