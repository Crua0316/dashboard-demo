import { reports } from '../data/mockData'

const typeColor: Record<string, string> = {
  Financiero: '#6366F1',
  Clientes:   '#22D3EE',
  Ventas:     '#10B981',
  Marketing:  '#F59E0B',
}

export default function ReportsPage() {
  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1 className="page-title">Reportes</h1>
          <p className="page-sub">Documentos generados automáticamente</p>
        </div>
        <div className="page-actions">
          <button className="btn-primary-sm">+ Generar reporte</button>
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
        {[
          { label: 'Reporte mensual', icon: '📅', color: '#6366F1', desc: 'Genera el reporte del mes actual' },
          { label: 'Análisis de ventas', icon: '📊', color: '#22D3EE', desc: 'Desglose detallado de ventas' },
          { label: 'Reporte de clientes', icon: '👥', color: '#A78BFA', desc: 'Actividad y segmentación' },
          { label: 'Flujo de caja', icon: '💸', color: '#10B981', desc: 'Ingresos y egresos del período' },
        ].map(a => (
          <button key={a.label} className="chart-card" style={{ textAlign: 'left', cursor: 'pointer', transition: 'all .15s', border: '1px solid var(--border)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = a.color)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: `${a.color}18`, color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', marginBottom: '.75rem' }}>{a.icon}</div>
            <div style={{ fontWeight: 700, fontSize: '.88rem', marginBottom: '.2rem' }}>{a.label}</div>
            <div style={{ fontSize: '.75rem', color: 'var(--fg-muted)' }}>{a.desc}</div>
          </button>
        ))}
      </div>

      {/* Recent reports */}
      <div className="chart-card">
        <div className="chart-header">
          <div><h3 className="chart-title">Reportes recientes</h3><p className="chart-sub">Última generación automática</p></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          {reports.map(r => (
            <div key={r.id} style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              padding: '.8rem 1rem', borderRadius: 8,
              background: 'var(--surface-2)',
              border: '1px solid transparent',
              transition: 'border-color .15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}>
              <span style={{ fontSize: '1.3rem' }}>{r.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: '.88rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.name}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--fg-muted)', marginTop: '.1rem' }}>{r.date} · {r.size}</div>
              </div>
              <span style={{ fontSize: '.72rem', fontWeight: 700, color: typeColor[r.type] || 'var(--fg-soft)', background: `${typeColor[r.type]}18`, padding: '.2rem .6rem', borderRadius: 20, whiteSpace: 'nowrap' }}>{r.type}</span>
              <button className="btn-outline" style={{ fontSize: '.72rem', padding: '.2rem .6rem', flexShrink: 0 }}>↓ Descargar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
