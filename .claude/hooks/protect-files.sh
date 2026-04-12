#!/bin/bash
# PreToolUse (Write|Edit) — 보호 대상 파일 수정 시 사용자 확인 요청

INPUT=$(cat)

FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path')

# 경로 정규화 (Windows 백슬래시 → 슬래시)
NORM_PATH=$(echo "$FILE_PATH" | sed 's|\\|/|g')

# 보호 대상 파일 패턴 매칭
case "$NORM_PATH" in
  */package.json|*/package-lock.json)
    REASON="의존성 관리 파일입니다. 사용자 확인이 필요합니다." ;;
  */tsconfig.json|*/next.config.ts|*/eslint.config.mjs)
    REASON="프로젝트 설정 파일입니다. 사용자 확인이 필요합니다." ;;
  */components/ui/*)
    REASON="ShadcnUI 관리 컴포넌트입니다. 수정을 최소화해야 합니다." ;;
  */.env|*/.env.local|*/.env.*)
    REASON="환경 변수 파일입니다. 사용자 확인이 필요합니다." ;;
  *)
    exit 0 ;;
esac

# 사용자 확인 프롬프트 표시 (ask: 사용자가 허용/거부 선택 가능)
jq -n --arg reason "🔒 보호 대상: $(basename "$NORM_PATH"). $REASON" \
  '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"ask","permissionDecisionReason":$reason}}'

exit 0
