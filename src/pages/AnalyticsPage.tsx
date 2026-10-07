import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, Cell
} from 'recharts'
import { revenueData, ordersData, trafficData } from '../data/mockData'

const deviceData = [
  { name: 'Desktop', value: 54, color: '#6366F1' },
  { name: 'Mobile',  value: 35, color: '#22D3EE' },
  { name: 'Tablet',  value: 11, color: '#A78BFA' },
]

const retentionData = [
  { week: 'Sem 1', ret: 100 },
  { week: 'Sem 2', ret: 72 },
  { week: 'Sem 3', ret: 58 },
  { week: 'Sem 4', ret: 49 },
  { week: 'Sem 5', ret: 44 },
  { week: 'Sem 6', ret: 41 },
  { week: 'Sem 7', ret: 39 },
  { week: 'Sem 8', ret: 37 },
]

const ttStyle = { background: '#1A1D2E', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, color: '#F1F5F9' }

export default function AnalyticsPage() {
  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1 className="page-title">Analíticas</h1>
          <p className="page-sub">Métricas detalladas de rendimiento</p>
        </div>
        <div className="page-actions">
          <button className="btn-ghost-sm">📅 Últimos 90 días</button>
          <button className="btn-primary-sm">↓ Exportar</button>
        </div>
      </div>

      {/* Stat row */}
      <div className="an-stats">
        {[
          { label: 'Sesiones totales', value: '128,430', change: '+14%', up: true },
          { label: 'Tiempo promedio', value: '4m 22s',   change: '+6%',  up: true },
          { label: 'Tasa de rebote',  value: '38.2%',    change: '-3%',  up: true },
          { label: 'Páginas/sesión',  value: '3.8',      change: '+0.4', up: true },
        ].map(s => (
          <div key={s.label} className="an-stat">
            <div className="an-stat-val">{s.value}</div>
            <div className="an-stat-lbl">{s.label}</div>
            <span className={`kpi-change ${s.up ? 'up' : 'down'}`} style={{ marginTop: '.4rem', display: 'inline-block' }}>
              {s.up ? '▲' : '▼'} {s.change}
            </span>
          </div>
        ))}
      </div>

      <div className="an-grid">
        {/* Revenue line */}
        <div className="chart-card an-wide">
          <div className="chart-header">
            <div><h3 className="chart-title">Ingresos mensuales</h3><p className="chart-sub">Tendencia anual</p></div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={revenueData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.05)" />
              <XAxis dataKey="month" tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={v => `$${(v/1000).toFixed(0)}k`} tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`]} contentStyle={ttStyle} labelStyle={{ color: '#94A3B8' }} />
              <Legend wrapperStyle={{ fontSize: 12, color: '#94A3B8' }} />
              <Line type="monotone" dataKey="revenue" name="Ingresos" stroke="#6366F1" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="target"  name="Objetivo" stroke="#22D3EE" strokeWidth={1.5} strokeDasharray="5 4" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Device split */}
        <div className="chart-card">
          <div className="chart-header">
            <div><h3 className="chart-title">Dispositivos</h3><p className="chart-sub">Sesiones por tipo</p></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '.5rem' }}>
            {deviceData.map(d => (
              <div key={d.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.82rem', marginBottom: '.3rem' }}>
                  <span style={{ color: 'var(--fg-soft)' }}>{d.name}</span>
                  <span style={{ fontWeight: 700 }}>{d.value}%</span>
                </div>
                <div style={{ height: 6, background: 'var(--surface-2)', borderRadius: 6 }}>
                  <div style={{ height: '100%', width: `${d.value}%`, background: d.color, borderRadius: 6, transition: 'width .6s' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orders bar */}
        <div className="chart-card">
          <div className="chart-header">
            <div><h3 className="chart-title">Órdenes mensuales</h3><p className="chart-sub">Volumen 2026</p></div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={ordersData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }} barSize={10}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.05)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: '#64748B', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#64748B', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip formatter={(v: number) => [v, 'Órdenes']} contentStyle={ttStyle} cursor={{ fill: 'rgba(255,255,255,.04)' }} />
              <Bar dataKey="orders" radius={[4, 4, 0, 0]}>
                {ordersData.map((_, i) => <Cell key={i} fill={i === ordersData.length - 1 ? '#6366F1' : 'rgba(99,102,241,.35)'} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Retention */}
        <div className="chart-card">
          <div className="chart-header">
            <div><h3 className="chart-title">Retención de usuarios</h3><p className="chart-sub">Cohorte semanal</p></div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={retentionData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.05)" />
              <XAxis dataKey="week" tick={{ fill: '#64748B', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={v => `${v}%`} tick={{ fill: '#64748B', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip formatter={(v: number) => [`${v}%`, 'Retención']} contentStyle={ttStyle} />
              <Line type="monotone" dataKey="ret" stroke="#10B981" strokeWidth={2.5} dot={{ fill: '#10B981', r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic sources */}
        <div className="chart-card an-wide">
          <div className="chart-header">
            <div><h3 className="chart-title">Fuentes de tráfico</h3><p className="chart-sub">Distribución de sesiones</p></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1rem' }}>
            {trafficData.map(t => (
              <div key={t.name} style={{ textAlign: 'center', padding: '1rem', background: 'var(--surface-2)', borderRadius: 10 }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: t.color }}>{t.value}%</div>
                <div style={{ fontSize: '.75rem', color: 'var(--fg-soft)', marginTop: '.25rem' }}>{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
