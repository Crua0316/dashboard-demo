import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { revenueData } from '../data/mockData'

const fmt = (v: number) => `$${(v / 1000).toFixed(0)}k`

export default function RevenueChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Ingresos vs Objetivo</h3>
          <p className="chart-sub">Últimos 12 meses</p>
        </div>
        <div className="chart-badge">Anual</div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={revenueData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="gRev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#6366F1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gTgt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#22D3EE" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#22D3EE" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.05)" />
          <XAxis dataKey="month" tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={fmt} tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            formatter={(v: number) => [`$${v.toLocaleString()}`, '']}
            contentStyle={{ background: '#1A1D2E', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, color: '#F1F5F9' }}
            labelStyle={{ color: '#94A3B8' }}
          />
          <Legend wrapperStyle={{ fontSize: 12, color: '#94A3B8' }} />
          <Area type="monotone" dataKey="revenue" name="Ingresos" stroke="#6366F1" strokeWidth={2.5} fill="url(#gRev)" dot={false} />
          <Area type="monotone" dataKey="target"  name="Objetivo" stroke="#22D3EE" strokeWidth={1.5} strokeDasharray="5 4" fill="url(#gTgt)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
