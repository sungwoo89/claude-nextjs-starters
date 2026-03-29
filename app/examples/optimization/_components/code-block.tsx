"use client"

import { useState } from "react"
import { useCopyToClipboard } from "usehooks-ts"
import { toast } from "sonner"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  className?: string
}

// 코드 스니펫을 모노스페이스로 표시하고 복사 기능 제공
export function CodeBlock({ code, language = "ts", filename, className }: CodeBlockProps) {
  const [, copy] = useCopyToClipboard()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const success = await copy(code)
    if (success) {
      setCopied(true)
      toast.success("코드가 복사되었습니다!")
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className={cn("relative rounded-lg border bg-muted/50", className)}>
      {/* 헤더 */}
      {(filename || language) && (
        <div className="flex items-center justify-between border-b px-4 py-2">
          {filename ? (
            <span className="font-mono text-xs text-muted-foreground">{filename}</span>
          ) : (
            <Badge variant="outline" className="font-mono text-xs">{language}</Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="size-7"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="size-3 text-green-500" />
            ) : (
              <Copy className="size-3" />
            )}
          </Button>
        </div>
      )}
      {/* 코드 내용 */}
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm leading-relaxed">{code}</code>
      </pre>
    </div>
  )
}
