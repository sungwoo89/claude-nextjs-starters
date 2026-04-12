#!/bin/bash
# Claude Code Hook → Slack 알림 스크립트
# 이벤트: Notification(permission_prompt), Stop

INPUT=$(cat)

# JSON 파싱 (jq 사용)
EVENT=$(echo "$INPUT" | jq -r '.hook_event_name')
CWD=$(echo "$INPUT" | jq -r '.cwd')
PROJECT=$(basename "$CWD")
TITLE=$(echo "$INPUT" | jq -r '.title // empty')
MESSAGE=$(echo "$INPUT" | jq -r '.message // empty')

# 프로젝트 .claude/.env에서 SLACK_WEBHOOK_URL 로드
ENV_FILE="$CLAUDE_PROJECT_DIR/.claude/.env"
if [ -f "$ENV_FILE" ]; then
  # shellcheck disable=SC1090
  source "$ENV_FILE"
fi

# Webhook URL 미설정 시 조용히 종료
if [ -z "$SLACK_WEBHOOK_URL" ]; then
  exit 0
fi

# Stop 이벤트: 트랜스크립트에서 첫 번째 사용자 요청 메시지 추출
FIRST_USER_MSG=""
if [ "$EVENT" = "Stop" ]; then
  TRANSCRIPT_PATH=$(echo "$INPUT" | jq -r '.transcript_path // empty')
  if [ -n "$TRANSCRIPT_PATH" ] && [ -f "$TRANSCRIPT_PATH" ]; then
    # 첫 번째 user 메시지에서 문자열 content만 추출 (tool_result 배열 제외)
    FIRST_USER_MSG=$(jq -r 'select(.type == "user") | .message.content | if type == "string" then . else empty end' "$TRANSCRIPT_PATH" 2>/dev/null | head -1)
  fi
fi

# 이벤트별 메시지 구성
case "$EVENT" in
  Notification)
    MSG="🔔 *[$PROJECT]* ${TITLE:-권한 요청}\n> ${MESSAGE:-Claude Code가 권한을 요청하고 있습니다}"
    ;;
  Stop)
    if [ -n "$FIRST_USER_MSG" ]; then
      # 200자 초과 시 말줄임표 처리
      TRUNCATED="${FIRST_USER_MSG:0:200}"
      [ ${#FIRST_USER_MSG} -gt 200 ] && TRUNCATED="${TRUNCATED}..."
      MSG="✅ *[$PROJECT]* 작업 완료\n> ${TRUNCATED}"
    else
      MSG="✅ Claude Code 작업이 완료되었습니다 [$PROJECT]"
    fi
    ;;
  *)
    exit 0
    ;;
esac

# Slack 웹훅 호출 (jq로 JSON 생성 → UTF-8 인코딩 및 특수문자 이스케이프 자동 처리)
TMPFILE=$(mktemp)
trap 'rm -f "$TMPFILE"' EXIT
jq -n --arg text "$(printf "$MSG")" '{"text": $text}' > "$TMPFILE"
curl -s -o /dev/null -X POST "$SLACK_WEBHOOK_URL" \
  -H 'Content-type: application/json; charset=utf-8' \
  -d @"$TMPFILE" 2>/dev/null

exit 0
