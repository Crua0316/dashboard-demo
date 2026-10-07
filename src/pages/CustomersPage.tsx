import { useState } from 'react'
import { customers } from '../data/mockData'

const planColor: Record<string, string> = {
  Enterprise: '#6366F1',
  Pro:        '#22D3EE',
  Starter:    '#10B981',
}

export default function CustomersPage() {
  const [search, setSearch] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('Todos')

  const visible = customers.filter(c => {
    const matchPlan = selectedPlan === 'Todos' || c.plan === selectedPlan
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
                        c.email.toLowerCase().includes(search.toLowerCase())
    return matchPlan && matchSearch
  })

  const total  = customers.length
  const active = customers.filter(c => c.status === 'Activo').length
  const totalRevenue = customers.reduce((acc, c) => acc + c.spent, 0)

  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1 className="page-title">Clientes</h1>
          <p className="page-sub">{total} clientes registrados</p>
        </div>
        <div className="page-actions">
          <button className="btn-ghost-sm">↓ Exportar</button>
          <button className="btn-primary-sm">+ Agregar cliente</button>
        </div>
      </div>

      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
        {[
          { label: 'Total clientes', value: total,                              icon: '👥', color: '#6366F1' },
          { label: 'Clientes activos', value: active,                           icon: '✅', color: '#10B981' },
          { label: 'Revenue total', value: `$${totalRevenue.toLocaleString()}`, icon: '💰', color: '#22D3EE' },
        ].map(s => (
          <div key={s.label} className="chart-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.4rem' }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.color}18`, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '.78rem', color: 'var(--fg-muted)', marginTop: '.2rem' }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="chart-card" style={{ padding: '1rem 1.4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '.75rem' }}>
          <div style={{ display: 'flex', gap: '.4rem' }}>
            {['Todos', 'Enterprise', 'Pro', 'Starter'].map(p => (
              <button key={p} onClick={() => setSelectedPlan(p)} style={{
                padding: '.3rem .75rem', borderRadius: 20, fontSize: '.78rem', fontWeight: 600,
                border: '1px solid', cursor: 'pointer', transition: 'all .15s',
                borderColor: selectedPlan === p ? 'var(--accent)' : 'var(--border)',
                background: selectedPlan === p ? 'rgba(99,102,241,.14)' : 'transparent',
                color: selectedPlan === p ? 'var(--accent)' : 'var(--fg-soft)',
              }}>{p}</button>
            ))}
          </div>
          <div className="search-box" style={{ background: 'var(--surface-2)' }}>
            <span>🔍</span>
            <input placeholder="Buscar cliente..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: 180 }} />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="chart-card table-card">
        <div className="table-wrap">
          <table className="tx-table">
            <thead>
              <tr><th>Cliente</th><th>Plan</th><th>Órdenes</th><th>Total gastado</th><th>Miembro desde</th><th>Estado</th></tr>
            </thead>
            <tbody>
              {visible.map(c => (
                <tr key={c.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                      <div className="tx-avatar">{c.name.charAt(0)}</div>
                      <div>
                        <div style={{ fontWeight: 600 }}>{c.name}</div>
                        <div style={{ fontSize: '.72rem', color: 'var(--fg-muted)' }}>{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span style={{ fontSize: '.75rem', fontWeight: 700, color: planColor[c.plan] || 'var(--fg)', background: `${planColor[c.plan]}18`, padding: '.2rem .6rem', borderRadius: 20 }}>{c.plan}</span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{c.orders}</td>
                  <td className="tx-amount">{c.spent > 0 ? `$${c.spent.toLocaleString()}` : '—'}</td>
                  <td className="tx-date">{c.joined}</td>
                  <td>
                    <span className="tx-status" style={c.status === 'Activo'
                      ? { background: 'rgba(16,185,129,.12)', color: '#10B981' }
                      : { background: 'rgba(100,116,139,.12)', color: '#94A3B8' }}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
