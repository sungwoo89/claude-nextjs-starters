"use client"

import { Settings, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"

// Sheet 우측 패널 + 하단 패널 데모
export function SheetExample() {
  return (
    <div className="flex flex-wrap gap-3">
      {/* 우측 패널 */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Settings />
            우측 패널 열기
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>설정</SheetTitle>
            <SheetDescription>
              여기에 설정 내용이 들어갑니다. Sheet 컴포넌트의 우측 패널 예시입니다.
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 p-4">
            <p className="text-sm text-muted-foreground">
              Sheet는 화면 가장자리에서 슬라이드로 나타나는 패널입니다. 설정, 필터, 상세 정보 등에 활용합니다.
            </p>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline" className="w-full">닫기</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* 하단 패널 */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
            하단 패널 열기
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>메뉴</SheetTitle>
            <SheetDescription>모바일 하단 드로어 패턴 예시입니다.</SheetDescription>
          </SheetHeader>
          <div className="p-4 grid grid-cols-3 gap-2">
            {["공유", "복사", "편집", "삭제", "다운로드", "설정"].map((item) => (
              <Button key={item} variant="ghost" className="h-14 flex-col gap-1 text-sm">
                {item}
              </Button>
            ))}
          </div>
          <SheetFooter className="pb-safe">
            <SheetClose asChild>
              <Button variant="outline" className="w-full">취소</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
