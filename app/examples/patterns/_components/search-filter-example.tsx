"use client"

import { useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type Role = "전체" | "Frontend" | "Backend" | "Designer" | "PM"

const MEMBERS = [
  { id: 1, name: "김개발", role: "Frontend" as const, skills: ["React", "TypeScript"] },
  { id: 2, name: "이백엔드", role: "Backend" as const, skills: ["Node.js", "PostgreSQL"] },
  { id: 3, name: "박디자인", role: "Designer" as const, skills: ["Figma", "Tailwind"] },
  { id: 4, name: "최프론트", role: "Frontend" as const, skills: ["Next.js", "Vue"] },
  { id: 5, name: "정기획", role: "PM" as const, skills: ["Jira", "Notion"] },
  { id: 6, name: "강풀스택", role: "Backend" as const, skills: ["Go", "Docker"] },
]

const ROLES: Role[] = ["전체", "Frontend", "Backend", "Designer", "PM"]

export function SearchFilterExample() {
  const [query, setQuery] = useState("")
  const [debouncedQuery] = useDebounceValue(query, 200)
  const [activeRole, setActiveRole] = useState<Role>("전체")

  const filtered = MEMBERS.filter((member) => {
    const matchesQuery =
      debouncedQuery === "" ||
      member.name.includes(debouncedQuery) ||
      member.skills.some((s) => s.toLowerCase().includes(debouncedQuery.toLowerCase()))
    const matchesRole = activeRole === "전체" || member.role === activeRole
    return matchesQuery && matchesRole
  })

  return (
    <div className="max-w-lg space-y-4">
      {/* 검색 입력 */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="이름, 기술 스택 검색..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9 pr-9"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 size-7 -translate-y-1/2"
            onClick={() => setQuery("")}
          >
            <X className="size-3" />
          </Button>
        )}
      </div>

      {/* 역할 필터 배지 */}
      <div className="flex flex-wrap gap-2">
        {ROLES.map((role) => (
          <Badge
            key={role}
            variant={activeRole === role ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setActiveRole(role)}
          >
            {role}
          </Badge>
        ))}
      </div>

      {/* 결과 */}
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">
          {filtered.length}명 표시
        </p>
        {filtered.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">
            검색 결과가 없습니다.
          </p>
        ) : (
          filtered.map((member) => (
            <Card key={member.id}>
              <CardContent className="flex items-center justify-between py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
                    {member.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <div className="flex gap-1">
                      {member.skills.map((skill) => (
                        <span key={skill} className="text-xs text-muted-foreground">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">{member.role}</Badge>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
