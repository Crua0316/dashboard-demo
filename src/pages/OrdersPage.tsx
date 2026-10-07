import { useState } from 'react'
import { allOrders } from '../data/mockData'

const statusStyle: Record<string, React.CSSProperties> = {
  'Completado': { background: 'rgba(16,185,129,.12)',  color: '#10B981' },
  'Pendiente':  { background: 'rgba(245,158,11,.12)',  color: '#F59E0B' },
  'Fallido':    { background: 'rgba(239,68,68,.12)',   color: '#EF4444' },
  'Reembolso':  { background: 'rgba(99,102,241,.12)',  color: '#6366F1' },
}

const FILTERS = ['Todos', 'Completado', 'Pendiente', 'Fallido', 'Reembolso']

export default function OrdersPage() {
  const [filter, setFilter] = useState('Todos')
  const [search, setSearch] = useState('')

  const visible = allOrders.filter(o => {
    const matchFilter = filter === 'Todos' || o.status === filter
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) ||
                        o.id.toLowerCase().includes(search.toLowerCase()) ||
                        o.product.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  })

  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1 className="page-title">Órdenes</h1>
          <p className="page-sub">{allOrders.length} transacciones registradas</p>
        </div>
        <div className="page-actions">
          <button className="btn-ghost-sm">↓ Exportar CSV</button>
          <button className="btn-primary-sm">+ Nueva orden</button>
        </div>
      </div>

      <div className="chart-card" style={{ padding: '1rem 1.4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '.75rem' }}>
          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '.3rem .75rem',
                  borderRadius: 20,
                  fontSize: '.78rem',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: filter === f ? 'var(--accent)' : 'var(--border)',
                  background: filter === f ? 'rgba(99,102,241,.14)' : 'transparent',
                  color: filter === f ? 'var(--accent)' : 'var(--fg-soft)',
                  cursor: 'pointer',
                  transition: 'all .15s',
                }}
              >{f}</button>
            ))}
          </div>
          {/* Search */}
          <div className="search-box" style={{ background: 'var(--surface-2)' }}>
            <span>🔍</span>
            <input
              placeholder="Buscar orden, cliente..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: 200 }}
            />
          </div>
        </div>
      </div>

      <div className="chart-card table-card">
        <div className="table-wrap">
          <table className="tx-table">
            <thead>
              <tr>
                <th>ID</th><th>Cliente</th><th>Producto</th>
                <th>Método</th><th>Monto</th><th>Estado</th><th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 ? (
                <tr><td colSpan={7} style={{ textAlign: 'center', padding: '2rem', color: 'var(--fg-muted)' }}>Sin resultados</td></tr>
              ) : visible.map(o => (
                <tr key={o.id}>
                  <td className="tx-id">{o.id}</td>
                  <td className="tx-customer">
                    <div className="tx-avatar">{o.customer.charAt(0)}</div>
                    {o.customer}
                  </td>
                  <td className="tx-product">{o.product}</td>
                  <td style={{ color: 'var(--fg-soft)', fontSize: '.8rem' }}>{o.method}</td>
                  <td className="tx-amount">${o.amount.toLocaleString()}</td>
                  <td><span className="tx-status" style={statusStyle[o.status]}>{o.status}</span></td>
                  <td className="tx-date">{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.75rem 0 0', fontSize: '.78rem', color: 'var(--fg-muted)' }}>
          <span>Mostrando {visible.length} de {allOrders.length} órdenes</span>
          <div style={{ display: 'flex', gap: '.4rem' }}>
            <button className="btn-ghost-sm" style={{ padding: '.2rem .6rem', fontSize: '.78rem' }}>‹ Anterior</button>
            <button className="btn-ghost-sm" style={{ padding: '.2rem .6rem', fontSize: '.78rem', background: 'rgba(99,102,241,.14)', borderColor: 'var(--accent)', color: 'var(--accent)' }}>1</button>
            <button className="btn-ghost-sm" style={{ padding: '.2rem .6rem', fontSize: '.78rem' }}>Siguiente ›</button>
          </div>
        </div>
      </div>
    </div>
  )
}
