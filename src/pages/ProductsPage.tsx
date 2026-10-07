import { useState } from 'react'
import { products } from '../data/mockData'

export default function ProductsPage() {
  const [search, setSearch] = useState('')

  const visible = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const totalRevenue = products.reduce((a, p) => a + p.revenue, 0)

  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1 className="page-title">Productos</h1>
          <p className="page-sub">Catálogo de planes y complementos</p>
        </div>
        <div className="page-actions">
          <button className="btn-ghost-sm">+ Nuevo producto</button>
        </div>
      </div>

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
        {[
          { label: 'Productos activos', value: products.filter(p=>p.status==='Activo').length, color: '#6366F1', icon: '🛍️' },
          { label: 'Ventas totales', value: products.reduce((a,p)=>a+p.sales,0), color: '#22D3EE', icon: '📦' },
          { label: 'Revenue generado', value: `$${totalRevenue.toLocaleString()}`, color: '#10B981', icon: '💰' },
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

      {/* Search */}
      <div className="chart-card" style={{ padding: '1rem 1.4rem' }}>
        <div className="search-box" style={{ background: 'var(--surface-2)', maxWidth: 320 }}>
          <span>🔍</span>
          <input placeholder="Buscar producto..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: 260 }} />
        </div>
      </div>

      {/* Table */}
      <div className="chart-card table-card">
        <div className="table-wrap">
          <table className="tx-table">
            <thead>
              <tr><th>Producto</th><th>Precio</th><th>Período</th><th>Usuarios</th><th>Ventas</th><th>Revenue</th><th>Estado</th><th></th></tr>
            </thead>
            <tbody>
              {visible.map(p => (
                <tr key={p.id}>
                  <td style={{ fontWeight: 600 }}>{p.name}</td>
                  <td className="tx-amount">${p.price.toLocaleString()}</td>
                  <td style={{ color: 'var(--fg-soft)', fontSize: '.8rem' }}>/{p.period}</td>
                  <td style={{ color: 'var(--fg-soft)' }}>{p.users}</td>
                  <td style={{ fontWeight: 600 }}>{p.sales}</td>
                  <td className="tx-amount">${p.revenue.toLocaleString()}</td>
                  <td>
                    <span className="tx-status" style={p.status === 'Activo'
                      ? { background: 'rgba(16,185,129,.12)', color: '#10B981' }
                      : { background: 'rgba(245,158,11,.12)', color: '#F59E0B' }}>
                      {p.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn-outline" style={{ fontSize: '.72rem', padding: '.2rem .55rem' }}>Editar</button>
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
