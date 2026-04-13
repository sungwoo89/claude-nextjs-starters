"use client"

import { useCopyToClipboard } from "usehooks-ts"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

// useCopyToClipboard: 클립보드 복사 기능
const CODE_SNIPPETS = [
  { label: "npm 설치", code: "npm install usehooks-ts" },
  { label: "임포트", code: 'import { useCopyToClipboard } from "usehooks-ts"' },
  { label: "API 키", code: "sk-1234567890abcdef" },
]

export function ClipboardExample() {
  const [, copy] = useCopyToClipboard()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (text: string, index: number) => {
    const success = await copy(text)
    if (success) {
      setCopiedIndex(index)
      toast.success("클립보드에 복사되었습니다!")
      setTimeout(() => setCopiedIndex(null), 2000)
    }
  }

  return (
    <div className="max-w-sm space-y-2">
      {CODE_SNIPPETS.map((snippet, index) => (
        <div
          key={snippet.label}
          className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2"
        >
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">{snippet.label}</p>
            <code className="block truncate text-sm">{snippet.code}</code>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 shrink-0"
            onClick={() => handleCopy(snippet.code, index)}
          >
            {copiedIndex === index ? (
              <Check className="size-4 text-green-500" />
            ) : (
              <Copy className="size-4" />
            )}
          </Button>
        </div>
      ))}
    </div>
  )
}
