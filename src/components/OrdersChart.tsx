import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell
} from 'recharts'
import { ordersData } from '../data/mockData'

export default function OrdersChart() {
  const max = Math.max(...ordersData.map(d => d.orders))
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Órdenes por Mes</h3>
          <p className="chart-sub">Volumen acumulado</p>
        </div>
        <div className="chart-badge" style={{ background: 'rgba(167,139,250,.12)', color: '#A78BFA' }}>2026</div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={ordersData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }} barSize={14}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.05)" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            formatter={(v: number) => [v, 'Órdenes']}
            contentStyle={{ background: '#1A1D2E', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, color: '#F1F5F9' }}
            cursor={{ fill: 'rgba(255,255,255,.04)' }}
          />
          <Bar dataKey="orders" radius={[6, 6, 0, 0]}>
            {ordersData.map((entry, i) => (
              <Cell
                key={i}
                fill={entry.orders === max ? '#6366F1' : 'rgba(99,102,241,.35)'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
