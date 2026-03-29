// 동적 임포트 예제를 위한 모의 차트 컴포넌트
// 실제 앱에서는 recharts, chart.js 등 무거운 라이브러리 사용

export function HeavyChartMock() {
  const data = [40, 65, 55, 80, 70, 90, 75]
  const max = Math.max(...data)

  return (
    <div className="rounded-lg border p-4 space-y-2">
      <p className="text-sm font-medium text-muted-foreground">주간 방문자 수 (모의 차트)</p>
      <div className="flex items-end gap-1 h-24">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex-1 bg-primary rounded-t-sm transition-all duration-500"
            style={{ height: `${(value / max) * 100}%` }}
            title={`${value}명`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
          <span key={day} className="flex-1 text-center">{day}</span>
        ))}
      </div>
    </div>
  )
}
