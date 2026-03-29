"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Settings, MapPin, Link2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

type Profile = {
  name: string
  username: string
  bio: string
  location: string
  website: string
}

export function ProfileCardExample() {
  const [profile, setProfile] = useState<Profile>({
    name: "ysw",
    username: "sw",
    bio: "풀스택 개발자. Next.js와 TypeScript를 좋아합니다.",
    location: "서울, 대한민국",
    website: "https://example.com",
  })
  const [editProfile, setEditProfile] = useState<Profile>(profile)

  const handleSave = () => {
    setProfile(editProfile)
    toast.success("프로필이 업데이트되었습니다.")
  }

  return (
    <Card className="max-w-sm overflow-hidden">
      {/* 커버 이미지 영역 */}
      <div className="h-20 bg-linear-to-r from-blue-500 to-purple-600" />

      <CardContent className="space-y-4 pt-0">
        {/* 아바타 + 편집 버튼 */}
        <div className="-mt-10 flex items-end justify-between">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative cursor-pointer">
                <Avatar className="size-16 ring-4 ring-background">
                  <AvatarImage src="https://avatar.vercel.sh/sw" />
                  <AvatarFallback className="text-lg">Y</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full bg-green-500 ring-2 ring-background" />
              </div>
            </TooltipTrigger>
            <TooltipContent>온라인</TooltipContent>
          </Tooltip>

          {/* 프로필 편집 Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setEditProfile(profile)}>
                <Settings className="mr-1 size-3" />
                편집
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>프로필 편집</SheetTitle>
                <SheetDescription>프로필 정보를 수정합니다.</SheetDescription>
              </SheetHeader>
              <div className="flex-1 space-y-4 p-4">
                <div className="space-y-2">
                  <Label>이름</Label>
                  <Input
                    value={editProfile.name}
                    onChange={(e) => setEditProfile((p) => ({ ...p, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>소개</Label>
                  <Textarea
                    value={editProfile.bio}
                    onChange={(e) => setEditProfile((p) => ({ ...p, bio: e.target.value }))}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>위치</Label>
                  <Input
                    value={editProfile.location}
                    onChange={(e) => setEditProfile((p) => ({ ...p, location: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>웹사이트</Label>
                  <Input
                    value={editProfile.website}
                    onChange={(e) => setEditProfile((p) => ({ ...p, website: e.target.value }))}
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button className="w-full" onClick={handleSave}>
                    저장
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* 프로필 정보 */}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold">{profile.name}</h3>
            <Badge variant="secondary" className="text-xs">개발자</Badge>
          </div>
          <p className="text-sm text-muted-foreground">@{profile.username}</p>
        </div>

        <p className="text-sm">{profile.bio}</p>

        <Separator />

        <div className="space-y-1.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="size-3.5" />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Link2 className="size-3.5" />
            <span className="text-foreground">{profile.website}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="size-3.5" />
            <span>2024년 1월 가입</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
