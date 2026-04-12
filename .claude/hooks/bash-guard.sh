#!/bin/bash
# PreToolUse (Bash) — 위험 명령 차단

INPUT=$(cat)

COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

# heredoc 블록 제거 (커밋 메시지 등 오탐 방지)
# <<로 시작하는 줄부터 대문자만으로 이루어진 종료 마커 줄까지 제거
CLEAN_COMMAND=$(awk '
  /<</ { in_here=1; next }
  in_here && /^[A-Z_]+$/ { in_here=0; next }
  in_here { next }
  { print }
' <<< "$COMMAND")

# 위험 패턴 매칭
REASON=""
case "$CLEAN_COMMAND" in
  *"rm -rf"*)
    REASON="rm -rf 명령은 사용자 확인이 필요합니다" ;;
  *"git push --force"*|*"git push -f "*)
    REASON="강제 푸시는 사용자 확인이 필요합니다" ;;
  *"git reset --hard"*)
    REASON="git reset --hard는 사용자 확인이 필요합니다" ;;
  *"npm publish"*)
    REASON="npm publish는 사용자 확인이 필요합니다" ;;
  *"npx shadcn"*)
    REASON="ShadcnUI CLI 실행은 사용자 확인이 필요합니다" ;;
esac

if [ -n "$REASON" ]; then
  jq -n --arg reason "⛔ $REASON" \
    '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":$reason}}'
fi

exit 0
