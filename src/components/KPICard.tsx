interface KPICardProps {
  label: string
  value: string
  change: string
  positive: boolean
  sub: string
  icon: string
  color: string
}

export default function KPICard({ label, value, change, positive, sub, icon, color }: KPICardProps) {
  return (
    <div className="kpi-card">
      <div className="kpi-top">
        <div className="kpi-icon" style={{ background: `${color}18`, color }}>{icon}</div>
        <span className={`kpi-change ${positive ? 'up' : 'down'}`}>
          {positive ? '▲' : '▼'} {change}
        </span>
      </div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-label">{label}</div>
      <div className="kpi-sub">{sub}</div>
      <div className="kpi-bar" style={{ '--kpi-color': color } as React.CSSProperties}>
        <div className="kpi-bar-fill" />
      </div>
    </div>
  )
}
