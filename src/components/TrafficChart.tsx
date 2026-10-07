import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { trafficData } from '../data/mockData'

export default function TrafficChart() {
  return (
    <div className="chart-card traffic-card">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Fuentes de Tráfico</h3>
          <p className="chart-sub">Distribución del mes</p>
        </div>
      </div>
      <div className="traffic-inner">
        <ResponsiveContainer width={160} height={160}>
          <PieChart>
            <Pie
              data={trafficData}
              cx="50%"
              cy="50%"
              innerRadius={52}
              outerRadius={72}
              paddingAngle={3}
              dataKey="value"
            >
              {trafficData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(v: number) => [`${v}%`, '']}
              contentStyle={{ background: '#1A1D2E', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, color: '#F1F5F9' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="traffic-legend">
          {trafficData.map(item => (
            <div key={item.name} className="tl-row">
              <span className="tl-dot" style={{ background: item.color }} />
              <span className="tl-name">{item.name}</span>
              <span className="tl-val">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
